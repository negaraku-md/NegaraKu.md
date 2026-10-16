# Spanish (es) launch plan — 12th language

Status: PLANNED (2026-10-16). Grounded in the post-Hindi code audit.
Sibling doc: `spanish-terminology-decisions.md` (content/register decisions).

Roadmap: ar → hi → **es** → fr. Spanish is **Latin-script, LTR** — the *lightest*
tier yet: **no font workstream** (Montserrat/Lato/Noto already cover á é í ó ú ñ ü
¿ ¡) and **no RTL**. It behaves exactly like en / vi / id. The only real work is
translation (chrome + corpus) and the registration touchpoints. **Reach is the draw:**
Spanish is the world's 2nd-most-spoken native language (~500M) — big discovery upside.

## Registration touchpoints — add `'es'` everywhere `'hi'` now appears

| File | Change |
|---|---|
| `src/lib/categories.ts` | `Locale` union + `Localized` Partial `+ 'es'` |
| `src/content.config.ts` | `lang` enum `+ 'es'` |
| `src/lib/i18n.ts` | `LOCALE_NAMES` `es: 'Español'`; `localeFromPath` `+es`; `LOCALES` `+'es'` (Phase 3); STRINGS table (~130 `es` values, Phase 1) |
| `src/lib/seo.ts` | BCP47 `es: 'es'`; `articleJsonLd` inLanguage `es`; org/site description `es` |
| `astro.config.mjs` | `i18n.locales` `+es`; `lastmodFor` seg-check `+'es'`; sitemap `locales` map `es: 'es'` (Phase 3); `/es` soft-launch sitemap filter (Phase 0) → drop (Phase 3); 21 `/es` redirect mirrors (Phase 3) |
| `src/layouts/BaseLayout.astro` | `htmlLang` `+es`; hreflang resolver `+es`. **No font block, no `dir`** (Latin, LTR). |
| `src/styles/tokens.css` | **Nothing** — es uses the default Latin stack (no `:lang(es)` block, no vendored font). |
| `src/pages/es/` | 40 route files cloned from `/en` (`'en'`→`'es'`; Spanish home title) |
| `scripts/translation-sync.mjs` | add `es` to the topic-key regex `…\|ar\|hi)$/` → `…\|hi\|es)$/` (so es is freshness-tracked — the omission that silently skipped vi/id/ar before) |
| enumerations | `build-dashboard` SITE_LANGS, `export-hf` LANGS, `DashboardView`/`AnalyticsView`/`ArticleList` `+es` (+ a free `LANG_COLORS` hue) |
| `scripts/build-og.mjs` | `L()` signature `+es`; the 6 chip/tagline labels `+es`. **Default LTR path — no new font, no embed** (es resolves Montserrat/Lato like en). |
| `src/lib/milestones.ts` | 12th-language Spanish milestone |
| ~45 components | `L()`/`pick()` helpers `+es?` param + branch (deterministic global replace); count copy **11 → 12** |

Corpus: **1,074** `knowledge/<cat>/<slug>.es.md` via the Workflow tool (reuse the
hindi-corpus script, swap `hi`→`es` + the register prompt). en-master source +
the `.ar.md`/`.hi.md` sibling as the frontmatter-structure template; governance
`lang:es`, `status:draft`, `translationStatus:pending`, `reviewer:null`, `aiAssisted:true`.

## What's GONE vs Hindi (why es is the easiest launch)
- **No font workstream at all** — no vendored TTF, no Google-Fonts chrome block, no
  fontconfig, no `:lang()` block. Phase 4 OG cards are just `L()` labels + enumerations.
- **No RTL / bidi.**

## Phases (same shape)
- **Phase 0 — register (soft-launch, noindex).** All touchpoints except the Phase-3
  ones. `es` OUT of `LOCALES` + sitemap-filtered → `/es` renders (Malay fallback) but
  noindex. Verify dev: `/es` 200, `html lang="es"` (ltr), noindex.
- **Phase 1 — chrome copy.** Data-layer maps (~700) + `L()` call sites (~1,180) → Spanish,
  via multi-agent batches. Language-neutral calls fall back.
- **Phase 2 — corpus.** 1,074 articles en→es via Workflow; validate + check-links strict.
- **Phase 3 — open launch.** `es` → `LOCALES`; drop `/es` sitemap filter; sitemap locales
  map; `/es` redirects; `lastmodFor`; enumerations; count 11→12; publish 1,074
  draft→published (sensitive → `reviewer: ashton-tan`); `translate:stamp`.
- **Phase 4 — OG cards (non-FB).** es OG cards (trivial — default Latin path). **Facebook
  excluded by default** (FB page + wiring done later, like ar/hi).

## Risk to watch: build memory at 12 languages
The 11-language build needed the fix: a **16 GB /mnt swapfile** + a **12 GB astro heap**
(swap absorbs the RSS peak; the heap fits the live set) — both already live in
`deploy.yml` / `package.json`. A 12th language (+1,074 articles, +~1,650 pages) grows the
live set again. If the Phase-3 full build throws **"JavaScript heap out of memory"** (V8),
the live set now exceeds 12 GB → **RAISE** the heap (e.g., 12288 → 14336); swap already
backs the larger RSS, so raising is now the correct move (the opposite of the pre-swap
era). If it instead OS-OOMs ("operation canceled"), raise the swapfile. Expect a one-time
~15-min uncached OG regen. Launch isn't live until a deploy run is **green** AND `/es`
returns 200 — watch `gh run watch … --exit-status` (don't pipe it) then curl.

## Standing constraints
- Never auto-push; commit each phase locally, deploy only on explicit "push".
- Sensitive articles → `reviewer: ashton-tan` at publish.
- Don't hand-edit `translationStatus`/`sourceContentHash`; use `translate:stamp`.
- This plan saved to `docs/plans/` (committed, held for push).
