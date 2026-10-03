---
topicId: MY-TAX-0003
title: "e-Invois di Malaysia: Dari Mana Memulai dengan MyInvois"
seoTitle: "e-Invois Malaysia: Titik Mula MyInvois"
slug: "e-invoicing"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "Halaman panduan untuk mandat e-Invois Malaysia — cara pengesahan MyInvois berfungsi, kapan usaha Anda mulai terlibat, dan panduan terperinci mana yang menjawab persoalan Anda."

tier: "3"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "e-Invois memerlukan data faktur dikirim ke sistem MyInvois LHDN untuk disahkan, baik melalui Portal MyInvois yang gratis atau sistem yang terintegrasi melalui API. Dokumen yang disahkan menerima Nomor Identifikasi Unik dan kode QR. Mandat ini dilaksanakan secara bertahap menurut omzet tahunan, dengan fase terakhir mencakup usaha hingga RM5 juta mulai 1 Januari 2026, sedangkan usaha dengan omzet di bawah RM1 juta dikecualikan. Setiap fase membawa periode kelonggaran interimnya sendiri."
keyTakeaways:
  - "Pengesahan terjadi melalui MyInvois sebelum dokumen itu berfungsi sebagai faktur bagi tujuan pajak pendapatan"
  - "Empat fase, tidak ada fase kelima — fase terakhir mulai 1 Januari 2026 bagi omzet hingga RM5 juta"
  - "Usaha dengan omzet tahunan di bawah RM1,000,000 dikecualikan"
  - "Fase Anda ditetapkan oleh angka FY2022 atau YA2022 dan tidak berubah setelahnya"
  - "e-Invois yang disahkan LHDN tidak secara otomatis memenuhi aturan faktur pajak SST — itu adalah persyaratan dokumen yang terpisah"
appliesTo: "Pemilik usaha, tim keuangan dan administrator sistem yang bersiap untuk atau sedang beroperasi di bawah mandat e-Invois."

verificationNeeded: []

lang: "id"
masterLanguage: "en"
translationStatus: "pending"

status: "draft"
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
  - title: "Garis Panduan e-Invois IRBM (IRBM e-Invoice Guideline)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "Lembaga Hasil Dalam Negeri (LHDN)"
    date: "2026-07-07"
  - title: "Garis Panduan Khusus e-Invois IRBM (IRBM e-Invoice Specific Guideline)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "Lembaga Hasil Dalam Negeri (LHDN)"
    date: "2026-07-07"
  - title: "Portal MyInvois (MyInvois Portal)"
    url: "https://myinvois.hasil.gov.my/"
    publisher: "Lembaga Hasil Dalam Negeri (LHDN)"

entity: "e-Invoicing and MyInvois"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "explained-in", to: "myinvois-phases" }
  - { rel: "explained-in", to: "myinvois-integration" }
  - { rel: "related-to", to: "consolidated-e-invoice" }
  - { rel: "related-to", to: "self-billed-e-invoice" }
  - { rel: "related-to", to: "e-invoice-vs-tax-invoice" }
related: ["myinvois-phases", "myinvois-integration", "e-invoice-data-fields", "consolidated-e-invoice", "self-billed-e-invoice", "e-invoice-vs-tax-invoice", "e-invoice-accounting-records"]
keywords: ["e-Invois Malaysia", "MyInvois", "e-invois LHDN", "fasa e-invois Malaysia", "pengesahan MyInvois"]
---

Dahulu, faktur sah karena Andalah yang menerbitkannya. Di bawah mandat e-Invois
ia sah karena LHDN yang mengatakan demikian — dokumen itu perlu dikirim ke
MyInvois dan disahkan dahulu sebelum ia menjalankan fungsinya bagi tujuan
pajak pendapatan.

Satu perubahan itu saja yang memicu setiap persoalan lanjutan, dan
sebagian besarnya memiliki jawaban khusus.

## Cara pengesahan berfungsi, dalam enam langkah

1. Pemasok mengirim data transaksi ke MyInvois, baik dengan mengetik
   langsung ke dalam Portal yang gratis atau secara otomatis melalui sistem
   yang terintegrasi melalui API.
2. LHDN mengesahkan struktur dan medan yang diperlukan hampir secara waktu
   nyata.
3. **Nomor Identifikasi Unik** dan kode QR dikeluarkan ketika berhasil.
4. Pemasok membagikan dokumen yang disahkan itu dengan pembeli.
5. Pembeli bisa memastikan kode QR itu berdasarkan rekam LHDN.
6. Penolakan dan pembatalan harus ditindaklanjuti dalam jangka waktu yang
   dibolehkan.

## Panduan mana yang Anda perlukan

| Jika persoalan Anda adalah | Baca |
| --- | --- |
| Kapan ini berlaku bagi usaha saya? | [Fase MyInvois, ambang dan tanggal kelonggaran](/id/taxation/myinvois-phases) |
| Portal, API atau penyedia middleware? | [Integrasi MyInvois](/id/taxation/myinvois-integration) |
| Data apa yang sebenarnya perlu saya kirim? | [Rujukan medan data e-Invois](/id/taxation/e-invoice-data-fields) |
| Bisakah saya kumpulkan penjualan ritel saya dalam kelompok, bukan menerbitkan satu untuk masing-masing? | [e-Invois Terkonsolidasi](/id/taxation/consolidated-e-invoice) |
| Pemasok saya berada di luar negeri, atau seorang individu | [e-Invois Ditagih Sendiri](/id/taxation/self-billed-e-invoice) |
| Apakah ini menggantikan faktur pajak SST saya? | [e-Invois dibanding faktur pajak SST](/id/taxation/e-invoice-vs-tax-invoice) |
| Berapa lama saya perlu menyimpannya? | [e-Invois dan rekam akuntansi](/id/accounting/e-invoice-accounting-records) |

## Empat hal yang sering disalahpahami

**Tidak ada fase kelima.** Pelaksanaan berjalan dalam empat fase menurut
omzet tahunan, berakhir dengan kohort hingga RM5 juta mulai 1 Januari
2026. Usaha dengan omzet tahunan di bawah **RM1,000,000** dikecualikan,
bersama kantor diplomatik asing dan individu yang tidak menjalankan
usaha. Ini tidak berbenturan dengan tanggal mulai **1 Juli 2026** yang
terpisah dan berlaku bagi usaha yang *baru mulai* — sebuah
usaha yang mulai antara 2023 hingga 2025 dengan omzet RM1 juta atau
lebih akan terlibat pada tanggal tersebut. Ia adalah aturan bagi peserta
baru yang tidak memiliki dasar FY2022, bukan fase omzet kelima.

**Fase Anda tetap, bukan mengambang.** Ia ditentukan oleh laporan keuangan
yang diaudit FY2022 atau surat pemberitahuan YA2022, disesuaikan secara pro rata jika akhir
tahun berubah, dan ia tidak berubah setelahnya. Berkembang melewati suatu
ambang kemudian tidak memindahkan Anda ke fase lebih awal, dan menyusut tidak
mengeluarkan Anda darinya.

**Periode kelonggaran bukan sama dengan tanggal fase.** Setiap fase membawa
periode interim di mana LHDN tidak akan mengambil tindakan terhadap
ketidakpatuhan, dan kelonggaran Fase 4 berjalan jauh lebih lama daripada
fase-fase sebelumnya. Baca panduan fase itu dan jangan menganggap tanggal
mandat sebagai tanggal penegakan.

**e-Invois yang disahkan bukan secara otomatis faktur pajak SST.** Kedua
rezim ini memiliki persyaratan dokumen yang terpisah, dan posisi statutori
menyatakan bahwa jika rincian e-Invois tidak selaras dengan persyaratan faktur
di bawah undang-undang tertulis lain, e-Invois itu sah untuk tujuan Akta Cukai
Pendapatan saja. Orang terdaftar SST memerlukan satu dokumen yang memenuhi
keduanya.

## Kesalahan lazim

- Menunggu sampai tanggal mandat untuk mulai menguji. Kegagalan pengesahan
  TIN dan integrasi hanya muncul di bawah volume transaksi sebenarnya.
- Menganggap setiap pelanggan memerlukan e-Invois terperinci, padahal
  banyak transaksi B2C bisa dikonsolidasikan — tunduk pada aktivitas
  yang dilarang.
- Mengabaikan kewajiban e-Invois ditagih sendiri bagi pemasok
  asing dan bagi pembayaran kepada individu yang tidak menerbitkan apa pun
  sendiri.
- Memperlakukan ini sebagai proyek IT semata-mata. Sebagian besar kegagalan saat
  go-live berasal dari data induk pelanggan dan pemasok yang tidak
  bersih, bukan bug integrasi.
- Menganggap MyInvois sebagai arsip Anda. LHDN tidak menerbitkan jaminan
  penyimpanan apa pun bagi dokumen yang disahkan; kewajiban penyimpanan
  tetap menjadi tanggung jawab Anda.

## Apa selanjutnya

Jika Anda masih belum tahu apakah atau kapan Anda terlibat, mulailah dengan
panduan fase — ia membawa jalur omzet, ambang pengecualian, aturan
usaha baru dan setiap tanggal berakhir kelonggaran. Jika Anda sudah
terlibat dan sedang memilih cara untuk mengirim, panduan integrasi
membandingkan jalur Portal, API langsung dan middleware menurut volume
transaksi.
