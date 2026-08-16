# Deferred verification corrections — ready to apply

Seven adversarially-confirmed corrections from the multi-agent verification sweep that were
**deliberately not auto-applied** because they change published prose with legal/editorial
judgment. Each entry gives the file(s), the exact before → after per language, the authoritative
source, and the `verificationNeeded` item to remove once applied.

**Process reminder:** after editing frontmatter, validate with **js-yaml** (Astro's parser), not
just `validate-frontmatter` (gray-matter tolerated an invalid state once — a false green). Run
`node scripts/validate-frontmatter.mjs`, a js-yaml check, `npm run translate:stamp` (body edits
change the hash), and `python scripts/health/scan.py --strict` before committing. Do not push while
a Pages deploy is in flight (concurrency cancels it).

---

## 1. POCA — ouster clause is §15B(1), not §15A
**File:** `knowledge/law/prevention-of-crime-act-poca.{md,en.md,zh.md}` (Malay master)
**Source:** Prevention of Crime Act 1959 (Act 297), AGC updated text as at 1 Jan 2018 — §15B(1) "Judicial review of act or decision of Board" is the ouster clause; §15A is "Special procedure relating to electronic monitoring device", not review limits.

- **.en.md (body ~L97):**
  before: `Section 15A of POCA provides that there is no judicial review except in relation to compliance with procedural requirements`
  after: `Section 15B(1) of POCA provides that there is no judicial review except in relation to compliance with procedural requirements (Section 15A concerns the electronic-monitoring procedure, not review limits)`
- **.md (body ~L96):** change `Seksyen 15A POCA memperuntukkan tiada semakan kehakiman` → `Seksyen 15B(1) POCA memperuntukkan tiada semakan kehakiman` and add the parenthetical `(Seksyen 15A berkenaan prosedur peranti pemantauan elektronik, bukan had semakan)`.
- **.zh.md (body ~L97):** change `POCA第15A条规定除涉及程序要求的遵守外，不得进行司法审查` → `POCA第15B(1)条规定除涉及程序要求的遵守外，不得进行司法审查（第15A条涉及电子监控程序，而非审查限制）`.
- **Clear vn item** (marker `15B` / "Seksyen 15B; Seksyen 15A menyebut had semakan prosedur").
- **Review note:** the sentence is attributed to a law firm (Low & Partners); confirm the attribution still reads correctly after the section swap.

## 2. Road Transport Act 1987 — fill s.26 and s.90 penalties
**File:** `knowledge/law/road-transport-act-1987.{md,ms.md,zh.md}` (English master)
**Source:** Road Transport Act 1987 (Act 333), AGC reprint as at 15 Oct 2023 — s.26(2): fine RM300–RM2,000 or ≤3 months' jail or both; s.90(2): fine ≤RM1,000 or ≤3 months or both (plus disqualification).

- **s.26 table row** (`.md` L105 / `.ms.md` L106 / `.zh.md` L106):
  before (en): `| s.26(1) | Driving without a valid licence | Prohibited (penalty pending verification) |`
  after (en): `| s.26(1) | Driving without a valid licence | Fine RM300–RM2,000 or up to 3 months' jail, or both (penalty in s.26(2)) |`
  ms: `... | Denda RM300–RM2,000 atau penjara sehingga 3 bulan, atau kedua-duanya (penalti di bawah s.26(2)) |`
  zh: `... | 罚款 RM300–RM2,000 或监禁不超过 3 个月，或两者兼施（刑罚见第26(2)条） |`
- **Add s.90 row** after the s.44 row (en): `| s.90 | Using a vehicle without third-party insurance | Fine up to RM1,000 or up to 3 months' jail, or both, plus disqualification (s.90(2)) |` (translate for ms/zh).
- **Update the closing hedge** (the sentence noting "s.26(1) and s.90 penalties remain flagged pending") — remove the "pending" clause; keep the general "verify against the AGC reprint" advice.
- **Clear both vn items** (markers `RM300-RM2,000` and `Section 90`).

## 3. MESI — CRESS system access charge is now 20/40 sen/kWh (RP4)
**File:** `knowledge/energy/electricity-supply-industry-reform-mesi.{md,ms.md,zh.md}` (English master)
**Source:** Energy Commission RP4 tariff (effective 1 July 2025, announced 29 Aug 2025) — CRESS SAC: firm **20 sen/kWh**, non-firm **40 sen/kWh**. The 25/45 figures were the 2024 launch values.

- Every "25 sen/kWh (firm) … 45 sen/kWh (non-firm)" occurrence — keyTakeaways (~L22), FAQ answer (~L34), body table (~L156) — should read the **current** values with launch context, e.g.:
  `a system access charge set by the Energy Commission — 20 sen/kWh (firm) and 40 sen/kWh (non-firm) under the RP4 tariff from 1 July 2025 (25/45 sen at the 2024 launch)`.
- Body table row: `| Firm … | 20 sen/kWh (RP4, from 1 Jul 2025) |` and `| Non-firm … | 40 sen/kWh |`.
- **Clear vn item** (marker `25 sen/kWh`).
- **Review note:** launch-vs-current wording is the reason this was deferred — keep both values so the history stays accurate.

## 4. MCMC — 5G single-wholesale (DNB) model has ended; Malaysia now runs a dual network
**File:** `knowledge/technology/mcmc-malaysia.{md,ms.md,zh.md}` (Malay master) — **the heaviest edit; scrutinise most.**
**Sources:** MCMC (U Mobile selected as second 5G network, 1 Nov 2024; Letter of Award Mar 2025); [The Edge](https://theedgemalaysia.com/node/755009), [The Star](https://www.thestar.com.my/business/business-news/2025/05/14/u-mobile-exits-dnb-to-drive-second-5g-network) — govt decided May 2023 to move to a dual network; U Mobile launched 5G 26 Jan 2026; DNB shares now held by CelcomDigi, Maxis, YTL Power and MOF Inc (U Mobile exited).

Correct these outdated claims (in summary/keyTakeaways/FAQ and the "MCMC dalam JENDELA dan 5G" section):
- keyTakeaways ~L22 `menyelia rangkaian borong tunggal 5G Digital Nasional Berhad` → `menyelia model 5G dua rangkaian (DNB dan U Mobile)`.
- FAQ ~L32-33 — DNB is no longer the sole 5G provider; note U Mobile is the second network (launched Jan 2026) and MCMC regulates both.
- Body ~L132 `kerajaan mengarahkan Digital Nasional Berhad (DNB) membina rangkaian borong tunggal … DNB dimiliki sepenuhnya oleh Menteri Kewangan (Diperbadankan)` → the single-wholesale model was adopted in 2021 but the government decided in **May 2023** to move to a **dual 5G network**; U Mobile was selected (Nov 2024) as the second network and launched services Jan 2026; DNB is now co-owned by CelcomDigi, Maxis, YTL Power and MOF Inc.
- **Clear vn item** (marker `MKD` / "model rangkaian borong tunggal 5G DNB").
- **Review note:** this is a genuine policy rewrite across five fields × 3 languages — needs an editor to author accurate trilingual prose (facts above are confirmed).

## 5. Judicial appointments — Conference of Rulers is consulted for ALL superior-court judges
**File:** `knowledge/law/judicial-appointments-in-malaysia.{md,en.md,zh.md}` (Malay master)
**Source:** Federal Constitution Art 122B(1) (AGC Reprint 2020) — YDPA appoints on the PM's advice **after consulting the Conference of Rulers** for every superior-court judge; 122B(2)–(4) add consultation with the CJ/President/relevant Chief Judge.

- **FAQ (~L26, .md):** `berunding dengan Majlis Raja-Raja bagi jawatan tertinggi` → `berunding dengan Majlis Raja-Raja bagi semua pelantikan hakim mahkamah atasan`.
- Apply the same fix to the `.en.md` ("for the topmost positions" → "for all superior-court appointments") and `.zh.md` equivalents wherever "Conference of Rulers … topmost" appears.
- **Clear vn item** (marker `122B` / "Perincian Perkara 122B … syarat rundingan dengan Majlis Raja-Raja bagi setiap peringkat mahkamah").

## 6. Sport governance — official term is "Sukan Prestasi Tinggi"
**File:** `knowledge/sports/malaysian-sport-governance.{md,ms.md,zh.md}`
**Source:** Dasar Sukan Negara 2009 (KBS) — two pillars: Sukan Untuk Semua and **Sukan Prestasi Tinggi** (not "Sukan Berprestasi Tinggi").
- Body already uses "sukan prestasi tinggi" (correct). If the parenthetical hedge "*(Rangka dan istilah rasmi Dasar Sukan Negara semasa perlu disahkan …)*" appears in the body, remove it.
- **Clear vn item** (marker `dua teras`).

## 7. UNESCO World Heritage — add source URLs + boundary-modification year
**File:** `knowledge/arts-culture/unesco-world-heritage.{md,ms.md,zh.md}`
**Source:** UNESCO WHC — Niah National Park's Caves Complex = ref **1014** (`https://whc.unesco.org/en/list/1014/`); FRIM Forest Park Selangor = ref **1734** (`https://whc.unesco.org/en/list/1734/`); Melaka & George Town minor boundary modification approved **2011** (Decision 35COM 8B.52).

- Add a `url:` line to the two source entries that currently lack one (Niah, ~L77-79; FRIM, ~L80-82) — indent the `url:` to match sibling entries (2 spaces + `url:`), and js-yaml-validate after (this is exactly the indentation-sensitive edit that must be checked).
- Body: the two "minor boundary modification" mentions (FAQ ~L26 and body ~L132) → add "in 2011".
- **Clear both vn items** (markers `Niah Caves Complex` / "canonical URLs" and `boundary modification`).

---

*Generated 2026-08-16 from the verification sweep. Corpus state at generation: 342 master files fully
cleared; ~2,180 items remain (human/SME/BLOCKED floor). See memory `negaraku-verification-progress`.*
