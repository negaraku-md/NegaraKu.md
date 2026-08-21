# NegaraKu.md — Operations & User Guide

A step-by-step runbook for operating and using NegaraKu.md. Three parts:
**Part 1** for the site owner/admin, **Part 2** for contributors, **Part 3** for
readers. Reference setup (secrets, integrations) is in Part 4.

- Live site: <https://negaraku.md>
- Repo: <https://github.com/negaraku-md/NegaraKu.md>
- GitHub org: `negaraku-md`

---

## Part 1 — Operating the site (owner / admin)

Everything deploys through the **Deploy to GitHub Pages** workflow. A normal push
to `main` always deploys the **live** site. Maintenance mode is a manual toggle on
that same workflow.

### 1.1 Turn Site Maintenance ON (take the site down)

1. Go to **GitHub → repo → Actions → “Deploy to GitHub Pages”**
   (<https://github.com/negaraku-md/NegaraKu.md/actions/workflows/deploy.yml>).
2. Click **“Run workflow”** (top-right of the runs list).
3. Leave **Use workflow from: Branch `main`**.
4. **Tick “Maintenance mode”.**
5. *(Optional)* fill **“expected back by”** with an ISO time, e.g. `2026-08-21T22:00`.
   Leave blank to show no time.
6. Click the green **“Run workflow”**.
7. Wait ~2–4 minutes. Every page then shows the maintenance screen (brand lockup,
   “We’ll be right back”, and the MS / EN / 中文 language switch).

> Verify: open <https://negaraku.md> in a private window — you should see the
> maintenance screen, not the site.

### 1.2 Turn Site Maintenance OFF (restore the live site)

Either way works:

- **Re-run the workflow with the toggle off:** Actions → Deploy → **Run workflow**,
  **leave “Maintenance mode” UNticked**, **Run workflow**. or
- **Just push any change to `main`** (or re-run a previous successful run). A normal
  push always deploys the live site — maintenance goes off automatically.

> A plain `git push` = the site comes back. That’s why pushing routine changes
> while in maintenance will end maintenance.

### 1.3 Show an “expected back by” time

When turning maintenance ON (step 1.1.5), put an ISO datetime in the field, e.g.
`2026-08-21T22:00`. The maintenance page then shows “expected back by” with that
time, formatted for each language. Blank = no time shown.

### 1.4 Deploy a normal change

`git push origin main` from a branch merged to main, or push directly to `main`.
The Deploy workflow runs automatically (build → content health check → Pages).
There is nothing to click. (Commits marked `[skip deploy]`, like the analytics
snapshot, do not trigger a build.)

### 1.5 Watch a deploy

Actions → Deploy → open the latest run. Green tick = live in ~1–2 min after it
finishes. If the build step fails, the site is **not** updated (safe) — read the
failed step’s log. Rapid pushes cancel in-progress runs (concurrency); wait for the
**final** run to land before judging what’s live.

---

## Part 2 — Contributor operations

An **approved contributor** = a member of the `negaraku-md` GitHub org.

### 2.1 Sign in as a contributor (once per browser/device)

The site can’t see your GitHub login automatically — you authorize it once.

1. Open the site menu → **Contribute → “Contributor sign-in”**.
2. Authorize the **NegaraKu.md** app on GitHub (it only reads org membership).
3. You’re returned to the site, now recognized — the **Contributor View** switch
   appears, and the “become a contributor” prompts disappear.

> This is per-browser: your phone and laptop each sign in once.

### 2.2 Switch between Reader and Contributor View

- **Desktop:** use the switch in the top bar (labeled).
- **Mobile:** tap the **⇄** switch in the top bar — it fills gold and opens the
  menu showing your Contributor nav (Lifecycle · About).
- Reader View = the normal site. Contributor View = your launchpad into the review
  queue, drafts, worklist, dashboard, and deploy.

### 2.3 Fix or improve an article

1. Open the article → **“Edit on GitHub”** (in the article’s side box).
2. Edit the Markdown — every checkable claim should carry its source.
3. Open a **pull request**. It’s reviewed in the open before merging; on approval it
   merges and the site redeploys.

### 2.4 Add a new article

1. Fork the repo and add `knowledge/<category>/<slug>.md`.
2. Fill the frontmatter (title, category, sources) and write in Markdown.
3. Open a PR. The article starts as a **draft** until reviewed and published — only
   published articles appear on the public site. Sensitive topics get human sign-off.

Full walkthrough: <https://negaraku.md/contributor-guide>

---

## Part 3 — Reader / visitor actions

### 3.1 Join as a contributor

1. Read **“How to contribute”** on any article footer or on
   <https://negaraku.md/contribute>.
2. To get the Contributor View, you need to be a member of the `negaraku-md` org —
   request access (open an issue or contact the maintainers), then sign in (2.1).
3. You don’t need any of this to **read, search, share, or cite** — that’s all open.

### 3.2 Star us on GitHub

1. Open the repo: <https://github.com/negaraku-md/NegaraKu.md> (the **★ Star** button
   on any article’s “Become a contributor” card takes you there).
2. Click the **Star** button (top-right of the repo page). You’ll need a GitHub
   account (free).

### 3.3 Share an article

On any article, use the **Share** button under the title:
- **Copy link** — the article URL.
- **Copy Markdown for AI** — copies the raw `.md` to paste into any AI tool.
- **WhatsApp / X** — share to social.
- **Share…** — the native share sheet (on mobile).

### 3.4 Read, cite, and use with AI

- **Search:** press `/` anywhere, or tap the search icon.
- **Cite:** every article lists its **Sources** at the foot — follow them to verify.
- **AI:** append `.md` to any article URL for the raw Markdown, or use Share → Copy
  Markdown. `llms.txt` (Site menu → “For AI”) indexes the corpus for machines.

New-visitor orientation: <https://negaraku.md/start>

---

## Part 4 — One-time setup & integrations (reference)

### 4.1 Contributor sign-in (GitHub OAuth) — the auth Worker

The Reader/Contributor recognition runs on a Cloudflare Worker at
`negaraku.md/api/auth/*`. Setup, the OAuth App, and the secrets
(`GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`, `SESSION_SIGNING_KEY`) are documented
in **`worker-auth/README.md`**. Deploy it with `cd worker-auth && npx wrangler deploy`.

### 4.2 Facebook auto-posting

Code and workflow exist (`.github/workflows/facebook.yml`,
`scripts/post-to-facebook.mjs`) but are dormant until two repo secrets are set:
`FB_PAGE_ID` and `FB_PAGE_ACCESS_TOKEN` (from a system-user token). See
**`docs/facebook-setup.md`**.

### 4.3 Visitor analytics

The **Visitors** count is fed by a separate Cloudflare Worker (`worker/`) writing to
Analytics Engine; a build step folds the numbers into the site. See
**`docs/ANALYTICS.md`**.

### 4.4 Local development

```bash
npm run dev        # sync + generated data + astro dev
npm run build      # full production build (sync + graph + og + astro + pagefind)
npm run health     # content-health scan (add --strict for CI)
```

See **`CLAUDE.md`** for architecture and conventions.

---

*Keep this guide current when the workflows or flows change.*
