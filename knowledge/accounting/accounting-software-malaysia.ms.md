---
topicId: MY-ACC-0011
title: "Accounting Software in Malaysia: The Two Capabilities That Now Decide It"
seoTitle: "Accounting Software Malaysia: e-Invoice and MBRS Fit"
slug: "accounting-software-malaysia"
category: "accounting"
subcategory: ["bookkeeping"]
summary: "Cara neutral-vendor untuk menilai perisian perakaunan bagi sebuah syarikat Malaysia atas dua paksi yang kini penting — bagaimana ia sampai ke MyInvois, dan sama ada outputnya boleh menyokong penyerahan MBRS."

tier: "4"
mode: "practical"
contentType: "comparison"
sensitivity: "none"

answer: "Senarai ciri tidak lagi membezakan pakej perakaunan yang dijual di Malaysia. Dua keupayaan yang membezakannya. Pertama, bagaimana perisian menghantar dokumen ke MyInvois — melalui portal percuma, melalui integrasi API langsung, atau melalui perantara yang menghantar di bawah kelayakannya sendiri. Kedua, sama ada outputnya boleh dipetakan kepada taksonomi SSMxT milik SSM untuk penyerahan MBRS, memandangkan tiada pakej perakaunan yang menyerah terus kepada SSM. Selebihnya adalah pilihan peribadi."
keyTakeaways:
  - "LHDN merekodkan dua mekanisme penghantaran — MyInvois Portal dan API — di samping penyerahan oleh perantara yang dilantik"
  - "LHDN menerbitkan SDK tetapi tiada akreditasi, pensijilan atau senarai vendor yang diluluskan untuk perisian e-Invois; dakwaan 'diluluskan LHDN' adalah dakwaan vendor itu sendiri"
  - "Satu-satunya akreditasi sebenar dalam pengebilan elektronik Malaysia ialah milik MDEC, sebagai Peppol Authority, merangkumi Peppol Service Provider dan Peppol-Ready Solution Provider — dan Peppol bukan syarat MyInvois"
  - "Tiada pakej perakaunan yang menyerah kepada MBRS; penyerahan dibina dalam alat penyediaan SSM sendiri dan dimuat naik ke mPortal sebagai fail zip"
  - "MBRS-ready oleh itu hanya boleh secara jujur bermaksud satu imbangan duga yang stabil dan boleh dieksport yang memetakan kepada konsep SSMxT, bukan satu butang penyerahan"
  - "Taksonomi SSMxT tidak boleh dilanjutkan oleh syarikat, jadi carta akaun yang tiada tempat dalam taksonomi itu adalah kos berulang"
  - "Perantara hanya boleh mengambil semula dokumen yang diserahkannya sendiri, jadi menukar penyedia tidak membawa sejarah penyerahan anda bersama"
appliesTo: "Syarikat Malaysia yang sedang memilih atau menggantikan perisian perakaunan, dan pasukan kewangan yang mengaudit apa yang pakej semasa mereka sebenarnya boleh lakukan."

verificationNeeded:
  - "Dakwaan keupayaan bagi mana-mana produk tertentu sengaja tidak dimasukkan dalam laman ini — sahkan setiap satu terhadap dokumentasi terkini vendor itu sendiri, kerana liputan penyetempatan berubah antara keluaran tanpa notis"
  - "SSM tidak menerbitkan senarai perisian penyediaan XBRL pihak ketiga yang diluluskan atau diakreditasi pada laman MBRS-nya; sahkan dengan SSM sebelum bergantung pada mana-mana dakwaan pensijilan MBRS oleh vendor"
  - "Garis Panduan e-Invois dan Garis Panduan Khusus disemak semula dengan kerap — sahkan versi semasa sebelum menganggap mana-mana keperluan integrasi sebagai muktamad"

lang: "ms"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "2723b917b69eeed3"

status: "published"
aiAssisted: true
reviewer: null
reviewed: "2026-07-25"
publishedBy: "ashton-tan"
version: "01.00"
revisions:
  - version: "01.00"
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
keywords: ["perisian perakaunan Malaysia", "perisian perakaunan patuh e-invois", "perisian integrasi MyInvois", "perisian XBRL MBRS Malaysia", "perisian perakaunan diluluskan LHDN", "eksport taksonomi SSMxT"]
---

Listikel perisian perakaunan Malaysia adalah satu genre yang sudah lama selesai:
sepuluh produk, satu perenggan setiap satu, satu jadual ciri yang tiada siapa
guna, ditambah satu pautan gabungan (affiliate). Ia tidak pernah berguna, dan
sejak e-Invois dan MBRS 2.0 mendarat ia kini benar-benar mengelirukan, kerana
ia menyusun produk mengikut perkara yang sudah tidak lagi membezakan mereka.

Dua keupayaan yang membezakan mereka sekarang. Tiada satu pun muncul dalam
jadual ciri.

## Paksi 1: bagaimana perisian menghantar dokumen ke MyInvois

LHDN merekodkan **dua mekanisme penghantaran** — MyInvois Portal dan API —
dan secara berasingan membenarkan pembayar cukai melantik seorang
**perantara** untuk menyerah bagi pihaknya. Ini menghasilkan empat bentuk
praktikal, dan perisian yang anda beli menentukan yang mana terbuka untuk
anda.

| Laluan | Apa yang perisian perlu lakukan | Apa yang perlu disahkan |
| --- | --- | --- |
| **Portal sahaja** | Tiada apa-apa. Anda menaip atau memuat naik secara kelompok dokumen dalam MyInvois | Sama ada perisian boleh mengeksport fail yang sepadan dengan susun atur hamparan kelompok Portal, atau sekadar menaip semula |
| **API langsung** | Membina dan menandatangani dokumen UBL 2.1, menguruskan token, mengendalikan pengesahan tak segerak (asynchronous) | Sama ada penyetempatan Malaysia meliputi jenis dokumen self-billed dan medan aneksur import, bukan sekadar invois jualan standard |
| **Melalui perantara atau perisian tengah** | Mengeksport data transaksi bersih mengikut jadual | Kelayakan siapa yang digunakan untuk penyerahan, siapa memegang data, dan apa yang anda bawa keluar semasa keluar |
| **Melalui penyedia perkhidmatan Peppol** | Sama seperti perisian tengah, melalui satu titik akses Peppol | Sama ada anda benar-benar memerlukan pertukaran boleh saling kendali dengan rakan niaga — Peppol bukan syarat MyInvois |

Pilihan antara ini adalah persoalan volum dan seni bina yang dibincangkan
dalam [Integrasi MyInvois](/taxation/myinvois-integration). Apa yang tergolong
di sini ialah akibat dari sudut perisian: sebuah pakej tanpa laluan integrasi
API tidak menghalang anda daripada mematuhi, ia hanya mengikat anda kepada
Portal, dan kos Portal ialah ketukan kekunci serta tumpuan hujung bulan,
bukan yuran lesen.

**Butiran perantara yang wajar ditulis ke dalam kontrak:** perantara hanya
boleh melihat dan mengambil semula e-Invois yang diserahkannya sendiri.
Tukar penyedia, dan sejarah penyerahan anda tidak turut berpindah. Rancang
satu tempoh larian selari dan simpan arkib anda sendiri.

## Dakwaan akreditasi yang patut disangsikan

LHDN menerbitkan SDK, dokumentasi API dan satu FAQ. Ia tidak menerbitkan
skim akreditasi, program pensijilan atau senarai vendor yang diluluskan
untuk perisian e-Invois. Jika sesuatu produk dipasarkan sebagai
**diluluskan LHDN**, status itu adalah huraian vendor itu sendiri tentang
dirinya. Minta lihat instrumen itu.

Terdapat satu akreditasi sebenar dalam pengebilan elektronik Malaysia, dan
ia milik pihak lain. **MDEC ialah Peppol Authority Malaysia**, dan ia
mengakreditasi dua peranan yang berbeza:

| Peranan | Apakah ia |
| --- | --- |
| **Peppol Service Provider (SP)** | Mengendalikan satu titik akses Peppol — get penghubung yang menyalurkan dokumen |
| **Peppol-Ready Solution Provider (PRSP)** | Membina perisian atau ERP dengan pematuhan Peppol untuk pengguna akhir |

Kedua-dua senarai diterbitkan oleh MDEC. Tiada satu pun kelulusan LHDN, dan
tiada satu pun diperlukan untuk mematuhi mandat e-Invois. Vendor yang
memegang akreditasi MDEC telah menunjukkan pematuhan kepada piawaian
Peppol, satu kelayakan yang sah — untuk Peppol.

## Paksi 2: sama ada outputnya boleh disalurkan ke penyerahan MBRS

Inilah fakta yang membingkai semula seluruh kategori ini: **tiada pakej
perakaunan yang menyerah penyata kewangan kepada SSM.**

Penyerahan dibina dalam **MBRS Preparation Tool (mTool)** milik SSM sendiri,
yang menjana satu fail zip yang dimuat naik ke portal MBRS. Itulah artifak
penyerahan yang diterima. Apa sahaja yang dihasilkan oleh lejar anda, ia
hanya menjadi satu penyerahan MBRS selepas melalui alat itu.

Jadi MBRS-ready, sebagai dakwaan perisian, secara jujur hanya boleh
bermaksud satu perkara: outputnya berbentuk sedemikian rupa sehingga
memetakan dengan bersih kepada taksonomi **SSMxT** SSM. Tiga sifat
menentukan itu:

- **Satu imbangan duga yang stabil dan boleh dieksport** dengan kod akaun
  yang tidak berubah dari tahun ke tahun. Pemetaan dibina semula dari kosong
  setiap kali kod berubah.
- **Asas pembentangan yang tidak hanyut.** Bertukar antara format
  pembentangan memaksa pemetaan dibina semula walaupun angkanya sama.
- **Carta akaun yang setiap barisnya mempunyai tempat untuk mendarat.**
  Seni bina SSMxT menyatakan bahawa entiti **tidak boleh melanjutkan
  taksonomi itu** — pelanjutan khusus syarikat adalah dilarang, dan
  butiran perlu diletakkan dalam blok teks. Satu akaun tanpa konsep yang
  sepadan adalah keputusan manual setiap tahun.

Dua perangkap mekanikal terletak di hiliran dan wajar diketahui sebelum
anda menyalahkan perisian. Perbelanjaan disimpan sebagai nilai **positif**
dalam SSMxT, songsang daripada kebanyakan eksport lejar. Dan satu angka
yang dinyatakan dalam ribuan mesti membawa atribut `decimals` yang betul —
yang salah lulus pengesahan secara senyap dan menyerahkan satu angka yang
seribu kali terlalu besar atau terlalu kecil.

## Satu senarai semak penilaian untuk dihantar kepada vendor

1. Mekanisme penghantaran MyInvois yang manakah disokong oleh produk ini hari ini — eksport Portal, API langsung, atau penyerahan melalui perkhidmatan perantara anda sendiri?
2. Jika API: adakah penyetempatan meliputi e-Invois **self-billed** dan medan aneksur bagi barangan import, atau hanya invois jualan standard?
3. Di bawah kelayakan siapa dokumen diserahkan, dan siapa memegang dokumen yang disahkan?
4. Bolehkah kami mengeksport satu imbangan duga lengkap dengan kod akaun yang stabil, dalam format boleh dibaca mesin, tanpa perunding?
5. Adakah anda memegang akreditasi MDEC sebagai Peppol SP atau PRSP — dan jika anda mendakwa kelulusan LHDN, dokumen apakah yang membuktikannya?
6. Semasa keluar, apakah yang kami bawa bersama: lejar, pemetaan, sejarah penyerahan?

## Mengapa laman ini tidak menamakan sebarang produk

Kerana satu keupayaan hanya boleh diterbitkan jika vendor atau LHDN
menerbitkannya, dan laman keupayaan vendor berubah antara keluaran tanpa
log perubahan. Satu perbandingan produk yang ditulis hari ini adalah satu
tangkapan salinan pemasaran, bukan tangkapan perisian. Senarai semak di
atas bertahan lebih lama daripada tangkapan itu; satu jadual kedudukan
tidak akan bertahan.

## Kesilapan lazim

- **Mempercayai dakwaan diluluskan LHDN.** LHDN tidak menerbitkan sebarang senarai sedemikian.
- **Mengelirukan akreditasi Peppol MDEC dengan kelulusan LHDN,** atau menganggap Peppol sebagai mandatori.
- **Membeli satu butang penyerahan.** Tiada apa-apa yang menyerah kepada MBRS kecuali output mTool.
- **Membaca MBRS-ready sebagai pensijilan.** Paling baik ia hanya bermaksud satu eksport yang bersih dan stabil.
- **Menukar carta akaun setiap tahun** dan membayar semula untuk pemetaan setiap kali.
- **Hanya menilai invois jualan.** Volum self-billed adalah yang meruntuhkan kebanyakan pelaksanaan.
- **Menganggap pengesahan menangkap ralat skala.** Ralat skala seribu kali ganda lulus.

## Langkah seterusnya

Jalankan dua ujian ke atas apa yang anda sudah miliki sebelum anda membeli-belah.
Eksport satu imbangan duga penuh dan periksa sama ada setiap akaun mempunyai
tempat SSMxT yang jelas. Kemudian ambil satu transaksi self-billed — satu
komisen ejen atau satu pembekal asing — dan ikuti ia dari hujung ke hujung
ke dalam MyInvois. Mana-mana antara dua ini yang gagal ialah perkara yang
sebenarnya anda beli.
