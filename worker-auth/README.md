# NegaraKu.md — Contributor auth Worker

"Sign in with GitHub" for the **Contributor View**. It recognises whether a
visitor is a member of the `negaraku-md` GitHub org and, if so, lets the site
reveal the Contributor View (a launchpad of public GitHub links). It does **not**
gate any content — recognition is personalisation, not a security boundary.

Endpoints (bound to `negaraku.md/api/auth/*`):

| Route | Purpose |
|---|---|
| `GET /api/auth/login` | Redirect to GitHub authorize (`scope=read:org`). Optional `?return=/path`. |
| `GET /api/auth/callback` | Exchange the code, check org membership, set a signed HttpOnly session cookie, redirect back. |
| `GET /api/auth/me` | `{ login, isContributor }` from the cookie (the site polls this). |
| `POST /api/auth/logout` (or GET) | Clear the session cookie. |

The GitHub token is used once (identity + membership) then discarded; the session
is only the signed cookie (`nk_session`, HttpOnly · Secure · SameSite=Lax · 8h).

## One-time setup

### 1. Register a GitHub OAuth App (owned by the `negaraku-md` org)
GitHub → Org `negaraku-md` → Settings → Developer settings → **OAuth Apps** → New.
- **Application name:** NegaraKu.md
- **Homepage URL:** `https://negaraku.md`
- **Authorization callback URL:** `https://negaraku.md/api/auth/callback`

Note the **Client ID**; generate a **Client secret**.

### 2. Approve the app for the org (important)
Org → Settings → **Third-party Access** → OAuth App policy. If access is
restricted, **approve** this app — otherwise the membership read silently fails
and everyone shows as a non-contributor.

### 3. Configure the Worker
- Put the **Client ID** in `wrangler.toml` → `[vars] GITHUB_CLIENT_ID`.
- Set the secrets:
  ```bash
  cd worker-auth
  npx wrangler secret put GITHUB_CLIENT_SECRET      # paste the OAuth App client secret
  npx wrangler secret put SESSION_SIGNING_KEY       # paste 32+ random bytes, e.g.:
  #   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```

### 4. Deploy
```bash
cd worker-auth
npx wrangler deploy
```
The route only activates once deployed (same lesson as the analytics Worker). DNS
for `negaraku.md` must be **proxied** (orange cloud) for the route to receive
traffic.

## Verify
```bash
curl -s https://negaraku.md/api/auth/me            # {"isContributor":false} when signed out
# then open https://negaraku.md/api/auth/login in a browser and sign in
```

Until the app + secrets are configured, `/api/auth/login` returns
`503 auth_not_configured` and `/api/auth/me` returns `{"isContributor":false}`, so
the site simply stays in Reader View for everyone — safe to deploy early.

## Notes
- Stateless: the OAuth `state` (CSRF) and the session are both signed with
  `SESSION_SIGNING_KEY`; there is no server-side store.
- `ORG` and `COOKIE_NAME` are overridable in `wrangler.toml`.
- Rotating `SESSION_SIGNING_KEY` invalidates all existing sessions (users re-auth).
