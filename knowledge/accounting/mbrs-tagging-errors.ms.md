---
topicId: MY-ACC-0003
title: "SSMxT Tagging Errors: Why MBRS Filings Fail Validation"
seoTitle: "Ralat Penandaan MBRS: Kegagalan Pengesahan SSMxT"
slug: "mbrs-tagging-errors"
category: "accounting"
subcategory: ["financial-statements"]
summary: "Kesilapan penandaan yang menghalang penjanaan fail MBRS atau menyebabkannya dipertanyakan semula — pemilihan elemen yang salah, ralat skala dan tanda, penandaan blok berbanding penandaan terperinci, serta nota yang tiada tempat dalam taksonomi."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "Kebanyakan kegagalan pengesahan MBRS tergolong dalam lima kumpulan: elemen mandatori yang tiada, elemen mandatori terbitan yang dicetuskan oleh pilihan dalam maklumat pemfailan, agregat dimensi yang tidak menjumlahkan kepada induknya, pelanggaran peraturan tanda, atau percanggahan merentas penyata. Ralat yang tidak dapat dikesan oleh pengesahan adalah lebih teruk — pemilihan elemen yang salah dan skala yang salah kedua-duanya menghasilkan fail yang sah dari segi teknikal tetapi membawa angka yang salah."
keyTakeaways:
  - "Ralat skala adalah yang paling berbahaya: angka yang dimasukkan dalam ribuan lulus semua peraturan pengesahan tetapi menyalahnyatakan akaun sebanyak seribu kali ganda"
  - "Tiada elemen SSMxT yang mesti sentiasa negatif — perbelanjaan biasanya disimpan sebagai nombor positif"
  - "Pengesahan berjalan atas asas pengesahan (assertion) di mana benar bermaksud lulus, jadi mesej menamakan peraturan itu, bukan penyelesaiannya"
  - "Sambungan (extension) syarikat adalah dilarang, jadi nota yang tidak boleh dipetakan dimasukkan ke dalam blok teks, bukan ke dalam konsep yang direka-reka"
  - "Maklumat pemfailan di bahagian atas templat menentukan peraturan mandatori terbitan di bahagian bawah — status syarikat yang salah akan memberi kesan berjujukan"
  - "Asas persembahan adalah pilihan yang dibuat sekali sahaja: susunan kecairan berbanding semasa/bukan semasa, fungsi berbanding sifat perbelanjaan"
appliesTo: "Penyedia yang menghasilkan dokumen instance XBRL SSM dalam mTool, dan pemeriksa yang mengesahkan pemfailan sebelum lodger menghantarnya."

faq:
  - q: "Mengapa mTool menyatakan sesuatu elemen adalah mandatori sedangkan akaun saya tiada baris tersebut?"
    a: "SSMxT memodelkan elemen mandatori sebagai pengesahan kewujudan (existence assertion), dengan pengesahan berasingan bagi setiap konsep supaya mesej kegagalan dapat menamakannya. Sesetengahnya adalah mandatori tanpa syarat — contoh yang diberikan SSM sendiri ialah Assets mesti dilaporkan. Yang lain adalah mandatori terbitan, diperlukan hanya kerana sesuatu yang anda pilih di tempat lain. Jika baris itu memang tidak wujud dalam akaun anda, semak sama ada satu pilihan dalam maklumat pemfailan telah mencetuskan keperluan tersebut sebelum anda menganggap alat itu yang silap."
  - q: "Adakah perbelanjaan perlu ditanda sebagai nombor negatif?"
    a: "Biasanya tidak. Dokumen seni bina SSMxT menyatakan tiada elemen yang perlu sentiasa disimpan sebagai nilai negatif, kerana elemen berpemberat negatif seperti perbelanjaan disimpan sebagai nombor positif dalam kebanyakan kes. Apa yang benar-benar dikuatkuasakan oleh formula linkbase ialah senarai elemen yang mesti sentiasa positif. Oleh itu, ralat tanda dalam pemfailan SSMxT lebih kerap berlaku akibat penggunaan tanda tolak yang berlebihan berbanding kekurangannya."
  - q: "Bagaimana saya menanda nota yang tiada konsep dalam taksonomi?"
    a: "Ke dalam blok teks. Sambungan syarikat kepada SSMxT_2022v1.0 tidak dibenarkan, jadi anda tidak boleh mencipta elemen baharu. Pendekatan yang dinyatakan oleh SSM ialah penyedia menyediakan tahap perincian yang diperlukan dengan menanda maklumat tersebut sebagai blok teks menggunakan konsep blok teks yang sesuai. Maklumat itu tetap dilodej, cuma ia tidak boleh dibaca mesin secara berasingan."
  - q: "Apakah perbezaan antara penandaan blok dan penandaan terperinci?"
    a: "Penandaan terperinci memberikan setiap angka konsepnya sendiri, jadi nombor itu boleh dibaca mesin secara berasingan dan tertakluk kepada peraturan pengesahan. Penandaan blok pula merakam keseluruhan nota sebagai satu blok teks terhadap satu konsep. Penandaan terperinci diperlukan di mana-mana taksonomi memodelkan konsep tersebut; penandaan blok adalah jalan alternatif bagi perincian yang tidak dibawa oleh taksonomi. Memblokkan sesuatu yang dimodelkan oleh taksonomi adalah kegagalan kualiti walaupun ia tidak menyebabkan kegagalan pengesahan."
  - q: "Adakah ralat pengesahan bermaksud SSM telah menolak pemfailan saya?"
    a: "Tidak. Pengesahan mTool berlaku secara luar talian sebelum apa-apa dihantar, dan fail itu semata-mata tidak akan dijana. Penolakan atau pertanyaan adalah peristiwa berasingan yang berlaku dalam mPortal selepas muat naik. Tiada satu pun daripadanya menangguhkan tarikh akhir edaran s.258 atau tarikh akhir pemfailan s.259."

verificationNeeded:
  - "SSM tidak menerbitkan senarai kod sebab penolakan MBRS yang disatukan — kumpulan ralat di sini diterbitkan daripada kategori formula linkbase dalam dokumen seni bina SSMxT_2022, bukan daripada daftar penolakan yang diterbitkan"
  - "Sahkan gelagat pengesahan bagi titik masuk (entry point) tertentu berdasarkan manual pengguna mTool 2.2 untuk titik masuk tersebut sebelum bergantung kepada mana-mana peraturan yang diterangkan secara umum"

lang: "ms"
masterLanguage: "en"
translationStatus: "in-sync"
sourceContentHash: "4cbf1a047bbd3c22"

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
  - title: "MBRS 2.0 SSM Taxonomy 2022 (SSMxT_2022) Architecture Document"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/SSMxT2022_Architecture_Document.pdf"
    publisher: "SSM"
  - title: "Malaysian Business Reporting System (MBRS) — Frequently Asked Questions, version 2.4"
    url: "https://www.ssm.com.my/Pages/Register_Business_Company_LLP/Company/document/FAQs_Malaysian_Business_Reporting_System_MBRS.pdf"
    publisher: "SSM"
    date: "2024-10-01"
  - title: "MBRS Enhancement MBRS 2.0 — Overview"
    url: "https://www.ssm.com.my/Pages/Publication/PDF%20Files/AD%202024%20-%20Overview%20of%20MBRS%20v2.pdf"
    publisher: "SSM"
  - title: "Companies Act 2016 (Act 777), updated text as at 1 August 2022"
    url: "https://www.ssm.com.my/Pages/Legal_Framework/Document/Companies%20Act%202016_Akta%20777_BI%20(1.8.2022).pdf"
    publisher: "SSM"
  - title: "MBRS — Malaysian Business Reporting System"
    url: "https://www.ssm.com.my/Pages/Services/Other-Services/MBRS.aspx"
    publisher: "SSM"

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

Kegagalan yang membawa kos bukanlah yang menghalang fail daripada dijana. Ia
adalah yang dijana dengan bersih, dilodej dengan bersih, tetapi membawa angka
yang salah sebanyak seribu kali ganda.

Pengesahan SSMxT mahir dalam aritmetik tetapi buta terhadap makna. Ia akan
menolak penyata perubahan ekuiti yang tidak seimbang jumlahnya. Namun ia akan
menerima begitu sahaja jumlah aset RM53,928 bagi sebuah syarikat yang
sebenarnya mempunyai RM53.9 juta pada kunci kira-kira, kerana 53,928 adalah
nombor yang sah sepenuhnya.

Ketidaksimetrian itulah cara anda harus membaca setiap kumpulan ralat di
bawah: yang dapat dikesan oleh alat itu hanyalah menyusahkan, dan yang tidak
dapat dikesanlah yang perlu diberi perhatian semasa semakan.

## Dua ralat yang tidak dapat dikesan oleh pengesahan

### Skala

SSMxT mengendalikan pembundaran melalui atribut `decimals` dalam XBRL, bukan
dengan membundarkan nilai itu sendiri. Contoh kerja SSM sendiri: sebuah
syarikat yang akaunnya dinyatakan dalam ribuan dan asetnya tertera 53,928
menanda fakta itu sebagai **53928000 dengan `decimals` ditetapkan kepada -3**.

Penyedia yang menyalin terus angka bercetak daripada muka akaun akan menanda
53928. Tiada peraturan tercetus. Instance itu adalah XBRL yang sah. Akaun yang
dilodej menunjukkan syarikat itu bersaiz satu per seribu daripada saiz
sebenarnya — boleh dibaca mesin, kekal, dan boleh dilihat oleh sesiapa sahaja
yang menarik data itu.

Setiap pemfailan yang disediakan daripada satu set akaun yang dipersembahkan
dalam ribuan atau juta memerlukan semakan skala sebagai satu langkah semakan
berasingan, terpisah daripada pengesahan.

### Pemilihan elemen

Taksonomi ini membawa beribu-ribu konsep, beberapa daripadanya mungkin
kelihatan sesuai bagi mana-mana baki yang diberikan. Tiada apa-apa dalam mTool
yang memberitahu anda sama ada anda memilih yang kelihatan sesuai atau yang
betul.

Dua akibat berikutan daripada ini. Pertama, akaun yang ditanda tidak lagi
sepadan dengan apa yang difahami oleh pembaca PDF tersebut. Kedua — dan
inilah yang memberi kesan pada tahun kedua — keputusan pemetaan itu adalah
satu **preseden**. Tanda baki yang sama secara berbeza pada tahun berikutnya
dan angka perbandingan anda akan menyimpang dalam data walaupun akaun yang
dicetak adalah konsisten.

Rekodkan pemetaan itu. Bukan failnya, tetapi pemetaannya: akaun, konsep, dan
sebabnya di mana pilihan itu merupakan pertimbangan profesional.

## Lima kumpulan kegagalan pengesahan

SSM membina peraturan ini ke dalam formula linkbase taksonomi, menggunakan
pengesahan kewujudan (existence assertion) dan pengesahan nilai (value
assertion), dimodelkan supaya **benar bermaksud peraturan itu lulus**.

**Elemen mandatori.** Konsep yang mesti hadir, satu pengesahan bagi setiap
konsep supaya mesej kegagalan menamakannya. Contoh yang didokumenkan oleh
SSM: "Assets" perlu dilaporkan.

**Elemen mandatori terbitan.** Diperlukan hanya di bawah syarat tertentu,
dimodelkan dengan satu prasyarat (precondition) berserta satu pengesahan
nilai. Contoh SSM adalah tepat dan patut dihafal: *apabila pemfail memilih
status syarikat sebagai "Public company", maka pendedahan status audit
penyata kewangan hendaklah "Audited".*

Inilah kumpulan yang menghasilkan permintaan sokongan yang paling
mengelirukan, kerana ralat itu muncul dalam penyata kewangan sedangkan
puncanya ialah satu dropdown dalam blok maklumat pemfailan. Sebelum
mempertikaikan ralat mandatori terbitan, baca semula bahagian header.

**Agregat dimensi.** Ahli sesuatu axis mesti menjumlahkan kepada induknya di
mana penyedia menstrukturkannya dalam hierarki seperti penjumlahan. Contoh
SSM: jumlah ekuiti bersamaan kepentingan bukan kawalan tambah komponen ekuiti
lain tambah ekuiti boleh diagihkan kepada pemilik induk.

**Nilai positif dan negatif.** Di sinilah gerak hati yang dibawa oleh
kebanyakan penyedia adalah silap. Dokumen seni bina ini jelas menyatakan
*tiada elemen yang perlu sentiasa disimpan sebagai nilai negatif*, kerana item
berpemberat negatif seperti kos jualan disimpan sebagai nombor positif dalam
kebanyakan kes. Apa yang sebenarnya dibawa oleh formula linkbase ialah senarai
elemen yang mesti **sentiasa positif** — contoh SSM ialah jumlah keseluruhan
hutang dalam MYR hendaklah bernilai positif.

Jadi ralat tanda yang biasa dalam pemfailan SSMxT bukanlah tanda tolak yang
tertinggal. Sebaliknya, ia adalah penyedia yang dengan niat baik menambah satu
tanda tolak.

**Data merentas penyata dan berkorelasi.** Fakta yang sama yang muncul dalam
lebih daripada satu penyata mesti selaras, dan fakta-fakta yang berkait
secara logik disemak antara satu sama lain. Angka keuntungan dalam penyata
untung rugi yang tidak selaras dengan pergerakan pembukaan-kepada-penutupan
dalam penyata perubahan ekuiti dahulunya tidak kelihatan dalam PDF. Kini ia
menghalang fail itu daripada dijana.

Di bawah kelima-lima kumpulan ini terletak semakan struktur — pengesahan
XBRL, dimensi, formula, jadual, extensible enumeration dan iXBRL — yang
mengesahkan instance itu terbentuk dengan betul berbanding SSMxT_2022v1.0
itu sendiri.

## Penandaan blok berbanding penandaan terperinci

Penandaan terperinci memberikan setiap angka konsepnya sendiri: boleh dibaca
mesin secara berasingan, disahkan secara berasingan, boleh dibandingkan
secara berasingan merentas tahun. Penandaan blok pula merakam keseluruhan
nota sebagai teks terhadap satu konsep blok teks.

Peraturan yang menentukan penandaan mana yang perlu digunakan bukanlah
keutamaan peribadi. **Sambungan syarikat kepada SSMxT_2022v1.0 tidak
dibenarkan.** Di mana taksonomi membawa sesuatu konsep, anda menanda
kepadanya. Di mana piawaian perakaunan memerlukan perincian yang tidak
dimodelkan oleh taksonomi — pecahan segmen menjadi contoh SSM sendiri bagi
perincian khusus entiti — arahannya ialah menyediakannya melalui penandaan
blok teks ke dalam konsep blok teks yang sesuai.

Mod kegagalan di sini ialah pemblokan berlebihan: seorang penyedia yang
tertekan dengan tarikh akhir memblokkan keseluruhan nota yang sebenarnya
dimodelkan oleh taksonomi konsep demi konsep. Ia dijana, ia dilodej, tetapi
ia mengosongkan isi kandungan pemfailan itu. Tiada apa-apa dalam saluran paip
data (data pipeline) yang dibina oleh SSM dapat memanfaatkan nota yang
disimpan sebagai perenggan.

Di mana sesuatu instance disediakan dalam iXBRL, kandungan boleh dibaca
manusia yang tidak ditanda boleh wujud dalam dokumen bersebelahan dengan
fakta yang ditanda. Ini mengurangkan tekanan untuk memaksa segala-galanya ke
dalam satu tag, tetapi ia tidak memberi lesen untuk memblokkan apa yang
sepatutnya diperincikan.

## Nota yang tidak dapat dipetakan

Tiga situasi yang kerap berulang.

**Nota yang tiada konsep dalam taksonomi.** Blok teks. Inilah jawapan yang
direka bentuk, bukan jalan pintas sementara.

**Nota yang dimodelkan oleh taksonomi di bawah nama yang berbeza.** Lebih
lazim berlaku berbanding jangkaan penyedia, kerana SSMxT mewarisi label IFRS
Taxonomy 2022 sedangkan akaun Malaysia sering membawa istilah dalaman
syarikat sendiri. Gunakan pelayar SSMxT terbina-dalam dalam mTool untuk
mencari konsep tersebut, bukan label yang biasa anda gunakan.

**Nota yang tergolong dalam asas persembahan yang tidak anda pilih.**
Taksonomi ini membawa alternatif — semasa/bukan semasa berbanding susunan
kecairan bagi penyata kedudukan kewangan, fungsi berbanding sifat
perbelanjaan bagi untung rugi, langsung berbanding tidak langsung bagi aliran
tunai. Konsep yang tergolong dalam asas yang tidak anda pilih tidak akan
tersedia. Penyedia sering menganggap ini sebagai elemen yang hilang.
Sebenarnya ia adalah pilihan persembahan yang dibuat dua langkah sebelumnya.

## Mata wang, dan peraturan statutori di sebaliknya

Fakta kewangan mesti membawa `iso4217:MYR`. Penyedia bagi anak syarikat milik
asing yang melapor kepada kumpulan dalam mata wang lain kadangkala menganggap
mata wang persembahan itu turut berpindah bersama akaun. Ia tidak berbuat
demikian.

Ini bukan sekadar kekangan taksonomi. Seksyen 259(1)(c) Akta Syarikat 2016
(Companies Act 2016) menghendaki semua jumlah yang ditunjukkan dalam penyata
kewangan dan laporan yang dilodej dengan Pendaftar disebut dalam mata wang
Malaysia, dan dokumen dalam mana-mana bahasa selain Bahasa Malaysia atau
Bahasa Inggeris disertakan dengan terjemahan yang disahkan.

## Kesilapan lazim

- **Memasukkan angka bercetak** daripada akaun yang dinyatakan dalam ribuan,
  bukannya jumlah penuh dengan `decimals` ditetapkan kepada -3. Lulus
  pengesahan, tetapi menyalahnyatakan akaun.
- **Menambah tanda tolak pada perbelanjaan.** SSMxT menyimpan item
  berpemberat negatif sebagai positif dalam kebanyakan kes.
- **Mempertikaikan ralat mandatori terbitan** tanpa menyemak header maklumat
  pemfailan yang mencetuskannya.
- **Memblokkan nota yang dimodelkan secara terperinci oleh taksonomi** kerana
  tarikh akhir lebih hampir berbanding kefahaman.
- **Mencari dalam taksonomi menggunakan nama akaun sendiri** dan bukannya
  label IFRS, lalu membuat kesimpulan bahawa konsep itu tidak wujud.
- **Menukar asas persembahan dari tahun ke tahun**, yang secara senyap
  merosakkan angka perbandingan dalam data.
- **Menganggap kegagalan pengesahan sebagai penolakan.** Pengesahan berlaku
  secara luar talian dalam mTool; penolakan dan pertanyaan berlaku dalam
  mPortal selepas muat naik. Tiada satu pun menghentikan jangka masa
  statutori.
- **Menanda mata wang persembahan kumpulan** dan bukannya Ringgit Malaysia.
- **Menganggap pemetaan itu boleh dibuang.** Dokumen instance itulah yang
  boleh dibuang. Pemetaan itulah asetnya.

## Langkah seterusnya

Bina satu langkah semakan dua lajur ke dalam proses penutupan anda: setiap
fakta yang ditanda dibandingkan dengan muka akaun, disemak dari segi skala,
dan setiap pemetaan yang melibatkan pertimbangan profesional direkodkan
berserta sebabnya. Kedua-duanya bukan peraturan pengesahan, dan itulah
sebabnya kedua-duanya tidak akan dikesan untuk anda.

Jika anda masih memilih titik masuk atau sedang memahami peranan maker dan
lodger, mulakan dengan
[panduan penyediaan MBRS 2.0](/accounting/mbrs-2-filing-guide).
