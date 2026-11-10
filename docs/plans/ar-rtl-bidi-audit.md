# Arabic (ar) RTL / bidi rendering audit — Task 11

**Date:** 2026-11-11  **Scope:** `knowledge/**/*.ar.md` (1,347 files)  **Mode:** read-only audit (no content edited).
**Verdict:** **One confirmed, widespread bidi bug class** (plus a small second one). Everything else inspected renders correctly — the corpus is otherwise clean. The repo note ("a bidi fixer needs a CONFIRMED bug first") is now satisfied.

---

## TL;DR

| Finding | Status | Count | Arabic reader sees | Fix |
|---|---|---|---|---|
| **Bare numeric range with EN-DASH `–` (U+2013) or EM-DASH `—` (U+2014)** | 🔴 **CONFIRMED BUG** | **891** across ~300 files | range **reversed**: source `2021–2030` renders `2030–2021` | wrap range in Unicode isolates, or swap `–`→`-` |
| **Comma-grouped thousands range** (any dash), e.g. `200,000–240,000`, `RM1,000–100,000` | 🔴 **CONFIRMED BUG** | ~30–40 true positives | reversed: `240,000–200,000` | wrap in isolates (dash-swap does NOT fix this one) |
| Bare range with HYPHEN-MINUS `-` (U+002D), incl. ISO dates `2026-07-25` | 🟢 safe | 8,140 | correct | leave as-is |
| Range terminated by `%` e.g. `8–10%`, `4–5%` | 🟢 safe | 36 | correct | leave as-is |
| Range prefixed by currency/Latin e.g. `RM3–6`, `RM65–200` | 🟢 safe | 32 | correct | leave as-is |
| URLs, acronyms (SST/LHDN), brand `NegaraKu.md`, `RM`/`US$`/`%` figures, `(Latin)` parentheticals, Latin-initial headings | 🟢 safe | — | correct | leave as-is |

Bug is **Arabic-only** (it is the RTL base direction that triggers it); the other 12 languages are unaffected.

---

## How this was verified (why the numbers are trustworthy)

Browser bidi (UAX #9) silently fixes *most* mixed-direction text, so I did **not** flag on pattern-match alone. Two methods:

1. **Ground truth = real Chromium render.** Built HTML test pages with `dir="rtl"` containing the *actual* strings pulled from the corpus, served them over `http://localhost`, and screenshotted + zoomed the rendered output to read the visual order directly.
2. **Cross-check with `python-bidi` (UAX #9 impl).** Useful for triage but **proven unreliable here**: it reported hyphen-minus `2021-2031` as reversed, which the real browser render disproved (renders correctly). So every claim below rests on the **browser screenshot**, not the library.

Screenshot evidence (what Chromium actually drew for RTL text):

| Source in file | Rendered to reader | Correct? |
|---|---|---|
| `2021–2031` (en-dash) | `2031–2021` | ❌ reversed |
| `21–22` (en-dash) | `22–21` | ❌ reversed |
| `267–270` (en-dash) | `270–267` | ❌ reversed |
| `200,000–240,000` (en-dash) | `240,000–200,000` | ❌ reversed |
| `200,000-240,000` (**hyphen**) | `240,000-200,000` | ❌ reversed (commas defeat W4) |
| `2021-2031` (hyphen, no commas) | `2021-2031` | ✅ correct |
| `RM3–6` (en-dash, currency prefix) | `RM3–6` | ✅ correct |
| `8–10%` (en-dash, %-terminated) | `8–10%` | ✅ correct |
| `⁦2021–2031⁩` (en-dash wrapped in LRI…PDI) | `2021–2031` | ✅ **fix works** |
| `من 2021 إلى 2031` (worded) | `من 2021 إلى 2031` | ✅ **fix works** |

### Why it happens (UAX #9, briefly)
- An **ASCII hyphen-minus** between two European numbers is an *ES* separator; rule **W4** folds `digit-digit` into a single European-number run that stays left-to-right. → safe.
- An **en-dash / em-dash** is an *ordinary neutral (ON)*, **not** ES. Between two numbers, rule **N1** (numbers act as R for neutral resolution) turns it into an R-level separator, so the two number runs are laid out right-to-left **relative to each other** → the range reverses.
- A **thousands comma** splits the number so W4 no longer unifies the whole range; the two sides reorder even with a hyphen.
- A **leading `RM`/`US$`** (strong-L) or a **trailing `%`** (ET) anchors the run and suppresses the reversal.

---

## The confirmed bug in context (file:line evidence)

Representative bare en/em-dash ranges (all render reversed for the Arabic reader):

```
accounting/financial-reporting-deadlines.ar.md:227   الفقرتان 21–22        → reader sees 22–21
accounting/mpers-2025-revision.ar.md:183             | 3–8 |               → 8–3  (table cell)
accounting/statutory-audit-requirement.ar.md:195     للمواد 267–270        → 270–267
agriculture/agriculture-sector-overview.ar.md:224    ...الزراعية 2021–2030 → 2030–2021
agriculture/padi-and-rice-industry.ar.md:137         تغطي 2020–2024        → 2024–2020
agriculture/bernas-rice-import-monopoly.ar.md:53     الامتياز 2021–2031    → 2031–2021
arts-culture/chinese-dialects.ar.md:17               في 1900–1901          → 1901–1900
```

Comma-grouped ranges (reverse regardless of dash):

```
agriculture/padi-and-rice-industry.ar.md:48          200,000–240,000      → 240,000–200,000
business/doing-business-johor-bahru.ar.md:167        1,001–2,000          → 2,000–1,001
business/sme-financing-malaysia.ar.md:210            RM1,000–100,000      → 100,000–1,000  (note: leading RM does NOT save a comma-grouped range)
```

**Where ranges live:** markdown body tables (`| 3–8 |`), prose, and rendered frontmatter fields (`answer`, `keyTakeaways`, `faq`, `summary`). Fix must cover rendered frontmatter too, not just body markdown.

**Cross-cutting note:** this also hits sensitive-article dates (sultanate/era ranges, reign years, "1981–2003"), so it overlaps the Task-10 pre-screen set — but it is a mechanical rendering issue, not a content/sensitivity one.

---

## Recommended fix (not applied — this was read-only)

Preferred: **render-time, not content edits.** Add a small **remark/rehype plugin** (or a post-processing string pass) that runs **only on `ar` output** and wraps any `digit(.,)*[–—-]digit(.,)*` range — or just the whole numeric token — in a Unicode isolate (`⁦`…`⁩`, i.e. U+2066 LRI … U+2069 PDI) or an HTML `<bdi dir="ltr">…</bdi>`. Confirmed to render correctly (table above). Advantages: one place, reversible, dash-agnostic (fixes both the bare-dash and comma-grouped cases), no churn across ~300 files, no effect on the translation-freshness hash. It should be applied to the rendered body **and** to the frontmatter-derived fields that display ranges. If/when more RTL languages are added, gate on `dir==="rtl"` rather than on `ar` specifically.

Alternative (content-level, not recommended): bulk-replace en/em-dash → ASCII hyphen-minus in bare ranges (fixes 891) **and** isolate-wrap comma-grouped ranges (hyphen alone won't fix those). More files touched, still misses nothing only if both steps run; prefer the render-time plugin.

Do **not** touch: the 8,140 hyphen-minus ranges / ISO dates, the %-terminated ranges, or the currency-prefixed ranges — they already render correctly and changing them risks regressions.

---

## What was checked and found clean (so these are NOT bugs)

Rendered in Chromium RTL and confirmed correct — no isolation needed:

- **URLs in prose** — `...عبر https://www.spr.gov.my قبل...` renders intact (long LTR run). 6 bare URLs total; all fine.
- **Acronyms / codes** — `SST`, `LHDN`, `MFRS 101`, `IAS 1`, `UEC`, `SJKC` etc.: single LTR islands, handled.
- **Interleaved Latin↔Arabic with connective** — `فـ MFRS 101 هو IAS 1، وMFRS 137 هو IAS 37` reads in correct order.
- **`(Latin term)` appositives** — e.g. petronas `...(Petroleum Development Act 1974، أي Act 144)...` reads correctly; parens mirror properly.
- **Currency / percent / money figures** — `RM32 مليار`, `US$4.5 مليار`, `20%`: all intact.
- **Latin-initial and number-initial headings** — `Dependant Pass و LTSVP — ...`, `14. كتلة التوقيع (Signature block)`, `1. القوائم المالية`: all read correctly.
- **CJK-in-parens** — `(董总 و教总)`, `(华小／SJKC)`: order preserved.

---

## Reproduce

Scanner / classifier: `scratchpad/bidi_scan.py`, and the final classifier run (digit-dash-digit buckets). Browser harnesses: `scratchpad/serve/dash.html`, `scratchpad/serve/dash2.html` (serve with `python -m http.server`, open `dir=rtl`, screenshot). `python-bidi` was installed for cross-checking but its output was **not** trusted over the browser.
