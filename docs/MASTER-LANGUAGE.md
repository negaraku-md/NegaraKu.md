# Master-language selection — which language an article is authored in

Malaysia is a tri-source society: authoritative knowledge originates in **Malay
(ms)**, **English (en)** or **Chinese (zh)** depending on the topic. NegaraKu.md
therefore does **not** assume a single site master. Each article declares its own
`masterLanguage`, chosen by the rule below, and the other two languages are
translations of it.

This supersedes the old "English is always the master" assumption in
`ARTICLE-TEMPLATE.md` and `TRANSLATION-SPEC.md`.

## The rule — decide by authoritative origin, not search volume

During the mandatory **step-1 web recon** (see the article standard), answer one
extra question before writing:

> **In which language does this topic's authoritative source of truth originate?**

That language is the master. Concretely:

- **The primary/authoritative source wins.** The authoritative text of an Act, the
  regulator's original publication, the originating community's own institutions
  and media — whichever language *that* is in, is the master.
- **Tie-break → the originating authority**, not the language with the most
  secondary coverage.

### The trap — never decide by how many results a language has

The internet is English-biased. "Which language has more pages" pushes almost
everything to English and defeats the purpose. A Malay cultural practice will have
more English tourist-blog pages than Malay ones — Malay is still its master. Judge
**origin**, not **coverage**.

### Record the evidence

Like every other claim, the choice is traceable: note in the content brief which
source(s) and in what language drove the decision. `masterLanguage` must reflect a
*researched* decision, not a default.

## Worked examples

| Topic | Authoritative origin | Master |
| --- | --- | --- |
| Federal Constitution | Malay is the authoritative text (Art. 152 / 160B) | **ms** |
| Rukun Negara, Jalur Gemilang, national history | Malay-language national record | **ms** |
| Companies Act 2016 practice, LHDN e-Invoicing, MFRS | English working texts of the professions | **en** |
| SJKC / vernacular education, Dong Zong, clan associations | Chinese-language originating community | **zh** |

## Consequences for the file layout

The master is the **base file** (`<slug>.md`, its `lang` == `masterLanguage`); the
other two languages are `<slug>.<lang>.md` translations. Reassigning a master is
therefore **not a frontmatter flip** — the master-language text must actually exist
as the base file. Changing `masterLanguage` without authoring that language's text
makes the field lie (the same honesty rule as the trust badge).

So master reassignment is done **together with** producing the master-language
content, per article — never as a bulk field edit.

## Applies-to

- **Go-forward:** every new article runs this determination in step 1.
- **Backlog:** the existing corpus was authored 100% in English and defaulted to
  `masterLanguage: en`. Each topic is re-evaluated under this rule; where the true
  master is ms or zh, that version is authored and the designation moves with it.
