// Malaysia zakat calculator — pure, client-safe, unit-tested. Zakat is 2.5%
// (one-fortieth) on wealth that has reached the nisab and been held a full haul.
// The nisab is the value of 85g of gold and is set by each state's zakat
// authority (it tracks the gold price), so it is an EDITABLE input here with a
// conservative default — the UI tells the user to confirm their state's figure.
//   Sources: state zakat authorities (e.g. PPZ-MAIWP, LZS); nisab = 85g gold.

export const ZAKAT = {
  asOf: '2025-01-01',
  rate: 0.025,             // 2.5% = 1/40
  // Default nisab in RM — EDITABLE. Nisab = 85g gold; confirm the current figure
  // with your state zakat authority (it is re-set as the gold price moves).
  defaultNisab: 30_000,
  sources: [
    { title: 'Pusat Pungutan Zakat (PPZ-MAIWP)', url: 'https://www.zakat.com.my/' },
    { title: 'Zakat (NegaraKu.md glossary)', url: 'https://negaraku.md/en/glossary/zakat' },
  ],
};

export type ZakatType = 'income' | 'savings' | 'business';

export interface ZakatInput {
  type: ZakatType;
  /** Annual income, lowest-held savings over the haul, or business net current assets. */
  amount: number;
  /** Deductions allowed before zakat (e.g. basic needs for income zakat). */
  deductions?: number;
  /** Nisab in RM — defaults to ZAKAT.defaultNisab; the user should set their state's figure. */
  nisab?: number;
}

export interface ZakatResult {
  type: ZakatType;
  zakatable: number;       // amount after deductions
  nisab: number;
  aboveNisab: boolean;
  rate: number;
  zakatPayable: number;
  asOf: string;
}

const r2 = (n: number) => Math.round(n * 100) / 100;

export function computeZakat(input: ZakatInput): ZakatResult {
  const nisab = Math.max(0, input.nisab ?? ZAKAT.defaultNisab);
  const zakatable = Math.max(0, (input.amount || 0) - Math.max(0, input.deductions || 0));
  // Zakat is due only when the zakatable wealth has reached the nisab.
  const aboveNisab = zakatable >= nisab && nisab > 0;
  const zakatPayable = aboveNisab ? r2(zakatable * ZAKAT.rate) : 0;
  return { type: input.type, zakatable: r2(zakatable), nisab, aboveNisab, rate: ZAKAT.rate, zakatPayable, asOf: ZAKAT.asOf };
}
