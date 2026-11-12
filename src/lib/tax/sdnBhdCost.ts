// Malaysia Sdn Bhd incorporation cost estimator — pure, client-safe, unit-tested.
// Separates the FIXED statutory SSM fees (official, under the Companies Act 2016)
// from the VARIABLE professional fees (company secretary, registered office),
// which the user supplies because they are market-set, not gazetted.
//   Sources: Companies (Fees) rules / SSM published fee schedule; NegaraKu
//   "SSM fees". Update FEES.asOf if SSM revises a fee.

export type CompanyType = 'limited-by-shares' | 'limited-by-guarantee' | 'unlimited';

export const FEES = {
  asOf: '2026-01-01',
  incorporation: {                 // s.14, by company type
    'limited-by-shares': 1_000,
    'limited-by-guarantee': 3_000,
    'unlimited': 1_000,
  } as Record<CompanyType, number>,
  nameReservationPer30Days: 50,    // s.27, max 180 days
  annualReturnPrivate: 150,        // s.68, private company
  sources: [
    { title: 'SSM fee schedule (Companies Act 2016)', url: 'https://www.ssm.com.my/' },
    { title: 'SSM fees (NegaraKu.md)', url: 'https://negaraku.md/en/business/ssm-fees-malaysia' },
  ],
};

const r2 = (n: number) => Math.round(n * 100) / 100;

export interface SdnBhdInput {
  companyType?: CompanyType;              // default limited-by-shares
  nameReservationPeriods?: number;        // 30-day blocks, default 1
  secretaryAnnualFee?: number;            // market, user-supplied
  registeredOfficeAnnualFee?: number;     // market, user-supplied
  includeFirstAnnualReturn?: boolean;     // add the RM150 first annual return
}

export interface SdnBhdResult {
  companyType: CompanyType;
  incorporation: number;      // fixed SSM
  nameReservation: number;    // fixed SSM
  annualReturn: number;       // fixed SSM (if included)
  secretary: number;          // variable (user)
  registeredOffice: number;   // variable (user)
  statutoryTotal: number;     // fixed SSM fees only
  total: number;              // including the professional fees entered
  asOf: string;
}

export function computeSdnBhdCost(input: SdnBhdInput = {}): SdnBhdResult {
  const companyType = input.companyType ?? 'limited-by-shares';
  const incorporation = FEES.incorporation[companyType];
  const periods = Math.max(0, Math.floor(input.nameReservationPeriods ?? 1));
  const nameReservation = periods * FEES.nameReservationPer30Days;
  const annualReturn = input.includeFirstAnnualReturn ? FEES.annualReturnPrivate : 0;
  const secretary = Math.max(0, input.secretaryAnnualFee || 0);
  const registeredOffice = Math.max(0, input.registeredOfficeAnnualFee || 0);

  const statutoryTotal = r2(incorporation + nameReservation + annualReturn);
  const total = r2(statutoryTotal + secretary + registeredOffice);

  return { companyType, incorporation, nameReservation, annualReturn, secretary, registeredOffice, statutoryTotal, total, asOf: FEES.asOf };
}
