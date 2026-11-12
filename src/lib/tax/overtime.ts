// Malaysia Employment Act 1955 overtime / rest-day / public-holiday pay and
// unpaid-leave deduction — pure, client-safe, unit-tested. Ordinary rate of pay
// (ORP) for a monthly-rated employee = monthly wages / 26 (s.60I); hourly rate =
// ORP / normal daily hours. Multipliers: normal-day overtime 1.5x hourly
// (s.60A(3)(a)); rest-day excess hours 2x; public-holiday excess hours 3x.
//   Sources: Employment Act 1955 ss.60, 60A, 60D, 60I; NegaraKu "Working hours,
//   rest days and overtime pay". NOTE: the rate provisions do not apply above
//   RM4,000/month unless First Schedule para 2 applies (a UI caveat).

const r2 = (n: number) => Math.round(n * 100) / 100;

export const OT = {
  asOf: '2026-01-01',
  divisor: 26,              // monthly wages / 26 = ordinary rate of pay (s.60I)
  normalHoursDefault: 8,
  otMultiplier: 1.5,        // normal working day (s.60A(3)(a))
  restDayExcess: 2.0,       // rest-day hours beyond normal (s.60(3))
  holidayExcess: 3.0,       // public-holiday hours beyond normal (s.60D(3))
  holidayWithinDays: 2.0,   // public-holiday work within normal hours: 2 days' ORP
  coverageCap: 4_000,       // rate provisions don't apply above this (with exceptions)
  sources: [
    { title: 'Employment Act 1955, ss.60, 60A, 60D, 60I', url: 'https://lom.agc.gov.my/' },
    { title: 'Working hours, rest days and overtime pay (NegaraKu.md)', url: 'https://negaraku.md/en/employment/working-hours-overtime-malaysia' },
  ],
};

export type DayType = 'normal-ot' | 'rest-day' | 'public-holiday' | 'unpaid-leave';

export interface OtInput {
  monthlyWage: number;
  normalHours?: number;     // normal daily hours (default 8)
  dayType: DayType;
  hours?: number;           // hours worked / overtime hours (for day-work modes)
  days?: number;            // days (for unpaid-leave)
}

export interface OtResult {
  orp: number;              // ordinary rate of pay (per day)
  hourly: number;
  amount: number;           // pay (positive) or deduction magnitude
  isDeduction: boolean;
  breakdown: string;
  asOf: string;
}

export function computeWorkPay(input: OtInput): OtResult {
  const wage = Math.max(0, input.monthlyWage || 0);
  const N = Math.max(1, input.normalHours ?? OT.normalHoursDefault);
  const orp = r2(wage / OT.divisor);
  const hourly = r2(orp / N);
  const h = Math.max(0, input.hours || 0);
  const d = Math.max(0, input.days || 0);

  let amount = 0, isDeduction = false, breakdown = '';

  if (input.dayType === 'unpaid-leave') {
    amount = r2(orp * d);
    isDeduction = true;
    breakdown = `${d} × ORP ${orp}`;
  } else if (input.dayType === 'normal-ot') {
    amount = r2(h * hourly * OT.otMultiplier);
    breakdown = `${h}h × ${hourly} × ${OT.otMultiplier}`;
  } else if (input.dayType === 'rest-day') {
    // Monthly-rated: <= half normal hours = half day's ORP; up to normal = 1 day;
    // beyond normal = + 2x hourly for the excess.
    if (h <= N / 2) { amount = r2(0.5 * orp); breakdown = `½ day ORP`; }
    else if (h <= N) { amount = r2(orp); breakdown = `1 day ORP`; }
    else { amount = r2(orp + (h - N) * hourly * OT.restDayExcess); breakdown = `1 day ORP + ${r2(h - N)}h × ${hourly} × ${OT.restDayExcess}`; }
  } else { // public-holiday
    if (h <= N) { amount = r2(OT.holidayWithinDays * orp); breakdown = `${OT.holidayWithinDays} days' ORP`; }
    else { amount = r2(OT.holidayWithinDays * orp + (h - N) * hourly * OT.holidayExcess); breakdown = `${OT.holidayWithinDays} days' ORP + ${r2(h - N)}h × ${hourly} × ${OT.holidayExcess}`; }
  }

  return { orp, hourly, amount, isDeduction, breakdown, asOf: OT.asOf };
}
