---
topicId: MY-ACC-0011
title: "马来西亚的会计软件：如今决定选择的那两项能力"
seoTitle: "马来西亚会计软件：电子发票与 MBRS 契合度"
slug: "accounting-software-malaysia"
category: "accounting"
subcategory: ["bookkeeping"]
summary: "以中立于厂商的方式，从如今真正要紧的两条轴线评估马来西亚公司的会计软件——它如何把文件送进 MyInvois，以及它的输出能否喂进一份 MBRS 呈报。"

tier: "4"
mode: "practical"
contentType: "comparison"
sensitivity: "none"

answer: "功能清单已经无法区分在马来西亚销售的会计套装软件，能区分的是两项能力。第一，软件如何把一份文件送进 MyInvois——通过免费门户、通过直接 API 整合，还是通过以自己的凭证呈交的中介。第二，鉴于没有任何会计套装软件能直接向 SSM 呈报，它的输出能否映射到 SSM 的 SSMxT 分类标准上以完成一份 MBRS 呈报。其余的都是偏好问题。"
keyTakeaways:
  - "LHDN 记载了两种传输机制——MyInvois Portal 与 API——外加由受委中介代为呈交"
  - "LHDN 公布了 SDK，但并没有为电子发票软件设立认证、鉴定或核准厂商名单；所谓「LHDN 核准」是厂商自封的"
  - "马来西亚电子发票领域唯一真正的鉴定来自 MDEC，它以 Peppol Authority 的身份鉴定 Peppol Service Provider 与 Peppol-Ready Solution Provider——而 Peppol 并非 MyInvois 的要求"
  - "没有任何会计套装软件能向 MBRS 呈报；呈报是在 SSM 自己的编制工具中建立，再以 zip 档上传至 mPortal"
  - "因此「MBRS-ready」的意思是一份稳定、可导出、且能映射到 SSMxT 概念的试算表，而不是一个呈报按钮"
  - "SSMxT 分类标准不得由公司扩充，因此一份在分类标准中无处安放的会计科目表是一笔反复发生的成本"
  - "中介只能取回它自己呈交过的文件，所以更换服务商并不会把你的呈交记录一并带走"
appliesTo: "正在选择或更换会计软件的马来西亚公司，以及正在盘点现有套装软件究竟能做什么的财务团队。"

verificationNeeded:
  - "本页刻意不列出任何特定产品的能力声称——请逐一对照厂商自己当前公布的文档核实，因为本地化涵盖范围会在版本之间无预告地变动"
  - "SSM 并未在其 MBRS 页面上公布任何第三方 XBRL 编制软件的核准或鉴定名单；在依赖任何厂商的 MBRS 认证声称之前，请向 SSM 确认"
  - "e-Invoice Guideline 与 Specific Guideline 修订频繁——在把任何整合要求当成定论之前，请确认当前版本"

lang: "zh"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "2723b917b69eeed3"

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
  - title: "Software Development Kit (SDK) for the LHDNM MyInvois System"
    url: "https://sdk.myinvois.hasil.gov.my/"
    publisher: "LHDN"
  - title: "IRBM e-Invoice Guideline"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
  - title: "Peppol Service Providers — National e-Invoicing"
    url: "https://www.mdec.my/national-einvoicing/peppol-service-providers"
    publisher: "MDEC"
  - title: "SSMxT 2022 Architecture Document"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf"
    publisher: "SSM"
  - title: "MBRS Preparation Tool"
    url: "https://www.ssm.com.my/Pages/Services/Other-Services/XBRL%20250918/MBRS-Preparation-Tool.aspx"
    publisher: "SSM"

entity: "Accounting software"
relations:
  - { rel: "related-to", to: "myinvois-integration" }
  - { rel: "affects", to: "mbrs-2-filing-guide" }
  - { rel: "related-to", to: "sdn-bhd-bookkeeping" }
related: ["sdn-bhd-bookkeeping", "mbrs-2-filing-guide", "mbrs-tagging-errors", "myinvois-integration", "e-invoice-accounting-records", "bookkeeping-in-house-vs-outsourced", "e-invoicing", "accounting-records-section-245"]
keywords: ["accounting software Malaysia", "e-invoice compliant accounting software", "MyInvois integration software", "MBRS XBRL software Malaysia", "LHDN approved accounting software", "SSMxT taxonomy export"]
---

马来西亚的会计软件清单文是一个早已被解决的文体：十款产品，每款一段，一张没人用的
功能对照表，外加一个联盟行销链接。它从来就没什么用，而自从电子发票与 MBRS 2.0 落地
以来，它已经具有实质误导性，因为它是按那些已经无法区分产品的东西来排名的。

如今能区分它们的是两项能力。两项都不会出现在功能对照表上。

## 轴线一：软件如何把文件送进 MyInvois

LHDN 记载了**两种传输机制**——MyInvois Portal 与 API——并另行允许纳税人委任一名
**中介**代为呈交。这产生了四种实务形态，而你买的软件决定了哪几种对你开放。

| 路径 | 软件必须做到什么 | 该核实什么 |
| --- | --- | --- |
| **仅用 Portal** | 什么都不必。你在 MyInvois 里逐笔输入或批量上传文件 | 软件能否导出一份符合 Portal 批量试算表格式的档案，还是根本就在重新打字 |
| **直接 API** | 建立并签署 UBL 2.1 文件、管理令牌、处理非同步验证 | 马来西亚本地化是否涵盖自开票（self-billed）文件类型与进口附件字段，而不只是标准销售发票 |
| **通过中介或中间件** | 按时程导出干净的交易数据 | 呈交时用的是谁的凭证、数据由谁持有，以及退出时你能带走什么 |
| **通过 Peppol 服务商** | 与中间件相同，但经由一个 Peppol 接入点 | 你是否真的需要与贸易伙伴之间的互通交换——Peppol 并非 MyInvois 的要求 |

这几者之间的取舍是量与架构的问题，已在
[MyInvois 整合](/zh/taxation/myinvois-integration)中处理。属于本页的是软件端的后果：
一款没有 API 整合路径的套装软件并不会让你无法合规，它只是把你绑在 Portal 上，而
Portal 的成本是敲键盘的工夫与月结时的人力集中，而不是授权费。

**值得写进合约的那个中介细节：**中介只能查看与取回它自己呈交过的电子发票。换了服务商，
你的呈交记录不会跟着走。请规划一段平行运行期，并保留你自己的存档。

## 该怀疑的那项鉴定声称

LHDN 公布了 SDK、API 文档与一份常见问答。它并没有公布任何针对电子发票软件的鉴定
机制、认证计划或核准厂商名单。若某产品以 **LHDN 核准**为卖点，那个身份是厂商对自己的
描述。请他们把文书拿出来看。

马来西亚电子发票领域确实有一项货真价实的鉴定，但它属于另一个人。**MDEC 是马来西亚的
Peppol Authority**，它鉴定两种不同的角色：

| 角色 | 那是什么 |
| --- | --- |
| **Peppol Service Provider（SP）** | 营运一个 Peppol 接入点——负责路由文件的连通闸道 |
| **Peppol-Ready Solution Provider（PRSP）** | 为终端用户建构具备 Peppol 合规能力的软件或 ERP |

两份名单都由 MDEC 公布。两者都不是 LHDN 的核准，两者也都不是遵守电子发票强制令的
必要条件。持有 MDEC 鉴定的厂商，已证明其符合 Peppol 标准，那是一项实在的资历——
对 Peppol 而言。

## 轴线二：输出能否喂进一份 MBRS 呈报

这里有一个把整个品类重新定义的事实：**没有任何会计套装软件能向 SSM 呈报财务报表。**

呈报是在 SSM 自己的 **MBRS Preparation Tool（mTool）**中建立的，该工具产生一个上传至
MBRS 门户的 zip 档。那才是获接受的呈交产物。不管你的账簿产出什么，它都只有在通过
那个工具之后，才成为一份 MBRS 呈报。

所以「MBRS-ready」作为一项软件声称，诚实地讲只能有一个意思：输出的形态能够干净地
映射到 SSM 的 **SSMxT** 分类标准上。有三项属性决定这一点：

- **一份稳定、可导出的试算表**，其科目代码不逐年变动。代码一动，映射就得从头重建。
- **一个不会漂移的呈报基础。**在不同呈报格式之间切换，即使数字完全相同，也会迫使
  映射重做一遍。
- **一份每一行都有地方落脚的会计科目表。**SSMxT 架构文件声明，实体**不得扩充该分类
  标准**——公司特定的扩充是被禁止的，细节应放在文字区块中。一个找不到对应概念的科目，
  就是每年都要做一次的人手判断。

下游还蹲着两个机械性的陷阱，值得在你怪罪软件之前先知道。费用在 SSMxT 中以**正数**
储存，与多数账簿的导出方向相反。而以千为单位陈述的数字必须带上正确的 `decimals`
属性——错的那个会静静地通过验证，然后呈报出一个大了一千倍或小了一千倍的数字。

## 一份可以发给厂商的评估清单

1. 该产品今天支援哪一种 MyInvois 传输机制——Portal 导出、直接 API，还是通过你们自己的中介服务呈交？
2. 若是 API：该本地化是否涵盖**自开票**电子发票与进口货物的附件字段，还是只有标准销售发票？
3. 文件是以谁的凭证呈交的？经验证的文件由谁持有？
4. 我们能否在不请顾问的情况下，以机器可读格式导出一份科目代码稳定的完整试算表？
5. 你们是否持有 MDEC 的 Peppol SP 或 PRSP 鉴定——若你们声称获 LHDN 核准，有什么文件为证？
6. 退出时，我们能带走什么：账簿、映射、呈交记录？

## 本页为何不点名任何产品

因为一项能力只有在厂商或 LHDN 公布之后才可以被引用，而厂商的能力页面会在版本之间
无变更日志地改动。今天写下的产品比较，是一张行销文案的快照，不是软件的快照。上面那
份清单比快照活得久；一张排名表则不会。

## 常见错误

- **相信「LHDN 核准」的声称。**LHDN 并未公布任何这样的名单。
- **把 MDEC 的 Peppol 鉴定当成 LHDN 的核准，**或把 Peppol 当成强制的。
- **买一个呈报按钮。**除了 mTool 的输出，没有任何东西能呈报到 MBRS。
- **把「MBRS-ready」读成认证。**它最多只表示一份干净、稳定的导出。
- **每年更动会计科目表，**然后每年为映射再付一次钱。
- **只评估销售开票。**压垮多数实施项目的是自开票的量。
- **以为验证会抓到量级错误。**差一千倍的量级错误照样通过。

## 下一步

在你去选购之前，先对手上已有的东西做两项测试。导出一份完整的试算表，检查每一个科目
是否都有一个显而易见的 SSMxT 归属。然后挑一笔自开票交易——一笔代理佣金或一个外国
供应商——从头到尾跟着它进入 MyInvois。这两项当中先失败的那一项，才是你真正要买的
东西。
