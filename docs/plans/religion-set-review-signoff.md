# Religion-coverage set — reviewer sign-off sheet

**For:** ashton-tan (designated reviewer, sensitivity: religion)
**Date prepared:** 2026-10-21
**Scope:** 4 native-language faith overviews + 48 translations = **52 files**, all
`status: in-review`, `sensitivity: religion`, `aiAssisted: true`, `reviewer: ashton-tan`.
**Status:** Fact-checked and corrected (this pass). Awaiting your review → publish.

Publishing flips `status: in-review → published`; only then do the articles go live and
`check-internal-links --strict` validate their cross-links (it skips non-public articles).

---

## The 4 masters

| Article | topicId | Master lang | Tier |
| --- | --- | --- | --- |
| Hinduism in Malaysia | MY-ART-0066 | **ta** (native Tamil) | 2 |
| Buddhism in Malaysia | MY-ART-0067 | **zh** (native Chinese) | 2 |
| Chinese religion & Taoism in Malaysia | MY-ART-0068 | **zh** (native Chinese) | 2 |
| Christianity in Malaysia | MY-ART-0069 | **en** (English) | 2 |

Each carries the neutrality disclaimer callout ("describes… does not interpret or evaluate").
Cited to DOSM 2020 census + Federal Constitution (Art 3 & 11) + the institution/org sources below.

---

## Fact-check verdicts (every `verificationNeeded` item, 4 parallel researchers)

**Confirmed as written (no change):** all 2020 census shares (Islam 63.5 / Buddhism 18.7 /
Christianity 9.1 / Hinduism 6.1); Christian count 2,941,049; Sarawak Christian share 50.1%
(only Christian-majority state); Christian ethnic split 59.2% Bumiputera / 26.9% Chinese /
4.4% Indian; CFM formed 6 Feb 1985 / registered 14 Jan 1986 + three member bodies; Good
Friday Sabah/Sarawak-only + Christmas national; Wesak national (Holidays Act 1951 + state
gazettes); all named temples + traditions; Tamil Immigration Fund Ordinance 1907; all deities
and "tokong"; Nine Emperor Gods confirmed **not** a gazetted holiday anywhere; Hindu state
proportions (NS 13.1 / Sel 10.3 / Perak 9.7 / Penang 8.4 / KL 8.2 / Johor 7.1).

**Corrections applied this pass:**

| # | Article | Was | Now |
| --- | --- | --- | --- |
| 1 | Chinese-religion | "census has *no* separate Taoism/folk category" | census *does* have a Confucianism/Taoism/Chinese-traditional category but it records a negligible share (~0.9% "other"); most report as Buddhist → absorbed into 18.7%, no accurate separate count |
| 2 | Hinduism | MHS "since the mid-1960s" | founded **1965 (23 Jan)** |
| 3 | Hinduism | Thaipusam list incl. Kedah as standing | Kedah noted as **ad-hoc**, not standing gazette |
| 4 | Buddhism | MBA / YBAM, no years | **MBA 1959 (Penang)**, **YBAM 1970** (+ YBAM official source) |
| 5 | Chinese-religion | "Federation of Taoist Associations" unnamed | full name **FTAM, est. ~1994** (+ source) |
| 6 | Christianity | "roughly two-thirds" in Sabah/Sarawak | **more than two-thirds (~70%)** — actual 70.5% |
| 7 | Christianity | "Allah" vague "evolving" | + neutral sourced line: Jill Ireland upheld 2021, federal appeal withdrawn 2023, Herald differed (+ FMT source) |

All corrections were mirrored into the 48 translations (one agent per language) and the set
re-stamped so masters and translations stay in sync.

---

## ⚠ Three facts rest on SECONDARY sources — your spot-check points

These are flagged in each file's `verificationNeeded`. Everything else is primary-sourced.

1. **MHS founded 1965 (23 Jan)** — the MHS official site was unreachable during the check;
   the year is from reliable secondary sources. Confirm at `malaysiahindusangam.com.my`.
2. **MBA founded 1959, Penang** — from an authoritative secondary source (YBAM's 1970 is from
   YBAM's own site). Confirm MBA against its own records if you want it airtight.
3. **FTAM founded ~1994** — currently from a single scholarly archive (Global Daoism Archive);
   written as "around 1994". Confirm against FTAM / Registry of Societies.

---

## 3R+1 neutrality check (your call)

All four are religion-sensitive. The articles describe demographics, history, practices,
institutions and legal framing **descriptively**, carry the neutrality disclaimer, and treat
the one live-litigation item (the word "Allah") as case- and jurisdiction-dependent rather than
settled. Please confirm the tone reads as neutral to you, especially:
- Christianity → the "Allah" paragraph and Article 11(4) framing.
- Chinese-religion / Buddhism → the census-overlap explanation (now corrected).
- Hinduism → Article 3 vs Article 11 framing and the temple land-tenure line.

---

## Publish checklist (when you're satisfied)

1. Review the 4 **masters** (the authoritative versions) — the translations mirror them.
2. Flip `status: in-review → published` on the files you approve.
3. Run `npm run build` (or let CI) — `check-internal-links --strict` will then validate the
   cross-links, which only resolve once the targets are public.
4. Push → Pages deploy + HF dataset + IndexNow. The 4 topics (×13 langs) go live + discoverable.
