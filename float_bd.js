(function injectAppleCard14px() {
  const htmlString = `
    <section style="box-sizing: border-box; margin: 24px 8px; padding: 28px 24px; background-color: rgba(128, 128, 128, 0.06); border-radius: 20px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02); border: 1px solid rgba(128, 128, 128, 0.15); font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left; line-height: 1.6;">
      <h2 style="margin: 0 0 12px 0; padding: 0; font-size: 14px; font-weight: 600; opacity: 0.9; letter-spacing: 0.5px;">
        自适应深色模式标题
      </h2>
      <p style="margin: 0; padding: 0; font-size: 14px; opacity: 0.75; line-height: 1.8; letter-spacing: 0.5px; text-align: justify;">
        这是一张采用“中性灰半透明”方案构建的卡片。它去掉了硬编码的黑白颜色，完全依靠 rgba 通道的透明度与客户端的底层背景进行色彩混合。所有字号已统一为 14px。
      </p>
    </section>
  `;
  const clickHandler = async () => {
    try {
      const blob = new Blob([htmlString], { type: 'text/html' });
      await navigator.clipboard.write([new ClipboardItem({ 'text/html': blob })]);
      console.log('%c✅ 14px版卡片已就绪！', 'color: #30d158; font-weight: bold;');
    } catch (err) {} finally { document.removeEventListener('click', clickHandler); }
  };
  document.addEventListener('click', clickHandler);
})();