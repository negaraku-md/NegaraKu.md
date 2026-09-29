---
topicId: MY-ACC-0002
title: "Menyusun Penyampaian MBRS 2.0: mTool, Taksonomi SSMxT dan Putaran Penolakan"
seoTitle: "Panduan Penyampaian MBRS 2.0: mTool & Penandaan SSMxT"
slug: "mbrs-2-filing-guide"
category: "accounting"
subcategory: ["financial-statements"]
summary: "Mekanik ujung-ke-ujung penyusunan penyampaian XBRL SSM — memilih titik masuk, memetakan akun ke konsep SSMxT, melewati validasi mTool, dan mengembalikan penyampaian yang dipertanyakan melalui mPortal."

tier: "1"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "Penyampaian MBRS 2.0 disusun secara luring dalam mTool, alat penyusunan berbasis Excel milik SSM, dan disampaikan secara daring melalui mPortal. Anda memilih salah satu dari 31 titik masuk, memetakan setiap angka dalam laporan keuangan ke konsep dalam Taksonomi SSM (SSMxT_2022v1.0), melewati aturan validasi taksonomi yang terpasang dalam alat itu, dan menghasilkan dokumen instans XBRL. Seorang pembuat (maker) mengunggahnya; hanya seorang pelodge (lodger) yang memegang sertifikat praktik yang sah dapat menyampaikannya."
keyTakeaways:
  - "mTool 2.2 adalah alat penyusunan saat ini; taksonomi di dalamnya adalah SSMxT_2022v1.0, dibangun berdasarkan IFRS Taxonomy 2022"
  - "31 titik masuk mencakup laporan tahunan, laporan keuangan, indikator keuangan utama, pembetulan dan permohonan pengecualian — memilih yang salah berarti membangun ulang berkas itu"
  - "Ekstensi perusahaan tidak diperbolehkan: jika taksonomi tidak punya elemen untuk item baris Anda, Anda menandainya ke dalam blok teks, Anda tidak menciptakan konsep"
  - "Jumlah harus dalam Ringgit Malaysia — Pasal 259(1)(c) Undang-Undang Perusahaan 2016 mensyaratkannya dan taksonomi menegakkan iso4217:MYR"
  - "Validasi didorong oleh aturan, bukan kosmetik: elemen wajib, elemen wajib turunan, pengagregatan dimensi, aturan tanda dan konsistensi silang laporan semuanya dijalankan sebelum berkas dihasilkan"
  - "Pembuat menyusun dan mengunggah, pelodge menyetujui dan menyampaikan — seorang direktur tidak berperan dalam keduanya"
  - "Penyampaian yang dipertanyakan kembali kepada pembuat; batas waktu statutori tidak berhenti sementara Anda membetulkannya"
appliesTo: "Akuntan, sekretaris perusahaan dan staf keuangan yang perlu menghasilkan berkas XBRL itu sendiri, bukan sekadar tahu bahwa satu diperlukan."

faq:
  - q: "Versi mTool dan taksonomi mana yang sebaiknya saya gunakan?"
    a: "mTool 2.2 adalah rilis saat ini di halaman MBRS SSM, dan taksonomi yang tertanam di dalamnya adalah SSMxT_2022v1.0, yang berdasarkan IFRS Accounting Taxonomy 2022. SSM menerbitkan nota terpisah tentang perbedaan antara mTool 2.1 dan 2.2. Berkas zip yang dihasilkan dalam mTool 1.0 tidak dapat diunggah ke mPortal 2.0 — ia perlu dibuka dalam alat saat ini dan dihasilkan ulang."
  - q: "Apa itu titik masuk dan bagaimana saya memilih yang benar?"
    a: "Titik masuk adalah skema taksonomi khusus untuk satu jenis penyerahan. MBRS 2.0 memiliki 31 di antaranya: lima jenis laporan tahunan, jenis laporan keuangan yang dibagi menurut standar akuntansi dan jenis perusahaan (FS-MFRS, FS-MPERS, FS-CLBG, FS-EPC, FS-FC, FS-BNM, serta setara Undang-Undang Perusahaan 1965), empat jenis indikator keuangan utama, pembetulan, dan delapan permohonan pengecualian. Yang benar ditentukan oleh jenis perusahaan Anda, Undang-Undang yang menjadi dasar penyampaian Anda, dan standar akuntansi yang Anda gunakan."
  - q: "Dapatkah saya menciptakan tag saya sendiri jika taksonomi tidak punya elemen untuk suatu item baris?"
    a: "Tidak. Dokumen arsitektur SSMxT menyatakan dengan jelas bahwa ekstensi perusahaan terhadap SSMxT_2022v1.0 tidak diperbolehkan. Di mana taksonomi tidak punya konsep yang sepadan, penyusun memasok rincian itu dengan menandainya ke dalam elemen blok teks yang sesuai. Ini adalah perbedaan terbesar antara penyampaian SSM dan pelaporan XBRL sukarela di tempat lain."
  - q: "Siapa sebenarnya yang dapat menyampaikan berkas — pembuat atau pelodge?"
    a: "Pembuat menyusun dokumen instans dan mengunggahnya dalam mPortal, tetapi penyampaian itu adalah tindakan pelodge. Seorang pelodge harus memegang sertifikat praktik aktif yang didaftarkan melalui e-Secretary, ditambah sertifikat digital yang sah. Jika sertifikat praktik telah kedaluwarsa, penyampaian itu tidak dapat keluar, tidak peduli sebagus apa berkas XBRL itu."
  - q: "Dapatkah saya menyampaikan indikator keuangan utama alih-alih satu set penuh laporan keuangan?"
    a: "Hanya dengan persetujuan terlebih dahulu. Sebuah perusahaan harus terlebih dahulu mengajukan permohonan di bawah titik masuk EA2 untuk pengecualian dari menyampaikan laporan keuangan dan laporan dalam format XBRL penuh, dibuat berdasarkan Pasal 604(2) Undang-Undang Perusahaan 2016. Setelah SSM memberikannya, perusahaan dapat menggunakan titik masuk KFI. Menyampaikan KFI tanpa persetujuan itu bukanlah pilihan."
  - q: "Jika SSM mempertanyakan penyampaian saya, apakah batas waktu berhenti?"
    a: "Tidak. Satu pertanyaan mengirim penyampaian kembali kepada pembuat untuk pembetulan dan penyampaian ulang, tetapi tidak ada apa pun mengenainya yang menghentikan jam pengedaran Pasal 258 atau jam penyampaian Pasal 259. Jika berkas yang dibetulkan tiba setelah tanggal statutori, penalti penyampaian terlambat berdasarkan Practice Directive 1/2017 dikenakan sejak tanggal jatuh tempo asli."

verificationNeeded: []

lang: "id"
masterLanguage: "en"
translationStatus: "pending"

status: "draft"
aiAssisted: true
reviewer: null
publishedBy: "ashton-tan"
reviewed: 2026-08-14
reviewDue: 2027-07-22
revision: 0
revisions:
  - revision: 0
    date: 2026-08-14
    change: "Approved and published."
    reviewer: null

updated: 2026-08-14
sources:
  - title: "Sistem Pelaporan Bisnis Malaysia (MBRS) — Tanya Jawab, Versi 2.8 (Malaysian Business Reporting System (MBRS) — Frequently Asked Questions, Version 2.8)"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/FAQ_MBRS_ISSB.pdf"
    publisher: "Komisi Perusahaan Malaysia (SSM)"
    date: "2025-05-01"
  - title: "Tabel Biaya — Pendaftaran Perusahaan (ROC) (Table of Fees — Registration of Company (ROC))"
    url: "https://www.ssm.com.my/Pages/Services/Registration-of-Company-(ROC)/Table-of-Fees.aspx"
    publisher: "Komisi Perusahaan Malaysia (SSM)"
  - title: "Penyempurnaan MBRS MBRS 2.0 — Gambaran Umum (MBRS Enhancement MBRS 2.0 — Overview)"
    url: "https://www.ssm.com.my/Pages/Publication/PDF%20Files/AD%202024%20-%20Overview%20of%20MBRS%20v2.pdf"
    publisher: "Komisi Perusahaan Malaysia (SSM)"
  - title: "Dokumen Arsitektur Taksonomi SSM 2022 (SSMxT_2022) MBRS 2.0 (MBRS 2.0 SSM Taxonomy 2022 (SSMxT_2022) Architecture Document)"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf"
    publisher: "Komisi Perusahaan Malaysia (SSM)"
  - title: "MBRS — Sistem Pelaporan Bisnis Malaysia (MBRS — Malaysian Business Reporting System)"
    url: "https://www.ssm.com.my/Pages/Services/Other-Services/MBRS.aspx"
    publisher: "Komisi Perusahaan Malaysia (SSM)"
  - title: "Undang-Undang Perusahaan 2016 (Akta 777), teks pembaruan pada 1 Agustus 2022 (Companies Act 2016 (Act 777), updated text as at 1 August 2022)"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "Komisi Perusahaan Malaysia (SSM)"
  - title: "Undang-Undang Perusahaan 2016: Arahan Praktik No. 1/2017 (Direvisi 1 Oktober 2024) (Companies Act 2016: Practice Directive No. 1/2017 (Revised 1 October 2024))"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Practice%20Directive%201_2017%20(Revised)%201%20Oct%202024.pdf"
    publisher: "Komisi Perusahaan Malaysia (SSM)"
    date: "2024-10-01"
  - title: "Arahan Praktik No. 10/2024 — Kriteria Kelayakan untuk Pengecualian Audit bagi Perusahaan Swasta Tertentu di Malaysia (Practice Directive No. 10/2024 — Qualifying Criteria for Audit Exemption for Certain Private Companies in Malaysia)"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/PD10-2024-Qualifying-Criteria-for-Audit-Exemption-for-Certain-Categories-of-Private-Companies.pdf"
    publisher: "Komisi Perusahaan Malaysia (SSM)"
    date: "2024-12-16"

entity: "MBRS 2.0 filing preparation"
relations:
  - { rel: "administered-by", to: "ssm" }
  - { rel: "governs", to: "companies-act-2016" }
  - { rel: "explained-in", to: "mbrs-2" }
  - { rel: "related-to", to: "mbrs-tagging-errors" }
  - { rel: "related-to", to: "financial-statement-pack" }
  - { rel: "related-to", to: "financial-statements-lodgement" }
  - { rel: "related-to", to: "unaudited-financial-statements" }
  - { rel: "related-to", to: "extension-of-time-ssm" }
related: ["mbrs-2", "mbrs-tagging-errors", "financial-statement-pack", "financial-statements-lodgement", "unaudited-financial-statements", "extension-of-time-ssm", "mfrs-vs-mpers"]
keywords: ["MBRS 2.0 filing guide", "mTool 2.2", "SSMxT taxonomy", "XBRL tagging Malaysia", "MBRS entry point", "mPortal maker lodger", "MBRS rejection", "prepare financial statements XBRL SSM"]
---

Hasil pencarian untuk "MBRS 2.0" hampir seluruhnya orang yang mencoba menjual Anda
cara untuk tidak melakukannya. Vendor konversi, jasa penandaan alih daya, dan penggoda
kesiapan Big Four yang berakhir dengan "hubungi kami". Tidak ada yang menerbitkan apa
yang sebenarnya terjadi antara satu set akun yang ditandatangani dan satu tanda terima
dari SSM.

Inilah apa yang terjadi. Anda memasang add-in Microsoft Excel, memilih salah satu dari
tiga puluh satu titik masuk, dan memetakan setiap angka dalam laporan keuangan Anda ke
konsep dalam taksonomi 6,000-elemen yang tidak boleh Anda perluas. Kemudian alat itu
menolak menghasilkan berkas sampai setiap elemen wajib hadir, setiap subtotal berpadu,
dan setiap konvensi tanda benar. Kemudian seseorang dengan sertifikat praktik menekan
kirim.

Halaman ini adalah mekaniknya. **Kewajiban** untuk menyampaikan — siapa, kapan, dan apa
penaltinya — terletak dalam halaman pendamping mengenai
[MBRS 2.0 dan kewajiban penyampaian](/id/company-secretary/mbrs-2).

## Apa yang sebenarnya Anda bangun

Satu penyerahan MBRS adalah dokumen instans XBRL: satu berkas terstruktur di mana setiap
angka membawa identitas yang dapat dibaca mesin. Identitas itu berasal dari **Taksonomi
SSM**, kini **SSMxT_2022v1.0**.

SSMxT bukan ciptaan SSM dari awal. Ia mengambil **IFRS Accounting Taxonomy 2022** sebagai
dasarnya — 6,458 elemen IFRS — dan menambah konsep yurisdiksi Malaysia di atasnya, untuk
pengungkapan Undang-Undang Perusahaan yang IFRS tidak punya alasan untuk membawanya.
Taksonomi laporan keuangan Undang-Undang Perusahaan 2016 memiliki hingga **6,197 konsep
di bawah MFRS** dan **2,375 di bawah MPERS**.

Bagian nonkeuangan lebih kecil dan lebih preskriptif daripada yang diperkirakan oleh
kebanyakan penyusun:

| Pengungkapan | Konsep (CA 2016) |
| --- | --- |
| Laporan direktur | 24 |
| Pernyataan oleh direktur | 29 |
| Tinjauan bisnis direktur | 11 |
| Laporan auditor kepada anggota | 22 |
| Keterlibatan dalam bursa saham | 11 |

Angka-angka itu penting. Laporan direktur tidak disampaikan sebagai PDF yang dipindai.
Ia ditandai, kolom demi kolom, terhadap 24 konsep yang didefinisikan — itulah sebabnya
laporan direktur yang disusun dalam prosa bebas dan tidak pernah dipetakan ke
judul-judul Jadwal Kelima menjadi masalah penandaan dan bukan masalah penyusunan draf.

## Dua alat, dan berkas yang bergerak di antaranya

**mTool** adalah alat penyusunan. Ia adalah add-in Microsoft Excel, Windows saja — ia
tidak berjalan pada macOS, dan ia tidak berjalan pada Open Office. Rilis saat ini adalah
**mTool 2.2**, dan SSM menerbitkan nota terpisah yang menetapkan perbedaan dari mTool
2.1. Ia membawa peramban SSMxT bawaan, berfungsi secara luring, menjalankan aturan
validasi, dan mengeluarkan berkas XBRL sebagai zip.

**mPortal** adalah platform penyerahan. Anda masuk, mengunggah zip, mengarahkannya untuk
persetujuan, membayar, dan menerima tanda terima.

Satu jebakan di sini yang memboroskan sepanjang sore: **berkas zip yang dihasilkan dalam
mTool 1.0 tidak dapat diunggah ke mPortal 2.0.** Panduan SSM sendiri membolehkan Anda
membuka zip mTool 1.0 dalam alat saat ini dan menghasilkannya ulang, tetapi artefak lama
itu sendiri sudah mati. Jika Anda menyampaikan ulang sesuatu yang disusun pada 2023,
perkirakan untuk membangun ulang.

Jebakan yang berkaitan adalah nomor perusahaan. **Format nomor pendaftaran perusahaan
baru adalah wajib dalam MBRS 2.0.** Format lama digunakan hanya untuk pra-isi data
laporan tahunan.

## Memilih titik masuk

Titik masuk adalah skema taksonomi untuk satu jenis penyerahan tertentu. MBRS 2.0
memiliki 31. Memilih dengan salah bukanlah kesalahan pemformatan — ia adalah skema yang
berbeda, elemen wajib yang berbeda, dan satu pembangunan ulang.

**Laporan tahunan**

| Titik masuk | Kegunaan |
| --- | --- |
| AR1 | Perusahaan yang memiliki modal saham, Pasal 68 |
| AR2 | Perusahaan yang tidak memiliki modal saham, Pasal 68 |
| AR3 | Perusahaan asing, Pasal 576 |
| AR4 | Rincian tidak berubah, Pasal 68(6) |
| AR1965 | Laporan tahunan di bawah Undang-Undang Perusahaan 1965 |

**Laporan keuangan dan laporan**

FS-MFRS dan FS-MPERS terpisah menurut standar akuntansi yang digunakan. FS-CLBG untuk
perusahaan terbatas dengan jaminan, FS-EPC untuk perusahaan swasta yang dikecualikan,
FS-FC untuk perusahaan asing, dan FS-BNM untuk perusahaan yang diatur oleh Bank Negara
Malaysia. Masing-masing memiliki padanan setara di bawah Undang-Undang Perusahaan 1965.

**Indikator keuangan utama**

KFI-MFRS, KFI-MPERS, KFI-CLBG dan KFI-FC ada untuk perusahaan yang tidak menyampaikan
satu set penuh dalam XBRL. Anda tidak dapat sekadar memilihnya begitu saja. Sebuah
perusahaan harus terlebih dahulu memperoleh persetujuan di bawah **EA2 — permohonan
untuk pengecualian dari menyampaikan laporan keuangan dan laporan dalam format XBRL
penuh**, dibuat berdasarkan Pasal 604(2) Undang-Undang Perusahaan 2016. Pola yang sama
dengan FS-FC, yang hanya tersedia setelah pengecualian EA3 berdasarkan Pasal 575(7).

**Permohonan pengecualian** merupakan keluarga tersendiri, dan sandaran statutorinya
layak diketahui karena itulah yang menjadi dasar sebenarnya permohonan itu dibuat:

| Titik masuk | Permohonan | Pasal |
| --- | --- | --- |
| EA1 | Akhir tahun buku anak perusahaan asing tidak sepadan dengan perusahaan induk | Pasal 247(3) |
| EA2 | Pengecualian dari menyampaikan dalam format XBRL penuh | Pasal 604(2) |
| EA3 | Pengecualian penyampaian laporan keuangan oleh perusahaan asing | Pasal 575(7) |
| EA4A | Pembebasan berkenaan bentuk dan isi laporan direktur | Pasal 255(1) |
| EA4B | Pembebasan berkenaan bentuk dan isi laporan keuangan | Pasal 255(1) |
| EA5A | Perpanjangan waktu untuk pengedaran laporan keuangan | Pasal 259(2) |
| EA5B | Perpanjangan waktu untuk menyampaikan laporan keuangan | Pasal 259(2) |
| EA6 | Perpanjangan waktu untuk mengadakan AGM | Pasal 340(4) |
| EA7 | Perpanjangan waktu untuk menyampaikan laporan tahunan | Pasal 609(2) |
| EA8 | Permohonan kepada Menteri | Pasal 247(8) |

Perhatikan bahwa EA5A dan EA5B adalah **permohonan terpisah**. Pengedaran dan penyampaian
adalah jam statutori yang terpisah di bawah Pasal 258 dan Pasal 259, dan satu perpanjangan
bagi salah satunya tidak memperpanjang yang lainnya. Perbedaan itu tidak terlihat dalam
kebanyakan panduan dan ia terpasang dalam sistem penyampaian.

## Pemetaan: bagian yang tidak diajarkan siapa pun

Definisi SSM sendiri tampak mudah secara menyesatkan — penyusun "melakukan pemetaan
dengan mencocokkan informasi dalam laporan keuangan ke konsep yang berkaitan dalam
Taksonomi". Dalam praktik, pemetaan adalah tempat pertimbangan itu berada, dan tempat
masalah tahun-kedua tercipta.

**Anda tidak dapat memperluas taksonomi.** Dokumen arsitektur tidak berbelah bagi:
ekstensi perusahaan terhadap SSMxT_2022v1.0 tidak diperbolehkan, dan entitas tidak dapat
memperluas taksonomi ketika menciptakan dokumen instans. Di mana Anda memerlukan rincian
yang tidak dimodelkan oleh taksonomi — pemecahan segmen, satu kelas pendapatan lain yang
luar biasa — arahannya adalah menyediakannya melalui **penandaan blok teks** ke dalam
konsep blok teks yang sesuai.

Ini bertentangan dengan cara XBRL berfungsi dalam kebanyakan rezim perusahaan tercatat,
di mana elemen ekstensi adalah rutin. Penyusun yang datang dari dunia itu meraih satu tag
khusus, tidak dapat menciptakannya, dan menyimpulkan alat itu rusak.

**Lingkup set-penuh adalah tetap.** Untuk penyampaian dalam XBRL penuh, laporan minimum
adalah laporan posisi keuangan, laporan laba rugi, laporan arus kas, laporan perubahan
ekuitas, dan catatan. Taksonomi membawa penyajian alternatif untuk tiga di antaranya dan
Anda harus memilih satu dan tetap dengannya:

- Laporan posisi keuangan — lancar/tidak lancar, **atau** urutan likuiditas
- Laporan laba rugi — fungsi beban, **atau** sifat beban
- Laporan arus kas — langsung, **atau** tidak langsung

Berpindah antar tahun adalah sah tetapi terlihat, dan ia akan menghasilkan perbandingan
yang tidak sejajar dalam data meskipun akun itu terbaca normal.

**Mata uang dan pembulatan bukanlah gaya.** Jumlah keuangan harus dinyatakan dalam
Ringgit Malaysia, dengan ukuran unit `iso4217:MYR`. Ini bukan sekadar aturan taksonomi —
Pasal 259(1)(c) Undang-Undang Perusahaan 2016 mensyaratkan semua jumlah dalam laporan
keuangan dan laporan yang disampaikan dikutip dalam mata uang Malaysia, dan mensyaratkan
terjemahan tersertifikasi di mana dokumen itu bukan dalam Bahasa Malaysia atau Inggris.

Pembulatan dikendalikan oleh atribut `decimals`, bukan dengan membulatkan angka itu.
Contoh kerja SSM: aset yang ditunjukkan sebagai 53,928 dalam satu set akun yang
dinyatakan dalam ribuan ditandai sebagai **53928000 dengan decimals ditetapkan ke -3**.
Penyusun yang mengetik 53928 telah mengurangi aset sebanyak tiga orde magnitudo, dan
tidak ada aturan validasi yang akan menangkapnya, karena 53,928 adalah angka yang
sepenuhnya sah.

## Validasi: lima keluarga aturan, bukan pemeriksa ejaan

Validasi mTool didorong oleh linkbase formula taksonomi. SSM memodelkan aturan sebagai
asersi (assertion) di mana "benar" berarti lulus. Memahami keluarga-keluarga ini memberi
tahu Anda jenis galat yang Anda cari.

**Elemen wajib.** Konsep tertentu harus hadir. Satu asersi terpisah ada untuk
masing-masing, tepatnya agar pesan kegagalan menamai elemen yang hilang. Contoh dari
dokumentasi SSM: "Assets" patut dilaporkan.

**Elemen wajib turunan.** Diperlukan hanya dalam keadaan tertentu, dimodelkan dengan
prasyarat. Contoh SSM: apabila pelapor memilih status perusahaan sebagai "Public
company", maka pengungkapan status audit laporan keuangan harus "Audited". Salahkan
informasi penyampaian di bagian atas templat dan Anda akan memicu kebutuhan hilir yang
tidak Anda perkirakan.

**Pengagregatan dimensi.** Anggota suatu sumbu harus berjumlah ke induk. Jumlah ekuitas
sama dengan kepentingan nonpengendali ditambah komponen ekuitas lain ditambah ekuitas
yang dapat diatribusikan kepada pemilik induk. Di sinilah satu set akun yang dihimpun
melintasi beberapa spreadsheet dan tidak pernah dipadu-silang akhirnya tertangkap.

**Nilai positif dan negatif.** Pendirian SSM lebih bernuansa daripada "beban adalah
negatif". **Tidak ada elemen yang harus selalu disimpan negatif** — item berbobot negatif
seperti beban disimpan sebagai angka positif dalam kebanyakan kasus. Sebaliknya, linkbase
formula menegakkan satu daftar elemen yang harus selalu **positif**.

**Data silang laporan dan berkorelasi.** Nilai yang muncul dalam lebih dari satu laporan
harus sesuai, dan nilai yang berkait secara logis diperiksa satu sama lain.

Tambahkan pada itu validasi terstruktur — well-formedness XBRL, validasi dimensi,
enumerasi yang dapat diperluas, validasi tabel dan formula — yang memeriksa instans
terhadap SSMxT_2022v1.0 itu sendiri.

## Pembuat, pelodge dan langkah persetujuan

mPortal berbasis peran, dan peran-peran itu tidak dapat dipertukarkan.

**Pembuat** menyusun dokumen instans dan mengunggahnya. Pembuat tidak memerlukan tanda
tangan digital.

**Pelodge** menyetujui dan menyampaikan. Seorang pelodge harus memegang sertifikat praktik
berdasarkan Pasal 241 Undang-Undang Perusahaan 2016, didaftarkan melalui e-Secretary, dan
sertifikat digital yang sah. Persetujuan dilakukan melalui Administrator → Approval
Management → Filing Approval, di mana dasbor menunjukkan penyampaian yang diunggah oleh
pembuat dan menunggu persetujuan pelodge.

Keterkaitan antara pembuat dan pelodge dikelola dalam mPortal, dan ia dapat ditetapkan
tidak aktif. Satu kegagalan yang lazim dan sepenuhnya legap adalah seorang pembuat
mengunggah berkas yang tidak pernah muncul dalam antrean pelodge karena keterkaitan itu
telah dinonaktifkan dan tidak dipulihkan. Seorang pembuat tunggal dapat dikaitkan dengan
beberapa pelodge.

Seorang direktur bukanlah peran dalam sistem ini. Ini adalah titik struktur yang sama
yang mengatur permohonan perpanjangan waktu, yang SSM mensyaratkan berasal dari sekretaris
perusahaan. Jika sertifikat praktik sekretaris Anda telah kedaluwarsa, Anda tidak punya
saluran penyampaian — dan Anda akan mengetahuinya pada hari Anda mencoba menggunakannya.

## Putaran penolakan

Tiga hal berbeda disebut "penolakan" dan ia berperilaku berbeda.

**Kegagalan validasi mTool.** Berkas tidak akan dihasilkan. Anda masih luring, tidak ada
apa pun yang disampaikan, dan tidak ada jam yang terpengaruh. Ini adalah hasil yang baik.

**Pertanyaan mPortal.** Penyampaian diterima untuk pemeriksaan dan kemudian dipertanyakan
kembali. Pembuat melihat status pertanyaan pada dasbor, membetulkan, dan menyampaikan
ulang. Batas waktu statutori tidak tersentuh oleh semua ini — pengedaran Pasal 258 dan
penyampaian Pasal 259 berjalan pada tanggal mereka sendiri, dan penalti Practice Directive
1/2017 terakru sejak tanggal jatuh tempo asli, bukan sejak tanggal berkas Anda akhirnya
lulus.

**Pembetulan pasca-penyampaian.** Setelah satu penyampaian berada dalam catatan, Anda
tidak menyampaikannya ulang — Anda membetulkannya berdasarkan Pasal 602 Undang-Undang
Perusahaan 2016. mPortal 2.0 membawa tiga jenis:

- **Pembetulan standar** — membetulkan data dalam AR atau FS yang telah disampaikan, baik
  melalui MBRS maupun di loket
- **Pembetulan informasi penyampaian** — membetulkan header penyampaian itu sendiri,
  misalnya akhir tahun buku yang disampaikan sebagai 30/12/23 alih-alih 31/12/23, atau
  satu penyerahan yang disampaikan sebagai AR4 padahal seharusnya AR1
- **Penyampaian nihil** — membetulkan satu catatan tanpa mengunggah AR atau FS pengganti
  apa pun, digunakan untuk penyerahan ganda atau perintah pengadilan tanpa pengganti

Ada juga satu jalur **penyampaian perintah pengadilan** untuk perusahaan yang berstatus
dibubarkan.

Di bawah MBRS 1.0, pembetulan berarti satu permohonan loket sebelum menyampaikan ulang.
MBRS 2.0 membawa keseluruhan proses itu ke dalam portal. Itu adalah penyempurnaan yang
tulen, dan ia juga sebab mengapa titik masuk pembetulan ada dalam mTool sama sekali.

## Satu urutan kerja

1. **Tetapkan tanggal sebelum Anda membuka alat.** Akhir tahun buku, tanggal pengedaran,
   batas waktu penyampaian. Jam penyampaian berdasarkan Pasal 259(1)(a) dimulai pada
   pengedaran, bukan pada akhir tahun.
2. **Verifikasi build mTool dan versi taksonomi** pada halaman MBRS SSM. SSM memperbarui
   ini tanpa pengumuman terpisah.
3. **Pilih titik masuk secara sengaja** — jenis perusahaan, Undang-Undang, standar
   akuntansi. Jika Anda memerlukan KFI atau FS-FC, persetujuan EA2 atau EA3 harus sudah
   ada.
4. **Padu-silangkan akun sebelum menandai.** Setiap inkonsistensi internal yang dahulunya
   disembunyikan oleh PDF kini adalah satu kegagalan validasi yang memblokir.
5. **Petakan sekali dan catat pemetaan itu.** Pertimbangan yang Anda buat tahun ini patut
   diulang tahun depan, atau perbandingan Anda tidak akan dapat dibandingkan dalam data
   meskipun ia dapat dibandingkan dalam akun.
6. **Tandai laporan nonkeuangan juga** — laporan direktur, pernyataan oleh direktur,
   laporan auditor. Ini adalah konsep, bukan lampiran.
7. **Validasi dan betulkan di dalam mTool.** mPortal bukanlah layanan validasi.
8. **Periksa sertifikat praktik dan sertifikat digital pelodge** sebelum minggu batas
   waktu, bukan saat minggu itu.
9. **Unggah, arahkan untuk persetujuan pelodge, bayar, simpan tanda terima.** Tanda terima
   adalah bukti kepatuhan, bukan berkas zip.
10. **Jika berkas tidak akan siap, ajukan perpanjangan sebelum periode kedaluwarsa** — EA5A
    untuk pengedaran, EA5B untuk penyampaian, EA7 untuk laporan tahunan.

## Kesalahan lazim

- **Mengetik angka yang dibulatkan alih-alih menggunakan atribut `decimals`.** 53,928
  dalam satu set akun yang dinyatakan dalam ribuan adalah 53928000 dengan decimals -3.
  Mengetik 53928 melewati setiap aturan validasi dan salah dengan faktor seribu.
- **Mencoba menciptakan elemen khusus.** Ekstensi perusahaan terhadap SSMxT_2022v1.0
  tidak diperbolehkan. Gunakan blok teks.
- **Menyampaikan KFI tanpa persetujuan EA2**, atau FS-FC tanpa pengecualian EA3. Keduanya
  memerlukan pengecualian yang diberikan terlebih dahulu.
- **Menganggap satu perpanjangan mencakup kedua jam.** EA5A memperpanjang pengedaran,
  EA5B memperpanjang penyampaian, dan Pasal 258 dan Pasal 259 berurutan.
- **Mengunggah zip mTool 1.0 ke mPortal 2.0.** Buka ia dalam alat saat ini dan hasilkan
  ulang.
- **Menggunakan format nomor pendaftaran perusahaan lama.** Format baru adalah wajib dalam
  MBRS 2.0 kecuali untuk pra-isi data laporan tahunan.
- **Keterkaitan pembuat–pelodge yang dinonaktifkan**, jadi penyampaian yang diunggah tidak
  pernah sampai ke antrean persetujuan pelodge dan tidak ada yang menyadari sampai batas
  waktu.
- **Menganggap satu pertanyaan sebagai jam yang berhenti.** Tidak. Penalti berjalan sejak
  tanggal statutori.
- **Mengubah dasar penyajian antar tahun** — urutan likuiditas satu tahun, lancar/tidak
  lancar tahun berikutnya — dan menghasilkan perbandingan yang tidak sejajar dalam data.
- **Membiarkan laporan direktur tidak ditandai dalam prosa draf.** Ia dipetakan ke 24
  konsep yang didefinisikan dan judul-judul Jadwal Kelima; menyusunnya begitu dari awal
  menghilangkan satu kelas kerja ulang sepenuhnya.

## Apa selanjutnya

Sebelum akhir tahun Anda yang berikutnya, lakukan satu hal: tuliskan pemetaan itu. Setiap
akun dalam neraca saldo Anda, konsep SSMxT yang menjadi tujuan penandaannya, dan alasan di
mana pilihan itu tidak jelas. Dokumen itu bernilai lebih daripada berkas XBRL itu sendiri,
karena berkas itu dapat dibuang dan pemetaan itulah yang Anda bangun ulang dari awal
setiap tahun jika Anda tidak menyimpannya.

Kemudian baca halaman [galat penandaan](/id/accounting/mbrs-tagging-errors), yang mengambil
keluarga kegagalan di atas dan menelusuri bagaimana masing-masing sebenarnya tampak dalam
satu set akun nyata.
