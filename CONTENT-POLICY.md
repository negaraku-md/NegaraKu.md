# Content Policy — sensitive topics & the 3R line

NegaraKu.md is an **independent, non-partisan, educational** knowledge base about
Malaysia. It describes the country's laws, institutions, economy, culture and daily
life **factually and from primary sources**. It is not affiliated with any
government, political party, royal household, or religious authority.

This policy is both a **rule for contributors** and a **promise to readers**. It sits
alongside [GOVERNANCE.md](GOVERNANCE.md) (how a change becomes live),
[CONTRIBUTING.md](CONTRIBUTING.md) (how to contribute) and
[docs/editorial-guidelines.md](docs/editorial-guidelines.md) (house style). Where this
policy is stricter, it wins.

> **Why this exists.** Malaysia's content laws on the **3R subjects — Race, Religion,
> and Royalty** (plus the constitutional "sensitive matters" of Articles 152, 153,
> 181, 3 and 11) — are broad and actively enforced. Neutral, sourced *description* is
> lawful and welcome. Opinion, ridicule, criticism, or anything readable as
> incitement is not, and has no place here regardless of the law. This policy keeps
> the project on the right side of both the law and its own mission.

---

## 1. What we publish

- **Facts, sourced to primary authorities** — the Act, the gazette, the regulator's
  or institution's own publication. Never a figure, fee, date or URL that isn't cited.
- **Neutral description** of how a law, institution, policy or practice works — what
  it is, where it comes from, what it says.
- **Plain-language explanation** that helps a reader or an AI answer a real question
  about Malaysia.

## 2. What we never publish

On **any** topic, and with zero tolerance on the 3R+1 subjects:

- Insult, ridicule, mockery, or contempt toward any race, religion, or the
  institution of the Rulers.
- Incitement, or framing a reader could reasonably read as incitement, to hostility
  between communities.
- Commentary, speculation, or criticism directed at **individual** royals; theological
  disputes or anything readable as insulting a faith; communal editorialising about
  the social contract.
- Unsourced claims, rumour, or anyone's personal opinion presented as fact.
- Content that is defamatory, or that targets a private individual.

## 3. The editorial line, per subject

These expand the "neutral and factual" rule of the editorial gate for the hardest
topics. Describe the framework; do not take sides.

- **Royalty** — describe the constitutional role and history; cite the Federal
  Constitution and official sources (Art 181). **No commentary on individual royals,
  no speculation, no criticism.**
- **Religion** — describe the legal and administrative framework (Art 3, Islam as the
  religion of the Federation; Art 11, freedom of religion; syariah jurisdiction).
  **No theological disputes; nothing readable as insulting Islam or any faith**
  (Penal Code 298/298A).
- **Race** — describe law and policy factually (Art 152 national language; Art 153
  special position; NEP history) with sources. **No communal editorialising or
  inflammatory framing.**
- **Politics, elections, security, legal proceedings** — institutional and legal
  facts only; no endorsement, no campaigning, no prejudicing a live case.

If a factual statement on one of these subjects cannot be made without editorialising,
**leave it out** and raise it with the steward.

## 4. How the gate works (contributors)

Publication is **gated by a named human reviewer** — this is the project's firewall,
not a formality (see GOVERNANCE → *The editorial gate*).

1. Every article carries a `sensitivity` classification. The 3R+1 values —
   `race`, `religion`, `royalty`, `constitution` (and also `elections`, `security`,
   `health`, `legal-proceedings`) — mean the article is **authored directly into
   `in-review` and can never auto-publish**. Only a named reviewer (the steward)
   flips it to `published`.
2. A pull request is a **proposal**, not a publication. Nothing reaches the live site
   without a maintainer merge to `main`.
3. Contributions touching sensitive paths request steward review automatically
   ([.github/CODEOWNERS](.github/CODEOWNERS)), and a CI check flags 3R-sensitive terms
   in the diff with a `needs-3R-review` label (`scripts/lint-3r.mjs`).
4. **Classify honestly.** Under-tagging a sensitive article to dodge review is the one
   thing that breaks the firewall. When in doubt, tag it and let the reviewer decide.
5. AI-assisted drafts get **no** shortcut: an AI draft of a 3R-touching topic is
   treated exactly like any other sensitive draft — human review before it is live.

## 5. No on-site user-generated content

When external contribution is open it flows through **GitHub pull requests**, never
through an on-site comment wall, forum, or profile. (Contribution may be paused from
time to time — the site then runs read-only — but the publish gate and this policy
apply to every change either way.) Keeping contribution on GitHub puts a reviewer
between every word and the live site, and keeps the project clear of social-media
licensing obligations. Please do not propose features that add on-site UGC surfaces.

## 6. Reporting content — fast takedown

If you believe something here is unlawful, inaccurate, infringes copyright, or crosses
the 3R line:

- **Any time:** use the confidential route in [SECURITY.md](SECURITY.md) — this
  always reaches the steward, including while public contribution is paused.
- **When public issue reporting is open:** open a
  [Report content](https://github.com/negaraku-md/NegaraKu.md/issues/new?template=6-report-content.yml)
  issue.

We act on credible reports **promptly** (target: triage within 48 hours; a credible
unlawful-content or authority notice is actioned on sight — removed or rewritten first,
discussed after). Actions are logged. Cooperating quickly and visibly is how a curated
publisher stays accountable.

## 7. Legal posture (plain statement)

The project operates in good-faith compliance with Malaysian law, including the
Communications and Multimedia Act 1998 (notably s233), the Sedition Act 1948, the
Penal Code (ss 298, 298A, 505), and the sensitive-matters provisions of the Federal
Constitution. Nothing here is a defence to, or an invitation to test, any of them —
it is a description of the standard we hold content to. This document is **not legal
advice**; the project's sensitive content and this policy are reviewed by the steward
and, for the highest-risk material, by Malaysian legal counsel.

---

*Maintained by the steward. Proposed changes to this policy go through the same
reviewed pull-request process as everything else — see GOVERNANCE.md.*
