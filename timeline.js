(function injectAppleTimeline14px() {
  const htmlString = `
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
              <h3 style="margin: 0; padding: 0; font-size: 14px; font-weight: 600; opacity: 0.9; line-height: 1.4; letter-spacing: 0.5px;">语音监听</h3>
              <p style="margin: 6px 0 0 0; padding: 0; font-size: 14px; opacity: 0.65; line-height: 1.6; text-align: justify; letter-spacing: 0.3px;">持续监听语音输入，同步生成实时部分文本，减少等待感知延迟</p>
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
              <h3 style="margin: 0; padding: 0; font-size: 14px; font-weight: 600; opacity: 0.9; line-height: 1.4; letter-spacing: 0.5px;">意图识别</h3>
              <p style="margin: 6px 0 0 0; padding: 0; font-size: 14px; opacity: 0.65; line-height: 1.6; text-align: justify; letter-spacing: 0.3px;">调用 GPT-4o，区分"任务请求"与"社交闲聊"；系统优先处理任务，再进行闲聊回应</p>
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
              <h3 style="margin: 0; padding: 0; font-size: 14px; font-weight: 600; opacity: 0.9; line-height: 1.4; letter-spacing: 0.5px;">行为生成</h3>
              <p style="margin: 6px 0 0 0; padding: 0; font-size: 14px; opacity: 0.65; line-height: 1.6; text-align: justify; letter-spacing: 0.3px;">根据意图生成对应回复，通过 TTS（文字转语音）输出；机器人会等待用户结束对话，不强行打断</p>
          </section>
      </section>
  </section>
  <p><br></p>
  `;
  const clickHandler = async () => {
    try {
      const blob = new Blob([htmlString], { type: 'text/html' });
      await navigator.clipboard.write([new ClipboardItem({ 'text/html': blob })]);
      console.log('%c✅ 14px版时间轴已就绪！', 'color: #30d158; font-weight: bold;');
    } catch (err) {} finally { document.removeEventListener('click', clickHandler); }
  };
  document.addEventListener('click', clickHandler);
})();