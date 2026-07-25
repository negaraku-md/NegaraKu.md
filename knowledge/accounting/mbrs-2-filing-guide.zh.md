---
topicId: MY-ACC-0002
title: "编制一份 MBRS 2.0 呈报：mTool、SSMxT 分类标准与退件循环"
seoTitle: "MBRS 2.0 呈报指南：mTool 与 SSMxT 标记"
slug: "mbrs-2-filing-guide"
category: "accounting"
subcategory: ["financial-statements"]
summary: "编制一份 SSM XBRL 呈报的完整操作流程——选定入口点、把科目映射到 SSMxT 概念、通过 mTool 验证，以及让一份被质询的呈报重新通过 mPortal。"

tier: "1"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "MBRS 2.0 呈报是在 SSM 以 Excel 为基础的编制工具 mTool 中离线完成，再通过 mPortal 在线提交。你从 31 个入口点中选一个，把财务报表中的每一个数字映射到 SSM 分类标准（SSMxT_2022v1.0）中的一个概念，通过工具内建的分类标准验证规则，然后产生一份 XBRL 实例文件。由 maker 上传；只有持有效执业证书的 lodger 才能呈交。"
keyTakeaways:
  - "mTool 2.2 是当前的编制工具；其内含的分类标准是 SSMxT_2022v1.0，建立在 IFRS Taxonomy 2022 之上"
  - "涵盖常年申报表、财务报表、主要财务指标、更正与豁免申请的 31 个入口点——选错就意味着整个档案重做"
  - "不允许公司自订扩充：若分类标准中没有对应你那一行项目的元素，你就把它标记进一个文字区块，而不是自创一个概念"
  - "金额必须以马币表示——Companies Act 2016 s.259(1)(c) 有此要求，而分类标准强制执行 iso4217:MYR"
  - "验证是规则驱动的，不是表面功夫：强制元素、衍生强制元素、维度汇总、正负号规则与跨报表一致性，全部要在档案产生之前跑一遍"
  - "maker 编制并上传，lodger 批准并呈交——董事在两者当中都没有角色"
  - "被质询的呈报会退回 maker；你在修正期间，法定期限并不会暂停"
appliesTo: "必须亲手产出那份 XBRL 档案、而不只是知道需要一份的会计人员、公司秘书与财务人员。"

faq:
  - q: "我该用哪一个版本的 mTool 与哪一套分类标准？"
    a: "mTool 2.2 是 SSM MBRS 页面上的当前版本，其内嵌的分类标准是 SSMxT_2022v1.0，以 IFRS Accounting Taxonomy 2022 为基础。SSM 另有一份说明列出 mTool 2.1 与 2.2 之间的差异。以 mTool 1.0 产生的 zip 档无法上传至 mPortal 2.0——它必须在当前工具中打开并重新产生。"
  - q: "什么是入口点，我要怎么选对？"
    a: "入口点是某一类呈交所专用的分类标准 schema。MBRS 2.0 有 31 个：五种常年申报表类型、按会计准则与公司类型划分的财务报表类型（FS-MFRS、FS-MPERS、FS-CLBG、FS-EPC、FS-FC、FS-BNM，另加 Companies Act 1965 的对应版本）、四种主要财务指标类型、更正，以及八种豁免申请。正确的那一个，由你的公司类型、你据以呈报的 Act，以及你所应用的会计准则固定下来。"
  - q: "若分类标准中没有对应某一行项目的元素，我可以自建一个标记吗？"
    a: "不可以。SSMxT 架构文件明白写着：不允许对 SSMxT_2022v1.0 作公司自订扩充。凡分类标准中没有相符的概念，编制者应把该细节标记进一个适当的文字区块元素来提供。这是 SSM 呈报与其他地方的自愿性 XBRL 报告之间最大的一项差别。"
  - q: "究竟谁能呈交这份档案——maker 还是 lodger？"
    a: "maker 编制实例文件并在 mPortal 中上传，但呈交是 lodger 的行为。lodger 必须持有通过 e-Secretary 注册的有效执业证书，外加一份有效的数码证书。若执业证书已过期，无论那份 XBRL 档案做得多好，呈报就是发不出去。"
  - q: "我可以用主要财务指标代替一整套财务报表来呈报吗？"
    a: "只有在事先获批准的情况下才可以。公司必须先依 Companies Act 2016 s.604(2) 以入口点 EA2 申请豁免以完整 XBRL 格式呈报财务报表与报告。SSM 批准之后，公司才可使用 KFI 入口点。没有那项批准就呈报 KFI，并不是一个选项。"
  - q: "如果 SSM 质询我的呈报，期限会停吗？"
    a: "不会。质询会把呈报退回 maker 更正与重新呈交，但这当中没有任何东西会让 s.258 的传阅时钟或 s.259 的提交时钟暂停。若更正后的档案在法定日期之后才送达，Practice Directive 1/2017 下的逾期提交罚金会从原本的到期日起算。"

verificationNeeded:
  - "在编制呈报之前，请对照 SSM 的 MBRS 页面确认当前的 mTool 版本，以及 SSMxT_2022v1.0 之后是否有新的分类标准发布——SSM 更新这些时并不会另行公告"
  - "在提交时，请对照 SSM 的收费表确认各呈交类型的当前 mPortal 费用"
  - "已公布的 MBRS 常见问答是 2.4 版（2024 年 10 月），早于 mTool 2.2 的某些行为——请查阅你所呈报入口点的 mTool 2.2 使用手册"

lang: "zh"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "7d7049034803d339"

status: "reviewed"
aiAssisted: true
reviewer: "ashton-tan"
reviewed: "2026-07-25"
reviewDue: 2027-07-22
version: "0.2"
revisions:
  - version: "0.1"
    date: 2026-07-20
    change: "Initial draft."
    reviewer: null
  - version: "0.2"
    date: 2026-07-21
    change: "Removed the stale 'mTool 2.1' migration step (the article states mTool 2.2 is current) — a 1.0 zip is reopened in the current tool. EA5A and EA5B remain cited to s.259(2), which PN 3/2018 para 10 confirms is the single extension power for both circulation and lodgement."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "Malaysian Business Reporting System (MBRS) — Frequently Asked Questions, version 2.4"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/FAQs_Malaysian_Business_Reporting_System_MBRS.pdf"
    publisher: "SSM"
    date: "2024-10-01"
  - title: "MBRS Enhancement MBRS 2.0 — Overview"
    url: "https://www.ssm.com.my/Pages/Publication/PDF%20Files/AD%202024%20-%20Overview%20of%20MBRS%20v2.pdf"
    publisher: "SSM"
  - title: "MBRS 2.0 SSM Taxonomy 2022 (SSMxT_2022) Architecture Document"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf"
    publisher: "SSM"
  - title: "MBRS — Malaysian Business Reporting System"
    url: "https://www.ssm.com.my/Pages/Services/Other-Services/MBRS.aspx"
    publisher: "SSM"
  - title: "Companies Act 2016 (Act 777), updated text as at 1 August 2022"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "SSM"
  - title: "Companies Act 2016: Practice Directive No. 1/2017 (Revised 1 October 2024)"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Practice%20Directive%201_2017%20(Revised)%201%20Oct%202024.pdf"
    publisher: "SSM"
    date: "2024-10-01"
  - title: "Practice Directive No. 10/2024 — Qualifying Criteria for Audit Exemption for Certain Private Companies in Malaysia"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/PD10-2024-Qualifying-Criteria-for-Audit-Exemption-for-Certain-Categories-of-Private-Companies.pdf"
    publisher: "SSM"
    date: "2024-12-16"

entity: "MBRS 2.0 filing preparation"
relations:
  - { rel: "administered-by", to: "ssm" }
  - { rel: "governs", to: "companies-act-2016" }
  - { rel: "explained-in", to: "mbrs-2" }
  - { rel: "related-to", to: "mbrs-tagging-errors" }
  - { rel: "related-to", to: "financial-statement-pack" }
  - { rel: "related-to", to: "financial-statements-lodgement" }
  - { rel: "related-to", to: "unaudited-financial-statements" }
  - { rel: "related-to", to: "extension-of-time-ssm" }
related: ["mbrs-2", "mbrs-tagging-errors", "financial-statement-pack", "financial-statements-lodgement", "unaudited-financial-statements", "extension-of-time-ssm", "mfrs-vs-mpers"]
keywords: ["MBRS 2.0 filing guide", "mTool 2.2", "SSMxT taxonomy", "XBRL tagging Malaysia", "MBRS entry point", "mPortal maker lodger", "MBRS rejection", "prepare financial statements XBRL SSM"]
---

搜「MBRS 2.0」得到的结果，几乎全是想卖你一个「不必自己做」的方案。转换厂商、外包
标记服务，还有以「来谈谈」收尾的四大准备度诱饵文。没有人公开：从一份签署好的账目到
一封 SSM 的确认回执之间，究竟发生了什么。

发生的是这些。你安装一个 Microsoft Excel 增益集，从三十一个入口点里挑一个，然后把你
财务报表中的每一个数字映射到一套你不获准扩充的、六千个元素的分类标准里的某个概念。
接着，在每一个强制元素都到位、每一个小计都合得上、每一个正负号惯例都对之前，这个
工具拒绝产生档案。然后，一名持执业证书的人按下呈交。

本页讲的是操作机制。呈报的**义务**——谁、何时、罚则是什么——在姊妹页
[MBRS 2.0 与呈报义务](/zh/company-secretary/mbrs-2)。

## 你实际上在建什么

一份 MBRS 呈交是一份 XBRL 实例文件：一份结构化档案，其中每个数字都带着机器可读的
身份。身份来自 **SSM 分类标准**，目前是 **SSMxT_2022v1.0**。

SSMxT 不是 SSM 从零发明的。它以 **IFRS Accounting Taxonomy 2022** 为基础——6,458 个
IFRS 元素——再在上面加上马来西亚本地的概念，用于 IFRS 没有理由承载的 Companies Act
披露事项。Companies Act 2016 的财务报表分类标准，在 **MFRS 下有 6,197 个概念**，在
**MPERS 下有 2,375 个**。

非财务那一面，比多数编制者预期的更小、也更规定化：

| 披露 | 概念数（CA 2016） |
| --- | --- |
| 董事报告 | 24 |
| 董事声明 | 29 |
| 董事业务回顾 | 11 |
| 致成员的审计师报告 | 22 |
| 涉及证券交易所的情况 | 11 |

这些数字很要紧。董事报告不是以一份扫描 PDF 提交的。它是逐字段、对照 24 个界定好的
概念标记的——这正是为什么一份以自由散文草拟、从未映射到 Fifth Schedule 各标题的董事
报告，会变成一个标记问题，而不是一个草拟问题。

## 两个工具，以及在两者之间传递的那个档案

**mTool** 是编制工具。它是一个 Microsoft Excel 增益集，只限 Windows——它不能在 macOS
上跑，也不能在 Open Office 上跑。当前版本是 **mTool 2.2**，SSM 另有一份说明列出它与
mTool 2.1 的差异。它内建 SSMxT 浏览器，可离线运作，跑验证规则，并把 XBRL 档案输出为
一个 zip。

**mPortal** 是呈交平台。你登入、上传 zip、送去批准、付款，然后收到确认回执。

这里有一个会吃掉整个下午的陷阱：**以 mTool 1.0 产生的 zip 无法上传至 mPortal 2.0。**
SSM 自己的指引允许你在当前工具中打开一个 mTool 1.0 的 zip 并重新产生，但那份旧的
产物本身已经死了。如果你要重新呈报一份 2023 年做的东西，就准备重建吧。

相关的陷阱是公司编号。**新的公司注册编号格式在 MBRS 2.0 中是强制的。**旧格式只用于
预填常年申报表数据。

## 选择入口点

入口点是某一特定类别呈交所用的分类标准 schema。MBRS 2.0 有 31 个。选错不是一个格式
错误——那是不同的 schema、不同的强制元素，以及一次重建。

**常年申报表**

| 入口点 | 用途 |
| --- | --- |
| AR1 | 有股本的公司，s.68 |
| AR2 | 无股本的公司，s.68 |
| AR3 | 外国公司，s.576 |
| AR4 | 事项无变动，s.68(6) |
| AR1965 | Companies Act 1965 下的常年申报表 |

**财务报表与报告**

FS-MFRS 与 FS-MPERS 按所应用的会计准则划分。FS-CLBG 用于担保有限公司，FS-EPC 用于
豁免私人公司，FS-FC 用于外国公司，FS-BNM 用于受国家银行监管的公司。每一个都有一个
Companies Act 1965 的对应版本。

**主要财务指标**

KFI-MFRS、KFI-MPERS、KFI-CLBG 与 KFI-FC 是为不以 XBRL 呈报完整一套的公司而设的。你
不能单方面选用它。公司必须先取得依 Companies Act 2016 s.604(2) 提出的
**EA2——申请豁免以完整 XBRL 格式呈报财务报表与报告**的批准。FS-FC 也是同一套路，它
只有在取得 s.575(7) 下的 EA3 宽免之后才可使用。

**豁免申请**自成一族，而它们的法定依据值得知道，因为那才是申请真正据以提出的条文：

| 入口点 | 申请事项 | 条文 |
| --- | --- | --- |
| EA1 | 外国子公司的财政年结与控股公司不一致 | s.247(3) |
| EA2 | 豁免以完整 XBRL 格式呈报 | s.604(2) |
| EA3 | 宽免外国公司提交财务报表 | s.575(7) |
| EA4A | 就董事报告的格式与内容予以宽减 | s.255(1) |
| EA4B | 就财务报表的格式与内容予以宽减 | s.255(1) |
| EA5A | 展延传阅财务报表的期限 | s.259(2) |
| EA5B | 展延提交财务报表的期限 | s.259(2) |
| EA6 | 展延召开股东常年大会的期限 | s.340(4) |
| EA7 | 展延提交常年申报表的期限 | s.609(2) |
| EA8 | 向部长提出的申请 | s.247(8) |

请注意 EA5A 与 EA5B 是**两份独立的申请**。传阅与提交在 s.258 与 s.259 下是两个独立的
法定时钟，展延其中一个并不会展延另一个。这个区别在多数指引中是隐形的，而它就内建在
呈报系统里。

## 映射：没人教的那一部分

SSM 自己的定义简单得有点骗人——编制者「以财务报表中相符的资讯对应到分类标准中的相关
概念来完成映射」。实务上，映射才是判断力所在，也是第二年那些问题被制造出来的地方。

**你不能扩充分类标准。**架构文件毫不含糊：不允许对 SSMxT_2022v1.0 作公司自订扩充，
且实体在建立实例文件时不得扩充分类标准。当你需要分类标准并未建模的细节时——一份分部
明细、一类不寻常的其他收入——指示是把它以**文字区块标记**放进一个适当的文字区块概念。

这与 XBRL 在多数上市公司制度中的运作方式正好相反，在那些制度里，扩充元素是家常便饭。
从那个世界来的编制者伸手去找自订标记，找不到，然后断定工具坏了。

**完整一套的范围是固定的。**以完整 XBRL 呈报时，最低限度的报表是财务状况表、损益表、
现金流量表、权益变动表，以及附注。分类标准为其中三份提供了替代呈报方式，而你必须选
一个并一直用下去：

- 财务状况表——流动／非流动，**或**按流动性排序
- 损益表——费用功能法，**或**费用性质法
- 现金流量表——直接法，**或**间接法

年度之间切换是合法的，但看得见，而且它会产出在数据上对不齐的比较数字，尽管账目读起来
一切正常。

**币别与舍入不是风格问题。**货币金额必须以马币表示，单位计量为 `iso4217:MYR`。这不
只是一条分类标准规则——Companies Act 2016 s.259(1)(c) 要求向注册官提交的财务报表与
报告中所有金额均以马来西亚货币列示，并要求在文件并非以国文或英文书写时附上核证译本。

舍入是由 `decimals` 属性处理的，不是把数字四舍五入。SSM 的示范例子：一套以千为单位
列示的账目中显示为 53,928 的资产，应标记为 **53928000，且 decimals 设为 -3**。打成
53928 的编制者，把资产少报了三个数量级，而且没有任何验证规则会抓到它，因为 53,928
是一个完全有效的数字。

## 验证：五族规则，不是拼写检查

mTool 的验证是由分类标准的 formula linkbase 驱动的。SSM 把规则建模为断言，其中「真」
表示通过。搞懂这几族，就知道你面对的是哪一类错误。

**强制元素。**某些概念必须存在。每一个都有各自的断言，正是为了让失败讯息能点出缺少
的那个元素。SSM 文档中的例子：「Assets」应予报告。

**衍生强制元素。**只在特定情况下才必要，以前置条件建模。SSM 的例子：当呈报人把公司
状态选为「Public company」时，财务报表审计状态的披露必须是「Audited」。在模板顶端把
呈报资料填错，你就会触发一堆你没料到的下游要求。

**维度汇总。**某一轴上的成员必须加总成其父项。权益总额等于非控股权益加其他权益组成
部分加归属于母公司拥有者的权益。这里正是一套跨好几张试算表拼出来、从未交叉合计过的
账目终于被逮到的地方。

**正值与负值。**SSM 的立场比「费用是负数」要细致得多。**没有任何元素是必须永远以负值
储存的**——像费用这类带负权重的项目，在多数情况下是以正数储存的。formula linkbase 强制
执行的，反而是一份必须永远为**正值**的元素清单。

**跨报表与相关数据。**出现在一份以上报表中的数值必须一致，逻辑上相关联的数值会被
互相核对。

在这五族之上再加上结构性验证——XBRL 格式良好性、维度验证、可扩充枚举、表格与公式
验证——它们对照 SSMxT_2022v1.0 本身检查该实例文件。

## maker、lodger 与批准这一步

mPortal 是按角色划分的，而这些角色不可互换。

**maker** 编制实例文件并上传。maker 不需要数码签名。

**lodger** 批准并呈交。lodger 必须持有 Companies Act 2016 s.241 下、通过 e-Secretary
注册的执业证书，以及一份有效的数码证书。批准是通过 Administrator → Approval
Management → Filing Approval 完成的，该仪表板会显示由 maker 上传、等待 lodger 批准的
呈报。

maker 与 lodger 之间的关联是在 mPortal 中管理的，而它可以被设为不活跃。一种常见且
完全不透明的故障，是 maker 上传的档案从未出现在 lodger 的队列里，因为那个关联被停用
了而没有恢复。一名 maker 可以与多名 lodger 关联。

董事在这套系统里不是一个角色。这与规范展期申请的是同一个结构性要点——SSM 要求展期
申请须由公司秘书提出。如果你的秘书的执业证书已失效，你就没有呈报管道——而你会在打算
用它的那一天才知道。

## 退件循环

有三件不同的事都被叫做「退件」，而它们的行为并不相同。

**mTool 验证失败。**档案根本产生不出来。你仍在离线状态，什么都还没呈交，也没有任何
时钟受到影响。这是好结局。

**mPortal 质询。**呈报被收下进入审核，然后被质询退回。maker 在仪表板上看到质询状态，
更正，重新呈交。法定期限完全不受这一切影响——s.258 的传阅与 s.259 的提交按它们自己的
日期走，而 Practice Directive 1/2017 的罚金是从原本的到期日起算，不是从你的档案终于
通过的那一天起算。

**提交后更正。**呈报一旦入档，你不是重新呈交它——你是依 Companies Act 2016 s.602 去
更正它。mPortal 2.0 提供三种：

- **标准更正**——更正已呈交的 AR 或 FS 中的数据，不论是经由 MBRS 还是柜台呈交的
- **呈报资料更正**——更正呈报表头本身，例如财政年结被提交为 30/12/23 而非 31/12/23，或某份呈交被提交为 AR4 而其实该是 AR1
- **空档呈报（Nil filing）**——在不上传任何替代 AR 或 FS 的情况下更正一笔记录，用于重复呈交，或用于没有替代文件的法庭命令

另有一条供已解散状态公司使用的**法庭命令呈报**路径。

在 MBRS 1.0 下，更正意味着在重新呈报之前先去柜台申请。MBRS 2.0 把整个流程搬进了门户。
那是一项实在的改进，而这也正是 mTool 里为何会有更正入口点的原因。

## 一套可行的顺序

1. **打开工具之前先把日期钉死。**财政年结、传阅日期、提交期限。s.259(1)(a) 下的提交
   时钟是从传阅开始走的，不是从年结。
2. **在 SSM 的 MBRS 页面上确认 mTool 版本与分类标准版本。**SSM 更新这些时并不会另行
   公告。
3. **审慎选择入口点**——公司类型、Act、会计准则。若你需要 KFI 或 FS-FC，那份 EA2 或
   EA3 批准必须已经到手。
4. **在标记之前先交叉合计账目。**过去 PDF 能藏起来的每一处内部不一致，如今都是一个
   会挡住你的验证失败。
5. **映射一次，并把映射记录下来。**你今年所作的判断，明年应当重复，否则即使账目上
   一致，你的比较数字在数据里也不会可比。
6. **非财务报表也要标记**——董事报告、董事声明、审计师报告。这些是概念，不是附件。
7. **在 mTool 内验证与修正。**mPortal 不是验证服务。
8. **在期限那一周之前——而不是在那一周之中——检查 lodger 的执业证书与数码证书。**
9. **上传、送交 lodger 批准、付款、保留确认回执。**合规的凭证是那封确认回执，不是那个
   zip 档。
10. **如果档案赶不出来，在期限届满之前申请展期**——传阅用 EA5A，提交用 EA5B，常年
    申报表用 EA7。

## 常见错误

- **打进已舍入的数字，而不使用 `decimals` 属性。**一套以千为单位列示的账目中的 53,928，
  是 53928000 加 decimals -3。打成 53928 会通过每一条验证规则，而且错了一千倍。
- **试图自建元素。**不允许对 SSMxT_2022v1.0 作公司自订扩充。请用文字区块。
- **未取得 EA2 批准就呈报 KFI**，或未取得 EA3 宽免就呈报 FS-FC。两者都必须先获批
  豁免。
- **以为一次展期涵盖两个时钟。**EA5A 展延传阅，EA5B 展延提交，而 s.258 与 s.259 是
  接力的。
- **把 mTool 1.0 的 zip 上传到 mPortal 2.0。**请在当前工具中打开并重新产生。
- **使用旧的公司注册编号格式。**新格式在 MBRS 2.0 中是强制的，只有预填常年申报表数据
  例外。
- **maker–lodger 关联被停用**，导致上传的呈报永远到不了 lodger 的批准队列，而没有人
  察觉，直到期限到来。
- **把质询当成时钟停了。**它没有。罚金从法定日期起算。
- **年度之间更改呈报基础**——这一年按流动性排序，下一年按流动／非流动——产出在数据上
  对不齐的比较数字。
- **让董事报告以草稿散文的形态不加标记。**它对应到 24 个界定好的概念与 Fifth Schedule
  的各个标题；从一开始就那样草拟，可以消除一整类返工。

## 下一步

在你下一个年结之前，做一件事：把映射写下来。你试算表中的每一个科目、它被标记到的那个
SSMxT 概念，以及在选择并非显而易见时的理由。那份文件比 XBRL 档案本身更值钱，因为档案
是可弃的，而映射才是你一旦不保存、每年就要从头重建的东西。

然后读[标记错误](/zh/accounting/mbrs-tagging-errors)那一页，它会把上面那几族失败拿来，
逐一说明它们在一套真实账目里究竟长什么样。
