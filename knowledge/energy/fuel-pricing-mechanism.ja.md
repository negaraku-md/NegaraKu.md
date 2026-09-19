---
topicId: MY-ENE-0005
title: "マレーシアは週ごとの燃料価格をどのように決定しているか"
seoTitle: "マレーシア燃料自動価格決定メカニズム（APM）"
slug: "fuel-pricing-mechanism"
category: "energy"
subcategory: ["fuel"]
summary: "マレーシアの燃料小売価格は、自動価格決定メカニズム（APM）を通じて毎週設定される。RON97は市場に応じて変動する一方、RON95とディーゼルは対象を絞った補助金を通じて一部が統制されている。"

tier: "3"
mode: "practical"
contentType: "faq"
sensitivity: "none"

answer: "2017年4月以降、マレーシアの燃料小売価格は自動価格決定メカニズム（APM）の公式を用いて毎週設定されており、世界の原油価格の動きに応じて給油所の価格が調整される。補助金の対象外であるRON97は市場に応じて毎週自由に変動する一方、補助金付きRON95はBUDI95のもとで資格のある国民向けに1リットルRM1.99で維持される。半島部のディーゼルは2024年6月10日に補助金が撤廃されて以降変動しているが、サバ州、サラワク州及びラブアンのディーゼルは引き続き統制されている。"
keyTakeaways:
  - "燃料価格は2017年4月以降、APMの公式を通じて毎週設定されている。"
  - "価格の発表は水曜日に行われ、この日程は2021年3月3日以降適用されている。"
  - "RON97は完全変動制であり、その価格は世界市場に応じて毎週変動する。"
  - "補助金付きRON95は1リットルRM1.99で維持される（BUDI95、月300リットル上限）一方、一般市場価格は変動する。"
appliesTo: "ドライバー、消費者、そして給油所の価格が毎週変動する理由を理解したいすべての人。"

faq:
  - q: "新しい燃料価格は何曜日に発表されるか。"
    a: "発表は水曜日に行われ、この毎週の日程は2021年3月3日以降適用されている。"
  - q: "RON95の価格は毎週変動するか。"
    a: "補助金付きRON95の価格はBUDI95のもとで資格のある国民向けに1リットルRM1.99で維持されるが、補助金の対象外である一般市場価格はAPMに応じて上下する。"

lang: "ja"
masterLanguage: "ms"
translationStatus: "in-sync"

status: "in-review"
aiAssisted: true
reviewer: null
reviewed: 2026-08-03
reviewDue: 2027-08-03
revision: 0
verificationNeeded:
  - "2021年3月3日以前の発表曜日（金曜日または木曜日）——二次情報源（paultan.org）は水曜日への変更に言及しているが、元の曜日は明確でない。必要であれば公式発表で確認されたい。"
  - "APM週次メカニズムの正確な開始日「2017年4月」——現在はOpenDOSMカタログの背景説明に依拠している。公式の政策情報源で確認されたい。"
  - "前週のRON97価格（RM3.24）は、MOFの発表に記載された8セン引き下げから算術的に導出したものであり、発表自体に明記されているわけではない。"
  - "BUDI95のRM1.99という料金及びRON95一般市場価格が、発表日時点で依然として最新であるかを確認されたい。"
revisions:
  - revision: 0
    date: 2026-08-01
    change: "Approved and published."
    reviewer: null

updated: 2026-08-01
sourceContentHash: "77fbc98bce7fd506"
sources:
  - title: "Non-Subsidised RON95 Retail Price Set At RM2.60 Per Litre As BUDI95 Commences"
    url: "https://www.mof.gov.my/portal/en/news/press-release/non-subsidised-ron95-retail-price-set-at-rm2-60-per-litre-as-budi95-commences"
    publisher: "Kementerian Kewangan Malaysia (MOF)"
  - title: "Price of Petroleum & Diesel"
    url: "https://open.dosm.gov.my/data-catalogue/fuelprice"
    publisher: "OpenDOSM, Jabatan Perangkaan Malaysia"
  - title: "Government Reduces Non-Subsidised RON95, RON97 And Diesel Retail Prices From 25 December 2025 To 31 December 2025"
    url: "https://www.mof.gov.my/portal/en/news/press-release/retail-price/government-reduces-non-subsidised-ron95-ron97-and-diesel-retail-prices-from-25-december-2025-to-31-december-2025"
    publisher: "Kementerian Kewangan Malaysia (MOF)"
  - title: "Government Implements Targeted Diesel Subsidy For Peninsular Malaysia Effective 10 June 2024"
    url: "https://www.mof.gov.my/portal/en/news/press-release/government-implements-targeted-diesel-subsidy-for-peninsular-malaysia-effective-10-june-2024"
    publisher: "Kementerian Kewangan Malaysia (MOF)"
  - title: "March 2021 week two fuel price — weekly cycle now revised to Wednesday"
    url: "https://paultan.org/2021/03/03/march-2021-week-two-fuel-price-all-prices-unchanged-weekly-cycle-now-revised-thursday-to-wednesday/"
    publisher: "paultan.org"

entity: "Mekanisme Penetapan Harga Automatik (APM)"
relations:
  - { rel: "related-to", to: "budi95-fuel-subsidy" }
  - { rel: "related-to", to: "diesel-subsidy-rationalisation" }
related: []
keywords: ["APM", "harga minyak", "RON97", "RON95", "BUDI95", "subsidi bahan api", "harga pam mingguan"]
---

毎週水曜日、マレーシアの給油所の価格は変動することがある——しかし、すべての燃料の種類が同じように動くわけではない。看板に表示された数字の裏には、自動価格決定メカニズム（APM）と呼ばれる公式が存在する。

## 自動価格決定メカニズム（APM）とは何か

APMとは、政府がガソリンとディーゼルの小売価格を設定するために用いる燃料価格決定メカニズムの公式である。OpenDOSM（マレーシア統計局）の燃料価格データセットの背景説明によれば、2017年4月以降、燃料価格はこの公式を用いて週単位の管理フロート制のもとで設定されており、これにより政府は世界の原油価格変動の影響を監視し、それに応じて給油所の価格を調整できるようになっている。

この公式は、世界市場における石油製品のコストと、定められた小売マージン（アルファ）を織り込み、その週の公表価格を算出する。価格の発表は現在**水曜日**に行われており、この週次の日程は2021年3月3日以降適用されている。

## RON97の価格は毎週どのように設定されるのか

RON97は補助金の対象外である。価格は週次変動制のもとで完全に変動する——政府による上限価格や援助を伴わず、APMの算出結果に応じて毎週上昇または下落する。

例えば、2025年12月25日から31日の期間、世界の原油価格が下落したことを受け、財務省はRON97の価格を8セン引き下げ、1リットルRM3.16とした（前週の1リットルRM3.24から引き下げ）。これがまさに「自由変動」の意味するところである——価格は完全に市場に連動し、週ごとに変動する。

## なぜRON95とディーゼルは同じように変動しないのか

ここに大きな違いがある。RON95とディーゼルは対象を絞った補助金政策の対象であるため、市場コストが変動しても、資格のある国民が支払う価格は維持される。

| 燃料 | 価格設定方法 | 価格（2025年12月25日～31日） |
|---|---|---|
| RON97 | APMに基づき完全変動 | RM3.16 |
| RON95（補助金付き、BUDI95） | 統制、維持 | RM1.99 |
| RON95（一般市場） | APMに基づき変動 | RM2.56 |
| ディーゼル（半島部） | 補助金撤廃後は変動 | RM2.94 |
| ディーゼル（サバ州、サラワク州、ラブアン） | 統制、維持 | RM2.15 |

2025年9月30日に開始されたBUDI95プログラムのもとで、資格のあるマレーシア国民は1リットルRM1.99でRON95を購入でき、補助金は1リットルRM0.61、月300リットルを上限とする——一人当たり月最大RM183相当となる。一方、補助金の対象外である一般市場のRON95価格は2025年10月には1リットルRM2.60に設定され、それ以降はAPMに応じて上下している（例えば2025年12月25日から31日の週はRM2.56）。

ディーゼルについては、2024年6月10日より半島部で補助金の対象が絞り直された。それ以前は、補助金付きディーゼルが全国で1リットルRM2.15で販売されていた。この日以降、政府は半島部における補助金対象外ディーゼルの小売価格を1リットルRM3.35に設定し、サバ州、サラワク州及びラブアンのディーゼルは1リットルRM2.15のまま据え置かれた。それ以来、半島部のディーゼルはAPMに応じて変動している（2025年12月25日から31日の週はRM2.94）。

## 新しい価格はいつから適用されるのか

発表された価格は、まる一週間にわたって適用される。例えば、2025年12月25日から31日の料金は、その期間が始まる前に発表され、新たなAPMの算出結果が改めて発表されるまで、その週の間ずっと維持された。

## 次に確認すべきこと

毎週の最新価格を確認するには、財務省の公式プレスリリースまたはOpenDOSMの石油・ディーゼル価格データセットを参照されたい。RM1.99のRON95価格を誰が受給する資格があるのか、また月300リットルの上限がどのように機能するのかを理解したい場合は、BUDI95補助金プログラムに関する関連記事を参照のこと。
