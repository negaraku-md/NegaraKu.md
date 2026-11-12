// Accuracy test for the road tax engine (src/lib/tax/roadTax.ts) — Peninsular
// private saloon JPJ bands. Bundles the TS with esbuild.
//   node scripts/test-road-tax.mjs

import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = await build({ entryPoints: [join(ROOT, 'src/lib/tax/roadTax.ts')], bundle: true, format: 'esm', platform: 'neutral', write: false });
const { computeRoadTax } = await import('data:text/javascript;base64,' + Buffer.from(out.outputFiles[0].text).toString('base64'));

let pass = 0, fail = 0;
const eq = (name, got, want) => { const ok = Math.abs(got - want) < 0.02; console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}: got ${got} want ${want}`); ok ? pass++ : fail++; };
const is = (name, got, want) => { const ok = got === want; console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}: got ${JSON.stringify(got)} want ${JSON.stringify(want)}`); ok ? pass++ : fail++; };

eq('1000cc', computeRoadTax(1000).annual, 20);
eq('1200cc', computeRoadTax(1200).annual, 55);
eq('1300cc', computeRoadTax(1300).annual, 70);
eq('1500cc', computeRoadTax(1500).annual, 90);
eq('1600cc', computeRoadTax(1600).annual, 90);
eq('1800cc', computeRoadTax(1800).annual, 280);        // 200 + 0.40*200
eq('1799cc', computeRoadTax(1799).annual, 279.6);      // 200 + 0.40*199
eq('2000cc', computeRoadTax(2000).annual, 380);        // 280 + 0.50*200
eq('2500cc', computeRoadTax(2500).annual, 880);        // 380 + 1.00*500
eq('3000cc', computeRoadTax(3000).annual, 2130);       // 880 + 2.50*500
eq('6498cc V12', computeRoadTax(6498).annual, 17871);  // 2130 + 4.50*3498 — matches JPJ ref
is('band label 1500cc', computeRoadTax(1500).bandLabel, '1401–1600 cc');
is('band label 6498cc', computeRoadTax(6498).bandLabel, '> 3000 cc');

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
