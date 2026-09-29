# Indonesian (`id`) launch plan — the 9th language

_Follows the ta/ja/ko/th/vi pipeline (Phases 0–5), but Indonesian is a SPECIAL CASE:
it is incremental over Malay. Read this + `indonesian-terminology-decisions.md` before
any translation._

## Why Indonesian, and why it's different
- **Reach:** ~270M speakers, the google.co.id SEO market, plus millions of Indonesian
  workers/tourists/students in Malaysia. Net-new audience that cannot read the site today.
- **The defining fact:** Indonesian (`id`) and Malay (`ms`) are ~80% mutually intelligible.
  So the corpus is NOT translated from English — it is **ADAPTED from the Malay (`ms`)
  version**, which every one of the 1,073 articles already has (ms is the site default).
  This is faster and more natural than en→id, BUT it is the make-or-break quality risk:
  a lazy ms→id copy reads as "Malaysian Malay with Indonesian spelling," not proper
  Indonesian. Agents must ACTIVELY convert the diverging register.

## The register decision (the #1 thing to get right)
Two layers, treated oppositely:
1. **General vocabulary → convert to Indonesian.** The admin/tax/law/government register
   is exactly where ms and id diverge most:
   - cukai → **pajak**; kerajaan → **pemerintah**; syarikat → **perusahaan**;
     pejabat → **kantor**; jabatan (dept) → **departemen/dinas**; wang → **uang**;
     bilik → **kamar**; borang → **formulir**; percuma → **gratis**; boleh → **bisa/boleh**;
     … (full table in the terminology doc).
   - **False friends that flip meaning** — must never be left as-is: `budak` (ms child →
     id "slave"), `kereta` (ms car → id "train"), `percuma` (ms free → id "useless/in vain"),
     `pejabat` (ms office → id "official/officer"), `jabatan` (ms department → id "tenure/
     position"), `pusing` (ms turn/rounds → id "dizzy"). These corrupt meaning if copied.
2. **Malaysian proper nouns / institutions / statutes → KEEP Malaysian (do NOT localize).**
   The content is about Malaysia. LHDN, SSM, EPF/KWSP, Companies Act 2016, Sdn Bhd, Bursa
   Malaysia, ringgit (RM), Bumiputera, etc. stay as the Malaysian names — give an Indonesian
   descriptor + keep the Malaysian name/acronym on first mention (e.g. "Badan Pendapatan
   Dalam Negeri (LHDN)"), exactly like the other languages treat Malaysian agencies. Do NOT
   swap to Indonesian equivalents (no "Ditjen Pajak", no "PT" for Sdn Bhd) — that would be
   factually wrong for Malaysian entities.

## Infra: what's cheap vs what's new (vs vi)
- **NO font work.** Indonesian is plain Latin (no special diacritics beyond the brand
  fonts' latin subset already covers). Unlike vi, no Noto Sans / `:lang()` override needed.
  (Verify at Phase 0 with one /id page render.)
- **NO RTL.**
- **Word counter (sync.mjs):** Indonesian is space-delimited Latin like ms/en → already
  handled by the spaced-word bucket; no regex change expected (verify a page scores > 0).
- **The recurring locale-list touchpoints all need `+ 'id'`** (the list that has bitten
  every launch — keep it COMPLETE): categories.ts `Locale` type + `Localized`;
  content.config lang enum; i18n `LOCALES` (Phase 3 only), `LOCALE_NAMES` ('Bahasa
  Indonesia'), `localeFromPath`; BaseLayout htmlLang/hreflang; astro i18n.locales +
  sitemap i18n.locales map; scripts: sync.mjs, translate.mjs walk regex, ping-indexnow
  regex, check-internal-links `LANG_RE` + `stripLocale`, fb-queue `listPublishedBases`
  regex, facebook.mjs `articleBases` regex + `LANGS`, build-dashboard `SITE_LANGS`,
  export-hf `LANGS`; worker/src `VIEW_LOCALES` + classify.js `pathKey`. (build-og.mjs now
  auto-reads localized names from categories.ts/subcategories.ts — no per-locale edit.)
- Heap flag + check-internal-links batching are already in place from the vi launch — the
  9th language won't reintroduce the EMFILE / OOM.

## Phases
**Phase 0 — Foundation (soft-launch scaffold).** Locale type/enum/LOCALE_NAMES/localeFromPath
+id; `/id` routes cloned from an existing locale (switch the locale, id home `<title>`);
astro i18n.locales +id + soft-launch sitemap filter `!/\/id(\/|$)/`; worker VIEW_LOCALES +
classify pathKey +id; NO font work (verify). `id` held OUT of LOCALES → noindex. Build green.

**Phase 1 — Chrome.** i18n STRINGS (115 keys) +id; subcategories.ts (419), intros.ts (20),
categories.ts (82) +id; L() helper 9th arg `id` across ~42 components + ~1,150 call sites
(multi-agent). **Count copy STAYS at eight during soft-launch** (do NOT bump to nine, do NOT
add "Bahasa Indonesia" to enumerations yet — that's Phase 3; see language-launch-checklist
pt.7). Chrome adapted from the MALAY chrome values where they exist (fast), then register-fixed.

**Phase 2 — Corpus (the big one, ADAPT from ms).** 1,073 masters → `.id.md`, **translating
from each article's `.ms.md` (or the ms master)**, adapting register per the terminology doc;
NOT from English. Multi-agent flat waves (≤6–8 non-recursive agents, checkpoint-commit,
full field-list up front). Governance: lang:id, status:draft, translationStatus:pending,
reviewer:null, aiAssisted:true. Currency: **juta / miliar / triliun** (deterministic script,
like vi's triệu/tỷ). Sources: localize via the built deterministic map/apply pipeline
(title translated + original in parens; Malaysian agencies → id descriptor + acronym; news
outlets/url/date verbatim) — bake it in or run the delta at corpus end. Field audit
(seoTitle/verificationNeeded) + a REGISTER audit (scan for un-converted ms-only terms +
false friends) before launch.

**Phase 3 — Open launch.** Publish 1,073 draft→published (~196 sensitive → reviewer
ashton-tan, standing default); add id to LOCALES; drop the soft-launch sitemap filter; re-add
id to live enumerations (DashboardView langBars, AnalyticsView LANG_ORDER/labels/colors,
build-dashboard SITE_LANGS, export-hf LANGS, ArticleList chips); **count copy eight→nine +
add "Bahasa Indonesia" to enumerations** across AboutView/FaqView/SearchView/ContributeView/
DonateTokenView/RolesView + i18n homeDescription; /id redirect mirrors (21); milestones 9th-
lang entry. Verify: build 0, health --strict 0, dashboard id 1073/1073, /id indexed + in
sitemap, 0 noindex.

**Phase 4 — Facebook.** Create the id FB Page (facebook.com/negaraku.md.id), assign to the
"NegaraKu Poster" system user; facebook.mjs +id in LANGS + LANG_POLICY (Page id, since date,
perDay:5), COUNTRY_TAG.id='#Malaysia' (Latin → hashtags okForLang Latin branch), catNameMap
regex +id capture; post-backlog PROMPT/CTA +id; build-fb-covers +id (Bahasa Indonesia row) —
regen all covers; AnalyticsView fbRows/FB_LANG +id. [you] set up the Page (cover/bio/website
/id/category). Bio + cover use the Indonesian tagline.

**Phase 5 — Verify.** Full build + health green; dashboard census; spot-check /id chrome +
a few articles for register (no cukai/kerajaan/syarikat leftovers, no false friends).

## Effort
Lower per-article than a from-scratch language (ms→id adaptation < en→X translation), but the
same infra + chrome + FB + a MANDATORY register pass. The risk is quality (proper Indonesian,
not id-spelled Malay), not mechanics. Method = MULTI-AGENT, NO API. See
[[negaraku-language-launch-checklist]], [[negaraku-sources-localization]],
[[negaraku-reviewer-default]], [[negaraku-language-roadmap]].
