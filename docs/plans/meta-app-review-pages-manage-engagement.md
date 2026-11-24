# Fixing the Facebook first-comment link (#200) — token re-mint first, App Review as fallback

**Goal:** post the article link in the **first comment** (clean caption → max reach, the
China Press pattern) instead of in the caption. The backlog poster already supports
this (`FB_LINK_MODE=comment`); it is blocked only by a Graph error when it creates the
comment:

```
(#200) You do not have sufficient permissions to perform this action
```

This happens on the `POST /{story-id}/comments` call in
`scripts/post-backlog-to-facebook.mjs` (`postComment`). The photo post itself
(`POST /{page-id}/photos`) succeeds — so `pages_manage_posts` is fine; only the
**comment-create** permission, `pages_manage_engagement`, is missing from the token.

## Our setup (why Path A may be enough)

- Graph API **v21.0**.
- **One Business** owns the app **and** all 13 language Pages.
- All 13 Pages are assigned to the **"NegaraKu Poster" system user** with **Full** access.
- The secret `FB_PAGE_ACCESS_TOKEN` is that **system-user token**; the poster mints a
  per-Page token from it (`pageTokenFor`) and posts/comments with the Page token.

Advanced Access (which needs App Review) is required to act on Pages/users **outside**
your app's own roles — i.e. other people's Pages, at scale. For Pages your **own
Business owns and has assigned to the system user**, **Standard Access** to a permission
generally works. `pages_manage_posts` already works this way for us. So the most likely
cause of #200 is simply that **`pages_manage_engagement` was never ticked when the
system-user token was generated** — not that App Review is required.

**→ Try Path A first. It is ~10 minutes and needs no review.** Only if it still returns
#200 after the token carries the scope do we fall back to Path B (App Review).

---

## Path A — re-mint the system-user token with `pages_manage_engagement` (try first)

### A1. Check what scopes the current token actually has

In **Graph API Explorer** (https://developers.facebook.com/tools/explorer/), paste the
current `FB_PAGE_ACCESS_TOKEN` value into the Access Token box and run:

```
GET /debug_token?input_token={the-system-user-token}
```

Look at `data.scopes` (and `data.granular_scopes`). If **`pages_manage_engagement` is
absent**, that alone explains #200 — go straight to A2.

> Do this in the Explorer / Business Settings UI. Don't paste the token into chat or a
> file — it's a long-lived Page-management credential.

### A2. Generate a new system-user token WITH the scope

Business Settings → **Users → System users** → **NegaraKu Poster** → **Generate new
token** → select the app, then tick **all** of:

- `pages_show_list`
- `pages_read_engagement`
- `pages_manage_posts`   ← already in use (photo posts)
- **`pages_manage_engagement`**   ← the missing one (comment create)
- `business_management`

Copy the new token (never expires for a system user).

### A3. Update the GitHub secret

```powershell
gh secret set FB_PAGE_ACCESS_TOKEN --repo negaraku-md/NegaraKu.md
```

Paste the new token when prompted (the value is read from stdin and not echoed).

### A4. Re-test the comment on ONE post, one Page

Re-enable the backlog workflow and run a single live dispatch in **comment** mode,
limited to one language, one post — exactly the controlled test we ran before:

```powershell
gh workflow enable facebook-backlog.yml
```

```powershell
gh workflow run facebook-backlog.yml -f only_langs="en" -f link_mode="comment" -f files="knowledge/food/nasi-lemak"
```

Watch it, then check the English Page: the post should have a **clean caption** and the
**article link as the first comment**.

- **Comment present → DONE.** No App Review needed. Proceed to "Go-live" below.
- **Still `(#200)` on the comment → Path B** (the scope is granted but gated at Advanced
  Access for our call; App Review required).

Re-disable the workflow again after the test so nothing drips while we decide:

```powershell
gh workflow disable facebook-backlog.yml
```

---

## Path B — App Review for `pages_manage_engagement` (fallback only)

Only if Path A still returns #200.

### B0. Prerequisites

- **Business Verification** complete (Business Settings → Security Center). Advanced
  Access to Page-management permissions requires a verified business.
- A valid **Privacy Policy URL** and **App Icon** set on the app.
- App **not** in Development mode for the reviewed permission (it's submitted while live).

### B1. Request the permission

App Dashboard → **App Review → Permissions and Features** → find
**`pages_manage_engagement`** → **Request advanced access** → **Request**. (We do **not**
need `pages_manage_posts` reviewed — it already works at the access level we use.)

### B2. Use-case description (paste-ready)

> **How your app uses `pages_manage_engagement`:**
>
> NegaraKu.md is an open, multilingual knowledge base about Malaysia. We operate 13
> Facebook Pages that we own and manage — one per language (Malay, English, Chinese,
> Tamil, Japanese, Korean, Thai, Vietnamese, Indonesian, Arabic, Hindi, Spanish,
> French). A scheduled server-side job publishes our own educational articles to these
> Pages as native image posts.
>
> To keep each post's caption clean (which maximizes organic reach), we place the
> article's link in the **first comment** on the post, rather than in the caption body.
> `pages_manage_engagement` is used **solely** to create that single first comment, via
> the Page access token, on posts our own app has just published to Pages we own. We do
> not comment on other Pages, do not reply to or moderate user comments, and do not use
> the permission for any engagement beyond posting our own first comment.
>
> The flow is fully server-to-server (a scheduled GitHub Actions job using a Business
> system-user token); there is no end-user-facing surface. All Pages are owned by our
> Business and assigned to our system user.

### B3. Reviewer reproduction / notes (paste into "Instructions for reviewer")

> This is a server-to-server integration with no consumer login UI. The integration
> uses a Business **system-user** token with the Pages assigned to it. For verification:
>
> 1. The attached screencast shows the job running: it posts an image to one of our
>    Pages via `POST /{page-id}/photos`, then creates the first comment via
>    `POST /{post-id}/comments` with the article URL.
> 2. The resulting live post (clean caption + link in first comment) is visible at:
>    `https://facebook.com/{our-english-page}` — see the pinned example post.
> 3. Because the Pages and the app are owned by the same Business and there is no user
>    login, the permission acts only on our own assets.

### B4. Screencast to record (required)

Record a single screen capture (≤ 5 min, narrated or captioned) showing, end to end:

1. The app in the App Dashboard (app name + ID visible).
2. A terminal running the poster (or the GitHub Actions run) that:
   - calls `POST /{page-id}/photos` → returns a `post_id`,
   - calls `POST /{post-id}/comments` with the article link → returns a comment id.
3. The Facebook Page open in a browser showing the resulting post with the **link in
   the first comment**.

Upload it as the permission's screencast. Submit.

### B5. Expected timeline

App Review for a single Page permission is typically a few business days to ~2 weeks.
Posting stays **paused** (see below) until it clears.

---

## Everything stays paused until this is resolved

Already done (2026-11-24):

- `facebook-backlog.yml` → **disabled** (the Cloudflare cron fires into a disabled
  workflow; no-op). Also gated by repo var `FB_GO_LIVE` (unset).
- `fb-campaign-budget-2027.yml` → **disabled**.
- `facebook.yml` (auto-post on publish) → manual-only (push trigger commented out).
- All 1,951 existing posts deleted (clean slate); manifest emptied; `fb-state` branch
  deleted.

## Go-live (after Path A or B succeeds)

1. `gh workflow enable facebook-backlog.yml`
2. `gh variable set FB_GO_LIVE --body true --repo negaraku-md/NegaraKu.md`
3. Confirm env in `facebook-backlog.yml`: `FB_LINK_MODE` defaults to `comment`,
   `FB_BACKLOG_PER_DAY='3'`.
4. The Cloudflare `worker-fb-cron` already fires 3×/day (08:17 / 13:17 / 20:17 MYT); the
   now-enabled + `FB_GO_LIVE`-true job will post 3/day/Page, link in first comment,
   draining the (reset) ranked queue from the top.
5. Watch the first day's runs; verify a live post has the link in its first comment.

To pause again at any time: `gh workflow disable facebook-backlog.yml` (instant, no deploy).
