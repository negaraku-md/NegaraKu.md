---
topicId: MY-TAX-0003
title: "马来西亚电子发票：MyInvois 从何入手"
seoTitle: "马来西亚电子发票：MyInvois 起步指南"
slug: "e-invoicing"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "马来西亚电子发票强制规定的导航页——MyInvois 验证如何运作、你的企业何时被纳入范围，以及哪一篇详解回答得了你的问题。"

tier: "3"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "电子发票要求发票数据提交至 LHDN 的 MyInvois 系统作验证，途径是免费的 MyInvois Portal 或以 API 连接的系统。通过验证的文件会获发一组唯一识别号码（Unique Identifier Number）与 QR 码。这项强制规定按年营业额分阶段推行，最后一个阶段自 2026 年 1 月 1 日起涵盖营业额至 RM5 million 的企业，年营业额低于 RM1 million 者获豁免。每个阶段各有自己的过渡宽限期。"
keyTakeaways:
  - "文件须先经 MyInvois 验证，才在所得税用途上具备发票的作用"
  - "四个阶段，没有第五个——最后一个阶段自 2026 年 1 月 1 日起，适用于营业额至 RM5 million 的群组"
  - "年营业额低于 RM1,000,000 的企业获豁免"
  - "你属于哪个阶段，由 FY2022 或 YA2022 的数字定死，之后不会变动"
  - "经 LHDN 验证的电子发票，并不自动满足 SST 税务发票的规定——那是另一项文件要求"
appliesTo: "正在为电子发票强制规定作准备、或已在其下运作的企业主、财务团队与系统管理员。"

verificationNeeded: []

lang: "zh"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "46533f76e2996181"

status: "reviewed"
aiAssisted: true
reviewer: "Ashton Tan"
reviewed: "2026-07-25"
reviewDue: 2027-07-22
version: "0.3"
revisions:
  - version: "0.1"
    date: 2026-07-10
    change: "Initial draft."
    reviewer: null
  - version: "0.2"
    date: 2026-07-20
    change: "Converted to a Tier 3 hub over the six e-Invoice articles now written beneath it, and re-tiered from 2 accordingly. The original was 496 words behind a Tier 2 badge with no FAQ, and its rollout table declined to state any dates or thresholds, telling readers to check LHDN instead — a page about a phased mandate that would not say when the phases were. Phase dates, data fields, consolidation rules, self-billing and integration choices now live in the cluster; this page routes by reader intent."
    reviewer: null
  - version: "0.3"
    date: 2026-07-21
    change: "Bridged the 'no phase five' point with the separate 1 July 2026 start date for newly commenced businesses (2023-2025, turnover >=RM1m), so it no longer reads as conflicting with the freelancer-and-gig-tax page."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "IRBM e-Invoice Guideline"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "IRBM e-Invoice Specific Guideline"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "MyInvois Portal"
    url: "https://myinvois.hasil.gov.my/"
    publisher: "LHDN"

entity: "e-Invoicing and MyInvois"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "explained-in", to: "myinvois-phases" }
  - { rel: "explained-in", to: "myinvois-integration" }
  - { rel: "related-to", to: "consolidated-e-invoice" }
  - { rel: "related-to", to: "self-billed-e-invoice" }
  - { rel: "related-to", to: "e-invoice-vs-tax-invoice" }
related: ["myinvois-phases", "myinvois-integration", "e-invoice-data-fields", "consolidated-e-invoice", "self-billed-e-invoice", "e-invoice-vs-tax-invoice", "e-invoice-accounting-records"]
keywords: ["e-Invoice Malaysia", "MyInvois", "e-invois LHDN", "e-invoicing phases Malaysia", "MyInvois validation"]
---

从前一张发票之所以有效，是因为你开了它。在电子发票强制规定之下，它之所以有效，
是因为 LHDN 说它有效——文件必须提交至 MyInvois 并通过验证，才在所得税用途上
发挥它的作用。

单单这一项改变，就衍生出后续所有问题，而其中大部分都各有专文回答。

## 验证如何运作，六个步骤

1. 供应商把交易数据提交至 MyInvois，可以手动键入免费的 Portal，也可以透过以
   API 连接的系统自动提交。
2. LHDN 近乎实时地验证结构与必填栏位。
3. 成功后获发一组**唯一识别号码**（Unique Identifier Number）与 QR 码。
4. 供应商把通过验证的文件分享给买方。
5. 买方可以拿 QR 码对照 LHDN 的记录查证。
6. 拒收与取消必须在容许的时限内处理。

## 你需要哪一篇

| 如果你的问题是 | 请读 |
| --- | --- |
| 这什么时候轮到我的企业？ | [MyInvois 阶段、门槛与宽限日期](/zh/taxation/myinvois-phases) |
| 用 Portal、API，还是中介服务商？ | [MyInvois 系统对接](/zh/taxation/myinvois-integration) |
| 我到底得送出哪些数据？ | [电子发票数据栏位速查](/zh/taxation/e-invoice-data-fields) |
| 我可以把零售销售汇总，而不是一笔开一张吗？ | [合并电子发票](/zh/taxation/consolidated-e-invoice) |
| 我的供应商在海外，或者是个人 | [自开电子发票](/zh/taxation/self-billed-e-invoice) |
| 这会取代我的 SST 税务发票吗？ | [电子发票 vs SST 税务发票](/zh/taxation/e-invoice-vs-tax-invoice) |
| 我得保存多久？ | [电子发票与会计记录](/zh/accounting/e-invoice-accounting-records) |

## 四件大家搞错的事

**没有第五阶段。** 推行按年营业额分四个阶段进行，最后是自 2026 年 1 月 1 日起
营业额至 RM5 million 的群组。年营业额低于 **RM1,000,000** 的企业获豁免，
外国外交机构与未经营业务的个人亦然。这并不与适用于*新开业*企业的另一个 **2026 年
7 月 1 日**起始日相抵触——凡在 2023 至 2025 年间开业、营业额达 RM1 million 或以上者，
自该日纳入。那是给没有 FY2022 基准的新进者的规则，不是第五个营业额阶段。

**你的阶段是定死的，不是浮动的。** 它由 FY2022 经审计财务报表或 YA2022 报税表
决定，年结日有变动者按比例计算，之后就不会再变。日后成长越过某个门槛，不会把你
推进较早的阶段；萎缩了也不会把你推出去。

**宽限期跟阶段生效日不是同一回事。** 每个阶段都带一段过渡期，期间 LHDN 不会
就不合规采取行动，而第 4 阶段的宽限期比先前几个长得多。请读阶段那一篇，不要
想当然地把强制生效日当成执法日。

**通过验证的电子发票不自动就是 SST 税务发票。** 这两套制度各有各的文件要求，
而法定立场是：当电子发票的细节与另一部成文法的发票要求不一致时，该电子发票
仅就 Income Tax Act 的用途有效。已注册 SST 者需要一份同时满足两边的文件。

## 常见错误

- 等到强制生效日才开始测试。TIN 验证与对接失败，只有在真实交易量之下才会浮现。
- 以为每一个客户都需要一张逐项列明的电子发票，其实许多 B2C 交易可以汇总——
  但要受禁止汇总的行业限制。
- 忽略了对外国供应商、以及对自己不开任何单据的个人付款时的自开发票义务。
- 把这当成一个 IT 项目。上线时多数的失败是客户与供应商主档数据脏，不是对接的
  程式错误。
- 以为 MyInvois 就是你的档案库。LHDN 并未就已验证文件公布任何保存保证；保存的
  责任仍然在你身上。

## 下一步

如果你还不知道自己是否、或何时被纳入范围，就从阶段那一篇开始——它载有营业额
级距、豁免门槛、新企业规则，以及每一个宽限期的结束日期。如果你已经在范围内、
正在选择怎么提交，系统对接那一篇按交易量比较了 Portal、直接 API 与中介服务商
三条路。
