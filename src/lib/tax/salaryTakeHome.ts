// Malaysia monthly salary take-home estimator — pure, client-safe, unit-tested.
// Reuses the income-tax engine (incomeTax.ts) for the PCB/tax portion and adds the
// statutory payroll contributions (EPF, SOCSO, EIS).
//
// RATE DATA IS DATED + CITED. EPF 11% employee is exact; SOCSO/EIS here use the
// headline percentage on the capped wage, which approximates PERKESO's exact
// contribution-table bands (shown to the user as an estimate). Update STATUTORY.asOf
// when KWSP/PERKESO revise a rate or the wage ceiling.
//   Sources: kwsp.gov.my (mandatory contribution), perkeso.gov.my (contributions),
//   PwC Malaysia "Other taxes".

import { computeTax } from './incomeTax';

export interface StatutoryRates {
  asOf: string;
  epfEmployee: number;
  epfEmployerLow: number;      // wages <= epfEmployerThreshold
  epfEmployerHigh: number;     // wages above it
  epfEmployerThreshold: number;
  socsoCeiling: number;
  socsoEmployee: number;       // Employment Injury + Invalidity, employee share
  socsoEmployer: number;
  eisCeiling: number;
  eisRate: number;             // 0.2% each side
  sources: { title: string; url: string }[];
}

export const STATUTORY: StatutoryRates = {
  asOf: '2026-01-01',
  epfEmployee: 0.11,
  epfEmployerLow: 0.13,
  epfEmployerHigh: 0.12,
  epfEmployerThreshold: 5_000,
  socsoCeiling: 6_000,
  socsoEmployee: 0.005,
  socsoEmployer: 0.0175,
  eisCeiling: 6_000,
  eisRate: 0.002,
  sources: [
    { title: 'Mandatory Contribution (KWSP/EPF)', url: 'https://www.kwsp.gov.my/en/employer/responsibilities/mandatory-contribution' },
    { title: 'Contributions (PERKESO/SOCSO & EIS)', url: 'https://www.perkeso.gov.my/en/our-services/employer-employee/contributions.html' },
    { title: 'Malaysia — Individual — Other taxes (PwC)', url: 'https://taxsummaries.pwc.com/malaysia/individual/other-taxes' },
  ],
};

export interface SalaryInput {
  monthlyGross: number;
  ya?: number;
  resident?: boolean;
  /** Relief id -> annual amount, forwarded to the tax engine for a better PCB. */
  reliefs?: Record<string, number>;
  /** 60 and over: employees stop contributing the 11% EPF share. */
  age60plus?: boolean;
}

export interface SalaryResult {
  monthlyGross: number;
  deductions: { epf: number; socso: number; eis: number; pcb: number };
  totalDeductions: number;
  monthlyTakeHome: number;
  annualTakeHome: number;
  takeHomeRate: number;      // take-home / gross
  employer: { epf: number; socso: number; eis: number; totalCost: number };
  asOf: string;
}

const r2 = (n: number) => Math.round(n * 100) / 100;

export function computeSalary(input: SalaryInput, rates: StatutoryRates = STATUTORY): SalaryResult {
  const gross = Math.max(0, input.monthlyGross || 0);
  const annual = gross * 12;

  // Employee EPF — 11% of wages, nil at 60+. (EPF has no wage ceiling.)
  const epf = input.age60plus ? 0 : r2(gross * rates.epfEmployee);
  const annualEpf = epf * 12;

  // SOCSO + EIS — on wages capped at the PERKESO ceiling.
  const socsoBase = Math.min(gross, rates.socsoCeiling);
  const socso = r2(socsoBase * rates.socsoEmployee);
  const eis = r2(Math.min(gross, rates.eisCeiling) * rates.eisRate);

  // PCB — annualise, run the resident tax engine with EPF relief + any extra
  // reliefs the user supplied, then spread the year's tax over 12 months.
  const tax = computeTax({
    ya: input.ya ?? 2025,
    resident: input.resident ?? true,
    income: annual,
    reliefs: { epf: annualEpf, ...(input.reliefs ?? {}) },
  });
  const pcb = r2(tax.taxPayable / 12);

  const totalDeductions = r2(epf + socso + eis + pcb);
  const monthlyTakeHome = r2(gross - totalDeductions);

  // Employer side (cost to employer), for context.
  const erEpf = r2(gross * (gross <= rates.epfEmployerThreshold ? rates.epfEmployerLow : rates.epfEmployerHigh));
  const erSocso = r2(socsoBase * rates.socsoEmployer);
  const erEis = eis; // employer EIS share equals the employee share
  const totalCost = r2(gross + erEpf + erSocso + erEis);

  return {
    monthlyGross: gross,
    deductions: { epf, socso, eis, pcb },
    totalDeductions,
    monthlyTakeHome,
    annualTakeHome: r2(monthlyTakeHome * 12),
    takeHomeRate: gross ? monthlyTakeHome / gross : 0,
    employer: { epf: erEpf, socso: erSocso, eis: erEis, totalCost },
    asOf: rates.asOf,
  };
}
