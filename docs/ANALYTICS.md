# Visitor analytics — data model

The **Visitors** row on each article card summarises three audiences into one
line, while the underlying data is tracked in per-agent detail.

## Buckets (what the card shows)

| Bucket    | Who it counts                                   | Detected by |
|-----------|-------------------------------------------------|-------------|
| **Readers** | Humans                                        | page-view beacon (no known-bot UA) |
| **Search**  | Search-engine crawlers — Googlebot, Bingbot, DuckDuckBot, YandexBot … | User-Agent |
| **AI**      | AI crawlers — ClaudeBot (Anthropic), GPTBot (OpenAI), PerplexityBot, Google-Extended, CCBot … | User-Agent |

The card shows the **total per bucket**; the **per-bot breakdown** is captured
too and surfaced as a hover tooltip (and can drive a fuller article-page view).

## File contract

`public/api/analytics.json`, keyed by `"category/slug"`. Each `search`/`ai`
bucket is either a plain number or `{ total, byBot }`:

```json
{
  "company-secretary/audit-committee-public-companies": {
    "readers": 1240,
    "search": { "total": 830, "byBot": { "Googlebot": 700, "Bingbot": 120, "DuckDuckBot": 10 } },
    "ai":     { "total": 47,  "byBot": { "ClaudeBot": 20, "GPTBot": 15, "PerplexityBot": 12 } }
  }
}
```

Absent file → the row renders `—` and *not tracked yet*. **No numbers are ever
invented.**

## How the data gets collected (not yet wired)

The site is static (GitHub Pages), which cannot see User-Agents, so classifying
humans vs search vs AI needs a request-logging layer in front:

1. **Put the site behind a CDN/edge** (e.g. Cloudflare). A Worker inspects each
   request's `User-Agent`, classifies it into `readers` / `search` / `ai` by a
   bot list, and increments a counter (KV / Analytics Engine / D1) per path.
2. **A build step** (`scripts/build-analytics.mjs`, to be added) pulls those
   counts into `public/api/analytics.json` at predev/prebuild.

Two honest limits: counting only starts the day the edge layer is connected
(no backfill), and AI/search classification is only as good as the maintained
bot list. Human counts can alternatively come from a privacy-friendly analytics
provider (GoatCounter, Plausible) via their stats API.
