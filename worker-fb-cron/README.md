# negaraku-fb-cron — reliable Facebook-posting trigger

GitHub Actions scheduled crons are unreliable for our Malaysia engagement windows:
GitHub **drops** the 08:17 MYT tick and **delays** the 20:17 MYT tick 5–9 hours, so
backlog posts were landing at **1–5 am MYT** (dead of night) for every language, and
worst of all for the newest 1-post/day pages (`id`, `ar`, `hi`), which hit **0/7**
in-window.

Cloudflare cron triggers fire **on time**. This Worker fires a `repository_dispatch`
to `.github/workflows/facebook-backlog.yml` at the exact window times, passing which
window it is (`client_payload.window`). The workflow reads it as `FB_WINDOW` and posts
in that window regardless of GitHub's small execution delay.

```
CF cron (on time)  ──repository_dispatch(window)──▶  facebook-backlog.yml  ──FB_WINDOW──▶  post-backlog-to-facebook.mjs
 00:17 UTC = 08:17 MYT morning
 05:17 UTC = 13:17 MYT lunch
 12:17 UTC = 20:17 MYT evening
```

The GitHub `schedule:` cron in the workflow is **disabled** (commented out) so there's
no double-posting; the per-MYT-day target guard would catch it anyway, but one
reliable trigger is cleaner.

## One-time setup

1. **Create a GitHub fine-grained PAT** (this is the only secret):
   - github.com → Settings → Developer settings → **Fine-grained tokens** → Generate new token
   - **Resource owner:** `negaraku-md`
   - **Repository access:** Only select repositories → **NegaraKu.md**
   - **Permissions → Repository permissions → Contents: Read and write**
     (the "Create a repository dispatch event" REST API requires repo Contents write)
   - Expiration: set a reminder to rotate it
   - Copy the token (starts with `github_pat_…`)

2. **Store it as the Worker secret** (from this `worker-fb-cron/` directory):
   ```bash
   npx wrangler secret put GITHUB_DISPATCH_TOKEN
   # paste the github_pat_… value when prompted
   ```

3. **Deploy the Worker** (registers the 3 cron triggers):
   ```bash
   npx wrangler deploy
   ```

That's it — the three triggers now fire on time. Nothing to add to GitHub secrets.

## Verify

- Fire one immediately without waiting for a window:
  ```bash
  npx wrangler dev --test-scheduled
  # then: curl "http://localhost:8787/__scheduled?cron=17+5+*+*+*"
  ```
  …or just trigger the workflow by hand once and confirm it posts in-window.
- Watch the Worker log: `npx wrangler tail` → look for `{"msg":"fb-backlog dispatch","status":204,"ok":true}`.
- After a real window fires, the backlog run should appear under GitHub Actions as a
  **`repository_dispatch`** event (not `schedule`), and `analytics/posted.json` post
  times should land ~08:17 / 13:17 / 20:17 MYT.

## Rollback

Re-enable the `schedule:` block in `facebook-backlog.yml` (and optionally
`npx wrangler delete` this Worker). Posts will drift again, but won't stop.
