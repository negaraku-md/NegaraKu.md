---
topicId: MY-TAX-0006
title: "电子发票 vs SST 税务发票：两套制度，两份文件"
seoTitle: "马来西亚电子发票 vs 税务发票：LHDN 与 RMCD"
slug: "e-invoice-vs-tax-invoice"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "为什么经 LHDN 验证的电子发票并不自动满足 Sales Tax Act 2018 或 Service Tax Act 2018，以及文件上要有什么，它才能一份顶两份用。"

tier: "3"
mode: "practical"
contentType: "comparison"
sensitivity: "none"

answer: "电子发票是 Income Tax Act 1967 s.82C 下的所得税文件，由 LHDN 管理。SST 发票则是 Sales Tax Act 2018 与 Service Tax Act 2018 另行要求的文件，由 RMCD 管理。一份文件可以兼顾两者，但前提是它载有两套制度各自要求的每一项细节——s.82C(4) 规定，当细节相抵触时，该电子发票仅就所得税用途有效。"
keyTakeaways:
  - "两部法令，两个监管机构——LHDN 依 ITA 1967，RMCD 依 2018 年两部税务法令"
  - "ITA 1967 s.82C(4) 容许一份文件兼顾两者，但仅限于细节一致的情况"
  - "细节相抵触时，该电子发票只在所得税用途上具可执行力"
  - "服务税的细节要求在 Service Tax Regulations 2018 reg. 10"
  - "销售税的细节要求在 Sales Tax Regulations 2018 reg. 7"
  - "MyInvois 数据依 ITA 1967 s.138(4)(aa) 与 RMCD 共享"
appliesTo: "已注册 SST 且同时被纳入电子发票范围的企业，以及任何要设计一份能同时满足两个监管机构的发票模板的人。"

verificationNeeded:
  - "RMCD 是否已发出专门指南，把电子发票的视觉呈现与 SST 发票细节要求对接起来——在 mysst.customs.gov.my 上找不到这样的文件"

lang: "zh"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "cf809540c51ed69e"

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
  - title: "Finance (No. 2) Act 2023 (Act 851) — section 82C"
    url: "https://www.myttx.customs.gov.my/wp-content/uploads/2024/02/WJW23%EF%80%A21341-BI.pdf"
    publisher: "Government of Malaysia"
    date: "2023-12-29"
  - title: "Service Tax Regulations 2018 — regulation 10"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Service-Tax-Regulations-2018.pdf"
    publisher: "RMCD"
  - title: "Sales Tax Regulations 2018 — regulation 7"
    url: "https://mysst.customs.gov.my/wp-content/uploads/2025/03/Sales-Tax-Regulations-2018.pdf"
    publisher: "RMCD"
  - title: "e-Invoice Guideline (Version 4.7)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "MySST — Issuing Invoices"
    url: "https://mysst.customs.gov.my/issuing-invoices/"
    publisher: "RMCD"

entity: "e-Invoice compared with the SST tax invoice"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "compares-with", to: "sst-explained" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "governs", to: "service-tax-act-2018" }
  - { rel: "governs", to: "sales-tax-act-2018" }
related: ["e-invoicing", "sst-explained", "myinvois-phases", "e-invoice-data-fields", "consolidated-e-invoice"]
keywords: ["e-Invoice vs tax invoice", "SST invoice requirements", "Service Tax Regulations 2018 regulation 10", "sales tax invoice particulars", "LHDN RMCD invoice", "invois cukai SST"]
---

把一张发票拿去 MyInvois 验证，并不会让它变成一张 SST 发票。这句话给已注册 SST
的企业带来的麻烦，比电子发票推行过程中任何一点都多，因为两个监管机构对同一张
纸想要的东西不一样。

## 两套制度一览

| | 电子发票 | SST 发票 |
| --- | --- | --- |
| 法令依据 | Income Tax Act 1967，**s.82C** | **Sales Tax Act 2018** / **Service Tax Act 2018** s.21 |
| 监管机构 | **LHDN** | **RMCD** |
| 细节要求出自 | e-Invoice Guideline，依 ITA 1967 s.134A | Sales Tax Regulations 2018 **reg. 7** / Service Tax Regulations 2018 **reg. 10** |
| 谁必须开 | 按营业额阶段被纳入范围的纳税人 | **已注册**的制造商与已注册者 |
| 验证 | 传送至 LHDN 并由其验证 | 无——不必提交，没有参考编号 |
| 用途 | 所得税上的收入与开支凭证 | SST 入账上已征税款的证据 |

两者互不取代。一家营业额低于 RM1 million 的已注册 SST 公司，获豁免电子发票，
但仍然要开 SST 发票。一家规模大而未注册 SST 的公司则刚好相反。

## 真正管这件事的条文

Income Tax Act 1967 s.82C(4)，由 Finance (No. 2) Act 2023 加入：

> 凡某人依任何其他成文法须开具发票，则该电子发票连同可能被要求的任何其他细节，
> 应视为依该法开具的发票——**但若该电子发票的细节与该法下开具发票的要求不一致，
> 则该电子发票仅就本法令的用途有效并具可执行力。**

这条但书要读两遍。一份文件可以同时满足两套制度，但前提是它载有双方要的全部内容。
在 RMCD 那一边有所缺漏，你并不是拿到两份都有瑕疵的文件——你拿到的是一份完好
无缺的所得税文件，以及**根本没有 SST 发票**。

e-Invoice Guideline 第 2.6.3 与 2.6.4 节用更白的话说了同一件事：纳税人可采用
任何视觉呈现格式，并*建议*载入 Sales Tax Act 2018 与 Service Tax Act 2018 等
法律所要求的细节。若视觉呈现载有 Service Tax Regulations 2018 的细节，即可用于
服务税用途。

## RMCD 要求、而电子发票栏位清单并未强制的东西

**Service Tax Regulations 2018 regulation 10**——发票流水号；发票日期；已注册者
的名称、地址与识别号码；足以辨识该应税服务的描述；任何折扣；不含服务税的总额、
税率，以及**另列为独立金额**的服务税总额；含服务税的总额；以及任何外币金额另按
当时卖出汇率以令吉表示。

**Sales Tax Regulations 2018 regulation 7** 另外要求（其中包括）**应税货物售予
对象的名称与地址**，以及按每项描述列出的类型、数量与不含销售税的金额。

由此直接产生两个缺口：

- **买方名称与地址。** LHDN 的 55 个栏位里有这两项，但合并电子发票把买方设为
  *General Public*（一般公众），地址填 NA。已注册制造商不能用这种方式为一笔
  应税销售留档，还指望符合 reg. 7(d)。
- **税额另列为独立金额。** 电子发票把税种、税率与税额当作数据带着。至于你的
  *视觉呈现*是否把服务税印成独立的一行，那是模板决定——而 reg. 10(f) 把它变成
  一个法律问题。

语文也是 RMCD 的规矩，不是 LHDN 的：SST 发票必须以马来文或英文书写。

## RMCD 看得到我的电子发票数据吗？

看得到。Income Tax Act 1967 s.138(4)(aa) 授权 LHDN 与 RMCD 共享 MyInvois 数据，
而 e-Invoice Guideline 第 2.6.1 节确认，栏位清单是对照 Sales Tax Act 2018 与
Service Tax Act 2018，连同 ITA 1967、Labuan Business Activity Tax Act 1990 与
Petroleum (Income Tax) Act 1967 一并设计的。你那两份申报，如今彼此看得见。

## 常见错误

- **上线当天就把 SST 发票模板收起来。** s.82C 里没有任何一句废除 2018 年两部
  法令的 s.21。
- **以为通过验证就能补上缺失的细节。** MyInvois 是对照 LHDN 的结构定义验证的。
  它对 reg. 7 或 reg. 10 毫无看法。
- **对具名买方的应税销售使用合并电子发票。** 它载不了 reg. 7 要求的买方细节。
- **在打印出来的文件上省掉 SST 注册号码。** 对已注册者而言，它是有条件必填的
  电子发票栏位，同时也是 reg. 10 要求的细节。
- **把 SST-02 报表与电子发票当成同一条流程。** 监管机构不同、期间不同、罚则也
  不同。

## 下一步

把两份细节清单并排放在你实际打印出来的发票旁比对，而不是对着你的 XML 比。XML
满足的是 LHDN；必须满足 RMCD 的是那份视觉呈现。如果你也在汇总 B2C 收据，请另外
检查这些交易当中，有没有哪一笔是需要具名买方的应税供应。
