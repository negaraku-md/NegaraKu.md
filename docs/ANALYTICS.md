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

## How the data gets collected (built — deploy to activate)

The site is static (GitHub Pages), which cannot see User-Agents, so classifying
humans vs search vs AI needs a request-logging layer in front. That layer is
now in the repo:

1. **Edge Worker** — `worker/` is a Cloudflare Worker on the `negaraku.md/*`
   route. It reads each request's `User-Agent`, classifies it into
   `readers` / `search` / `ai` (`worker/src/classify.js`), writes one
   **Analytics Engine** data point, and passes the request through to GitHub
   Pages unchanged.
2. **Build step** — `scripts/build-analytics.mjs` (wired into `predev`/`prebuild`)
   queries the last `ANALYTICS_WINDOW_DAYS` (default 90) from Analytics Engine
   via its SQL API and writes `public/api/analytics.json`.

**To go live** (one-time), follow `worker/README.md`: `wrangler deploy`, switch
the `negaraku.md` DNS records to **Proxied** (orange) with SSL mode **Full**, and
add repo secrets `CF_ACCOUNT_ID` + `CF_API_TOKEN` (token scope *Account
Analytics: Read*) exposed to the build. Until then the build step no-ops and the
site keeps showing **"not tracked yet"** — nothing breaks.

Two honest limits: counting only starts the day the Worker is deployed (no
backfill), and AI/search classification is only as good as the bot list in
`worker/src/classify.js`. Human counts can alternatively come from a
privacy-friendly analytics provider (GoatCounter, Plausible) via their stats API.
