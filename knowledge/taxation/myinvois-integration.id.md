---
topicId: MY-TAX-0008
title: "Integrasi MyInvois: Portal, API atau Middleware"
seoTitle: "Integrasi MyInvois: Portal vs API vs Middleware"
slug: "myinvois-integration"
category: "taxation"
subcategory: ["e-invoicing"]
summary: "Cara netral-vendor untuk memilih antara Portal MyInvois yang gratis, integrasi API langsung dan penyedia teknologi, berdasarkan volume transaksi dan apa yang telah dilakukan oleh ERP Anda."

tier: "2"
mode: "practical"
contentType: "guide"
sensitivity: "none"

answer: "LHDN menyediakan dua mekanisme pengiriman: Portal MyInvois yang gratis, diakses melalui MyTax, yang mendukung pemasukan formulir individu dan unggah massal lembar kerja Excel yang telah ditetapkan; dan API, yang dapat dicapai melalui integrasi ERP langsung, melalui penyedia layanan Peppol, atau melalui penyedia teknologi bukan-Peppol. Portal cocok untuk volume rendah; API cocok untuk volume tinggi dan memerlukan sertifikat digital serta pekerjaan sistem awal."
keyTakeaways:
  - "Hanya dua mekanisme resmi — Portal dan API. Semua yang lain adalah jalur menuju API"
  - "Portal gratis, memerlukan login MyTax, dan menawarkan unggah massal Excel"
  - "Jalur API adalah ERP langsung, penyedia layanan Peppol, atau penyedia teknologi bukan-Peppol"
  - "Pengiriman API memerlukan sertifikat digital dalam bentuk file .cer atau .pfx"
  - "Batas ketat: 100 dokumen dan 5MB setiap pengiriman, 300KB setiap dokumen"
  - "Perantara harus menggunakan Client ID dan Secret mereka sendiri dan hanya dapat melihat apa yang mereka kirim sendiri"
  - "Volume self-billed, bukan volume penjualan, yang biasanya memaksa keputusan ke arah API"
appliesTo: "Kepala keuangan dan tim IT yang memilih jalur MyInvois, serta siapa saja yang membandingkan penawaran harga dari vendor perangkat lunak e-Invois."

faq:
  - q: "Apakah Portal MyInvois benar-benar gratis, dan apakah ia mencukupi?"
    a: "Ya, ia disediakan oleh LHDN dan diakses melalui Portal MyTax tanpa biaya apa pun. Ia mendukung pembuatan individu melalui formulir dan unggah massal lembar kerja Excel yang telah ditetapkan. Apakah ia mencukupi bergantung pada jumlah dokumen dan berapa banyak dokumen yang memerlukan rincian khusus pembeli. Sebuah usaha dengan beberapa invois B2B dan satu e-Invois konsolidasi bulanan dapat terus beroperasi dengannya untuk waktu yang tidak terbatas."
  - q: "Apakah saya memerlukan penyedia layanan Peppol?"
    a: "Tidak. Peppol hanyalah satu dari tiga cara yang didaftarkan LHDN untuk sampai ke API, di samping integrasi ERP langsung dan penyedia teknologi bukan-Peppol. LHDN tidak mewajibkan jalur atau vendor tertentu mana pun. Peppol penting jika Anda juga memerlukan pertukaran dokumen lintas batas yang dapat saling beroperasi; ia bukan persyaratan MyInvois."
  - q: "Apa yang diperlukan oleh API tetapi tidak oleh Portal?"
    a: "Sertifikat digital — file .cer atau .pfx yang digunakan untuk menandatangani pengiriman, dengan tanda tangan yang telah di-hash (hashed) dibawa dalam badan pengiriman — serta dokumen yang dibangun mengikut struktur UBL 2.1 dalam XML atau JSON. LHDN menerbitkan panduan integrasi dan konfigurasi API serta titik akhir (endpoint) dalam MyInvois SDK."
  - q: "Jika saya menggunakan vendor, siapa yang bertanggung jawab jika e-Invois terlewat?"
    a: "Anda. Kewajiban untuk menerbitkan dan mengirim terletak pada wajib pajak di bawah s.82C Income Tax Act 1967, dan s.120(1)(d) menjadikan pelanggaran itu suatu tindak pidana. Menyerahkan pengiriman kepada pihak luar tidak memindahkan kewajiban itu. LHDN juga membatasi perantara pada e-Invois yang mereka kirim sendiri, sehingga pergantian penyedia akan meninggalkan riwayat di belakang."
  - q: "Bagaimana saya menentukan ukuran keputusan ini?"
    a: "Hitung dokumen, bukan peredaran. Tambahkan e-Invois transaksi, e-Invois konsolidasi, e-Invois self-billed, dan semua nota kredit, nota debit serta nota pengembalian. Kemudian periksa pengecualian — transaksi melebihi RM10,000 dan industri dalam Table 3.6 tidak dapat dikonsolidasikan, yang dapat mengubah satu dokumen bulanan menjadi ribuan."
  - q: "Dapatkah saya menggunakan Portal dan API pada saat yang sama?"
    a: "Ya. LHDN mengemukakan kedua mekanisme itu sebagai pilihan bagi setiap pengiriman, bukan pilihan permanen, dan banyak usaha menyalurkan penjualan bervolume tinggi melalui API sambil menangani dokumen self-billed yang jarang terjadi di Portal. Pelaporan dan dasbor dalam Portal mencakup keduanya."

verificationNeeded:
  - "Batas laju (rate limit) API numerik per-endpoint — FAQ SDK merujuk pada Integration Practices tanpa menerbitkan angka"
  - "Akreditasi, sertifikasi atau daftar vendor yang disetujui LHDN apa pun bagi penyedia teknologi — tidak ada yang ditemukan di hasil.gov.my atau SDK"
  - "Jumlah maksimum baris yang diterima dalam lembar kerja unggah massal MyInvois Portal — LHDN menyebut suatu jumlah tanpa menyatakannya"

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
  - title: "Pedoman e-Invois (Versi 4.7) — bagian 2.2 hingga 2.5 (e-Invoice Guideline (Version 4.7) — sections 2.2 to 2.5)"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Guideline.pdf"
    publisher: "Badan Pendapatan Dalam Negeri Malaysia (LHDN)"
    date: "2026-07-07"
  - title: "MyInvois SDK (MyInvois SDK)"
    url: "https://sdk.myinvois.hasil.gov.my/"
    publisher: "Badan Pendapatan Dalam Negeri Malaysia (LHDN)"
  - title: "MyInvois SDK — tanya jawab (MyInvois SDK — frequently asked questions)"
    url: "https://sdk.myinvois.hasil.gov.my/faq/"
    publisher: "Badan Pendapatan Dalam Negeri Malaysia (LHDN)"
  - title: "MyInvois SDK — respons galat standar (MyInvois SDK — standard error response)"
    url: "https://sdk.myinvois.hasil.gov.my/standard-error-response/"
    publisher: "Badan Pendapatan Dalam Negeri Malaysia (LHDN)"
  - title: "Pedoman Khusus e-Invois (Versi 4.8) (e-Invoice Specific Guideline (Version 4.8))"
    url: "https://www.hasil.gov.my/wp-content/uploads/IRBM-e-Invoice-Specific-Guideline.pdf"
    publisher: "Badan Pendapatan Dalam Negeri Malaysia (LHDN)"
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
menjual salah satu dari jawabannya. Jadi mulailah dari dua mekanisme saja yang
diakui oleh LHDN, dalam Table 2.1 Pedoman e-Invois: **Portal MyInvois** dan
**API**. Penyedia Peppol, penyedia teknologi bukan-Peppol dan middleware bukan
pilihan ketiga — ketiganya adalah cara untuk sampai ke API.

## Dua mekanisme

| | Portal MyInvois | API |
| --- | --- | --- |
| Biaya | Gratis, melalui login **MyTax** | Bangun atau lisensikan |
| Input | Formulir individu, atau **unggah massal lembar kerja Excel yang telah ditetapkan** | XML atau JSON mengikut **UBL 2.1** |
| Tanda tangan | Dikelola oleh Portal | **Sertifikat digital** Anda (.cer atau .pfx) |
| Kesesuaian menurut LHDN | Dapat diakses oleh semua wajib pajak; usaha yang koneksi API-nya tidak tersedia | Volume tinggi; memerlukan investasi awal dan perubahan sistem |
| Jalur | Satu | ERP langsung, penyedia **Peppol**, penyedia **bukan-Peppol** |

Keduanya menghasilkan hal yang sama: Nomor Pengenalan Unik IRBM, stempel waktu
validasi, dan kode QR pada representasi visual.

## Hitung ukurannya sebelum berbelanja

Pertanyaannya bukan peredaran Anda. Melainkan **berapa banyak dokumen yang harus
Anda kirim dalam sebulan**, dan jumlahnya biasanya lebih besar dari perkiraan
orang:

1. e-Invois transaksi kepada pembeli yang memintanya
2. e-Invois konsolidasi — satu atau lebih sebulan, setiap cabang jika Anda
   memisahkannya
3. **e-Invois self-billed** — komisi, pemasok luar negeri, tuan tanah individu,
   kebanyakan bunga, dividen, pengembalian modal
4. Nota kredit, nota debit dan nota pengembalian

Kemudian gunakan dua pengecualian yang meruntuhkan perkiraan naif. Setiap
**transaksi tunggal melebihi RM10,000** harus menjadi e-Invois transaksi, lintas
semua industri, sejak 1 Januari 2026. Dan sembilan aktivitas dalam Table 3.6
e-Invoice Specific Guideline tidak boleh sama sekali dikonsolidasikan — kendaraan
bermotor, tiket penerbangan, kontrak konstruksi, pembayaran agen dan distributor,
pembayaran taruhan, listrik, telekomunikasi.

Sebuah bengkel yang menjual tiga mobil sebulan memiliki beban kerja Portal yang
remeh. Seorang reseller telekomunikasi dengan 4,000 pelanggan pascabayar tidak,
dan tidak ada jumlah konsolidasi yang dapat membantunya.

**Volume self-billed biasanya menjadi kejutan.** Sebuah perusahaan dengan 40
invois penjualan sebulan dan 600 pembayaran komisi agen adalah usaha e-Invois
bervolume tinggi, apa pun yang dikatakan oleh buku besar penjualannya.

## Di mana Portal benar-benar tidak lagi memadai

- **Biaya pemasukan data.** Setiap dokumen transaksi memerlukan nama pembeli, TIN,
  nomor pendaftaran, alamat, nomor kontak dan nomor pendaftaran SST diketik atau
  diunggah melalui lembar kerja.
- **Jam 72 jam.** Periode pembatalan dan penolakan berjalan dari waktu validasi.
  Proses manual yang mengirim secara mingguan tidak dapat menggunakannya.
- **Pemusatan akhir bulan.** e-Invois konsolidasi wajib dikirim dalam **tujuh hari
  kalender** setelah akhir bulan, di atas segala yang lain.
- **Rekonsiliasi.** Portal memberi Anda akses XML, JSON, metadata, grid dan PDF —
  tetapi mencocokkan dokumen yang divalidasi kembali ke buku besar Anda dilakukan
  secara manual.

## Di mana API memakan biaya lebih dari lisensi

- **Sertifikat digital** harus diperoleh, dipasang dan dirotasi.
- **Batas pengiriman ketat:** 100 dokumen dan 5MB setiap pengiriman, 300KB setiap
  dokumen. Pengelompokan dan, jika perlu, pemadatan (minification) adalah masalah
  Anda sendiri.
- **Validasi dua tahap.** *Submitted* bukan *Valid*. Struktur, field inti dan kode
  diperiksa seketika; tanda tangan, wajib pajak, dokumen rujukan dan duplikat
  diperiksa di latar belakang. Integrasi apa pun yang menganggap pengakuan bergaya
  202 sebagai keberhasilan akan mengumpulkan dokumen tidak sah secara diam-diam.
- **Penanganan token.** Token login sah selama 60 menit dan seharusnya digunakan
  kembali, bukan dihasilkan bagi setiap permintaan. Batas laju mengembalikan 429
  dengan header `Retry-After`.
- **Data induk.** TIN pemasok dan pembeli, BRN 12-digit yang baru, kode MSIC dan
  nomor SST harus benar sebelum semua ini dapat berjalan.

## Memilih jalur ke API

| Jalur | Cocok untuk | Perhatikan |
| --- | --- | --- |
| **Integrasi ERP langsung** | ERP yang mapan dengan lokalisasi Malaysia yang terpelihara, atau kemampuan rekayasa internal | Pemeliharaan berkelanjutan apabila versi pedoman berubah — v4.7 dan v4.8 keduanya dikeluarkan pada 7 Juli 2026 |
| **Penyedia layanan Peppol** | Usaha yang juga menginginkan pertukaran dokumen yang dapat saling beroperasi dengan mitra niaga | Peppol bukan persyaratan MyInvois; jangan bayar untuknya seolah-olah ia adalah satu |
| **Penyedia teknologi bukan-Peppol / middleware** | Beberapa sistem sumber, kumpulan POS, atau ERP tanpa lokalisasi | Penjagaan data, syarat keluar, dan apakah mereka mengirim di bawah kredensial (credentials) mereka sendiri |

LHDN tidak mengakui, mengakreditasi atau menyetujui penyedia mana pun. Jika sebuah
vendor mengklaim status disetujui LHDN, minta untuk melihat buktinya.

## Persoalan perantara yang tidak ada yang tanyakan

SDK menyatakan bahwa perantara mengirim menggunakan **Client ID dan Client Secret
mereka sendiri**, dan hanya dapat mengakses e-Invois yang **mereka sendiri** kirim
— mereka tidak dapat mengambil kembali dokumen yang dikirim sendiri oleh wajib
pajak secara terpisah.

Dua konsekuensi yang layak ditulis ke dalam kontrak:

- **Mengganti penyedia tidak membawa riwayat pengiriman Anda bersamanya.**
  Rencanakan untuk periode dijalankan paralel (parallel-run) dan untuk arsip Anda
  sendiri.
- **Liabilitas tidak berpindah.** Section 82C Income Tax Act 1967 menempatkan
  kewajiban itu pada wajib pajak; s.120(1)(d) menjadikan pelanggaran sebagai suatu
  tindak pidana. Gangguan sistem vendor tetap menjadi ketidakpatuhan Anda.

Berkenaan gangguan sistem, LHDN menawarkan satu kelonggaran. Section 2.5.4 Pedoman
e-Invois menyatakan bahwa apabila Sistem MyInvois sendiri tidak berfungsi karena
pemeliharaan atau sebab teknis dan wajib pajak dapat membuktikan upaya
kepatuhannya, Ketua Pengarah akan menilai kasus itu secara terpisah dan mungkin
tidak mengambil tindakan apa pun. Ini mencakup waktu gangguan LHDN, bukan gangguan
vendor Anda.

## Jalur keputusan

1. **Apakah Anda dikecualikan?** Di bawah peredaran tahunan RM1,000,000, berhenti
   di sini.
2. **Hitung dokumen bulanan** lintas keempat kategori di atas.
3. **Kira-kira di bawah seratus, kebanyakannya dikonsolidasikan?** Portal, dengan
   unggah massal Excel. Periksa ulang setiap tahun.
4. **Ratusan hingga ribuan, satu sistem sumber?** Tanya vendor ERP Anda apa yang
   dicakup oleh lokalisasi MyInvois mereka — khususnya jenis self-billed 11 hingga
   14 dan field lampiran untuk impor.
5. **Ribuan, atau beberapa sistem sumber, atau kumpulan POS?** Middleware, dipilih
   berdasarkan penjagaan data dan syarat keluar dan bukan daftar fitur.
6. **Apa pun yang Anda pilih, buktikan ia berfungsi ujung ke ujung sebelum periode
   pelonggaran Anda berakhir** — 31 Desember 2027 bagi fase 4, dan sudah berlalu
   bagi fase 1 hingga 3.

## Kesalahan umum

- **Membeli sebelum menghitung.** Jumlah dokumen, termasuk self-billed, adalah
  keseluruhan input kepada keputusan ini.
- **Menganggap Peppol wajib.** Ia hanya satu dari tiga jalur API.
- **Mempercayai klaim akreditasi.** LHDN tidak menerbitkan daftar vendor yang
  disetujui apa pun.
- **Menganggap validasi terjadi serentak.** Empat dari tujuh validator berjalan di
  latar belakang.
- **Melewati pembersihan data induk.** Nomor pendaftaran SSM yang lama dan TIN yang
  usang akan gagal validator wajib pajak sebaik apa pun integrasi itu.
- **Menguji dengan data yang bersih.** Uji dengan pemasok luar negeri, individu
  tanpa TIN, nota kredit dan volume akhir bulan, karena itulah yang akan rusak.

## Apa selanjutnya

Keluarkan akun utang dan piutang bulan lalu, klasifikasikan setiap baris sebagai
transaksi, konsolidasi atau self-billed, dan hitung. Angka itu menentukan mekanisme
yang akan digunakan. Kemudian periksa daftar field terhadap data induk Anda, karena
pekerjaan pembersihan hampir selalu memakan waktu lebih lama dari integrasi itu
sendiri.
