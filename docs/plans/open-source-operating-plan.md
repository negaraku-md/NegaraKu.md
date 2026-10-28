# Open-Source Operating Plan

_Drafted 2026-10-28. How NegaraKu.md moves from "well-documented open source" to
"well-operated open source." Internal planning note; the public artefacts it
produces are `GOVERNANCE.md`, `ROADMAP.md`, `CITATION.cff`, and GitHub
Issues/Discussions._

## Diagnosis — the problem is the opposite of what it feels like

The worry was "we don't even know how to propose operating in open source." The
repo says otherwise. NegaraKu is **over-documented and under-operated in public.**

What already exists (most OSS projects never get this far):

- Dual licence done right — `LICENSE` (MIT, code) + `LICENSE-CONTENT`
  (CC BY-SA 4.0, content), with the grant explained in `CONTRIBUTING.md`.
- ~24 governance/spec docs in `docs/` — editorial guidelines, classification
  standard, content model, lifecycle-and-contribution spec, a 15-scope
  contributor module, master-language spec, operations guide, and a content
  roadmap.
- `CODE_OF_CONDUCT.md`, `SECURITY.md`, `CODEOWNERS`, 5 issue templates + PR
  template, Discussions enabled, "Edit on GitHub" on every article, a reviewer
  policy with real onboarding criteria (`scripts/health/reviewers.txt`).

What is actually missing — all **operational**, not foundational:

1. **No consolidated, newcomer-facing governance.** The specs are written for the
   maintainer and scattered across 24 files. There was no single "how this
   project is run + how to join" page.
2. **Not operating in public.** From outside: 0 releases, 0 `good first issue`s,
   ~2 open issues, 0 open PRs, Discussions unseeded. The roadmap lived in
   `docs/CONTENT-EXPANSION-ROADMAP.md` + private planning notes — invisible on
   GitHub. The repo reads as dormant even though it ships constantly.
3. **A stale front door.** `CONTRIBUTING.md` still told contributors to set
   `version: "0.1"`, but the schema migrated to `revision` (int). A newcomer
   following the guide wrote a field that no longer exists.
4. **Single point of governance.** `reviewers.txt` = only `ashton-tan`, with no
   public path to add more. Fine today; a bus-factor risk to name and plan down.

Conclusion: the fix is not to learn open source — it is to **operate what is
already documented, in public.**

## The operating model to commit to

A **stewarded open knowledge base**: open contribution + mandatory editorial
review + a named steward, with a documented path to add reviewers and
maintainers. Not a flat do-ocracy — the editorial review gate (sources, neutrality,
the sensitive-content hard gate, four-eyes) *is* the product, and the public trust
badges are only honest because that gate exists. Named and explained in
`GOVERNANCE.md`.

## The plan

### P0 — operate in public (this pass)

Highest leverage; mostly surfacing material that already exists plus GitHub
housekeeping.

1. **`GOVERNANCE.md`** — consolidate the scattered specs into one newcomer-facing
   page: the role ladder (reader → contributor → reviewer → steward), how
   decisions are made, the review gate, how a change becomes live, how to become a
   reviewer/maintainer, corrections/disputes/security, licensing. Links out to the
   deep docs. **Status: done (held for push).**
2. **`ROADMAP.md`** — a public, human-readable roadmap (Now / Next / Later) that
   points the detailed backlog at GitHub Issues and the content plan at
   `docs/CONTENT-EXPANSION-ROADMAP.md`. **Status: done (held for push).**
3. **`CITATION.cff`** — make the knowledge base citable (CFF 1.2.0, CC BY-SA 4.0,
   links repo + site + HF dataset + Wikidata). **Status: done (held for push).**
4. **Fix the stale front door** — `CONTRIBUTING.md` `version` → `revision`,
   re-synced to the current schema/lifecycle; added a GOVERNANCE/ROADMAP pointer
   and a non-developer on-ramp note. **Status: done (held for push).**
5. **Seed `good first issue`s + move the backlog into public Issues** — a prepared
   list is in `docs/plans/good-first-issues-seed.md`. **Status: drafted; NOT
   opened** — opening public issues is outward-facing and needs explicit
   go-ahead (and the GitHub labels created first).

### P1 — grow the commons (next)

6. **Non-developer contribution path** — a plain-language "contribute without git"
   route wired to the web issue forms and the `/contribute` page.
7. **Seed Discussions** — welcome post, "propose a topic" category, Q&A, pinned
   roadmap. (Outward-facing → needs go-ahead.)
8. **Grow the reviewer/maintainer set** — recruit scoped reviewers per
   `reviewers.txt` criteria; add a second maintainer to reduce the bus factor.
9. **"How to cite / reuse" page on the site** — pairs `CITATION.cff` with the
   CC BY-SA licence and the HF dataset.

### P2 — momentum & recognition

10. **Release cadence** — periodic tagged releases or a monthly "what shipped"
    from the existing changelog, for a visible heartbeat.
11. **Contributor recognition** — a Contributors page (the data is already in each
    article's `revisions[]` history) and/or all-contributors.
12. **Publish the editorial standard on the site** — show off the differentiator,
    not just in repo docs.

## Guardrails

- Governance must preserve the review gate — never promise "anyone can edit live
  content." Sensitive (3R+1) content is always human-reviewed.
- Opening public Issues/Discussions/releases is outward-facing → explicit
  go-ahead first; do not auto-open.
- No auto-push. Everything above is committed locally and held for an explicit
  "push."

## Execution status (2026-10-28)

**P0 — pushed & live** (commit `ceb167f9a`): `GOVERNANCE.md`, `ROADMAP.md`,
`CITATION.cff`, fixed `CONTRIBUTING.md`, `README.md` wiring.

**P1/P2 — operating in public (done, on a go-ahead from the owner):**

- **Good-first-issues opened** (using the existing label taxonomy, not parallel
  labels): #4 strengthen a citation (pinned), #5 add an FAQ, #6 translate a short
  article, #7 fix a typo/link. The two pre-existing issues (#2 review-queue,
  #3 translation-debt) are automation-maintained and were left alone.
- **Discussions seeded:** #8 Announcement "operating in the open" (links
  GOVERNANCE/ROADMAP/CITATION + how to help), #9 Ideas "propose a topic". The
  default welcome (#1) was left as is.
- **Release cadence** (P2-10): `RELEASING.md` documents the monthly/milestone
  tagged-release heartbeat on top of continuous deploys; first release `v0.1.0`
  cut as the baseline.
- **Already in place, verified not rebuilt:** contributor pages
  (`contribute`, `contributor-guide`, `contributors`), `roles`, the About→GitHub
  explainer (non-developer on-ramp, 13-lang), `changelog`, and the rich label set.

**Still open (needs humans / later):**

- Grow the reviewer + maintainer set (social; `reviewers.txt` criteria) — the
  single-steward bus factor.
- On-site surfacing of CITATION/GOVERNANCE was judged low marginal value vs. the
  13-language cost, since the About/GitHub section + README already carry the
  story; revisit if desired.
- P1 Discussions can be grown (Q&A seed); contributor-recognition page already
  exists.
