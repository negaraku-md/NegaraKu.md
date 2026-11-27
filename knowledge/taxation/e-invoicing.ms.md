---
topicId: MY-TAX-0003
title: "e-Invois di Malaysia: Di Mana Hendak Bermula dengan MyInvois"
seoTitle: "e-Invois Malaysia: Titik Mula MyInvois"
slug: "e-invoicing"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "Halaman panduan untuk mandat e-Invois Malaysia — cara pengesahan MyInvois berfungsi, bila perniagaan anda mula terlibat, dan panduan terperinci mana yang menjawab persoalan anda."

tier: "3"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "e-Invois memerlukan data invois dihantar ke sistem MyInvois LHDN untuk disahkan, sama ada melalui Portal MyInvois yang percuma atau sistem yang disepadukan melalui API. Dokumen yang disahkan menerima Nombor Pengenalan Unik dan kod QR. Mandat ini dilaksanakan secara berfasa mengikut perolehan tahunan, dengan fasa terakhir merangkumi perniagaan sehingga RM5 juta bermula 1 Januari 2026, manakala perniagaan dengan perolehan bawah RM3 juta dikecualikan. Setiap fasa membawa tempoh kelonggaran interimnya sendiri."
keyTakeaways:
  - "Pengesahan berlaku melalui MyInvois sebelum dokumen itu berfungsi sebagai invois bagi tujuan cukai pendapatan"
  - "Empat fasa, tiada fasa kelima — fasa terakhir bermula 1 Januari 2026 bagi perolehan sehingga RM5 juta"
  - "Perniagaan dengan perolehan tahunan bawah RM3,000,000 dikecualikan — melainkan terikat dengan kumpulan yang melebihi ambang itu"
  - "Fasa anda ditetapkan oleh angka FY2022 atau YA2022 dan tidak berubah selepas itu"
  - "e-Invois yang disahkan LHDN tidak secara automatik memenuhi peraturan invois cukai SST — itu adalah keperluan dokumen yang berasingan"
appliesTo: "Pemilik perniagaan, pasukan kewangan dan pentadbir sistem yang bersedia untuk atau sedang beroperasi di bawah mandat e-Invois."

verificationNeeded: []

lang: "ms"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "7269dd5c2ab6076f"

status: "published"
aiAssisted: true
reviewer: null
reviewed: "2026-07-25"
reviewDue: 2027-07-22
publishedBy: "ashton-tan"
revision: 1
revisions:
  - revision: 0
    date: 2026-07-20
    change: "Approved and published."
    reviewer: null
  - revision: 1
    date: 2026-11-27
    change: "Ambang pengecualian saiz dibetulkan kepada bawah RM3,000,000 dan syarat kumpulan seksyen 1.6.10 baharu dicatatkan, menurut e-Invoice Guideline v4.8 (30 Ogos 2026); sitasi garis panduan dikemas kini (Umum v4.8, Khusus v4.9)."
    reviewer: null

updated: 2026-11-27
sources:
  - title: "Garis Panduan e-Invois IRBM (Versi 4.8) (IRBM e-Invoice Guideline (Version 4.8))"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "Lembaga Hasil Dalam Negeri (LHDN)"
    date: "2026-08-30"
  - title: "Garis Panduan Khusus e-Invois IRBM (Versi 4.9) (IRBM e-Invoice Specific Guideline (Version 4.9))"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "Lembaga Hasil Dalam Negeri (LHDN)"
    date: "2026-09-07"
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
framework: journey-hub
---

Dahulu, invois sah kerana anda yang mengeluarkannya. Di bawah mandat e-Invois
ia sah kerana LHDN yang mengatakan begitu — dokumen itu perlu dihantar ke
MyInvois dan disahkan dahulu sebelum ia menjalankan fungsinya bagi tujuan
cukai pendapatan.

Satu perubahan itu sahaja yang mencetuskan setiap persoalan susulan, dan
kebanyakannya mempunyai jawapan khusus.

## Cara pengesahan berfungsi, dalam enam langkah

1. Pembekal menghantar data transaksi ke MyInvois, sama ada dengan menaip
   terus ke dalam Portal yang percuma atau secara automatik melalui sistem
   yang disepadukan melalui API.
2. LHDN mengesahkan struktur dan medan yang diperlukan hampir secara masa
   nyata.
3. **Nombor Pengenalan Unik** dan kod QR dikeluarkan apabila berjaya.
4. Pembekal berkongsi dokumen yang disahkan itu dengan pembeli.
5. Pembeli boleh mengesahkan kod QR itu berdasarkan rekod LHDN.
6. Penolakan dan pembatalan mesti diambil tindakan dalam tempoh yang
   dibenarkan.

## Panduan mana yang anda perlukan

| Jika persoalan anda ialah | Baca |
| --- | --- |
| Bilakah ini terpakai kepada perniagaan saya? | [Fasa MyInvois, ambang dan tarikh kelonggaran](/taxation/myinvois-phases) |
| Portal, API atau penyedia perisian tengah? | [Integrasi MyInvois](/taxation/myinvois-integration) |
| Data apa yang sebenarnya perlu saya hantar? | [Rujukan medan data e-Invois](/taxation/e-invoice-data-fields) |
| Bolehkah saya kumpulkan jualan runcit saya dalam kelompok, bukannya mengeluarkan satu bagi setiap satu? | [e-Invois Konsolidasi](/taxation/consolidated-e-invoice) |
| Pembekal saya berada di luar negara, atau seorang individu | [e-Invois Dikeluarkan Sendiri](/taxation/self-billed-e-invoice) |
| Adakah ini menggantikan invois cukai SST saya? | [e-Invois berbanding invois cukai SST](/taxation/e-invoice-vs-tax-invoice) |
| Berapa lama saya perlu menyimpannya? | [e-Invois dan rekod perakaunan](/accounting/e-invoice-accounting-records) |

## Empat perkara yang sering disalahfahami

**Tiada fasa kelima.** Pelaksanaan berjalan dalam empat fasa mengikut
perolehan tahunan, berakhir dengan kohort sehingga RM5 juta bermula 1 Januari
2026. Perniagaan dengan perolehan tahunan bawah **RM3,000,000** dikecualikan,
bersama pejabat diplomatik asing dan individu yang tidak menjalankan
perniagaan. Pengecualian saiz ini membawa satu syarat: di bawah seksyen 1.6.10
Garis Panduan, ia gugur jika pemegang saham bukan individu, syarikat induk atau
syarikat berkaitan itu sendiri berada pada RM3 juta atau lebih — [panduan
fasa](/taxation/myinvois-phases) mempunyai ujiannya. Ini tidak bercanggah
dengan tarikh mula **1 Julai 2026** yang berasingan dan terpakai kepada
perniagaan yang *baharu bermula* — sebuah perniagaan yang bermula antara 2023
hingga 2025 dengan perolehan RM3 juta atau lebih akan terlibat pada tarikh
tersebut. Ia adalah peraturan bagi peserta baharu yang tiada asas FY2022, bukan
fasa perolehan kelima.

**Fasa anda tetap, bukan terapung.** Ia ditentukan oleh penyata kewangan
diaudit FY2022 atau pemulangan YA2022, diselaraskan secara pro rata jika akhir
tahun berubah, dan ia tidak berubah selepas itu. Berkembang melepasi sesuatu
ambang kemudian tidak memindahkan anda ke fasa lebih awal, dan mengecil tidak
mengeluarkan anda daripadanya.

**Tempoh kelonggaran bukan sama dengan tarikh fasa.** Setiap fasa membawa
tempoh interim di mana LHDN tidak akan mengambil tindakan terhadap
ketidakpatuhan, dan kelonggaran Fasa 4 berjalan jauh lebih lama daripada
fasa-fasa sebelumnya. Baca panduan fasa itu dan jangan menganggap tarikh
mandat sebagai tarikh penguatkuasaan.

**e-Invois yang disahkan bukan secara automatik invois cukai SST.** Kedua-dua
rejim ini mempunyai keperluan dokumen yang berasingan, dan kedudukan berkanun
menyatakan bahawa jika butiran e-Invois tidak selaras dengan keperluan invois
di bawah undang-undang bertulis lain, e-Invois itu sah untuk tujuan Akta Cukai
Pendapatan sahaja. Orang berdaftar SST memerlukan satu dokumen yang memenuhi
kedua-duanya.

## Kesilapan lazim

- Menunggu sehingga tarikh mandat untuk mula menguji. Kegagalan pengesahan
  TIN dan integrasi hanya muncul di bawah volum transaksi sebenar.
- Menganggap setiap pelanggan memerlukan e-Invois berperincian, sedangkan
  banyak transaksi B2C boleh dikonsolidasikan — tertakluk kepada aktiviti
  yang dilarang.
- Terlepas pandang kewajipan e-Invois dikeluarkan sendiri bagi pembekal
  asing dan bagi bayaran kepada individu yang tidak mengeluarkan apa-apa
  sendiri.
- Melayan ini sebagai projek IT semata-mata. Kebanyakan kegagalan semasa
  go-live berpunca daripada data induk pelanggan dan pembekal yang tidak
  bersih, bukan pepijat integrasi.
- Menganggap MyInvois sebagai arkib anda. LHDN tidak menerbitkan sebarang
  jaminan penyimpanan bagi dokumen yang disahkan; kewajipan penyimpanan
  kekal menjadi tanggungjawab anda.

## Apa seterusnya

Jika anda masih belum tahu sama ada atau bila anda terlibat, mulakan dengan
panduan fasa — ia membawa jalur perolehan, ambang pengecualian, peraturan
perniagaan baharu dan setiap tarikh tamat kelonggaran. Jika anda sudah
terlibat dan sedang memilih cara untuk menghantar, panduan integrasi
membandingkan laluan Portal, API langsung dan perisian tengah mengikut volum
transaksi.
