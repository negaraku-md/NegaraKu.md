// Accuracy tests for the finance/property tools (stamp duty, RPGT, car loan,
// home financing). Bundles each TS engine with esbuild and asserts against
// hand-worked values and our vetted article examples.
//   node scripts/test-finance-tools.mjs

import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
async function load(rel) {
  const out = await build({ entryPoints: [join(ROOT, rel)], bundle: true, format: 'esm', platform: 'neutral', write: false });
  return import('data:text/javascript;base64,' + Buffer.from(out.outputFiles[0].text).toString('base64'));
}

const { computeStampDuty } = await load('src/lib/tax/stampDuty.ts');
const { computeRpgt } = await load('src/lib/tax/rpgt.ts');
const { computeCarLoan } = await load('src/lib/tax/carLoan.ts');
const { computeHomeFinancing } = await load('src/lib/tax/homeFinancing.ts');

let pass = 0, fail = 0;
const eq = (name, got, want, tol = 0.02) => {
  const ok = Math.abs(got - want) <= tol;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}: got ${got} want ${want}`);
  ok ? pass++ : fail++;
};
const ok = (name, cond, detail = '') => { console.log(`${cond ? 'PASS' : 'FAIL'}  ${name} ${detail}`); cond ? pass++ : fail++; };

// --- Stamp duty (item 32(a) ladder, loan 0.5%, share 0.3%, min RM10) ---
eq('SD property RM450k', computeStampDuty({ kind: 'property-transfer', amount: 450_000 }).duty, 8000);
eq('SD property RM600k', computeStampDuty({ kind: 'property-transfer', amount: 600_000 }).duty, 12000);
eq('SD property RM1.2m', computeStampDuty({ kind: 'property-transfer', amount: 1_200_000 }).duty, 32000);
eq('SD loan RM405k (0.5%)', computeStampDuty({ kind: 'loan', amount: 405_000 }).duty, 2025);
eq('SD share RM50k (0.3%)', computeStampDuty({ kind: 'share-transfer', amount: 50_000 }).duty, 150);
eq('SD first-home exempt', computeStampDuty({ kind: 'property-transfer', amount: 450_000, firstHomeExempt: true }).duty, 0);
eq('SD minimum RM10', computeStampDuty({ kind: 'property-transfer', amount: 500 }).duty, 10);
eq('SD foreign residential 8%', computeStampDuty({ kind: 'property-transfer', amount: 1_000_000, foreignResidential: true }).duty, 80000);

// --- RPGT: the vetted article's worked example (Cahaya Bina, Part II company) ---
const cb = computeRpgt({
  disposer: 'company', acquisitionDate: '2021-03-15', disposalDate: '2026-06-20',
  disposalPrice: 1_300_000, acquisitionPrice: 800_000,
  acquisitionCosts: 28_000, enhancementCosts: 135_000, disposalCosts: 45_000, recoveries: 30_000,
});
eq('RPGT example chargeable gain', cb.chargeableGain, 322_000);
ok('RPGT example 6th-year', cb.year === 6, `(year ${cb.year})`);
eq('RPGT example rate 10%', cb.rate, 0.10);
eq('RPGT example payable', cb.rpgtPayable, 32_200);
eq('RPGT example retention RM39k', cb.retentionAmount, 39_000);
// Citizen year 4 (20%), Schedule 4 floor RM10,000.
const c4 = computeRpgt({ disposer: 'citizen-pr', acquisitionDate: '2021-01-01', disposalDate: '2024-06-01', disposalPrice: 600_000, acquisitionPrice: 500_000 });
ok('RPGT citizen year 4', c4.year === 4, `(year ${c4.year})`);
eq('RPGT citizen Sch4 = 10k', c4.schedule4Exemption, 10_000);
eq('RPGT citizen y4 payable', c4.rpgtPayable, (100_000 - 10_000) * 0.20); // 18,000
// Foreigner year 5 — no taper, flat 30%, 7% retention.
const f5 = computeRpgt({ disposer: 'foreigner', acquisitionDate: '2021-01-01', disposalDate: '2025-06-01', disposalPrice: 700_000, acquisitionPrice: 500_000 });
ok('RPGT foreigner year 5', f5.year === 5, `(year ${f5.year})`);
eq('RPGT foreigner rate 30%', f5.rate, 0.30);
eq('RPGT foreigner payable', f5.rpgtPayable, (200_000 - 20_000) * 0.30); // Sch4=max(10k,20k)=20k -> 54,000
eq('RPGT foreigner retention 7%', f5.retentionAmount, 49_000);

// --- Car loan (flat-rate HP) ---
const car = computeCarLoan({ vehiclePrice: 100_000, downPaymentPct: 0.10, flatRate: 0.035, tenureYears: 9 });
eq('Car loan amount', car.loanAmount, 90_000);
eq('Car total interest', car.totalInterest, 28_350);
eq('Car total payable', car.totalPayable, 118_350);
eq('Car monthly', car.monthlyInstalment, 1095.83);
ok('Car effective APR ~2x flat', car.effectiveApr > 0.060 && car.effectiveApr < 0.068, `(apr ${car.effectiveApr})`);

// --- Home financing (first home ≤ RM500k, 90% LTV, 4%, 30y) ---
const h = computeHomeFinancing({ price: 500_000, homeNumber: 1, interestRate: 0.04, tenureYears: 30, firstHome: true });
eq('Home loan (90% LTV)', h.loanAmount, 450_000);
eq('Home down payment', h.downPayment, 50_000);
eq('Home MOT stamp exempt', h.stampDutyMOT, 0);
eq('Home loan stamp exempt', h.stampDutyLoan, 0);
eq('Home legal SPA (1.25%)', h.legalFeeSPA, 6250);
eq('Home legal loan (1.25%)', h.legalFeeLoan, 5625);
eq('Home upfront cash', h.upfrontCash, 61_875);
eq('Home monthly instalment', h.monthlyInstalment, 2148.09, 1.0);
// Non-first-home RM700k: full duties + tiered legal fees.
const h2 = computeHomeFinancing({ price: 700_000, homeNumber: 1, interestRate: 0.042, tenureYears: 30 });
eq('Home2 MOT stamp', h2.stampDutyMOT, 15000);
eq('Home2 loan stamp (0.5% of 630k)', h2.stampDutyLoan, 3150);
eq('Home2 legal SPA (6250+2000)', h2.legalFeeSPA, 8250);
eq('Home2 legal loan (6250+1300)', h2.legalFeeLoan, 7550);
eq('Home2 upfront cash', h2.upfrontCash, 103_950);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
