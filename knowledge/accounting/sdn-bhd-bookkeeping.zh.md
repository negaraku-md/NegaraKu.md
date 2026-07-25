---
topicId: MY-ACC-0006
title: "Sdn Bhd 簿记：一套撑得过呈报季的会计科目表"
seoTitle: "大马 Sdn Bhd 簿记与会计科目表"
slug: "sdn-bhd-bookkeeping"
category: "accounting"
subcategory: ["bookkeeping"]
summary: "如何设计一套马来西亚会计科目表，让它同时干净地对应 SSMxT 分类标准与 Form C 税务计算，使两边的映射都不必年年重建。"

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "一家 Sdn Bhd 的会计科目表，除了管理层之外还要服务两个使用者：财务报表为 MBRS 呈报而标记所依据的 SSM 分类标准，以及把会计盈利转换成应课税收入的税务计算。要同时为两者设计，意味着在源头就把不可扣税开支分到各自的科目，选定一种损益表列报基准并守住它，以及从买入当天起就按资本减免类别记录每一项固定资产。"
keyTakeaways:
  - "Companies Act 2016 s.245(2) 要求在交易完成后 60 天内入账——按季做账的簿记员已经不合规"
  - "保留期限因法令而异：s.245(3) 下为交易之后七年，ITA s.82 下为相关年度结束起七年，s.82A 下为课税年结束起七年"
  - "在功能别与性质别之间选定一次——SSM 分类标准两者都载，中途更换会在数据层面破坏你的比较数字"
  - "把每一项常见的不可扣税开支各自开一个科目，而不是留到年终写一条注释：交际应酬、捐款、罚款、私用汽车开支"
  - "固定资产登记册要按资本减免类别来维护，不能只按会计折旧类别"
  - "未吸纳资本减免可无限期结转；未吸纳的业务亏损结转十年"
appliesTo: "经营马来西亚私人公司账目的东主兼管理人、内部簿记员与会计人员。"

faq:
  - q: "账目在法律上必须做到多及时？"
    a: "Companies Act 2016 s.245(2) 要求公司、其董事与经理，须在相关分录所涉交易完成后六十天内，促使适当的分录记入会计与其他记录之中。那是一项法定责任，不是最佳实务，而 s.245(9) 对公司与每一名高职人员定有最高 RM500,000 罚款或最高三年监禁。"
  - q: "记录必须保留多久？"
    a: "有三个期限并行，而且起算日不同。Companies Act 2016 s.245(3) 要求交易完成之后七年。Income Tax Act 1967 s.82 要求自收入所属年度结束起七年。s.82A 要求自课税年结束起七年。凡未曾提交报税表，s.82(1A) 与 s.82A(2) 都会把时钟重设，自报税表最终提交之年度结束起重新起算。"
  - q: "开支应该按功能别还是按性质别列报？"
    a: "两者皆可接受，SSM 分类标准两者都载，但这个选择属于会计科目表，不属于年终。功能别指的是销售成本、分销成本、行政开支。性质别指的是原材料、雇员福利、折旧。逐年更换是合法的，但会让你已标记的比较数字对不上，所以一次决定好。"
  - q: "如果每一张发票都在 MyInvois 里，我还需要总账吗？"
    a: "需要。一份经验证的电子发票，是关于单一笔交易的一份文件。s.245(1) 要求会计与其他记录须足以解释公司的交易与财务状况，并使真实与公允的账目得以编制，且其保存方式须使账目能够便利而妥善地接受审计。一串经验证的文件是来源，不是一套记录。"
  - q: "为什么要把不可扣税开支分到各自的科目？"
    a: "因为税务计算是逐项把它们加回去的，而到了年终才从一个混杂的科目里把它们重建出来，正是错误与漏掉扣税的温床。交际应酬、捐款、罚款与罚金、私用汽车开支以及各类拨备，全都会被分别审视。若每一项各占一个科目，加回明细表自己就写好了，而且与总账扣得上。"

verificationNeeded:
  - "任何特定开支的可扣税性，应对照 Income Tax Act 1967 s.33 与 s.39 以及相关的 Public Ruling 加以确认——本页描述的是会计科目表的结构，不是一项可扣税性的裁定"
  - "在设定资产类别之前，资本减免率与类别应对照 Income Tax Act 1967 Schedule 3 与现行 Public Rulings 加以确认"

obligations:
  - what: "在记录中作出会计分录"
    trigger: "change"
    withinDays: 60
    due: "Within 60 days of completion of the transaction"
    authority: "SSM"
    statute: "Companies Act 2016, s.245(2)"
    consequence: "Fine up to RM500,000 or imprisonment up to three years on the company and every officer, under s.245(9)"
  - what: "保留会计与其他记录"
    trigger: "ongoing"
    due: "Seven years after completion of the transactions or operations to which the entries relate"
    authority: "SSM"
    statute: "Companies Act 2016, s.245(3)"
    consequence: "Fine up to RM500,000 or imprisonment up to three years under s.245(9)"

lang: "zh"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "8fe84c98a7ee99b1"

status: "draft"
aiAssisted: true
reviewer: null
reviewDue: 2027-07-22
version: "0.2"
revisions:
  - version: "0.1"
    date: 2026-07-20
    change: "Initial draft."
    reviewer: null
  - version: "0.2"
    date: 2026-07-21
    change: "Corrected transposed arithmetic: a 60-day rule in a 13-week quarter leaves a quarterly bookkeeper out of compliance about four weeks out of thirteen, not nine."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "Companies Act 2016 (Act 777), updated text as at 1 August 2022"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "SSM"
  - title: "Income Tax Act 1967 (Act 53), reprint as at 21 May 2024"
    url: "https://www.hasil.gov.my/wp-content/uploads/20240521-akta-cukai-pendapatan-1967-akta-53.pdf"
    publisher: "LHDN"
  - title: "MBRS 2.0 SSM Taxonomy 2022 (SSMxT_2022) Architecture Document"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf"
    publisher: "SSM"
  - title: "Malaysian Business Reporting System (MBRS) — Frequently Asked Questions, version 2.4"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/FAQs_Malaysian_Business_Reporting_System_MBRS.pdf"
    publisher: "SSM"
    date: "2024-10-01"
  - title: "Public Ruling No. 8/2025 — Tax Treatment for Micro, Small and Medium Companies"
    url: "https://www.hasil.gov.my/wp-content/uploads/20250718-public-ruling-tax-treatment-for-micro-small-and-medium-enterprises.pdf"
    publisher: "LHDN"
    date: "2025-07-18"

entity: "Sdn Bhd bookkeeping and chart of accounts"
relations:
  - { rel: "governs", to: "companies-act-2016" }
  - { rel: "related-to", to: "mbrs-2-filing-guide" }
  - { rel: "related-to", to: "mbrs-tagging-errors" }
  - { rel: "related-to", to: "form-c-and-cp204" }
  - { rel: "related-to", to: "financial-year-end" }
  - { rel: "related-to", to: "e-invoice" }
related: ["mbrs-2-filing-guide", "mbrs-tagging-errors", "form-c-and-cp204", "financial-year-end", "e-invoice", "mfrs-vs-mpers", "corporate-tax-rates"]
keywords: ["Sdn Bhd bookkeeping", "chart of accounts Malaysia", "monthly close Malaysia", "section 245 accounting records", "tax computation add back", "capital allowance register", "SSMxT mapping chart of accounts"]
---

大多数给 Sdn Bhd 的簿记建议，讲到借与贷就停了。那个问题在十五世纪就解决了。真正
还没解决的问题是：你的会计科目表有三个使用者，而其中只有一个是你。

第二个是 **SSM**，它如今是把你的财务报表当成对照一套你无法扩充的分类标准所标记的
数据来读的。第三个是 **LHDN**，它把你的税前盈利读作一份计算的第一行，而那份计算会
把你没有分开的东西统统加回去。

只为一个使用者设计，你就得年年重建映射。一次为三个都设计好，你就再也不必碰它。

## 法定底线

有两件事是法律责任，不是内务整理。

**记录的及时性。** Companies Act 2016 s.245(2) 要求公司、其董事与经理，须在相关
分录所涉**交易完成后六十天内**，促使适当的分录记入会计与其他记录之中。一名按季
过账的簿记员，正在制造一家每十三周里有四周不合规的公司。

**充分性。** s.245(1) 要求记录须足以解释公司的交易与财务状况，并**使真实与公允的
账目得以编制**，其保存方式须使账目能够**便利而妥善地接受审计**。后半这一项在审计
豁免之后依然存在。Practice Directive 10/2024 里没有任何一处触及 s.245。

s.245(9) 为这两项标了价：最高 **RM500,000** 罚款或最高三年监禁，公司与每一名高职
人员皆然。

**保留期跑的是三个时钟。** 它们不是同一个时钟，起算日也不同：

| 法令 | 期限 | 起算自 |
| --- | --- | --- |
| CA 2016 s.245(3) | 7 年 | 交易完成 |
| ITA 1967 s.82(1)(a) | 7 年 | 收入所属年度结束 |
| ITA 1967 s.82A(1) | 7 年 | 课税年结束 |

而凡未曾提交报税表，s.82(1A) 与 s.82A(2) 都会把这七年重设，自报税表最终提交之
年度结束起重新起算。一家迟交的公司，等于自己延长了自己的保留义务。

## 设计原则 1：科目按税务处理命名，不按收款人命名

税务计算从税前盈利开始，把不可扣税的部分加回去。每一项你无法直接从某个总账科目
拉出来的加回项，都是一小时的重建工夫，外加一份少报的风险。

所以，从第一天起，就在源头给以下每一项各开一个科目：

- **交际应酬**——按你的顾问所采用的类别拆开，不要当成一个大桶
- **捐款**——获批准的机构与其他一切分开
- **罚款、罚金与和解金**——包括迟交呈报的费用与交通传票
- **汽车开支**——按车辆分开，好让私用比例分摊有个基础
- **折旧与摊销**——永远分开，永远加回
- **拨备**——一般拨备与特定撇账区分开来
- **专业费用**——与资本相关的工作，和经常性的合规工作分开
- **利息**——凡有任何投资性或非业务性借贷，就分开
- **董事酬金、袍金与福利**——与员工成本分开

以上没有一样是稀奇的。让它管用的关键，在于这个拆分发生在发票入账当下、由一个正在
看着那张发票的人来做，而不是在三月由一个只看着一个总数的人来做。

可扣税性本身取决于 Income Tax Act 1967 的 s.33 与 s.39 中的禁止条文，以及适用的
Public Rulings。本页讲的是结构，不是任何特定开支的裁定。

## 设计原则 2：固定资产登记册是一份税务记录

会计折旧与资本减免是两套互不相干的制度，只是碰巧在描述同一批资产。只为折旧而维护
登记册的公司，最后每年都得把资本减免的状况重建一遍。

按每一项资产载明：购置日期、成本、Schedule 3（第三附表）下的**资本减免类别**、
迄今已申索的初期减免与年度减免、剩余开支、处置日期与所得款项。真正会咬人的是处置
——无论有没有人记得去计算，结余课税或结余减免都会发生。

有两条结转规则值得围绕着来建这本登记册，因为它们决定了历史明细到底有多重要：

- **未吸纳资本减免可无限期结转**，依 Schedule 3 paragraph 75。
- **未吸纳的业务亏损结转十年**，依 s.44(5F)，源自 Finance Act 2021 的修订并自 YA2019 起追溯适用。

两者都须服从 s.44(5A) 与 (5B) 的股东连续性测试。一本无法显示每一笔未吸纳金额之
起源年度的登记册，支撑不了其中任何一项申索。

## 设计原则 3：选定一种列报基准，然后永不挪动

SSM 分类标准载有多种可选列报方式，而你所依循的申报入口会迫使你选定其中之一：

- 财务状况表——**流动／非流动**或**流动性顺序**
- 损益表——**功能别**或**性质别**
- 现金流量表——**直接法**或**间接法**

带有会计科目表后果的，是损益表那一项。功能别指的是销售成本、分销成本、行政开支。
性质别指的是原材料与耗材、雇员福利、折旧、其他开支。为其中一种而建的科目表，若
没有一层分析，就产不出另一种。

按这门生意实际上是怎么管的来选，然后把科目代码建成让法定列报成为总账的一个小计，
而不是一次年终重分类。逐年更换基准是获准的，而它会让你已标记的比较数字在 SSM 的
数据里对不上，即使印出来的账目读起来一切正常。

## 设计原则 4：不许自创标记，所以不许有孤儿科目

公司自行扩充 SSM 分类标准是**不被允许**的。凡分类标准没有对应概念的，明细就进入
一个文字区块——照样呈报，但不再能被逐项机读。

这项限制应该回馈到科目表里去。一个以内部项目、以人名、或以一次性安排命名的科目，
没有任何分类概念在等着它，到了呈报的时候会被挡下或被笼统合并。用你所依循之会计
准则的词汇来为科目命名，而那正是这套分类标准从 IFRS Accounting Taxonomy 2022
继承而来的词汇。

一个好用的测试：若你在 mTool 内的分类标准浏览器里，找不到某个科目说得通的 SSMxT
概念，那个科目就是你为自己排好档期的一个映射问题。

## 一套能同时产出两种成果的月结

1. **按六十天规则过账，不要按死线过账。** s.245(2) 在设计上就是每月的工作。
2. **每月对账银行、应收、应付与公司间往来。** 未对平的公司间往来，是最可靠的一种把审计时间表炸掉的方式。
3. **不可扣税项目随做随过入各自的科目。** 绝不留到年终。
4. **在购置与处置时更新固定资产登记册**，并在购买当下就记下资本减免类别。
5. **把营业额与你已验证的电子发票提交内容对账**，包括合并电子发票，好让两边永远不会不明不白地分岔。
6. **把薪资与 EPF、SOCSO、EIS 及 PCB 的缴交对账**，并与年终的 Form E 和 EA 数字对账。
7. **每月把各张报表互相交叉核对。** 在 XBRL 里，一处内部不一致会让文件生成不了；在第三个月就找到它，一分钱都不用花。
8. **维护一份常设的加回明细表**，与总账科目代码扣得上。到了年终，它应该是一次打印，不是一项工程。
9. **保留那份映射文件**——科目代码、SSMxT 概念，以及任何判断取舍的理由。

## 电子发票摆在哪里，又不摆在哪里

MyInvois 的验证确认的是一份文件已提交并获接纳。它并不创造出一套会计记录，也不满足
s.245。

在总账设计里把这两层分清楚。经验证的电子发票文件——包括就毋须开立个别发票之交易
所开立的合并电子发票——是**原始凭证**。总账才是记录。两者之间的对账是一项每月的
控制，因为在第二个月裂开的缺口是可以被发现的，而在年终才发现的缺口是一场调查。

## 常见错误

- **按季簿记。** s.245(2) 是一条六十天规则。
- **一个「杂项开支」科目**，每年三月都得被解剖一次。
- **一本只为折旧而建的固定资产登记册**，没有资本减免类别，也没有处置历史。
- **逐年更换损益表列报基准**，无声无息地破坏已标记的比较数字。
- **科目名称取自内部项目或人名**，找不到任何说得通的分类概念。
- **以为经验证的电子发票就是会计记录。** 它们是原始凭证。
- **以为保留期只有一个七年时钟。** 三个时钟、三个起算日，而迟交会延长其中两个。
- **以为审计豁免放宽了 s.245。** 并没有——包括记录须能够便利而妥善地接受审计这项要求。
- **弄丢未吸纳亏损与资本减免的起源年度**，而那正是十年期限与连续性测试所系之处。

## 下一步

打开你的会计科目表，对着它跑三个栏位：每个科目对应的 SSMxT 概念、每个科目所引来的
税务处理，以及这个科目名称对一个读着分类标准的人来说有没有意义。任何一行你填不完
的，都是你已经为自己排好档期的年终问题。

在下一个财政年开始之前修好它，不要在年中修——在年度分界点上换过来是便宜的，在中途
换则是昂贵的。
