#!/usr/bin/env node

const fs = require('node:fs');
const http = require('node:http');
const os = require('node:os');
const path = require('node:path');
const { spawn } = require('node:child_process');

const rootDir = path.resolve(__dirname, '..');
const htmlPath = path.join(rootDir, 'incoming', '华强北报告 2', 'index.html');
const outputDir = path.join(rootDir, 'articles', 'huaqiangbei-report-2', 'screenshots');
const outputs = [
  {
    index: 0,
    name: 'ai_bajun_batch_table.png',
    label: 'AI八骏批次表',
  },
  {
    index: 1,
    name: 'social_comparison_table.png',
    label: '三极产品路径对比表',
  },
];

const chromeCandidates = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
].filter(Boolean);

function findChrome() {
  const chromePath = chromeCandidates.find((candidate) => fs.existsSync(candidate));
  if (!chromePath) {
    throw new Error('未找到 Chrome 或 Edge。可设置 CHROME_PATH=/path/to/browser 后重试。');
  }
  return chromePath;
}

function requestJson(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        let body = '';
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
          body += chunk;
        });
        res.on('end', () => {
          if (res.statusCode < 200 || res.statusCode >= 300) {
            reject(new Error(`HTTP ${res.statusCode}: ${body}`));
            return;
          }
          try {
            resolve(JSON.parse(body));
          } catch (err) {
            reject(err);
          }
        });
      })
      .on('error', reject);
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForPageEndpoint(port) {
  const deadline = Date.now() + 10000;
  while (Date.now() < deadline) {
    try {
      const targets = await requestJson(`http://127.0.0.1:${port}/json/list`);
      const page = targets.find((target) => target.type === 'page' && target.webSocketDebuggerUrl);
      if (page) return page.webSocketDebuggerUrl;
    } catch (_) {
      // Chrome may need a moment before the debugging endpoint is available.
    }
    await sleep(100);
  }
  throw new Error('等待 Chrome DevTools 页面端点超时。');
}

function connectCdp(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let id = 0;
  const callbacks = new Map();

  ws.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    if (!message.id) return;
    const callback = callbacks.get(message.id);
    if (!callback) return;
    callbacks.delete(message.id);
    if (message.error) {
      callback.reject(new Error(`${message.error.message}: ${message.error.data || ''}`));
    } else {
      callback.resolve(message.result || {});
    }
  });

  const opened = new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true });
    ws.addEventListener('error', reject, { once: true });
  });

  return {
    async send(method, params = {}) {
      await opened;
      const messageId = ++id;
      ws.send(JSON.stringify({ id: messageId, method, params }));
      return new Promise((resolve, reject) => {
        callbacks.set(messageId, { resolve, reject });
      });
    },
    close() {
      ws.close();
    },
  };
}

async function captureBoard(cdp, boardIndex, outputPath) {
  const expression = `
    (async () => {
      const boards = Array.from(document.querySelectorAll('.apple-comparison-board'));
      const el = boards[${boardIndex}];
      if (!el) throw new Error('找不到第 ${boardIndex + 1} 个 .apple-comparison-board');
      el.scrollIntoView({ block: 'center', inline: 'center' });
      await new Promise((resolve) => setTimeout(resolve, 250));
      const rect = el.getBoundingClientRect();
      return {
        x: rect.left + window.scrollX,
        y: rect.top + window.scrollY,
        width: rect.width,
        height: rect.height
      };
    })()
  `;
  const evaluated = await cdp.send('Runtime.evaluate', {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  const rect = evaluated.result.value;
  const screenshot = await cdp.send('Page.captureScreenshot', {
    format: 'png',
    fromSurface: true,
    captureBeyondViewport: true,
    clip: {
      x: Math.max(0, rect.x),
      y: Math.max(0, rect.y),
      width: Math.ceil(rect.width),
      height: Math.ceil(rect.height),
      scale: 1,
    },
  });
  fs.writeFileSync(outputPath, Buffer.from(screenshot.data, 'base64'));
}

async function main() {
  if (!fs.existsSync(htmlPath)) {
    throw new Error(`找不到 HTML 文件：${htmlPath}`);
  }

  fs.mkdirSync(outputDir, { recursive: true });

  const chrome = findChrome();
  const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'hqb-table-shot-'));
  const fileUrl = `file://${htmlPath}`;
  const chromeArgs = [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--no-first-run',
    '--no-default-browser-check',
    '--remote-debugging-port=0',
    `--user-data-dir=${userDataDir}`,
    '--window-size=1280,1400',
    '--force-device-scale-factor=2',
    fileUrl,
  ];

  let port;
  const chromeProcess = spawn(chrome, chromeArgs, {
    stdio: ['ignore', 'ignore', 'pipe'],
  });

  chromeProcess.stderr.setEncoding('utf8');
  const portReady = new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('等待 Chrome 启动超时。')), 10000);
    chromeProcess.stderr.on('data', (chunk) => {
      const match = chunk.match(/DevTools listening on ws:\/\/127\.0\.0\.1:(\d+)\//);
      if (match) {
        clearTimeout(timer);
        port = match[1];
        resolve();
      }
    });
    chromeProcess.once('error', reject);
    chromeProcess.once('exit', (code) => {
      if (!port) reject(new Error(`Chrome 提前退出，退出码：${code}`));
    });
  });

  let cdp;
  try {
    await portReady;
    const pageWsUrl = await waitForPageEndpoint(port);
    cdp = connectCdp(pageWsUrl);
    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: 1280,
      height: 1400,
      deviceScaleFactor: 2,
      mobile: false,
    });
    await cdp.send('Runtime.evaluate', {
      expression: `document.fonts ? document.fonts.ready : Promise.resolve()`,
      awaitPromise: true,
    });

    for (const item of outputs) {
      const outputPath = path.join(outputDir, item.name);
      await captureBoard(cdp, item.index, outputPath);
      console.log(`${item.label}: ${outputPath}`);
    }
  } finally {
    if (cdp) cdp.close();
    chromeProcess.kill();
    try {
      fs.rmSync(userDataDir, { recursive: true, force: true });
    } catch (_) {
      // Chrome can keep a few profile files open briefly after kill; leaving a tmp dir is harmless.
    }
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
