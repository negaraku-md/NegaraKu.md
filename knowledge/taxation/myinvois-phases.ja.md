---
topicId: MY-TAX-0010
title: "MyInvois実施の段階、基準額と緩和期間終了日"
seoTitle: "MyInvois段階と日程：LHDN電子インボイス・タイムライン"
slug: "myinvois-phases"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "現行のe-Invoice Guidelineに定められている、LHDNの電子インボイスの各段階日付、売上高区分、免除基準額及び暫定緩和期間終了日のすべて。"

tier: "4"
mode: "practical"
contentType: "data"
sensitivity: "none"

answer: "マレーシアの電子インボイス義務化は、FY2022の売上高に応じて四段階で進む。2024年8月1日はRM1億超、2025年1月1日はRM2,500万超からRM1億まで、2025年7月1日はRM500万超からRM2,500万まで、2026年1月1日はRM500万までである。年間売上高がRM100万未満の納税者は免除される。2023年以降に事業を開始した事業者は2026年7月1日から開始する。"
keyTakeaways:
  - "段階は四つだけ——自社が属する段階はFY2022の売上高によって固定され、その後は変わらない"
  - "年間売上高又は収入がRM1,000,000未満であれば完全な免除であり、延期ではない"
  - "2023年から2025年の間に開業し、売上高が少なくともRM100万の新規事業者は、2026年7月1日から開始する"
  - "第4段階の納税者には、2027年12月31日まで続く暫定緩和期間がある"
  - "緩和期間中は、すべてを統合し、個別電子インボイスの要求を拒否することができる"
  - "電子インボイスSVDPが2026年7月7日から2027年12月31日まで開放され、漏れた提出を是正できる"
  - "発行義務は指針ではなく、1967年所得税法（Income Tax Act 1967）のs.82Cにある"
appliesTo: "電子インボイスがいつ自社に及ぶかを見極めようとしているマレーシアの企業、LLP、組合又は個人事業主、及び導入スケジュールを組む実施担当者。"

verificationNeeded:
  - "e-Invoice Specific GuidelineのTable 3.6における高級品・宝飾品区分が施行されたかどうか——LHDNは依然として詳細を追って公表するとしている"
  - "電子インボイス不履行についてITA 1967 s.120(1)(d)に基づき実務上科される正確なリンギット罰金額——その幅は法定だが、LHDNは評価上の減免基準を一切公表していない"

obligations:
  - what: "検証のために電子インボイスを発行し送信する——FY2022の売上高がRM1億を超える納税者"
    trigger: "ongoing"
    due: "from 1 August 2024"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Offence under s.120(1)(d) ITA 1967"
  - what: "検証のために電子インボイスを発行し送信する——FY2022の売上高がRM2,500万を超えRM1億以下の納税者"
    trigger: "ongoing"
    due: "from 1 January 2025"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Offence under s.120(1)(d) ITA 1967"
  - what: "検証のために電子インボイスを発行し送信する——FY2022の売上高がRM500万を超えRM2,500万以下の納税者"
    trigger: "ongoing"
    due: "from 1 July 2025"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Offence under s.120(1)(d) ITA 1967"
  - what: "検証のために電子インボイスを発行し送信する——FY2022の売上高がRM500万以下の納税者"
    trigger: "ongoing"
    due: "from 1 January 2026"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Offence under s.120(1)(d) ITA 1967"
  - what: "検証のために電子インボイスを発行し送信する——2023年以降に事業を開始した事業者"
    trigger: "ongoing"
    due: "from 1 July 2026, or on commencement for businesses starting in 2026 or later"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Offence under s.120(1)(d) ITA 1967"
  - what: "買い手が電子インボイスを求めなかった取引について統合電子インボイスを提出する"
    trigger: "ongoing"
    withinDays: 7
    due: "within 7 calendar days after the end of the month"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C(7)"
    consequence: "Transactions unsupported by a validated document for tax purposes"
  - what: "事業規模により免除されない限り、電子インボイス義務化を遵守する"
    trigger: "threshold"
    criteria:
      - metric: "turnover"
        op: "lt"
        value: 1000000
    exemption: true
    due: "Full exemption if annual turnover or revenue is below RM1,000,000; otherwise mandatory, as all phases are now in force"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"

lang: "ja"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "fe5d22ede93ea4c0"

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
  - title: "e-Invoice Guideline (Version 4.7)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "e-Invoice Specific Guideline (Version 4.8)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "Garis Masa Pelaksanaan e-Invois"
    url: "https://www.hasil.gov.my/e-invois/garis-masa-pelaksanaan-e-invois/"
    publisher: "LHDN"
    date: "2025-12-07"
  - title: "Finance (No. 2) Act 2023 (Act 851) — new sections 82B and 82C"
    url: "https://www.myttx.customs.gov.my/wp-content/uploads/2024/02/WJW23%EF%80%A21341-BI.pdf"
    publisher: "Government of Malaysia"
    date: "2023-12-29"

entity: "MyInvois e-Invoice implementation timeline"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "governs", to: "income-tax-act-1967" }
  - { rel: "explained-in", to: "e-invoice-data-fields" }
  - { rel: "related-to", to: "consolidated-e-invoice" }
related: ["e-invoicing", "consolidated-e-invoice", "self-billed-e-invoice", "myinvois-integration", "e-invoice-data-fields"]
keywords: ["MyInvois phases", "e-Invoice implementation date Malaysia", "e-Invoice exemption RM1 million", "e-Invoice relaxation period", "LHDN e-Invoice timeline", "tarikh pelaksanaan e-invois"]
---

すべてを決めるのは二つの数字である。ひとつは自社のFY2022売上高で、これが段階を恒久的に固定する。もうひとつはRM1,000,000で、これを下回ればこの制度から完全に外れる。このページの残りはすべて細部にすぎない。

このページはデータとして維持されている。日付がこれまでに一度ならず変更されてきたためである。以下の数字は、いずれも2026年7月7日に公表された**e-Invoice Guideline第4.7版**と**e-Invoice Specific Guideline第4.8版**から読み取ったものである。

## 強制段階の日付は何か？

| 段階 | 対象納税者 | 強制適用開始日 |
| --- | --- | --- |
| 1 | 年間売上高又は収入が**RM1億を超える** | **2024年8月1日** |
| 2 | **RM2,500万を超えRM1億以下** | **2025年1月1日** |
| 3 | **RM500万を超えRM2,500万以下** | **2025年7月1日** |
| 4 | **RM500万以下** | **2026年1月1日** |

第5段階は存在しない。RM150,000～RM500,000の区分を対象とする第5段階は、以前の指針の版には存在したが、第4.7版では姿を消している。

## 自社の段階はどう決まるのか？

| 状況 | 基準 |
| --- | --- |
| 監査済財務諸表がある場合 | **2022会計年度**の包括利益計算書における売上高又は収入 |
| 監査済財務諸表がない場合 | **YA2022**の税務申告書に報告された年間収入 |
| FY2022の年度末を変更した場合 | **12か月に按分**した売上高 |

一度固定されれば、それで確定する。指針のsection 1.5は明確である——その後の売上高の変動は実施日を変えない。2022年にRM3,000万を計上し、現在はRM400万である企業も、依然として第2段階の納税者である。

## 新規事業者はいつから開始するのか？

| 事業開始時期 | 電子インボイス実施日 |
| --- | --- |
| 2023年から2025年、売上高がRM1,000,000以上 | **2026年7月1日** |
| 2026年以降 | **2026年7月1日**又は開業日 |
| 2026年以降、初年度の売上高がRM1,000,000未満 | 売上高がRM1,000,000に達した年の**翌々年1月1日** |

## 誰が免除されるのか？

指針のsection 1.6.1は、自己請求を含むいかなる電子インボイスの発行からも、次の者を免除している。

- 年間売上高又は収入が**RM1,000,000未満**の納税者
- 外国の外交機関
- 事業を営んでいない個人
- 法定機関、法定当局及び地方当局——法定徴収について、並びに**2025年7月1日より前**に販売された物品又は提供された役務について
- 国際機関——**2025年7月1日より前**に販売された物品又は提供された役務について

免除はその者個人に付随するものであり、グループには付随しない。Section 1.6.5——免除される者が所有する会社であっても、自社独自の日程で実施する。

これとは別に、section 1.6.7は特定の所得類型を対象から除外している——雇用所得、年金、扶養手当、ザカート、特定の配当分配、取引所で取引される証券及びデリバティブ契約の価額、並びに非上場株式の処分。ただし処分者が会社、LLP、信託機関又は協同組合である場合を除く。

## 暫定緩和期間は何を認めているのか？

2024年7月26日に政府が合意したもので、各段階日から6か月間である——ただし第4段階を除く。第4段階はそれよりはるかに延長された。

| 段階 | 暫定緩和期間 |
| --- | --- |
| 1 | 2024年8月1日 – **2025年1月31日** |
| 2 | 2025年1月1日 – **2025年6月30日** |
| 3 | 2025年7月1日 – **2025年12月31日** |
| 4（2026年1月1日及び2026年7月1日の両開始日とも） | **2027年12月31日まで** |

緩和期間中、Specific Guidelineのsection 16.2は納税者に次のことを認めている。

- Table 3.6にある、本来は統合が禁止されている業種を含め、**すべて**の活動を統合すること
- **すべて**の自己請求の状況を統合すること
- 領収書又は明細書の参照番号ではなく、*Description of Product or Service*欄に任意の文字列を記入すること
- 買い手又は供給者による個別電子インボイスの要求を**拒否**すること

この期間中、納税者が少なくとも統合文書を提出している限り、LHDNは1967年所得税法（Income Tax Act 1967）のs.120に基づく訴追も行わない。

最後のこの条件こそ、見落とされがちなものである。緩和は何も提出しなくてよいという許可ではない。

## 電子インボイスSVDPとは何か？

特別自主開示プログラム（Special Voluntary Disclosure Programme、SVDP）が**2026年7月7日から2027年12月31日まで**開放され、提出を怠った納税者、不遵守の電子インボイスを提出した納税者、又はすでに電子インボイス・コンプライアンス審査を受けている納税者を対象とする。開示された内容については、その開示が詐欺、故意の不履行又は過失を伴わない限り、コンプライアンス審査も罰則も追及されない。

提出には電子インボイス版**SVDP 1.2**（デジタル署名なし）又は**SVDP 1.3**（デジタル署名あり）を用いなければならず、漏れていた統合電子インボイスは月ごとに提出しなければならない——1件の追いつき書類にまとめてはならない。

## 法定義務は実際どこから来るのか？

指針からではない。Finance (No. 2) Act 2023（Act 851）により挿入された**1967年所得税法（Income Tax Act 1967）のs.82C**が、各取引について電子インボイスを発行し、これを総監の検証のために送信する義務を生じさせている。s.82C(6)は自己請求インボイスを、s.82C(7)は統合インボイスを対象とし、s.82C(8)は瑕疵ある電子インボイスについて**3日以内**に代替の電子インボイスを認めている。第120(1)(d)条は、s.82C(1)、(6)及び(7)への違反を犯罪としている。

## よくある誤り

- **RM100万という数字を延期だと捉えること。** これはsection 1.6.1に定める常設の免除である。また段階でもない——第5段階は存在しない。
- **現在の売上高から段階を再計算すること。** 判定基準はFY2022の一度きりである。
- **第4段階の緩和を休暇だと読むこと。** 統合提出は優遇措置の条件であって、その代わりの選択肢ではない。
- **72時間の窓を訂正のための猶予だと思い込むこと。** それは取消であり、修正ではない。72時間を過ぎた後は、クレジットノート、デビットノート又は返金ノートの電子インボイスを発行することになる。
- **第3段階の日付が、法定機関及び国際機関にとっての締切でもあることを見落とすこと。** それらの免除は、2025年7月1日より前の取引しか対象としていない。

## 次のステップ

自社の取引のうちどれがそもそも統合できるのかを確認すること——いくつかの業種は最初から統合できず、RM10,000を超える単一取引はいずれも2026年1月1日以降切り出されている。海外の供給者から購入している場合、又は個人に支払いを行っている場合は、自社の売上帳簿がどれほど小さくても自己請求のルールが適用される。実施担当者は、タイムラインではなくフィールド一覧から着手すべきである。
