# Korean (`ko`) launch — project plan

_6th public language, after ms · en · zh · ta · ja. Mission: "let the world know about Malaysia" — in Korean too._
_Reuses the Japanese pipeline end-to-end. Authoritative checklist: [[negaraku-language-launch-checklist]]. Terminology pattern: [[negaraku-ja-terminology-decisions]]._

_Status: **Phases 0–3 DONE 2026-09-26** — corpus 1073/1073, field-pass complete, currency normalized, PUBLISHED + open-launched (ko in LOCALES, indexed, in sitemap/switcher; reviewer ashton-tan on 196 sensitive). Build green, health 0, dashboard 1073/1073, languages:6. **ALL LOCAL/UNPUSHED (16 commits) — goes live on push.** Remaining: Phase 4 (FB activation) + optional milestones entry. Owner tags: **[me]** = Claude, **[you]** = user (accounts/approvals only)._

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

## Phase 1 — Chrome localization ✅ DONE 2026-09-25 (commits 07c04909 + eaf068b7)
12-agent multi-wave translation. `i18n.ts` (115 keys), taxonomy (`categories` 82 + `subcategories` 419), `intros.ts` (20 essays), data objects (seo/sponsors/provenance/llms), ~1,128 `L()` calls across 41 components → all carry Korean. Build green; `/ko` renders ~4,000 Hangul/page (nav/taxonomy/intros Korean), still noindex + soft-launched. `Localized` type + `CHANGE_I18N` tuple widened for ko. Deferred to Phase 3 (launch flip): the language-enumerating arrays/counts (ArticleList badge, DashboardView fbRows + N-lang, FaqView "five languages") and the public switcher entry. Also flagged: a pre-existing stale "four languages" line in ContributeView (predates ta/ja; fix in a separate copy pass, all locales).
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

## Phase 2 — Corpus translation (the bulk) ✅ DONE 2026-09-26 (commits …→5931bb81, local, UNPUSHED)
**1073/1073 `.ko.md` created; 0 gaps; validate 0 errors; full build green (9787 pages, 6 langs incl ko); all 1073 stamped `in-sync`.** 21 `status: archived` masters correctly skipped (1094 total masters − 21 = 1073). Done via multi-agent waves over several runs.
- [x] Build the translate file-list = **live masters only** — EXCLUDE `status: archived`.
- [x] Translate all 1,073 topics → `.ko.md` via multi-agent waves, applying Phase-0 terminology decisions.
- [x] `npm run translate:stamp` run (1074 stamped in-sync); freshness fields DERIVED not hand-set.
- [x] Guard rails held: 0 YAML inner-quote build failures; full build passed before any push.

### ⚠️ Phase 2 follow-ups still OUTSTANDING (do before/with Phase 3 publish)
- [x] **Corrective field-pass DONE 2026-09-26 (commits f8d06263 + 3a8871a6, local/unpushed).** Detector (scratchpad ko-field-audit.mjs — flags any translatable field byte-identical to master OR containing no Hangul) found **562 files** across 10 categories missing ≥1 field; fixed in 2 non-recursive waves (6 + 5 agents). Full re-audit: **0 untranslated fields corpus-wide**; validate 0 errors; full build green; re-stamp 0 changes (master hashes unchanged, ko still in-sync). Authoritative translatable set = translate.mjs PROSE_KEYS (title/seoTitle/socialTitle/summary/answer/keyTakeaways/faq/appliesTo/verificationNeeded/obligations); obligations = translate only prose sub-values (what/due/consequence/note), keep trigger/authority/statute/section#/dates verbatim.
- [x] **Currency-convention normalization DONE 2026-09-26 (commit c3ee621b, local/unpushed).** Deterministic converter (NOT agents — agents kept making scaling slips) applied exact math to scale words only: RM/US$/USD/MYR + million/billion/trillion/bilion/juta → 억/조/만 (612 RM + 45 non-RM + 2 manual = ~659). Decision rationale: 618/664 RM-files already used CJK grouping (dominant + most Korean-natural), so normalized the ~230 minority toward it. Deliberately LEFT comma-digit numerals as-is (language-neutral; forcing them into 만 created ugly decimals + table-mixing) and English source-citation titles + SEO keywords untouched. Verified: only-clean conversions (≤4-decimal myriad values), full before→after dry-run reviewed, build green, validate 0. RESIDUAL (non-blocking): a few files use plain 한다체 not 합니다체 (e.g. sports/football-in-malaysia); range expressions (~92, mostly false positives) not auto-converted — register + ranges are a future native-review polish, NOT launch-blocking.
- [ ] **Reviewer spot-check** — currency magnitudes in food-lifestyle (durian, kopitiam-mamak, pasar-malam, shopping-malls) + companies where 억/조 conversion happened (scaling-slip risk, self-corrected by agents).

## Phase 3 — Open launch & publish ✅ DONE 2026-09-26 (commits 9e6e1ca1 chrome, ec620834 publish, f544908c redirects; local/UNPUSHED)
Goes live on push. Reviewer for sensitive = **ashton-tan** ([you]-confirmed via this session).
- [x] Published the `ko` corpus: **1073 draft → published** (877 non-sensitive; **196 sensitive got reviewer ashton-tan** — passes isPublishable + scan.py sensitive-unreviewed). aiAssisted:true already on all.
- [x] Added 21 `/ko/...` redirect mirrors of the retired-dupe set in `astro.config.mjs`; redirect pages emit correctly.
- [x] `ko` in LOCALES + astro i18n.locales + sitemap hreflang map; dropped the soft-launch sitemap filter → ko now INDEXED (0 noindex on ko articles), in sitemap (11k+ /ko URLs incl. hreflang), in switcher/hreflang (auto via LOCALES).
- [x] Chrome enumeration: functional locale arrays +ko (AnalyticsView, DashboardView, ArticleList, build-dashboard SITE_LANGS, export-hf); language-count copy four/five→six across 7 components + i18n desc.
- [x] Verified: build green (9787 pp), health --strict **0 errors**, dashboard `perLangCoverage.ko` = **1073/1073 (100%)**, `languages: 6`, ko article serves Korean (lang="ko", Hangul title/body).

## Phase 3 — RESIDUAL (optional, non-blocking)
- [ ] Milestones timeline (`src/lib/milestones.ts`) has Tamil (4th language) but no Japanese (5th) or Korean (6th) launch entry — additive content, add ja+ko milestones for completeness.

## Phase 4 — Facebook activation ✅ CODE DONE 2026-09-26 (commit b18a7b36, local/UNPUSHED — activates on push)
- [x] `scripts/lib/facebook.mjs`: added `ko` to `LANGS` + `LANG_POLICY` (`enabled, perDay:5, since:'2026-09-26', windows:ALL_WINDOWS` — ramps 1/day up); `catNameMap()` regex now captures `ko: m[7]`; `COUNTRY_TAG.ko = '#말레이시아'`; `hashtags()` gained Hangul script-gating (`hasHangul` U+AC00–U+D7A3; ko keeps Hangul/numeric tags, and ms/en now also exclude Hangul leak). PAGES.ko + articleBases regex already had ko.
- [x] `scripts/post-backlog-to-facebook.mjs`: `PROMPT` (all 3 pillars), `CTA_CAPTION`, `CTA_COMMENT` +ko.
- [x] Verified `FB_DRY_RUN=1 FB_BACKLOG_QUEUE=1 FB_ONLY_LANGS=ko node scripts/post-backlog-to-facebook.mjs`: queues 1/day, would post a fully Korean caption/CTA/prompt + `#말레이시아 #NegaraKu #비즈니스` to Page 1308994995630346, link `/ko/...?utm_source=facebook`.
- [ ] **[you]** Update the KO Page's website field → `https://negaraku.md/ko` (Page settings; only you can).
- [ ] **PUSH** to activate (cron runs off main; posting begins next window after push).

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
