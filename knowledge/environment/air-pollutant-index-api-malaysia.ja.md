---
topicId: MY-ENV-0001
title: "大気汚染指数（API）：マレーシアの大気質測定方法"
seoTitle: "マレーシア大気汚染指数（API）：読み方と区分"
slug: "air-pollutant-index-api-malaysia"
category: "environment"
subcategory: ["udara"]
summary: "ヘイズ（煙霧）の際に目にするAPIの読み値は、六種類の汚染物質から抽出された単一の数字です。本ガイドでは、その計算方法、それを生み出す観測局ネットワーク、そして良好から危険まで各区分があなたの健康にとって何を意味するかを説明します。"

tier: "3"
mode: "practical"
contentType: "faq"
sensitivity: "health"

answer: "大気汚染指数（マレー語ではIndeks Pencemar Udara、IPU；英語ではAir Pollutant Index、API）は、環境局（Jabatan Alam Sekitar、DOE）が地域の大気質状況を示すために発表する、0以上の数値です。SO2、NO2、CO、O3、PM10、PM2.5という六種類の汚染物質から計算され、それぞれが一つの「サブ指数」に変換されたうえで、その時間帯で最も高いサブ指数がAPIの読み値となります。その数値はさらに六つの健康区分に対応づけられ、良好（0–50）から危険（300超）までとなります。"
keyTakeaways:
  - "APIは六種類の汚染物質から計算される。その時間帯で最も高いサブ指数が公式のAPI読み値となる。"
  - "PM2.5（粒子状物質）は2017年からAPIの計算に組み込まれた。粒子状物質はヘイズ（煙霧）発生時の主要な汚染物質であることが多い。"
  - "六つの区分：良好（0–50）、中程度（51–100）、健康に悪い（101–200）、非常に健康に悪い（201–300）、危険（300超）、緊急（500超）。"
  - "汚染物質の濃度は、マレーシア全土に設置された52カ所の自動観測局（CAQM）と14カ所の手動観測局によって測定される。"
  - "APIの計算は、米国環境保護庁（USEPA）が採用するPollution Standard Index（PSI、汚染標準指数）を基礎としている。"
appliesTo: "保護者、教師、アスリート、年長者、妊婦、子ども、心臓または肺の合併症を有する人、そして屋外活動を計画しているすべての人——特にヘイズ（煙霧）の季節において。"

faq:
  - q: "API読み値が100であれば、空気は「半分汚染されている」という意味か？"
    a: "いいえ。APIはパーセンテージではありません。読み値0–50は良好、51–100は中程度を意味し、どちらも屋外活動に制限はありません。読み値が100を超える（健康に悪い）と懸念すべき段階に入り、300を超えると危険とみなされます。"
  - q: "どの汚染物質が最も頻繁にAPI読み値を左右するか？"
    a: "粒子状物質——PM10およびPM2.5——は、ほとんどの場合において主要な汚染物質であり、特にマレーシアでヘイズ（煙霧）が発生している間はそうです。その際、API読み値は通常、粒子状物質のサブ指数によって左右されます。"
  - q: "どの読み値で屋外活動を避けるべきか？"
    a: "101–200（健康に悪い）では、敏感な集団——年長者、妊婦、子ども、心臓または肺の合併症を有する人——は屋外活動を制限すべきです。300超（危険）では、年長者と高リスクの人は屋外活動を禁止され、一般の人々にも避けるよう勧告されます。"

lang: "ja"
masterLanguage: "ms"
translationStatus: "in-sync"
sourceContentHash: "fc387c28a9eb09b2"

status: "in-review"
aiAssisted: true
reviewer: null
reviewed: 2026-08-03
reviewDue: 2027-08-03
revision: 0
verificationNeeded:
  - "参照した2件のDOE PDFのいずれにも、喘息は具体的に名指しされていない（出典は年長者、妊婦、子ども、心臓・肺の合併症について言及している）。ここでの喘息への言及は、肺の状態として編集上推論したものであり——DOEの公式健康アドバイスの出典で確認すること。"
  - "緊急区分（500超）には、DOEの公式ゲージ上で別個の色が割り当てられていない（色は危険までしか定義されていない）。この区分に色を設定する前に、公式の色が存在するかどうかを確認すること。"
revisions:
  - revision: 0
    date: 2026-07-28
    change: "Approved and published."
    reviewer: null

updated: 2026-07-28
sources:
  - title: "Air Pollutant Index Management System (APIMS) — dataset"
    url: "https://radars.mosti.gov.my/dataset/air-pollutant-index-management-system-apims/"
    publisher: "Kementerian Sains, Teknologi dan Inovasi (MOSTI) — RADARS open-data catalogue (gov.my)"
  - title: "Pengiraan Indeks Pencemar Udara (IPU) / Air Pollutant Index (API) Calculation"
    url: "https://www.doe.gov.my/wp-content/uploads/2021/09/API_Calculation.pdf"
    publisher: "Jabatan Alam Sekitar (Department of Environment)"
  - title: "General Information of Air Pollutant Index (API)"
    url: "https://www.doe.gov.my/wp-content/uploads/2021/10/General-Information-of-Air-Pollutant-Index.pdf"
    publisher: "Jabatan Alam Sekitar (Department of Environment)"
  - title: "Air Pollution Index — What to do when API reach certain levels"
    url: "https://www.doe.gov.my/en/air-pollution-index/"
    publisher: "Jabatan Alam Sekitar (Department of Environment)"

entity: "Indeks Pencemar Udara (IPU)"
relations:
  - { rel: "administered-by", to: "jabatan-alam-sekitar" }
  - { rel: "related-to", to: "jerebu-di-malaysia" }
related: []
keywords: ["IPU", "API", "indeks pencemar udara", "kualiti udara", "jerebu", "PM2.5", "PM10", "Jabatan Alam Sekitar"]
---

ヘイズ（煙霧）が濃くなり、学校が朝礼を中止すべきかどうか尋ね始めるとき、決め手となるのは通常一つの数字——API読み値です。その数字は単純に見えますが、その背後には絶え間なく測定される六種類の汚染物質と、それらすべてを一つの値へとふるいにかける一つの計算式があります。

## APIは実際に何を測定しているのか？

大気汚染指数（API）は、ある地域の大気質状況を示す指標です。環境局（Jabatan Alam Sekitar、DOE）は、六種類の主要な汚染物質に基づいてこれを計算しており、それぞれの安全な曝露限度が異なるため、異なる期間で平均が取られます。

- **二酸化硫黄（SO2）** — 1時間平均
- **二酸化窒素（NO2）** — 1時間平均
- **一酸化炭素（CO）** — 8時間平均
- **オゾン（O3）** — 8時間及び1時間平均
- **粒子状物質PM10** — 24時間平均
- **粒子状物質PM2.5** — 24時間平均、2017年から計算に組み込み

## 六種類の汚染物質はどのように一つの数字になるのか？

各汚染物質の平均濃度は、専用の数式によって標準化され、**サブ指数**と呼ばれる単位のない一つの値が算出されます。各汚染物質はそれぞれ独自のサブ指数を生み出し、**その時間帯で最も高いサブ指数がAPIの読み値として採用されます**。この方式は、米国環境保護庁（USEPA）が国際的に採用している*Pollution Standard Index*（PSI、汚染標準指数）を基礎としています。

例えば、最良区間（0–50）にあるPM2.5の場合、計算式はAPI = 4.1667 × X であり、Xは24時間平均のPM2.5濃度（µg/m³）です。濃度が高くなるほど、異なる計算式の区分が用いられます。実際には、粒子状物質が主要な汚染物質であることが多く——そのためヘイズ（煙霧）発生時には、API読み値はほぼ常にPM10またはPM2.5によって左右されます。

## 各区分はあなたの健康にとって何を意味するのか？

APIは六つの色分けされた区分に対応づけられます。これは日々の判断において最も重要な部分です：

| API | 状態 | 色 | 健康アドバイス |
|-----|--------|-------|-------------------|
| 0–50 | 良好 | 青 | 屋外活動に制限なし。健康的な生活習慣を維持する |
| 51–100 | 中程度 | 緑 | 屋外活動に制限なし。健康的な生活習慣を維持する |
| 101–200 | 健康に悪い | 黄 | 敏感な集団（年長者、妊婦、子ども、心臓／肺の合併症を有する人）は屋外活動を制限する。一般の人々は激しい活動を減らす |
| 201–300 | 非常に健康に悪い | 橙 | 年長者と高リスクの人は屋内にとどまり、身体活動を減らす。健康上の合併症がある人は医師の診察を受ける |
| >300 | 危険 | 赤 | 年長者と高リスクの人は屋外活動を禁止される。一般の人々は屋外活動を避ける |
| >500 | 緊急 | ―（公式ゲージ上に別個の色は定義されていない） | [国家安全保障会議](/government/national-security-council-mkn)の指示および大衆メディアの発表に従う |

## このデータはどこから来るのか？

読み値は一箇所から取得されているわけではありません。DOEは国家大気質観測ネットワークを運営しており、これには**52カ所の自動観測局**——継続的大気質観測局（*Continuous Air Quality Monitoring*、CAQM）——と、高容量サンプラー（HVS）を使用する**14カ所の手動観測局**が含まれます。これらの観測局は、半島部、サバ、サラワク全域にわたる工業地帯、都市部、郊外、農村部を含む戦略的な地点に設置されており、読み値が住民が実際に吸う空気を代表するようにしています。

## 次にすべきこと

ヘイズ（煙霧）の際に屋外活動を計画する前に、出典不明のままソーシャルメディアで出回っている数字ではなく、DOEの公式オンライン観測システムを通じて、あなたの地域の最新の公式API読み値を確認してください。あなたが敏感な集団——年長者、妊婦、子ども、または心臓・肺の合併症を有する人（喘息のような状態を含む）——に該当する場合は、読み値が危険に達するのを待つのではなく、100を超えた時点で警戒を始めてください。この読み値が急上昇する原因を理解するには、マレーシアのヘイズおよび環境局の役割に関する関連ページをご覧ください。
