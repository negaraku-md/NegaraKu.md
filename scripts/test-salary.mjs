// Accuracy test for the salary take-home engine (src/lib/tax/salaryTakeHome.ts).
// Bundles the TS with esbuild and asserts against hand-worked values (EPF 11%,
// SOCSO 0.5% capped at RM6,000, EIS 0.2% capped, PCB via the income-tax engine).
//   node scripts/test-salary.mjs

import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = await build({
  entryPoints: [join(ROOT, 'src/lib/tax/salaryTakeHome.ts')],
  bundle: true, format: 'esm', platform: 'neutral', write: false,
});
const { computeSalary } =
  await import('data:text/javascript;base64,' + Buffer.from(out.outputFiles[0].text).toString('base64'));

let pass = 0, fail = 0;
const eq = (name, got, want) => {
  const ok = Math.abs(got - want) < 0.02;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}: got ${got} want ${want}`);
  ok ? pass++ : fail++;
};

// RM5,000/month: EPF 550, SOCSO 25, EIS 10, PCB 110 (annual tax 1,320 / 12)
const a = computeSalary({ monthlyGross: 5000 });
eq('5k EPF', a.deductions.epf, 550);
eq('5k SOCSO', a.deductions.socso, 25);
eq('5k EIS', a.deductions.eis, 10);
eq('5k PCB', a.deductions.pcb, 110);
eq('5k take-home', a.monthlyTakeHome, 4305);
eq('5k employer EPF (13%)', a.employer.epf, 650);
eq('5k employer total cost', a.employer.totalCost, 5747.5);

// RM3,000/month: below the tax threshold after reliefs + RM400 rebate -> PCB 0
const b = computeSalary({ monthlyGross: 3000 });
eq('3k PCB (rebate cancels tax)', b.deductions.pcb, 0);
eq('3k take-home (3000-330-15-6)', b.monthlyTakeHome, 2649);

// RM8,000/month: SOCSO/EIS capped at the RM6,000 ceiling
const c = computeSalary({ monthlyGross: 8000 });
eq('8k SOCSO capped (0.5% of 6000)', c.deductions.socso, 30);
eq('8k EIS capped (0.2% of 6000)', c.deductions.eis, 12);
eq('8k EPF (11% of 8000)', c.deductions.epf, 880);
eq('8k PCB (annual 6170 / 12)', c.deductions.pcb, 514.17);
eq('8k take-home', c.monthlyTakeHome, 6563.83);

// Age 60+: no employee EPF
const d = computeSalary({ monthlyGross: 5000, age60plus: true });
eq('60+ EPF nil', d.deductions.epf, 0);
eq('60+ take-home', d.monthlyTakeHome, 4830.83);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
