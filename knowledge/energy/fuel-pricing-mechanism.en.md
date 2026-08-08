---
topicId: MY-ENE-0005
title: "How Malaysia Sets Weekly Fuel Prices"
seoTitle: "Malaysia's Automatic Pricing Mechanism (APM) for Fuel"
slug: "fuel-pricing-mechanism"
category: "energy"
subcategory: ["fuel"]
summary: "Malaysia's retail fuel prices are set weekly through the Automatic Pricing Mechanism (APM). RON97 floats with the market, while RON95 and diesel are partly controlled through targeted subsidies."

tier: "3"
mode: "practical"
contentType: "faq"
sensitivity: "none"

answer: "Since April 2017, retail fuel prices in Malaysia have been set weekly using the Automatic Pricing Mechanism (APM) formula, which adjusts pump prices in line with movements in global oil prices. Unsubsidised RON97 floats freely with the market each week, while subsidised RON95 is held at RM1.99 per litre for eligible citizens under BUDI95. Diesel in Peninsular Malaysia has floated since the subsidy was withdrawn on 10 June 2024, but diesel in Sabah, Sarawak and Labuan remains controlled."
keyTakeaways:
  - "Fuel prices have been set weekly through the APM formula since April 2017."
  - "Price announcements are made on Wednesdays, a schedule in force since 3 March 2021."
  - "RON97 floats fully; its price changes every week in line with the global market."
  - "Subsidised RON95 is held at RM1.99/litre (BUDI95, capped at 300 litres a month) while the general market price floats."
appliesTo: "Drivers, consumers, and anyone who wants to understand why pump prices change every week."

faq:
  - q: "On what day are new fuel prices announced?"
    a: "Announcements are made on Wednesdays, a weekly schedule in force since 3 March 2021."
  - q: "Does the RON95 price change every week?"
    a: "The subsidised RON95 price is held at RM1.99 per litre for eligible citizens under BUDI95, but the unsubsidised general market price fluctuates in line with the APM."

lang: "en"
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

Every Wednesday, prices at Malaysia's fuel pumps can change — but not every type of fuel moves in the same way. Behind the numbers on that signboard lies an official formula called the Automatic Pricing Mechanism, or APM.

## What is the Automatic Pricing Mechanism (APM)?

The APM is the formula the government uses to set the retail prices of petrol and diesel. According to the background note for OpenDOSM's fuel price dataset (Department of Statistics Malaysia), fuel prices have been set on a weekly basis using this formula since April 2017, allowing the government to monitor the effect of changes in global crude oil prices and adjust pump prices accordingly.

The formula takes into account the cost of oil products on the world market as well as a set retail margin, then produces the posted per-litre price for the week concerned. Price announcements are now made on **Wednesdays**, a weekly schedule that has been in force since 3 March 2021.

## How is the RON97 price set each week?

RON97 is unsubsidised. Its price floats fully — it rises or falls each week in line with the result of the APM calculation, with no ceiling or government support.

For example, for the period from 25 to 31 December 2025, the Ministry of Finance lowered the RON97 price by 8 sen to RM3.16 per litre (from RM3.24 per litre the previous week) as global oil prices fell. This is what "free float" means — the price moves entirely with the market, week after week.

## Why don't RON95 and diesel move the same way?

This is where the big difference lies. RON95 and diesel are subject to a targeted subsidy policy, so the price paid by eligible citizens is held steady even as market costs change.

| Fuel | How the price is set | Price (25–31 Dec 2025) |
|---|---|---|
| RON97 | Full float under the APM | RM3.16 |
| RON95 (subsidised, BUDI95) | Controlled, held steady | RM1.99 |
| RON95 (general market) | Floats under the APM | RM2.56 |
| Diesel (Peninsular Malaysia) | Floats since the subsidy was withdrawn | RM2.94 |
| Diesel (Sabah, Sarawak, Labuan) | Controlled, held steady | RM2.15 |

Under the BUDI95 programme that began on 30 September 2025, eligible Malaysians can buy RON95 at RM1.99 per litre, with a subsidy of RM0.61 per litre up to a cap of 300 litres a month — worth up to RM183 a month per person. The unsubsidised general market price for RON95, meanwhile, was set at RM2.60 per litre for October 2025 and fluctuates under the APM after that (for example RM2.56 for the week of 25–31 December 2025).

For diesel, the subsidy was re-targeted in Peninsular Malaysia starting 10 June 2024. Before that, subsidised diesel was sold at RM2.15 per litre nationwide; from that date, the government set the unsubsidised diesel retail price in Peninsular Malaysia at RM3.35 per litre, while diesel in Sabah, Sarawak and Labuan remained at RM2.15 per litre. Since then, diesel in Peninsular Malaysia has floated under the APM (RM2.94 for the week of 25–31 December 2025).

## When do the new prices take effect?

The announced prices take effect for a full week. For example, the rates for 25 to 31 December 2025 were announced before the period began and held steady throughout that week before a new APM calculation was announced again.

## What's next

To find the latest prices each week, check the Ministry of Finance's official press releases or the Price of Petroleum & Diesel dataset on OpenDOSM. If you want to understand who is eligible for the RM1.99 RON95 rate and how the 300-litre cap works, see the related article on the BUDI95 subsidy programme.
