// Malaysia road tax (LKM) — pure, client-safe, unit-tested. SCOPED v1: private
// SALOON cars (sedan/hatchback/coupe/wagon) registered in PENINSULAR Malaysia,
// by engine cc, under the JPJ Lesen Kenderaan Motor schedule (Road Transport Act
// 1987). This is the dominant case and the only one whose full band formula is
// unambiguously published and cross-checked.
//
// DELIBERATELY NOT YET COVERED (their exact bands are not reliably published —
// the UI sends the user to the official MyJPJ calculator): non-saloon SUV/MPV/
// pick-up, Sabah/Sarawak + duty-free islands, company-registered, motorcycles,
// and the new 2026 EV kW-based schedule. Add each only once verified from JPJ.
//
// Validation: a 6,498 cc saloon → RM17,871, matching JPJ-derived references.
//   Sources: Road Transport Act 1987; JPJ LKM rate-calculation guide (jpj.gov.my).

export interface RoadTaxBand { upTo: number; base: number; per: number; from: number }

// Peninsular private saloon — 9 bands: four flat, five base + per-cc.
export const SALOON_PENINSULAR: RoadTaxBand[] = [
  { upTo: 1000, base: 20, per: 0, from: 0 },
  { upTo: 1200, base: 55, per: 0, from: 0 },
  { upTo: 1400, base: 70, per: 0, from: 0 },
  { upTo: 1600, base: 90, per: 0, from: 0 },
  { upTo: 1800, base: 200, per: 0.40, from: 1600 },
  { upTo: 2000, base: 280, per: 0.50, from: 1800 },
  { upTo: 2500, base: 380, per: 1.00, from: 2000 },
  { upTo: 3000, base: 880, per: 2.50, from: 2500 },
  { upTo: Infinity, base: 2130, per: 4.50, from: 3000 },
];

export const ROAD_TAX = {
  asOf: '2026-01-01',
  scope: 'private-saloon-peninsular',
  sources: [
    { title: 'Road Transport Act 1987 (Act 333)', url: 'https://lom.agc.gov.my/' },
    { title: 'JPJ — Motor Vehicle Licence (LKM) renewal & rates', url: 'https://www.jpj.gov.my/en/motor-vehicle-license-renewal-guide-lkm/' },
    { title: 'Official MyJPJ calculator', url: 'https://mysikap.jpj.gov.my/' },
    { title: 'Road tax renewal (NegaraKu.md)', url: 'https://negaraku.md/en/transport/road-tax-renewal' },
  ],
};

const r2 = (n: number) => Math.round(n * 100) / 100;

export interface RoadTaxResult {
  cc: number;
  annual: number;
  bandLabel: string;
  base: number;
  perCc: number;
  progressive: number;   // the per-cc portion
  asOf: string;
}

/** Annual road tax for a private saloon registered in Peninsular Malaysia. */
export function computeRoadTax(cc: number, bands: RoadTaxBand[] = SALOON_PENINSULAR): RoadTaxResult {
  const engine = Math.max(0, Math.floor(cc || 0));
  const band = bands.find((b) => engine <= b.upTo) ?? bands[bands.length - 1];
  const progressive = band.per > 0 ? band.per * (engine - band.from) : 0;
  const annual = r2(band.base + progressive);
  const lower = bands[bands.indexOf(band) - 1]?.upTo ?? 0;
  const bandLabel = band.upTo === Infinity ? `> ${lower} cc` : `${lower + 1}–${band.upTo} cc`;
  return { cc: engine, annual, bandLabel, base: band.base, perCc: band.per, progressive: r2(progressive), asOf: ROAD_TAX.asOf };
}
