# verificationNeeded sweep — 2026-10-25 (arts-culture / companies / economy tranche)

Fact-checked **24 en-master articles** (68 `verificationNeeded` items) in web-verifiable
categories, via 4 parallel research agents (authoritative sources: company results releases,
Bursa, DOSM, UNESCO, GANHRI, MITI, MOF, reputable news). The corpus held up very well —
**~58 CONFIRMED, 1 real error, a few overstatements/discrepancies, the rest unverifiable
facts the articles correctly do NOT assert.**

## Cleared (flags removed, all 13 variants = 182 files) — every item verified
gamuda-berhad · top-glove-and-press-metal · securities-commission-malaysia ·
malaysias-telcos-and-5g · kaamatan · borneo-indigenous-languages · thaipusam ·
genting-group · misc-berhad · malaysia-budget-2027 · christianity-in-malaysia ·
gawai-dayak · capital-a-and-airasia · pnb  **(14 articles)**

(All key figures spot-confirmed, e.g. Gamuda FY2025 RM15.97bn / RM38bn order book; MISC
FY2024 PAT RM1,233.2m / 36 sen dividend; Khazanah-adjacent & Budget 2027 headline figures;
Capital A completion 18 Jan 2026; PNB ASB 5.75 sen / RM10.4bn.)

## FOLLOW-UP — findings applied 2026-10-25 (commit after e3370fe1a)
- **sunway-group — FIXED** (×13): reworded to "Chew Chee Kin was group president… retired 2025 to Group Chief Advisor; Datuk Mohd Anuar Taib & Evan Cheah appointed deputy presidents Jan 2025" (no successor-president confirmed in sources). Flag cleared.
- **ioi-corporation — FIXED** (×13): "14 of 15 mills" → "all company-owned mills assessed by SPOTT are RSPO-certified (assessment covers 14 at 100%)". Flag cleared.
- **malaysia-free-trade-agreements — FIXED** (×13): Iran PTA → "explored in the 2010s but has since stalled". Flag cleared.
- **sime-darby-group — flag cleared** (×13): body already said "moved to divest" (accurate, not "fully divested") — no body change needed.
- **epf-as-investor — KEPT (not changed):** the equities income RM49.24bn/62% could not be independently confirmed either way — EPF's full-year asset-class income split isn't publicly reported (only quarterly), and the article's figures sum exactly to the RM79.15bn total. Did NOT "correct" to an unverified value. Flag kept.
- **malaysias-big-banks — KEPT (not changed):** 12.8% (The Edge basis) and 13.2% (bank's own net ROE) are different valid metrics; changing risks cross-bank inconsistency. Flag kept.

## REVIEWER FINDINGS — original assessment (10 articles)

**1. sunway-group — ACTUAL ERROR (fix).** Body says *"The group's president is Tan Sri Dato'
(Dr.) Chew Chee Kin."* He **retired as president in 2025** and is now **Group Chief Advisor**
(and Sunway University Pro-Chancellor). Successor not identified in sources — reword to past/
advisor framing or confirm the current president before restating. (Source: Sunway University,
2026.) — _needs a body edit + re-translation, so left for your decision._

**2. ioi-corporation — rephrase.** "14 of 15 mills RSPO-certified" implies one uncertified;
SPOTT (Oct 2025) is internally inconsistent (owns 15 per one indicator, 14 per others) and
reports **14/14 = 100% certified**. Reword to SPOTT's 100%-of-14 or flag the source's own gap.

**3. sime-darby-group — soften.** "fully divested trading, logistics and healthcare" — only
**healthcare** is confirmed divested (Ramsay Sime Darby → Columbia Asia, RM5.7bn, 2023). No
evidence trading/logistics were fully exited by the Nov 2024 rebrand. Drop "fully".

**4. malaysia-free-trade-agreements — soften/drop.** Malaysia–Iran PTA is framed as in the
pipeline; it **stalled in 2018** after US sanctions and is not an active track. Soften or remove.

**5. epf-as-investor — reconcile a figure.** Article's equities income **RM49.24bn / 62%** vs
reported **RM50.7bn / 64%** (fixed income RM26.3bn/33% matches). Also the **RM188bn / 9% (end-
2024)** domestic-equity figure could not be independently confirmed. Re-check vs EPF's release.

**6. malaysias-big-banks — figure + add data.** Public Bank ROE stated **12.8%** vs the bank's
own FY2024 **13.2%** (ranking conclusion unchanged either way). Also add each bank's audited
total assets (only RHB ~RM350bn was sourced; Maybank RM1,075.3bn, CIMB ~RM733.6bn confirmed).

**Kept TODOs (deliberate omissions to add at human review):** khazanah (EPF total assets +
membership), unesco-world-heritage (six properties' inscribed hectares), ytl-group (point-in-
time market cap, moving), glc-dominance (pin the RM451.3bn/25.6% as-at date to the Hansard).

**Minor:** pnb AUM RM364bn → RM365.3bn (later Integrated Report; RM364bn was correct as-of-
date); sime-UMW 100% completion dated 21 Mar 2026 (Bernama/FMT, as in article) vs 21 May 2026
(The Edge) — source discrepancy.

## Method (reusable)
`scratchpad/vn-tranche.mjs` (assemble en-master flagged articles by verifiable category) →
split into batches → parallel general-purpose agents return per-flag CONFIRMED/CORRECTED/
UNVERIFIABLE + source → `scratchpad/vn-clear.mjs` removes the `verificationNeeded` block from
all 13 variants (freshness-neutral, language-neutral). Clear only when EVERY flag is CONFIRMED
or resolved-safe; keep + surface anything unverifiable, a deliberate-omission TODO, or an
accuracy finding. Remaining backlog after this tranche: ~811 flagged masters.
