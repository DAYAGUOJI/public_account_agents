# 课题组微信公众号多 Agent 工作流

这个目录把“原材料 -> 结构化内容 -> 公众号富文本 -> 可在控制台运行的注入脚本”固定成可复用流程。

HTML 输入只是边界情况。框架的默认目标是支持两类更普适的公众号生成：

1. 组内双周论文分享：输入论文和读书笔记框架，输出论文分享推文。
2. 客户定制推文：输入客户要求和素材，先收敛需求，再输出推文。

当前采用最稳定的模式：生成完整富文本 HTML，控制台脚本优先写入富文本剪贴板，然后在微信公众号编辑器中粘贴。直接改编辑器 DOM 作为可选模式，因为微信后台会清洗和拦截不少行为。

## 快速使用：结构化稿件

1. 把文章内容整理成 `framework/examples/article_spec.example.json` 这种结构。
2. 运行：

```bash
node framework/wechat_article_builder.js framework/examples/article_spec.example.json
```

3. 生成结果在 `framework/output/inject_article.js`。
4. 打开微信公众号图文编辑器，进入正文区域。
5. 在浏览器 Console 粘贴并运行 `inject_article.js` 的全部内容。
6. 如果控制台提示已复制富文本，就回到正文区域粘贴。
7. 按图片清单把占位图替换成真实图片。

## 双周论文分享流程

附件中的“文献阅读笔记 / Literature reading notes”被固化为本项目的不变框架：

- 论文信息：编号、题目、期刊/会议、作者、关键词。
- 1 介绍。
- 1.1 研究动机。
- 1.2 研究目标。
- 1.3 研究任务。
- 2 相关研究。
- 3 研究方法。
- 4 研究应用与实践。

推荐流程：

1. 按 `framework/PAPER_READING_INPUT_TEMPLATE.md` 提供论文和补充要求。
2. 抽取为 `paper_reading_note.json`，字段遵循 `framework/templates/literature_reading_note.schema.json`。
3. 生成公众号结构：

```bash
node framework/paper_note_to_article_spec.js framework/examples/paper_reading_note.example.json framework/output/paper_article_spec.json
```

4. 生成公众号注入脚本：

```bash
node framework/wechat_article_builder.js framework/output/paper_article_spec.json framework/output/inject_paper_article.js
```

5. 生成 `publication_assets.json`，确定公众号标题、2.35:1 横版封面 brief 与文章目录内的输出路径。
6. 调用生图模块生成无文字封面，并将最终图片保存为文章目录下的 `assets/cover-wechat-landscape.png`。
7. 打开微信公众号图文编辑器，运行 `inject_paper_article.js`，再人工替换图表并预览。

论文分享的默认完整交付现在包括正文三件套与发布两件套：`paper_reading_note.json`、`article_spec.json`、`inject_article.js`、`publication_assets.json`、`assets/cover-wechat-landscape.png`。封面不得只保存在全局生成图片目录。

## 客户定制推文流程

客户要求通常不稳定，先按 `framework/CLIENT_ARTICLE_INPUT_TEMPLATE.md` 收敛成 brief：

1. 原样保留客户要求和素材。
2. 输出 `requirements_brief.md`，列出目标读者、必须出现的信息、禁区、素材位置和待确认问题。
3. 再进入写作、排版和注入脚本生成。

客户流程不套用论文读书笔记固定栏目，除非客户明确要求论文解读风格。

## Agent 分工

实际协作时我会按下面角色拆解，不一定每次都真的启动 6 个子代理；简单稿件可以合并角色，复杂稿件再并行。

| Agent | 主要责任 | 交付物 |
| --- | --- | --- |
| Coordinator | 判断输入类型、确定本期栏目、分配任务、整合结果 | `paper_reading_note.json` / `requirements_brief.md` / `article_spec.json` 和注入脚本 |
| Paper Source Analyst | 从论文材料抽取读书笔记固定字段 | `paper_reading_note.json` |
| Paper WeChat Editor | 把论文读书笔记改写成公众号论文分享稿 | 可排版文案块 |
| Client Requirements Analyst | 把客户发散要求收敛成可执行 brief | `requirements_brief.md` |
| Source Analyst | 从原 HTML 或纯文本提取标题、段落、图片、表格、列表、时间信息 | 结构化内容和图片清单 |
| Weekly Editor | 调整成中文科研周报口吻，保证事实不被改写 | 精修文案 |
| Layout Composer | 把文案映射到卡片、小标题、时间轴、表格、图片占位等组件 | 组件化文章 spec |
| Injection Engineer | 用生成器输出控制台脚本，处理转义和剪贴板兼容 | `framework/output/inject_article.js` |
| QA Reviewer | 检查事实风险、图片编号、移动端阅读、微信兼容性 | 发布前检查清单 |

## 输入规范

生成器读取 JSON，顶层常用字段：

```json
{
  "title": "本周课题组更新",
  "meta": {
    "issue": "WEEKLY UPDATE",
    "date": "2026-07-01"
  },
  "directInsert": false,
  "blocks": []
}
```

`directInsert` 默认为 `false`。设为 `true` 时，脚本会尝试把 HTML 直接写入当前 `contenteditable` 编辑器；为了避免误写，日常建议保持 `false`。

## 支持的组件

- `hero`：文首标题卡片。
- `paragraph`：普通正文段落。
- `sectionTitle`：报告型大章节标题，适合非论文风格的公众号长文。
- `subtitle`：带小圆点的小标题。
- `card`：灰阶 Apple 风格内容卡片。
- `insightCards`：连续重点卡片，用于提炼结论、痛点、建议。
- `metricGrid`：指标宫格，用于展示市场规模、占比、增长率等数据块。
- `trendList`：编号趋势总结，用于保留报告中的多条洞察原文。
- `detailPanels`：大段对比面板，用于两地调研、双轨路径、案例详情。
- `painCards`：三维痛点卡片，用于物理/语音/商业等诊断式内容。
- `horizontalCards`：横向滑动卡片组，用于产品矩阵、三极对比、截图走查。
- `editorNote`：编者按或背景说明。
- `image`：图片占位容器，可带图注。
- `table`：三列以内优先，避免手机端过挤。
- `timeline`：步骤、流程、本周进展。
- `annotation`：12px 小字说明。
- `divider`：分割线。
- `rawHtml`：必要时插入已经确认安全的内联 HTML。

## 质量门槛

- 不虚构科研事实，不把“计划/讨论/投稿中”写成“完成/发表/获批”。
- 论文分享必须保留读书笔记固定框架，缺失字段要标记人工确认，不能悄悄删掉。
- 人名、论文题目、项目名、会议名、日期必须保留原意。
- 所有图片都要有占位和人工替换说明。
- 所有样式必须内联，不依赖外部 CSS、外链 JS、SVG 脚本。
- 生成脚本不自动保存、不自动发布、不读取敏感页面数据。
- 粘贴后必须做公众号后台预览，尤其看手机端表格和长英文。

## 开源项目借鉴

调研记录见 `framework/OPEN_SOURCE_REFERENCE.md`。当前结论是：优先合并结构化中间层、Markdown/HTML 渲染思路、素材清单和可审计 workflow；暂不合并自动发布能力。
