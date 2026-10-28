# Roadmap

Where NegaraKu.md is going, and how you can shape it. This file is the
human-readable summary; the live, trackable backlog is in
[GitHub Issues](https://github.com/negaraku-md/NegaraKu.md/issues) and
[Discussions](https://github.com/negaraku-md/NegaraKu.md/discussions).

> **Status:** NegaraKu.md is live at [negaraku.md](https://negaraku.md) with a
> large cited corpus across 13 languages, an open dataset on
> [Hugging Face](https://huggingface.co/datasets/negaraku-md/negaraku-md), and an
> MCP server for AI clients. The next phase is less about building capability and
> more about **operating in the open** — turning a well-documented project into a
> well-run community one.

## How the roadmap works

- **Themes** below are durable directions, each roughly a quarter or two of work.
- **Concrete tasks** live as GitHub Issues, labelled by area
  (`content`, `translation`, `code`, `docs`, `governance`) and by on-ramp
  (`good first issue`, `help wanted`).
- **Anyone can propose** a direction in
  [Discussions](https://github.com/negaraku-md/NegaraKu.md/discussions). The
  steward folds accepted proposals into the themes here and records why. See
  [GOVERNANCE.md](GOVERNANCE.md) for how direction is decided.

Dates are intentionally omitted — this is a volunteer-paced project. Priority
order within a phase is roughly top-to-bottom.

---

## Now — operate in the open

Making the project legible and joinable from the outside.

- **Publish the governance model** — [GOVERNANCE.md](GOVERNANCE.md) consolidating
  roles, the review gate, and the path to becoming a reviewer. ✅
- **Move the backlog into public Issues** — convert the internal content and
  engineering backlog (held in `docs/` and planning notes) into labelled,
  discoverable issues, so contributors can see what is actually open.
- **Seed `good first issue`s** — a standing set of small, well-scoped content,
  translation, and citation tasks that a newcomer can finish in one sitting.
- **Keep the front door current** — [CONTRIBUTING.md](CONTRIBUTING.md) and the
  schema docs in step with the code (the `version` → `revision` migration is
  done; docs now match).
- **A contribution on-ramp for non-developers** — the people who know Malaysia
  best are not all git users. Plain-language "contribute without the command
  line" guidance, wired to the web issue forms.

## Next — grow the commons

- **Grow the reviewer and maintainer set.** The single-steward bus factor is the
  project's biggest structural risk. Recruit scoped reviewers (tax, law,
  accounting, the regional and cultural categories) per the criteria in
  [`scripts/health/reviewers.txt`](scripts/health/reviewers.txt), and add a second
  maintainer.
- **Seed Discussions** — a welcome thread, a "propose a topic" category, and Q&A,
  so coverage gaps and questions have a home that is not a bug tracker.
- **Make the work citable** — [CITATION.cff](CITATION.cff) plus a public
  "how to cite / how to reuse" page, pairing with the CC BY-SA licence and the
  Hugging Face dataset. ✅ (CITATION.cff)
- **Contributor recognition** — surface translators and reviewers (the data is
  already in each article's `revisions[]` history) on a public Contributors page.
- **A visible release heartbeat** — a periodic tagged release or a monthly
  "what shipped" note from the existing changelog, so the project reads as alive.

## Later — deepen coverage and reach

- **Content expansion.** A researched plan for the next tranche of articles —
  new categories (companies, industries, environment, tourism, energy, sports,
  public safety, international relations, food & lifestyle, and more) and gap-fills
  in existing ones — is mapped in
  [docs/CONTENT-EXPANSION-ROADMAP.md](docs/CONTENT-EXPANSION-ROADMAP.md). Every
  article runs through the mandatory editorial pipeline; sensitive topics ship as
  unpublished drafts pending human review.
- **Distribution beyond search.** Broaden discovery (Wikipedia/Wikidata presence,
  the dataset's reach, syndication) so the knowledge compounds.
- **Keep translations fresh.** The 13-language corpus needs ongoing re-sync as
  masters change; translation is the single largest standing contribution need —
  see the dashboard's Outstanding column.

---

## What NOT to expect

To keep the project honest about scope:

- **No un-reviewed live content.** Openness never bypasses the editorial gate
  ([GOVERNANCE.md](GOVERNANCE.md)). Sensitive subjects are always human-reviewed.
- **No opinion or advocacy content.** NegaraKu describes; it does not campaign.
- **No unsourced claims.** If it cannot be cited to a primary authority, it does
  not ship.

## Want to help?

Start with [CONTRIBUTING.md](CONTRIBUTING.md), browse the
[`good first issue`](https://github.com/negaraku-md/NegaraKu.md/labels/good%20first%20issue)
label, or open a thread in
[Discussions](https://github.com/negaraku-md/NegaraKu.md/discussions). Reporting a
coverage gap is a first-class contribution — you do not have to write the article
to flag that it is missing.
