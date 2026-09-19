---
topicId: MY-TAX-0013
title: "基準期間と会計日の変更"
seoTitle: "マレーシアの基準期間：初年度と会計日"
slug: "basis-period-and-accounting-date"
category: "taxation"
subcategory: ["corporate-tax"]
summary: "section 21A がどのように会社の最初の基準期間を確定するか、なぜ設立初年度のSdn Bhdがそもそも賦課年度を持たないことがあるのか、そして会計日が変わったときに何を届け出るべきかを解説する。"

tier: "3"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "会社の基準期間は、1967年所得税法（Income Tax Act 1967、Act 53）のsection 21Aによって定められる。最初の決算が事業を開始した暦年と同じ年に終了する場合、その期間が最初の基準期間となる。翌年に終了する場合、最初の賦課年度には基準期間が全く存在しない。その後会計日が変わると、変更のあった年は欠落年度となり、内国歳入庁長官（Director General）がその年と翌年の基準期間を指示する。"
keyTakeaways:
  - "最初の会計期間が最初の基準期間となるのは、同じ暦年内に終了する場合に限られる"
  - "最初の決算が2年目に終了する場合、1年目には基準期間もForm Cも存在しない"
  - "最初の決算が12か月を超えて第3年まで及ぶ場合、最初の賦課はその第3年に繰り延べられる"
  - "会計日の変更はs.21A(3)のもとで欠落年度を生じさせ、内国歳入庁長官が指示する"
  - "Form CP204Bは、新しい決算の終了の30日前、または旧の対応日の30日前までに提出しなければならない"
  - "一つの賦課年度を超えて及ぶ決算は分割され、1か月に満たない端数は最初の期間に含まれる"
appliesTo: "新たに設立されたSdn Bhd、LLP、信託機構及び協同組合、並びに会計年度末を変更するすべての会社。"

verificationNeeded:
  - "現行のCP204B提出先、及びCP204Bの電子申告が可能かどうかを確認すること。LHDNのページには、期限は様式の裏面に印刷されている旨が記載されている"

obligations:
  - what: "Form CP204Bにより会計日の変更を届け出る"
    trigger: "change"
    withinDays: 30
    due: "30 days before the end of the new accounts where they close before the corresponding day, or 30 days before the corresponding day where they close after it"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.21A(3A)"
    consequence: "Penalties and instalment increases based on the old accounting period remain recoverable under s.112(3A) and s.107C(11B)"

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
  - title: "Public Ruling No. 8/2014 — Basis Period of a Company, Limited Liability Partnership, Trust Body and Co-operative Society"
    url: "https://www.hasil.gov.my/wp-content/uploads/PR_8_2014.pdf"
    publisher: "LHDN"
    date: "2014-12-01"
  - title: "Income Tax Act 1967 (Act 53), reprint as at 21 May 2024 — sections 21A, 77A, 107C and 112"
    url: "https://www.hasil.gov.my/wp-content/uploads/20240521-akta-cukai-pendapatan-1967-akta-53.pdf"
    publisher: "LHDN"
    date: "2024-05-21"
  - title: "Change In Accounting Period"
    url: "https://www.hasil.gov.my/en/syarikat/pertukaran-tarikh-penutupan-akaun-syarikat/"
    publisher: "LHDN"

entity: "Basis period"
relations:
  - { rel: "governs", to: "income-tax-act-1967" }
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "affects", to: "form-c-and-cp204" }
related: ["form-c-and-cp204", "corporate-tax-rates", "income-tax-act-1967"]
keywords: ["basis period Malaysia", "section 21A", "failure year", "CP204B", "change accounting date Malaysia", "tempoh asas"]
---

3月に設立され、翌年6月30日に最初の決算を締めるSdn Bhdには、**最初の暦年について賦課年度が全く存在しない**。基準期間もなく、Form Cもなく、課税所得もない。会社は毎年申告するものだと聞かされてきた取締役たちはこれに驚くが、これは単にsection 21Aの仕組みにすぎない。

## 最初の基準期間はどのように確定されるか

Section 21A(4)は三つの結果を定めており、Public Ruling No. 8/2014はこれらを設例とともに再述している。

| 最初の決算 | 条文 | 結果 |
| --- | --- | --- |
| 12か月未満で、事業を開始した暦年と同じ年に終了する | s.21A(4)(a) | その期間が最初の賦課年度の基準期間となる |
| 期間の長さを問わず、翌暦年のある日に終了する | s.21A(4)(b) | その期間は**第2**賦課年度の基準期間となり、**最初の年には基準期間が存在しない** |
| 12か月を超え、第3暦年に終了する | s.21A(4)(c) | その期間は**第3**賦課年度の基準期間となり、最初の2年には基準期間が存在しない |

同裁定のExample 4は、2013年11月1日から2015年4月30日までを最初の決算とするLLPについて、**YA2013及びYA2014のいずれにも基準期間がなく**、YA2015には18か月の基準期間があるとしている。

これが、重複する基準期間がほぼ姿を消した理由である。2014年に決算を締める最初の決算に対して現行のs.21A(4)が施行される前は、会社は同じ月をカバーする二つの基準期間を持つことがあり、s.42(2)のもとで按分されていた。今日では、重複の代わりに**欠落した賦課年度**が生じるため、その飛ばされた年について申告すべきものは何もない——そしてLHDNの申告プログラムは、事業をまだ開始していない会社はForm CP204を提出する必要もないことを確認している。

## 会計日が変わるとどうなるか

Section 21A(3)は、会社が基年内のある日に終了する12か月分の決算を作成した後、翌年の**対応日に終了する決算の作成に失敗した**場合に適用される。その年が**欠落年度**であり、内国歳入庁長官（Director General）はその欠落年度について、又はその年と翌年について、任意の長さで基準期間を指示することができる。

Paragraph 5.2は、**賦課年度の欠落がなく**、かつ**同一の賦課年度内に二組の決算が締められることがない**限り、納税者が実際に作成した期間が一般に受け入れられるとしている。以下の四つのパターンが続く。

| 日付の変更 | 欠落年度の基準期間 |
| --- | --- |
| 短縮し、同じ年に終了する（2月28日→12月31日） | **22か月**——短期期間だけでは一つの賦課年度内に二回の決算が残ることになるため、その短期期間と続く1年分が合算される |
| 短縮し、翌年に終了する（12月31日→4月30日） | その4か月の期間はそれ自身の年に終了するため、そのまま成立する |
| 延長して翌年に及ぶ（7月31日→10月31日） | その15か月の期間はそのまま成立する |
| 延長して二つの賦課年度にまたがる（2014年1月1日→2015年1月31日） | YA2014に7か月、YA2015に6か月に**分割**される |

この最後のパターンについて、同裁定はタイブレークルールを定めている。分割が不均等な場合、**1か月に満たない端数は最初の基準期間に含まれる**。

## 何を、いつ届け出なければならないか

その通知は**Form CP204B**であり、その時期は行政上のものではなく法定のものである。Section 21A(3A)は次のように要求している。

- 新しい決算が旧の対応日**より前**に終了する場合は、**新しい決算の終了の30日前**まで、または
- 新しい決算がそれより**後**に終了する場合は、**対応日の30日前**まで。

これを怠ることは単なる書類上の不備ではない。Section 112(3A)は、旧会計期間を基準としてs.112(3)のもとで既に課された罰金が**引き続き徴収可能である**と定めており、s.107C(11B)もsection 107Cのもとでの増額について同様に定めている。通知を怠っても、あなたが今や放棄した期限を基準に計算された罰金がリセットされることはない。

## よくある誤り

- **すべての会社が最初の暦年に申告すると思い込む。** 最初の決算が2年目に終了する場合、1年目には基準期間が全く存在しない。存在しない年についてゼロ申告のForm Cを提出すると、LHDNが後で取り消さなければならない記録が作られてしまう。
- **年度末を変更して監査人にだけ伝える。** CP204Bはs.21A(3A)に独自の30日の期限を持つ、別個の法定通知である。
- **短期期間は常に単独で成立すると思い込む。** 短縮された期間が一つの賦課年度内に二回の決算をもたらす場合、同裁定はそれらを合算する——これが22か月の基準期間が生じる仕組みである。
- **長い期間を均等に分割する。** 不均等な月数は、第2ではなく最初の基準期間に含まれる。

## 次のステップ

他のすべての法人の期限は基準期間から導かれる——基準期間が始まる30日前のCP204見積もり、2か月目から始まる分割払い、そして基準期間終了後7か月のForm Cである。この変更によって長い、または短い基準期間が生じた場合は、分割払いが基準期間の月数で割られるため、CP204見積もりも見直すべきである。
