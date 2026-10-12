# Arabic (`ar`) terminology & localization decisions — the 10th language, first RTL

_Read with `arabic-launch.md` before any translation. Arabic is translated **en→ar**
(no close source language — follows the ta/ja/ko/th/vi model, NOT the ms-adapt model
used for Indonesian). The #1 risks are (a) register, (b) bidi/numerals, (c) keeping
Malaysian entities Malaysian. This doc fixes all three._

## 1. Register — Modern Standard Arabic (العربية الفصحى / MSA)
- **MSA only.** Formal, encyclopedic, pan-Arab. **No dialect** (no Egyptian, Gulf,
  Levantine colloquialisms). A Malaysia knowledge base must read like a reference work
  (think Arabic Wikipedia / Al Jazeera explainers), not a chat.
- Neutral, non-partisan, same editorial standard as every language. No marketing voice.
- Agents translate from the **English** master/version (en is clearest for en→ar);
  never machine-transliterate Malay.

## 2. Numerals — WESTERN Arabic numerals (0–9), NOT Eastern Arabic-Indic (٠–٩)
- **Decision:** all figures use **0–9** — RM amounts, percentages, dates, statute
  numbers, section/article numbers, phone numbers, years.
- **Why:** the content is about Malaysia, where every official figure, gazette number
  and RM amount is written 0–9. Eastern-Indic (٠١٢…) would look more "native" but
  **misrepresents the source** and breaks copy-paste/search against Malaysian documents.
  (Most Gulf/Levant official and news Arabic also uses 0–9 today.)
- Decimal point `.` and thousands `,` as in the source (e.g. `459.8`, `12,000`).

## 3. Direction & bidi (the RTL-content rule)
- Body text is RTL. **Latin/numeric runs are LTR islands inside it**: the brand
  (`NegaraKu.md`), currency (`RM`), acronyms (`LHDN`, `SSM`, `EPF`), company forms
  (`Sdn Bhd`), URLs, statute citations (`Companies Act 2016`, `Section 5(1)`).
- The Unicode bidi algorithm handles *plain* Latin words automatically, but **mixed
  alphanumeric + punctuation tokens misorder** in RTL — e.g. `RM2,000`, `Section 5(1)`,
  `P.U.(A) 123/2027`, `2027/2028`, a bare URL. These MUST be isolated.
- **Rule:** wrap such tokens in a bidi isolate — `⁦ … ⁩` (LRI…PDI) or a
  leading/trailing LRM (`‎`). A deterministic post-process (a lint + fixer over the
  `.ar.md` body, like the currency/source scripts) will enforce this so agents don't have
  to hand-place marks. Rendering is validated at Phase 0 on one `/ar` page.
- `<html dir="rtl" lang="ar">`; the whole RTL *layout* (CSS logical properties, mirrored
  chrome) is the `arabic-launch.md` engineering workstream — this doc is only the text.

## 4. Malaysian proper nouns / institutions / statutes — KEEP Malaysian
Same rule as every language: the content is about Malaysia; do **not** substitute Arab-world
equivalents. Give an Arabic descriptor + keep the Malaysian name/acronym (Latin) on first
mention, bidi-isolated.

| Entity | Arabic first mention (then use the acronym) |
|---|---|
| LHDN (Inland Revenue Board) | الهيئة الماليزية للإيرادات الداخلية (LHDN) |
| SSM (Companies Commission) | لجنة الشركات الماليزية (SSM) |
| EPF / KWSP | صندوق ادخار الموظفين (EPF) |
| SOCSO / PERKESO | منظمة الضمان الاجتماعي (SOCSO) |
| Bursa Malaysia | بورصة ماليزيا (Bursa Malaysia) |
| Ringgit (RM) | الرينغيت الماليزي (RM) |
| Sdn Bhd | tetap `Sdn Bhd` — keep verbatim, do NOT render as a Gulf "ذ.م.م" |
| Bumiputera | بوميبوترا (Bumiputera) |
| Companies Act 2016 | قانون الشركات لسنة 2016 (Companies Act 2016) |

- **Never** map Sdn Bhd → Gulf company forms, or LHDN → any Arab tax authority — factually
  wrong for Malaysian entities.
- Acronyms stay **Latin** (LHDN, SSM, EPF, SST, GST) — do not invent Arabic acronyms.

## 5. Currency & large numbers (deterministic script, like vi/id)
- million → **مليون**, billion → **مليار**, trillion → **تريليون**.
- Keep `RM` (Latin, isolated) + Western numerals: `459.8 مليار رينغيت` →
  render as “RM459.8 مليار” style per the source's own form; a deterministic pass applies
  the scale word, mirroring vi (triệu/tỷ) and id (juta/miliar/triliun).

## 6. Transliteration — names, places, titles
- **Common place/person names → standard Arabic forms** on first mention, Latin in parens
  if helpful: Kuala Lumpur → كوالالمبور; Anwar Ibrahim → أنور إبراهيم; Putrajaya → بوتراجايا;
  Sabah/Sarawak → صباح/ساراواك.
- **Malaysian honorifics/titles → transliterate + keep**: Datuk → داتوك، Tan Sri → تان سري،
  YB (Yang Berhormat) → keep `YB` with a gloss. Royal/state titles likewise.
- **Technical/brand/legal tokens → keep Latin** (statute short-names, programme names,
  ministry acronyms) with an Arabic gloss on first use.
- Dates: **Gregorian** (Malaysia's civil calendar), Western numerals, Arabic month names
  where spelled out (أكتوبر 2026). Do not convert to Hijri.

## 7. Sensitivity (unchanged, extra care)
- Same sensitivity schema; `sensitivity != none` ⇒ reviewer **ashton-tan** at publish
  (standing default). Religion/royalty/race articles: MSA must stay strictly neutral and
  descriptive — Arabic religious register can drift toward the devotional; keep it factual.

## 8. Governance during translation (same as every launch)
`lang: ar`, `status: draft`, `translationStatus: pending`, `reviewer: null`,
`aiAssisted: true`. Method = **MULTI-AGENT, NO API**. Register + bidi audits before launch.

See [[negaraku-language-launch-checklist]], [[negaraku-sources-localization]],
[[negaraku-reviewer-default]], [[negaraku-language-roadmap]], and `arabic-launch.md`.
