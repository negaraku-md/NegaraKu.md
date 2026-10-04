---
topicId: MY-ACC-0011
title: "Perangkat Lunak Akuntansi di Malaysia: Dua Kemampuan yang Kini Menentukannya"
seoTitle: "Accounting Software Malaysia: e-Invoice and MBRS Fit"
slug: "accounting-software-malaysia"
category: "accounting"
subcategory: ["bookkeeping"]
summary: "Cara netral-vendor untuk menilai perangkat lunak akuntansi bagi sebuah perusahaan Malaysia atas dua sumbu yang kini penting — bagaimana ia sampai ke MyInvois, dan apakah outputnya dapat mendukung penyerahan MBRS."

tier: "4"
mode: "practical"
contentType: "comparison"
sensitivity: "none"

answer: "Daftar fitur tidak lagi membedakan paket akuntansi yang dijual di Malaysia. Dua kemampuan yang membedakannya. Pertama, bagaimana perangkat lunak mengirim dokumen ke MyInvois — melalui portal gratis, melalui integrasi API langsung, atau melalui perantara yang mengirim di bawah kualifikasinya sendiri. Kedua, apakah outputnya dapat dipetakan ke taksonomi SSMxT milik SSM untuk penyerahan MBRS, mengingat tidak ada paket akuntansi yang menyerahkan langsung ke SSM. Selebihnya adalah pilihan pribadi."
keyTakeaways:
  - "LHDN mencatat dua mekanisme pengiriman — MyInvois Portal dan API — di samping penyerahan oleh perantara yang ditunjuk"
  - "LHDN menerbitkan SDK tetapi tidak ada akreditasi, sertifikasi atau daftar vendor yang disetujui untuk perangkat lunak e-Invois; klaim 'disetujui LHDN' adalah klaim vendor itu sendiri"
  - "Satu-satunya akreditasi nyata dalam penagihan elektronik Malaysia adalah milik MDEC, sebagai Peppol Authority, mencakup Peppol Service Provider dan Peppol-Ready Solution Provider — dan Peppol bukan syarat MyInvois"
  - "Tidak ada paket akuntansi yang menyerahkan ke MBRS; penyerahan dibangun dalam alat penyusunan milik SSM sendiri dan diunggah ke mPortal sebagai berkas zip"
  - "MBRS-ready oleh karena itu hanya dapat secara jujur berarti satu neraca saldo yang stabil dan dapat diekspor yang memetakan ke konsep SSMxT, bukan satu tombol penyerahan"
  - "Taksonomi SSMxT tidak dapat diperluas oleh perusahaan, jadi bagan akun yang tidak punya tempat dalam taksonomi itu adalah biaya berulang"
  - "Perantara hanya dapat mengambil kembali dokumen yang diserahkannya sendiri, jadi mengganti penyedia tidak membawa serta riwayat penyerahan Anda"
appliesTo: "Perusahaan Malaysia yang sedang memilih atau mengganti perangkat lunak akuntansi, dan tim keuangan yang mengaudit apa yang sebenarnya dapat dilakukan oleh paket mereka saat ini."

verificationNeeded:
  - "Klaim kemampuan untuk produk tertentu mana pun sengaja tidak dimasukkan dalam halaman ini — verifikasi masing-masing terhadap dokumentasi terkini vendor itu sendiri, karena cakupan pelokalan berubah antar rilis tanpa pemberitahuan"
  - "SSM tidak menerbitkan daftar perangkat lunak penyusunan XBRL pihak ketiga yang disetujui atau diakreditasi pada halaman MBRS-nya; verifikasi dengan SSM sebelum bergantung pada klaim sertifikasi MBRS apa pun oleh vendor"
  - "Pedoman e-Invois dan Pedoman Khusus direvisi dengan sering — verifikasi versi terkini sebelum menganggap kebutuhan integrasi apa pun sebagai final"

lang: "id"
masterLanguage: "en"
translationStatus: "pending"

status: "published"
aiAssisted: true
reviewer: null
reviewed: "2026-07-25"
publishedBy: "ashton-tan"
revision: 0
revisions:
  - revision: 0
    date: 2026-07-20
    change: "Approved and published."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "Kit Pengembangan Perangkat Lunak (SDK) untuk Sistem MyInvois LHDNM (Software Development Kit (SDK) for the LHDNM MyInvois System)"
    url: "https://sdk.myinvois.hasil.gov.my/"
    publisher: "Badan Pendapatan Dalam Negeri Malaysia (LHDN)"
  - title: "Pedoman e-Invois IRBM (IRBM e-Invoice Guideline)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "Badan Pendapatan Dalam Negeri Malaysia (LHDN)"
  - title: "Penyedia Layanan Peppol — e-Invois Nasional (Peppol Service Providers — National e-Invoicing)"
    url: "https://www.mdec.my/national-einvoicing/peppol-service-providers"
    publisher: "Malaysia Digital Economy Corporation (MDEC)"
  - title: "Dokumen Arsitektur SSMxT 2022 (SSMxT 2022 Architecture Document)"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf"
    publisher: "Komisi Perusahaan Malaysia (SSM)"
  - title: "Alat Penyusunan MBRS (MBRS Preparation Tool)"
    url: "https://www.ssm.com.my/Pages/Services/Other-Services/XBRL%20250918/MBRS-Preparation-Tool.aspx"
    publisher: "Komisi Perusahaan Malaysia (SSM)"

entity: "Accounting software"
relations:
  - { rel: "related-to", to: "myinvois-integration" }
  - { rel: "affects", to: "mbrs-2-filing-guide" }
  - { rel: "related-to", to: "sdn-bhd-bookkeeping" }
related: ["sdn-bhd-bookkeeping", "mbrs-2-filing-guide", "mbrs-tagging-errors", "myinvois-integration", "e-invoice-accounting-records", "bookkeeping-in-house-vs-outsourced", "e-invoicing", "accounting-records-section-245"]
keywords: ["perisian perakaunan Malaysia", "perisian perakaunan patuh e-invois", "perisian integrasi MyInvois", "perisian XBRL MBRS Malaysia", "perisian perakaunan diluluskan LHDN", "eksport taksonomi SSMxT"]
---

Listikel perangkat lunak akuntansi Malaysia adalah suatu genre yang sudah lama usang:
sepuluh produk, satu paragraf masing-masing, satu tabel fitur yang tidak ada yang
memakainya, ditambah satu tautan afiliasi (affiliate). Ia tidak pernah berguna, dan
sejak e-Invois dan MBRS 2.0 hadir ia kini benar-benar membingungkan, karena ia menyusun
produk menurut hal yang sudah tidak lagi membedakan mereka.

Dua kemampuan yang membedakan mereka sekarang. Tidak satu pun muncul dalam tabel fitur.

## Sumbu 1: bagaimana perangkat lunak mengirim dokumen ke MyInvois

LHDN mencatat **dua mekanisme pengiriman** — MyInvois Portal dan API — dan secara
terpisah membolehkan wajib pajak menunjuk seorang **perantara** untuk menyerahkan atas
namanya. Ini menghasilkan empat bentuk praktis, dan perangkat lunak yang Anda beli
menentukan mana yang terbuka untuk Anda.

| Jalur | Apa yang perlu dilakukan perangkat lunak | Apa yang perlu dipastikan |
| --- | --- | --- |
| **Portal saja** | Tidak ada. Anda mengetik atau mengunggah secara massal dokumen dalam MyInvois | Apakah perangkat lunak dapat mengekspor berkas yang cocok dengan tata letak spreadsheet massal Portal, atau sekadar mengetik ulang |
| **API langsung** | Membangun dan menandatangani dokumen UBL 2.1, mengelola token, menangani validasi tak sinkron (asynchronous) | Apakah pelokalan Malaysia mencakup jenis dokumen self-billed dan kolom aneksur impor, bukan sekadar faktur penjualan standar |
| **Melalui perantara atau middleware** | Mengekspor data transaksi bersih menurut jadwal | Kualifikasi siapa yang digunakan untuk penyerahan, siapa yang memegang data, dan apa yang Anda bawa keluar saat keluar |
| **Melalui penyedia layanan Peppol** | Sama seperti middleware, melalui satu titik akses Peppol | Apakah Anda benar-benar memerlukan pertukaran yang dapat saling beroperasi dengan mitra dagang — Peppol bukan syarat MyInvois |

Pilihan di antara ini adalah persoalan volume dan arsitektur yang dibahas dalam
[Integrasi MyInvois](/id/taxation/myinvois-integration). Yang termasuk di sini adalah
akibat dari sudut perangkat lunak: sebuah paket tanpa jalur integrasi API tidak
menghalangi Anda dari kepatuhan, ia hanya mengikat Anda ke Portal, dan biaya Portal
adalah ketukan tombol serta perhatian akhir bulan, bukan biaya lisensi.

**Detail perantara yang layak ditulis ke dalam kontrak:** perantara hanya dapat melihat
dan mengambil kembali e-Invois yang diserahkannya sendiri. Ganti penyedia, dan riwayat
penyerahan Anda tidak ikut berpindah. Rencanakan satu periode berjalan paralel dan
simpan arsip Anda sendiri.

## Klaim akreditasi yang patut diragukan

LHDN menerbitkan SDK, dokumentasi API dan satu FAQ. Ia tidak menerbitkan skema
akreditasi, program sertifikasi atau daftar vendor yang disetujui untuk perangkat lunak
e-Invois. Jika suatu produk dipasarkan sebagai **disetujui LHDN**, status itu adalah
deskripsi vendor itu sendiri tentang dirinya. Minta untuk melihat instrumennya.

Ada satu akreditasi nyata dalam penagihan elektronik Malaysia, dan ia milik pihak lain.
**MDEC adalah Peppol Authority Malaysia**, dan ia mengakreditasi dua peran yang berbeda:

| Peran | Apa itu |
| --- | --- |
| **Peppol Service Provider (SP)** | Mengoperasikan satu titik akses Peppol — gerbang penghubung yang menyalurkan dokumen |
| **Peppol-Ready Solution Provider (PRSP)** | Membangun perangkat lunak atau ERP dengan kepatuhan Peppol untuk pengguna akhir |

Kedua daftar diterbitkan oleh MDEC. Tidak satu pun merupakan persetujuan LHDN, dan tidak
satu pun diperlukan untuk mematuhi mandat e-Invois. Vendor yang memegang akreditasi MDEC
telah menunjukkan kepatuhan pada standar Peppol, suatu kualifikasi yang sah — untuk
Peppol.

## Sumbu 2: apakah outputnya dapat disalurkan ke penyerahan MBRS

Inilah fakta yang membingkai ulang seluruh kategori ini: **tidak ada paket akuntansi
yang menyerahkan laporan keuangan ke SSM.**

Penyerahan dibangun dalam **MBRS Preparation Tool (mTool)** milik SSM sendiri, yang
menghasilkan satu berkas zip yang diunggah ke portal MBRS. Itulah artefak penyerahan
yang diterima. Apa pun yang dihasilkan oleh buku besar Anda, ia baru menjadi satu
penyerahan MBRS setelah melalui alat itu.

Jadi MBRS-ready, sebagai klaim perangkat lunak, secara jujur hanya dapat berarti satu
hal: outputnya berbentuk sedemikian rupa sehingga memetakan dengan bersih ke taksonomi
**SSMxT** SSM. Tiga sifat menentukan hal itu:

- **Satu neraca saldo yang stabil dan dapat diekspor** dengan kode akun yang tidak
  berubah dari tahun ke tahun. Pemetaan dibangun ulang dari nol setiap kali kode berubah.
- **Dasar penyajian yang tidak bergeser.** Berpindah antar format penyajian memaksa
  pemetaan dibangun ulang meskipun angkanya sama.
- **Bagan akun yang setiap barisnya punya tempat untuk mendarat.** Arsitektur SSMxT
  menyatakan bahwa entitas **tidak dapat memperluas taksonomi itu** — perluasan khusus
  perusahaan dilarang, dan rincian perlu ditempatkan dalam blok teks. Satu akun tanpa
  konsep yang sepadan adalah keputusan manual setiap tahun.

Dua jebakan mekanis terletak di hilir dan layak diketahui sebelum Anda menyalahkan
perangkat lunak. Beban disimpan sebagai nilai **positif** dalam SSMxT, terbalik dari
kebanyakan ekspor buku besar. Dan satu angka yang dinyatakan dalam ribuan harus membawa
atribut `decimals` yang benar — yang salah lolos validasi secara diam-diam dan
menyerahkan satu angka yang seribu kali terlalu besar atau terlalu kecil.

## Satu daftar periksa penilaian untuk dikirim kepada vendor

1. Mekanisme pengiriman MyInvois yang mana yang didukung oleh produk ini hari ini — ekspor Portal, API langsung, atau penyerahan melalui layanan perantara Anda sendiri?
2. Jika API: apakah pelokalan mencakup e-Invois **self-billed** dan kolom aneksur bagi barang impor, atau hanya faktur penjualan standar?
3. Di bawah kualifikasi siapa dokumen diserahkan, dan siapa yang memegang dokumen yang divalidasi?
4. Dapatkah kami mengekspor satu neraca saldo lengkap dengan kode akun yang stabil, dalam format yang dapat dibaca mesin, tanpa konsultan?
5. Apakah Anda memegang akreditasi MDEC sebagai Peppol SP atau PRSP — dan jika Anda mengklaim persetujuan LHDN, dokumen apa yang membuktikannya?
6. Saat keluar, apa yang kami bawa serta: buku besar, pemetaan, riwayat penyerahan?

## Mengapa halaman ini tidak menyebutkan produk apa pun

Karena satu kemampuan hanya dapat dipublikasikan jika vendor atau LHDN
mempublikasikannya, dan halaman kemampuan vendor berubah antar rilis tanpa log
perubahan. Satu perbandingan produk yang ditulis hari ini adalah satu tangkapan salinan
pemasaran, bukan tangkapan perangkat lunak. Daftar periksa di atas bertahan lebih lama
daripada tangkapan itu; satu tabel peringkat tidak akan bertahan.

## Kesalahan lazim

- **Mempercayai klaim disetujui LHDN.** LHDN tidak menerbitkan daftar semacam itu.
- **Mengacaukan akreditasi Peppol MDEC dengan persetujuan LHDN,** atau menganggap Peppol sebagai wajib.
- **Membeli satu tombol penyerahan.** Tidak ada yang menyerahkan ke MBRS kecuali output mTool.
- **Membaca MBRS-ready sebagai sertifikasi.** Paling baik ia hanya berarti satu ekspor yang bersih dan stabil.
- **Mengganti bagan akun setiap tahun** dan membayar ulang untuk pemetaan setiap kali.
- **Hanya menilai faktur penjualan.** Volume self-billed adalah yang meruntuhkan kebanyakan implementasi.
- **Menganggap validasi menangkap galat skala.** Galat skala seribu kali lipat lolos.

## Langkah selanjutnya

Jalankan dua uji terhadap apa yang sudah Anda miliki sebelum Anda berbelanja. Ekspor
satu neraca saldo penuh dan periksa apakah setiap akun punya tempat SSMxT yang jelas.
Kemudian ambil satu transaksi self-billed — satu komisi agen atau satu pemasok asing —
dan ikuti dari ujung ke ujung ke dalam MyInvois. Mana pun di antara dua ini yang gagal
adalah hal yang sebenarnya Anda beli.
