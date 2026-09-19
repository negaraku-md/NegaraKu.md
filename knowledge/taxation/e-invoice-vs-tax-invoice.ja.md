---
topicId: MY-TAX-0006
title: "電子インボイス vs SST税務インボイス：二つの制度、二つの文書"
seoTitle: "マレーシアの電子インボイス vs 税務インボイス：LHDN vs RMCD"
slug: "e-invoice-vs-tax-invoice"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "LHDNが検証した電子インボイスが、なぜ2018年売上税法（Sales Tax Act 2018）や2018年サービス税法（Service Tax Act 2018）を自動的には満たさないのか、そして一つの文書で両方の役割を果たすためには何が記載されていなければならないかを解説する。"

tier: "3"
mode: "practical"
contentType: "comparison"
sensitivity: "none"

answer: "電子インボイスは、1967年所得税法（Income Tax Act 1967）s.82Cに基づく所得税上の文書であり、内国歳入庁（LHDN）が管理する。SST税務インボイスは、2018年売上税法（Sales Tax Act 2018）及び2018年サービス税法（Service Tax Act 2018）が別途要求する文書であり、マレーシア王立関税局（RMCD）が管理する。一つの文書で両方を兼ねることができるが、それは両制度がそれぞれ要求するすべての明細を備えている場合に限られる——s.82C(4)は、明細が相抵触する場合、当該電子インボイスは所得税の目的においてのみ有効であると定めている。"
keyTakeaways:
  - "二つの法令、二つの規制当局——ITA 1967の下ではLHDN、2018年の各税法の下ではRMCD"
  - "ITA 1967 s.82C(4)は一つの文書で両方の役割を果たすことを認めるが、それは明細が一致する場合に限られる"
  - "明細が相抵触する場合、当該電子インボイスは所得税の目的においてのみ執行力を持つ"
  - "サービス税の明細要件はService Tax Regulations 2018のreg. 10にある"
  - "売上税の明細要件はSales Tax Regulations 2018のreg. 7にある"
  - "MyInvoisのデータは、ITA 1967 s.138(4)(aa)に基づきRMCDと共有される"
appliesTo: "SSTに登録済みで、かつ電子インボイスの対象範囲にも入っている事業者、そして両方の規制当局を満たさなければならないインボイス・テンプレートを設計するすべての人。"

verificationNeeded:
  - "RMCDが電子インボイスの視覚的表示とSST税務インボイスの明細要件とを整合させる専用ガイドを発行しているかどうか——mysst.customs.gov.my上では見当たらなかった"

lang: "ja"
masterLanguage: "en"
translationStatus: "pending"
sourceContentHash: null

status: "in-review"
aiAssisted: true
reviewer: null
reviewed: 2026-07-22
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

インボイスをMyInvoisで検証したからといって、それがSST税務インボイスになる
わけではない。この一文は、電子インボイス導入のどの論点よりも、SSTに登録済み
の事業者に多くの面倒をもたらしている。二つの規制当局が、同じ一枚の書類に
対してそれぞれ異なるものを求めているからである。

## 二つの制度の概要

| | 電子インボイス | SST税務インボイス |
| --- | --- | --- |
| 法令 | Income Tax Act 1967、**s.82C** | **Sales Tax Act 2018** / **Service Tax Act 2018**、s.21 |
| 規制当局 | **LHDN** | **RMCD** |
| 明細を定めるもの | e-Invoice Guideline（ITA 1967 s.134Aに基づく） | **reg. 7** Sales Tax Regulations 2018 / **reg. 10** Service Tax Regulations 2018 |
| 発行義務者 | 売上高段階により対象範囲に入る納税者 | **登録**製造業者及び登録者 |
| 検証 | LHDNへ送信され、LHDNにより検証される | なし——提出も参照番号も不要 |
| 目的 | 所得税上の収入・支出の証明 | SST入帳における課税の証拠 |

どちらも他方の代わりにはならない。売上高がRM100万未満のSST登録企業は電子
インボイスを免除されるが、それでもSST税務インボイスは発行し続ける。逆に、
規模が大きく未登録の企業はその逆となる。

## 実際にこれを規律する条文

Finance (No. 2) Act 2023により挿入された、1967年所得税法（Income Tax Act
1967）s.82C(4)：

> ある者が他の成文法に基づきインボイスを発行することを義務づけられている
> 場合、要求され得るその他の明細を含む電子インボイスは、当該法律に基づき
> 発行されたインボイスとみなされる——**ただし、当該電子インボイスの明細が
> 当該法律に基づくインボイス発行の要件と整合しない場合、当該電子インボイス
> は本法令の目的においてのみ有効かつ執行力を有する。**

このただし書は二度読むべきである。一つの文書で両方の制度を満たすことが
できるが、それは双方が求めるすべてを備えている場合に限られる。RMCD側で
要件に届かなければ、両方について瑕疵ある文書を発行したことにはならない
——完全に有効な所得税上の文書を手にしている一方で、**SST税務インボイス
はまったく存在しない**ということになる。

e-Invoice Guidelineの第2.6.3節及び第2.6.4節も、より平易な言葉で同じことを
述べている。納税者はどのような視覚的表示形式を採用してもよいが、2018年
売上税法（Sales Tax Act 2018）や2018年サービス税法（Service Tax Act 2018）
などの法律が求める明細を含めることが*推奨される*。視覚的表示がService Tax
Regulations 2018の明細を備えている場合、それはサービス税の目的で使用できる。

## RMCDが要求し、電子インボイスの項目リストが強制していないもの

**Service Tax Regulations 2018 regulation 10**——インボイスの通し番号、
インボイスの日付、登録者の氏名・名称、住所及び識別番号、課税対象サービス
を特定するに足る説明、値引きの有無、サービス税を除いた合計額、税率、及び
**別個の金額として表示された**サービス税の合計額、サービス税を含めた合計
額、並びに外貨建て金額がある場合はその時点の売渡レートでリンギット換算
した金額。

**Sales Tax Regulations 2018 regulation 7**は、これに加えて（その他とと
もに）**課税対象物品の売却先の氏名・名称及び住所**、並びに説明ごとの種類、
数量及び売上税を除いた金額を求めている。

ここから直接、二つの空白が生じる。

- **買い手の氏名・名称及び住所。** LHDNの55項目にはこれらが含まれている
  が、統合電子インボイスは買い手を*General Public*（一般消費者）とし、
  住所を*NA*とする。登録製造業者は、その方法で課税対象の売却を記録し
  ながら、なおreg. 7(d)を満たすことはできない。
- **税額を別個の金額として表示すること。** 電子インボイスは税の種類、
  税率及び金額をデータとして保持している。自社の*視覚的表示*がサービス
  税を独立した一行として印字するかどうかはテンプレートの判断事項だが
  ——reg. 10(f)はそれを法律上の問題にしている。

言語もLHDNではなくRMCDの規則である。SST税務インボイスはマレー語又は英語
で作成しなければならない。

## RMCDは自社の電子インボイス・データを見ることができるのか

できる。1967年所得税法（Income Tax Act 1967）s.138(4)(aa)は、LHDNが
MyInvoisのデータをRMCDと共有することを認めており、e-Invoice Guideline
の第2.6.1節は、当該項目リストがITA 1967に加え、2018年売上税法（Sales Tax
Act 2018）、2018年サービス税法（Service Tax Act 2018）、1990年ラブアン
事業活動税法（Labuan Business Activity Tax Act 1990）及び1967年石油
（所得税）法（Petroleum (Income Tax) Act 1967）に照らして設計されたこと
を確認している。あなたの二つの申告は、今や互いに見える状態にある。

## よくある誤り

- **稼働開始と同時にSST税務インボイスのテンプレートを廃止すること。**
  s.82Cのどこにも、2018年の両法のs.21を廃止する規定はない。
- **検証を受ければ不足している明細が補われると思い込むこと。** MyInvois
  はLHDNのスキーマに照らして検証を行うものであり、reg. 7やreg. 10に
  ついては何の判断もしない。
- **具名の買い手に対する課税対象の売却に統合電子インボイスを使用する
  こと。** それではreg. 7が求める買い手の明細を記載できない。
- **印刷された文書からSST登録番号を省くこと。** それは登録者にとって
  条件付き必須の電子インボイス項目であると同時に、reg. 10の明細でも
  ある。
- **SST-02申告書と電子インボイスを一つの業務フローとして扱うこと。**
  規制当局が異なり、期間も異なり、罰則も異なる。

## 次のステップ

二つの明細リストを、自社のXMLではなく、実際に印刷されたインボイスと並べ
て突き合わせること。XMLが満たすのはLHDNの要件であり、RMCDを満たさなけれ
ばならないのは視覚的表示のほうである。B2Cのレシートを統合している場合
は、それらの取引のうちに具名の買い手を必要とする課税対象の供給が含まれ
ていないか、別途確認すること。
