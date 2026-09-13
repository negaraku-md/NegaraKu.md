# NegaraKu.md — Development Log

> *"Let the world know about Malaysia."*
>
> A development history of **NegaraKu.md**, an open-source, AI-friendly knowledge
> base about Malaysia — built on Astro v5, deployed static to GitHub Pages, styled
> in the 1company brand (true-black canvas, gold `#FFC000`, Montserrat + Lato).

**Span:** 2026-07-22 → 2026-09-13 (54 days) · **755 commits** · **4 public languages** (ms / en / zh / ta) · **~1,073 master articles** (≈4,355 markdown files across all languages).

This log is reconstructed from the git history and reflects the actual sequence of work. Dates are commit dates. It is a narrative of *phases*, not a commit-by-commit dump.

---

## At a glance — activity by day

| Period | Focus | Peak days |
|---|---|---|
| Jul 22–26 | Foundation + trilingual corpus | Jul 24 (84), Jul 27 (60) |
| Aug 1–8 | Category launch + content growth | Aug 8 (58) |
| Aug 10–21 | Analytics, graph, nav, lifecycle, contributor system | Aug 20 (44), Aug 16 (40) |
| Aug 24 – Sep 7 | Content deepening + crosslinks | Sep 7 (28) |
| Sep 8–11 | Facebook engine + analytics stack v2 | Sep 10 (45), Sep 11 (44) |
| Sep 11–13 | Tamil — the 4th language | Sep 13 (44) |

---

## Phase 0 — Foundation & the trust model (Jul 22–24)

The project began not with content but with a **credibility architecture**. Before any article was public, the rules for *what may be published* were in place.

- **Astro v5 scaffold**, Malaysia knowledge base, trilingual from commit one (`ms` at `/`, `en` at `/en`, `zh` at `/zh`).
- **3R+1 publication gate** — sensitive content is excluded from the public build unless it carries a named reviewer. The first (and still only) authorised reviewer: **ashton-tan**.
- **Chain-of-custody trust model** — every article renders its status as a provenance timeline; honest status/drafter labels; classification disclosed; review dates shown only on time-sensitive content.
- **Dashboard** — the true language × lifecycle picture (per-article master, coverage, outstanding work), reader-meaningful headline stats.
- **Master-language-per-article model** — each article's authoritative origin is decided per-article, not globally. Validated by piloting `sdn-bhd` as a Malay-master topic, then converting 7 non-sensitive topics to Malay masters.

## Phase 1 — Trilingual parity (Jul 25–26)

A concentrated content push translated the corpus **category by category** toward full trilingual parity:

- The **296-article MS wave** (all non-sensitive EN-master articles → Bahasa Malaysia), then sensitive articles added as 3R+1 review-gated drafts.
- Waves across every pillar — transport, education, healthcare, property, money, states, law, economy, glossary, government, arts-culture — culminating in **`malaysia` (40 articles) → 100% trilingual parity**.
- **Architecture decision:** the public site = *published-only*. In-review/reviewed content is hidden in production; the reviewed corpus was published and the pipeline simplified around that gate.

## Phase 2 — Categories & content growth (Aug 1–8)

- **Launched the 12 populated categories** (fixed 404s on their hub pages).
- **Phase 2 content complete (445/445)** — states + keris masters landed in-review.
- Gap-filling translation batches kept `ms`/`zh` in-sync as the corpus grew past 1,000 topics.

## Phase 3 — Discovery, analytics & performance (Aug 10–20)

The site grew a real navigation and measurement layer.

- **Brand:** new gold *Bunga Raya* logo (v2); the abstract blossom archived as v1.
- **Visitors analytics pipeline** — Cloudflare Worker → Analytics Engine → build step → on-page count, with a scanner-noise filter and an all-time count.
- **Interactive Knowledge Graph** — a generated graph + d3 canvas page, with topic search.
- **Navigation overhaul** — restructured into 3 pillars + Explore / About / Contribute menus; added `/categories` hub, Latest Articles, Trending Articles, and a dedicated **Timeline of Malaysia** (later promoted to a real corpus article). Most-read + Latest strips on hubs, categories, and home. *(The menu restructure took a couple of revert/re-apply cycles before it stuck.)*
- **SEO:** entity schema, answer/speakable blocks, per-locale RSS, PWA manifest, localized OG cards, sitemap `lastmod`, canonical URLs. OG card reused as the article thumbnail.
- **Performance:** the big one — **memoized the content collection → ~14× faster build** (the real root cause of the ~45-min build, not OG/pagefind). OG-image generation made incremental + CI-cached; the OG-font install was hardened after it hung an entire deploy.

## Phase 4 — Article lifecycle & contribution system (Aug 19–21)

A full editorial workflow, shipped in five phases plus a governance rule.

- **Lifecycle foundation** — status enum (`draft → in-review → reviewed → published`), two-field review model, archive cascade, a hidden article switch + broken-link guard.
- **Editorial Worklist** page (Phase 2), **feedback → triage taxonomy** (Phase 3), **contributors page + role guides** (Phase 4), **AI-token translation tool + guide** (Phase 5).
- **Four-eyes rule** — separation-of-duties health check: a reviewer cannot be the assignee or last-revision contributor.
- **Reader / Contributor view system** — a two-view model backed by a **GitHub OAuth Worker** (org-membership gate); the Contribute menu hides for recognised contributors.
- **Onboarding series** — `/start` orientation, `/contributor-guide`, a per-article **Share** button, and a pre-contributor promo layer gated for contributors.
- **Legal + ops** — Terms / Privacy / Cookie pages; a build-flag maintenance takeover screen (with MS/EN/中文 switch).

## Phase 5 — Content deepening & interlinking (Aug 24 – Sep 7)

- **Sensitive articles published** through the 3R+1 gate — Mahathir, Anwar, 1MDB, Prime Ministers of Malaysia.
- **Browse-first article cards** — collapsed cards with signposted display toggles, deep-linkable category/section filters, mobile toolbar collapse + payload dedup.
- **Crosslink engine** (`scripts/suggest-crosslinks.mjs`) — a full-corpus proper-noun pass wired **~895 internal links in 5 batches** (statutes, culture/history, agencies, GLCs + Malaysia Plans, places).
- **Dedup + redirects** — a static redirect layer in `astro.config`; retired duplicate articles (JPN/MITI, BNM, Petronas) merged to canonical targets.

## Phase 6 — The Facebook engine (Sep 8–11)

Turning the corpus into reach.

- **Auto-post every new article** in all 3 languages, each to its **own language Page** (ms / en / zh), with an emoji-prefixed title and per-article curated hashtags (localized to the post language). System-user token in secrets; the script mints a Page token at run time (`resolvePageToken`) and fails loudly on error.
- **UTM-tagged links** so Facebook clicks stay attributable in the analytics.
- **Backlog poster** — a ranked, manifest-tracked queue (`analytics/posted.json`) that drains the existing corpus in priority order (GSC demand + pillar rotation), on a warm-up ramp, via a **self-healing 3×/day cron** with a once-per-MYT-day guard. Switchable link placement (caption vs. first comment). A Graph-API post-deletion script for cleanup.

## Phase 7 — Analytics stack v2 (Sep 10)

- **Traffic-channel classifier** in the Worker (referrer + UTM), aggregated into a dashboard "Traffic by channel" panel.
- **Data archives** — Facebook insights, Google Search Console, and Bing Webmaster, each with its own scheduled workflow and dashboard panel.
- **On-site engagement beacon** + panel; AI-crawlers panel; channel breakdown in `verify-analytics`.

## Phase 8 — Tamil: the 4th language (Sep 11–13)

The largest single expansion — a full corpus in a new script, delivered with a multi-agent pipeline.

- **Locale foundation** — a `ContentLocale` (`ms|en|zh`) vs `Locale` (+`ta`) type split and a `loc()` Malay-fallback accessor, so `/ta` never renders empty; `/ta` routes cloned from `/en`, soft-launched (noindex, out of sitemap) via a `softLaunched` guard.
- **Fonts** — Noto Sans Tamil loaded on `/ta` (site + OG rasterizer), matching the CJK-block pattern.
- **Pilot → strings → taxonomy** — 5 pilot translations to validate the pipeline, then the full i18n string table, taxonomy, and all 40 `L()` inline-copy helpers widened for Tamil.
- **The corpus** — **all 1,073 masters translated to Tamil** via ~35 multi-agent **Workflow** batches (a depth-2 rolling pipeline saturating the ~16-agent pool; limit-resilient recovery salvaged files written before an agent's return step). Verified: `health --strict` 0 errors, build green.
- **Open launch (2026-09-13)** — flipped all 1,073 in-review → reviewed → **published**, added `ta` to `LOCALES` (switcher + hreflang + noindex lift), and dropped the sitemap `/ta` exclusion. Tamil became a **full public language equal to ms/en/zh** — real, indexed, discoverable content, **8,145 `/ta` sitemap URLs**.

## Phase 9 — Facebook Page rollout & polish (Sep 13)

- A **reusable cover-photo generator** (`scripts/build-fb-covers.mjs`) — one template producing all 6 language covers from a single clean plate, with a full-language selector row (the active language gold + underlined). Add a language = append one entry + re-run.
- Established the **FB Page standard** (name format, logo, cover, bio, website, category) across languages.
- **Fixed the backlog poster** — diagnosed that the 09-11 *"raise ramp to 10/day"* commit had dropped the `schedule:` key from the workflow YAML, making the file invalid so every run since failed *("Invalid workflow file, line 20")*. Restored the key; validated all 10 workflow files.

---

## Recurring principles (the "why" behind the how)

- **Credibility before reach.** The 3R+1 gate and four-eyes rule predate the content and the Facebook engine — nothing sensitive goes public without a named reviewer.
- **Derive, don't hand-set.** Translation freshness (`translationStatus` / `sourceContentHash`) is maintained by tooling, never edited by hand — a lesson from a corpus-wide false "pending" badge.
- **Match a reference exactly, apply across the whole set.** When an existing asset is the standard (e.g. the English cover), measure it and apply consistently — not piecemeal.
- **Never auto-push.** Every push is a live deploy; work is committed locally and held for an explicit "push".
- **Measure everything.** Visitors, channels, FB reach, GSC, Bing — the dashboard tells the true story, and analytics commits skip the deploy.

---

*Generated 2026-09-13 from the NegaraKu.md git history.*
