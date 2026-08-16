---
topicId: MY-ENV-0001
title: "空气污染指数（IPU）：马来西亚如何衡量空气质量"
seoTitle: "马来西亚空气污染指数（IPU）：读数与类别"
slug: "air-pollutant-index-api-malaysia"
category: "environment"
subcategory: ["udara"]
summary: "烟霾期间你所看到的 IPU 读数，是从六种污染物中提炼出来的单一数字。本指南说明它如何计算、产生它的监测站网络，以及每个类别——从良好到危险——对你健康的含义。"

tier: "3"
mode: "practical"
contentType: "faq"
sensitivity: "health"

answer: "空气污染指数（马来文 Indeks Pencemar Udara, IPU；英文 Air Pollutant Index, API）是由环境局（Jabatan Alam Sekitar, JAS）发布的一个从 0 起算的数字，用以表示某地区的空气质量状况。它由六种污染物计算得出——SO2、NO2、CO、O3、PM10 和 PM2.5——每一种都换算成一个「子指数」，而当时该小时的最高子指数便成为 IPU 读数。该数值随后映射到六个健康类别，从良好（0–50）到危险（超过 300）。"
keyTakeaways:
  - "IPU 由六种污染物计算得出；当时该小时最高的子指数成为官方 IPU 读数。"
  - "PM2.5（细颗粒物）自 2017 年起纳入 IPU 计算；细颗粒物通常是烟霾期间的主导污染物。"
  - "六个类别：良好（0–50）、中等（51–100）、不健康（101–200）、非常不健康（201–300）、危险（>300）和紧急（>500）。"
  - "污染物浓度由全马 52 座自动监测站（CAQM）和 14 座手动监测站测量。"
  - "IPU 的计算以美国环保署（USEPA）采用的污染标准指数（Pollution Standard Index, PSI）为基础。"
appliesTo: "父母、教师、运动员、年长者、孕妇、儿童、患有心脏或肺部并发症者，以及任何计划进行户外活动的人——尤其是在烟霾季节期间。"

faq:
  - q: "IPU 读数 100 是否意味着空气「污染了一半」？"
    a: "不是。IPU 不是百分比。读数 0–50 表示良好，51–100 表示中等——两者都无需限制户外活动。读数开始令人担忧是在超过 100（不健康）之时，而超过 300 则算是危险。"
  - q: "哪种污染物最常决定 IPU 读数？"
    a: "细颗粒物——PM10 和 PM2.5——在大多数时候都是主导污染物，尤其是在马来西亚发生烟霾时。此时 IPU 读数通常由细颗粒物子指数推动。"
  - q: "读数达到多少时我应该避免户外活动？"
    a: "在 101–200（不健康）时，敏感群体——年长者、孕妇、儿童以及患有心脏或肺部并发症者——应限制户外活动。在超过 300（危险）时，年长者和高风险人群被禁止户外活动，一般民众也被建议避免户外活动。"

lang: "zh"
sourceContentHash: "861261e09949f3b0"
masterLanguage: "ms"
translationStatus: "in-sync"

status: "published"
aiAssisted: true
reviewer: "ashton-tan"
reviewed: 2026-08-03
reviewDue: 2027-08-03
version: "01.00"
verificationNeeded:
  - "Asma tidak dinamakan secara khusus dalam kedua-dua PDF JAS yang dirujuk (sumber menyebut warga tua, wanita hamil, kanak-kanak dan komplikasi jantung/paru-paru). Rujukan asma di sini ialah inferens editorial sebagai keadaan paru-paru — sahkan dengan sumber nasihat kesihatan rasmi JAS."
  - "Band Kecemasan (>500) tidak diberi warna berasingan pada tolok rasmi JAS (warna hanya ditakrifkan sehingga Merbahaya). Sahkan sama ada satu warna rasmi wujud untuk band ini sebelum menetapkannya."revisions:
  - version: "01.00"
    date: 2026-07-28
    change: "Approved and published."
    reviewer: null

updated: 2026-07-28
sources:
  - title: "Air Pollutant Index Management System (APIMS) — dataset"
    url: "https://radars.mosti.gov.my/dataset/air-pollutant-index-management-system-apims/"
    publisher: "Kementerian Sains, Teknologi dan Inovasi (MOSTI) — RADARS open-data catalogue (gov.my)"
  - title: "Pengiraan Indeks Pencemar Udara (IPU) / Air Pollutant Index (API) Calculation"
    url: "https://www.doe.gov.my/wp-content/uploads/2021/09/API_Calculation.pdf"
    publisher: "Jabatan Alam Sekitar (Department of Environment)"
  - title: "General Information of Air Pollutant Index (API)"
    url: "https://www.doe.gov.my/wp-content/uploads/2021/10/General-Information-of-Air-Pollutant-Index.pdf"
    publisher: "Jabatan Alam Sekitar (Department of Environment)"
  - title: "Air Pollution Index — What to do when API reach certain levels"
    url: "https://www.doe.gov.my/en/air-pollution-index/"
    publisher: "Jabatan Alam Sekitar (Department of Environment)"

entity: "Indeks Pencemar Udara (IPU)"
relations:
  - { rel: "administered-by", to: "jabatan-alam-sekitar" }
  - { rel: "related-to", to: "jerebu-di-malaysia" }
related: []
keywords: ["IPU", "API", "indeks pencemar udara", "kualiti udara", "jerebu", "PM2.5", "PM10", "Jabatan Alam Sekitar"]
---

当烟霾变浓、学校开始询问是否该取消早会时，通常由一个单一的数字来定夺——IPU 读数。这个数字看似简单，但其背后却有六种被持续测量的污染物，以及一道将它们全部过滤成一个数值的公式。

## IPU 实际测量的是什么？

空气污染指数（IPU）是某地区空气质量状况的指标。环境局（JAS）根据六种主要污染物来计算它，由于每一种污染物的安全暴露限值各不相同，各自按不同的时段来取平均：

- **二氧化硫（SO2）**——1 小时平均
- **二氧化氮（NO2）**——1 小时平均
- **一氧化碳（CO）**——8 小时平均
- **臭氧（O3）**——8 小时及 1 小时平均
- **细颗粒物 PM10**——24 小时平均
- **细颗粒物 PM2.5**——24 小时平均，自 2017 年起纳入计算

## 六种污染物如何变成一个数字？

每种污染物的平均浓度通过专门的数学公式加以标准化，产生一个称为**子指数**的无单位数值。每种污染物产生它自己的子指数，而**当时该小时最高的子指数被取为 IPU 读数**。这个方法以在国际上被美国环境保护署（USEPA）采用的*污染标准指数*（Pollution Standard Index, PSI）为基础。

例如，对于处于最佳区间（0–50）的 PM2.5，其公式为 IPU = 4.1667 × X，其中 X 是 PM2.5 的 24 小时平均值（单位 µg/m³）。更高的浓度则使用不同的公式区段。在实践中，细颗粒物通常是主导污染物——所以在烟霾期间，IPU 读数几乎总是由 PM10 或 PM2.5 推动。

## 每个类别对你的健康意味着什么？

IPU 被映射到六个带颜色的类别。这是对日常决策最重要的部分：

| IPU | 状态 | 颜色 | 健康建议 |
|-----|--------|-------|-------------------|
| 0–50 | 良好 | 蓝色 | 无需限制户外活动；保持健康生活方式 |
| 51–100 | 中等 | 绿色 | 无需限制户外活动；保持健康生活方式 |
| 101–200 | 不健康 | 黄色 | 敏感群体（年长者、孕妇、儿童、患有心脏／肺部并发症者）限制户外活动；一般民众减少剧烈活动 |
| 201–300 | 非常不健康 | 橙色 | 年长者和高风险人群留在室内并减少体力活动；有健康并发症者就医 |
| >300 | 危险 | 红色 | 年长者和高风险人群禁止户外活动；一般民众避免户外活动 |
| >500 | 紧急 | —（官方仪表未定义单独颜色） | 遵从国家安全理事会的指示及大众媒体的公告 |

## 这些数据从何而来？

读数并非取自单一地点。JAS 运营着全国空气质量监测网络，涵盖 **52 座自动监测站**——持续空气质量监测站（*Continuous Air Quality Monitoring*, CAQM）——以及使用高容量采样器（HVS）的 **14 座手动监测站**。这些监测站被设置在战略地点，涵盖遍布半岛、沙巴和砂拉越的工业区、城市、郊区和乡村地区，使读数能代表居民真正呼吸的空气。

## 接下来该怎么做

在烟霾期间计划户外活动之前，请通过 JAS 官方在线监测系统查看你所在地区最新的官方 IPU 读数，而不是在社交媒体上无源流传的数字。如果你属于敏感群体——年长者、孕妇、儿童，或患有心脏或肺部并发症者（包括哮喘等状况）——请在读数超过 100 时就开始警惕，而不是等到它达到危险级别。要了解这些读数飙升的原因，请查看关于马来西亚烟霾和环境局角色的相关页面。
