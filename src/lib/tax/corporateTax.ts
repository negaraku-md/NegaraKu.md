// Malaysia corporate income tax — pure, client-safe, unit-tested. Standard rate
// 24%; a qualifying SME pays 15% on the first RM150,000 of chargeable income,
// 17% on the next RM450,000 (to RM600,000) and 24% above. SME status needs: tax
// resident + incorporated in Malaysia, paid-up ordinary capital <= RM2.5m at the
// start of the basis period, gross business income <= RM50m, and (from YA2024)
// not more than 20% foreign-owned.
//   Sources: Income Tax Act 1967 Schedule 1 Part I; NegaraKu "Corporate Tax Rates
//   & SME Test". NOTE: Budget 2027 announced 14%/16% lower bands from YA2027 —
//   NOT law yet, so not applied here.

export interface CorpBand { upTo: number | null; rate: number }

export const CORP = {
  asOf: '2026-01-01',
  standardRate: 0.24,
  smeBands: [
    { upTo: 150_000, rate: 0.15 },
    { upTo: 600_000, rate: 0.17 },
    { upTo: null, rate: 0.24 },
  ] as CorpBand[],
  smeTests: { paidUpCapitalMax: 2_500_000, grossBusinessIncomeMax: 50_000_000, foreignOwnershipMax: 0.20 },
  sources: [
    { title: 'Income Tax Act 1967, Schedule 1 Part I', url: 'https://lom.agc.gov.my/' },
    { title: 'Corporate Tax Rates & SME Test (NegaraKu.md)', url: 'https://negaraku.md/en/taxation/corporate-tax-rates' },
  ],
};

const r2 = (n: number) => Math.round(n * 100) / 100;

export interface SmeEligibilityInput {
  residentIncorporated: boolean;   // resident AND incorporated in Malaysia
  paidUpCapital: number;           // ordinary share capital at start of basis period
  grossBusinessIncome: number;
  foreignOwnershipPct: number;     // fraction, e.g. 0.2
}

/** Does the company qualify for the SME rate? (The related-company test also
 *  applies and cannot be auto-checked here — surfaced as a caveat in the UI.) */
export function qualifiesAsSme(i: SmeEligibilityInput, t = CORP.smeTests): boolean {
  return i.residentIncorporated
    && (i.paidUpCapital || 0) <= t.paidUpCapitalMax
    && (i.grossBusinessIncome || 0) <= t.grossBusinessIncomeMax
    && (i.foreignOwnershipPct || 0) <= t.foreignOwnershipMax;
}

function taxOnBands(income: number, bands: CorpBand[]): number {
  let tax = 0, prev = 0;
  for (const b of bands) {
    const ceil = b.upTo ?? Infinity;
    if (income <= prev) break;
    tax += (Math.min(income, ceil) - prev) * b.rate;
    prev = ceil;
  }
  return tax;
}

export interface CorpResult {
  chargeableIncome: number;
  isSme: boolean;
  tax: number;
  effectiveRate: number;   // fraction
  asOf: string;
}

export function computeCorporateTax(chargeableIncome: number, isSme: boolean): CorpResult {
  const income = Math.max(0, chargeableIncome || 0);
  const tax = isSme ? taxOnBands(income, CORP.smeBands) : income * CORP.standardRate;
  return {
    chargeableIncome: income,
    isSme,
    tax: r2(tax),
    effectiveRate: income > 0 ? r2((tax / income) * 10000) / 10000 : 0,
    asOf: CORP.asOf,
  };
}
