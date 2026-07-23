(function injectWechatWeeklyArticle() {
  const DIRECT_INSERT = false;
  const htmlString = `
<section style="box-sizing: border-box; margin: 8px 8px 28px 8px; padding: 30px 24px; border-radius: 20px; border: 1px solid rgba(128, 128, 128, 0.15); background-color: rgba(128, 128, 128, 0.055); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.02); font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">
  <p style="margin: 0 0 12px 0; font-size: 12px; line-height: 1.4; letter-spacing: 1px; opacity: 0.55; font-family: 'SF Mono', Consolas, Menlo, monospace;">LITERATURE READING NOTE · M-01</p>
  <h1 style="margin: 0; padding: 0; font-size: 22px; line-height: 1.35; font-weight: 700; letter-spacing: 0.3px; opacity: 0.92;">把大模型装进机器人，就会更好吗？一项 HRI 实验给出的答案</h1>
  <p style="margin: 16px 0 0 0; padding: 0; font-size: 14px; line-height: 1.8; letter-spacing: 0.3px; opacity: 0.68; text-align: justify;">同一个 LLM，装进机器人后并不会自动更好。32 人实验揭示了具身性真正有用的任务边界。</p>
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
    <tbody><tr><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; font-weight: 600;">题目</td><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; ">Understanding Large-Language Model (LLM)-powered Human-Robot Interaction</td></tr><tr><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; font-weight: 600;">期刊/会议</td><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; ">Proceedings of the 2024 ACM/IEEE International Conference on Human-Robot Interaction (HRI &#39;24)</td></tr><tr><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; font-weight: 600;">作者</td><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; ">Callie Y. Kim, Christine P. Lee, Bilge Mutlu</td></tr><tr><td style="padding: 12px 16px; border-bottom: none; opacity: 0.82; font-weight: 600;">关键词</td><td style="padding: 12px 16px; border-bottom: none; opacity: 0.82; ">Social robots / Large language models / Human-robot interaction</td></tr></tbody>
  </table>
</section>
<p><br></p>

<section style="box-sizing: border-box; margin: 4px 8px 16px 8px; text-align: left; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">
  <p style="margin: 0; padding: 0; font-size: 12px; opacity: 0.5; line-height: 1.4; letter-spacing: 0.3px; text-align: justify;">发表时间：2024-03-11；DOI：10.1145/3610977.3634966；链接：https://doi.org/10.1145/3610977.3634966</p>
</section>

<section style="box-sizing: border-box; margin: 18px 6px 24px 6px; font-size: 0;">

  <section style="box-sizing: border-box; display: inline-block; vertical-align: top; width: 48%; min-height: 132px; margin: 1%; padding: 22px 12px; border-radius: 12px; border: 1px solid rgba(128, 128, 128, 0.16); background-color: rgba(128, 128, 128, 0.018); text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">
    <p style="margin: 0; padding: 0; font-size: 32px; line-height: 1.15; font-weight: 800; letter-spacing: 0.2px; opacity: 0.9;">32</p>
    <p style="margin: 12px 0 0 0; padding: 0; font-size: 13px; line-height: 1.55; font-weight: 600; opacity: 0.64;">参与者</p>

  </section>
  <section style="box-sizing: border-box; display: inline-block; vertical-align: top; width: 48%; min-height: 132px; margin: 1%; padding: 22px 12px; border-radius: 12px; border: 1px solid rgba(128, 128, 128, 0.16); background-color: rgba(128, 128, 128, 0.018); text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">
    <p style="margin: 0; padding: 0; font-size: 32px; line-height: 1.15; font-weight: 800; letter-spacing: 0.2px; opacity: 0.9;">3</p>
    <p style="margin: 12px 0 0 0; padding: 0; font-size: 13px; line-height: 1.55; font-weight: 600; opacity: 0.64;">代理载体</p>

  </section>
  <section style="box-sizing: border-box; display: inline-block; vertical-align: top; width: 48%; min-height: 132px; margin: 1%; padding: 22px 12px; border-radius: 12px; border: 1px solid rgba(128, 128, 128, 0.16); background-color: rgba(128, 128, 128, 0.018); text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">
    <p style="margin: 0; padding: 0; font-size: 32px; line-height: 1.15; font-weight: 800; letter-spacing: 0.2px; opacity: 0.9;">4</p>
    <p style="margin: 12px 0 0 0; padding: 0; font-size: 13px; line-height: 1.55; font-weight: 600; opacity: 0.64;">任务类型</p>

  </section>
  <section style="box-sizing: border-box; display: inline-block; vertical-align: top; width: 48%; min-height: 132px; margin: 1%; padding: 22px 12px; border-radius: 12px; border: 1px solid rgba(128, 128, 128, 0.16); background-color: rgba(128, 128, 128, 0.018); text-align: center; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">
    <p style="margin: 0; padding: 0; font-size: 32px; line-height: 1.15; font-weight: 800; letter-spacing: 0.2px; opacity: 0.9;">60 min</p>
    <p style="margin: 12px 0 0 0; padding: 0; font-size: 13px; line-height: 1.55; font-weight: 600; opacity: 0.64;">单次实验约时</p>

  </section>
</section>

<p><br></p>

<section style="box-sizing: border-box; margin: 34px 8px 22px 8px; padding: 0 0 2px 0; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left;">
  <p style="display: inline-block; margin: 0 0 16px 0; padding: 10px 18px; border-radius: 18px; background-color: #0A84FF; font-size: 32px; line-height: 1.15; font-weight: 800; letter-spacing: 0; color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">PART 01</p>
  <h2 style="margin: 0; padding: 0; font-size: 32px; line-height: 1.18; font-weight: 800; letter-spacing: 0; color: #0A84FF;">介绍</h2>
  <p style="margin: 10px 0 0 0; padding: 0; font-size: 13px; line-height: 1.75; letter-spacing: 0.3px; opacity: 0.62; text-align: justify;">这一部分回答论文为什么要做、想解决什么，以及作者如何拆解研究任务。</p>
</section>

<section style="box-sizing: border-box; margin: 30px 8px 20px 8px; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left;">
  <section style="box-sizing: border-box; display: flex; align-items: baseline; gap: 12px; margin: 0 0 12px 0;">
    <span style="display: inline-block; flex-shrink: 0; font-size: 30px; line-height: 1; font-weight: 800; letter-spacing: -0.8px; color: #0A84FF;">1.1</span>
    <h3 style="margin: 0; padding: 0; font-size: 15px; line-height: 1.5; font-weight: 700; letter-spacing: 0.2px; opacity: 0.92;">研究动机</h3>
  </section>
  <p style="margin: 14px 0 0 0; padding: 0; font-size: 14px; opacity: 0.82; line-height: 1.85; letter-spacing: 0.3px; text-align: justify;">大语言模型让机器人能够处理更开放的用户请求，并以更自然的方式维持上下文对话，但现有研究仍不清楚：当同一个 LLM 被放进实体机器人后，用户会产生哪些不同于文本和语音助手的期待。</p><p style="margin: 14px 0 0 0; padding: 0; font-size: 14px; opacity: 0.82; line-height: 1.85; letter-spacing: 0.3px; text-align: justify;">机器人的实体存在会影响参与感、信任、社交能力判断和交互行为。因此，面向文本或语音界面的 LLM 设计经验，不能直接等同于面向机器人的设计要求。</p><p style="margin: 14px 0 0 0; padding: 0; font-size: 14px; opacity: 0.82; line-height: 1.85; letter-spacing: 0.3px; text-align: justify;">已有 LLM 机器人研究多聚焦某一个具体应用。作者希望跨任务比较，找出哪些交互情境真正能从机器人具身性中获益。</p>
</section>

<section style="box-sizing: border-box; margin: 30px 8px 20px 8px; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left;">
  <section style="box-sizing: border-box; display: flex; align-items: baseline; gap: 12px; margin: 0 0 12px 0;">
    <span style="display: inline-block; flex-shrink: 0; font-size: 30px; line-height: 1; font-weight: 800; letter-spacing: -0.8px; color: #0A84FF;">1.2</span>
    <h3 style="margin: 0; padding: 0; font-size: 15px; line-height: 1.5; font-weight: 700; letter-spacing: 0.2px; opacity: 0.92;">研究目标</h3>
  </section>
  <p style="margin: 14px 0 0 0; padding: 0; font-size: 14px; opacity: 0.82; line-height: 1.85; letter-spacing: 0.3px; text-align: justify;">研究围绕三个问题展开：人们如何感知使用 LLM 的机器人；这种感知如何随任务变化；哪些任务情境能够从机器人实体具身中受益。</p><p style="margin: 14px 0 0 0; padding: 0; font-size: 14px; opacity: 0.82; line-height: 1.85; letter-spacing: 0.3px; text-align: justify;">作者不仅比较总体体验，也希望把用户偏好追溯到具体的任务属性、输入方式、非语言线索、系统错误和社交压力。</p>
</section>

<section style="box-sizing: border-box; margin: 30px 8px 20px 8px; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left;">
  <section style="box-sizing: border-box; display: flex; align-items: baseline; gap: 12px; margin: 0 0 12px 0;">
    <span style="display: inline-block; flex-shrink: 0; font-size: 30px; line-height: 1; font-weight: 800; letter-spacing: -0.8px; color: #0A84FF;">1.3</span>
    <h3 style="margin: 0; padding: 0; font-size: 15px; line-height: 1.5; font-weight: 700; letter-spacing: 0.2px; opacity: 0.92;">研究任务</h3>
  </section>
  <p style="margin: 14px 0 0 0; padding: 0; font-size: 14px; opacity: 0.82; line-height: 1.85; letter-spacing: 0.3px; text-align: justify;">比较文本代理、语音代理和 Pepper 社交机器人三种载体。三者均使用未经微调的 GPT-3.5 text-davinci-003，温度设为 0.7，最大输出为 2048 tokens。</p><p style="margin: 14px 0 0 0; padding: 0; font-size: 14px; opacity: 0.82; line-height: 1.85; letter-spacing: 0.3px; text-align: justify;">依据 McGrath 的群体任务环形模型设计四类任务：共同续写故事的生成任务、从候选物品中做取舍的选择任务、按指导制作饮品的执行任务，以及二手商品议价的协商任务。</p><p style="margin: 14px 0 0 0; padding: 0; font-size: 14px; opacity: 0.82; line-height: 1.85; letter-spacing: 0.3px; text-align: justify;">结合问卷、行为记录、失败次数与半结构化访谈，分析载体和任务如何共同影响体验。</p>
</section>

<p><br></p>
<section style="box-sizing: border-box; margin: 38px 8px 32px 8px; height: 1px; background-color: rgba(128, 128, 128, 0.15); font-size: 0; line-height: 0;">&#8203;</section>
<section style="box-sizing: border-box; margin: 34px 8px 22px 8px; padding: 0 0 2px 0; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left;">
  <p style="display: inline-block; margin: 0 0 16px 0; padding: 10px 18px; border-radius: 18px; background-color: #0A84FF; font-size: 32px; line-height: 1.15; font-weight: 800; letter-spacing: 0; color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">PART 02</p>
  <h2 style="margin: 0; padding: 0; font-size: 32px; line-height: 1.18; font-weight: 800; letter-spacing: 0; color: #0A84FF;">相关研究</h2>
  <p style="margin: 10px 0 0 0; padding: 0; font-size: 13px; line-height: 1.75; letter-spacing: 0.3px; opacity: 0.62; text-align: justify;">梳理论文所在的研究脉络，以及它与已有工作的关系。</p>
</section>

<section style="box-sizing: border-box; margin: 30px 8px 20px 8px; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left;">
  <section style="box-sizing: border-box; display: flex; align-items: baseline; gap: 12px; margin: 0 0 12px 0;">

    <h3 style="margin: 0; padding: 0; font-size: 15px; line-height: 1.5; font-weight: 700; letter-spacing: 0.2px; opacity: 0.92;">研究脉络</h3>
  </section>
  <p style="margin: 14px 0 0 0; padding: 0; font-size: 14px; opacity: 0.82; line-height: 1.85; letter-spacing: 0.3px; text-align: justify;">具身交互研究表明，实体机器人可以通过手势、姿态、注视、面部表情、距离与触碰等丰富通道影响参与度、愉悦感、信任和共情；但具身性的效果也高度依赖具体任务。</p><p style="margin: 14px 0 0 0; padding: 0; font-size: 14px; opacity: 0.82; line-height: 1.85; letter-spacing: 0.3px; text-align: justify;">机器人与 LLM 的早期结合主要集中在任务规划、人机协作和特定场景的对话系统，例如装配任务、陪伴老人、健康支持和建立信任。</p><p style="margin: 14px 0 0 0; padding: 0; font-size: 14px; opacity: 0.82; line-height: 1.85; letter-spacing: 0.3px; text-align: justify;">与这些单场景验证不同，本研究把同一 LLM 放入三种载体，并跨四种任务考察用户感知，从而把问题从“LLM 能否用于机器人”推进到“何时值得使用机器人具身”。</p>
</section>

<p><br></p>
<section style="box-sizing: border-box; margin: 38px 8px 32px 8px; height: 1px; background-color: rgba(128, 128, 128, 0.15); font-size: 0; line-height: 0;">&#8203;</section>
<section style="box-sizing: border-box; margin: 34px 8px 22px 8px; padding: 0 0 2px 0; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left;">
  <p style="display: inline-block; margin: 0 0 16px 0; padding: 10px 18px; border-radius: 18px; background-color: #0A84FF; font-size: 32px; line-height: 1.15; font-weight: 800; letter-spacing: 0; color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">PART 03</p>
  <h2 style="margin: 0; padding: 0; font-size: 32px; line-height: 1.18; font-weight: 800; letter-spacing: 0; color: #0A84FF;">研究方法</h2>
  <p style="margin: 10px 0 0 0; padding: 0; font-size: 13px; line-height: 1.75; letter-spacing: 0.3px; opacity: 0.62; text-align: justify;">拆解论文的方法流程、关键设计和实验验证方式。</p>
</section>

<section style="box-sizing: border-box; margin: 30px 8px 20px 8px; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left;">
  <section style="box-sizing: border-box; display: flex; align-items: baseline; gap: 12px; margin: 0 0 12px 0;">

    <h3 style="margin: 0; padding: 0; font-size: 15px; line-height: 1.5; font-weight: 700; letter-spacing: 0.2px; opacity: 0.92;">实验设计与分析</h3>
  </section>
  <p style="margin: 14px 0 0 0; padding: 0; font-size: 14px; opacity: 0.82; line-height: 1.85; letter-spacing: 0.3px; text-align: justify;">研究采用混合因子设计。任务类型是组间变量，每位参与者随机进入生成、选择、执行或协商中的一种任务；代理载体是组内变量，每位参与者按平衡顺序依次体验文本、语音和机器人三种条件。</p><p style="margin: 14px 0 0 0; padding: 0; font-size: 14px; opacity: 0.82; line-height: 1.85; letter-spacing: 0.3px; text-align: justify;">文本条件通过键盘与屏幕交互；语音条件使用 Pepper 的语音模块，但机器人被黑色屏风遮挡；机器人条件则让参与者直接面对 Pepper，通过语音、动作和注视交流。这样既控制了语音一致性，也突出实体具身的差异。</p><p style="margin: 14px 0 0 0; padding: 0; font-size: 14px; opacity: 0.82; line-height: 1.85; letter-spacing: 0.3px; text-align: justify;">研究招募 32 名参与者，年龄为 18-59 岁，平均年龄 27.47 岁。单次实验约 60 分钟，参与者完成每个条件后填写问卷并接受半结构化访谈。</p><p style="margin: 14px 0 0 0; padding: 0; font-size: 14px; opacity: 0.82; line-height: 1.85; letter-spacing: 0.3px; text-align: justify;">主观指标包括修改后的 Godspeed 量表与 USE 满意度量表；行为指标为用户输入 token 总数；表现指标为技术错误与 LLM 幻觉两类失败。作者使用重复测量方差分析和 Tukey HSD 进行量化分析，并以主题分析法归纳访谈材料。</p><p style="margin: 14px 0 0 0; padding: 0; font-size: 14px; opacity: 0.82; line-height: 1.85; letter-spacing: 0.3px; text-align: justify;">安全感分量表因题项方向与构念适配问题被排除。作者也指出，多项主观指标方差较高，因此定量结果主要用来呈现总体模式，具体机制更多依靠定性材料解释。</p>
</section>

<p><br></p>
<section style="box-sizing: border-box; display: block; width: fit-content; max-width: 96%; margin: 24px auto; overflow: hidden; border-radius: 18px; border: 1px solid rgba(128, 128, 128, 0.15); box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03); outline: none;">
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgwIiBoZWlnaHQ9IjYwNyIgdmlld0JveD0iMCAwIDEwODAgNjA3Ij48cmVjdCB3aWR0aD0iMTA4MCIgaGVpZ2h0PSI2MDciIGZpbGw9InJnYmEoMTI4LDEyOCwxMjgsMC4wOCkiLz48ZWxsaXBzZSBjeD0iNTQwIiBjeT0iMzAzLjUiIHJ4PSIxNDAiIHJ5PSIxNDAiIGZpbGw9InJnYmEoMTI4LDEyOCwxMjgsMC4xKSIvPjwvc3ZnPg==" alt="FIG_01 图片占位" style="display: block; width: 100%; height: auto; border: none; outline: none;" />
</section>

<section style="box-sizing: border-box; margin: 4px 8px 16px 8px; text-align: left; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">
  <p style="margin: 0; padding: 0; font-size: 12px; opacity: 0.5; line-height: 1.4; letter-spacing: 0.3px; text-align: justify;">* FIG_01：实验任务与三种代理条件示意：文本代理、被遮挡的语音代理和可见的 Pepper 机器人。素材：论文 Figure 1，第 1 页。请在公众号编辑器中手动替换。</p>
</section>
<p><br></p>

<p><br></p>
<section style="box-sizing: border-box; margin: 38px 8px 32px 8px; height: 1px; background-color: rgba(128, 128, 128, 0.15); font-size: 0; line-height: 0;">&#8203;</section>
<section style="box-sizing: border-box; margin: 34px 8px 22px 8px; padding: 0 0 2px 0; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left;">
  <p style="display: inline-block; margin: 0 0 16px 0; padding: 10px 18px; border-radius: 18px; background-color: #0A84FF; font-size: 32px; line-height: 1.15; font-weight: 800; letter-spacing: 0; color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">PART 04</p>
  <h2 style="margin: 0; padding: 0; font-size: 32px; line-height: 1.18; font-weight: 800; letter-spacing: 0; color: #0A84FF;">研究应用与实践</h2>
  <p style="margin: 10px 0 0 0; padding: 0; font-size: 13px; line-height: 1.75; letter-spacing: 0.3px; opacity: 0.62; text-align: justify;">说明论文结果、系统实现、实验结论或实践启示，同时保留边界。</p>
</section>

<section style="box-sizing: border-box; margin: 30px 8px 20px 8px; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left;">
  <section style="box-sizing: border-box; display: flex; align-items: baseline; gap: 12px; margin: 0 0 12px 0;">

    <h3 style="margin: 0; padding: 0; font-size: 15px; line-height: 1.5; font-weight: 700; letter-spacing: 0.2px; opacity: 0.92;">定量结果</h3>
  </section>
  <p style="margin: 14px 0 0 0; padding: 0; font-size: 14px; opacity: 0.82; line-height: 1.85; letter-spacing: 0.3px; text-align: justify;">载体显著影响用户输入长度、交互失败和满意度。参与者对文本代理输入得更长；语音代理失败最多，其次是机器人，文本代理最少；文本代理满意度高于语音代理，并略高于机器人。拟人感、生命感、喜爱度和感知智能等指标未出现显著载体差异。</p>
</section>

<section style="box-sizing: border-box; margin: 20px 8px; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">

  <section style="box-sizing: border-box; margin: 16px 0; padding: 0; border-radius: 0; border: none; background-color: transparent; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left;">

    <h3 style="margin: 0; padding: 0; font-size: 15px; line-height: 1.45; font-weight: 700; letter-spacing: 0.2px; opacity: 0.9;">执行：具身性最能发挥价值</h3>
    <p style="margin: 8px 0 0 0; padding: 0; font-size: 13px; line-height: 1.75; letter-spacing: 0.3px; opacity: 0.74; text-align: justify;">参与者可以边操作边提问。LLM 的上下文理解与机器人的注视、等待和鼓励共同提升了学习投入。</p>
  </section>
  <section style="box-sizing: border-box; margin: 16px 0; padding: 0; border-radius: 0; border: none; background-color: transparent; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left;">

    <h3 style="margin: 0; padding: 0; font-size: 15px; line-height: 1.45; font-weight: 700; letter-spacing: 0.2px; opacity: 0.9;">协商：社交线索帮助建立信任</h3>
    <p style="margin: 8px 0 0 0; padding: 0; font-size: 13px; line-height: 1.75; letter-spacing: 0.3px; opacity: 0.74; text-align: justify;">自然语言、目光、面部与身体动作有助于形成关系感，即使文本代理在信息交换上更高效。</p>
  </section>
  <section style="box-sizing: border-box; margin: 16px 0; padding: 0; border-radius: 0; border: none; background-color: transparent; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left;">

    <h3 style="margin: 0; padding: 0; font-size: 15px; line-height: 1.45; font-weight: 700; letter-spacing: 0.2px; opacity: 0.9;">选择：文本记录更快、更易回看</h3>
    <p style="margin: 8px 0 0 0; padding: 0; font-size: 13px; line-height: 1.75; letter-spacing: 0.3px; opacity: 0.74; text-align: justify;">冗长的轮流对话、逻辑矛盾、错误建议和语音识别问题，让用户更偏好可快速浏览的文本。</p>
  </section>
  <section style="box-sizing: border-box; margin: 16px 0; padding: 0; border-radius: 0; border: none; background-color: transparent; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left;">

    <h3 style="margin: 0; padding: 0; font-size: 15px; line-height: 1.45; font-weight: 700; letter-spacing: 0.2px; opacity: 0.9;">生成：机器人的注视会带来压力</h3>
    <p style="margin: 8px 0 0 0; padding: 0; font-size: 13px; line-height: 1.75; letter-spacing: 0.3px; opacity: 0.74; text-align: justify;">长创意输入不适合实时语音。持续注视与等待会让参与者感到必须立即回应，压缩思考时间。</p>
  </section>
</section>

<section style="box-sizing: border-box; margin: 30px 8px 20px 8px; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; text-align: left;">
  <section style="box-sizing: border-box; display: flex; align-items: baseline; gap: 12px; margin: 0 0 12px 0;">

    <h3 style="margin: 0; padding: 0; font-size: 15px; line-height: 1.5; font-weight: 700; letter-spacing: 0.2px; opacity: 0.92;">设计启示与研究边界</h3>
  </section>
  <p style="margin: 14px 0 0 0; padding: 0; font-size: 14px; opacity: 0.82; line-height: 1.85; letter-spacing: 0.3px; text-align: justify;">机器人高质量的语言能力必须与同等成熟、语义一致的注视、手势和表情配合。针对选择和生成类任务，系统应减少社交性冗词，提供更直接的表达，并允许用户暂停、回看和整理输入。</p><p style="margin: 14px 0 0 0; padding: 0; font-size: 14px; opacity: 0.82; line-height: 1.85; letter-spacing: 0.3px; text-align: justify;">LLM 既能降低传统对话系统中意图、实体和表达变体的开发成本，也会引入幻觉、越界和角色不一致风险。论文建议结合任务定制、微调、策划数据、程序验证与人在回路审查来建立行动边界。</p><p style="margin: 14px 0 0 0; padding: 0; font-size: 14px; opacity: 0.82; line-height: 1.85; letter-spacing: 0.3px; text-align: justify;">研究没有设置非 LLM 机器人对照组，样本量较小且主观数据方差较高，Pepper 也只采用了较简化的非语言行为。因此，这项研究更适合提供设计方向，而不是证明机器人在所有 LLM 任务中普遍更优。</p>
</section>

<p><br></p>
<section style="box-sizing: border-box; display: block; width: fit-content; max-width: 96%; margin: 24px auto; overflow: hidden; border-radius: 18px; border: 1px solid rgba(128, 128, 128, 0.15); box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03); outline: none;">
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgwIiBoZWlnaHQ9IjYwNyIgdmlld0JveD0iMCAwIDEwODAgNjA3Ij48cmVjdCB3aWR0aD0iMTA4MCIgaGVpZ2h0PSI2MDciIGZpbGw9InJnYmEoMTI4LDEyOCwxMjgsMC4wOCkiLz48ZWxsaXBzZSBjeD0iNTQwIiBjeT0iMzAzLjUiIHJ4PSIxNDAiIHJ5PSIxNDAiIGZpbGw9InJnYmEoMTI4LDEyOCwxMjgsMC4xKSIvPjwvc3ZnPg==" alt="FIG_03 图片占位" style="display: block; width: 100%; height: auto; border: none; outline: none;" />
</section>

<section style="box-sizing: border-box; margin: 4px 8px 16px 8px; text-align: left; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">
  <p style="margin: 0; padding: 0; font-size: 12px; opacity: 0.5; line-height: 1.4; letter-spacing: 0.3px; text-align: justify;">* FIG_03：不同载体与任务下的满意度、输入长度和交互失败分布。素材：论文 Figure 3，第 5 页。请在公众号编辑器中手动替换。</p>
</section>
<p><br></p>

<p><br></p>
<section style="box-sizing: border-box; display: block; width: fit-content; max-width: 96%; margin: 24px auto; overflow: hidden; border-radius: 18px; border: 1px solid rgba(128, 128, 128, 0.15); box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03); outline: none;">
  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDgwIiBoZWlnaHQ9IjYwNyIgdmlld0JveD0iMCAwIDEwODAgNjA3Ij48cmVjdCB3aWR0aD0iMTA4MCIgaGVpZ2h0PSI2MDciIGZpbGw9InJnYmEoMTI4LDEyOCwxMjgsMC4wOCkiLz48ZWxsaXBzZSBjeD0iNTQwIiBjeT0iMzAzLjUiIHJ4PSIxNDAiIHJ5PSIxNDAiIGZpbGw9InJnYmEoMTI4LDEyOCwxMjgsMC4xKSIvPjwvc3ZnPg==" alt="FIG_04 图片占位" style="display: block; width: 100%; height: auto; border: none; outline: none;" />
</section>

<section style="box-sizing: border-box; margin: 4px 8px 16px 8px; text-align: left; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;">
  <p style="margin: 0; padding: 0; font-size: 12px; opacity: 0.5; line-height: 1.4; letter-spacing: 0.3px; text-align: justify;">* FIG_04：四类任务的定性结果总结：执行与协商更受益于机器人，选择与生成更偏向文本。素材：论文 Figure 4，第 6 页。请在公众号编辑器中手动替换。</p>
</section>
<p><br></p>

<p><br></p>
<section style="box-sizing: border-box; margin: 32px 8px 16px 8px; text-align: left;">
  <h3 style="margin: 0; padding: 0; font-size: 14px; font-weight: 600; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; opacity: 0.9; letter-spacing: 0.5px; line-height: 1.5; display: flex; align-items: center;">
    <span style="box-sizing: border-box; display: inline-block; flex-shrink: 0; width: 14px; height: 14px; padding: 2px; border: 1.5px solid rgba(128, 128, 128, 0.35); border-radius: 50%; background-color: rgba(128, 128, 128, 0.65); background-clip: content-box; margin-right: 10px; font-size: 14px; line-height: 1;">&#8203;</span>
    <span>四类任务中的机器人适配性</span>
  </h3>
</section>

<p><br></p>
<section style="box-sizing: border-box; margin: 24px 8px; border-radius: 12px; border: 1px solid rgba(128, 128, 128, 0.15); overflow-x: hidden; overflow-y: hidden; background-color: rgba(128, 128, 128, 0.02); font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Helvetica Neue', Arial, sans-serif; -webkit-overflow-scrolling: touch;">
  <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px; margin: 0; padding: 0;">
    <thead><tr style="background-color: rgba(128, 128, 128, 0.06);"><th style="padding: 14px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.2); font-weight: 600; opacity: 0.9;">任务</th><th style="padding: 14px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.2); font-weight: 600; opacity: 0.9;">具身价值</th><th style="padding: 14px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.2); font-weight: 600; opacity: 0.9;">主要风险</th></tr></thead>
    <tbody><tr><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; font-weight: 600;">执行</td><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; ">边做边问、注视与鼓励有助于学习投入</td><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; ">语言能力与动作表现不匹配</td></tr><tr><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; font-weight: 600;">协商</td><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; ">社交线索帮助建立信任和关系感</td><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; ">语音轮次判断与识别失败</td></tr><tr><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; font-weight: 600;">选择</td><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; ">可通过对话解释理由</td><td style="padding: 12px 16px; border-bottom: 1px solid rgba(128, 128, 128, 0.1); opacity: 0.82; ">冗长、逻辑矛盾、缺少可回看记录</td></tr><tr><td style="padding: 12px 16px; border-bottom: none; opacity: 0.82; font-weight: 600;">生成</td><td style="padding: 12px 16px; border-bottom: none; opacity: 0.82; ">自然对话可支持共同创作</td><td style="padding: 12px 16px; border-bottom: none; opacity: 0.82; ">长输入困难、打断与社交压力</td></tr></tbody>
  </table>
</section>
<p><br></p>

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
  <p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.8; line-height: 1.7; letter-spacing: 0.5px; text-align: justify;">明确区分载体效应与任务效应</p><p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.8; line-height: 1.7; letter-spacing: 0.5px; text-align: justify;">保留样本量、三种代理、四类任务和主要统计结果</p><p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.8; line-height: 1.7; letter-spacing: 0.5px; text-align: justify;">不得将执行与协商任务中的偏好扩写为机器人整体优于文本</p><p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.8; line-height: 1.7; letter-spacing: 0.5px; text-align: justify;">保留研究限制与图表人工替换说明</p><p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.8; line-height: 1.7; letter-spacing: 0.5px; text-align: justify;">论文题目、作者、会议、年份和 DOI 已按 PDF 首页核对</p><p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.8; line-height: 1.7; letter-spacing: 0.5px; text-align: justify;">研究方法中的样本量、任务与代理条件已按原文核对</p><p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.8; line-height: 1.7; letter-spacing: 0.5px; text-align: justify;">定量结果只陈述论文报告的显著性方向，不补造均值或效应量</p><p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.8; line-height: 1.7; letter-spacing: 0.5px; text-align: justify;">研究应用部分明确标注论文限制</p><p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.8; line-height: 1.7; letter-spacing: 0.5px; text-align: justify;">FIG_01、FIG_03、FIG_04 发布前须用论文原图手动替换</p><p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.8; line-height: 1.7; letter-spacing: 0.5px; text-align: justify;">不自动发布，发布前必须在公众号后台手机预览</p><p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; opacity: 0.8; line-height: 1.7; letter-spacing: 0.5px; text-align: justify;">发布前请核对论文题目、作者、期刊/会议、关键词和图表编号。</p>
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