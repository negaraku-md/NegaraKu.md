// Malaysia audit exemption (private companies) — pure, client-safe, unit-tested.
// SSM Practice Directive 10/2024 phases the thresholds in. A company must meet at
// least TWO of three tests (revenue, total assets, employees) for the current and
// the two preceding financial years, all tested against the CURRENT phase's
// thresholds. The phase is fixed by when the financial period COMMENCES.
//   Sources: SSM Practice Directive 10/2024 (Companies Act 2016 s.267(2));
//   NegaraKu "Audit exemption thresholds". Dormant and zero-revenue companies
//   have separate categories (a UI caveat).

export interface Phase { revenue: number; assets: number; employees: number }

export const AUDIT = {
  asOf: '2026-01-01',
  phases: {
    2025: { revenue: 1_000_000, assets: 1_000_000, employees: 10 },
    2026: { revenue: 2_000_000, assets: 2_000_000, employees: 20 },
    2027: { revenue: 3_000_000, assets: 3_000_000, employees: 30 },
  } as Record<number, Phase>,
  sources: [
    { title: 'SSM Practice Directive 10/2024 (Companies Act 2016 s.267(2))', url: 'https://www.ssm.com.my/' },
    { title: 'Audit exemption thresholds (NegaraKu.md)', url: 'https://negaraku.md/en/audit/audit-exemption-thresholds' },
  ],
};

/** The phase thresholds for a financial period commencing in `year`. */
export function phaseFor(year: number): Phase {
  if (year <= 2025) return AUDIT.phases[2025];
  if (year === 2026) return AUDIT.phases[2026];
  return AUDIT.phases[2027];
}

export interface YearFigures { revenue: number; assets: number; employees: number }

export interface YearResult {
  passes: { revenue: boolean; assets: boolean; employees: boolean };
  count: number;
  meets: boolean;   // at least two of three
}

export interface AuditResult {
  commenceYear: number;
  thresholds: Phase;
  perYear: YearResult[];
  exempt: boolean;
  asOf: string;
}

function assess(f: YearFigures, t: Phase): YearResult {
  const passes = {
    revenue: (f.revenue || 0) <= t.revenue,
    assets: (f.assets || 0) <= t.assets,
    employees: (f.employees || 0) <= t.employees,
  };
  const count = Number(passes.revenue) + Number(passes.assets) + Number(passes.employees);
  return { passes, count, meets: count >= 2 };
}

/** years = [current, prior-1, prior-2]; all tested against the current phase. */
export function checkAuditExemption(commenceYear: number, years: YearFigures[]): AuditResult {
  const thresholds = phaseFor(commenceYear);
  const perYear = years.map((y) => assess(y, thresholds));
  // Exempt only if every assessed year meets at least two of three.
  const exempt = perYear.length > 0 && perYear.every((y) => y.meets);
  return { commenceYear, thresholds, perYear, exempt, asOf: AUDIT.asOf };
}
