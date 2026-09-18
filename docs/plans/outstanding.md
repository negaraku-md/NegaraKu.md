# NegaraKu.md — Outstanding Tasks

Living tracker of open work toward the mission **"let the world know about Malaysia."**
Update this file as tasks move; check items off when done. Owner tags: **[you]** = user
action (accounts, credentials, approvals — Claude can't do these), **[me]** = Claude.

_Last updated: 2026-09-18._

---

## 🌐 Distribution push — ON HOLD (2026-09-18, "come back later")

The 4 discovery modes and where we stand:

| Mode | Have | Gap |
|---|---|---|
| Search (pull) | SEO ✓ | answer engines, Wikipedia |
| AI (machine) | llms.txt, MCP, **HF dataset ✓** | (broad training-data presence) |
| Social (push) | Facebook ✓ | Instagram, LinkedIn, every other network |
| Reference / owned | Share button | Wikipedia, newsletter, syndication |

### LinkedIn — Page done, engine built, **paused mid-setup**
- [ ] **[you]** Verify business email on the Community Management API request (the step we stopped at)
- [ ] **[you]** Mint OAuth token as org admin, scope `w_organization_social` (~60-day; refresh 365-day)
- [ ] **[you]** Add repo secret `LINKEDIN_ACCESS_TOKEN`
- [ ] **[me]** Uncomment the `schedule:` in `.github/workflows/linkedin-backlog.yml` to go live
- [x] Page fully set up (logo, 6:1 banner, About, specialties, location, EN/MS/ZH localization)
- [x] Poster engine built + dry-run-verified (en/ms/zh, business-pillar-first, rotated into one feed)
- [x] Developer app "NegaraKu.md Poster" (Client ID `86s3wnpy5m90dt`, id 263840707) created + Company-verified

### Instagram — flagship done, expand
- [ ] **[you]** Create `@negaraku.md.en` / `.zh` / `.ta` accounts (signup)
- [ ] **[me]** Wire each (Professional → Business → category → photo+bio → Business Suite → Page connect → system-user tasks)
- [ ] **[you]** `instagram_content_publish` App Review on the Poster app (per-app, covers all 4)
- [ ] **[me]** Build the IG branch of the poster engine (2-step Content Publishing API; link-in-bio)
- [x] Flagship `@negaraku.md` (ms) provisioned + wired
- [x] Branded per-language emails (Cloudflare Email Routing catch-all → brand Gmail)

### Wikipedia
- [ ] **[you]** COI-safe citation playbook (Phase 2b) — disclose, suggest on Talk pages, cite sparingly
- [x] Wikidata QID sweep (~343 articles) + own item Q141449495

### Not started (Tier 2–3)
- [ ] Email newsletter (owned audience, algorithm-independent)
- [ ] Syndication — Google News Publisher, Flipboard, Pinterest
- [ ] X/Twitter + Telegram broadcast (extend the poster engine)
- [ ] Short-form video (TikTok / YouTube Shorts / Reels) — needs text→video pipeline
- [ ] Embeddable widgets (compliance calendar / knowledge graph / fact-of-the-day)

---

## 📦 Held locally, waiting for "push"
- [ ] LinkedIn **poster engine** (commits `46a17765`, `c9b20d98`) — inert until the token is added
- [ ] LinkedIn **banner** + generator (commit `3fd37d80`)
- [ ] This tracker (`docs/plans/outstanding.md`)

---

## 🌏 Japanese (`ja`) language launch — IN PROGRESS
- [x] **Phase 0** — foundation + fonts + `/ja` routes (soft launch, noindex). Build 8,151 pages, verified. Pushed (`eb8fa19c`)
- [x] **Phase 1** — pilot 8 cross-pillar articles → Japanese verified (page + OG in Noto Sans JP). Commit `3c8bda27` (local)
- [x] **Phase 2** — chrome: i18n 113 keys, ~1000 `L()` calls (41 files), taxonomy (82), typed objects, plumbing. Build green, 0 leakage. Commit `f202ccdd` (local)
- [ ] **Phase 3** — full corpus (~1,073) via multi-agent Workflow batches (JA money = zh 億/万 convention)
- [ ] **Phase 4** — review + OPEN LAUNCH (add `ja` to LOCALES, drop sitemap filter, wire FB Page)
- [ ] Then **Korean (`ko`)** — reuses everything above

## 🛠 Other standing project items
- [ ] **Facebook comment-mode** — blocked by App Review / Advanced Access (parked; caption-mode is live)
- [ ] **Compliance calendar** — planned further redesign
- [ ] **FB fetch-timeout hardening** (reliability follow-up)
- [ ] Optional: switch ms IG flagship login email to `ig-ms@negaraku.md`

---

## ✅ Recently completed (for context)
- Hugging Face dataset **LIVE** (`negaraku-md/negaraku-md`, 4292 rows)
- Wikidata QID sweep + NegaraKu.md's own item Q141449495
- LinkedIn Company Page fully set up (incl. EN/MS/ZH localization + 6:1 banner)
- Instagram flagship `@negaraku.md` provisioned
