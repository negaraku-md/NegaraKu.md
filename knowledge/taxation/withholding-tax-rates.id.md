---
topicId: MY-TAX-0025
title: "Tarif Pajak Pemotongan di Malaysia Menurut Jenis Pembayaran"
seoTitle: "Tarif Pajak Pemotongan Malaysia — Pasal, Tarif, Borang"
slug: "withholding-tax-rates"
category: "taxation"
subcategory: ["withholding-tax"]
summary: "Semua tarif pajak pemotongan Malaysia dalam satu tabel — jenis pembayaran, pasal ITA, tarif, borang dan tanggal batas akhir penyetoran."

tier: "4"
mode: "practical"
contentType: "data"
sensitivity: "none"

answer: "Tarif pajak pemotongan Malaysia ditetapkan oleh Lampiran 1 Income Tax Act 1967, bukan oleh pasal pengenaan pajak. Bunga kepada bukan residen adalah 15 persen, royalti 10 persen, kelas penghasilan khusus di bawah s.4A 10 persen, penghasilan paragraf 4(f) 10 persen, penghibur publik bukan residen 15 persen, dan kontraktor bukan residen 10 persen ditambah 3 persen. Hampir semuanya harus disetor dalam satu bulan setelah membayar atau mengkredit penerima pembayaran."
keyTakeaways:
  - "Tarif terdapat dalam Lampiran 1, kewajiban terdapat dalam pasal pengenaan pajak — kutip keduanya"
  - "Satu bulan setelah membayar atau mengkredit adalah aturan penyetoran standar, dan pengkreditan dapat terjadi sebelum pembayaran"
  - "Pasal 107D adalah pengecualian — pembayaran perlu dilunasi menjelang akhir bulan kalender berikutnya, bukan satu bulan kemudian"
  - "Pasal 107A membawa dua tarif bagi pembayaran yang sama: 10 persen untuk kontraktor, 3 persen untuk pekerjanya"
  - "Tarif perjanjian penghindaran pajak berganda hanya tersedia jika Anda memiliki sertifikat residensi dari otoritas pajak penerima pembayaran"
  - "Kegagalan memotong pajak memicu kenaikan 10 persen dan penolakan pengeluaran yang terkait"
appliesTo: "Bisnis Malaysia mana pun, badan pemerintah atau orang residen yang membayar bukan residen, dan perusahaan mana pun yang membayar agen, pedagang atau distributor residen."

faq:
  - q: "Apakah tarif pajak pemotongan standar di Malaysia?"
    a: "Tidak ada satu tarif standar tunggal. Tarif bergantung pada kelas penghasilan di bawah Lampiran 1 Income Tax Act 1967 — 15 persen untuk bunga, 10 persen untuk royalti, 10 persen untuk kelas penghasilan khusus di bawah s.4A, dan 10 persen ditambah 3 persen untuk pembayaran kontrak bukan residen. Tarif perjanjian penghindaran pajak berganda dapat mengurangi sebagian darinya."
  - q: "Kapan pajak pemotongan harus dibayar kepada LHDN?"
    a: "Dalam satu bulan setelah membayar atau mengkredit penerima pembayaran, bagi ss.107A, 109, 109A, 109B dan 109F. Pasal 107D berbeda — ia perlu dilunasi paling lambat akhir bulan kalender setelah bulan pembayaran. Jika tanggal batas akhir jatuh pada akhir pekan atau hari libur umum, hari kerja berikutnya berlaku."
  - q: "Apakah pajak pemotongan merupakan pajak final?"
    a: "Bagi kebanyakan penghasilan bukan residen, ya. LHDN menganggap pajak pemotongan atas bunga, royalti, kelas penghasilan khusus, distribusi REIT dan penghasilan paragraf 4(f) sebagai pajak final, jadi bukan residen itu tidak memiliki kewajiban pengisian Malaysia selanjutnya atas penghasilan tersebut. Pasal 107A bukan pajak final — ia merupakan pembayaran di muka terhadap taksiran akhir kontraktor."
  - q: "Apakah saya masih perlu memotong pajak jika kontrak menyatakan biaya itu bersih dari pajak?"
    a: "Ya. Kewajiban itu terletak pada pembayar tanpa memandang apa yang dinyatakan dalam kontrak. Ketika pembayar menanggung pajak itu secara kontraktual, LHDN memastikan dalam Ruling Publik 10/2019 bahwa berlaku 5 Desember 2018, pajak s.109B dihitung atas jumlah bruto yang dibayar, tanpa penggrossan ulang (regrossing) — tetapi pajak yang ditanggung oleh pembayar tidak boleh dipotong dalam pembukuannya sendiri."

verificationNeeded:
  - "Form CP107D dan lampirannya CP107D(1) bagi potongan 2 persen s.107D tidak dapat diperoleh dari jalur hasil.gov.my mana pun secara langsung — tarif, ambang dan aturan penyetoran di bawah berasal dari Undang-Undang itu sendiri, bukan dari borang tersebut"
  - "Tarif perjanjian bagi negara tertentu tidak dihasilkan ulang di sini — periksa setiap perjanjian di laman DTA LHDN, karena tarif yang dikurangi berbeda menurut pasal dan menurut negara"

obligations:
  - what: "Setor pajak pemotongan yang dipotong dari pembayaran kepada bukan residen"
    trigger: "event"
    direction: "after"
    event: "payment"
    withinDays: 30
    due: "dalam satu bulan setelah membayar atau mengkredit penerima pembayaran bukan residen"
    authority: "LHDN"
    statute: "Income Tax Act 1967, ss.107A(1), 109(1), 109B(1), 109F(1)"
    consequence: "Jumlah yang tidak dibayar dinaikkan 10 persen dan pengeluaran ditolak di bawah s.39(1)(f), (i) atau (j)"

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
  - title: "Pajak Pemotongan (Withholding Tax)"
    url: "https://www.hasil.gov.my/perundangan/cukai-pegangan/"
    publisher: "Badan Pendapatan Dalam Negeri Malaysia (LHDN)"
  - title: "Income Tax Act 1967 (Act 53), cetak ulang per 21 Mei 2024 — Lampiran 1 dan pasal 107A, 107D, 109, 109A, 109B, 109F (Income Tax Act 1967 (Act 53), reprint as at 21 May 2024 — Schedule 1 and ss.107A, 107D, 109, 109A, 109B, 109F)"
    url: "https://www.hasil.gov.my/wp-content/uploads/20240521-akta-cukai-pendapatan-1967-akta-53.pdf"
    publisher: "Badan Pendapatan Dalam Negeri Malaysia (LHDN)"
    date: "2024-05-21"
  - title: "Public Ruling No. 10/2019 — Pajak Pemotongan atas Kelas Penghasilan Khusus (Public Ruling No. 10/2019 — Withholding Tax on Special Classes of Income)"
    url: "https://www.hasil.gov.my/wp-content/uploads/PR_10_2019.pdf"
    publisher: "Badan Pendapatan Dalam Negeri Malaysia (LHDN)"
    date: "2019-12-10"
  - title: "Perjanjian Penghindaran Pajak Berganda (DTA/DTAA) (Double Taxation Avoidance Agreement (DTA/DTAA))"
    url: "https://www.hasil.gov.my/antarabangsa/perjanjian-pengelakan-pencukaian-dua-kali-pppdk/"
    publisher: "Badan Pendapatan Dalam Negeri Malaysia (LHDN)"

entity: "Malaysian withholding tax rates"
relations:
  - { rel: "administered-by", to: "lhdn" }
  - { rel: "governs", to: "income-tax-act-1967" }
  - { rel: "explained-in", to: "withholding-tax-special-classes" }
related: ["withholding-tax-special-classes", "withholding-tax-digital-services", "withholding-tax-non-compliance", "cp37-forms"]
keywords: ["kadar cukai pegangan Malaysia", "kadar seksyen 109B", "cukai pegangan seksyen 107A", "CP37D", "jadual cukai pegangan Malaysia", "cukai pegangan LHDN"]
---

Tarif yang Anda perlukan hampir tidak pernah terdapat dalam pasal yang Anda baca.
Pasal 109B mengarahkan Anda memotong pajak "pada tarif yang berlaku bagi
pembayaran tersebut" dan berhenti di situ — 10 persen itu terdapat dalam Bagian V
Lampiran 1. Pasal 109 melakukan hal yang sama. Biasakan diri mengutip keduanya,
karena argumen tentang tarif sebenarnya adalah argumen tentang Lampiran 1.

## Tabel lengkap

| Jenis pembayaran | Pasal ITA | Tarif | Borang | Setor paling lambat |
| --- | --- | --- | --- | --- |
| Pembayaran kontrak kepada kontraktor bukan residen | s.107A, Sch 1 | 10% (kontraktor) + 3% (pekerjanya) | CP37A | 1 bulan setelah membayar atau mengkredit |
| Pembayaran kepada agen, pedagang atau distributor residen | s.107D, Sch 1 | 2% | CP107D | Akhir **bulan kalender berikutnya** |
| Bunga kepada bukan residen | s.109, Sch 1 Pt II item 1 | 15% | CP37 | 1 bulan setelah membayar atau mengkredit |
| Royalti kepada bukan residen | s.109, Sch 1 Pt II item 2 | 10% | CP37 | 1 bulan setelah membayar atau mengkredit |
| Bunga atau royalti, nilai kecil | s.109, Sch 1 Pt II | 15% / 10% | CP37S | Setengah tahunan, 30 Juni atau 31 Desember |
| Penghibur publik bukan residen | s.109A, Sch 1 Pt II item 3 | 15% | CP154 beserta perhitungan pajak LHDN | 1 bulan setelah membayar atau mengkredit |
| Kelas penghasilan khusus di bawah s.4A | s.109B, Sch 1 Pt V | 10% | CP37D | 1 bulan setelah membayar atau mengkredit |
| Kelas penghasilan khusus, nilai kecil | s.109B, Sch 1 Pt V | 10% | CP37DS | Setengah tahunan, 30 Juni atau 31 Desember |
| Bunga kepada individu residen, dibayar oleh bank atau institusi yang disetujui | s.109C, Sch 1 Pt VI | 5% | — | 1 bulan setelah membayar atau mengkredit |
| Distribusi REIT atau perwalian properti — perusahaan bukan residen | s.109D, Sch 1 Pt X | 24% | CP37E | 1 bulan setelah membayar atau mengkredit |
| Distribusi REIT atau perwalian properti — investor institusi asing | s.109D, Sch 1 Pt X | 10% | CP37E | 1 bulan setelah membayar atau mengkredit |
| Distribusi REIT atau perwalian properti — lainnya, bukan perusahaan residen | s.109D, Sch 1 Pt X | 10% | CP37E | 1 bulan setelah membayar atau mengkredit |
| Distribusi dana pasar uang ritel kepada pemegang unit bukan individu | s.109DA, Sch 1 Pt XIX | 24% | CP37E(NR) / CP37E(R) | 1 bulan setelah membayar atau mengkredit |
| Distribusi dana keluarga atau dana keluarga takaful — perusahaan bukan residen | s.109E, Sch 1 Pt XI | 25% | CP37E(T) | 1 bulan setelah membayar atau mengkredit |
| Distribusi dana keluarga atau dana keluarga takaful — lainnya, bukan perusahaan residen | s.109E, Sch 1 Pt XI | 8% | CP37E(T) | 1 bulan setelah membayar atau mengkredit |
| Penghasilan paragraf 4(f) kepada bukan residen | s.109F, Sch 1 Pt XIII | 10% | CP37F | 1 bulan setelah membayar atau mengkredit |
| Penarikan anuitas tertunda atau PRS sebelum usia 55 | s.109G, Sch 1 Pt XVI | 8% | CP37G | 1 bulan setelah membayar atau mengkredit |

## Tiga hal yang disembunyikan oleh tabel ini

**"Membayar atau mengkredit" bukan "membayar".** Ruling Publik 10/2019 paragraf
13.1 mendefinisikan pengkreditan sebagai lebih dari sekadar entri jurnal atau
akrual — jumlah itu harus tersedia bagi atau untuk manfaat penerima pembayaran.
Namun entri kontra yang mengimbangi apa yang terutang oleh bukan residen kepada
Anda tetap dihitung, dan jangka waktu dimulai pada tanggal kontra tersebut. Sebuah
perusahaan yang tidak pernah mengirim uang tunai masih bisa terlambat satu bulan.

**Pasal 107D memiliki jangka waktu yang berbeda.** Pasal 107D(1) mengharuskan
pembayaran dibuat "paling lambat akhir bulan kalender berikutnya", bukan satu bulan
setelahnya. Ia juga hanya berlaku ketika agen, pedagang atau distributor itu
menerima lebih dari RM100,000 dari pembayar dalam tahun dasar sebelumnya
(s.107D(2)), dan hanya ketika orang itu adalah individu residen (s.107D(6)).

**Tarif perjanjian penghindaran pajak berganda (treaty) bersyarat, bukan
otomatis.** LHDN mengharuskan pengesahan tertulis dari otoritas pajak negara
penerima pembayaran yang mengesahkan status residensi, disimpan untuk pemeriksaan
kepatuhan. Contoh 16 dalam Ruling Publik 10/2019 mengenakan tarif 5 persen kepada
pemasok jasa Hong Kong hanya setelah status residensi dipastikan. Tanpa sertifikat
tersebut, Anda memotong pajak pada tarif domestik.

## Kesalahan umum

- **Mengutip tarif tanpa Lampiran.** "Pasal 109B adalah 10 persen" hanyalah
  singkatan. 10 persen itu terdapat dalam Bagian V Lampiran 1, dan Bagian V itulah
  yang digantikan oleh perjanjian penghindaran pajak berganda.
- **Menganggap borang nilai kecil sebagai fasilitas pilihan.** CP37S dan CP37DS
  memiliki dua syarat kumulatif: pajak tidak boleh melebihi RM500 bagi setiap
  transaksi pembayaran, **dan** transaksi nilai kecil harus terjadi lebih dari
  sekali dalam periode enam bulan bersangkutan. Satu pembayaran RM400 saja dalam
  periode setengah tahun tidak memenuhi syarat untuk penangguhan.
- **Menganggap s.107A sebagai pajak final.** Ia bukan pajak final. Paragraf (a)
  diperhitungkan terhadap taksiran kontraktor itu sendiri; paragraf (b), yaitu 3
  persen itu, dikembalikan kepada kontraktor di bawah s.107A(3)(b) menurut diskresi
  Ketua Pengarah.
- **Memotong pajak atas jumlah bruto padahal sebagian pembayaran di luar lingkup.**
  Bagi penghasilan s.4A(i) dan (ii), hanya bagian yang dapat dikaitkan dengan jasa
  yang dilaksanakan di Malaysia yang dapat dikenakan pajak, dialokasikan secara
  adil dan wajar.

## Apa selanjutnya

Tarif itu bagian yang mudah. Dua pertanyaan yang menentukan kebanyakan kasus
nyata: apakah pembayaran itu "timbul dari Malaysia" sama sekali, dan apakah ia
adalah royalti di bawah s.109 atau kelas penghasilan khusus di bawah s.109B. Baca
[withholding-tax-special-classes](/id/taxation/withholding-tax-special-classes)
untuk pertanyaan pertama dan
[withholding-tax-digital-services](/id/taxation/withholding-tax-digital-services)
untuk pertanyaan kedua.
