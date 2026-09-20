---
topicId: MY-EMP-0014
title: "法定拠出金の料率と期限"
seoTitle: "マレーシア給与料率・期限リファレンス"
slug: "payroll-rates-deadlines-malaysia"
category: "employment"
subcategory: ["payroll-statutory"]
summary: "検証済みのマレーシアの給与料率、賃金上限、様式及び期限をすべて一つの参考表にまとめ、それぞれを公表する当局まで遡って示す。"

tier: "4"
mode: "practical"
contentType: "data"

answer: "五つの法定拠出は、賃金月の翌月15日までに納付する：EPF、SOCSO、EIS、PCB、そしてHRD Corp賦課金である。年次では、フォームEAは2月28日までに従業員へ、フォームEはCP8Dとともに3月31日までにLHDNへ提出する。最低賃金はRM1,700である。SOCSOとEISの賃金上限はRM6,000である。賃金がRM20,000未満のEPF拠出は、パーセンテージではなくThird Scheduleの等級に従わなければならない。"
keyTakeaways:
  - "一つの日付が五つの義務を担う——翌月15日、EPF、SOCSO、EIS、PCB、HRD賦課金である"
  - "RM20,000までのいかなる賃金にも、パーセンテージではなくEPFの賃金等級が適用される"
  - "SOCSOとEISはいずれも月額RM6,000の賃金上限で頭打ちとなり、これは2024年10月1日から施行されている"
  - "1998年8月1日以降に登録された非国民従業員は、EPFに使用者2%、従業員2%を拠出し、これは2025年10月の賃金から適用される"
  - "延滞利息は制度によって異なる：SOCSOとEISは年6%、HRD賦課金は年10%である"
  - "フォームEとフォームPは、LHDNのe-Filing猶予期間の対象外である"
appliesTo: "マレーシアで給与計算を運用する給与管理者、人事チーム、財務担当者及び会社秘書役向け。"

verificationNeeded:
  - "EPFの延滞配当及び罰則の料率はここには含まれていない——数値を公表する前に、kwsp.gov.myに照らして現行の請求額を確認すること"
  - "SOCSO区分2の従業員負担分、及び完全なThird Schedule等級表はここには転載していない——perkeso.gov.myから確認すること"
  - "外国人労働者徴収金の料率、及び多層徴収金の官報公布状況は本ページの対象外であり、未確認である"
  - "SOCSOとEISの延滞拠出に対する最低利息請求額を、perkeso.gov.myに照らして確認すること"

obligations:
  - what: "当該賃金月分のEPF拠出金を納付する"
    trigger: "monthly"
    dueDay: 15
    due: "On or before the 15th of the following month"
    authority: "KWSP"
    statute: "EPF Act 1991, s.43(1) and Third Schedule"
  - what: "当該賃金月分のSOCSO拠出金を納付する"
    trigger: "monthly"
    dueDay: 15
    due: "No later than the 15th day of the succeeding month"
    authority: "PERKESO"
    statute: "Employees Social Security Act 1969"
    consequence: "Interest on late payment at 6% per annum for each day outstanding"
  - what: "当該賃金月分のEIS拠出金を納付する"
    trigger: "monthly"
    dueDay: 15
    due: "No later than the 15th day of the succeeding month"
    authority: "PERKESO"
    statute: "Employment Insurance System Act 2017"
    consequence: "Interest on late payment at 6% per annum for each day outstanding"
  - what: "e-PCB、e-Data PCBまたはe-CP39を通じて月次税額控除（PCB/MTD）を納付する"
    trigger: "monthly"
    dueDay: 15
    due: "On or before the 15th day of the subsequent month"
    authority: "LHDN"
    statute: "Income Tax (Deduction from Remuneration) Rules 1994"
  - what: "HRD Corp賦課金を納付する"
    trigger: "monthly"
    dueDay: 15
    due: "By the 15th of the following month"
    authority: "HRD Corp"
    statute: "PSMB Act 2001"
    consequence: "Interest at 10% per annum on arrears, minimum RM5"
  - what: "当該賃金期間の賃金を支払う"
    trigger: "ongoing"
    withinDays: 7
    due: "Not later than the seventh day after the last day of the wage period"
    authority: "JTKSM"
    statute: "Employment Act 1955, s.19(1)"
  - what: "休息日、公共休日及び時間外労働の賃金を支払う"
    trigger: "ongoing"
    due: "Not later than the last day of the next wage period"
    authority: "JTKSM"
    statute: "Employment Act 1955, s.19(2)"
  - what: "e-CP22アプリケーションを通じて、フォームCP22により新規雇用をLHDNに届け出る"
    trigger: "change"
    withinDays: 30
    due: "Within 30 days after the commencement of employment"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83"
  - what: "e-SPCを通じて、フォームCP22Aにより雇用の終了をLHDNに届け出るとともに、支払うべき金銭を留保する"
    trigger: "change"
    due: "Not less than 30 days before cessation, or within 30 days of being informed of a death; withhold for 90 days or until tax clearance"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83"
  - what: "従業員が3か月を超えてマレーシアを離れる場合、フォームCP21によりLHDNに届け出る"
    trigger: "change"
    due: "Not less than 30 days before the expected departure date"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83"
  - what: "フォームEA（C.P.8A）またはフォームEC（C.P.8C）を作成し、すべての従業員に交付する"
    trigger: "financial-year-end"
    due: "On or before 28 February following the calendar year"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83(1A)"
    consequence: "Offence under s.120(1) ITA 1967 — fine RM200 to RM20,000, or up to six months imprisonment, or both"
  - what: "e-Data Praisiを通じてCP8Dデータをアップロードし、従業員の事前入力に供する"
    trigger: "financial-year-end"
    due: "On or before 25 February following the calendar year"
    authority: "LHDN"
  - what: "フォームE（e-E）をCP8Dとともに提出する"
    trigger: "financial-year-end"
    due: "On or before 31 March following the calendar year"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83 and s.120(1)"
    consequence: "Offence under s.120(1) ITA 1967; no e-Filing grace period applies to Form E"
  - what: "フォームCP58を作成し、代理店、ディーラー及び販売店に交付する"
    trigger: "financial-year-end"
    due: "On or before 31 March following the calendar year"
    authority: "LHDN"
  - what: "給与及び税務記録を保存する"
    trigger: "ongoing"
    due: "Seven years, accessible to LHDN on request"
    authority: "LHDN"
    statute: "Income Tax Act 1967"
  - what: "積み立てられたHRD Corp賦課金を、承認された訓練助成金を通じて活用する"
    trigger: "ongoing"
    due: "Within 24 months"
    authority: "HRD Corp"
    consequence: "Forfeiture of the unutilised balance above an RM10,000 threshold"

lang: "ja"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "72d685f5d481d7fd"

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
sensitivity: "none"

updated: 2026-07-20
sources:
  - title: "Employer Mandatory Contribution"
    url: "https://www.kwsp.gov.my/en/employer/responsibilities/mandatory-contribution"
    publisher: "KWSP"
  - title: "Contribution Rate"
    url: "https://www.perkeso.gov.my/en/rate-of-contribution.html"
    publisher: "PERKESO"
  - title: "Contributions"
    url: "https://www.perkeso.gov.my/en/our-services/employer-employee/contributions.html"
    publisher: "PERKESO"
  - title: "Contribution Payment"
    url: "https://www.perkeso.gov.my/en/our-services/employer-employee/pembayaran.html"
    publisher: "PERKESO"
  - title: "Employers — Employer's Responsibility"
    url: "https://www.hasil.gov.my/en/majikan/"
    publisher: "LHDN"
  - title: "Program Memfail Borang Nyata (BN) Bagi Tahun 2026"
    url: "https://www.hasil.gov.my/wp-content/uploads/program-memfail-bn-bagi-tahun-2026.pdf"
    publisher: "LHDN"
    date: "2025-12-30"
  - title: "Perintah Gaji Minimum 2024 — P.U.(A) 376"
    url: "https://gajiminimum.mohr.gov.my/wp-content/uploads/PUA%20376.pdf"
    publisher: "MOHR"
    date: "2024-12-04"
  - title: "Levy Calculation Guideline and Levy Payment"
    url: "https://supportcentre.hrdcorp.gov.my/portal/en/kb/articles/hrd-levy"
    publisher: "HRD Corp"

entity: "Malaysian statutory payroll rates and deadlines"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "administered-by", to: "epf" }
  - { rel: "administered-by", to: "perkeso" }
  - { rel: "administered-by", to: "hrd-corp" }
  - { rel: "administered-by", to: "jtksm" }
  - { rel: "explained-in", to: "form-e-ea-cp8d-malaysia" }
  - { rel: "explained-in", to: "hrd-corp-levy-malaysia" }
  - { rel: "explained-in", to: "minimum-wage-malaysia" }
related: ["form-e-ea-cp8d-malaysia", "hrd-corp-levy-malaysia", "minimum-wage-malaysia", "payroll-compliance-malaysia", "epf-employer-guide", "socso-eis-employer-guide"]
keywords: ["Malaysia payroll deadlines", "EPF SOCSO EIS rates", "statutory contribution rates Malaysia", "payroll due dates 15th", "PCB deadline", "HRD levy rate"]
---

一つの参考表であり、すべての行が、それを公表する当局まで遡って追跡できる。公式な
情報源に照らして検証できなかった行は、推測に頼るのではなく、本ページのメタデータの
`verificationNeeded` に列挙している。

## 費率と上限

| 項目 | 費率 | 上限／基準 | 当局 |
| --- | --- | --- | --- |
| 最低賃金——月額 | RM1,700 | 2025年8月1日よりすべての使用者に適用 | MOHR, P.U.(A) 376 |
| 最低賃金——時給 | RM8.72 | — | MOHR, P.U.(A) 376 |
| 最低賃金——日給 | RM65.38／RM78.46／RM98.08 | 週6日／5日／4日勤務 | MOHR, P.U.(A) 376 |
| EPF——マレーシア人、永住者、1998年8月1日より前に登録された非国民、60歳未満、賃金 ≤ RM5,000 | 使用者13%、従業員11% | Third Schedule Part A の等級 | KWSP |
| EPF——同一グループ、賃金RM5,000超 | 使用者12%、従業員11% | Third Schedule Part A の等級 | KWSP |
| EPF——60歳以上、マレーシア人 | 使用者4%、従業員0% | Third Schedule Part E、賃金上限なし | KWSP |
| EPF——60歳以上、永住者及び1998年より前の非国民 | 賃金 ≤ RM5,000で使用者6.5%／従業員5.5%；それを超えると6%／5.5% | Third Schedule Part C | KWSP |
| EPF——1998年8月1日以降に登録された非国民 | 使用者2%、従業員2% | Third Schedule Part F、賃金上限なし、2025年10月の賃金から適用 | KWSP |
| SOCSO区分1（Category 1）——60歳未満 | 使用者1.75%、従業員0.5% | 月額RM6,000の賃金上限 | PERKESO |
| SOCSO区分2（Category 2）——60歳以上 | 使用者1.25% | 月額RM6,000の賃金上限 | PERKESO |
| EIS | 使用者0.2%、従業員0.2% | 月額RM6,000の賃金上限 | PERKESO |
| HRD Corp賦課金——義務区分 | 1% | 基本給から無給休暇を差し引き、固定手当を加えたもの | HRD Corp |
| HRD Corp賦課金——任意区分 | 0.5% | 同一の基準 | HRD Corp |

RM6,000のSOCSO及びEIS上限は、RM5,000に代わって**2024年10月1日**から施行されて
いる。いまだにRM4,000と記載しているページは、2回分の改定に遅れている。

**EPFのパーセンテージは説明であって、計算方法ではない。** KWSPは、賃金が
RM20,000を超える場合を除き、使用者は使用者及び従業員の負担分を正確なパーセンテ
ージで計算してはならないとしている——それを下回る場合は、Third Scheduleの賃金区
間表がリンギット金額を示し、その合計はパーセンテージによる結果とは異なる。

## 月次の期限

| 義務 | 期限 | 当局 | 延滞金 |
| --- | --- | --- | --- |
| 当該賃金期間の賃金を支払う | 賃金期間終了後7日以内 | JTKSM, EA 1955 s.19(1) | 違反 |
| 休息日、休日及び時間外労働の賃金を支払う | 次の賃金期間の最終日までに | JTKSM, EA 1955 s.19(2) | 違反 |
| EPF拠出金 | 翌月15日以前 | KWSP | `verificationNeeded` を参照 |
| SOCSO拠出金 | 翌月15日までに | PERKESO | 年6%、日割り |
| EIS拠出金 | 翌月15日までに | PERKESO | 年6%、日割り |
| PCB／MTD（e-PCB、e-Data PCBまたはe-CP39経由） | 翌月15日以前 | LHDN | 法定罰則 |
| HRD Corp賦課金 | 翌月15日までに | HRD Corp | 年10%、日割り、最低RM5 |

## 事由発生時の期限

| 義務 | 契機 | 期限 | 手続き経路 |
| --- | --- | --- | --- |
| フォームCP22——新規雇用 | 雇用の開始 | 30日以内 | MyTax上のe-CP22、2024年9月1日から義務化 |
| フォームCP22A——終了、民間部門 | 終了又は死亡 | 終了前30日以上前；死亡を知らされてから30日以内 | MyTax上のe-SPC |
| フォームCP22B——終了、公共部門 | 終了又は死亡 | 上記に同じ | MyTax上のe-SPC |
| フォームCP21——3か月を超えてマレーシアを離れる場合 | 出国 | 予定出国日の30日以上前 | LHDN |
| 支払うべき金銭の留保 | 終了、死亡又は出国 | 90日間、又は税務清算証明を受け取るまで | LHDN |
| HRD Corp登録 | マレーシア人従業員が10名に達すること | 閾値を超えた時点 | HRD Corpポータル |

## 年次の期限

| 義務 | 期限 | 法令 |
| --- | --- | --- |
| フォームEA（C.P.8A）／EC（C.P.8C）を従業員へ | 2月28日 | ITA 1967 s.83(1A) |
| e-Data Praisi経由のCP8D（事前入力経路） | 2月25日 | LHDN申告プログラム |
| フォームE（e-E）をCP8DとともにLHDNへ | 3月31日 | ITA 1967 s.83；違反時はs.120(1) |
| フォームCP58を代理店、ディーラー、販売店へ | 3月31日 | LHDN |
| 記録の保存 | 7年間 | ITA 1967 |

フォームE、フォームP及びフォームCPEは、他の申告書に適用されるLHDNのe-Filing猶
予期間の対象から**除外**されている。

## 罰則一覧

| 違反 | 結果 | 出典 |
| --- | --- | --- |
| フォームEまたはフォームEAの不提出 | ITA 1967 s.120(1)に基づき、罰金RM200からRM20,000、または最長6か月の禁錮、またはその両方 | LHDN違反一覧表 |
| 最低賃金を下回る支払い | 従業員1名につきRM10,000を超えない罰金、Act 732 s.43；不足分についてはs.44に基づく裁判所命令 | Act 732 |
| Act 732の下での継続的違反 | 有罪判決後、s.46に基づき1日あたり最高RM1,000の罰金 | Act 732 |
| Act 732の下での再犯 | s.47に基づき、罰金最高RM20,000または最長5年の禁錮 | Act 732 |
| 特定の罰則が定められていない雇用法違反 | EA 1955 s.99Aに基づき、罰金最高RM50,000 | Act 265 |
| HRD Corp賦課金の延滞 | 年10%の日割り利息、最低RM5；罰金最高RM20,000または2年の禁錮 | HRD Corp |
| 24か月間申請されなかったHRD Corp賦課金 | RM10,000の残余残高を超える部分の没収 | HRD Corp |

## よくある誤り

- RM20,000未満の賃金についてThird Scheduleの等級を読み取らず、単純なパーセンテ
  ージでEPFを計算すること。
- SOCSOとEISにRM4,000またはRM5,000の上限を適用すること。2024年10月1日以降、こ
  れはRM6,000となっている。
- 五つの制度すべてに単一の賃金数値を使い回すこと。HRD賦課金の算定基礎は、時間外
  労働手当、歩合給及び賞与を除外する。
- LHDNのe-Filing猶予期間がフォームEを対象とすると思い込むこと。対象としていない。
- CP8Dを添付せずにフォームEを提出し、それを提出済みとして扱うこと。
- 賃金期間終了後7日を超える固定日に賃金を支払うこと。

## 次にすべきこと

毎月15日に、五つの月次納付すべてを網羅する定期的なカレンダー項目を一つ設定し、
2月第2週にフォームEA及びe-Data Praisiのアップロード用にもう一つ設定するとよい。
そのうえで、給与計算において各制度の賃金基礎を個別に照合すること——期限は共通だ
が、賃金の定義は共通ではない。
