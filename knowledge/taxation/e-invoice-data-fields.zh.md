---
topicId: MY-TAX-0014
title: "电子发票数据栏位速查"
seoTitle: "马来西亚电子发票数据栏位：55 个栏位速查"
slug: "e-invoice-data-fields"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "全部 55 个必备电子发票栏位及其必填或选填状态、附录栏位、LHDN 代码清单，以及各类错误各由哪一个验证器挡下。"

tier: "4"
mode: "practical"
contentType: "data"
sensitivity: "none"

answer: "LHDN 要求 55 个数据栏位才能开出一张电子发票，分为八个类别。多数为必填；二十个为选填，八个为有条件必填——SST 与旅游税注册号码、原电子发票参考编号、货币汇率、税率，以及两个免税栏位。另有一份附录，为货物进口与出口加上必填的关税表格参考编号。"
keyTakeaways:
  - "Appendix 1 有 55 个栏位，分为八个类别，另有 Appendix 2 的附录"
  - "XML 或 JSON，两者皆须符合 UBL 2.1"
  - "有八个栏位属有条件必填，而非永远必填"
  - "电子发票日期与时间必须是当下的日期与时间"
  - "共有七个验证器在跑——三个即时，四个在后台"
  - "电子发票类型、税种、货币、MSIC、州属与计量单位的代码清单发布在 SDK 上"
  - "有瑕疵的电子发票可依 ITA 1967 s.82C(8) 在三天内以替代发票取代"
appliesTo: "正在开发 MyInvois 对接的开发人员、对应主档数据的 ERP 顾问，以及在排查被拒提交的财务团队。"

verificationNeeded:
  - "完整发布的细项验证错误代码清单（CF、DS、ST 前缀）——SDK 记载了七个验证器类别与标准 HTTP 错误代码，但并未公布一份详尽的代码对应条件表"
  - "各端点的 API 速率限制——SDK 在常见问题页面上提及 Integration Practices，但未列出数值上限"

lang: "zh"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "7457966f1e6638bb"

status: "published"
aiAssisted: true
reviewer: null
reviewed: "2026-07-25"
publishedBy: "ashton-tan"
reviewDue: 2027-07-22
revision: 0
revisions:
  - revision: 0
    date: 2026-07-20
    change: "Approved and published."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "e-Invoice Guideline (Version 4.7) — Appendices 1 and 2"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "MyInvois SDK — document validation rules"
    url: "https://sdk.myinvois.hasil.gov.my/document-validation-rules/"
    publisher: "LHDN"
  - title: "MyInvois SDK — code lists"
    url: "https://sdk.myinvois.hasil.gov.my/codes/"
    publisher: "LHDN"
  - title: "MyInvois SDK — standard error response"
    url: "https://sdk.myinvois.hasil.gov.my/standard-error-response/"
    publisher: "LHDN"
  - title: "e-Invoice Specific Guideline (Version 4.8) — Appendix 1, list of general TIN"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"

entity: "e-Invoice data fields"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "explained-in", to: "myinvois-integration" }
  - { rel: "related-to", to: "self-billed-e-invoice" }
related: ["e-invoicing", "myinvois-phases", "myinvois-integration", "self-billed-e-invoice", "consolidated-e-invoice"]
keywords: ["e-Invoice data fields", "55 fields e-Invoice", "MyInvois mandatory fields", "e-Invoice validation error", "UBL 2.1 Malaysia", "medan data e-invois"]
---

每一次提交被拒，追究起来不外乎两件事：某个 LHDN 视为必填、而你的 ERP 视为选填的
栏位，或者某个不在 LHDN 清单里的代码值。本页就是那份栏位清单，取自 e-Invoice
Guideline 4.7 版的 Appendix 1 与 Appendix 2。

格式为 **XML 或 JSON**，两者皆须符合 **UBL 2.1**。LHDN 把这 55 个栏位分为八个
类别：Address、Business Details、Contact Number、Invoice Details、Parties、
Party Details、Payment Info，以及 Products / Services。

## 55 个栏位

**M** = 必填 · **C** = 有条件必填 · **O** = 选填

### 各方与各方细节

| # | 栏位 | 状态 | 备注 |
| --- | --- | --- | --- |
| 1 | 供应商名称 | M | |
| 2 | 买方名称 | M | 合并电子发票上填 General Public |
| 3 | 供应商 TIN | M | 无法取得时适用通用 TIN 代码 |
| 4 | 供应商注册／识别／护照号码 | M | 在 SSM 注册者只用**新的 12 字符 BRN** |
| 5 | 供应商 SST 注册号码 | **C** | 已注册 SST 者必填 |
| 6 | 供应商旅游税注册号码 | **C** | 已注册旅游税者必填 |
| 7 | 供应商电邮 | O | |
| 8 | 供应商 MSIC 代码 | M | 5 位数字；外国供应商无从取得时填 00000 |
| 9 | 供应商商业活动描述 | M | |
| 10 | 买方 TIN | M | |
| 11 | 买方注册／识别／护照号码 | M | |
| 12 | 买方 SST 注册号码 | **C** | 已注册 SST 者必填 |
| 13 | 买方电邮 | O | |

### 地址与联络

| # | 栏位 | 状态 |
| --- | --- | --- |
| 14 | 供应商地址 | M |
| 15 | 买方地址 | M |
| 16 | 供应商联络电话 | M |
| 17 | 买方联络电话 | M |

### 发票细节

| # | 栏位 | 状态 | 备注 |
| --- | --- | --- | --- |
| 18 | 电子发票版本 | M | SVDP 1.2 / 1.3 仅供自愿披露使用 |
| 19 | 电子发票类型 | M | 见下方代码清单 |
| 20 | 电子发票代码／号码 | M | 供应商自己的参考编号 |
| 21 | 原电子发票参考编号 | **C** | 贷记单、借记单与退款单必填 |
| 22 | 电子发票日期与时间 | M | **必须是当下的日期与时间** |
| 23 | 开票方数字签署 | M | 若有使用服务商，则为服务商的证书 |
| 24 | 发票货币代码 | M | |
| 25 | 货币汇率 | **C** | 货币非令吉时必填 |
| 26 | 开单频率 | O | |
| 27 | 开单期间 | O | |

### 产品与服务

| # | 栏位 | 状态 | 备注 |
| --- | --- | --- | --- |
| 28 | 分类 | M | 取自 LHDN 目录的 3 位代码 |
| 29 | 产品或服务描述 | M | 合并电子发票上填收据参考编号 |
| 30 | 单价 | M | |
| 31 | 税种 | M | 行层级与发票层级 |
| 32 | 税率 | **C** | |
| 33 | 税额 | M | 行层级与发票层级 |
| 34 | 免税细节 | **C** | 若有免税适用则必填 |
| 35 | 获免税金额 | **C** | 若有免税适用则必填 |
| 36 | 小计 | M | 仅行层级 |
| 37 | 不含税总额 | M | 行层级与发票层级 |
| 38 | 含税总额 | M | 仅发票层级 |
| 39 | 净额总计 | O | 仅发票层级 |
| 40 | 应付总额 | M | 仅发票层级 |
| 41 | 进位调整金额 | O | 仅发票层级 |
| 42 | 按税种分列的应税总额 | O | 仅发票层级 |
| 43 | 数量 | O | |
| 44 | 计量 | O | |
| 45 | 折扣率 | O | |
| 46 | 折扣金额 | O | |
| 47 | 费用／收费率 | O | |
| 48 | 费用／收费金额 | O | |

### 付款资讯

| # | 栏位 | 状态 |
| --- | --- | --- |
| 49 | 付款方式 | O |
| 50 | 供应商银行账户号码 | O |
| 51 | 付款条款 | O |
| 52 | 预付金额 | O |
| 53 | 预付日期 | O |
| 54 | 预付参考编号 | O |
| 55 | 账单参考编号 | O |

## 附录栏位

| 栏位 | 状态 | 适用于 |
| --- | --- | --- |
| Customs Form No. 1、9 等的参考编号 | **必填** | 货物进口 |
| Customs Form No. 2 的参考编号 | 选填 | 货物出口 |
| 收货方名称／地址／TIN／注册或护照号码 | 选填 | 货物寄送给买方以外的人 |
| Incoterms | 选填 | 货物进口与出口 |
| 产品税则代码 | 选填 | 仅限货物 |
| 自由贸易协定资料 | 选填 | 仅限出口，若适用 |
| 认证出口商授权号码，例如 ATIGA 号码 | 选填 | 仅限出口，若适用 |
| 原产国 | 选填 | 货物进口与出口 |
| 其他收费细节 | 选填 | 货物进口与出口 |

LHDN 指出，附录的要求可能不时更新。

## 代码清单

**电子发票类型**

| 代码 | 类型 | | 代码 | 类型 |
| --- | --- | --- | --- | --- |
| 01 | Invoice | | 11 | Self-billed Invoice |
| 02 | Credit Note | | 12 | Self-billed Credit Note |
| 03 | Debit Note | | 13 | Self-billed Debit Note |
| 04 | Refund Note | | 14 | Self-billed Refund Note |

**税种**

| 代码 | 类型 |
| --- | --- |
| 01 | 销售税 |
| 02 | 服务税 |
| 03 | 旅游税 |
| 04 | 高价值货物税 |
| 05 | 低价值货物销售税 |
| 06 | 不适用 |
| E | 免税（若适用） |

**通用 TIN**（e-Invoice Specific Guideline, Appendix 1）

| 代码 | 用途 |
| --- | --- |
| EI00000000010 | General Public——仅持 MyKad 的马来西亚个人；合并电子发票上的买方；汇总自开电子发票上的供应商 |
| EI00000000020 | 外国买方或外国收货方 |
| EI00000000030 | 外国供应商，自开发票 |
| EI00000000040 | 政府、州与地方政府、法定机构、获豁免机构 |

SDK 另外也发布分类代码、国家代码、货币代码、MSIC 代码、付款方式、州属代码与
计量单位。

## 验证器，以及什么会触发它们

| 验证器 | 时机 | 常见失败原因 |
| --- | --- | --- |
| **Structure** | 即时 | XML 或 JSON 格式不正确，或文件不符合 UBL 2.1 之下该类型与版本所要求的结构 |
| **Core Fields** | 即时 | 某个必填栏位缺失 |
| **Code** | 即时与后台 | 某个货币、税种或其他代码值不在 LHDN 的清单里 |
| **Signature** | 后台 | 数字签署验证失败 |
| **Taxpayer** | 后台 | 文件中引用的某个 TIN 在该文件开具日期当日并非有效 |
| **Referenced Documents** | 后台 | 贷记单、借记单或退款单所指向的文件，在开具当时并非一张有效的电子发票 |
| **Duplicate Document** | 后台 | 几乎一模一样的文件已经提交过——错误代码 **DS302** |

文件状态的流转是 **Submitted → Valid** 或 **Invalid**。*Submitted* 只代表结构
与核心栏位检查过关；后台验证器仍然可能把它判为失败。

传输层错误采用标准 HTTP 对应：`BadRequest` 与 `BadArgument`（400）、
`Unauthorized`（401）、`Forbidden`（403）、`NotFound`（404）、
`TooManyRequests`（429，附 `Retry-After` 标头）、`InternalServerError`（500）、
`NotImplemented`（501）、`ServiceUnavailable`（503）。

## 更正一份有问题的文件

- **验证后 72 小时内**——供应商可以取消，或者买方可以请求拒收、再由供应商取消。
  超过 72 小时，两者都办不到。
- **在开出有瑕疵的电子发票后三天内**——Income Tax Act 1967 s.82C(8) 容许开出
  一张**替代电子发票**。
- **在那之后**——开出贷记单、借记单或退款单电子发票，在栏位 21 引用原发票。

## 常见错误

- **送出旧的 SSM 注册号码。** 栏位 4 要求在 SSM 注册者使用新的 12 位 BRN。
- **把栏位 22 倒填日期。** LHDN 要求当下的日期与时间；倒填日期的文件会失败。
- **外国供应商的 MSIC 留空。** 用 00000，不要留空值。
- **拿税种 06 当免税用。** 06 是*不适用*；免税是 E，而且它会把栏位 34 与 35
  变成必填。
- **原封不动地重送一次失败的提交。** 重复文件验证器会抛出 DS302，不会接受它。
- **把 Submitted 回应当成成功。** 只有 *Valid* 才是成功。

## 下一步

在写任何代码之前，先把栏位 3、4、5、8、10、11 与 12 对照你的客户与供应商主档
数据比一遍——清理时间实际上都花在这七个上面。然后再决定传输路线，因为 Portal
会以表单形式帮你填这些栏位，而 API 会把它们变成你自己的问题。
