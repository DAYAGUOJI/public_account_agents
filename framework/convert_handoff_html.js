#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function decodeEntities(value) {
  return String(value || "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, num) => String.fromCodePoint(parseInt(num, 10)));
}

function getAttr(attrs, name) {
  const match = String(attrs || "").match(new RegExp(`${name}\\s*=\\s*["']([^"']*)["']`, "i"));
  return match ? decodeEntities(match[1]).trim() : "";
}

function textOf(html) {
  return decodeEntities(
    String(html || "")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/[ \t\r\n]+/g, " ")
      .trim()
  );
}

function extractRows(tableHtml) {
  const rows = [];
  const rowRegex = /<tr\b[^>]*>([\s\S]*?)<\/tr>/gi;
  let rowMatch;
  while ((rowMatch = rowRegex.exec(tableHtml))) {
    const cells = [];
    const cellRegex = /<(?:th|td)\b[^>]*>([\s\S]*?)<\/(?:th|td)>/gi;
    let cellMatch;
    while ((cellMatch = cellRegex.exec(rowMatch[1]))) {
      const cell = textOf(cellMatch[1]);
      if (cell) cells.push(cell);
    }
    if (cells.length) rows.push(cells);
  }
  return rows;
}

function pushTextBlock(blocks, type, text) {
  const clean = textOf(text);
  if (!clean) return;
  const previous = blocks[blocks.length - 1];
  if (previous && previous.type === type && (previous.text === clean || previous.title === clean)) return;
  if (type === "subtitle") blocks.push({ type, text: clean });
  else blocks.push({ type, text: clean });
}

function convertHtml(inputPath, outputDir) {
  const raw = fs.readFileSync(inputPath, "utf8");
  const titleMatch = raw.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? textOf(titleMatch[1]) : path.basename(outputDir);
  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : raw;

  const blocks = [];
  const media = [];
  let heroReady = false;
  let skipToc = true;
  let pendingMediaIndex = -1;

  const tokenRegex =
    /<table\b[^>]*>[\s\S]*?<\/table>|<video\b[^>]*>[\s\S]*?<\/video>|<img\b([^>]*)>|<h([1-5])\b([^>]*)>([\s\S]*?)<\/h\2>|<p\b([^>]*)>([\s\S]*?)<\/p>|<li\b([^>]*)>([\s\S]*?)<\/li>/gi;

  let match;
  while ((match = tokenRegex.exec(body))) {
    const token = match[0];
    const lower = token.slice(0, 20).toLowerCase();

    if (lower.startsWith("<table")) {
      skipToc = false;
      pendingMediaIndex = -1;
      const rows = extractRows(token);
      if (rows.length >= 2) {
        const [headers, ...dataRows] = rows;
        blocks.push({ type: "table", headers, rows: dataRows });
      }
      continue;
    }

    if (lower.startsWith("<video")) {
      skipToc = false;
      const srcMatch = token.match(/<source\b([^>]*)>/i);
      const src = srcMatch ? getAttr(srcMatch[1], "src") : "";
      const id = `VIDEO_${String(media.filter((item) => item.kind === "video").length + 1).padStart(2, "0")}`;
      media.push({ id, kind: "video", source: src, caption: "视频素材，请在公众号后台手动上传或转为封面/链接。" });
      pendingMediaIndex = media.length - 1;
      blocks.push({
        type: "editorNote",
        label: "VIDEO PLACEHOLDER",
        body: `${id}：${src || "视频素材"}。公众号正文脚本不直接嵌入视频，请发布前手动上传或替换为视频封面。`,
      });
      continue;
    }

    if (lower.startsWith("<img")) {
      skipToc = false;
      const attrs = match[1] || "";
      const src = getAttr(attrs, "src");
      const alt = getAttr(attrs, "alt") || "图片素材";
      const id = `IMG_${String(media.filter((item) => item.kind === "image").length + 1).padStart(2, "0")}`;
      const item = { id, kind: "image", source: src, alt, caption: alt };
      media.push(item);
      pendingMediaIndex = media.length - 1;
      blocks.push({
        type: "image",
        alt: `${id} ${alt}`,
        caption: `* ${id}：${alt}。素材：${src || "未识别"}。请在公众号编辑器中手动替换。`,
      });
      continue;
    }

    const headingLevel = match[2];
    if (headingLevel) {
      const attrs = match[3] || "";
      const text = textOf(match[4]);
      if (!text || text === "📋 报告目录") continue;
      if (headingLevel === "1" && !heroReady) {
        blocks.push({
          type: "hero",
          kicker: "RESEARCH REPORT",
          title: text,
          summary: "",
        });
        heroReady = true;
        continue;
      }
      if (getAttr(attrs, "class").includes("section-title")) skipToc = false;
      pendingMediaIndex = -1;
      if (skipToc) continue;
      pushTextBlock(blocks, "subtitle", text);
      continue;
    }

    const pAttrs = match[5];
    if (pAttrs !== undefined) {
      const text = textOf(match[6]);
      const className = getAttr(pAttrs, "class");
      if (!text) continue;
      if (className === "subtitle" && blocks[0]?.type === "hero") {
        blocks[0].summary = text;
        continue;
      }
      if (skipToc) continue;
      if (className.includes("chart-caption")) {
        const lastImage = pendingMediaIndex >= 0 ? media[pendingMediaIndex] : null;
        if (lastImage) lastImage.caption = text;
        const lastBlock = blocks[blocks.length - 1];
        if (lastBlock?.type === "image") {
          lastBlock.caption = `* ${lastImage?.id || "IMG"}：${text}。素材：${lastImage?.source || "未识别"}。请在公众号编辑器中手动替换。`;
        } else if (lastBlock?.type === "editorNote" && lastImage?.kind === "video") {
          lastBlock.body = `${lastImage.id}：${lastImage.source || "视频素材"}。${text}。请发布前手动上传或替换为视频封面。`;
        } else {
          blocks.push({ type: "annotation", text: `* ${text}` });
        }
        pendingMediaIndex = -1;
        continue;
      }
      pendingMediaIndex = -1;
      const previous = blocks[blocks.length - 1];
      if (previous?.type === "subtitle") {
        blocks.push({ type: "annotation", text });
      } else {
        blocks.push({ type: "paragraph", text });
      }
      continue;
    }

    const liAttrs = match[7];
    if (liAttrs !== undefined) {
      pendingMediaIndex = -1;
      if (skipToc) continue;
      const text = textOf(match[8]);
      if (text) blocks.push({ type: "paragraph", text: `• ${text}` });
    }
  }

  if (!blocks.some((block) => block.type === "hero")) {
    blocks.unshift({ type: "hero", kicker: "RESEARCH REPORT", title, summary: "" });
  }

  const spec = {
    title,
    meta: {
      issue: "RESEARCH REPORT",
      source: inputPath,
    },
    directInsert: false,
    blocks,
  };

  fs.mkdirSync(outputDir, { recursive: true });
  const specPath = path.join(outputDir, "article_spec.json");
  fs.writeFileSync(specPath, JSON.stringify(spec, null, 2), "utf8");

  const mediaLines = [
    "# 图片与视频人工替换清单",
    "",
    "脚本中只放占位图/占位说明。发布前请按下面清单在微信公众号编辑器中手动替换。",
    "",
    ...media.map((item) => {
      const label = item.kind === "video" ? "视频" : "图片";
      return `- ${item.id}（${label}）：${item.caption || item.alt || ""}｜素材：${item.source || "未识别"}`;
    }),
    "",
  ];
  const inputDir = path.dirname(inputPath);
  const assetPattern = /\.(?:png|jpe?g|gif|webp|avif|mp4|mov)$/i;
  const localAssets = fs.readdirSync(inputDir).filter((name) => assetPattern.test(name));
  const referencedLocalAssets = new Set(
    media
      .map((item) => item.source)
      .filter((source) => source && !/^https?:\/\//i.test(source))
      .map((source) => path.basename(source))
  );
  const unusedLocalAssets = localAssets.filter((name) => !referencedLocalAssets.has(name));
  if (unusedLocalAssets.length) {
    mediaLines.push("## 原始目录中存在但 HTML 未引用", "");
    unusedLocalAssets.forEach((name) => {
      mediaLines.push(`- \`${name}\`：当前 HTML 没有引用；如需使用，请手动决定插入位置。`);
    });
    mediaLines.push("");
  }
  const mediaPath = path.join(outputDir, "image_replacements.md");
  fs.writeFileSync(mediaPath, mediaLines.join("\n"), "utf8");

  return { specPath, mediaPath, blockCount: blocks.length, mediaCount: media.length };
}

function main() {
  const inputPath = process.argv[2];
  const outputDir = process.argv[3];
  if (!inputPath || !outputDir) {
    console.error("Usage: node framework/convert_handoff_html.js <input.html> <output-dir>");
    process.exit(1);
  }
  const result = convertHtml(inputPath, outputDir);
  console.log(`Generated ${result.specPath}`);
  console.log(`Generated ${result.mediaPath}`);
  console.log(`Blocks: ${result.blockCount}, media: ${result.mediaCount}`);
}

if (require.main === module) {
  main();
}

module.exports = { convertHtml };
