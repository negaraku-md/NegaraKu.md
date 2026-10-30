# SEO / Discovery Channels — outstanding backlog

_Created 2026-10-29. Prioritised by ROI for NegaraKu.md (13-language, AI-friendly, static on GitHub Pages at the canonical apex `https://negaraku.md`). Work these one by one; tick as done._

## Already in place (do NOT redo)
- **Google Search Console** (sc-domain property, DNS-TXT verified) ✓
- **Bing Webmaster Tools** (property `www.negaraku.md`) ✓ — note: canonical is the **apex** `negaraku.md`; the sitemap + `<link rel=canonical>` use apex.
- **IndexNow** via `api.indexnow.org` aggregator → already fans out to **Bing, Yandex, Naver, Seznam, Yep** on every push (`scripts/ping-indexnow.mjs`). So those engines already receive change pings; a webmaster console only adds sitemap submission + diagnostics + curated-index inclusion.
- **AI-crawler allow-list** in `src/pages/robots.txt.ts`: GPTBot, OAI-SearchBot, ClaudeBot, Claude-User, anthropic-ai, Google-Extended, PerplexityBot, Perplexity-User, Applebot-Extended, Amazonbot **allowed**; CCBot, Bytespider **blocked**. → already citeable by ChatGPT / Claude / Perplexity / Gemini.
- **Structured data** (`src/lib/seo.ts`): Organization, **Dataset + DataDownload**, FAQPage, BreadcrumbList, **SpeakableSpecification**, WebSite + SearchAction, Article, ItemList, Person, ImageObject.
- **Hugging Face dataset**, **Wikidata QID** entity-linking on articles.

## Outstanding tasks (one by one)

### T1 — Naver Search Advisor (Korea)  ← STARTING FIRST
- **Why:** full `ko` corpus; Korea is the one major market where Google is secondary to Naver's own curated index. IndexNow pings Naver but inclusion needs the console.
- **Verification:** Naver does NOT support DNS-TXT → use **HTML meta tag** (`<meta name="naver-site-verification" content="…">`), which we add to `BaseLayout.astro` <head>. (Alt: HTML file in `public/`.)
- **Register:** the apex `https://negaraku.md` (matches canonical + sitemap), not www.
- **Steps:** account → register site → meta-tag verify (AI adds tag on the verification code) → submit `https://negaraku.md/sitemap-index.xml` → optional URL-collection requests for priority /ko pages.
- **AI-doable:** add the verification meta tag + confirm sitemap URL. **User-side:** Naver account (may need phone verification), site registration, clicking verify, sitemap submission.
- Status: **DONE & LIVE 2026-10-29** — verified (HTML-tag meta, commit 750ff94bb) + sitemap-index.xml submitted.

### T2 — Reciprocal backlinks from owned properties (HIGHEST authority ROI)
- Dofollow links **1company.com → negaraku.md** and **syarikat.ai → negaraku.md** (footer / resources / about). Directly addresses Bing's "lacks inbound links from high-quality domains" + the crawl-authority gap. Fully in your control.
- **AI-doable:** draft the link blocks/anchor text + placement plan. **User-side:** add to those sites.
- Status: TODO.

### T3 — Wikipedia/Wikidata presence (Lever 1 DONE; paused for pacing)
- **Reframed:** Wikipedia external links are `nofollow` (no link equity) and self-citation on Wikipedia = COI/refspam risk. So **Lever 1 = Wikidata `P973` "described at URL" references** instead — low-risk, feeds the Knowledge Graph + LLM grounding, and is the structured-data equivalent of a citation.
- **Done 2026-10-29:** COI disclosure published on `User:Ashton Tan`, then **33 `P973` references** added (18 Batch 1 + 15 Batch 2) across GLCs/companies, heritage items, and statutes — each pointing at the matching `negaraku.md` article. All verified `current` (none reverted). Candidate list: `docs/plans/wikidata-reference-candidates.md` (410 QID-tagged articles).
- **Quality rule applied:** skip entities whose scope/country doesn't match the article (skipped global gamelan Q194492, generalized silat Q569801 → used the correct Silat Melayu Q7436924). Two article `wikidata:` fields were found mis-assigned during this pass: silat-melayu (fixed → Q7436924), competition-act-2010 (tagged the Commission Q110133506, not the Act — no Act item exists; needs a decision).
- **Pacing guardrail:** 33 edits/day on a young account is already a visible burst — **pause** and space any further candidates over days/weeks.
- **Lever 2 (later, optional):** cite `negaraku.md` in the *references* section of relevant Malaysia Wikipedia articles where it is a genuinely reliable source (WP:RS), done sparingly by a neutral editor, never as self-promo.
- Status: Lever 1 DONE (paused); Lever 2 TODO.

### T4 — Google Dataset Search presence (DONE)
- Audited the emitted `Dataset` node: name, description (13-lang), url, inLanguage, license (CC-BY-SA-4.0), isAccessibleForFree, keywords, creator/publisher, sameAs (HF), and 3 `DataDownload` distributions (articles.json, llms-full.txt, HF jsonl) — all present and all distribution URLs resolve (200).
- **Enriched 2026-10-29** with the two recommended properties it lacked: `spatialCoverage` (Place "Malaysia" + Wikidata Q833 + GeoShape bounding box, so Dataset Search can filter by place) and `dateModified` (latest commit date via `getGitInfo()`, regenerated every build — a real freshness signal). `src/lib/seo.ts`, commit `832a46077` (held for push).
- Discovery itself is passive: once the enriched node is live + recrawled, confirm the corpus surfaces at datasetsearch.research.google.com (search "NegaraKu" / "Malaysia knowledge base") — no submission step exists; it is crawl-driven.
- Status: DONE (verify surfacing after the next deploy is indexed).

### T5 — Yandex Webmaster (DONE)
- Registered apex `https://negaraku.md` and **verified ownership 2026-10-30** via HTML meta tag (`<meta name="yandex-verification" content="171b6293ac48a58f">` in `BaseLayout.astro`, commit `8a396f000`, pushed + live). Role: Owner (ashton.tan@gmail.com).
- **Sitemap:** manual submission was blocked by a temporary Yandex outage ("Sitemap files tool is in read-only mode"). Not a problem — Yandex auto-discovers from our `robots.txt` (`Sitemap: https://negaraku.md/sitemap-index.xml`), and IndexNow already pings Yandex on every push. **Retry the manual submit** at Indexing → Sitemap files once Yandex restores the tool (optional belt-and-braces).
- Honest ROI: low (no CIS audience; Yandex already IndexNow-pinged) but near-zero cost; completes the "claim every major console" posture.
- Status: DONE (verified; manual sitemap submit pending Yandex tool restoration).

### T6 — Kaggle dataset mirror (automation built; needs account + secret)
- Mirrors the corpus to a public Kaggle dataset for data-science discovery + a second Google Dataset Search node + a provenance backlink to negaraku.md. Automated, reuses the HF export's output so the two mirrors never drift; skips cleanly if the secret is absent (same pattern as `HF_TOKEN`).
- **Built 2026-10-30 (held for push):** `scripts/export-kaggle-dataset.mjs` (flattens `dataset/data/*.jsonl` → `kaggle/<lang>.jsonl` + README + `dataset-metadata.json`, owner/slug from env) and `.github/workflows/kaggle-dataset.yml` (export → kaggle CLI create-on-first-run-`--public`-else-version, gated on `KAGGLE_KEY`). Tested locally: 15,054 rows / 13 files / ~252 MB. `kaggle/` git-ignored.
- **User steps to activate:** (1) create a Kaggle account (phone-verify — required for the API); (2) Settings → API → *Create New API Token* → downloads `kaggle.json` = `{username, key}`; (3) in GitHub repo Settings → Secrets and variables → Actions: add **variable** `KAGGLE_USERNAME` = the username, and **secret** `KAGGLE_KEY` = the key; (4) trigger the workflow (Actions → *Publish Kaggle dataset* → Run workflow, or any `knowledge/**` push). First run creates `https://www.kaggle.com/datasets/<username>/negaraku-md`.
- Status: automation DONE (held for push); publishing pending the user's Kaggle account + `KAGGLE_KEY` secret.

### T7 — China / Chinese-world reach (REOPENED 2026-10-30)
Direction correction: the mission is "let the world know Malaysia," not just a Malaysian audience. Mainland China (~1B searchers, **Google blocked**) + a native 1,158-article **zh corpus** make this the top untapped channel for the Chinese-speaking world. The blocker was never ROI — it is **reachability** (can crawlers reach a non-ICP, Cloudflare-fronted, overseas site).

- **PetalBot (Huawei Petal Search) — un-blocked 2026-10-30.** Was in the robots `SEO_SCRAPERS` disallow (bandwidth); moved to an explicit `SEARCH_ENGINES` allow (`src/pages/robots.txt.ts`). Reaches the Chinese/Huawei-device ecosystem **without** Baidu's ICP/GFW friction. **CAVEAT:** a Cloudflare WAF/custom rule (dashboard, not in repo) also enforced the scraper block — it must be updated there too or the edge still blocks PetalBot despite robots. `worker/src/classify.js` keeps PetalBot as an analytics *label* only (not a block) — left as-is.
- **Baidu Ziyuan (百度搜索资源平台) — Stage 1 (try + measure), user has/will create a Baidu account.** Steps: register apex → verify via meta tag (same mechanism as Naver/Yandex; drive in user's Chrome) → submit sitemap → run **抓取诊断 (crawl diagnostics)**, which fetches a URL *as Baiduspider from inside China* = the definitive yes/no on whether the GFW/no-ICP wall actually blocks us. If green, wire a Baidu **push ping** (普通收录 API, `data.zz.baidu.com/urls?site=&token=`) into the push pipeline like IndexNow, gated on a `BAIDU_PUSH_TOKEN` secret. **Robots already allows Baiduspider** (via `*`).
- **Baidu Stage 2 (only if the wall is real + we want deep mainland reach):** a China-accessible delivery path for the zh pages — Cloudflare China Network (needs ICP) or a China-hosted ICP'd mirror. Real cost + a China business entity → a separate strategic decision, not done unilaterally.

## Evaluated and de-prioritised (advise against)
- **DuckDuckGo** — uses Bing's index (already covered). No separate console.
- **Brave / Mojeek / Yep** — no meaningful webmaster console (Yep/Brave partly fed by IndexNow already). No action.
