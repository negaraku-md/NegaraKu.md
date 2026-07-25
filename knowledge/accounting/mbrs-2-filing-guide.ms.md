---
topicId: MY-ACC-0002
title: "Preparing an MBRS 2.0 Filing: mTool, the SSMxT Taxonomy and the Rejection Loop"
seoTitle: "Panduan Pemfailan MBRS 2.0: Penandaan mTool & SSMxT"
slug: "mbrs-2-filing-guide"
category: "accounting"
subcategory: ["financial-statements"]
summary: "Mekanisme hujung-ke-hujung bagi menyediakan satu pemfailan XBRL SSM — memilih titik masukan, memetakan akaun kepada konsep SSMxT, melepasi pengesahan mTool, dan membawa satu pemfailan yang dipersoalkan (query) semula melalui mPortal."

tier: "1"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "Satu pemfailan MBRS 2.0 disediakan secara luar talian dalam mTool, alat penyediaan berasaskan Excel milik SSM, dan dikemukakan secara dalam talian melalui mPortal. Anda memilih salah satu daripada 31 titik masukan, memetakan setiap angka dalam penyata kewangan kepada satu konsep dalam Taksonomi SSM (SSMxT_2022v1.0), melepasi peraturan pengesahan taksonomi yang terbina dalam alat itu, dan menjana satu dokumen instans XBRL. Seorang maker memuat naiknya; hanya seorang lodger yang memegang satu sijil amalan yang sah boleh menyerahkannya."
keyTakeaways:
  - "mTool 2.2 ialah alat penyediaan semasa; taksonomi di dalamnya ialah SSMxT_2022v1.0, dibina atas IFRS Taxonomy 2022"
  - "31 titik masukan merentas penyata tahunan, penyata kewangan, petunjuk kewangan utama, pembetulan dan permohonan pengecualian — memilih yang salah bermaksud membina semula fail itu"
  - "Pengembangan syarikat tidak dibenarkan: jika taksonomi itu tiada elemen bagi item baris anda, anda menandanya ke dalam satu blok teks, anda tidak mencipta satu konsep"
  - "Jumlah mesti dalam Ringgit Malaysia — s.259(1)(c) Akta Syarikat 2016 menghendakinya dan taksonomi itu menguatkuasakan iso4217:MYR"
  - "Pengesahan digerakkan oleh peraturan, bukan sekadar kosmetik: elemen wajib, elemen wajib terbitan, pengagregatan dimensi, peraturan tanda dan konsistensi merentas penyata semuanya berjalan sebelum fail itu akan terjana"
  - "maker menyediakan dan memuat naik, lodger meluluskan dan menyerahkan — pengarah tiada peranan dalam kedua-duanya"
  - "Satu pemfailan yang dipersoalkan (query) kembali kepada maker; tarikh akhir statutori tidak berhenti seketika semasa anda membetulkannya"
appliesTo: "Akauntan, setiausaha syarikat dan kakitangan kewangan yang perlu menghasilkan fail XBRL itu sendiri, bukan sekadar tahu bahawa satu fail diperlukan."

faq:
  - q: "Versi mTool yang mana dan taksonomi yang mana patut saya gunakan?"
    a: "mTool 2.2 ialah keluaran semasa pada halaman MBRS SSM, dan taksonomi yang terbenam di dalamnya ialah SSMxT_2022v1.0, yang berasaskan IFRS Accounting Taxonomy 2022. SSM menerbitkan satu nota berasingan mengenai perbezaan antara mTool 2.1 dan 2.2. Satu fail zip yang dijana dalam mTool 1.0 tidak boleh dimuat naik ke mPortal 2.0 — ia mesti dibuka dalam alat semasa dan dijana semula."
  - q: "Apakah itu titik masukan dan bagaimana saya memilih yang betul?"
    a: "Satu titik masukan ialah skema taksonomi khusus bagi satu jenis penyerahan. MBRS 2.0 mempunyai 31 daripadanya: lima jenis penyata tahunan, jenis penyata kewangan yang dibahagikan mengikut piawaian perakaunan dan jenis syarikat (FS-MFRS, FS-MPERS, FS-CLBG, FS-EPC, FS-FC, FS-BNM, ditambah versi setara Akta Syarikat 1965), empat jenis petunjuk kewangan utama, pembetulan, dan lapan permohonan pengecualian. Yang betul ditetapkan oleh jenis syarikat anda, Akta yang anda failkan di bawahnya, dan piawaian perakaunan yang anda gunakan."
  - q: "Bolehkah saya mencipta tag saya sendiri jika taksonomi itu tiada elemen bagi satu item baris?"
    a: "Tidak. Dokumen seni bina SSMxT menyatakan dengan jelas bahawa pengembangan syarikat ke atas SSMxT_2022v1.0 tidak dibenarkan. Apabila taksonomi itu tiada konsep yang sepadan, penyedia membekalkan butiran itu dengan menandanya ke dalam satu elemen blok teks yang sesuai. Ini adalah perbezaan tunggal terbesar antara pemfailan SSM dengan pelaporan XBRL secara sukarela di tempat lain."
  - q: "Siapa sebenarnya yang boleh menyerahkan fail itu — maker atau lodger?"
    a: "maker menyediakan dokumen instans itu dan memuat naiknya dalam mPortal, tetapi penyerahan itu adalah tindakan lodger. Seorang lodger mesti memegang satu sijil amalan aktif yang berdaftar melalui e-Secretary, ditambah satu sijil digital yang sah. Jika sijil amalan itu telah tamat tempoh, pemfailan itu semata-mata tidak boleh keluar, tidak kira sebaik mana pun fail XBRL itu."
  - q: "Bolehkah saya memfailkan petunjuk kewangan utama sebagai ganti satu set penuh penyata kewangan?"
    a: "Hanya dengan kelulusan terlebih dahulu. Sesebuah syarikat mesti terlebih dahulu memohon di bawah titik masukan EA2 bagi pengecualian daripada memfailkan penyata kewangan dan laporan dalam format XBRL penuh, yang dibuat di bawah s.604(2) Akta Syarikat 2016. Sebaik sahaja SSM meluluskannya, syarikat itu boleh menggunakan satu titik masukan KFI. Memfailkan KFI tanpa kelulusan itu bukan satu pilihan."
  - q: "Jika SSM mempersoalkan (query) pemfailan saya, adakah tarikh akhir itu berhenti?"
    a: "Tidak. Satu pertanyaan (query) menghantar pemfailan itu kembali kepada maker untuk pembetulan dan penyerahan semula, tetapi tiada apa-apa dalam hal itu yang menghentikan jam edaran s.258 atau jam pengemukaan s.259. Jika fail yang telah dibetulkan tiba selepas tarikh statutori, penalti pengemukaan lewat di bawah Practice Directive 1/2017 dikenakan daripada tarikh akhir asal."

verificationNeeded:
  - "Sahkan versi binaan mTool semasa dan sebarang keluaran taksonomi selepas SSMxT_2022v1.0 terhadap halaman MBRS SSM sebelum menyediakan satu pemfailan — SSM mengemas kini perkara-perkara ini tanpa sebarang pengumuman berasingan"
  - "Sahkan yuran mPortal semasa bagi setiap jenis penyerahan terhadap Jadual Yuran SSM pada masa pengemukaan"
  - "Soalan Lazim MBRS yang diterbitkan ialah versi 2.4 (Oktober 2024) dan mendahului sesetengah perilaku mTool 2.2 — semak manual pengguna mTool 2.2 bagi titik masukan yang anda failkan"

lang: "ms"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "7d7049034803d339"

status: "reviewed"
aiAssisted: true
reviewer: "Ashton Tan"
reviewed: "2026-07-25"
version: "0.2"
revisions:
  - version: "0.1"
    date: 2026-07-20
    change: "Initial draft."
    reviewer: null
  - version: "0.2"
    date: 2026-07-21
    change: "Removed the stale 'mTool 2.1' migration step (the article states mTool 2.2 is current) — a 1.0 zip is reopened in the current tool. EA5A and EA5B remain cited to s.259(2), which PN 3/2018 para 10 confirms is the single extension power for both circulation and lodgement."
    reviewer: null

updated: 2026-07-20
sources:
  - title: "Malaysian Business Reporting System (MBRS) — Frequently Asked Questions, version 2.4"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/FAQs_Malaysian_Business_Reporting_System_MBRS.pdf"
    publisher: "SSM"
    date: "2024-10-01"
  - title: "MBRS Enhancement MBRS 2.0 — Overview"
    url: "https://www.ssm.com.my/Pages/Publication/PDF%20Files/AD%202024%20-%20Overview%20of%20MBRS%20v2.pdf"
    publisher: "SSM"
  - title: "MBRS 2.0 SSM Taxonomy 2022 (SSMxT_2022) Architecture Document"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf"
    publisher: "SSM"
  - title: "MBRS — Malaysian Business Reporting System"
    url: "https://www.ssm.com.my/Pages/Services/Other-Services/MBRS.aspx"
    publisher: "SSM"
  - title: "Companies Act 2016 (Act 777), updated text as at 1 August 2022"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "SSM"
  - title: "Companies Act 2016: Practice Directive No. 1/2017 (Revised 1 October 2024)"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Practice%20Directive%201_2017%20(Revised)%201%20Oct%202024.pdf"
    publisher: "SSM"
    date: "2024-10-01"
  - title: "Practice Directive No. 10/2024 — Qualifying Criteria for Audit Exemption for Certain Private Companies in Malaysia"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/PD10-2024-Qualifying-Criteria-for-Audit-Exemption-for-Certain-Categories-of-Private-Companies.pdf"
    publisher: "SSM"
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
keywords: ["panduan pemfailan MBRS 2.0", "mTool 2.2", "taksonomi SSMxT", "penandaan XBRL Malaysia", "titik masukan MBRS", "maker lodger mPortal", "penolakan MBRS", "sediakan penyata kewangan XBRL SSM"]
---

Keputusan carian untuk "MBRS 2.0" hampir semuanya orang yang cuba menjual anda
satu cara untuk tidak melakukannya sendiri. Vendor penukaran, perkhidmatan
penandaan (tagging) tersumber luar, dan iklan "kesediaan" firma Big Four yang
berakhir dengan "hubungi kami". Tiada siapa menerbitkan apa yang sebenarnya
berlaku antara satu set akaun yang telah ditandatangani dengan satu pengesahan
penerimaan (acknowledgement) daripada SSM.

Inilah yang sebenarnya berlaku. Anda pasang satu add-in Microsoft Excel, pilih
salah satu daripada tiga puluh satu titik masukan, dan memetakan setiap angka
dalam penyata kewangan anda kepada satu konsep dalam satu taksonomi
6,000-elemen yang anda tidak dibenarkan mengembangkan. Kemudian alat itu enggan
menjana fail sehingga setiap elemen wajib hadir, setiap subjumlah menepati
jumlahnya, dan setiap konvensyen tanda (positif/negatif) betul. Kemudian
seorang yang memegang sijil amalan menekan butang hantar.

Halaman ini menerangkan mekanismenya. **Kewajipan** untuk memfailkan — siapa,
bila, dan apakah penaltinya — terdapat dalam halaman sampingan
[MBRS 2.0 dan kewajipan pemfailan](/company-secretary/mbrs-2).

## Apa yang sebenarnya anda bina

Satu penyerahan MBRS ialah satu dokumen instans XBRL: satu fail berstruktur di
mana setiap angka membawa satu identiti yang boleh dibaca mesin. Identiti itu
datang daripada **Taksonomi SSM**, iaitu pada masa ini **SSMxT_2022v1.0**.

SSMxT bukan ciptaan SSM dari kosong. Ia mengambil **IFRS Accounting Taxonomy
2022** sebagai asasnya — 6,458 elemen IFRS — dan menambah konsep bidang kuasa
Malaysia di atasnya, bagi pendedahan Akta Syarikat 2016 (Companies Act 2016)
yang IFRS tiada sebab untuk membawanya. Taksonomi penyata kewangan Akta
Syarikat 2016 berjumlah **6,197 konsep di bawah MFRS** dan **2,375 di bawah
MPERS**.

Bahagian bukan kewangan adalah lebih kecil dan lebih preskriptif berbanding
jangkaan kebanyakan penyedia:

| Pendedahan | Konsep (Akta Syarikat 2016) |
| --- | --- |
| Laporan pengarah | 24 |
| Penyata oleh pengarah | 29 |
| Ulasan perniagaan pengarah | 11 |
| Laporan juruaudit kepada ahli | 22 |
| Penglibatan dalam bursa saham | 11 |

Angka-angka itu penting. Laporan pengarah tidak dikemukakan sebagai satu PDF
imbasan. Ia ditanda, medan demi medan, terhadap 24 konsep yang ditakrifkan —
sebab itulah satu laporan pengarah yang dirangka dalam prosa bebas dan tidak
pernah dipetakan kepada tajuk-tajuk Fifth Schedule (Jadual Kelima) akan menjadi
masalah penandaan, bukan masalah rangkaan.

## Dua alat, dan fail yang berpindah antara kedua-duanya

**mTool** ialah alat penyediaan. Ia merupakan satu add-in Microsoft Excel,
Windows sahaja — ia tidak berfungsi pada macOS, dan tidak berfungsi pada Open
Office. Keluaran semasa ialah **mTool 2.2**, dan SSM menerbitkan satu nota
berasingan yang menetapkan perbezaan daripada mTool 2.1. Ia membawa satu
pelayar SSMxT terbina-dalam, berfungsi luar talian (offline), menjalankan
peraturan pengesahan, dan menghasilkan fail XBRL sebagai satu zip.

**mPortal** ialah platform penyerahan. Anda log masuk, muat naik zip itu,
hantar untuk kelulusan, bayar, dan menerima pengesahan penerimaan.

Satu perangkap di sini yang boleh membazirkan sepanjang petang: **satu zip
yang dijana dalam mTool 1.0 tidak boleh dimuat naik ke mPortal 2.0.** Panduan
SSM sendiri membenarkan anda membuka satu zip mTool 1.0 dalam alat semasa dan
menjananya semula, tetapi artifak lama itu sendiri sudah mati. Jika anda
memfailkan semula sesuatu yang disediakan pada 2023, bersedia untuk membina
semula.

Perangkap yang berkaitan ialah nombor syarikat. **Format nombor pendaftaran
syarikat yang baharu adalah mandatori dalam MBRS 2.0.** Format lama hanya
digunakan untuk mengisi lebih dahulu (pre-populate) data penyata tahunan.

## Memilih titik masukan

Satu titik masukan ialah skema taksonomi bagi satu jenis penyerahan yang
khusus. MBRS 2.0 mempunyai 31. Memilih secara salah bukanlah satu kesilapan
format — ia adalah satu skema yang berbeza, elemen wajib yang berbeza, dan
satu pembinaan semula.

**Penyata tahunan**

| Titik masukan | Kegunaan |
| --- | --- |
| AR1 | Syarikat yang mempunyai modal saham, s.68 |
| AR2 | Syarikat yang tidak mempunyai modal saham, s.68 |
| AR3 | Syarikat asing, s.576 |
| AR4 | Butiran tidak berubah, s.68(6) |
| AR1965 | Penyata tahunan di bawah Akta Syarikat 1965 (Companies Act 1965) |

**Penyata kewangan dan laporan**

FS-MFRS dan FS-MPERS dibahagikan mengikut piawaian perakaunan yang digunakan.
FS-CLBG adalah untuk syarikat berhad menurut jaminan, FS-EPC untuk syarikat
persendirian yang dikecualikan, FS-FC untuk syarikat asing, dan FS-BNM untuk
syarikat yang dikawal selia oleh Bank Negara Malaysia. Setiap satu mempunyai
versi setara di bawah Akta Syarikat 1965.

**Petunjuk kewangan utama**

KFI-MFRS, KFI-MPERS, KFI-CLBG dan KFI-FC wujud untuk syarikat yang tidak
memfailkan satu set penuh dalam XBRL. Anda tidak boleh sekadar memilih ini
sesuka hati. Sesebuah syarikat mesti terlebih dahulu mendapat kelulusan di
bawah **EA2 — permohonan pengecualian daripada memfailkan penyata kewangan dan
laporan dalam format XBRL penuh**, yang dibuat di bawah s.604(2) Akta Syarikat
2016. Corak yang sama berlaku bagi FS-FC, yang hanya tersedia selepas satu
penepian EA3 di bawah s.575(7).

**Permohonan pengecualian** adalah kumpulan tersendiri, dan pautan
statutorinya patut diketahui kerana itulah asas sebenar permohonan itu dibuat:

| Titik masukan | Permohonan | Seksyen |
| --- | --- | --- |
| EA1 | Penghujung tahun kewangan anak syarikat asing tidak bertepatan dengan syarikat induk | s.247(3) |
| EA2 | Pengecualian daripada memfailkan dalam format XBRL penuh | s.604(2) |
| EA3 | Penepian pengemukaan penyata kewangan oleh syarikat asing | s.575(7) |
| EA4A | Kelonggaran berkenaan bentuk dan kandungan laporan pengarah | s.255(1) |
| EA4B | Kelonggaran berkenaan bentuk dan kandungan penyata kewangan | s.255(1) |
| EA5A | Lanjutan masa untuk edaran penyata kewangan | s.259(2) |
| EA5B | Lanjutan masa untuk mengemukakan penyata kewangan | s.259(2) |
| EA6 | Lanjutan masa untuk mengadakan AGM | s.340(4) |
| EA7 | Lanjutan masa untuk mengemukakan penyata tahunan | s.609(2) |
| EA8 | Permohonan kepada Menteri | s.247(8) |

Perhatikan bahawa EA5A dan EA5B adalah **permohonan yang berasingan**. Edaran
dan pengemukaan adalah dua jam statutori yang berasingan di bawah s.258 dan
s.259, dan satu lanjutan bagi salah satu tidak melanjutkan yang satu lagi.
Perbezaan ini tidak kelihatan dalam kebanyakan panduan dan ia terbina dalam
sistem pemfailan itu sendiri.

## Pemetaan: bahagian yang tiada siapa ajar

Definisi SSM sendiri kelihatan mudah tetapi mengelirukan — penyedia
"melakukan pemetaan dengan memadankan maklumat dalam penyata kewangan kepada
satu konsep yang relevan dalam Taksonomi itu". Pada praktiknya, pemetaan
adalah tempat pertimbangan (judgement) itu bermula, dan tempat masalah
tahun-kedua dicipta.

**Anda tidak boleh mengembangkan taksonomi itu.** Dokumen seni bina
(architecture document) adalah jelas tanpa keraguan: pengembangan (extension)
oleh syarikat ke atas SSMxT_2022v1.0 tidak dibenarkan, dan entiti tidak boleh
mengembangkan taksonomi itu semasa mencipta satu dokumen instans. Apabila anda
memerlukan butiran yang tidak dimodelkan oleh taksonomi itu — satu pecahan
segmen, satu kelas pendapatan lain yang luar biasa — arahannya ialah untuk
menyediakannya melalui **penandaan blok teks** ke dalam satu konsep blok teks
yang sesuai.

Ini bertentangan dengan cara XBRL berfungsi dalam kebanyakan rejim syarikat
tersenarai, di mana elemen pengembangan adalah lumrah. Penyedia yang datang
daripada dunia itu cuba mencari satu tag tersuai, tidak dapat mencipta satu,
dan menyimpulkan bahawa alat itu rosak.

**Skop set penuh adalah tetap.** Bagi satu pemfailan dalam XBRL penuh, penyata
minimum ialah penyata kedudukan kewangan, penyata untung atau rugi, penyata
aliran tunai, penyata perubahan ekuiti, dan nota-nota. Taksonomi itu membawa
persembahan alternatif bagi tiga daripadanya dan anda mesti memilih satu dan
kekal dengannya:

- Penyata kedudukan kewangan — semasa/bukan semasa, **atau** susunan kecairan
- Penyata untung atau rugi — fungsi perbelanjaan, **atau** sifat perbelanjaan
- Penyata aliran tunai — langsung, **atau** tidak langsung

Menukar antara tahun adalah sah tetapi kelihatan, dan ia akan menghasilkan
angka perbandingan yang tidak selari dalam data walaupun akaun itu kelihatan
biasa apabila dibaca.

**Mata wang dan pembundaran bukan soal gaya.** Jumlah wang mesti dinyatakan
dalam Ringgit Malaysia, dengan ukuran unit `iso4217:MYR`. Ini bukan sekadar
satu peraturan taksonomi — s.259(1)(c) Akta Syarikat 2016 menghendaki semua
jumlah dalam penyata kewangan dan laporan yang dikemukakan dinyatakan dalam
mata wang Malaysia, dan menghendaki satu terjemahan yang disahkan apabila
dokumen itu bukan dalam Bahasa Malaysia atau Bahasa Inggeris.

Pembundaran dikendalikan oleh atribut `decimals`, bukan dengan membundarkan
angka itu sendiri. Contoh kerja SSM: aset yang ditunjukkan sebagai 53,928
dalam satu set akaun yang dinyatakan dalam ribu, ditanda sebagai **53928000
dengan decimals ditetapkan kepada -3**. Penyedia yang menaip 53928 telah
mengecilkan (understate) aset itu sebanyak tiga darjah magnitud, dan tiada
peraturan pengesahan akan menangkapnya, kerana 53,928 adalah satu angka yang
sah sepenuhnya.

## Pengesahan: lima keluarga peraturan, bukan semakan ejaan

Pengesahan mTool digerakkan oleh formula linkbase taksonomi itu. SSM
memodelkan peraturan-peraturan itu sebagai penegasan (assertion) di mana
"true" bermaksud lulus. Memahami keluarga-keluarga ini memberitahu anda jenis
ralat yang sedang anda hadapi.

**Elemen wajib.** Konsep-konsep tertentu mesti hadir. Satu penegasan
berasingan wujud bagi setiap satu, khusus supaya mesej kegagalan menamakan
elemen yang hilang. Contoh daripada dokumentasi SSM: "Assets" perlu
dilaporkan.

**Elemen wajib terbitan.** Diperlukan hanya dalam keadaan tertentu,
dimodelkan dengan satu prasyarat. Contoh SSM: apabila pemfail memilih status
syarikat sebagai "Public company", maka pendedahan status audit penyata
kewangan mesti "Audited". Jika anda salah mengisi maklumat pemfailan di
bahagian atas templat, anda akan mencetuskan keperluan-keperluan hiliran yang
tidak anda jangkakan.

**Pengagregatan dimensi.** Ahli-ahli sesuatu paksi (axis) mesti berjumlah
menyamai induknya. Jumlah ekuiti menyamai kepentingan bukan mengawal ditambah
komponen ekuiti lain ditambah ekuiti yang boleh diagihkan kepada pemilik
induk. Di sinilah satu set akaun yang disusun merentas beberapa hamparan
(spreadsheet) dan tidak pernah disemak silang akhirnya tertangkap.

**Nilai positif dan negatif.** Pendirian SSM lebih bernuansa berbanding
"perbelanjaan adalah negatif". **Tiada elemen yang mesti sentiasa disimpan
sebagai negatif** — item berwajaran negatif seperti perbelanjaan disimpan
sebagai nombor positif dalam kebanyakan kes. Sebaliknya, formula linkbase itu
menguatkuasakan satu senarai elemen yang mesti sentiasa **positif**.

**Data merentas penyata dan berkorelasi.** Nilai yang muncul dalam lebih
daripada satu penyata mesti sepadan, dan nilai yang berkait secara logik
disemak antara satu sama lain.

Tambah kepada itu pengesahan struktural — kesempurnaan bentuk XBRL
(well-formedness), pengesahan dimensi, extensible enumeration, pengesahan
jadual dan formula — yang menyemak instans itu terhadap SSMxT_2022v1.0 itu
sendiri.

## Maker, lodger dan langkah kelulusan

mPortal berasaskan peranan, dan peranan-peranan itu tidak boleh saling ditukar
ganti.

**maker** menyediakan dokumen instans itu dan memuat naiknya. maker tidak
memerlukan tandatangan digital.

**lodger** meluluskan dan menyerahkan. Seorang lodger mesti memegang satu
sijil amalan di bawah s.241 Akta Syarikat 2016, berdaftar melalui e-Secretary,
serta satu sijil digital yang sah. Kelulusan dilakukan melalui Administrator →
Approval Management → Filing Approval, di mana papan pemuka itu menunjukkan
pemfailan yang dimuat naik oleh maker dan sedang menunggu kelulusan lodger.

Perkaitan antara maker dan lodger ditadbir dalam mPortal, dan ia boleh
ditetapkan tidak aktif. Satu kegagalan yang lazim dan sama sekali tidak jelas
ialah seorang maker memuat naik fail yang tidak pernah muncul dalam giliran
(queue) lodger kerana perkaitan itu telah dinyahaktifkan dan tidak
diaktifkan semula. Seorang maker boleh dikaitkan dengan berbilang lodger.

Pengarah bukan satu peranan dalam sistem ini. Ini adalah titik struktural
yang sama yang mengawal permohonan lanjutan masa, yang dikehendaki oleh SSM
supaya datang daripada setiausaha syarikat. Jika sijil amalan setiausaha anda
telah luput, anda tidak mempunyai saluran pemfailan — dan anda akan
mengetahuinya pada hari anda cuba menggunakannya.

## Gelung penolakan

Tiga perkara berbeza sama-sama dipanggil "penolakan" dan ketiga-tiganya
berperilaku secara berbeza.

**Kegagalan pengesahan mTool.** Fail itu tidak akan terjana. Anda masih di
luar talian, tiada apa-apa telah diserahkan, dan tiada jam yang terjejas. Ini
adalah hasil yang baik.

**Pertanyaan (query) mPortal.** Pemfailan itu diterima untuk semakan dan
kemudian dipersoalkan (query) semula. maker melihat status pertanyaan itu
pada papan pemuka, membetulkannya, dan menyerahkan semula. Tarikh akhir
statutori tidak terjejas oleh semua ini — edaran s.258 dan pengemukaan s.259
berjalan mengikut tarikh masing-masing, dan penalti Practice Directive
1/2017 terkumpul daripada tarikh akhir asal, bukan daripada tarikh fail anda
akhirnya lulus.

**Pembetulan selepas pengemukaan.** Sebaik sahaja satu pemfailan berada dalam
rekod, anda tidak menyerahkannya semula — anda membetulkannya di bawah s.602
Akta Syarikat 2016. mPortal 2.0 membawa tiga jenis:

- **Pembetulan standard** — membetulkan data dalam satu AR atau FS yang telah
  diserahkan, sama ada melalui MBRS atau di kaunter
- **Pembetulan maklumat pemfailan** — membetulkan pengepala (header)
  pemfailan itu sendiri, contohnya satu penghujung tahun kewangan yang
  dikemukakan sebagai 30/12/23 sedangkan sepatutnya 31/12/23, atau satu
  penyerahan yang dikemukakan sebagai AR4 sedangkan sepatutnya AR1
- **Pemfailan nil (nil filing)** — membetulkan satu rekod tanpa memuat naik
  sebarang AR atau FS gantian, digunakan bagi penyerahan berganda atau satu
  perintah mahkamah tanpa gantian

Terdapat juga satu laluan **pemfailan perintah mahkamah** bagi syarikat yang
berstatus dibubarkan.

Di bawah MBRS 1.0, pembetulan bermaksud satu permohonan kaunter sebelum
memfailkan semula. MBRS 2.0 membawa keseluruhan proses itu ke dalam portal.
Itu adalah satu penambahbaikan sebenar, dan itu jugalah sebabnya
titik-titik masukan pembetulan wujud dalam mTool.

## Satu urutan kerja yang berkesan

1. **Tetapkan tarikh-tarikh sebelum anda membuka alat itu.** Penghujung tahun
   kewangan, tarikh edaran, tarikh akhir pengemukaan. Jam pengemukaan di
   bawah s.259(1)(a) bermula pada tarikh edaran, bukan pada penghujung tahun.
2. **Sahkan versi binaan mTool dan versi taksonomi** pada halaman MBRS SSM.
   SSM mengemas kini kedua-duanya tanpa sebarang pengumuman berasingan.
3. **Pilih titik masukan secara sengaja** — jenis syarikat, Akta, piawaian
   perakaunan. Jika anda memerlukan KFI atau FS-FC, kelulusan EA2 atau EA3
   mesti sudah wujud terlebih dahulu.
4. **Semak silang akaun sebelum menanda.** Setiap ketidakkonsistenan dalaman
   yang dahulunya disembunyikan oleh satu PDF kini menjadi satu kegagalan
   pengesahan yang menyekat.
5. **Petakan sekali dan rekodkan pemetaan itu.** Pertimbangan yang anda buat
   tahun ini perlu diulang tahun depan, jika tidak angka perbandingan anda
   tidak akan boleh dibandingkan dalam data walaupun ia boleh dibandingkan
   dalam akaun.
6. **Tanda penyata bukan kewangan juga** — laporan pengarah, penyata oleh
   pengarah, laporan juruaudit. Ini adalah konsep, bukan lampiran.
7. **Sahkan dan betulkan di dalam mTool.** mPortal bukan satu perkhidmatan
   pengesahan.
8. **Semak sijil amalan dan sijil digital lodger** sebelum minggu tarikh
   akhir, bukan semasa minggu itu.
9. **Muat naik, hantar untuk kelulusan lodger, bayar, simpan pengesahan
   penerimaan.** Pengesahan penerimaan itulah bukti pematuhan, bukan fail zip
   itu.
10. **Jika fail itu tidak akan siap, mohon satu lanjutan sebelum tempoh itu
    luput** — EA5A untuk edaran, EA5B untuk pengemukaan, EA7 untuk penyata
    tahunan.

## Kesilapan lazim

- **Menaip angka yang telah dibundarkan dan bukan menggunakan atribut
  `decimals`.** 53,928 dalam satu set akaun yang dinyatakan dalam ribu ialah
  53928000 dengan decimals -3. Menaip 53928 lulus setiap peraturan pengesahan
  dan salah sebanyak seribu kali ganda.
- **Cuba mencipta satu elemen tersuai.** Pengembangan syarikat ke atas
  SSMxT_2022v1.0 tidak dibenarkan. Gunakan satu blok teks.
- **Memfailkan KFI tanpa kelulusan EA2**, atau FS-FC tanpa penepian EA3.
  Kedua-duanya memerlukan satu pengecualian yang diluluskan terlebih dahulu.
- **Menganggap satu lanjutan meliputi kedua-dua jam itu.** EA5A melanjutkan
  edaran, EA5B melanjutkan pengemukaan, dan s.258 dengan s.259 adalah
  berturutan.
- **Memuat naik satu zip mTool 1.0 ke mPortal 2.0.** Buka ia dalam alat
  semasa dan jana semula.
- **Menggunakan format nombor pendaftaran syarikat yang lama.** Format
  baharu adalah mandatori dalam MBRS 2.0 kecuali untuk mengisi lebih dahulu
  data penyata tahunan.
- **Satu perkaitan maker–lodger yang dinyahaktifkan**, menyebabkan pemfailan
  yang dimuat naik tidak pernah sampai ke giliran kelulusan lodger dan tiada
  siapa perasan sehingga tarikh akhir tiba.
- **Menganggap satu pertanyaan (query) sebagai jam yang berhenti.** Ia tidak
  berhenti. Penalti berjalan daripada tarikh statutori.
- **Menukar asas persembahan antara tahun** — susunan kecairan pada satu
  tahun, semasa/bukan semasa pada tahun berikutnya — dan menghasilkan angka
  perbandingan yang tidak selari dalam data.
- **Membiarkan laporan pengarah tidak ditanda dalam bentuk prosa draf.** Ia
  dipetakan kepada 24 konsep yang ditakrifkan dan tajuk-tajuk Fifth Schedule
  (Jadual Kelima); merangkanya begitu dari awal menghapuskan satu keseluruhan
  kelas kerja ulang.

## Langkah seterusnya

Sebelum penghujung tahun anda yang seterusnya, lakukan satu perkara: tuliskan
pemetaan itu. Setiap akaun dalam baki percubaan (trial balance) anda, konsep
SSMxT yang ditanda kepadanya, dan sebab di mana pilihan itu tidak jelas.
Dokumen itu lebih bernilai daripada fail XBRL itu sendiri, kerana fail itu
boleh dibuang sedangkan pemetaan itulah yang anda perlu bina semula dari
kosong setiap tahun jika anda tidak menyimpannya.

Kemudian baca halaman [ralat penandaan](/accounting/mbrs-tagging-errors), yang
mengambil keluarga-keluarga kegagalan di atas dan menghuraikan bagaimana rupa
sebenar setiap satu dalam satu set akaun sebenar.
