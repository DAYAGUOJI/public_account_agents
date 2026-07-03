(function injectStyledImageContainer() {
  const placeholderImgUrl = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgwIiBoZWlnaHQ9IjYwNyIgdmlld0JveD0iMCAwIDEwODAgNjA3Ij48cmVjdCB3aWR0aD0iMTA4MCIgaGVpZ2h0PSI2MDciIGZpbGw9InJnYmEoMTI4LDEyOCwxMjgsMC4wOCkiLz48ZWxsaXBzZSBjeD0iNTQwIiBjeT0iMzAzLjUiIHJ4PSIxNDAiIHJ5PSIxNDAiIGZpbGw9InJnYmEoMTI4LDEyOCwxMjgsMC4xKSIvPjwvc3ZnPg==";
  const htmlString = `
    <p><br></p>
    <section style="box-sizing: border-box; display: block; width: fit-content; max-width: 96%; margin: 24px auto; overflow: hidden; border-radius: 18px; border: 1px solid rgba(128, 128, 128, 0.15); box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03); outline: none;">
      <img src="${placeholderImgUrl}" alt="图片加载中..." style="display: block; width: 100%; height: auto; border: none; outline: none;" />
    </section>
    <p><br></p>
  `;
  const clickHandler = async () => {
    try {
      const blob = new Blob([htmlString], { type: 'text/html' });
      await navigator.clipboard.write([new ClipboardItem({ 'text/html': blob })]);
      console.log('%c✅ 图片容器已就绪！粘贴后在编辑器内替换图片即可。', 'color: #30d158; font-weight: bold;');
    } catch (err) {} finally { document.removeEventListener('click', clickHandler); }
  };
  document.addEventListener('click', clickHandler);
})();