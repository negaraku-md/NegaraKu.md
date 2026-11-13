// Cost of living by state — pure, client-safe, unit-tested. DATA IS DATED + CITED.
// Figures are the mean/median monthly household INCOME and mean monthly household
// EXPENDITURE by state, from the Department of Statistics Malaysia (DOSM) open-data
// dataset `hies_state` (Household Income & Expenditure Survey), 2024 reference —
// pulled from https://storage.dosm.gov.my/hies/hies_state.csv (licence: CC BY 4.0,
// dataset last updated 31 Dec 2025). Survey-based, not a live index. Update COST.asOf
// and the figures when DOSM publishes the next HIES reference year.

export type CostStateId =
  | 'johor' | 'kedah' | 'kelantan' | 'melaka' | 'negeri-sembilan' | 'pahang'
  | 'penang' | 'perak' | 'perlis' | 'selangor' | 'terengganu' | 'sabah'
  | 'sarawak' | 'kuala-lumpur' | 'labuan' | 'putrajaya';

export interface StateCost {
  id: CostStateId;
  /** Mean gross monthly household income (RM). */
  incomeMean: number;
  /** Median gross monthly household income (RM). */
  incomeMedian: number;
  /** Mean gross monthly household expenditure (RM) — the cost-of-living proxy. */
  expenditureMean: number;
  /** Gini coefficient (income inequality, 0–1). */
  gini: number;
  /** Poverty rate — share of households below the Poverty Line Income (%). */
  poverty: number;
}

export interface CostRates {
  asOf: string;
  reference: string;
  sources: { title: string; url: string }[];
  states: StateCost[];
}

// hies_state.csv, date = 2024-01-01 rows (verbatim).
export const COST: CostRates = {
  asOf: '2024',
  reference: 'DOSM Household Income & Expenditure Survey (hies_state), 2024 reference',
  sources: [
    { title: 'DOSM OpenDOSM — Household Income & Expenditure: States (hies_state), CC BY 4.0', url: 'https://open.dosm.gov.my/data-catalogue/hies_state' },
    { title: 'Department of Statistics Malaysia', url: 'https://www.dosm.gov.my/' },
  ],
  states: [
    { id: 'johor', incomeMean: 9484, incomeMedian: 7712, expenditureMean: 5927, gini: 0.348, poverty: 2.5 },
    { id: 'kedah', incomeMean: 5793, incomeMedian: 4895, expenditureMean: 4028, gini: 0.334, poverty: 8.4 },
    { id: 'kelantan', incomeMean: 5265, incomeMedian: 4083, expenditureMean: 3825, gini: 0.356, poverty: 11.5 },
    { id: 'melaka', incomeMean: 8686, incomeMedian: 6891, expenditureMean: 6212, gini: 0.337, poverty: 3.0 },
    { id: 'negeri-sembilan', incomeMean: 7305, incomeMedian: 5591, expenditureMean: 5115, gini: 0.343, poverty: 4.0 },
    { id: 'pahang', incomeMean: 6066, incomeMedian: 4975, expenditureMean: 4368, gini: 0.319, poverty: 5.9 },
    { id: 'penang', incomeMean: 9152, incomeMedian: 7386, expenditureMean: 5850, gini: 0.311, poverty: 1.9 },
    { id: 'perak', incomeMean: 6173, incomeMedian: 4687, expenditureMean: 4232, gini: 0.298, poverty: 6.9 },
    { id: 'perlis', incomeMean: 5996, incomeMedian: 4950, expenditureMean: 4084, gini: 0.334, poverty: 3.6 },
    { id: 'selangor', incomeMean: 13296, incomeMedian: 10726, expenditureMean: 7266, gini: 0.332, poverty: 0.9 },
    { id: 'terengganu', incomeMean: 7627, incomeMedian: 6627, expenditureMean: 5219, gini: 0.263, poverty: 5.8 },
    { id: 'sabah', incomeMean: 6498, incomeMedian: 4890, expenditureMean: 3547, gini: 0.405, poverty: 17.7 },
    { id: 'sarawak', incomeMean: 6947, incomeMedian: 5504, expenditureMean: 4281, gini: 0.361, poverty: 8.4 },
    { id: 'kuala-lumpur', incomeMean: 13985, incomeMedian: 10802, expenditureMean: 8178, gini: 0.375, poverty: 1.0 },
    { id: 'labuan', incomeMean: 8555, incomeMedian: 7383, expenditureMean: 4497, gini: 0.327, poverty: 2.0 },
    { id: 'putrajaya', incomeMean: 13846, incomeMedian: 10769, expenditureMean: 9186, gini: 0.324, poverty: 0.2 },
  ],
};

export function stateCost(id: CostStateId, rates: CostRates = COST): StateCost | undefined {
  return rates.states.find((s) => s.id === id);
}

/** Simple (unweighted) average across all states — the index baseline. NOT the
 *  population-weighted national figure (which DOSM publishes separately). */
export function stateAverages(rates: CostRates = COST): { expenditure: number; income: number } {
  const n = rates.states.length;
  const exp = rates.states.reduce((a, s) => a + s.expenditureMean, 0) / n;
  const inc = rates.states.reduce((a, s) => a + s.incomeMean, 0) / n;
  return { expenditure: Math.round(exp), income: Math.round(inc) };
}

export interface CostResult {
  id: CostStateId;
  expenditureMean: number;
  incomeMean: number;
  incomeMedian: number;
  gini: number;
  poverty: number;
  /** Mean expenditure as an index vs the all-state average (100 = average). */
  expenditureIndex: number;
  /** Rank by expenditure, 1 = highest spend. */
  expenditureRank: number;
  totalStates: number;
  avgExpenditure: number;
  asOf: string;
}

export function computeCost(id: CostStateId, rates: CostRates = COST): CostResult | null {
  const s = stateCost(id, rates);
  if (!s) return null;
  const avg = stateAverages(rates);
  const sortedByExp = [...rates.states].sort((a, b) => b.expenditureMean - a.expenditureMean);
  const expenditureRank = sortedByExp.findIndex((x) => x.id === id) + 1;
  return {
    id,
    expenditureMean: s.expenditureMean,
    incomeMean: s.incomeMean,
    incomeMedian: s.incomeMedian,
    gini: s.gini,
    poverty: s.poverty,
    expenditureIndex: Math.round((s.expenditureMean / avg.expenditure) * 100),
    expenditureRank,
    totalStates: rates.states.length,
    avgExpenditure: avg.expenditure,
    asOf: rates.asOf,
  };
}
