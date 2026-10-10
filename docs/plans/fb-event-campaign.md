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
- `.github/workflows/fb-campaign.yml` — the GENERIC manual runner: workflow_dispatch
  (campaign id, only, lang, dry_run) for ad-hoc posting / dry-runs of any campaign.
- **Each live campaign gets its OWN scheduled workflow** —
  `.github/workflows/fb-campaign-<event>.yml` — with a cron **scoped to the campaign's
  own date window**, so it fires only on those days and then goes dormant by itself
  (no manual disable). It commits `campaigns/<event>/.sent.json` back each run for
  cross-run idempotency; `deploy.yml` ignores `campaigns/**`, so that commit never
  rebuilds the site. Gate posts at `00:00Z` (start of the MYT day) and run the cron at
  `:37` past an early UTC hour — off GitHub's congested top-of-hour and clear of the
  backlog drip's `:17` ticks, and safely after the gate.

## Budget 2027 campaign (first use)
The debut explainer link post fired on all 9 Pages via `facebook.yml` on 2026-10-10
(manual dispatch — the per-publish push trigger is paused). The follow-up series is
`campaigns/budget-2027/` — 4 posts × 9 languages, one gated per day:
1. `families` (link, 11 Oct) — tax cut, RM12k relief, STR/SARA, elderly-care service tax 6%.
2. `workers` (link, 12 Oct) — RM2,000 min wage, RM2,500 floor, EPF auto-18, gig EPF matching.
3. `smes` (link, 13 Oct) — SME tax cut, capital allowances, sales-tax reclaim, stamp-duty break.
4. `announced-vs-law` (link, 14 Oct) — integrity reminder (announced, pending gazette) + freshness.

Driven by `.github/workflows/fb-campaign-budget-2027.yml` — cron `37 0 11-14 10 *`
(08:37 MYT on 11–14 Oct). Posts gated at `00:00Z` of their day; `.sent.json` committed
back prevents double-posting; the cron goes dormant after 14 Oct. Manual dry-run /
single-post reruns via that workflow's `workflow_dispatch` (or the generic
`fb-campaign.yml`).

## v2 enhancements
- Image "key-number" cards (reuse `build-fb-covers.mjs`) for text/photo posts.
- Daily cron drip for `notBefore`-gated posts.
- Carousel + poll post types.
