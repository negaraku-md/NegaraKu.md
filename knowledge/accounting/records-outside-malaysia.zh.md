---
topicId: MY-ACC-0025
title: "把会计记录保存在马来西亚境外"
slug: "records-outside-malaysia"
category: "accounting"
subcategory: ["records"]
summary: "当会计记录存放在外国云端 ERP 或区域共享服务中心时，Companies Act 2016 第 245(5) 至 (7) 条到底允许什么，以及为什么 Income Tax Act 更严。"

tier: "3"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "Companies Act 2016 s.245(5) 允许马来西亚境外业务的会计记录保存在境外，条件是这些记录须送至马来西亚境内某处并存放于该处，且随时可供董事查阅。它并不授权把马来西亚境内业务的记录放到境外。另一方面，Income Tax Act 1967 s.82(8) 要求所有与马来西亚境内业务有关的记录，都必须在马来西亚境内保存与保留。"
keyTakeaways:
  - "s.245(5) 是一项例外，只适用于马来西亚境外业务的记录"
  - "即便如此，这些记录仍必须送至马来西亚境内某处并存放于该处，且随时开放予董事查阅"
  - "s.245(6) 要求那些记录须包含足以据以编制真实与公允财务报表的报表与申报"
  - "s.245(7) 让注册官可以要求在马来西亚境内某处交出记录，或规定须在境内保存之记录的类型与方式"
  - "ITA 1967 s.82(8) 更严也更直白：所有与马来西亚境内业务有关的记录，都必须在马来西亚境内保存与保留"
  - "ITA s.82A(5) 把同一规则适用于与马来西亚境内收入有关的文件"
appliesTo: "跨国集团的马来西亚子公司、使用外国主机云端 ERP 的公司，以及由区域共享服务中心提供服务的财务团队。"

verificationNeeded:
  - "SSM 与 LHDN 都没有发布指引，说明存放在外国云端区域但可从马来西亚存取的数据是否符合「在马来西亚境内保存」的要求——本页所述立场依循法条本身的措辞，而目前并无任何已公布的行政宽免"

lang: "zh"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "d4690bd724bedb45"

status: "reviewed"
aiAssisted: true
reviewer: "ashton-tan"
reviewed: "2026-07-25"
reviewDue: 2027-07-22
version: "0.2"
revisions:
  - version: "0.1"
    date: 2026-07-20
    change: "Initial draft."
    reviewer: null
  - version: "0.2"
    date: 2026-07-21
    change: "Made the row-3 ITA cell a verdict consistent with the other rows (foreign branch records are not within s.82(8)), and removed a dangling seven-year reference this article never establishes, tying it instead to the full retention period."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "Companies Act 2016 (Act 777), reprint as at 1 August 2022"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "SSM"
    date: "2022-08-01"
  - title: "Income Tax Act 1967 (Act 53), reprint as at 21 May 2024"
    url: "https://www.hasil.gov.my/wp-content/uploads/20240521-akta-cukai-pendapatan-1967-akta-53.pdf"
    publisher: "LHDN"
    date: "2024-05-21"

entity: "Companies Act 2016 section 245(5)"
relations:
  - { rel: "governs", to: "companies-act-2016" }
  - { rel: "administered-by", to: "ssm" }
  - { rel: "part-of", to: "accounting-records-section-245" }
  - { rel: "related-to", to: "e-invoice-accounting-records" }
related: ["accounting-records-section-245"]
keywords: ["accounting records outside Malaysia", "section 245(5) Companies Act", "cloud accounting records Malaysia", "shared service centre records Malaysia", "keep records in Malaysia LHDN"]
---

一家马来西亚子公司，在新加坡数据中心跑 SAP，财务职能由一个吉隆坡到马尼拉的共享
服务安排承担——这在 2026 年是再正常不过的架构。而严格读起来，它同时也是一个两部
法令都没有预见到的架构——而且这两部法令彼此不一致。

## Companies Act 允许什么

s.245(4) 定下默认规则：记录保存在注册办事处**或董事认为合适的其他地方**，并随时
开放予董事查阅。这一节里没有任何地理上的字眼。

s.245(5) 接着划出一项特定的境外许可，而它的范围比一般引述的要窄。它允许
**马来西亚境外业务的会计与其他记录**保存在马来西亚境外的某处——**但条件是**，
那些记录须**送至马来西亚境内某处并存放于该处**，且随时可供董事查阅。

由此可得出两点。

**这项例外讲的是境外业务，不是境外系统。** 一家马来西亚公司就其马来西亚业务所作的
记录，根本不在 s.245(5) 范围之内。这一节所设想的，是一家在境外设有分行或业务的
马来西亚公司，让该分行的账册就地存放。

**即使落在例外范围内，一份马来西亚副本也是强制的。** 那项但书不是可选的。记录
必须送至马来西亚境内某处并存放于该处。

s.245(6) 把它收得更紧：那些记录必须包含足以据以编制真实与公允财务报表的报表与
申报。一份上传到集团合并系统的汇总试算表，不太可能满足这个要求。

s.245(7) 是执法的杠杆。凡记录依 s.245(4) 或 s.245(5) 保存在马来西亚境外，
**注册官可以要求公司在马来西亚境内某处交出那些记录，或厘定须在马来西亚境内保存之
记录的类型与方式**。那是一项对你数据架构的常设权力，无须法庭命令即可行使。

s.245(9) 的罚则全程适用：一经定罪，可处最高 RM500,000 罚款或最高三年监禁，或两者
兼施，公司与每一名高职人员皆然。

## Income Tax Act 更严

大多数指引讲到 Companies Act 就打住了。更难对付的规则在税务法令里，而且它完全没有
境外例外。

**Income Tax Act 1967 s.82(8)：所有与马来西亚境内任何业务有关的记录，须在马来西亚
境内保存与保留。** 直白、无保留、没有境外业务的例外。

**s.82A(5)** 把同一规则适用于与马来西亚境内收入有关的文件。

s.82(7) 另加一条格式规则，会咬到任何数码优先的财务职能：以电子方式保存的记录必须
以**电子可读形式**保留，并须保存至**随时可存取且可转换为书面形式**；而凡原本以人手
方式保存、其后转为电子形式的记录，**原始的人手记录仍必须保留**。

无合理辩解而违反 s.82(1)、(1A)、(6)、(7) 或 (8)，即属**s.119A** 下的罪行，可处
**不少于 RM300 且不超过 RM10,000** 的罚款，或最高一年监禁，或两者兼施。

## 这在实务上意味着什么

| 安排 | Companies Act 2016 | Income Tax Act 1967 |
| --- | --- | --- |
| 马来西亚境内业务，ERP 主机在境外，没有马来西亚副本 | 不在 s.245(5) 例外范围内 | 抵触 s.82(8) |
| 马来西亚境内业务，ERP 在境外，完整记录已复制并保留在马来西亚 | 符合 s.245(4)，且开放予董事查阅 | 符合 s.82(8) |
| 外国分行记录只存放在境外 | 违反 s.245(5) 的但书 | 不在 s.82(8) 范围内——它只及于马来西亚业务记录 |
| 外国分行记录存放在境外，同时也送至马来西亚并存放于境内 | s.245(5) 下允许，惟须符合 s.245(6) 的内容要求 | 符合 |

可行的设计在每一种情况下都一样：无论主系统在哪里，一套完整、可读、可检索的记录都
存放在马来西亚，并在整个保留期内留在那里。

## 常见错误

- **把 s.245(5) 读成把会计数据放到境外的一般许可。** 它适用于马来西亚境外业务的
  记录，而且必须有一份马来西亚副本。
- **以为远程存取等同于在马来西亚境内保存记录。** 两部法令都没有说「可从马来西亚
  存取」；两部都说「在马来西亚境内保存」。
- **完全无视 ITA。** 它是两者中较严的一部，而且它的罚则不需要先在 Companies Act
  的事实上取得定罪。
- **迁移 ERP 却没有导出。** 一套被集团停用的系统，会让你无法满足任何一部法令，
  而这项义务在整个保留期内持续。
- **保留转换后的电子副本却销毁纸本。** s.82(7)(b) 要求转换前的人手记录须以其原始
  形式保留。

## 下一步

如果电子发票是你架构的一部分，保留这个问题就多了第三层，因为一份存放在 MyInvois
数据库里、已通过验证的文件，本身并不构成任何一部法令下的充分记录。
