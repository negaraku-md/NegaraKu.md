# Verification backlog — triage

Every published article carries a `verificationNeeded` list: claims an AI drafted
that must be confirmed before they can be fully trusted. As of this triage there
are **3,760 open items** across the corpus. This document classifies all of them
so the effort can be pointed where it pays off — and, just as importantly, so we
never "clear" a claim we cannot honestly verify.

## The three classes

| Class | Count | Share | What it means |
|---|---:|---:|---|
| **FACT_AI** | 2,986 | 79% | A concrete public fact — fee, rate, statutory threshold, date, official statistic, or "is the cited law still the in-force version". Verifiable against an authoritative source (SSM, LHDN, BNM, AGC/gazette, DOSM, agency sites). |
| **SME** | 298 | 8% | Legal or professional judgment — "whether X applies", statutory interpretation, contested/fact-sensitive points. **Needs a qualified Malaysian lawyer/accountant/expert — an AI must not "verify" these.** |
| **BLOCKED** | 476 | 13% | No official figure exists, sources contradict, or the authoritative source blocks automated access (403/login-walled). Needs a human, but not for legal-judgment reasons. |

**Integrity rule:** an item moves out of `verificationNeeded` only when a genuine
authoritative source confirms it (and that source is cited). FACT_AI is a
*candidate* for AI verification, not a guarantee — some will fall to BLOCKED when
the source turns out to be unavailable at verification time. SME and BLOCKED
items stay flagged for human review; they are never auto-cleared.

## By category (sorted by AI-verifiable yield)

| Category | Total | FACT_AI | SME | BLOCKED |
|---|---:|---:|---:|---:|
| business | 660 | 345 | 74 | 241 |
| taxation | 359 | 254 | 46 | 59 |
| government | 225 | 211 | 5 | 9 |
| employment | 245 | 183 | 40 | 22 |
| company-secretary | 205 | 163 | 28 | 14 |
| law | 172 | 161 | 7 | 4 |
| companies | 128 | 110 | 7 | 11 |
| tourism | 112 | 102 | 0 | 10 |
| settling-in | 112 | 101 | 5 | 6 |
| finance | 98 | 88 | 6 | 4 |
| glossary | 95 | 86 | 5 | 4 |
| audit | 94 | 79 | 13 | 2 |
| food-lifestyle | 84 | 79 | 3 | 2 |
| transport | 89 | 78 | 3 | 8 |
| accounting | 105 | 73 | 20 | 12 |
| agriculture | 75 | 72 | 2 | 1 |
| sports | 76 | 70 | 0 | 6 |
| technology | 75 | 69 | 0 | 6 |
| economy | 72 | 66 | 0 | 6 |
| malaysia | 62 | 61 | 0 | 1 |
| industries | 65 | 59 | 2 | 4 |
| energy | 69 | 57 | 6 | 6 |
| states | 56 | 53 | 3 | 0 |
| education | 55 | 50 | 2 | 3 |
| money-daily-life | 54 | 47 | 3 | 4 |
| arts-culture | 55 | 45 | 1 | 9 |
| property | 52 | 45 | 7 | 0 |
| public-safety | 45 | 42 | 3 | 0 |
| environment | 49 | 41 | 2 | 6 |
| international | 46 | 40 | 1 | 5 |
| healthcare | 38 | 30 | 1 | 7 |
| cost-of-living | 33 | 26 | 3 | 4 |

Note: `business` has an unusually high BLOCKED share (241) — many are market
figures with no official series, or bot-blocked regulator pages.

## Suggested order of work

1. **High-value, high-yield pillars first** — `taxation`, `company-secretary`,
   `companies`, `finance`, `audit`, `accounting` (the doing-business pillar):
   heavily fact-based (rates, fees, statutory numbers) with low BLOCKED noise, and
   the pages most likely to be cited/relied on.
2. **`government` + `law`** — 211 and 161 FACT_AI with tiny SME/BLOCKED tails;
   mostly statute-currency and official-figure checks.
3. **Living/reference categories** (`tourism`, `settling-in`, `transport`,
   `education`, `states`, …) — clean fact checks, good for volume.
4. **Route the 298 SME items to a human expert** — never AI-cleared.
5. **`business` last of the doing-business set** — highest BLOCKED share, so the
   lowest AI-clearable ratio; triage its BLOCKED items to human/enquiry.

## Method

Every item was extracted with its source file and category, then classified by a
fleet of parallel agents against the rules above (mixed fact/judgment items were
routed to SME whenever a wrong reading would be a legal or compliance error). The
full item-level worklist (id, file, class, reason) is generated alongside this
report for driving verification passes.
