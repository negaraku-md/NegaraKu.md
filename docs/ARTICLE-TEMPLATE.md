# Article authoring spec — negaraku.md

**Read this in full before writing. Every rule here is enforced by
`scripts/health/scan.py`, and a failing article blocks the build.**

Write the **English master** only (`knowledge/<category>/<slug>.md`, `lang: "en"`).
Translations are a separate pipeline.

---

## THE ONE RULE THAT MATTERS

**Your training data is out of date. Malaysian rates, thresholds, deadlines and
even entire statutes have changed since your cutoff.**

For every number, date, threshold, rate, fee, form name and statute section you
are about to write:

1. **Search for it** (WebSearch) and **fetch the official source** (WebFetch).
2. Official sources only: `ssm.com.my`, `hasil.gov.my`, `mysst.customs.gov.my`,
   `kwsp.gov.my`, `perkeso.gov.my`, `jtksm.mohr.gov.my`, `esd.imi.gov.my`,
   `hrdcorp.gov.my`, `mida.gov.my`, `bnm.gov.my`, `myipo.gov.my`, `masb.org.my`,
   `dosm.gov.my`, plus gazetted Acts and Practice Directives.
3. **A competitor page is never a source.** 3E, Mishu, Crowe, PwC, ajobthing,
   ClearTax and law-firm alerts are *leads* — they tell you what to go and verify.
   Recon informs; official sources cite.
4. **If you cannot verify a figure, do not write it.** Put the claim in
   `verificationNeeded` and describe the rule qualitatively instead.
   *A missing number is a gap. A wrong number is a lie that costs the reader money.*
5. **Read `docs/plan/VERIFIED-SOURCES.md` first, and check it again before you give up
   on a figure.** It lists documents already confirmed against primary sources, the
   URLs that extract cleanly, the sites that block WebFetch (and how to get past them),
   and a list of widely-repeated figures that are **known to be unverifiable** — do not
   publish those. Report anything new you verify, with its URL, in your final summary.

Recent real example: an article stated the audit exemption thresholds as
RM3m/RM3m/30 requiring all three tests. The actual directive (SSM PD 10/2024)
requires **at least two of three**, and those thresholds do not apply until FY2027 —
FY2026 sits at RM2m/RM2m/20. A reader would have skipped a statutory audit.
**That is the standard of care.** Half the ranking competitor pages carry the wrong
version; being correct is our entire differentiation.

---

## Frontmatter

```yaml
---
topicId: MY-<CAT>-NNNN        # CAT: BIZ TAX SEC ACC AUD EMP. Unique.
title: "Evergreen H1 — no year unless the figures genuinely change annually"
seoTitle: "Head term first, ≤60 chars"    # optional; omit if title ≤60
slug: "kebab-case-matching-filename"
category: "business"           # business|taxation|company-secretary|accounting|audit|employment
subcategory: ["cluster-key"]
summary: "One sentence, what this page answers."

tier: "2"                      # "1"|"2"|"3"|"4"  — no other value is valid
mode: "practical"              # ONLY "practical" or "narrative". Nothing else parses.
contentType: "guide"           # guide|faq|checklist|comparison|timeline|glossary
                               # |law|agency|place|company|industry|data|news
sensitivity: "none"            # none|race|religion|royalty|constitution
                               # |elections|security|health|legal-proceedings
                               #
                               # ⚠ Tag by RISK, not by subject matter. Anything other
                               # than "none" forces tier S and blocks publication until
                               # a named human reviewer signs off.
                               # An article explaining how debt recovery or arbitration
                               # works is NOT "legal-proceedings" — that value is for
                               # content touching actual or pending proceedings.
                               # Writing about the Constitution is not automatically
                               # "constitution" either; describing a live constitutional
                               # controversy is.

answer: "40–100 words. The direct answer, self-contained, extractable as a snippet."
keyTakeaways:
  - "5–7 scannable facts"
appliesTo: "Who this page is for."

faq:                           # MANDATORY for tier 1 and 2. 4–6 entries.
  - q: "A real question people search"
    a: "Complete answer in 2–4 sentences."

verificationNeeded:            # every figure you could NOT confirm officially
  - "Confirm X against <authority>"

obligations:                   # ONLY if this article describes a dated statutory duty
  - what: "Lodge the annual return"
    trigger: "anniversary"     # incorporation|financial-year-end|anniversary|change|ongoing
    withinDays: 30             # omit for ongoing
    due: "within 30 days of the incorporation anniversary"
    authority: "SSM"
    statute: "Companies Act 2016, s.68"
    consequence: "Fine and possible strike-off"

lang: "en"
masterLanguage: "en"
translationStatus: "master"

status: "draft"                # ALWAYS. Never "reviewed" or "published".
aiAssisted: true               # ALWAYS
reviewer: null                 # ALWAYS. Inventing a reviewer name is forbidden.
version: "0.1"
revisions:
  - version: "0.1"
    date: 2026-07-20
    change: "Initial draft."
    reviewer: null
sensitivity: "none"

updated: 2026-07-20
sources:                       # 3–8 for tier 1/2. Official only.
  - title: "Exact document title"
    url: "https://www.ssm.com.my/..."
    publisher: "SSM"
    date: "2024-12-16"

entity: "The main thing this page is about"
relations:
  - { rel: "administered-by", to: "ssm" }
  - { rel: "governs", to: "companies-act-2016" }
related: ["existing-slug-only"]   # MUST exist or the build fails. Safe: []
keywords: ["what people actually search"]
---
```

`relations` rel values: `administered-by | governs | requires | affects | part-of |
located-in | supersedes | explained-in | compares-with | related-to`. The `to` value
may be an article slug or a category id — anything else is reported as a content gap,
which is fine and useful.

---

## Tier depth — the badge must match

| Tier | Body words | Sources | FAQ |
| --- | --- | --- | --- |
| 1 | **2,000–4,000** | 3–12 | required |
| 2 | **1,000–2,000** | 3–8 | required |
| 3 | 300–800 | 1+ | optional |
| 4 | structured fields + short prose | 1+ | optional |

Word count is checked. A Tier 2 article at 600 words fails. **Do not pad to hit
the count** — if the topic genuinely only supports 600 words, set `tier: "3"` and say
so. An honest Tier 3 beats a fake Tier 2.

## Body structure

1. **Open with a hook, never a definition.** Not "A company secretary is…" but the
   tension, the cost, or the thing everyone gets wrong.
2. Question-shaped `##` headings — they are the AEO surface.
3. Alternate prose / table / list for rhythm. Short paragraphs, 2–3 lines.
4. Cite statute sections inline: "under s.236 of the Companies Act 2016".
5. **`## Common mistakes`** — required. Real errors, not filler.
6. **`## What's next`** — required as the closing heading. Never "Conclusion".

Where the article corrects a widespread error, **say so explicitly** — that is the
differentiation. "Most guides state X; the directive actually says Y."

## Voice

Direct, specific, Malaysian. Name the real authority, form and section. No
"it is important to note", no "in today's business landscape", no filler transitions.
Write for someone who has to act this week.

No commercial CTA — the layout adds a sponsor block automatically.

## Write files with LF line endings

On Windows, Python's `open(f, 'w')` silently rewrites `\n` as `\r\n`. CRLF in a content
file makes Astro's glob loader emit **"Duplicate id … found in <the same file>"** and the
entry can be dropped. Always pass `newline=''`:

```python
io.open(path, 'w', encoding='utf-8', newline='').write(text)
```

Check before finishing: `python -c "print(b'\r\n' in open('<file>','rb').read())"` → `False`.

## YAML traps that break the build

- **Never put an ASCII `"` inside a double-quoted string.** Rephrase, or use `“ ”`.
- Colons inside unquoted values break parsing — quote the whole value.
- `related:` pointing at a non-existent slug is a **build-breaking error**. When in
  doubt use `related: []` and express the link through `relations:` instead.
- Dates are bare `2026-07-20`, not quoted.

Validate before finishing:

```bash
python -c "import yaml;yaml.safe_load(open('knowledge/<cat>/<slug>.md',encoding='utf-8').read().split('---',2)[1])"
```
