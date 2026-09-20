---
topicId: MY-TAX-0011
title: "C様式とCP204：会社税の見積りと納付"
seoTitle: "マレーシアのC様式とCP204：見積りと加算税"
slug: "form-c-and-cp204"
category: "taxation"
subcategory: ["corporate-tax"]
summary: "Sdn BhdがどのようにCP204（予定納税額の見積り）で税額を見積り、CP204A（見積りの修正）で修正し、C様式を提出するか、そして不正確な見積りがsection 107C(10)の下で正確にいくらの代償を伴うかを解説する。"

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "会社は、基期開始の30日前までにCP204を呈出し、毎月15日を期限とする均等な月次分割納付で見積り額を納付し、会計年度終了後7か月以内にC様式を提出する。1967年所得税法（Act 53）s.107C(10)の下、最終税額が最後の見積りを当該最終税額の30%を超えて上回る場合、内国歳入庁（LHDN）は30%の許容幅を超える部分の10%を、通知なしに加算する。"
keyTakeaways:
  - "CP204は基期開始の30日前までに期限が来る。新設会社の場合は、営業開始から3か月以内となる"
  - "セーフハーバーは算術で決まる：最後の見積りが最終税額の少なくとも70%でなければ、s.107C(10)が牙をむく"
  - "s.107C(10)の加算額は、30%の許容幅を超える不足額部分の10%であり、不足額全体の10%ではない"
  - "CP204をまったく呈出しないのは、さらに悪い：s.107C(10A)は納付すべき税額全体に10%を加算する"
  - "CP204Aによる修正は、基期の第6、9及び11か月にのみ認められる"
  - "第2年度以降、見積りは前年度の数字の85%を下回ってはならない（s.107C(3)）"
  - "C様式は会計期間終了後7か月以内に期限が来る。電子申告（e-Filing）には1か月の猶予期間がある"
appliesTo: "マレーシアの会社、LLP、信託団体又は協同組合を担当する取締役、財務マネージャー及び会計士向け。"

faq:
  - q: "マレーシアでCP204の過少見積り加算税はいくらか？"
    a: "1967年所得税法（Act 53）s.107C(10)の下、加算額は不足額が最終納税額の30%を超える部分の10%である。最終税額がRM400,000で、最後の見積りがRM120,000であった場合、不足額はRM280,000、30%の許容幅はRM120,000であり、加算額はRM160,000の10%、すなわちRM16,000となる。これは通知の送達なしに課される。"
  - q: "CP204の見積りはいつ修正できるか？"
    a: "基期の第6、9又は11か月に限り、あるいはその三回すべてにおいて、s.107C(7)の下でCP204A（見積りの修正）を用いて修正できる。第6か月の修正は第5又は第6回の分割納付から、第9か月の修正は第8又は第9回から、第11か月の修正は第11回の分割納付から効力を生じうる。この三つの月以外に修正の窓はない。"
  - q: "新規に設立されたSdn Bhdは、CP204を呈出しなければならないか？"
    a: "多くの場合、不要である。Section 107C(4A)は、マレーシアに居住し、かつマレーシアで設立された会社であって、営業を開始したばかりであり、普通株式の払込資本をRM250万以下に維持しているものを、最初の2賦課年度について免除する。資本がRM250万を超える関連会社により50%超が所有されている場合、又は外国会社若しくは非市民たる個人により20%超が所有されている場合、この免除は失われる。"
  - q: "CP204を一度も提出しなかった場合、何が起こるか？"
    a: "二つのことが起こりうる。LHDNはs.107C(8)の下でCP205の分割納付通知を発行することがあり、paragraph 120(1)(f)の下での訴追はRM200からRM20,000の罰金又は最長6か月の禁錮を招きうる。これとは別に、s.107C(10A)は最終的な納税額全体に10%を加算し、これは通常、いかなる過少見積り加算税よりもはるかに高くつく。"
  - q: "C様式はいつ期限が来るか？"
    a: "s.77A(1)の下、基期を構成する会計期間の終了翌日から7か月以内である。LHDNは、毎年の申告書呈出プログラム（Return Form Filing Programme）の下でe-C提出についてさらに1か月を認めており、その延長はs.103(1)の下での納付残額の支払いにも及ぶ。"
  - q: "過少見積り加算税は免除されうるか？"
    a: "Section 107C(11)は、内国歳入庁長官に対し、正当な理由が示された場合にs.107C(9)、(10)又は(10A)の下で課された加算額の全部又は一部を免除し、既に納付済みであれば還付する裁量を与えている。それは権利ではなく裁量であり、書面で提出された事実に基づいて行使される。"

verificationNeeded:
  - "LHDNがs.107C(11)の免除申請について書面による減免方針を公表しているかどうかを確認すること。現時点で文書化されているのは法定の裁量のみである"

obligations:
  - what: "CP204で予定納税額の見積りを呈出する"
    trigger: "financial-year-end"
    withinDays: 30
    due: "not later than 30 days before the beginning of the basis period for the year of assessment"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.107C(2)"
    consequence: "CP205 direction, prosecution under s.120(1)(f) with a fine of RM200 to RM20,000, and a 10% increase on the whole tax payable under s.107C(10A)"
  - what: "新設会社の最初のCP204を呈出する"
    trigger: "incorporation"
    withinDays: 90
    due: "within 3 months from the date of commencement of operations, where the first basis period is not less than 6 months"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.107C(4)(a)"
    consequence: "Same exposure as a missed CP204, unless the s.107C(4A) exemption applies"
  - what: "CP204Aで見積りを修正する"
    trigger: "ongoing"
    due: "in the 6th, 9th or 11th month of the basis period only"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.107C(7)"
    consequence: "Missing the window leaves the old estimate in place and exposes the company to the s.107C(10) increase"
  - what: "毎月の税の分割納付を行う"
    trigger: "ongoing"
    due: "by the 15th day of each calendar month, from the 2nd month of the basis period (6th month for a new company)"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.107C(5), (6) and (12)"
    consequence: "10% increase on the unpaid amount under s.107C(9), without notice"
  - what: "C様式で会社の申告書を提出する"
    trigger: "financial-year-end"
    withinDays: 210
    due: "within 7 months from the day following the close of the accounting period, plus a 1-month e-Filing grace period"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.77A(1)"
    consequence: "Penalty of up to three times the tax under s.112(3), or prosecution under s.112(1) with a fine of RM200 to RM20,000"

lang: "ja"
masterLanguage: "en"
translationStatus: "pending"
sourceContentHash: null

status: "reviewed"
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
  - title: "Income Tax Act 1967 (Act 53), reprint as at 21 May 2024 — sections 77A, 107C, 112, 120"
    url: "https://www.hasil.gov.my/wp-content/uploads/20240521-akta-cukai-pendapatan-1967-akta-53.pdf"
    publisher: "LHDN"
    date: "2024-05-21"
  - title: "Tax Estimation — Submission of Estimated Tax Payable Under Section 107C"
    url: "https://www.hasil.gov.my/en/syarikat/anggaran-cukai/"
    publisher: "LHDN"
  - title: "Public Ruling No. 8/2025 — Tax Treatment for Micro, Small and Medium Companies"
    url: "https://www.hasil.gov.my/wp-content/uploads/pr-8-2025-tax-treatment-for-micro-small-and-medium-companies.pdf"
    publisher: "LHDN"
    date: "2025-12-22"
  - title: "Return Form Filing Programme for the Year 2026"
    url: "https://www.hasil.gov.my/wp-content/uploads/program-memfail-bn-bagi-tahun-2026.pdf"
    publisher: "LHDN"
  - title: "Offences, Fines and Penalties"
    url: "https://www.hasil.gov.my/en/perundangan/kesalahan-denda-dan-penalti/"
    publisher: "LHDN"

entity: "Company tax estimate and return"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "governs", to: "income-tax-act-1967" }
  - { rel: "explained-in", to: "corporate-tax-rates" }
  - { rel: "requires", to: "basis-period-and-accounting-date" }
  - { rel: "related-to", to: "company-tax-calendar" }
related: ["corporate-tax-rates", "sdn-bhd-filing-calendar", "lhdn", "income-tax-act-1967"]
keywords: ["CP204", "CP204A", "Form C Malaysia", "underestimation penalty", "section 107C", "anggaran cukai syarikat"]
---

マレーシアの会社税で高くつくのは、税率ではない。答えを知る11か月前に立てる、その見積りである。

同業の解説ページはどこも、CP204は見積りでありCP204Aはその修正だと説明する。だが、見積りが外れたときに何が起きるかを示すページはほとんどない。そこで、まず算術を、そのあとで書式の記入方法を示す。

## 不正確な税額見積りは実際にいくらの代償を伴うのか？

1967年所得税法（Act 53）s.107C(10)は、ある評価の下での納税額が最後の見積りを、その
評価の下での納税額の**30%を超える額**だけ上回る場合、その額と30%の許容幅との差額に、
**当該差額の10%**に相当する金額を加算すると定めている——しかも、これは*さらなる通知
の送達なしに*生じる。

ゆっくり読めば、これは二段階の計算である。12月31日を年度末とし、最終税額が
**RM400,000**となった会社を例に取る。

| シナリオ | 最後の見積り | 不足額 | 30%許容幅 | 許容幅超過分 | s.107C(10)加算額 |
| --- | --- | --- | --- | --- | --- |
| 楽観的な見積り | RM120,000 | RM280,000 | RM120,000 | RM160,000 | **RM16,000** |
| 境界線ぎりぎりの見積り | RM280,000 | RM120,000 | RM120,000 | 無し | **無し** |
| 第11か月にRM380,000へ修正 | RM380,000 | RM20,000 | RM120,000 | 無し | **無し** |
| CP204を一切呈出せず | — | — | — | — | s.107C(10A)の下で**RM40,000** |

この表から三つのことが分かる。

**セーフハーバーは70%である。** 許容幅は最終税額の30%であるため、完全に免れるには
最後の見積りが最終的な税額の70%に達していなければならない。予算の70%ではない——
評価通知書に記載される数字の70%である。

**10%が適用されるのは超過分のみであり、不足額全体ではない。** 最初の行では不足額は
RM280,000だが、加算額はRM160,000に基づいて計算される。「差額に10%の加算税」と説明
するガイドは、それを誇張している場合があり、時にひどく誇張している。

**何も呈出しないのが最悪の結果である。** Section 107C(10A)は、見積りがまったく呈出
されず、CP205の指示もなく、訴追も提起されなかった場合に適用され、納付すべき税額
全体に10%を加算する。この例ではRM40,000であり、過少見積りによる加算額の2.5倍に
あたる。意図的に低いCP204を呈出するのは悪い考えだが、CP204をまったく呈出しないのは、
はるかに悪い考えである。

Section 107C(11)は、内国歳入庁長官が正当な理由が示された場合にs.107C(9)、(10)又は
(10A)の下での加算額の全部又は一部を免除し、既に納付済みであれば還付することを認め
ている。それは書面による事実に基づいて行使される裁量であって、あらかじめ計画に
組み込める安全策ではない。

## CP204はいつ期限が来るのか、そしていつ変更できるのか？

見積りは、s.107C(7A)の下で所定の様式により電子的媒体を通じて呈出する。会社は賦課
年度2018（YA2018）以降、LLP、信託団体及び協同組合は賦課年度2019（YA2019）以降、
CP204及びCP204Aの電子申告（e-Filing）が義務付けられている。

| 状況 | 条文 | 期限 |
| --- | --- | --- |
| 既に営業中の会社 | s.107C(2) | 基期開始の30日前までに |
| 新設会社、最初の基期が6か月以上 | s.107C(4)(a) | 営業開始後3か月以内 |
| 分割納付、既存会社 | s.107C(5) | 基期の第2か月から毎月均等 |
| 分割納付、新設会社 | s.107C(6) | 基期の第6か月から毎月均等 |
| 各分割納付の期限日 | s.107C(12) | 当該暦月の15日 |
| 修正 | s.107C(7) | 基期の第6、9又は11か月のみ |

二つの制約が、人をつまずかせる。

**85%の下限。** s.107C(3)の下、ある賦課年度の見積りは、直前の賦課年度の修正見積り、
又は修正が呈出されなかった場合には原見積りの、85%を下回ってはならない。これは
第2賦課年度以降に適用される（s.107C(4)(b)）。好調な一年を終えた会社が、単純に
象徴的な数字へリセットすることはできない。

**その三つの窓が、窓のすべてである。** 第3か月や第12か月の修正は存在しない。第6か月
の修正は第5又は第6期の分割納付から、第9か月の修正は第8又は第9期から、第11か月の
修正は第11期から効力を生じうる。修正後の数字が既に請求済みの額を下回る場合、残りの
分割納付は単純に停止する（s.107C(7)(b)）。

## CP204を完全に免除される新設会社はどれか？

Section 107C(4A)は、新設会社（最初の2年はCP204不要）となる条件を定める。対象は、
マレーシアに居住し、かつマレーシアで設立された会社であって、営業を開始したばかりで
あり、該当する各基期の開始時点における普通株式の払込資本が**RM250万以下**であるもの
であり、この会社について subsections (1)、(2)及び(3)を適用除外とする。この救済は、
最初の賦課年度及びそれに直ちに続く賦課年度、又は最初の年度に基期がない場合はその後の
2年度をカバーする。

Section 107C(4B)は、普通株式資本の50%を超える部分が関連会社（資本がRM250万を超える
会社）により直接又は間接に所有されている場合——その所有の方向を問わず、又は共通の
親会社を通じる場合を含む——あるいは基期の開始時点でマレーシア国外で設立された会社
若しくは非市民たる個人により**20%を超える**部分が所有されている場合に、この適用除外
を取り消す。その20%の項が、オフショアの持株会社や外国人共同創業者を持つ創業者の多く
が見落とす部分である。

この免除は会社のみを対象とする。Public Ruling No. 8/2025は第6.6.3項で、これがLLP
（会社から転換したLLPを含む）、事業信託、又は証券化特定目的会社には及ばないことを
確認している。

## 分割納付は実際にどのように計算されるのか

LHDNは見積り額を基期の月数で除し、端数は最終回の分割納付に加算する。RM130,000の
見積り額を12か月の基期に割り当てると、11回分のRM10,833と、12回目のRM10,837になる。

年の途中で修正した場合、残りの税額は残りの月に割り振られる。暦年を基期とし、見積り
額RM120,000が第6か月にRM260,000へ修正され、第6回の分割納付から効力を生じる例を取る。
既に5回分RM10,000ずつが請求済みであるため、残額は（RM260,000 − RM50,000）÷ 7 ＝
第6回から第12回まで**毎月RM30,000**となる。未納の分割納付は、それぞれ個別に
s.107C(9)の下での10%加算を伴う。

## C様式：見積りではなく申告書

s.77A(1)は、基期を構成する会計期間の終了翌日から**7か月以内**に申告書を提出する
ことを義務付けている。LHDNの2026年申告書呈出プログラム（Return Form Filing
Programme）は、e-Cの提出についてさらに**1か月**を付与し、注(iii)は同じ延長が
s.103(1)の下での納付残額の支払いにも適用されることを確認している。したがって、
2025年12月31日を年度末とする会社は、2026年8月31日までにe-Cを提出することになる。

提出を怠った場合、会社はs.112(3)の下で税額の最大3倍の罰金、又はs.112(1)の下での
訴追によりRM200からRM20,000の罰金、6か月の禁錮、若しくはその両方に直面する。2年
以上にわたる不履行は下限をRM1,000に引き上げ、税額の3倍の特別罰金を加算する
（s.112(1A)）。

休眠会社も申告義務がある。LHDNの呈出プログラムは、休眠会社もE様式を含む申告書を
提出しなければならず、株式、不動産、定期預金及び類似の投資を保有していることは
会社を休眠会社にはしないと定めている。CP204を免除されるのは、**営業を開始していない**
会社のみである。

## よくある誤り

- **30%基準を安心材料として扱うこと。** これは最終税額を基準に測定されるため、見積り
  はまだ分からない数字の70%に達していなければならない。高めに見積もり、第11か月に
  下方修正するとよい。下方修正は残りの分割納付を直ちに停止させるため、過大な見積りが
  費やすのはキャッシュフローであって、加算税ではない。
- **会社が損失を出したから、ゼロのCP204を呈出しても無害だと思い込むこと。** 後日の
  評価で納税額が生じ、見積りが呈出されていなかった場合、s.107C(10A)は税額全体に10%
  を加算する。
- **第12か月にCP204Aを呈出すること。** 法令が指定するのは三つの月のみである。遅れた
  修正はそもそも修正として扱われず、原見積りがs.107C(10)の基準であり続ける。
- **s.107C(4A)の免除を「すべての新設中小企業」と読むこと。** それはマレーシアに
  居住し、*かつ*マレーシアで設立されていることを要求し、s.107C(4B)(d)の20%外国資本
  要件でつまずくことが多い——この要件は、公表済みの多くのガイドが書かれたあとに
  追加されたものである。
- **7か月のC様式期限と分割納付スケジュールを混同すること。** 分割納付は基期終了後の
  月にも続き、暦年を基期とする場合の第12回は1月15日に期限が来る。
- **s.107C(9)を無視すること。** 総額が正しくても支払いが遅れれば、未納の各分割納付に
  10%が課され、それは通知なしに課される。

## 次のステップ

見積りをどの税率に基づいて組み立てるべきかを、まず把握すること——15%、17%、24%と
いうSME税率区分には、会社規模を大きく超える条件が付されており、それらは会社税率の
ページで説明されている。会計日が変更された場合、又は今年が初年度である場合は、基期
が本ページのすべての期限を左右するため、まずそれを確定させること。そのうえで、繰り
越している損失が依然として使用可能かどうかを確認すること。使えない損失は、余裕の
ある見積りをs.107C(10)の評価へと変える最短の道だからである。
