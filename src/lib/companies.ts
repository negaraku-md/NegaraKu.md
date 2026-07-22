// Illustrative seed of large Bursa Malaysia–listed companies.
// Values (RM billion) are approximate and for demonstration — replace with
// sourced figures from Bursa Malaysia. `sector` drives the bubble colours.
export interface Company {
  name: string;
  ticker: string;
  sector: string;
  marketCap: number; // RM bn
  revenue: number; // RM bn (approx)
}

export const COMPANIES: Company[] = [
  { name: 'Maybank', ticker: '1155', sector: 'Banking', marketCap: 120, revenue: 60 },
  { name: 'Public Bank', ticker: '1295', sector: 'Banking', marketCap: 85, revenue: 25 },
  { name: 'CIMB Group', ticker: '1023', sector: 'Banking', marketCap: 75, revenue: 22 },
  { name: 'Hong Leong Bank', ticker: '5819', sector: 'Banking', marketCap: 42, revenue: 6 },
  { name: 'Tenaga Nasional', ticker: '5347', sector: 'Utilities', marketCap: 80, revenue: 53 },
  { name: 'YTL Power', ticker: '6742', sector: 'Utilities', marketCap: 40, revenue: 22 },
  { name: 'Petronas Chemicals', ticker: '5183', sector: 'Chemicals', marketCap: 55, revenue: 28 },
  { name: 'Petronas Gas', ticker: '6033', sector: 'Energy', marketCap: 35, revenue: 6 },
  { name: 'IHH Healthcare', ticker: '5225', sector: 'Healthcare', marketCap: 55, revenue: 21 },
  { name: 'CelcomDigi', ticker: '6947', sector: 'Telco', marketCap: 45, revenue: 13 },
  { name: 'Maxis', ticker: '6012', sector: 'Telco', marketCap: 28, revenue: 10 },
  { name: 'Axiata', ticker: '6888', sector: 'Telco', marketCap: 22, revenue: 22 },
  { name: 'SD Guthrie', ticker: '5285', sector: 'Plantation', marketCap: 32, revenue: 19 },
  { name: 'PPB Group', ticker: '4065', sector: 'Consumer', marketCap: 22, revenue: 6 },
  { name: 'Nestlé Malaysia', ticker: '4707', sector: 'Consumer', marketCap: 28, revenue: 7 },
  { name: 'QL Resources', ticker: '7084', sector: 'Consumer', marketCap: 13, revenue: 7 },
  { name: 'Press Metal', ticker: '8869', sector: 'Materials', marketCap: 40, revenue: 15 },
  { name: 'MISC', ticker: '3816', sector: 'Transport', marketCap: 35, revenue: 13 },
  { name: 'Gamuda', ticker: '5398', sector: 'Construction', marketCap: 25, revenue: 13 },
  { name: 'Sime Darby', ticker: '4197', sector: 'Conglomerate', marketCap: 18, revenue: 67 },
];
