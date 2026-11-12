// Accuracy tests for the civic/business tools: SST threshold checker, zakat,
// and EPF retirement projection. Bundles each TS engine with esbuild.
//   node scripts/test-more-tools.mjs

import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
async function load(rel) {
  const out = await build({ entryPoints: [join(ROOT, rel)], bundle: true, format: 'esm', platform: 'neutral', write: false });
  return import('data:text/javascript;base64,' + Buffer.from(out.outputFiles[0].text).toString('base64'));
}
const { checkSst } = await load('src/lib/tax/sstThreshold.ts');
const { computeZakat } = await load('src/lib/tax/zakat.ts');
const { computeEpfRetirement } = await load('src/lib/tax/epfRetirement.ts');

let pass = 0, fail = 0;
const eq = (name, got, want, tol = 0.02) => { const ok = Math.abs(got - want) <= tol; console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}: got ${got} want ${want}`); ok ? pass++ : fail++; };
const ok = (name, cond, d = '') => { console.log(`${cond ? 'PASS' : 'FAIL'}  ${name} ${d}`); cond ? pass++ : fail++; };

// --- SST threshold ---
const s1 = checkSst({ group: 'service-general', turnover12m: 400_000 });
ok('SST general under', s1.mustRegister === false, `headroom ${s1.headroom}`);
eq('SST general headroom', s1.headroom, 100_000);
ok('SST general over', checkSst({ group: 'service-general', turnover12m: 600_000 }).mustRegister === true);
const s2 = checkSst({ group: 'service-fnb-healthcare-construction', turnover12m: 1_200_000 });
eq('SST F&B threshold', s2.threshold, 1_500_000);
ok('SST F&B under 1.5m', s2.mustRegister === false, `headroom ${s2.headroom}`);
ok('SST nil any supply triggers', checkSst({ group: 'service-nil', turnover12m: 1 }).mustRegister === true);
ok('SST nil zero no trigger', checkSst({ group: 'service-nil', turnover12m: 0 }).mustRegister === false);
ok('SST sales tax at exactly 500k', checkSst({ group: 'sales-tax', turnover12m: 500_000 }).mustRegister === true);

// --- Zakat (2.5% above nisab) ---
eq('Zakat income 40k zakatable', computeZakat({ type: 'income', amount: 60_000, deductions: 20_000, nisab: 30_000 }).zakatPayable, 1_000);
eq('Zakat below nisab', computeZakat({ type: 'savings', amount: 25_000, nisab: 30_000 }).zakatPayable, 0);
eq('Zakat business 100k', computeZakat({ type: 'business', amount: 100_000, nisab: 30_000 }).zakatPayable, 2_500);
eq('Zakat net zero', computeZakat({ type: 'income', amount: 50_000, deductions: 50_000, nisab: 30_000 }).zakatPayable, 0);

// --- EPF retirement projection ---
const e = computeEpfRetirement({ currentBalance: 100_000, monthlySalary: 5_000, currentAge: 30, retirementAge: 60, annualDividend: 0.055 });
eq('EPF years', e.yearsToRetirement, 30);
eq('EPF monthly contribution (24% of 5000)', e.monthlyContribution, 1_200);
eq('EPF total contributions', e.totalContributions, 432_000);
ok('EPF projected ~1.54m', e.projectedBalance > 1_540_000 && e.projectedBalance < 1_543_000, `(${e.projectedBalance})`);
ok('EPF dividends = projected - current - contrib', Math.abs(e.totalDividends - (e.projectedBalance - 100_000 - 432_000)) < 1);
// Salary > RM5,000 uses the 12% employer share.
eq('EPF high-wage monthly (23% of 8000)', computeEpfRetirement({ currentBalance: 0, monthlySalary: 8_000, currentAge: 40, annualDividend: 0.05 }).monthlyContribution, 1_840);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
