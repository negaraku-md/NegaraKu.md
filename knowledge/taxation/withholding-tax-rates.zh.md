---
topicId: MY-TAX-0025
title: "马来西亚预扣税税率——按付款类别"
seoTitle: "马来西亚预扣税税率——法条、税率、表格"
slug: "withholding-tax-rates"
category: "taxation"
subcategory: ["withholding-tax"]
summary: "一张表列出马来西亚每一个预扣税税率——付款类别、ITA 法条、税率、表格与缴交期限。"

tier: "4"
mode: "practical"
contentType: "data"
sensitivity: "none"

answer: "马来西亚的预扣税税率由 Income Tax Act 1967 的 Schedule 1 订定，而不是由征税条文订定。付给非居民的利息为 15%，特许权使用费 10%，s.4A 下的特定类别收入 10%，paragraph 4(f) 收入 10%，非居民公众艺人 15%，非居民承包商 10% 外加 3%。这些几乎全部须在向收款人付款或入账后一个月内缴交。"
keyTakeaways:
  - "税率住在 Schedule 1，义务住在征税条文——两者都要引"
  - "付款或入账后一个月是标准的缴交规则，而入账可以早于付款"
  - "Section 107D 是例外——缴付期限是下一个日历月的月底，不是一个月之后"
  - "Section 107A 对同一笔款项带两个税率：承包商 10%，其雇员 3%"
  - "只有在你持有收款人税务当局出具的税务居民证明时，才用得上协定税率"
  - "未能预扣会触发 10% 的加征，以及相关开支不获扣除"
appliesTo: "任何向非居民付款的马来西亚企业、政府机构或居民人士，以及任何向居民代理、经销商或分销商付款的公司。"

faq:
  - q: "马来西亚的标准预扣税税率是多少？"
    a: "没有单一的标准税率。税率取决于 Income Tax Act 1967 Schedule 1 下的收入类别——利息 15%，特许权使用费 10%，s.4A 下的特定类别收入 10%，非居民合约款项 10% 外加 3%。协定税率可能调低其中数项。"
  - q: "预扣税必须什么时候缴给 LHDN？"
    a: "就 ss.107A、109、109A、109B 与 109F 而言，是在向收款人付款或入账后一个月内。Section 107D 不同——它须不迟于付款月份之后的日历月月底缴付。若到期日落在周末或公共假期，则顺延至下一个工作日。"
  - q: "预扣税是最终税款吗？"
    a: "对多数非居民收入而言是的。LHDN 把利息、特许权使用费、特定类别收入、REIT 分派与 paragraph 4(f) 收入的预扣税当作最终税款，因此非居民就该项收入再无马来西亚的呈报义务。Section 107A 不是最终的——它是就承包商最终评税的一笔预缴。"
  - q: "如果合约写明费用是税后净额，我还要预扣吗？"
    a: "要。无论合约怎么写，义务都在付款人身上。凡付款人依合约承担该税，LHDN 在 Public Ruling 10/2019 中确认，自 2018 年 12 月 5 日起，s.109B 的税款按支付的总额计算，不作反算还原——但付款人所承担的税，在其自身账目中不可扣除。"

verificationNeeded:
  - "用于 s.107D 2% 扣缴的 Form CP107D 及其附录 CP107D(1) 无法从任何现行的 hasil.gov.my 路径取得 — 下方的税率、门槛及汇缴规则来自该法令本身，而非来自该表格"
  - "此处未复述具体国家的协定税率——请在LHDN DTA页面查阅每一份协定，因为优惠税率因条款及国家而异"

obligations:
  - what: "缴交从付给非居民的款项中扣下的预扣税"
    trigger: "change"
    withinDays: 30
    due: "within one month after paying or crediting the non-resident payee"
    authority: "LHDN"
    statute: "Income Tax Act 1967, ss.107A(1), 109(1), 109B(1), 109F(1)"
    consequence: "The unpaid amount is increased by 10 per cent and the expense is disallowed under s.39(1)(f), (i) or (j)"

lang: "zh"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "091d81b974b404be"

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
  - title: "Withholding Tax"
    url: "https://www.hasil.gov.my/en/perundangan/cukai-pegangan/"
    publisher: "LHDN"
  - title: "Income Tax Act 1967 (Act 53), reprint as at 21 May 2024 — Schedule 1 and ss.107A, 107D, 109, 109A, 109B, 109F"
    url: "https://www.hasil.gov.my/wp-content/uploads/20240521-akta-cukai-pendapatan-1967-akta-53.pdf"
    publisher: "LHDN"
    date: "2024-05-21"
  - title: "Public Ruling No. 10/2019 — Withholding Tax on Special Classes of Income"
    url: "https://www.hasil.gov.my/wp-content/uploads/PR_10_2019.pdf"
    publisher: "LHDN"
    date: "2019-12-10"
  - title: "Double Taxation Avoidance Agreement (DTA/DTAA)"
    url: "https://www.hasil.gov.my/en/antarabangsa/perjanjian-pengelakan-pencukaian-dua-kali-pppdk/"
    publisher: "LHDN"

entity: "Malaysian withholding tax rates"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "governs", to: "income-tax-act-1967" }
  - { rel: "explained-in", to: "withholding-tax-special-classes" }
related: ["withholding-tax-special-classes", "withholding-tax-digital-services", "withholding-tax-non-compliance", "cp37-forms"]
keywords: ["withholding tax rate Malaysia", "section 109B rate", "section 107A withholding tax", "CP37D", "withholding tax table Malaysia", "LHDN withholding tax"]
---

你需要的那个税率，几乎从来不在你正在读的那一条法条里。Section 109B 叫你按“at the rate
applicable to such payments”预扣，然后就没了——那 10% 在 Schedule 1 的 Part V。
Section 109 也一样。养成两者都引的习惯，因为一场关于税率的争论，就是一场关于
Schedule 1 的争论。

## 完整表格

| 付款类别 | ITA 法条 | 税率 | 表格 | 缴交期限 |
| --- | --- | --- | --- | --- |
| 付给非居民承包商的合约款项 | s.107A, Sch 1 | 10%（承包商）+ 3%（其雇员） | CP37A | 付款或入账后 1 个月 |
| 付给居民代理、经销商或分销商的款项 | s.107D, Sch 1 | 2% | CP107D | **下一个日历月**月底 |
| 付给非居民的利息 | s.109, Sch 1 Pt II item 1 | 15% | CP37 | 付款或入账后 1 个月 |
| 付给非居民的特许权使用费 | s.109, Sch 1 Pt II item 2 | 10% | CP37 | 付款或入账后 1 个月 |
| 利息或特许权使用费，小额 | s.109, Sch 1 Pt II | 15% / 10% | CP37S | 半年一次，6 月 30 日或 12 月 31 日 |
| 非居民公众艺人 | s.109A, Sch 1 Pt II item 3 | 15% | CP154 连同 LHDN 税务计算 | 付款或入账后 1 个月 |
| s.4A 下的特定类别收入 | s.109B, Sch 1 Pt V | 10% | CP37D | 付款或入账后 1 个月 |
| 特定类别收入，小额 | s.109B, Sch 1 Pt V | 10% | CP37DS | 半年一次，6 月 30 日或 12 月 31 日 |
| 由银行或获批准机构支付给居民个人的利息 | s.109C, Sch 1 Pt VI | 5% | — | 付款或入账后 1 个月 |
| REIT 或产业信托分派——非居民公司 | s.109D, Sch 1 Pt X | 24% | CP37E | 付款或入账后 1 个月 |
| REIT 或产业信托分派——外国机构投资者 | s.109D, Sch 1 Pt X | 10% | CP37E | 付款或入账后 1 个月 |
| REIT 或产业信托分派——其他，非居民公司者 | s.109D, Sch 1 Pt X | 10% | CP37E | 付款或入账后 1 个月 |
| 零售货币市场基金分派予非个人单位持有人 | s.109DA, Sch 1 Pt XIX | 24% | CP37E(NR) / CP37E(R) | 付款或入账后 1 个月 |
| 家庭或家庭回教保险基金分派——非居民公司 | s.109E, Sch 1 Pt XI | 25% | CP37E(T) | 付款或入账后 1 个月 |
| 家庭或家庭回教保险基金分派——其他，非居民公司者 | s.109E, Sch 1 Pt XI | 8% | CP37E(T) | 付款或入账后 1 个月 |
| 付给非居民的 paragraph 4(f) 收入 | s.109F, Sch 1 Pt XIII | 10% | CP37F | 付款或入账后 1 个月 |
| 55 岁前提取递延年金或 PRS | s.109G, Sch 1 Pt XVI | 8% | CP37G | 付款或入账后 1 个月 |

## 这张表藏起来的三件事

**「付款或入账」不等于「付款」。** Public Ruling 10/2019 para 13.1 把入账定义为不只是
一笔日记账分录或一项计提——该金额必须可供收款人使用或为其利益而备。但抵销非居民欠你
款项的对冲分录算数，而时钟从对冲之日起跑。一家从来没有汇出过现金的公司，照样可以迟
一个月。

**Section 107D 跑的是另一把时钟。** Section 107D(1) 要求“not later than the end of the
following calendar month”缴付，而不是一个月之后。它也只在该代理、经销商或分销商于紧接
的前一个基年从该付款人处收取超过 RM100,000 时才咬下去（s.107D(2)），而且只在该人是
居民个人时才适用（s.107D(6)）。

**协定税率是有条件的，不是自动的。** LHDN 要求收款人所属税务当局出具核实居民身份的
书面确认，并留存以备合规审查。Public Ruling 10/2019 Example 16 对一名香港服务供应商
适用 5% 的税率，但那是在居民身份获确认之后。没有那份证明，你就按国内税率预扣。

## 常见错误

- **引用税率却不引附表。**「Section 109B 是 10%」是简写。那 10% 是 Schedule 1 的
  Part V，而 Part V 才是税收协定所取代的东西。
- **以为小额表格只是可有可无的方便。** CP37S 与 CP37DS 有两个累计条件：每一笔付款交易
  的税款不得超过 RM500，**并且**小额交易须在相关的六个月窗口内发生超过一次。半年内
  单单一笔 RM400 的付款并不符合展期资格。
- **把 s.107A 当成最终税款。** 它不是。段落 (a) 用来抵扣承包商自己的评税；段落 (b) 那
  3%，依 s.107A(3)(b) 由总监酌情退还给承包商。
- **在款项部分不在范围内时按总额预扣。** 就 s.4A(i) 与 (ii) 收入而言，只有可归属于在
  马来西亚提供之服务的那一部分须课税，按公平合理的基础分摊。

## 下一步

税率是容易的部分。有两个问题决定多数真实案件：该款项究竟是不是「源自马来西亚」，以及
它属 s.109 下的特许权使用费还是 s.109B 下的特定类别收入。第一个请读
[withholding-tax-special-classes](/zh/taxation/withholding-tax-special-classes)，
第二个请读
[withholding-tax-digital-services](/zh/taxation/withholding-tax-digital-services)。
