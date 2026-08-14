---
topicId: MY-AUD-0017
title: "马来西亚法定审计中的重要性与抽样解析"
seoTitle: "马来西亚审计重要性与抽样（ISA 320、450、530）"
slug: "audit-materiality-and-sampling-explained"
category: "audit"
subcategory: ["materiality"]
summary: "审计师如何设定重要性门槛并选择要测试哪些交易——依据马来西亚原封不动采纳的 ISA 320、ISA 450 与 ISA 530 准则。"

tier: "4"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "审计师不会核对每一笔交易。他们会设定一个重要性门槛（ISA 320），标示出足以改变报表阅读者决策的错误规模，然后测试足够大的项目样本（ISA 530），以合理保证未被发现的错误低于该门槛。样本中查出的错误会被累计，并对照重要性加以衡量（ISA 450）。马来西亚照 IAASB 发布的原文采用这三项准则，不作任何修改。"
keyTakeaways:
  - "重要性是指可合理预期会影响使用者经济决策的错报规模（ISA 320，第 2 段）。"
  - "执行重要性刻意设定在整体重要性之下，为未被发现和未更正的错误留出余地（ISA 320，第 9 段）。"
  - "样本中的可容忍错报，就是将执行重要性应用到该抽样程序上（ISA 530，第 A3 段）。"
  - "审计师愿意接受的抽样风险越低，所需的样本就必须越大（ISA 530，第 A10 段）。"
  - "审计师会累计所查出的每一项错报，明显微不足道者除外（ISA 450，第 5 段）。"
appliesTo: "希望了解审计师为何测试某些交易而非全部交易的董事、财务人员、学生和企业主。"

faq:
  - q: "审计师会查看每一笔交易吗？"
    a: "不会。审计抽样对总体中不足 100% 的项目施行程序，使所有项目都有被选中的机会，从而为就整个总体作出结论提供合理依据（ISA 530，第 5(a) 段）。"
  - q: "重要性和执行重要性有什么区别？"
    a: "重要性是就整份财务报表而言的门槛。执行重要性则设定得更低，以降低众多细小的未更正和未被发现的错误累加起来超过该门槛的可能性（ISA 320，第 9 段）。"
  - q: "这些准则在马来西亚适用吗？"
    a: "适用。马来西亚会计师公会（MIA）将 IAASB 的公告原封不动地采纳为《马来西亚核准审计准则》，因此 ISA 320、450 和 530 适用于马来西亚的法定审计。"

lang: "zh"
sourceContentHash: "caf6b9d895d2d9ba"
masterLanguage: "en"
translationStatus: "in-sync"

status: "published"
aiAssisted: true
reviewer: null
reviewed: 2026-08-08
reviewDue: 2027-08-08
version: "01.00"
verificationNeeded:
  - "Re-check the ISA 320, 450 and 530 paragraph numbers against the current IAASB Handbook edition. The article cites the 2012-2013 handbook; these standards have not been substantively revised, but paragraph references should be reconfirmed against the latest published handbook a human reviewer relies on."
  - "Confirm the specific Companies Act 2016 provision (commonly cited as s.267 on appointment of auditors) if a section-level statutory citation is wanted; the article currently names only the Act, sourced to the IFAC Malaysia member profile."
  - "Confirm the preferred canonical citation form for the ISAs (the IAASB Handbook publication landing page used here vs. the IAASB per-standard electronic standards portal)."
revisions:
  - version: "01.00"
    date: 2026-08-08
    change: "Approved and published."
    reviewer: null

updated: 2026-08-08
sources:
  - title: "ISA 320, Materiality in Planning and Performing an Audit (2013 IAASB Handbook, Volume I)"
    url: "https://www.iaasb.org/publications/2013-handbook-international-quality-control-auditing-review-other-assurance-and-related-services"
    publisher: "International Auditing and Assurance Standards Board (IAASB)"
  - title: "ISA 450, Evaluation of Misstatements Identified during the Audit (2013 IAASB Handbook, Volume I)"
    url: "https://www.iaasb.org/publications/2013-handbook-international-quality-control-auditing-review-other-assurance-and-related-services"
    publisher: "International Auditing and Assurance Standards Board (IAASB)"
  - title: "ISA 530, Audit Sampling (2013 IAASB Handbook, Volume I)"
    url: "https://www.iaasb.org/publications/2013-handbook-international-quality-control-auditing-review-other-assurance-and-related-services"
    publisher: "International Auditing and Assurance Standards Board (IAASB)"
  - title: "Malaysia — IFAC Member Country Profile"
    url: "https://www.ifac.org/about-ifac/membership/profile/malaysia"
    publisher: "International Federation of Accountants (IFAC)"

entity: "ISA 320 / ISA 450 / ISA 530"
relations:
  - { rel: "related-to", to: "statutory-audit-in-malaysia" }
  - { rel: "administered-by", to: "malaysian-institute-of-accountants" }
related: ["malaysian-institute-of-accountants"]
keywords: ["materiality", "audit sampling", "ISA 320", "ISA 530", "ISA 450", "performance materiality", "tolerable misstatement", "statutory audit Malaysia"]
---

在一套账目上签字的审计师，几乎从来没有查看过账目背后的每一笔交易——而准则恰恰认为这才是正确的工作方式。

合理保证并非绝对确定。对任何规模的公司而言，测试每一张发票、每一份收据和每一笔分录都既缓慢又昂贵，而且仍无法保证得出完美的答案。因此，审计师改而做两件有纪律的事：决定错误要大到什么程度才算重要，并测试数字中具代表性的一小部分。整个流程由两个概念主导——**重要性**和**抽样**。

## 审计师如何判断什么算"重要"？

重要性并非一个固定的令吉数字。若错报单独或汇总起来"可合理预期会影响使用者基于财务报表所作的经济决策"，则该错报即为重要（ISA 320，第 2 段）。这是一个专业判断问题，判断时假设使用者具备合理的商业知识，并勤勉地阅读报表（ISA 320，第 4 段）。

实务上，审计师会先将某一百分比应用于某个基准。ISA 320 指出，对以营利为目的的实体，通常采用持续经营业务的税前利润；作为示例，审计师对以营利为目的的制造商可能认为"税前利润的百分之五"较为适当，而对非营利实体则采用"总收入或总费用的百分之一"（ISA 320，第 A7 段）。这些只是示例而非规则——基准和百分比会随实体的具体情况而变动。

## 为何执行重要性要设得更低？

如果审计师只追查单独属于重要的错误，许多细小的错误可能悄悄累加超过界线，而对测试始终查不出的错误则毫无缓冲。为防止这种情况，ISA 320 将**执行重要性**定义为设定在"低于整份财务报表重要性"的金额，以将未更正和未被发现错报的汇总数超过重要性的可能性降至"适当的低水平"（ISA 320，第 9 段）。该准则接着要求审计师在规划审计时确定该金额（ISA 320，第 11 段），并记录两个数字及其背后的推理（ISA 320，第 14 段）。

## 重要性如何决定样本规模？

这就是通向抽样的桥梁。在设计测试时，审计师会设定一个**可容忍错报**——即他们愿意在该总体中接受的最大错误。关键在于，可容忍错报"就是将执行重要性……应用于某一特定抽样程序"（ISA 530，第 A3 段）。因此，审计顶层所作的重要性判断，会一路向下影响到有多少项目会被测试。

抽样的存在是为了管理**抽样风险**：即基于样本得出的结论，与假若测试整个总体审计师会得出的结论之间存在差异的风险（ISA 530，第 5(c) 段）。审计师必须"确定足以将抽样风险降至可接受低水平的样本规模"（ISA 530，第 7 段）——而所接受的风险越低，样本就必须越大（ISA 530，第 A10 段）。有几个因素会推高或压低样本规模：

| 因素变化 | 对样本规模的影响 | 准则 |
| --- | --- | --- |
| 评估的重大错报风险更高 | 更大 | ISA 530，附录 3 |
| 更多依赖其他实质性程序 | 更小 | ISA 530，附录 3 |
| 可容忍错报更低 | 更大 | ISA 530，附录 3 |
| 总体中预期错报更高 | 更大 | ISA 530，附录 3 |
| 对总体进行适当分层 | 更小 | ISA 530，附录 3 |
| 总体规模（大型总体） | 可忽略 | ISA 530，附录 3 |

项目可通过随机、系统、货币单位或任意选样法选取；整群选样法很少适当（ISA 530，附录 4）。被测试的单位可能是一张发票、一个债务人余额，或单一货币单位（ISA 530，第 A2 段）。

## 样本查出的错误会怎样处理？

对于细节测试，审计师会将样本中发现的错误推及至整个总体（ISA 530，第 14 段）。如果推及的错报加上任何异常项超过可容忍错报，则"该样本无法为就总体作出结论提供合理依据"（ISA 530，第 A22 段）——审计师随后会扩大测试或要求管理层调查。

除"明显微不足道者"外，所查出的每一项错报都会被累计（ISA 450，第 5 段）。明显微不足道并不等同于"不重要"——这类项目在数量级上完全属于更小的层级，且凡有任何疑问时，该项目即视为并非明显微不足道（ISA 450，第 A2 段）。在形成意见之前，审计师会对照实际结果重新评估重要性（ISA 450，第 10 段），并判断未更正错报单独或汇总起来是否重要（ISA 450，第 11 段），同时向治理层通报这些错报（ISA 450，第 12 段）。

## 哪些准则适用，以及它们在马来西亚适用吗？

有三项相互衔接的准则主导这一流程：

| 准则 | 它回答的问题 |
| --- | --- |
| **ISA 320** | 错误要大到什么程度才算重要？ |
| **ISA 530** | 我们测试哪些项目、测试多少项目？ |
| **ISA 450** | 我们发现的错误会改变审计意见吗？ |

马来西亚照原文适用这三项准则。马来西亚会计师公会（MIA）的审计与鉴证准则委员会将 IAASB 的公告"不作任何修改"地采纳为《马来西亚核准审计准则》。对于公众利益实体的审计师，审计监督委员会（AOB）——根据 1993 年马来西亚证券委员会法令设立——拥有采纳这些审计准则、并对这些审计师进行注册和检查的法定权力，但其准则制定职责是通过 MIA 行使的（IFAC，马来西亚成员概况）。由于 2016 年公司法令（Companies Act 2016）为马来西亚的法定审计提供了法律依据，因此马来西亚的法定审计遵循与任何适用 ISA 之地的审计相同的重要性与抽样逻辑。

## 接下来该做什么

如果你在审阅自己公司的审计，请向业务团队提出三个问题：用什么基准和百分比设定重要性、他们采用了什么执行重要性（及可容忍错报），以及当某个样本推及的错误逼近该限额时他们如何应对。这些答案揭示了你的账目究竟有多少真正被测试过——以及原因何在。若想了解全貌，可阅读马来西亚的法定审计是如何触发和监督的，以及 MIA 与审计监督委员会（AOB）的角色如何相互配合。
