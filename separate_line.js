(function injectAppleDivider() {
  const htmlString = `
    <p><br></p>
    <section style="box-sizing: border-box; margin: 40px 8px; display: flex; align-items: center; justify-content: center;">
      <section style="flex-grow: 1; height: 1px; background-color: rgba(128, 128, 128, 0.15); font-size: 0; line-height: 0;">&#8203;</section>
      <section style="width: 3px; height: 3px; border-radius: 50%; background-color: rgba(128, 128, 128, 0.4); margin: 0 16px; flex-shrink: 0; font-size: 0; line-height: 0;">&#8203;</section>
      <section style="flex-grow: 1; height: 1px; background-color: rgba(128, 128, 128, 0.15); font-size: 0; line-height: 0;">&#8203;</section>
    </section>
    <p><br></p>
  `;
  const clickHandler = async () => {
    try {
      const blob = new Blob([htmlString], { type: 'text/html' });
      await navigator.clipboard.write([new ClipboardItem({ 'text/html': blob })]);
      console.log('%c✅ 分割线已就绪！', 'color: #30d158; font-weight: bold;');
    } catch (err) {} finally { document.removeEventListener('click', clickHandler); }
  };
  document.addEventListener('click', clickHandler);
})();