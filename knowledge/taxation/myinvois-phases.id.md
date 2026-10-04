---
topicId: MY-TAX-0010
title: "Fase Pelaksanaan MyInvois, Ambang dan Tanggal Pelonggaran"
seoTitle: "Fase dan Tanggal MyInvois: Lini Masa e-Invois LHDN"
slug: "myinvois-phases"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "Setiap tanggal fase e-Invois LHDN, rentang peredaran, ambang pengecualian dan tanggal berakhirnya pelonggaran sementara, sebagaimana yang berlaku dalam e-Invoice Guideline terkini."

tier: "4"
mode: "practical"
contentType: "data"
sensitivity: "none"

answer: "Mandat e-Invois Malaysia berjalan dalam empat fase menurut peredaran FY2022: 1 Agustus 2024 bagi melebihi RM100 juta, 1 Januari 2025 bagi melebihi RM25 juta hingga RM100 juta, 1 Juli 2025 bagi melebihi RM5 juta hingga RM25 juta, dan 1 Januari 2026 bagi hingga RM5 juta. Wajib pajak dengan peredaran tahunan di bawah RM1 juta dikecualikan. Usaha yang mulai beroperasi dari 2023 dan seterusnya dimulai pada 1 Juli 2026."
keyTakeaways:
  - "Hanya empat fase — fase yang Anda masuki ditetapkan oleh peredaran FY2022 Anda dan tidak pernah berubah"
  - "Peredaran atau penghasilan tahunan di bawah RM1,000,000 adalah pengecualian penuh, bukan penundaan"
  - "Usaha baru yang mulai 2023–2025 dengan peredaran sekurang-kurangnya RM1 juta dimulai 1 Juli 2026"
  - "Wajib pajak fase 4 memiliki masa pelonggaran sementara yang berjalan hingga 31 Desember 2027"
  - "Selama pelonggaran Anda dapat mengonsolidasikan segalanya dan menolak permintaan e-Invois individu"
  - "Satu SVDP e-Invois dibuka dari 7 Juli 2026 hingga 31 Desember 2027 untuk menyelaraskan pengiriman yang terlewat"
  - "Kewajiban untuk menerbitkan terletak dalam s.82C Income Tax Act 1967, bukan dalam Guideline"
appliesTo: "Usaha Malaysia, LLP, persekutuan atau usaha perseorangan mana pun yang mencoba mengetahui kapan e-Invois berlaku bagi mereka, serta pelaksana yang menjadwalkan peluncuran."

verificationNeeded:
  - "Apakah kategori barang mewah dan perhiasan dalam Table 3.6 e-Invoice Specific Guideline telah diaktifkan — LHDN masih menyatakan rincian akan dikeluarkan pada waktu yang sesuai"
  - "Penalti ringgit tepat yang dikenakan dalam praktik di bawah s.120(1)(d) ITA 1967 bagi e-Invois yang gagal — rentangnya statutori tetapi LHDN tidak menerbitkan skala konsesi penilaian apa pun"

obligations:
  - what: "Menerbitkan dan mengirim e-Invois untuk validasi — wajib pajak dengan peredaran FY2022 di atas RM100 juta"
    trigger: "ongoing"
    due: "mulai 1 Agustus 2024"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Pelanggaran di bawah s.120(1)(d) ITA 1967"
  - what: "Menerbitkan dan mengirim e-Invois untuk validasi — peredaran FY2022 di atas RM25 juta dan hingga RM100 juta"
    trigger: "ongoing"
    due: "mulai 1 Januari 2025"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Pelanggaran di bawah s.120(1)(d) ITA 1967"
  - what: "Menerbitkan dan mengirim e-Invois untuk validasi — peredaran FY2022 di atas RM5 juta dan hingga RM25 juta"
    trigger: "ongoing"
    due: "mulai 1 Juli 2025"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Pelanggaran di bawah s.120(1)(d) ITA 1967"
  - what: "Menerbitkan dan mengirim e-Invois untuk validasi — peredaran FY2022 hingga RM5 juta"
    trigger: "ongoing"
    due: "mulai 1 Januari 2026"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Pelanggaran di bawah s.120(1)(d) ITA 1967"
  - what: "Menerbitkan dan mengirim e-Invois untuk validasi — usaha yang memulai operasi dari 2023 dan seterusnya"
    trigger: "ongoing"
    due: "mulai 1 Juli 2026, atau saat dimulainya operasi untuk usaha yang mulai pada 2026 atau sesudahnya"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"
    consequence: "Pelanggaran di bawah s.120(1)(d) ITA 1967"
  - what: "Menyampaikan e-Invois konsolidasi untuk transaksi di mana pembeli tidak memerlukannya"
    trigger: "ongoing"
    withinDays: 7
    due: "dalam 7 hari kalender setelah akhir bulan"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C(7)"
    consequence: "Transaksi tidak didukung oleh dokumen yang divalidasi untuk tujuan pajak"
  - what: "Patuhi mandat e-Invois kecuali usaha dikecualikan berdasarkan ukuran"
    trigger: "threshold"
    criteria:
      - metric: "turnover"
        op: "lt"
        value: 1000000
    exemption: true
    due: "Pengecualian penuh jika peredaran atau penghasilan tahunan di bawah RM1,000,000; jika tidak, ia wajib karena semua fase kini berlaku"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.82C"

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
  - title: "Pedoman e-Invois (Versi 4.7) (e-Invoice Guideline (Version 4.7))"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "Badan Pendapatan Dalam Negeri Malaysia (LHDN)"
    date: "2026-07-07"
  - title: "Pedoman Khusus e-Invois (Versi 4.8) (e-Invoice Specific Guideline (Version 4.8))"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "Badan Pendapatan Dalam Negeri Malaysia (LHDN)"
    date: "2026-07-07"
  - title: "Lini Masa Pelaksanaan e-Invois (Garis Masa Pelaksanaan e-Invois)"
    url: "https://www.hasil.gov.my/e-invois/garis-masa-pelaksanaan-e-invois/"
    publisher: "Badan Pendapatan Dalam Negeri Malaysia (LHDN)"
    date: "2025-12-07"
  - title: "Finance (No. 2) Act 2023 (Act 851) — Pasal baru 82B dan 82C (Finance (No. 2) Act 2023 (Act 851) — new sections 82B and 82C)"
    url: "https://www.myttx.customs.gov.my/wp-content/uploads/2024/02/WJW23%EF%80%A21341-BI.pdf"
    publisher: "Pemerintah Malaysia"
    date: "2023-12-29"

entity: "MyInvois e-Invoice implementation timeline"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "governs", to: "income-tax-act-1967" }
  - { rel: "explained-in", to: "e-invoice-data-fields" }
  - { rel: "related-to", to: "consolidated-e-invoice" }
related: ["e-invoicing", "consolidated-e-invoice", "self-billed-e-invoice", "myinvois-integration", "e-invoice-data-fields"]
keywords: ["fasa MyInvois", "tarikh pelaksanaan e-invois Malaysia", "pengecualian e-invois RM1 juta", "tempoh pelonggaran e-invois", "garis masa e-invois LHDN", "tarikh pelaksanaan e-invois"]
---

Dua angka menentukan semuanya: peredaran FY2022 Anda, yang menetapkan fase Anda
secara permanen, dan RM1,000,000, di bawah mana Anda keluar sepenuhnya dari sistem
ini. Segala sesuatu lain pada halaman ini adalah rincian.

Halaman ini dipertahankan sebagai data karena tanggal-tanggalnya telah berubah
lebih dari sekali. Angka-angka di bawah diambil dari **e-Invoice Guideline versi
4.7** dan **e-Invoice Specific Guideline versi 4.8**, keduanya diterbitkan pada
7 Juli 2026.

## Apa tanggal fase wajib?

| Fase | Wajib pajak yang disasar | Wajib mulai |
| --- | --- | --- |
| 1 | Peredaran atau penghasilan tahunan **melebihi RM100 juta** | **1 Agustus 2024** |
| 2 | **Melebihi RM25 juta dan hingga RM100 juta** | **1 Januari 2025** |
| 3 | **Melebihi RM5 juta dan hingga RM25 juta** | **1 Juli 2025** |
| 4 | **Hingga RM5 juta** | **1 Januari 2026** |

Tidak ada fase 5. Fase kelima bagi rentang RM150,000–RM500,000 pernah muncul dalam
versi guideline terdahulu dan telah hilang dalam versi 4.7.

## Bagaimana fase saya ditentukan?

| Situasi | Dasar |
| --- | --- |
| Anda memiliki laporan keuangan yang diaudit | Peredaran atau penghasilan dalam laporan laba rugi komprehensif bagi **tahun keuangan 2022** |
| Anda tidak memiliki laporan keuangan yang diaudit | Penghasilan tahunan yang dilaporkan dalam laporan pajak **YA2022** |
| Anda mengubah akhir tahun FY2022 Anda | Peredaran **diprorata menjadi 12 bulan** |

Begitu ditetapkan, ia tetap ditetapkan. Section 1.5 Guideline menyatakan dengan
jelas: perubahan peredaran kemudian tidak mengubah tanggal pelaksanaan Anda. Sebuah
perusahaan yang mencatatkan RM30 juta pada 2022 dan RM4 juta hari ini masih
merupakan wajib pajak fase 2.

## Kapan usaha baru dimulai?

| Usaha dimulai | Tanggal pelaksanaan e-Invois |
| --- | --- |
| 2023 hingga 2025, peredaran sekurang-kurangnya RM1,000,000 | **1 Juli 2026** |
| 2026 dan seterusnya | **1 Juli 2026** atau tanggal mulai |
| 2026 dan seterusnya, peredaran tahun pertama di bawah RM1,000,000 | **1 Januari tahun kedua berikutnya** setelah tahun peredaran mencapai RM1,000,000 |

## Siapa yang dikecualikan?

Section 1.6.1 Guideline mengecualikan, dari menerbitkan e-Invois apa pun termasuk
yang self-billed:

- Wajib pajak dengan peredaran atau penghasilan tahunan **kurang dari RM1,000,000**
- Kantor diplomatik asing
- Individu yang tidak menjalankan usaha
- Badan statutori, otoritas statutori dan otoritas lokal, bagi pungutan statutori,
  dan bagi barang yang dijual atau jasa yang dilaksanakan **sebelum 1 Juli 2025**
- Organisasi internasional, bagi barang yang dijual atau jasa yang dilaksanakan
  **sebelum 1 Juli 2025**

Pengecualian itu melekat pada orang tersebut, bukan kelompok. Section 1.6.5: sebuah
perusahaan yang dimiliki oleh orang yang dikecualikan tetap melaksanakan menurut
lini masanya sendiri.

Secara terpisah, section 1.6.7 mengeluarkan jenis pendapatan tertentu dari cakupan
— pendapatan penggajian, pensiun, alimoni, zakat, sebagian distribusi dividen,
nilai kontrak sekuritas dan derivatif yang diperdagangkan di bursa, serta pelepasan
saham tidak tercatat kecuali pelepas itu adalah perusahaan, LLP, badan amanah atau
koperasi.

## Apa yang diperbolehkan oleh masa pelonggaran sementara?

Disetujui oleh Pemerintah pada 26 Juli 2024, enam bulan dari setiap tanggal fase —
kecuali fase 4, yang diperpanjang jauh melebihi itu.

| Fase | Masa pelonggaran sementara |
| --- | --- |
| 1 | 1 Agustus 2024 – **31 Januari 2025** |
| 2 | 1 Januari 2025 – **30 Juni 2025** |
| 3 | 1 Juli 2025 – **31 Desember 2025** |
| 4 (kedua tanggal mulai 1 Jan 2026 dan 1 Jul 2026) | **hingga 31 Desember 2027** |

Sepanjang masa pelonggaran, section 16.2 Specific Guideline memperbolehkan seorang
wajib pajak untuk:

- mengonsolidasikan **semua** aktivitas, termasuk industri dalam Table 3.6 yang
  sebaliknya dilarang mengonsolidasi
- mengonsolidasikan **semua** keadaan self-billed
- menempatkan teks apa pun dalam field *Description of Product or Service*, dan
  bukan nomor rujukan struk atau laporan
- **menolak** permintaan pembeli atau pemasok untuk e-Invois individu

LHDN juga tidak akan menuntut di bawah s.120 Income Tax Act 1967 sepanjang masa
itu, dengan syarat wajib pajak sekurang-kurangnya mengirim dokumen konsolidasi.

Syarat terakhir itulah yang selalu terabaikan. Pelonggaran itu bukan izin untuk
tidak mengirim apa pun sama sekali.

## Apa itu SVDP e-Invois?

Satu Special Voluntary Disclosure Programme berjalan dari **7 Juli 2026 hingga
31 Desember 2027** bagi wajib pajak yang terlewat pengiriman, mengirim e-Invois
yang tidak patuh, atau sudah berada di bawah pemeriksaan kepatuhan e-Invois.
Pemeriksaan kepatuhan dan penalti tidak dikenakan atas apa yang diungkapkan,
kecuali pengungkapan itu melibatkan penipuan, keingkaran sengaja atau kelalaian.

Pengiriman harus menggunakan versi e-Invois **SVDP 1.2** (tanpa tanda tangan
digital) atau **SVDP 1.3** (dengan tanda tangan digital), dan e-Invois konsolidasi
yang terlewat harus disampaikan bulan demi bulan — bukan digabungkan ke dalam satu
dokumen susulan.

## Dari mana datangnya kewajiban hukum ini?

Bukan Guideline. **Section 82C Income Tax Act 1967**, yang dimasukkan oleh Finance
(No. 2) Act 2023 (Act 851), menciptakan kewajiban untuk menerbitkan invois
elektronik bagi setiap transaksi dan mengirimnya untuk validasi Ketua Pengarah.
Section 82C(6) mencakup invois self-billed, s.82C(7) invois konsolidasi, dan
s.82C(8) memperbolehkan e-Invois pengganti dalam **tiga hari** setelah satu yang
rusak. Section 120(1)(d) menjadikan pelanggaran s.82C(1), (6) dan (7) sebagai suatu
tindak pidana.

## Kesalahan umum

- **Menganggap angka RM1 juta sebagai penundaan.** Ia adalah pengecualian permanen
  dalam section 1.6.1. Ia juga bukan satu fase — tidak ada fase 5.
- **Menghitung ulang fase Anda dari peredaran terkini.** Ujiannya adalah FY2022,
  sekali saja.
- **Membaca pelonggaran fase 4 sebagai libur.** Pengiriman konsolidasi adalah
  syarat bagi konsesi itu, bukan alternatif baginya.
- **Menganggap periode 72 jam itu adalah periode koreksi.** Ia membatalkan; ia
  tidak mengubah. Setelah 72 jam Anda menerbitkan e-Invois nota kredit, nota debit
  atau nota pengembalian.
- **Mengabaikan bahwa tanggal fase-3 juga merupakan tanggal pemutus** bagi badan
  statutori dan organisasi internasional, yang pengecualiannya hanya mencakup
  transaksi sebelum 1 Juli 2025.

## Apa selanjutnya

Pastikan transaksi mana yang dapat dikonsolidasikan langsung — beberapa industri
tidak pernah bisa, dan transaksi tunggal apa pun melebihi RM10,000 telah
dikecualikan sejak 1 Januari 2026. Jika Anda membeli dari pemasok asing atau
membayar individu, aturan self-billed berlaku bagi Anda tidak peduli sekecil apa
pun buku penjualan Anda. Pelaksana harus mulai dari daftar field dan bukan lini
masa.
