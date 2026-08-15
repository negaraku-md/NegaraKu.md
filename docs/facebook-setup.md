# Facebook auto-posting setup

New articles are announced on the Page **[facebook.com/negaraku.md](https://www.facebook.com/negaraku.md)**
two ways:

1. **Automatic** — the [`facebook.yml`](../.github/workflows/facebook.yml) GitHub Action runs on
   every push to `main` that adds files under `knowledge/**`, and posts each newly added article
   (Bahasa Malaysia source only, so each article posts once) via the Graph API.
2. **Manual share** — every article page has a "Share to Facebook" button.

## One-time configuration

The workflow needs two GitHub **Actions secrets** — `FB_PAGE_ID` and
`FB_PAGE_ACCESS_TOKEN`. If they are absent the workflow still runs but the post
step no-ops (it logs what it would have posted), so nothing breaks before setup.

### Recommended: a System User token (permanent, no "Facebook Login" product)

Server-to-server posting to a Page you own does **not** need the *Facebook Login*
product (trying to mint a token through the Graph API Explorer without it fails
with "Facebook Login unavailable for this app"). A **Meta Business System User**
token is the right tool: it is scoped to the Page, and it **does not expire**.

1. **[business.facebook.com](https://business.facebook.com)** → **Business settings** (gear).
2. **Accounts → Pages**: confirm **NegaraKu.md** is listed (add it if not).
3. **Accounts → Apps**: make sure a Meta app you own is added here. It is only the
   app the token is *minted under* — it needs **no products, no Facebook Login**.
   Create a bare "Business"-type app at [developers.facebook.com](https://developers.facebook.com/apps) if you have none.
4. **Users → System users → Add** → name e.g. `negaraku-ci`, role **Admin** → create.
5. Select the system user → **Assign assets → Pages** → pick **NegaraKu.md** →
   enable **Manage Page** (full control) → save.
6. Still on the system user → **Generate new token** → choose the app from step 3 →
   tick **`pages_manage_posts`**, **`pages_read_engagement`**, **`pages_show_list`**
   → generate. **Copy it now** (shown once). This token does not expire.
7. **Page ID**: Business settings → **Pages → NegaraKu.md** shows the numeric ID
   (or Page → Professional dashboard → About; or Graph API `/me/accounts`).
8. GitHub → repo **Settings → Secrets and variables → Actions → New repository secret**:
   - `FB_PAGE_ACCESS_TOKEN` = the token from step 6
   - `FB_PAGE_ID` = the numeric Page ID from step 7

### Alternative: Graph API Explorer (60-day token, needs Facebook Login)

If you prefer the Explorer: add the **Facebook Login** product to an app, generate
a **User** token with the three permissions above, exchange it for a long-lived
(60-day) user token (`/oauth/access_token?grant_type=fb_exchange_token`), then
`GET /me/accounts` and copy the target Page's `access_token` + `id`. The Page
token inherits the user token's lifetime, so it must be **refreshed periodically** —
which is why the System User route above is preferred for unattended CI.

### Verify

After adding the secrets, **Actions → "Post new articles to Facebook" → Run
workflow**, set the `files` input to one path (e.g.
`knowledge/history/kemerdekaan-1957.md`), and confirm the post appears on the Page.

## Test locally

```bash
# Dry run — prints the message + link without calling the API:
FB_DRY_RUN=1 npm run post:fb -- knowledge/history/kemerdekaan-1957.md

# Real post (needs the two env vars):
FB_PAGE_ID=... FB_PAGE_ACCESS_TOKEN=... npm run post:fb -- knowledge/history/kemerdekaan-1957.md
```

## What gets posted

`message`: title + summary + `#Malaysia #NegaraKu #<category>`
`link`: `https://negaraku.md/<category>/<slug>` — Facebook scrapes its Open Graph tags (title,
description, and the branded `/og/default.png` image) to build the card.
