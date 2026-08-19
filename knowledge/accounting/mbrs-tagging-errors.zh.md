---
topicId: MY-ACC-0003
title: "SSMxT 标记错误：MBRS 呈报为何通不过验证"
seoTitle: "MBRS 标记错误：SSMxT 验证失败"
slug: "mbrs-tagging-errors"
category: "accounting"
subcategory: ["financial-statements"]
summary: "那些让 MBRS 呈报产不出档案、或被质询退回的标记错误——选错元素、量级与正负号错误、区块标记与明细标记之争，以及在分类标准里无处安放的附注。"

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "多数 MBRS 验证失败落在五族之中：缺少强制元素、因呈报资料的某个选择而触发的衍生强制元素、加总不成其父项的维度汇总、违反正负号规则，或跨报表不一致。而验证抓不到的那些错误更糟——选错元素与量级错误，两者都会产出技术上有效、却载着错误数字的档案。"
keyTakeaways:
  - "量级错误才是危险的那一个：以千为单位输入的数字会通过每一条验证规则，并把账目错报一千倍"
  - "没有任何 SSMxT 元素是必须永远为负的——费用通常以正数储存"
  - "验证跑的是断言，其中「真」表示通过，因此讯息点出的是规则，不是解法"
  - "禁止公司自订扩充，因此无法映射的附注要放进文字区块，绝不放进自创的概念"
  - "模板顶端的呈报资料会驱动下方的衍生强制规则——公司状态填错会一路连锁"
  - "呈报基础是一个只做一次的选择：按流动性排序对比流动／非流动，费用功能法对比费用性质法"
appliesTo: "在 mTool 中产出 SSM XBRL 实例文件的编制者，以及在 lodger 呈交之前签核呈报的复核者。"

faq:
  - q: "我的账目里没有那一行，为什么 mTool 说那个元素是强制的？"
    a: "SSMxT 把强制元素建模为存在性断言，每一个概念各有一个断言，好让失败讯息能点出它。有些是无条件强制的——SSM 自己的例子是 Assets 必须予以报告。另一些是衍生强制的，只因为你在别处所作的某个选择而成为必要。若那一行在你的账目里确实不存在，先查一查是不是某个呈报资料的选择触发了该要求，再去认定工具错了。"
  - q: "费用应该标记成负数吗？"
    a: "通常不该。SSMxT 架构文件说明，没有任何元素应当永远以负值储存，因为像费用这类带负权重的元素在多数情况下是以正数储存的。formula linkbase 真正强制执行的，是一份必须永远为正的元素清单。因此，SSMxT 呈报中的正负号错误，更常见的是多加了减号，而不是少加了减号。"
  - q: "分类标准里没有对应概念的附注，我要怎么标记？"
    a: "放进文字区块。不允许对 SSMxT_2022v1.0 作公司自订扩充，所以你无法建立元素。SSM 明示的做法是：编制者以适当的文字区块概念对该资讯作文字区块标记，以提供所需的细节层次。资讯照样有提交，只是不再逐项机器可读。"
  - q: "区块标记与明细标记有什么分别？"
    a: "明细标记为每一个数字指派它自己的概念，因此该数字可被逐项机器读取，并受验证规则约束。区块标记则把整则附注作为一个文字区块对应到一个概念。凡分类标准已为该概念建模之处，就必须用明细标记；区块标记是分类标准未承载的细节的退路。把分类标准已建模的东西区块化，即使不导致验证失败，也是一项品质缺失。"
  - q: "验证错误是不是表示 SSM 已经拒绝了我的呈报？"
    a: "不是。mTool 的验证是在任何东西被呈交之前离线发生的，档案只是产不出来而已。拒绝或质询是上传之后在 mPortal 里发生的另一件事。两者都不会让 s.258 的传阅期限或 s.259 的提交期限暂停。"

verificationNeeded:
  - "SSM 并未公布一份整合的 MBRS 退件原因代码清单——这里的错误分族是从 SSMxT_2022 架构文件的 formula linkbase 类别推导出来的，不是取自已公布的退件登记册"
  - "在依赖任何以概括方式描述的规则之前，请对照该入口点的 mTool 2.2 使用手册确认该入口点的验证行为"

lang: "zh"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "4cbf1a047bbd3c22"

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
  - title: "MBRS 2.0 SSM Taxonomy 2022 (SSMxT_2022) Architecture Document"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf"
    publisher: "SSM"
  - title: "Malaysian Business Reporting System (MBRS) — Frequently Asked Questions, version 2.4"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/FAQs_Malaysian_Business_Reporting_System_MBRS.pdf"
    publisher: "SSM"
    date: "2024-10-01"
  - title: "MBRS Enhancement MBRS 2.0 — Overview"
    url: "https://www.ssm.com.my/Pages/Publication/PDF%20Files/AD%202024%20-%20Overview%20of%20MBRS%20v2.pdf"
    publisher: "SSM"
  - title: "Companies Act 2016 (Act 777), updated text as at 1 August 2022"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "SSM"
  - title: "MBRS — Malaysian Business Reporting System"
    url: "https://www.ssm.com.my/Pages/Services/Other-Services/MBRS.aspx"
    publisher: "SSM"

entity: "SSMxT tagging errors"
relations:
  - { rel: "administered-by", to: "ssm" }
  - { rel: "part-of", to: "mbrs-2-filing-guide" }
  - { rel: "related-to", to: "mbrs-2" }
  - { rel: "related-to", to: "financial-statement-pack" }
  - { rel: "related-to", to: "sdn-bhd-bookkeeping" }
related: ["mbrs-2-filing-guide", "mbrs-2", "financial-statement-pack", "sdn-bhd-bookkeeping", "mfrs-vs-mpers"]
keywords: ["MBRS tagging error", "SSMxT validation", "XBRL validation failure Malaysia", "mTool error", "MBRS rejected", "block tagging text block SSM", "MBRS decimals scale"]
---

真正花钱的那个失败，不是让档案产不出来的那个。而是那个干干净净地产生、干干净净地
提交、却载着一个错了一千倍的数字的那个。

SSMxT 的验证擅长算术，对意义则是瞎的。它会拒绝一份合不上的权益变动表。它却会欣然
接受一家资产负债表上有 RM53.9 million 的公司报出 RM53,928 的总资产，因为 53,928 是
一个完全有效的数字。

底下每一族错误，都该照这道不对称来读：工具抓得到的那些只是麻烦，而它抓不到的那些，
才是你该盯着复核的。

## 验证看不见的那两种错误

### 量级

SSMxT 是通过 XBRL 的 `decimals` 属性处理舍入的，不是把数值本身四舍五入。SSM 自己的
示范例子：一家账目以千为单位列示、资产读数为 53,928 的公司，应把该事实标记为
**53928000，且 `decimals` 设为 -3**。

一名直接从账目表面抄下印刷数字的编制者会标记 53928。没有任何规则会触发。该实例文件
是有效的 XBRL。而提交上去的账目所显示的，是一家只有其实际规模千分之一的公司——机器
可读、永久留存，并对任何调取数据的人可见。

凡是从以千或以百万为单位列示的账目所编制的呈报，都需要把量级检查当成一个独立的复核
步骤，与验证分开。

### 元素选择

分类标准载有数以千计的概念，其中好几个对任何一个给定的余额来说都看似说得通。mTool
里没有任何东西会告诉你：你挑的是那个「说得通的」，而不是那个「对的」。

有两项后果。第一，被标记的账目不再与读 PDF 的人所理解的东西相符。第二——而这是第二年
才咬人的那一个——映射决定是一个**先例**。明年把同一个余额标记成别的，你的比较数字就在
数据里分岔了，尽管印出来的账目前后一致。

把映射记录下来。不是那个档案，是那个映射：科目、概念，以及在选择属于判断时的理由。

## 五族验证失败

SSM 把规则建进分类标准的 formula linkbase，使用存在性断言与数值断言，其建模方式使得
**「真」表示该规则通过**。

**强制元素。**必须存在的概念，每个概念一个断言，好让失败讯息能点出缺少的那一个。
SSM 文档中的例子：「Assets」应予报告。

**衍生强制元素。**只在特定条件下才必要，以前置条件加数值断言建模。SSM 的例子既准确
又值得背下来：*当呈报人把公司状态选为「Public company」时，财务报表审计状态的披露
应为「Audited」。*

这一族制造出最多一头雾水的求助，因为错误浮现在财务报表里，而它的成因却是呈报资料
区块里的一个下拉选单。在跟一个衍生强制错误争论之前，先把表头重读一遍。

**维度汇总。**当编制者把某一轴上的成员组织成类似加总的层级时，这些成员必须加总成其
父项。SSM 的例子：权益总额等于非控股权益加其他权益组成部分加归属于母公司拥有者的
权益。

**正值与负值。**在这里，多数编制者带来的直觉是错的。架构文件明白写着*没有任何元素
应当永远以负值储存*，因为像销售成本这类带负权重的项目，在多数情况下是以正数储存的。
formula linkbase 实际承载的，是一份必须**永远为正**的元素清单——SSM 的例子是，以马币
计的负债总额应为正值。

所以，SSMxT 呈报中常见的正负号错误不是漏了一个减号。而是编制者热心地多加了一个。

## 区块标记与明细标记

明细标记给一个数字它自己的概念：逐项机器可读、逐项受验证、逐项可跨年比较。区块标记
则把整则附注作为文字，对应到单一一个文字区块概念。

决定该用哪一个的规则不是偏好问题。**不允许对 SSMxT_2022v1.0 作公司自订扩充。**凡
分类标准载有概念之处，你就标记到它。凡会计准则要求的细节是分类标准未建模的——SSM 自己
举的实体特定细节例子是分部明细——指示就是以文字区块标记放进适当的文字区块概念来提供。

失败模式是过度区块化：一名赶期限的编制者，把一整则分类标准逐一概念建模过的附注给
区块掉了。它产得出档案，也提交得出去，然后把这份呈报掏空。SSM 建起来的那条数据管道，
对一则存成一段文字的附注毫无用处。

若实例文件是以 iXBRL 编制的，未加标记的人类可读内容可以与已标记的事实并存于文件中。
那减轻了把一切硬塞进标记的压力，但它并不给你把该明细化的东西区块化的许可。

## 映射不上的附注

有三种情况反复出现。

**分类标准里没有对应概念的附注。**文字区块。这是设计好的答案，不是变通办法。

**分类标准以另一个名称建模的附注。**比编制者预期的更常见，因为 SSMxT 承袭了 IFRS
Taxonomy 2022 的标签，而马来西亚的账目往往带着自家的用语。请用 mTool 内建的 SSMxT
浏览器去搜那个概念，而不是你惯用的那个标签。

**属于你没有选的那个呈报基础的附注。**分类标准载有各种替代方案——财务状况表的流动／
非流动对比按流动性排序、损益表的费用功能法对比性质法、现金流量表的直接法对比间接法。
属于你没有选的那个基础的概念是取用不到的。编制者把这读成「缺了一个元素」。其实那是
两步之前作出的一个呈报选择。

## 币别，以及它背后的法定规则

货币事实必须带 `iso4217:MYR`。为外资子公司编制、并以另一种货币向集团报告的编制者，
有时会以为呈报货币会跟着账目走。它不会。

这不只是一项分类标准的约束。Companies Act 2016 第 259(1)(c) 条要求，向注册官提交的
财务报表与报告中所列示的一切金额均以马来西亚货币列示，且以国文或英文以外任何语文
书写的文件，均须附上核证译本。

## 常见错误

- **从以千为单位列示的账目直接打入印刷数字**，而不是打入完整金额并把 `decimals` 设为
  -3。通过验证，错报账目。
- **在费用上加减号。**SSMxT 在多数情况下把带负权重的项目以正数储存。
- **跟一个衍生强制错误争论**，却不去查触发它的那个呈报资料表头。
- **把一则分类标准已逐项建模的附注区块化**，因为期限比理解来得更近。
- **拿你自家的科目名称去搜分类标准**，而不是用 IFRS 标签，然后断定那个概念不存在。
- **逐年更改呈报基础**，从而无声地破坏了数据中的比较数字。
- **以为验证失败就是被拒。**验证是在 mTool 里离线进行的；拒绝与质询是上传之后在
  mPortal 里发生的。两者都不会让法定时钟停下。
- **标记集团的呈报货币**而不是马币。
- **把映射当成可弃的。**可弃的是实例文件。映射才是资产。

## 下一步

在你的结账流程里建一道两栏的复核步骤：每一个已标记的事实对照账目表面，检查量级；
以及每一项属于判断的映射都连同理由一并记录。两者都不是验证规则，而这正是两者都不会
有人替你抓出来的原因。

如果你还在选入口点，或还在弄清楚 maker 与 lodger 的角色，请先从
[MBRS 2.0 编制指南](/zh/accounting/mbrs-2-filing-guide)开始。
