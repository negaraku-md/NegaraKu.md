---
topicId: MY-TAX-0058
title: "你该呈交哪一份 LHDN 表格？BE、B、BT、M、P 与 E"
seoTitle: "该用哪份 LHDN 税表：BE、B、BT、M、P 还是 E"
slug: "which-tax-form"
category: "taxation"
subcategory: ["personal-tax"]
summary: "一张决策表，把每一类非公司纳税人对应到其报表表格、法定期限，以及 2026 年呈报计划下的 e-Filing 宽限期。"

tier: "4"
mode: "practical"
contentType: "data"
sensitivity: "none"

answer: "没有商业收入的居民个人在 4 月 30 日前呈交 Form BE。有商业收入的居民在 6 月 30 日前呈交 Form B。非居民呈交 Form M，合伙呈交 Form P，而雇主在 3 月 31 日前呈交 Form E。个人与合伙的表格享有 15 天的 e-Filing 宽限期；Form E 与公司表格则享有一个月。"
keyTakeaways:
  - "个人表格的 e-Filing 宽限期是 15 天，不是一个月——Form E 才是一个月"
  - "有商业收入会把你的期限从 4 月 30 日移到 6 月 30 日，把你的表格从 BE 移到 B"
  - "宽限期同时延后 s.103(1) 的税款余额缴付，但 Form E、P 与 CPE 除外"
  - "Form BT 与 Form MT 是给知识工作者、专才与担任关键职位的非公民用的"
  - "自 YA2023 起，个人、合伙、社团与遗产已强制使用 e-Filing"
  - "错过期限会让你面对 s.112(3) 罚款或 s.112(1) 检控；Form E 与 P 则归 s.120(1) 管"
appliesTo: "任何正在确认正确 LHDN 报表与日期的个人、合伙、遗产、社团或雇主。"

faq:
  - q: "Form BE 的期限是什么时候？"
    a: "课税年之后一年的 4 月 30 日，另有 15 天的 e-Filing 延期。以课税年 2025 为例，Form BE 的期限是 2026 年 4 月 30 日，e-BE 则至 2026 年 5 月 15 日。5 月 16 日呈交的表格会被当作自 5 月 1 日起逾期，并可能引来 s.112(3) 罚款。"
  - q: "Form B 与 Form BE 有什么不同？"
    a: "Form B 是给经营业务的居民个人用的，包括独资经营者、依 s.4(a) 课税的自由职业者与合伙人。Form BE 是给没有商业收入的居民个人用的。期限不同：Form B 是 6 月 30 日，Form BE 是 4 月 30 日。"
  - q: "在马来西亚工作的外国人呈交哪一份表格？"
    a: "非居民个人呈交 Form M。非居民知识工作者呈交 Form MT。在已批准的奖掖计划下担任关键职位的居民非公民，或获批准且为居民的知识工作者或专才，呈交 Form BT。"
  - q: "个人的 e-Filing 宽限期是一个月吗？"
    a: "不是。2026 年呈报计划给予个人、合伙、社团、遗产与印裔联合家庭的表格 15 天延期。一个月的延期适用于 Form E 以及公司、LLP、合作社与信托机构的表格。"

verificationNeeded:
  - "Dates here are taken from the filing programme issued 30 December 2025 and updated 1 April 2026, which governs returns for year of assessment 2025. LHDN issues a new programme each year — re-read it before relying on a later cycle"

lang: "zh"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "1c422a60f1ab90e9"

status: "draft"
aiAssisted: true
reviewer: null
reviewDue: 2027-07-22
version: "0.1"
revisions:
  - version: "0.1"
    date: 2026-07-20
    change: "Initial draft."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "Program Memfail Borang Nyata (BN) Bagi Tahun 2026"
    url: "https://www.hasil.gov.my/wp-content/uploads/program-memfail-bn-bagi-tahun-2026.pdf"
    publisher: "Lembaga Hasil Dalam Negeri Malaysia"
    date: "2025-12-30"
  - title: "Income Tax Act 1967 (Act 53), reprint of 21 May 2024 — ss.77, 83, 103, 112, 120"
    url: "https://www.hasil.gov.my/wp-content/uploads/20240521-akta-cukai-pendapatan-1967-akta-53.pdf"
    publisher: "Attorney General's Chambers"
    date: "2024-05-21"

obligations:
  - what: "为不经营业务的居民个人呈交 Form BE"
    trigger: "ongoing"
    due: "30 April following the year of assessment, extended 15 days for e-Filing"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.77"
    consequence: "Penalty under s.112(3) or prosecution under s.112(1)"
  - what: "为经营业务的居民个人呈交 Form B"
    trigger: "ongoing"
    due: "30 June following the year of assessment, extended 15 days for e-Filing"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.77"
    consequence: "Penalty under s.112(3) or prosecution under s.112(1)"
  - what: "就该薪酬年呈交 Form E 连同 C.P.8D"
    trigger: "ongoing"
    due: "31 March following the remuneration year, extended one month for e-Filing"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83(1)"
    consequence: "Action under s.120(1) — fine of RM200 to RM20,000 or imprisonment up to six months"

entity: "LHDN return forms for individuals and partnerships"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "governs", to: "income-tax-act-1967" }
  - { rel: "related-to", to: "form-e-ea-cp8d-malaysia" }
related: ["personal-tax-rates", "individual-tax-residence", "form-e-ea-cp8d-malaysia", "form-c-and-cp204"]
keywords: ["which LHDN form", "Form BE vs Form B", "borang BE tarikh akhir", "Form M non-resident Malaysia", "LHDN filing deadline 2026", "e-Filing grace period Malaysia"]
---

决定你用哪份表格的有两件事：你依 s.7(1) 是否为**居民**，以及你有没有**商业收入**。
其余的都跟着这两点走。

## 决策表

| 你是 | 表格 | e-Filing 表格 | 法定期限 | e-Filing 宽限 |
| --- | --- | --- | --- | --- |
| 居民个人，**没有**商业收入 | BE | e-BE | 4 月 30 日 | **15 天** |
| 居民个人，**有**商业收入 | B | e-B | 6 月 30 日 | **15 天** |
| 居民知识工作者、专才，或担任关键职位的非公民 | BT | e-BT | 4 月 30 日；有商业收入则 6 月 30 日 | **15 天** |
| 非居民个人 | M | e-M | 4 月 30 日；有商业收入则 6 月 30 日 | **15 天** |
| 非居民知识工作者 | MT | e-MT | 4 月 30 日；有商业收入则 6 月 30 日 | **15 天** |
| 合伙（商号自身的报表） | P | e-P | 6 月 30 日 | **15 天** |
| 社团或公会 | TF | e-TF | 4 月 30 日；有商业收入则 6 月 30 日 | **15 天** |
| 已故者的遗产 | TP | e-TP | 4 月 30 日；有商业收入则 6 月 30 日 | **15 天** |
| 印裔联合家庭 | TJ | e-TJ | 4 月 30 日；有商业收入则 6 月 30 日 | **15 天** |
| 雇主，薪酬报表 | E | e-E | 3 月 31 日 | **1 个月** |
| 公司 | C | e-C | 会计期结束后 7 个月 | **1 个月** |
| 有限责任合伙 | PT | e-PT | 会计期结束后 7 个月 | **1 个月** |

期限落在课税年**之后**的那一年。YA2025 的 Form BE 期限是 2026 年 4 月 30 日，e-BE
受理至 2026 年 5 月 15 日。

## 宽限期涵盖什么、不涵盖什么

| 要点 | 立场 |
| --- | --- |
| 适用于 | 仅限通过 e-Filing 呈交的报表 |
| 同时延后 | s.103(1) 的税款余额缴付日期 |
| **不延后**缴付日期的表格 | Form E、Form P 与 Form CPE |
| 错过它的效果 | 该报表被当作**自原本的法定日期起**逾期，而不是自宽限期结束起 |

最后那一行是陷阱。LHDN 在呈报计划里自己的 Example 1：YA2025 的 e-BE 若在 2026 年
5 月 16 日呈交，视为**自 2026 年 5 月 1 日起**逾期。宽限期不是罚款时钟上的十五天
缓冲——它是一个窗口，你要么落在里面，要么没有。

Form E 与 P 只是被排除在**缴付**延期之外，因为两者都不带税款余额。它们仍然享有各自
的呈报延期。

## 强制 e-Filing，按类别

| 类别 | 自何时强制 |
| --- | --- |
| 公司（e-C） | YA2014 |
| 属公司或纳闽公司的雇主（e-E） | 薪酬年 2016 |
| 有限责任合伙（e-PT） | YA2021 |
| 个人、合伙、社团、遗产（e-BE、e-B、e-BT、e-M、e-MT、e-P、e-TF、e-TP） | **YA2023** |
| 公司以外的雇主（e-E） | 薪酬年 2023 |
| 石油营运（e-CPP、e-CPE） | YA2023 |
| 合作社与信托（e-CS、e-TA、e-TC、e-TR） | YA2024 |
| 印裔联合家庭（e-TJ） | YA2024 |
| 纳闽实体（e-LE1） | YA2025 |

税务代理通过 TAeF 2.0 而不是 MyTax 呈交。

## 雇主的平行日历

| 文件 | 交给谁 | 期限 |
| --- | --- | --- |
| Form EA | 每一名雇员 | **2 月 28 日**，s.83(1A) |
| Form E 连同 C.P.8D | LHDN | **3 月 31 日**，一个月 e-Filing 宽限 |
| CP22 | LHDN，新雇员 | 开始受雇起 **30 天**内 |
| CP22A | LHDN，停止受雇 | 停止受雇前至少 **30 天** |
| CP21 | LHDN，雇员离开马来西亚 | 离境前至少 **30 天** |
| CP58 | 代理、经销商、分销商 | **3 月 31 日** |

Form E 只有在 C.P.8D 于同一期限内呈交时才被视为完整。休眠公司、LLP、信托机构与合作社
仍须呈交 Form E 与 C.P.8D。**没有雇员**的独资经营、合伙、印裔联合家庭或遗产可免呈
C.P.8D。

## 逾期呈报的后果

| 表格 | 条文 |
| --- | --- |
| E 与 P 以外的所有报表 | 依 s.112(1) 检控**或**依 s.112(3) 罚款 |
| Form E 与 P | 依 s.120(1) 采取行动 |

## 常见错误

- **以为 Form BE 有一个月的宽限。** 它是 15 天。一个月那个数字属于 Form E 与公司类
  表格，混淆两者会把一份报表推过两个星期、越过无可挽回的那一点。
- **有自由职业收入却呈 BE。** 任何 s.4(a) 的商业来源都会把你移到 Form B 与 6 月
  30 日。改呈 BE 会少报你的收入来源。
- **以为 Form P 就把合伙人的税结清了。** Form P 是合伙的资料报表。每一名合伙人仍须
  在 Form B 上申报自己那一份。
- **休眠时把 Form E 当成可有可无。** 公司、LLP、信托机构与合作社无论有没有营业都必须
  呈交。
- **等纸本表格。** 自 YA2023 起个人已强制 e-Filing；呈报计划中邮寄那一栏根本没有任何
  延期。

## 下一步

在 BE 与 M 两个系列之间作选择前先确认你的居民身份，然后查核适用于你所呈报年度的税率
表与扣税减免。
