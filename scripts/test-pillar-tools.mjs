// Accuracy tests for the pillar tools: tenancy/lease stamp duty (item 49, 2025
// scale) and the "which court?" forum router.
//   node scripts/test-pillar-tools.mjs
import { build } from 'esbuild';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
async function load(rel) {
  const out = await build({ entryPoints: [join(ROOT, rel)], bundle: true, format: 'esm', platform: 'neutral', write: false });
  return import('data:text/javascript;base64,' + Buffer.from(out.outputFiles[0].text).toString('base64'));
}
const { computeLeaseDuty } = await load('src/lib/tax/stampDuty.ts');
const { findCourt } = await load('src/lib/law/whichCourt.ts');
const { checkMM2H, fdForAge, MM2H } = await load('src/lib/visa/mm2h.ts');
const { computeCost, stateAverages, stateCost } = await load('src/lib/cost-of-living/data.ts');

let pass = 0, fail = 0;
const eq = (name, got, want, tol = 0.001) => { const ok = Math.abs(got - want) <= tol; console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}: got ${got} want ${want}`); ok ? pass++ : fail++; };
const is = (name, got, want) => { const ok = got === want; console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}: got ${got} want ${want}`); ok ? pass++ : fail++; };

// --- Lease / tenancy duty (item 49, RM1/3/5/7 per RM250, no nil band) ---
const L = (annualRent, term, extra = {}) => computeLeaseDuty({ annualRent, term, ...extra });
eq('RM1000/mo, ≤1yr', L(12_000, 'le1').leaseDuty, 48);        // ceil(12000/250)=48 * 1
eq('RM1000/mo, >1–3yr', L(12_000, 'le3').leaseDuty, 144);     // 48 * 3
eq('RM1000/mo, >3–5yr', L(12_000, 'le5').leaseDuty, 240);     // 48 * 5
eq('RM1000/mo, >5yr', L(12_000, 'gt5').leaseDuty, 336);       // 48 * 7
eq('RM1500/mo, ≤1yr', L(18_000, 'le1').leaseDuty, 72);        // ceil(72)=72
eq('part block rounds up', L(12_100, 'le1').leaseDuty, 49);   // ceil(48.4)=49
eq('nil band gone: RM2,400/yr', L(2_400, 'le1').leaseDuty, 10); // ceil(9.6)=10 (was RM0 pre-2025)
eq('one duplicate copy adds RM10', L(12_000, 'le1', { copies: 1 }).total, 58); // 48 + 10
const agri = L(200, 'le3', { agricultural: true });
is('agricultural ≤3yr ≤RM200 exempt', agri.exempt, true);
eq('agricultural exempt duty', agri.leaseDuty, 0);

// --- Which court? ---
const forum = (i) => findCourt(i).forum;
is('money RM3k individual → small claims', forum({ matter: 'money', amount: 3_000, individual: true }), 'small-claims');
is('money RM3k company → magistrates', forum({ matter: 'money', amount: 3_000, individual: false }), 'magistrates');
is('money RM100k → magistrates', forum({ matter: 'money', amount: 100_000 }), 'magistrates');
is('money RM100,001 → sessions', forum({ matter: 'money', amount: 100_001 }), 'sessions');
is('money RM1m → sessions', forum({ matter: 'money', amount: 1_000_000 }), 'sessions');
is('money >RM1m → high court', forum({ matter: 'money', amount: 1_000_001 }), 'high-court');
is('consumer RM3k → consumer tribunal', forum({ matter: 'consumer', amount: 3_000 }), 'consumer-tribunal');
is('consumer RM60k → magistrates', forum({ matter: 'consumer', amount: 60_000 }), 'magistrates');
is('criminal minor → magistrates', forum({ matter: 'criminal', severity: 'minor' }), 'magistrates');
is('criminal serious → sessions', forum({ matter: 'criminal', severity: 'serious' }), 'sessions');
is('criminal capital → high court', forum({ matter: 'criminal', severity: 'capital' }), 'high-court');
is('family Muslim → syariah', forum({ matter: 'family', muslim: true }), 'syariah');
is('family non-Muslim → high court (family)', forum({ matter: 'family', muslim: false }), 'high-court-family');
is('employment wages → labour court', forum({ matter: 'employment', dispute: 'wages' }), 'labour-court');
is('employment dismissal → industrial court', forum({ matter: 'employment', dispute: 'dismissal' }), 'industrial-court');

// --- MM2H tier checker (figures from vetted mm2h-long-stay-visa.md, MOTAC 2026-02-10) ---
const tiers = (r) => Object.fromEntries(r.tiers.map((t) => [t.tier, t]));
eq('SEZ FD under 50 = USD65k', fdForAge(MM2H.tiers.find((t) => t.id === 'sez'), 40), 65_000);
eq('SEZ FD 50+ = USD32k', fdForAge(MM2H.tiers.find((t) => t.id === 'sez'), 55), 32_000);
const r1 = checkMM2H({ age: 40, fundsUSD: 1_000_000, propertyBudgetRM: 2_000_000, needWork: true, dependents: 0 });
is('needs work + can afford → Platinum', r1.recommended, 'platinum');
is('Silver not eligible when work needed', tiers(r1).silver.eligible, false);
const r2 = checkMM2H({ age: 30, fundsUSD: 150_000, propertyBudgetRM: 600_000, needWork: false, dependents: 0 });
is('cheapest eligible tier recommended (SEZ)', r2.recommended, 'sez');
is('Silver also eligible at its exact minimums', tiers(r2).silver.eligible, true);
const r3 = checkMM2H({ age: 20, fundsUSD: 1_000_000, propertyBudgetRM: 3_000_000, needWork: false, dependents: 0 });
is('below minimum age → no tier', r3.recommended, null);
const r4 = checkMM2H({ age: 40, fundsUSD: 200_000, propertyBudgetRM: 700_000, needWork: true, dependents: 0 });
is('affordable but needs work → none (only Platinum works)', r4.recommended, null);
is('stay 0 days at 55', checkMM2H({ age: 55, fundsUSD: 40_000, propertyBudgetRM: 0, needWork: false, dependents: 0 }).stayDaysPerYear, 0);
is('stay 90 days at 30', r2.stayDaysPerYear, 90);
eq('processing fee 2 dependents', checkMM2H({ age: 40, fundsUSD: 150_000, propertyBudgetRM: 600_000, needWork: false, dependents: 2 }).processingFeeRM, 10_000);

// --- Cost of living by state (DOSM hies_state, 2024 reference) ---
eq('Selangor mean expenditure (verbatim CSV)', stateCost('selangor').expenditureMean, 7266);
eq('all-state avg expenditure', stateAverages().expenditure, 5363);
is('Putrajaya ranks 1 by spend', computeCost('putrajaya').expenditureRank, 1);
is('Sabah ranks 16 (lowest spend)', computeCost('sabah').expenditureRank, 16);
eq('KL expenditure index vs avg', computeCost('kuala-lumpur').expenditureIndex, 152);
eq('Sabah expenditure index vs avg', computeCost('sabah').expenditureIndex, 66);
is('unknown state → null', computeCost('atlantis'), null);

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
