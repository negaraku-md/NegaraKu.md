// Accuracy tests for corporate tax, overtime/leave, and audit-exemption engines.
//   node scripts/test-business-tools.mjs
import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
async function load(rel) {
  const out = await build({ entryPoints: [join(ROOT, rel)], bundle: true, format: 'esm', platform: 'neutral', write: false });
  return import('data:text/javascript;base64,' + Buffer.from(out.outputFiles[0].text).toString('base64'));
}
const { computeCorporateTax, qualifiesAsSme } = await load('src/lib/tax/corporateTax.ts');
const { computeWorkPay } = await load('src/lib/tax/overtime.ts');
const { checkAuditExemption, phaseFor } = await load('src/lib/tax/auditExemption.ts');
const { computeSdnBhdCost } = await load('src/lib/tax/sdnBhdCost.ts');

let pass = 0, fail = 0;
const eq = (name, got, want, tol = 0.02) => { const ok = Math.abs(got - want) <= tol; console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}: got ${got} want ${want}`); ok ? pass++ : fail++; };
const ok = (name, cond, d = '') => { console.log(`${cond ? 'PASS' : 'FAIL'}  ${name} ${d}`); cond ? pass++ : fail++; };

// --- Corporate tax (SME 15/17/24) ---
eq('SME @150k', computeCorporateTax(150_000, true).tax, 22_500);
eq('SME @600k', computeCorporateTax(600_000, true).tax, 99_000);            // 22,500 + 76,500
eq('SME @1m', computeCorporateTax(1_000_000, true).tax, 195_000);           // + 24%*400k
eq('Non-SME @1m (24%)', computeCorporateTax(1_000_000, false).tax, 240_000);
ok('SME eligible at the limits', qualifiesAsSme({ residentIncorporated: true, paidUpCapital: 2_500_000, grossBusinessIncome: 50_000_000, foreignOwnershipPct: 0.20 }));
ok('paid-up > 2.5m disqualifies', !qualifiesAsSme({ residentIncorporated: true, paidUpCapital: 3_000_000, grossBusinessIncome: 10_000_000, foreignOwnershipPct: 0 }));
ok('>20% foreign disqualifies', !qualifiesAsSme({ residentIncorporated: true, paidUpCapital: 1_000_000, grossBusinessIncome: 10_000_000, foreignOwnershipPct: 0.25 }));

// --- Overtime / rest-day / PH / unpaid leave (RM3,000, 8h) ---
const base = { monthlyWage: 3_000, normalHours: 8 };
eq('ORP = 3000/26', computeWorkPay({ ...base, dayType: 'normal-ot', hours: 0 }).orp, 115.38);
eq('hourly rate', computeWorkPay({ ...base, dayType: 'normal-ot', hours: 0 }).hourly, 14.42);
eq('normal OT 3h (1.5x)', computeWorkPay({ ...base, dayType: 'normal-ot', hours: 3 }).amount, 64.89);
eq('rest-day 4h (half ORP)', computeWorkPay({ ...base, dayType: 'rest-day', hours: 4 }).amount, 57.69);
eq('rest-day 6h (1 ORP)', computeWorkPay({ ...base, dayType: 'rest-day', hours: 6 }).amount, 115.38);
eq('rest-day 10h (1 ORP + 2h*2x)', computeWorkPay({ ...base, dayType: 'rest-day', hours: 10 }).amount, 173.06);
eq('public holiday 8h (2 ORP)', computeWorkPay({ ...base, dayType: 'public-holiday', hours: 8 }).amount, 230.76);
eq('public holiday 10h (2 ORP + 2h*3x)', computeWorkPay({ ...base, dayType: 'public-holiday', hours: 10 }).amount, 317.28);
const ul = computeWorkPay({ ...base, dayType: 'unpaid-leave', days: 2 });
eq('unpaid leave 2 days', ul.amount, 230.76);
ok('unpaid leave is a deduction', ul.isDeduction === true);

// --- Audit exemption (PD 10/2024, 2-of-3, current-phase thresholds) ---
eq('2025 phase revenue', phaseFor(2025).revenue, 1_000_000);
eq('2027 phase revenue', phaseFor(2027).revenue, 3_000_000);
const y = (revenue, assets, employees) => ({ revenue, assets, employees });
const exemptCase = checkAuditExemption(2026, [y(1_500_000, 1_000_000, 15), y(1_500_000, 1_000_000, 10), y(1_400_000, 900_000, 10)]);
ok('2026: all years 2-of-3 -> exempt', exemptCase.exempt === true);
eq('2026 phase threshold', exemptCase.thresholds.revenue, 2_000_000);
const notExempt = checkAuditExemption(2026, [y(2_500_000, 2_500_000, 15), y(1_000_000, 1_000_000, 10), y(1_000_000, 1_000_000, 10)]);
ok('current year fails 2-of-3 -> not exempt', notExempt.exempt === false, `(y0 count ${notExempt.perYear[0].count})`);

// --- Sdn Bhd incorporation cost ---
const sb1 = computeSdnBhdCost();                       // defaults: shares, 1 name period
eq('Sdn Bhd default statutory', sb1.statutoryTotal, 1_050);   // 1000 + 50
eq('Sdn Bhd default total', sb1.total, 1_050);
const sb2 = computeSdnBhdCost({ secretaryAnnualFee: 1_200, registeredOfficeAnnualFee: 300, includeFirstAnnualReturn: true });
eq('Sdn Bhd statutory with AR', sb2.statutoryTotal, 1_200);   // 1000 + 50 + 150
eq('Sdn Bhd total with prof fees', sb2.total, 2_700);         // 1200 + 1200 + 300
eq('Sdn Bhd guarantee incorporation', computeSdnBhdCost({ companyType: 'limited-by-guarantee' }).incorporation, 3_000);
eq('Sdn Bhd 2 name periods', computeSdnBhdCost({ nameReservationPeriods: 2 }).nameReservation, 100);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
