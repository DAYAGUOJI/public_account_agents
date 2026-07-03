(function injectSubtitle14px() {
  const htmlString = `
    <p><br></p>
    <section style="box-sizing: border-box; margin: 32px 8px 16px 8px; text-align: left;">
      <h3 style="margin: 0; padding: 0; font-size: 14px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; opacity: 0.9; letter-spacing: 0.5px; line-height: 1.5; display: flex; align-items: center;">
        <span style="box-sizing: border-box; display: inline-block; flex-shrink: 0; width: 14px; height: 14px; padding: 2px; border: 1.5px solid rgba(128, 128, 128, 0.35); border-radius: 50%; background-color: rgba(128, 128, 128, 0.65); background-clip: content-box; margin-right: 10px; font-size: 14px; line-height: 1;">&#8203;</span>
        <span>防删自适应小标题</span>
      </h3>
    </section>
  `;
  const clickHandler = async () => {
    try {
      const blob = new Blob([htmlString], { type: 'text/html' });
      await navigator.clipboard.write([new ClipboardItem({ 'text/html': blob })]);
      console.log('%c✅ 14px版小标题已就绪！', 'color: #30d158; font-weight: bold;');
    } catch (err) {} finally { document.removeEventListener('click', clickHandler); }
  };
  document.addEventListener('click', clickHandler);
})();