---
topicId: MY-TAX-0008
title: "MyInvois 集成：门户、API 还是中间件"
seoTitle: "MyInvois 集成：门户 vs API vs 中间件"
slug: "myinvois-integration"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "一套不偏袒任何供应商的方法，依交易量与你的 ERP 已经能做什么，在免费的 MyInvois Portal、直接 API 集成与技术供应商之间作选择。"

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "LHDN 提供两种传输机制：免费的 MyInvois Portal，透过 MyTax 登入，支持逐笔表单输入与预设 Excel 表格的批量上传；以及 API，可透过直接 ERP 集成、Peppol 服务供应商，或非 Peppol 技术供应商接达。Portal 适合低量；API 适合高量，需要数码证书与前期的系统工作。"
keyTakeaways:
  - "官方机制只有两种——Portal 与 API。其余一切都只是通往 API 的路径"
  - "Portal 免费，需要 MyTax 登入，并提供 Excel 批量上传"
  - "API 的路径是直接 ERP、Peppol 服务供应商，或非 Peppol 技术供应商"
  - "API 提交需要一份 .cer 或 .pfx 格式的数码证书"
  - "硬性限制：每次提交 100 份文件、5MB，每份文件 300KB"
  - "中介必须使用自己的 Client ID 与 Secret，而且只看得到自己提交过的东西"
  - "通常逼出 API 决定的是自开发票量，不是销售量"
appliesTo: "正在选择 MyInvois 路径的财务主管与 IT 团队，以及任何正在比较电子发票软件供应商报价的人。"

faq:
  - q: "MyInvois Portal 真的免费吗？够用吗？"
    a: "是，它由 LHDN 提供，透过 MyTax Portal 免费接达。它同时支持以表单逐笔创建，以及预设 Excel 表格的批量上传。够不够用，取决于文件数量，以及有多少文件需要买方专属的细节。一家只有少数几张 B2B 发票、每月一份合并电子发票的企业，可以无限期靠它跑下去。"
  - q: "我需要 Peppol 服务供应商吗？"
    a: "不需要。Peppol 是 LHDN 所列通往 API 的三种方式之一，另外两种是直接 ERP 集成与非 Peppol 技术供应商。LHDN 并不指定路径或供应商。如果你同时需要可互通的跨境文件交换，Peppol 才有意义；它不是 MyInvois 的要求。"
  - q: "API 需要什么是 Portal 不需要的？"
    a: "一份数码证书——用来为提交签署的 .cer 或 .pfx 文件，其经哈希处理的签名会带在提交主体内——以及按 UBL 2.1 结构以 XML 或 JSON 构建的文件。LHDN 在 MyInvois SDK 中公布 API 集成与配置指南以及端点。"
  - q: "如果我用供应商，漏了一张电子发票谁负责？"
    a: "你负责。开具与传输的义务依 Income Tax Act 1967 s.82C 落在纳税人身上，而 s.120(1)(d) 使违反构成罪行。把传输外包并不会转移这项义务。LHDN 还把中介限制在它们自己提交的电子发票上，所以更换供应商会把历史记录留在后面。"
  - q: "我该怎么估算这个决定的规模？"
    a: "数文件，不是数营业额。把交易性电子发票、合并电子发票、自开电子发票，以及所有贷记、借记与退款单据加起来。然后查那些排除项——超过 RM10,000 的交易与 Table 3.6 的行业不能综合，这可以把每月一份文件变成数千份。"
  - q: "我可以同时跑 Portal 与 API 吗？"
    a: "可以。LHDN 把这两种机制呈现为每次提交时的选择，而非一次性的永久选定，许多企业把高量销售走 API，而偶发的自开单据在 Portal 上处理。Portal 中的报表与仪表板两者都涵盖。"

verificationNeeded:
  - "各端点 API 速率限制的具体数值——SDK FAQ 提到 Integration Practices，但没有公布数字"
  - "LHDN 对技术供应商的任何认证、认可或核准供应商名单——在 hasil.gov.my 或 SDK 上都找不到"
  - "MyInvois Portal 批量上传表格所接受的最大行数——LHDN 说了「一定数量」但没有载明"

lang: "zh"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "12fac171732261f3"

status: "draft"
aiAssisted: true
reviewer: null
reviewDue: 2027-07-22
version: "0.1"
revisions:
  - version: "0.1"
    date: 2026-07-20
    change: "Initial draft from e-Invoice Guideline v4.7 and the MyInvois SDK."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "e-Invoice Guideline (Version 4.7) — sections 2.2 to 2.5"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "MyInvois SDK"
    url: "https://sdk.myinvois.hasil.gov.my/"
    publisher: "LHDN"
  - title: "MyInvois SDK — frequently asked questions"
    url: "https://sdk.myinvois.hasil.gov.my/faq/"
    publisher: "LHDN"
  - title: "MyInvois SDK — standard error response"
    url: "https://sdk.myinvois.hasil.gov.my/standard-error-response/"
    publisher: "LHDN"
  - title: "e-Invoice Specific Guideline (Version 4.8)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"

entity: "MyInvois transmission mechanisms"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "requires", to: "e-invoice-data-fields" }
  - { rel: "related-to", to: "myinvois-phases" }
related: ["e-invoicing", "myinvois-phases", "e-invoice-data-fields", "consolidated-e-invoice", "self-billed-e-invoice"]
keywords: ["MyInvois integration", "MyInvois API", "MyInvois Portal", "Peppol Malaysia", "e-Invoice middleware", "e-invois integrasi sistem"]
---

关于这个决定所写的几乎每一样东西，都是由某个在卖其中一个答案的人写的。所以就从
LHDN 实际承认的仅有两种机制开始——载于 e-Invoice Guideline 的 Table 2.1：
**MyInvois Portal** 与 **API**。Peppol 供应商、非 Peppol 技术供应商与中间件不是
第三个选项——它们是通往 API 的三条路。

## 两种机制

| | MyInvois Portal | API |
| --- | --- | --- |
| 成本 | 免费，经 **MyTax** 登入 | 自建或授权 |
| 输入 | 逐笔表单，或**预设 Excel 表格的批量上传** | 依 **UBL 2.1** 的 XML 或 JSON |
| 签名 | 由 Portal 处理 | 你自己的**数码证书**（.cer 或 .pfx） |
| LHDN 所述适用对象 | 所有纳税人皆可使用；无法建立 API 连接的企业 | 高量；需要前期投资与系统改造 |
| 路径 | 一条 | 直接 ERP、**Peppol** 供应商、**非 Peppol** 供应商 |

两者产出的东西一样：一个 IRBM Unique Identifier Number、一个验证时间戳，以及可视
化呈现上的一个 QR 码。

## 采购之前先把问题的规模量出来

问题不在你的营业额。问题在**你每个月必须传输多少份文件**，而这个数目通常比人们
预期的大：

1. 应买方要求开出的交易性电子发票
2. 合并电子发票——每月一份或多份，如果你按分行拆分则按分行计
3. **自开电子发票**——佣金、外国供应商、个人业主、多数利息、股息、资本偿还
4. 贷记、借记与退款单据

然后套上那两项会打碎粗略估算的排除。自 2026 年 1 月 1 日起，任何**超过 RM10,000
的单笔交易**都必须是交易性的，所有行业皆然。而 e-Invoice Specific Guideline 的
Table 3.6 中有九项活动完全不能综合——汽车、机票、建筑合约、代理与经销商付款、
博彩派彩、电力、电信。

一家每月卖三辆车的车厂，Portal 的工作量微不足道。一家有 4,000 名后付费用户的电信
转售商则不然，而且再怎么综合也帮不了它。

**自开发票量通常才是那个意外。** 一家每月开 40 张销售发票、却有 600 笔代理佣金
付款的公司，是一家高量的电子发票企业，不管它的销售账簿怎么说。

## Portal 真正跑不动的地方

- **数据输入成本。** 每一份交易性文件都需要键入或以表格载入买方姓名、TIN、
  注册号码、地址、联络电话与 SST 号码。
- **72 小时时钟。** 取消与拒绝的窗口自验证时起算。每周才提交一次的人工流程用不了
  它们。
- **月底集中。** 合并电子发票须在月底后**七个日历日**内呈交，而这是在其他一切
  之上的。
- **对账。** Portal 给你 XML、JSON、元数据、表格与 PDF 检索——但把已验证文件对回
  你的账簿是人工活。

## API 花的钱比授权费多的地方

- **数码证书**必须取得、安装并轮换。
- **提交限制是硬性的：** 每次提交 100 份文件、5MB，每份文件 300KB。分批以及必要时
  的最小化，是你自己的问题。
- **两阶段验证。** *已提交*不等于*有效*。结构、核心字段与代码会即时检查；签名、
  纳税人、被引用文件与重复项则在后台检查。任何把 202 式确认当成成功的集成，都会
  悄悄累积无效文件。
- **令牌处理。** 登入令牌有效期 60 分钟，本意是重复使用，不是每次请求都新铸一个。
  速率限制会回传 429 并带上 `Retry-After` 标头。
- **主数据。** 供应商与买方的 TIN、新的 12 位 BRN、MSIC 代码与 SST 号码，都必须在
  这一切跑起来之前就是对的。

## 选一条通往 API 的路

| 路径 | 适合 | 要留意 |
| --- | --- | --- |
| **直接 ERP 集成** | 有维护中的马来西亚本地化的成熟 ERP，或有内部工程能力 | 指引版本变动时的持续维护——v4.7 与 v4.8 都在 2026 年 7 月 7 日落地 |
| **Peppol 服务供应商** | 同时想与贸易伙伴进行可互通文件交换的企业 | Peppol 不是 MyInvois 的要求；别当它是要求那样付钱 |
| **非 Peppol 技术供应商／中间件** | 多个来源系统、POS 网点群，或没有本地化的 ERP | 数据保管权、退出条款，以及它们是否以自己的凭证提交 |

LHDN 不背书、不认证、不核准任何供应商。如果有供应商声称获得 LHDN 核准，请他拿
出来看。

## 没人问的中介问题

SDK 载明，中介以**它们自己的 Client ID 与 Client Secret** 提交，而且只能存取
**它们自己**提交的电子发票——它们无法调取纳税人自行提交的文件。

有两项后果值得写进合约：

- **更换供应商不会把你的提交历史带过去。** 请规划一段平行运行期，以及你自己的
  存档。
- **责任不会转移。** Income Tax Act 1967 的第 82C 条把义务放在纳税人身上；
  s.120(1)(d) 使违反构成罪行。供应商停机就是你的不合规。

关于停机，LHDN 提供一项救济。e-Invoice Guideline 第 2.5.4 节说，若 MyInvois
System 本身因维护或技术理由而停摆，而纳税人能证明其合规努力，总监会逐案评估，并
可能不采取任何行动。那涵盖的是 LHDN 的停机，不是你的供应商的。

## 一条决策路径

1. **你获豁免吗？** 年营业额低于 RM1,000,000，就到此为止。
2. **数一数每月文件**，涵盖以上四个类别。
3. **大约一百份以下、以综合为主？** Portal，配 Excel 批量上传。每年重新检视一次。
4. **数百至数千份、单一来源系统？** 问你的 ERP 供应商他们的 MyInvois 本地化涵盖
   什么——具体是自开类型 11 至 14，以及进口的附件字段。
5. **数千份，或多个来源系统，或一整片 POS 网点？** 中间件，选的时候看数据保管权与
   退出条款，而不是功能清单。
6. **无论选什么，在你的宽限期结束前把它端到端验证一遍**——第四阶段是 2027 年
   12 月 31 日，第一至三阶段则已经过去了。

## 常见错误

- **先买再数。** 文件数量，包括自开的，是这个决定的全部输入。
- **以为 Peppol 是强制的。** 它是三条 API 路径之一。
- **相信认证声称。** LHDN 没有公布任何核准供应商名单。
- **把验证当成同步的。** 七个验证器中有四个在后台运行。
- **跳过主数据清理。** 旧的 SSM 注册号码与过期的 TIN，无论集成做得多好都会在纳税人
  验证器上失败。
- **用干净数据测试。** 请拿外国供应商、没有 TIN 的个人、贷记单据与月底量来测，
  因为那才是会坏的地方。

## 下一步

把上个月的应付与应收拉出来，把每一行归类为交易性、综合或自开，然后数。那个数字
决定机制。接着拿字段清单对照你的主数据，因为清理几乎总是比集成花更久。
