---
topicId: MY-BIZ-0011
title: "MSIC 代码：如何挑选，以及它日后决定什么"
seoTitle: "马来西亚 MSIC 代码：如何选择"
slug: "msic-codes-malaysia"
category: "business"
subcategory: ["formation"]
summary: "马来西亚标准行业分类是什么、五个层级的代码结构如何运作，以及你在 SSM 申报的那个代码，如何一路传导到发照、银行开户与拨款资格。"

tier: "4"
mode: "practical"
contentType: "data"

answer: "MSIC 是马来西亚标准行业分类，由统计局（DOSM）维护，改编自联合国的 ISIC。代码分五个层级——一个字母的 section，然后是两位、三位、四位与五位数字的层级。你在 SSM 注册成立时把自己的活动申报为一个 MSIC 代码，而这项申报随后会被 LHDN、银行、发照当局与拨款机构读取。"
keyTakeaways:
  - "MSIC 2008 由统计局（DOSM）维护，改编自联合国 ISIC Rev. 4"
  - "五个层级：section（字母）、division（2 位数）、group（3 位）、class（4 位）、item（5 位）——你申报的是 5 位数的 item"
  - "该代码在注册成立时申报，并会以业务性质的形式再度出现在你的常年申报表中（Companies Act 2016, s.68(3)(b)）"
  - "LHDN 在 MyInvois 电子发票系统中使用 MSIC，因此该代码会跟着你进入税务申报"
  - "银行在开户与风险分类时会读 MSIC——高风险代码会拖慢开户"
  - "发照当局与拨款机构按活动筛选资格，而你申报的代码就是第一道筛子"
  - "该代码应描述公司实际在做什么，而不是听起来最气派的那件事"
appliesTo: "任何在马来西亚注册公司或商号的人，或发现自己注册的活动已经与实际业务对不上的人。"

faq:
  - q: "一家公司可以注册多少个 MSIC 代码？"
    a: "SSM 的 MyCoID 注册表格会询问业务性质，而业界指引普遍表示可以选择最多三个 MSIC 代码，并附上一段文字描述。这个数字被广泛转述，但我们无法对照 SSM 公布的指示加以证实，因此请把它当成一项工作假设，并查阅现行表格。"
  - q: "如果我的 MSIC 代码与我实际所做的对不上，会怎样？"
    a: "当下不会怎样，而这正是问题总是很迟才浮现的原因。它会在这些时候现形：发照当局查核你注册的活动是否涵盖你所申请的执照时；银行质疑你申报的活动与交易模式之间不一致时；或者拨款计划按领域筛选申请人，而你的代码把你排除在外时。"
  - q: "我可以日后更改 MSIC 代码吗？"
    a: "可以。业务活动的变更透过你的公司秘书向 SSM 通知。这是一项直截了当的呈报，但它没有追溯效力——它无法修补一份已经按旧代码评估过的申请。"
  - q: "官方名单在哪里？"
    a: "统计局（DOSM）维护 MSIC 2008，并在 msic.stats.gov.my 提供可检索的系统，同时透过 OpenDOSM 发布数据集。SSM 则公布自己的 MSIC 代码清单，供 ROB 与 ROC 注册使用。"

verificationNeeded:
  - "确认 SSM 目前在注册成立时以及在变更活动时，各允许多少个 MSIC 代码——常被引述的三个这个数字属于业界指引，并非我们已查证的 SSM 出版物"
  - "确认 SSM 目前在 ROC 注册中使用的是 MSIC 2008 version 1.0 还是更后期的修订版；DOSM 系统发布的是 version 1.0"
  - "银行按 MSIC 作风险分类的做法因机构而异，且未公开——请把这里描述的效应当成一种模式，而不是一条规则"

lang: "zh"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "353529e7e9ebf84a"

status: "draft"
aiAssisted: true
reviewer: null
version: "0.1"
revisions:
  - version: "0.1"
    date: 2026-07-20
    change: "Initial draft."
    reviewer: null
sensitivity: "none"

updated: 2026-07-20
sources:
  - title: "MSIC — data catalogue"
    url: "https://open.dosm.gov.my/data-catalogue/msic"
    publisher: "Department of Statistics Malaysia (DOSM)"
  - title: "Sistem MSIC 2008"
    url: "https://msic.stats.gov.my/bi/"
    publisher: "Department of Statistics Malaysia (DOSM)"
  - title: "SSM MSIC Code"
    url: "https://www.ssm.com.my/Pages/Publication/SSM%20MSIC%20Code/SSM-MSIC-Code.aspx"
    publisher: "SSM"
  - title: "Companies Act 2016 (Act 777), as at 1 August 2022"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "SSM"

entity: "Malaysia Standard Industrial Classification (MSIC)"
relations:
  - { rel: "administered-by", to: "dosm" }
  - { rel: "affects", to: "register-sdn-bhd" }
  - { rel: "affects", to: "business-licence-malaysia" }
  - { rel: "related-to", to: "corporate-bank-account-malaysia" }
  - { rel: "related-to", to: "e-invoice" }
related: ["register-sdn-bhd", "e-invoice"]
keywords:
  - "MSIC code Malaysia"
  - "kod MSIC"
  - "business code SSM"
  - "MSIC 2008"
  - "nature of business SSM"
  - "how to choose MSIC code"
---

你大概会花九十秒挑选自己的 MSIC 代码，而在接下来十年里与你打交道的每一个机构，
都会去读它。

这种不对称，就是这一页存在的理由。每一份指南都会解释 MSIC 是什么的缩写。几乎没有
一份，把这个选择与它的后果连起来。

## MSIC 是什么

**马来西亚标准行业分类**是把经济活动分类的国家体系，由**统计局（DOSM）**维护，
改编自联合国的国际标准行业分类（ISIC）第 4 次修订版。目前公开使用的版本是
**MSIC 2008**。

它最初的目的是统计性的——DOSM 用它把经济数据分类并编制国民账目。它是因为被采用
才变成一个行政识别码的：SSM、LHDN、银行与发照机构都需要一套共同的词汇来回答
「这家企业到底做什么」，而 MSIC 早就在那里了。

## 代码结构

五个层级，每一层嵌套在上一层之内。

| 层级 | 格式 | 它所捕捉的内容举例 |
| --- | --- | --- |
| Section | 1 个字母 | 宽泛的经济领域 |
| Division | 2 位数 | section 之内的主要活动组别 |
| Group | 3 位数 | 更窄的活动家族 |
| Class | 4 位数 | 一项具体活动 |
| Item | 5 位数 | 最细的层级——这就是你申报的那一个 |

五位数的 item 才是起作用的代码。凡是更深的层级不适用之处，已公布的表格会用破折号表示。

在 DOSM 的 MSIC 系统上检索它，或透过 OpenDOSM 的数据目录检索。SSM 则按注册类型分开
公布自己的 MSIC 代码清单——ROB 供商号使用，ROC 供公司使用。

## 这个代码会走到哪里

这才是重要的部分。

| 机构 | 它拿你的 MSIC 代码来做什么 | 不匹配的后果 |
| --- | --- | --- |
| SSM | 注册成立时的业务性质；依 s.68(3)(b) 带入常年申报表 | 公开记录显示的是一项你并未从事的活动 |
| LHDN | 行业分类，包括在 MyInvois 电子发票系统中 | 申报与你实际收入来源之间不一致 |
| 银行 | 开户、KYC 与风险分类 | 批准更慢、额外尽职审查，偶尔被拒 |
| 发照当局 | 你注册的活动是否涵盖你想要的执照 | 申请被退回，须先变更活动 |
| 地方政府 | 评估营业场所执照申请 | 执照按错误的活动发出，或被拒 |
| 拨款与奖掖机构 | 领域资格筛选 | 在有人读你的申请之前就被筛掉 |
| 采购与供应商注册 | 招标的类别配对 | 不会出现在买家的类别搜索结果中 |

这些机构没有一个会要求你重新论证那个代码。它们读了就行动。

## 挑选得好

**描述你在做什么，而不是你渴望做什么。** 最常见的错误，是为那个气派的未来业务、
而不是为实际的现有业务挑代码。然后银行看到与申报活动对不上的款项，而那恰恰是
反洗钱监控被设计出来要标示的模式。

**先查发照的后果。** 有些活动是受管制的。一个描述了你并未获准从事的受管制活动的
代码，会在银行与地方政府那里招来问题。而一个漏掉了你*确实*在从事的受管制活动的
代码，会卡死执照申请。

**让代码对应收入，而不是对应故事。** 如果你 90% 的收入来自软件开发、10% 来自培训，
那么你的主要代码就是软件开发。

**在提交之前查清拨款筛选条件。** 以领域为基础的奖掖与融资计划，是按活动分类来筛选的。
如果某项特定计划是你规划的一部分，就在挑选之前找出它的合资格活动清单，而不是在被拒
之后才找。

**认真写那段描述。** SSM 的注册表格在代码之外，还会收取一段关于业务一般性质的文字
描述。那段描述会被银行与发照当局的真人读到，而它正是你在五位数代码过于粗钝之处
把话说准确的机会。

## 一套可实作的决定方法

1. 写一句话，描述这家公司如何赚钱。不是它「是」什么——而是钱怎么进来。
2. 把那句话的主要动词与宾语，拿去 DOSM 的 MSIC 系统检索。
3. 读 *class* 层级，而不只是 item，以确认你落在正确的家族里。
4. 列出你预期头两年会需要的执照与拨款，并逐一把它们的活动要求与你的候选代码对照。
5. 到这时候才挑 item 代码，并把描述写得与之相符。

## 常见错误

- **秘书建议什么代码就用什么，看都不看。** 对他们那是两分钟的步骤，对你却是十年
  的识别码。
- **选一项渴望中的活动。** 它会造成申报活动与实际观察到的交易之间不一致，而那正是
  银行监控的触发点。
- **选一个含糊的兜底项。** 含糊在开户时读起来像是在闪躲，而且过不了具体的资格筛选。
- **申报一项你并未获准从事的受管制活动。** 打字免费，解释昂贵。
- **从来不更新它。** 公司会转型；注册记录不会自动跟上，而这种不一致会在最糟糕的
  时刻浮现——申请进行到一半时。
- **因为注册成立时什么事都没发生，就假定这个代码没有影响。** 注册成立时本来就什么
  都不会发生。一切都发生在银行、地方政府与拨款机构那里。

## 下一步

在你的 SSM 公司档案上查出公司目前注册的活动，并对照企业今天实际在做的事来读它。
如果两者已经漂开，就在下一次执照续期、拨款申请或银行覆核**之前**更改它——而不是
在进行当中。
