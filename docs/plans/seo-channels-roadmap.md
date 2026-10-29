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

### T3 — Wikipedia/Wikidata presence (IN PROGRESS)
- Add `negaraku.md` as a citation/external link on relevant Malaysia Wikipedia articles (build on existing Wikidata QIDs). Referral traffic + E-E-A-T authority signal that lifts all engines.
- **AI-doable:** draft a prioritised target list (articles × which NegaraKu page is a valid citation). **User-side:** make the edits (needs a Wikipedia account; follow WP:RS / no self-promo norms).
- Status: TODO.

### T4 — Verify Google Dataset Search presence
- `Dataset` JSON-LD is already emitted, so confirm the corpus / HF dataset actually surfaces in Google Dataset Search and the node is complete (license, distribution/DataDownload). Near-zero effort.
- Status: TODO.

### T5 (optional) — Yandex Webmaster
- Already IndexNow-pinged; console adds minor index-coverage diagnostics + Turkic/CIS/ar reach. Verify-only (meta tag, same mechanism as Naver). Low value for the current audience.
- Status: OPTIONAL.

### T6 (optional) — Kaggle dataset mirror
- Mirror the HF dataset on Kaggle for data-science discovery. Minor.
- Status: OPTIONAL.

## Evaluated and de-prioritised (advise against)
- **Baidu Ziyuan** — zh corpus, but audience is Malaysian Chinese (Google users); Baidu favours ICP-licensed China-hosted sites, so overseas GitHub Pages indexes poorly. High friction, low ROI. Skip unless targeting mainland China.
- **DuckDuckGo** — uses Bing's index (already covered). No separate console.
- **Brave / Mojeek / Yep** — no meaningful webmaster console (Yep/Brave partly fed by IndexNow already). No action.
