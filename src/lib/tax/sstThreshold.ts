// Malaysia SST registration threshold checker — pure, client-safe, unit-tested.
// There is NO single SST threshold: service tax runs group by group (column (3)
// of the First Schedule to the Service Tax Regulations 2018), from nil to
// RM1,500,000, and sales tax is a separate RM500,000 manufacturing test.
//   Sources: Service Tax Act/Regulations 2018 First Schedule; Sales Tax (Total
//   Sale Value) Order 2018; NegaraKu "SST registration threshold".

export interface SstGroup {
  id: string;
  threshold: number;      // rolling 12-month taxable turnover; 0 = nil (any supply triggers)
  note: string;
}

export const SST_GROUPS: SstGroup[] = [
  { id: 'sales-tax', threshold: 500_000, note: 'Sales tax — RM500,000 of manufactured taxable goods (separate from service tax).' },
  { id: 'service-general', threshold: 500_000, note: 'Most service tax groups register at RM500,000 rolling 12-month turnover.' },
  { id: 'service-professionals', threshold: 500_000, note: 'Group G professionals aggregate all their Group G services against one RM500,000 figure.' },
  { id: 'service-rental-finance', threshold: 1_000_000, note: 'Rental or leasing, and most finance, register at RM1,000,000.' },
  { id: 'service-fnb-healthcare-construction', threshold: 1_500_000, note: 'Food & beverage, private healthcare and construction register at RM1,500,000.' },
  { id: 'service-nil', threshold: 0, note: 'Education and credit cards have a NIL threshold — one taxable supply triggers liability.' },
];

export const SST = { asOf: '2025-01-01', sources: [
  { title: 'Service Tax Regulations 2018, First Schedule col (3)', url: 'https://mysst.customs.gov.my/' },
  { title: 'SST registration threshold (NegaraKu.md)', url: 'https://negaraku.md/en/taxation/sst-registration' },
] };

export interface SstInput { group: string; turnover12m: number; }
export interface SstResult {
  group: string;
  threshold: number;
  turnover12m: number;
  mustRegister: boolean;
  headroom: number;        // how much turnover remains before the threshold (0 if over, or nil group)
  note: string;
  asOf: string;
}

export function checkSst(input: SstInput): SstResult {
  const g = SST_GROUPS.find((x) => x.id === input.group) ?? SST_GROUPS[1];
  const turnover = Math.max(0, input.turnover12m || 0);
  // Nil-threshold groups: any taxable supply (turnover > 0) triggers liability.
  const mustRegister = g.threshold === 0 ? turnover > 0 : turnover >= g.threshold;
  const headroom = g.threshold === 0 ? 0 : Math.max(0, g.threshold - turnover);
  return {
    group: g.id,
    threshold: g.threshold,
    turnover12m: turnover,
    mustRegister,
    headroom,
    note: g.note,
    asOf: SST.asOf,
  };
}
