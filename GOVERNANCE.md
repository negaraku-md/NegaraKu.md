# Governance

How NegaraKu.md is run — who decides what, how contributions become live
content, and how someone grows from a first-time reader into a maintainer.

NegaraKu.md is an open, AI-friendly knowledge base about Malaysia. Its value is
not that it is large, but that it is **trustworthy**: every factual claim is
cited, every page tells you honestly whether a human has reviewed it, and
sensitive subjects are handled neutrally. This document exists so that openness
and trustworthiness do not pull against each other — anyone may contribute, and
nothing reaches readers without passing the editorial gate that makes the trust
badges mean something.

If you only read one section, read **[The operating model](#the-operating-model)**
and **[How a change becomes live](#how-a-change-becomes-live)**.

---

## The operating model

NegaraKu.md is a **stewarded open knowledge base**, not a do-ocracy.

- **Open contribution.** Anyone may propose, draft, translate, correct, or
  report a gap — through a pull request or an issue. You do not need permission,
  and you do not need to be a developer. See [CONTRIBUTING.md](CONTRIBUTING.md).
- **Mandatory editorial review.** A contribution does not go live because it was
  merged mechanically; it goes live because it meets the editorial standard
  (sourced, neutral, correctly classified) and — for anything a reader relies on
  as reviewed — because a **named human reviewer** vouched for it.
- **A named steward.** A small set of maintainers (today, one; see
  [Roles](#roles)) is accountable for the standard, breaks ties, and decides who
  joins the reviewer and maintainer set.

**Why not a flat "anyone can edit live content" model?** Because the review gate
*is* the product. NegaraKu covers tax, law, and the 3R+1 subjects (race,
religion, royalty, constitution) where an unreviewed edit is not a typo — it is a
liability. The honest promise the site makes to every visitor ("a human reviewed
this") can only be kept if a human actually did. The stewarded model is what lets
NegaraKu be genuinely open *and* keep that promise.

---

## Roles

Roles are earned by track record, not assigned by title. Each is a superset of
the one before it.

| Role | Who | What they can do |
|---|---|---|
| **Reader** | everyone | Read, reuse under the licences, report an issue, suggest a correction. |
| **Contributor** | anyone who opens a PR | Draft/edit/translate articles, fix code, improve docs. Credited in the article's public revision history. |
| **Reviewer** | listed in [`scripts/health/reviewers.txt`](scripts/health/reviewers.txt) | Sign off an article — their name renders publicly as the human behind the review. Required for any sensitive (3R+1) page to go live. Reviewing is **scoped**: being listed does not mean qualified for every category. |
| **Maintainer / Steward** | listed in [`.github/CODEOWNERS`](.github/CODEOWNERS) | Merge PRs, own the editorial standard, add/remove reviewers, cut releases, make final calls on contested changes. |

**Current maintainer:** [@ashton-tan](https://github.com/ashton-tan) (project
steward). This is a single-maintainer project today; growing the reviewer and
maintainer set is an explicit roadmap goal (see [ROADMAP.md](ROADMAP.md)).

### How someone becomes a reviewer

Being a reviewer is the authority to make the site assert, publicly, that a human
vouches for a page. It is earned, not requested. The full criteria and process
(track record, primary-source sourcing habit, domain footing, neutrality; and the
nominate → scope → merge PR flow) live at the top of
[`scripts/health/reviewers.txt`](scripts/health/reviewers.txt) — the single
source of truth, because that file is what the health check enforces.

### How someone becomes a maintainer

A maintainer is a reviewer who has, over time, shown sustained judgment across
categories and good stewardship of other people's contributions. An existing
maintainer proposes the addition via a PR to `CODEOWNERS`; the change is announced
in [Discussions](https://github.com/negaraku-md/NegaraKu.md/discussions). As the
project grows, maintainers are added before the single-steward bus factor becomes
a risk.

---

## How a change becomes live

The article lifecycle is a **loop**, not a line (full version in
[CONTRIBUTING.md](CONTRIBUTING.md#article-lifecycle)):

```
draft → in-review → reviewed → published
                                   │
         reviewDue passes, OR a reader suggests a correction
                                   ▼
                       needs-update → in-update  (still LIVE for readers)
                                   ▼
                          in-review → published  (revision++)
```

- **`draft` and `in-review` are NOT public** — they stay out of the live build.
  A sensitive article is authored directly into `in-review` and only a named
  reviewer flips it to `published`.
- **`needs-update` / `in-update` ARE live** — readers keep seeing the current
  version while the next one is prepared. A published article is never sent back
  to `draft`.
- Every published change records a `revisions[]` entry naming **what** changed and
  **who** changed it. That is rendered in the article's public change history —
  it is how contributors get credit. (The schema field is `revision`, an integer;
  the old string `version` was retired.)

### The editorial gate — non-negotiables

These are enforced by review and, where possible, by `npm run health`
(`scripts/health/scan.py`, which runs `--strict` in CI and blocks deploys):

1. **Cite everything.** Anything beyond `draft` must carry sources to primary
   authorities (the Act, the regulator's own publication) — not secondary
   commentary. Never invent a figure, fee, or URL.
2. **Neutral and factual**, especially on the 3R+1 subjects and politics,
   elections, security, health, and legal proceedings. See
   [docs/editorial-guidelines.md](docs/editorial-guidelines.md).
3. **Sensitive content is a hard gate.** `sensitivity != none` can never be
   published without a named reviewer. No exceptions, no auto-publish.
4. **Honest trust badges.** An unreviewed AI draft says exactly that. The badge
   must always tell the reader the truth about who stands behind the page.
5. **Separation of duties (four-eyes).** On a reviewed or published article, the
   reviewer may not also be the person who did the work (`assignee` /
   last `revisions[].contributor`). The health check enforces this.

---

## How decisions are made

- **Routine changes** (a new article, a translation, a citation fix, a code
  patch) are decided in the pull request. A maintainer reviews against the
  editorial gate and merges. Disagreements are resolved in the PR thread with
  reference to the editorial guidelines, not personal preference.
- **Editorial judgment calls** (how to frame a contested subject, whether a
  source is authoritative enough, how to classify sensitivity) are the steward's
  call, made in the open and explained. When a call sets precedent, it is written
  into [docs/editorial-guidelines.md](docs/editorial-guidelines.md) so the next
  person inherits it.
- **Direction and scope** (what the project should cover next, process changes)
  are discussed in
  [GitHub Discussions](https://github.com/negaraku-md/NegaraKu.md/discussions) and
  tracked in [ROADMAP.md](ROADMAP.md) and public Issues. Anyone may propose; the
  steward decides and records why.

The bias is toward **transparency over consensus theatre**: decisions are
explained publicly, but a single accountable steward makes the final call so the
project does not stall.

---

## Corrections, disputes, and takedowns

- **Factual correction.** Open an issue (or use the "suggest a correction" path
  from any article). A correction to a *live* page moves it to `needs-update` —
  it stays live while the fix is prepared — and is prioritised above new content.
- **Dispute over framing or neutrality.** Raise it in an issue or Discussion with
  the specific sentence and a primary source. The editorial guidelines, not
  opinion, settle it; if they are silent, the steward rules and updates the
  guidelines.
- **Copyright / takedown / privacy.** See [SECURITY.md](SECURITY.md) for the
  private contact route. Content that is not compatibly licensed, or that a
  rightsholder objects to, is removed or rewritten promptly.

## Security

Report vulnerabilities and sensitive concerns privately per
[SECURITY.md](SECURITY.md) — do not open a public issue for a security problem.

## Licensing

NegaraKu.md is **dual-licensed**, and contributing means agreeing to both:

| What | Licence |
|---|---|
| Article content under `knowledge/` | [CC BY-SA 4.0](LICENSE-CONTENT) |
| Site source code | [MIT](LICENSE) |

ShareAlike means anything built on the content stays under CC BY-SA 4.0 with
attribution preserved. To cite or reuse the knowledge base, see
[CITATION.cff](CITATION.cff).

## This document

Governance evolves with the project. Changes are made by PR, discussed in the
open, and are themselves subject to the editorial gate. Deeper references:

- [CONTRIBUTING.md](CONTRIBUTING.md) — how to contribute, step by step
- [docs/editorial-guidelines.md](docs/editorial-guidelines.md) — the editorial standard
- [docs/CONTRIBUTOR-MODULE.md](docs/CONTRIBUTOR-MODULE.md) — the fifteen contribution scopes
- [docs/LIFECYCLE-AND-CONTRIBUTION-SPEC.md](docs/LIFECYCLE-AND-CONTRIBUTION-SPEC.md) — the full lifecycle model
- [ROADMAP.md](ROADMAP.md) — where the project is going
