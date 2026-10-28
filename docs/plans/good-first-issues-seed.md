# Good-First-Issues Seed

_Drafted 2026-10-28. A prepared set of small, well-scoped tasks for GitHub Issues._

> **UPDATE 2026-10-28 — partially executed.** On the owner's go-ahead, four
> evergreen good-first-issues were opened using the repo's **existing** label
> taxonomy (not the parallel labels proposed below): #4 strengthen a citation
> (pinned), #5 add an FAQ, #6 translate a short article, #7 fix a typo/link. Topic
> proposals were routed to Discussions #9 (Ideas) rather than an issue. The repo
> already had `good first issue`, `help wanted`, `article-request`,
> `translation-issue`, `documentation`, `scope:*`, `site-*`, `review-queue`, and
> `translation-debt` labels — so **do not create the parallel label set below**;
> map to the existing ones. The candidate list below remains a backlog to draw
> from for future batches.

## Labels to create first

| Label | Colour (suggestion) | Meaning |
|---|---|---|
| `good first issue` | `#7057ff` | Small, self-contained, newcomer-friendly. |
| `help wanted` | `#008672` | Open for anyone to pick up. |
| `content` | `#0e8a16` | New article, edit, or coverage gap. |
| `translation` | `#1d76db` | Translate or re-sync a language variant. |
| `citation` | `#fbca04` | Add/fix/verify a source. |
| `code` | `#5319e7` | Site, scripts, tooling. |
| `docs` | `#c2e0c6` | Documentation. |
| `governance` | `#d93f0b` | Process, roles, policy. |

## Candidate issues

> Each line is a ready-to-open issue title + a one-line body seed. Final bodies
> should link the relevant doc (CONTRIBUTING, editorial-guidelines) and name the
> "done" condition.

### Content — coverage gaps (label: `content`, `good first issue`)
1. **Report a coverage gap you noticed** — a standing meta-issue inviting readers
   to name a Malaysia topic the site is missing. (Pin it.)
2. **Add an FAQ entry to an existing article** — pick any published article, add
   one sourced Q&A to its `faq`. Small, teaches the frontmatter + sourcing rule.
3. **Fix a dead or weak citation** — replace a secondary-source citation with the
   primary authority (the Act, the regulator's own page). (Cross-ref the
   dead-citation sweep notes.)
4. **Tier-3 direct-answer article** — write one 300–800-word answer to a common
   question from the dashboard's demand list, master language `en` or `ms`.

### Translation (label: `translation`, `help wanted`)
5. **Translate one short article into `<lang>`** — pick a tier-3 article and
   produce its `.<lang>.md` from the master, following the translation spec.
6. **Re-sync a stale translation** — find a translation flagged `stale` on the
   dashboard and bring it in line with its master; run `npm run translate:stamp`.
7. **Localise source citations in `<lang>`** — translate citation titles while
   keeping the original in parens, per the sources-localisation convention.

### Docs (label: `docs`, `good first issue`)
8. **Spot-check the docs against the schema** — find any remaining doc that
   references the retired `version` field and fix it to `revision`.
9. **Write the "contribute without git" quickstart** — a plain-language page for
   non-developers using "Edit on GitHub" / issue forms (P1 on-ramp).

### Code / tooling (label: `code`, `help wanted`)
10. **Add a CITATION render** — surface `CITATION.cff` as a "cite this" snippet on
    article pages or the About page.
11. **Contributors page** — generate a public contributors list from articles'
    `revisions[].contributor` history.
12. **Health-check a11y of a new component** — small, scoped accessibility fix
    from the a11y backlog.

## Opening procedure (when authorised)

1. Create the labels above (via `gh label create` or the GitHub UI).
2. Open the meta/standing issues first (#1, pin it).
3. Open 8–12 concrete issues, each with a filled body + the right labels.
4. Link the `good first issue` label from `README.md` and `ROADMAP.md` (ROADMAP
   already links it).
5. Announce in a Discussions welcome post (P1).
