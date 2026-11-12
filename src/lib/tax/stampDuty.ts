// Malaysia stamp duty — pure, client-safe, unit-tested. Rates from the First
// Schedule to the Stamp Act 1949, as set out in our vetted reference article
// knowledge/taxation/stamp-duty-rates.md (cross-checked against the Act and LHDN).
//
// RATE DATA IS DATED + CITED. Update STAMP.asOf when an item's rate or band
// changes (e.g. a gazetted first-home exemption order, or a Budget measure once
// it is actually in force).
//   Sources: Stamp Act 1949 First Schedule (items 27, 32, 49); LHDN STAMPS;
//   NegaraKu "Malaysia Stamp Duty Rates — First Schedule Reference".

export interface Band { upTo: number | null; rate: number } // rate as a fraction

export interface StampRates {
  asOf: string;
  // Item 32(a) — transfer/sale of property, on price or market value (higher).
  propertyTransfer: Band[];
  // Item 32(b) — transfer of shares/marketable securities: 0.3%, no cap.
  shareTransfer: number;
  // Item 27(a)(iii) — loan/charge, general: 0.5%.
  loan: number;
  // Item 32(ab) — residential sold to a foreign company / non-citizen non-PR
  // (from 1 Jan 2026): flat 8%.
  foreignResidential: number;
  // s.36CB — minimum duty on almost every instrument.
  minimumDuty: number;
  sources: { title: string; url: string }[];
}

export const STAMP: StampRates = {
  asOf: '2026-01-01',
  // 1% first RM100k; 2% to RM500k; 3% to RM1,000,000; 4% above.
  propertyTransfer: [
    { upTo: 100_000, rate: 0.01 },
    { upTo: 500_000, rate: 0.02 },
    { upTo: 1_000_000, rate: 0.03 },
    { upTo: null, rate: 0.04 },
  ],
  shareTransfer: 0.003,
  loan: 0.005,
  foreignResidential: 0.08,
  minimumDuty: 10,
  sources: [
    { title: 'Stamp Act 1949, First Schedule (items 27, 32, 49)', url: 'https://lom.agc.gov.my/' },
    { title: 'Stamp Duty Rates — First Schedule Reference (NegaraKu.md)', url: 'https://negaraku.md/en/taxation/stamp-duty-rates' },
  ],
};

const r2 = (n: number) => Math.round(n * 100) / 100;

/** Duty on a value across a progressive band ladder (item 32(a) style). */
export function dutyOnBands(value: number, bands: Band[]): number {
  let duty = 0;
  let prev = 0;
  for (const b of bands) {
    const ceil = b.upTo ?? Infinity;
    if (value <= prev) break;
    const slice = Math.min(value, ceil) - prev;
    if (slice > 0) duty += slice * b.rate;
    prev = ceil;
  }
  return duty;
}

export type InstrumentKind =
  | 'property-transfer'   // MOT / sale of property, item 32(a)
  | 'loan'                // loan agreement / charge, item 27
  | 'share-transfer';     // shares, item 32(b)

export interface StampInput {
  kind: InstrumentKind;
  /** Consideration or market value (higher) for property/shares, or loan amount. */
  amount: number;
  /** Buyer is a foreign company or non-citizen non-PR (residential → item 32(ab) 8%). */
  foreignResidential?: boolean;
  /** First-home full exemption applies (≤ threshold, within the exemption window). */
  firstHomeExempt?: boolean;
}

export interface StampResult {
  kind: InstrumentKind;
  amount: number;
  duty: number;
  exempt: boolean;
  note?: string;
  asOf: string;
}

export function computeStampDuty(input: StampInput, rates: StampRates = STAMP): StampResult {
  const amount = Math.max(0, input.amount || 0);
  let duty = 0;
  let note: string | undefined;

  if (input.kind === 'property-transfer') {
    if (input.foreignResidential) {
      duty = amount * rates.foreignResidential;
      note = 'Item 32(ab): 8% on residential sold to a foreign company or non-citizen non-PR (from 1 Jan 2026).';
    } else {
      duty = dutyOnBands(amount, rates.propertyTransfer);
    }
  } else if (input.kind === 'loan') {
    duty = amount * rates.loan;
  } else {
    duty = amount * rates.shareTransfer;
  }

  if (input.firstHomeExempt) {
    return { kind: input.kind, amount, duty: 0, exempt: true, note: 'First-home exemption applied — RM0.', asOf: rates.asOf };
  }

  // s.36CB minimum duty (shares/property/loan all covered; cheques/contract notes excepted).
  if (amount > 0 && duty < rates.minimumDuty) duty = rates.minimumDuty;

  return { kind: input.kind, amount, duty: r2(duty), exempt: false, note, asOf: rates.asOf };
}
