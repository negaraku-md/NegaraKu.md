---
topicId: MY-ENV-0001
title: "Indeks Pencemar Udara (IPU): Cara Malaysia Mengukur Kualitas Udara"
seoTitle: "Indeks Pencemar Udara (IPU) Malaysia: Pembacaan & Kategori"
slug: "air-pollutant-index-api-malaysia"
category: "environment"
subcategory: ["udara"]
summary: "Pembacaan IPU yang Anda lihat saat kabut asap adalah satu angka tunggal yang disaring dari enam polutan. Panduan ini menjelaskan cara penghitungannya, jaringan stasiun pemantauan yang menghasilkannya, dan arti setiap kategori — dari Baik hingga Berbahaya — untuk kesehatan Anda."

tier: "3"
mode: "practical"
contentType: "faq"
sensitivity: "health"

answer: "Indeks Pencemar Udara (IPU), atau Air Pollutant Index (API), adalah angka 0 ke atas yang dikeluarkan oleh Jabatan Alam Sekitar (JAS) untuk menyatakan status kualitas udara suatu kawasan. Ini dihitung dari enam polutan — SO2, NO2, CO, O3, PM10 dan PM2.5 — dengan masing-masing diubah menjadi satu 'sub-indeks', dan sub-indeks tertinggi pada jam itu menjadi pembacaan IPU. Nilai itu kemudian dipetakan ke enam kategori kesehatan, dari Baik (0–50) hingga Berbahaya (melebihi 300)."
keyTakeaways:
  - "IPU dihitung dari enam polutan; sub-indeks yang paling tinggi pada jam itu menjadi pembacaan IPU resmi."
  - "PM2.5 (partikel halus) dimasukkan ke dalam penghitungan IPU mulai 2017; partikel halus lazimnya polutan dominan saat kabut asap."
  - "Enam kategori: Baik (0–50), Sedang (51–100), Tidak sehat (101–200), Sangat tidak sehat (201–300), Berbahaya (>300) dan Darurat (>500)."
  - "Konsentrasi polutan diukur oleh 52 stasiun otomatis (CAQM) dan 14 stasiun manual di seluruh Malaysia."
  - "Penghitungan IPU berbasis Pollution Standard Index (PSI) yang diadopsi oleh USEPA."
appliesTo: "Orang tua, guru, atlet, warga lanjut usia, wanita hamil, anak-anak, penderita komplikasi jantung atau paru-paru, serta siapa saja yang merencanakan aktivitas luar ruangan terutama saat musim kabut asap."

faq:
  - q: "Apakah pembacaan IPU 100 berarti udara 'separuh tercemar'?"
    a: "Tidak. IPU bukan persentase. Pembacaan 0–50 berarti Baik dan 51–100 berarti Sedang — keduanya tanpa pembatasan aktivitas luar ruangan. Pembacaan mulai mengkhawatirkan ketika melewati 100 (Tidak sehat), dan lebih dari 300 dihitung Berbahaya."
  - q: "Polutan mana yang paling sering menentukan pembacaan IPU?"
    a: "Partikel halus — PM10 dan PM2.5 — merupakan polutan dominan pada kebanyakan waktu, terutama saat terjadinya kabut asap di Malaysia. Saat itu pembacaan IPU biasanya dipacu oleh sub-indeks partikel halus."
  - q: "Pada pembacaan berapa saya sebaiknya menghindari aktivitas luar ruangan?"
    a: "Pada 101–200 (Tidak sehat), kelompok sensitif — warga lanjut usia, wanita hamil, anak-anak dan penderita komplikasi jantung atau paru-paru — sebaiknya membatasi aktivitas luar ruangan. Pada melebihi 300 (Berbahaya), warga lanjut usia dan orang berisiko tinggi dilarang beraktivitas di luar, dan masyarakat dinasihatkan menghindarinya."

lang: "id"
masterLanguage: "ms"
translationStatus: "pending"

status: "draft"
aiAssisted: true
reviewer: null
reviewed: 2026-08-03
reviewDue: 2027-08-03
revision: 0
verificationNeeded:
  - "Asma tidak disebut secara khusus dalam kedua PDF JAS yang dirujuk (sumber menyebut warga lanjut usia, wanita hamil, anak-anak dan komplikasi jantung/paru-paru). Rujukan asma di sini adalah inferensi editorial sebagai kondisi paru-paru — verifikasi dengan sumber nasihat kesehatan resmi JAS."
  - "Band Darurat (>500) tidak diberi warna terpisah pada tolok resmi JAS (warna hanya didefinisikan hingga Berbahaya). Verifikasi apakah satu warna resmi ada untuk band ini sebelum menetapkannya."
revisions:
  - revision: 0
    date: 2026-07-28
    change: "Approved and published."
    reviewer: null

updated: 2026-07-28
sources:
  - title: "Air Pollutant Index Management System (APIMS) — dataset"
    url: "https://radars.mosti.gov.my/dataset/air-pollutant-index-management-system-apims/"
    publisher: "Kementerian Sains, Teknologi dan Inovasi (MOSTI) — RADARS open-data catalogue (gov.my)"
  - title: "Penghitungan Indeks Pencemar Udara (IPU) / Air Pollutant Index (API) Calculation"
    url: "https://www.doe.gov.my/wp-content/uploads/2021/09/API_Calculation.pdf"
    publisher: "Jabatan Alam Sekitar (Department of Environment)"
  - title: "General Information of Air Pollutant Index (API)"
    url: "https://www.doe.gov.my/wp-content/uploads/2021/10/General-Information-of-Air-Pollutant-Index.pdf"
    publisher: "Jabatan Alam Sekitar (Department of Environment)"
  - title: "Air Pollution Index — What to do when API reach certain levels"
    url: "https://www.doe.gov.my/en/air-pollution-index/"
    publisher: "Jabatan Alam Sekitar (Department of Environment)"

entity: "Indeks Pencemar Udara (IPU)"
relations:
  - { rel: "administered-by", to: "jabatan-alam-sekitar" }
  - { rel: "related-to", to: "jerebu-di-malaysia" }
related: []
keywords: ["IPU", "API", "indeks pencemar udara", "kualiti udara", "jerebu", "PM2.5", "PM10", "Jabatan Alam Sekitar"]
---

Ketika kabut asap menebal dan sekolah mulai bertanya apakah apel pagi sebaiknya dibatalkan, satu angka tunggal biasanya menjadi penentu — pembacaan IPU. Angka itu tampak sederhana, tetapi di baliknya ada enam polutan yang diukur secara terus-menerus dan satu formula yang menyaring semuanya menjadi satu nilai.

## Apa yang sebenarnya diukur oleh IPU?

Indeks Pencemar Udara (IPU) adalah penunjuk status kualitas udara di suatu kawasan. Jabatan Alam Sekitar (JAS) menghitungnya berdasarkan enam polutan utama, masing-masing dirata-ratakan menurut rentang waktu yang berbeda karena batas paparan yang aman bagi masing-masing tidak sama:

- **Sulfur dioksida (SO2)** — rata-rata 1 jam
- **Nitrogen dioksida (NO2)** — rata-rata 1 jam
- **Karbon monoksida (CO)** — rata-rata 8 jam
- **Ozon (O3)** — rata-rata 8 jam dan 1 jam
- **Partikel halus PM10** — rata-rata 24 jam
- **Partikel halus PM2.5** — rata-rata 24 jam, dimasukkan ke dalam penghitungan mulai 2017

## Bagaimana enam polutan menjadi satu angka?

Rata-rata konsentrasi setiap polutan diseragamkan melalui formula matematis khusus untuk menghasilkan satu nilai tanpa unit yang disebut **sub-indeks**. Setiap polutan menghasilkan sub-indeksnya sendiri, dan **sub-indeks yang paling tinggi pada jam itu diambil sebagai pembacaan IPU**. Metode ini berbasis *Pollution Standard Index* (PSI) yang diadopsi secara internasional oleh Badan Perlindungan Lingkungan Amerika Serikat (USEPA).

Sebagai contoh, bagi PM2.5 dalam rentang terbaik (0–50), formulanya adalah IPU = 4.1667 × X, di mana X adalah rata-rata 24 jam PM2.5 dalam µg/m³. Konsentrasi yang lebih tinggi menggunakan segmen formula yang berbeda. Dalam praktik, partikel halus lazimnya polutan dominan — jadi saat kabut asap, pembacaan IPU hampir selalu dipacu oleh PM10 atau PM2.5.

## Apa arti setiap kategori untuk kesehatan Anda?

IPU dipetakan ke enam kategori berwarna. Inilah bagian yang paling penting untuk keputusan harian:

| IPU | Status | Warna | Nasihat kesehatan |
|-----|--------|-------|-------------------|
| 0–50 | Baik | Biru | Tanpa pembatasan aktivitas luar ruangan; pertahankan gaya hidup sehat |
| 51–100 | Sedang | Hijau | Tanpa pembatasan aktivitas luar ruangan; pertahankan gaya hidup sehat |
| 101–200 | Tidak sehat | Kuning | Kelompok sensitif (warga lanjut usia, wanita hamil, anak-anak, penderita komplikasi jantung/paru-paru) batasi aktivitas luar ruangan; masyarakat kurangi aktivitas berat |
| 201–300 | Sangat tidak sehat | Jingga | Warga lanjut usia dan orang berisiko tinggi tetap di dalam rumah dan kurangi aktivitas fisik; yang memiliki komplikasi kesehatan temui dokter |
| >300 | Berbahaya | Merah | Warga lanjut usia dan orang berisiko tinggi dilarang beraktivitas luar ruangan; masyarakat hindari aktivitas luar ruangan |
| >500 | Darurat | — (tidak ada warna terpisah yang didefinisikan pada tolok resmi) | Ikuti arahan [Majlis Keselamatan Negara](/id/government/national-security-council-mkn) dan pengumuman media massa |

## Dari mana datangnya data ini?

Pembacaan tidak diambil dari satu tempat. JAS mengoperasikan Jaringan Pemantauan Kualitas Udara Nasional yang mencakup **52 stasiun otomatis** — Stasiun Pemantauan Kualitas Udara Berkelanjutan (*Continuous Air Quality Monitoring*, CAQM) — dan **14 stasiun manual** yang menggunakan pengambil sampel volume tinggi (HVS). Stasiun ini ditempatkan di lokasi strategis mencakup kawasan industri, kota, pinggiran kota dan pedesaan di seluruh Semenanjung, Sabah dan Sarawak, agar pembacaan mewakili udara yang benar-benar dihirup penduduk.

## Apa selanjutnya

Sebelum merencanakan aktivitas luar ruangan saat kabut asap, periksa pembacaan IPU resmi terkini bagi kawasan Anda melalui sistem pemantauan daring resmi JAS, dan bukan angka yang beredar tanpa sumber di media sosial. Jika Anda tergolong dalam kelompok sensitif — warga lanjut usia, wanita hamil, anak-anak, atau penderita komplikasi jantung atau paru-paru (termasuk kondisi seperti asma) — mulai berjaga-jaga ketika pembacaan melewati 100, bukan menunggu hingga mencapai Berbahaya. Untuk memahami penyebab lonjakan pembacaan ini, lihat halaman terkait mengenai kabut asap di Malaysia dan peran Jabatan Alam Sekitar.
