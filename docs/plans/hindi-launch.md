# Hindi (hi) launch plan — 11th language

Status: PLANNED (2026-10-13). Grounded in a full post-Arabic code audit.
Sibling doc: `hindi-terminology-decisions.md` (content/register decisions).

Hindi is the 4th-from-last on the roadmap (ar → **hi** → es → fr). It is the
**second non-Latin script** (Devanagari) but, unlike Arabic, it is **LTR** — so
the whole RTL workstream (Arabic's Phase 0.5: `dir` plumbing, `rtl.css`, logical-
property migration, bidi/arrow passes, ~30 files) **does not exist here**. That
was the bulk of the Arabic effort; Hindi is substantially lighter.

## What's the same as Arabic (reuse the proven mechanics)

Registration touchpoints — add `'hi'` everywhere `'ar'` currently appears:

| File | Change |
|---|---|
| `src/lib/categories.ts` | `Locale` union `+ 'hi'`; `Localized` Partial `+ 'hi'` |
| `src/content.config.ts` | `lang` enum `+ 'hi'` (line ~200) |
| `src/lib/i18n.ts` | `LOCALE_NAMES` `hi: 'हिन्दी'`; `localeFromPath` `+hi`; `LOCALES` `+'hi'` (Phase 3); STRINGS table (~129 `hi` values, Phase 1) |
| `src/lib/seo.ts` | BCP47 `hi: 'hi'`; `articleJsonLd` inLanguage `hi`; description map `hi` |
| `astro.config.mjs` | `i18n.locales` `+hi`; `lastmodFor` seg-check `+'hi'`; sitemap `locales` map `hi: 'hi'` (Phase 3); `/hi` soft-launch sitemap filter (Phase 0) → drop (Phase 3); `/hi` redirect mirrors (Phase 3) |
| `src/layouts/BaseLayout.astro` | `htmlLang` `+hi`; hreflang `+hi`; **Noto Sans Devanagari** Google-Fonts block for `locale==='hi'` (mirror the `ar` Noto Sans Arabic block). **No `dir` change — LTR.** |
| `src/styles/tokens.css` | Noto Sans Devanagari into `--font-title`/`--font-reading` defaults + a `:root:lang(hi)` block (mirror `:root:lang(ar)`, but LTR) |
| `src/pages/hi/` | 40 route files cloned from `src/pages/en/` (`locale='hi'`, Hindi home title) |
| `scripts/translation-sync.mjs` | **CRITICAL:** add `hi` to the topic-key regex `/^(.*)\.(en\|zh\|ms\|ta\|ja\|ko\|th\|vi\|id\|ar)$/` → `…\|ar\|hi)$/`. (ar/vi/id were silently never freshness-tracked because this was missed — do not repeat.) |
| `scripts/build-dashboard.mjs`, `scripts/export-hf-dataset.mjs` | `SITE_LANGS`/`LANGS` `+hi` |
| `src/components/DashboardView.astro`, `AnalyticsView.astro`, `ArticleList.astro` | locale enumerations `+hi` (`LANG_NAMES`, `langBars`, `LANG_ORDER`, `fbRows`/`FB_LANG`, `LANG_COLORS` `hi: '<pick a free hue>'`, chips) |
| `scripts/build-og.mjs` | `L()` signature `+hi`; the 6 chip/tagline call sites `+hi` Hindi labels. **No RTL layout branch** — Hindi uses the default LTR path. |
| `src/lib/milestones.ts` | 11th-language Hindi milestone entry |
| ~45 components | `L()`/`pick()` helpers `+hi?` param + branch (deterministic global replace, as for `ar`); count copy **10 → 11** |

Corpus: **1,074** `knowledge/<cat>/<slug>.hi.md` created via the Workflow tool
(reuse `workflows/scripts/translate-ar-corpus-*.js`, swapping `ar`→`hi` and the
register prompt). en-master source + the article's `.id.md`/base as the
frontmatter template; governance `lang:hi`, `status:draft`,
`translationStatus:pending`, `reviewer:null`, `aiAssisted:true`.

## What's NEW for Hindi (Devanagari font workstream)

1. **Chrome font:** Noto Sans Devanagari, loaded only on `/hi` pages via a
   BaseLayout `<link>` block (exactly like `ar`'s Noto Sans Arabic). Small face,
   not the heavy CJK path.
2. **OG-card font:** vendor `assets/og-fonts/NotoSansDevanagari-Regular.ttf`
   (+ `-Bold.ttf` if the weight is used) from `google/fonts` (OFL). Add
   `'Noto Sans Devanagari'` to `TITLE_FONT`/`BODY_FONT` in
   `scripts/lib/card-brand.mjs`. CI already registers every `assets/og-fonts/*.ttf`
   into fontconfig (`cp … ~/.fonts/` + `fc-cache -f` in deploy.yml), so the cards
   resolve it by family name.
   **DO NOT base64-embed the font** in the SVG — that is exactly what segfaulted
   librsvg on CI for Arabic. Resolve via fontconfig like Tamil/Thai/CJK. The
   `AR_FONTS`/embed path stays empty; `build-og-safe.mjs` already guards the step.

## What's GONE vs Arabic

- **No Phase 0.5 at all** — no `dir="rtl"`, no `rtl.css`, no logical-property
  migration, no bidi/arrow micro-pass. Devanagari is LTR; the LTR chrome already
  works.
- No RTL layout branch in `build-og.mjs`.

## Phases

- **Phase 0 — register (soft-launch, noindex).** All registration touchpoints
  above EXCEPT the Phase-3-marked ones. `hi` stays OUT of `LOCALES` and is
  sitemap-filtered, so `/hi` pages render (Malay fallback content) but are
  `noindex` and absent from the switcher. Chrome Devanagari font wired. Verify on
  dev: `/hi` 200, `html lang="hi"` (dir ltr), font loads, noindex.
- **Phase 1 — chrome copy.** Data-layer maps (~700 strings) + `L()` inline copy
  (~1,170 call sites) → Standard Hindi, via multi-agent batches. Language-neutral
  calls (A–Z, AI, CSV, brand names) fall back to `en`/`ms`.
- **Phase 2 — corpus.** 1,074 articles en→hi via Workflow (parallel agents).
  Validate (`validate-frontmatter` 0, `check-internal-links --strict` 0).
- **Phase 3 — open launch.** Add `hi` to `LOCALES`; drop the `/hi` sitemap
  filter; add `hi` to the sitemap `locales` map; `/hi` redirect mirrors;
  `lastmodFor` `+hi`; enumerations (dashboard/analytics/export-hf/ArticleList);
  count 10→11; publish 1,074 draft→published (sensitive → `reviewer: ashton-tan`,
  per standing default); `npm run translate:stamp`.
- **Phase 4 — OG cards (non-FB).** Devanagari OG cards via vendored font +
  fontconfig (no embed); `L()` labels; regenerate. **Facebook excluded by
  default** (same as Arabic) — FB Page + `facebook.mjs` wiring + per-language
  queue done later only if asked.

## Risk to watch: build memory at 11 languages

The Arabic launch OOM-killed the CI build until the astro heap was lowered
`10240 → 8192` (see `[[negaraku-build-perf]]`). Adding an **11th** language
(+1,074 articles, +~1,650 pages, +~1,100 OG cards) grows the content store, the
render set, and the OG step again. Before/at Phase 3's full build:
- Expect a one-time ~14-min uncached OG regen (cache key changes when
  `build-og.mjs`/`card-brand.mjs` change; it repopulates after one green build).
- If the astro phase OOM-kills again (silent "operation was canceled" during
  "Building static entrypoints"), the live content store is still only a few GB,
  so lower the heap further to force earlier GC (8192 → 7168/6144) rather than
  raising it. A genuinely-too-large working set would instead need a larger
  runner — escalate then, don't guess.
- **Launch isn't live until a deploy run reaches a GREEN conclusion AND `/hi`
  returns 200 on the live site.** A push merely triggering a run ≠ live (Arabic's
  first two runs triggered then failed). Watch `gh run watch … --exit-status`
  without piping it (a pipe masks the exit code), then `curl /hi/`.

## Standing constraints (unchanged)

- Never auto-push; commit each phase locally, deploy only on explicit "push".
- Sensitive articles (`sensitivity != none`) → `reviewer: ashton-tan` at publish.
- Don't hand-edit `translationStatus`/`sourceContentHash`; use `translate:stamp`.
- Save/commit this plan to `docs/plans/` (done); held for push.
