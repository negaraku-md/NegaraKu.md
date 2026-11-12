// Malaysia Real Property Gains Tax (RPGT) — pure, client-safe, unit-tested.
// Rates from Schedule 5 of the Real Property Gains Tax Act 1976, as set out in
// our vetted article knowledge/taxation/rpgt-rates.md (three Parts that diverge
// from year four). Schedule 4 exemption from rpgt-exemptions.md.
//
// RATE DATA IS DATED + CITED. The current ladders have applied to disposals from
// 1 January 2022 (citizen/PR 0% sixth-year). Update RPGT.asOf if Schedule 5 is
// amended.
//   Sources: RPGT Act 1976 Schedule 5 (Parts I–III) & Schedule 4; LHDN;
//   NegaraKu "RPGT Rates and How to Compute the Gain".

export type DisposerClass = 'citizen-pr' | 'company' | 'foreigner';

export interface RpgtRates {
  asOf: string;
  // Rate by disposal YEAR (index 0 = year 1 … index 5 = year 6 and later).
  ladder: Record<DisposerClass, number[]>;
  // Schedule 4: individuals exempt the greater of RM10,000 or 10% of the gain.
  // Companies get nothing.
  schedule4: { flat: number; pct: number };
  sources: { title: string; url: string }[];
}

export const RPGT: RpgtRates = {
  asOf: '2022-01-01',
  ladder: {
    // Part I — Malaysian citizens and permanent residents.
    'citizen-pr': [0.30, 0.30, 0.30, 0.20, 0.15, 0.00],
    // Part II — companies incorporated in Malaysia (never reaches zero).
    'company': [0.30, 0.30, 0.30, 0.20, 0.15, 0.10],
    // Part III — non-citizen individuals / foreign companies (no taper).
    'foreigner': [0.30, 0.30, 0.30, 0.30, 0.30, 0.10],
  },
  schedule4: { flat: 10_000, pct: 0.10 },
  sources: [
    { title: 'Real Property Gains Tax Act 1976, Schedule 5 (Parts I–III) & Schedule 4', url: 'https://lom.agc.gov.my/' },
    { title: 'RPGT Rates and How to Compute the Gain (NegaraKu.md)', url: 'https://negaraku.md/en/taxation/rpgt-rates' },
  ],
};

const r2 = (n: number) => Math.round(n * 100) / 100;

/** Disposal YEAR (1-based, capped at 6) from whole months held. Year 1 = within
 *  the first 12 months; the rate steps down at each acquisition anniversary. */
export function disposalYear(monthsHeld: number): number {
  const y = Math.floor(Math.max(0, monthsHeld) / 12) + 1;
  return Math.min(y, 6);
}

/** Whole months between two ISO dates (acquisition → disposal), anniversary-based. */
export function monthsBetween(acq: string, disp: string): number {
  const a = new Date(acq), d = new Date(disp);
  if (isNaN(a.getTime()) || isNaN(d.getTime())) return 0;
  let m = (d.getFullYear() - a.getFullYear()) * 12 + (d.getMonth() - a.getMonth());
  if (d.getDate() < a.getDate()) m -= 1; // not yet reached the monthly anniversary
  return Math.max(0, m);
}

export interface RpgtInput {
  disposer: DisposerClass;
  acquisitionDate: string;   // ISO yyyy-mm-dd (SPA date)
  disposalDate: string;      // ISO yyyy-mm-dd (SPA date)
  disposalPrice: number;
  acquisitionPrice: number;
  /** Allowable incidental costs on acquisition (legal, stamp, valuation, agent). */
  acquisitionCosts?: number;
  /** Allowable incidental costs on disposal (agent commission, legal). */
  disposalCosts?: number;
  /** Permitted enhancement expenditure that remains reflected in the property. */
  enhancementCosts?: number;
  /** Recoveries that reduce the base (e.g. insurance for damage). */
  recoveries?: number;
}

export interface RpgtResult {
  year: number;
  monthsHeld: number;
  rate: number;
  chargeableGain: number;   // after allowable costs, before exemption
  schedule4Exemption: number;
  taxableGain: number;      // after Schedule 4
  rpgtPayable: number;
  retentionRate: number;    // s.21B acquirer retention on consideration
  retentionAmount: number;
  asOf: string;
}

export function computeRpgt(input: RpgtInput, rates: RpgtRates = RPGT): RpgtResult {
  const monthsHeld = monthsBetween(input.acquisitionDate, input.disposalDate);
  const year = disposalYear(monthsHeld);
  const rate = rates.ladder[input.disposer][year - 1];

  const disposal = Math.max(0, input.disposalPrice || 0) - Math.max(0, input.disposalCosts || 0);
  const base =
    Math.max(0, input.acquisitionPrice || 0) +
    Math.max(0, input.acquisitionCosts || 0) +
    Math.max(0, input.enhancementCosts || 0) -
    Math.max(0, input.recoveries || 0);
  const chargeableGain = Math.max(0, disposal - base);

  // Schedule 4 — individuals (citizen/PR and foreign individuals) only. A company
  // gets no waiver. We treat the 'company' class as the only one without it.
  const isCompany = input.disposer === 'company';
  const schedule4Exemption = isCompany || chargeableGain <= 0
    ? 0
    : Math.min(chargeableGain, Math.max(rates.schedule4.flat, chargeableGain * rates.schedule4.pct));
  const taxableGain = Math.max(0, chargeableGain - schedule4Exemption);
  const rpgtPayable = r2(taxableGain * rate);

  // s.21B retention: 3% default; 5% for a Part II (company) disposal within 3
  // years (reverting to 3% from year 4); 7% for a Part III (foreigner) disposer.
  const retentionRate =
    input.disposer === 'foreigner' ? 0.07
    : (input.disposer === 'company' && year <= 3) ? 0.05
    : 0.03;
  const retentionAmount = r2(Math.max(0, input.disposalPrice || 0) * retentionRate);

  return {
    year, monthsHeld, rate,
    chargeableGain: r2(chargeableGain),
    schedule4Exemption: r2(schedule4Exemption),
    taxableGain: r2(taxableGain),
    rpgtPayable,
    retentionRate, retentionAmount,
    asOf: rates.asOf,
  };
}
