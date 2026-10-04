---
topicId: MY-EMP-0014
title: "Tarif Iuran Statutori dan Tenggat Penggajian"
seoTitle: "Rujukan Tarif dan Tenggat Payroll Malaysia"
slug: "payroll-rates-deadlines-malaysia"
category: "employment"
subcategory: ["payroll-statutory"]
summary: "Setiap tarif iuran statutori, batas atas gaji, formulir dan tenggat payroll Malaysia yang dikonfirmasi, disusun dalam satu jadwal rujukan, masing-masing dilacak ke otoritas yang menerbitkannya."

tier: "4"
mode: "practical"
contentType: "data"

answer: "Lima aliran iuran statutori perlu disetorkan menjelang tanggal 15 bulan berikutnya setelah bulan gaji: EPF, SOCSO, EIS, PCB dan levi HRD Corp. Setiap tahun, Borang EA perlu diberikan kepada pekerja menjelang 28 Februari dan Borang E beserta CP8D perlu dikirim kepada LHDN menjelang 31 Maret. Upah minimum adalah RM1,700. Batas atas gaji untuk SOCSO dan EIS adalah RM6,000. Iuran EPF bagi gaji di bawah RM20,000 harus mengikuti jadwal tarif dalam Jadwal Ketiga, bukan persentase."
keyTakeaways:
  - "Satu tanggal membawa lima kewajiban — tanggal 15 bulan berikutnya untuk EPF, SOCSO, EIS, PCB dan levi HRD"
  - "Jadwal tarif gaji EPF, bukan persentase, berlaku untuk gaji apa pun hingga RM20,000"
  - "SOCSO dan EIS keduanya berhenti pada batas atas gaji bulanan RM6,000, berlaku sejak 1 Oktober 2024"
  - "Pekerja bukan warga negara Malaysia yang terdaftar sejak 1 Agustus 1998 menyumbang 2% pemberi kerja dan 2% pekerja kepada EPF, berlaku untuk gaji Oktober 2025"
  - "Bunga keterlambatan pembayaran berbeda menurut skema: 6% setahun untuk SOCSO dan EIS, 10% setahun untuk levi HRD"
  - "Borang E dan Borang P dikecualikan dari masa tenggang e-Filing LHDN"
appliesTo: "Administrator payroll, tim HR, staf keuangan dan sekretaris perusahaan yang mengelola payroll di Malaysia."

verificationNeeded:
  - "Tarif dividen pembayaran terlambat dan penalti EPF tidak disertakan — pastikan biaya terkini terhadap kwsp.gov.my sebelum menerbitkan angka apa pun"
  - "Bagian pekerja Kategori 2 SOCSO dan jadwal band Third Schedule lengkap tidak direproduksi di sini — baca dari perkeso.gov.my"
  - "Tarif levi pekerja asing dan status warta levi berbilang tingkat berada di luar laman ini dan tidak dipastikan"
  - "Pastikan biaya bunga minimum bagi iuran SOCSO dan EIS yang terlambat terhadap perkeso.gov.my"

obligations:
  - what: "Menyetor iuran EPF untuk bulan gaji"
    trigger: "monthly"
    dueDay: 15
    due: "Pada atau sebelum tanggal 15 bulan berikutnya"
    authority: "KWSP"
    statute: "EPF Act 1991, s.43(1) and Third Schedule"
  - what: "Menyetor iuran SOCSO untuk bulan gaji"
    trigger: "monthly"
    dueDay: 15
    due: "Tidak lebih dari hari ke-15 bulan berikutnya"
    authority: "PERKESO"
    statute: "Employees Social Security Act 1969"
    consequence: "Bunga atas pembayaran terlambat sebesar 6% per tahun untuk setiap hari tertunggak"
  - what: "Menyetor iuran EIS untuk bulan gaji"
    trigger: "monthly"
    dueDay: 15
    due: "Tidak lebih dari hari ke-15 bulan berikutnya"
    authority: "PERKESO"
    statute: "Employment Insurance System Act 2017"
    consequence: "Bunga atas pembayaran terlambat sebesar 6% per tahun untuk setiap hari tertunggak"
  - what: "Menyetor potongan pajak bulanan (PCB/MTD) via e-PCB, e-Data PCB atau e-CP39"
    trigger: "monthly"
    dueDay: 15
    due: "Pada atau sebelum hari ke-15 bulan berikutnya"
    authority: "LHDN"
    statute: "Income Tax (Deduction from Remuneration) Rules 1994"
  - what: "Membayar levi HRD Corp"
    trigger: "monthly"
    dueDay: 15
    due: "Menjelang tanggal 15 bulan berikutnya"
    authority: "HRD Corp"
    statute: "PSMB Act 2001"
    consequence: "Bunga 10% per tahun atas tunggakan, minimum RM5"
  - what: "Membayar gaji untuk periode gaji"
    trigger: "ongoing"
    withinDays: 7
    due: "Tidak lebih dari hari ketujuh setelah hari terakhir periode gaji"
    authority: "JTKSM"
    statute: "Employment Act 1955, s.19(1)"
  - what: "Membayar gaji hari istirahat, hari libur umum dan lembur"
    trigger: "ongoing"
    due: "Tidak lebih dari hari terakhir periode gaji berikutnya"
    authority: "JTKSM"
    statute: "Employment Act 1955, s.19(2)"
  - what: "Memberitahu LHDN tentang pekerja baru pada Form CP22 via aplikasi e-CP22"
    trigger: "change"
    withinDays: 30
    due: "Dalam waktu 30 hari setelah mulainya pekerjaan"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83"
  - what: "Memberitahu LHDN tentang pemberhentian kerja pada Form CP22A via e-SPC, dan menahan uang yang harus dibayar"
    trigger: "change"
    due: "Tidak kurang dari 30 hari sebelum pemberhentian, atau dalam waktu 30 hari setelah diberitahu tentang kematian; tahan selama 90 hari atau sampai penyelesaian pajak"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83"
  - what: "Memberitahu LHDN pada Form CP21 tentang pekerja yang meninggalkan Malaysia lebih dari tiga bulan"
    trigger: "change"
    due: "Tidak kurang dari 30 hari sebelum tanggal keberangkatan yang diperkirakan"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83"
  - what: "Menyiapkan dan memberikan Form EA (C.P.8A) atau EC (C.P.8C) kepada setiap pekerja"
    trigger: "financial-year-end"
    due: "Pada atau sebelum 28 Februari setelah tahun kalender"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83(1A)"
    consequence: "Pelanggaran di bawah s.120(1) ITA 1967 — denda RM200 hingga RM20,000, atau penjara hingga enam bulan, atau keduanya"
  - what: "Mengunggah data CP8D melalui e-Data Praisi untuk isi-awal pekerja"
    trigger: "financial-year-end"
    due: "Pada atau sebelum 25 Februari setelah tahun kalender"
    authority: "LHDN"
  - what: "Mengajukan Form E (e-E) bersama CP8D"
    trigger: "financial-year-end"
    due: "Pada atau sebelum 31 Maret setelah tahun kalender"
    authority: "LHDN"
    statute: "Income Tax Act 1967, s.83 and s.120(1)"
    consequence: "Pelanggaran di bawah s.120(1) ITA 1967; tidak ada masa tenggang e-Filing yang berlaku untuk Form E"
  - what: "Menyiapkan dan memberikan Form CP58 kepada agen, dealer dan distributor"
    trigger: "financial-year-end"
    due: "Pada atau sebelum 31 Maret setelah tahun kalender"
    authority: "LHDN"
  - what: "Menyimpan catatan payroll dan pajak"
    trigger: "ongoing"
    due: "Tujuh tahun, dapat diakses oleh LHDN atas permintaan"
    authority: "LHDN"
    statute: "Income Tax Act 1967"
  - what: "Memanfaatkan levi HRD Corp terakumulasi melalui hibah pelatihan yang disetujui"
    trigger: "ongoing"
    due: "Dalam waktu 24 bulan"
    authority: "HRD Corp"
    consequence: "Penghangusan saldo yang tidak digunakan di atas ambang RM10,000"

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
sensitivity: "none"

updated: 2026-07-20
sources:
  - title: "Iuran Wajib Pemberi Kerja (Employer Mandatory Contribution)"
    url: "https://www.kwsp.gov.my/en/employer/responsibilities/mandatory-contribution"
    publisher: "Dana Simpanan Pekerja (KWSP)"
  - title: "Tarif Iuran (Contribution Rate)"
    url: "https://www.perkeso.gov.my/en/rate-of-contribution.html"
    publisher: "Organisasi Jaminan Sosial (PERKESO)"
  - title: "Iuran (Contributions)"
    url: "https://www.perkeso.gov.my/en/our-services/employer-employee/contributions.html"
    publisher: "Organisasi Jaminan Sosial (PERKESO)"
  - title: "Pembayaran Iuran (Contribution Payment)"
    url: "https://www.perkeso.gov.my/en/our-services/employer-employee/pembayaran.html"
    publisher: "Organisasi Jaminan Sosial (PERKESO)"
  - title: "Pemberi Kerja — Tanggung Jawab Pemberi Kerja (Employers — Employer's Responsibility)"
    url: "https://www.hasil.gov.my/majikan/"
    publisher: "Badan Pendapatan Dalam Negeri (LHDN)"
  - title: "Program Pengajuan Borang Nyata (BN) untuk Tahun 2026 (Program Memfail Borang Nyata (BN) Bagi Tahun 2026)"
    url: "https://www.hasil.gov.my/wp-content/uploads/program-memfail-bn-bagi-tahun-2026.pdf"
    publisher: "Badan Pendapatan Dalam Negeri (LHDN)"
    date: "2025-12-30"
  - title: "Perintah Gaji Minimum 2024 — P.U.(A) 376 (Perintah Gaji Minimum 2024 — P.U.(A) 376)"
    url: "https://gajiminimum.mohr.gov.my/wp-content/uploads/PUA%20376.pdf"
    publisher: "Kementerian Sumber Daya Manusia (MOHR)"
    date: "2024-12-04"
  - title: "Pedoman Perhitungan Levi dan Pembayaran Levi (Levy Calculation Guideline and Levy Payment)"
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
keywords: ["tarikh akhir payroll Malaysia", "kadar EPF SOCSO EIS", "kadar caruman berkanun Malaysia", "tarikh akhir payroll 15hb", "tarikh akhir PCB", "kadar levi HRD"]
---

Satu jadwal rujukan, setiap baris dilacak ke otoritas yang menerbitkannya.
Baris yang tidak dapat dipastikan berdasarkan sumber resmi dicantumkan di bawah
`verificationNeeded` dalam metadata halaman ini dan bukan diperkirakan secara sewenang-wenang.

## Tarif dan batas atas

| Item | Tarif | Batas atas / basis | Otoritas |
| --- | --- | --- | --- |
| Upah minimum — bulanan | RM1,700 | Semua pemberi kerja mulai 1 Agustus 2025 | MOHR, P.U.(A) 376 |
| Upah minimum — per jam | RM8.72 | — | MOHR, P.U.(A) 376 |
| Upah minimum — per hari | RM65.38 / RM78.46 / RM98.08 | Minggu kerja 6 / 5 / 4 hari | MOHR, P.U.(A) 376 |
| EPF — warga negara Malaysia, PR, bukan warga negara Malaysia terdaftar sebelum 1 Agustus 1998, di bawah 60 tahun, gaji ≤ RM5,000 | 13% pemberi kerja, 11% pekerja | Jadwal Ketiga (Third Schedule) Bagian A | KWSP |
| EPF — kelompok sama, gaji melebihi RM5,000 | 12% pemberi kerja, 11% pekerja | Jadwal Ketiga Bagian A | KWSP |
| EPF — usia 60 tahun ke atas, warga negara Malaysia | 4% pemberi kerja, 0% pekerja | Jadwal Ketiga Bagian E, tidak ada batas gaji | KWSP |
| EPF — usia 60 tahun ke atas, PR dan bukan warga negara Malaysia sebelum 1998 | 6.5% pemberi kerja / 5.5% pekerja pada gaji ≤ RM5,000; 6% / 5.5% melebihi itu | Jadwal Ketiga Bagian C | KWSP |
| EPF — bukan warga negara Malaysia terdaftar sejak 1 Agustus 1998 | 2% pemberi kerja, 2% pekerja | Jadwal Ketiga Bagian F, tidak ada batas gaji, berlaku untuk gaji Oktober 2025 | KWSP |
| SOCSO Kategori 1 — di bawah 60 tahun | 1.75% pemberi kerja, 0.5% pekerja | Batas atas gaji bulanan RM6,000 | PERKESO |
| SOCSO Kategori 2 — usia 60 tahun ke atas | 1.25% pemberi kerja | Batas atas gaji bulanan RM6,000 | PERKESO |
| EIS | 0.2% pemberi kerja, 0.2% pekerja | Batas atas gaji bulanan RM6,000 | PERKESO |
| Levi HRD Corp — kategori wajib | 1% | Gaji pokok dikurangi cuti tanpa gaji, ditambah tunjangan tetap | HRD Corp |
| Levi HRD Corp — kategori opsional | 0.5% | Basis yang sama | HRD Corp |

Batas atas RM6,000 untuk SOCSO dan EIS telah berlaku sejak **1 Oktober 2024**,
menggantikan RM5,000. Halaman yang masih menampilkan RM4,000 sudah dua revisi
tertinggal.

**Persentase EPF adalah penjelasan, bukan metode perhitungan.** KWSP menyatakan bahwa
pemberi kerja tidak boleh menghitung bagian pemberi kerja dan pekerja berdasarkan persentase yang
tepat kecuali ketika gaji melebihi RM20,000 — di bawah itu, jadwal rentang gaji dalam
Jadwal Ketiga memberikan jumlah dalam ringgit, dan jumlah tersebut berbeda dari
hasil persentase.

## Tenggat bulanan

| Kewajiban | Tenggat | Otoritas | Biaya keterlambatan |
| --- | --- | --- | --- |
| Bayar gaji bagi periode gaji | Dalam waktu 7 hari setelah periode gaji berakhir | JTKSM, EA 1955 s.19(1) | Pelanggaran |
| Bayar gaji hari istirahat, cuti dan lembur | Menjelang hari terakhir periode gaji berikutnya | JTKSM, EA 1955 s.19(2) | Pelanggaran |
| Iuran EPF | Pada atau sebelum tanggal 15 bulan berikutnya | KWSP | Lihat `verificationNeeded` |
| Iuran SOCSO | Menjelang tanggal 15 bulan berikutnya | PERKESO | 6% setahun, harian |
| Iuran EIS | Menjelang tanggal 15 bulan berikutnya | PERKESO | 6% setahun, harian |
| PCB / MTD melalui e-PCB, e-Data PCB atau e-CP39 | Pada atau sebelum tanggal 15 bulan berikutnya | LHDN | Penalti statutori |
| Levi HRD Corp | Menjelang tanggal 15 bulan berikutnya | HRD Corp | 10% setahun, harian, minimum RM5 |

## Tenggat berbasis peristiwa

| Kewajiban | Pemicu | Tenggat | Saluran |
| --- | --- | --- | --- |
| Borang CP22 — pekerja baru | Mulainya pekerjaan | Dalam waktu 30 hari | e-CP22 di MyTax, wajib mulai 1 Sept 2024 |
| Borang CP22A — pemberhentian, sektor swasta | Pemberhentian atau kematian | Tidak kurang dari 30 hari sebelum pemberhentian; dalam waktu 30 hari setelah diberitahu kematian | e-SPC di MyTax |
| Borang CP22B — pemberhentian, sektor publik | Pemberhentian atau kematian | Sama seperti di atas | e-SPC di MyTax |
| Borang CP21 — meninggalkan Malaysia melebihi 3 bulan | Keberangkatan | Tidak kurang dari 30 hari sebelum tanggal keberangkatan yang diperkirakan | LHDN |
| Tahan uang yang harus dibayar | Pemberhentian, kematian atau keberangkatan | 90 hari, atau sampai surat penyelesaian pajak diterima | LHDN |
| Pendaftaran HRD Corp | Mencapai 10 pekerja warga negara Malaysia | Begitu ambang dilewati | Portal HRD Corp |

## Tenggat tahunan

| Kewajiban | Tenggat | Undang-undang |
| --- | --- | --- |
| Borang EA (C.P.8A) / EC (C.P.8C) kepada pekerja | 28 Februari | ITA 1967 s.83(1A) |
| CP8D melalui e-Data Praisi (jalur isi-awal) | 25 Februari | Program pengajuan LHDN |
| Borang E (e-E) beserta CP8D kepada LHDN | 31 Maret | ITA 1967 s.83; s.120(1) jika gagal bayar |
| Borang CP58 kepada agen, pedagang dan distributor | 31 Maret | LHDN |
| Simpan catatan | 7 tahun | ITA 1967 |

Borang E, Borang P dan Borang CPE **dikecualikan** dari masa tenggang e-Filing
LHDN yang berlaku bagi formulir pengembalian lain.

## Rujukan penalti

| Kegagalan | Akibat | Sumber |
| --- | --- | --- |
| Gagal mengajukan Borang E atau Borang EA | Denda RM200 hingga RM20,000, atau penjara hingga 6 bulan, atau keduanya, di bawah s.120(1) ITA 1967 | Jadwal pelanggaran LHDN |
| Membayar di bawah upah minimum | Denda tidak melebihi RM10,000 bagi setiap pekerja, s.43 Akta 732; perintah pengadilan bagi kekurangan di bawah s.44 | Akta 732 |
| Pelanggaran berkelanjutan di bawah Akta 732 | Denda harian hingga RM1,000 setelah vonis, s.46 | Akta 732 |
| Pelanggaran berulang di bawah Akta 732 | Denda hingga RM20,000 atau penjara hingga 5 tahun, s.47 | Akta 732 |
| Pelanggaran Akta Kerja tanpa penalti khusus | Denda hingga RM50,000, s.99A EA 1955 | Akta 265 |
| Levi HRD Corp terlambat | Bunga 10% setahun harian, minimum RM5; denda hingga RM20,000 atau penjara 2 tahun | HRD Corp |
| Levi HRD Corp tidak dituntut selama 24 bulan | Penghangusan bagi saldo melebihi RM10,000 | HRD Corp |

## Kesalahan umum

- Menghitung EPF sebagai persentase langsung pada gaji di bawah RM20,000 alih-alih
  merujuk jadwal tarif dalam Jadwal Ketiga.
- Menggunakan batas atas RM4,000 atau RM5,000 untuk SOCSO dan EIS. Batas atas ini telah
  menjadi RM6,000 sejak 1 Oktober 2024.
- Menggunakan satu angka gaji yang sama untuk kelima skema. Basis levi HRD
  tidak termasuk lembur, komisi dan bonus.
- Menganggap masa tenggang e-Filing LHDN mencakup Borang E. Ia tidak mencakupnya.
- Mengajukan Borang E tanpa CP8D dan menganggap pengembalian itu telah dikirim.
- Membayar gaji pada tanggal tetap yang lebih lambat dari hari ketujuh setelah
  periode gaji.

## Langkah selanjutnya

Tetapkan satu entri kalender berulang pada tanggal 15 yang mencakup kelima
pengiriman bulanan, dan satu lagi pada minggu kedua Februari untuk Borang EA dan
unggahan e-Data Praisi. Kemudian selaraskan basis gaji setiap skema secara
terpisah dalam payroll — tenggat adalah sama, tetapi definisi gaji tidak
sama.
