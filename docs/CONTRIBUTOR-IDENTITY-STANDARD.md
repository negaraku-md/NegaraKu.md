# Contributor identity standard

> **The problem this prevents.** A contributor was recorded two ways —
> `ashton-tan` (GitHub handle) on some articles and `Ashton Tan` (display name)
> on others. The same person then appeared as two contributors in the custody
> trail, dashboard tallies, and "reviewed by" bylines. This document fixes the
> canonical form and the validator enforces it, so the drift cannot recur.

## The rule

**A contributor is identified by their GitHub handle, lowercase, exactly as it
appears on `github.com/<handle>` — nothing else.**

- ✅ `ashton-tan`
- ❌ `Ashton Tan` (display name)
- ❌ `Ashton` (partial)
- ❌ `@ashton-tan` (no leading `@`)
- ❌ `you@example.com` (not an email)

This single value is the identity used everywhere a person is recorded.

### Why the handle, not the display name

1. **Maps 1:1 to a real account** — the handle is the GitHub identity that owns
   commits, PRs, and the contribution graph. Display names are not unique and
   can change.
2. **Matches git provenance** — the repo's git author is `ashton-tan`; the
   custody trail should agree with `git log`, not diverge from it.
3. **Machine-stable** — dedup, dashboard tallies, and per-contributor views key
   on one canonical string. A stable id makes those correct by construction.
4. **AI-friendly** — one identity form is unambiguous for downstream tools and
   for the AI agents that draft and stamp articles.

A friendly display name is a **presentation concern**, not a stored value. If
the UI wants to show "Ashton Tan" it maps the handle to a name at render time
(see *Display* below) — it must never store the display name in frontmatter.

## Where the handle is used

Every frontmatter field that records a person takes the handle form:

| Field | Meaning |
| --- | --- |
| `author` | who drafted the article (the byline; `null` if purely AI-drafted, with `aiAssisted: true`) |
| `reviewer` | who signed off the human review |
| `publishedBy` | who published it |
| `revisions[].reviewer` | who reviewed a specific revision (`null` if none) |
| `contributor` (in `revisions[]` / custody data) | any recorded actor |

`null` is always valid where a stage has not happened yet (e.g. a draft has
`reviewer: null`). The AI drafting agent is **not** a contributor — its work is
disclosed with `aiAssisted: true`, never by putting a name in `author`.

## Custody status ↔ identity consistency

The custody stages and the identity fields must agree — the validator enforces
this pairing:

| `status` | requires |
| --- | --- |
| `draft` | `reviewer: null` (an AI draft cannot self-certify review) |
| `reviewed` | a `reviewer` handle **and** a `reviewed` date |
| `published` | a `reviewer` handle, `publishedBy` handle, and `published` date |

> Note: `reviewed` is **not** a live/served status. Sensitive (3R+1) articles
> stay hidden until `published`, even once reviewed. See `isPublishable()` /
> `LIVE_STATUSES` in `src/lib/content.ts`.

## Registered contributors

The canonical handles known to this repo. Add a row when a new person
contributes; the validator's identity check reads this list.

| Handle | Display name | Role |
| --- | --- | --- |
| `ashton-tan` | Ashton Tan | Maintainer / reviewer / publisher |

## Display

Reader-facing UI may prettify the stored handle:

- Show `@ashton-tan`, or
- Map the handle → *Display name* from the table above (e.g. render
  "Ashton Tan"), or
- Link to `https://github.com/ashton-tan`.

The mapping lives in the UI layer. The stored frontmatter value stays the bare
handle.

## Enforcement

`scripts/validate-frontmatter.mjs` fails the build (run first in
`predev`/`prebuild`) if any `author` / `reviewer` / `publishedBy` value is not a
bare lowercase handle — i.e. it rejects a value containing a space, an uppercase
letter, a leading `@`, or an `@`-domain. This is what stops `Ashton Tan` (or any
future display-name form) from ever entering the corpus again.
