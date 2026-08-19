---
topicId: MY-BIZ-0055
title: "在马来西亚收款：什么时候你需要国家银行批准"
seoTitle: "马来西亚支付监管：何时需要 BNM 批准"
slug: "payment-regulation-malaysia"
category: "business"
subcategory: ["banking-finance"]
summary: "单纯收款的企业，与依 Financial Services Act 2013 需要批准的企业，两者之间的那条界线——包括 2025 年 1 月生效的有限用途电子货币豁免。"

tier: "3"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "销售货物并透过支付网关收取卡片或电子钱包付款，不需要国家银行批准——授权由该网关或收单行持有。当你营运支付系统、发行指定支付工具（例如签账卡、信用卡、扣账卡或电子货币），或提供商户收单服务时，你就跨进了受管制的领域。前两项需要 Financial Services Act 2013 s.11 之下的批准；第三项需要 s.17 之下的注册。"
keyTakeaways:
  - "FSA 2013 Schedule 1 Part 1 Division 1 列出需要批准的业务：营运支付系统与发行指定支付工具"
  - "未获批准而经营须批准业务，依 s.8(3) 可处最高 10 年监禁或 RM50 million 罚款"
  - "商户收单服务落在 Schedule 1 Part 2，属 s.17 之下的须注册业务，依 s.17(3) 最高 8 年或 RM25 million"
  - "指定支付工具为签账卡、信用卡、扣账卡与电子货币，由 P.U.(A) 202/2013 订明，并经 P.U.(A) 82/2016 修订"
  - "一名获批准的标准电子货币发行人，须有最低资本基金 RM1 million 或未偿还电子货币负债的 8%，以较高者为准"
  - "P.U.(A) 463/2024 自 2025 年 1 月 2 日起生效，把四类有限用途电子货币完全豁免于批准要求之外"
  - "第 1 类闭环豁免把钱包上限定为每名用户 RM500，并把未偿还负债与每月平均交易值均定为每名发行人 RM1 million"
appliesTo: "正在打造电子钱包、储值产品、忠诚与奖励计划、持有资金的市集平台的创办人，以及任何被告知需要支付执照的人。"

verificationNeeded:
  - "某个特定的市集或托管式资金流，是否构成 Schedule 1 之下的营运支付系统，取决于具体事实；BNM 并未公布任何一般性的边界指引，该立场应向该行确认"
  - "汇款与跨境资金转移落在 Money Services Business Act 2011 之下，那是另一套本文并未涵盖的发照制度"
  - "BNM 自己关于支付系统的 Gazette Order 页面并未列出修订须注册业务要求的 P.U.(A) 468/2024——请把该索引视为不完整，并查阅 AGC 的宪报门户"

lang: "zh"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "312edd8d349c774c"

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
  - title: "Financial Services Act 2013 (Act 758)"
    url: "https://www.investmalaysia.gov.my/media/xrnl0vfp/financial-services-act-2013.pdf"
    publisher: "Attorney General's Chambers"
  - title: "Financial Services (Limited Purpose Electronic Money) (Exemption) Order 2024, P.U.(A) 463/2024"
    url: "https://lom.agc.gov.my/ilims/upload/portal/akta/outputp/2596772/PUA%20463.pdf"
    publisher: "Attorney General's Chambers"
    date: "2024-12-30"
  - title: "Financial Services (Minimum Amount of Capital Funds) (Approved Person) (Amendment) Order 2022, P.U.(A) 403/2022"
    url: "https://lom.agc.gov.my/ilims/upload/portal/akta/outputp/1754230/P.U.%20(A)%20403_2022%20(Perintah%20Perkhidmatan%20Kewangan%20(Amaun%20Minimum%20Dana%20Modal).pdf"
    publisher: "Attorney General's Chambers"
    date: "2022-12-29"
  - title: "Financial Services (Designated Payment Instruments) Order 2013, P.U.(A) 202/2013"
    url: "https://lom.agc.gov.my/ilims/upload/portal/akta/outputp/pua_20130629_P.U.%20(A)%20202.pdf"
    publisher: "Attorney General's Chambers"
  - title: "Payment Systems — Gazette Orders"
    url: "https://www.bnm.gov.my/gazette-order"
    publisher: "Bank Negara Malaysia"

entity: "Payment services regulation in Malaysia"
relations:
  - { rel: "administered-by", to: "bank-negara-malaysia" }
  - { rel: "governs", to: "financial-services-act-2013" }
related: ["foreign-exchange-policy-malaysia", "online-business-licence-malaysia"]
keywords: ["payment licence malaysia", "e-money licence malaysia", "BNM approval payment", "merchant acquiring malaysia", "limited purpose e-money", "FSA 2013 schedule 1"]
---

一名创办人加了一个电子钱包，好让客户充值并更快付款。有人提起 BNM 执照，这项功能就
在一场会议里死掉了。另一名创办人做了同样的东西，却安然无事。分别在于一份大多数人
从未读过的宪报命令。

## 预设情况：你不受管制

如果你销售货物或服务，并透过支付网关接受卡片、FPX 或电子钱包，**持有授权的是该网关
或收单银行，不是你。** 你是商户。边界从你持有*别人的钱*、而不只是收到款项时开始。

## 究竟什么需要批准

**Financial Services Act 2013** 第 8(1)(b) 条要求，任何属于 **Schedule 1 Part 1
Division 1** 的业务，须获 BNM 依 s.11 批准。就支付而言那是两件事：**营运支付系统**
——使银行账户之间得以资金转移，或支付工具网络的营运——以及**发行指定支付工具**。
**s.8(3)** 之下的罚则是最高 **10 年**监禁、**RM50 million** 罚款，或两者兼施。

**指定支付工具**由 P.U.(A) 202/2013 订明并经 P.U.(A) 82/2016 修订：**签账卡、信用卡、
扣账卡与电子货币**。依 s.2，电子货币以电子方式储存资金，以换取已付予发行人的款项，
并可用于向任何人付款。陷阱就在这里：**一个可充值的电子钱包就是电子货币**。

**商户收单服务**落在 **Schedule 1 Part 2**，属 s.17 之下的*须注册*业务，罚则最高
**8 年**或 **RM25 million**。P.U.(A) 468/2024 现在要求申请人须为依 Companies Act
2016 注册成立的公司——而 BNM 的 Gazette Order 页面漏掉了这份文书。

## 资本数字

P.U.(A) 204/2013 的 Schedule 1，经 **P.U.(A) 403/2022** 替换，自 2023 年 12 月 30 日
起生效，为标准发行人订下最低资本基金 **RM1,000,000 或未偿还电子货币负债的 8%，以
较高者为准**——而*合资格*发行人则为 **RM5,000,000 或 8%**。

**合资格**发行人，指 BNM 依第 2A 段归类的发行人：在连续六个月内拥有 **500,000 名
活跃用户**，或在马来西亚电子货币交易量、交易值或未偿还负债中占 **5% 的市场份额**。

## 那份改变答案的豁免令

这里就是那份几乎没有人引述的法律文书。依 s.263 订立、并**自 2025 年 1 月 2 日起
生效**的 **Financial Services (Limited Purpose Electronic Money) (Exemption) Order
2024**，即 P.U.(A) 463/2024，把四类有限用途电子货币完全豁免于 **s.8(1)(b) 与 s.11**
之外。

| 类别 | 范围 |
| --- | --- |
| 1 — 货物或服务 | 只能在马来西亚境内**单一场所或单一品牌之下的单一连锁商号**使用 |
| 2 — 奖励 | 由某人依与发行人的安排出资，只能用于向该出资人以外的人消费，并须分开持有 |
| 3 — 退款 | 用于把资金退还用户，由发行人自行退还，或依与他人的安排代该人退还 |
| 4 — 电讯商数码货品 | 由电讯商发行，用于透过电讯设备消费的低价值数码货品（音乐、视频、软件、游戏、铃声） |

第 1 类正是多数创办人所需要的闭环情形，而它带着硬性数字：**每名用户的钱包上限不超过
RM500**，以及在某一年内，每日平均未偿还负债**与**每月平均交易值，各自**不超过每名
发行人 RM1,000,000**。

该豁免是附条件的。每一个类别都要求遵守 **PDPA 2010**、作出**清晰而显眼的披露**说明
该业务不受获批准发行人要求的规限、设有**投诉与争议解决机制**，以及提供把储值资金
转入用户银行账户的设施。第 1 类另加两项年度呈报：一份符合各项标准的通知与承诺书，
以及关于负债、用户与交易量及交易值的**经外部审计的统计数据**。

它会在条件失守、因欺诈相关罪行被定罪，或 BNM 怀疑有此类罪行时**终止**——在第一种
与第三种情形下，会有 30 天通知期以陈述缘由。

## 常见错误

**以为储值因为金额小所以没事。** 它没事是因为 P.U.(A) 463/2024，而且只在它的类别与
限额之内。一旦每名用户超过 RM500，或把钱包开放给你自家品牌以外的商户，第 1 类就不再
适用。

**把它叫做「积分」。** 定义取决于是否储存了已付给你的资金、以及是否可以拿去消费。
标签无关紧要。

**把批准与注册混淆。** 支付系统与电子货币需要 s.11 **批准**；商户收单需要 s.17
**注册**。

**以为汇款也涵盖在此。** 跨境转账依 Money Services Business Act 2011 另行发照。

## 下一步

先回答一个问题：你的产品是否持有客户资金，而这些资金日后可以拿去向别人消费？如果
不是，你就是商户，执照由支付网关承担。如果是，就逐一走过 P.U.(A) 463/2024 的各个
类别，拿 RM500 与 RM1 million 这两道门槛去对照你的预测，而不是今天的数字。在豁免
之外，路径是依 s.9 提出申请。若答案不清楚——在买方与卖方之间持有资金的市集平台，
是常见的难题——请在动手建之前，把事实摆到 BNM 面前。
