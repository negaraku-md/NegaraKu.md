# SEO / AEO Title Standard — NegaraKu.md

How we title pages for search engines **and** AI answer engines. Applies to every
article's `title` and `seoTitle`, in all 13 languages. Derived from the 2026-11-20
geo-audit + a study of competitor patterns (3E Accounting).

> **One-line rule:** the geo-word "Malaysia" earns its place **per topic, not by
> blanket** — include it when a reader in another country would search the same
> concept; omit it when the topic is already, unmistakably Malaysian.

---

## 0. Why we don't copy the competitor

3E Accounting stamps "Malaysia" into almost every service-page title (often **twice** —
`"E-Stamping Services in Malaysia – 3E Accounting Malaysia"`). That is correct **for
them**: a global firm whose Malaysia pages must announce their jurisdiction and match
`"<service> Malaysia"` commercial queries.

**We are the opposite.** Every NegaraKu.md page is about Malaysia; the domain
(`negaraku.md`) and site-wide context already carry jurisdiction. Blanket-stamping
"Malaysia" would be redundant, waste the 60-char title budget, and read as templated
SEO-spam to quality classifiers (which slightly **hurts** AI-engine trust). So we are
selective — and that selectivity is itself a quality signal.

---

## 1. `title` is for the human; `seoTitle` is for the machine

- **`title`** — the on-page heading. Keep it editorial, specific, readable. Narrative
  hooks are fine here ("Two Bills for One Stay").
- **`seoTitle`** — the `<title>` / SERP string (`seoTitleFor()` uses `seoTitle ?? title`).
  This is where the **concept keyword + geo-word** go.
- **Never degrade a good on-page title for SEO.** If the editorial title has no keyword,
  that is exactly when you add a `seoTitle` — you keep the hook on-page and give the
  SERP/AI a matchable string. An editorial-hook page shipping to the SERP with *no
  keyword at all* is the worst case; fix it with `seoTitle`, not by rewriting `title`.

---

## 2. The geo-word test (include vs omit)

Ask: **would a reader in another country search this exact concept?**

| INCLUDE "Malaysia" (localized) | OMIT it |
|---|---|
| Generic cross-country concept: income tax, minimum wage, company registration, work visa, probate, stamp duty, trademark, freehold/leasehold, audit requirement, consumer rights, public holidays, cost of living | Inherently-Malaysian **proper noun**: dish/festival names (Nasi Lemak, Hari Raya), place & state names (Penang, Johor), agency acronyms (JPN, BOMBA, MITI), named Acts (Companies Act 2016, FSA 2013), named schemes (MUET, PTPTN, MyKad), specific company profiles (Maybank, CIMB) |
| The query is geo-qualified ("… Malaysia requirements") | The proper noun already geo-locates; the domain carries jurisdiction |

The proper noun **is** the search term. "Maybank Malaysia", "MUET Malaysia", "Companies
Act 2016 Malaysia" add nothing — skip.

---

## 3. Mechanics

1. **Once is the ceiling.** Never repeat the geo-word; no `"… in Malaysia – <brand>
   Malaysia"` stuffing. (This is 3E's anti-pattern.)
2. **Front-load the concept.** Put the thing people search first within budget.
   `"Overnight Policy Rate (OPR) Malaysia"` or `"Malaysia Minimum Wage vs Median Income"` —
   concept + geo lead, never the geo-word burying the concept.
3. **60-char `<title>` budget, and leave room for the freshness stamp.** `seoTitleFor()`
   appends `" (2026 Guide)"` (~13 chars) to fresh `guide`-type articles, else `" (2026)"`
   (~7), **only if it fits**. So: `guide` articles → keep the base `seoTitle` **≤ ~47**
   so the year survives; everything else **≤ 60**. **Never hard-code a year** in
   `seoTitle` — the function stamps it dynamically and skips if you already wrote one.
4. **Localize the geo-word per language** — never ship English "Malaysia" into a
   non-English `seoTitle`:

   | lang | geo-word | lang | geo-word | lang | geo-word |
   |---|---|---|---|---|---|
   | ms | Malaysia | ja | マレーシア | ar | ماليزيا |
   | en | Malaysia | ko | 말레이시아 | hi | मलेशिया |
   | zh | 马来西亚 | th | มาเลเซีย | es | **Malasia** |
   | ta | மலேசியா | vi | Malaysia | fr | **Malaisie** |
   | id | Malaysia | | | | |

   Note es/fr localize the **country name itself** (Malasia / Malaisie), not "Malaysia".
   A per-language `seoTitle` carrying an English geo-word is a **bug to fix**, not a pattern.
5. **Neutral, factual, no clickbait.** No 攻略 / 推荐 / 排名, no "best / cheapest / top
   2026" framing — consistent with the trust-moat strategy. `"Stamp Duty on Property in
   Malaysia"`, not `"Malaysia's BEST Stamp Duty Hacks 2026"`.

---

## 4. The AEO reality check (don't over-invest in titles)

For **AI answer engines** (ChatGPT, Perplexity, Google AI Overviews, Gemini) the title is
a **minor** lever. They retrieve by meaning, entity grounding, source authority and
freshness — not keyword-in-title matching. What actually wins citations, in order:

1. **Entity grounding in the body** — name the jurisdiction + the governing body/Act once
   in the answer ("under the Income Tax Act 1967…", "the EMGS Student Pass…").
2. **Question-shaped structure** — a clear `answer`, `keyTakeaways`, `faq` (FAQPage JSON-LD),
   and the `stayFacts` "At a glance" card.
3. **Sourced, current facts** — citations + freshness stamp; shape-only on rot-prone figures.

A geo-word in the title helps disambiguation **at the margin**. Fix the obvious title gaps
(this standard), then put the real effort into the sourced answer, not title micro-tuning.

---

## 5. Operating rules

- **New articles:** apply §2 at authoring time; this is part of the article standard.
- **Stability matters:** don't churn titles repeatedly — a good title, set once, ranks
  better than one that keeps changing.
- **Re-audit, don't blanket-stamp:** run `scratchpad/seo-geo-audit.mjs` (classifies every
  English rendering by geo-coverage + category prior) periodically; hand-pick the genuine
  generic-concept gaps rather than stamping every page.
- **Freshness-neutral & low-risk:** `seoTitle` is **not** a `TRANSLATED_FIELD`, so edits
  cause no translation cascade (0 stale). But it is a **live-SEO** change — it deploys on
  push, so batch edits and avoid churn.

---

## 6. Current state (2026-11-20 audit)

- 1,390 English articles; **63% already carry the geo-word** where it belongs.
- Food / tourism / culture / states / sports correctly omit it.
- The absences are **overwhelmingly proper-noun pages where omission is correct**.
- Genuine add-the-geo-word gap: a **small hand-picked set (~12)**, mostly editorial-hook
  pages that currently ship to the SERP with no keyword. Our title hygiene is already
  strong; selectivity is the standard, not a blanket sweep.
