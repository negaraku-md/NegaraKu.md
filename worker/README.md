# Visitors analytics — Cloudflare Worker

Counts every request to `negaraku.md`, sorts it into **Readers** (humans) /
**Search** (Googlebot…) / **AI** (ClaudeBot…) by User-Agent, and logs it to
**Analytics Engine**. The build step (`scripts/build-analytics.mjs`) later reads
those counts into `public/api/analytics.json`, which the article pages render as
the **Visitors** row. See `docs/ANALYTICS.md` for the data model.

```
worker/
  wrangler.toml     # name, AE binding, route, CF_ACCOUNT_ID var
  src/index.js      # classify UA → writeDataPoint → pass request to origin; routes /_a/e, /_a/q
  src/classify.js   # UA → readers|search|ai|skip, + path/page-view helpers
  src/device.js     # UA → coarse device/browser/os (pivot dimensions)
  src/referrer.js   # referrer/UTM → channel/source
  src/query.js      # /_a/q live analytics query (contributor-only, whitelisted AE SQL)
```

## Live query endpoint (`/_a/q`) — contributor-only

`POST /_a/q` runs an arbitrary **whitelisted** Analytics-Engine group-by in real
time, powering the "Live query" panel on `/analytics` (Stage 4). It is gated: the
Worker sub-requests `/api/auth/me` (the auth Worker) and only proceeds for an
approved contributor. Dimensions/bucket/measure come only from hard-coded
whitelists; filter values are escaped; day-range, dim count and row limit are
capped; results are edge-cached ~5 min. To enable it:

```bash
cd worker
npx wrangler deploy                      # ships /_a/q + the CF_ACCOUNT_ID var
npx wrangler secret put AE_API_TOKEN     # paste a token with Account Analytics:Read
```

`CF_ACCOUNT_ID` is a non-secret var in `wrangler.toml`; `AE_API_TOKEN` is a
Worker **secret** (never committed). Without the secret the endpoint returns 503
and the panel shows a friendly note. (The `/api/auth/me` gate relies on that
route being a separate, more-specific Worker on the zone — which it is.)

## One-time setup

1. **Install wrangler & log in**
   ```bash
   cd worker
   npx wrangler login          # opens a browser to authorise your Cloudflare account
   ```

2. **Deploy the Worker** (creates the `negaraku_analytics` Analytics Engine
   dataset on first write, and binds the route in `wrangler.toml`):
   ```bash
   npx wrangler deploy
   ```

3. **Proxy the DNS** so requests actually reach the Worker. In the Cloudflare
   dashboard → **DNS**, switch the `negaraku.md` A/AAAA records (and `www`) from
   **DNS only (grey)** to **Proxied (orange)**. Then **SSL/TLS → Overview** set
   the mode to **Full** (NOT Flexible — Flexible + GitHub Pages' "Enforce HTTPS"
   causes a redirect loop).
   > A DNS-only record bypasses Cloudflare, so the Worker never runs. Proxying
   > is what makes the route live. GitHub Pages keeps serving the origin.

4. **Give CI a read token for the build step.** Create a Cloudflare API token
   with **Account Analytics → Read**, then add repo secrets in
   **GitHub → Settings → Secrets and variables → Actions**:
   - `CF_ACCOUNT_ID` — your Cloudflare account id
   - `CF_API_TOKEN` — the read token
   And expose them to the build in `.github/workflows/deploy.yml` (the build
   step's `env:`). Optional: `CF_AE_DATASET` (defaults to `negaraku_analytics`),
   `ANALYTICS_WINDOW_DAYS` (defaults to 90).

## What happens after that

- Every deploy, `scripts/build-analytics.mjs` queries the last N days from
  Analytics Engine and writes `public/api/analytics.json`. With no token it
  no-ops and the site keeps showing **"not tracked yet"** — nothing breaks.
- **Counting starts the day the Worker goes live** — there is no backfill.
- Classification is only as good as the bot list in `src/classify.js`; add new
  crawler UAs there as they appear.

## Notes

- Analytics Engine's free tier samples at high volume; the build sums
  `_sample_interval` so the numbers estimate true totals.
- The Worker is fail-open: any error in logging is swallowed and the request is
  passed straight to the origin, so analytics can never take the site down.
