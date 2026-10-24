# Article maintenance lifecycle — audit + completion plan (2026-10-24)

**Context.** The corpus is current. You want a maintenance *lifecycle* for articles.
Good news: most of it already exists — the schema in `src/content.config.ts` models the
**full loop**, and several stages are tooled. This doc audits what's real, maps your 7
steps, and proposes the specific builds that close the gaps.

Legend: ✅ tooled & working · ⚠️ partial (schema/UI exists, operational layer thin) · ❌ gap.

## The lifecycle as it stands (schema)

```
propose → draft → in-review → reviewed → published ──┐
                    ↑                                 │ reviewDue passed
                    │                          needs-update  OR reader-flagged
                    └── in-update ← ──────────────────┘
      request-redraft → in-redraft → in-review → published (revision++)
      request-archive → in-archive → archived        (terminal; retired)
```
`needs-update` is **derived, not stored** (`effectiveStatus()`): a published article past
its `reviewDue` is shown as needs-update automatically. Only `archived` is terminal.

## Your 7 steps, mapped to reality

| # | Step | State | What exists | Gap to close |
|---|------|-------|-------------|--------------|
| 1 | **Propose new article** | ⚠️ | `article-request` feedback type (`src/lib/feedback.ts`), a GitHub issue template, worklist `requestedBy`/`requestReason` fields | No **dedup check** vs the 1,084-topic corpus (propose a duplicate → wasted work); no one-command **scaffold-from-accepted-request** → draft file; proposals live only as GitHub issues, no triage view |
| 2 | **Generate / write draft** | ✅/⚠️ | The mandatory article-standard pipeline (recon→brief→draft→AEO→claim-map→scores); `status: draft`; `translate.mjs` for the ×13 fan-out | Inherently AI+human by design (correct). Missing only the **scaffolder** that seeds a correct draft skeleton (frontmatter + section stubs + tier/sensitivity defaults) from a proposal |
| 3 | **Review article** | ⚠️ | States `draft→in-review→reviewed`; **four-eyes** health rule (reviewer ≠ author/assignee); `verificationNeeded` surfaced on-page; worklist "awaiting approval" queue; sensitivity hard-gate | No **transition command** (moves are hand-edited frontmatter); no captured **review checklist/sign-off** beyond the `reviewer` string |
| 4 | **Approve & publish** | ✅ | `scripts/publish-reviewed.mjs` — hard-gated `reviewed→published`, masters+translations, idempotent, dry-run, optional allow-list | Solid. Only nit: `reviewDue` must already be on the reviewed file (see step 5 cadence) |
| 5 | **Review due for review** | ⚠️ | `reviewDue` populated on ~1,084 masters; `effectiveStatus()` derives **needs-update** at render → freshness badge on-page **and** the item appears in the worklist needs-update queue | **Entirely passive.** No reminder/notification, no scheduled digest, no auto-created issue/assignment; worklist is **dev/preview-only** so nobody is prompted. No **prioritization** (traffic × staleness). `reviewDue` **cadence policy** is implicit. The event-based `flag-needs-update.mjs` is **stale at 3 langs** (ms/en/zh only) |
| 6 | **Obsolete / archive** | ⚠️ | States `request-archive→in-archive→archived`; worklist archive-requested queue; archived+hidden **dropped from listings**; `supersedes` relation | **No archive script** — the 31 existing archives were hand-done; no **cascade to 13 translations**; **no successor-redirect automation** (an archived URL currently just leaves the listings; the page relies on a *manual* `astro.config` redirect or it 404s — bad for a once-indexed URL); no `supersededBy` field |

## 7 — what's missing (beyond your six)

1. **Re-translation trigger on update.** When a master is updated & republished (`revision++`),
   its 12 translations go stale and must be re-translated + re-stamped. Today that's manual and
   easy to forget — the stale-translation floor I just cleared was a symptom. The publish/update
   flow should **emit the re-translation worklist** and run `translate:stamp` as part of the step.
2. **Archived-URL policy.** Never 404 a once-indexed URL. Archive should auto-emit either a **301
   to the successor** (`supersededBy`) or keep the page with an **"archived/repealed" banner +
   `noindex`**. This is an SEO + trust decision to make explicit.
3. **Proactive review-due loop.** A **scheduled weekly job** (GitHub Action, like the FB/GSC ones)
   that opens/updates a single "Articles due for review" issue or dashboard tile — so the queue
   *finds the reviewer*, not the reverse.
4. **Prioritization by value.** Order the review-due queue by **GA4/GSC traffic × overdue age** so
   high-impact stale pages are refreshed first (the data is already archived in `analytics/`).
5. **`reviewDue` cadence policy.** Per tier/sensitivity intervals, set at publish — e.g. tax/rate
   & statutory pages 6–12 mo, evergreen explainers 24 mo, sensitive (3R+1) annual. Encode it so
   publish sets the right next-review date instead of a flat default.
6. **Lifecycle cockpit.** `DashboardView` partly does this; make one view the ops truth: counts per
   state, **aging/SLA** (how long in draft/in-review), overdue count, re-translation debt.
7. **Deletion policy (explicit).** `archived` = retired but **retained** (history + redirect);
   **never hard-delete** (preserves link equity + the immutable `revisions[]`/git audit trail).

## Proposed build order (each a self-contained, pushable increment)

- **P1 — Close the obsolescence loop (step 6).** `scripts/archive-article.mjs`: `request-archive`/
  chosen slug → `archived` + `hidden`, **cascade all 13 langs**, add `supersededBy`, and **auto-write
  the redirect** into `astro.config` (301 to successor, else a noindex archived banner). Decide the
  archived-URL policy (#2). *Highest value: it's the only step with zero automation and an SEO risk.*
  - **✅ P1a BUILT (2026-10-24, held for push).** `scripts/archive-article.mjs` (dry-run default,
    hard-gated, idempotent, 13-lang cascade) + `supersededBy` schema field + managed
    `src/data/archive-redirects.json` expanded to all 13 locales and merged under the curated map in
    `astro.config.mjs`. Policy: **301 to the successor** — the proven 31/31 real case (merge/replace).
    A no-successor archive is **refused** (not soft-404'd to a hub, which Google treats as a 404).
  - **▫ P1b TODO — the no-successor tombstone.** Serve a genuinely obsolete topic (no successor) as a
    live 200 page carrying an "archived/repealed" banner + `noindex`, so its URL never 404s and the
    historical content stays readable. Deferred because it is a **render-layer** change (build the
    page though it's out of listings, banner in `ArticleView`, `noindex` in `BaseLayout`, keep it out
    of sitemap/graph/OG) that can't be build-verified locally (14k-file build OOMs) — do it once P1a
    is green on CI, or when a real no-successor case appears.
- **P2 — Make review-due proactive (step 5 + #3 + #4).** A scheduled Action that builds the
  **prioritized review-due queue** (traffic × age) and surfaces it (one living GitHub issue +/or a
  dashboard tile). Fix `flag-needs-update.mjs` to 13 langs. Add the cadence policy (#5).
  - **✅ P2 BUILT (2026-10-24, held for push).** Four parts:
    1. **Cadence policy** `scripts/lib/review-cadence.mjs` — the ONE place the interval is set, by
       drift × cost: tier 4 (data) 6 mo · tier 1 (statutory) 12 · tier 2 18 · tier 3 (evergreen) 24 ·
       any sensitivity ≠ none capped at 12 (annual). Calendar-correct month math.
    2. **Backfill + mirror repair** `scripts/set-review-due.mjs` — gave the 300 published masters that
       had no reviewDue a policy date (from their `updated`), and repaired the drifted locale mirror
       (ar/hi/es/fr etc.): 5,285 files written, reviewDue-only → freshness-neutral (0 stale after).
       `publish-reviewed.mjs` now stamps the policy date at publish so the gap never reopens.
    3. **Prioritized queue** `scripts/build-review-queue.mjs` → `public/api/review-queue.json`
       (ranked readers × how-overdue) + a Markdown digest; wired into predev/prebuild so the JSON is
       a live `/api/review-queue.json` endpoint. **`.github/workflows/review-due.yml`** (Mon 09:00 MYT)
       upserts ONE living "📋 Articles due for review" issue from the digest — the queue finds the reviewer.
    4. **Contributor cockpit** — `WorklistView.astro` rebuilt into the full-lifecycle management surface:
       a **lifecycle census strip** (draft→in-review→reviewed→published→due-soon→needs-update→in-progress→archived
       with counts), a new **Due-soon** section (published, review within 45 days — forward-looking), the
       **Needs-update** queue now **traffic-ranked** with overdue-age + readers shown, and an **Archived**
       disclosure (with successor / "no successor"). Fixed `flag-needs-update.mjs` to all 13 langs.
    - Current real signal: 9 overdue (economy pages, Bank Negara 296 readers first), 21 archived, rest fresh.
    - ▫ Note: the Worklist stays dev/preview-gated (it lists unpublished draft titles). A signed-in
      public contributor cockpit (published-only, via the org-gated OAuth) is a later option, not needed yet.
- **P3 — Transition commands (steps 3 + 1→2).** Small, hard-gated CLIs mirroring `publish-reviewed`:
  `claim`/`submit-for-review`/`sign-off` (status flips with the four-eyes check), and
  `scaffold-draft <category/slug>` that seeds a correct draft from an accepted proposal (with a
  **dedup check** vs the corpus).
  - **✅ P3 BUILT (2026-10-24, held for push).** Two scripts, both dry-run-default + `--apply`,
    cascading over master + all 13 langs:
    1. **`scripts/lifecycle.mjs <action> <cat/slug> --by <handle> [--apply]`** — `claim`
       (needs-update→in-update · request-redraft→in-redraft · request-archive→in-archive · and an
       **overdue published** page → in-update; stamps assignee+claimedAt), `submit`
       (draft/in-update/in-redraft→in-review), `sign-off` (in-review→reviewed; stamps reviewer+reviewed).
       Hard gates = exactly what `scan.py` enforces, applied *before* the write: reviewer must be in
       `reviewers.txt`, **four-eyes** (reviewer ≠ assignee / last-revision contributor), sensitive topics
       sign-off only by a listed reviewer. Illegal transitions abort. (`reviewed→published` stays
       `publish-reviewed.mjs`; archive stays `archive-article.mjs`.)
    2. **`scripts/scaffold-draft.mjs <cat/slug> --title "…" [--tier N --type T --master L --by h] [--force] [--apply]`**
       — seeds a schema-valid draft (fresh globally-unique `topicId` read from the corpus since the
       manifest drops it, sane defaults, section stubs) after a **dedup check** (exact slug-in-category
       aborts; stopword-filtered fuzzy title/slug matches warn, `--force` to override).
    - E2E verified: scaffold→submit→sign-off→publish-reviewed on a throwaway slug produced a clean,
      validating draft (`MY-ECO-0036`), four-eyes + unknown-reviewer aborts fire, publish auto-stamped
      `reviewDue` via the P2 cadence (tier 3 → 24 mo). npm aliases: `lifecycle`, `scaffold`.
- **P4 — Update→re-translate wiring (#1) + lifecycle cockpit (#6).** Make republish emit the
  re-translation worklist + stamp; finish the dashboard as the ops cockpit. *(Worklist cockpit already
  built in P2 — P4 narrows to the update→re-translate trigger + aging/SLA tiles.)*
  - **✅ P4 BUILT (2026-10-24, held for push).** Closes the last lifecycle gap — when a master is
    updated & republished, its translations fall stale and someone must re-translate them; that debt
    was invisible. Now:
    1. **`translation-sync.mjs`** (report mode, already in predev/prebuild) also emits
       **`public/api/translation-debt.json`** — the re-translation worklist by topic (staleLangs +
       orphans), reusing its own authoritative hash comparison. `apidata.ts` gains `getTranslationDebt()`.
    2. **Worklist cockpit** gains a **"Translations to refresh"** section (traffic-ranked, shows the
       stale langs per topic + a Re-translate link) and **workflow aging/SLA** flags — a ⚠ "stalled"
       marker on any draft > 30d, in-review > 14d, reviewed > 7d, or in-update/redraft/archive > 21d,
       so a stuck pipeline is visible, not just stale content.
    3. **`build-translation-digest.mjs`** + the weekly Action (now "Weekly maintenance digest") upserts
       a second living issue **"🌐 Translations to refresh"** alongside the review-due one.
    - E2E verified: dirtying a master's `answer` surfaced all 12 stale langs in the debt JSON + counts,
      then reverted clean; aging-SLA math checked; validate 0 errors. reviewDue/translationStatus both
      freshness-neutral to each other.
  - **Lifecycle is now fully operationalized end to end** — propose → `scaffold-draft` → write →
    `lifecycle submit` → `lifecycle sign-off` → `publish-reviewed` → review-due engine → `lifecycle claim`
    → update → re-translate (debt surfaced) → `archive-article`. Remaining optional: **P1b** (no-successor
    noindex tombstone) and a dedicated /dashboard ops view (the /worklist cockpit already covers it).

Everything reuses existing infra (status model, worklist, `publish-reviewed` pattern, the
Action style of the FB/GSC jobs, the analytics archive). No schema redesign needed — the model
is already right; this is **operationalizing** it.
