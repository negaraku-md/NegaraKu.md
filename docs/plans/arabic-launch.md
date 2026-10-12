# Arabic (`ar`) launch plan — the 10th language, the FIRST RTL locale

_Read with `arabic-terminology-decisions.md` before any translation. `ar` is a
viewing-only locale (7th after ta/ja/ko/th/vi/id), translated **en→ar** (no close
source — follows the ta/ja/ko/th/vi model, NOT the ms-adapt model used for `id`)._

## Why Arabic
- **Reach:** MENA/GCC, and specifically Malaysia as a **global Islamic-finance & halal
  hub** — Arab investors, students, tourists, business. Net-new audience that cannot read
  the site today.
- **Strategic unlock:** doing RTL *once* builds the plumbing for Urdu/Farsi later. The RTL
  cost is a one-time investment, not per-language.

## The honesty check (what's cheap vs what's the real cost)
- **Registering `ar` is well-bounded** — data-driven switcher/hreflang, one route-dir
  clone, a handful of typed lists. Comparable to the `id` launch.
- **RTL is the real cost, and it's pervasive, not localized.** There is **zero `dir`/RTL
  handling in the repo today** (`<html>` has no `dir`; no RTL CSS anywhere). Physical-
  direction CSS (`margin-left/right`, `left/right`, `text-align:left/right`, `float`,
  `border-left/right`, `translateX`, arrow glyphs) appears **~88–167 times across ~30
  files**; the codebase is only *half*-migrated to logical properties.
- **Per-article corpus cost is higher than `id`** — Arabic is a full en→ar translation,
  not an ms→id adaptation.

## RTL approach (decision)
**Primary: migrate physical CSS → logical properties** (`margin-inline-start/end`,
`inset-inline`, `text-align:start/end`, `border-inline-start/end`, `padding-inline-*`).
This is the correct, LTR-safe fix (zero visual change for the 9 LTR locales, `global.css`
is already partway there), and it benefits the whole codebase. **Secondary: a small
`[dir="rtl"]` override layer** only for things that must *mirror* rather than flow —
directional arrow glyphs (→/›), a handful of decorative `::before`/`translateX` accents,
and dropdown anchoring. Mixed Latin/number tokens get **bidi isolation** (`<bdi>` /
`unicode-bidi:isolate` in chrome; a Unicode-isolate lint/fixer over `.ar.md` bodies).

---

## Phases

### Phase 0 — Foundation: register + RTL plumbing + Arabic font (soft-launch scaffold)
Boot `ar` as a **noindex soft-launch** (held OUT of `LOCALES`, sitemap-filtered — the
`id` pattern). Minimal boot set (compile/route-blocking items marked ⛔):
- ⛔ `src/lib/categories.ts` — `'ar'` → `Locale` (L24) + `Localized` Partial (L31).
- ⛔ `src/content.config.ts` — `'ar'` → `lang` enum (L200).
- ⛔ `src/lib/i18n.ts` — `localeFromPath` (L337) `+ 'ar'`; `LOCALE_NAMES` (L12) `ar:'العربية'`.
  **Keep `ar` OUT of `LOCALES` (L9) during soft-launch** → noindex.
- ⛔ `src/lib/seo.ts` — `BCP47` (L9) `ar:'ar'` (typed `Record<Locale>` → TS error if missing);
  `articleJsonLd` inLanguage (L147) `ar` branch; description maps (L25, L269) `ar:`.
- ⛔ `astro.config.mjs` — `i18n.locales` (L307) `+ 'ar'`; sitemap locales map (L320) `ar:'ar'`;
  **soft-launch sitemap filter** `!/\/ar(\/|$)/`; `lastmodFor` (L37) `+ ar`.
- ⛔ `src/layouts/BaseLayout.astro` — `htmlLang` (L84) + hreflang ternary (L122) `+ ar`;
  **add `dir`** — `const htmlDir = locale === 'ar' ? 'rtl' : 'ltr'` on `<html>` (L98).
- **Arabic font:** `src/styles/tokens.css` — add `'Noto Sans Arabic'`/`'Noto Naskh Arabic'`
  to `--font-title`/`--font-reading` (L44/46) + a `:root:lang(ar){…}` block (template at L91,
  the `vi` precedent). `BaseLayout.astro` — add `{locale==='ar' && …}` Google-Fonts
  preconnect/preload block (near L178-332). (Montserrat/Lato are Latin-only — the Arabic
  face MUST be the fallback.)
- **Routes:** create `src/pages/ar/` — 40 wrappers cloned from `src/pages/en/`, `locale='ar'`
  (en is the translation source), translating only the hardcoded `title=` strings.
- Worker (if applicable): `VIEW_LOCALES` + classify `pathKey` `+ ar`.
- **Verify:** build green; one `/ar` page renders **RTL** (dir flips, Arabic font loads),
  one Latin token (e.g. `RM2,000`) renders correctly inline, word counter scores > 0.

### Phase 0.5 — RTL layout migration (the engineering crux, do before chrome)
Convert physical-direction CSS → logical properties, highest-traffic/highest-density first,
verifying each LTR locale is pixel-unchanged:
1. **Global + chrome:** `src/styles/global.css` (blockquote `border-left`→`border-inline-start`
   L170; `.skip-link` L195/204), `Header.astro`, `Footer.astro`, `PageHero.astro`,
   `ArticleCard.astro` — plus the language-switcher dropdown anchoring (`Header.astro`
   L566-605) under `dir=rtl`, and the hero/wordmark split.
2. **Article template (most-viewed, most-directional):** `ArticleView.astro` (~21+ hits —
   body, **sticky sidebar L873**, TOC, trust rail), `ArticleList.astro` (~22).
3. **Data/viz views:** `AnalyticsView.astro` (`border-left` tiles L1777, bar/flow viz,
   `translateX`), `DashboardView.astro` (langBars, N-lang counts), `FaqView.astro`,
   `AboutView.astro`, `ContributeView.astro`, `LegalView.astro`, `HomeView.astro`.
4. **Directional glyphs:** flip breadcrumb/next-prev arrows (→/›) and decorative `::before`
   under `[dir=rtl]`.
5. **Bidi isolation:** wrap Latin/number runs in chrome (brand, RM, acronyms, URLs) with
   `<bdi>`/`unicode-bidi:isolate`; no isolation exists today.
Acceptance: `/ar` chrome mirrors correctly end-to-end; all 9 LTR locales visually identical
to before (logical props are a no-op for them).

### Phase 1 — Chrome localization (Arabic text)
Adapt from the **English** chrome values (en is the ar source):
- `i18n.ts` `STRINGS` (~143 keys) `ar:`; `subcategories.ts` (419), `categories.ts` (126),
  `intros.ts` (40), `milestones.ts` (34), `pageStats.ts`/`heroStats.ts`/`sponsors.ts`/
  `provenance.ts`/`llms.ts`/`seo.ts`/`exploreFeatures.ts` (~802 lib entries total) — all
  fallback-safe, so order is flexible.
- The inline `L()` helper in **~44 View/component files** — add an `ar?` param + branch and
  an Arabic positional arg at every call site (the single largest localization cost; multi-
  agent). **Count copy STAYS at nine during soft-launch** — do NOT bump to ten and do NOT add
  "العربية" to enumerations yet (that's Phase 3; launch-checklist pt.7).

### Phase 2 — Corpus (the big one, en→ar), 1,073 articles
- 1,073 masters → `.ar.md`, **translating from each article's English version** (`.en.md`
  or the en master), per `arabic-terminology-decisions.md`: **MSA**, **Western numerals**,
  Malaysian entities kept (Arabic descriptor + Latin acronym), transliteration rules.
- Multi-agent flat waves (≤6–8 non-recursive agents, checkpoint-commit, full field-list up
  front). Governance: `lang:ar, status:draft, translationStatus:pending, reviewer:null,
  aiAssisted:true`.
- **Deterministic passes (bake in or run as corpus-end deltas):** (a) **currency scale**
  (مليون/مليار/تريليون, like vi/id); (b) **bidi-isolation lint/fixer** — wrap mixed
  alphanumeric tokens (`RM2,000`, `Section 5(1)`, `P.U.(A)`, URLs, dates) in Unicode isolates
  so they don't misorder; (c) **sources localization** via the built map/apply pipeline
  (title translated + original in parens; Malaysian agencies → Arabic descriptor + acronym;
  news outlet/url/date verbatim).
- Audits before launch: field audit (seoTitle/verificationNeeded) + **register audit** (MSA,
  no leftover English prose, no dialect) + **bidi audit** (no unisolated mixed tokens).

### Phase 3 — Open launch
- Publish 1,073 draft→published (~sensitive → reviewer **ashton-tan**, standing default).
- Add `ar` to `LOCALES` (i18n L9); **drop the soft-launch sitemap filter**; re-add `ar` to
  live enumerations (DashboardView langBars, AnalyticsView LANG_ORDER/labels/colors,
  build-dashboard `SITE_LANGS` L13, export-hf `LANGS` L30/51, ArticleList chips); **count copy
  nine→ten + add "العربية" to enumerations** (AboutView/FaqView/SearchView/ContributeView/
  DonateTokenView/RolesView + i18n homeDescription); `/ar` redirect mirrors (~20, astro.config
  L228-250 template); milestones 10th-lang entry.
- Verify: build 0, health --strict 0, dashboard ar 1073/1073, `/ar` indexed + in sitemap,
  0 noindex, RTL correct on article + listing + dashboard.

### Phase 4 — Facebook + Arabic images
- Create the `ar` FB Page (e.g. facebook.com/negaraku.md.ar), assign to the "NegaraKu Poster"
  system user. `scripts/lib/facebook.mjs` — `+ar` in `LANGS` (L14), `LANG_POLICY` (Page id,
  since, perDay) (L39), `PAGES` (L68); `COUNTRY_TAG.ar` (#ماليزيا or #Malaysia) with an Arabic
  branch in `hashtag()`/`okForLang`; catNameMap regex (L172) `+ar`. post-backlog PROMPT/CTA +ar.
- **Arabic image pipeline (notable sub-workstream):** `card-brand.mjs` font stacks (L27-28) +
  an **embedded Arabic face** (base64 in `assets/og-fonts/`, like Montserrat/Lato) and CI must
  have the Noto Arabic family; `build-og.mjs` `L()` helper (L122) +ar; **RTL layout in the
  SVG** — right-anchor text (`text-anchor="end"`, x from the right), RTL wrapping, and verify
  librsvg/Pango shapes Arabic + applies bidi (it uses HarfBuzz, so shaping *should* work once
  the font is present — must be verified, else Arabic renders disconnected/left-aligned).
  Measure cards (`build-measure-cards.mjs`) same. `build-fb-covers.mjs` `LANGS` (L34) +ar row —
  regen all covers. AnalyticsView fbRows/FB_LANG +ar. [you] set up the Page (cover/bio/website
  /ar/category) with the Arabic tagline.

### Phase 5 — Verify
Full build + health green; dashboard census (ar 1073/1073); spot-check `/ar` chrome + a few
articles for **register** (MSA, no English leftovers), **bidi** (mixed tokens correct),
**RTL layout** (article/listing/dashboard mirror correctly), and **Arabic OG/measure cards**
(shaped, right-aligned, font correct).

---

## Effort summary
- **Registration:** small, bounded (≈ `id`).
- **RTL layout migration:** the crux — a multi-file logical-property migration (~30 files) +
  a `[dir=rtl]` override layer for glyphs + a bidi-isolation pass. Materially larger than any
  prior launch's infra.
- **Corpus:** full en→ar (higher per-article than id's ms-adapt), multi-agent, NO API.
- **Images:** a real Arabic SVG/bidi/font sub-workstream for OG + measure cards.
- Method = **MULTI-AGENT, NO API**. See [[negaraku-language-launch-checklist]],
  [[negaraku-sources-localization]], [[negaraku-reviewer-default]],
  [[negaraku-language-roadmap]], and `arabic-terminology-decisions.md`.
