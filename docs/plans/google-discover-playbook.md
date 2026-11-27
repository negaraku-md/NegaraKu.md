# Google Discover Playbook — NegaraKu.md

**Status:** active · **Created:** 2026-11-27 · **Owner:** editorial

## The one thing to understand

Google Discover is **not** a channel you configure — there is no opt-in, sitemap flag,
or submit button. Google decides, per page, whether to surface it in users' feeds.
Eligibility is **earned** from quality + freshness + engagement signals. Our job is to
(a) remove technical blockers and (b) feed the signals Google uses to choose.

Discover also behaves differently from Search: it rewards **timely, feature-style,
visually-rich** content over evergreen reference. We are a reference KB, so Discover is
a **bonus channel, not a reliable one** — set expectations accordingly. The plays below
tilt the odds; they do not guarantee traffic.

## Technical gates — status

| Gate | Needed | Status |
|---|---|---|
| `max-image-preview:large` robots directive | Hard requirement — without it Google never shows our images large, and Discover *is* large images | ✅ `BaseLayout.astro` |
| Article `image` in structured data, ≥1200px | Strong signal; Discover withholds eligibility without it | ✅ `seo.ts` (OG card, 1200×630) — shipped 2026-11-27 |
| `Article` JSON-LD w/ `datePublished`/`dateModified`/`author`/`publisher` | Baseline rich-result eligibility | ✅ `seo.ts` |
| `og:image` 1200×630 every page | Social + crawler image | ✅ `BaseLayout.astro` |
| Core Web Vitals / page experience | Weak-but-real ranking input | ✅ critical-CSS, self-hosted fonts, R2 offload |

**The technical side is essentially done.** Everything below is content/cadence.

### One optional technical upgrade (deferred, judgement call)
The schema `image` currently uses the branded OG card for *every* article. Real photos
(our Wikimedia heroes on food/places/tourism/states pillars) out-perform text-on-card in
Discover. Upgrading `articleJsonLd` to emit `image: [hero, ogCard]` when `d.hero` is set
would help those image-rich pillars — **but** only if every hero is ≥1200px wide; a
sub-1200 hero listed first could make Google pick a non-compliant image and *hurt*
eligibility. Do this only after auditing hero widths in the image pipeline. Until then,
`max-image-preview:large` already lets Google use the on-page hero directly, so the gap
is small.

## The real lever: timeliness

Discover favours "what just changed / what's new / what to do now." We already own the
machinery to run this — it is a cadence problem, not a tooling problem:

- **Event-campaign engine** — `campaigns/<event>/<lang>.json` + `post-campaign-to-facebook.mjs`
  (per-campaign date-window cron, `.sent.json` idempotency). `campaigns/budget-2027/` exists.
- **Freshness surfacing** — `dateModified`, `build-changelog.mjs`, `build-review-queue.mjs`.
- **Distribution** — per-language FB queue (peak-window cron) + event campaigns already feed
  engagement, which feeds Discover.

### The Malaysia timely-content calendar

Each recurring event = a planned article refresh (bump `dateModified` with real new
substance, never a cosmetic touch) + an event campaign. Author/refresh **ahead** of the
date so the page is indexed and warm when search/Discover interest spikes.

| Window | Trigger | Content play | Primary pillar |
|---|---|---|---|
| Oct | Budget / Belanjawan | "What Budget 20XX means for you" — tax, SME, B40/M40 | economy, taxation, finance |
| Jan–Feb | Chinese New Year | festival guide, bank/office hours, ang pow, travel | festivals, food |
| Feb | Thaipusam | Batu Caves, the observance | festivals, religion |
| Mar–Apr | Tax season (e-Filing) | income-tax how-to, PCB, deadlines, reliefs | taxation, tools |
| Mar–Apr | Hari Raya Aidilfitri | balik kampung, duit raya, open-house, closures | festivals, food |
| ~May | EPF dividend announcement | what the rate means, withdrawals | finance |
| May | Wesak | the observance | religion |
| Jun | Gawai / Kaamatan | East-Malaysia harvest festivals | festivals |
| Oct–Nov | Deepavali | festival guide, closures | festivals, religion |
| Dec | Christmas / year-end | closures, year in review | festivals |
| Ad hoc | New Act / amendment / policy | "what changed, who it affects, what to do" | law, employment, business |
| Ad hoc | Minimum wage / SST / levy change | updated thresholds + calculators | employment, taxation, tools |
| Ad hoc | By-elections, major rulings | neutral explainer (sensitivity-gated → ashton-tan review) | government |

### Per-event checklist
1. **2–4 weeks ahead:** author new or substantively refresh the canonical article(s); cite
   every changed figure to an official source (article standard applies).
2. Bump `dateModified` via the real edit (freshness is derived, never hand-set).
3. Add `campaigns/<event>/<lang>.json` for the date window (all relevant langs).
4. Ensure a strong hero image (real photo > branded card for Discover appeal).
5. Cross-link into the cluster (`related[]`, mirrored 13 langs) for discovery/PageRank.
6. After the window, review GSC → Discover for which pages/images surfaced; feed back.

## What NOT to do
- **No clickbait titles.** Discover demotes and can suppress a whole site for it. Keep our
  neutral, informative title standard.
- **No cosmetic `dateModified` bumps.** Refresh = real new substance. Hollow freshness is
  a quality-signal risk and violates the derived-freshness rule.
- **Don't chase Discover at the expense of the moat.** Our value is neutral, AI-citable,
  multilingual *understanding* of Malaysia. Timely content serves that; tabloid tactics don't.

## Measurement
GSC → Performance → **Discover** (24h/7d/28d). Watch: which **pages** surface, which
**images** (Discover Appearance), and CTR. Discover is spiky and Google-paced — judge over
weeks, not days. Zero is the normal starting state; a single feature can be thousands of
impressions overnight, then nothing.

## Related memory / docs
- `docs/plans/fb-event-campaign.md` — the campaign engine this plugs into.
- Growth strategy: moat = understand-Malaysia authority, not transaction.
- Distribution channels: FB queue + event campaigns already feed engagement.
