(function injectWechatWeeklyArticle() {
  const DIRECT_INSERT = false;
  const htmlString = `
<section style="box-sizing: border-box; margin: 8px 8px 28px 8px; padding: 30px 24px; border-radius: 20px; border: 1px solid rgba(128, 128, 128, 0.15); background-color: rgba(128, 128, 128, 0.055); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02); font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">
  <p style="margin: 0 0 12px 0; font-size: 12px; line-height: 1.4; letter-spacing: 1px; opacity: 0.55; font-family: 'SF Mono', Consolas, Menlo, monospace;">WEEKLY UPDATE · 2026-07-01</p>
  <h1 style="margin: 0; padding: 0; font-size: 22px; line-height: 1.35; font-weight: 700; letter-spacing: 0.3px; opacity: 0.92;">课题组本周更新</h1>
  <p style="margin: 16px 0 0 0; padding: 0; font-size: 14px; line-height: 1.8; letter-spacing: 0.3px; opacity: 0.68; text-align: justify;">本期整理了组会讨论、科研进展、实验安排和下周计划，方便组内成员快速回顾本周重点。</p>
</section>

<p><br></p>
<section style="box-sizing: border-box; margin: 32px 8px 16px 8px; text-align: left;">
  <h3 style="margin: 0; padding: 0; font-size: 14px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; opacity: 0.9; letter-spacing: 0.5px; line-height: 1.5; display: flex; align-items: center;">
    <span style="box-sizing: border-box; display: inline-block; flex-shrink: 0; width: 14px; height: 14px; padding: 2px; border: 1.5px solid rgba(128, 128, 128, 0.35); border-radius: 50%; background-color: rgba(128, 128, 128, 0.65); background-clip: content-box; margin-right: 10px; font-size: 14px; line-height: 1;">&#8203;</span>
    <span>本周概览</span>
  </h3>
</section>

<p style="margin: 14px 8px; padding: 0; font-size: 14px; line-height: 1.85; letter-spacing: 0.3px; opacity: 0.82; text-align: justify; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">
  本周，课题组围绕当前项目进展开展了集中讨论，重点梳理实验设计、数据分析和论文写作中的关键问题。
</p>

<section style="box-sizing: border-box; margin: 24px 8px; padding: 28px 24px; background-color: rgba(128, 128, 128, 0.06); border-radius: 20px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02); border: 1px solid rgba(128, 128, 128, 0.15); font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left; line-height: 1.6;">
  <h2 style="margin: 0 0 12px 0; padding: 0; font-size: 14px; font-weight: 600; opacity: 0.9; letter-spacing: 0.5px;">核心进展</h2>
  <p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.75; line-height: 1.8; letter-spacing: 0.5px; text-align: justify;">完成了阶段性实验结果的初步整理，并针对异常样本进行了复核。</p><p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.75; line-height: 1.8; letter-spacing: 0.5px; text-align: justify;">组内成员对下一轮实验变量和记录规范进行了统一。</p>
</section>

<p><br></p>
<section style="box-sizing: border-box; display: block; width: fit-content; max-width: 96%; margin: 24px auto; overflow: hidden; border-radius: 18px; border: 1px solid rgba(128, 128, 128, 0.15); box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03); outline: none;">
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgwIiBoZWlnaHQ9IjYwNyIgdmlld0JveD0iMCAwIDEwODAgNjA3Ij48cmVjdCB3aWR0aD0iMTA4MCIgaGVpZ2h0PSI2MDciIGZpbGw9InJnYmEoMTI4LDEyOCwxMjgsMC4wOCkiLz48ZWxsaXBzZSBjeD0iNTQwIiBjeT0iMzAzLjUiIHJ4PSIxNDAiIHJ5PSIxNDAiIGZpbGw9InJnYmEoMTI4LDEyOCwxMjgsMC4xKSIvPjwvc3ZnPg==" alt="IMG_01 组会照片占位" style="display: block; width: 100%; height: auto; border: none; outline: none;" />
</section>

<section style="box-sizing: border-box; margin: 4px 8px 16px 8px; text-align: left; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">
  <p style="margin: 0; padding: 0; font-size: 12px; opacity: 0.5; line-height: 1.4; letter-spacing: 0.3px; text-align: justify;">* 图 IMG_01：组会现场照片，粘贴后请在公众号编辑器中替换。</p>
</section>
<p><br></p>

<p><br></p>
<section style="box-sizing: border-box; margin: 32px 8px 16px 8px; text-align: left;">
  <h3 style="margin: 0; padding: 0; font-size: 14px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; opacity: 0.9; letter-spacing: 0.5px; line-height: 1.5; display: flex; align-items: center;">
    <span style="box-sizing: border-box; display: inline-block; flex-shrink: 0; width: 14px; height: 14px; padding: 2px; border: 1.5px solid rgba(128, 128, 128, 0.35); border-radius: 50%; background-color: rgba(128, 128, 128, 0.65); background-clip: content-box; margin-right: 10px; font-size: 14px; line-height: 1;">&#8203;</span>
    <span>研究进展</span>
  </h3>
</section>

<p><br></p>
<section style="box-sizing: border-box; padding: 10px 0; margin-left: 8px; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">

  <section style="display: flex; margin-bottom: 0; align-items: stretch;">
    <section style="width: 32px; display: flex; flex-direction: column; align-items: center; flex-shrink: 0;">
      <section style="height: 6px; width: 1.5px; font-size: 0;">&#8203;</section>
      <section style="width: 24px; height: 24px; border-radius: 50%; background-color: rgba(128, 128, 128, 0.05); border: 1px solid rgba(128, 128, 128, 0.2); display: flex; align-items: center; justify-content: center; z-index: 1; flex-shrink: 0;">
        <span style="font-family: 'SF Mono', Consolas, Menlo, monospace; font-size: 14px; font-weight: 600; opacity: 0.8; line-height: 1;">1</span>
      </section>
      <section style="flex-grow: 1; min-height: 28px; width: 1.5px; background-color: rgba(128, 128, 128, 0.12); margin-top: 8px; margin-bottom: 8px; border-radius: 1px; font-size: 0;">&#8203;</section>
    </section>
    <section style="margin-left: 16px; flex: 1; padding-top: 4px; padding-bottom: 24px;">
      <h3 style="margin: 0; padding: 0; font-size: 14px; font-weight: 600; opacity: 0.9; line-height: 1.4; letter-spacing: 0.5px;">问题梳理</h3>
      <p style="margin: 6px 0 0 0; padding: 0; font-size: 14px; opacity: 0.65; line-height: 1.6; text-align: justify; letter-spacing: 0.3px;">围绕当前研究问题，重新确认变量定义和实验记录口径。</p>
    </section>
  </section>

  <section style="display: flex; margin-bottom: 0; align-items: stretch;">
    <section style="width: 32px; display: flex; flex-direction: column; align-items: center; flex-shrink: 0;">
      
      <section style="width: 24px; height: 24px; border-radius: 50%; background-color: rgba(128, 128, 128, 0.05); border: 1px solid rgba(128, 128, 128, 0.2); display: flex; align-items: center; justify-content: center; z-index: 1; flex-shrink: 0;">
        <span style="font-family: 'SF Mono', Consolas, Menlo, monospace; font-size: 14px; font-weight: 600; opacity: 0.8; line-height: 1;">2</span>
      </section>
      <section style="flex-grow: 1; min-height: 28px; width: 1.5px; background-color: rgba(128, 128, 128, 0.12); margin-top: 8px; margin-bottom: 8px; border-radius: 1px; font-size: 0;">&#8203;</section>
    </section>
    <section style="margin-left: 16px; flex: 1; padding-top: 4px; padding-bottom: 24px;">
      <h3 style="margin: 0; padding: 0; font-size: 14px; font-weight: 600; opacity: 0.9; line-height: 1.4; letter-spacing: 0.5px;">数据复核</h3>
      <p style="margin: 6px 0 0 0; padding: 0; font-size: 14px; opacity: 0.65; line-height: 1.6; text-align: justify; letter-spacing: 0.3px;">检查异常样本，补充记录缺失信息，并同步更新分析表。</p>
    </section>
  </section>

  <section style="display: flex; margin-bottom: 0; align-items: stretch;">
    <section style="width: 32px; display: flex; flex-direction: column; align-items: center; flex-shrink: 0;">
      
      <section style="width: 24px; height: 24px; border-radius: 50%; background-color: rgba(128, 128, 128, 0.05); border: 1px solid rgba(128, 128, 128, 0.2); display: flex; align-items: center; justify-content: center; z-index: 1; flex-shrink: 0;">
        <span style="font-family: 'SF Mono', Consolas, Menlo, monospace; font-size: 14px; font-weight: 600; opacity: 0.8; line-height: 1;">3</span>
      </section>
      <section style="height: 12px; width: 1.5px; font-size: 0;">&#8203;</section>
    </section>
    <section style="margin-left: 16px; flex: 1; padding-top: 4px; padding-bottom: 12px;">
      <h3 style="margin: 0; padding: 0; font-size: 14px; font-weight: 600; opacity: 0.9; line-height: 1.4; letter-spacing: 0.5px;">下周安排</h3>
      <p style="margin: 6px 0 0 0; padding: 0; font-size: 14px; opacity: 0.65; line-height: 1.6; text-align: justify; letter-spacing: 0.3px;">继续推进实验复测，并准备阶段性汇报材料。</p>
    </section>
  </section>
</section>
<p><br></p>

<p><br></p>
<section style="box-sizing: border-box; margin: 24px 8px; border-radius: 12px; border: 1px solid rgba(128, 128, 128, 0.15); overflow: hidden; background-color: rgba(128, 128, 128, 0.02); font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">
  <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px; margin: 0; padding: 0;">
    <thead><tr style="background-color: rgba(128, 128, 128, 0.06);"><th style="padding: 14px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.2); font-weight: 600; opacity: 0.9;">事项</th><th style="padding: 14px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.2); font-weight: 600; opacity: 0.9;">状态</th><th style="padding: 14px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.2); font-weight: 600; opacity: 0.9;">负责人</th></tr></thead>
    <tbody><tr><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; font-weight: 600;">实验记录复核</td><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; ">进行中</td><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; ">待填写</td></tr><tr><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; font-weight: 600;">数据分析脚本整理</td><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; ">进行中</td><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; ">待填写</td></tr><tr><td style="padding: 12px 16px; border-bottom: none; opacity: 0.82; font-weight: 600;">组会材料汇总</td><td style="padding: 12px 16px; border-bottom: none; opacity: 0.82; ">待完成</td><td style="padding: 12px 16px; border-bottom: none; opacity: 0.82; ">待填写</td></tr></tbody>
  </table>
</section>
<p><br></p>

<section style="box-sizing: border-box; margin: 24px 8px; padding: 16px 20px; background-color: rgba(128, 128, 128, 0.04); border: 1px dashed rgba(128, 128, 128, 0.2); border-left: 4px solid rgba(128, 128, 128, 0.4); border-radius: 8px; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left; line-height: 1.6;">
  <div style="margin-bottom: 8px; display: flex; align-items: center;">
    <span style="font-family: 'SF Mono', Consolas, Menlo, monospace; font-size: 14px; font-weight: 600; opacity: 0.6; letter-spacing: 1px;">&gt; EDITOR&#39;S NOTE</span>
  </div>
  <p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.8; line-height: 1.7; letter-spacing: 0.5px; text-align: justify;">以上内容为示例结构。正式生成时，应以同学提供的 HTML 和事实材料为准，不自动补写成果状态。</p>
</section>

<p><br></p>
<section style="box-sizing: border-box; margin: 40px 8px; display: flex; align-items: center; justify-content: center;">
  <section style="flex-grow: 1; height: 1px; background-color: rgba(128, 128, 128, 0.15); font-size: 0; line-height: 0;">&#8203;</section>
  <section style="width: 3px; height: 3px; border-radius: 50%; background-color: rgba(128, 128, 128, 0.4); margin: 0 16px; flex-shrink: 0; font-size: 0; line-height: 0;">&#8203;</section>
  <section style="flex-grow: 1; height: 1px; background-color: rgba(128, 128, 128, 0.15); font-size: 0; line-height: 0;">&#8203;</section>
</section>
<p><br></p>

<section style="box-sizing: border-box; margin: 4px 8px 16px 8px; text-align: left; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">
  <p style="margin: 0; padding: 0; font-size: 12px; opacity: 0.5; line-height: 1.4; letter-spacing: 0.3px; text-align: justify;">* 发布前请在手机预览中检查图片、表格和图注是否对应。</p>
</section>`;

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
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
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
      console.log('%c✅ 完整公众号内容已准备好', 'color: #30d158; font-weight: bold; font-size: 16px;');
      console.log(inserted ? '已尝试直接写入当前编辑器，同时也已复制富文本。' : '已复制富文本，请在公众号编辑器中 Cmd/Ctrl+V 粘贴。');
      console.log('图片占位粘贴后可在编辑器内逐个替换。');
    } catch (err) {
      console.warn('首次写入剪贴板失败，通常是浏览器需要一次用户点击授权。请点击页面空白处。', err);
      const clickHandler = async () => {
        try {
          const clickedInsert = insertIntoEditor();
          await copyRichHtml();
          console.log('%c✅ 富文本已复制', 'color: #30d158; font-weight: bold;');
          console.log(clickedInsert ? '已尝试直接写入当前编辑器。' : '请回到公众号编辑器粘贴。');
        } catch (clickErr) {
          console.error('❌ 剪贴板写入仍失败:', clickErr);
        } finally {
          document.removeEventListener('click', clickHandler);
        }
      };
      document.addEventListener('click', clickHandler, { once: true });
    }
  }

  run();
})();