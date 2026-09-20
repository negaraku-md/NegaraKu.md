---
topicId: MY-ACC-0011
title: "マレーシアの会計ソフト：いま選択を決める二つの能力"
seoTitle: "マレーシア会計ソフト：e-Invoice と MBRS への適合度"
slug: "accounting-software-malaysia"
category: "accounting"
subcategory: ["bookkeeping"]
summary: "マレーシア企業向けの会計ソフトウェアを、いま本当に重要な二つの軸——MyInvois にどう到達するか、そしてその出力が MBRS 申告に流し込めるか——でベンダー中立的に評価する方法。"

tier: "4"
mode: "practical"
contentType: "comparison"
sensitivity: "none"

answer: "機能一覧では、もはやマレーシアで販売される会計パッケージを区別できない。区別するのは二つの能力だ。第一に、ソフトウェアがどのようにして文書を MyInvois に送り込むか——無料の Portal 経由か、直接の API 統合か、それとも自らの資格情報で提出する仲介者経由か。第二に、その出力が MBRS 申告のために SSM の SSMxT タクソノミーへマッピングできるかどうか——なぜなら、どの会計パッケージも SSM へ直接申告することはないからだ。それ以外はすべて好みの問題である。"
keyTakeaways:
  - "LHDN は二つの伝送メカニズム——MyInvois Portal と API——を明文化しており、加えて委任された仲介者による提出も認めている"
  - "LHDN は SDK を公開しているが、e-Invoice ソフトウェアに対する認定制度、認証、承認ベンダー一覧は公開していない。「LHDN 承認済み」という主張はベンダー自身によるものだ"
  - "マレーシアの電子インボイスにおける唯一の本物の認定は MDEC によるもので、Peppol Authority として Peppol Service Provider と Peppol-Ready Solution Provider を対象とする——そして Peppol は MyInvois の要件ではない"
  - "どの会計パッケージも MBRS へ申告することはない。申告は SSM 自身の編制ツールで作成され、zip として mPortal にアップロードされる"
  - "したがって「MBRS-ready」とは、SSMxT の概念にマッピングできる安定した、書き出し可能な試算表を意味するのであって、申告ボタンのことではない"
  - "SSMxT タクソノミーは企業が拡張することができない。そのため、タクソノミーの中に居場所のない勘定科目表は、繰り返し発生するコストとなる"
  - "仲介者は自らが提出した文書しか取得できない。そのため、プロバイダーを切り替えても提出履歴は引き継がれない"
appliesTo: "会計ソフトウェアを選定または入れ替えようとしているマレーシア企業、および現行パッケージが実際に何をできるかを点検している経理チーム向け。"

verificationNeeded:
  - "特定製品に関する能力の主張は、本ページでは意図的に取り上げていない——現地化のカバー範囲はリリースごとに予告なく変わるため、各主張はベンダー自身が現在公開している文書に照らして確認すること"
  - "SSM は自らの MBRS ページ上で、サードパーティ製 XBRL 編制ソフトウェアの承認済みまたは認定済みリストを公開していない。MBRS 認証に関するベンダーの主張に依拠する前に、SSM に確認すること"
  - "e-Invoice Guideline と Specific Guideline は頻繁に改訂される——統合要件を確定したものとして扱う前に、現行版を確認すること"

lang: "ja"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "2723b917b69eeed3"

status: "published"
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
  - title: "Software Development Kit (SDK) for the LHDNM MyInvois System"
    url: "https://sdk.myinvois.hasil.gov.my/"
    publisher: "LHDN"
  - title: "IRBM e-Invoice Guideline"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
  - title: "Peppol Service Providers — National e-Invoicing"
    url: "https://www.mdec.my/national-einvoicing/peppol-service-providers"
    publisher: "MDEC"
  - title: "SSMxT 2022 Architecture Document"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf"
    publisher: "SSM"
  - title: "MBRS Preparation Tool"
    url: "https://www.ssm.com.my/Pages/Services/Other-Services/XBRL%20250918/MBRS-Preparation-Tool.aspx"
    publisher: "SSM"

entity: "Accounting software"
relations:
  - { rel: "related-to", to: "myinvois-integration" }
  - { rel: "affects", to: "mbrs-2-filing-guide" }
  - { rel: "related-to", to: "sdn-bhd-bookkeeping" }
related: ["sdn-bhd-bookkeeping", "mbrs-2-filing-guide", "mbrs-tagging-errors", "myinvois-integration", "e-invoice-accounting-records", "bookkeeping-in-house-vs-outsourced", "e-invoicing", "accounting-records-section-245"]
keywords: ["accounting software Malaysia", "e-invoice compliant accounting software", "MyInvois integration software", "MBRS XBRL software Malaysia", "LHDN approved accounting software", "SSMxT taxonomy export"]
---

マレーシア向け会計ソフトの「比較記事」というジャンルは、とうに解決済みだ。十製品、
それぞれに一段落、誰も使わない機能対照表、そしてアフィリエイトリンク。もともと役に
立ったことなどなく、e-Invoice と MBRS 2.0 が導入されて以降は、積極的に読者を誤導
するものになっている。もはや製品を区別しない要素で製品をランク付けしているからだ。

いま製品を区別するのは二つの能力だ。どちらも機能対照表には載らない。

## 軸1：ソフトウェアはどうやって文書を MyInvois に送り込むか

LHDN は**二つの伝送メカニズム**——MyInvois Portal と API——を明文化しており、それ
とは別に、納税者が**仲介者（intermediary）**を任命して代理提出させることも認めている。
これによって実務上四つの形態が生まれ、購入するソフトウェアによってそのうちどれが
自分に開かれているかが決まる。

| 経路 | ソフトウェアが行うべきこと | 確認すべきこと |
| --- | --- | --- |
| **Portal のみ** | 何もしなくてよい。MyInvois 上で文書を手入力するか、一括アップロードする | ソフトウェアが Portal の一括アップロード用スプレッドシートの様式に合ったファイルを書き出せるか、それとも結局は再入力になっているか |
| **直接 API** | UBL 2.1 文書を作成・署名し、トークンを管理し、非同期の検証を処理する | マレーシア向けの現地化が、標準的な売上インボイスだけでなく、自己請求（self-billed）の文書種別と輸入附属明細のフィールドまで対応しているか |
| **仲介者またはミドルウェア経由** | 決められた頻度で、整った取引データを書き出す | 提出に使われるのは誰の資格情報か、データは誰が保持するか、そして退出時に何を持ち出せるか |
| **Peppol サービスプロバイダー経由** | ミドルウェアと同様だが、Peppol アクセスポイントを介する | 取引先との相互運用可能な交換が本当に必要かどうか——Peppol は MyInvois の要件ではない |

これらのあいだの選択は、量とアーキテクチャの問題であり、
[MyInvois 統合](/ja/taxation/myinvois-integration)で扱っている。ここで扱うべきなのは
ソフトウェア側の帰結だ。API 統合の経路を持たないパッケージであっても、コンプライアン
スを妨げるわけではない——それはあなたを Portal に縛りつけるだけであり、Portal のコ
ストはライセンス料ではなく、キー入力の手間と月末の集中作業である。

**契約書に書き込む価値のある仲介者の細目:** 仲介者は自らが提出した e-Invoice しか閲覧・
取得できない。プロバイダーを変更しても、提出履歴はついてこない。並行運用の期間を計画
し、自分自身のアーカイブを保持すること。

## 疑ってかかるべき認定の主張

LHDN は SDK、API ドキュメント、そして FAQ を公開している。しかし e-Invoice ソフト
ウェアに対する認定制度、認証プログラム、承認ベンダー一覧は公開していない。ある製品が
**LHDN 承認済み**として売り込まれているなら、その地位はベンダー自身による自己申告に
すぎない。その根拠となる文書を見せてもらうこと。

マレーシアの電子インボイスには本物の認定が一つだけ存在するが、それは別の主体に属する
ものだ。**MDEC はマレーシアの Peppol Authority**であり、二つの異なる役割を認定して
いる。

| 役割 | それは何か |
| --- | --- |
| **Peppol Service Provider（SP）** | Peppol アクセスポイント——文書をルーティングする接続ゲートウェイ——を運営する |
| **Peppol-Ready Solution Provider（PRSP）** | エンドユーザー向けに Peppol 準拠のソフトウェアや ERP を構築する |

どちらのリストも MDEC が公開している。どちらも LHDN の承認ではなく、どちらも
e-Invoice の義務化に準拠するために必須のものでもない。MDEC の認定を保有するベンダー
は、Peppol 標準への適合を実証済みであり、それは本物の資格である——Peppol にとっては。

## 軸2：出力が MBRS 申告に流し込めるか

この分野全体の見方を変える事実がここにある。**どの会計パッケージも財務諸表を SSM へ
提出することはない。**

申告は SSM 自身の**MBRS Preparation Tool（mTool）**で作成され、これが MBRS portal
にアップロードする zip を生成する。それが受理される提出物だ。台帳が何を出力しようと
も、それがその工具を通過して初めて MBRS 申告になる。

したがって、ソフトウェアの主張としての「MBRS-ready」は、誠実に言えばただ一つのこと
しか意味しえない。出力が SSM の**SSMxT**タクソノミーへきれいにマッピングできる形に
なっている、ということだ。それを決めるのは三つの特性である。

- **安定した、書き出し可能な試算表**——勘定科目コードが年ごとに変わらないこと。コードが動くたびに、マッピングはゼロから作り直しになる。
- **ぶれない表示基準。**表示形式を切り替えると、数字が同一であってもマッピングをやり直さざるを得なくなる。
- **すべての行に着地点がある勘定科目表。**SSMxT のアーキテクチャは、事業体が**タクソノミーを拡張してはならない**と定めている——会社固有の拡張は禁止されており、詳細はテキストブロックに収めるべきものだ。対応する概念のない勘定科目は、毎年手作業での判断を要することになる。

下流には、ソフトウェアを責める前に知っておく価値のある、機械的な落とし穴が二つ待ち
構えている。費用は SSMxT では**正数**として格納され、これはほとんどの台帳の書き出し
とは逆になる。また、千単位で表示された数字は正しい `decimals` 属性を持たなければな
らない——誤った属性は検証を黙って通過し、実際より千倍大きい、あるいは千倍小さい数字
を申告してしまう。

## ベンダーに送る評価チェックリスト

1. その製品は現在、どの MyInvois 伝送メカニズムに対応しているか——Portal 書き出し、直接 API、それとも御社自身の仲介サービス経由の提出か。
2. API の場合:現地化は**自己請求（self-billed）**の e-Invoice と輸入品の附属明細フィールドをカバーしているか、それとも標準的な売上インボイスだけか。
3. 文書は誰の資格情報で提出されるのか、検証済みの文書は誰が保持するのか。
4. コンサルタントなしで、安定した勘定科目コードを持つ完全な試算表を、機械可読な形式で書き出せるか。
5. 貴社は Peppol SP または PRSP としての MDEC 認定を保有しているか——また LHDN 承認をうたうのであれば、それを裏付ける文書は何か。
6. 退出時に、何を持ち出せるのか:台帳か、マッピングか、提出履歴か。

## 本ページが製品名を挙げない理由

ある能力について書けるのは、ベンダーか LHDN がそれを公開している場合に限られるから
であり、また、ベンダーの機能紹介ページは変更履歴もないままリリースごとに変わっていく
からだ。今日書かれた製品比較は、ソフトウェアのスナップショットではなく、マーケティン
グ文言のスナップショットにすぎない。上のチェックリストはそのスナップショットより長く
生き延びるが、ランキング表はそうはいかない。

## よくある誤り

- **「LHDN 承認済み」の主張を信じること。**LHDN はそのようなリストを一切公開していない。
- **MDEC の Peppol 認定を LHDN の承認と混同すること、**あるいは Peppol を必須だと見なすこと。
- **「申告ボタン」を買うこと。**mTool の出力以外、何も MBRS へ申告されることはない。
- **「MBRS-ready」を認証だと読むこと。**それが意味しうるのはせいぜい、きれいで安定した書き出しがあるということだけだ。
- **勘定科目表を毎年変更し、**そのたびにマッピングの費用を払い直すこと。
- **売上インボイスだけを評価すること。**ほとんどの導入を破綻させるのは自己請求（self-billed）の量である。
- **検証が桁の誤りを検出してくれると思い込むこと。**千倍の桁違いも検証を通過してしまう。

## 次にすべきこと

買い物に出かける前に、いま手元にあるものに対して二つのテストを行うこと。完全な試算
表を書き出し、すべての科目に明白な SSMxT の居場所があるかを確認する。次に、代理店
手数料や外国サプライヤーへの支払いなど、自己請求（self-billed）の取引を一つ取り上げ、
それを MyInvois まで一気通貫で追跡する。この二つのうち先に失敗したほうこそが、あな
たが実際に買おうとしているものである。
