---
topicId: MY-LIV-0003
title: "アプリの背後で：GrabとマレーシアのEヘイリング業界はどう規制されているか"
slug: "e-hailing-grab"
category: "transport"
subcategory: ["public-transport"]
summary: "マレーシアで乗客にとってEヘイリングが実際にどう機能するのか、誰がGrabとその競合を規制しているのか、そしてアプリの背後にいるすべての運転手に公共サービス車両免許（PSV）が何を求めるのか。"
tier: "3"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "マレーシアのEヘイリングは、互いに積み重なった3つの別々の承認の上に成り立っている。アプリ事業者（Grabなど）は仲介事業免許を保有し、各車両はそれぞれのEヘイリング車両許可（EVP）を備え、各運転手はJPJが発行するPSV免許を保有する。この制度は、2010年陸上公共交通法の下で、半島マレーシアでは陸上公共交通庁（APAD）が、サバとサラワクでは各州の商業車両免許局が管理している。"
keyTakeaways:
  - "乗車はアプリを通じてのみ成立する——メーター制タクシーとは異なり、Eヘイリングには路上での流し拾いも決まった乗り場もない"
  - "1回の乗車の上に3つの別々の承認が積み重なる。事業者の免許、車両のEVP、そして運転手のPSV免許である"
  - "APAD（Agensi Pengangkutan Awam Darat）は半島マレーシアでEヘイリングを管理する。サバとサラワクはそれぞれ独自の商業車両免許局を持つ"
  - "PSV免許はAPADではなくJPJが発行し、健康診断、講習の修了、そして1年を超えて保有する正式運転免許を必要とする"
  - "Grabは最大の事業者だが、APADは市場で営業するその他の免許を保有するEヘイリング会社の一覧を維持し、定期的に更新している"
appliesTo: "自分が利用しているサービスがどのように免許を得ているかを理解したい乗客、そしてPSV免許が何を伴うのかを確認している運転手志望者。"

verificationNeeded:
  - "本ページは、車齢の上限、許可の有効期間、またはAPADが免許を与えたEヘイリング会社の現在の数／有効期限を記載していない。これらの数字は時とともに変動し、執筆時点でAPAD自身のページ上で検証可能なテキスト形式では読み取れなかったためである——現在の一覧と条件については、apad.gov.myで直接確認すること"
  - "特定の運転手要件（最低年齢など）が適用されるかどうかは、JPJまたは個々のEヘイリング事業者に確認すべきである。参照した公式ページでは、確認可能な形で記載されていなかったためである"

lang: "ja"
masterLanguage: "en"
translationStatus: "pending"
sourceContentHash: null

status: "in-review"
aiAssisted: true
reviewer: null
reviewed: "2026-07-25"
revision: 0
revisions:
  - revision: 0
    date: 2026-07-24
    change: "Approved and published."
    reviewer: null

updated: 2026-07-24
sources:
  - title: "Taxi and e-hailing"
    url: "https://www.apad.gov.my/index.php/en/services/taxi-and-ehailing"
    publisher: "Agensi Pengangkutan Awam Darat (APAD)"
  - title: "e-Hailing Services"
    url: "https://www.mot.gov.my/en/land/infrastructure/e-hailing-services"
    publisher: "Ministry of Transport Malaysia"
  - title: "Permohonan Lesen Vokasional (GDL, PSV Dan Konduktor) — Vocational Licence Application (GDL, PSV and Conductor)"
    url: "https://www.jpj.gov.my/en/jpj-service-information/vocational-license-application-gdl-psv-and-conductor/"
    publisher: "Jabatan Pengangkutan Jalan (JPJ)"
  - title: "Application for PSV License (E-hailing driver)"
    url: "https://www.jpj.my/misc/application_for_psv_license.htm"
    publisher: "Jabatan Pengangkutan Jalan (JPJ)"
  - title: "Land Public Transport Act 2010 (Act 715)"
    url: "https://lom.agc.gov.my/act-detail.php?type=principal&act=715"
    publisher: "Attorney General's Chambers (AGC) — Laws of Malaysia Online"
  - title: "Lembaga Pelesenan Kenderaan Perdagangan (LPKP) Sabah"
    url: "https://sabah.gov.my/directory/lpkp"
    publisher: "Sabah State Government"

entity: "E-hailing"
relations:
  - { rel: "administered-by", to: "apad" }
  - { rel: "requires", to: "psv-licence-malaysia" }
  - { rel: "related-to", to: "jpj" }
related: []
keywords: ["e-hailing Malaysia", "Grab regulation Malaysia", "PSV licence e-hailing", "APAD e-hailing vehicle permit", "how does Grab work Malaysia", "e-hailing driver licence Malaysia"]
---

クアラルンプールでGrab、Bolt、あるいはinDriveを開いて「予約」をタップする。その
瞬間、規制の気配などまるで感じられない。だが、やって来るその1台は、3つの別々の
免許の上に成り立っている——それらは、あなたの運転手が合法的にあなたの運賃を
引き受けられるようになる前に、存在していなければならなかったものだ——そして、その
どれ一つとしてアプリだけに属するものはない。

## 1回の乗車が実際にどう成立するのか

Eヘイリングには、メーター制タクシーと一線を画す決定的な特徴が1つある。**路上での
流し拾いもなければ、乗り場もない。**すべての乗車はアプリの中から始まる——あなたが
車を呼ぶと、アプリが近くの運転手パートナーとあなたをマッチングし、運賃と経路は車が
到着する前に確定している。運転手は事業者の従業員ではない。彼らはそのプラット
フォームを利用するパートナーであり、自分自身の車両、または会社名義で登録された
車両を運転している。

だからこそEヘイリングは、単純にタクシー法規に組み込まれるのではなく、独自の規制
区分を必要とした。タクシー免許が対象とするのは路上で呼び止められる車であり、
Eヘイリングの乗車は、その定義からして呼び止められることがあり得ないからだ。

## これを実際に規制しているのは誰か

Eヘイリングは、バス、タクシー、その他の陸上公共交通を規律するのと同じ法律である
**2010年陸上公共交通法（Land Public Transport Act 2010、Act 715）**の下に位置
づけられる。**半島マレーシア**では、日々の免許業務は交通省の下に置かれた**陸上
公共交通庁（Agensi Pengangkutan Awam Darat、APAD）**が担っている。**サバと
サラワク**では、これに相当する機能は、APADが直接ではなく、各州独自の**商業車両
免許局（Lembaga Pelesenan Kenderaan Perdagangan、LPKP）**が担っている。

3つの異なる承認が、1回の乗車の上に積み重なっている。

| 層 | 保有者 | 対象範囲 |
| --- | --- | --- |
| 事業者免許 | アプリ会社（Grab、およびその他のEヘイリング会社） | 乗客と運転手をマッチングする「仲介事業」を営む許可 |
| Eヘイリング車両許可（EVP） | 車両 | その特定の自家用車をEヘイリングの乗車に使用することの許可 |
| 公共サービス車両免許（PSV） | 運転手 | 運賃を支払う乗客を乗せる公共サービス車両を運転する個人の許可 |

3つのうちどれか1つでも欠ければ、他の2つがどれほど揃っていようとも、その乗車は
免許制度の外で運行していることになる。

## 公共サービス車両免許（PSV）：運転手が実際に必要とするもの

**公共サービス車両免許（PSV、Public Service Vehicle）**は、Eヘイリング会社や
APADが発行するものではない——それは、通常の運転免許を発行するのと同じ官庁である
**道路交通局（Jabatan Pengangkutan Jalan、JPJ）**から交付される。これは運転手の
既存の免許の上に重ねられる、別個の追加的な免許であり、それに取って代わるもの
ではない。

申請にあたり、JPJは、申請者が**有効期間が1年を超える正式運転免許（Competent
Driving Licence、CDL）**をすでに保有しており、かつ理論試験と実技試験を受ける前に、
必要な健康診断、理論講習、実技訓練を修了していることを求めている。申請は、記入
済みの健康診断書（JPJL8A）、講習修了証（JPJL2C）、パスポートサイズの写真、および
所定の申請手数料を添えて、JPJの事務所で行う。

JPJはPSV免許を運転手個人に対して発行するため、この免許はGrabや特定の単一の
アプリに属するのではなく、運転手本人について回る——これを保有する運転手は、
原則として複数の事業者のために運転することができるが、それは各事業者独自の登録
条件に従うことが前提となる。

## Grabと、その他の選択肢

知名度という点では、Grabはマレーシアで最大のEヘイリング事業者だが、APADが免許を
与えた唯一の事業者ではない。APADは自身のウェブサイトで、現在免許を保有する
Eヘイリング会社の一覧を公表し、定期的に更新している。市場には、より小規模で専門性
の高いアプリと並んで、Bolt、inDrive、Maxim、AirAsia Rideといった事業者も含まれて
きた。どの事業者が現行の免許を保有し、それがどれだけの期間有効かは、時とともに
変わる——権威ある確認先は、レビューサイトやアプリストアのランキングではなく、APAD
自身が公表する一覧である。

## よくある誤り

- **有効な運転免許があれば十分だと思い込む。**CDLはあなたが運転することを認めるものにすぎない。運賃を支払う乗客を乗せられるのは、別個のPSV免許だけである。
- **アプリの承認を全体像だと捉える。**事業者が免許を保有しているからといって、目の前の特定の車や運転手が対象に含まれているとは限らない——EVPとPSV免許は、それぞれ車両ごと・個人ごとの別個の承認である。
- **APADが全国を管轄していると思い込む。**サバとサラワクは、APADの半島マレーシアにおける職掌とは別に、独自の商業車両免許局を運営している。
- **事業者免許を通常の会社登記と混同する。**「仲介事業免許」は、標準的な会社登記に加えて、Act 715の下で与えられる別個の陸上交通上の承認である。

## 次にすべきこと

ある車や運転手が適切に免許を保有しているかを確認するなら、アプリの宣伝ページでは
なく、APAD自身が公表する、現在免許を保有するEヘイリング会社の一覧から始めること。
あなたが運転手であるなら、PSV免許の申請はEヘイリング事業者からではなく、JPJの
事務所から始まる——プラットフォーム自身の登録審査が関係してくる前に、まずこれを
手にしておくこと。
