---
topicId: MY-ACC-0003
title: "Galat Penandaan SSMxT: Mengapa Penyerahan MBRS Gagal Validasi"
seoTitle: "Kesalahan Penandaan MBRS: Kegagalan Validasi SSMxT"
slug: "mbrs-tagging-errors"
category: "accounting"
subcategory: ["financial-statements"]
summary: "Kesalahan penandaan yang menghalangi penghasilan berkas MBRS atau menyebabkannya dipertanyakan kembali — pemilihan elemen yang salah, galat skala dan tanda, penandaan blok dibandingkan penandaan terperinci, serta catatan yang tidak punya tempat dalam taksonomi."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "Kebanyakan kegagalan validasi MBRS tergolong dalam lima kelompok: elemen wajib yang hilang, elemen wajib turunan yang dipicu oleh pilihan dalam informasi penyampaian, agregat dimensi yang tidak berjumlah ke induknya, pelanggaran aturan tanda, atau percanggahan silang laporan. Galat yang tidak dapat dideteksi oleh validasi lebih buruk — pemilihan elemen yang salah dan skala yang salah keduanya menghasilkan berkas yang sah secara teknis tetapi membawa angka yang salah."
keyTakeaways:
  - "Galat skala adalah yang paling berbahaya: angka yang dimasukkan dalam ribuan lolos semua aturan validasi tetapi menyalahsajikan akun sebanyak seribu kali lipat"
  - "Tidak ada elemen SSMxT yang harus selalu negatif — beban biasanya disimpan sebagai angka positif"
  - "Validasi berjalan atas dasar asersi (assertion) di mana benar berarti lulus, jadi pesan menamai aturan itu, bukan solusinya"
  - "Ekstensi (extension) perusahaan dilarang, jadi catatan yang tidak dapat dipetakan dimasukkan ke dalam blok teks, bukan ke dalam konsep yang direka-reka"
  - "Informasi penyampaian di bagian atas templat menentukan aturan wajib turunan di bagian bawah — status perusahaan yang salah akan berdampak berurutan"
  - "Dasar penyajian adalah pilihan yang dibuat sekali saja: urutan likuiditas dibandingkan lancar/tidak lancar, fungsi dibandingkan sifat beban"
appliesTo: "Penyusun yang menghasilkan dokumen instans XBRL SSM dalam mTool, dan pemeriksa yang memvalidasi penyampaian sebelum lodger mengirimnya."

faq:
  - q: "Mengapa mTool menyatakan suatu elemen adalah wajib padahal akun saya tidak punya baris tersebut?"
    a: "SSMxT memodelkan elemen wajib sebagai asersi keberadaan (existence assertion), dengan asersi terpisah bagi setiap konsep agar pesan kegagalan dapat menamainya. Sebagiannya wajib tanpa syarat — contoh yang diberikan SSM sendiri adalah Assets harus dilaporkan. Yang lain adalah wajib turunan, diperlukan hanya karena sesuatu yang Anda pilih di tempat lain. Jika baris itu memang tidak ada dalam akun Anda, periksa apakah satu pilihan dalam informasi penyampaian telah memicu kebutuhan tersebut sebelum Anda menganggap alat itu yang salah."
  - q: "Apakah beban perlu ditandai sebagai angka negatif?"
    a: "Biasanya tidak. Dokumen arsitektur SSMxT menyatakan tidak ada elemen yang perlu selalu disimpan sebagai nilai negatif, karena elemen berbobot negatif seperti beban disimpan sebagai angka positif dalam kebanyakan kasus. Apa yang benar-benar ditegakkan oleh formula linkbase adalah daftar elemen yang harus selalu positif. Oleh karena itu, galat tanda dalam penyampaian SSMxT lebih sering terjadi akibat penggunaan tanda minus yang berlebihan dibandingkan kekurangannya."
  - q: "Bagaimana saya menandai catatan yang tidak punya konsep dalam taksonomi?"
    a: "Ke dalam blok teks. Ekstensi perusahaan terhadap SSMxT_2022v1.0 tidak diperbolehkan, jadi Anda tidak dapat menciptakan elemen baru. Pendekatan yang dinyatakan oleh SSM adalah penyusun menyediakan tingkat perincian yang diperlukan dengan menandai informasi tersebut sebagai blok teks menggunakan konsep blok teks yang sesuai. Informasi itu tetap tersampaikan, hanya saja ia tidak dapat dibaca mesin secara terpisah."
  - q: "Apa perbedaan antara penandaan blok dan penandaan terperinci?"
    a: "Penandaan terperinci memberikan setiap angka konsepnya sendiri, jadi angka itu dapat dibaca mesin secara terpisah dan tunduk pada aturan validasi. Penandaan blok merekam keseluruhan catatan sebagai satu blok teks terhadap satu konsep. Penandaan terperinci diperlukan di mana pun taksonomi memodelkan konsep tersebut; penandaan blok adalah jalan alternatif bagi perincian yang tidak dibawa oleh taksonomi. Memblokir sesuatu yang dimodelkan oleh taksonomi adalah kegagalan kualitas meskipun ia tidak menyebabkan kegagalan validasi."
  - q: "Apakah galat validasi berarti SSM telah menolak penyampaian saya?"
    a: "Tidak. Validasi mTool terjadi secara luring sebelum apa pun dikirim, dan berkas itu semata-mata tidak akan dihasilkan. Penolakan atau pertanyaan adalah peristiwa terpisah yang terjadi dalam mPortal setelah unggah. Tidak satu pun darinya menangguhkan batas waktu pengedaran Pasal 258 atau batas waktu penyampaian Pasal 259."

verificationNeeded:
  - "SSM tidak menerbitkan daftar kode alasan penolakan MBRS yang terpadu — kelompok galat di sini diturunkan dari kategori formula linkbase dalam dokumen arsitektur SSMxT_2022, bukan dari registri penolakan yang diterbitkan"
  - "Verifikasi perilaku validasi bagi titik masuk (entry point) tertentu berdasarkan manual pengguna mTool 2.2 untuk titik masuk tersebut sebelum bergantung pada aturan mana pun yang diterangkan secara umum"

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
  - title: "Dokumen Arsitektur Taksonomi SSM 2022 (SSMxT_2022) MBRS 2.0 (MBRS 2.0 SSM Taxonomy 2022 (SSMxT_2022) Architecture Document)"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf"
    publisher: "Komisi Perusahaan Malaysia (SSM)"
  - title: "Sistem Pelaporan Bisnis Malaysia (MBRS) — Tanya Jawab, versi 2.4 (Malaysian Business Reporting System (MBRS) — Frequently Asked Questions, version 2.4)"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/FAQs_Malaysian_Business_Reporting_System_MBRS.pdf"
    publisher: "Komisi Perusahaan Malaysia (SSM)"
    date: "2024-10-01"
  - title: "Penyempurnaan MBRS MBRS 2.0 — Gambaran Umum (MBRS Enhancement MBRS 2.0 — Overview)"
    url: "https://www.ssm.com.my/Pages/Publication/PDF%20Files/AD%202024%20-%20Overview%20of%20MBRS%20v2.pdf"
    publisher: "Komisi Perusahaan Malaysia (SSM)"
  - title: "Undang-Undang Perusahaan 2016 (Akta 777), teks pembaruan pada 1 Agustus 2022 (Companies Act 2016 (Act 777), updated text as at 1 August 2022)"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "Komisi Perusahaan Malaysia (SSM)"
  - title: "MBRS — Sistem Pelaporan Bisnis Malaysia (MBRS — Malaysian Business Reporting System)"
    url: "https://www.ssm.com.my/Pages/Services/Other-Services/MBRS.aspx"
    publisher: "Komisi Perusahaan Malaysia (SSM)"

entity: "SSMxT tagging errors"
relations:
  - { rel: "administered-by", to: "ssm" }
  - { rel: "part-of", to: "mbrs-2-filing-guide" }
  - { rel: "related-to", to: "mbrs-2" }
  - { rel: "related-to", to: "financial-statement-pack" }
  - { rel: "related-to", to: "sdn-bhd-bookkeeping" }
related: ["mbrs-2-filing-guide", "mbrs-2", "financial-statement-pack", "sdn-bhd-bookkeeping", "mfrs-vs-mpers"]
keywords: ["ralat penandaan MBRS", "pengesahan SSMxT", "kegagalan pengesahan XBRL Malaysia", "ralat mTool", "MBRS ditolak", "penandaan blok teks SSM", "skala decimals MBRS"]
---

Kegagalan yang membawa biaya bukanlah yang menghalangi berkas dari dihasilkan. Ia adalah
yang dihasilkan dengan bersih, disampaikan dengan bersih, tetapi membawa angka yang salah
sebanyak seribu kali lipat.

Validasi SSMxT mahir dalam aritmetika tetapi buta terhadap makna. Ia akan menolak laporan
perubahan ekuitas yang tidak seimbang jumlahnya. Namun ia akan menerima begitu saja
jumlah aset RM53,928 bagi sebuah perusahaan yang sebenarnya memiliki RM53.9 juta pada
neraca, karena 53,928 adalah angka yang sepenuhnya sah.

Asimetri itulah cara Anda harus membaca setiap kelompok galat di bawah: yang dapat
dideteksi oleh alat itu hanyalah menyusahkan, dan yang tidak dapat dideteksilah yang perlu
diberi perhatian saat pemeriksaan.

## Dua galat yang tidak dapat dideteksi oleh validasi

### Skala

SSMxT mengendalikan pembulatan melalui atribut `decimals` dalam XBRL, bukan dengan
membulatkan nilai itu sendiri. Contoh kerja SSM sendiri: sebuah perusahaan yang akunnya
dinyatakan dalam ribuan dan asetnya tertera 53,928 menandai fakta itu sebagai **53928000
dengan `decimals` ditetapkan ke -3**.

Penyusun yang menyalin langsung angka tercetak dari muka akun akan menandai 53928. Tidak
ada aturan yang terpicu. Instans itu adalah XBRL yang sah. Akun yang disampaikan
menunjukkan perusahaan itu berukuran satu per seribu dari ukuran sebenarnya — dapat dibaca
mesin, permanen, dan dapat dilihat oleh siapa saja yang menarik data itu.

Setiap penyampaian yang disusun dari satu set akun yang disajikan dalam ribuan atau juta
memerlukan pemeriksaan skala sebagai satu langkah pemeriksaan terpisah, terpisah dari
validasi.

### Pemilihan elemen

Taksonomi ini membawa ribuan konsep, beberapa di antaranya mungkin tampak sesuai bagi
saldo mana pun yang diberikan. Tidak ada apa pun dalam mTool yang memberi tahu Anda apakah
Anda memilih yang tampak sesuai atau yang benar.

Dua akibat mengikuti dari ini. Pertama, akun yang ditandai tidak lagi sepadan dengan apa
yang dipahami oleh pembaca PDF tersebut. Kedua — dan inilah yang berdampak pada tahun
kedua — keputusan pemetaan itu adalah satu **preseden**. Tandai saldo yang sama secara
berbeda pada tahun berikutnya dan angka perbandingan Anda akan menyimpang dalam data
meskipun akun yang dicetak konsisten.

Catat pemetaan itu. Bukan berkasnya, tetapi pemetaannya: akun, konsep, dan alasannya di
mana pilihan itu merupakan pertimbangan profesional.

## Lima kelompok kegagalan validasi

SSM membangun aturan ini ke dalam formula linkbase taksonomi, menggunakan asersi
keberadaan (existence assertion) dan asersi nilai (value assertion), dimodelkan agar
**benar berarti aturan itu lulus**.

**Elemen wajib.** Konsep yang harus hadir, satu asersi bagi setiap konsep agar pesan
kegagalan menamainya. Contoh yang didokumentasikan oleh SSM: "Assets" perlu dilaporkan.

**Elemen wajib turunan.** Diperlukan hanya di bawah syarat tertentu, dimodelkan dengan
satu prasyarat (precondition) beserta satu asersi nilai. Contoh SSM tepat dan patut
dihafal: *apabila pelapor memilih status perusahaan sebagai "Public company", maka
pengungkapan status audit laporan keuangan harus "Audited".*

Inilah kelompok yang menghasilkan permintaan dukungan yang paling membingungkan, karena
galat itu muncul dalam laporan keuangan sedangkan penyebabnya adalah satu dropdown dalam
blok informasi penyampaian. Sebelum mempertanyakan galat wajib turunan, baca ulang bagian
header.

**Agregat dimensi.** Anggota suatu axis harus berjumlah ke induknya di mana penyusun
menstrukturkannya dalam hierarki seperti penjumlahan. Contoh SSM: jumlah ekuitas sama
dengan kepentingan nonpengendali ditambah komponen ekuitas lain ditambah ekuitas yang
dapat diatribusikan kepada pemilik induk.

**Nilai positif dan negatif.** Di sinilah intuisi yang dibawa oleh kebanyakan penyusun
salah. Dokumen arsitektur ini jelas menyatakan *tidak ada elemen yang perlu selalu
disimpan sebagai nilai negatif*, karena item berbobot negatif seperti harga pokok
penjualan disimpan sebagai angka positif dalam kebanyakan kasus. Apa yang sebenarnya
dibawa oleh formula linkbase adalah daftar elemen yang harus **selalu positif** — contoh
SSM adalah jumlah keseluruhan utang dalam MYR harus bernilai positif.

Jadi galat tanda yang biasa dalam penyampaian SSMxT bukanlah tanda minus yang tertinggal.
Sebaliknya, ia adalah penyusun yang dengan niat baik menambah satu tanda minus.

**Data silang laporan dan berkorelasi.** Fakta yang sama yang muncul dalam lebih dari satu
laporan harus selaras, dan fakta-fakta yang berkait secara logis diperiksa satu sama lain.
Angka keuntungan dalam laporan laba rugi yang tidak selaras dengan pergerakan
pembukaan-ke-penutupan dalam laporan perubahan ekuitas dahulunya tidak terlihat dalam PDF.
Kini ia menghalangi berkas itu dari dihasilkan.

Di bawah kelima kelompok ini terletak pemeriksaan struktur — validasi XBRL, dimensi,
formula, tabel, extensible enumeration dan iXBRL — yang memvalidasi instans itu terbentuk
dengan benar terhadap SSMxT_2022v1.0 itu sendiri.

## Penandaan blok dibandingkan penandaan terperinci

Penandaan terperinci memberikan setiap angka konsepnya sendiri: dapat dibaca mesin secara
terpisah, divalidasi secara terpisah, dapat dibandingkan secara terpisah antar tahun.
Penandaan blok merekam keseluruhan catatan sebagai teks terhadap satu konsep blok teks.

Aturan yang menentukan penandaan mana yang perlu digunakan bukanlah preferensi pribadi.
**Ekstensi perusahaan terhadap SSMxT_2022v1.0 tidak diperbolehkan.** Di mana taksonomi
membawa suatu konsep, Anda menandai padanya. Di mana standar akuntansi memerlukan perincian
yang tidak dimodelkan oleh taksonomi — pemecahan segmen menjadi contoh SSM sendiri bagi
perincian khusus entitas — arahannya adalah menyediakannya melalui penandaan blok teks ke
dalam konsep blok teks yang sesuai.

Mode kegagalan di sini adalah pemblokiran berlebihan: seorang penyusun yang tertekan oleh
batas waktu memblokir keseluruhan catatan yang sebenarnya dimodelkan oleh taksonomi konsep
demi konsep. Ia dihasilkan, ia disampaikan, tetapi ia mengosongkan isi penyampaian itu.
Tidak ada apa pun dalam pipeline data (data pipeline) yang dibangun oleh SSM yang dapat
memanfaatkan catatan yang disimpan sebagai paragraf.

Di mana suatu instans disusun dalam iXBRL, konten yang dapat dibaca manusia yang tidak
ditandai dapat ada dalam dokumen berdampingan dengan fakta yang ditandai. Ini mengurangi
tekanan untuk memaksa segalanya ke dalam satu tag, tetapi ia tidak memberi lisensi untuk
memblokir apa yang seharusnya diperinci.

## Catatan yang tidak dapat dipetakan

Tiga situasi yang sering berulang.

**Catatan yang tidak punya konsep dalam taksonomi.** Blok teks. Inilah jawaban yang
dirancang, bukan jalan pintas sementara.

**Catatan yang dimodelkan oleh taksonomi di bawah nama yang berbeda.** Lebih lazim terjadi
daripada perkiraan penyusun, karena SSMxT mewarisi label IFRS Taxonomy 2022 sedangkan akun
Malaysia sering membawa istilah internal perusahaan sendiri. Gunakan peramban SSMxT bawaan
dalam mTool untuk mencari konsep tersebut, bukan label yang biasa Anda gunakan.

**Catatan yang tergolong dalam dasar penyajian yang tidak Anda pilih.** Taksonomi ini
membawa alternatif — lancar/tidak lancar dibandingkan urutan likuiditas bagi laporan posisi
keuangan, fungsi dibandingkan sifat beban bagi laba rugi, langsung dibandingkan tidak
langsung bagi arus kas. Konsep yang tergolong dalam dasar yang tidak Anda pilih tidak akan
tersedia. Penyusun sering menganggap ini sebagai elemen yang hilang. Sebenarnya ia adalah
pilihan penyajian yang dibuat dua langkah sebelumnya.

## Mata uang, dan aturan statutori di baliknya

Fakta keuangan harus membawa `iso4217:MYR`. Penyusun bagi anak perusahaan milik asing yang
melapor kepada grup dalam mata uang lain kadang menganggap mata uang penyajian itu ikut
berpindah bersama akun. Ia tidak demikian.

Ini bukan sekadar kekangan taksonomi. Pasal 259(1)(c) Undang-Undang Perusahaan 2016
(Companies Act 2016) mewajibkan semua jumlah yang ditunjukkan dalam laporan keuangan dan
laporan yang disampaikan kepada Pendaftar disebut dalam mata uang Malaysia, dan dokumen
dalam bahasa apa pun selain Bahasa Malaysia atau Bahasa Inggris disertai dengan terjemahan
tersertifikasi.

## Kesalahan lazim

- **Memasukkan angka tercetak** dari akun yang dinyatakan dalam ribuan, alih-alih jumlah
  penuh dengan `decimals` ditetapkan ke -3. Lolos validasi, tetapi menyalahsajikan akun.
- **Menambah tanda minus pada beban.** SSMxT menyimpan item berbobot negatif sebagai
  positif dalam kebanyakan kasus.
- **Mempertanyakan galat wajib turunan** tanpa memeriksa header informasi penyampaian yang
  memicunya.
- **Memblokir catatan yang dimodelkan secara terperinci oleh taksonomi** karena batas
  waktu lebih dekat daripada pemahaman.
- **Mencari dalam taksonomi menggunakan nama akun sendiri** alih-alih label IFRS, lalu
  menyimpulkan bahwa konsep itu tidak ada.
- **Mengubah dasar penyajian dari tahun ke tahun**, yang secara diam-diam merusak angka
  perbandingan dalam data.
- **Menganggap kegagalan validasi sebagai penolakan.** Validasi terjadi secara luring dalam
  mTool; penolakan dan pertanyaan terjadi dalam mPortal setelah unggah. Tidak satu pun
  menghentikan jangka waktu statutori.
- **Menandai mata uang penyajian grup** alih-alih Ringgit Malaysia.
- **Menganggap pemetaan itu dapat dibuang.** Dokumen instans itulah yang dapat dibuang.
  Pemetaan itulah asetnya.

## Langkah selanjutnya

Bangun satu langkah pemeriksaan dua kolom ke dalam proses penutupan Anda: setiap fakta yang
ditandai dibandingkan dengan muka akun, diperiksa dari sisi skala, dan setiap pemetaan yang
melibatkan pertimbangan profesional dicatat beserta alasannya. Keduanya bukan aturan
validasi, dan itulah sebabnya keduanya tidak akan dideteksi untuk Anda.

Jika Anda masih memilih titik masuk atau sedang memahami peran maker dan lodger, mulai
dengan [panduan penyusunan MBRS 2.0](/id/accounting/mbrs-2-filing-guide).
