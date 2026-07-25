---
topicId: MY-TAX-0022
title: "有限责任合伙在马来西亚如何课税"
seoTitle: "马来西亚 LLP 税务：税率、资本测试与呈报"
slug: "llp-taxation"
category: "taxation"
subcategory: ["corporate-tax"]
summary: "LLP 以自身身份按 24% 课税，SME 分级税率则以出资额测试而非实缴资本来判定——而自 YA2026 起，个人合伙人须就超过 RM100,000 的分配缴 2%。"

tier: "3"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "依 LLPA 2012 注册的有限责任合伙，本身即为一个应课税人，依 Income Tax Act 1967 Schedule 1 的 2(1)(f) 段按 24% 课税。当出资额为 RM2.5 million 或以下、且商业总收入低于 RM50 million 时，paragraph 2D 给予 15% 与 17% 的分级税率。合伙人就分配不课税，惟自 YA2026 起，个人合伙人须就超过 RM100,000 的部分缴 2%。"
keyTakeaways:
  - "LLP 是一个独立的应课税人——ITA 1967 对 company 的定义不包括它，而对 partnership 的定义则明文把它排除在外"
  - "LLP 的 SME 测试看的是出资额，无论以现金或实物出资，须为 RM2.5 million 或以下——不是实缴股本"
  - "自 YA2026 起，个人合伙人就超过 RM100,000 的 LLP 利润分配按 2% 课税；非个人合伙人仍然完全免税"
  - "合伙人酬金只有在 LLP 协议中订明时才可扣除（s.39(1)(n)）"
  - "LLP 没有新 Sdn Bhd 所享有的两年 CP204 豁免的对应安排"
  - "除非 LLP 协议另有规定，LLP 的账目无须审计（LLPA 2012, s.69(5)）"
appliesTo: "正在 LLP（PLT）与 Sdn Bhd 之间作选择的专业人士与企业主，以及现有 LLP 的合规主管。"

verificationNeeded:
  - "部长依 Schedule 1 Part XXIII paragraph 2 所作的订明，即在个人合伙人另有其他收入来源时如何计算其应课税收入——找不到任何刊宪命令"
  - "LHDN 是否已取代 Public Ruling No. 8/2022，该裁定仍载明 Finance Act 2025 之前的立场，即所有 LLP 分配一律免税"
  - "e-filing 宽限期具体适用于 Form PT 的情况——2026 年呈报程序的表格无法逐格读取"

obligations:
  - what: "呈报 LLP 所得税报表（Form PT）"
    trigger: "financial-year-end"
    due: "within 7 months from the date following the close of the accounting period that is the basis period for the year of assessment"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.77A(1)"
    consequence: "Penalty under s.112 for failure to furnish a return"
  - what: "向 SSM 提交常年偿债能力声明"
    trigger: "financial-year-end"
    withinDays: 90
    due: "within 90 days from the end of the financial year, and the first declaration not later than 18 months from registration"
    authority: "SSM"
    statute: "Limited Liability Partnerships Act 2012, s.68(2) and s.68(3)"
    consequence: "Fine up to RM20,000 and a further RM500 for every day the offence continues"
  - what: "呈交应缴税款预估（CP204）"
    trigger: "financial-year-end"
    due: "not later than 30 days before the beginning of the basis period; a newly commenced LLP files within 3 months of commencing operations"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.107C(2) and s.107C(4)"
    consequence: "Offence under s.120(1); the two-year waiver in s.107C(4A) does not apply to LLPs"

lang: "zh"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "0632dd55307e891f"

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
  - title: "Income Tax Act 1967 (Act 53), consolidated text"
    url: "https://lom.agc.gov.my/act-detail.php?act=53&lang=BI"
    publisher: "Attorney General's Chambers"
  - title: "Limited Liability Partnerships Act 2012 (Act 743)"
    url: "https://lom.agc.gov.my/act-detail.php?act=743&lang=BI"
    publisher: "Attorney General's Chambers"
  - title: "Finance Act 2025 (Act 874)"
    url: "https://lom.agc.gov.my/act-detail.php?act=874&lang=BI"
    publisher: "Attorney General's Chambers"
    date: "2025-12-31"
  - title: "Public Ruling No. 8/2022 — Taxation of Limited Liability Partnership"
    url: "https://www.hasil.gov.my/wp-content/uploads/pr_8_2022.pdf"
    publisher: "LHDN"
    date: "2022-12-23"
  - title: "Program Memfail Borang Nyata Bagi Tahun 2026"
    url: "https://www.hasil.gov.my/wp-content/uploads/program-memfail-bn-bagi-tahun-2026.pdf"
    publisher: "LHDN"
    date: "2025-12-30"

entity: "Limited liability partnership taxation"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "governs", to: "limited-liability-partnerships-act-2012" }
  - { rel: "compares-with", to: "corporate-tax-rates" }
related: ["corporate-tax-rates"]
keywords: ["LLP tax Malaysia", "PLT tax", "limited liability partnership tax rate", "cukai PLT", "LLP vs Sdn Bhd tax", "Form PT"]
---

LLP 是马来西亚最少被讲清楚的一种商业形式，而混乱从法令本身就开始了。Income Tax
Act 1967 把 **company** 定义为法人团体——而且**不**包括 LLP。它定义了
**partnership**，并明文把 LLP **排除**在外。LLP 反而是被 **person** 的定义捉住的，
并以自身身份课税。

## LLP 缴什么税率？

Schedule 1 的 2(1)(f) 段就 LLP 课 **24%**。适用于超过 RM100 million 应课税收入的
33% 级距，其条文只为*公司*而写，所以够不到 LLP。

SME 税率来自 **paragraph 2D**，即公司那边 paragraph 2A 的 LLP 对应条文：

| 应课税收入 | 税率 |
| --- | --- |
| 首 RM150,000 | 15% |
| 接下来的 RM450,000 | 17% |
| 超过 RM600,000 | 24% |

## 资本测试是 LLP 与 Sdn Bhd 分道扬镳的地方

Sdn Bhd 测的是**普通股的实缴资本**。LLP 没有股份，所以 paragraph 2D 测的是别的
东西：**在基期开始时**，**无论以现金或实物**的出资总额为 RM2.5 million 或以下，
外加商业总收入不超过 RM50 million。

*或实物*这个词组就是陷阱。把设备、房产或知识产权出资给 LLP，与现金一样计入那
RM2.5 million。一个把资产而非现金资本化的合伙，可以在一令吉都没有易手的情况下
冲破门槛。

Paragraph 2E 接着规定，若 LLP 的出资额有超过 50% 直接或间接来自某家公司、或 LLP
持有某公司普通实缴资本超过 50%、或两者交叉持股超过 50%，即丧失资格。有一项独立的
条款在公司那边没有对应物：若 LLP 的出资额有**超过 20%** 来自在马来西亚境外注册的
公司或来自**非公民个人**，它同样不达标。Paragraph 2F 把这一点限于实缴资本超过
RM2.5 million 的公司。

## 合伙人缴什么

历来，分配在合伙人手上依 Schedule 6 的 12C 段就是免税的。**Finance Act 2025
（Act 874）** 自 **YA2026** 起改变了这一点：

- 12C 段如今只就分配给**个人以外**合伙人的部分给予免税——公司合伙人仍然完全免税；
- 新的 12D 段就 **RM100,000 或以下**的分配给予个人合伙人免税；以及
- 新的第 6(1)(s) 条与 Schedule 1 Part XXIII 就以现金或实物分配的、源自马来西亚的
  利润中**超过 RM100,000** 的部分，向个人合伙人课 **2%**。

Public Ruling No. 8/2022 仍然描述旧的全面免税。它没有被撤回，而在这一点上它现在
是错的。

## 扣除、呈报与审计

**合伙人酬金**依 **s.39(1)(n)** 不获扣除，除非它在依 LLPA 2012 s.9 订立的 LLP
协议中订明或作出规定。PR 8/2022 把*酬金*读作基本薪金与固定津贴，不包括雇主的
EPF、SOCSO 与保险缴纳金。

**Form PT** 须在会计期结束次日起 **七个月**内呈报（s.77A(1)），而依 s.77A(1A)，
自 YA2021 起 e-Filing 已属强制。

**CP204** 完整适用。s.107C(4A) 中的两年豁免没有 LLP 版本——该条文是为在马来西亚
注册成立、实缴资本 RM2.5 million 或以下的居民公司而写的。PR 8/2022 确认了这项
排除，包括对由公司转换而成的 LLP，其业务被视为持续经营。

在 SSM 那一侧，LLPA 2012 的 s.68 要求在财政年度结束后 **90 天内由任何两名合伙人
作出常年偿债能力声明**，首份则在注册后 18 个月内。而依 **s.69(5)**，除非 LLP 协议
有此要求，LLP 的账目**无须审计**——这是对上 Sdn Bhd 最大的一项持续成本差异。

## 常见错误

- 用实缴资本来测 LLP。它没有实缴资本；测试的是包括实物出资在内的出资额。
- 付给合伙人一笔没有写进 LLP 协议的薪金，然后拿去申索——s.39(1)(n) 不容许扣除。
- 以为新 LLP 头两年豁免 CP204。并没有。
- 就个人合伙人所获分配的处理，依赖 PR 8/2022。
- 在税务呈报上把 LLP 当成合伙。它是以 person 的身份呈报 Form PT，不是 Form P。

## 下一步

如果你正在几种形式之间作选择，请把真正的差别定价出来：没有法定审计、一项实物出资
就可能冲破的资本测试，以及自 YA2026 起就个人合伙人超过 RM100,000 部分课的 2%。
如果你已经在营运一家 LLP，请在下一份报税表之前，确认每一笔付给合伙人的款项都已在
LLP 协议中订明。
