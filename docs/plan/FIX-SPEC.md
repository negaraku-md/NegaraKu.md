# Fixing master defects — rules

The defects are in `docs/plan/MASTER-DEFECTS.md`, grouped by batch/category. Your job is
to fix the ones in your assigned category, in the **English master**, and then update the
matching `.zh.md` so the pair stays in sync.

## The four rules

**1. Only touch listed defects.** Do not rewrite, restructure, or "improve" prose. A fix
is the smallest edit that removes the defect. If a defect names one wrong number, change
that number and nothing else.

**2. A contradiction is resolved by evidence, not by preference.** When two parts of an
article disagree on a fact (a date, a count, a citation):
   - If `docs/plan/VERIFIED-SOURCES.md` settles it, use that.
   - Otherwise verify against the **primary source** — `curl -k` or WebFetch the gazette,
     the Act, the agency page. The AGC gazette API and the extraction notes in
     VERIFIED-SOURCES tell you how.
   - If you **cannot** verify it, do NOT pick a side. Make the article internally
     consistent by stating the uncertainty once, and move the specific claim into
     `verificationNeeded`. A defect turned into an honest gap is fixed. A defect turned
     into a confident guess is worse than the defect.

**3. Do NOT "fix" a deliberate hedge.** Several logged items are the article *correctly*
reporting a real-world contradiction, or preserving genuine ambiguity in the law. These
are marked in the log ("this is the master reporting a government error — do not fix",
"the hedge is deliberate"). Leave them. If a "defect" is really the article being honest
about an unresolved external conflict, note that and move on.

**4. Keep the pair in sync.** After editing a master, make the *same* change in its
`.zh.md`. You are editing the one sentence/number/cell that changed, not retranslating.
Match the Chinese to the corrected English. Preserve the existing house terminology in
that file (read the surrounding lines).

## After each master edit

Bump `version` (e.g. 0.2 → 0.3) and add one `revisions` entry dated 2026-07-21 describing
the fix. Copy that same `revisions[].change` verbatim into the `.zh.md` (revision notes
stay English per the translation spec).

## Do not

- Do not run `sync.mjs`, `translation-sync.mjs`, `scan.py`, or `npm run build` — the
  coordinator runs them once at the end. Many agents are editing concurrently.
- Do not edit files outside your assigned category.
- Do not change `sources[]` unless a defect is specifically about a wrong/missing source;
  adding a missing source that a defect names is correct and expected.

## Report back

- each defect: fixed / verified-and-consistent / moved-to-verificationNeeded / left-as-hedge
- for anything you verified against a primary source: the URL and what it said
- anything you could not resolve and why
