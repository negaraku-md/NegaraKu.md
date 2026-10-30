# Data-driven SEO review — 2026-10-30

_Source: in-repo `public/api/gsc.json` (Google Search Console, 90-day window 2026-07-28 → 2026-10-23), `bing.json`, `ga4.json`. This closes the measurement loop: what are we getting found for, what isn't converting, and where to invest._

## Headline — the bottleneck is CONVERSION, not coverage
| metric | value |
|---|---|
| impressions (90d) | **356,155** |
| clicks | 3,808 |
| **CTR** | **1.1%** |
| avg position | 9.2 |

We are **seen a lot and clicked rarely**. We already rank (avg pos ~9 = bottom page 1 / page 2) and have huge impression volume, but CTR is very low. **The highest-ROI lever is converting existing visibility (ranking nudges + snippet/intent fixes), not publishing more content.** More content helps, but it's second-order to fixing the near-misses below.

## Action 1 — Hygiene: noindex internal dashboards (DONE this pass)
`/analytics` was indexed and ranking for **spam queries** (`ai49208`, `ai66616`, …) = **4,535 junk impressions (~1.3% of all impressions)** with 0 real intent, dragging site-wide CTR and wasting crawl budget. Fixed: added `noindex` to **analytics + dashboard + graph** pages (39 files, all 13 locales) — internal tooling/visualizations with no content-SEO value. Reversible (the `noindex` BaseLayout prop). The embed widget pages were deliberately **left indexable** (they're a distribution feature).

## Action 2 — The big lever: near-miss pages (pos 7–11, ~0% CTR, high impressions)
A handful of pages rank just below the clickable zone for clearly relevant queries and get almost no clicks. Climbing them into the top 5 and/or making the snippet answer the query directly is the single biggest win. Top targets (page · top query · impressions · position):

| impressions | pos | page | top query |
|---|---|---|---|
| 7,687 | 7.6 | `/en/malaysia/johor-riau-sultanate/` | "johor sultanate" |
| 2,045 | 8.8 | `/zh/government/ministry-of-domestic-trade-kpdn/` | "kpdn是什么部门" |
| 1,955 | 7.9 | `/es/malaysia/muhyiddin-yassin/` | "muhyiddin yassin" |
| 1,878 | 7.5 | `/es/malaysia/johor-riau-sultanate/` | "johor sultanate" |
| 951 | 11.1 | `/en/glossary/rakyat/` | "rakyat in english" |
| 881 | 5.3 | `/environment/…permanent-forest-reserves/` | "hutan simpanan kekal serasa" |
| 873 | 7.9 | `/states/perlis/` | "negeri terkecil di malaysia" |
| 816 | 9.7 | `/en/malaysia/melaka-sultanate/` | "malacca sultanate" |
| 805 | 8.6 | `/ko/malaysia/languages-spoken/` | "말레이시아 언어" |
| 763 | 11.0 | `/companies/glcs-and-glics-in-malaysia/` | "maksud glc dan glic" |

Clusters (where the demand concentrates):
1. **Malaysian history / sultanates** — Johor, Melaka, Malayan Union. Large multi-language impressions (en + es).
2. **"What is X" acronym/definition intent** — `kpdn是什么`, `pdrm是什么 / what is pdrm`, `mcmc tu apa`, `glc dan glic`, `pertahanan awam是什么`. Across zh / en / ms. **High-volume, high-intent, and easy to satisfy** with a direct-answer lead + matching title.
3. **States & geography** — smallest state (Perlis), Melaka capital, Putrajaya status, Titiwangsa range.
4. **Glossary terms** — "rakyat in english", language queries.

**The fix pattern (repeatable):** for each target, (a) make `seoTitle` + `summary`/`answer` lead with a direct answer to the query intent (the "what is X" pattern especially — Google rewards a liftable definition), and (b) strengthen the page to climb from pos 7–11 to top 5 (depth, internal links, FAQ). These are already near the top, so small nudges convert. This matches the established near-miss method ([[negaraku-seo-titles]]).

## Action 3 — Category CTR (directional; see data caveat)
Best-converting (double down): **property 4.6%, healthcare 2.9%, accounting 2.9%, law 2.6%, taxation 2.5%, settling-in 2.1%, business 2.1%**. Worst (big impressions, low CTR = fix first): **states 0.7%, companies 0.8%, sports 1.0%, government 1.0%** — government especially (13,816 imp, 0.97%) overlaps the "what is X" acronym cluster above, so Action 2 fixes it.

## Action 4 — Channels (GA4, consent-undercounted — directional only)
Session mix: **Organic Search 110 · Organic Social (Facebook) 74 · Direct 26 · AI Assistant 7.** Facebook is a real, material driver — keep the poster engine healthy. **Bing is growing fast** (Sept 45 → Oct 509 clicks). Countries: Malaysia 68, US 59, then Sweden/Japan — genuinely global, validating the multilingual bet.

## Data-quality finding (fix the pull)
`gsc.json`'s `byCategory`/`byLang` aggregates sum to only ~166k of the 356k total impressions, and `es` shows 22 imp in `byLang` vs 1,955 in near-misses — i.e. **the dimensional pulls in `scripts/pull-search-console.mjs` are row-limited and undercount.** Totals + page-level near-misses are reliable; the breakdowns are directional. Worth raising the GSC API `rowLimit` / paginating so future reviews have complete per-language/category numbers.

## Prioritized next steps
1. ✅ **Done:** noindex internal dashboards (this pass).
2. **Near-miss optimization batch** — rewrite `seoTitle` + lead answer for the top ~20 near-miss pages to match query intent (especially the "what is [acronym]" cluster across government/glossary), + internal-link/depth nudges. *Biggest, repeatable win.*
3. **Systematize the "what is X" pattern** across government/glossary acronym pages (kpdn, pdrm, mcmc, apm, glc…) — large, under-served "X是什么 / what is X / X tu apa" demand.
4. **Keep the working channels healthy** — Facebook poster + Bing (growing).
5. **Fix `pull-search-console.mjs`** row limits for complete future data.
