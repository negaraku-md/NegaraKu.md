# French (fr) launch plan — 13th language

Status: PHASE 0 IN PROGRESS (2026-10-17). Grounded in the just-completed Spanish launch.
Sibling doc: `french-terminology-decisions.md` (content/register decisions).

Roadmap: ar → hi → es → **fr**. French is **Latin-script, LTR** — the same *lightest*
tier as Spanish: **no font workstream** (Montserrat/Lato/Noto already cover é è ê à â ç
î ï ô û ù ü « »), **no RTL**. It behaves exactly like en / es / vi / id. The only real
work is translation (chrome + corpus) and the registration touchpoints. **Reach is the
draw:** French is official in ~29 countries (~300M speakers, the fastest-growing by 2050
via West/Central Africa), a major diplomatic/UN language — big discovery upside.

## Registration touchpoints — add `'fr'` everywhere `'es'` now appears

| File | Change |
|---|---|
| `src/lib/categories.ts` | `Locale` union + `Localized` Partial `+ 'fr'` |
| `src/content.config.ts` | `lang` enum `+ 'fr'` |
| `src/lib/i18n.ts` | `LOCALE_NAMES` `fr: 'Français'`; `localeFromPath` `+fr`; `LOCALES` `+'fr'` (Phase 3); STRINGS table (~130 `fr` values, Phase 1) |
| `src/lib/seo.ts` | BCP47 `fr: 'fr'`; `articleJsonLd` inLanguage `fr`; org/site description `fr` |
| `astro.config.mjs` | `i18n.locales` `+fr`; `lastmodFor` seg-check `+'fr'`; sitemap `locales` map `fr: 'fr'` (Phase 3); `/fr` soft-launch sitemap filter (Phase 0) → drop (Phase 3); 21 `/fr` redirect mirrors (Phase 3) |
| `src/layouts/BaseLayout.astro` | `htmlLang` `+fr`; hreflang resolver `+fr`. **No font block, no `dir`** (Latin, LTR). |
| `src/styles/tokens.css` | **Nothing** — fr uses the default Latin stack (no `:lang(fr)` block, no vendored font). |
| `src/pages/fr/` | 40 route files cloned from `/es` (`'es'`→`'fr'`; French home title) |
| `scripts/translation-sync.mjs` | add `fr` to the topic-key regex `…\|es)$/` → `…\|es\|fr)$/` |
| enumerations (Phase 3) | `build-dashboard` SITE_LANGS, `export-hf` LANGS, `DashboardView`/`AnalyticsView`/`ArticleList` `+fr` (+ a free `LANG_COLORS` hue) |
| `scripts/build-og.mjs` (Phase 4) | `L()` signature `+fr`; the 6 chip/tagline labels `+fr`; `SENS` `+fr`. **Default LTR path — no new font, no embed.** |
| `src/lib/milestones.ts` (Phase 3) | 13th-language French milestone |
| ~45 components (Phase 1) | `L()`/`pick()` helpers `+fr?` param + branch (deterministic global replace); count copy **12 → 13** |

Corpus: **1,074** `knowledge/<cat>/<slug>.fr.md` via the Workflow tool (reuse the
spanish-corpus script, swap `es`→`fr` + the register prompt). en-master source +
the `.es.md` sibling as the frontmatter-structure template; governance
`lang:fr`, `status:draft`, `translationStatus:pending`, `reviewer:null`, `aiAssisted:true`.

## What's the SAME as Spanish (why fr is also the easiest tier)
- **No font workstream at all** — no vendored TTF, no Google-Fonts chrome block, no
  fontconfig, no `:lang()` block. Phase 4 OG cards are just `L()` labels + enumerations.
- **No RTL / bidi.**

## What's DIFFERENT from Spanish (the two traps)
- **milliard/billion** (§2 of terminology doc): EN billion 10⁹ = FR **milliard**; EN
  trillion 10¹² = FR **billion**. Worse than Spanish because FR "billion" is *spelled the
  same* as EN "billion" — a verification grep pass is mandatory.
- **malaisien vs malais** (§1): Malaysian = *malaisien*, Malay (ethnic/language) = *malais*.
  A real demonym false-friend; enforce in prompt + spot-check.

## Phases (same shape)
- **Phase 0 — register (soft-launch, noindex).** ✅ IN PROGRESS. All touchpoints except the
  Phase-3 ones. `fr` OUT of `LOCALES` + sitemap-filtered → `/fr` renders (Malay fallback)
  but noindex. Verify dev: `/fr` 200, `html lang="fr"` (ltr), noindex.
- **Phase 1 — chrome copy.** Data-layer maps (~700) + `L()` call sites (~1,180) → French,
  via multi-agent batches. Language-neutral calls fall back.
- **Phase 2 — corpus.** 1,074 articles en→fr via Workflow; validate + check-links strict;
  **billion→milliard verification grep**.
- **Phase 3 — open launch.** `fr` → `LOCALES`; drop `/fr` sitemap filter; sitemap locales
  map; `/fr` redirects; `lastmodFor`; enumerations; count 12→13; publish 1,074
  draft→published (sensitive → `reviewer: ashton-tan`); `translate:stamp`.
- **Phase 4 — OG cards (non-FB).** fr OG cards (trivial — default Latin path; `L()`+fr,
  `SENS`+fr). **Facebook excluded by default** (FB page + wiring done later, like ar/hi/es).

## Risk to watch: build memory at 13 languages
The 12-language build is green with a **16 GB /mnt swapfile** + a **12 GB astro heap** (both
live in `deploy.yml` / `package.json`); the 12-lang local build ran 137s with no OOM. A 13th
language (+1,074 articles, +~1,655 pages) grows the live set again. If the Phase-3 full build
throws **"JavaScript heap out of memory"** (V8) → **RAISE** the heap (12288 → 14336); swap
backs the larger RSS. If it OS-OOMs ("operation canceled") → raise the swapfile. Expect a
one-time ~15-min uncached OG regen at Phase 4. Launch isn't live until a deploy run is
**green** AND `/fr` returns 200 — watch `gh run watch … --exit-status` (don't pipe it) then curl.

## Standing constraints
- Never auto-push; commit each phase locally, deploy only on explicit "push".
- Sensitive articles → `reviewer: ashton-tan` at publish.
- Don't hand-edit `translationStatus`/`sourceContentHash`; use `translate:stamp`.
- This plan saved to `docs/plans/` (committed, held for push).
