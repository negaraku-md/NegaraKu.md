---
topicId: MY-TAX-0014
title: "電子インボイス データ項目リファレンス"
seoTitle: "マレーシア電子インボイスデータ項目：55項目リファレンス"
slug: "e-invoice-data-fields"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "全55の電子インボイス必須項目とその必須・任意の別、附属書の項目、LHDNのコードリスト、そして各種エラーごとにどの検証機能が弾くかをまとめたもの。"

tier: "4"
mode: "practical"
contentType: "data"
sensitivity: "none"

answer: "LHDNは電子インボイスを発行するために55のデータ項目を要求しており、これらは八つのカテゴリーに分類される。大半は必須であり、20項目は任意、8項目は条件付き必須——SST及び観光税の登録番号、原電子インボイス参照番号、通貨換算レート、税率、そして二つの免税関連項目である。附属書は、物品の輸入及び輸出について必須となる税関様式参照番号を追加する。"
keyTakeaways:
  - "Appendix 1に55項目があり、八つのカテゴリーに分類され、さらにAppendix 2に附属書がある"
  - "XMLまたはJSON、いずれもUBL 2.1に準拠する"
  - "8項目は常に必須ではなく、条件付き必須である"
  - "電子インボイスの日付及び時刻は、その時点の現在日時でなければならない"
  - "七つの検証機能が動作する——即時が三つ、バックグラウンドが四つ"
  - "電子インボイス種別、税種別、通貨、MSIC、州及び計量単位のコードリストはSDKで公開されている"
  - "瑕疵のある電子インボイスは、1967年所得税法（Act 53）s.82C(8)に基づき3日以内に代替インボイスへ差し替えることができる"
appliesTo: "MyInvois連携を構築する開発者、マスターデータのマッピングを行うERPコンサルタント、そして拒否された提出物のデバッグを行う財務チーム向け。"

verificationNeeded:
  - "細分化された検証エラーコード（CF、DS、STプレフィックス）の完全な公開リスト——SDKは七つの検証機能カテゴリーと標準HTTPエラーコードを文書化しているが、コードと条件を網羅的に対応させた表は公開していない"
  - "エンドポイントごとのAPIレート制限——SDKはFAQページでIntegration Practicesに言及しているが、数値上の上限は示していない"

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
  - title: "e-Invoice Guideline (Version 4.7) — Appendices 1 and 2"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "MyInvois SDK — document validation rules"
    url: "https://sdk.myinvois.hasil.gov.my/document-validation-rules/"
    publisher: "LHDN"
  - title: "MyInvois SDK — code lists"
    url: "https://sdk.myinvois.hasil.gov.my/codes/"
    publisher: "LHDN"
  - title: "MyInvois SDK — standard error response"
    url: "https://sdk.myinvois.hasil.gov.my/standard-error-response/"
    publisher: "LHDN"
  - title: "e-Invoice Specific Guideline (Version 4.8) — Appendix 1, list of general TIN"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"

entity: "e-Invoice data fields"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "explained-in", to: "myinvois-integration" }
  - { rel: "related-to", to: "self-billed-e-invoice" }
related: ["e-invoicing", "myinvois-phases", "myinvois-integration", "self-billed-e-invoice", "consolidated-e-invoice"]
keywords: ["e-Invoice data fields", "55 fields e-Invoice", "MyInvois mandatory fields", "e-Invoice validation error", "UBL 2.1 Malaysia", "medan data e-invois"]
---

拒否された提出物は、突き詰めれば必ず次の二つのどちらかに行き着く——LHDNが必須と
して扱う項目をERPが任意として扱っている、あるいはLHDNのリストにないコード値を
使っている、のいずれかである。本ページは、e-Invoice Guideline第4.7版の
Appendix 1及びAppendix 2に公開されている項目リストである。

形式は**XMLまたはJSON**で、いずれも**UBL 2.1**に準拠する。LHDNはこの55項目を
八つのカテゴリーに分類している：Address、Business Details、Contact Number、
Invoice Details、Parties、Party Details、Payment Info、及びProducts / Services。

## 55の項目

**M** = 必須 · **C** = 条件付き必須 · **O** = 任意

### 各当事者及び当事者詳細

| # | 項目 | 状態 | 備考 |
| --- | --- | --- | --- |
| 1 | 供給者名 | M | |
| 2 | 買い手名 | M | 統合電子インボイスではGeneral Publicと記載 |
| 3 | 供給者のTIN | M | 取得できない場合は汎用TINコードを適用 |
| 4 | 供給者の登録／識別／パスポート番号 | M | SSM登録者は**新12桁BRN**のみを使用 |
| 5 | 供給者のSST登録番号 | **C** | SST登録者は必須 |
| 6 | 供給者の観光税登録番号 | **C** | 観光税登録者は必須 |
| 7 | 供給者のEメール | O | |
| 8 | 供給者のMSICコード | M | 5桁の数字；外国の供給者で取得できない場合は00000 |
| 9 | 供給者の事業活動内容 | M | |
| 10 | 買い手のTIN | M | |
| 11 | 買い手の登録／識別／パスポート番号 | M | |
| 12 | 買い手のSST登録番号 | **C** | SST登録者は必須 |
| 13 | 買い手のEメール | O | |

### 住所及び連絡先

| # | 項目 | 状態 |
| --- | --- | --- |
| 14 | 供給者の住所 | M |
| 15 | 買い手の住所 | M |
| 16 | 供給者の連絡先電話番号 | M |
| 17 | 買い手の連絡先電話番号 | M |

### インボイス詳細

| # | 項目 | 状態 | 備考 |
| --- | --- | --- | --- |
| 18 | 電子インボイスバージョン | M | 自主開示ではSVDP 1.2／1.3のみ |
| 19 | 電子インボイス種別 | M | 下記のコードリストを参照 |
| 20 | 電子インボイスコード／番号 | M | 供給者自身の参照番号 |
| 21 | 原電子インボイス参照番号 | **C** | クレジットノート、デビットノート及び返金ノートでは必須 |
| 22 | 電子インボイスの日付及び時刻 | M | **現在の日付及び時刻でなければならない** |
| 23 | 発行者の電子署名 | M | サービスプロバイダーを利用する場合はその証明書 |
| 24 | インボイス通貨コード | M | |
| 25 | 通貨換算レート | **C** | 通貨がリンギットでない場合は必須 |
| 26 | 請求頻度 | O | |
| 27 | 請求期間 | O | |

### 製品及びサービス

| # | 項目 | 状態 | 備考 |
| --- | --- | --- | --- |
| 28 | 分類コード | M | LHDNのカタログによる3桁のコード |
| 29 | 製品又はサービスの説明 | M | 統合電子インボイスではレシート参照番号 |
| 30 | 単価 | M | |
| 31 | 税種別 | M | 明細レベル及びインボイスレベル |
| 32 | 税率 | **C** | |
| 33 | 税額 | M | 明細レベル及びインボイスレベル |
| 34 | 免税の詳細 | **C** | 免税が適用される場合は必須 |
| 35 | 免税額 | **C** | 免税が適用される場合は必須 |
| 36 | 小計 | M | 明細レベルのみ |
| 37 | 税抜合計 | M | 明細レベル及びインボイスレベル |
| 38 | 税込合計 | M | インボイスレベルのみ |
| 39 | 純額合計 | O | インボイスレベルのみ |
| 40 | 支払総額 | M | インボイスレベルのみ |
| 41 | 端数調整額 | O | インボイスレベルのみ |
| 42 | 税種別ごとの課税対象額合計 | O | インボイスレベルのみ |
| 43 | 数量 | O | |
| 44 | 計量単位 | O | |
| 45 | 割引率 | O | |
| 46 | 割引額 | O | |
| 47 | 手数料／料金率 | O | |
| 48 | 手数料／料金額 | O | |

### 支払情報

| # | 項目 | 状態 |
| --- | --- | --- |
| 49 | 支払方法 | O |
| 50 | 供給者の銀行口座番号 | O |
| 51 | 支払条件 | O |
| 52 | 前払金額 | O |
| 53 | 前払日 | O |
| 54 | 前払参照番号 | O |
| 55 | 請求書参照番号 | O |

## 附属書の項目

| 項目 | 状態 | 適用対象 |
| --- | --- | --- |
| Customs Form No. 1、9等の参照番号 | **必須** | 物品の輸入 |
| Customs Form No. 2の参照番号 | 任意 | 物品の輸出 |
| 配送先の名称／住所／TIN／登録又はパスポート番号 | 任意 | 買い手以外の者へ物品を配送する場合 |
| Incoterms | 任意 | 物品の輸出入 |
| 製品関税コード | 任意 | 物品のみ |
| 自由貿易協定情報 | 任意 | 該当する場合、輸出のみ |
| 認定輸出者の認可番号（例：ATIGA番号） | 任意 | 該当する場合、輸出のみ |
| 原産国 | 任意 | 物品の輸出入 |
| その他の費用の詳細 | 任意 | 物品の輸出入 |

LHDNは、附属書の要件は随時更新される可能性があると注記している。

## コードリスト

**電子インボイス種別**

| コード | 種別 | | コード | 種別 |
| --- | --- | --- | --- | --- |
| 01 | Invoice | | 11 | Self-billed Invoice |
| 02 | Credit Note | | 12 | Self-billed Credit Note |
| 03 | Debit Note | | 13 | Self-billed Debit Note |
| 04 | Refund Note | | 14 | Self-billed Refund Note |

**税種別**

| コード | 種別 |
| --- | --- |
| 01 | 売上税 |
| 02 | サービス税 |
| 03 | 観光税 |
| 04 | 高額物品税 |
| 05 | 低額物品売上税 |
| 06 | 該当なし |
| E | 免税（該当する場合） |

**汎用TIN**（e-Invoice Specific Guideline, Appendix 1）

| コード | 用途 |
| --- | --- |
| EI00000000010 | General Public——MyKadのみを保有するマレーシア国民個人；統合電子インボイスにおける買い手；統合自己請求電子インボイスにおける供給者 |
| EI00000000020 | 外国の買い手又は外国の配送先 |
| EI00000000030 | 外国の供給者、自己請求 |
| EI00000000040 | 政府、州及び地方当局、法定機関、免除機関 |

SDKはこのほか、分類コード、国コード、通貨コード、MSICコード、支払方法、州コード
及び計量単位も公開している。

## 検証機能とそれを作動させる原因

| 検証機能 | タイミング | 典型的な失敗原因 |
| --- | --- | --- |
| **Structure** | 即時 | XMLまたはJSONの形式不正、あるいはUBL 2.1の下でその種別及びバージョンに求められる構造に文書が一致しない場合 |
| **Core Fields** | 即時 | 必須項目が欠落している場合 |
| **Code** | 即時及びバックグラウンド | LHDNのリストにない通貨、税種別又はその他のコード値 |
| **Signature** | バックグラウンド | 電子署名の検証に失敗した場合 |
| **Taxpayer** | バックグラウンド | 文書中で参照されたTINが、その文書の発行日時点で有効でない場合 |
| **Referenced Documents** | バックグラウンド | クレジットノート、デビットノート又は返金ノートが、発行時点で有効な電子インボイスでない文書を参照している場合 |
| **Duplicate Document** | バックグラウンド | ほぼ同一の文書が既に提出されている場合——エラーコード**DS302** |

文書のステータスは**Submitted → Valid**又は**Invalid**へと遷移する。*Submitted*
は構造及びコア項目のチェックに合格したことのみを意味し、バックグラウンドの検証
機能によってなお失敗と判定される可能性がある。

トランスポート層のエラーには標準的なHTTPマッピングが用いられる：`BadRequest`及
び`BadArgument`（400）、`Unauthorized`（401）、`Forbidden`（403）、
`NotFound`（404）、`TooManyRequests`（429、`Retry-After`ヘッダー付き）、
`InternalServerError`（500）、`NotImplemented`（501）、
`ServiceUnavailable`（503）。

## 不備のある文書の訂正

- **検証から72時間以内** ——供給者はキャンセルすることができ、あるいは買い手が
  拒否を請求し、供給者がそれを受けてキャンセルすることもできる。72時間を超える
  と、いずれも不可能になる。
- **瑕疵のある電子インボイスの発行から3日以内** ——1967年所得税法（Act 53）
  s.82C(8)により**代替電子インボイス**が認められる。
- **それ以降** ——項目21で原文書を参照するクレジットノート、デビットノート又は
  返金ノートの電子インボイスを発行する。

## よくある誤り

- **旧いSSM登録番号を送信すること。** 項目4は、SSM登録者について新12桁BRNを
  要求する。
- **項目22を遡及した日付にすること。** LHDNは現在の日付及び時刻を要求しており、
  遡及した文書は失敗する。
- **外国の供給者についてMSICを空欄にすること。** 空値ではなく00000を使用する
  こと。
- **税種別06を免税の意味で使用すること。** 06は*該当なし*であり、免税はEであっ
  て、これは項目34及び35を必須の状態にする。
- **失敗した提出物を変更せずに再送すること。** 重複検証機能が受理する代わりに
  DS302を発生させる。
- **Submittedという応答を成功として扱うこと。** *Valid*のみが成功である。

## 次のステップ

コードを書き始める前に、項目3、4、5、8、10、11及び12を自社の顧客及び供給者の
マスターデータと突き合わせること——実際にクリーンアップの時間がかかるのはこの
七つである。その上で送信経路を決めること。なぜならPortalはこれらの項目をフォー
ムで埋めてくれるが、APIではそれらが自分自身の問題になるからである。
