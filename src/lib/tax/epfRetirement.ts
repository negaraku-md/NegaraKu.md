// Malaysia EPF (KWSP) retirement projection — pure, client-safe, unit-tested.
// Projects a member's EPF balance to the retirement age by compounding the
// annual dividend and adding yearly contributions (employee + employer shares).
// The dividend is an ASSUMPTION the user sets (EPF has recently paid ~5–6%);
// contributions use the statutory shares (11% employee; 12%/13% employer).
//   Sources: KWSP mandatory contribution rates; EPF historical dividends.
//   This is a projection, not a guarantee — dividends vary year to year.

const r2 = (n: number) => Math.round(n * 100) / 100;

export const EPF_DEFAULTS = {
  asOf: '2026-01-01',
  employeeRate: 0.11,
  employerLow: 0.13,          // monthly wage <= RM5,000
  employerHigh: 0.12,         // monthly wage > RM5,000
  employerThreshold: 5_000,
  retirementAge: 60,
  assumedDividend: 0.055,     // editable; recent EPF conventional dividends ~5–6%
  sources: [
    { title: 'KWSP mandatory contribution rates', url: 'https://www.kwsp.gov.my/en/employer/responsibilities/mandatory-contribution' },
    { title: 'EPF (NegaraKu.md glossary)', url: 'https://negaraku.md/en/glossary/epf' },
  ],
};

export interface EpfInput {
  currentBalance: number;
  monthlySalary: number;
  currentAge: number;
  retirementAge?: number;        // default 60
  annualDividend?: number;       // fraction, default 0.055
  annualSalaryGrowth?: number;   // fraction, default 0
  /** 60+ members pay no employee share; for a pre-60 projection leave false. */
  employeeContributes?: boolean; // default true
}

export interface EpfResult {
  yearsToRetirement: number;
  projectedBalance: number;
  totalContributions: number;
  totalDividends: number;
  monthlyContribution: number;   // first-year monthly (employee + employer)
  assumedDividend: number;
  asOf: string;
}

export function computeEpfRetirement(input: EpfInput, d = EPF_DEFAULTS): EpfResult {
  const retireAt = input.retirementAge ?? d.retirementAge;
  const years = Math.max(0, Math.floor(retireAt - (input.currentAge || 0)));
  const div = input.annualDividend ?? d.assumedDividend;
  const growth = input.annualSalaryGrowth ?? 0;
  const empContributes = input.employeeContributes ?? true;

  let balance = Math.max(0, input.currentBalance || 0);
  let salary = Math.max(0, input.monthlySalary || 0);
  let totalContributions = 0;
  let firstMonthly = 0;

  for (let y = 0; y < years; y++) {
    const employerRate = salary <= d.employerThreshold ? d.employerLow : d.employerHigh;
    const monthly = salary * ((empContributes ? d.employeeRate : 0) + employerRate);
    if (y === 0) firstMonthly = monthly;
    const annualContribution = monthly * 12;
    // Dividend on the opening balance, then add the year's contributions
    // (conservative: current-year contributions earn no dividend in-year).
    balance = balance * (1 + div) + annualContribution;
    totalContributions += annualContribution;
    salary = salary * (1 + growth);
  }

  const projectedBalance = r2(balance);
  const totalDividends = r2(projectedBalance - Math.max(0, input.currentBalance || 0) - totalContributions);

  return {
    yearsToRetirement: years,
    projectedBalance,
    totalContributions: r2(totalContributions),
    totalDividends,
    monthlyContribution: r2(firstMonthly),
    assumedDividend: div,
    asOf: d.asOf,
  };
}
