---
topicId: MY-ACC-0002
title: "编制 MBRS 2.0 报送文件：mTool、SSMxT 分类标准与退回循环"
seoTitle: "MBRS 2.0 报送指南：mTool 与 SSMxT 标签"
slug: "mbrs-2-filing-guide"
category: "accounting"
subcategory: ["financial-statements"]
summary: "从头到尾讲清编制 SSM XBRL 报送文件的机制——选择进入点、将账目映射到 SSMxT 概念、通过 mTool 校验，以及让被质询的报送文件重新经由 mPortal 通过。"

tier: "1"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "MBRS 2.0 报送文件在 mTool（SSM 基于 Excel 的编制工具）中离线编制，并通过 mPortal 在线呈报。你需从 31 个进入点中选择其一，将财务报表中的每个数字映射到 SSM 分类标准（SSMxT_2022v1.0）中的一个概念，通过工具内置的分类校验规则，再生成 XBRL 实例文件。制作者（maker）上传该文件；只有持有有效执业证书的呈报者（lodger）才能提交。"
keyTakeaways:
  - "mTool 2.2 是当前的编制工具；其内置的分类标准为 SSMxT_2022v1.0，以 IFRS 分类标准 2022 为基础"
  - "共有 31 个进入点，涵盖年报、财务报表、关键财务指标、更正及豁免申请——选错就意味着重建文件"
  - "不允许公司自行扩展：若分类标准中没有对应你的行项目的元素，你要把它标签进一个文本块（text block），而不是自造概念"
  - "金额必须以马来西亚令吉表示——《2016年公司法》第259(1)(c)条要求如此，分类标准强制执行 iso4217:MYR"
  - "校验以规则驱动，并非表面功夫：强制元素、派生强制元素、维度汇总、正负号规则和跨报表一致性在文件生成前都会运行"
  - "制作者编制并上传，呈报者审批并提交——董事在这两个环节中都没有角色"
  - "被质询的报送文件会退回给制作者；你修改期间，法定期限不会暂停"
appliesTo: "必须亲自制作 XBRL 文件本身、而不仅是知道需要提交此类文件的会计师、公司秘书和财务人员。"

faq:
  - q: "我应该使用哪个版本的 mTool 和哪套分类标准？"
    a: "mTool 2.2 是 SSM 的 MBRS 页面上的当前版本，其内置的分类标准为 SSMxT_2022v1.0，以 IFRS 会计分类标准 2022 为基础。SSM 另有一份说明列出 mTool 2.1 与 2.2 之间的差异。在 mTool 1.0 中生成的 zip 文件无法上传到 mPortal 2.0——必须在当前工具中打开并重新生成。"
  - q: "什么是进入点，我该如何选对？"
    a: "进入点是某一类呈报所对应的特定分类标准架构（schema）。MBRS 2.0 共有 31 个：五种年报类型；按会计准则和公司类型划分的财务报表类型（FS-MFRS、FS-MPERS、FS-CLBG、FS-EPC、FS-FC、FS-BNM，另加《1965年公司法》的对应类型）；四种关键财务指标类型；更正；以及八种豁免申请。正确的那一个由你的公司类型、你据以呈报的法令，以及你所采用的会计准则共同决定。"
  - q: "如果分类标准中没有对应某个行项目的元素，我可以自建标签吗？"
    a: "不可以。SSMxT 架构文件明确指出，不允许对 SSMxT_2022v1.0 进行公司扩展。当分类标准中没有匹配的概念时，编制者应把相关细节标签进一个适当的文本块（text block）元素。这是 SSM 报送与其他地方自愿性 XBRL 报告之间最大的区别。"
  - q: "谁才能真正提交文件——制作者还是呈报者？"
    a: "制作者编制实例文件并在 mPortal 中上传，但提交是呈报者的行为。呈报者必须持有通过 e-Secretary 登记的有效执业证书，以及有效的数字证书。若执业证书已过期，无论 XBRL 文件做得多好，报送文件就是发不出去。"
  - q: "我可以提交关键财务指标（KFI）而不是完整的一套财务报表吗？"
    a: "只有在事先获批的情况下才可以。公司必须先根据进入点 EA2、依据《2016年公司法》第604(2)条，申请豁免以完整 XBRL 格式提交财务报表和报告。SSM 批准后，公司方可使用 KFI 进入点。未获该批准而提交 KFI 是不允许的。"
  - q: "如果 SSM 质询我的报送文件，期限会停吗？"
    a: "不会。质询会将报送文件退回给制作者更正并重新提交，但这一切都不会暂停第258条的传阅时钟或第259条的呈报时钟。如果更正后的文件在法定日期之后才送达，则《执业指令 1/2017》下的逾期呈报罚款将从原到期日起计算。"

verificationNeeded: []

lang: "zh"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "7d7049034803d339"

status: "published"
aiAssisted: true
reviewer: null
publishedBy: "ashton-tan"
reviewed: "2026-08-14"
reviewDue: 2027-07-22
version: "01.00"
revisions:
  - version: "01.00"
    date: 2026-08-14
    change: "Approved and published."
    reviewer: null

updated: 2026-08-14
sources:
  - title: "Malaysian Business Reporting System (MBRS) — Frequently Asked Questions, Version 2.8"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/FAQ_MBRS_ISSB.pdf"
    publisher: "SSM"
    date: "2025-05-01"
  - title: "Table of Fees — Registration of Company (ROC)"
    url: "https://www.ssm.com.my/Pages/Services/Registration-of-Company-(ROC)/Table-of-Fees.aspx"
    publisher: "SSM"
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

搜索「MBRS 2.0」得到的结果，几乎全是有人在向你兜售一种「不必自己动手」的办法。转换供应商、外包标签服务，还有四大会计师事务所那些以「联系我们」收尾的就绪度招揽。没有人公开讲清楚，在一套已签署的账目和 SSM 的一份确认回执之间，究竟发生了什么。

发生的事情是这样的。你安装一个 Microsoft Excel 加载项，从三十一个进入点中选一个，再把财务报表中的每个数字映射到一套你无权扩展、包含约 6,000 个元素的分类标准中的某个概念。然后，除非每个强制元素都齐全、每个小计都能对上、每个正负号约定都正确，否则该工具拒绝生成文件。最后，一位持有执业证书的人按下提交。

本页讲的是机制。**提交义务**——谁提交、何时提交、罚则是什么——在配套页面 [MBRS 2.0 与报送义务](/zh/company-secretary/mbrs-2) 中。

## 你实际在构建的是什么

一份 MBRS 报送文件就是一份 XBRL 实例文件：一个结构化文件，其中每个数字都带有机器可读的身份标识。这个身份来自 **SSM 分类标准**，当前版本为 **SSMxT_2022v1.0**。

SSMxT 并非 SSM 从零发明。它以 **IFRS 会计分类标准 2022** 为基础——6,458 个 IFRS 元素——再在其上叠加马来西亚本地特有的概念，用于承载 IFRS 没有理由包含的《公司法》披露事项。《2016年公司法》的财务报表分类标准在 MFRS 下达 **6,197 个概念**，在 MPERS 下达 **2,375 个概念**。

非财务部分比多数编制者预想的更小、也更具规范性：

| 披露 | 概念数（CA 2016） |
| --- | --- |
| 董事报告 | 24 |
| 董事声明 | 29 |
| 董事业务回顾 | 11 |
| 致成员的审计师报告 | 22 |
| 涉及证券交易所的情况 | 11 |

这些数字很重要。董事报告不是以扫描版 PDF 呈报的。它要逐项对照 24 个已定义的概念进行标签——这也是为什么一份以自由散文撰写、从未映射到第五附表（Fifth Schedule）标题的董事报告，会变成一个标签问题，而非撰写问题。

## 两个工具，以及在它们之间传递的那个文件

**mTool** 是编制工具。它是一个 Microsoft Excel 加载项，仅限 Windows——它不能在 macOS 上运行，也不能在 Open Office 上运行。当前版本是 **mTool 2.2**，SSM 另发布了一份说明，列出它与 mTool 2.1 的差异。它内置一个 SSMxT 浏览器，可离线工作，运行校验规则，并把 XBRL 文件输出为一个 zip。

**mPortal** 是提交平台。你登录、上传 zip、送审批、付款，并接收确认回执。

这里有一个会耗掉整个下午的陷阱：**在 mTool 1.0 中生成的 zip 无法上传到 mPortal 2.0。** SSM 自己的指引允许你在当前工具中打开一个 mTool 1.0 的 zip 并重新生成，但那个旧文件本身已经作废。如果你要重新提交某份 2023 年编制的文件，做好重建的准备。

与之相关的陷阱是公司编号。**MBRS 2.0 中强制使用新的公司注册编号格式。** 旧格式仅用于预填年报数据。

## 选择进入点

进入点是某一种特定呈报所对应的分类标准架构。MBRS 2.0 共有 31 个。选错不是格式错误——它是一个不同的架构、不同的强制元素，以及一次重建。

**年报**

| 进入点 | 用途 |
| --- | --- |
| AR1 | 有股本的公司，第68条 |
| AR2 | 无股本的公司，第68条 |
| AR3 | 外国公司，第576条 |
| AR4 | 特征不变，第68(6)条 |
| AR1965 | 依据《1965年公司法》的年报 |

**财务报表及报告**

FS-MFRS 与 FS-MPERS 按所采用的会计准则划分。FS-CLBG 用于担保有限公司，FS-EPC 用于豁免私人公司，FS-FC 用于外国公司，FS-BNM 用于受马来西亚国家银行（Bank Negara Malaysia）监管的公司。每一种都有对应的《1965年公司法》版本。

**关键财务指标**

KFI-MFRS、KFI-MPERS、KFI-CLBG 和 KFI-FC 适用于不以 XBRL 提交完整一套报表的公司。你不能径自选择这一项。公司必须先获得 **EA2——申请豁免以完整 XBRL 格式提交财务报表和报告** 的批准，该申请依据《2016年公司法》第604(2)条提出。FS-FC 也是同样的模式，它只有在依据第575(7)条获得 EA3 豁免之后才可使用。

**豁免申请** 自成一族，其法定依据值得了解，因为它们正是申请实际所依据的条文：

| 进入点 | 申请 | 条文 |
| --- | --- | --- |
| EA1 | 外国子公司财政年度截止日与控股公司不一致 | 第247(3)条 |
| EA2 | 豁免以完整 XBRL 格式提交 | 第604(2)条 |
| EA3 | 免除外国公司呈报财务报表 | 第575(7)条 |
| EA4A | 就董事报告的形式与内容给予宽免 | 第255(1)条 |
| EA4B | 就财务报表的形式与内容给予宽免 | 第255(1)条 |
| EA5A | 延长财务报表传阅时间 | 第259(2)条 |
| EA5B | 延长呈报财务报表的时间 | 第259(2)条 |
| EA6 | 延长召开股东周年大会（AGM）的时间 | 第340(4)条 |
| EA7 | 延长呈报年报的时间 | 第609(2)条 |
| EA8 | 向部长提出的申请 | 第247(8)条 |

请注意，EA5A 和 EA5B 是**各自独立的申请**。传阅与呈报是第258条和第259条下各自独立的法定时钟，延长其中一个并不延长另一个。这一区别在大多数指引中都看不到，但它内建于报送系统之中。

## 映射：没人教的那一环

SSM 自己的定义看似简单——编制者「通过将财务报表内的匹配信息与分类标准内的相关概念对应起来来完成映射」。实际上，映射正是判断力所在之处，也是第二年问题的根源所在。

**你不能扩展分类标准。** 架构文件毫不含糊：不允许对 SSMxT_2022v1.0 进行公司扩展，在创建实例文件时实体不得扩展分类标准。当你需要披露分类标准未建模的细节——某个分部拆分、某类不寻常的其他收入——指示是通过**文本块标签（text-block tagging）**把它标签进一个适当的文本块概念。

这与 XBRL 在大多数上市公司体制下的运作方式恰好相反，在那些体制里扩展元素是家常便饭。来自那个世界的编制者伸手去建自定义标签，却建不出来，于是断定工具坏了。

**完整一套报表的范围是固定的。** 对于以完整 XBRL 提交的报送文件，最少包括财务状况表、损益表、现金流量表、权益变动表和附注。分类标准为其中三张表提供了可选的呈列方式，你必须选定一种并一直沿用：

- 财务状况表——流动/非流动，**或**流动性顺序
- 损益表——按费用功能，**或**按费用性质
- 现金流量表——直接法，**或**间接法

年度之间切换是合法的，但会显现出来，并会产生在数据上对不齐的比较数字，即便账目读起来正常。

**货币与舍入不是风格问题。** 货币金额必须以马来西亚令吉表示，单位计量为 `iso4217:MYR`。这不仅是一条分类标准规则——《2016年公司法》第259(1)(c)条要求呈报的财务报表和报告中的所有金额均须以马来西亚货币列示，并要求在文件非以马来文或英文书写时附上经核证的译本。

舍入由 `decimals` 属性处理，而非把数字本身舍入。SSM 的实例：一套以千为单位列示的账目中，显示为 53,928 的资产会被标签为 **53928000，且 decimals 设为 -3**。键入 53928 的编制者把资产少算了三个数量级，而且没有任何校验规则会捕捉到，因为 53,928 是一个完全有效的数字。

## 校验：五个规则族，而非拼写检查

mTool 的校验由分类标准的公式链接库（formula linkbase）驱动。SSM 将规则建模为断言（assertion），其中「真」代表通过。理解这些族别，能告诉你正在面对哪一类错误。

**强制元素。** 某些概念必须存在。每一个都有一条单独的断言，正是为了让失败信息能点名指出缺失的元素。SSM 文档中的例子：「Assets（资产）」应予报告。

**派生强制元素。** 仅在特定情形下才要求，用一个前提条件（precondition）建模。SSM 的例子：当申报者将公司状态选为「公众公司（Public company）」时，财务报表审计状态的披露必须为「已审计（Audited）」。在模板顶部把申报信息填错，就会触发你意料之外的下游要求。

**维度汇总。** 一个坐标轴（axis）的各成员必须能加总为其父级。权益总额等于非控股权益，加其他权益组成部分，加归属于母公司拥有者的权益。一套跨若干张电子表格拼凑、从未做过交叉合计的账目，就在这里终于被逮住。

**正值与负值。** SSM 的立场比「费用是负数」更为细致。**不存在必须始终以负数存储的元素**——诸如费用之类负向加权的项目，在多数情况下都以正数存储。公式链接库转而强制执行一份必须始终为**正**的元素清单。

**跨报表与相关联数据。** 出现在不止一张报表中的数值必须一致，逻辑上相关联的数值也会彼此核对。

在这些之上，还要加上结构性校验——XBRL 良构性、维度校验、可扩展枚举、表格与公式校验——它们把实例文件对照 SSMxT_2022v1.0 本身进行核查。

## 制作者、呈报者与审批环节

mPortal 是基于角色的，而这些角色不可互换。

**制作者** 编制实例文件并上传。制作者不需要数字签名。

**呈报者** 审批并提交。呈报者必须持有《2016年公司法》第241条下的执业证书，通过 e-Secretary 登记，并持有有效的数字证书。审批通过 Administrator → Approval Management → Filing Approval 完成，那里的仪表盘会显示由制作者上传、正等待呈报者审批的报送文件。

制作者与呈报者之间的关联在 mPortal 中管理，并且可以被设为非活动状态。一种常见且完全不透明的故障是：制作者上传的文件从未出现在呈报者的队列中，因为关联被停用后未再恢复。一个制作者可以与多个呈报者关联。

董事在这个系统里不是一个角色。这与规范延期申请的结构性要点相同——SSM 要求延期申请由公司秘书提出。如果你的秘书的执业证书已失效，你就没有呈报渠道——而你会在打算使用它的那一天才发现这一点。

## 退回循环

有三种不同的东西都被称作「退回（rejection）」，它们的表现各不相同。

**mTool 校验失败。** 文件将不会生成。你仍处于离线状态，什么都还没提交，也没有任何时钟受到影响。这是好的结果。

**mPortal 质询（query）。** 报送文件被接收以供审查，随后被质询退回。制作者在仪表盘上看到质询状态，更正后重新提交。法定期限完全不受这一切影响——第258条传阅和第259条呈报按各自的日期运行，《执业指令 1/2017》的罚款从原到期日起累计，而非从你的文件最终通过之日起。

**呈报后更正（rectification）。** 一旦某份报送文件已在记录之中，你不再重新提交它——而是依据《2016年公司法》第602条对其进行更正。mPortal 2.0 带有三种形式：

- **标准更正**——更正一份已提交（无论通过 MBRS 还是柜台）的 AR 或 FS 中的数据
- **申报信息更正**——更正报送文件的表头本身，例如财政年度截止日被呈报为 30/12/23 而非 31/12/23，或某份呈报被报为 AR4 而实际应为 AR1
- **零申报（Nil filing）**——更正一条记录而不上传任何替代的 AR 或 FS，用于重复提交，或无替代文件的法院命令

此外还有一条**法院命令申报**路径，供已解散（dissolved）状态的公司使用。

在 MBRS 1.0 下，更正意味着在重新申报前先做一次柜台申请。MBRS 2.0 把整个流程搬进了门户。这是一项真正的改进，也正是 mTool 中之所以存在这些更正进入点的原因。

## 一套可行的顺序

1. **在打开工具之前先定好日期。** 财政年度截止日、传阅日期、呈报期限。第259(1)(a)条下的呈报时钟从传阅开始起算，而非从年度截止日起算。
2. **在 SSM 的 MBRS 页面上确认 mTool 版本与分类标准版本。** SSM 更新这些内容时不会另发公告。
3. **审慎地选择进入点**——公司类型、法令、会计准则。如果你需要 KFI 或 FS-FC，EA2 或 EA3 的批准必须已经存在。
4. **在标签之前先交叉合计账目。** 从前 PDF 能藏起来的每一处内部不一致，如今都是一次阻断性的校验失败。
5. **映射一次并记录下来。** 你今年做出的判断，明年应当照样重复，否则你的比较数字在数据上就不会可比，即便它们在账目上可比。
6. **非财务报表也要标签**——董事报告、董事声明、审计师报告。这些是概念，不是附件。
7. **在 mTool 内部校验并修正。** mPortal 不是一个校验服务。
8. **在期限那一周之前、而非当周，检查呈报者的执业证书和数字证书。**
9. **上传、送呈报者审批、付款、保存好确认回执。** 确认回执才是合规的证据，而非那个 zip 文件。
10. **如果文件将无法按期就绪，在期限届满之前申请延期**——EA5A 用于传阅，EA5B 用于呈报，EA7 用于年报。

## 常见错误

- **键入已舍入的数字，而非使用 `decimals` 属性。** 一套以千为单位列示的账目中的 53,928 是 53928000，decimals 为 -3。键入 53928 会通过每一条校验规则，却错了一千倍。
- **试图创建自定义元素。** 不允许对 SSMxT_2022v1.0 进行公司扩展。用一个文本块。
- **未获 EA2 批准就提交 KFI**，或未获 EA3 豁免就提交 FS-FC。两者都要求先取得已获批的豁免。
- **假设一次延期能覆盖两个时钟。** EA5A 延长传阅，EA5B 延长呈报，且第258条与第259条是先后相继的。
- **把 mTool 1.0 的 zip 上传到 mPortal 2.0。** 在当前工具中打开它并重新生成。
- **使用旧的公司注册编号格式。** 除用于预填年报数据外，MBRS 2.0 中强制使用新格式。
- **停用的制作者—呈报者关联**，导致上传的报送文件从不进入呈报者的审批队列，直到期限临近才有人察觉。
- **把质询当作停摆的时钟。** 它不是。罚款从法定日期起计。
- **年度之间更改呈列基础**——一年按流动性顺序，下一年按流动/非流动——从而产生在数据上无法对齐的比较数字。
- **让董事报告以草稿散文的形式留着不标签。** 它映射到 24 个已定义的概念和第五附表的标题；从一开始就照那样撰写，能消除一整类返工。

## 接下来

在下一个年度截止日之前，做一件事：把映射写下来。你试算表中的每一个账目、它被标签到的 SSMxT 概念，以及在选择并不显而易见之处的理由。那份文档比 XBRL 文件本身更有价值，因为文件是可弃的，而映射才是——如果你不留存它——每年都要从头重建的东西。

然后阅读 [标签错误](/zh/accounting/mbrs-tagging-errors) 页面，它把上文的失败族别拿来，逐一讲清每一种在一套真实账目中究竟是什么样子。
