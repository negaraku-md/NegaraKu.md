# Korean (`ko`) launch — project plan

_6th public language, after ms · en · zh · ta · ja. Mission: "let the world know about Malaysia" — in Korean too._
_Reuses the Japanese pipeline end-to-end. Authoritative checklist: [[negaraku-language-launch-checklist]]. Terminology pattern: [[negaraku-ja-terminology-decisions]]._

_Status: **Phase 0 DONE (2026-09-25)**, Phase 1 next. Owner tags: **[me]** = Claude, **[you]** = user (accounts/approvals only)._

---

## Goal & definition of done
Korean is **launched** only when *everything a `/ko` reader sees is Korean* — not just the articles. Verified by loading every page type in `/ko` (home, pillar, category, topic list + controls, article, dashboard, footer) with **zero Malay fallback**, health + build green, and the dashboard reading **1073/1073** for `ko`.

## What already exists (no work needed)
- Translate pipeline: `scripts/translate.mjs`, `phase2-translate-write.mjs`, `phase2-translate.workflow.js`, `publish-translations.mjs`, `translation-sync.mjs`.
- **KO Facebook Page exists** (id `1308994995630346`) + assigned to the "NegaraKu Poster" system user.
- 1,073 published masters per language — the `ko` translation target.
- ja is the template: every chrome file already carries a `ja` key, so `ko` slots in beside it.

## Effort snapshot
| Phase | What | Owner | Rough effort |
|---|---|---|---|
| 0 | Foundation (font, LOCALES, routes) | [me] | ~half day |
| 1 | Chrome localization (do the ja-gaps up front) | [me] | ~1 day |
| 2 | Corpus translation (1,073 × body+frontmatter) | [me] | the bulk — multi-agent waves over several runs |
| 3 | Open launch + publish | [me] (+[you] reviewer sign-off) | ~half day |
| 4 | Facebook activation | [me] (+[you] Page website) | ~1–2 hrs |
| 5 | Verify | [me] (+[you] spot-check) | ~2 hrs |

---

## Phase 0 — Foundation ✅ DONE 2026-09-25 (commit 9e9f45d8, local)
Build green: 1,631 `/ko` pages, `noindex`, `<html lang="ko">`, Noto Sans KR loaded, excluded from sitemap; ta/ja unaffected. Terminology doc written (`docs/plans/korean-terminology-decisions.md`).
- [x] **Korean webfont** — add a self-hosted Hangul font (e.g. `@fontsource/noto-sans-kr`) alongside the existing Fontsource + fontaine metric-fallback setup ([[negaraku-font-optimization]]); wire it for `:lang(ko)`. Ensure the OG-card renderer (`scripts/build-og.mjs`) has the Korean font available in CI (ja needed a CJK apt-cache step — extend it for Hangul).
- [ ] **`ko` in the locale spine**: `src/lib/i18n.ts` `LOCALES` → add `'ko'`; `astro.config.mjs` `i18n.locales` + the `locales:{…}` hreflang map (`ko: 'ko'`).
- [ ] **`/ko` routes**: the thin route files per page (mirror `/ja`), so `/ko`, `/ko/<cat>/<slug>`, `/ko/dashboard`, `/ko/analytics`, `/ko/contributor-guide`, etc. resolve.
- [ ] **Terminology decisions doc** — record deliberate Korean register/term choices *before* mass translation (Malaysian statute names, honorifics, 한자 vs 한글, agency names) so the corpus is consistent; reuse the ja pattern. Save as `docs/plans/korean-terminology-decisions.md` + a memory note.
- [ ] Search: note Pagefind has no Korean stemming (search still works, just no root-word matching) — accept, like ja/zh.

## Phase 1 — Chrome localization (do the ja-gaps UP FRONT)
The reliable finder: any `src` file where the `ta`/`ja` token count exceeds `ko` is a gap. Concrete spots (all currently `ko:0`):
- [ ] `src/lib/i18n.ts` — every `t()`/UI string key gets a `ko` value; every inline `L(ms,en,zh,ta,ja)` call gets a 6th `ko` arg (a 5-arg call = untranslated → falls back to Malay).
- [ ] **`src/lib/subcategories.ts`** — 110 `SUBCATEGORY_LABELS` (the "TOPICS" chips) need `ko` (the #1 most-visible ja miss — do first).
- [ ] **`src/lib/intros.ts`** — 20 `CATEGORY_INTRO` essays need `ko`.
- [ ] `src/lib/categories.ts` — 82 taxonomy labels need `ko`.
- [ ] **`src/components/ArticleList.astro`** — add `'ko'` to the language-availability chip array (the badge on list/worklist rows).
- [ ] **`src/components/DashboardView.astro`** — add `ko` to `fbRows` + the "coverage across N languages" panel count/label.
- [ ] **`src/components/FaqView.astro`** — bump the "languages available" count + append Korean, in ALL locale variants.
- [ ] **DATA objects `{ms,en,zh,ta,ja}` accessed as `obj[locale]`** (blank-render bug class, NOT L()): HomeView hero unit labels, `seo.ts` JSON-LD descriptions, `sponsors.ts`, `provenance.ts`, `llms.ts` CORPUS_HEADER, the 404 page. Add `ko`; widen any `Record<ContentLocale>` types to include `ko`.
- [ ] Grep sweep for any remaining `['ms','en','zh','ta','ja']` / `ms|en|zh|ta|ja` hardcodes and add `ko`.
- [ ] **Accepted residuals** (never localized for ta/ja either — leave unless we decide otherwise): `llms.ts` INTRO, `build-og.mjs` L helper (OG labels render EN), `scan.py`/`flag-needs-update.mjs` LOCALES, `build-changelog.mjs` titleI18n. `content.config.ts` masterLanguage enum stays ms/en/zh (correct — translations are never masters).

## Phase 2 — Corpus translation (the bulk)
- [ ] Build the translate file-list = **live masters only** — EXCLUDE any master with `status: archived` (the retired-duplicate trap that made ja read 1094 vs 1073; do this up front).
- [ ] Translate all 1,073 topics → `.ko.md` via **multi-agent waves** (reuse `translate.mjs` / `phase2-translate`), applying the Phase-0 terminology decisions for consistency.
- [ ] Preserve frontmatter correctly: `translationStatus`/`sourceContentHash` are DERIVED — run `npm run translate:stamp` after each wave (never hand-set); `predev`/`prebuild` auto-flip stale.
- [ ] Guard rails from past launches: no inner ASCII quotes in double-quoted frontmatter scalars (fails `astro build` though it passes validate — [[negaraku-yaml-inner-quotes-gotcha]]); run a strict js-yaml + full build before pushing a batch.

## Phase 3 — Open launch & publish
- [ ] Publish the `ko` corpus (`publish-translations.mjs`). Non-sensitive publish freely; **sensitive articles (~204, mirroring ja) need a named human reviewer** — [you] confirm the reviewer (ja used `ashton-tan`); the scan blocks reviewed/published sensitive with a null reviewer.
- [ ] Add `/ko/...` mirrors of every ms `redirects` entry in `astro.config.mjs` so retired-dupe URLs consolidate (ta/ja both needed this).
- [ ] Sitemap + hreflang + language switcher pick up `ko` automatically once it's in LOCALES (verify).
- [ ] Verify dashboard `perLangCoverage` reads **1073/1073** for `ko` and `trilingual.one`=0 (proves no stray archived/half-translated files).

## Phase 4 — Facebook activation
- [ ] `scripts/lib/facebook.mjs`: add `ko` to `LANGS`; add a `LANG_POLICY` row (`enabled/perDay:5/since:<launch>/windows:ALL_WINDOWS`, ramped for a new Page); extend `articleBases()` regex, `catNameMap()` (`ko: m[7]`), `COUNTRY_TAG`, and `hashtags()` (Korean = non-CJK-Han; treat like ta/latin unless we want Hangul tags).
- [ ] `scripts/post-backlog-to-facebook.mjs`: add `ko` to `PROMPT` (3 pillars), `CTA_CAPTION`, `CTA_COMMENT`.
- [ ] Verify: `FB_DRY_RUN=1 FB_BACKLOG_QUEUE=1 node scripts/post-backlog-to-facebook.mjs` and read the `[ko]` preview.
- [ ] **[you]** Update the KO Page's website field → `https://negaraku.md/ko` (Page settings; a change only you can make).

## Phase 5 — Verify (load, don't assume)
- [ ] Load in `/ko`: home · a pillar page · a category page · a topic LIST page (with filter/sort/display controls) · an article · the dashboard · analytics · the footer — read every visible label; any Malay = not done.
- [ ] `npm run build` green (8k+ pages → will grow ~1,073 with ko) + `npm run health --strict` 0 errors.
- [ ] Update [[negaraku-language-roadmap]] + `docs/plans/outstanding.md`; mark ko launched.

---

## What I need from you (the only [you] items)
1. **Reviewer name** for the ~204 sensitive Korean articles (ja used `ashton-tan`) — needed at Phase 3 to publish them.
2. **KO Page website update** to `negaraku.md/ko` (Phase 4, Page settings).
3. Nothing else — the KO Facebook Page already exists and is wired to the system user.

## Known risks / lessons baked in
- **Archived-master trap** → exclude `status: archived` from the translate list up front (Phase 2).
- **Half-launch chrome** → Phase 1 does subcategories/intros/categories + the DATA-object blank-render class up front, not after.
- **Fonts/OG in CI** → Hangul font must be available to the OG renderer, not just the browser (Phase 0).
- **YAML/quotes** → strict js-yaml + full build per batch before push ([[negaraku-yaml-inner-quotes-gotcha]], [[negaraku-publish-link-gotcha]]).
- **Push discipline** → commit locally, batch, wait for explicit "push"; each push = live deploy ([[negaraku-no-auto-push]], [[negaraku-deploy-concurrency]]).
