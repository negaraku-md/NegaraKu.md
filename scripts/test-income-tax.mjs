// Accuracy test for the Malaysia income-tax engine (src/lib/tax/incomeTax.ts).
// No test runner is wired in this repo, so this bundles the TS engine with esbuild
// (already a dependency) and asserts against values worked out by hand from the
// LHDN-cited articles taxation/personal-tax-rates and personal-tax-reliefs.
//
//   node scripts/test-income-tax.mjs      # exits non-zero on any mismatch
//
// Re-run this whenever the rate data changes (e.g. a Budget revises a figure).

import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = await build({
  entryPoints: [join(ROOT, 'src/lib/tax/incomeTax.ts')],
  bundle: true, format: 'esm', platform: 'neutral', write: false,
});
const code = out.outputFiles[0].text;
const { taxOnChargeable, computeTax, TAX_YEARS } =
  await import('data:text/javascript;base64,' + Buffer.from(code).toString('base64'));

const B25 = TAX_YEARS[2025].residentBands;
const B27 = TAX_YEARS[2027].residentBands;
let pass = 0, fail = 0;
const eq = (name, got, want) => {
  const ok = Math.abs(got - want) < 0.005;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}: got ${got} want ${want}`);
  ok ? pass++ : fail++;
};

// Band math (worked examples from personal-tax-rates.md)
eq('tax 50,000 (YA2025)', taxOnChargeable(50000, B25), 1500);
eq('tax 120,000 (YA2025) = 9400 + 25% of 20000', taxOnChargeable(120000, B25), 14400);
eq('tax 35,000 (YA2025)', taxOnChargeable(35000, B25), 600);
eq('tax 0', taxOnChargeable(0, B25), 0);

// Caps + chargeable + payable
const r1 = computeTax({ ya: 2025, resident: true, income: 60000, reliefs: { epf: 6600, lifestyle: 3000 } });
eq('r1 reliefs (self9000+epf4000cap+lifestyle2500cap)', r1.totalReliefs, 15500);
eq('r1 chargeable', r1.chargeableIncome, 44500);
eq('r1 payable (600 + 6% of 9500)', r1.taxPayable, 1170);

// Individual rebate when CI <= 35,000
const r2 = computeTax({ ya: 2025, resident: true, income: 40000 });
eq('r2 chargeable', r2.chargeableIncome, 31000);
eq('r2 individual rebate', r2.rebates.individual, 400);
eq('r2 payable (480 - 400)', r2.taxPayable, 80);

// Non-resident flat 30%
const r3 = computeTax({ ya: 2025, resident: false, income: 60000 });
eq('r3 non-resident (30% of 60000)', r3.taxPayable, 18000);

// Zakat rebate capped at tax
const r4 = computeTax({ ya: 2025, resident: true, income: 100000, zakat: 2000 });
eq('r4 tax before rebate', r4.taxBeforeRebate, 7690);
eq('r4 zakat rebate', r4.rebates.zakat, 2000);
eq('r4 payable', r4.taxPayable, 5690);

// Dividend 2% layer over RM100k
const r5 = computeTax({ ya: 2025, resident: true, income: 100000, dividendIncome: 150000 });
eq('r5 dividend surcharge (2% of 50000)', r5.dividendSurcharge, 1000);
eq('r5 payable (7690 + 1000)', r5.taxPayable, 8690);

// YA2027 announced scale (self relief 12000; new 24% band)
eq('tax 120,000 (YA2027) = 9100 + 24% of 20000', taxOnChargeable(120000, B27), 13900);
const r6 = computeTax({ ya: 2027, resident: true, income: 60000 });
eq('r6 YA2027 chargeable (60000-12000)', r6.chargeableIncome, 48000);
eq('r6 YA2027 payable (600 + 6% of 13000)', r6.taxPayable, 1380);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
