---
topicId: MY-CS-0017
title: "抵押登记册：错过 30 天，担保就无效"
seoTitle: "马来西亚抵押登记册：s.352 与 s.362 的义务"
slug: "register-of-charges"
category: "company-secretary"
subcategory: ["statutory-registers"]
summary: "依 s.352 向 SSM 登记抵押的 30 天期限、依 s.362 保存内部抵押登记册的另一项义务，以及逾期登记为何会使担保对清盘人无效。"

tier: "2"
mode: "practical"
contentType: "guide"

answer: "公司设立可登记抵押后，须依 Companies Act 2016 s.352(1) 在 30 天内向 SSM 提交详情陈述书。一旦错过，s.352(2) 会使该抵押对清盘人与任何债权人无效，而受担保的款项即时到期应付。另外，s.362 要求公司在其注册办事处保存自己的抵押登记册与抵押文书。"
keyTakeaways:
  - "s.352(1) 给的是自抵押设立起 30 天，向 SSM 提交详情"
  - "s.352(2) 使未登记的抵押对清盘人与任何债权人无效"
  - "s.362 是另一项内部义务——在注册办事处保存抵押登记册与文书"
  - "s.360 要求清偿或解除在 14 天内提交，比登记的时钟更短"
  - "s.353 列出十一类可登记抵押，包括账面债务与浮动抵押"
  - "凡文书在马来西亚境外签立，s.363 把期限延长七天"
appliesTo: "为公司资产设立或解除担保的马来西亚公司的公司秘书、董事与财务人员。"

faq:
  - q: "我有多久时间向 SSM 登记一项抵押？"
    a: "依 Companies Act 2016 s.352(1)，自抵押设立起三十天。凡文书在马来西亚境外签立或作成，s.363 把期限延长七天，或延长至注册官所容许的更长期间。就取得时已附带现有抵押的财产而言，s.356(1) 给的是自取得完成起 30 天。"
  - q: "如果我们逾期登记抵押，实际上会发生什么？"
    a: "依 s.352(2)，就公司财产或业务所设定的任何担保而言，该抵押对清盘人与公司的任何债权人无效。s.352(3) 接着使受担保的款项即时到期应付。债务仍在；担保没了。唯一的回头路是依 s.361 取得法庭命令。"
  - q: "内部抵押登记册跟 SSM 的登记册是同一份吗？"
    a: "不是。s.357 要求注册官保存一份所有已提交抵押的登记册。s.362(3) 另行要求每家公司在其注册办事处保存自己的抵押登记册，记录所抵押财产的简短描述、抵押的金额，以及有权享有该抵押者的姓名。"
  - q: "哪些抵押必须登记？"
    a: "s.353 列出十一类，包括为担保债权证发行而设的抵押、对土地或土地上任何权益的抵押、对账面债务的抵押、对业务或财产的浮动抵押、对船舶或航空器的抵押、对知识产权的抵押，以及对存款账户贷方余额的抵押。"
  - q: "谁可以查阅公司的抵押登记册？"
    a: "依 s.362(4)，公司的任何债权人或成员可付费 RM5 查阅文书与登记册；任何其他人则须支付公司所订、每次查阅不超过 RM10 的费用。依 s.362(5)，任何人均可申请抵押文书的副本，并须在三天内获得提供。"
  - q: "贷款还清后我们要提交什么？"
    a: "依 s.360(1) 提交清偿或解除陈述书，须在付款、清偿、解除或终止起十四天内提交注册官，并依 s.360(2) 附上充分证据。这比当初登记抵押所容许的 30 天更短。"

verificationNeeded:
  - "Confirm the current SSM prescribed fee for lodging a statement of particulars of charge under s.352(1) against the Companies Regulations 2017 fee schedule"
  - "Confirm the current SSM late lodgement fee scale for charge-related lodgements against the prevailing SSM practice directive on late lodgement penalties"

obligations:
  - what: "向注册官提交抵押详情陈述书"
    trigger: "change"
    withinDays: 30
    due: "within 30 days from the creation of the charge"
    authority: "SSM"
    statute: "Companies Act 2016, s.352(1)"
    consequence: "Charge void against the liquidator and any creditor under s.352(2); secured money immediately payable under s.352(3); fine not exceeding RM50,000 and a further fine not exceeding RM500 per day"
  - what: "提交公司所取得财产上现存抵押的详情"
    trigger: "change"
    withinDays: 30
    due: "within 30 days from the date the acquisition is completed"
    authority: "SSM"
    statute: "Companies Act 2016, s.356(1)"
    consequence: "Fine not exceeding RM50,000 and a further fine not exceeding RM500 per day for a continuing offence"
  - what: "提交已登记抵押的清偿、解除或终止详情"
    trigger: "change"
    withinDays: 14
    due: "within 14 days from the payment, satisfaction, release or cessation"
    authority: "SSM"
    statute: "Companies Act 2016, s.360(1)"
    consequence: "SSM register continues to show the charge as outstanding; default penalty under s.588(2) applies"
  - what: "提交已登记抵押的转让或变更通知"
    trigger: "change"
    withinDays: 30
    due: "within 30 days of becoming the new holder of the charge or of the variation occurring"
    authority: "SSM"
    statute: "Companies Act 2016, s.359(1) and s.359(2)"
    consequence: "Fine not exceeding RM50,000 and a further fine not exceeding RM500 per day for a continuing offence"
  - what: "提供所申请的抵押文书副本"
    trigger: "change"
    withinDays: 3
    due: "within three days of the application"
    authority: "Company (to the applicant)"
    statute: "Companies Act 2016, s.362(5)"
    consequence: "Fine not exceeding RM50,000 and a further fine not exceeding RM500 per day for a continuing offence"

lang: "zh"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "4de1f26e8ce1d0bb"

status: "reviewed"
aiAssisted: true
reviewer: "Ashton Tan"
reviewed: "2026-07-25"
reviewDue: 2027-07-22
version: "0.1"
revisions:
  - version: "0.1"
    date: 2026-07-20
    change: "Initial draft, split out of the statutory-registers hub."
    reviewer: null
sensitivity: "none"

updated: 2026-07-20
sources:
  - title: "Companies Act 2016 (Act 777), reprint as at 1 August 2022"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "SSM"
    date: "2022-08-01"
  - title: "Companies Act 2016 — legal framework"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Companies-Act-2016.aspx"
    publisher: "SSM"
  - title: "Companies Commission of Malaysia (SSM)"
    url: "https://www.ssm.com.my/"
    publisher: "SSM"

entity: "Register of Charges"
relations:
  - { rel: "governs", to: "companies-act-2016" }
  - { rel: "administered-by", to: "ssm" }
  - { rel: "part-of", to: "statutory-registers" }
  - { rel: "related-to", to: "registered-office" }
  - { rel: "related-to", to: "close-a-company" }
related: ["statutory-registers", "registered-office", "close-a-company", "annual-return"]
keywords: ["register of charges Malaysia", "section 352 Companies Act 2016", "charge registration 30 days SSM", "unregistered charge void liquidator", "daftar gadaian syarikat", "section 362 register of charges"]
---

Companies Act 2016 的所有期限当中，s.352 是后果最锋利的一条，也是公司秘书类
博客最常跳过的一条——理由通常是：抵押是银行的事，或是律师的事。

不是的。s.352(1) 把提交义务放在**公司**身上。而 s.352(2) 做了 Act 中其他任何
呈报期限都不会做的事：它摧毁担保。不是罚款。不是复合罚单。该抵押对清盘人与
每一名债权人都变为无效，而依 s.352(3)，受担保的款项即时到期应付。放款人沦为
排队的无担保债权人，原因是一份没人提交的表格。

## 什么必须登记，什么时候登记？

s.352(1) 要求就其财产或业务设立抵押的公司，在**自抵押设立起三十天内**，按注册官
所定的格式与方式，连同订明费用，向注册官提交一份抵押详情陈述书。

s.353 列出被涵盖的抵押：

| 可登记抵押 | 段次 |
| --- | --- |
| 为担保任何债权证发行而设的抵押 | s.353(a) |
| 对未催缴股本的抵押 | s.353(b) |
| 对公司所持子公司股份的抵押 | s.353(c) |
| 若由个人作成便须依 Bills of Sale Act 1950 登记的抵押或转让 | s.353(d) |
| 对任何地点的土地或土地上任何权益的抵押 | s.353(e) |
| 对账面债务的抵押 | s.353(f) |
| 对业务或财产的浮动抵押 | s.353(g) |
| 对已催缴但未缴付股款的抵押 | s.353(h) |
| 对船舶或航空器，或其中任何份额的抵押 | s.353(i) |
| 对商誉、专利或专利许可、商标，或版权或版权许可的抵押 | s.353(j) |
| 对任何存款账户贷方余额的抵押 | s.353(k) |

其中两项经常让 SME 董事吃惊。s.353(f) 下对**账面债务**的抵押涵盖发票融资与应收
账款转让。s.353(k) 下对**存款账户贷方余额**的抵押，则涵盖那笔押作融资担保品的
定期存款——一种极常见的马来西亚安排，由银行做好文件，公司却从来没去提交。

相关的期限就排在主期限旁边。s.355(1) 允许一系列债权证在 30 天内一次提交。
s.356(1) 就公司取得已附有可登记抵押的财产，或外国公司带着现有抵押在马来西亚
登记的情形，给予自完成起 30 天。凡文书在马来西亚境外签立或作成，s.363 把上述
任何期间延长**七天**，或按注册官酌情延长更久。

## 错过那 30 天，究竟会怎样？

s.352(2)：就公司财产或业务所设定的任何担保而言，该抵押对清盘人与公司的任何
债权人无效。

s.352(3) 保留背后的义务——不影响还款的合约或义务——但受担保的款项**即时到期
应付**。于是借款人失去期限利益，放款人失去担保利益，同时发生。

有一项除外规定，和一项救济。

除外规定是 s.352(5)：未能登记**土地以外**财产的抵押，不影响该抵押在当事人之间
的效力，也不限制其效果。这句要读仔细——它并没有推翻 s.352(2) 对清盘人与债权人
的效果。它保留的是当事人之间的抵押。

救济是 s.361。若法庭信纳该遗漏属意外、出于疏忽或其他充分理由，或其性质不致损害
债权人或股东，或认为给予济助在其他方面属公正与公平，法庭可延长登记时间或更正
登记册。济助属酌情性质、附带条件，而且比准时提交贵得多。

另外，s.352(10) 使违反 s.352(1) 与 s.354 成为公司与每一名高职人员的罪行，可处
不超过 RM50,000 的罚款，持续犯罪则每日加罚 RM500。

s.352(8) 是实务上的安全网：**任何对该抵押有利害关系的人**均可在登记期间届满前
提交详情，并依 s.352(9) 向公司追讨费用。不放心借款人秘书会去提交的放款人，可以
自己提交。

## 内部登记册的义务归在哪里？

s.362，而且它与 s.352 是完全分开的义务。

**s.352 是通报义务。** 在 30 天内向 SSM 提交详情。未做的后果是丧失优先次序，
以及 s.352(2) 的无效。

**s.362 是登记册义务。** s.362(1) 要求公司把设立任何可登记抵押的文书，或其副本，
存放于**注册办事处**。s.362(3) 要求公司在注册办事处保存一份抵押登记册，并把所有
特定影响公司财产的抵押与所有浮动抵押记入其中，每一项均须载明所抵押财产的简短
描述、抵押的金额，以及有权享有该抵押者的姓名，但不记名证券除外。

两者不能互相取代。一家把每一项抵押都向 SSM 提交、却完全不保存内部登记册的公司，
违反了 s.362——而 s.362(6) 带着不超过 RM50,000 的罚款另加每日 RM500，与 s.352
的名义风险相同。一家内部登记册完美无瑕却什么都没提交的公司，拥有有效的文书作业
和一文不值的担保。

s.362 也自带查阅规定。依 s.362(4)，任何债权人或成员可付 RM5 查阅文书与登记册；
任何其他人支付公司所订、每次查阅不超过 RM10 的费用。依 s.362(5)，任何人均可申请
抵押文书或债权证的副本，并须在申请后**三天内**获得提供，费用不超过每页 RM10。

## 抵押存续期间会发生什么？

另外三项呈报，各有各的时钟。

**转让——30 天。** 依 s.359(1)，凡原抵押持有人以外的人成为新持有人，**新持有人**
须在 30 天内向注册官提交通知，并把通知副本交予公司。义务落在受让人身上，不在
公司身上。

**变更——30 天。** 依 s.359(2)，凡条款经变更而改变了受担保债务或负债的金额，
或禁止、限制就该财产设立后续抵押，**公司**须在变更发生起 30 天内提交变更通知。

**清偿或解除——14 天。** 依 s.360(1)，凡债务已全部或部分偿付或清偿，或财产已从
抵押中解除或已不再构成公司财产的一部分，公司须在**十四天内**提交详情，并依
s.360(2) 附上充分证据。依 s.360(3)，任何其他有权享有该抵押的人可代为提交。

这条 14 天的解除时钟之所以让人栽跟头，正因为它比当初登记所容许的 30 天更短。
结清了融资便不再理会的公司，会在 SSM 记录上留下一项显示仍然有效的抵押——
然后在下一轮银行尽职审查中浮现。

## SSM 的登记证明了什么？

s.357(1) 要求注册官保存一份所有已提交抵押的登记册，s.357(2) 列明所记入的详情。
s.357(3) 才是回报所在：注册官所发出的登记证书，是登记规定已获遵从的**决定性证据**。

这比适用于 s.50(3) 下成员登记册的表面证据标准更强的证据陈述，也正因如此，
放款人坚持要看到证书，而不是提交回执。

## 常见错误

- **以为银行或其律师会去提交。** s.352(1) 把义务放在公司身上。s.352(8) 只是准许
  有利害关系的人也一并提交。
- **从提款日或盖印日起算那 30 天。** 时钟从抵押的**设立**起算。
- **漏掉定期存款质押。** 对存款账户贷方余额的抵押依 s.353(k) 须登记。
- **漏掉发票融资。** 对账面债务的抵押依 s.353(f) 须登记。
- **把 s.352(5) 读成通用的免责借口。** 它保留的是非土地抵押在当事人之间的效力；
  它救不了这项抵押对清盘人的效力。
- **向 SSM 提交了却不保存 s.362 登记册。** 两项义务，两笔 RM50,000 的风险，
  其中一项就在注册办事处。
- **忘了解除。** s.360(1) 只给 14 天，而 SSM 记录上一项过期未除的抵押，会跟着
  公司走进未来每一次融资。
- **忽略所取得的财产。** 公司买下一项已带有可登记抵押的资产时，s.356(1) 就适用。

## 下一步

调出公司的 SSM 抵押清单，把它跟 s.362 登记册与贷款档案摆在一起。三个问题就能
化解大部分风险：是不是每一项仍然有效的融资都已登记，是不是每一项已结清的融资
都已解除，以及是不是每一份抵押文书的副本都依 s.362(1) 的要求实体存放在
[注册办事处](/zh/company-secretary/registered-office)。若某项抵押设立至今已超过
30 天却从未提交，那是一宗向法庭提出的 s.361 申请，不是逾期呈报——在提交任何
东西之前先寻求意见。
