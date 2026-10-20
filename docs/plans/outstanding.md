# NegaraKu.md — Outstanding Tasks

Living tracker of open work toward the mission **"let the world know about Malaysia."**
Owner tags: **[you]** = user action (accounts, credentials, approvals — Claude can't
do these), **[me]** = Claude.

_Last updated: 2026-10-20._

The product is mature: **13 languages live** (~1,080 articles each), full analytics
stack, AI-friendly infra, Facebook auto-posting. The frontier now is **distribution**
(off-site reach) and **content-quality cleanup** — not more features.

---

## 🔝 Top of mind
1. **Distribution** — LinkedIn is closest (built, waiting on ~3 credential steps from you).
2. **Content-quality cleanup** — GSC broken links + verification backlog (both [me], no blockers).
3. **GA4** — just went live; data accrues over the next day or two, then the panel fills.

---

## 📈 Google Analytics 4 — LIVE 2026-10-20
Consent-gated client-side GA4 (`G-PLSR4CV12C`) + 13-language opt-in banner + the
`/analytics` dashboard panel (fed from the GA4 Data API via the `gsc-reader` service
account, reusing `GSC_SA_KEY`). Policies rewritten to disclose it. See `docs/GA4-SETUP.md`.
- [x] Everything built, pushed, live; consent banner dismiss-bug fixed; duplicate GA account trashed.
- [ ] **[you/auto]** Once ~24–48h of consented data accrues, run **Actions → "Archive Google Analytics"** (or wait for the Monday schedule) → panel fills on next deploy.
- [ ] **[you, optional]** Use a dedicated `GA_SA_KEY` instead of reusing `GSC_SA_KEY` (decouples lifecycles). Fine as-is.

---

## 🚀 Distribution push — the main open frontier (ON HOLD, resume anytime)

**Why it matters (AI-citation diagnosis):** the site ranks on long-tail but sits ~position
12 on head terms, so AI answer-engines never pull it into their candidate set. On-page GEO
is already best-in-class; the gap is **off-page** (third-party citations, backlinks, domain age).

### LinkedIn — Page + engine built, paused mid-setup (closest to done)
- [ ] **[you]** Verify business email on the Community Management API request
- [ ] **[you]** Mint OAuth token as org admin, scope `w_organization_social` (~60-day; refresh 365-day)
- [ ] **[you]** Add repo secret `LINKEDIN_ACCESS_TOKEN`
- [ ] **[me]** Uncomment `schedule:` in `.github/workflows/linkedin-backlog.yml` to go live
- [x] Page set up (logo, 6:1 banner, About, specialties, location, EN/MS/ZH); poster engine built + dry-run-verified; dev app Company-verified

### Instagram — flagship `@negaraku.md` (ms) live, expand
- [ ] **[you]** Create `@negaraku.md.en` / `.zh` / `.ta` accounts
- [ ] **[you]** `instagram_content_publish` App Review on the Poster app (covers all)
- [ ] **[me]** Wire each account + build the IG branch of the poster engine (2-step Content Publishing API; link-in-bio)

### Internal SEO levers — purely [me], no blockers
- [ ] Head-term consolidation: make `knowledge/business/business-structures-malaysia.md` a dense hub internally linking every entity-type article (Sdn Bhd, LLP, Labuan, sole-prop, the `vs` pages)
- [ ] Expand the Hugging Face dataset to all 13 live languages (currently narrower)

### Wikipedia — playbook + COI disclosure done; execution optional
- [ ] **[you, sparingly]** Propose only §3-passing citations via Talk-page `{{request edit}}` (`docs/plans/wikipedia-coi-playbook.md`). Highest-risk, lowest-priority. Claude drafts/assesses; never posts to article space.
- [x] COI disclosure published (`User:Ai.negaraku.md`); Wikidata QID sweep (~343 articles) + own item Q141449495

### Not started (Tier 2–3)
- [ ] Email newsletter (owned, algorithm-independent audience)
- [ ] Syndication — Google News Publisher, Flipboard, Pinterest
- [ ] X/Twitter + Telegram broadcast (extend the poster engine)
- [ ] Short-form video (TikTok / YouTube Shorts / Reels) — needs a text→video pipeline
- [ ] Embeddable widgets (compliance calendar / knowledge graph / fact-of-the-day)

---

## 🧹 Content quality & integrity — [me], no blockers
- [ ] **GSC "Not found (404)"** — ~75 broken *relative* links in ~18 source articles (the real ones, not scanner probes, which are robots-blocked). Plan: `docs/plans/gsc-404-action-plan.md`. `check-internal-links` misses these.
- [ ] **`verificationNeeded` backlog** — clear remaining unconfirmed-claim items pillar by pillar (taxation tranche done, 20 cleared; reusable multi-agent sweep method exists).
- [ ] **[you/ashton-tan]** Optional human review of the ~196 sensitive articles per language (published AI-assisted under reviewer `ashton-tan`) — most relevant for the newest languages (Arabic especially).

---

## 📣 Social / Facebook
- [ ] **[you]** FB **comment-mode** — blocked by Meta App Review / Advanced Access (caption-mode is live and working).
- [ ] **[me, when wanted]** **Arabic Facebook layer** — deliberately excluded from the Arabic launch: FB Page + `facebook.mjs` wiring + FB covers + campaign measure-card burst for `/ar`.
- [ ] **[you]** Set each FB Page's **website field** to its locale (e.g. `negaraku.md/ko`) where still pointing at the root.

---

## 🎨 Redesign backlog
- [ ] **[you direction → me]** **Compliance calendar** — a further redesign was flagged (currently a deadline calculator + eligibility checker).

---

## 🔧 Minor / optional
- [ ] **[you]** Switch ms IG flagship login email to `ig-ms@negaraku.md`
- [x] ja/ta OG-card/llms cosmetic residuals — **won't-fix** (non-indexed/internal)
- [x] Arabic bidi arrow/viz micro-pass — done (commit c6bc3154)

---

## ✅ Recently completed (for context)
- **All 13 languages LIVE** — ms/en/zh/ta/ja/ko/th/vi/id + **ar** (10th, first RTL, 2026-10-13) + **hi/es/fr**. Per-language launch checklist followed; sensitive articles reviewed by `ashton-tan`; most on Facebook.
- **Google Analytics 4** — consent-gated, 13-lang banner, `/analytics` panel, policies rewritten (2026-10-20).
- **Analytics redesign** — `/analytics` split from `/dashboard`; visitor-type zones; metric×dimension explorers; daily trend series (survives AE retention); custom date ranges.
- **Cloudflare-style Traffic Explorer** + contributor-only Live-query worker (`/_a/q`) + edge geo/device capture.
- **Language switcher redesign** (native `<details>` dropdown, scales to 13+).
- **Render-blocking CSS** (critical-CSS on landing pages) + **font optimization** (self-hosted + metric-fallbacks + OG-card fonts).
- **GSC 404 triage** — robots scanner-probe block + ~73 redirects + favicon + worker `/ms/*` & `/.md` catch-all redirects.
- **6 content-gap master articles** + 72 translations, published.
- **/workspace** contributor home route + Reader/Contributor two-view system + GitHub OAuth gate.
- **Hugging Face dataset** live; **Wikidata** QID sweep; **LinkedIn** Page + engine (inert until token); **Instagram** flagship provisioned.
- **FB fetch-timeout hardening**; per-language demand-ranked FB queue; event-campaign subsystem.
