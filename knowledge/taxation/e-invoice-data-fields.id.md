---
topicId: MY-TAX-0014
title: "Rujukan Medan Data e-Invois"
seoTitle: "Medan Data e-Invois Malaysia: Rujukan 55 Medan"
slug: "e-invoice-data-fields"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "Seluruh 55 medan e-Invois yang diperlukan beserta status wajib atau opsional, medan lampiran, daftar kode LHDN, dan validator yang menolak setiap jenis galat."

tier: "4"
mode: "practical"
contentType: "data"
sensitivity: "none"

answer: "LHDN memerlukan 55 medan data untuk menerbitkan satu e-Invois, dikelompokkan ke dalam delapan kategori. Sebagian besarnya wajib; dua puluh adalah opsional dan delapan adalah wajib bersyarat — nomor pendaftaran SST dan pajak pariwisata, rujukan e-Invois asli, kurs mata uang, tarif pajak, dan dua medan pengecualian pajak. Satu lampiran menambahkan rujukan formulir kepabeanan yang wajib bagi impor dan ekspor barang."
keyTakeaways:
  - "55 medan dalam Appendix 1, dikelompokkan ke dalam delapan kategori, ditambah lampiran dalam Appendix 2"
  - "XML atau JSON, keduanya mematuhi UBL 2.1"
  - "Delapan medan adalah wajib bersyarat, bukan selalu diperlukan"
  - "Tanggal dan waktu e-Invois harus tanggal dan waktu terkini"
  - "Tujuh validator berjalan — tiga seketika, empat di latar belakang"
  - "Daftar kode bagi jenis e-Invois, jenis pajak, mata uang, MSIC, negeri dan UoM diterbitkan dalam SDK"
  - "e-Invois yang rusak bisa diganti dengan e-Invois pengganti dalam jangka tiga hari di bawah s.82C(8) ITA 1967"
appliesTo: "Pengembang yang membangun integrasi MyInvois, konsultan ERP yang memetakan data induk, serta tim keuangan yang melakukan debug penyerahan yang ditolak."

verificationNeeded:
  - "Daftar lengkap yang diterbitkan bagi kode galat validasi terperinci (awalan CF, DS, ST) — SDK mendokumentasikan tujuh kategori validator dan kode galat HTTP standar tetapi tidak menerbitkan tabel kode-ke-keadaan yang menyeluruh"
  - "Batas laju API setiap titik akhir — SDK merujuk pada Integration Practices tanpa menyatakan batas numerik pada laman FAQ"

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
  - title: "Garis Panduan e-Invois (Versi 4.7) — Lampiran 1 dan 2 (e-Invoice Guideline (Version 4.7) — Appendices 1 and 2)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "Lembaga Hasil Dalam Negeri (LHDN)"
    date: "2026-07-07"
  - title: "MyInvois SDK — peraturan pengesahan dokumen (MyInvois SDK — document validation rules)"
    url: "https://sdk.myinvois.hasil.gov.my/document-validation-rules/"
    publisher: "Lembaga Hasil Dalam Negeri (LHDN)"
  - title: "MyInvois SDK — senarai kod (MyInvois SDK — code lists)"
    url: "https://sdk.myinvois.hasil.gov.my/codes/"
    publisher: "Lembaga Hasil Dalam Negeri (LHDN)"
  - title: "MyInvois SDK — respons ralat piawai (MyInvois SDK — standard error response)"
    url: "https://sdk.myinvois.hasil.gov.my/standard-error-response/"
    publisher: "Lembaga Hasil Dalam Negeri (LHDN)"
  - title: "Garis Panduan Khusus e-Invois (Versi 4.8) — Lampiran 1, senarai TIN am (e-Invoice Specific Guideline (Version 4.8) — Appendix 1, list of general TIN)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "Lembaga Hasil Dalam Negeri (LHDN)"
    date: "2026-07-07"

entity: "e-Invoice data fields"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "explained-in", to: "myinvois-integration" }
  - { rel: "related-to", to: "self-billed-e-invoice" }
related: ["e-invoicing", "myinvois-phases", "myinvois-integration", "self-billed-e-invoice", "consolidated-e-invoice"]
keywords: ["medan data e-Invois", "55 medan e-Invois", "medan wajib MyInvois", "ralat pengesahan e-Invois", "UBL 2.1 Malaysia", "senarai kod e-Invois LHDN"]
---

Setiap penyerahan yang ditolak bisa dilacak kembali ke salah satu dari
dua hal: medan yang dianggap wajib oleh LHDN tetapi dianggap opsional oleh
ERP Anda, atau nilai kode yang tidak ada dalam daftar LHDN. Halaman ini adalah
daftar medan tersebut, sebagaimana diterbitkan dalam Appendix 1 dan Appendix 2
Garis Panduan e-Invois versi 4.7.

Formatnya adalah **XML atau JSON**, keduanya harus mematuhi **UBL 2.1**.
LHDN mengelompokkan 55 medan ini ke dalam delapan kategori: Address, Business
Details, Contact Number, Invoice Details, Parties, Party Details, Payment
Info, dan Products / Services.

## 55 medan

**M** = wajib · **C** = wajib bersyarat · **O** = opsional

### Pihak dan rincian pihak

| # | Medan | Status | Catatan |
| --- | --- | --- | --- |
| 1 | Nama Pemasok | M | |
| 2 | Nama Pembeli | M | General Public pada e-Invois terkonsolidasi |
| 3 | TIN Pemasok | M | Kode TIN umum berlaku jika tidak ada |
| 4 | Nomor Pendaftaran / Identifikasi / Paspor Pemasok | M | Pendaftar SSM hanya menggunakan **BRN 12-karakter baru** |
| 5 | Nomor Pendaftaran SST Pemasok | **C** | Wajib bagi pendaftar SST |
| 6 | Nomor Pendaftaran Pajak Pariwisata Pemasok | **C** | Wajib bagi pendaftar pajak pariwisata |
| 7 | E-mail Pemasok | O | |
| 8 | Kode MSIC Pemasok | M | 5 digit angka; 00000 jika tidak ada bagi pemasok asing |
| 9 | Deskripsi Aktivitas Usaha Pemasok | M | |
| 10 | TIN Pembeli | M | |
| 11 | Nomor Pendaftaran / Identifikasi / Paspor Pembeli | M | |
| 12 | Nomor Pendaftaran SST Pembeli | **C** | Wajib bagi pendaftar SST |
| 13 | E-mail Pembeli | O | |

### Alamat dan kontak

| # | Medan | Status |
| --- | --- | --- |
| 14 | Alamat Pemasok | M |
| 15 | Alamat Pembeli | M |
| 16 | Nomor Telepon Pemasok | M |
| 17 | Nomor Telepon Pembeli | M |

### Rincian invois

| # | Medan | Status | Catatan |
| --- | --- | --- | --- |
| 18 | Versi e-Invois | M | SVDP 1.2 / 1.3 hanya untuk pengungkapan sukarela |
| 19 | Jenis e-Invois | M | Lihat daftar kode di bawah |
| 20 | Kode / Nomor e-Invois | M | Rujukan sendiri pemasok |
| 21 | Nomor Rujukan e-Invois Asli | **C** | Wajib pada nota kredit, nota debit dan nota pengembalian pembayaran |
| 22 | Tanggal dan Waktu e-Invois | M | **Harus tanggal dan waktu terkini** |
| 23 | Tanda Tangan Digital Penerbit | M | Sertifikat penyedia layanan jika digunakan |
| 24 | Kode Mata Uang Invois | M | |
| 25 | Kurs Mata Uang | **C** | Wajib jika mata uang bukan ringgit |
| 26 | Frekuensi Penagihan | O | |
| 27 | Periode Penagihan | O | |

### Produk dan layanan

| # | Medan | Status | Catatan |
| --- | --- | --- | --- |
| 28 | Klasifikasi | M | Kode 3 digit dari katalog LHDN |
| 29 | Deskripsi Produk atau Layanan | M | Nomor rujukan struk pada e-Invois terkonsolidasi |
| 30 | Harga Satuan | M | |
| 31 | Jenis Pajak | M | Tingkat baris dan invois |
| 32 | Tarif Pajak | **C** | |
| 33 | Jumlah Pajak | M | Tingkat baris dan invois |
| 34 | Rincian Pengecualian Pajak | **C** | Wajib jika pengecualian berlaku |
| 35 | Jumlah Dikecualikan Pajak | **C** | Wajib jika pengecualian berlaku |
| 36 | Subtotal | M | Tingkat baris saja |
| 37 | Jumlah Tidak Termasuk Pajak | M | Tingkat baris dan invois |
| 38 | Jumlah Termasuk Pajak | M | Tingkat invois saja |
| 39 | Jumlah Bersih Keseluruhan | O | Tingkat invois saja |
| 40 | Jumlah Harus Dibayar | M | Tingkat invois saja |
| 41 | Jumlah Pembulatan | O | Tingkat invois saja |
| 42 | Jumlah Kena Pajak Menurut Jenis Pajak | O | Tingkat invois saja |
| 43 | Kuantitas | O | |
| 44 | Ukuran | O | |
| 45 | Tarif Diskon | O | |
| 46 | Jumlah Diskon | O | |
| 47 | Tarif Biaya / Pungutan | O | |
| 48 | Jumlah Biaya / Pungutan | O | |

### Informasi pembayaran

| # | Medan | Status |
| --- | --- | --- |
| 49 | Cara Pembayaran | O |
| 50 | Nomor Rekening Bank Pemasok | O |
| 51 | Syarat Pembayaran | O |
| 52 | Jumlah Prabayar | O |
| 53 | Tanggal Prabayar | O |
| 54 | Nomor Rujukan Prabayar | O |
| 55 | Nomor Rujukan Tagihan | O |

## Medan lampiran

| Medan | Status | Berkenaan dengan |
| --- | --- | --- |
| Nomor Rujukan Borang Kastam No. 1, 9 dan lain-lain | **Wajib** | Impor barang |
| Nomor Rujukan Borang Kastam No. 2 | Opsional | Ekspor barang |
| Nama / Alamat / TIN / Nomor Pendaftaran atau Paspor Penerima Pengiriman | Opsional | Barang dikirim kepada seseorang selain pembeli |
| Incoterms | Opsional | Impor dan ekspor barang |
| Kode Tarif Produk | Opsional | Barang saja |
| Informasi Perjanjian Perdagangan Bebas | Opsional | Ekspor saja, jika berlaku |
| Nomor Otorisasi untuk Pengekspor Bersertifikat, misalnya nomor ATIGA | Opsional | Ekspor saja, jika berlaku |
| Negara Asal | Opsional | Impor dan ekspor barang |
| Rincian pungutan lain | Opsional | Impor dan ekspor barang |

LHDN menyatakan persyaratan lampiran ini bisa dimutakhirkan dari waktu ke waktu.

## Daftar kode

**Jenis e-Invois**

| Kode | Jenis | | Kode | Jenis |
| --- | --- | --- | --- | --- |
| 01 | Invoice | | 11 | Self-billed Invoice |
| 02 | Credit Note | | 12 | Self-billed Credit Note |
| 03 | Debit Note | | 13 | Self-billed Debit Note |
| 04 | Refund Note | | 14 | Self-billed Refund Note |

**Jenis Pajak**

| Kode | Jenis |
| --- | --- |
| 01 | Cukai Jualan |
| 02 | Cukai Perkhidmatan |
| 03 | Cukai Pelancongan |
| 04 | Cukai Barangan Bernilai Tinggi |
| 05 | Cukai Jualan atas Barangan Bernilai Rendah |
| 06 | Tidak Berkenaan |
| E | Pengecualian pajak, jika berlaku |

**TIN Umum** (e-Invoice Specific Guideline, Appendix 1)

| Kode | Kegunaan |
| --- | --- |
| EI00000000010 | General Public — individu Malaysia yang hanya memiliki MyKad; pembeli pada e-Invois terkonsolidasi; pemasok pada e-Invois terkonsolidasi ditagih sendiri (self-billed) |
| EI00000000020 | Pembeli asing atau penerima pengiriman asing |
| EI00000000030 | Pemasok asing, ditagih sendiri (self-billed) |
| EI00000000040 | Pemerintah, otoritas negeri dan lokal, badan statutori, institusi dikecualikan |

SDK juga menerbitkan kode klasifikasi, kode negara, kode mata uang, kode MSIC,
cara pembayaran, kode negeri dan unit ukuran.

## Validator dan penyebab ia terpicu

| Validator | Waktu | Penyebab umum kegagalan |
| --- | --- | --- |
| **Structure** | Seketika | XML atau JSON yang format tidak sah, atau dokumen yang tidak cocok dengan struktur yang diperlukan bagi jenis dan versi itu di bawah UBL 2.1 |
| **Core Fields** | Seketika | Satu medan wajib tidak ada |
| **Code** | Seketika dan latar belakang | Nilai kode mata uang, jenis pajak atau kode lain yang tidak ada dalam daftar LHDN |
| **Signature** | Latar belakang | Tanda tangan digital gagal diverifikasi |
| **Taxpayer** | Latar belakang | TIN yang dirujuk dalam dokumen tidak sah pada tanggal dokumen itu diterbitkan |
| **Referenced Documents** | Latar belakang | Nota kredit, nota debit atau nota pengembalian pembayaran merujuk pada dokumen yang bukan e-Invois sah pada saat ia diterbitkan |
| **Duplicate Document** | Latar belakang | Dokumen yang hampir serupa sudah dikirim — kode galat **DS302** |

Status dokumen berubah dari **Submitted → Valid** atau **Invalid**.
*Submitted* hanya berarti pemeriksaan struktur dan medan inti telah lulus;
validator latar belakang masih bisa menggagalkannya.

Galat tingkat transportasi menggunakan pemetaan HTTP standar: `BadRequest`
dan `BadArgument` (400), `Unauthorized` (401), `Forbidden` (403), `NotFound`
(404), `TooManyRequests` (429, dengan header `Retry-After`),
`InternalServerError` (500), `NotImplemented` (501), `ServiceUnavailable`
(503).

## Membetulkan dokumen yang bermasalah

- **Dalam jangka 72 jam setelah pengesahan** — pemasok bisa membatalkan,
  atau pembeli bisa mengajukan penolakan dan pemasok kemudian membatalkannya.
  Setelah 72 jam, keduanya tidak lagi bisa dilakukan.
- **Dalam jangka tiga hari setelah menerbitkan e-Invois yang rusak** —
  s.82C(8) Income Tax Act 1967 membolehkan **e-Invois pengganti**.
- **Setelah itu** — terbitkan e-Invois nota kredit, nota debit atau nota
  pengembalian pembayaran yang merujuk pada yang asli pada medan 21.

## Kesalahan lazim

- **Mengirim nomor pendaftaran SSM yang lama.** Medan 4 memerlukan BRN 12
  digit yang baru bagi pendaftar SSM.
- **Memundurkan tanggal medan 22.** LHDN memerlukan tanggal dan waktu terkini;
  dokumen yang tanggalnya dimundurkan akan gagal.
- **Membiarkan MSIC kosong bagi pemasok asing.** Gunakan 00000, bukan nilai
  kosong.
- **Menggunakan jenis pajak 06 untuk maksud dikecualikan.** 06 adalah *Tidak
  Berkenaan*; pengecualian adalah E, dan ia menjadikan medan 34 dan 35 wajib.
- **Mengirim ulang penyerahan yang gagal tanpa perubahan.** Validator
  duplikat akan memicu DS302, bukan menerimanya.
- **Menganggap respons Submitted sebagai berhasil.** Hanya *Valid* yang berarti
  berhasil.

## Apa selanjutnya

Petakan medan 3, 4, 5, 8, 10, 11 dan 12 terhadap data induk pelanggan dan
pemasok Anda sebelum menulis kode apa pun — tujuh medan itulah yang
sebenarnya menghabiskan waktu pembersihan data. Kemudian tentukan jalur
penyerahan, karena Portal mengisi medan-medan ini melalui formulir sementara
API menjadikannya masalah Anda sendiri.
