# Local development — test everything without deploying

> Goal: **never test in production.** Every feature, including login, can run on
> `http://localhost:4321`.

## TL;DR

| You want to test… | Run | Notes |
|---|---|---|
| Pages, views, i18n, settings, nav, welcome card, article anatomy | `npm run dev` | The everyday server. ~everything that's pure front-end. |
| **Login / auth / Contributor View gating (data-contributor, Sign out, the switch)** | `npm run dev:full` | Runs the site **+ the auth Worker**. One-time setup below. |
| Search (Pagefind) | `npm run build` then `npm run preview` | Pagefind indexes the **built** site; it doesn't exist under `astro dev`. |
| Analytics beacon (`/_a/e`) / Live Query (`/_a/q`) | `npm run dev:analytics` (optional) | Beacon works with no secret; Live Query shows a calm "local dev" message. |

`npm run dev` is unchanged — the Worker proxy only turns on when `LOCAL_WORKERS=1`
(which `npm run dev:full` sets for you).

---

## Testing login / auth locally (one-time setup)

Login normally only works on the live domain because the auth Worker + the GitHub
OAuth callback are tied to `negaraku.md`. This makes it work on `localhost` too.

### 1. Create a **dev** GitHub OAuth App (separate from production)
<https://github.com/settings/developers> → **New OAuth App**
- **Homepage URL:** `http://localhost:4321`
- **Authorization callback URL:** `http://localhost:4321/api/auth/callback`

Copy the **Client ID**, then **Generate a new client secret** and copy that.
(Use your own GitHub account. Sign-in still gates on `negaraku-md` org membership,
so only members get Contributor View — same as prod.)

### 2. Create `worker-auth/.dev.vars`
```bash
cp worker-auth/.dev.vars.example worker-auth/.dev.vars
# then edit it: paste your dev Client ID + Secret, and generate a signing key:
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
`.dev.vars` is gitignored — your secrets never get committed, and never pass
through anyone else.

### 3. Run the full stack
```bash
npm install        # once, to get `concurrently`
npm run dev:full
```
This starts the site (`localhost:4321`) **and** the auth Worker (`localhost:8788`),
with the dev proxy routing `/api/auth/*` to the Worker on the **same origin** (so
the session cookie round-trips).

### 4. Test
Open <http://localhost:4321>, open the **Contribute** menu → **Contributor sign-in**,
authorize with GitHub. You should land back signed in, with the **Reader /
Contributor** switch appearing and **Sign out** replacing sign-in. You can now
exercise the whole auth/view system locally: the switch, per-view URL memory,
`data-contributor` gating, the contributor workspace, and sign-out.

> Prefer two terminals? Run `npm run dev` in one and `npm run dev:auth` in another
> — just set `LOCAL_WORKERS=1` for the `astro dev` one so the proxy turns on.

---

## Testing search (Pagefind)

Pagefind builds its index from the compiled site, so it isn't present during
`astro dev`. To test search:
```bash
npm run build        # ~10 min — builds all pages + the Pagefind index
npm run preview      # serves the built site (with working search)
```

---

## Testing the analytics Worker (optional)

```bash
npm run dev:analytics     # auth Worker not required for the beacon
```
- **`/_a/e`** (pageview + engagement beacon) returns `204` and logs locally — no
  secret needed (`wrangler dev` stubs Analytics Engine).
- **`/_a/q`** (Live Query, contributor-only) needs the real Analytics Engine SQL
  API, so it isn't fully testable locally — the UI already shows a calm "local
  dev" message instead of an error.

---

## What genuinely can't run locally (and why that's fine)

- **Cloudflare edge caching** — it's edge behavior (the Worker's `caches.default`
  on real Cloudflare colos). The Worker's cache *logic* runs under `wrangler dev`,
  but true edge-hit timing only happens on the live edge. Nothing to iterate on
  locally; verify on a deploy via `curl -s -D - -o /dev/null <url>` (GET, not HEAD).
- **Live production analytics figures** — the dashboard/analytics pages read
  `public/api/*.json`, which is generated from real Cloudflare data at build time.
  Locally you see the last committed snapshot, which is enough to test the UI.

---

## Ports

| Service | Port | Started by |
|---|---|---|
| Astro site | 4321 | `astro dev` / `npm run dev` / `npm run dev:full` |
| Auth Worker | 8788 | `npm run dev:auth` / `npm run dev:full` |
| Analytics Worker | 8787 | `npm run dev:analytics` |

The dev proxy (`astro.config.mjs`, active only with `LOCAL_WORKERS=1`) maps
`/api/auth/*` → 8788 and `/_a/*` → 8787.
