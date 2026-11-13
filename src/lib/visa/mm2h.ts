// Malaysia My Second Home (MM2H) tier checker — pure, client-safe, unit-tested.
// FIGURES ARE DATED + CITED. Source of truth = our vetted reference article
// knowledge/settling-in/mm2h-long-stay-visa.md, which was verified tier-by-tier
// against MOTAC's own mm2h.gov.my category pages (sources dated 2026-02-10).
// The programme has been restructured more than once; update MM2H.asOf and the
// tier data when MOTAC revises terms. This checks TIER REQUIREMENTS only — final
// immigration approval sits with the Immigration Department.

export type TierId = 'platinum' | 'gold' | 'silver' | 'sez';

export interface Tier {
  id: TierId;
  /** Minimum fixed deposit (USD). SEZ is age-banded — see fdForAge(). */
  fdUSD: number;
  fdSez?: { under50: number; from50: number };
  /** Minimum residential property purchase (RM). null = priced per the
   *  Forest City / SEZ development (no fixed floor to check). */
  propertyMinRM: number | null;
  /** One-off government participating fee (RM). */
  participatingFeeRM: number;
  /** Pass validity in years (renewable). */
  passYears: number;
  /** Minimum applicant age. */
  minAge: number;
  /** Whether working / running a business is permitted on this tier. */
  workAllowed: boolean;
}

export interface MM2HRates {
  asOf: string;
  processingFeePrincipalRM: number; // RM5,000
  processingFeeDependentRM: number; // RM2,500 each
  stayDaysUnder50: number; // 90 cumulative days/year for under-50s
  fdWithdrawalPct: number; // 50% releasable after approval (specific purposes)
  propertyLockYears: number; // cannot sell for 10 years
  tiers: Tier[];
  sources: { title: string; url: string }[];
}

export const MM2H: MM2HRates = {
  asOf: '2026-02-10',
  processingFeePrincipalRM: 5_000,
  processingFeeDependentRM: 2_500,
  stayDaysUnder50: 90,
  fdWithdrawalPct: 0.5,
  propertyLockYears: 10,
  tiers: [
    { id: 'platinum', fdUSD: 1_000_000, propertyMinRM: 2_000_000, participatingFeeRM: 200_000, passYears: 20, minAge: 25, workAllowed: true },
    { id: 'gold', fdUSD: 500_000, propertyMinRM: 1_000_000, participatingFeeRM: 3_000, passYears: 15, minAge: 25, workAllowed: false },
    { id: 'silver', fdUSD: 150_000, propertyMinRM: 600_000, participatingFeeRM: 1_000, passYears: 5, minAge: 25, workAllowed: false },
    { id: 'sez', fdUSD: 65_000, fdSez: { under50: 65_000, from50: 32_000 }, propertyMinRM: null, participatingFeeRM: 1_000, passYears: 10, minAge: 21, workAllowed: false },
  ],
  sources: [
    { title: 'MM2H Category Overview', url: 'https://www.mm2h.gov.my/category/overview' },
    { title: 'MM2H Guidelines', url: 'https://www.mm2h.gov.my/apply/guidelines' },
    { title: 'Malaysia My Second Home — the four tiers (NegaraKu.md)', url: 'https://negaraku.md/en/settling-in/mm2h-long-stay-visa' },
  ],
};

/** The fixed deposit a tier requires for an applicant of a given age (USD). */
export function fdForAge(tier: Tier, age: number): number {
  if (tier.id === 'sez' && tier.fdSez) return age >= 50 ? tier.fdSez.from50 : tier.fdSez.under50;
  return tier.fdUSD;
}

export interface MM2HInput {
  age: number;
  /** Funds available for the fixed deposit (USD). */
  fundsUSD: number;
  /** Budget for the compulsory residential property (RM). */
  propertyBudgetRM: number;
  /** Wants to work or run a business on the pass (only Platinum allows it). */
  needWork: boolean;
  /** Number of dependents to include (drives the processing fee). */
  dependents: number;
}

/** Why an applicant does not meet a tier — stable keys localised by the view. */
export type ReasonKey = 'age' | 'funds' | 'property' | 'work';

export interface TierResult {
  tier: TierId;
  fdRequiredUSD: number;
  propertyMinRM: number | null;
  participatingFeeRM: number;
  passYears: number;
  minAge: number;
  workAllowed: boolean;
  eligible: boolean;
  reasons: ReasonKey[];
}

export interface MM2HResult {
  tiers: TierResult[];
  /** Cheapest eligible tier by fixed deposit, or null if none qualify. */
  recommended: TierId | null;
  /** Minimum physical-presence requirement for this age (cumulative days/year). */
  stayDaysPerYear: number;
  /** Government processing fee for this household (RM) — separate from the
   *  one-off participating fee. */
  processingFeeRM: number;
  asOf: string;
}

export function checkMM2H(input: MM2HInput, rates: MM2HRates = MM2H): MM2HResult {
  const age = Math.max(0, Math.floor(input.age || 0));
  const fundsUSD = Math.max(0, input.fundsUSD || 0);
  const propertyBudgetRM = Math.max(0, input.propertyBudgetRM || 0);
  const dependents = Math.max(0, Math.floor(input.dependents || 0));

  const tiers: TierResult[] = rates.tiers.map((t) => {
    const fdRequiredUSD = fdForAge(t, age);
    const reasons: ReasonKey[] = [];
    if (age > 0 && age < t.minAge) reasons.push('age');
    if (fundsUSD < fdRequiredUSD) reasons.push('funds');
    // SEZ property has no fixed floor (priced per the Forest City development),
    // so there is nothing to fail on property for that tier.
    if (t.propertyMinRM != null && propertyBudgetRM < t.propertyMinRM) reasons.push('property');
    if (input.needWork && !t.workAllowed) reasons.push('work');
    return {
      tier: t.id,
      fdRequiredUSD,
      propertyMinRM: t.propertyMinRM,
      participatingFeeRM: t.participatingFeeRM,
      passYears: t.passYears,
      minAge: t.minAge,
      workAllowed: t.workAllowed,
      eligible: reasons.length === 0,
      reasons,
    };
  });

  // Recommend the cheapest eligible tier (lowest fixed deposit).
  const eligible = tiers.filter((t) => t.eligible);
  eligible.sort((a, b) => a.fdRequiredUSD - b.fdRequiredUSD);
  const recommended = eligible.length ? eligible[0].tier : null;

  const stayDaysPerYear = age >= 50 ? 0 : rates.stayDaysUnder50;
  const processingFeeRM = rates.processingFeePrincipalRM + dependents * rates.processingFeeDependentRM;

  return { tiers, recommended, stayDaysPerYear, processingFeeRM, asOf: rates.asOf };
}
