// Malaysia car loan — flat-rate hire purchase (the Malaysian way), pure and
// unit-tested. Vehicle financing here is a Hire-Purchase Act 1967 agreement
// quoted at a FLAT rate: interest is charged on the full principal for the whole
// tenure, so the effective (reducing-balance) rate is roughly double the flat
// rate. This engine shows both, so the quoted "3.5%" is seen for what it costs.
//   Sources: Hire-Purchase Act 1967; standard flat-rate HP arithmetic.

const r2 = (n: number) => Math.round(n * 100) / 100;

export interface CarLoanInput {
  vehiclePrice: number;
  /** Down payment as a fraction of price (e.g. 0.10) — HP minimum is typically 10%. */
  downPaymentPct?: number;
  /** Or an explicit down-payment amount (takes precedence over the percentage). */
  downPaymentAmount?: number;
  /** Quoted FLAT annual interest rate as a fraction (e.g. 0.035 for 3.5%). */
  flatRate: number;
  tenureYears: number;
}

export interface CarLoanResult {
  loanAmount: number;
  downPayment: number;
  months: number;
  totalInterest: number;
  totalPayable: number;        // principal + interest
  monthlyInstalment: number;
  flatRate: number;
  effectiveApr: number;        // true reducing-balance APR (fraction), numerically solved
  asOf: string;
}

/** True APR from a known instalment via bisection on the monthly rate.
 *  Solves  principal = pmt · (1 − (1+i)^-n) / i  for i, then ×12. */
function effectiveApr(principal: number, pmt: number, n: number): number {
  if (principal <= 0 || pmt <= 0 || n <= 0) return 0;
  const pv = (i: number) => (i === 0 ? pmt * n : pmt * (1 - Math.pow(1 + i, -n)) / i);
  let lo = 1e-9, hi = 1.0; // monthly rate bounds (0% .. 100%/mo)
  for (let k = 0; k < 200; k++) {
    const mid = (lo + hi) / 2;
    // pv decreases as i increases; we want pv(i) = principal.
    if (pv(mid) > principal) lo = mid; else hi = mid;
  }
  return r2(((lo + hi) / 2) * 12 * 10000) / 10000; // fraction, 4 dp
}

export function computeCarLoan(input: CarLoanInput): CarLoanResult {
  const price = Math.max(0, input.vehiclePrice || 0);
  const down = input.downPaymentAmount != null
    ? Math.min(price, Math.max(0, input.downPaymentAmount))
    : price * Math.min(1, Math.max(0, input.downPaymentPct ?? 0.10));
  const loanAmount = Math.max(0, price - down);
  const years = Math.max(0, input.tenureYears || 0);
  const months = Math.round(years * 12);
  const flatRate = Math.max(0, input.flatRate || 0);

  const totalInterest = loanAmount * flatRate * years;
  const totalPayable = loanAmount + totalInterest;
  const monthlyInstalment = months > 0 ? totalPayable / months : 0;

  return {
    loanAmount: r2(loanAmount),
    downPayment: r2(down),
    months,
    totalInterest: r2(totalInterest),
    totalPayable: r2(totalPayable),
    monthlyInstalment: r2(monthlyInstalment),
    flatRate,
    effectiveApr: effectiveApr(loanAmount, monthlyInstalment, months),
    asOf: '2026-01-01',
  };
}
