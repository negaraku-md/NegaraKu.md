# Cloudflare Worker deploy + secrets runbook (tasks 3.1 / 3.2)

_Generated 2026-10-26. These two tasks are **blocked on credentials only I (the repo owner) hold** —
an AI assistant cannot run `wrangler login`/`wrangler deploy` as you, nor create secrets it doesn't
possess. Everything below is verified deploy-ready; run the commands yourself to activate._

## Status (verified this session)

All three Workers **build clean** via `wrangler deploy --dry-run` (no auth needed) — bindings resolve,
no config/syntax errors:

| Worker | Dir | Route / trigger | Dry-run |
|---|---|---|---|
| `negaraku-analytics` | `worker/` | `negaraku.md/*` (edge logger + `/_a/q` live query) | ✅ exit 0, 15.89 KiB |
| `negaraku-auth` | `worker-auth/` | `negaraku.md/api/auth/*` (GitHub OAuth, org gate) | ✅ exit 0 |
| `negaraku-fb-cron` | `worker-fb-cron/` | cron 00:17 / 05:17 / 12:17 UTC → repo dispatch | ✅ exit 0 |

The build-time data pulls confirm the same gap from the other side — in `npm run dev` predev:
`[analytics] no CF creds — serving the committed all-time snapshot` and
`[cf-traffic] no CF_API_TOKEN / CF_ZONE_ID — keeping local seed`.

## 3.1 — Deploy the Workers

One-time auth, then deploy each from its own dir:

```bash
cd D:/Workspace/negaraku.md
npx wrangler login            # opens browser; authorize as the negaraku.md CF account owner
cd worker        && npx wrangler deploy
cd ../worker-auth    && npx wrangler deploy
cd ../worker-fb-cron && npx wrangler deploy
```

> Routes require the zone's DNS records to be **PROXIED (orange cloud)** — a DNS-only record never
> reaches the Worker. `negaraku-auth`'s `/api/auth/*` route is more specific than `negaraku-analytics`'s
> `negaraku.md/*`, so Cloudflare routes auth there first (intended).

## 3.2 — Set the secrets

### Worker secrets (`wrangler secret put`, run in each worker dir)

| Worker | Secret | What it is | CF token scope / value |
|---|---|---|---|
| `worker/` | `AE_API_TOKEN` | Analytics Engine SQL API token for the `/_a/q` live-query endpoint | CF API token, **Account › Account Analytics: Read** |
| `worker-auth/` | `GITHUB_CLIENT_SECRET` | OAuth App client secret (app `Ov23liDuIL9QvWJ5uQmJ`) | from the GitHub OAuth App settings |
| `worker-auth/` | `SESSION_SIGNING_KEY` | random 32+ bytes; signs the session cookie + OAuth state | `openssl rand -base64 48` |
| `worker-fb-cron/` | `GITHUB_DISPATCH_TOKEN` | fine-grained PAT, repo `negaraku-md/NegaraKu.md`, **Contents: Read and write** | github.com → fine-grained PAT |

```bash
cd worker          && npx wrangler secret put AE_API_TOKEN
cd ../worker-auth      && npx wrangler secret put GITHUB_CLIENT_SECRET && npx wrangler secret put SESSION_SIGNING_KEY
cd ../worker-fb-cron   && npx wrangler secret put GITHUB_DISPATCH_TOKEN
```

(`worker-auth` also reads `PUBLIC_BASE_URL` — set it as a `[vars]` entry in `worker-auth/wrangler.toml`
to `https://negaraku.md` if not already resolved at runtime.)

### GitHub Actions repo secrets (Settings → Secrets and variables → Actions)

These feed the build-time data-pull scripts (not the Workers); without them the build serves the
committed seed snapshots, which is why the dashboard/traffic panels don't refresh:

| Secret | Used by | Scope |
|---|---|---|
| `CF_API_TOKEN` | `scripts/pull-cf-traffic.mjs`, `scripts/build-analytics.mjs` | CF token, **Account Analytics: Read** (+ **Zone Analytics: Read** for GraphQL traffic) |
| `CF_ZONE_ID` | `scripts/pull-cf-traffic.mjs` (CF GraphQL zone analytics) | the negaraku.md zone id (not secret, but stored as a secret for convenience) |
| `GSC_SA_KEY` | `scripts/pull-search-console.mjs` | Google service-account JSON key with Search Console API access to `sc-domain:negaraku.md` |

> Account id `CF_ACCOUNT_ID = 7137401369008b9b25b788ff1dbc14a2` is already a committed `[vars]` entry
> in `worker/wrangler.toml` — not secret.

## After deploying
- `wrangler tail negaraku-analytics` (and the others) to confirm live traffic/dispatch.
- The analytics/traffic dashboard panels light up on the **next CI build** once the Actions secrets exist
  (an empty commit won't trigger a data refresh — push a real change or re-run the workflow).
