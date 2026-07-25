---
topicId: MY-TAX-0013
title: "基期与更改结账日期"
seoTitle: "马来西亚基期：首年与结账日期"
slug: "basis-period-and-accounting-date"
category: "taxation"
subcategory: ["corporate-tax"]
summary: "section 21A 如何确定一家公司的首个基期、为何一家第一年的 Sdn Bhd 可能根本没有课税年，以及结账日期变动时该呈报什么。"

tier: "3"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "公司的基期由 Income Tax Act 1967 的 section 21A 确定。若首份账目在营运开始的同一个日历年内结账，该期间就是首个基期。若在下一年结账，则第一个课税年根本没有基期。其后结账日期变动时，变动那一年是「未结账年度」，由总监指示该年及下一年的基期。"
keyTakeaways:
  - "首个会计期只有在同一个日历年内结账，才会是首个基期"
  - "首份账目在第二年结账，就表示第一年没有基期，也没有 Form C"
  - "首份账目跑超过 12 个月、一直延到第三年，会把首次课税推到第三年"
  - "更改结账日期会依 s.21A(3) 产生一个未结账年度，由总监指示"
  - "Form CP204B 须在新账目结束前 30 天，或在旧的对应日之前 30 天呈交"
  - "跨越超过一个课税年的账目会被拆分，不足一个月的零头归入前一个期间"
appliesTo: "新注册成立的 Sdn Bhd、LLP、信托机构与合作社，以及任何更改财政年结的公司。"

verificationNeeded:
  - "确认现行的 CP204B 呈交地址，以及 CP204B 是否可电子呈交；LHDN 的页面说明期限印在表格背面"

obligations:
  - what: "以 Form CP204B 通知结账日期的变动"
    trigger: "change"
    withinDays: 30
    due: "30 days before the end of the new accounts where they close before the corresponding day, or 30 days before the corresponding day where they close after it"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.21A(3A)"
    consequence: "Penalties and instalment increases based on the old accounting period remain recoverable under s.112(3A) and s.107C(11B)"

lang: "zh"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "23049b8c7ea8c98a"

status: "reviewed"
aiAssisted: true
reviewer: "ashton-tan"
reviewed: "2026-07-25"
reviewDue: 2027-07-22
version: "0.1"
revisions:
  - version: "0.1"
    date: 2026-07-20
    change: "Initial draft."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "Public Ruling No. 8/2014 — Basis Period of a Company, Limited Liability Partnership, Trust Body and Co-operative Society"
    url: "https://www.hasil.gov.my/wp-content/uploads/PR_8_2014.pdf"
    publisher: "LHDN"
    date: "2014-12-01"
  - title: "Income Tax Act 1967 (Act 53), reprint as at 21 May 2024 — sections 21A, 77A, 107C and 112"
    url: "https://www.hasil.gov.my/wp-content/uploads/20240521-akta-cukai-pendapatan-1967-akta-53.pdf"
    publisher: "LHDN"
    date: "2024-05-21"
  - title: "Change In Accounting Period"
    url: "https://www.hasil.gov.my/en/syarikat/pertukaran-tarikh-penutupan-akaun-syarikat/"
    publisher: "LHDN"

entity: "Basis period"
relations:
  - { rel: "governs", to: "income-tax-act-1967" }
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "affects", to: "form-c-and-cp204" }
related: ["form-c-and-cp204", "corporate-tax-rates", "income-tax-act-1967"]
keywords: ["basis period Malaysia", "section 21A", "failure year", "CP204B", "change accounting date Malaysia", "tempoh asas"]
---

一家在 3 月注册成立、首份账目在翌年 6 月 30 日结账的 Sdn Bhd，**在它的第一个日历年没有课税年**。没有基期，没有 Form C，没有应课税收入。被告知公司每年都要报税的董事会觉得这很吓人；这不过是 section 21A 的运作方式而已。

## 首个基期怎么定？

Section 21A(4) 给出三种结果，Public Ruling No. 8/2014 以实例重述了它们。

| 首份账目 | 条文 | 结果 |
| --- | --- | --- |
| 少于 12 个月，且在营运开始的同一个日历年内结束 | s.21A(4)(a) | 该期间即第一个课税年的基期 |
| 任何长度，但在下一个日历年的某日结束 | s.21A(4)(b) | 该期间是**第二个**课税年的基期，而**第一个课税年没有基期** |
| 超过 12 个月，且在第三个日历年结束 | s.21A(4)(c) | 该期间是**第三个**课税年的基期，而首两个课税年没有基期 |

该裁定的 Example 4 中，一家 LLP 的首份账目由 2013 年 11 月 1 日至 2015 年 4 月 30 日，**YA2013 与 YA2014 都没有基期**，YA2015 则有一个 18 个月的基期。

这就是重叠基期基本上消失的原因。在现行 s.21A(4) 对 2014 年结账的首份账目生效之前，一家公司可能有两个基期涵盖同样的月份，依 s.42(2) 分摊。今天你得到的是一个**缺席的课税年**，而不是重叠，所以被跳过的那一年没有东西要呈报——而 LHDN 的呈报程序确认，尚未开始营运的公司也无须呈交 Form CP204。

## 结账日期变动时会怎样？

Section 21A(3) 适用于以下情形：公司已就某个基年内某日结束的 12 个月编制账目，其后却**未能在下一年的对应日结账**。该年就是**未结账年度**，而总监可以就未结账年度、或就该年与下一年，指示任何长度的基期。

Paragraph 5.2 说，纳税人实际编制的期间一般会被接受，前提是**没有缺席的课税年**，且**没有两套账目在同一个课税年内结账**。由此衍生四种情形。

| 日期变动 | 未结账年度的基期 |
| --- | --- |
| 缩短，在同一年内结束（2 月 28 日改为 12 月 31 日） | **22 个月**——短尾期与其后的整年合并，因为单独的短尾期会令一个课税年内出现两次结账 |
| 缩短，在下一年结束（12 月 31 日改为 4 月 30 日） | 该 4 个月期间成立，因为它自己独占一年结账 |
| 延长进入下一年（7 月 31 日改为 10 月 31 日） | 该 15 个月期间成立 |
| 延长跨越两个课税年（2014 年 1 月 1 日至 2015 年 1 月 31 日） | **拆分**为 YA2014 的 7 个月与 YA2015 的 6 个月 |

在最后那一种情形上，该裁定定下了决胜规则：分不平均时，**不足一个月的零头归入前一个基期**。

## 你必须呈报什么，什么时候呈报？

通知用的是 **Form CP204B**，而它的时限是法定的，不是行政性的。Section 21A(3A) 要求：

- 若新账目在旧的对应日**之前**结账，则在**新账目结束前 30 天**；或
- 若新账目在对应日**之后**结账，则在**对应日之前 30 天**。

漏了它不只是文书上的失误。Section 112(3A) 规定，任何已依 s.112(3) 按旧会计期基础施加的罚款**仍可追讨**，而 s.107C(11B) 对 section 107C 下的任何增额也是同样说法。没有通知，并不会把按你如今已放弃的那个期限所计算的罚款归零。

## 常见错误

- **以为每家公司在它的第一个日历年都要报税。** 若首份账目在第二年结账，第一年根本没有基期。为一个不存在的年度呈交零申报的 Form C，会制造一笔 LHDN 得回头拆解的记录。
- **改了年结却只告诉核数师。** CP204B 是一项独立的法定通知，在 s.21A(3A) 下有它自己的 30 天时钟。
- **以为短尾期总是独立成立。** 若缩短后的期间会令一个课税年内出现两次结账，该裁定会把它们合并——22 个月的基期就是这样来的。
- **把长期间平均拆分。** 分不平均的月份归入前一个基期，不是后一个。

## 下一步

其他每一项公司期限都跟着基期走——基期开始前 30 天的 CP204 预估、自第二个月起的分期付款，以及基期结束后七个月的 Form C。若这次变动产生了一个偏长或偏短的基期，也请回头重看 CP204 预估，因为分期付款是按基期的月数来除的。
