---
topicId: MY-TAX-0008
title: "MyInvois Integration: Portal, API or Middleware"
seoTitle: "Integrasi MyInvois: Portal lwn API lwn Middleware"
slug: "myinvois-integration"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "Cara neutral-vendor untuk memilih antara Portal MyInvois yang percuma, integrasi API terus dan penyedia teknologi, berdasarkan volum transaksi dan apa yang telah dilakukan oleh ERP anda."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "LHDN menyediakan dua mekanisme penghantaran: Portal MyInvois yang percuma, diakses melalui MyTax, yang menyokong kemasukan borang individu dan muat naik kelompok hamparan Excel yang telah ditetapkan; dan API, yang boleh dicapai melalui integrasi ERP terus, melalui penyedia perkhidmatan Peppol, atau melalui penyedia teknologi bukan-Peppol. Portal sesuai untuk volum rendah; API sesuai untuk volum tinggi dan memerlukan sijil digital serta kerja sistem awal."
keyTakeaways:
  - "Hanya dua mekanisme rasmi — Portal dan API. Semua yang lain adalah laluan menuju API"
  - "Portal adalah percuma, memerlukan log masuk MyTax, dan menawarkan muat naik kelompok Excel"
  - "Laluan API ialah ERP terus, penyedia perkhidmatan Peppol, atau penyedia teknologi bukan-Peppol"
  - "Penghantaran API memerlukan sijil digital dalam bentuk fail .cer atau .pfx"
  - "Had ketat: 100 dokumen dan 5MB setiap penghantaran, 300KB setiap dokumen"
  - "Perantara mesti menggunakan Client ID dan Secret mereka sendiri dan hanya dapat melihat apa yang mereka hantar sendiri"
  - "Volum dibil sendiri, bukan volum jualan, yang biasanya memaksa keputusan ke arah API"
appliesTo: "Ketua kewangan dan pasukan IT yang memilih laluan MyInvois, serta sesiapa yang membandingkan sebut harga daripada vendor perisian e-Invois."

faq:
  - q: "Adakah Portal MyInvois benar-benar percuma, dan adakah ia mencukupi?"
    a: "Ya, ia disediakan oleh LHDN dan diakses melalui Portal MyTax tanpa sebarang kos. Ia menyokong penciptaan individu melalui borang dan muat naik kelompok hamparan Excel yang telah ditetapkan. Sama ada ia mencukupi bergantung kepada bilangan dokumen dan berapa banyak dokumen yang memerlukan butiran khusus pembeli. Sebuah perniagaan dengan beberapa invois B2B dan satu e-Invois disatukan bulanan boleh terus beroperasi dengannya buat masa yang tidak terhad."
  - q: "Adakah saya memerlukan penyedia perkhidmatan Peppol?"
    a: "Tidak. Peppol hanyalah satu daripada tiga cara yang disenaraikan LHDN untuk sampai ke API, di samping integrasi ERP terus dan penyedia teknologi bukan-Peppol. LHDN tidak mewajibkan mana-mana laluan atau vendor tertentu. Peppol penting jika anda juga memerlukan pertukaran dokumen rentas sempadan yang boleh saling beroperasi; ia bukan keperluan MyInvois."
  - q: "Apakah yang diperlukan oleh API tetapi tidak oleh Portal?"
    a: "Sijil digital — fail .cer atau .pfx yang digunakan untuk menandatangani penghantaran, dengan tandatangan yang telah dicincang (hashed) dibawa dalam badan penghantaran — serta dokumen yang dibina mengikut struktur UBL 2.1 dalam XML atau JSON. LHDN menerbitkan panduan integrasi dan konfigurasi API serta titik akhir (endpoint) dalam MyInvois SDK."
  - q: "Jika saya menggunakan vendor, siapakah yang bertanggungjawab jika e-Invois tertinggal?"
    a: "Anda. Kewajipan untuk mengeluarkan dan menghantar terletak pada pembayar cukai di bawah s.82C Income Tax Act 1967, dan s.120(1)(d) menjadikan pelanggaran itu suatu kesalahan. Menyerahkan penghantaran kepada pihak luar tidak memindahkan kewajipan itu. LHDN juga menghadkan perantara kepada e-Invois yang mereka hantar sendiri, jadi pertukaran penyedia akan meninggalkan sejarah di belakang."
  - q: "Bagaimana saya menentukan saiz keputusan ini?"
    a: "Kira dokumen, bukan perolehan. Tambahkan e-Invois transaksi, e-Invois disatukan, e-Invois dibil sendiri, dan semua nota kredit, nota debit serta nota bayaran balik. Kemudian semak pengecualian — transaksi melebihi RM10,000 dan industri dalam Table 3.6 tidak boleh disatukan, yang boleh menukar satu dokumen bulanan kepada ribuan."
  - q: "Bolehkah saya menggunakan Portal dan API pada masa yang sama?"
    a: "Ya. LHDN mengemukakan kedua-dua mekanisme itu sebagai pilihan bagi setiap penghantaran, bukan pilihan kekal, dan banyak perniagaan menyalurkan jualan bervolum tinggi melalui API sambil mengendalikan dokumen dibil sendiri yang jarang-jarang berlaku di Portal. Pelaporan dan papan pemuka dalam Portal meliputi kedua-duanya."

verificationNeeded:
  - "Numeric per-endpoint API rate limits — the SDK FAQ refers to Integration Practices without publishing figures"
  - "Any LHDN accreditation, certification or approved-vendor list for technology providers — none was located on hasil.gov.my or the SDK"
  - "The maximum number of rows accepted in the MyInvois Portal batch upload spreadsheet — LHDN describes a certain number without stating it"

lang: "ms"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "12fac171732261f3"

status: "published"
aiAssisted: true
reviewer: "ashton-tan"
reviewed: "2026-07-25"
publishedBy: "ashton-tan"
version: "0.1"
revisions:
  - version: "0.1"
    date: 2026-07-20
    change: "Initial draft from e-Invoice Guideline v4.7 and the MyInvois SDK."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "e-Invoice Guideline (Version 4.7) — sections 2.2 to 2.5"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"
  - title: "MyInvois SDK"
    url: "https://sdk.myinvois.hasil.gov.my/"
    publisher: "LHDN"
  - title: "MyInvois SDK — frequently asked questions"
    url: "https://sdk.myinvois.hasil.gov.my/faq/"
    publisher: "LHDN"
  - title: "MyInvois SDK — standard error response"
    url: "https://sdk.myinvois.hasil.gov.my/standard-error-response/"
    publisher: "LHDN"
  - title: "e-Invoice Specific Guideline (Version 4.8)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "LHDN"
    date: "2026-07-07"

entity: "MyInvois transmission mechanisms"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "part-of", to: "e-invoicing" }
  - { rel: "requires", to: "e-invoice-data-fields" }
  - { rel: "related-to", to: "myinvois-phases" }
related: ["e-invoicing", "myinvois-phases", "e-invoice-data-fields", "consolidated-e-invoice", "self-billed-e-invoice"]
keywords: ["integrasi MyInvois", "API MyInvois", "Portal MyInvois", "Peppol Malaysia", "middleware e-Invois", "pilih laluan e-Invois"]
---

Hampir semua yang ditulis tentang keputusan ini ditulis oleh seseorang yang
menjual salah satu daripada jawapannya. Jadi mulakan daripada dua mekanisme
sahaja yang diiktiraf oleh LHDN, dalam Table 2.1 Garis Panduan e-Invois:
**Portal MyInvois** dan **API**. Penyedia Peppol, penyedia teknologi
bukan-Peppol dan middleware bukan pilihan ketiga — ketiga-tiganya adalah cara
untuk sampai ke API.

## Dua mekanisme

| | Portal MyInvois | API |
| --- | --- | --- |
| Kos | Percuma, melalui log masuk **MyTax** | Bina atau lesenkan |
| Input | Borang individu, atau **muat naik kelompok hamparan Excel yang telah ditetapkan** | XML atau JSON mengikut **UBL 2.1** |
| Tandatangan | Diuruskan oleh Portal | **Sijil digital** anda (.cer atau .pfx) |
| Kesesuaian menurut LHDN | Boleh diakses oleh semua pembayar cukai; perniagaan yang sambungan API tidak tersedia | Volum tinggi; memerlukan pelaburan awal dan perubahan sistem |
| Laluan | Satu | ERP terus, penyedia **Peppol**, penyedia **bukan-Peppol** |

Kedua-duanya menghasilkan perkara yang sama: Nombor Pengenalan Unik IRBM,
cap masa pengesahan, dan kod QR pada perwakilan visual.

## Kira saiznya sebelum membeli-belah

Persoalannya bukan perolehan anda. Ia ialah **berapa banyak dokumen yang
mesti anda hantar dalam sebulan**, dan bilangannya biasanya lebih besar
daripada jangkaan orang:

1. e-Invois transaksi kepada pembeli yang memintanya
2. e-Invois disatukan — satu atau lebih sebulan, setiap cawangan jika anda
   memisahkannya
3. **e-Invois dibil sendiri** — komisen, pembekal luar negara, tuan tanah
   individu, kebanyakan faedah, dividen, bayaran balik modal
4. Nota kredit, nota debit dan nota bayaran balik

Kemudian gunakan dua pengecualian yang meruntuhkan anggaran naif. Sebarang
**transaksi tunggal melebihi RM10,000** mesti menjadi e-Invois transaksi,
merentasi semua industri, sejak 1 January 2026. Dan sembilan aktiviti dalam
Table 3.6 e-Invoice Specific Guideline tidak boleh sama sekali disatukan —
kenderaan bermotor, tiket penerbangan, kontrak pembinaan, bayaran ejen dan
pengedar, bayaran pertaruhan, elektrik, telekomunikasi.

Sebuah bengkel yang menjual tiga buah kereta sebulan mempunyai beban kerja
Portal yang remeh. Seorang peruncit semula telekomunikasi dengan 4,000
pelanggan pascabayar tidak, dan tiada jumlah penyatuan yang dapat
membantunya.

**Volum dibil sendiri biasanya menjadi kejutan.** Sebuah syarikat dengan 40
invois jualan sebulan dan 600 bayaran komisen ejen adalah perniagaan e-Invois
bervolum tinggi, apa pun yang dikatakan oleh lejar jualannya.

## Di mana Portal benar-benar tidak lagi memadai

- **Kos kemasukan data.** Setiap dokumen transaksi memerlukan nama pembeli,
  TIN, nombor pendaftaran, alamat, nombor hubungan dan nombor pendaftaran
  SST ditaip atau dimuat naik melalui hamparan.
- **Jam 72 jam.** Tempoh pembatalan dan penolakan berjalan daripada masa
  pengesahan. Proses manual yang menghantar secara mingguan tidak dapat
  menggunakannya.
- **Tumpuan penghujung bulan.** e-Invois disatukan wajib dihantar dalam
  tempoh **tujuh hari kalendar** selepas penghujung bulan, di atas
  segala-galanya yang lain.
- **Penyesuaian.** Portal memberikan anda capaian XML, JSON, metadata, grid
  dan PDF — tetapi memadankan dokumen yang disahkan kembali kepada lejar
  anda dilakukan secara manual.

## Di mana API memakan kos lebih daripada lesen

- **Sijil digital** mesti diperoleh, dipasang dan diputarkan.
- **Had penghantaran adalah ketat:** 100 dokumen dan 5MB setiap penghantaran,
  300KB setiap dokumen. Pengelompokan dan, jika perlu, pemampatan
  (minification) adalah masalah anda sendiri.
- **Pengesahan dua peringkat.** *Submitted* bukan *Valid*. Struktur, medan
  teras dan kod disemak serta-merta; tandatangan, pembayar cukai, dokumen
  rujukan dan pendua disemak di latar belakang. Sebarang integrasi yang
  menganggap pengakuan bergaya 202 sebagai kejayaan akan mengumpul dokumen
  tidak sah secara senyap.
- **Pengendalian token.** Token log masuk sah selama 60 minit dan sepatutnya
  digunakan semula, bukan dijana bagi setiap permintaan. Had kadar
  mengembalikan 429 dengan pengepala `Retry-After`.
- **Data induk.** TIN pembekal dan pembeli, BRN 12-digit yang baharu, kod
  MSIC dan nombor SST mesti betul sebelum semua ini dapat berjalan.

## Memilih laluan ke API

| Laluan | Sesuai untuk | Perhatikan |
| --- | --- | --- |
| **Integrasi ERP terus** | ERP yang mantap dengan penyetempatan Malaysia yang diselenggara, atau keupayaan kejuruteraan dalaman | Penyelenggaraan berterusan apabila versi garis panduan berubah — v4.7 dan v4.8 kedua-duanya dikeluarkan pada 7 July 2026 |
| **Penyedia perkhidmatan Peppol** | Perniagaan yang juga mahukan pertukaran dokumen boleh saling beroperasi dengan rakan niaga | Peppol bukan keperluan MyInvois; jangan bayar untuknya seolah-olah ia adalah satu |
| **Penyedia teknologi bukan-Peppol / middleware** | Berbilang sistem sumber, kumpulan POS, atau ERP tanpa penyetempatan | Penjagaan data, terma keluar, dan sama ada mereka menghantar di bawah kelayakan (credentials) mereka sendiri |

LHDN tidak mengiktiraf, mengakreditasi atau meluluskan mana-mana penyedia.
Jika sebuah vendor mendakwa status diluluskan LHDN, minta untuk melihat
buktinya.

## Persoalan perantara yang tiada sesiapa tanya

SDK menyatakan bahawa perantara menghantar menggunakan **Client ID dan
Client Secret mereka sendiri**, dan hanya dapat mengakses e-Invois yang
**mereka sendiri** hantar — mereka tidak dapat mendapatkan semula dokumen
yang dihantar sendiri oleh pembayar cukai secara berasingan.

Dua akibat yang wajar ditulis ke dalam kontrak:

- **Menukar penyedia tidak membawa sejarah penghantaran anda bersama.**
  Rancang untuk tempoh dijalankan selari (parallel-run) dan untuk arkib
  anda sendiri.
- **Liabiliti tidak berpindah.** Section 82C Income Tax Act 1967 meletakkan
  kewajipan itu pada pembayar cukai; s.120(1)(d) menjadikan pelanggaran
  sebagai suatu kesalahan. Gangguan sistem vendor tetap menjadi
  ketidakpatuhan anda.

Berkenaan gangguan sistem, LHDN menawarkan satu kelonggaran. Section 2.5.4
Garis Panduan e-Invois menyatakan bahawa apabila Sistem MyInvois sendiri
tidak berfungsi kerana penyelenggaraan atau sebab teknikal dan pembayar
cukai dapat membuktikan usaha pematuhannya, Ketua Pengarah akan menilai kes
itu secara berasingan dan mungkin tidak mengambil sebarang tindakan. Ini
meliputi masa gangguan LHDN, bukan gangguan vendor anda.

## Laluan keputusan

1. **Adakah anda dikecualikan?** Bawah perolehan tahunan RM1,000,000,
   berhenti di sini.
2. **Kira dokumen bulanan** merentasi keempat-empat kategori di atas.
3. **Kira-kira di bawah seratus, kebanyakannya disatukan?** Portal, dengan
   muat naik kelompok Excel. Semak semula setiap tahun.
4. **Ratusan hingga ribuan, satu sistem sumber?** Tanya vendor ERP anda apa
   yang diliputi oleh penyetempatan MyInvois mereka — khususnya jenis
   dibil sendiri 11 hingga 14 dan medan anexur bagi import.
5. **Ribuan, atau berbilang sistem sumber, atau kumpulan POS?** Middleware,
   dipilih berdasarkan penjagaan data dan terma keluar dan bukannya senarai
   ciri.
6. **Apa jua yang anda pilih, buktikan ia berfungsi hujung ke hujung sebelum
   tempoh pelonggaran anda tamat** — 31 December 2027 bagi fasa 4, dan
   sudah berlalu bagi fasa 1 hingga 3.

## Kesilapan biasa

- **Membeli sebelum mengira.** Bilangan dokumen, termasuk dibil sendiri,
  adalah keseluruhan input kepada keputusan ini.
- **Menganggap Peppol adalah wajib.** Ia hanya satu daripada tiga laluan
  API.
- **Mempercayai dakwaan akreditasi.** LHDN tidak menerbitkan sebarang
  senarai vendor yang diluluskan.
- **Menganggap pengesahan berlaku serentak.** Empat daripada tujuh
  validator berjalan di latar belakang.
- **Melangkau pembersihan data induk.** Nombor pendaftaran SSM yang lama
  dan TIN yang basi akan gagal validator pembayar cukai walau sebaik mana
  pun integrasi itu.
- **Menguji dengan data yang bersih.** Uji dengan pembekal luar negara,
  individu tanpa TIN, nota kredit dan volum penghujung bulan, kerana
  itulah yang akan rosak.

## Apa seterusnya

Keluarkan akaun belum bayar dan belum terima bulan lepas, kelaskan setiap
baris sebagai transaksi, disatukan atau dibil sendiri, dan kira. Angka itu
menentukan mekanisme yang akan digunakan. Kemudian semak senarai medan
berbanding data induk anda, kerana kerja pembersihan hampir selalu mengambil
masa lebih lama daripada integrasi itu sendiri.
