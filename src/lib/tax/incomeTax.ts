// Malaysia personal income tax engine — pure, client-safe, no Astro/DOM deps so
// it is unit-testable in Node and importable into the browser calculator.
//
// RATE DATA IS DATED AND CITED. The interactive layer sits on top of two vetted
// NegaraKu articles — `taxation/personal-tax-rates` (Schedule 1 bands, rebates,
// non-resident flat rate) and `taxation/personal-tax-reliefs` (relief caps) —
// cross-checked against hasil.gov.my (Kadar Cukai + Pelepasan Cukai) and the PwC
// 2024/2025 Malaysian Tax Booklet. When LHDN revises a figure in a Budget, update
// the matching TaxYearData.`asOf` stamp so the tool goes stale visibly, exactly
// like an article's reviewDue. Do NOT hard-code figures outside this file.

export type Lang =
  | 'ms' | 'en' | 'zh' | 'ta' | 'ja' | 'ko' | 'th' | 'vi' | 'id' | 'ar' | 'hi' | 'es' | 'fr';

/** One cumulative Schedule-1 band: tax on the first `threshold` ringgit is
 *  `baseTax`, and every ringgit above `threshold` (up to the next band) is `rate`. */
export interface Band {
  threshold: number;
  baseTax: number;
  rate: number;
}

/** A relief the calculator exposes as a capped input. `perUnit`/`unitOf` turn a
 *  count (e.g. children) into an amount. `auto` reliefs are applied silently. */
export interface ReliefDef {
  id: string;
  cap: number;
  auto?: boolean;
  kind?: 'amount' | 'count';
  perUnit?: number;
  label: Partial<Record<Lang, string>>;
  note?: Partial<Record<Lang, string>>;
}

export interface TaxYearData {
  ya: number;
  status: 'current' | 'announced' | 'historical';
  /** Data-freshness stamp — bump when LHDN revises a figure for this YA. */
  asOf: string;
  /** Ascending cumulative resident bands (last band has the top rate). */
  residentBands: Band[];
  /** Flat rate on a non-resident's chargeable income (no reliefs, no rebate). */
  nonResidentRate: number;
  /** s.6A(2) individual rebate: `amount` if chargeable income <= `ceiling`. */
  individualRebate: { amount: number; ceiling: number };
  /** s.46(1)(a) automatic self relief. */
  selfRelief: number;
  /** YA2025 dividend layer (Sch 1 Part XXII): `rate` on dividend income over `over`. */
  dividendSurcharge?: { over: number; rate: number };
  reliefs: ReliefDef[];
  sources: { title: string; url: string }[];
}

// ---------------------------------------------------------------------------
// YA2025 — the current filing year (returns filed in 2026). LHDN captions the
// same band table "Tahun Taksiran 2023, 2024 & 2025"; Budget 2026 left the bands
// unchanged, so this scale also governs YA2026.
// ---------------------------------------------------------------------------
const YA2025: TaxYearData = {
  ya: 2025,
  status: 'current',
  asOf: '2026-07-10',
  residentBands: [
    { threshold: 0, baseTax: 0, rate: 0 },
    { threshold: 5_000, baseTax: 0, rate: 0.01 },
    { threshold: 20_000, baseTax: 150, rate: 0.03 },
    { threshold: 35_000, baseTax: 600, rate: 0.06 },
    { threshold: 50_000, baseTax: 1_500, rate: 0.11 },
    { threshold: 70_000, baseTax: 3_700, rate: 0.19 },
    { threshold: 100_000, baseTax: 9_400, rate: 0.25 },
    { threshold: 400_000, baseTax: 84_400, rate: 0.26 },
    { threshold: 600_000, baseTax: 136_400, rate: 0.28 },
    { threshold: 2_000_000, baseTax: 528_400, rate: 0.30 },
  ],
  nonResidentRate: 0.30,
  individualRebate: { amount: 400, ceiling: 35_000 },
  selfRelief: 9_000,
  dividendSurcharge: { over: 100_000, rate: 0.02 },
  reliefs: [
    { id: 'epf', cap: 4_000, label: { ms: 'KWSP / skem persaraan diluluskan', en: 'EPF / approved retirement scheme', zh: '公积金／获批准退休计划' } },
    { id: 'lifeInsurance', cap: 3_000, label: { ms: 'Insurans hayat / takaful', en: 'Life insurance / takaful', zh: '人寿保险／伊斯兰保险' } },
    { id: 'medEduInsurance', cap: 4_000, label: { ms: 'Insurans perubatan / pendidikan', en: 'Medical / education insurance', zh: '医疗／教育保险' } },
    { id: 'socso', cap: 350, label: { ms: 'PERKESO / SIP', en: 'SOCSO / EIS', zh: '社险／就业保险' } },
    { id: 'lifestyle', cap: 2_500, label: { ms: 'Gaya hidup (buku, komputer, internet)', en: 'Lifestyle (books, computer, internet)', zh: '生活方式（书籍、电脑、网络）' } },
    { id: 'lifestyleSports', cap: 1_000, label: { ms: 'Gaya hidup — sukan', en: 'Lifestyle — sports', zh: '生活方式——运动' } },
    { id: 'medicalExpenses', cap: 10_000, label: { ms: 'Perbelanjaan perubatan (diri/keluarga)', en: 'Medical expenses (self/family)', zh: '医疗开支（本人／家属）' } },
    { id: 'parentsMedical', cap: 8_000, label: { ms: 'Rawatan / penjagaan ibu bapa', en: 'Parents — medical / care', zh: '父母医疗／看护' } },
    { id: 'educationFees', cap: 7_000, label: { ms: 'Yuran pendidikan (diri)', en: 'Education fees (self)', zh: '教育费（本人）' } },
    { id: 'housingLoanInterest', cap: 7_000, label: { ms: 'Faedah pinjaman perumahan (SPA 2025–2027)', en: 'Housing loan interest (SPA 2025–2027)', zh: '房贷利息（2025–2027买卖合约）' }, note: { en: 'Home ≤ RM500k: RM7,000; RM500k–750k: RM5,000.' } },
    { id: 'spouse', cap: 4_000, label: { ms: 'Pelepasan suami / isteri', en: 'Spouse relief', zh: '配偶减免' } },
    { id: 'childUnder18', cap: Infinity, kind: 'count', perUnit: 2_000, label: { ms: 'Anak bawah 18 (bilangan)', en: 'Children under 18 (count)', zh: '18岁以下子女（人数）' } },
    { id: 'childTertiary', cap: Infinity, kind: 'count', perUnit: 8_000, label: { ms: 'Anak pengajian tinggi (bilangan)', en: 'Children in tertiary education (count)', zh: '高等教育子女（人数）' } },
    { id: 'other', cap: Infinity, label: { ms: 'Pelepasan lain (PRS, SSPN, taska, OKU…)', en: 'Other reliefs (PRS, SSPN, childcare, disability…)', zh: '其他减免（PRS、SSPN、托儿、残障…）' } },
  ],
  sources: [
    { title: 'Kadar Cukai — Individu (LHDN)', url: 'https://www.hasil.gov.my/individu/kadar-cukai/' },
    { title: 'Pelepasan Cukai — Individu (LHDN)', url: 'https://www.hasil.gov.my/en/individu/pelepasan-cukai/' },
    { title: 'Rebat — Individu (LHDN)', url: 'https://www.hasil.gov.my/individu/rebat/' },
  ],
};

// ---------------------------------------------------------------------------
// YA2027 — ANNOUNCED in Budget 2027 (tabled 9 Oct 2026), not yet law. Shown so
// the tool demonstrates the dated-rates discipline; flagged `announced` in the UI.
// Self relief rises RM9,000 -> RM12,000; middle bands restructured; 30% top rate
// above RM1,000,000. Figures: MOF Budget 2027 Tax Measures, Appendices 1–9.
// ---------------------------------------------------------------------------
const YA2027: TaxYearData = {
  ya: 2027,
  status: 'announced',
  asOf: '2026-10-24',
  residentBands: [
    { threshold: 0, baseTax: 0, rate: 0 },
    { threshold: 5_000, baseTax: 0, rate: 0.01 },
    { threshold: 20_000, baseTax: 150, rate: 0.03 },
    { threshold: 35_000, baseTax: 600, rate: 0.06 },
    { threshold: 50_000, baseTax: 1_500, rate: 0.11 },
    { threshold: 70_000, baseTax: 3_700, rate: 0.18 },
    { threshold: 100_000, baseTax: 9_100, rate: 0.24 },
    { threshold: 150_000, baseTax: 21_100, rate: 0.25 },
    { threshold: 400_000, baseTax: 83_600, rate: 0.26 },
    { threshold: 600_000, baseTax: 135_600, rate: 0.28 },
    { threshold: 1_000_000, baseTax: 247_600, rate: 0.30 },
  ],
  nonResidentRate: 0.30,
  individualRebate: { amount: 400, ceiling: 35_000 },
  selfRelief: 12_000,
  dividendSurcharge: { over: 100_000, rate: 0.02 },
  reliefs: YA2025.reliefs.map((r) =>
    r.id === 'lifestyle' ? { ...r } : r,
  ),
  sources: [
    { title: 'Budget 2027 Tax Measures, Appendix 1 (MOF)', url: 'https://belanjawan.mof.gov.my/pdf/belanjawan2027/ucapan/tax-measures.pdf' },
    ...YA2025.sources,
  ],
};

export const TAX_YEARS: Record<number, TaxYearData> = { 2025: YA2025, 2027: YA2027 };
export const DEFAULT_YA = 2025;

// ---------------------------------------------------------------------------
// Pure computation
// ---------------------------------------------------------------------------

/** Progressive tax on chargeable income using cumulative bands. */
export function taxOnChargeable(chargeable: number, bands: Band[]): number {
  if (chargeable <= 0) return 0;
  let band = bands[0];
  for (const b of bands) {
    if (chargeable >= b.threshold) band = b;
    else break;
  }
  return band.baseTax + (chargeable - band.threshold) * band.rate;
}

export interface TaxInput {
  ya: number;
  resident: boolean;
  /** Total annual income (employment + other taxable), in RM. */
  income: number;
  /** Relief id -> raw amount (or raw count for `kind:'count'` reliefs). */
  reliefs?: Record<string, number>;
  /** Zakat / fitrah paid — a rebate capped at the tax charged. */
  zakat?: number;
  /** Gross dividend income (for the YA2025 2% layer over RM100k). */
  dividendIncome?: number;
}

export interface TaxResult {
  ya: number;
  resident: boolean;
  income: number;
  reliefBreakdown: { id: string; claimed: number; applied: number; capped: boolean }[];
  totalReliefs: number;
  chargeableIncome: number;
  taxBeforeRebate: number;
  rebates: { individual: number; zakat: number };
  dividendSurcharge: number;
  taxPayable: number;
  effectiveRate: number; // of total income
  monthlyEquivalent: number; // taxPayable / 12 (indicative PCB-style figure)
}

const clampApplied = (def: ReliefDef, raw: number): number => {
  const amount = def.kind === 'count' ? Math.max(0, Math.floor(raw)) * (def.perUnit ?? 0) : Math.max(0, raw);
  return Math.min(amount, def.cap);
};

export function computeTax(input: TaxInput): TaxResult {
  const data = TAX_YEARS[input.ya] ?? TAX_YEARS[DEFAULT_YA];
  const income = Math.max(0, input.income || 0);

  // Non-residents: flat rate on total income, no reliefs, no rebate.
  if (!input.resident) {
    const tax = income * data.nonResidentRate;
    return {
      ya: data.ya, resident: false, income,
      reliefBreakdown: [], totalReliefs: 0, chargeableIncome: income,
      taxBeforeRebate: tax, rebates: { individual: 0, zakat: 0 }, dividendSurcharge: 0,
      taxPayable: round2(tax), effectiveRate: income ? tax / income : 0,
      monthlyEquivalent: round2(tax / 12),
    };
  }

  // Residents: self relief is automatic; the rest are capped per LHDN.
  const breakdown: TaxResult['reliefBreakdown'] = [
    { id: 'self', claimed: data.selfRelief, applied: data.selfRelief, capped: false },
  ];
  let totalReliefs = data.selfRelief;
  for (const def of data.reliefs) {
    const raw = input.reliefs?.[def.id] ?? 0;
    if (!raw) continue;
    const applied = clampApplied(def, raw);
    const claimedAmount = def.kind === 'count' ? Math.max(0, Math.floor(raw)) * (def.perUnit ?? 0) : Math.max(0, raw);
    breakdown.push({ id: def.id, claimed: claimedAmount, applied, capped: applied < claimedAmount });
    totalReliefs += applied;
  }

  const chargeable = Math.max(0, income - totalReliefs);
  const taxBeforeRebate = taxOnChargeable(chargeable, data.residentBands);

  // Rebates reduce TAX, not income. Individual rebate only if CI <= ceiling.
  const individualRebate = chargeable <= data.individualRebate.ceiling ? data.individualRebate.amount : 0;
  // Zakat rebate is capped at the tax remaining after the individual rebate.
  const zakatRebate = Math.min(Math.max(0, input.zakat || 0), Math.max(0, taxBeforeRebate - individualRebate));

  const dividendSurcharge = data.dividendSurcharge && input.dividendIncome
    ? Math.max(0, (input.dividendIncome - data.dividendSurcharge.over)) * data.dividendSurcharge.rate
    : 0;

  const taxPayable = Math.max(0, taxBeforeRebate - individualRebate - zakatRebate) + dividendSurcharge;

  return {
    ya: data.ya, resident: true, income,
    reliefBreakdown: breakdown, totalReliefs,
    chargeableIncome: chargeable,
    taxBeforeRebate: round2(taxBeforeRebate),
    rebates: { individual: individualRebate, zakat: round2(zakatRebate) },
    dividendSurcharge: round2(dividendSurcharge),
    taxPayable: round2(taxPayable),
    effectiveRate: income ? taxPayable / income : 0,
    monthlyEquivalent: round2(taxPayable / 12),
  };
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}
