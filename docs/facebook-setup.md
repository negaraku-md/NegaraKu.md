# Facebook auto-posting setup

New articles are announced on the Page **[facebook.com/negaraku.md](https://www.facebook.com/negaraku.md)**
two ways:

1. **Automatic** — the [`facebook.yml`](../.github/workflows/facebook.yml) GitHub Action runs on
   every push to `main` that adds files under `knowledge/**`, and posts each newly added article
   (Bahasa Malaysia source only, so each article posts once) via the Graph API.
2. **Manual share** — every article page has a "Share to Facebook" button.

## One-time configuration

1. Create/So you have a Facebook **Page** for negaraku.md and a **Meta app** with the
   `pages_manage_posts` and `pages_read_engagement` permissions.
2. Generate a **long-lived Page access token** (60-day tokens can be exchanged; for a permanent
   token, use a system user or refresh periodically).
3. Find the **Page ID** (Page → About → Page transparency, or via the Graph API `/me/accounts`).
4. In the GitHub repo, add these **Actions secrets** (Settings → Secrets and variables → Actions):
   - `FB_PAGE_ID`
   - `FB_PAGE_ACCESS_TOKEN`

If the secrets are absent the workflow still runs but the post step no-ops (it logs what it would
have posted), so nothing breaks before you configure it.

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
