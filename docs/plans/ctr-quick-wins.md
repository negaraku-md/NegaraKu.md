# CTR quick-wins — GSC near-miss analysis (Nov 2026)

**Source data:** `public/api/gsc.json` (Google Search Console archive, window 2026-08-04 → 2026-10-30),
cross-checked against `ga4.json` (real sessions) and `cf-traffic.json` (edge requests).
**Trigger:** reconciling an Ahrefs screenshot that claimed **India = 82.6%** of traffic.

---

## 1. The Ahrefs "India 82.6%" is a modelling artifact — ignore it

Three independent **ground-truth** sources agree the audience is **Malaysia-first**, India negligible:

| Source (real) | Measures | India share | Who actually dominates |
|---|---|---|---|
| Google Search Console | real Google clicks | **7 clicks (0.1%)** (Hindi) | en 37% · ms 24% · zh 14% = **75% MY/diaspora/SEA** |
| GA4 | real sessions | **6 of 855 (0.7%)** | Malaysia 34% · US 18% · Indonesia/SG/JP/TH |
| Cloudflare | real edge requests | not in top rows | MY + SG humans; remainder is bots (US-Unknown, Yandex/Google/Bing) |

Ahrefs' "Est. organic traffic / Traffic by location" is **modelled** from its keyword DB (it credits you
estimated clicks wherever a keyword you rank for has volume, geolocated to that volume's market), and its
"Traffic Analytics" panel is clickstream estimation — both India/US-skewed and bot-contaminated for a young,
**DR 20** site. Trust GSC/GA4 over Ahrefs here.

## 2. The real bottleneck is POSITION, not CTR-at-position

- **568,834 impressions → 6,047 clicks = 1.1% CTR, average position 9.** You are *seen* constantly
  (half a million impressions) but rank page-1-bottom / page-2, where CTR is naturally ~1–2%.
- **Titles are already optimised.** Of the top 31 near-miss pages, **~27 already carry a query-matched
  `seoTitle`** (prior near-miss title batch). Spot checks: `kpdn是什么部门` page →
  `"KPDN是什么部门？…"`; `rakyat in english` → `"Rakyat in English: meaning…"`;
  `sukma games` → `"SUKMA (Malaysia Games): What It Is…"`. The copy lever is essentially spent.
- **Therefore the dominant lever is ranking position** → **backlinks** (DR 20 is the ceiling) and
  **internal links** (just reinforced: +288 this sprint). Secondary: content depth/freshness on the
  specific near-miss pages below.

## 3. Ranked near-miss pages (highest missed-impression volume)

These rank in the clickable-adjacent zone (pos 3–20) with near-zero CTR. "Ranking" = climb to top-5 is the
lever (title already fine); "Title/snippet" = ranks pos ≤6 yet ~0 clicks, so the snippet is the fixable gap.

| Impr | Pos | Lang | Page | Top query | Lever |
|---|---|---|---|---|---|
| 9159 | 7.8 | en | `/en/malaysia/johor-riau-sultanate` | johor sultanate | Ranking (climb to top-5) |
| 6059 | 7.4 | es | `/es/malaysia/johor-riau-sultanate` | johor sultanate | Ranking (climb to top-5) |
| 4043 | 7.2 | es | `/es/malaysia/muhyiddin-yassin` | muhyiddin yassin | Ranking (climb to top-5) |
| 2236 | 8.0 | zh | `/zh/government/ministry-of-domestic-trade-kpdn` | kpdn是什么部门 | Ranking (climb to top-5) |
| 2045 | 8.1 | en | `/en/sports/sukma-games` | sukma games | Ranking (climb to top-5) |
| 1947 | 9.4 | en | `/en/malaysia/melaka-sultanate` | malacca sultanate | Ranking (climb to top-5) |
| 1301 | 9.7 | en | `/en/malaysia/muhyiddin-yassin` | muhyiddin yassin | Ranking (climb to top-5) |
| 1285 | 5.3 | es | `/es/arts-culture/jawi-script` | jawi script | Title/snippet |
| 1229 | 7.9 | en | `/en/companies/genting-group` | genting group | Ranking (climb to top-5) |
| 1220 | 8.7 | en | `/en/malaysia/malayan-union` | malayan union | Ranking (climb to top-5) |
| 1157 | 11.2 | en | `/en/glossary/rakyat` | rakyat in english | Ranking (climb to top-5) |
| 1059 | 10.4 | ms | `/states/melaka` | ibu negeri melaka | Ranking (climb to top-5) |
| 922 | 8.5 | ko | `/ko/malaysia/languages-spoken` | 말레이시아 언어 | Ranking (climb to top-5) |
| 827 | 11.1 | ms | `/malaysia/titiwangsa-range` | banjaran titiwangsa | Ranking (climb to top-5) |
| 781 | 5.0 | ms | `/environment/malaysias-rainforests-and-permanent-forest-reserves` | hutan simpanan kekal | Title/snippet |
| 672 | 7.2 | ms | `/states/perlis` | negeri terkecil di malaysia | Ranking (climb to top-5) |
| 627 | 6.4 | id | `/id/companies/ytl-group` | ytl corporation | Ranking (climb to top-5) |
| 593 | 8.4 | en | `/en/arts-culture/kristang-eurasian-culture` | kristang language | Ranking (climb to top-5) |
| 435 | 7.8 | zh | `/zh/government/pdrm` | pdrm是什么 | Ranking (climb to top-5) |
| 426 | 9.7 | ms | `/companies/glcs-and-glics-in-malaysia` | maksud glc dan glic | Ranking (climb to top-5) |

**Theme:** these are high-value Malaysia-intent entity/history/definition queries (sultanates, PMs, SUKMA,
GLC/GLIC, agency "是什么部门" definitions). You own the right page; you're one-to-two positions short of clicks.

## 4. The one genuine title lever found: PM-bio `seoTitle` standardisation

Across the PM-biography set, `seoTitle` coverage is inconsistent:

| PM | seoTitle coverage | Action |
|---|---|---|
| **tunku-abdul-rahman** (1st), **abdul-razak-hussein** (2nd), **hussein-onn** (3rd), **abdullah-ahmad-badawi** (5th) | was 13/13 name-only | **WIRED** → descriptive, 13 langs each (sourced from each file's own body) |
| **anwar-ibrahim** | 0/13 | **WIRED** → descriptive, 13 langs |
| **mahathir-mohamad** | 1/13 | **WIRED** → descriptive, 13 langs |
| muhyiddin-yassin (2/13), ismail-sabri-yaakob (1/13) | partial | **SKIP** — `sensitivity: legal-proceedings` + "not reviewed / live legal matter / not public" banner |
| najib-razak (0/13) | — | **SKIP** — sub-judice strong banner |

**Canonical pattern:** `{Localised name}: {Ordinal} Prime Minister of Malaysia ({term years})`
— e.g. `Anwar Ibrahim: 10th Prime Minister of Malaysia (2022–present)`. Freshness-neutral field
(no translation re-stamp). Only `anwar-ibrahim` + `mahathir-mohamad` were wired (clean, published, no legal
banner, highest search volume). The 3 legally-sensitive PM pages were deliberately left untouched.

## 5. Recommended next levers (in priority order)

1. **Backlinks** — the DR-20 ceiling caps every page at ~position 7–9. This is the single biggest lever and
   the standing SEO conclusion ("real lever = backlinks").
2. **Internal links** — done this sprint (+288); keep feeding the near-miss pages above with contextual links
   from related articles to pass authority.
3. **Content refresh** on the top-10 near-miss pages — depth + freshness signals to nudge pos 8 → 5.
   - **DONE (2026-11-19):** Johor-Riau + Melaka sultanates (the two highest-impression near-miss pages) given a
     sourced depth expansion ×13 langs each — Melaka: golden-age section (Ming China/Zheng He, territorial reach,
     Tun Perak) + related-reading links; Johor: turbulent-century section (1641 Dutch capture of Melaka, Johor-Jambi
     war, Bugis Yang Dipertuan Muda). Cited OpenStax/Britannica (Melaka) and the Johor Sultanate record. Also fixed a
     stale "held in draft" footer on both. Remaining: SUKMA, Malayan Union, KPDN.
4. **DONE** (2026-11-19): all non-sensitive PM bios now carry the descriptive `seoTitle` pattern —
   anwar + mahathir (prior commit) and the four name-only historical PMs (tunku 1st, razak 2nd, hussein-onn 3rd,
   badawi 5th) × 13 langs each, sourced from each file's own body. The 3 legal-skip pages
   (muhyiddin, ismail-sabri, najib) remain deliberately untouched.

*Do NOT chase the Ahrefs India number. The real audience is Malaysia-led and on-strategy.*
