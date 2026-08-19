---
topicId: MY-ACC-0002
title: "Menyediakan Pemfailan MBRS 2.0: mTool, Taksonomi SSMxT dan Gelung Penolakan"
seoTitle: "Panduan Pemfailan MBRS 2.0: mTool & Penandaan SSMxT"
slug: "mbrs-2-filing-guide"
category: "accounting"
subcategory: ["financial-statements"]
summary: "Mekanik hujung-ke-hujung penyediaan pemfailan XBRL SSM — memilih titik masukan, memetakan akaun kepada konsep SSMxT, melepasi pengesahan mTool, dan mengembalikan pemfailan yang dipertikai melalui mPortal."

tier: "1"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "Pemfailan MBRS 2.0 disediakan secara luar talian dalam mTool, alat penyediaan berasaskan Excel milik SSM, dan dilodgekan dalam talian melalui mPortal. Anda memilih salah satu daripada 31 titik masukan, memetakan setiap angka dalam penyata kewangan kepada konsep dalam Taksonomi SSM (SSMxT_2022v1.0), melepasi peraturan pengesahan taksonomi yang terbina dalam alat itu, dan menjana dokumen instans XBRL. Seorang pembuat (maker) memuat naiknya; hanya seorang pelodge (lodger) yang memegang sijil amalan yang sah boleh menyerahkannya."
keyTakeaways:
  - "mTool 2.2 ialah alat penyediaan semasa; taksonomi di dalamnya ialah SSMxT_2022v1.0, dibina berdasarkan IFRS Taxonomy 2022"
  - "31 titik masukan merangkumi penyata tahunan, penyata kewangan, penunjuk kewangan utama, pembetulan dan permohonan pengecualian — memilih yang salah bermakna membina semula fail itu"
  - "Sambungan syarikat tidak dibenarkan: jika taksonomi tiada elemen untuk item baris anda, anda menandanya ke dalam blok teks, anda tidak mencipta konsep"
  - "Amaun mesti dalam Ringgit Malaysia — s.259(1)(c) Akta Syarikat 2016 mensyaratkannya dan taksonomi menguatkuasakan iso4217:MYR"
  - "Pengesahan didorong oleh peraturan, bukan kosmetik: elemen mandatori, elemen mandatori terbitan, pengagregatan dimensi, peraturan tanda dan konsistensi silang penyata semuanya dijalankan sebelum fail dijana"
  - "Pembuat menyedia dan memuat naik, pelodge meluluskan dan menyerahkan — seorang pengarah tiada peranan dalam kedua-duanya"
  - "Pemfailan yang dipertikai kembali kepada pembuat; tarikh akhir berkanun tidak berhenti sementara anda membetulkannya"
appliesTo: "Akauntan, setiausaha syarikat dan kakitangan kewangan yang perlu menghasilkan fail XBRL itu sendiri, bukan sekadar tahu bahawa satu diperlukan."

faq:
  - q: "Versi mTool dan taksonomi manakah yang patut saya gunakan?"
    a: "mTool 2.2 ialah keluaran semasa di halaman MBRS SSM, dan taksonomi yang tertanam di dalamnya ialah SSMxT_2022v1.0, yang berdasarkan IFRS Accounting Taxonomy 2022. SSM menerbitkan nota berasingan tentang perbezaan antara mTool 2.1 dan 2.2. Fail zip yang dijana dalam mTool 1.0 tidak boleh dimuat naik ke mPortal 2.0 — ia perlu dibuka dalam alat semasa dan dijana semula."
  - q: "Apakah itu titik masukan dan bagaimana saya memilih yang betul?"
    a: "Titik masukan ialah skema taksonomi khusus untuk satu jenis penyerahan. MBRS 2.0 mempunyai 31 daripadanya: lima jenis penyata tahunan, jenis penyata kewangan yang dibahagikan mengikut piawaian perakaunan dan jenis syarikat (FS-MFRS, FS-MPERS, FS-CLBG, FS-EPC, FS-FC, FS-BNM, serta setara Akta Syarikat 1965), empat jenis penunjuk kewangan utama, pembetulan, dan lapan permohonan pengecualian. Yang betul ditetapkan oleh jenis syarikat anda, Akta yang anda failkan di bawahnya, dan piawaian perakaunan yang anda gunakan."
  - q: "Bolehkah saya mencipta tag saya sendiri jika taksonomi tiada elemen untuk sesuatu item baris?"
    a: "Tidak. Dokumen seni bina SSMxT menyatakan dengan jelas bahawa sambungan syarikat kepada SSMxT_2022v1.0 tidak dibenarkan. Di mana taksonomi tiada konsep yang sepadan, penyedia membekalkan butiran itu dengan menandanya ke dalam elemen blok teks yang sesuai. Ini ialah perbezaan terbesar antara pemfailan SSM dan pelaporan XBRL sukarela di tempat lain."
  - q: "Siapakah yang sebenarnya boleh menyerahkan fail — pembuat atau pelodge?"
    a: "Pembuat menyediakan dokumen instans dan memuat naiknya dalam mPortal, tetapi penyerahan itu ialah tindakan pelodge. Seorang pelodge mesti memegang sijil amalan aktif yang didaftarkan melalui e-Secretary, ditambah sijil digital yang sah. Jika sijil amalan telah tamat tempoh, pemfailan itu tidak boleh keluar, tidak kira sebaik mana fail XBRL itu."
  - q: "Bolehkah saya memfailkan penunjuk kewangan utama dan bukannya satu set penuh penyata kewangan?"
    a: "Hanya dengan kelulusan terlebih dahulu. Sesebuah syarikat mesti terlebih dahulu memohon di bawah titik masukan EA2 untuk pengecualian daripada memfailkan penyata kewangan dan laporan dalam format XBRL penuh, dibuat di bawah s.604(2) Akta Syarikat 2016. Setelah SSM memberikannya, syarikat boleh menggunakan titik masukan KFI. Memfailkan KFI tanpa kelulusan itu bukanlah pilihan."
  - q: "Jika SSM mempertikaikan pemfailan saya, adakah tarikh akhir berhenti?"
    a: "Tidak. Satu pertikaian menghantar pemfailan kembali kepada pembuat untuk pembetulan dan penyerahan semula, tetapi tiada apa-apa mengenainya yang menghentikan jam pengedaran s.258 atau jam pelodgean s.259. Jika fail yang dibetulkan tiba selepas tarikh berkanun, penalti pelodgean lewat di bawah Practice Directive 1/2017 dikenakan dari tarikh asal jatuh tempo."

verificationNeeded: []

lang: "ms"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "7d7049034803d339"

status: "published"
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
  - title: "Malaysian Business Reporting System (MBRS) — Frequently Asked Questions, Version 2.8"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/FAQ_MBRS_ISSB.pdf"
    publisher: "SSM"
    date: "2025-05-01"
  - title: "Table of Fees — Registration of Company (ROC)"
    url: "https://www.ssm.com.my/Pages/Services/Registration-of-Company-(ROC)/Table-of-Fees.aspx"
    publisher: "SSM"
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
keywords: ["MBRS 2.0 filing guide", "mTool 2.2", "SSMxT taxonomy", "XBRL tagging Malaysia", "MBRS entry point", "mPortal maker lodger", "MBRS rejection", "prepare financial statements XBRL SSM"]
---

Hasil carian untuk "MBRS 2.0" hampir keseluruhannya orang yang cuba menjual anda
cara untuk tidak melakukannya. Vendor penukaran, perkhidmatan penandaan
diluar-kontrak, dan penggoda kesediaan Big Four yang berakhir dengan "hubungi
kami". Tiada siapa menerbitkan apa yang sebenarnya berlaku antara satu set akaun
yang ditandatangani dan satu akuan penerimaan daripada SSM.

Inilah apa yang berlaku. Anda memasang tambahan Microsoft Excel, memilih salah
satu daripada tiga puluh satu titik masukan, dan memetakan setiap nombor dalam
penyata kewangan anda kepada konsep dalam taksonomi 6,000-elemen yang anda tidak
dibenarkan untuk memanjangkannya. Kemudian alat itu enggan menjana fail sehingga
setiap elemen mandatori hadir, setiap subjumlah berpadu, dan setiap konvensyen
tanda betul. Kemudian seseorang dengan sijil amalan menekan hantar.

Halaman ini ialah mekaniknya. **Kewajipan** untuk memfailkan — siapa, bila, dan
apa penaltinya — terletak dalam halaman rakan mengenai
[MBRS 2.0 dan kewajipan pemfailan](/ms/company-secretary/mbrs-2).

## Apa yang sebenarnya anda bina

Satu penyerahan MBRS ialah dokumen instans XBRL: satu fail berstruktur di mana
setiap angka membawa identiti yang boleh dibaca mesin. Identiti itu datang
daripada **Taksonomi SSM**, kini **SSMxT_2022v1.0**.

SSMxT bukan ciptaan SSM dari awal. Ia mengambil **IFRS Accounting Taxonomy 2022**
sebagai asasnya — 6,458 elemen IFRS — dan menambah konsep bidang kuasa Malaysia
di atasnya, untuk pendedahan Akta Syarikat yang IFRS tiada sebab untuk membawanya.
Taksonomi penyata kewangan Akta Syarikat 2016 mempunyai sehingga **6,197 konsep
di bawah MFRS** dan **2,375 di bawah MPERS**.

Bahagian bukan-kewangan lebih kecil dan lebih preskriptif daripada yang
dijangkakan oleh kebanyakan penyedia:

| Pendedahan | Konsep (CA 2016) |
| --- | --- |
| Laporan pengarah | 24 |
| Penyata oleh pengarah | 29 |
| Ulasan perniagaan pengarah | 11 |
| Laporan juruaudit kepada ahli | 22 |
| Penglibatan dalam bursa saham | 11 |

Nombor-nombor itu penting. Laporan pengarah tidak dilodgekan sebagai PDF yang
diimbas. Ia ditanda, medan demi medan, terhadap 24 konsep yang ditakrifkan —
sebab itulah laporan pengarah yang dirangka dalam prosa bebas dan tidak pernah
dipetakan kepada tajuk-tajuk Jadual Kelima menjadi masalah penandaan dan bukan
masalah penyusunan draf.

## Dua alat, dan fail yang bergerak antaranya

**mTool** ialah alat penyediaan. Ia ialah tambahan Microsoft Excel, Windows
sahaja — ia tidak berjalan pada macOS, dan ia tidak berjalan pada Open Office.
Keluaran semasa ialah **mTool 2.2**, dan SSM menerbitkan nota berasingan yang
menetapkan perbezaan daripada mTool 2.1. Ia membawa pelayar SSMxT terbina dalam,
berfungsi secara luar talian, menjalankan peraturan pengesahan, dan mengeluarkan
fail XBRL sebagai zip.

**mPortal** ialah platform penyerahan. Anda log masuk, memuat naik zip,
menghalakannya untuk kelulusan, membayar, dan menerima akuan penerimaan.

Satu perangkap di sini yang membazir keseluruhan petang: **fail zip yang dijana
dalam mTool 1.0 tidak boleh dimuat naik ke mPortal 2.0.** Panduan SSM sendiri
membenarkan anda membuka zip mTool 1.0 dalam alat semasa dan menjananya semula,
tetapi artifak lama itu sendiri sudah mati. Jika anda memfail semula sesuatu yang
disediakan pada 2023, jangkakan untuk membina semula.

Perangkap yang berkaitan ialah nombor syarikat. **Format nombor pendaftaran
syarikat baharu adalah mandatori dalam MBRS 2.0.** Format lama digunakan hanya
untuk pra-isi data penyata tahunan.

## Memilih titik masukan

Titik masukan ialah skema taksonomi untuk satu jenis penyerahan tertentu.
MBRS 2.0 mempunyai 31. Memilih dengan salah bukanlah kesilapan pemformatan — ia
adalah skema yang berbeza, elemen mandatori yang berbeza, dan satu pembinaan
semula.

**Penyata tahunan**

| Titik masukan | Kegunaan |
| --- | --- |
| AR1 | Syarikat yang mempunyai modal saham, s.68 |
| AR2 | Syarikat yang tidak mempunyai modal saham, s.68 |
| AR3 | Syarikat asing, s.576 |
| AR4 | Butiran tidak berubah, s.68(6) |
| AR1965 | Penyata tahunan di bawah Akta Syarikat 1965 |

**Penyata kewangan dan laporan**

FS-MFRS dan FS-MPERS berpecah mengikut piawaian perakaunan yang digunakan.
FS-CLBG adalah untuk syarikat terhad menurut jaminan, FS-EPC untuk syarikat
persendirian dikecualikan, FS-FC untuk syarikat asing, dan FS-BNM untuk syarikat
yang dikawal selia oleh Bank Negara Malaysia. Setiap satu mempunyai rakan
setaranya di bawah Akta Syarikat 1965.

**Penunjuk kewangan utama**

KFI-MFRS, KFI-MPERS, KFI-CLBG dan KFI-FC wujud untuk syarikat yang tidak
memfailkan satu set penuh dalam XBRL. Anda tidak boleh sekadar memilihnya secara
begitu. Sesebuah syarikat mesti terlebih dahulu memperoleh kelulusan di bawah
**EA2 — permohonan untuk pengecualian daripada memfailkan penyata kewangan dan
laporan dalam format XBRL penuh**, dibuat di bawah s.604(2) Akta Syarikat 2016.
Corak yang sama dengan FS-FC, yang hanya tersedia selepas pengecualian EA3 di
bawah s.575(7).

**Permohonan pengecualian** merupakan keluarga tersendiri, dan sangkut berkanun
itu berbaloi untuk diketahui kerana itulah yang menjadi asas sebenar permohonan
itu dibuat:

| Titik masukan | Permohonan | Seksyen |
| --- | --- | --- |
| EA1 | Akhir tahun kewangan anak syarikat asing tidak sepadan dengan syarikat pemegang | s.247(3) |
| EA2 | Pengecualian daripada memfailkan dalam format XBRL penuh | s.604(2) |
| EA3 | Pengecualian pelodgean penyata kewangan oleh syarikat asing | s.575(7) |
| EA4A | Pelepasan berkenaan bentuk dan kandungan laporan pengarah | s.255(1) |
| EA4B | Pelepasan berkenaan bentuk dan kandungan penyata kewangan | s.255(1) |
| EA5A | Lanjutan masa untuk pengedaran penyata kewangan | s.259(2) |
| EA5B | Lanjutan masa untuk melodge penyata kewangan | s.259(2) |
| EA6 | Lanjutan masa untuk mengadakan AGM | s.340(4) |
| EA7 | Lanjutan masa untuk melodge penyata tahunan | s.609(2) |
| EA8 | Permohonan kepada Menteri | s.247(8) |

Perhatikan bahawa EA5A dan EA5B adalah **permohonan berasingan**. Pengedaran dan
pelodgean ialah jam berkanun yang berasingan di bawah s.258 dan s.259, dan satu
lanjutan bagi salah satunya tidak melanjutkan yang satu lagi. Perbezaan itu tidak
kelihatan dalam kebanyakan panduan dan ia terbina dalam sistem pemfailan.

## Pemetaan: bahagian yang tiada siapa ajar

Definisi SSM sendiri kelihatan mudah secara menipu — penyedia "melakukan
pemetaan dengan memadankan maklumat dalam penyata kewangan kepada konsep yang
berkaitan dalam Taksonomi". Dalam praktik, pemetaan ialah tempat pertimbangan itu
berada, dan tempat masalah tahun-kedua tercipta.

**Anda tidak boleh memanjangkan taksonomi.** Dokumen seni bina tidak berbelah
bagi: sambungan syarikat kepada SSMxT_2022v1.0 tidak dibenarkan, dan entiti tidak
boleh memanjangkan taksonomi apabila mencipta dokumen instans. Di mana anda
memerlukan butiran yang tidak dimodelkan oleh taksonomi — pecahan segmen, satu
kelas pendapatan lain yang luar biasa — arahannya adalah untuk menyediakannya
melalui **penandaan blok teks** ke dalam konsep blok teks yang sesuai.

Ini bertentangan dengan cara XBRL berfungsi dalam kebanyakan rejim syarikat
tersenarai, di mana elemen sambungan adalah rutin. Penyedia yang datang dari
dunia itu mencapai satu tag tersuai, tidak dapat menciptanya, dan menyimpulkan
alat itu rosak.

**Skop set-penuh adalah tetap.** Untuk pemfailan dalam XBRL penuh, penyata
minimum ialah penyata kedudukan kewangan, penyata untung atau rugi, penyata
aliran tunai, penyata perubahan dalam ekuiti, dan nota. Taksonomi membawa
persembahan alternatif untuk tiga daripadanya dan anda mesti memilih satu dan
kekal dengannya:

- Penyata kedudukan kewangan — semasa/bukan-semasa, **atau** susunan kecairan
- Penyata untung atau rugi — fungsi perbelanjaan, **atau** sifat perbelanjaan
- Penyata aliran tunai — langsung, **atau** tidak langsung

Bertukar antara tahun adalah sah tetapi kelihatan, dan ia akan menghasilkan
perbandingan yang tidak sejajar dalam data walaupun akaun itu dibaca secara
normal.

**Mata wang dan pembundaran bukanlah gaya.** Amaun kewangan mesti dinyatakan
dalam Ringgit Malaysia, dengan ukuran unit `iso4217:MYR`. Ini bukan sekadar
peraturan taksonomi — s.259(1)(c) Akta Syarikat 2016 mensyaratkan semua amaun
dalam penyata kewangan dan laporan yang dilodgekan dipetik dalam mata wang
Malaysia, dan mensyaratkan terjemahan yang disahkan di mana dokumen itu bukan
dalam Bahasa Malaysia atau Inggeris.

Pembundaran dikendalikan oleh atribut `decimals`, bukan dengan membundarkan
angka itu. Contoh kerja SSM: aset yang ditunjukkan sebagai 53,928 dalam satu set
akaun yang dinyatakan dalam ribuan ditanda sebagai **53928000 dengan decimals
ditetapkan kepada -3**. Penyedia yang menaip 53928 telah mengurangkan aset
sebanyak tiga orde magnitud, dan tiada peraturan pengesahan akan menangkapnya,
kerana 53,928 ialah nombor yang sah sepenuhnya.

## Pengesahan: lima keluarga peraturan, bukan penyemak ejaan

Pengesahan mTool didorong oleh linkbase formula taksonomi. SSM memodelkan
peraturan sebagai penegasan (assertion) di mana "benar" bermaksud lulus.
Memahami keluarga-keluarga ini memberitahu anda jenis ralat yang anda cari.

**Elemen mandatori.** Konsep tertentu mesti hadir. Satu penegasan berasingan
wujud untuk setiap satu, tepatnya supaya mesej kegagalan menamakan elemen yang
hilang. Contoh daripada dokumentasi SSM: "Assets" patut dilaporkan.

**Elemen mandatori terbitan.** Diperlukan hanya dalam keadaan tertentu,
dimodelkan dengan prasyarat. Contoh SSM: apabila pemfail memilih status syarikat
sebagai "Public company", maka pendedahan status audit penyata kewangan mesti
"Audited". Salahkan maklumat pemfailan di bahagian atas templat dan anda akan
mencetuskan keperluan hiliran yang tidak anda jangkakan.

**Pengagregatan dimensi.** Ahli sesuatu paksi mesti berjumlah kepada induk.
Jumlah ekuiti bersamaan kepentingan bukan kawalan campur komponen ekuiti lain
campur ekuiti yang boleh dikaitkan kepada pemilik induk. Di sinilah satu set
akaun yang dihimpunkan merentasi beberapa hamparan dan tidak pernah dipadu-silang
akhirnya tertangkap.

**Nilai positif dan negatif.** Pendirian SSM lebih bernuansa daripada
"perbelanjaan adalah negatif". **Tiada elemen yang mesti sentiasa disimpan
negatif** — item berwajaran negatif seperti perbelanjaan disimpan sebagai nombor
positif dalam kebanyakan kes. Sebaliknya, linkbase formula menguatkuasakan satu
senarai elemen yang mesti sentiasa **positif**.

**Data silang penyata dan berkorelasi.** Nilai yang muncul dalam lebih daripada
satu penyata mesti bersetuju, dan nilai yang berkait secara logik disemak antara
satu sama lain.

Tambahkan kepada itu pengesahan berstruktur — kesempurnaan-bentuk XBRL,
pengesahan dimensi, penyenaraian boleh-dilanjut, pengesahan jadual dan formula —
yang menyemak instans terhadap SSMxT_2022v1.0 itu sendiri.

## Pembuat, pelodge dan langkah kelulusan

mPortal berasaskan peranan, dan peranan-peranan itu tidak boleh ditukar ganti.

**Pembuat** menyediakan dokumen instans dan memuat naiknya. Pembuat tidak
memerlukan tandatangan digital.

**Pelodge** meluluskan dan menyerahkan. Seorang pelodge mesti memegang sijil
amalan di bawah s.241 Akta Syarikat 2016, didaftarkan melalui e-Secretary, dan
sijil digital yang sah. Kelulusan dilakukan melalui Administrator → Approval
Management → Filing Approval, di mana papan pemuka menunjukkan pemfailan yang
dimuat naik oleh pembuat dan menunggu kelulusan pelodge.

Perkaitan antara pembuat dan pelodge ditadbir dalam mPortal, dan ia boleh
ditetapkan tidak aktif. Satu kegagalan yang lazim dan sepenuhnya legap ialah
seorang pembuat memuat naik fail yang tidak pernah muncul dalam baris gilir
pelodge kerana perkaitan itu telah dinyahaktifkan dan tidak dikembalikan.
Seorang pembuat tunggal boleh dikaitkan dengan berbilang pelodge.

Seorang pengarah bukanlah peranan dalam sistem ini. Ini ialah titik struktur yang
sama yang mengawal permohonan lanjutan masa, yang SSM mensyaratkan datang
daripada setiausaha syarikat. Jika sijil amalan setiausaha anda telah luput, anda
tidak mempunyai saluran pemfailan — dan anda akan mengetahuinya pada hari anda
cuba menggunakannya.

## Gelung penolakan

Tiga perkara berbeza dipanggil "penolakan" dan ia berkelakuan berbeza.

**Kegagalan pengesahan mTool.** Fail tidak akan dijana. Anda masih luar talian,
tiada apa yang diserahkan, dan tiada jam yang terjejas. Ini ialah keputusan yang
baik.

**Pertikaian mPortal.** Pemfailan diterima untuk semakan dan kemudian dipertikai
semula. Pembuat melihat status pertikaian pada papan pemuka, membetulkan, dan
menyerahkan semula. Tarikh akhir berkanun tidak tersentuh oleh mana-mana ini —
pengedaran s.258 dan pelodgean s.259 berjalan pada tarikh mereka sendiri, dan
penalti Practice Directive 1/2017 terakru dari tarikh asal jatuh tempo, bukan
dari tarikh fail anda akhirnya lulus.

**Pembetulan pasca-pelodgean.** Setelah satu pemfailan berada dalam rekod, anda
tidak menyerahkannya semula — anda membetulkannya di bawah s.602 Akta Syarikat
2016. mPortal 2.0 membawa tiga jenis:

- **Pembetulan standard** — membetulkan data dalam AR atau FS yang telah
  diserahkan, sama ada melalui MBRS atau di kaunter
- **Pembetulan maklumat pemfailan** — membetulkan pengepala pemfailan itu
  sendiri, contohnya akhir tahun kewangan yang dilodgekan sebagai 30/12/23
  sebaliknya 31/12/23, atau satu penyerahan yang dilodgekan sebagai AR4 sedangkan
  ia sepatutnya AR1
- **Pemfailan nihil** — membetulkan satu rekod tanpa memuat naik sebarang AR atau
  FS gantian, digunakan untuk penyerahan berganda atau perintah mahkamah tanpa
  gantian

Terdapat juga satu laluan **pemfailan perintah mahkamah** untuk syarikat yang
berstatus dibubarkan.

Di bawah MBRS 1.0, pembetulan bermaksud satu permohonan kaunter sebelum memfail
semula. MBRS 2.0 membawa keseluruhan proses itu ke dalam portal. Itu ialah satu
penambahbaikan yang tulen, dan ia juga sebab mengapa titik masukan pembetulan
wujud dalam mTool sama sekali.

## Satu urutan kerja

1. **Tetapkan tarikh sebelum anda membuka alat.** Akhir tahun kewangan, tarikh
   pengedaran, tarikh akhir pelodgean. Jam pelodgean di bawah s.259(1)(a) bermula
   pada pengedaran, bukan pada akhir tahun.
2. **Sahkan binaan mTool dan versi taksonomi** pada halaman MBRS SSM. SSM
   mengemas kini ini tanpa pengumuman berasingan.
3. **Pilih titik masukan secara sengaja** — jenis syarikat, Akta, piawaian
   perakaunan. Jika anda memerlukan KFI atau FS-FC, kelulusan EA2 atau EA3 mesti
   sudah wujud.
4. **Padu-silangkan akaun sebelum menanda.** Setiap ketidakkonsistenan dalaman
   yang dahulunya disembunyikan oleh PDF kini ialah satu kegagalan pengesahan yang
   menyekat.
5. **Petakan sekali dan rekodkan pemetaan itu.** Pertimbangan yang anda buat
   tahun ini patut diulang tahun hadapan, atau perbandingan anda tidak akan boleh
   dibandingkan dalam data walaupun ia boleh dibandingkan dalam akaun.
6. **Tandakan penyata bukan-kewangan juga** — laporan pengarah, penyata oleh
   pengarah, laporan juruaudit. Ini ialah konsep, bukan lampiran.
7. **Sahkan dan betulkan di dalam mTool.** mPortal bukanlah perkhidmatan
   pengesahan.
8. **Semak sijil amalan dan sijil digital pelodge** sebelum minggu tarikh akhir,
   bukan semasa minggu itu.
9. **Muat naik, halakan untuk kelulusan pelodge, bayar, simpan akuan
   penerimaan.** Akuan penerimaan ialah bukti pematuhan, bukan fail zip.
10. **Jika fail tidak akan sedia, mohon lanjutan sebelum tempoh luput** — EA5A
    untuk pengedaran, EA5B untuk pelodgean, EA7 untuk penyata tahunan.

## Kesilapan lazim

- **Menaip angka yang dibundarkan sebaliknya menggunakan atribut `decimals`.**
  53,928 dalam satu set akaun yang dinyatakan dalam ribuan ialah 53928000 dengan
  decimals -3. Menaip 53928 melepasi setiap peraturan pengesahan dan adalah salah
  dengan faktor seribu.
- **Cuba mencipta elemen tersuai.** Sambungan syarikat kepada SSMxT_2022v1.0
  tidak dibenarkan. Gunakan blok teks.
- **Memfailkan KFI tanpa kelulusan EA2**, atau FS-FC tanpa pengecualian EA3.
  Kedua-duanya memerlukan pengecualian yang diberikan terlebih dahulu.
- **Menganggap satu lanjutan meliputi kedua-dua jam.** EA5A melanjutkan
  pengedaran, EA5B melanjutkan pelodgean, dan s.258 dan s.259 adalah berjujukan.
- **Memuat naik zip mTool 1.0 ke mPortal 2.0.** Buka ia dalam alat semasa dan
  jana semula.
- **Menggunakan format nombor pendaftaran syarikat lama.** Format baharu adalah
  mandatori dalam MBRS 2.0 kecuali untuk pra-isi data penyata tahunan.
- **Perkaitan pembuat–pelodge yang dinyahaktifkan**, jadi pemfailan yang dimuat
  naik tidak pernah sampai ke baris gilir kelulusan pelodge dan tiada siapa
  perasan sehingga tarikh akhir.
- **Menganggap satu pertikaian sebagai jam yang berhenti.** Ia tidak. Penalti
  berjalan dari tarikh berkanun.
- **Menukar asas persembahan antara tahun** — susunan kecairan satu tahun,
  semasa/bukan-semasa yang berikutnya — dan menghasilkan perbandingan yang tidak
  sejajar dalam data.
- **Membiarkan laporan pengarah tidak ditanda dalam prosa draf.** Ia dipetakan
  kepada 24 konsep yang ditakrifkan dan tajuk-tajuk Jadual Kelima; merangkanya
  begitu dari awal membuang satu kelas kerja semula sepenuhnya.

## Apa yang seterusnya

Sebelum akhir tahun anda yang berikutnya, lakukan satu perkara: tuliskan
pemetaan itu. Setiap akaun dalam imbangan duga anda, konsep SSMxT yang ia ditanda
kepadanya, dan sebab di mana pilihan itu tidak jelas. Dokumen itu bernilai lebih
daripada fail XBRL itu sendiri, kerana fail itu boleh dibuang dan pemetaan itulah
yang anda bina semula dari awal setiap tahun jika anda tidak menyimpannya.

Kemudian baca halaman [ralat penandaan](/ms/accounting/mbrs-tagging-errors), yang
mengambil keluarga kegagalan di atas dan menyelesaikan setiap satunya sebenarnya
kelihatan dalam satu set akaun sebenar.
