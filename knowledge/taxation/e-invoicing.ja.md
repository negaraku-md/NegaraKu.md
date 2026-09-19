---
topicId: MY-TAX-0003
title: "マレーシアの電子インボイス：MyInvoisの始め方"
seoTitle: "マレーシア電子インボイス：MyInvois出発点"
slug: "e-invoicing"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "マレーシアの電子インボイス義務化のナビゲーションページ——MyInvoisの検証の仕組み、自社の対象範囲がいつ始まるか、そしてどの詳細ガイドが自分の疑問に答えるか。"

tier: "3"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "電子インボイスは、無料のMyInvoisポータルまたはAPI連携システムを通じて、請求データをLHDNのMyInvoisシステムに送信し検証を受けることを求める。検証を受けた書類には、固有識別番号（Unique Identifier Number）とQRコードが発行される。この義務は年間売上高に応じて段階的に導入され、最終段階は2026年1月1日から年間売上高RM500万までの事業者に及び、年間売上高RM100万未満の事業者は免除される。各段階にはそれぞれ独自の経過的緩和期間がある。"
keyTakeaways:
  - "検証はMyInvoisを通じて行われ、それが完了して初めて当該書類は所得税上のインボイスとして機能する"
  - "段階は四つで、五つ目はない——最後の段階は2026年1月1日に始まり、年間売上高RM500万までを対象とする"
  - "年間売上高RM1,000,000未満の事業者は免除される"
  - "自社の段階はFY2022またはYA2022の数値によって固定され、その後は変わらない"
  - "LHDNの検証を受けた電子インボイスは、SSTの税務インボイス規則を自動的には満たさない——それは別個の書類要件である"
appliesTo: "電子インボイス義務化に備え、またはその下で運用している事業主、財務チーム及びシステム管理者。"

verificationNeeded: []

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
  - title: "IRBM e-Invoice Guideline"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "IRBM e-Invoice Specific Guideline"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "MyInvois Portal"
    url: "https://myinvois.hasil.gov.my/"
    publisher: "LHDN"

entity: "e-Invoicing and MyInvois"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "explained-in", to: "myinvois-phases" }
  - { rel: "explained-in", to: "myinvois-integration" }
  - { rel: "related-to", to: "consolidated-e-invoice" }
  - { rel: "related-to", to: "self-billed-e-invoice" }
  - { rel: "related-to", to: "e-invoice-vs-tax-invoice" }
related: ["myinvois-phases", "myinvois-integration", "e-invoice-data-fields", "consolidated-e-invoice", "self-billed-e-invoice", "e-invoice-vs-tax-invoice", "e-invoice-accounting-records"]
keywords: ["e-Invoice Malaysia", "MyInvois", "e-invois LHDN", "e-invoicing phases Malaysia", "MyInvois validation"]
---

かつて、インボイスは発行しさえすれば有効だった。電子インボイス義務化の下では、
LHDNがそう認めるからこそ有効になる——書類はMyInvoisに送信され、検証を受けて
はじめて、所得税上の役割を果たす。

このただ一つの変化が、後続のあらゆる疑問を生み出しており、その大半にはすでに
専用の回答が用意されている。

## 検証の仕組み——六つのステップ

1. 供給者は取引データをMyInvoisに送信する。無料のポータルに手入力するか、
   API連携システムを通じて自動送信するかのいずれかである。
2. LHDNが構造と必須項目をほぼリアルタイムで検証する。
3. 検証に成功すると**固有識別番号**（Unique Identifier Number）とQRコードが
   発行される。
4. 供給者は検証済み書類を買い手と共有する。
5. 買い手はQRコードをLHDNの記録と照合して確認できる。
6. 拒否・取消は許容された期間内に処理しなければならない。

## どのガイドが必要か

| 疑問が | 読むべきガイド |
| --- | --- |
| これはいつ自社に適用されるのか？ | [MyInvoisの段階、基準額と緩和日程](/ja/taxation/myinvois-phases) |
| ポータル、API、それともミドルウェア提供者？ | [MyInvoisシステム連携](/ja/taxation/myinvois-integration) |
| 実際に何のデータを送らなければならないのか？ | [電子インボイス・データ項目リファレンス](/ja/taxation/e-invoice-data-fields) |
| 一件ずつ発行せず、小売販売をまとめてよいか？ | [統合電子インボイス](/ja/taxation/consolidated-e-invoice) |
| 自社の供給者が海外にいる、または個人である | [自己請求電子インボイス](/ja/taxation/self-billed-e-invoice) |
| これは自社のSST税務インボイスに取って代わるのか？ | [電子インボイス vs SST税務インボイス](/ja/taxation/e-invoice-vs-tax-invoice) |
| どのくらいの期間、保存する必要があるのか？ | [電子インボイスと会計記録](/ja/accounting/e-invoice-accounting-records) |

## よくある四つの誤解

**第五段階は存在しない。** 段階的導入は年間売上高に基づく四段階で行われ、
2026年1月1日から始まる年間売上高RM500万までの群が最後である。年間売上高
**RM1,000,000**未満の事業者は、海外の外交機関及び事業を営んでいない個人と
ともに免除される。これは、*新規開業*事業者に適用される別の**2026年7月1日**
開始日と矛盾するものではない——2023年から2025年の間に開業し、年間売上高が
RM100万以上の事業者は、その日付から対象となる。これはFY2022基準を持たない
新規参入者のための規則であって、第五の売上高段階ではない。

**自社の段階は固定であり、変動しない。** 段階はFY2022の監査済財務諸表、
または年結が変更された場合は按分されたYA2022の申告書によって決定され、
その後は変わらない。後に基準額を上回る成長をしても、より早い段階に移る
ことはなく、縮小しても対象から外れることはない。

**緩和期間は段階の日程と同じではない。** 各段階には、LHDNが不遵守について
措置を取らない経過期間が設けられており、第4段階の緩和期間は以前の段階
よりもかなり長い。義務化の日付を執行の日付と思い込まず、段階のガイドを
読むこと。

**検証済みの電子インボイスは、自動的にSST税務インボイスになるわけでは
ない。** 両制度はそれぞれ別個の書類要件を持ち、法定上の立場としては、
電子インボイスの明細が他の成文法のインボイス要件と整合しない場合、その
電子インボイスは1967年所得税法（Income Tax Act 1967）の目的においての
み有効である。登録SST事業者は、両方を満たす書類を必要とする。

## よくある間違い

- 義務化の日付を待ってからテストを始めること。TINの検証と連携の不具合は、
  実際の取引量の下ではじめて表面化する。
- すべての顧客に品目別の電子インボイスが必要だと思い込むこと。実際には
  多くのB2C取引は統合できる——ただし禁止対象の業種を除く。
- 海外供給者に対する自己請求義務、及び自らは何も発行しない個人への支払に
  対する自己請求義務を見落とすこと。
- これをITプロジェクトとして扱うこと。本番稼働時の失敗の多くは、連携の
  不具合ではなく、汚れた顧客・供給者マスタデータが原因である。
- MyInvoisを自社のアーカイブだと思い込むこと。LHDNは検証済み書類について
  保存の保証を一切公表しておらず、保存義務は引き続き自社にある。

## 次のステップ

自社がいつ、あるいはそもそも対象範囲に入るのかまだわからない場合は、
段階ガイドから始めるとよい——そこには売上高の区分、免除基準額、新規事業者
向けの規則、そしてすべての緩和期間の終了日が載っている。すでに対象範囲に
入っていて、どう送信するかを選ぼうとしている場合は、連携ガイドが取引量に
応じてポータル、直接API、ミドルウェアの各経路を比較している。
