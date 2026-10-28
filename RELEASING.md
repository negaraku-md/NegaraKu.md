# Releasing

NegaraKu.md deploys continuously — every merge to `main` that passes the strict
health check ships to [negaraku.md](https://negaraku.md) via GitHub Pages. So a
"release" here is **not** how content goes live; it is a periodic, human-readable
marker that gives the project a visible heartbeat and a citable version.

## Cadence

- **Rolling deploys:** automatic on every green merge to `main`. Nothing to do.
- **Tagged releases:** cut a lightweight release roughly **monthly**, or when a
  meaningful milestone lands (a new language, a major content tranche, a
  structural feature). Low ceremony — the point is visibility, not process.

## What a release records

A short, reader-facing summary of what shipped since the last tag:

- New or significantly expanded content (categories, notable articles).
- New languages or large translation refreshes.
- Site features and notable fixes.
- Governance / process changes.

The authoritative per-article history already lives in each article's
`revisions[]` and on the site's [changelog](https://negaraku.md/changelog); the
release note is the human digest, not a replacement for it.

## How to cut a release

1. Make sure `main` is green (the latest Pages deploy succeeded).
2. Pick the next version. We use loose [SemVer](https://semver.org): bump the
   minor for a milestone (new language, big feature), the patch for routine
   months. `package.json` holds the current baseline version.
3. Draft notes — skim `git log <last-tag>..HEAD` and the changelog, group by the
   buckets above, and keep it to what a reader would care about.
4. Create the release (tag on the current `main` HEAD):

   ```bash
   gh release create vX.Y.Z --repo negaraku-md/NegaraKu.md \
     --title "vX.Y.Z — <short milestone name>" --notes-file <notes.md>
   ```

5. Announce notable releases in
   [Discussions → Announcements](https://github.com/negaraku-md/NegaraKu.md/discussions/categories/announcements).

## Versioning note

Do not confuse the project release version with an **article's** `revision` — the
integer, per-article published-version counter maintained in `revisions[]`. They
are unrelated. The old string `version` field was retired; see
[CONTRIBUTING.md](CONTRIBUTING.md).
