(function injectAppleTable14px() {
  const htmlString = `
    <p><br></p>
    <section style="box-sizing: border-box; margin: 24px 8px; border-radius: 12px; border: 1px solid rgba(128, 128, 128, 0.15); overflow: hidden; background-color: rgba(128, 128, 128, 0.02); font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">
      <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px; margin: 0; padding: 0;">
        <thead>
          <tr style="background-color: rgba(128, 128, 128, 0.06);">
            <th style="padding: 14px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.2); font-weight: 600; opacity: 0.9; width: 30%;">指标</th>
            <th style="padding: 14px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.2); font-weight: 600; opacity: 0.9; width: 50%;">社交组 vs 功能组</th>
            <th style="padding: 14px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.2); font-weight: 600; opacity: 0.9; width: 20%;">结果</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.9; font-weight: 600;">总任务时长</td>
            <td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.8;">显著更长</td>
            <td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.9; font-weight: 600; font-family: 'SF Mono', Consolas, Menlo, monospace;">p=0.001</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px; border-bottom: none; opacity: 0.8;">有效工作时间</td>
            <td style="padding: 12px 16px; border-bottom: none; opacity: 0.8;">无差异</td>
            <td style="padding: 12px 16px; border-bottom: none; opacity: 0.6; font-family: 'SF Mono', Consolas, Menlo, monospace;">ns</td>
          </tr>
        </tbody>
      </table>
    </section>
    <p><br></p>
  `;
  const clickHandler = async () => {
    try {
      const blob = new Blob([htmlString], { type: 'text/html' });
      await navigator.clipboard.write([new ClipboardItem({ 'text/html': blob })]);
      console.log('%c✅ 数据表格已就绪！', 'color: #30d158; font-weight: bold;');
    } catch (err) {} finally { document.removeEventListener('click', clickHandler); }
  };
  document.addEventListener('click', clickHandler);
})();