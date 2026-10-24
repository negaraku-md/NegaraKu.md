// review-cadence.mjs — the ONE place the article review interval is decided.
//
// `reviewDue` drives the freshness loop: a published article past its reviewDue
// is shown as `needs-update` (effectiveStatus in src/lib/content.ts) and lands
// in the review queue. The interval is NOT arbitrary — it is set by how fast a
// page's facts drift and how much a stale fact costs the reader:
//
//   tier 4  entity/data  — rates, thresholds, fees, registry fields. Drift fast
//                          and silently; a stale number is actively wrong.   6 mo
//   tier 1  authoritative guide — high-stakes statutory explainers. Moderate
//                          drift (law/budget cycle), high cost of staleness.  12 mo
//   tier 2  standard     — broader explainers, slower drift.                  18 mo
//   tier 3  direct answer / FAQ — mostly definitional, evergreen.            24 mo
//   tier S  sensitive national content (3R+1).                               12 mo
//
// SENSITIVITY OVERRIDE: anything with sensitivity !== "none" is re-checked at
// least annually regardless of tier — the cost of a stale sensitive (3R+1)
// claim is reputational and legal, not just a lost ranking. A faster tier (e.g.
// a sensitive tier-4 data page at 6 mo) still wins; the override only CAPS.
//
// This matches the corpus's implicit flat-12-month default while tightening the
// data pages that most need it and relaxing the evergreen FAQs that don't — a
// net reduction in review load, concentrated where freshness actually matters.

/** Months until the next review, by editorial tier. */
export const REVIEW_MONTHS = { '1': 12, '2': 18, '3': 24, '4': 6, S: 12 };

/** The annual cap applied to any sensitive (3R+1) page. */
export const SENSITIVE_CAP_MONTHS = 12;

/**
 * How many months a page of this tier/sensitivity may go between reviews.
 * @param {string|number|null} tier  one of 1|2|3|4|S (defaults to 3)
 * @param {string|null} sensitivity  content.config sensitivity enum ("none" = not sensitive)
 */
export function reviewMonths(tier, sensitivity) {
  const base = REVIEW_MONTHS[String(tier ?? '3')] ?? 24;
  const sensitive = Boolean(sensitivity) && sensitivity !== 'none';
  return sensitive ? Math.min(SENSITIVE_CAP_MONTHS, base) : base;
}

/**
 * The reviewDue date (YYYY-MM-DD) for a page reviewed/updated on `from`.
 * Month arithmetic is calendar-correct (adding 6 months to Aug 31 lands on the
 * end of Feb, never spilling into March).
 * @param {Date|string} from         the baseline date (reviewed/updated/today)
 * @param {string|number|null} tier
 * @param {string|null} sensitivity
 * @returns {string} ISO date, YYYY-MM-DD
 */
export function computeReviewDue(from, tier, sensitivity) {
  const d = from instanceof Date ? new Date(from.getTime()) : new Date(from);
  const months = reviewMonths(tier, sensitivity);
  const day = d.getUTCDate();
  d.setUTCDate(1); // avoid overflow while shifting the month
  d.setUTCMonth(d.getUTCMonth() + months);
  // clamp back to the original day-of-month, or the last day of the target month
  const lastDay = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 0)).getUTCDate();
  d.setUTCDate(Math.min(day, lastDay));
  return d.toISOString().slice(0, 10);
}
