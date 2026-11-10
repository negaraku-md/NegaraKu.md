# Reviewer-growth plan — reducing the single-reviewer bus factor

_Task 9. Drafted 2026-11-11. Status: proposal for the steward to act on._

## 1. Current state & risk

NegaraKu.md is a **stewarded open knowledge base**: anyone may contribute, but nothing
goes live as "human-reviewed", and no `sensitivity != none` article can be published at
all, without a **named reviewer** from
[`scripts/health/reviewers.txt`](../../scripts/health/reviewers.txt). That reviewer's
name renders publicly as the green "Human-reviewed" badge — it is the product's core
trust promise.

**The pool is one person.** `scripts/health/reviewers.txt` lists exactly one name,
`ashton-tan`, who is also the sole `CODEOWNERS` maintainer. The governance model is
honest about this ("today, one") and names growing the set as a roadmap goal, but the
risk is concrete:

- **Bus factor = 1.** If the steward is unavailable, *no sensitive content can be
  published and no correction to a live sensitive page can be signed off.* Corrections
  to live pages are supposed to be prioritised above new content (GOVERNANCE.md); a
  single reviewer is a single point of failure on exactly the obligation the project
  treats as most urgent.
- **Four-eyes conflict.** The editorial gate requires the reviewer *not* be the person
  who did the work (`assignee` / last `revisions[].contributor`). With one reviewer who
  is also the most active author, any article the steward drafts **cannot be reviewed by
  anyone** — it is structurally unpublishable as reviewed content. Growth is not just
  resilience; it is needed for the four-eyes rule to function at all on the steward's own
  drafts.
- **Throughput ceiling.** 13 languages and a growing corpus mean sensitive content
  (law, government, 3R+1, health, elections) bottlenecks on one calendar.
- **Scope breadth.** One person cannot credibly hold *domain footing* (criterion 3)
  across tax, law, Islamic finance, religion, constitutional matters, and 13 languages.
  Scoped reviewers are the design intent; today the scoping is theoretical.

This plan keeps the gate exactly as strict — it widens *who can stand behind it*.

## 2. What a reviewer signs off — mapped to the sensitivity enum

The schema (`src/content.config.ts`) defines `sensitivity` as one of:
`none · race · religion · royalty · constitution · elections · security · health ·
legal-proceedings`. A reviewer's authority is **scoped** (per reviewers.txt criterion 3):
being listed does not mean being qualified for every category. This plan makes the
scoping explicit by grouping the enum into **review domains**, so a reviewer is
onboarded *for named domains*, not globally.

| Review domain | Sensitivity value(s) it covers | What signing off asserts | Footing a reviewer needs |
|---|---|---|---|
| **General editorial** | `none` | Sourced, neutral, correctly classified, badge honest. (No named reviewer legally required to publish `none`, but a reviewed badge still means a human vouched.) | Track record + sourcing habit + neutrality. |
| **3R+1** | `race`, `religion`, `royalty`, `constitution` | The hard gate. Neutral, descriptive, non-inflammatory treatment of Malaysia's most contested subjects. | Deep neutrality judgment; cultural/constitutional literacy; comfort holding a descriptive line. |
| **Governance & elections** | `elections`, `constitution` | Accurate, non-partisan handling of electoral process and constitutional structure. | Familiarity with the Federal Constitution, EC processes; strict non-partisanship. |
| **Legal & proceedings** | `legal-proceedings`, (overlaps `constitution`) | Correct statement of law and live/decided proceedings; sub-judice care; primary-source citation (the Act, the judgment). | Works in law/compliance; cites AGC/court sources, not commentary. |
| **Public safety & security** | `security` | No operational harm; accurate on safety/security topics without alarmism. | Domain standing; harm-awareness. |
| **Health** | `health` | Medically accurate, current, non-prescriptive; cites MOH/primary health authorities. | Health/clinical or public-health footing. |

Notes:
- Categories can co-occur (a royal-powers article is `royalty` **and** `constitution`);
  such an article needs a reviewer scoped for **both**, or sign-off from two reviewers
  whose scopes jointly cover it.
- The four-eyes rule (reviewer ≠ worker) applies within every domain and is enforced by
  `npm run health`.

## 3. Reviewer role & ladder

Keep the existing three public tiers (Reader → Contributor → Reviewer → Maintainer);
insert one **non-authoritative apprenticeship step** so the pipeline has an on-ramp that
does not touch the live badge:

| Step | Authority | How reached |
|---|---|---|
| **Contributor** | Draft/translate/correct; credited in revision history. | Open a PR. |
| **Reviewer-in-training** *(new, informal)* | **No sign-off authority.** Writes a full review *as a PR comment* on candidate articles in their domain; a listed reviewer co-signs. Builds the visible track record criterion 1 asks for. | Self-nominate or be invited; not recorded in reviewers.txt. |
| **Reviewer (scoped)** | Sign off articles **in their named domains only**; name renders as the public badge. Required for `sensitivity != none` in scope. | Meets the four criteria (below); added to reviewers.txt by PR with domain scope stated. |
| **Maintainer / Steward** | Merge, own standard, add/remove reviewers, cut releases. | Reviewer with sustained cross-domain judgment; added to CODEOWNERS by an existing maintainer. |

The four criteria for Reviewer are **unchanged** (reviewers.txt is the SSOT): track
record · primary-source sourcing · domain footing · neutrality. This plan only adds the
*apprenticeship on-ramp* and makes *domain scope* explicit and recorded.

## 4. Where reviewers are recorded (and the one gap to close)

- **Authority registry:** `scripts/health/reviewers.txt` — one name per line, enforced by
  `npm run health` (any `reviewer:` value not listed is an error). **This is the SSOT.**
- **Per-article:** the `reviewer:` frontmatter field (`src/content.config.ts` line 103 /
  415, `z.string().nullable()`) — a handle from reviewers.txt, set when signed off; null
  until then. Rendered as the public badge (`TrustBadge.astro`).
- **Merge authority:** `.github/CODEOWNERS` (maintainers).

**Gap:** reviewers.txt records *names* but not *scopes*, while the model is explicitly
scoped. Today a reviewer's domain lives only in the PR prose that added them. **Proposed
fix (lightweight, no code change needed):** record scope as a structured comment line
immediately above each name, which the health check can later parse but humans can read
now. See the diff in §6.

## 5. Reviewer-onboarding checklist (lightweight)

A one-page path from "trusted contributor" to "listed reviewer". Keep it to a single PR.

**Before nomination (candidate has already, over time):**
- [ ] Landed a meaningful run of accepted PRs in the domain(s) they'll sign off (criterion 1).
- [ ] Shown the primary-source habit — cites the Act / regulator / court, flags "unverified" (criterion 2).
- [ ] Written ≥3 "reviewer-in-training" reviews in-domain that a listed reviewer agreed with (track record you can point at).
- [ ] Demonstrated neutral handling of a contested edit (criterion 4), ideally on a 3R+1-adjacent PR.

**The nomination PR (adds the name):**
- [ ] A maintainer nominates, or the candidate asks and a maintainer sponsors.
- [ ] PR adds the name to `scripts/health/reviewers.txt` **with the domain scope stated** (per §6 format).
- [ ] PR body states *which sensitivity domains* (from §2) and *why the four criteria are met*, with links to the candidate's PR history.
- [ ] Candidate has read: GOVERNANCE.md, CONTENT-POLICY.md, docs/editorial-guidelines.md, and the top of reviewers.txt.
- [ ] Candidate acknowledges the four-eyes rule (never sign off your own work) and the honest-badge rule.
- [ ] A maintainer merges; the addition is announced in Discussions.

**First 30 days (shadow period):**
- [ ] First 3 in-scope sign-offs are spot-checked by a maintainer (not re-reviewed — sampled).
- [ ] Reviewer knows the removal route (a PR deleting the line; past sign-offs stay in history).

## 6. Proposed additions to the live docs (diff-style — not yet applied)

These are *suggestions* for the steward to apply; I have not edited the live governance
docs. The reviewers.txt change is the only one touching an enforced file, so it should be
made carefully (the parser currently treats `#` lines as comments, so the scope lines are
backward-compatible today).

**(a) `scripts/health/reviewers.txt`** — give the single reviewer an explicit scope, and
document the scope format so future additions follow it:

```diff
 # Removal: a reviewer who is inactive, or who signs off content that does not
 # hold up, is removed by the same route — a PR deleting the line. Their past
 # sign-offs stay in the article history; the record is not rewritten.
 #
+# SCOPE FORMAT. Each name may be preceded by a `# scope:` line naming the review
+# domains (see docs/plans/reviewer-growth-plan.md §2) the reviewer is signing off
+# for: general, 3r, governance-elections, legal, security, health, or `all`.
+# Scope is advisory to humans today and enforceable by the health check later.
 # ---------------------------------------------------------------------------
+# scope: all
 ashton-tan
```

**(b) `GOVERNANCE.md` → "How someone becomes a reviewer"** — add the apprenticeship
on-ramp and the scope-recording rule (append after the existing paragraph):

```diff
 nominate → scope → merge PR flow) live at the top of
 [`scripts/health/reviewers.txt`](scripts/health/reviewers.txt) — the single
 source of truth, because that file is what the health check enforces.
+
+Before a contributor is listed, they may act as a **reviewer-in-training**: writing
+full reviews as PR comments in their intended domain, co-signed by a listed reviewer,
+to build the visible track record. This step carries no sign-off authority and is not
+recorded in reviewers.txt. When a reviewer is added, the PR records their **review
+domain scope** (see docs/plans/reviewer-growth-plan.md) — being listed authorises
+sign-off only within that scope.
```

**(c) `CONTRIBUTING.md` → "Who can review"** — point readers at the growth path so
recruitment is visible to every contributor (append to the section):

```diff
 (3R+1) content can never be published without one. See that file for how reviewers
 are onboarded.
+
+**Want to become a reviewer?** The project actively needs more, by domain and by
+language. Start by writing review comments on open PRs in an area you know well; a
+listed reviewer will co-sign and, once your track record is clear, sponsor you. The
+full ladder, domain map, and onboarding checklist are in
+[docs/plans/reviewer-growth-plan.md](docs/plans/reviewer-growth-plan.md).
```

## 7. Concrete recruitment steps (sequenced)

1. **Make the ask visible (week 1).** Apply the §6 doc additions. Open a pinned GitHub
   Discussion + a `good first review` issue label; list the domains and languages most
   in need (law, religion, health; non-English reviewers for the 13-language corpus).
2. **Seed reviewers-in-training from existing contributors.** Identify the contributors
   who already meet criteria 1–2 (run the revision-history/ contribution data) and invite
   them to shadow-review in their domain. The terminology audit (Task 12) is a natural
   first task for **native-language** reviewer candidates — adjudicating the flagged
   terms is exactly the scoped judgment reviewing requires, with low blast radius.
3. **Recruit by domain, not generically.** Target 1–2 named candidates per high-risk
   domain first: a **legal/compliance** reviewer (HC & Partners / affiliate network is a
   natural pool given the project's sponsor), a **religion/3R** reviewer, a **health**
   reviewer. Scope each narrowly; breadth comes later.
4. **Recruit by language.** For each non-English language with sensitive content, aim for
   at least one native reviewer; until then, that language's sensitive pages depend on an
   English-capable reviewer plus a native translator — state that dependency honestly.
5. **Lower the cost of the first review.** Provide a 1-page review rubric (sourced?
   neutral? correctly classified? badge honest? four-eyes clean?) so a new reviewer's
   first sign-off is checklist-driven, not folklore. (The editorial gate in GOVERNANCE.md
   §"The editorial gate" is already that rubric — lift it into a `REVIEW-CHECKLIST.md`.)
6. **Target & track.** Set a near-term goal of **≥3 listed reviewers across ≥2 domains**
   (clearing the four-eyes deadlock on the steward's own drafts) and a 6-month goal of
   **domain coverage for every sensitivity value + a named reviewer for the top 3
   languages by traffic**. Review progress in the roadmap.
7. **Add the second maintainer before it's urgent.** Governance already commits to adding
   maintainers "before the single-steward bus factor becomes a risk" — the first
   reviewer who shows sustained cross-domain judgment should be proposed to CODEOWNERS, so
   merge authority is not also bus-factor-1.

---

_This plan changes no live doc; apply §6 by PR through the normal editorial gate.
Growing the reviewer set is itself the fix for the bus factor it describes — including
the structural one where the steward's own drafts cannot currently be reviewed by anyone._
