# Translation spec — English master → Chinese (zh)

Read this before translating anything. Then read `docs/plan/GLOSSARY-ZH.md` and add to it.

## THE ONE RULE THAT MATTERS

**You are translating, not authoring.** Every figure, date, citation and threshold in
the master is there because somebody verified it against a primary source. If a sentence
looks wrong to you, **translate it faithfully anyway** and note it in your report. Do not
correct, improve, update, shorten or expand. A translator who fixes things silently
destroys the audit trail that makes this corpus worth anything.

If the English is ambiguous, translate the ambiguity. Do not resolve it.

## Variant

**Simplified Chinese (zh-hans), Malaysian usage.** Not Taiwanese, not mainland-standard
where Malaysian Chinese differs. This corpus is for readers in Malaysia: use the terms
Malaysian Chinese-language media actually use for local institutions.

## Never translate these

Leave in the original script, exactly as written:

- **Statute short titles** — `Companies Act 2016`, `Income Tax Act 1967`, `Akta 777`
- **Gazette citations** — `P.U.(A) 445/2017`, `P.U.(B) 511/2024`, `J.P.U. 15`
- **Section and paragraph references** — `s.7(f)`, `para 2B(d)`, `reg 13`, `item 94`
- **Agency acronyms** — SSM, LHDN, RMCD, MDEC, MIDA, MITI, DOSM, EPF, SOCSO, PERKESO, BNM, SC, MBJB, MBPP
- **Form and scheme names** — `Form E`, `MD Status`, `LMW`, `NTAX`
- **URLs, file names, email addresses**
- **Company and place names** in their standard local form — `Sdn Bhd`, `Bursa Malaysia`, `Bayan Lepas`, `Cyberjaya`

## First-use pattern

On first appearance in an article, give the Chinese term followed by the original in
brackets; afterwards use the Chinese term or the acronym alone.

> 公司委员会（SSM）规定……其后：SSM 规定……

Never invent a Chinese name for a body that has no established one. If Malaysian Chinese
media has no settled term, keep the English and gloss the *meaning* once in a clause.

## Numbers, money, dates

Unchanged. `RM2,236` stays `RM2,236`. `45.40 sen/kWh` stays. Percentages stay.
Dates render naturally in Chinese (`2024年12月23日`) but **must not shift**.

Do not convert currencies. Do not round. Do not "translate" 万/亿 groupings over a
figure that was written in thousands — `RM110,031.1m` stays as written.

## Frontmatter

| Field | Action |
| --- | --- |
| `title`, `summary`, `answer`, `keyTakeaways`, `faq`, `verificationNeeded` | translate |
| `slug`, `topicId`, `category`, `subcategory`, `tier`, `contentType`, `related`, `relations` | **copy unchanged** |
| `sources[].title` | **copy unchanged** — a citation is an identifier, not prose |
| `sources[].publisher`, `url`, `date` | copy unchanged |
| `obligations[].statute` | copy unchanged; `what` may be translated |
| `revisions[].change` | copy unchanged (the English audit trail stays English) |
| `lang` | `"zh"` |
| `masterLanguage` | `"en"` |
| `translationStatus` | `"pending"` — the sync script stamps it |
| `sourceContentHash` | `null` — the sync script fills it |
| `status` | `"draft"` |
| `reviewer` | `null` |
| `aiAssisted` | `true` |

Everything else copies across unchanged.

## Rulings from the pilot batch — follow these exactly

Six cases every translator hits in their first article, settled once so forty
translators do not settle them forty ways.

**1. Internal links.** Masters link to `/en/...`. **Rewrite to `/zh/...`.** This is safe
even when the target has no translation yet: `articlesForLocale` falls back to the
master, so the reader lands on the English page rather than a 404. Leaving `/en/`
strands a Chinese reader in English permanently.

**2. Schedules and Parts** are references, not prose: `Third Schedule`, `Schedule 1
Part I`, `First Schedule item 10` stay English, glossed once on first use.

**3. Frontmatter fields not in the table below.** `seoTitle`, `socialTitle` and
`appliesTo` are **reader-facing** — translate them. `keywords` and `entity` copy
unchanged. Do not rely on "everything else copies unchanged" for these three; an
English `seoTitle` renders on the Chinese page and in search results.

**4. `obligations[]` sub-fields.** Translate `what`. Copy `due`, `trigger`, `authority`
and `consequence` unchanged — the last is a citation-dense penalty recital.

**5. Percentages and money keep their source form.** `20%` never 巴仙. `RM2.5 million`
never 250万. Do not regroup into 万/亿.

**6. Quote characters.** A raw `"` inside a frontmatter string breaks the YAML parse.
Use `「」` inside any quoted frontmatter value.

## Structure

The translation must have the **same heading count, same heading levels, same table
columns, same list items, same number of FAQ entries** as the master. The health scanner
compares structure. If you cannot keep a table readable in Chinese, keep the table and
translate the cells — do not convert it to prose.

Preserve all markdown exactly: bold, links, code spans, blockquotes.

## Files

Write to `knowledge/<category>/<slug>.zh.md` beside the English master.
**LF line endings only.** UTF-8, no BOM.

## After translating

Run from the repo root:

```bash
node scripts/sync.mjs
node scripts/translation-sync.mjs --stamp
python scripts/health/scan.py
```

`--stamp` records which version of the English you translated. Without it the
translation cannot be detected as stale when the master changes.

## Report back

- files written, with word counts
- **any sentence in the master you believe is wrong** — do not fix it, report it
- terms you had to coin, so they go in the glossary
- anything you left in English because no settled Chinese term exists
