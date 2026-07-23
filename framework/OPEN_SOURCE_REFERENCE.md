# 开源项目调研笔记

这份笔记记录可借鉴的公众号内容自动化方向。目标不是把发布后台全自动化，而是吸收稳定、可审计的部分。

## doocs/md

- 地址：https://github.com/doocs/md
- 类型：微信 Markdown 编辑器。
- 可借鉴：
  - Markdown / 内容结构与微信富文本渲染分离。
  - 支持主题、自定义 CSS、图片托管和导入导出。
  - 把 AI 辅助放在内容创作层，而不是直接绕过人工发布检查。
- 对本项目的合并方式：
  - 保留当前 `article_spec.json -> inline HTML -> inject_article.js` 的稳定路径。
  - 后续可以增加 `markdown -> article_spec` 或 `article_spec -> markdown preview`，方便同学审稿。

## lyricat/wechat-format

- 地址：https://github.com/lyricat/wechat-format
- 类型：Markdown 转微信公众号特制 HTML 的排版编辑器。
- 可借鉴：
  - 用 Markdown 作为作者友好的中间格式。
  - 重点解决微信编辑器 CSS 兼容，而不是追求复杂交互。
- 对本项目的合并方式：
  - 当前 builder 已经使用内联样式，方向一致。
  - 可以补一个 Markdown handoff 层，让客户稿先进入 Markdown，再转 `article_spec`。

## crawlab-team/artipub

- 地址：https://github.com/crawlab-team/artipub
- 类型：多平台文章发布和工作流自动化平台。
- 可借鉴：
  - 平台差异用 workflow/spec 描述，自动化动作可版本化。
  - 发布前有任务状态、重试、监控和人工监督概念。
  - 内容可按平台要求做适配。
- 对本项目的合并方式：
  - 不直接引入自动发布，避免公众号后台账号和合规风险。
  - 借鉴“workflow spec”思想，把双周论文推文和客户定制推文拆成明确模式。

## wechatsync/Wechatsync

- 地址：https://github.com/wechatsync/Wechatsync
- 类型：一键同步文章到多个内容平台。
- 可借鉴：
  - 素材、文章、目标平台分离。
  - 一次编辑，多端分发的工作流视角。
- 对本项目的合并方式：
  - 当前阶段只服务公众号，但 `requirements_brief.md` 和素材清单可以先做成平台无关。
  - 未来如果要同步知乎、网站或知识库，可以从同一份 `article_spec` 派生不同出口。

## 合并优先级

1. 固定内容框架：把“文献阅读笔记”固化为 `paper_reading_note.json`。
2. 结构化中间层：所有来源先归一到 JSON，再生成公众号 spec。
3. 素材清单：图片、表格、视频都单独编号，默认人工替换。
4. 人工确认：发布、保存、账号后台操作不自动执行。
5. 可选 Markdown：后续补充 Markdown 预览和客户审稿入口。
