---
topicId: MY-AUD-0012
title: "审计调整与你的税务计算"
seoTitle: "马来西亚的审计调整与 Form C：税务上的连结"
slug: "audit-adjustments-tax"
category: "audit"
subcategory: ["process"]
summary: "为什么一项迟来的审计调整会同时改动税务数字与账目、CP204 的修订窗口为何在审计完成之前就已关闭，以及第 107C(10) 款的罚款实际上是怎么计算的。"

tier: "3"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "经审计的盈利是 Form C 计算的起点，因此在结案会议上议定的任何调整，都会直接流入应课税收入。问题出在时机：CP204 只可在基期的第六、第九或第十一个月修订，而审计是在这三个窗口全部关闭之后才完成的。低估随后会依 Income Tax Act 1967 第 107C(10) 款受罚。"
keyTakeaways:
  - "税务计算是从经审计的税前盈利开始的，因此每一项审计调整都会牵动它"
  - "CP204 只可在基期的第六、第九或第十一个月修订"
  - "审计是在基期结束之后进行的，因此调整浮现时，修订窗口早已关上"
  - "s.107C(10) 是就「超出」30% 差幅的部分课征 10%，而不是整笔短缺的 10%"
  - "安全港是预估达到最终应缴税款的至少 70%"
  - "s.107C(10A) 适用于根本未提交预估的情形，课征整笔税款的 10%，通常是较大的一笔罚款"
  - "Form C 须在会计期结束翌日起七个月内呈交，另有一个月的 e-Filing 宽限"
appliesTo: "正在把审计时间表与 CP204、Form C 义务对齐的马来西亚公司财务经理与董事。"

faq:
  - q: "第 107C(10) 款的罚款是怎么计算的？"
    a: "它不是短缺金额的 10%。若评税下的应缴税款超出经修订的预估——或在未作修订时超出原预估——的幅度大于应缴税款的 30%，则该 10% 的增额是就该差额「超出」30% 差幅的部分课征。因此，预估达到最终税款至少 70% 者，完全不会被课征。"
  - q: "审计调整确定之后，我可以修订 CP204 吗？"
    a: "通常不可以。第 107C 条只容许在基期的第六、第九或第十一个月修订。一家十二月年结的公司须在六月、九月或十一月修订。审计通常在翌年三月才结束，届时该课税年的三个窗口都已关闭。"
  - q: "审计调整会改变我已经缴付的税款吗？"
    a: "已缴的分期付款不会改变，但最终的税务负担会。税款余额须依 s.103(1) 在报税表到期日缴付，而 s.107C(10) 下的低估增额，是与任何逾期缴付罚款分开计算的。"
  - q: "报税表还需要经审计的账目吗？"
    a: "Income Tax Act 1967 第 77A(4) 款要求公司报税表以经审计的账目为依据，但 LHDN 已确认，在 SSM 不要求公司呈交经审计账目的情况下，该款并不适用。SSM 在自己的审计豁免 FAQ 中记录了这一立场。税务计算仍须站得住脚。"

verificationNeeded:
  - "在就特定个案依赖此处所述的计算方式之前，先对照现行综合版 Income Tax Act 1967，查证 s.107C(10) 与 s.107C(10A) 的确切措辞"
  - "对照 LHDN 现行关于应缴税款预估的 Public Ruling，查证 CP204 的修订月份与 s.107C(4A) 新公司豁免条件"

lang: "zh"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "caffd1c326f672e5"

status: "reviewed"
aiAssisted: true
reviewer: "ashton-tan"
reviewed: "2026-07-25"
reviewDue: 2027-07-22
version: "0.1"
revisions:
  - version: "0.1"
    date: 2026-07-20
    change: "Initial draft, written from the Income Tax Act 1967 and the Companies Act 2016."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "Income Tax Act 1967 (Act 53), reprint as at 21 May 2024"
    url: "https://www.hasil.gov.my/wp-content/uploads/20240521-akta-cukai-pendapatan-1967-akta-53.pdf"
    publisher: "LHDN"
    date: "2024-05-21"
  - title: "Companies Act 2016 (Act 777), reprint as at 1 August 2022"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "SSM"
    date: "2022-08-01"
  - title: "FAQs on Companies Act 2016 and Transitional Issues — Part Q, Audit Exemption"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/FAQ-AUDIT-EXEMPTION.pdf"
    publisher: "SSM"

entity: "Audit adjustments and the tax computation"
relations:
  - { rel: "affects", to: "lhdn" }
  - { rel: "part-of", to: "statutory-audit-process" }
  - { rel: "related-to", to: "form-c-and-cp204" }
related: ["statutory-audit-process", "audit-preparation-checklist", "form-c-and-cp204", "corporate-tax-rates", "company-tax-calendar"]
keywords: ["audit adjustments tax Malaysia", "CP204 revision months", "section 107C(10) penalty", "under estimation of tax penalty Malaysia", "Form C audited accounts", "audited profit tax computation"]
---

结案会议上没有人在想税。讨论的是一笔存货拨备、一个截期（cut-off）错误，
以及董事往来账的变动算不算收入。然后调整入了账，经审计的盈利变了，
而房间里没有人认领的一个数字，也跟着变了。

经审计的税前盈利是 Form C 计算的第一行。审计结束时议定的每一项调整，都会落在那里。

## 时机上的问题

| 事件 | 何时发生（12 月 31 日年结） |
| --- | --- |
| 提交 CP204 | 基期开始前 30 天 |
| CP204 修订窗口 | 仅限第六、第九与第十一个月——六月、九月、十一月 |
| 基期结束 | 12 月 31 日 |
| 审计实地工作与结案 | 二月至三月 |
| 调整确定 | 三月 |
| Form C 到期 | 7 月 31 日，另加一个月 e-Filing 宽限 |

审计是在**最后一个修订窗口关闭之后四个月**才产出调整的。并没有任何机制可以追溯修订预估。
无论调整对应课税收入造成什么影响，预估都已经定死了。

那是没有任何一个审计页面点出的结构性连结，也是一家审计做得很好的公司，
仍可能因为审计时机不佳而受罚的原因。

## 低估罚款实际上如何运作

这是几乎到处都被讲错的部分。

Income Tax Act 1967 第 107C(10) 款**并不是**就短缺金额课征 10%。若评税下的应缴税款
超出经修订的预估——或在未作任何修订时超出原预估——的幅度**大于应缴税款的 30%**，
则该 10% 的增额是就该差额**超出 30% 差幅**的部分课征。

逐步演算：

- 最终应缴税款：**RM500,000**
- 30% 差幅：**RM150,000**
- 已提交的预估：**RM300,000**
- 差额：RM200,000
- 超出差幅的部分：RM200,000 − RM150,000 = **RM50,000**
- 按 10% 计的增额：**RM5,000**

若按短缺金额的百分之十计算，本来会是 RM20,000。因此，安全港是预估达到
**最终税款的至少 70%**——达到或高于该水平者，完全不会被课征。

更糟的条文是 **s.107C(10A)**，它适用于既未提交预估、也未作出评税的情形。
它课征的是**整笔应缴税款的 10%**，而不是超出部分的 10%，对多数公司而言，
它远大于 s.107C(10)。一家干脆没有提交 CP204 的公司，
所处的制度与一家提交了拙劣预估的公司不同，而且更沉重。

## 哪些调整会牵动税，哪些不会

并非每一项审计调整都会改变应课税收入。

**会牵动的：** 对收入与采购的截期更正、可扣税的撇账、修理与资本开支之间的重新分类
（这会牵动资本减免的申索）、应计开支的错误，以及董事酬金的更正。

**不会直接牵动的：** 本来就不可扣税的一般拨备、不合资格资产的减值、
资本项目上未实现的汇兑差额，以及资产负债表内部的重新分类。
这些会改变账目而不改变税务计算——但它们会改变递延税项附注。

**会以人们错过的方式牵动的：** 固定资产登记册的更正。资本减免是依它计算的，
因此在审计中被重新分类的一笔添置、或被查出的一项处置，
都会改变减免的申索额与结余课税（balancing charge）。

## 该怎么办

**依据真实的预测来预估，而不是去年加个差幅。** 若预测是诚实的，70% 的安全港相当宽厚；
若那个数字是为了管理现金流而挑出来的，它就毫无用处。

**刻意用好第十一个月。** 到了十一月，一家十二月年结的公司已经知道十一个月的业绩。
那是更正预估的最后机会，也是最常被浪费掉的窗口。

**在实地工作期间就跑一份税务计算草稿，而不是事后才跑。** 若税务计算与审计并行编制，
则一项拟议调整的税务影响，会在结案会议上——在是否入账仍有决定余地时——就已可见。

**把去年的调整入账。** 议定而从未过账的调整，会以往年差异的形式再度出现，
并连带扭曲下一年度的预估。

## 常见错误

- **把 s.107C(10) 的增额算成短缺金额的 10%**，这会大幅高估它。
- **把 s.107C(10) 与 s.107C(10A) 混为一谈。** 后者是整笔税款的 10%，
  适用于未提交预估的情形。
- **以为审计做完之后还可以修订 CP204。** 窗口是基期的第六、第九与第十一个月。
- **把审计与税务计算当作先后进行的两件事。** 它们应当并行，因为后者依赖前者。
- **忽略固定资产调整的资本减免效应。**
- **以为审计豁免会连税务实质一起免掉。** 它免掉的是审计，
  而不是编制一份站得住脚的税务计算的要求。

## 下一步

若调整根本无法议定，这项分歧就不再是税务问题，而变成了报告问题
——那正是四种审计意见类型登场之处。
