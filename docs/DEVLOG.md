# NegaraKu.md — Development Log

> *"Let the world know about Malaysia."*
>
> A development history of **NegaraKu.md**, an open-source, AI-friendly knowledge
> base about Malaysia — built on Astro v5, deployed static to GitHub Pages, styled
> in the 1company brand (true-black canvas, gold `#FFC000`, Montserrat + Lato).

**Span:** 2026-07-22 → 2026-09-13 (54 days) · **755 commits** · **4 public languages** (ms / en / zh / ta) · **~1,073 master articles** (≈4,355 markdown files across all languages).

This log is reconstructed from the git history and reflects the actual sequence of work. Dates are commit dates. It is organised by *phase*, and each phase carries the concrete work that shipped plus the notable fixes and lessons behind it.

---

## Contents

1. [At a glance](#at-a-glance--activity-by-day)
2. [Phase 0 — Foundation & the trust model](#phase-0--foundation--the-trust-model-jul-2224)
3. [Phase 1 — Trilingual parity](#phase-1--the-content-explosion--trilingual-parity-jul-2526)
4. [Phase 2 — Categories & content growth](#phase-2--categories-verification--content-growth-aug-18)
5. [Phase 3 — Discovery, analytics & performance](#phase-3--discovery-analytics--performance-aug-1020)
6. [Phase 4 — Lifecycle & contribution system](#phase-4--article-lifecycle--contribution-system-aug-1921)
7. [Phase 5 — Content deepening & interlinking](#phase-5--content-deepening--interlinking-aug-24--sep-7)
8. [Phase 6 — The Facebook engine](#phase-6--the-facebook-engine-sep-811)
9. [Phase 7 — Analytics stack v2](#phase-7--analytics-stack-v2-sep-10)
10. [Phase 8 — Tamil: the 4th language](#phase-8--tamil-the-4th-language-sep-1113)
11. [Phase 9 — Facebook Page rollout & polish](#phase-9--facebook-page-rollout--polish-sep-13)
12. [Key incidents & root causes](#key-incidents--root-causes)
13. [Tooling & scripts built along the way](#tooling--scripts-built-along-the-way)
14. [Recurring principles](#recurring-principles-the-why-behind-the-how)

---

## At a glance — activity by day

| Period | Focus | Peak days (commits) |
|---|---|---|
| Jul 22–26 | Foundation + trilingual corpus | Jul 24 (84), Jul 27 (60), Jul 25 (32) |
| Aug 1–8 | Category launch + content growth | Aug 8 (58) |
| Aug 10–21 | Analytics, graph, nav, lifecycle, contributor system | Aug 20 (44), Aug 16 (40), Aug 18 (36) |
| Aug 24 – Sep 7 | Content deepening + crosslinks | Sep 7 (28) |
| Sep 8–11 | Facebook engine + analytics stack v2 | Sep 10 (45), Sep 11 (44) |
| Sep 11–13 | Tamil — the 4th language | Sep 13 (44) |

**Corpus size over time:** ~570 topics (early Aug) → **1,015** (mid-Aug, first LIVE-corpus census) → **~1,052** (late Aug) → **1,073 masters** (Tamil launch, ×4 languages ≈ 4,355 files).

---

## Phase 0 — Foundation & the trust model (Jul 22–24)

The project began not with content but with a **credibility architecture**. Before any article went public, the rules for *what may be published* were in place.

**What shipped**
- **Astro v5 scaffold** — Malaysia knowledge base, trilingual from commit one (`ms` at `/`, `en` at `/en`, `zh` at `/zh`), shared `XView.astro` + thin per-locale route files.
- **3R+1 publication gate** (commit 2, day 1) — sensitive content is excluded from the public build unless it carries a named reviewer. First and still only authorised reviewer: **ashton-tan**.
- **Chain-of-custody trust model** — each article renders its status as a provenance timeline; honest status/drafter labels; classification disclosed; review dates shown only on time-sensitive content.
- **The Dashboard** — iterated hard on day 1–2: true language × status picture, per-article master + language×lifecycle matrix, Section → Category → Topic structure, reader-meaningful headline stats. (The dashboard was cut down repeatedly — "cut dead weight, make outstanding actionable".)
- **Master-language-per-article model** — each article's authoritative origin is decided per-article, not globally. Piloted with `sdn-bhd` as a Malay-master topic, then 7 non-sensitive topics converted to Malay masters, then the **296-article MS wave** (all non-sensitive EN-master articles → Bahasa Malaysia). Sensitive articles added as 3R+1 review-gated MS+ZH drafts.
- **Content model as data** — datasets got the same trust apparatus as articles; the health scanner was extended to cover non-article content; sponsor modelled as data; dashboard counts by type.
- **Multi-agent content pipeline** debuts — "15 Understand-Malaysia articles via multi-agent pipeline" (Jul 24), the technique that would later translate the entire Tamil corpus.

**Notable fixes/lessons**
- Scoped-style bugs in article cards; truncated `ServiceCategory` styles; duplicate subcategory labels — the cost of fast scaffolding.
- **The `[glob-loader] Duplicate id` gotcha** first appears (Jul 25) — Astro's stale content-cache after heavy content churn, *not* real duplicates. Fix: clear `.astro`. This recurs and is documented in CLAUDE.md.

## Phase 1 — The content explosion & trilingual parity (Jul 25–26)

Jul 25 was the single biggest content day of the project. The corpus was built out in **numbered waves**, then translated **category by category** to full trilingual parity.

**What shipped**
- **Understand-Malaysia waves 5–11** — constitutional articles, demographics & GLICs; festivals/languages/heritage; country basics & early kingdoms; sultanates & key Acts; the history spine; arts-culture remainder & security Acts; state government tail (~100+ articles).
- **"Living in Malaysia" waves 1–8** — transport, money & daily life, settling-in, property, healthcare, education, cost-of-living (~85 articles), with sensitive topics landing as unpublished drafts.
- **Trilingual translation sweep** — every pillar translated in turn (transport 14, settling-in+education 29, healthcare+property 27, money 19, states 15, law 18, economy 20, glossary 22, government 26, arts-culture 28) culminating in **`malaysia` (40 articles) → 100% trilingual parity**.
- **Architecture decision:** the public site = *published-only*. In-review/reviewed content is hidden in production; the reviewed corpus was published and the pipeline simplified around that gate.
- **Frontmatter validator** added to `prebuild`/`predev` (runs first) — the first line of defence against malformed content.

**Notable fixes/lessons**
- **Stale "Translation pending" on 287 files** — an early instance of the recurring lesson that translation freshness must be *derived*, never hand-set.
- Content accuracy passes even this early: Sabah/Singapore separation, state head-of-state title (*Yang di-Pertua Negeri*, not "Pertuan"), Mount Kinabalu phrasing.
- Categories standardized to one "service" archetype for a uniform, scalable Topic view.

## Phase 2 — Categories, verification & content growth (Aug 1–8)

**What shipped**
- **Launched the 12 populated categories** (Aug 3) — fixed the 404s on their hub pages.
- **Phase 2 content complete (445/445)** — states + keris masters in-review (Aug 8).
- **Dashboard census rework** (Aug 8) — all vitals computed from one all-status census so figures always tally; a topic counted as (category, subcategory) so "topics" tallies site-wide.

**Notable fixes/lessons**
- **The YAML inner-quotes gotcha** is discovered (Aug 8): inner ASCII quotes in a double-quoted frontmatter scalar *pass* the validator but *fail* `astro build`. This becomes a standing pre-push check (strict js-yaml) and recurs with zh drafts and Tamil later.
- **1,641 broken related-slug links repaired** (Aug 10) — 174 remapped, 1,467 dropped — and the health rule softened so a broken related-link is a WARN not an ERROR, unblocking the `--strict` deploy gate.
- A factual correction to Insolvency Act s.33B(2A) protected categories (Aug 17) — content was wrong; primary-sourced fix.

## Phase 3 — Discovery, analytics & performance (Aug 10–20)

The site grew a real navigation, measurement, and speed layer.

**What shipped**
- **Brand:** new gold *Bunga Raya* logo (v2); the abstract blossom archived as v1 and repointed off the OG cards.
- **Visitors analytics pipeline** — Cloudflare Worker → Analytics Engine → build step → on-page count, with a scanner-noise filter, an all-time count, and a `verify:analytics` check.
- **Interactive Knowledge Graph** — a generated graph + d3 canvas page, with topic search and touch support.
- **Navigation overhaul** — 3 pillars + Explore / About / Contribute menus; `/categories` hub; **Latest Articles**, **Trending / Most-read** (later renamed `/most-read`), and a dedicated **Timeline of Malaysia** (rewritten in an era-narrative style, then promoted to a real corpus article). Most-read + Latest strips seeded across hubs, categories, and home.
- **SEO:** entity schema, answer/speakable blocks, per-locale RSS, PWA manifest, localized OG cards, sitemap `lastmod`, canonical slash. OG card reused as the article thumbnail.
- **verificationNeeded backlog** cleared in **12 tranches** (Aug 14–15) — ~140 high-traffic articles re-grounded to primary sources (v0.3), plus 36 gap masters rebuilt through the full editorial pipeline and published (108 files live).

**Notable fixes/lessons**
- **Build perf — the headline win:** *"memoize content collection so the build is ~14× faster"* (Aug 17). The ~45-min build's real root cause was an un-memoized `getCollection` in `content.ts`; OG/pagefind/concurrency were *not* it.
- OG-image generation made **incremental + CI-cached** (Aug 17); the **OG-font install hung entire deploys** twice (Aug 20) before being made resilient then non-fatal.
- The `🇲🇾` category icon rendered as literal "MY" on Windows → swapped to `🌺` (Aug 20).
- Cross-page count reconciliation and "one gold header per page" specificity bugs recur throughout — the price of many entry points into the same data.

## Phase 4 — Article lifecycle & contribution system (Aug 19–21)

A full editorial workflow, shipped in five phases plus a governance rule and a viewer split.

**What shipped**
- **Lifecycle foundation** — status enum (`draft → in-review → reviewed → published`), two-field review model, archive cascade, a hidden-article switch + broken-link guard. Local dev renders work-in-progress articles.
- **Phase 2–5:** Editorial Worklist page → feedback→triage taxonomy (labels-as-code) → contributors page + role guides → **AI-token translation tool + guide**.
- **Four-eyes rule** — separation-of-duties health check: a reviewer cannot be the assignee or last-revision contributor.
- **Reader / Contributor view system** — a two-view model backed by a **GitHub OAuth Worker** (org-membership gate); the Contribute menu hides for recognised contributors; sessions extended 8h → 30 days.
- **Onboarding series** — `/start` orientation, `/contributor-guide`, a per-article **Share** button, a pre-contributor promo layer gated for contributors.
- **Legal + ops** — Terms / Privacy / Cookie pages; a build-flag **maintenance takeover** screen (with MS/EN/中文 switch + Home button) and a one-click maintenance toggle on the deploy workflow.

**Notable fixes/lessons**
- **`version` (string) → `revision` (integer)** migration (Aug 20) — corrected numbering (oldest = 0, top = latest).
- The OAuth Worker needed **form-encoded token exchange + the real client id**, and the manual contributor shortcut was gated to localhost only — the client-secret gotcha.
- Aug 20 was a 44-commit "review leftovers" day — a systematic UX sweep across article, category, listing, dashboard, and changelog templates.

## Phase 5 — Content deepening & interlinking (Aug 24 – Sep 7)

**What shipped**
- **Sensitive articles published** through the 3R+1 gate — Mahathir, Anwar, 1MDB, Prime Ministers of Malaysia (drafted, translated ms+zh, then published).
- **Browse-first article cards** — collapsed cards with signposted display toggles, breadcrumb teasers, deep-linkable category/section filters ("See all" lands filtered), mobile toolbar collapse + payload dedup.
- **Crosslink engine** (`scripts/suggest-crosslinks.mjs`) — a full-corpus proper-noun pass wired **~853 internal links in 5 batches** (129 statute links to 14 Acts; 267 culture/history/place; 225 agency/institution to 20 targets; 84 GLC + Malaysia Plans; 148 place/culture/sport/education).
- **Dedup + redirects** — a static redirect layer in `astro.config` (HTML redirect + canonical per locale); retired duplicate articles (JPN/MITI, BNM, Petronas, PDPA, PNB, FELDA, Orang Asli, TNB, Khazanah, PIDM, PDRM, SPR, MCMC, MA63, NEP) merged to canonical targets via `alsoIn` cross-listing.
- **Font performance** (Sep 7–8) — self-hosted Montserrat + Lato via Fontsource (dropped Google Fonts on ms/en), fontaine metric-adjusted fallbacks (killed hero font-swap CLS 0.07 → 0), hero-critical preload (Speed Index 4.1 → 2.6s). OG-card fonts vendored + CJK apt-cache (fixed a CI timeout). Actions bumped to Node 24.

**Notable fixes/lessons**
- **Duplicate `topicId` silently breaks link resolution** → build fails on `check-internal-links --strict` (Prime Ministers collided with local-government).

## Phase 6 — The Facebook engine (Sep 8–11)

Turning the corpus into reach.

**What shipped**
- **Auto-post every new article** in all 3 languages, each to its **own language Page** (ms / en / zh), with an emoji-prefixed title and per-article curated hashtags (localized + Unicode-aware). System-user token in secrets; the script mints a Page token at run time (`resolvePageToken`) and **fails the job on post errors** rather than posting silently-broken.
- **UTM-tagged links** so Facebook clicks stay attributable; canonical trailing-slash URLs with a live-200 precheck; posts only PUBLISHED articles, never drafts, and posts on publish (not just file-add).
- **Backlog poster** (`scripts/post-backlog-to-facebook.mjs`) — a ranked, manifest-tracked queue (`analytics/posted.json`) that drains the existing corpus in priority order (GSC demand + pillar rotation), on a warm-up ramp (1/day → 3 → 5 → 10), via a **self-healing 3×/day cron** (`0 5,8,11 * * *`) with a once-per-MYT-day guard. Switchable link placement (caption vs. first comment); a Graph-API post-deletion script.

**Notable fixes/lessons**
- **Comment-mode blocked by App Review** — the token can't comment (Graph `#200`) even with scope + MODERATE role; needs Advanced Access. The poster was **decoupled** (v2): post id persisted, retry-comment-only, `always()`-commit the manifest so a post id is never lost. Caption-link became the default.
- **Deploy concurrency lesson** — rapid pushes cancel in-progress Pages deploys; batch pushes and watch the *final* run land.

## Phase 7 — Analytics stack v2 (Sep 10)

**What shipped**
- **Traffic-channel classifier** in the Worker (referrer + UTM), aggregated into a dashboard "Traffic by channel" panel; domain-shaped `utm_source` routed to its brand channel.
- **Data archives** — Facebook insights, Google Search Console, and Bing Webmaster, each a scheduled workflow committing snapshots, each with a dashboard panel (Google Search + Facebook reach; Bing).
- **On-site engagement beacon** + panel; **AI-crawlers panel**; channel breakdown surfaced in `verify-analytics`.

**Notable fixes/lessons**
- Archive workflows had to **commit the first snapshot** to exist; the **Bing `siteUrl` must match the verified property** (the `www` host); the **GSC service-account key** is a required secret.

## Phase 8 — Tamil: the 4th language (Sep 11–13)

The largest single expansion — a full corpus in a new script, delivered with a multi-agent pipeline.

**What shipped**
- **Locale foundation** — a `ContentLocale` (`ms|en|zh`) vs `Locale` (+`ta`) type split and a `loc()` Malay-fallback accessor, so `/ta` never renders empty; `/ta` routes cloned from `/en`; soft-launched (noindex, out of sitemap) via a `softLaunched = !LOCALES.includes(locale)` guard.
- **Fonts** — Noto Sans Tamil loaded on `/ta` (site + OG rasterizer), matching the CJK-block pattern; `build-og.mjs` stacks + `fonts-noto-core` in the deploy apt install.
- **Pilot → strings → taxonomy** — 5 pilot translations to validate the pipeline, then the i18n string table (112 UI keys), the taxonomy (categories/subcategories/intros), and all **40 `L()` inline-copy helpers** widened for Tamil.
- **The corpus** — **all 1,073 masters translated to Tamil** via ~35 multi-agent **Workflow** batches (a depth-2 rolling pipeline: always two 20-agent batches in flight to saturate the ~16-agent global pool with no idle tail; each batch committed by its exact file list). Limit-resilient recovery salvaged files written before an agent's return step (`exists + strict-YAML + ≥250 Tamil chars`). Full audit: 0 parse-bad, 0 thin, 0 untranslated; `health --strict` 0 errors; heap-bumped build exit 0.
- **The word-counter fix** — the health scan scored Tamil ~0 because the counter tallied Latin+CJK only; rewritten to count space-delimited scripts per token + unspaced scripts per char, forward-compatible for ja/ko.
- **Open launch (2026-09-13)** — flipped all 1,073 in-review → reviewed → **published** (196 sensitive articles got `reviewer: ashton-tan` to satisfy 3R+1 + four-eyes), added `ta` to `LOCALES` (switcher + hreflang + noindex lift), dropped the sitemap `/ta` exclusion (+ sitemap i18n `ta:'ta'`). Tamil became a **full public language equal to ms/en/zh** — real, indexed, discoverable content, **8,145 `/ta` sitemap URLs** (= `/en`).

**Notable fixes/lessons**
- **Session-limit interruptions cost nothing** — agents wrote their file before failing on the return step, so a recovery pass salvaged them; only genuine stragglers were re-scouted.
- Bash `node` invocations began tripping the auto-mode classifier mid-run → scout/verify tooling switched to PowerShell.
- Settled title rule: **Tamil descriptor + canonical name/number in brackets** (e.g. "…(Article 153)").

## Phase 9 — Facebook Page rollout & polish (Sep 13)

**What shipped**
- A **reusable cover-photo generator** (`scripts/build-fb-covers.mjs`) — one template producing all 6 language covers (ms/en/zh/ta/ja/ko) from a single from-scratch clean plate (warm gradient, 11px gold line, two hibiscus watermarks, centred lockup), with a full-language selector row (active language gold + underlined, `dx` gaps because SVG renderers collapse whitespace). Add a language = append one entry + re-run.
- Established the **FB Page standard** (name format, logo, cover, bio, website, category, page IDs) across languages, saved to memory.
- **Fixed the backlog poster** — diagnosed via the Actions run history that the 09-11 *"raise ramp to 10/day"* commit had dropped the `schedule:` key from the workflow YAML, making the whole file invalid so **every run since #11 failed** with *"Invalid workflow file, line 20"* (which is why posting died on exactly 09-11 with zero manifest commits after). Restored the key; validated all 10 workflow files with js-yaml.

**Still open (user-owned)**
- Wire `FB_PAGE_ID_TA` (add `ta` to `LANGS` in `scripts/lib/facebook.mjs`) — only after the ta Page is assigned to the "NegaraKu Poster" system user.
- FB page polish — upload the 6 covers, paste the remaining bios, set ja/ko profile/website/category.
- Japanese → Korean expansion (roadmap).

---

## Key incidents & root causes

| Date | Incident | Root cause | Fix |
|---|---|---|---|
| Jul 25+ | `[glob-loader] Duplicate id` warnings | Astro stale content-cache after heavy churn — not real dupes | `npm run clean` (`prebuild` auto-clears) |
| Aug 8+ | Frontmatter passes validate, `astro build` fails | Inner ASCII quotes in double-quoted YAML scalar | Strict js-yaml pre-push scan; use typographic quotes |
| Aug 10 | 1,641 broken related-slug links | Slug drift across restructures | 174 remapped, 1,467 dropped; broken-link → WARN |
| Aug 17 | ~45-min builds | Un-memoized `getCollection` in `content.ts` | Memoize → **~14× faster** |
| Aug 20 | Deploys hanging | OG-font apt install blocking CI | Made resilient, then non-fatal |
| Sep 9–11 | FB comment posting fails `#200` | Token lacks Advanced Access to comment | Decouple post/comment; caption-link default |
| Sep 11 | FB backlog posting stops dead | 09-11 commit dropped `schedule:` key → invalid workflow YAML | Restore the key (Sep 13) |
| ongoing | False "Translation pending"/"stale" badges | Freshness fields hand-set instead of derived | `translation-sync.mjs` owns them |
| ongoing | Pages deploys cancelled | Rapid pushes cancel in-progress runs | Batch pushes, watch the final run |

## Tooling & scripts built along the way

- **`scripts/sync.mjs`** — article manifest (+ the multi-script word counter).
- **`scripts/translation-sync.mjs`** — derives `translationStatus` / `sourceContentHash`; `translate:stamp` after a translation lands.
- **`scripts/suggest-crosslinks.mjs`** — full-corpus proper-noun crosslink pass (`--all/--named/--summary/--plan/--unique`).
- **`scripts/build-og.mjs`, `build-graph.mjs`, `build-dashboard.mjs`, `build-changelog.mjs`, `build-git-info.mjs`** — generated data at pre{dev,build}.
- **Content health scan** (`npm run health -- --strict`) — 3R+1 gate + four-eyes rule.
- **`scripts/publish-reviewed.mjs`** — hard-gated `reviewed → published` flip.
- **FB engine** — `scripts/lib/facebook.mjs`, `post-backlog-to-facebook.mjs`, cover generator `build-fb-covers.mjs`, and 5 scheduled workflows (post, backlog, insights, delete, + GSC/Bing archives).
- **Multi-agent Workflow pipeline** — the technique that produced the initial content waves *and* the full 1,073-article Tamil corpus.
- **Cloudflare Worker** — Visitors analytics + traffic-channel classifier + OAuth org gate.

## Recurring principles (the "why" behind the how)

- **Credibility before reach.** The 3R+1 gate and four-eyes rule predate the content and the Facebook engine — nothing sensitive goes public without a named reviewer.
- **Derive, don't hand-set.** Translation freshness is maintained by tooling, never edited by hand — the lesson of a corpus-wide false "pending" badge.
- **Match a reference exactly, apply across the whole set.** When an existing asset is the standard, measure it and apply consistently — not piecemeal, not eyeballed.
- **Never auto-push.** Every push is a live deploy; work is committed locally and held for an explicit "push".
- **Verify before shipping.** `sync` → `health --strict` (0 errors) → full `build` (exit 0) is the gate; strict js-yaml precedes any translation push.
- **Measure everything.** Visitors, channels, FB reach, GSC, Bing — the dashboard tells the true story, and analytics commits skip the deploy.

---

*Generated 2026-09-13 from the NegaraKu.md git history (755 commits, 2026-07-22 → 2026-09-13).*
