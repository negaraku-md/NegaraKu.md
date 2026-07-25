---
topicId: MY-LIV-0003
title: "App 背后：Grab 与马来西亚电召车行业如何受到监管"
slug: "e-hailing-grab"
category: "transport"
subcategory: ["public-transport"]
summary: "电召车服务对马来西亚乘客而言究竟是如何运作的、谁负责监管 Grab 与其竞争对手，以及 PSV 执照对 App 背后每一名司机的要求是什么。"
tier: "3"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "马来西亚的电召车服务建立在三项互相叠加的独立批准之上：App 营运商（Grab 及其他业者）持有中介业务执照，每辆车都拥有本身的电召车辆准证（EVP，E-Hailing Vehicle Permit），而每一名司机都持有由 JPJ 签发的 PSV 执照。这套制度依据 Land Public Transport Act 2010，在西马由 APAD 管理，在沙巴与砂拉越则由各州属自己的商业车辆牌照局管理。"
keyTakeaways:
  - "一趟行程只能透过 App 发生——电召车没有路边招手或固定德士站，这一点与计程收费的德士不同"
  - "一趟行程之上叠加三项各自独立的批准：营运商执照、车辆的 EVP，以及司机的 PSV 执照"
  - "APAD（Agensi Pengangkutan Awam Darat）在西马负责管理电召车；沙巴与砂拉越则各自设有本身的商业车辆牌照局"
  - "PSV 执照是由 JPJ 而非 APAD 签发的，申请人须通过体检、完成培训课程，并已持有正式驾驶执照超过一年"
  - "Grab 是最大的营运商，但 APAD 会维护并定期更新一份在市场上营运的其他持牌电召车公司名单"
appliesTo: "想了解自己所使用的服务是如何取得执照的乘客，以及正在查询 PSV 执照涉及哪些条件的准司机。"

verificationNeeded:
  - "本页并未列明车龄限制、准证有效期，或 APAD 持牌电召车公司当前的数量／到期日期，因为这些数字会随时间变动，且撰写本文时无法在 APAD 自身网页上以可核实的文本形式读取——请直接查阅 apad.gov.my 以取得当前名单与条件"
  - "某项特定司机条件（例如最低年龄）是否适用，应向 JPJ 或个别电召车营运商确认，因为所查阅的官方网页并未以可确认的形式列明"

lang: "zh"
masterLanguage: "en"
translationStatus: "pending"
sourceContentHash: null

status: "draft"
aiAssisted: true
reviewer: null
version: "0.1"
revisions:
  - version: "0.1"
    date: 2026-07-24
    change: "Initial draft."
    reviewer: null

updated: 2026-07-24
sources:
  - title: "Taxi and e-hailing"
    url: "https://www.apad.gov.my/index.php/en/services/taxi-and-ehailing"
    publisher: "Agensi Pengangkutan Awam Darat (APAD)"
  - title: "e-Hailing Services"
    url: "https://www.mot.gov.my/en/land/infrastructure/e-hailing-services"
    publisher: "Ministry of Transport Malaysia"
  - title: "Permohonan Lesen Vokasional (GDL, PSV Dan Konduktor) — Vocational Licence Application (GDL, PSV and Conductor)"
    url: "https://www.jpj.gov.my/en/jpj-service-information/vocational-license-application-gdl-psv-and-conductor/"
    publisher: "Jabatan Pengangkutan Jalan (JPJ)"
  - title: "Application for PSV License (E-hailing driver)"
    url: "https://www.jpj.my/misc/application_for_psv_license.htm"
    publisher: "Jabatan Pengangkutan Jalan (JPJ)"
  - title: "Land Public Transport Act 2010 (Act 715)"
    url: "https://lom.agc.gov.my/act-detail.php?type=principal&act=715"
    publisher: "Attorney General's Chambers (AGC) — Laws of Malaysia Online"
  - title: "Lembaga Pelesenan Kenderaan Perdagangan (LPKP) Sabah"
    url: "https://sabah.gov.my/directory/lpkp"
    publisher: "Sabah State Government"

entity: "E-hailing"
relations:
  - { rel: "administered-by", to: "apad" }
  - { rel: "requires", to: "psv-licence-malaysia" }
  - { rel: "related-to", to: "jpj" }
related: []
keywords: ["e-hailing Malaysia", "Grab regulation Malaysia", "PSV licence e-hailing", "APAD e-hailing vehicle permit", "how does Grab work Malaysia", "e-hailing driver licence Malaysia"]
---

在吉隆坡打开 Grab、Bolt 或 inDrive，点一下「预订」。那一刻感觉不出任何监管的痕迹。
但随后抵达的这趟行程，其实建立在三张各自独立的执照之上——这些执照必须先存在，
你的司机才能合法接下你的这趟车资——而它们没有一张是单独属于这个 App 的。

## 一趟行程实际上是如何发生的

电召车有一项决定性特征，使它有别于计程收费的德士：**没有路边招手，也没有德士
站。**每一趟行程都从 App 内部开始——你叫车，App 把你与附近的司机伙伴配对，车资
与路线在车抵达之前就已确定。司机并非营运商的雇员；他们是使用该平台的伙伴，驾驶
自己的车辆，或是公司注册的车辆。

这正是电召车需要属于自己的监管类别、而不是干脆并入德士法规的原因：德士执照涵盖
的是可以在路边被拦下的车辆，而电召车行程依其定义就不可能被拦下。

## 究竟是谁在监管这件事

电召车受 **Land Public Transport Act 2010 (Act 715)** 管辖，这与管辖巴士、德士
及其他陆路公共交通的法规是同一部法令。在**西马**，日常发照工作由隶属交通部的
**陆路公共交通局（APAD，Agensi Pengangkutan Awam Darat）**执行。在**沙巴与砂拉越**，
相应的职能则由各州属自己的**商业车辆牌照局（LPKP，Lembaga Pelesenan Kenderaan
Perdagangan）**负责，而非直接由 APAD 负责。

三项各自独立的批准叠加在一趟行程之上：

| 层级 | 持有者 | 涵盖内容 |
| --- | --- | --- |
| 营运商执照 | App 公司（Grab 及其他电召车公司） | 经营「中介业务」、将乘客与司机配对的许可 |
| 电召车辆准证（EVP） | 该车辆 | 允许该辆特定私家车用于电召车行程的许可 |
| PSV 执照 | 司机 | 驾驶载送付费乘客的公共服务车辆的个人许可 |

只要三者之中缺了任何一项，这趟行程就是在持牌制度之外运作，无论另外两项是否
齐全。

## PSV 执照：司机实际上需要什么

**PSV（Public Service Vehicle，公共服务车辆）执照**并非由电召车公司或 APAD 签
发——它来自**JPJ（Jabatan Pengangkutan Jalan）**，也就是签发一般驾驶执照的同一个
部门。它是叠加在司机现有驾驶执照之上、另外独立的执照，而不是取代它。

申请时，JPJ 要求申请人已经持有**有效期超过一年的正式驾驶执照（CDL，Competent
Driving Licence）**，并且在参加理论与实践考试之前，已完成所需的体检、理论课程
与实践培训。申请须在 JPJ 办事处提交，连同已填妥的体检表格（JPJL8A）、培训证书
（JPJL2C）、护照尺寸照片，以及适用的申请费。

由于 JPJ 是把 PSV 执照签发给司机个人，这张执照跟随司机本人，而不属于 Grab 或
任何单一 App——原则上，持有该执照的司机可以为不止一家营运商开车，惟须符合各
营运商本身的加入条件。

## Grab 与其他选择

就知名度而言，Grab 是马来西亚最大的电召车营运商，但它并非 APAD 唯一持牌的业者。
APAD 会在其官方网站上发布并定期更新一份现行持牌电召车公司名单，而市场上也曾包括
Bolt、inDrive、Maxim 与 AirAsia Ride 等营运商，以及规模较小、更为专门的应用程式。
哪些营运商持有现行执照、期限多长，会随时间变动——权威的查核依据是 APAD 自己发布
的名单，而不是评论网站或应用程式商店的排行。

## 常见错误

- **以为有效的驾驶执照就足够。**CDL 让你可以开车；只有另外独立的 PSV 执照才能让你载送付费乘客。
- **把 App 的批准当成全部事实。**营运商持牌，不代表你眼前这辆特定的车或这名司机就受到涵盖——EVP 与 PSV 执照是分别针对车辆与个人的独立批准。
- **以为 APAD 涵盖全国。**沙巴与砂拉越各自运作自己的商业车辆牌照局，独立于 APAD 在西马的职权范围之外。
- **把营运商执照与一般公司注册混为一谈。**「中介业务执照」是 Act 715 之下另一项独立的陆路运输批准，叠加在标准公司注册之上。

## 下一步

如果你想查核某辆车或某名司机是否持有适当执照，应从 APAD 自己发布的现行持牌电召
车公司名单入手，而不是 App 的行销页面。如果你是司机，PSV 执照申请是从 JPJ 办事
处开始，而不是从电召车营运商开始——先把这张执照办妥，之后平台本身的加入审核才会
变得相关。
