const fs = require("fs");
const path = require("path");
const { renderArticle, buildConsoleScript } = require("../framework/wechat_article_builder");

const sourcePath = path.join("articles", "huaqiangbei-report-2", "article_spec_report.json");
const derivedSpecPath = path.join("articles", "huaqiangbei-report-2", "article_spec_report_5part.json");
const outputScriptPath = path.join("articles", "huaqiangbei-report-2", "inject_article_report.js");
const previewPath = path.join("incoming", "华强北报告 2", "index.html");

const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const clone = (value) => JSON.parse(JSON.stringify(value));
const blocks = source.blocks;

function section(index, kicker, title, summary) {
  const block = clone(blocks[index]);
  block.kicker = kicker;
  block.title = title;
  if (summary !== undefined) block.summary = summary;
  return block;
}

function subtitle(title) {
  return { type: "subtitle", title };
}

function paragraph(text) {
  return { type: "paragraph", text };
}

const hero = clone(blocks[0]);
hero.kicker = "FIELD REPORT";
hero.title = "华强北调研中的消费级 AI 机器人三条路径：Kickstarter 精品、白牌复制与社交爆款";
hero.summary =
  "我们课题组的刘海宁，何山，吴瑜青，许亦民去深圳华强北进行了为期三天的调研。基于华强北电子世界、Kickstarter 线下体验店，以及小红书 / TikTok 热门产品样本，本文观察消费级 AI 机器人从供应链效率走向情绪消费的关键转折。";

const introRoutes = [
  paragraph(
    "第一条路径是 Kickstarter / 海外精品路线：它们通常用更高客单价、更细腻的材质触感、更完整的非语言反馈，去构建“像生命体”的陪伴感。其核心竞争力不是让机器人更会聊天，而是让用户愿意触摸、照顾、长期相处。"
  ),
  paragraph(
    "第二条路径是华强北白牌路线：它依托标准主板、大模型公版软件、LCD / LED 表情模组和语音核心模块，把 AI 陪伴产品快速压缩成可交易、可批发、可出海的硬件形态。它的优势是速度和成本，短板则是交互心智模型与长期服务。"
  ),
  paragraph(
    "第三条路径是社交软件上的爆款路线：这类产品未必技术最强，却更懂情绪价值、社交货币与内容传播。它们通过开箱、养成、人格标签、IP 联名和可分享的使用场景，让用户购买的不只是功能，而是一段可以被展示的关系。"
  ),
];

const spec = {
  ...clone(source),
  title: hero.title,
  meta: {
    ...(source.meta || {}),
    issue: "FIELD REPORT",
    updated: "2026-07-02",
  },
  blocks: [
    hero,
    ...introRoutes,

    section(
      2,
      "PART 01",
      "市场脉络与核心场景趋势：从教育陪伴到潮玩机器人",
      "传统电子配件柜台正在被 AI 眼镜、AI 玩具、AI 翻译机和各类机器人替代。华强北的价值不只在低价，而在把新概念快速压缩成可交易、可批发、可出海的硬件形态；在具体场景上，教育陪伴与潮玩机器人是最能观察消费心智变化的两类样本。"
    ),
    clone(blocks[3]),
    clone(blocks[4]),
    clone(blocks[5]),
    clone(blocks[6]),
    clone(blocks[7]),
    clone(blocks[8]),
    clone(blocks[9]),
    clone(blocks[10]),
    subtitle("A. 教育陪伴机器人"),
    paragraph(
      "教育陪伴机器人把编程、棋类训练、语言学习与陪伴交互压缩到可展示、可体验的硬件样本中。读者先看产品图，再横向浏览差异点，更容易理解不同产品在“教育属性”和“陪伴属性”之间的取舍。"
    ),
    clone(blocks[12]),
    clone(blocks[13]),
    subtitle("B. 潮玩机器人：平台化、人格化与 IP 化"),
    paragraph(blocks[25].summary),
    clone(blocks[26]),
    clone(blocks[27]),

    section(
      14,
      "PART 02",
      "情感陪伴毛绒机器人：Kickstarter 精品与华强北白牌",
      "这一部分把 Kickstarter / 海外精品与华强北产品合并观察：前者强调触觉、材质和非语言陪伴，后者强调低成本、语音对话和快速复制。二者的分化说明，许多华强北白牌产品在体验本质上仍接近“带毛绒外壳的 AI 音箱”。"
    ),
    clone(blocks[15]),
    clone(blocks[16]),
    clone(blocks[17]),
    clone(blocks[18]),
    clone(blocks[19]),
    subtitle("真实走查：AI 喵精灵的体验断层"),
    paragraph(blocks[20].summary),
    clone(blocks[21]),
    clone(blocks[22]),
    clone(blocks[23]),
    clone(blocks[24]),

    section(
      28,
      "PART 03",
      "交互痛点：物理、语音、商业三维诊断",
      blocks[28].summary
    ),
    clone(blocks[29]),
    clone(blocks[30]),

    section(
      31,
      "PART 04",
      "社交爆款横评与三极对比：弱陪伴比功能堆叠更能传播",
      blocks[31].summary
    ),
    clone(blocks[32]),
    clone(blocks[33]),
    clone(blocks[34]),
    clone(blocks[36]),

    section(
      37,
      "PART 05",
      "战略洞察、总结与行为建议",
      "下一阶段竞争焦点不会只是模型能力，而是硬件形态、交互设计、AI 人格与商业模式能否形成一致的情感体验。本文最后将战略建议与总结性洞察合并，避免重复表达。"
    ),
    clone(blocks[38]),
    clone(blocks[39]),
    clone(blocks[40]),
    clone(blocks[41]),
    {
      type: "annotation",
      text:
        "知识产权声明：本文由课题组成员基于公开资料与实地调研整理撰写，文字、图表与版式内容仅用于学术交流与研究讨论。未经作者及课题组授权，任何单位或个人不得以转载、摘编、复制、截图搬运、商业使用等方式使用本文内容。如需引用或转载，请联系课题组并注明来源。文中涉及的品牌、产品名称与图片素材版权归原权利人所有。",
    },
  ],
};

let html = renderArticle(spec);
html = html.replace(
  /<h2 style="margin: 0; padding: 0; font-size: 20px; line-height: 1\.35; font-weight: 700; letter-spacing: 0\.3px; color: #0A84FF;">/g,
  '<h2 style="margin: 0; padding: 0; font-size: 32px; line-height: 1.18; font-weight: 800; letter-spacing: 0; color: #0A84FF;">'
);

for (const part of ["PART 01", "PART 02", "PART 03", "PART 04", "PART 05"]) {
  html = html.replace(
    `<section style="box-sizing: border-box; margin: 28px 8px 18px 8px; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left;">
  <p style="margin: 0 0 8px 0; padding: 0; font-size: 11px; line-height: 1.4; letter-spacing: 1.4px; opacity: 0.45; font-family: 'SF Mono', Consolas, Menlo, monospace;">${part}</p>`,
    `<section style="box-sizing: border-box; margin: 34px 8px 22px 8px; padding: 26px 22px 24px 22px; border-radius: 24px; border: 1px solid rgba(10, 132, 255, 0.16); background-color: rgba(10, 132, 255, 0.055); box-shadow: 0 12px 32px rgba(10, 132, 255, 0.08), 0 2px 8px rgba(0, 0, 0, 0.035); font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left;">
  <p style="margin: 0 0 10px 0; padding: 0; font-size: 11px; line-height: 1.4; letter-spacing: 1.4px; color: #0A84FF; opacity: 0.72; font-family: 'SF Mono', Consolas, Menlo, monospace;">${part}</p>`
  );
}

const script = buildConsoleScript(html, { directInsert: spec.directInsert });

fs.writeFileSync(derivedSpecPath, JSON.stringify(spec, null, 2), "utf8");
fs.writeFileSync(outputScriptPath, script, "utf8");

if (fs.existsSync(previewPath)) {
  const preview = fs.readFileSync(previewPath, "utf8");
  const title = spec.title.replace(/[&<>"']/g, (char) => {
    const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return map[char];
  });
  let nextPreview = preview.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  const bodyIndex = nextPreview.indexOf("<body>");
  if (bodyIndex === -1) {
    nextPreview = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>${title}</title></head><body><div class="container">${html}</div></body></html>`;
  } else {
    nextPreview = `${nextPreview.slice(0, bodyIndex)}<body><div class="container">${html}</div></body></html>`;
  }
  fs.writeFileSync(previewPath, nextPreview, "utf8");
}

console.log(`Generated ${outputScriptPath}`);
console.log(`Generated ${derivedSpecPath}`);
console.log(`Synced ${previewPath}`);
