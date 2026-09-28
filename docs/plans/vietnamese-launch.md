# Vietnamese (`vi`) launch — project plan

_8th public language, after ms · en · zh · ta · ja · ko · th. Mission: "let the world know about Malaysia" — in Vietnamese too, for a fast-growing ASEAN tourism / business / worker audience._
_Reuses the Korean→Thai pipeline end-to-end. Authoritative checklist: [[negaraku-language-launch-checklist]] (follow the KOREAN RUN + Thai operational lessons — baked into the phases below)._

_Status: **NOT STARTED.** Owner tags: **[me]** = Claude, **[you]** = user (accounts/approvals only). Method: **MULTI-AGENT (session compute), NO API** (standing choice)._

---

## Goal & definition of done
Vietnamese is **launched** only when *everything a `/vi` reader sees is Vietnamese* — home, pillar, category, topic list + controls, article, dashboard, footer — with **zero Malay fallback**, health + build green, and the dashboard reading **1073/1073** for `vi`.

## Why Vietnamese is the CHEAPEST launch so far (the key differences from Thai)
1. **Latin script.** Vietnamese uses the Latin alphabet with diacritics — **likely little/no new font work** (unlike Thai/CJK/Tamil which each needed a script font). MUST-VERIFY at Phase 0: do the self-hosted brand fonts (Montserrat/Lato via Fontsource) include the **`vietnamese` subset**? If diacritics show tofu, add the vietnamese subset (Fontsource ships per-subset files) or a `Noto Sans` (latin-ext/vietnamese) fallback for `:lang(vi)`. OG renderer already installs `fonts-noto-core`, which covers Vietnamese Latin — no CI font change expected.
2. **Space-delimited.** Vietnamese separates syllables with spaces, so the word counter counts it like English — **no per-char CJK/Thai bucket needed**. Small fix only: extend the spaced-word regex in `sync.mjs` to include Latin-Extended (À-ỹ) so rare all-diacritic words (ừ, ở) aren't undercounted.
3. **No transliteration of Latin proper nouns.** "Kuala Lumpur", "Sabah", "Petronas" stay verbatim (Vietnamese is Latin) — simpler terminology than Thai/Korean/Tamil, which transliterate.
4. **No RTL** (that's Arabic, #10).

## What already exists (no work needed)
- Track A infra: `Locale`/`ContentLocale` split, `loc()` fallback, the `L()` 8-arg-ready pattern, per-locale route cloning — all built for ta/ja/ko/th.
- Translate pipeline, publish scripts, accumulate/build analytics (now LOCALES-aware after the ko/th fix).
- 1,073 published masters per language — the `vi` target (EXCLUDE the 21 `status: archived` retired dupes → 1073).
- th is the freshest template: every chrome file carries a `th` key, so `vi` slots in beside it.

## Vietnamese-specific decisions (settle UP FRONT in the terminology doc)
- **Register**: formal written Vietnamese (trang trọng), encyclopaedic; consistent tone; faithful translation (never correct/expand the source).
- **Numerals & dates**: Arabic numerals; keep Gregorian dates in source form (translate month words only). Keep RM amounts as-is.
- **Currency (deterministic script, NOT agents)**: keep `RM` + numeral; render scale WORDS in Vietnamese — million → **triệu**, billion → **tỷ**, trillion → **nghìn tỷ**. Leave comma-digit numerals; leave English source-citation titles + SEO keywords. (Vietnamese conventionally uses "." for thousands and "," for decimals — do NOT reformat the source numerals; only translate the scale word.)
- **Proper nouns / agencies / statutes**: Latin names kept verbatim; agencies = Vietnamese descriptor + original/acronym in parens on first mention (e.g. Cục Thuế Nội địa Malaysia (LHDN)); statutes = Vietnamese descriptor + canonical English short title + Act number verbatim.
- **Keep verbatim**: NegaraKu.md, 1company, URLs, codes, RM amounts, statute/section refs, P.U.(A) numbers.

## Effort snapshot (lighter than Thai)
| Phase | What | Owner | Rough effort |
|---|---|---|---|
| 0 | Foundation (font-verify, Locale type, routes, word-counter, terminology doc) | [me] | ~half day (less if brand fonts cover vi) |
| 1 | Chrome localization (L() 8th arg + data tables) | [me] | ~1 day |
| 2 | Corpus translation (1,073 × body+frontmatter, FULL field set) | [me] | the bulk — multi-agent waves |
| 3 | Open launch + publish | [me] (+[you] reviewer sign-off) | ~half day |
| 4 | Facebook activation | [me] (+[you] CREATE the VI Page) | ~1–2 hrs |
| 5 | Verify | [me] (+[you] spot-check) | ~2 hrs |

---

## Phase 0 — Foundation
- [ ] **`Locale` type** (`src/lib/categories.ts`): add `'vi'`; widen `Localized`'s `Partial<Record<'ta'|'ja'|'ko'|'th'|'vi'>>`.
- [ ] **`content.config.ts`**: add `'vi'` to the `lang` enum (CRITICAL — else `.vi.md` fails schema).
- [ ] **Font — VERIFY FIRST.** Check Vietnamese diacritics render in Montserrat/Lato. If not: add the `vietnamese` Fontsource subset or a `Noto Sans` fallback conditional block in `BaseLayout.astro` for `locale === 'vi'` (mirror the th block), add to `tokens.css` stacks, and confirm `build-og.mjs` (fonts-noto-core covers vi Latin — likely fine).
- [ ] **`/vi` routes** — clone `src/pages/th` → `src/pages/vi` (switch `locale`, localize the home `<title>` to Vietnamese, e.g. "Cơ sở tri thức Malaysia mã nguồn mở | NegaraKu.md").
- [ ] **Word counter** (`sync.mjs`) — extend the SPACED-word regex to include Latin-Extended (À-ỹ) so Vietnamese counts fully (it's space-delimited — do NOT add it to the CJK per-char bucket).
- [ ] **i18n** (`i18n.ts`): `LOCALE_NAMES` += `vi: 'Tiếng Việt'`; `localeFromPath` += `'vi'`. Keep `vi` OUT of `LOCALES` (SOFT-LAUNCH → noindex + out of sitemap/switcher).
- [ ] **astro.config**: add `vi` to `i18n.locales` + the sitemap `locales` map; ADD a soft-launch sitemap filter `!/\/vi(\/|$)/` (drop it at open launch) — mirror how th soft-launched.
- [ ] **Analytics (do it now so /vi is measured from day 1)**: add `'vi'` to `worker/src/index.js` `VIEW_LOCALES` and the `classify.js` `pathKey` locale list (needs `wrangler deploy`). (The ko/th attribution bug — fixed 2026-09-27 — was exactly this being forgotten.)
- [ ] **Terminology decisions doc** — `docs/plans/vietnamese-terminology-decisions.md` (register, triệu/tỷ currency, no-transliteration rule, agency/statute pattern, keep-verbatim list). Agents read it first.

## Phase 1 — Chrome localization (all the ko/th-parity spots, UP FRONT)
Finder: any `src` file where the `th` token count exceeds `vi` is a gap. See [[negaraku-language-launch-checklist]].
- [ ] `src/lib/i18n.ts` — every `t()` STRING key gets a `vi` value; extend the `L()` helper signature in ALL ~42 components `(ms,en,zh,ta,ja,ko,th)`→`(…,th,vi)` with a `locale==='vi'?(vi??ms)` branch; then give **~1,150 `L()` call sites** an 8th `vi` arg (pad missing middle args with `undefined`).
- [ ] `src/lib/subcategories.ts` (419), `src/lib/intros.ts` (20), `src/lib/categories.ts` (82) — add `vi`.
- [ ] **Count copy seven → eight** across AboutView/ContributeView/RolesView/DonateTokenView/SearchView/FaqView/i18n `site.homeDescription` (all locale args) + FaqView's language LIST (append Vietnamese `/vi`). Add a `vi` value to every milestones.ts entry.
- [ ] **DATA objects `{…}[locale]`** (blank-render class): seo.ts, sponsors.ts, provenance.ts, llms.ts CORPUS_HEADER, HomeView hero units, 404.astro — add `vi`.
- [ ] Grep sweep for any `ms|en|zh|ta|ja|ko|th` hardcode → add `vi`.

## Phase 2 — Corpus translation (multi-agent, BAKE IN THE LESSONS)
- [ ] Translate all **1,073** live masters → `.vi.md` in **flat non-recursive waves (≤6 agents)**, checkpoint-committed. Per-agent rules (non-negotiable, from ko/th):
  - **FULL translatable field list from wave 1**: title, seoTitle, socialTitle, summary, answer, keyTakeaways, faq (q+a), appliesTo, verificationNeeded, obligations (prose sub-values only — keep trigger/authority/statute+section#/dates). (Th needed only 43 field-fixes because this was baked in — keep it.)
  - **Agents MUST NOT spawn sub-agents.** EXCLUDE `status: archived`; SKIP existing `.vi.md` (resumable). Translate from each master's own language.
  - Governance: `lang: vi`, `status: draft`, `translationStatus: pending`, `reviewer: null`, `aiAssisted: true`.
  - Currency: run the **vi deterministic script** (triệu/tỷ/nghìn tỷ) — not agents. Links `/en/`,`/ms/`→`/vi/`. No inner ASCII double-quotes in double-quoted YAML scalars.
- [ ] Reviewer sweep each wave (agents copy `reviewer: ashton-tan` from masters → null). Field-audit at the end (detector: field byte-identical to master OR no Vietnamese diacritics/Latin where master had prose) → fix → 0 remaining.
- [ ] `npm run translate:stamp` after the corpus lands; full build green.

## Phase 3 — Open launch & publish
- [ ] **Publish**: flip all 1,073 `.vi.md` draft→published; **sensitive (~196) get `reviewer: "ashton-tan"`** ([you]-confirmed, per ta/ja/ko/th).
- [ ] Add `vi` to `LOCALES` (i18n.ts) + **drop the soft-launch sitemap filter** → indexed, in switcher/hreflang.
- [ ] Re-add `vi` to the LIVE enumerations (DashboardView langBars, ArticleList chips, AnalyticsView fbRows/LANG_ORDER, `build-dashboard.mjs` SITE_LANGS, `export-hf-dataset.mjs` LANGS) — these were the ones held out during soft-launch (the ko "empty TH row on live dashboards" gotcha).
- [ ] 21 `/vi/...` redirect mirrors of the retired-dupe set in `astro.config.mjs`.
- [ ] Add a Vietnamese launch entry to `milestones.ts` (8th language, all 8 locales).
- [ ] **Verify**: build green; `health --strict` 0 errors; dashboard `perLangCoverage.vi` = **1073/1073 (100%)** + `languages: 8`; `/vi` article `lang="vi"`, **0 noindex**, in sitemap.

## Phase 4 — Facebook activation
- [ ] **[you]** — **CREATE the Vietnamese FB Page** (none exists yet) + assign to the "NegaraKu Poster" system user; give me its Graph/business-asset Page id.
- [ ] `scripts/lib/facebook.mjs`: add `vi` to `LANGS` + `PAGES` (id) + a `LANG_POLICY` row; `catNameMap()` regex capture (`vi: m[9]`); `COUNTRY_TAG.vi = '#Malaysia'` (Vietnamese uses Latin — Malaysia stays); `hashtags()` — Vietnamese is Latin, so treat like ms/en (Latin filter), NOT a new script gate.
- [ ] `scripts/post-backlog-to-facebook.mjs`: `PROMPT` (3 pillars) + `CTA_CAPTION` + `CTA_COMMENT` += `vi`.
- [ ] Verify `FB_DRY_RUN=1 FB_BACKLOG_QUEUE=1 FB_ONLY_LANGS=vi node scripts/post-backlog-to-facebook.mjs`.
- [ ] **[you]** Update the VI Page website → `https://negaraku.md/vi`.

## Phase 5 — Verify (load, don't assume)
- [ ] Load every page type in `/vi`; any Malay = not done. Build + health green (8 languages). Update [[negaraku-language-roadmap]] + `docs/plans/outstanding.md`; mark `vi` launched.

---

## What I need from you (the only [you] items)
1. **Reviewer name** for the ~196 sensitive Vietnamese articles (ta/ja/ko/th used `ashton-tan`) — Phase 3.
2. **CREATE the Vietnamese FB Page** + assign to the system user + give me its id (Phase 4) — new, none exists.
3. **Update the VI Page website** → `negaraku.md/vi` (Phase 4).

## Lessons baked in (from ta/ja/ko/th)
- Full field-list to agents from wave 1 (→ th needed only 43 field-fixes vs ko's 562).
- Non-recursive agents, ≤6 concurrent (recursive fan-out blew a session limit on ko; ~13 at once → 429s).
- Deterministic currency script (triệu/tỷ), not agents (agents scaling-slip).
- Homepage title + count-copy in Phase 1; hold `vi` out of LIVE enumerations until Phase 3 (the ko broken-row gotcha).
- Add `vi` to the analytics Worker `VIEW_LOCALES` + `pathKey` at Phase 0 so `/vi` is attributed correctly from day 1 (the ko/th bug).
- Publish sensitive with a named human reviewer; skip `status: archived`; YAML inner-quote guard; commit locally, push on explicit "push".
