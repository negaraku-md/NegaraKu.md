// Accuracy tests for the Malaysia public holidays engine (src/lib/holidays/).
// Bundles the TS with esbuild and asserts against the gazette dataset + the
// state-specific weekend rule.
//   node scripts/test-holidays.mjs

import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = await build({ entryPoints: [join(ROOT, 'src/lib/holidays/engine.ts')], bundle: true, format: 'esm', platform: 'neutral', write: false });
const E = await import('data:text/javascript;base64,' + Buffer.from(out.outputFiles[0].text).toString('base64'));

let pass = 0, fail = 0;
const eq = (name, got, want) => { const ok = got === want; console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}: got ${JSON.stringify(got)} want ${JSON.stringify(want)}`); ok ? pass++ : fail++; };
const ok = (name, cond, d = '') => { console.log(`${cond ? 'PASS' : 'FAIL'}  ${name} ${d}`); cond ? pass++ : fail++; };

// --- scope application ---
ok('CNY 2027 applies to Selangor', E.isHoliday('2027-02-06', 'selangor'));
ok('Gawai applies to Sarawak only', E.isHoliday('2027-06-01', 'sarawak') && !E.isHoliday('2027-06-01', 'selangor'));
ok('Deepavali except Sarawak', E.isHoliday('2027-10-28', 'selangor') && !E.isHoliday('2027-10-28', 'sarawak'));
ok('Thaipusam not in Sabah', !E.isHoliday('2027-01-22', 'sabah'));

// --- state-specific weekend ---
eq('Johor rest days', JSON.stringify(E.restDays('johor')), JSON.stringify([5, 6]));
eq('Selangor rest days', JSON.stringify(E.restDays('selangor')), JSON.stringify([0, 6]));
ok('1 Jan 2027 (Fri) is a rest day in Johor', E.isRestDay('2027-01-01', 'johor'));
ok('1 Jan 2027 (Fri) is NOT a rest day in Selangor', !E.isRestDay('2027-01-01', 'selangor'));

// --- working days (the Fri–Sat weekend matters) ---
// Selangor, 1–3 Jan 2027: Fri=New Year holiday, Sat+Sun rest → 0 working days.
eq('Selangor working days 1–3 Jan 2027', E.workingDaysBetween('2027-01-01', '2027-01-03', 'selangor'), 0);
// Johor, same range: New Year does NOT apply, Fri+Sat are the weekend, Sun is a
// working day → 1 working day.
eq('Johor working days 1–3 Jan 2027', E.workingDaysBetween('2027-01-01', '2027-01-03', 'johor'), 1);
// 30 Aug (Mon) – 1 Sep (Wed) 2027 for Selangor: Merdeka (31 Aug) off → 2 working.
eq('Selangor working days around Merdeka 2027', E.workingDaysBetween('2027-08-30', '2027-09-01', 'selangor'), 2);
eq('reversed range → 0', E.workingDaysBetween('2027-09-01', '2027-08-30', 'selangor'), 0);

// --- next holiday ---
const nh = E.nextHoliday('selangor', '2027-08-25', 'en');
eq('next holiday after 25 Aug 2027 = Merdeka', nh.date, '2027-08-31');
eq('Merdeka is 6 days away', nh.daysAway, 6);

// --- long weekends ---
const lw = E.longWeekends(2027, 'selangor', 'en');
ok('2027 Selangor has long weekends', lw.length > 0, `(${lw.length})`);
ok('finds the 5–7 Jun 2027 long weekend (Agong + Awal Muharram)',
  lw.some((w) => w.start === '2027-06-05' && w.end === '2027-06-07' && w.days === 3),
  JSON.stringify(lw.find((w) => w.start === '2027-06-05') || null));

// --- names / localization ---
eq('CNY name zh', E.holidayName('chinese-new-year', 'zh'), '农历新年');
eq('CNY in-lieu suffix en', E.holidayName('chinese-new-year', 'en', true), 'Chinese New Year (Holiday)');
eq('Merdeka name ms', E.holidayName('merdeka-day', 'ms'), 'Hari Kebangsaan');

// --- list sanity ---
ok('KL 2027 has a full holiday list', E.holidaysFor('kuala-lumpur', 2027, 'en').length >= 18, `(${E.holidaysFor('kuala-lumpur', 2027, 'en').length})`);
ok('16 states/territories defined', E.STATES.length === 16);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
