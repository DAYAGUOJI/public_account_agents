#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function asList(value) {
  if (Array.isArray(value)) return value.filter(Boolean).map(String);
  if (!value) return [];
  return [String(value)];
}

function asObjectList(value) {
  if (Array.isArray(value)) return value.filter((item) => item && typeof item === "object");
  if (value && typeof value === "object") return [value];
  return [];
}

function joinKeywords(keywords) {
  return asList(keywords).join(" / ");
}

function trimTerminalPunctuation(value) {
  return String(value || "").trim().replace(/[。；;，,！？!?：:]+$/u, "");
}

function validateNote(note) {
  if (!note || typeof note !== "object" || Array.isArray(note)) {
    throw new Error("输入必须是一个 JSON 对象。");
  }
  if (note.mode && note.mode !== "paper_reading") {
    throw new Error(`不支持的 mode：${note.mode}；论文分享应使用 paper_reading。`);
  }
  if (note.paper != null && (typeof note.paper !== "object" || Array.isArray(note.paper))) {
    throw new Error("paper 必须是一个对象。");
  }
  if (
    note.readingNote != null &&
    (typeof note.readingNote !== "object" || Array.isArray(note.readingNote))
  ) {
    throw new Error("readingNote 必须是一个对象。");
  }
}

function addSection(blocks, title, body, options = {}) {
  const items = asList(body);
  if (items.length === 0) {
    blocks.push({
      type: "editorNote",
      label: "NEEDS CHECK",
      body: `${title} 暂无可确认内容，请回到论文或读书笔记补充。`,
    });
    return;
  }
  blocks.push({
    type: options.type || "plainSection",
    title: options.cardTitle || title,
    body: items,
  });
}

function buildSpec(note) {
  validateNote(note);
  const paper = note.paper || {};
  const readingNote = note.readingNote || {};
  const intro = readingNote.introduction || {};
  const requirements = note.requirements || {};
  const materials = note.materials || {};
  const title =
    requirements.publicationTitle ||
    (paper.title ? `读书笔记 | ${paper.title}` : "论文读书笔记");
  const kicker = `LITERATURE READING NOTE${paper.noteNo ? ` · ${paper.noteNo}` : ""}`;
  const keywords = joinKeywords(paper.keywords);

  const blocks = [
    {
      type: "hero",
      kicker,
      title,
      summary:
        requirements.summary ||
        "本期按照固定文献阅读笔记框架，围绕研究动机、研究目标、研究任务、相关研究、研究方法和应用实践拆解论文。",
    },
    {
      type: "subtitle",
      text: "论文信息",
    },
    {
      type: "table",
      headers: ["项目", "内容"],
      rows: [
        ["题目", paper.title || "待补充"],
        ["期刊/会议", paper.journal || "待补充"],
        ["作者", paper.authors || "待补充"],
        ["关键词", keywords || "待补充"],
      ],
    },
  ];

  if (paper.doi || paper.url || paper.publicationDate) {
    blocks.push({
      type: "annotation",
      text: [
        paper.publicationDate ? `发表时间：${paper.publicationDate}` : "",
        paper.doi ? `DOI：${paper.doi}` : "",
        paper.url ? `链接：${paper.url}` : "",
      ]
        .filter(Boolean)
        .join("；"),
    });
  }

  blocks.push({
    type: "sectionTitle",
    kicker: "PART 01",
    title: "介绍",
    summary: "这一部分回答论文为什么要做、想解决什么，以及作者如何拆解研究任务。",
  });
  addSection(blocks, "1.1 研究动机", intro.motivation);
  addSection(blocks, "1.2 研究目标", intro.goal);
  addSection(blocks, "1.3 研究任务", intro.task);

  blocks.push({
    type: "sectionTitle",
    kicker: "PART 02",
    title: "相关研究",
    summary: "梳理论文所在的研究脉络，以及它与已有工作的关系。",
    dividerBefore: true,
  });
  addSection(blocks, "2 相关研究", readingNote.relatedWork);

  blocks.push({
    type: "sectionTitle",
    kicker: "PART 03",
    title: "研究方法",
    summary: "拆解论文的方法流程、关键设计和实验验证方式。",
    dividerBefore: true,
  });
  addSection(blocks, "3 研究方法", readingNote.methodology);

  const figures = asObjectList(materials.figures);
  figures
    .filter((figure) => figure.placeAfter === "methodology")
    .forEach((figure) => {
      blocks.push({
        type: "image",
        alt: `${figure.id || "FIG"} 图片占位`,
        caption: `* ${figure.id || "FIG"}：${trimTerminalPunctuation(figure.caption) || "论文图片"}。素材：${trimTerminalPunctuation(figure.source) || "待补充"}。请在公众号编辑器中手动替换。`,
      });
    });

  blocks.push({
    type: "sectionTitle",
    kicker: "PART 04",
    title: "研究应用与实践",
    summary: "说明论文结果、系统实现、实验结论或实践启示，同时保留边界。",
    dividerBefore: true,
  });
  addSection(blocks, "4 研究应用与实践", readingNote.implementation);

  figures
    .filter((figure) => figure.placeAfter !== "methodology")
    .forEach((figure) => {
      blocks.push({
        type: "image",
        alt: `${figure.id || "FIG"} 图片占位`,
        caption: `* ${figure.id || "FIG"}：${trimTerminalPunctuation(figure.caption) || "论文图片"}。素材：${trimTerminalPunctuation(figure.source) || "待补充"}。请在公众号编辑器中手动替换。`,
      });
    });

  const tables = asObjectList(materials.tables);
  tables.forEach((table) => {
    blocks.push({
      type: "subtitle",
      text: table.title || table.id || "论文表格",
    });
    blocks.push({
      type: "table",
      headers: table.headers || [],
      rows: table.rows || [],
      scrollX: Boolean((table.headers || []).length > 3),
      width: (table.headers || []).length > 3 ? "720px" : undefined,
    });
  });

  const manualChecks = [
    ...asList(requirements.mustKeep),
    ...asList(note.qualityGates),
    "发布前请核对论文题目、作者、期刊/会议、关键词和图表编号。",
  ].filter((item, index, items) => items.indexOf(item) === index);
  blocks.push({ type: "divider" });
  blocks.push({
    type: "editorNote",
    label: "PUBLISH CHECK",
    body: manualChecks,
  });
  blocks.push({
    type: "annotation",
    text: "* 本文由论文读书笔记固定框架生成初稿，正式发布前需人工预览和事实核对。",
  });

  return {
    title,
    meta: {
      issue: kicker,
      date: note.date || new Date().toISOString().slice(0, 10),
      style: "paper_reading",
    },
    directInsert: false,
    blocks,
  };
}

function main() {
  const inputPath = process.argv[2];
  const outputPath = process.argv[3] || path.join("framework", "output", "paper_article_spec.json");
  if (!inputPath) {
    console.error("Usage: node framework/paper_note_to_article_spec.js <paper_reading_note.json> [article_spec.json]");
    process.exit(1);
  }

  const note = JSON.parse(fs.readFileSync(inputPath, "utf8"));
  const spec = buildSpec(note);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, `${JSON.stringify(spec, null, 2)}\n`);
  console.log(`Wrote ${outputPath}`);
}

if (require.main === module) {
  main();
}

module.exports = { buildSpec };
