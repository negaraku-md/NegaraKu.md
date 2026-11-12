// Malaysia home financing — pure, client-safe, unit-tested. Pulls the real
// upfront cost of a purchase together: loan margin (LTV), down payment, the
// monthly instalment (reducing-balance), MOT + loan-agreement stamp duty (reusing
// stampDuty.ts) and conveyancing legal fees (Solicitors' Remuneration Order 2023).
//
// RATE DATA IS DATED + CITED. Update HOME.asOf when the SRO scale, the BNM margin
// caps, or a first-home stamp-duty exemption change.
//   Sources: Solicitors' Remuneration Order 2023 (P.U.(A) 207/2023, tier 1 raised
//   to 1.25% from 15 Jul 2023); Stamp Act 1949 First Schedule; BNM macroprudential
//   margin (3rd home 70%); NegaraKu "Pinjaman Perumahan dan Pembiayaan Gadai Janji".

import { computeStampDuty, type Band, dutyOnBands } from './stampDuty';

const r2 = (n: number) => Math.round(n * 100) / 100;

export interface HomeRates {
  asOf: string;
  maxTenureYears: number;
  // Typical loan margin (LTV) by which home this is for the borrower.
  ltvFirstSecond: number;   // market practice; BNM sets no cap
  ltvThirdPlus: number;     // BNM cap (2010)
  // Conveyancing legal-fee scale (SRO 2023), applied to the SPA value and again
  // to the loan value. Progressive bands, rate as a fraction.
  legalFeeScale: Band[];
  legalFeeMin: number;
  // First-home full stamp-duty exemption (MOT + loan) — price ceiling + window.
  firstHomeExemptCeiling: number;
  firstHomeExemptUntil: string;
  sources: { title: string; url: string }[];
}

export const HOME: HomeRates = {
  asOf: '2026-01-01',
  maxTenureYears: 35,
  ltvFirstSecond: 0.90,
  ltvThirdPlus: 0.70,
  legalFeeScale: [
    { upTo: 500_000, rate: 0.0125 },     // first RM500k — 1.25% (SRO 2023)
    { upTo: 1_000_000, rate: 0.0100 },   // next RM500k
    { upTo: 3_000_000, rate: 0.0070 },   // next RM2m
    { upTo: 5_000_000, rate: 0.0060 },   // next RM2m
    { upTo: 7_500_000, rate: 0.0050 },   // next RM2.5m
    { upTo: null, rate: 0.0050 },        // excess — negotiable, not above 0.5%
  ],
  legalFeeMin: 500,
  firstHomeExemptCeiling: 500_000,
  firstHomeExemptUntil: '2027-12-31',
  sources: [
    { title: 'Solicitors’ Remuneration Order 2023 (P.U.(A) 207/2023)', url: 'https://conventuslaw.com/report/malaysia-the-solicitors-remuneration-order-2023/' },
    { title: 'Stamp Act 1949, First Schedule (items 27, 32)', url: 'https://lom.agc.gov.my/' },
    { title: 'Pinjaman Perumahan dan Pembiayaan Gadai Janji (NegaraKu.md)', url: 'https://negaraku.md/property/home-loan-mortgage-financing' },
  ],
};

/** Reducing-balance monthly instalment (standard annuity). */
export function monthlyInstalment(principal: number, annualRate: number, years: number): number {
  const n = Math.round(years * 12);
  if (n <= 0) return 0;
  const i = annualRate / 12;
  if (i === 0) return r2(principal / n);
  return r2((principal * i) / (1 - Math.pow(1 + i, -n)));
}

function legalFee(value: number, rates: HomeRates): number {
  if (value <= 0) return 0;
  return r2(Math.max(rates.legalFeeMin, dutyOnBands(value, rates.legalFeeScale)));
}

export interface HomeInput {
  price: number;
  /** Which home this is for the borrower (drives the default margin). */
  homeNumber?: 1 | 2 | 3;
  /** Override the loan margin (LTV) as a fraction; else derived from homeNumber. */
  ltv?: number;
  /** Effective lending rate as a fraction (e.g. 0.041). */
  interestRate: number;
  tenureYears: number;
  /** Eligible first-home buyer (price ≤ ceiling, within the exemption window). */
  firstHome?: boolean;
  /** Optional: gross monthly income, to show the debt-service ratio. */
  monthlyIncome?: number;
}

export interface HomeResult {
  price: number;
  ltv: number;
  loanAmount: number;
  downPayment: number;
  months: number;
  monthlyInstalment: number;
  stampDutyMOT: number;
  stampDutyLoan: number;
  legalFeeSPA: number;
  legalFeeLoan: number;
  firstHomeExemptApplied: boolean;
  upfrontCash: number;        // down payment + all duties + legal fees
  dsr: number | null;         // instalment / income, if income given
  asOf: string;
}

export function computeHomeFinancing(input: HomeInput, rates: HomeRates = HOME): HomeResult {
  const price = Math.max(0, input.price || 0);
  const homeNumber = input.homeNumber ?? 1;
  const ltv = Math.min(1, Math.max(0, input.ltv ?? (homeNumber >= 3 ? rates.ltvThirdPlus : rates.ltvFirstSecond)));
  const loanAmount = r2(price * ltv);
  const downPayment = r2(price - loanAmount);
  const tenure = Math.min(rates.maxTenureYears, Math.max(0, input.tenureYears || 0));
  const months = Math.round(tenure * 12);

  const instalment = monthlyInstalment(loanAmount, Math.max(0, input.interestRate || 0), tenure);

  const exempt = !!input.firstHome && price <= rates.firstHomeExemptCeiling;
  const stampDutyMOT = computeStampDuty({ kind: 'property-transfer', amount: price, firstHomeExempt: exempt }).duty;
  const stampDutyLoan = computeStampDuty({ kind: 'loan', amount: loanAmount, firstHomeExempt: exempt }).duty;
  const legalFeeSPA = legalFee(price, rates);
  const legalFeeLoan = legalFee(loanAmount, rates);

  const upfrontCash = r2(downPayment + stampDutyMOT + stampDutyLoan + legalFeeSPA + legalFeeLoan);
  const dsr = input.monthlyIncome && input.monthlyIncome > 0 ? r2((instalment / input.monthlyIncome) * 1000) / 10 : null;

  return {
    price, ltv, loanAmount, downPayment, months,
    monthlyInstalment: instalment,
    stampDutyMOT, stampDutyLoan, legalFeeSPA, legalFeeLoan,
    firstHomeExemptApplied: exempt,
    upfrontCash,
    dsr,
    asOf: rates.asOf,
  };
}
