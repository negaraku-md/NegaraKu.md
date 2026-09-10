# Master defects found during translation

Translators are told to translate faithfully and report, never to fix. This is where
their reports land. Fix these in the **English master**, then let `translation-sync.mjs`
mark the affected translations stale and re-sync them.

Do not fix mid-wave — editing a master while agents are translating creates churn.
Fix at wave end, in one pass.

---

## Batch 2 — accounting (4 files)

**1. `accounting/sdn-bhd-bookkeeping.md` — arithmetic inverted. MATERIAL.**
> "a bookkeeper who posts quarterly is producing a company that is out of compliance
> nine weeks out of every thirteen"

A 60-day rule inside a 13-week quarter gives ~8.6 compliant weeks and ~4.4 non-compliant.
The figures are transposed — the sentence claims the inverse of what the rule produces.

**2. `accounting/switching-mpers-to-mfrs.md` — sentence negates itself.**
> "completing on 2 January costs a full year of MFRS reporting that completing on
> 30 December would also have cost, but completing after the year end would not"

For a 31 December year end, **2 January *is* after the year end**, so the final clause
contradicts the first.

**3. `accounting/nsrf-sustainability-reporting.md` — unsupported figure.**
Common mistakes cites SSM's proposed tiers as "RM15 million to RM2 billion". The body
establishes only that the SSM tiers *begin* at RM15m revenue or 100 employees. No
RM2 billion ceiling appears anywhere — the bullet may be reusing the NSRF number it is
warning readers not to confuse.

**4. `accounting/records-outside-malaysia.md` — non-parallel table cell.**
Row 3 ("Foreign branch records held abroad only") gives the ITA column as "s.82(8)
applies to Malaysian business records" — a scope observation where every other row gives
a verdict (Contrary / Consistent). The reader cannot tell whether the arrangement complies.

**5. `accounting/records-outside-malaysia.md` — dangling reference.**
Common mistakes says "the obligation runs seven years past the transaction", but no
seven-year retention period is established in this article. It lives in
`sdn-bhd-bookkeeping.md`.

**6. `accounting/switching-mpers-to-mfrs.md` — terminology drift.**
Body and FAQ 1 say "jointly controlled entity" (citing MFRS 11); `answer` and
keyTakeaway 1 say "joint venture". The two vocabularies belong to different standards.

**7. `accounting/switching-mpers-to-mfrs.md` — already in verificationNeeded.**
"the June 2024 amendments made when MFRS 18 was issued" — IFRS 18 was issued April 2024;
MASB's local issue month needs confirming. No action, already flagged.

---

## Corpus-wide — leaked tool-call scaffolding (FIXED 21 Jul 2026)

Batch 14 refused to reproduce a stray `</content>` at the end of
`who-is-a-beneficial-owner.md`. Checking the corpus found **8 files** carrying it —
6 masters and 2 translations that had already copied it through. One file
(`beneficial-ownership.md`) also carried `</invoke>`.

These were closing tags from the original writer agents' own tool calls falling
through into the article body. Always at end of file, never inside prose.

**Stripped from all 8.** Script kept at `scratchpad/striptags.py`.

Worth noting how this was found: not by the health scan, not by the build, not by
any check we designed. A translator hit a line that was not prose and declined to
translate it. The build renders `</content>` as nothing, so it was invisible on the
page and would have shipped in the Markdown that `llms.txt` and the raw `.md`
endpoint serve to AI clients — exactly the readers most likely to choke on it.

**Consider a scan.py check** for stray HTML-ish tags in body text.

---

## Batch 14 — company-secretary (4 files)

**1. `company-secretary/written-resolutions.md` — cite may not carry.**
The "What cannot be passed" section justifies the s.297(2) exclusions with
"Section 207 gives a director of a **public** company the right to make oral or
written representations", but the surrounding argument is about why a **private**
company must convene a meeting to remove a director. The cited right does not attach
to the company type under discussion. Either s.207 is the wrong cite or the sentence
needs a bridging clause.

**2. `company-secretary/who-is-a-beneficial-owner.md` — count mismatch.**
`answer` asserts "SSM sets six criteria" but enumerates five clauses (shares and
voting shares merged). A reader counting along comes up short.

**3. `company-secretary/who-is-a-beneficial-owner.md` — unsourced consequential claim.**
Shape 3 asserts a trust company registered under the Trust Companies Act 1949 "is
itself a public company subject to the full beneficial ownership framework", with no
source pin, unlike the rest of the article. Needs a cite.

**4. `company-secretary/statutory-registers.md` — the article's own warning, violated.**
The register-of-charges row gives the s.352(1) SSM *lodgement* deadline in the
"Update rule" column, rather than an update rule for the s.362(3) internal register.
This is exactly the keeping-versus-notifying conflation the article's opening warns
against; every other row keeps them apart.

**5. `company-secretary/unaudited-financial-statements.md` — uncited authority.**
`obligations[].consequence` cites Practice Directive 1/2017, which does not appear
in `sources[]`.

**6. `company-secretary/who-is-a-beneficial-owner.md`** — curly quotes where the rest
of the corpus uses straight quotes. Cosmetic.

---

## Corpus-wide — bare internal links (16 files, 53 links)

Found by batch 3. `audit-exemption.md` links `/audit/audit-exemption-thresholds`
where every other master writes `/en/...`. A bare path resolves to the **`ms`
default route**, so an English reader clicking it leaves the English locale.
Astro resolves it happily — nothing errors, the reader just ends up in the wrong
language with the nav switched under them.

Affected: `audit/audit-exemption` (4) · `economy/gdp-overview` (1) ·
`economy/palm-oil-sector` (1) · `glossary/annual-return` (2) · `glossary/e-invoice` (2) ·
`glossary/epf` (1) · `glossary/paid-up-capital` (2) · `glossary/sdn-bhd` (2) ·
`glossary/sst` (1) · `government/lhdn` (5) · `government/parliament` (1) ·
`government/ssm` (6) · `law/companies-act-2016` (8) · `law/employment-act-1955` (8) ·
`law/federal-constitution` (1) · `law/income-tax-act-1967` (8)

All are older seed content, which is why the pattern is clustered. **Fix at wave end**
— rewrite to `/en/`. Translations are unaffected: translators normalise every internal
link to `/zh/` regardless of what the master used.

**Consider a scan.py check** for internal links without a locale prefix.

---

## Batch 3 — audit (15 files)

**1. `audit/audit-exemption-thresholds.md` — revenue vs turnover.**
Prose and FAQ say "annual revenue"; the threshold table row says "Turnover".
PD 10/2024 has one test. Pick one word.

**2. `audit/who-cannot-claim-audit-exemption.md`, `audit/audit-adjustments-tax.md`** —
no `keyTakeaways` or `appliesTo` where the rest of the Tier 3 audit cluster has both.
Possible authoring oversight.

**Glossary hazard flagged by this batch, now recorded:** three terms that must never
collapse — `related party` (MFRS 124) → 关联方 · `related company` (tax) → 关联公司 ·
`related corporation` (CA 2016 s.7) → 关联法团. All three appear in this batch,
sometimes on one page.

---

## Batch 4 — business (11 files)

**1. `business/bayan-lepas-free-industrial-zone.md` — count contradicts itself.**
"Which instrument declares Bayan Lepas?" opens "Three, and they are recent", then
describes P.U.(A) 356/1974 as the original declaration — a fourth instrument that is
explicitly not recent.

**2. `business/business-costs-by-region.md` — statute year conflict. MATERIAL.**
Cites "Employment Insurance System Act **2017**". The glossary and `epf-socso-guide`
use **2018**. One is wrong.

**3. `business/bayan-lepas-free-industrial-zone.md` — unverifiable ranking.**
"ranking third behind Kedah and Johor" sits beside Penang RM22,375.4m of a national
RM131,297.1m — the figures given do not let a reader check the ranking, and Kedah
ahead of Penang on approved manufacturing investment is surprising enough to re-verify.

**4. `business/bayan-lepas-free-industrial-zone.md`** — `LMW` used bare in the sales
tax section and in `keyTakeaways` before the acronym is ever expanded in the body.

**5. `business/business-costs-by-region.md`** — `verificationNeeded` says a Sabah
adjustment was "reported for 1 February 2026"; the body says "reported for 2026".

**6. `business/business-costs-by-region.md` + `choosing-a-business-location-malaysia.md`** —
the same RM200/year Selangor fee is called a *home business* licence in one FAQ, a
plain *business licence* in a body section, and a home-business fee in a third file.

**7. `business/business-structures-malaysia.md`** — "RM1m/RM1m/10 employees for 2025 …
on a two of three test across the current and past two financial years" can be read as
cumulative or per-year.

**8. `business/choosing-a-business-location-malaysia.md`** — cites Sarawak "Local
Authorities Ordinance **1969**"; `business-licence-malaysia.md` cites **1996 (Cap. 20)**.
It is inside a quote from the national guideline, so the error may be upstream.

**9. `business/branch-vs-subsidiary-malaysia.md`** — `sources[]` dates the RE/RO
guideline 2023-03-24 but the URL filename is `RERO-GUIDELINE_17.05.23.pdf`.

---

## Batch 1 — accounting (15 files)

**1. `accounting/financial-statement-pack.md` — count is the outlier. MATERIAL.**
"Paragraph 18 adds the **sixth** item", but the pack is five documents, exemption
removes one, the certificate makes five. The article's own next paragraph says "four
statutory documents plus a certificate", and both `keyTakeaways` and Common mistakes
say five. "Sixth" is wrong.

**2. `accounting/mbrs-2-filing-guide.md` — both clocks cited to one section.**
EA5A (extension for **circulation**) and EA5B (extension for **lodgement**) are both
cited to `s.259(2)`, in an article emphatic that circulation is s.258 and lodgement is
s.259. Either EA5A's cite is wrong or s.259(2) is genuinely the single extension power
— not resolvable from the article.

**3. `accounting/mbrs-2-filing-guide.md`** — states mTool 2.2 is current, then says SSM
guidance "allows you to open an mTool 1.0 zip in **mTool 2.1**".

**4. `accounting/bookkeeping-in-house-vs-outsourced.md`** — "EPF and SOCSO are computed
from statutory wage-band tables … below RM20,000". RM20,000 is EPF's Third Schedule
ceiling; SOCSO's table tops out at RM6,000, stated two rows above in the same article.

**5. `accounting/financial-reporting-deadlines.md` vs `financial-statement-pack.md`** —
PD 10/2024 para 15 vs para 17 cited for what reads as the same requirement. Probably
correct as drafted, but the two pages contradict each other read in isolation.

**6. `accounting/accounting-standards-index.md`** — MFRS 139 listed with no superseding
standard and no note, while its own `verificationNeeded` flags exactly that.

---

## Batch 7 — business (11 files)

**1. `business/infrastructure-connectivity-by-region.md` — FAQ contradicts the body. MATERIAL.**
The FAQ "Which region has the worst connectivity?" names Sabah worst on fixed broadband
at 27.0 per 100 premises. The body table and the paragraph under it say **Perlis** is
"the country's worst fixed broadband at 25.2", and Kelantan (26.9) is also below Sabah.
`keyTakeaways` gives the range as "64.7 to 25.2", implicitly making Perlis the floor.
The FAQ is the outlier and appears simply wrong.

**2. `business/js-sez-guide.md` — thresholds presented as universal are scheme-specific. MATERIAL.**
Intro: "The threshold for the 15-year version is capital investment above RM1 billion…
The 10-year version needs RM500 million." FAQ: "Capital investment thresholds start at
RM500 million excluding land." But the body's own breakdown shows the **Global Services
Hub route (Flagship A/B) has no capex threshold at all** — its Appendix A conditions are
opex, turnover and headcount. Those thresholds belong to the Manufacturing scheme
(Flagship E/F) only. The intro and FAQ over-generalise.

**3. `business/iskandar-malaysia-guide.md` — orphan threshold.**
"What's next" tells the reader to check whether their activity "clears the RM500 million
threshold". No RM500m figure appears anywhere else in the article, and per defect 2 it
does not apply to every JS-SEZ route.

**4. `business/iskandar-malaysia-guide.md` — flagship count conflicts with siblings.**
`verificationNeeded` says "IRDA and MIDA now publish a seven-flagship scheme", while
`js-sez-guide.md` and `forest-city-sfz.md` both state nine flagship zones with MIDA
covering seven (A–G). Likely reconcilable (IRDA regional flagships ≠ JS-SEZ flagships)
but as written it reads as a conflict.

**5. `business/labuan-company-vs-sdn-bhd.md` — asserts as operative what it flags as unverified. MATERIAL.**
Body states flatly that Act A1756 changed s.47(1)(a) and inserted Part Va ("The last
ringgit restriction on share capital is gone", "Part Va now requires a beneficial
ownership register"), while `verificationNeeded` says the **commencement date is
unconfirmed** — the Act "carries a short title with no separate commencement provision".
If commencement is unconfirmed, the present-tense assertions outrun the evidence.

**6. `business/js-sez-guide.md`** — "principle approval letter" ×4, almost certainly
MIDA's own misspelling of *principal* carried over from the guideline. Consider `[sic]`.

---

## Batch 17 — employment (7 files)

**1. `employment/working-hours-overtime-malaysia.md` — worked example describes an unlawful schedule. MATERIAL.**
The example sets up "a monthly-rated employee on RM3,000, working 8 normal hours a day,
**six days a week**" — 48 hours, contradicting the **45-hour statutory week** the same
article establishes two sections earlier. The arithmetic that follows (÷26, ÷8) is
unaffected and checks out; the setup is the problem.

**2. Cross-article contradiction — First Schedule para 1A vs para 2. MATERIAL.**
`termination-of-employment-malaysia.md` and `termination-benefits-malaysia.md` both
carry a `verificationNeeded` saying the construction is **unresolved**, while
`working-hours-overtime-malaysia.md` states the para 2 carve-out as **settled**
("First Schedule paragraph 2 keeps them alive *irrespective of wages*"). Three articles,
same question, two opposite postures. Only visible because one agent held all three.

**3. `employment/worker-accommodation-act-446.md` — load-bearing instrument uncited.**
The body relies on **P.U.(A) 249/2020** for the original RM100 rent cap, but 249/2020 is
absent from `sources[]`; only the 2026 amendment (P.U.(A) 49/2026) is cited.

**4. `employment/workplace-sexual-harassment-malaysia.md` — one amendment named two ways.**
`keyTakeaways` attributes the s.81G deletion to "Act A1651"; the FAQ attributes it to
"the Employment (Amendment) Act 2022". Same instrument, never linked, reads as two.

**5. `employment/work-passes-malaysia.md`** — the EP III dependants cell reads "Yes, if
issued on or after 1 June 2026", the only conditional right in the table, with nothing
in the body explaining the condition or the position of earlier EP III holders.

**Also noted:** this batch found body links written as **bare relative slugs** with no
leading slash (`employment-act-coverage`, `employment-act-1955-guide`) — a third link
form alongside `/en/…` and the bare-absolute `/audit/…` cluster. Add to the wave-end
link sweep.

---

## Corpus-wide — internal link shapes (FIXED 21 Jul 2026)

Three translators independently flagged different broken link forms. Auditing all 480
internal links found **only 324 were correct**:

| Shape | Count | Effect |
| --- | --- | --- |
| `/en/<cat>/<slug>` | 324 | correct |
| `/en/knowledge/<cat>/<slug>` | 60 | **hard 404** — verified against the running site |
| `/<cat>/<slug>` | 59 | resolves, but to the `ms` route — reader silently leaves their locale |
| `<slug>` | 38 | bare relative, resolves against the current URL |

The `/knowledge/` form is the serious one: `/en/knowledge/business/doing-business-selangor`
returns **404** while `/en/business/doing-business-selangor` returns **200**. It leaked in
because `knowledge/` is the source directory but not part of any route.

**All 482 links normalised** to `/<locale>/<category>/<slug>`, locale taken from the file
(`.zh.md` → `/zh/`, otherwise `/en/`). Bare relative slugs resolved by looking up which
category owns the slug. Script: `scratchpad/fixlinkshapes.py` (idempotent — safe to re-run
at wave end for files written after this pass).

Note none of this was caught by `scan.py`, which checks `related` and `relations`
frontmatter but never looks at links in the body prose. **Add a body-link check.**

---

## Batch 6 — business (11 files)

**1. Two masters directly contradict each other on the ECER window. MATERIAL.**
- `ecer-guide.md`: four amendment orders of 22 April 2022 substituted 2022 for 2020,
  "extending the window to **31 December 2022**", and "No extension beyond 31 December
  2022 could be located."
- `economic-corridors-compared.md` (keyTakeaways, FAQ **and** table): "The 2016 ECER
  orders were extended to **31 December 2024** by **P.U.(A) 344 to 350 of 2023**, and no
  later extension has been gazetted."

Both cannot be right, and `ecer-guide` does not mention P.U.(A) 344–350/2023 at all.
The Chinese pair now carries the same contradiction, faithfully.

**2. `business/doing-business-sabah.md` — s.6 expiry stated two ways. MATERIAL.**
Body table: the licence "continues in force until **31 December next following** the date
of commencement." FAQ: expires "on 31 December … **regardless of when it was issued**."
For a licence commencing March 2026 that is 31 Dec 2027 on the table's reading and
31 Dec 2026 on the FAQ's. The article's own s.7(2) taper argument only works on the FAQ
reading.

**3. `business/employment-pass-founder-malaysia.md` — three loose statements.**
- "the Ministry of Home Affairs **doubled the salary floor**" — Category I did double
  (RM10,000→RM20,000) but Category III went RM3,000→RM5,000, which is not a doubling.
- The announcement is dated **14 January 2026** in the body intro and **15 January 2026**
  in `sources`, `revisions` and "The 15 January 2026 table". Probably two documents; the
  article never says so.
- `answer` says the RM1,000,000 tier applies "in the wholesale, retail and trade sectors";
  `keyTakeaways` and the body table say "**foreign-owned (51% or more)** in wholesale,
  retail and trade, **or in unregulated services sub-sectors**". The `answer` drops both
  the ownership qualifier and the services limb.

**4. `business/doing-business-selangor.md` — summary overstates the body.**
Summary: "Selangor is the only state that publishes a home-business fee at all." Body:
the figures are "the UPEN guideline **as applied by MBPJ**", and "MPAJ, MBSJ and MBSA
publish no home-business category at all". The absolute claim is not what the body supports.

**Terminology flagged for a native reviewer:** `成熟投资者` vs `老练投资者` for
*sophisticated investor* — the SC's own Chinese usage could not be confirmed. Also the
deliberate split of `冷却期` (EP cooling-off) from `冷静期` (ECF withdrawal right).

---

## Corpus-wide — masters mis-declaring their own source language (FIXED)

Batch 23 refused to stamp `masterLanguage: "en"` on two translations without a ruling,
because their masters carried `masterLanguage: "ms"`.

Six files had `lang: "en"` + `masterLanguage: "ms"` + `translationStatus: "in-sync"` —
claiming to be English translations of a Malay master that does not exist. Their prose
is English-authored (verified on `batik.md` and `langkasuka.md`).

`batik` · `wayang-kulit` · `formation-of-malaysia-1963` · `independence-1957` ·
`langkasuka` · `melaka-sultanate`

Left alone, `--stamp` would have recorded the Chinese pages as derived from an English
master while the English page still claimed descent from a Malay one — a provenance
chain that does not close. **Corrected to `masterLanguage: "en"` /
`translationStatus: "master"`.**

---

## Batch 5 — business (15 files)

**1. `business/doing-business-ipoh-perak.md` — fees may belong to the wrong council. MOST SERIOUS IN BATCH.**
The article attributes **Pk. P.U. 13 (Majlis Bandaraya Ipoh)** to a URL on
`mptaiping.gov.my` whose filename is `…PELESENAN_TRED_PERNIAGAAN_DAN_PERINDUSTRIAN_MPT_2017.pdf`
— the **Taiping (MPT)** instrument. Either the URL or the attribution is wrong, and the
quoted fees (RM410 / RM530 / RM650) may be Taiping's, not Ipoh's.
*Note: the batch-3 finding that MBI does not host its own by-law and that the MPT file is
a combined Pk. P.U. 13 volume may reconcile this — but it must be confirmed, not assumed.*

**2. `business/doing-business-johor-bahru.md` — operative instrument uncited and unflagged.**
The body prices foreign-acquisition approval off "the fee schedule to the Kaedah-Kaedah
Tanah Johor 2026 effective 1 April 2026", and explicitly warns that most secondary sources
quote a superseded schedule — yet that instrument is in neither `sources[]` nor
`verificationNeeded`. Only the PTG Johor webpage is cited.

**3. `business/contracts-act-malaysia.md`** — body says the amendment list "runs out in
**1976**"; `verificationNeeded` says it "stops at **1974**". Same AGC record.

**4. `business/debt-recovery-malaysia.md`** — cites "P.U.(A) 122/2020 and P.U.(A) 123/2020";
only 123/2020 is in `sources[]`.

**5. `business/corporate-rescue-malaysia.md`** — `verificationNeeded` asks to confirm
"the 1 April 2024, 30 November 2024 and 31 January 2025 dates", but **30 November 2024**
appears nowhere in the article.

**6. `business/copyright-malaysia.md`** — FAQ "RM20 for each additional gigabyte above 3GB"
vs fee table "each additional 1GB above 3GB".

---

## Batch 8 — business (15 files)

**1. `business/mdec-digital-status.md` — window opens before the scheme exists.**
Schemes "launched **31 May 2024** under guidelines dated 26 April 2024", but the
application window runs "**19 April 2024** to 31 December 2027" — opening six weeks before
launch and before the guidelines were dated.

**2. `business/paid-up-capital-foreign-company.md` — boundary disagreement.**
ESD table row: "Foreign-owned at **51% or more**". MIDA paragraph two paragraphs later:
"meaning **more than 51 percent** foreign shareholders". A company at exactly 51% is caught
by one test and not the other.

**3. `business/manufacturing-licence-malaysia.md` — both tests catch the boundary.**
Licensing is "RM2.5 million **and above**"; exemption is "**not exceeding** RM2.5 million".
A company at exactly RM2.5m satisfies both. The article makes much of the OR/AND asymmetry
but never addresses the overlap.

**4. `business/pdpa-registration-classes.md`** — states **13** classes throughout, then
"What's next" says "outside all **twelve** of the closed classes".

**5. Frontmatter vs body date conflicts.**
- `online-safety-act-malaysia`: `sources[]` dates P.U.(B) 449/2025 `2025-12-12`; body and
  `keyTakeaways` say **8 December 2025**.
- `pdpa-compliance-malaysia`: `sources[]` dates P.U.(B) 522/2024 `2024-12-24`; body and FAQ
  say **19 December 2024** — and `online-business-licence-malaysia` dates the *same
  instrument* `2024-12-19` in its own `sources[]`.

**6. Cross-article: the Sabah statute has two names.** "**Trades** Licensing Ordinance"
in `register-business-sabah`; "**Trade** Licensing Ordinance (Cap. 144)" and "Trade
Licensing Ordinance 1948" in `premise-licence-malaysia`. Statute titles are not translated,
so the inconsistency propagates verbatim into Chinese.

**7. Loose figures.** `online-business-licence-malaysia`: "revoked on 25 December 2024 …
it is **two years** out of date" in a file stamped `updated: 2026-07-20` (~19 months).
`premise-licence-malaysia`: "filled in **thirteen** different ways" — never explained, and
Act 171 covers 11 states + FTs. `patent-malaysia`: s.55A "sat unproclaimed for **nearly
four years**" from 2022 to 31 Dec 2025 (~3.5).

**8. Citations absent from `sources[]`.** `payment-regulation-malaysia` cites
P.U.(A) 204/2013 (only 202/2013 and 403/2022 listed), and dates P.U.(A) 403/2022
`2022-12-29` while saying it came into operation 30 December **2023**.
`online-safety-act-malaysia` claims seven gazetted instruments; two are not in `sources[]`.
`patent-malaysia`: `sources[]` says "Patents Act **1983**" while the URL filename says
`Patents-Act-**1987**-Act-291.pdf` (likely MyIPO's own error).

---

## Batch 23 — mixed (20 files)

**1. `glossary/annual-return.md` contradicts the project glossary.**
Its trilingual identity line states `中文: 周年申报表`; `GLOSSARY-ZH.md` mandates
**常年申报表**. The translator copied the identity line unchanged (it is a term-identity
record) and used 常年申报表 in title and prose, so the page is now visibly inconsistent
with itself. **Needs a ruling.**

**2. `glossary/paid-up-capital.md` vs `law/companies-act-2016.md`** — the former says
authorised capital and par value were abolished "**in 2016**"; the latter says Act 777
came into force **31 January 2017**. Act year vs commencement date.

**3. `states/kuala-lumpur.md` — three different administering bodies.**
`keyTakeaways`: "the **Federal Territories Ministry**". FAQ: "the **federal government**".
Key facts table: "the **Federal Government under the Yang di-Pertuan Agong**". The Ministry
has been dissolved and reconstituted more than once, making the first claim the fragile one.

**4. `economy/gdp-overview.md`** — "Malaysia is **a** upper-middle-income" (grammar), and
the table row labelled **GDP per capita** cites the **World Bank classification**, which is
set by **GNI** per capita.

**5. `government/lhdn.md`** — `keyTakeaways` says LHDN "reports to a Board chaired by the
Secretary General of the Treasury"; the At-a-glance table says only "Ministry of Finance",
and the Board appears nowhere in the body.

**6. `law/employment-act-1955.md`** — reprint row "1975 · 2001 · 2006 · 2012" is listed
after the 1982 revised edition; and "revised edition **1981**" sits beside revised-edition
dates of **1982**.

**7. `business/wrt-licence-malaysia.md`** — `summary`/`answer` say renewal "must be filed
**three months** before expiry"; body and FAQ say "**at least** three months".

---

## Batch 11 — company-secretary (13 files)

**1. `company-secretary/agm-requirements.md` — same rule attributed two ways.**
Mid-article: "Limb (c) has to be read with s.322 — removing an auditor before the end of
their term **requires special notice**, which is 28 days under s.322(1)".
Common mistakes: "**Section 277(1) requires special notice**, which is 28 days under
s.322(1)". The first makes s.322 the source of the requirement; the second makes s.277(1)
the source with s.322 supplying only the period. Both cannot be intended.

**2. `company-secretary/company-secretary-qualification.md` — effect precedes its cause.**
"Since **20 November 2024**, SSM has made CSID available online, following a notice dated
**21 November 2024**." Availability is dated a day before the notice announcing it; the
cited MAICSA source is dated 22 November. One of the three is off.

**3. `company-secretary/audit-committee-public-companies.md`** — asserts the Companies Act
2016 spans "620 sections" as an emphatic flourish ("not once across 620 sections").
Plausible (s.620 is the repeal provision) but asserted, not sourced.

**4. `company-secretary/annual-return.md`** — states MBRS 2.0 Phase 1 went live
**1 December 2024**; the date is load-bearing for the filing route and is not in `sources[]`.

**5. `company-secretary/appoint-company-secretary.md`** — the table renders s.240 as "more
than 30 days" while the FAQ renders it "more than thirty days **at any one time**". The
article explicitly tells the reader to "read s.240's last four words" — which the table omits.

---

## GLOSSARY COLLISION — beneficial owner (RESOLVED)

The failure the shared-glossary design exists to catch, caught at merge time.

| Term | Batches | Files |
| --- | --- | --- |
| **实益拥有人** | 3, 5, 7, 13, 14 | 13 |
| 受益所有人 | 12, 23 | 4 |

Both sides argued from Malaysian authority and dismissed the other as foreign: batch 12
called 实益拥有人 "HK usage"; batch 13 called 受益所有人 "mainland AML usage". Batches 13
and 14 **independently cite SSM's own Chinese-language e-BOS material** for 实益拥有人,
and it holds the majority 13:4.

**Ruled: 实益拥有人 / 实益拥有权 / 最终实益拥有人.** 54 occurrences normalised across
`ebos.zh.md`, `ebos-filing.zh.md`, `government/ssm.zh.md`, `law/companies-act-2016.zh.md`.

Invisible to every automated check — both renderings are valid Chinese, both parse, both
build. Only the cross-batch merge exposes it. Had 23 agents appended to one shared glossary
concurrently, the conflicting rows would have been interleaved or lost, not compared.

## GLOSSARY ERROR — EIS statute year (RESOLVED — my error)

The pilot recorded `Employment Insurance System Act 2018` in `GLOSSARY-ZH.md`. Batches 4
and 9 independently flagged the conflict. Correct is **Act 2017 (Act 800)** — 17 masters
use 2017. The pilot also **invented a statute title its master never gives**:
`epf-socso-guide.md` says only "Act 800". Both corrected.

A wrong glossary row is worse than no glossary row: it propagates *consistently*.

## Batch 9 — business

1. `register-business-sarawak.md` — `keyTakeaways` asserts "**RM25 a year**" as fact while
   the body says the Schedule "sets **$25.00** … still expressed in dollars" and
   `verificationNeeded` says confirm the ringgit amount.
2. `repatriate-profits-malaysia.md` — cites "s.6(r)"; ITA s.6 subdivides as s.6(1)(x).
3. `register-sdn-bhd.md` — `answer` reads as if shareholders must be resident.
4. `sarawak-business-guide.md` — states RECODA's constitution as established while
   `verificationNeeded` says the s.4 notification could not be located.
5. `sdn-bhd-vs-berhad.md` — s.42(3)(b) compressed; omits persons previously in employment
   who continue to hold.

## Batch 10 — business

1. `talent-availability-by-region.md` — `answer` says unemployment **3.0%**; the table gives
   **2.9%** for the same Q1 2026 series. Also 6.32% vs 6.3% for Sabah as one computation.
2. `trademark-classes-fees-malaysia.md` vs `trademark-registration-malaysia.md` —
   P.U.(A) 315/2025 described as "counter filings" vs "over-the-counter filings **by
   applicants meeting criteria in the Registrar's practice directions**". Materially narrower.
3. `sme-financing-malaysia.md` — `verificationNeeded` cites a "3.5% figure" absent from the
   article.
4. `ssm-fees-malaysia.md` — ROC fee schedule sourced to an ROB URL path.

## Batch 12 — company-secretary

1. **`director-shareholding-notification.md` — `answer` understates exposure. MATERIAL.**
   `answer` gives only the s.219(6)(b) late-notice penalty (RM25,000 + RM1,000/day); the body
   and penalty table show failing to notify **at all** is s.219(6)(a) — **five years or
   RM3 million**. `answer` is the summary assistants extract.
2. `mbrs-2.md` FAQ 4 never answers its question ("Are banks and insurers still exempt from
   XBRL filing?").
3. `ebos-filing.md` fee timeline runs out of order (1 Apr → 30 Jun → 27 May → 30 Sep).
4. Five masters carry a stray blank line inside the `sources:` list. Cosmetic.

## Batch 13 — company-secretary

1. **`share-transfer.md` worked timeline — arithmetic impossible. MATERIAL.** Instrument
   executed 1 April, lodged 2 May, yet "By **30 May** … capital gains tax return within 60
   days of disposal". 60 days from 1 April is 31 May; from 2 May is 1 July. No date yields
   30 May, the disposal date is never identified, and the bullet sits after the 24 May one.
2. `share-transfer.md` — s.219 cited for two different duties.
3. **Corpus-level split on Division 8A. MATERIAL.** `sdn-bhd-filing-calendar.md` says
   beneficial-ownership duties are "deliberately omitted … not in the Act reprint verified
   for this page", while `minute-books-and-records.md` (same category, same `updated`) treats
   s.60B/s.60C as live citing Act A1701 — and `share-transfer.md` and `share-transmission.md`
   rely on the s.60C(4) → s.60B(3)/(4) sequence as settled.
4. `sdn-bhd-filing-calendar.md` gives the s.98(1) certificate duty `authority: "Shareholder"`;
   `share-transfer.md` gives the same duty `authority: "Company (to the shareholder)"`.
5. `register-of-members.md` cites s.105(3) and s.106(1) for the same act.
6. `registered-office.md` labels an ongoing internal state `authority: "SSM"`.

## Batch 15 — employment

1. **`employment-act-1955-guide.md` — `answer` count disagrees with the whole article. MATERIAL.**
   The takeaway and the body table say **six** provisions switch off above RM4,000
   (ss.60(3), 60A(3), 60C(2A), 60D(3), 60D(4), 60J). FAQ 1 says six and lists six. The
   `answer` field says "**Five** specific provisions". The translator marked this the one it
   would most want an editor to see.
2. `forced-labour-compliance-malaysia.md` — names the **Private Employment Agencies Act 1981**
   three times, then refers twice to "**Act 246**" without ever establishing they are the
   same statute.
3. `forced-labour-compliance-malaysia.md` — the master correctly reports that the Act's own
   printed "List of Amendments" misattributes s.90B to Act A1419 (2012). **This is the master
   reporting a government error — do not "fix" it.**
4. `hiring-foreign-workers-malaysia.md` — four contradictions between official sources, all
   already in `verificationNeeded`: OSC ministry (MOHR vs MOHA), entry clearance (6 hrs vs
   24 hrs **in the same Immigration document**), FOMEMA frequency, and maximum employment
   period (10 vs 5 years).
5. `employment-pass-malaysia.md` — an ESD FAQ refers to a Category III range of
   RM7,000–RM9,999 that contradicts the published RM5,000–RM9,999 band.

## Batch 18 — taxation

1. **`capital-allowances.md` — prose and table describe two different asset lives.** Disposal
   stated as "four years later" in "the basis period for YA2030" for a machine bought March
   2026, while the table runs annual allowances to **YA2031**, which cannot coexist with a
   YA2030 disposal. The RM190,000 cap itself is internally consistent.
2. `capital-gains-tax.md` — `keyTakeaways` says the charge "ran from 1 March 2024, not
   1 January 2024"; `answer` and body say CGT has effect from 1 January 2024 with 1 Jan–29 Feb
   exempted by order. Both defensible, jarring together.
3. `business-structure-tax-comparison.md` — names six band-rates but no band boundaries, so
   the RM7,690 and RM32,150 figures cannot be checked from the page. (Translator verified them
   independently as correct.)
4. `capital-or-revenue.md` — presents a partial s.2(1) extract as a complete blockquote,
   without ellipsis.
5. `cp37-forms.md` — LHDN's Withholding Tax page and PR 10/2019 para 13.1 contradict each
   other on whether CP37D must be submitted. Live unresolved conflict, already flagged.
6. `approved-research-allowance.md` — "within ten years" reads as a window in the body and a
   rate in the FAQ.

## Batch 19 — taxation

1. **`e-invoice-data-fields.md` — counts contradict the table. MATERIAL.** `answer` and
   `keyTakeaways` say "sixteen optional and seven conditionally mandatory". The Appendix 1
   table shows **20 marked O** and **8 marked C**.
2. **`expatriate-and-non-resident-tax.md`** — "Land on 15 July and you are **170 days short**
   of the 182 needed". 15 July → 31 Dec is 170 days *present*, i.e. **12 days short**.
3. `dta-network.md` — several "Effective from" dates precede "Treaty in force"; **Kuwait (in
   force 2007, effective 1988 — 19 years)** and Sudan are extreme. Matches LHDN's own table.
4. `double-deduction-list.md` — the decoder maps "in addition to any deduction under section
   33" to "200% total", but the gazetted table uses that wording for *further deduction*
   entries with their own caps (e.g. accommodation, capped RM50,000). Mechanical application
   over-claims.
5. `e-invoicing.md` vs `freelancer-and-gig-tax.md` — hub says the rollout ended with the RM5m
   cohort from 1 Jan 2026 and "there is no phase five"; the freelancer page gives a mandatory
   start of **1 July 2026** for businesses commencing 2023–2025 with turnover ≥RM1m.

## Batch 20 — taxation

1. `labuan-tax-regime.md` — a `###` heading follows a bullet with no blank line; may render
   inside the list.
2. `labuan-tax-regime.md` — keyTakeaway says substance requires "1 to 4 full-time employees"
   but pure equity holding is **exempted (zero)**.
3. `labuan-tax-regime.md` — "An expired or surrendered licence is not a licensing problem
   alone" never completes the thought.
4. `new-incentive-framework.md` — "**three-limbed** definition" followed by two alternatives
   and a rider.
5. `new-incentive-framework.md` — exclusions table files "e-Cigarette and vape products"
   under **Electrical and electronics**.
6. `motor-vehicle-capital-allowance.md` — PR 6/2015 Example 5 cited twice for different
   propositions.

## Batch 22 — taxation

1. **`transfer-pricing-documentation.md` — para 1.5(d) read two opposite ways. MATERIAL.**
   FAQ 1 and the body list the domestic carve-out conditions disjunctively ("**or**"), so
   satisfying one limb exempts you. Common mistakes reads it conjunctively — "it fails the
   moment one side has an incentive, a different headline rate, or two consecutive loss
   years." Opposite tests.
2. `stamp-duty-self-assessment.md` — "sale and purchase agreements" sit in Phase 1 while
   *transfers of real property* sit in Phases 2 and 3, never explained.
3. `tax-penalties.md` — Stamp Act s.74 attributed to "Act 863 s.40" while `sources[]`
   describes Act 863 only as introducing ss.72B–72D.
4. `tax-audit.md` vs `tax-appeal.md` — one says the Dispute Resolution Department URL is dead
   and absent from the 2025 framework; the other describes JRP/PRP as current, sourced to a
   2019 guideline it flags as stale.
