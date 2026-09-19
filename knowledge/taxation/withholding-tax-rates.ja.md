---
topicId: MY-TAX-0025
title: "マレーシアの源泉徴収税率——支払いの種類別"
seoTitle: "源泉徴収税率 マレーシア — 条文・税率・様式"
slug: "withholding-tax-rates"
category: "taxation"
subcategory: ["withholding-tax"]
summary: "マレーシアのすべての源泉徴収税率を一つの表にまとめたもの——支払いの種類、1967年所得税法条文、税率、様式、納付期限。"

tier: "4"
mode: "practical"
contentType: "data"
sensitivity: "none"

answer: "マレーシアの源泉徴収税率は、課税条文ではなく1967年所得税法（Income Tax Act 1967）のSchedule 1によって定められる。非居住者への利子は15%、使用料は10%、s.4Aに基づく特定種類の所得は10%、paragraph 4(f)所得は10%、非居住の公衆芸能人は15%、非居住の請負業者は10%に加えて3%である。これらのほぼすべては、受領者への支払又は入金後一か月以内に納付しなければならない。"
keyTakeaways:
  - "税率はSchedule 1にあり、義務は課税条文にある——両方を引用すること"
  - "支払又は入金後一か月が標準の納付規則であり、入金は支払より前に生じることがある"
  - "Section 107Dは例外である——納付期限は一か月後ではなく、翌暦月の末日である"
  - "Section 107Aは同一の支払いに対して二つの税率を課す——請負業者に10%、その従業員に3%"
  - "協定税率が使えるのは、受領者の税務当局が発行する居住者証明書を保有している場合に限られる"
  - "源泉徴収を怠ると、10%の加算及び当該経費の不算入が生じる"
appliesTo: "非居住者に支払いを行うマレーシアの企業、政府機関若しくは居住者、並びに居住の代理店、ディーラー又は販売店に支払いを行う企業向け。"

faq:
  - q: "マレーシアの標準的な源泉徴収税率とは何か。"
    a: "単一の標準税率というものは存在しない。税率は1967年所得税法のSchedule 1に基づく所得の区分によって決まる——利子は15%、使用料は10%、s.4Aに基づく特定種類の所得は10%、非居住者への契約支払は10%に加えて3%である。租税条約税率により、これらのうち複数が軽減されることがある。"
  - q: "源泉徴収税はいつまでにLHDNへ納付しなければならないか。"
    a: "ss.107A、109、109A、109B及び109Fについては、受領者への支払又は入金後一か月以内である。Section 107Dは異なり、支払月の翌暦月の末日までに納付しなければならない。期限日が週末又は公共の祝日に当たる場合は、翌営業日が適用される。"
  - q: "源泉徴収税は最終税か。"
    a: "多くの非居住者の所得については最終税である。LHDNは、利子、使用料、特定種類の所得、REIT分配及びparagraph 4(f)所得に係る源泉徴収税を最終税として扱っており、非居住者はその所得についてこれ以上マレーシアでの申告義務を負わない。Section 107Aは最終ではない——それは請負業者の最終的な評税に対する前払いである。"
  - q: "契約書に報酬が税引き後の純額であると記載されている場合でも、源泉徴収は必要か。"
    a: "必要である。契約書の記載にかかわらず、義務は支払者にある。支払者が契約上その税を負担する場合について、LHDNはPublic Ruling 10/2019において、2018年12月5日以降、s.109Bの税は支払われた総額に基づいて計算され、グロスアップは行われないことを確認している——ただし、支払者が負担する税は、その支払者自身の会計上は控除できない。"

verificationNeeded:
  - "s.107Dの2%控除に用いるForm CP107D及びその附属書CP107D(1)は、hasil.gov.myの現存するいかなる経路からも取得できなかった——下記の税率、閾値及び納付規則は、当該様式からではなく、法令自体から得たものである"
  - "特定国の協定税率はここには再掲していない——軽減税率は条文ごと、国ごとに異なるため、各協定についてLHDNのDTAページで確認すること"

obligations:
  - what: "非居住者への支払から控除した源泉徴収税を納付する"
    trigger: "event"
    direction: "after"
    event: "payment"
    withinDays: 30
    due: "within one month after paying or crediting the non-resident payee"
    authority: "LHDN"
    statute: "Income Tax Act 1967, ss.107A(1), 109(1), 109B(1), 109F(1)"
    consequence: "The unpaid amount is increased by 10 per cent and the expense is disallowed under s.39(1)(f), (i) or (j)"

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
  - title: "Withholding Tax"
    url: "https://www.hasil.gov.my/en/perundangan/cukai-pegangan/"
    publisher: "LHDN"
  - title: "Income Tax Act 1967 (Act 53), reprint as at 21 May 2024 — Schedule 1 and ss.107A, 107D, 109, 109A, 109B, 109F"
    url: "https://www.hasil.gov.my/wp-content/uploads/20240521-akta-cukai-pendapatan-1967-akta-53.pdf"
    publisher: "LHDN"
    date: "2024-05-21"
  - title: "Public Ruling No. 10/2019 — Withholding Tax on Special Classes of Income"
    url: "https://www.hasil.gov.my/wp-content/uploads/PR_10_2019.pdf"
    publisher: "LHDN"
    date: "2019-12-10"
  - title: "Double Taxation Avoidance Agreement (DTA/DTAA)"
    url: "https://www.hasil.gov.my/en/antarabangsa/perjanjian-pengelakan-pencukaian-dua-kali-pppdk/"
    publisher: "LHDN"

entity: "Malaysian withholding tax rates"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "governs", to: "income-tax-act-1967" }
  - { rel: "explained-in", to: "withholding-tax-special-classes" }
related: ["withholding-tax-special-classes", "withholding-tax-digital-services", "withholding-tax-non-compliance", "cp37-forms"]
keywords: ["withholding tax rate Malaysia", "section 109B rate", "section 107A withholding tax", "CP37D", "withholding tax table Malaysia", "LHDN withholding tax"]
---

必要な税率は、あなたが読んでいる条文にはほとんど書かれていない。Section 109Bは「at the rate applicable to such payments」で源泉徴収せよと指示し、そこで終わる——その10%はSchedule 1のPart Vにある。Section 109も同様である。両方を引用する習慣をつけること。税率をめぐる議論は、Schedule 1をめぐる議論だからである。

## 全税率表

| 支払いの種類 | 1967年所得税法条文 | 税率 | 様式 | 納付期限 |
| --- | --- | --- | --- | --- |
| 非居住の請負業者への契約支払 | s.107A, Sch 1 | 10%（請負業者）+ 3%（その従業員） | CP37A | 支払又は入金後一か月 |
| 居住の代理店、ディーラー又は販売店への支払 | s.107D, Sch 1 | 2% | CP107D | **翌暦月**の末日 |
| 非居住者への利子 | s.109, Sch 1 Pt II item 1 | 15% | CP37 | 支払又は入金後一か月 |
| 非居住者への使用料 | s.109, Sch 1 Pt II item 2 | 10% | CP37 | 支払又は入金後一か月 |
| 利子又は使用料、小額 | s.109, Sch 1 Pt II | 15% / 10% | CP37S | 半年ごと、6月30日又は12月31日 |
| 非居住の公衆芸能人 | s.109A, Sch 1 Pt II item 3 | 15% | CP154及びLHDNによる税額計算 | 支払又は入金後一か月 |
| s.4Aに基づく特定種類の所得 | s.109B, Sch 1 Pt V | 10% | CP37D | 支払又は入金後一か月 |
| 特定種類の所得、小額 | s.109B, Sch 1 Pt V | 10% | CP37DS | 半年ごと、6月30日又は12月31日 |
| 銀行又は承認機関により居住者である個人に支払われる利子 | s.109C, Sch 1 Pt VI | 5% | — | 支払又は入金後一か月 |
| REIT又は不動産信託の分配——非居住会社 | s.109D, Sch 1 Pt X | 24% | CP37E | 支払又は入金後一か月 |
| REIT又は不動産信託の分配——外国機関投資家 | s.109D, Sch 1 Pt X | 10% | CP37E | 支払又は入金後一か月 |
| REIT又は不動産信託の分配——その他、居住会社でない者 | s.109D, Sch 1 Pt X | 10% | CP37E | 支払又は入金後一か月 |
| 個人以外のユニット保有者へのリテール・マネー・マーケット・ファンドの分配 | s.109DA, Sch 1 Pt XIX | 24% | CP37E(NR) / CP37E(R) | 支払又は入金後一か月 |
| ファミリーファンド又はタカフル・ファミリーファンドの分配——非居住会社 | s.109E, Sch 1 Pt XI | 25% | CP37E(T) | 支払又は入金後一か月 |
| ファミリーファンド又はタカフル・ファミリーファンドの分配——その他、居住会社でない者 | s.109E, Sch 1 Pt XI | 8% | CP37E(T) | 支払又は入金後一か月 |
| 非居住者に支払われるparagraph 4(f)所得 | s.109F, Sch 1 Pt XIII | 10% | CP37F | 支払又は入金後一か月 |
| 55歳前の繰延年金又は私的退職スキームの引出し | s.109G, Sch 1 Pt XVI | 8% | CP37G | 支払又は入金後一か月 |

## この表が隠している三つのこと

**「支払又は入金」は「支払」ではない。** Public Ruling 10/2019のpara 13.1は、入金を単なる仕訳記入や発生記帳以上のものと定義している——その金額は受領者が利用できるか、又はその利益のために利用できる状態になければならない。しかし、非居住者があなたに負う金額を相殺する対照勘定記入は入金に該当し、時計は当該対照勘定記入の日から動き出す。現金を一度も送金していない会社であっても、一か月遅れることはあり得る。

**Section 107Dは異なる時計で動く。** Section 107D(1)は、一か月後ではなく、「not later than the end of the following calendar month」までの納付を求める。また、これが適用されるのは、当該代理店、ディーラー又は販売店が直前の基年において当該支払者からRM100,000を超える金額を受け取った場合に限られ（s.107D(2)）、かつ、その者が居住者である個人である場合に限られる（s.107D(6)）。

**協定税率は条件付きであり、自動的には適用されない。** LHDNは、受領者の税務当局が発行し居住者であることを証明する書面での確認を求めており、これはコンプライアンス審査に備えて保管しなければならない。Public Ruling 10/2019のExample 16は、居住者であることが確認されて初めて、香港のサービス提供者に5%の税率を適用している。その証明書がなければ、国内税率で源泉徴収する。

## よくある誤り

- **附表を示さずに税率だけを引用すること。** 「Section 109Bは10%」というのは省略表現である。その10%はSchedule 1のPart Vにあり、租税条約が取って代わるのはそのPart Vである。
- **小額様式を任意の便宜だと思い込むこと。** CP37SとCP37DSには二つの累積条件がある——税額が支払取引一件あたりRM500を超えないこと、**かつ**、小額取引が関連する六か月の期間内に一回を超えて発生すること。半年間にRM400の支払いが一回しかない場合、繰延の対象とはならない。
- **s.107Aを最終税だと扱うこと。** それは誤りである。paragraph (a)は請負業者自身の評税に充当される。paragraph (b)、すなわち3%は、内国歳入庁長官が適当と認めるところによりs.107A(3)(b)のもとで請負業者に還付される。
- **支払いの一部が対象外であるにもかかわらず、総額に対して源泉徴収すること。** s.4A(i)及び(ii)の所得については、マレーシアで提供された役務に帰属する部分のみが課税対象であり、公正かつ合理的な基礎に基づいて按分する。

## 次のステップ

税率は簡単な部分である。実際の案件の大半を左右するのは二つの問いである——その支払いがそもそも「マレーシアに由来する」ものかどうか、そしてそれがs.109のもとでの使用料か、s.109Bのもとでの特定種類の所得かである。前者については[withholding-tax-special-classes](/ja/taxation/withholding-tax-special-classes)を、後者については[withholding-tax-digital-services](/ja/taxation/withholding-tax-digital-services)を参照。
