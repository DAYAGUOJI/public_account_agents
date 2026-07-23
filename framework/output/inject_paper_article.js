(function injectWechatWeeklyArticle() {
  const DIRECT_INSERT = false;
  const htmlString = `
<section style="box-sizing: border-box; margin: 8px 8px 28px 8px; padding: 30px 24px; border-radius: 20px; border: 1px solid rgba(128, 128, 128, 0.15); background-color: rgba(128, 128, 128, 0.055); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02); font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">
  <p style="margin: 0 0 12px 0; font-size: 12px; line-height: 1.4; letter-spacing: 1px; opacity: 0.55; font-family: 'SF Mono', Consolas, Menlo, monospace;">LITERATURE READING NOTE · No.01</p>
  <h1 style="margin: 0; padding: 0; font-size: 22px; line-height: 1.35; font-weight: 700; letter-spacing: 0.3px; opacity: 0.92;">读书笔记 | Example Paper Title</h1>
  <p style="margin: 16px 0 0 0; padding: 0; font-size: 14px; line-height: 1.8; letter-spacing: 0.3px; opacity: 0.68; text-align: justify;">本期按照固定文献阅读笔记框架，围绕研究动机、研究目标、研究任务、相关研究、研究方法和应用实践拆解论文。</p>
</section>

<p><br></p>
<section style="box-sizing: border-box; margin: 32px 8px 16px 8px; text-align: left;">
  <h3 style="margin: 0; padding: 0; font-size: 14px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; opacity: 0.9; letter-spacing: 0.5px; line-height: 1.5; display: flex; align-items: center;">
    <span style="box-sizing: border-box; display: inline-block; flex-shrink: 0; width: 14px; height: 14px; padding: 2px; border: 1.5px solid rgba(128, 128, 128, 0.35); border-radius: 50%; background-color: rgba(128, 128, 128, 0.65); background-clip: content-box; margin-right: 10px; font-size: 14px; line-height: 1;">&#8203;</span>
    <span>论文信息</span>
  </h3>
</section>

<p><br></p>
<section style="box-sizing: border-box; margin: 24px 8px; border-radius: 12px; border: 1px solid rgba(128, 128, 128, 0.15); overflow-x: hidden; overflow-y: hidden; background-color: rgba(128, 128, 128, 0.02); font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; -webkit-overflow-scrolling: touch;">
  <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px; margin: 0; padding: 0;">
    <thead><tr style="background-color: rgba(128, 128, 128, 0.06);"><th style="padding: 14px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.2); font-weight: 600; opacity: 0.9;">项目</th><th style="padding: 14px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.2); font-weight: 600; opacity: 0.9;">内容</th></tr></thead>
    <tbody><tr><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; font-weight: 600;">题目</td><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; ">Example Paper Title</td></tr><tr><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; font-weight: 600;">期刊/会议</td><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; ">Example Conference 2026</td></tr><tr><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; font-weight: 600;">作者</td><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; ">A. Author, B. Author</td></tr><tr><td style="padding: 12px 16px; border-bottom: none; opacity: 0.82; font-weight: 600;">关键词</td><td style="padding: 12px 16px; border-bottom: none; opacity: 0.82; ">keyword one / keyword two / keyword three</td></tr></tbody>
  </table>
</section>
<p><br></p>

<section style="box-sizing: border-box; margin: 4px 8px 16px 8px; text-align: left; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">
  <p style="margin: 0; padding: 0; font-size: 12px; opacity: 0.5; line-height: 1.4; letter-spacing: 0.3px; text-align: justify;">发表时间：2026；链接：https://example.com/paper</p>
</section>

<p><br></p>

<section style="box-sizing: border-box; margin: 28px 8px 18px 8px; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left;">
  <p style="margin: 0 0 8px 0; padding: 0; font-size: 11px; line-height: 1.4; letter-spacing: 1.4px; opacity: 0.45; font-family: 'SF Mono', Consolas, Menlo, monospace;">01</p>
  <h2 style="margin: 0; padding: 0; font-size: 20px; line-height: 1.35; font-weight: 700; letter-spacing: 0.3px; color: #0A84FF;">介绍</h2>
  <p style="margin: 10px 0 0 0; padding: 0; font-size: 13px; line-height: 1.75; letter-spacing: 0.3px; opacity: 0.62; text-align: justify;">这一部分回答论文为什么要做、想解决什么，以及作者如何拆解研究任务。</p>
</section>

<p><br></p>
<section style="box-sizing: border-box; margin: 32px 8px 16px 8px; text-align: left;">
  <h3 style="margin: 0; padding: 0; font-size: 14px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; opacity: 0.9; letter-spacing: 0.5px; line-height: 1.5; display: flex; align-items: center;">
    <span style="box-sizing: border-box; display: inline-block; flex-shrink: 0; width: 14px; height: 14px; padding: 2px; border: 1.5px solid rgba(128, 128, 128, 0.35); border-radius: 50%; background-color: rgba(128, 128, 128, 0.65); background-clip: content-box; margin-right: 10px; font-size: 14px; line-height: 1;">&#8203;</span>
    <span>1.1 研究动机</span>
  </h3>
</section>

<section style="box-sizing: border-box; margin: 24px 8px; padding: 28px 24px; background-color: rgba(128, 128, 128, 0.06); border-radius: 20px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02); border: 1px solid rgba(128, 128, 128, 0.15); font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left; line-height: 1.6;">
  <h2 style="margin: 0 0 12px 0; padding: 0; font-size: 14px; font-weight: 600; opacity: 0.9; letter-spacing: 0.5px;">1.1 研究动机</h2>
  <p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.75; line-height: 1.8; letter-spacing: 0.5px; text-align: justify;">现有方法在真实场景中仍面临数据稀疏、泛化不足或部署成本较高的问题。</p>
</section>

<p><br></p>
<section style="box-sizing: border-box; margin: 32px 8px 16px 8px; text-align: left;">
  <h3 style="margin: 0; padding: 0; font-size: 14px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; opacity: 0.9; letter-spacing: 0.5px; line-height: 1.5; display: flex; align-items: center;">
    <span style="box-sizing: border-box; display: inline-block; flex-shrink: 0; width: 14px; height: 14px; padding: 2px; border: 1.5px solid rgba(128, 128, 128, 0.35); border-radius: 50%; background-color: rgba(128, 128, 128, 0.65); background-clip: content-box; margin-right: 10px; font-size: 14px; line-height: 1;">&#8203;</span>
    <span>1.2 研究目标</span>
  </h3>
</section>

<section style="box-sizing: border-box; margin: 24px 8px; padding: 28px 24px; background-color: rgba(128, 128, 128, 0.06); border-radius: 20px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02); border: 1px solid rgba(128, 128, 128, 0.15); font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left; line-height: 1.6;">
  <h2 style="margin: 0 0 12px 0; padding: 0; font-size: 14px; font-weight: 600; opacity: 0.9; letter-spacing: 0.5px;">1.2 研究目标</h2>
  <p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.75; line-height: 1.8; letter-spacing: 0.5px; text-align: justify;">论文希望提出一种更稳健的建模框架，用于提升目标任务在复杂场景下的表现。</p>
</section>

<p><br></p>
<section style="box-sizing: border-box; margin: 32px 8px 16px 8px; text-align: left;">
  <h3 style="margin: 0; padding: 0; font-size: 14px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; opacity: 0.9; letter-spacing: 0.5px; line-height: 1.5; display: flex; align-items: center;">
    <span style="box-sizing: border-box; display: inline-block; flex-shrink: 0; width: 14px; height: 14px; padding: 2px; border: 1.5px solid rgba(128, 128, 128, 0.35); border-radius: 50%; background-color: rgba(128, 128, 128, 0.65); background-clip: content-box; margin-right: 10px; font-size: 14px; line-height: 1;">&#8203;</span>
    <span>1.3 研究任务</span>
  </h3>
</section>

<section style="box-sizing: border-box; margin: 24px 8px; padding: 28px 24px; background-color: rgba(128, 128, 128, 0.06); border-radius: 20px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02); border: 1px solid rgba(128, 128, 128, 0.15); font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left; line-height: 1.6;">
  <h2 style="margin: 0 0 12px 0; padding: 0; font-size: 14px; font-weight: 600; opacity: 0.9; letter-spacing: 0.5px;">1.3 研究任务</h2>
  <p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.75; line-height: 1.8; letter-spacing: 0.5px; text-align: justify;">作者将问题拆解为数据表示、模型训练和实验验证三个环节。</p>
</section>

<p><br></p>
<section style="box-sizing: border-box; margin: 38px 8px 32px 8px; height: 1px; background-color: rgba(128, 128, 128, 0.15); font-size: 0; line-height: 0;">&#8203;</section>
<section style="box-sizing: border-box; margin: 28px 8px 18px 8px; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left;">
  <p style="margin: 0 0 8px 0; padding: 0; font-size: 11px; line-height: 1.4; letter-spacing: 1.4px; opacity: 0.45; font-family: 'SF Mono', Consolas, Menlo, monospace;">02</p>
  <h2 style="margin: 0; padding: 0; font-size: 20px; line-height: 1.35; font-weight: 700; letter-spacing: 0.3px; color: #0A84FF;">相关研究</h2>
  <p style="margin: 10px 0 0 0; padding: 0; font-size: 13px; line-height: 1.75; letter-spacing: 0.3px; opacity: 0.62; text-align: justify;">梳理论文所在的研究脉络，以及它与已有工作的关系。</p>
</section>

<p><br></p>
<section style="box-sizing: border-box; margin: 32px 8px 16px 8px; text-align: left;">
  <h3 style="margin: 0; padding: 0; font-size: 14px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; opacity: 0.9; letter-spacing: 0.5px; line-height: 1.5; display: flex; align-items: center;">
    <span style="box-sizing: border-box; display: inline-block; flex-shrink: 0; width: 14px; height: 14px; padding: 2px; border: 1.5px solid rgba(128, 128, 128, 0.35); border-radius: 50%; background-color: rgba(128, 128, 128, 0.65); background-clip: content-box; margin-right: 10px; font-size: 14px; line-height: 1;">&#8203;</span>
    <span>2 相关研究</span>
  </h3>
</section>

<section style="box-sizing: border-box; margin: 24px 8px; padding: 28px 24px; background-color: rgba(128, 128, 128, 0.06); border-radius: 20px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02); border: 1px solid rgba(128, 128, 128, 0.15); font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left; line-height: 1.6;">
  <h2 style="margin: 0 0 12px 0; padding: 0; font-size: 14px; font-weight: 600; opacity: 0.9; letter-spacing: 0.5px;">2 相关研究</h2>
  <p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.75; line-height: 1.8; letter-spacing: 0.5px; text-align: justify;">论文主要对比了传统方法、近期深度学习方法以及面向真实应用的系统化方案。</p>
</section>

<p><br></p>
<section style="box-sizing: border-box; margin: 38px 8px 32px 8px; height: 1px; background-color: rgba(128, 128, 128, 0.15); font-size: 0; line-height: 0;">&#8203;</section>
<section style="box-sizing: border-box; margin: 28px 8px 18px 8px; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left;">
  <p style="margin: 0 0 8px 0; padding: 0; font-size: 11px; line-height: 1.4; letter-spacing: 1.4px; opacity: 0.45; font-family: 'SF Mono', Consolas, Menlo, monospace;">03</p>
  <h2 style="margin: 0; padding: 0; font-size: 20px; line-height: 1.35; font-weight: 700; letter-spacing: 0.3px; color: #0A84FF;">研究方法</h2>
  <p style="margin: 10px 0 0 0; padding: 0; font-size: 13px; line-height: 1.75; letter-spacing: 0.3px; opacity: 0.62; text-align: justify;">拆解论文的方法流程、关键设计和实验验证方式。</p>
</section>

<p><br></p>
<section style="box-sizing: border-box; margin: 32px 8px 16px 8px; text-align: left;">
  <h3 style="margin: 0; padding: 0; font-size: 14px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; opacity: 0.9; letter-spacing: 0.5px; line-height: 1.5; display: flex; align-items: center;">
    <span style="box-sizing: border-box; display: inline-block; flex-shrink: 0; width: 14px; height: 14px; padding: 2px; border: 1.5px solid rgba(128, 128, 128, 0.35); border-radius: 50%; background-color: rgba(128, 128, 128, 0.65); background-clip: content-box; margin-right: 10px; font-size: 14px; line-height: 1;">&#8203;</span>
    <span>3 研究方法</span>
  </h3>
</section>

<section style="box-sizing: border-box; margin: 24px 8px; padding: 28px 24px; background-color: rgba(128, 128, 128, 0.06); border-radius: 20px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02); border: 1px solid rgba(128, 128, 128, 0.15); font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left; line-height: 1.6;">
  <h2 style="margin: 0 0 12px 0; padding: 0; font-size: 14px; font-weight: 600; opacity: 0.9; letter-spacing: 0.5px;">3 研究方法</h2>
  <p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.75; line-height: 1.8; letter-spacing: 0.5px; text-align: justify;">方法部分包含输入表示、核心模型、训练目标和评估协议四个步骤。</p><p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.75; line-height: 1.8; letter-spacing: 0.5px; text-align: justify;">其中最关键的设计是把原始问题转化为可学习的中间表示，再通过下游任务验证有效性。</p>
</section>

<p><br></p>
<section style="box-sizing: border-box; display: block; width: fit-content; max-width: 96%; margin: 24px auto; overflow: hidden; border-radius: 18px; border: 1px solid rgba(128, 128, 128, 0.15); box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03); outline: none;">
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgwIiBoZWlnaHQ9IjYwNyIgdmlld0JveD0iMCAwIDEwODAgNjA3Ij48cmVjdCB3aWR0aD0iMTA4MCIgaGVpZ2h0PSI2MDciIGZpbGw9InJnYmEoMTI4LDEyOCwxMjgsMC4wOCkiLz48ZWxsaXBzZSBjeD0iNTQwIiBjeT0iMzAzLjUiIHJ4PSIxNDAiIHJ5PSIxNDAiIGZpbGw9InJnYmEoMTI4LDEyOCwxMjgsMC4xKSIvPjwvc3ZnPg==" alt="FIG_01 图片占位" style="display: block; width: 100%; height: auto; border: none; outline: none;" />
</section>

<section style="box-sizing: border-box; margin: 4px 8px 16px 8px; text-align: left; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">
  <p style="margin: 0; padding: 0; font-size: 12px; opacity: 0.5; line-height: 1.4; letter-spacing: 0.3px; text-align: justify;">* FIG_01：论文方法流程图，建议放在研究方法后。素材：paper figure 1。请在公众号编辑器中手动替换。</p>
</section>
<p><br></p>

<p><br></p>
<section style="box-sizing: border-box; margin: 38px 8px 32px 8px; height: 1px; background-color: rgba(128, 128, 128, 0.15); font-size: 0; line-height: 0;">&#8203;</section>
<section style="box-sizing: border-box; margin: 28px 8px 18px 8px; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left;">
  <p style="margin: 0 0 8px 0; padding: 0; font-size: 11px; line-height: 1.4; letter-spacing: 1.4px; opacity: 0.45; font-family: 'SF Mono', Consolas, Menlo, monospace;">04</p>
  <h2 style="margin: 0; padding: 0; font-size: 20px; line-height: 1.35; font-weight: 700; letter-spacing: 0.3px; color: #0A84FF;">研究应用与实践</h2>
  <p style="margin: 10px 0 0 0; padding: 0; font-size: 13px; line-height: 1.75; letter-spacing: 0.3px; opacity: 0.62; text-align: justify;">说明论文结果、系统实现、实验结论或实践启示，同时保留边界。</p>
</section>

<p><br></p>
<section style="box-sizing: border-box; margin: 32px 8px 16px 8px; text-align: left;">
  <h3 style="margin: 0; padding: 0; font-size: 14px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; opacity: 0.9; letter-spacing: 0.5px; line-height: 1.5; display: flex; align-items: center;">
    <span style="box-sizing: border-box; display: inline-block; flex-shrink: 0; width: 14px; height: 14px; padding: 2px; border: 1.5px solid rgba(128, 128, 128, 0.35); border-radius: 50%; background-color: rgba(128, 128, 128, 0.65); background-clip: content-box; margin-right: 10px; font-size: 14px; line-height: 1;">&#8203;</span>
    <span>4 研究应用与实践</span>
  </h3>
</section>

<section style="box-sizing: border-box; margin: 24px 8px; padding: 28px 24px; background-color: rgba(128, 128, 128, 0.06); border-radius: 20px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02); border: 1px solid rgba(128, 128, 128, 0.15); font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left; line-height: 1.6;">
  <h2 style="margin: 0 0 12px 0; padding: 0; font-size: 14px; font-weight: 600; opacity: 0.9; letter-spacing: 0.5px;">4 研究应用与实践</h2>
  <p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.75; line-height: 1.8; letter-spacing: 0.5px; text-align: justify;">实验在多个公开数据集上进行，结果用于说明方法在准确性和稳定性上的改进。</p><p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.75; line-height: 1.8; letter-spacing: 0.5px; text-align: justify;">应用层面的启示是：该方法更适合数据质量可控、评估指标明确的场景。</p>
</section>

<p><br></p>
<section style="box-sizing: border-box; margin: 40px 8px; display: flex; align-items: center; justify-content: center;">
  <section style="flex-grow: 1; height: 1px; background-color: rgba(128, 128, 128, 0.15); font-size: 0; line-height: 0;">&#8203;</section>
  <section style="width: 3px; height: 3px; border-radius: 50%; background-color: rgba(128, 128, 128, 0.4); margin: 0 16px; flex-shrink: 0; font-size: 0; line-height: 0;">&#8203;</section>
  <section style="flex-grow: 1; height: 1px; background-color: rgba(128, 128, 128, 0.15); font-size: 0; line-height: 0;">&#8203;</section>
</section>
<p><br></p>

<section style="box-sizing: border-box; margin: 24px 8px; padding: 16px 20px; background-color: rgba(128, 128, 128, 0.04); border: 1px dashed rgba(128, 128, 128, 0.2); border-left: 4px solid rgba(128, 128, 128, 0.4); border-radius: 8px; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left; line-height: 1.6;">
  <div style="margin-bottom: 8px; display: flex; align-items: center;">
    <span style="font-family: 'SF Mono', Consolas, Menlo, monospace; font-size: 14px; font-weight: 600; opacity: 0.6; letter-spacing: 1px;">&gt; PUBLISH CHECK</span>
  </div>
  <p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.8; line-height: 1.7; letter-spacing: 0.5px; text-align: justify;">论文题目、作者、会议名需要人工核对。</p><p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.8; line-height: 1.7; letter-spacing: 0.5px; text-align: justify;">发布前请核对论文题目、作者、期刊/会议、关键词和图表编号。</p>
</section>

<section style="box-sizing: border-box; margin: 4px 8px 16px 8px; text-align: left; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">
  <p style="margin: 0; padding: 0; font-size: 12px; opacity: 0.5; line-height: 1.4; letter-spacing: 0.3px; text-align: justify;">* 本文由论文读书笔记固定框架生成初稿，正式发布前需人工预览和事实核对。</p>
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
})();