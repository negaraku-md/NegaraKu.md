# Thai (`th`) launch — project plan

_7th public language, after ms · en · zh · ta · ja · ko. Mission: "let the world know about Malaysia" — in Thai too, for Malaysia's top-tier tourist + border-trade neighbour._
_Reuses the Korean/Japanese pipeline end-to-end. Authoritative checklist: [[negaraku-language-launch-checklist]] (follow the **KOREAN RUN** operational lessons — they are baked into the phases below). Terminology pattern: [[negaraku-ja-terminology-decisions]]._

_Status: **NOT STARTED.** Owner tags: **[me]** = Claude, **[you]** = user (accounts/approvals only). Method: **MULTI-AGENT (session compute), NO API** (user's standing choice)._

---

## Goal & definition of done
Thai is **launched** only when *everything a `/th` reader sees is Thai* — not just the articles. Verified by loading every page type in `/th` (home, pillar, category, topic list + controls, article, dashboard, footer) with **zero Malay fallback**, health + build green, and the dashboard reading **1073/1073** for `th`.

## Why Thai (from the sequence rationale)
Thailand is a top-tier source of tourist arrivals + heavy border trade; a genuinely NEW audience with **zero current access** to the site (unlike `id`, which `ms` partly serves). Distinct script, **no RTL** → medium effort, high net-new reach. Ranked #7 (next).

## What already exists (no work needed)
- Track A infra: `Locale`/`ContentLocale` split, `loc()` Malay-fallback accessor, `L()` helper pattern, per-locale route cloning — all built for ta/ja/ko.
- Translate pipeline: `scripts/translate.mjs` (LOCALES-driven), `translation-sync.mjs`, publish scripts.
- 1,073 published masters per language — the `th` translation target (EXCLUDE the 21 `status: archived` retired dupes → 1073).
- ko is the freshest template: every chrome file already carries a `ko` key, so `th` slots in beside it.

## Thai-specific gotchas (differ from ko — decide/handle UP FRONT)
1. **Font:** Noto Sans Thai (script U+0E00–U+0E7F). Add `@fontsource/noto-sans-thai` (self-hosted, like the other Fontsource families) wired for `:lang(th)`; add to `--font-title`/`--font-reading` stacks in `tokens.css`; add the conditional font block in `BaseLayout.astro` (mirror the Noto Sans KR block). **OG-card renderer** (`scripts/build-og.mjs`): add 'Noto Sans Thai' to TITLE_FONT/BODY_FONT + Thai range to `textWidth`, and ensure the Thai font is in CI (the CJK apt-cache step — extend for Thai, or vendor the font like ko did).
2. **NO inter-word spaces** (Thai doesn't space between words) — TWO consequences:
   - **Word counter** (`scripts/sync.mjs`, NOT scan.py): Thai is UNSPACED like Chinese/Japanese, so a space-delimited token count scores it ~0. Add the Thai range (U+0E00–U+0E7F) to the **per-character** bucket (× the same ~0.6 factor as CJK), not the space-delimited bucket. (Same fix class as the Tamil word-counter bug — verify `th` scores realistically or the dashboard shows thin/0 words.)
   - **Pagefind**: no Thai word-segmentation/stemming → search still works but is limited; ACCEPT (same as zh/ja/ko). Note in Phase 0.
3. **Numerals & dates:** keep **Arabic numerals** (๑๒๓ Thai digits NOT used) and **Gregorian/CE dates** as in the source — do NOT convert to Thai (Buddhist Era +543). Translate month/label words only.
4. **Currency convention (DIFFERENT from ko's 억/조):** Thai groups by ล้าน (million), not the CJK myriad. Keep `RM` + the numeral; render scale words as Thai: million → ล้าน, billion → พันล้าน (thousand-million), trillion → ล้านล้าน. Write a **th-specific deterministic currency script** (NOT the ko 억/조 one, NOT agents — agents scaling-slip). Leave comma-digit numerals + English source-citation titles + SEO keywords. Run it DURING translation.
5. **No RTL** — no bidi infra needed (that's Arabic, later).

## Effort snapshot
| Phase | What | Owner | Rough effort |
|---|---|---|---|
| 0 | Foundation (font, Locale type, routes, word-counter, terminology doc) | [me] | ~half day |
| 1 | Chrome localization (all the ko-parity spots) | [me] | ~1 day |
| 2 | Corpus translation (1,073 × body+frontmatter, FULL field set) | [me] | the bulk — multi-agent waves |
| 3 | Open launch + publish | [me] (+[you] reviewer sign-off) | ~half day |
| 4 | Facebook activation | [me] (+[you] CREATE the TH Page) | ~1–2 hrs |
| 5 | Verify | [me] (+[you] spot-check) | ~2 hrs |

---

## Phase 0 — Foundation
- [ ] **`Locale` type** (`src/lib/categories.ts`): `export type Locale = ContentLocale | 'ta' | 'ja' | 'ko' | 'th';` widen `Localized` to include `th`.
- [ ] **Thai webfont** — `@fontsource/noto-sans-thai` + fontaine metric-fallback; wire `:lang(th)`; add to `tokens.css` stacks; conditional block in `BaseLayout.astro`. **OG renderer** (`build-og.mjs`) + CI font availability.
- [ ] **`content.config.ts`** — add `'th'` to the `lang` enum (CRITICAL — else `.th.md` fails schema).
- [ ] **`/th` routes** — clone `src/pages/ko` → `src/pages/th` (thin route files per page). Localize the home `<title>` in `src/pages/th/index.astro` (hardcoded per-route — a ko-launch lesson).
- [ ] **Word counter** (`sync.mjs`) — add Thai U+0E00–U+0E7F to the unspaced per-char bucket (×0.6). Verify a th file scores realistically.
- [ ] **i18n** (`i18n.ts`): `LOCALE_NAMES` += `th: 'ไทย'`; `localeFromPath`/`t()` recognise `th`. Keep `th` OUT of `LOCALES` for now (SOFT-LAUNCH → noindex + out of sitemap/switcher via the `softLaunched` guard) until launch-ready.
- [ ] **astro.config**: do NOT add `th` to `i18n.locales` yet if routes need it to build — mirror how ko soft-launched (ko WAS added to i18n.locales at Phase 0 but held out of `LOCALES`; the sitemap filter `!/\/th(\/|$)/` + noindex kept it hidden). Follow the ko pattern exactly.
- [ ] **Terminology decisions doc** — `docs/plans/thai-terminology-decisions.md`: formal written Thai register; Malaysian statute names = Thai descriptor + English/Malay original in parens; agency names; proper nouns = Thai transliteration + original in parens on first mention; keep NegaraKu.md/1company/URLs verbatim; Arabic numerals + CE dates; place-name transliterations (กัวลาลัมเปอร์ = Kuala Lumpur, ปีนัง = Penang, ยะโฮร์ = Johor, ซาบah/ซาราวัก, etc.). Write BEFORE mass translation; save a memory note.

## Phase 1 — Chrome localization ✅ DONE 2026-09-26 (commits 1a5dfe92 + 78ed03ff + 64aa5162, local/unpushed)
L() signature +th across 42 components + Localized type; Wave 1 (5 agents) foundation data: i18n 115, subcategories 419, intros 20, categories 82, data objects (seo/sponsors/provenance/llms/HomeView/404/milestones); Wave 2 (7 agents) ~1,147 L() call sites +th; count-copy six→seven; FaqView list +Thai. /th renders Thai, 0 Malay fallback, build green (11,418 pp). FIX: reverted th from live-visible langBars/ArticleList chips (broke an empty TH row on all live dashboards; rejoins at Phase 3). The original checklist:
- [ ] `src/lib/i18n.ts` — every `t()` STRING key gets a `th` value; every inline `L(ms,en,zh,ta,ja,ko)` call gets a **7th `th` arg** (widen the `L` helper signature in ALL ~41 components first, then fill ~1,130 call sites — a 6-arg call falls back to Malay).
- [ ] `src/lib/subcategories.ts` — ~419 `SUBCATEGORY_LABELS` need `th` (the "TOPICS" chips — most-visible miss).
- [ ] `src/lib/intros.ts` — 20 `CATEGORY_INTRO` essays need `th`.
- [ ] `src/lib/categories.ts` — 82 taxonomy labels need `th`.
- [ ] **Functional locale arrays** += `th`: `AnalyticsView.astro` (fbRows/LANG_ORDER/LANG_COLORS/langLabels), `DashboardView.astro` (LANG_NAMES + langBars), `ArticleList.astro` (language-availability chips), `scripts/build-dashboard.mjs` (SITE_LANGS), `scripts/export-hf-dataset.mjs` (LANGS).
- [ ] **Count copy** six → seven, ALL locale variants: AboutView, ContributeView, RolesView, DonateTokenView, SearchView, FaqView (the explicit language list — append Thai `/th`), `i18n.ts` `site.homeDescription`. Add a `th` launch entry to `src/lib/milestones.ts` (all 7 locales).
- [ ] **DATA objects `{ms,en,zh,ta,ja,ko}` accessed as `obj[locale]`** (blank-render bug class, NOT L()): HomeView hero unit labels, `seo.ts` JSON-LD descriptions, `sponsors.ts`, `provenance.ts`, `llms.ts` CORPUS_HEADER, the 404 page. Add `th`; widen any `Record<...>` types.
- [ ] Grep sweep for any remaining `ms|en|zh|ta|ja|ko` hardcode → add `th`.

## Phase 2 — Corpus translation (the bulk) — BAKE IN THE KOREAN LESSONS
- [ ] Translate all **1,073** live masters → `.th.md` via **multi-agent waves**. Agent rules (from the ko run, non-negotiable):
  - **FULL translatable field list from wave 1** (avoids ko's 562-file corrective pass): `title, seoTitle, socialTitle, summary, answer, keyTakeaways, faq (q+a), appliesTo, verificationNeeded, obligations`. `obligations` = prose sub-values only (what/due/consequence/note); keep trigger/authority/statute+section#/dates verbatim. Everything else copied verbatim from master.
  - **Agents MUST NOT spawn sub-agents** (recursive fan-out blew the ko session limit). **≤ ~6 flat concurrent agents** (13 → 429s). One agent per category (split big ones a–m / n–z).
  - **EXCLUDE `status: archived` masters.** SKIP masters that already have a `.th.md` (resumable).
  - Governance set in code/by agent: `lang: th`, `status: draft`, `translationStatus: pending`, `reviewer: null`, `aiAssisted: true`.
  - Internal-link prefixes `/en/`→`/th/`, `/ms/`→`/th/`; bare links unchanged.
  - YAML: no inner ASCII double-quotes in double-quoted scalars (use Thai quotes/parens).
- [ ] **Currency**: run the th-specific deterministic script (ล้าน/พันล้าน/ล้านล้าน) — NOT agents.
- [ ] Checkpoint-COMMIT after each wave. After all waves: **auditor script** (field byte-identical to master OR no Thai chars U+0E00–U+0E7F = untranslated) → drive to 0 remaining.
- [ ] `npm run translate:stamp` after the corpus lands.

## Phase 3 — Open launch & publish
- [ ] **Publish**: flip all 1,073 `.th.md` `status: draft`→`published`. Non-sensitive publish freely; **sensitive (~196, sensitivity != none) get `reviewer: "ashton-tan"`** ([you]-confirmed reviewer, same as ta/ja/ko) — else scan.py `sensitive-unreviewed` + `isPublishable` block them.
- [ ] Add `th` to `LOCALES` (i18n.ts) + `astro.config.mjs` `i18n.locales` + sitemap hreflang map (`th: 'th'`); **remove the soft-launch sitemap filter** for `/th` → indexed, in switcher/hreflang (auto via LOCALES).
- [ ] Add 21 `/th/...` redirect mirrors of the retired-dupe set in `astro.config.mjs`.
- [ ] **Verify**: build green; `health --strict` **0 errors**; dashboard `perLangCoverage.th` = **1073/1073 (100%)** + `languages: 7`; emitted `/th` article has `lang="th"`, Thai body, **0 noindex**; `th` in `dist/sitemap-0.xml`.

## Phase 4 — Facebook activation
- [ ] **[you]** — **CREATE the Thai Facebook Page** (Thailand has no existing Page yet, unlike ta/ja/ko) + assign it to the "NegaraKu Poster" system user; give me its Graph/business-asset Page id. (Follow [[negaraku-fb-page-standard]].)
- [ ] `scripts/lib/facebook.mjs`: add `th` to `LANGS` + `PAGES` (its id) + a `LANG_POLICY` row (`enabled, perDay:5, since:<launch>, windows:ALL_WINDOWS`); `catNameMap()` regex capture (`th: m[8]`); `COUNTRY_TAG.th = '#มาเลเซีย'`; `hashtags()` script-gating (Thai has no spaces → tag the whole phrase; add `hasThai` U+0E00–U+0E7F, ms/en exclude Thai leak).
- [ ] `scripts/post-backlog-to-facebook.mjs`: `PROMPT` (3 pillars) + `CTA_CAPTION` + `CTA_COMMENT` += `th`.
- [ ] Verify: `FB_DRY_RUN=1 FB_BACKLOG_QUEUE=1 FB_ONLY_LANGS=th node scripts/post-backlog-to-facebook.mjs` → read the `[th]` preview.
- [ ] **[you]** Update the TH Page website field → `https://negaraku.md/th`.

## Phase 5 — Verify (load, don't assume)
- [ ] Load in `/th`: home · a pillar page · a category page · a topic LIST page (filter/sort/display controls) · an article · dashboard · analytics · footer — read every visible label; any Malay = not done.
- [ ] `npm run build` green + `health --strict` 0 errors (7 languages).
- [ ] Update [[negaraku-language-roadmap]] + this doc + `docs/plans/outstanding.md`; mark `th` launched.

---

## What I need from you (the only [you] items)
1. **Reviewer name** for the ~196 sensitive Thai articles (ta/ja/ko used `ashton-tan`) — needed at Phase 3 to publish them.
2. **CREATE the Thai Facebook Page** + assign to the system user + give me its Page id (Phase 4) — this one is NEW (no TH Page exists yet).
3. **Update the TH Page website** → `negaraku.md/th` (Phase 4, Page settings).

## Known risks / lessons baked in (from ta/ja/ko)
- **Full field-list to agents from wave 1** → no corrective field-pass ([[negaraku-language-launch-checklist]] KOREAN RUN).
- **Non-recursive agents, ≤6 concurrent** → no session-limit blowup / 429s.
- **Deterministic currency script (th: ล้าน grouping), not agents** → no scaling slips.
- **Archived-master trap** → exclude `status: archived` up front (keeps 1073, not 1094).
- **Word-counter unspaced-script fix** → Thai scores realistically (Tamil-bug class).
- **Homepage title + count-copy in Phase 1**, not post-launch.
- **YAML inner-quotes** → strict js-yaml + full build per batch before push ([[negaraku-yaml-inner-quotes-gotcha]]).
- **Push discipline** → commit locally, batch, wait for explicit "push"; each push = live deploy ([[negaraku-no-auto-push]], [[negaraku-deploy-concurrency]]).
