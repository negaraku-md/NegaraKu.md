# Critical-correction safeguard

When a consequential fact is corrected on a master article, its **translations are
momentarily wrong** until they catch up. `translation-sync` flags them `stale`, but
the old (possibly harmful) figure is still being served in that language — and in
search, raw Markdown, the AI outputs and the dataset. This safeguard makes sure a
correction *stays visible wherever a reader or an AI might meet the old guidance*.

## Two levels

Set **`staleSafeguard`** on the **master** (inherited by every translation):

| Value | When | What a stale translation does |
|---|---|---|
| `banner` (default) | Most corrections | Serves the page with a prominent notice linking to the corrected language. The reader still sees the content but is warned. |
| `withhold` | The old instruction could **cause harm** if acted on (how-to / rules / emergency numbers / money) | The old content is **not served**. The page shows only the notice; the stale language is removed from search, raw Markdown, `llms.txt`/MCP and the dataset until re-translated. |

`withhold` is deliberately page/language-level, not claim-level — claim-level
substitution waits until the content model can reliably identify the same claim
across languages.

## What each surface does when `withhold` is active (stale translation)

| Surface | Behaviour | Where |
|---|---|---|
| Article page | Shows only the safeguard notice + link to the corrected language; the body is not rendered; `data-pagefind-ignore` on `.main` | `src/components/ArticleView.astro` |
| Pagefind search | Page excluded from the index | the `data-pagefind-ignore` above |
| Raw Markdown (`/…/slug.md`) | Returns a short notice, not the body | `src/lib/raw.ts` (`articleToMarkdown`) |
| `llms.txt` index | Not listed | `src/lib/llms.ts` (`buildLlmsIndex`) |
| `llms-full.txt` / MCP | Emits the notice, not the body | `articleToMarkdown`, reused by `buildLlmsFull` |
| HF / Kaggle dataset | Row excluded | `scripts/export-hf-dataset.mjs` (Kaggle mirrors it) |

The helpers are `isStaleTranslation()` / `isWithheld()` in `src/lib/content.ts`.

## The correction workflow

1. **Fix the master.** Edit the authoritative language file. `predev`/`prebuild`'s
   `translation-sync` run flips every out-of-date translation to `stale` automatically.
2. **Judge the risk.** If acting on the old text could harm a reader, set
   `staleSafeguard: "withhold"` on the master (and its translations — it's shared).
   Otherwise leave the default `banner`.
3. **Deploy.** The stale languages now show the banner (or are withheld); the corrected
   language serves the fix. All on-site surfaces regenerate from the content SSOT.
4. **Re-translate.** Update each stale language, then `npm run translate:stamp` marks
   them `in-sync`. The banner/withhold **clears automatically** — nothing to undo.
5. **Datasets** — see the release step below.

## Dataset release step (external mirrors)

The on-site dataset (`/api`) regenerates on every deploy, but **Hugging Face and Kaggle
keep whatever revision was last pushed** until re-published. After a consequential
correction:

1. Re-run the **"Publish Hugging Face dataset"** and **"Publish Kaggle dataset"** Actions
   (or `node scripts/export-hf-dataset.mjs && node scripts/export-kaggle-dataset.mjs`
   then the publish step). Withheld stale rows are excluded by the export.
2. In the dataset card / release notes, **record the new revision and name the superseded
   one** (the HF commit the correction supersedes), so downstream users can tell which
   version is safe to fetch.
3. Note the new HF commit SHA in the correction's tracking issue.

## Rehearsing it (acceptance test)

To rehearse without a real defect, stage one deliberately-stale translation:

1. Pick a low-traffic article; set `staleSafeguard: "withhold"` on its master.
2. Make one translation stale: change a hashed field on the master **without**
   re-stamping that language (or set its `translationStatus: stale` by hand for the test).
3. Deploy, then verify, for the stale language only:
   - the **page** shows the notice, not the content;
   - **Pagefind** does not return it;
   - the **raw `.md`** returns the notice;
   - **`llms.txt`** does not list it and **`llms-full.txt`** shows the notice;
   - the **dataset** export excludes the row (check `dataset/data/<lang>.jsonl`).
4. Check the **corrected master** and an **unaffected language** still serve normally.
5. `npm run translate:stamp` the language and confirm the safeguard **clears** everywhere.

Keep the staged change out of production once the rehearsal passes.
