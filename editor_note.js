(function injectEditorNote14px() {
  const htmlString = `
    <section style="box-sizing: border-box; margin: 24px 8px; padding: 16px 20px; background-color: rgba(128, 128, 128, 0.04); border: 1px dashed rgba(128, 128, 128, 0.2); border-left: 4px solid rgba(128, 128, 128, 0.4); border-radius: 8px; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left; line-height: 1.6;">
      <div style="margin-bottom: 8px; display: flex; align-items: center;">
        <span style="font-family: 'SF Mono', Consolas, Menlo, monospace; font-size: 14px; font-weight: 600; opacity: 0.6; letter-spacing: 1px;">> EDITOR'S NOTE</span>
      </div>
      <p style="margin: 0; padding: 0; font-size: 14px; opacity: 0.8; line-height: 1.7; letter-spacing: 0.5px; text-align: justify;">
        这段文本是一个占位符。字号已全量统一为 14px，使得容器内的信息密度更加均衡紧凑，适合用来做背景补充或声明。
      </p>
    </section>
  `;
  const clickHandler = async () => {
    try {
      const blob = new Blob([htmlString], { type: 'text/html' });
      await navigator.clipboard.write([new ClipboardItem({ 'text/html': blob })]);
      console.log('%c✅ 14px版批注已就绪！', 'color: #30d158; font-weight: bold;');
    } catch (err) {} finally { document.removeEventListener('click', clickHandler); }
  };
  document.addEventListener('click', clickHandler);
})();