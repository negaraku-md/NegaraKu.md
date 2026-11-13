// Malaysia domestic electricity bill (TNB, Peninsular) — pure, client-safe,
// unit-tested. RATE DATA IS DATED + CITED, taken verbatim from TNB's official
// tariff schedule at https://www.mytnb.com.my/tariff (RP4 restructuring, effective
// 1 July 2025). Scope: TARIF DOMESTIK AM (General Domestic Tariff), standard
// (non-ToU), low voltage. The AFA (fuel-cost adjustment) changes MONTHLY, so it is
// a dated default the caller can override. Update TNB.asOf / afa* when TNB revises.

export interface EeiBand { max: number; sen: number } // rebate sen/kWh for total ≤ max

export interface TnbTariff {
  asOf: string; // RP4 base tariff effective date
  afaAsOf: string; // month the default AFA rate is for
  afaDefaultSen: number; // current AFA surcharge (sen/kWh), varies monthly
  energyLowSen: number; // energy charge if total ≤ threshold
  energyHighSen: number; // energy charge if total > threshold
  energyThresholdKwh: number; // 1500
  capacitySen: number;
  networkSen: number;
  retailRM: number; // RM/month
  protectionKwh: number; // ≤ this: retail + AFA exempt (gov protection, Sep–Dec 2026)
  eeiMaxKwh: number; // ≤ this: eligible for EEI
  kwtbbPct: number; // 1.6%
  kwtbbExemptKwh: number; // ≤ this: KWTBB exempt (domestic)
  serviceTaxPct: number; // 8%
  serviceTaxThresholdKwh: number; // tax applies to kWh above this
  eei: EeiBand[];
  sources: { title: string; url: string }[];
}

export const TNB: TnbTariff = {
  asOf: '2025-07-01',
  afaAsOf: '2026-11',
  afaDefaultSen: 3.60, // +3.60 sen/kWh, 1–30 Nov 2026 (surcharge charged to consumers)
  energyLowSen: 27.03,
  energyHighSen: 37.03,
  energyThresholdKwh: 1500,
  capacitySen: 4.55,
  networkSen: 12.85,
  retailRM: 10.0,
  protectionKwh: 800,
  eeiMaxKwh: 1000,
  kwtbbPct: 0.016,
  kwtbbExemptKwh: 300,
  serviceTaxPct: 0.08,
  serviceTaxThresholdKwh: 800,
  // Insentif Cekap Tenaga (Energy Efficiency Incentive) — rebate sen/kWh by total
  // monthly consumption band, applied to ALL kWh (negative = rebate).
  eei: [
    { max: 200, sen: -25.0 }, { max: 250, sen: -24.5 }, { max: 300, sen: -22.5 },
    { max: 350, sen: -21.0 }, { max: 400, sen: -17.0 }, { max: 450, sen: -14.5 },
    { max: 500, sen: -12.0 }, { max: 550, sen: -10.5 }, { max: 600, sen: -9.0 },
    { max: 650, sen: -7.5 }, { max: 700, sen: -5.5 }, { max: 750, sen: -4.5 },
    { max: 800, sen: -4.0 }, { max: 850, sen: -2.5 }, { max: 900, sen: -1.0 },
    { max: 1000, sen: -0.5 },
  ],
  sources: [
    { title: 'TNB — Understand Your Electricity Tariff (RP4, effective 1 Jul 2025)', url: 'https://www.mytnb.com.my/tariff' },
    { title: 'Suruhanjaya Tenaga (Energy Commission) — AFA monthly rate', url: 'https://www.st.gov.my/AFA' },
  ],
};

/** EEI rebate rate (sen/kWh) for a total monthly consumption; 0 if above the cap. */
export function eeiRateSen(kwh: number, t: TnbTariff = TNB): number {
  if (kwh <= 0 || kwh > t.eeiMaxKwh) return 0;
  for (const b of t.eei) if (kwh <= b.max) return b.sen;
  return 0;
}

export interface TnbInput {
  kwh: number;
  /** AFA surcharge (sen/kWh) for the month; defaults to the dated current rate. */
  afaSen?: number;
}

export interface TnbResult {
  kwh: number;
  energyRate: number; // sen/kWh applied
  energy: number; // RM
  capacity: number;
  network: number;
  retail: number;
  eeiRate: number; // sen/kWh (negative)
  eei: number; // RM (negative)
  afa: number; // RM
  afaSen: number; // sen/kWh used
  kwtbb: number; // RM
  serviceTax: number; // RM
  total: number; // RM
  asOf: string;
  afaAsOf: string;
}

const r2 = (sen: number) => Math.round(sen) / 100; // sen → RM, 2dp

/** Estimate a domestic (General Tariff, non-ToU) monthly bill. All money in RM. */
export function computeTnbBill(input: TnbInput, t: TnbTariff = TNB): TnbResult {
  const kwh = Math.max(0, input.kwh || 0);
  const afaSen = input.afaSen ?? t.afaDefaultSen;

  const energyRate = kwh <= t.energyThresholdKwh ? t.energyLowSen : t.energyHighSen;
  // Per-kWh charges, in sen.
  const energySen = energyRate * kwh;
  const capacitySen = t.capacitySen * kwh;
  const networkSen = t.networkSen * kwh;
  const retailSen = kwh > 0 && kwh > t.protectionKwh ? t.retailRM * 100 : 0;

  const eeiRate = eeiRateSen(kwh, t);
  const eeiSen = eeiRate * kwh; // negative

  const afaCharged = kwh > t.protectionKwh ? afaSen : 0;
  const afaSenTotal = afaCharged * kwh;

  // KWTBB 1.6% on the electricity charges (energy+capacity+network+AFA, less EEI
  // rebate), for domestic users above 300 kWh.
  const chargeBaseSen = energySen + capacitySen + networkSen + afaSenTotal + eeiSen;
  const kwtbbSen = kwh > t.kwtbbExemptKwh ? chargeBaseSen * t.kwtbbPct : 0;

  // Service tax 8% on the energy-related charges for the kWh ABOVE 800.
  const aboveKwh = Math.max(0, kwh - t.serviceTaxThresholdKwh);
  const perKwhChargeSen = energyRate + t.capacitySen + t.networkSen + afaCharged;
  const serviceTaxSen = aboveKwh > 0 ? perKwhChargeSen * aboveKwh * t.serviceTaxPct : 0;

  const totalSen = energySen + capacitySen + networkSen + retailSen + eeiSen + afaSenTotal + kwtbbSen + serviceTaxSen;

  return {
    kwh,
    energyRate,
    energy: r2(energySen),
    capacity: r2(capacitySen),
    network: r2(networkSen),
    retail: r2(retailSen),
    eeiRate,
    eei: r2(eeiSen),
    afa: r2(afaSenTotal),
    afaSen: afaCharged,
    kwtbb: r2(kwtbbSen),
    serviceTax: r2(serviceTaxSen),
    total: r2(totalSen),
    asOf: t.asOf,
    afaAsOf: t.afaAsOf,
  };
}
