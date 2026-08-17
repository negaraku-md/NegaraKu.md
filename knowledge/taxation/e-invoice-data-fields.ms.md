---
topicId: MY-TAX-0014
title: "e-Invoice Data Fields Reference"
seoTitle: "Medan Data e-Invois Malaysia: Rujukan 55 Medan"
slug: "e-invoice-data-fields"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "Kesemua 55 medan e-Invois yang diperlukan berserta status wajib atau pilihan, medan anexur, senarai kod LHDN, dan validator yang menolak setiap jenis ralat."

tier: "4"
mode: "practical"
contentType: "data"
sensitivity: "none"

answer: "LHDN memerlukan 55 medan data untuk mengeluarkan satu e-Invois, dikelompokkan kepada lapan kategori. Kebanyakannya wajib; dua puluh adalah pilihan dan lapan adalah wajib bersyarat — nombor pendaftaran SST dan cukai pelancongan, rujukan e-Invois asal, kadar pertukaran mata wang, kadar cukai, dan dua medan pengecualian cukai. Satu anexur menambah rujukan borang kastam yang wajib bagi import dan eksport barangan."
keyTakeaways:
  - "55 medan dalam Appendix 1, dikelompokkan kepada lapan kategori, ditambah anexur dalam Appendix 2"
  - "XML atau JSON, kedua-duanya mematuhi UBL 2.1"
  - "Lapan medan adalah wajib bersyarat, bukannya sentiasa diperlukan"
  - "Tarikh dan masa e-Invois mesti tarikh dan masa semasa"
  - "Tujuh validator berjalan — tiga serta-merta, empat di latar belakang"
  - "Senarai kod bagi jenis e-Invois, jenis cukai, mata wang, MSIC, negeri dan UoM diterbitkan dalam SDK"
  - "e-Invois yang rosak boleh digantikan dengan e-Invois gantian dalam tempoh tiga hari di bawah s.82C(8) ITA 1967"
appliesTo: "Pembangun yang membina integrasi MyInvois, perunding ERP yang memetakan data induk, serta pasukan kewangan yang menyahpepijat penyerahan yang ditolak."

verificationNeeded:
  - "Senarai penuh yang diterbitkan bagi kod ralat pengesahan berbutir (awalan CF, DS, ST) — SDK mendokumenkan tujuh kategori pengesah dan kod ralat HTTP standard tetapi tidak menerbitkan jadual kod-ke-keadaan yang menyeluruh"
  - "Had kadar API setiap titik akhir — SDK merujuk kepada Integration Practices tanpa menyatakan had berangka pada laman FAQ"

lang: "ms"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "7457966f1e6638bb"

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
  - title: "e-Invoice Guideline (Version 4.7) — Appendices 1 and 2"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "MyInvois SDK — document validation rules"
    url: "https://sdk.myinvois.hasil.gov.my/document-validation-rules/"
    publisher: "LHDN"
  - title: "MyInvois SDK — code lists"
    url: "https://sdk.myinvois.hasil.gov.my/codes/"
    publisher: "LHDN"
  - title: "MyInvois SDK — standard error response"
    url: "https://sdk.myinvois.hasil.gov.my/standard-error-response/"
    publisher: "LHDN"
  - title: "e-Invoice Specific Guideline (Version 4.8) — Appendix 1, list of general TIN"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "LHDN"
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

Setiap penyerahan yang ditolak boleh dikesan kembali kepada salah satu daripada
dua perkara: medan yang dianggap wajib oleh LHDN tetapi dianggap pilihan oleh
ERP anda, atau nilai kod yang tiada dalam senarai LHDN. Halaman ini ialah
senarai medan tersebut, sebagaimana diterbitkan dalam Appendix 1 dan Appendix 2
Garis Panduan e-Invois versi 4.7.

Formatnya ialah **XML atau JSON**, kedua-duanya mesti mematuhi **UBL 2.1**.
LHDN mengelompokkan 55 medan ini kepada lapan kategori: Address, Business
Details, Contact Number, Invoice Details, Parties, Party Details, Payment
Info, dan Products / Services.

## 55 medan

**M** = wajib · **C** = wajib bersyarat · **O** = pilihan

### Pihak dan butiran pihak

| # | Medan | Status | Nota |
| --- | --- | --- | --- |
| 1 | Nama Pembekal | M | |
| 2 | Nama Pembeli | M | General Public pada e-Invois konsolidasi |
| 3 | TIN Pembekal | M | Kod TIN am terpakai jika tiada |
| 4 | Nombor Pendaftaran / Pengenalan / Pasport Pembekal | M | Pendaftar SSM hanya menggunakan **BRN 12-aksara baharu** |
| 5 | Nombor Pendaftaran SST Pembekal | **C** | Wajib bagi pendaftar SST |
| 6 | Nombor Pendaftaran Cukai Pelancongan Pembekal | **C** | Wajib bagi pendaftar cukai pelancongan |
| 7 | E-mel Pembekal | O | |
| 8 | Kod MSIC Pembekal | M | 5 digit angka; 00000 jika tiada bagi pembekal asing |
| 9 | Perihalan Aktiviti Perniagaan Pembekal | M | |
| 10 | TIN Pembeli | M | |
| 11 | Nombor Pendaftaran / Pengenalan / Pasport Pembeli | M | |
| 12 | Nombor Pendaftaran SST Pembeli | **C** | Wajib bagi pendaftar SST |
| 13 | E-mel Pembeli | O | |

### Alamat dan hubungan

| # | Medan | Status |
| --- | --- | --- |
| 14 | Alamat Pembekal | M |
| 15 | Alamat Pembeli | M |
| 16 | Nombor Telefon Pembekal | M |
| 17 | Nombor Telefon Pembeli | M |

### Butiran invois

| # | Medan | Status | Nota |
| --- | --- | --- | --- |
| 18 | Versi e-Invois | M | SVDP 1.2 / 1.3 hanya untuk pendedahan sukarela |
| 19 | Jenis e-Invois | M | Lihat senarai kod di bawah |
| 20 | Kod / Nombor e-Invois | M | Rujukan sendiri pembekal |
| 21 | Nombor Rujukan e-Invois Asal | **C** | Wajib pada nota kredit, nota debit dan nota bayaran balik |
| 22 | Tarikh dan Masa e-Invois | M | **Mesti tarikh dan masa semasa** |
| 23 | Tandatangan Digital Pengeluar | M | Sijil penyedia perkhidmatan jika digunakan |
| 24 | Kod Mata Wang Invois | M | |
| 25 | Kadar Pertukaran Mata Wang | **C** | Wajib jika mata wang bukan ringgit |
| 26 | Kekerapan Pengebilan | O | |
| 27 | Tempoh Pengebilan | O | |

### Produk dan perkhidmatan

| # | Medan | Status | Nota |
| --- | --- | --- | --- |
| 28 | Klasifikasi | M | Kod 3 digit daripada katalog LHDN |
| 29 | Perihalan Produk atau Perkhidmatan | M | Nombor rujukan resit pada e-Invois konsolidasi |
| 30 | Harga Seunit | M | |
| 31 | Jenis Cukai | M | Peringkat baris dan invois |
| 32 | Kadar Cukai | **C** | |
| 33 | Jumlah Cukai | M | Peringkat baris dan invois |
| 34 | Butiran Pengecualian Cukai | **C** | Wajib jika pengecualian terpakai |
| 35 | Jumlah Dikecualikan Cukai | **C** | Wajib jika pengecualian terpakai |
| 36 | Jumlah Kecil | M | Peringkat baris sahaja |
| 37 | Jumlah Tidak Termasuk Cukai | M | Peringkat baris dan invois |
| 38 | Jumlah Termasuk Cukai | M | Peringkat invois sahaja |
| 39 | Jumlah Bersih Keseluruhan | O | Peringkat invois sahaja |
| 40 | Jumlah Perlu Dibayar | M | Peringkat invois sahaja |
| 41 | Jumlah Pembundaran | O | Peringkat invois sahaja |
| 42 | Jumlah Boleh Cukai Mengikut Jenis Cukai | O | Peringkat invois sahaja |
| 43 | Kuantiti | O | |
| 44 | Ukuran | O | |
| 45 | Kadar Diskaun | O | |
| 46 | Jumlah Diskaun | O | |
| 47 | Kadar Fi / Caj | O | |
| 48 | Jumlah Fi / Caj | O | |

### Maklumat pembayaran

| # | Medan | Status |
| --- | --- | --- |
| 49 | Cara Bayaran | O |
| 50 | Nombor Akaun Bank Pembekal | O |
| 51 | Terma Pembayaran | O |
| 52 | Jumlah Prabayaran | O |
| 53 | Tarikh Prabayaran | O |
| 54 | Nombor Rujukan Prabayaran | O |
| 55 | Nombor Rujukan Bil | O |

## Medan anexur

| Medan | Status | Berkenaan dengan |
| --- | --- | --- |
| Nombor Rujukan Borang Kastam No. 1, 9 dan lain-lain | **Wajib** | Import barangan |
| Nombor Rujukan Borang Kastam No. 2 | Pilihan | Eksport barangan |
| Nama / Alamat / TIN / Nombor Pendaftaran atau Pasport Penerima Penghantaran | Pilihan | Barangan dihantar kepada seseorang selain pembeli |
| Incoterms | Pilihan | Import dan eksport barangan |
| Kod Tarif Produk | Pilihan | Barangan sahaja |
| Maklumat Perjanjian Perdagangan Bebas | Pilihan | Eksport sahaja, jika berkenaan |
| Nombor Kebenaran untuk Pengeksport Bertauliah, contohnya nombor ATIGA | Pilihan | Eksport sahaja, jika berkenaan |
| Negara Asal | Pilihan | Import dan eksport barangan |
| Butiran caj lain | Pilihan | Import dan eksport barangan |

LHDN menyatakan keperluan anexur ini boleh dikemas kini dari semasa ke semasa.

## Senarai kod

**Jenis e-Invois**

| Kod | Jenis | | Kod | Jenis |
| --- | --- | --- | --- | --- |
| 01 | Invoice | | 11 | Self-billed Invoice |
| 02 | Credit Note | | 12 | Self-billed Credit Note |
| 03 | Debit Note | | 13 | Self-billed Debit Note |
| 04 | Refund Note | | 14 | Self-billed Refund Note |

**Jenis Cukai**

| Kod | Jenis |
| --- | --- |
| 01 | Cukai Jualan |
| 02 | Cukai Perkhidmatan |
| 03 | Cukai Pelancongan |
| 04 | Cukai Barangan Bernilai Tinggi |
| 05 | Cukai Jualan atas Barangan Bernilai Rendah |
| 06 | Tidak Berkenaan |
| E | Pengecualian cukai, jika berkenaan |

**TIN Am** (e-Invoice Specific Guideline, Appendix 1)

| Kod | Kegunaan |
| --- | --- |
| EI00000000010 | General Public — individu Malaysia yang hanya memiliki MyKad; pembeli pada e-Invois konsolidasi; pembekal pada e-Invois konsolidasi dikeluarkan sendiri (self-billed) |
| EI00000000020 | Pembeli asing atau penerima penghantaran asing |
| EI00000000030 | Pembekal asing, dikeluarkan sendiri (self-billed) |
| EI00000000040 | Kerajaan, pihak berkuasa negeri dan tempatan, badan berkanun, institusi dikecualikan |

SDK turut menerbitkan kod klasifikasi, kod negara, kod mata wang, kod MSIC,
cara bayaran, kod negeri dan unit ukuran.

## Validator dan punca ia tercetus

| Validator | Masa | Punca biasa kegagalan |
| --- | --- | --- |
| **Structure** | Serta-merta | XML atau JSON yang tidak sah format, atau dokumen yang tidak sepadan dengan struktur yang diperlukan bagi jenis dan versi itu di bawah UBL 2.1 |
| **Core Fields** | Serta-merta | Satu medan wajib tiada |
| **Code** | Serta-merta dan latar belakang | Nilai kod mata wang, jenis cukai atau kod lain yang tiada dalam senarai LHDN |
| **Signature** | Latar belakang | Tandatangan digital gagal disahkan |
| **Taxpayer** | Latar belakang | TIN yang dirujuk dalam dokumen tidak sah pada tarikh dokumen itu dikeluarkan |
| **Referenced Documents** | Latar belakang | Nota kredit, nota debit atau nota bayaran balik merujuk kepada dokumen yang bukan e-Invois sah pada masa ia dikeluarkan |
| **Duplicate Document** | Latar belakang | Dokumen yang hampir serupa telahpun dihantar — kod ralat **DS302** |

Status dokumen berubah daripada **Submitted → Valid** atau **Invalid**.
*Submitted* hanya bermaksud semakan struktur dan medan teras telah lulus;
validator latar belakang masih boleh menggagalkannya.

Ralat peringkat pengangkutan menggunakan pemetaan HTTP standard: `BadRequest`
dan `BadArgument` (400), `Unauthorized` (401), `Forbidden` (403), `NotFound`
(404), `TooManyRequests` (429, dengan header `Retry-After`),
`InternalServerError` (500), `NotImplemented` (501), `ServiceUnavailable`
(503).

## Membetulkan dokumen yang bermasalah

- **Dalam tempoh 72 jam selepas pengesahan** — pembekal boleh membatalkan,
  atau pembeli boleh memohon penolakan dan pembekal kemudian membatalkannya.
  Selepas 72 jam, kedua-duanya tidak lagi boleh dilakukan.
- **Dalam tempoh tiga hari selepas mengeluarkan e-Invois yang rosak** —
  s.82C(8) Akta Cukai Pendapatan 1967 membenarkan **e-Invois gantian**.
- **Selepas itu** — keluarkan e-Invois nota kredit, nota debit atau nota
  bayaran balik yang merujuk kepada yang asal pada medan 21.

## Kesilapan lazim

- **Menghantar nombor pendaftaran SSM yang lama.** Medan 4 memerlukan BRN 12
  digit yang baharu bagi pendaftar SSM.
- **Mengundurkan tarikh medan 22.** LHDN memerlukan tarikh dan masa semasa;
  dokumen yang tarikhnya diundurkan akan gagal.
- **Membiarkan MSIC kosong bagi pembekal asing.** Gunakan 00000, bukan nilai
  kosong.
- **Menggunakan jenis cukai 06 untuk maksud dikecualikan.** 06 ialah *Tidak
  Berkenaan*; pengecualian ialah E, dan ia menjadikan medan 34 dan 35 wajib.
- **Menghantar semula penyerahan yang gagal tanpa perubahan.** Validator
  pendua akan mencetuskan DS302, bukan menerimanya.
- **Menganggap respons Submitted sebagai berjaya.** Hanya *Valid* bermaksud
  berjaya.

## Apa seterusnya

Petakan medan 3, 4, 5, 8, 10, 11 dan 12 terhadap data induk pelanggan dan
pembekal anda sebelum menulis sebarang kod — tujuh medan itulah yang
sebenarnya menghabiskan masa pembersihan data. Kemudian tentukan laluan
penghantaran, kerana Portal mengisi medan-medan ini melalui borang manakala
API menjadikannya masalah anda sendiri.
