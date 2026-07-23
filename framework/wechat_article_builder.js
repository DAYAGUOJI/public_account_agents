#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const FONT = "-apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif";
const MONO = "'SF Mono', Consolas, Menlo, monospace";
// Brand token: section headings always use Apple Blue.
// Keep this global and do not allow article-level specs to override it.
const APPLE_BLUE = "#0A84FF";
const PLACEHOLDER_IMG =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgwIiBoZWlnaHQ9IjYwNyIgdmlld0JveD0iMCAwIDEwODAgNjA3Ij48cmVjdCB3aWR0aD0iMTA4MCIgaGVpZ2h0PSI2MDciIGZpbGw9InJnYmEoMTI4LDEyOCwxMjgsMC4wOCkiLz48ZWxsaXBzZSBjeD0iNTQwIiBjeT0iMzAzLjUiIHJ4PSIxNDAiIHJ5PSIxNDAiIGZpbGw9InJnYmEoMTI4LDEyOCwxMjgsMC4xKSIvPjwvc3ZnPg==";

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function lines(value) {
  if (Array.isArray(value)) return value.filter(Boolean).map(String);
  if (!value) return [];
  return [String(value)];
}

function inlineFormat(value) {
  return escapeHtml(value).replace(/\*\*([^*]+)\*\*/g, '<strong style="font-weight: 700;">$1</strong>');
}

function paragraph(block) {
  return lines(block.text || block.body)
    .map(
      (text) => `
<p style="margin: 14px 8px; padding: 0; font-size: 14px; line-height: 1.85; letter-spacing: 0.3px; opacity: 0.82; text-align: justify; font-family: ${FONT};">
  ${inlineFormat(text)}
</p>`
    )
    .join("\n");
}

function hero(block, spec) {
  const title = block.title || spec.title || "";
  const kicker = block.kicker || spec.meta?.issue || "";
  const summary = block.summary || block.body || "";
  return `
<section style="box-sizing: border-box; margin: 8px 8px 28px 8px; padding: 30px 24px; border-radius: 20px; border: 1px solid rgba(128, 128, 128, 0.15); background-color: rgba(128, 128, 128, 0.055); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02); font-family: ${FONT};">
  ${kicker ? `<p style="margin: 0 0 12px 0; font-size: 12px; line-height: 1.4; letter-spacing: 1px; opacity: 0.55; font-family: ${MONO};">${escapeHtml(kicker)}</p>` : ""}
  <h1 style="margin: 0; padding: 0; font-size: 22px; line-height: 1.35; font-weight: 700; letter-spacing: 0.3px; opacity: 0.92;">${escapeHtml(title)}</h1>
  ${summary ? `<p style="margin: 16px 0 0 0; padding: 0; font-size: 14px; line-height: 1.8; letter-spacing: 0.3px; opacity: 0.68; text-align: justify;">${inlineFormat(summary)}</p>` : ""}
</section>`;
}

function subtitle(block) {
  return `
<p><br></p>
<section style="box-sizing: border-box; margin: 32px 8px 16px 8px; text-align: left;">
  <h3 style="margin: 0; padding: 0; font-size: 14px; font-weight: 600; font-family: ${FONT}; opacity: 0.9; letter-spacing: 0.5px; line-height: 1.5; display: flex; align-items: center;">
    <span style="box-sizing: border-box; display: inline-block; flex-shrink: 0; width: 14px; height: 14px; padding: 2px; border: 1.5px solid rgba(128, 128, 128, 0.35); border-radius: 50%; background-color: rgba(128, 128, 128, 0.65); background-clip: content-box; margin-right: 10px; font-size: 14px; line-height: 1;">&#8203;</span>
    <span>${escapeHtml(block.text || block.title)}</span>
  </h3>
</section>`;
}

function card(block) {
  const body = lines(block.body || block.text)
    .map((text) => `<p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.75; line-height: 1.8; letter-spacing: 0.5px; text-align: justify;">${inlineFormat(text)}</p>`)
    .join("");
  return `
<section style="box-sizing: border-box; margin: 24px 8px; padding: 28px 24px; background-color: rgba(128, 128, 128, 0.06); border-radius: 20px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02); border: 1px solid rgba(128, 128, 128, 0.15); font-family: ${FONT}; text-align: left; line-height: 1.6;">
  ${block.title ? `<h2 style="margin: 0 0 12px 0; padding: 0; font-size: 14px; font-weight: 600; opacity: 0.9; letter-spacing: 0.5px;">${escapeHtml(block.title)}</h2>` : ""}
  ${body}
</section>`;
}

function plainSection(block) {
  const title = block.title || "";
  const match = title.match(/^(\d+(?:\.\d+)*)\s+(.+)$/u);
  const number = block.number || (match ? match[1] : "");
  const heading = match ? match[2] : title;
  const body = lines(block.body || block.text)
    .map(
      (text) => `<p style="margin: 14px 0 0 0; padding: 0; font-size: 14px; opacity: 0.82; line-height: 1.85; letter-spacing: 0.3px; text-align: justify;">${inlineFormat(text)}</p>`
    )
    .join("");
  return `
<section style="box-sizing: border-box; margin: 30px 8px 20px 8px; font-family: ${FONT}; text-align: left;">
  ${
    heading
      ? `<section style="box-sizing: border-box; display: flex; align-items: baseline; gap: 12px; margin: 0 0 12px 0;">
    ${number ? `<span style="display: inline-block; flex-shrink: 0; font-size: 30px; line-height: 1; font-weight: 800; letter-spacing: -0.8px; color: ${APPLE_BLUE};">${escapeHtml(number)}</span>` : ""}
    <h3 style="margin: 0; padding: 0; font-size: 15px; line-height: 1.5; font-weight: 700; letter-spacing: 0.2px; opacity: 0.92;">${escapeHtml(heading)}</h3>
  </section>`
      : ""
  }
  ${body}
</section>`;
}

function editorNote(block) {
  const label = block.label || "EDITOR'S NOTE";
  const body = lines(block.body || block.text)
    .map((text) => `<p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.8; line-height: 1.7; letter-spacing: 0.5px; text-align: justify;">${inlineFormat(text)}</p>`)
    .join("");
  return `
<section style="box-sizing: border-box; margin: 24px 8px; padding: 16px 20px; background-color: rgba(128, 128, 128, 0.04); border: 1px dashed rgba(128, 128, 128, 0.2); border-left: 4px solid rgba(128, 128, 128, 0.4); border-radius: 8px; font-family: ${FONT}; text-align: left; line-height: 1.6;">
  <div style="margin-bottom: 8px; display: flex; align-items: center;">
    <span style="font-family: ${MONO}; font-size: 14px; font-weight: 600; opacity: 0.6; letter-spacing: 1px;">&gt; ${escapeHtml(label)}</span>
  </div>
  ${body}
</section>`;
}

function sectionTitle(block) {
  const kicker = block.kicker || "";
  const title = block.title || block.text || "";
  const summary = block.summary || block.body || "";
  const divider = block.dividerBefore
    ? `<section style="box-sizing: border-box; margin: 38px 8px 32px 8px; height: 1px; background-color: rgba(128, 128, 128, 0.15); font-size: 0; line-height: 0;">&#8203;</section>`
    : "";
  return `
<p><br></p>
${divider}
<section style="box-sizing: border-box; margin: 34px 8px 22px 8px; padding: 0 0 2px 0; font-family: ${FONT}; text-align: left;">
  ${kicker ? `<p style="display: inline-block; margin: 0 0 16px 0; padding: 10px 18px; border-radius: 18px; background-color: ${APPLE_BLUE}; font-size: 32px; line-height: 1.15; font-weight: 800; letter-spacing: 0; color: #ffffff; font-family: ${FONT};">${escapeHtml(kicker)}</p>` : ""}
  <h2 style="margin: 0; padding: 0; font-size: 32px; line-height: 1.18; font-weight: 800; letter-spacing: 0; color: ${APPLE_BLUE};">${escapeHtml(title)}</h2>
  ${summary ? `<p style="margin: 10px 0 0 0; padding: 0; font-size: 13px; line-height: 1.75; letter-spacing: 0.3px; opacity: 0.62; text-align: justify;">${inlineFormat(summary)}</p>` : ""}
</section>`;
}

function insightCards(block) {
  const items = block.items || [];
  const isFilled = block.variant === "filled";
  const itemHtml = items
    .map((item) => `
  <section style="box-sizing: border-box; margin: ${isFilled ? "10px 0" : "16px 0"}; padding: ${isFilled ? "16px 18px" : "0"}; border-radius: ${isFilled ? "10px" : "0"}; border: ${isFilled ? "1px solid rgba(128, 128, 128, 0.14)" : "none"}; background-color: ${isFilled ? "rgba(128, 128, 128, 0.045)" : "transparent"}; font-family: ${FONT}; text-align: left;">
    ${item.kicker ? `<p style="margin: 0 0 6px 0; padding: 0; font-family: ${MONO}; font-size: 11px; line-height: 1.4; letter-spacing: 1px; opacity: 0.45;">${escapeHtml(item.kicker)}</p>` : ""}
    <h3 style="margin: 0; padding: 0; font-size: 15px; line-height: 1.45; font-weight: 700; letter-spacing: 0.2px; opacity: 0.9;">${escapeHtml(item.title)}</h3>
    <p style="margin: 8px 0 0 0; padding: 0; font-size: 13px; line-height: 1.75; letter-spacing: 0.3px; opacity: 0.74; text-align: justify;">${inlineFormat(item.body || item.text)}</p>
  </section>`)
    .join("");
  return `
<section style="box-sizing: border-box; margin: 20px 8px; font-family: ${FONT};">
${itemHtml}
</section>`;
}

function metricGrid(block) {
  const items = block.items || [];
  const itemHtml = items
    .map((item) => {
      return `
  <section style="box-sizing: border-box; display: inline-block; vertical-align: top; width: 48%; min-height: 132px; margin: 1%; padding: 22px 12px; border-radius: 12px; border: 1px solid rgba(128, 128, 128, 0.16); background-color: rgba(128, 128, 128, 0.018); text-align: center; font-family: ${FONT};">
    <p style="margin: 0; padding: 0; font-size: 32px; line-height: 1.15; font-weight: 800; letter-spacing: 0.2px; opacity: 0.9;">${escapeHtml(item.value)}</p>
    <p style="margin: 12px 0 0 0; padding: 0; font-size: 13px; line-height: 1.55; font-weight: 600; opacity: 0.64;">${escapeHtml(item.label)}</p>
    ${item.change ? `<p style="margin: 10px 0 0 0; padding: 0; font-size: 12px; line-height: 1.4; font-weight: 700; opacity: 0.62;">${escapeHtml(item.change)}</p>` : ""}
  </section>`;
    })
    .join("");
  return `
<section style="box-sizing: border-box; margin: 18px 6px 24px 6px; font-size: 0;">
${itemHtml}
</section>`;
}

function trendList(block) {
  const items = block.items || [];
  const itemHtml = items
    .map((item, index) => `
  <section style="box-sizing: border-box; display: flex; gap: 12px; margin: 14px 0; font-family: ${FONT};">
    <section style="box-sizing: border-box; width: 28px; height: 28px; border-radius: 50%; background-color: rgba(128, 128, 128, 0.08); text-align: center; line-height: 28px; font-size: 13px; font-weight: 700; opacity: 0.78; flex-shrink: 0;">${escapeHtml(item.num || index + 1)}</section>
    <section style="box-sizing: border-box; flex: 1;">
      <h3 style="margin: 0; padding: 0; font-size: 14px; line-height: 1.5; font-weight: 700; opacity: 0.9;">${escapeHtml(item.title)}</h3>
      <p style="margin: 6px 0 0 0; padding: 0; font-size: 13px; line-height: 1.78; letter-spacing: 0.25px; opacity: 0.74; text-align: justify;">${inlineFormat(item.body || item.text)}</p>
    </section>
  </section>`)
    .join("");
  return `
<section style="box-sizing: border-box; margin: 22px 8px; padding: 4px 0 2px 0; font-family: ${FONT};">
  ${block.title ? `<h2 style="margin: 0 0 12px 0; padding: 0; font-size: 15px; line-height: 1.45; font-weight: 700; opacity: 0.9;">${escapeHtml(block.title)}</h2>` : ""}
${itemHtml}
</section>`;
}

function detailPanels(block) {
  const panels = block.panels || [];
  const panelHtml = panels
    .map((panel) => {
      const points = lines(panel.points)
        .map((point) => `<li style="margin: 8px 0; padding: 0; font-size: 13px; line-height: 1.72; opacity: 0.78; text-align: justify;">${inlineFormat(point)}</li>`)
        .join("");
      const images = (panel.images || [])
        .map((image) => `
      <section style="box-sizing: border-box; display: inline-block; vertical-align: top; width: ${panel.images.length > 1 ? "48%" : "100%"}; margin: 1%; font-size: 13px;">
        <section style="box-sizing: border-box; border-radius: 10px; border: 1px solid rgba(128, 128, 128, 0.16); overflow: hidden; background-color: rgba(128, 128, 128, 0.04);">
          <img src="${escapeHtml(image.src || PLACEHOLDER_IMG)}" alt="${escapeHtml(image.alt || image.caption || "图片")}" style="display: block; width: 100%; height: auto; border: none; outline: none;" />
        </section>
        <p style="margin: 7px 0 0 0; padding: 0; font-size: 11px; line-height: 1.45; opacity: 0.52; text-align: center;">${escapeHtml(image.caption || "")}</p>
      </section>`)
        .join("");
      return `
  <section style="box-sizing: border-box; margin: 18px 0; padding: 20px 18px; border-radius: 12px; border: 1px solid rgba(128, 128, 128, 0.14); background-color: rgba(128, 128, 128, 0.018); font-family: ${FONT};">
    ${panel.badge ? `<p style="display: inline-block; margin: 0 0 14px 0; padding: 7px 12px; border-radius: 8px; background-color: rgba(128, 128, 128, 0.06); font-size: 12px; line-height: 1.4; font-weight: 700; opacity: 0.72;">${escapeHtml(panel.badge)}</p>` : ""}
    <h3 style="margin: 0 0 10px 0; padding: 0; font-size: 17px; line-height: 1.45; font-weight: 800; opacity: 0.92;">${escapeHtml(panel.title)}</h3>
    ${panel.intro ? `<p style="margin: 0 0 12px 0; padding: 0; font-size: 13px; line-height: 1.76; opacity: 0.74; text-align: justify;">${inlineFormat(panel.intro)}</p>` : ""}
    ${points ? `<ul style="margin: 0 0 14px 18px; padding: 0;">${points}</ul>` : ""}
    ${images ? `<section style="box-sizing: border-box; margin: 10px -1% 0 -1%; font-size: 0;">${images}</section>` : ""}
  </section>`;
    })
    .join("");
  return `
<section style="box-sizing: border-box; margin: 20px 8px; font-family: ${FONT};">
${block.title ? `<h2 style="margin: 0 0 12px 0; padding: 0; font-size: 15px; line-height: 1.45; font-weight: 700; opacity: 0.9;">${escapeHtml(block.title)}</h2>` : ""}
${panelHtml}
</section>`;
}

function painCards(block) {
  const items = block.items || [];
  const itemHtml = items
    .map((item) => {
      const bullets = lines(item.points)
        .map((point) => `<li style="margin: 8px 0; padding: 0; font-size: 13px; line-height: 1.75; opacity: 0.76; text-align: justify;">${inlineFormat(point)}</li>`)
        .join("");
      return `
  <section style="box-sizing: border-box; margin: 18px 0; padding: 20px 18px; border-radius: 12px; border: 1px solid rgba(128, 128, 128, 0.14); background-color: transparent; font-family: ${FONT};">
    <h3 style="margin: 0 0 12px 0; padding: 0; font-size: 15px; line-height: 1.45; font-weight: 700; opacity: 0.9;">${escapeHtml(item.title)}</h3>
    <ul style="margin: 0 0 0 18px; padding: 0;">${bullets}</ul>
  </section>`;
    })
    .join("");
  return `
<section style="box-sizing: border-box; margin: 18px 8px; font-family: ${FONT};">
${itemHtml}
</section>`;
}

function horizontalCards(block) {
  const cards = block.cards || block.items || [];
  const cardWidth = block.cardWidth || "78%";
  const cardsHtml = cards
    .map((card, index) => {
      const src = card.src || PLACEHOLDER_IMG;
      const label = card.label || String(index + 1).padStart(2, "0");
      const points = lines(card.points)
        .map((point) => `<p style="margin: 6px 0 0 0; padding: 0; font-size: 12px; line-height: 1.55; letter-spacing: 0.2px; opacity: 0.68; white-space: normal; text-align: justify;">${inlineFormat(point)}</p>`)
        .join("");
      return `
    <section style="box-sizing: border-box; display: inline-block; vertical-align: top; width: ${escapeHtml(cardWidth)}; margin-right: 12px; white-space: normal; border-radius: 14px; overflow: hidden; border: 1px solid rgba(128, 128, 128, 0.16); background-color: rgba(128, 128, 128, 0.04); font-family: ${FONT};">
      <section style="box-sizing: border-box; width: 100%; background-color: rgba(128, 128, 128, 0.05);">
        <img src="${escapeHtml(src)}" alt="${escapeHtml(card.alt || card.title || "横滑卡片图片")}" style="display: block; width: 100%; height: auto; border: none; outline: none;" />
      </section>
      <section style="box-sizing: border-box; padding: 14px 14px 16px 14px;">
        <p style="margin: 0 0 7px 0; padding: 0; font-family: ${MONO}; font-size: 11px; line-height: 1.4; letter-spacing: 1px; opacity: 0.45;">${escapeHtml(label)}</p>
        <h3 style="margin: 0; padding: 0; font-size: 15px; line-height: 1.4; font-weight: 700; letter-spacing: 0.2px; opacity: 0.9;">${escapeHtml(card.title)}</h3>
        ${card.body ? `<p style="margin: 8px 0 0 0; padding: 0; font-size: 13px; line-height: 1.65; letter-spacing: 0.2px; opacity: 0.72; white-space: normal; text-align: justify;">${inlineFormat(card.body)}</p>` : ""}
        ${points}
        ${card.caption ? `<p style="margin: 10px 0 0 0; padding: 0; font-size: 11px; line-height: 1.45; letter-spacing: 0.2px; opacity: 0.42; white-space: normal;">${escapeHtml(card.caption)}</p>` : ""}
      </section>
    </section>`;
    })
    .join("");
  return `
<p><br></p>
<section style="box-sizing: border-box; margin: 22px 0 20px 0; font-family: ${FONT};">
  ${block.title ? `<section style="box-sizing: border-box; margin: 0 8px 12px 8px;"><h3 style="margin: 0; padding: 0; font-size: 15px; line-height: 1.45; font-weight: 700; letter-spacing: 0.2px; opacity: 0.9;">${escapeHtml(block.title)}</h3>${block.hint ? `<p style="margin: 6px 0 0 0; padding: 0; font-size: 12px; line-height: 1.5; opacity: 0.48;">${escapeHtml(block.hint)}</p>` : ""}</section>` : ""}
  <section style="box-sizing: border-box; overflow-x: auto; overflow-y: hidden; white-space: nowrap; padding: 0 8px 8px 8px; -webkit-overflow-scrolling: touch;">
${cardsHtml}
  </section>
</section>`;
}

function annotation(block) {
  return `
<section style="box-sizing: border-box; margin: 4px 8px 16px 8px; text-align: left; font-family: ${FONT};">
  <p style="margin: 0; padding: 0; font-size: 12px; opacity: 0.5; line-height: 1.4; letter-spacing: 0.3px; text-align: justify;">${escapeHtml(block.text || block.body)}</p>
</section>`;
}

function divider() {
  return `
<p><br></p>
<section style="box-sizing: border-box; margin: 40px 8px; display: flex; align-items: center; justify-content: center;">
  <section style="flex-grow: 1; height: 1px; background-color: rgba(128, 128, 128, 0.15); font-size: 0; line-height: 0;">&#8203;</section>
  <section style="width: 3px; height: 3px; border-radius: 50%; background-color: rgba(128, 128, 128, 0.4); margin: 0 16px; flex-shrink: 0; font-size: 0; line-height: 0;">&#8203;</section>
  <section style="flex-grow: 1; height: 1px; background-color: rgba(128, 128, 128, 0.15); font-size: 0; line-height: 0;">&#8203;</section>
</section>
<p><br></p>`;
}

function image(block) {
  const src = block.src || PLACEHOLDER_IMG;
  const alt = block.alt || "图片占位";
  const captionHtml = block.caption ? annotation({ text: block.caption }) : "";
  return `
<p><br></p>
<section style="box-sizing: border-box; display: block; width: fit-content; max-width: 96%; margin: 24px auto; overflow: hidden; border-radius: 18px; border: 1px solid rgba(128, 128, 128, 0.15); box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03); outline: none;">
  <img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" style="display: block; width: 100%; height: auto; border: none; outline: none;" />
</section>
${captionHtml}
<p><br></p>`;
}

function table(block) {
  const headers = block.headers || [];
  const rows = block.rows || [];
  const isWide = Boolean(block.scrollX || block.width);
  const tableWidth = block.width || "100%";
  const headerHtml = headers
    .map((header) => `<th style="padding: 14px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.2); font-weight: 600; opacity: 0.9;">${escapeHtml(header)}</th>`)
    .join("");
  const rowHtml = rows
    .map((row, rowIndex) => {
      const isLast = rowIndex === rows.length - 1;
      const border = isLast ? "none" : "1px solid rgba(128, 128, 128, 0.1)";
      const cells = row
        .map((cell, cellIndex) => {
          const weight = cellIndex === 0 ? "font-weight: 600;" : "";
          return `<td style="padding: 12px 16px; border-bottom: ${border}; opacity: 0.82; ${weight}">${escapeHtml(cell)}</td>`;
        })
        .join("");
      return `<tr>${cells}</tr>`;
    })
    .join("");
  return `
<p><br></p>
<section style="box-sizing: border-box; margin: 24px 8px; border-radius: 12px; border: 1px solid rgba(128, 128, 128, 0.15); overflow-x: ${isWide ? "auto" : "hidden"}; overflow-y: hidden; background-color: rgba(128, 128, 128, 0.02); font-family: ${FONT}; -webkit-overflow-scrolling: touch;">
  <table style="width: ${escapeHtml(tableWidth)}; border-collapse: collapse; text-align: left; font-size: 14px; margin: 0; padding: 0;">
    <thead><tr style="background-color: rgba(128, 128, 128, 0.06);">${headerHtml}</tr></thead>
    <tbody>${rowHtml}</tbody>
  </table>
</section>
<p><br></p>`;
}

function timeline(block) {
  const items = block.items || [];
  const itemHtml = items
    .map((item, index) => {
      const isFirst = index === 0;
      const isLast = index === items.length - 1;
      const topSpacer = isFirst ? `<section style="height: 6px; width: 1.5px; font-size: 0;">&#8203;</section>` : "";
      const line = isLast
        ? `<section style="height: 12px; width: 1.5px; font-size: 0;">&#8203;</section>`
        : `<section style="flex-grow: 1; min-height: 28px; width: 1.5px; background-color: rgba(128, 128, 128, 0.12); margin-top: 8px; margin-bottom: 8px; border-radius: 1px; font-size: 0;">&#8203;</section>`;
      return `
  <section style="display: flex; margin-bottom: 0; align-items: stretch;">
    <section style="width: 32px; display: flex; flex-direction: column; align-items: center; flex-shrink: 0;">
      ${topSpacer}
      <section style="width: 24px; height: 24px; border-radius: 50%; background-color: rgba(128, 128, 128, 0.05); border: 1px solid rgba(128, 128, 128, 0.2); display: flex; align-items: center; justify-content: center; z-index: 1; flex-shrink: 0;">
        <span style="font-family: ${MONO}; font-size: 14px; font-weight: 600; opacity: 0.8; line-height: 1;">${index + 1}</span>
      </section>
      ${line}
    </section>
    <section style="margin-left: 16px; flex: 1; padding-top: 4px; padding-bottom: ${isLast ? "12px" : "24px"};">
      <h3 style="margin: 0; padding: 0; font-size: 14px; font-weight: 600; opacity: 0.9; line-height: 1.4; letter-spacing: 0.5px;">${escapeHtml(item.title)}</h3>
      <p style="margin: 6px 0 0 0; padding: 0; font-size: 14px; opacity: 0.65; line-height: 1.6; text-align: justify; letter-spacing: 0.3px;">${escapeHtml(item.body || item.text)}</p>
    </section>
  </section>`;
    })
    .join("\n");
  return `
<p><br></p>
<section style="box-sizing: border-box; padding: 10px 0; margin-left: 8px; font-family: ${FONT};">
${itemHtml}
</section>
<p><br></p>`;
}

function renderBlock(block, spec) {
  const type = block.type || "paragraph";
  const renderers = {
    hero,
    paragraph,
    subtitle,
    sectionTitle,
    card,
    plainSection,
    editorNote,
    insightCards,
    metricGrid,
    trendList,
    detailPanels,
    painCards,
    horizontalCards,
    annotation,
    divider,
    image,
    table,
    timeline,
    rawHtml: (raw) => raw.html || "",
  };
  if (!renderers[type]) {
    throw new Error(`Unknown block type: ${type}`);
  }
  return renderers[type](block, spec);
}

function renderArticle(spec) {
  const blocks = spec.blocks || [];
  return blocks.map((block) => renderBlock(block, spec)).join("\n");
}

function escapeTemplateLiteral(value) {
  return String(value).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function buildConsoleScript(html, options = {}) {
  const directInsert = Boolean(options.directInsert);
  return `(function injectWechatWeeklyArticle() {
  const DIRECT_INSERT = ${directInsert};
  const htmlString = \`${escapeTemplateLiteral(html)}\`;

  function findEditor() {
    const active = document.activeElement;
    if (active && active.isContentEditable) return active;
    return document.querySelector('#js_editor_area [contenteditable="true"], [contenteditable="true"]');
  }

  function insertIntoEditor() {
    if (!DIRECT_INSERT) return false;
    const editor = findEditor();
    if (!editor) return false;
    editor.focus();
    return document.execCommand('insertHTML', false, htmlString);
  }

  async function copyRichHtml() {
    const plainText = htmlString
      .replace(/<style[\\s\\S]*?<\\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\\s+/g, ' ')
      .trim();
    if (navigator.clipboard && window.ClipboardItem) {
      const htmlBlob = new Blob([htmlString], { type: 'text/html' });
      const textBlob = new Blob([plainText], { type: 'text/plain' });
      await navigator.clipboard.write([new ClipboardItem({ 'text/html': htmlBlob, 'text/plain': textBlob })]);
      return;
    }
    await navigator.clipboard.writeText(plainText);
  }

  async function run() {
    let inserted = false;
    try {
      inserted = insertIntoEditor();
      await copyRichHtml();
      console.log('%c完整公众号内容已准备好', 'color: #30d158; font-weight: bold; font-size: 16px;');
      console.log(inserted ? '已尝试直接写入当前编辑器，同时也已复制富文本。' : '已复制富文本，请在公众号编辑器中 Cmd/Ctrl+V 粘贴。');
      console.log('图片占位粘贴后可在编辑器内逐个替换。');
    } catch (err) {
      console.warn('首次写入剪贴板失败，通常是浏览器需要一次用户点击授权。请点击页面空白处。', err);
      const clickHandler = async () => {
        try {
          const clickedInsert = insertIntoEditor();
          await copyRichHtml();
          console.log('%c富文本已复制', 'color: #30d158; font-weight: bold;');
          console.log(clickedInsert ? '已尝试直接写入当前编辑器。' : '请回到公众号编辑器粘贴。');
        } catch (clickErr) {
          console.error('剪贴板写入仍失败:', clickErr);
        } finally {
          document.removeEventListener('click', clickHandler);
        }
      };
      document.addEventListener('click', clickHandler, { once: true });
    }
  }

  run();
})();`;
}

function main() {
  const inputPath = process.argv[2];
  const outputPath = process.argv[3] || path.join("framework", "output", "inject_article.js");
  if (!inputPath) {
    console.error("Usage: node framework/wechat_article_builder.js <article_spec.json> [output.js]");
    process.exit(1);
  }
  const spec = JSON.parse(fs.readFileSync(inputPath, "utf8"));
  const html = renderArticle(spec);
  const script = buildConsoleScript(html, { directInsert: spec.directInsert });
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, script, "utf8");
  console.log(`Generated ${outputPath}`);
}

if (require.main === module) {
  main();
}

module.exports = { renderArticle, buildConsoleScript };
