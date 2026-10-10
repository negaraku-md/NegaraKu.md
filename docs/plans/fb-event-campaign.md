# Facebook event-campaign system

Status: building (2026-10-10). Held local per the no-auto-push rule.

## Problem
The existing FB engine (`post-to-facebook.mjs`) fires **one link post per article on
publish** — perfect for evergreen articles, wrong for **live events**. For an event
(Budget, election, major ruling) the article necessarily publishes *hours after* the
attention peak, so a single debut post (a) misses the live window and (b) treats a
multi-day story as one shot. (Budget 2027: we missed the live tabling window.)

## Solution — a phased, multi-format campaign per event
A reusable campaign that rides the whole attention curve:

| Phase | When | Post type | Purpose |
|---|---|---|---|
| 1. Teaser | T−1d → T−1h | text + graphic | anticipation, follows |
| 2. Live reactions | during (T→T+2h) | rapid short text | ride the live peak |
| 3. Explainer | T + hours | link post (sourced article) | authority + traffic |
| 4. Follow-up series | T+1 → T+5d | card/link, one angle each | sustain + unbundle |
| 5. Re-surface | at Bill/gazette/YA | update link post | repeat reach + freshness |

**The "missed live" fix:** events with a known date (the budget is annual) get a
**pre-event kit** — teaser + measure-cards + the explainer skeleton drafted *ahead*,
ready to fire the moment each measure is announced.

## Build
- `scripts/post-campaign-to-facebook.mjs` — generic, idempotent, dry-run-capable
  campaign poster. Reuses `lib/facebook.mjs` (PAGES, pageTokenFor, gfetch, withUtm).
- `campaigns/<event>/<lang>.json` — one self-contained file per language (parallel-safe
  for translator agents): `{ lang, posts:[{id,type,linkPath?,message,notBefore?}] }`.
  Types: `link`, `text` (image/`photo` = v2). Idempotency via `campaigns/<event>/.sent.json`
  (key `lang|postId`); `notBefore` gates scheduling; `--only <postId>` / `--lang` / dry-run.
- `.github/workflows/fb-campaign.yml` — workflow_dispatch (campaign id, only, lang, dry_run)
  running the script with `FB_PAGE_ACCESS_TOKEN`. (Posts to all 9 Pages.)

## Budget 2027 campaign (first use)
`campaigns/budget-2027/` — 5 posts × 9 languages:
1. `explainer` (link) — the main announcement (recovers the missed debut).
2. `families` (link) — tax cut, RM12k relief, STR/SARA, elderly-care service tax 6%.
3. `workers` (link) — RM2,000 min wage, RM2,500 floor, EPF auto-18, gig EPF matching.
4. `smes` (link) — SME tax cut, capital allowances, sales-tax reclaim, stamp-duty break.
5. `announced-vs-law` (link) — integrity reminder (announced, pending gazette) + freshness.

Run (after the article deploy is LIVE): dispatch `fb-campaign.yml` with `budget-2027`
(dry-run first). Stage the series over days with `--only`, or let `notBefore` gate them.

## v2 enhancements
- Image "key-number" cards (reuse `build-fb-covers.mjs`) for text/photo posts.
- Daily cron drip for `notBefore`-gated posts.
- Carousel + poll post types.
