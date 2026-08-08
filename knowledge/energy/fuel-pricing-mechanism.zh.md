---
topicId: MY-ENE-0005
title: "马来西亚如何每周设定燃油价格"
seoTitle: "马来西亚燃油自动定价机制（APM）"
slug: "fuel-pricing-mechanism"
category: "energy"
subcategory: ["fuel"]
summary: "马来西亚的燃油零售价格通过自动定价机制（APM）每周设定。RON97 随市场浮动，而 RON95 和柴油则通过定向补贴部分受管制。"

tier: "3"
mode: "practical"
contentType: "faq"
sensitivity: "none"

answer: "自 2017 年 4 月起，马来西亚的燃油零售价格采用自动定价机制（APM）公式每周设定，该公式依据全球油价的变动来调整油站价格。不补贴的 RON97 每周随市场自由浮动，而受补贴的 RON95 在 BUDI95 计划下为合格国民维持在每升 RM1.99。半岛的柴油自 2024 年 6 月 10 日撤销补贴后已浮动，但沙巴、砂拉越和纳闽的柴油仍受管制。"
keyTakeaways:
  - "自 2017 年 4 月起，燃油价格通过 APM 公式每周设定。"
  - "价格公布定于星期三，这一时间表自 2021 年 3 月 3 日起生效。"
  - "RON97 完全浮动；其价格每周随全球市场变动。"
  - "受补贴的 RON95 维持在每升 RM1.99（BUDI95，每月上限 300 升），而一般市场价格则浮动。"
appliesTo: "驾车者、消费者，以及任何想了解油站价格为何每周变动的人。"

faq:
  - q: "新的燃油价格在星期几公布？"
    a: "价格公布定于星期三，这一每周时间表自 2021 年 3 月 3 日起生效。"
  - q: "RON95 的价格每周都会变动吗？"
    a: "受补贴的 RON95 在 BUDI95 计划下为合格国民维持在每升 RM1.99，但不补贴的一般市场价格则依据 APM 上下波动。"

lang: "zh"
sourceContentHash: "77fbc98bce7fd506"
masterLanguage: "ms"
translationStatus: "in-sync"

status: "published"
aiAssisted: true
reviewer: "ashton-tan"
reviewed: 2026-08-03
reviewDue: 2027-08-03
version: "0.2"
verificationNeeded:
  - "Hari pengumuman sebelum 3 Mac 2021 (Jumaat atau Khamis) — sumber sekunder (paultan.org) menyebut peralihan kepada Rabu tetapi tidak jelas hari asal; sahkan dengan siaran rasmi jika perlu."
  - "Tarikh mula tepat 'April 2017' bagi mekanisme mingguan APM — kini bersandar pada nota latar katalog OpenDOSM; sahkan dengan sumber dasar rasmi."
  - "Harga RON97 minggu sebelumnya (RM3.24) diperoleh secara aritmetik daripada pengurangan 8 sen yang dinyatakan dalam siaran MOF, bukan tersurat dalam siaran itu."
  - "Sahkan sama ada kadar BUDI95 RM1.99 dan harga pasaran am RON95 masih terkini pada tarikh penerbitan."
revisions:
  - version: "0.1"
    date: 2026-08-01
    change: "Initial AI draft."
    reviewer: null
  - version: "0.2"
    date: 2026-08-01
    change: "Correction pass: buang contoh RON97 RM3.21/tempoh 9-hari yang tidak bersumber, sahkan diesel 10 Jun 2024 (RM3.35) dan jadual 25-31 Dis 2025 dengan siaran MOF, tambah sumber MOF diesel + paultan hari Rabu."
    reviewer: null

updated: 2026-08-01
sources:
  - title: "Non-Subsidised RON95 Retail Price Set At RM2.60 Per Litre As BUDI95 Commences"
    url: "https://www.mof.gov.my/portal/en/news/press-release/non-subsidised-ron95-retail-price-set-at-rm2-60-per-litre-as-budi95-commences"
    publisher: "Kementerian Kewangan Malaysia (MOF)"
  - title: "Price of Petroleum & Diesel"
    url: "https://open.dosm.gov.my/data-catalogue/fuelprice"
    publisher: "OpenDOSM, Jabatan Perangkaan Malaysia"
  - title: "Government Reduces Non-Subsidised RON95, RON97 And Diesel Retail Prices From 25 December 2025 To 31 December 2025"
    url: "https://www.mof.gov.my/portal/en/news/press-release/retail-price/government-reduces-non-subsidised-ron95-ron97-and-diesel-retail-prices-from-25-december-2025-to-31-december-2025"
    publisher: "Kementerian Kewangan Malaysia (MOF)"
  - title: "Government Implements Targeted Diesel Subsidy For Peninsular Malaysia Effective 10 June 2024"
    url: "https://www.mof.gov.my/portal/en/news/press-release/government-implements-targeted-diesel-subsidy-for-peninsular-malaysia-effective-10-june-2024"
    publisher: "Kementerian Kewangan Malaysia (MOF)"
  - title: "March 2021 week two fuel price — weekly cycle now revised to Wednesday"
    url: "https://paultan.org/2021/03/03/march-2021-week-two-fuel-price-all-prices-unchanged-weekly-cycle-now-revised-thursday-to-wednesday/"
    publisher: "paultan.org"

entity: "Mekanisme Penetapan Harga Automatik (APM)"
relations:
  - { rel: "related-to", to: "budi95-fuel-subsidy" }
  - { rel: "related-to", to: "diesel-subsidy-rationalisation" }
related: ["budi95-fuel-subsidy", "diesel-subsidy-rationalisation"]
keywords: ["APM", "harga minyak", "RON97", "RON95", "BUDI95", "subsidi bahan api", "harga pam mingguan"]
---

每逢星期三，马来西亚油站的价格都可能变动——但并非所有类型的燃油都以相同方式变动。在告示牌上那些数字背后，有一套官方公式，称为自动定价机制，简称 APM。

## 什么是自动定价机制（APM）？

APM 是政府用来设定汽油和柴油零售价格的公式。根据 OpenDOSM（马来西亚统计局）燃油价格数据集的背景说明，自 2017 年 4 月起，燃油价格便以这套公式按周设定，使政府能够监测全球原油价格变动的影响，并相应调整油站价格。

这套公式将全球市场的石油产品成本以及既定的零售利润纳入考量，从而得出当周的公布价格。价格公布如今定于**星期三**，这一每周时间安排自 2021 年 3 月 3 日起生效。

## RON97 的价格如何每周设定？

RON97 不受补贴。其价格完全浮动——它随 APM 的计算结果每周上涨或下跌，没有上限，也没有政府补助。

例如，在 2025 年 12 月 25 日至 31 日期间，随着全球油价下跌，财政部将 RON97 的价格下调 8 仙至每升 RM3.16（较前一周的每升 RM3.24 下调）。这正是所谓的"自由浮动"——价格完全随市场变动，周复一周。

## 为什么 RON95 和柴油的变动方式不同？

这就是最大的区别所在。RON95 和柴油受定向补贴政策约束，因此合格国民所支付的价格即使在市场成本变动时仍维持不变。

| 燃油 | 价格设定方式 | 价格（2025 年 12 月 25–31 日） |
|---|---|---|
| RON97 | 依 APM 完全浮动 | RM3.16 |
| RON95（受补贴，BUDI95） | 受管制，维持不变 | RM1.99 |
| RON95（一般市场） | 依 APM 浮动 | RM2.56 |
| 柴油（半岛） | 撤销补贴后浮动 | RM2.94 |
| 柴油（沙巴、砂拉越、纳闽） | 受管制，维持不变 | RM2.15 |

在自 2025 年 9 月 30 日开始的 BUDI95 计划下，合格的马来西亚国民可以每升 RM1.99 购买 RON95，每升补贴 RM0.61，每月上限 300 升——每人每月价值高达 RM183。至于不受补贴的 RON95 一般市场价格，则在 2025 年 10 月定为每升 RM2.60，此后依 APM 上下波动（例如 2025 年 12 月 25–31 日那一周为 RM2.56）。

至于柴油，半岛地区自 2024 年 6 月 10 日起重新实施定向补贴。在此之前，受补贴柴油在全国以每升 RM2.15 出售；从该日起，政府将半岛不受补贴柴油的零售价格定为每升 RM3.35，而沙巴、砂拉越和纳闽的柴油则维持在每升 RM2.15。此后半岛的柴油依 APM 浮动（2025 年 12 月 25–31 日那一周为 RM2.94）。

## 新价格何时生效？

所公布的价格在整整一周内生效。举例来说，2025 年 12 月 25 日至 31 日的价格在该期间开始前公布，并在整周内维持不变，直到新的 APM 计算结果再次公布。

## 接下来

若要了解每周的最新价格，请查阅财政部的官方新闻稿或 OpenDOSM 上的石油与柴油价格数据集。如果你想了解谁有资格享受 RON95 每升 RM1.99 的价格，以及 300 升上限如何运作，请参阅有关 BUDI95 补贴计划的相关文章。