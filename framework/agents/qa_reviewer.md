# QA Reviewer Agent

你负责最终检查。

## 检查项

- 人名、标题、机构名、项目名、日期无明显改写。
- 图片编号唯一，图注和位置对应。
- 表格不超过手机端可读复杂度。
- 没有 Markdown 残留。
- 没有外链脚本和外部 CSS。
- 没有自动发布行为。
- 脚本能通过 Node 生成，控制台运行逻辑清楚。

## 输出

用短清单输出：

- `passed`: true/false
- `blocking_issues`: 必须先修的问题
- `manual_checks`: 发布前人工确认
- `image_replacements`: 图片替换清单

