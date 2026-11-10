# Finance translation — terminology consistency audit

_Task 12. Generated 2026-11-11. Status: findings for native-reviewer adjudication._

This audit checks whether key financial terms are rendered **consistently** across
each language's finance translations. The finance category has **31 English master
articles** (`knowledge/finance/<slug>.md`), each translated into **12 languages**
(`ms zh ta ja ko th vi id ar hi es fr`) — 372 translation files.

**Scope of this document.** I flag inconsistencies; I do **not** decree the correct
term. Every item below is for a native reviewer (and the relevant
`docs/plans/<lang>-terminology-decisions.md`) to adjudicate. Where a language already
has a terminology-decisions doc, the resolution should be recorded there so future
translations inherit it.

---

## Method

- **16 anchor concepts** tracked (the Task-12 list): capital allowance · finance lease ·
  operating lease · lessor · lessee · debt service ratio (DSR) · factoring · invoice
  financing · hire purchase · recourse / non-recourse · term loan · overdraft ·
  revolving credit · bank guarantee · letter of credit · Bai' al-Dayn.
- Translators follow the house convention of keeping the English term in parentheses
  after their coinage at first mention, e.g. `偿债比率（DSR）`,
  `Nisbah khidmat hutang (DSR)`, `rasio layanan utang (DSR)`. The audit script
  ([`finance-terminology-audit.py`](finance-terminology-audit.py)) finds each parenthesised English anchor across all
  finance files of a language and captures the translated term immediately preceding
  it, then groups the distinct renderings per (language, anchor).
- A **clean-gloss filter** keeps only parentheticals that are essentially just the
  anchor (so `(DSR 60%)` or `(LC) for Islamic Trade Financing` are excluded), and a
  **suffix/substring merge** collapses leading particles (e.g. "your DSR") onto the
  shared core term.

**Known limitations (read before acting).**
1. The capture is heuristic. For languages whose script my capture cannot cleanly
   tokenise — chiefly **Vietnamese** (extended Latin diacritics ư/ụ/ầ are truncated)
   and occasionally Thai/Tamil where a leading letter is clipped — the *rendering
   strings shown may be partial*. Treat the **divergence signal** (same concept →
   more than one rendering) as reliable; treat the **exact glyphs** as "reviewer to
   confirm from the file."
2. Several apparent DSR "divergences" are **artefacts of the `relatedLinks` title
   convention**, not defects — see the note under DSR below.
3. Terms that only ever appear once in the corpus cannot diverge; absence of a flag
   is not proof of correctness, only of non-contradiction.

---

## Headline result

**The corpus is largely consistent.** Across 16 concepts × 12 languages, the coined
body terms are stable within each language in the overwhelming majority of cases
(69 of the 84 observed (lang, anchor) pairs showed a single rendering; the rest are
triaged below). The genuinely actionable items for native review are **few and
specific** — concentrated in four places:

1. **Tamil `lessor` / `lessee` collision** (highest priority — a meaning error, not a style choice).
2. **Indonesian: translate-vs-keep-English policy for trade-finance instrument names** (a consistency *policy* decision, not a single term).
3. **Japanese DSR synonym** (返済負担率 vs 債務返済比率 — minor).
4. **Arabic DSR/"dayn" diacritic variation** (الدين vs دَين — orthographic, minor).

Heuristic-flagged divergent (lang, anchor) pairs, before triage: **15**
(ms 1 · zh 1 · ta 4 · ja 1 · ko 1 · th 1 · vi 0 · id 2 · ar 1 · hi 1 · es 1 · fr 1).
After triage most collapse to the four substantive items above plus identified noise.

---

## Priority flags (verified against the files)

### P1 — Tamil: `lessor` ↔ `lessee` collision + `lessor` rendered two ways

Verified in the source files:

| Concept | Rendering | File |
|---|---|---|
| lessor | `குத்தகைதாரர் (lessor)` | `business-loan-facility-types-malaysia.ta.md` (line 118) |
| lessor | `குத்தகையாளர் (lessor)` | `equipment-asset-financing-malaysia.ta.md` (line 20) |
| lessee | `குத்தகைதாரர் (lessee)` | `equipment-asset-financing-malaysia.ta.md` (line 20) |

Two problems in one place:
- **`குத்தகைதாரர்` is used for `lessor` in one article and for `lessee` in another** —
  a direct contradiction. The equipment-asset article even uses `குத்தகைதாரர்` =
  *lessee* and `குத்தகையாளர்` = *lessor* in the **same sentence**, i.e. the opposite
  assignment to the business-loan article.
- Tamil needs a fixed, distinct pair for lessor vs lessee (owner who leases out vs user
  who leases in). **Reviewer action:** pick one pair and apply it across both files
  (and any future leasing articles); record it in
  `docs/plans/ta-terminology-decisions.md` (create if absent — Tamil has no decisions
  doc yet). This is a reader-facing correctness issue, not cosmetics.

### P2 — Indonesian: mixed translate / keep-English for facility & trade-finance names

In `business-loan-facility-types-malaysia.id.md` and `trade-finance-malaysia.id.md`,
some facility names are given an Indonesian coinage while others are left in English —
within the same sentences:

- **Translated:** term loan → `pinjaman berjangka`, overdraft → `cerukan`,
  revolving credit → `kredit berulang`, invoice financing → `pembiayaan faktur`,
  factoring → `anjak piutang`.
- **Left in English (no Indonesian coinage):** `letter of credit`, `bank guarantee`,
  `trust receipt`, `bankers' acceptance`.

This may be deliberate (these instrument names are commonly used in English in
Indonesian banking), but it is currently **inconsistent and unstated**. **Reviewer
action:** decide a rule — e.g. "trade-finance instrument names stay English on first
use with an Indonesian gloss, then English thereafter" vs "coin Indonesian equivalents"
— and record it in `docs/plans/indonesian-terminology-decisions.md` (which today only
covers Acts/register). Then apply consistently. Low urgency, but it is the single most
substantive *consistency* question the audit found.

### P3 — Japanese: DSR synonym (返済負担率 vs 債務返済比率)

The article title, summary, body and FAQ consistently use **`返済負担率（DSR）`**. But the
`relatedLinks` title in `consumer-and-housing-loan-financing-malaysia.ja.md` (line 72)
uses **`債務返済比率（DSR）`** for the same concept. Both are valid renderings of "Debt
Service Ratio"; the inconsistency is internal to the ja corpus. **Reviewer action:**
pick the canonical form (the body already standardises on 返済負担率) and align the
relatedLinks title. Minor.

### P4 — Arabic: "dayn" diacritic variation in DSR context (الدين vs دَين)

Arabic DSR text shows `الدين` (consumer-and-housing) and `دَين` (dsr, why-loan-rejected)
for the "debt" element. This is an orthographic/diacritic choice, not a different term.
**Reviewer action:** confirm one spelling convention for the DSR rendering and the
standalone "debt" noun; record in `docs/plans/arabic-terminology-decisions.md`. Minor.

---

## Identified as NOISE (no action — documented so reviewers don't chase them)

- **"Understanding DSR" / "MSMEs and small contractors" appearing as a rendering** in
  ms/zh/ja/id/es/fr etc. is **not an English leak.** It is the English **original of a
  `relatedLinks` title**, kept in parentheses by design (per the sources-localization
  convention: `<translated title> (<English original>)`). The audit captured the text
  preceding the `(DSR)` / `(invoice financing)` that sits *inside* that English
  original. Confirmed in the files. No defect.
- **DSR showing 2–3 "renderings" in almost every language** is mostly the same artefact
  plus clause-tail capture around one *consistent* body coinage
  (ms `nisbah khidmat hutang`, zh `偿债比率`, ko `부채상환비율`, id `rasio layanan utang`,
  es `servicio de la deuda`, fr `service de la dette`, hi `…अनुपात`). The core coinage
  is stable; the extras are capture noise.
- **Tamil `term loan` (கடன் / கடனுக்கும்) and `letter of credit`
  (கடிதம் / கடிதத்தைத்)** differences are **grammatical case inflections** of the same
  root (dative -உக்கும், accusative -த்தைத்), not competing coinages. No action.

---

## Per-language consistency table (key terms)

Dominant body rendering observed per language, with a flag where the audit found
divergence. `—` = term not glossed in that language's finance corpus (or appears only
without the English anchor, so not captured). **"confirm"** = capture may be partial
(esp. vi / some Thai), reviewer to read the exact glyph from the file. This table is a
*starting map for a native reviewer*, not an authority.

| Concept | ms | zh | ta | ja | ko | th | vi | id | ar | hi | es | fr |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| debt service ratio (DSR) | nisbah khidmat hutang | 偿债比率 | ⚠ see P-note | 返済負担率 ⚠P3 | 부채상환비율 | …ภาระหนี้ (confirm) | confirm | rasio layanan utang | …الدين ⚠P4 | …अनुपात | servicio de la deuda | service de la dette |
| capital allowance | — | — | …படி (confirm) | — | — | — | …trừ vốn (confirm) | — | …رأسمالي (confirm) | — | — | — |
| finance lease | — | — | குத்தகை | — | — | — | — | sewa guna usaha pembiayaan | — | पट्टा | — | — |
| operating lease | — | — | — | — | — | — | — | sewa guna usaha operasi | — | — | — | — |
| lessor | — | — | ⚠ **P1** (two renderings) | 貸し手 | — | — | — | — | — | — | — | — |
| lessee | — | — | ⚠ **P1** (collides w/ lessor) | — | — | — | — | — | — | — | — | — |
| factoring | — | — | — | — | — | — | — | anjak piutang | — | — | — | — |
| invoice financing | — | — | நிதியளிப்பு (confirm) | — | — | …ใบแจ้งหนี้ (confirm) | — | pembiayaan faktur | — | — | — | — |
| hire purchase | — | — | வாடகை-வாங்குதல் | — | 할부구매 | การเช่าซื้อ | — | sewa beli | — | — | — | — |
| recourse / non-recourse | — | — | — | — | 상환청구권 | …ไล่เบี้ย (confirm) | — | — | — | — | — | — |
| term loan | — | — | கடன் (inflects) | タームローン | 대출 | …ระยะยาว (confirm) | — | pinjaman berjangka | — | ऋण | — | — |
| overdraft | — | — | ஓவர்டிராஃப்ட் | 当座貸越 | 당좌대월 | …เกินบัญชี (confirm) | — | cerukan | — | ओवरड्राफ्ट | — | — |
| revolving credit | — | — | கடன் | リボルビングクレジット | 회전신용 | …หมุนเวียน (confirm) | — | kredit berulang | — | ऋण | — | — |
| bank guarantee | — | — | உத்தரவாதம் | 銀行保証 | 은행보증 | ประกันธนาคาร | — | **English kept** ⚠P2 | — | गारंटी | — | — |
| letter of credit | surat kredit | 信用证 | கடிதம் (inflects) | 信用状 | 신용장 | …ออฟเครดิต (confirm) | confirm | **letter of credit (English kept)** ⚠P2 | …اعتماد | …पत्र | carta de crédito | lettre de crédit |
| Bai' al-Dayn | penjualan hutang pada diskaun | 折价出售债权 | …விற்பனை (confirm) | 債権の割引売買 | …매각 (confirm) | …ในราคาลด (confirm) | confirm | beli utang dengan diskon | الدَّين | …बिक्री | con descuento de deuda | avec décote d'une créance |

Reading notes:
- Blank cells are common and expected: not every one of the 31 articles touches every
  concept, so most terms are defined in one "home" article (e.g. leasing terms in
  `equipment-asset-financing-malaysia`, trade-finance instruments in
  `business-loan-facility-types-malaysia` / `trade-finance-malaysia`). A term that
  appears once cannot be *inconsistent*, which is why single-occurrence terms are shown
  without a divergence flag.
- The only cells carrying a real divergence flag are the P1–P4 items.

---

## Recommended reviewer workflow

1. **Tamil reviewer:** resolve P1 (lessor/lessee) first — it is a correctness bug.
   Create `docs/plans/ta-terminology-decisions.md` with the chosen leasing pair.
2. **Indonesian reviewer:** rule on P2 (facility-name English-vs-coinage policy) and
   record it.
3. **Japanese / Arabic reviewers:** align P3 / P4 (cosmetic/orthographic).
4. For every other language, use the table above as a glossary seed: confirm the
   dominant rendering is the intended one and add it to that language's
   terminology-decisions doc so the coinages become *stated* standards rather than
   incidentally-consistent ones. Several languages (ms, zh, ja, ta) have **no**
   terminology-decisions doc yet — seeding one from this table is the durable fix.

_Audit script: [`docs/plans/finance-terminology-audit.py`](finance-terminology-audit.py)
(re-runnable: `python docs/plans/finance-terminology-audit.py knowledge/finance out.json`).
Freshness-neutral — this audit
reads translations and writes only this plan doc; it does not touch `knowledge/`._
