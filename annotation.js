(function injectAppleCaption12px() {
  const htmlString = `
    <section style="box-sizing: border-box; margin: 4px 8px 16px 8px; text-align: left; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">
      <p style="margin: 0; padding: 0; font-size: 12px; opacity: 0.5; line-height: 1.4; letter-spacing: 0.3px; text-align: justify;">
        * 注：此处输入你的小字标注或补充说明。由于采用了紧凑的边距控制，它会与上方紧邻的卡片、表格或时间轴组件保持贴合的视觉结构，不会产生割裂的空白感。
      </p>
    </section>
  `;

  const clickHandler = async () => {
    try {
      const blob = new Blob([htmlString], { type: 'text/html' });
      await navigator.clipboard.write([new ClipboardItem({ 'text/html': blob })]);
      console.log('%c✅ Apple 12px 紧凑小字标注已就绪！', 'color: #30d158; font-weight: bold; font-size: 16px;');
      console.log('%c👉 请紧贴着上一个组件下方，前往编辑器内 Cmd+V 粘贴。', 'color: #515154; font-size: 14px;');
    } catch (err) {
      console.error('❌ 剪贴板写入失败:', err);
    } finally {
      document.removeEventListener('click', clickHandler);
    }
  };

  document.addEventListener('click', clickHandler);
  console.log('%c⚠️ 脚本已挂载！请点击页面空白处提取小字标注。', 'color: #ff9500; font-weight: bold; font-size: 14px;');
})();