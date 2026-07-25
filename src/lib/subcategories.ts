import type { Locale } from './categories';

// Sub-topic clusters. Labels are written the way a READER would say them,
// not in internal taxonomy language. Target 5–15 articles per cluster.
// SUBCATEGORY_ORDER controls display order within a category page.

export const SUBCATEGORY_LABELS: Record<string, Record<Locale, string>> = {
  // ---- business ----
  formation: { ms: 'Asas Penubuhan', en: 'Formation fundamentals', zh: '公司设立基础' },
  'choosing-a-structure': { ms: 'Memilih Struktur', en: 'Choosing a structure', zh: '选择商业结构' },
  registration: { ms: 'Prosedur Pendaftaran', en: 'Registration procedures', zh: '注册程序' },
  licensing: { ms: 'Lesen & Permit', en: 'Licences & permits', zh: '执照与准证' },
  'foreign-ownership': { ms: 'Pemilikan & Pelabur Asing', en: 'Foreign founders & ownership', zh: '外资与股权' },
  'banking-finance': { ms: 'Perbankan, Kewangan & Kawalan Pertukaran', en: 'Banking, finance & exchange control', zh: '银行、融资与外汇管制' },
  'contracts-disputes': { ms: 'Kontrak & Pertikaian', en: 'Contracts & disputes', zh: '合约与纠纷' },
  'intellectual-property': { ms: 'Harta Intelek', en: 'Intellectual property', zh: '知识产权' },
  'economic-corridors': { ms: 'Koridor Ekonomi', en: 'Where to invest — regions & corridors', zh: '经济走廊与投资地点' },
  locations: { ms: 'Berniaga Mengikut Lokasi', en: 'Doing business by location', zh: '各地经商指南' },
  'digital-compliance': { ms: 'Pematuhan Digital', en: 'Digital compliance', zh: '数字合规' },
  closing: { ms: 'Penstrukturan & Penutupan', en: 'Restructuring & closure', zh: '重组与结业' },
  // legacy keys, kept so older articles still label correctly
  ownership: { ms: 'Pemilikan & Pelabur Asing', en: 'Foreign founders & ownership', zh: '外资与股权' },
  structuring: { ms: 'Struktur & Entiti', en: 'Structuring & entities', zh: '架构与实体' },
  banking: { ms: 'Perbankan & Kewangan', en: 'Banking & finance setup', zh: '银行与融资' },

  // ---- company secretary ----
  appointment: { ms: 'Pelantikan & Kelayakan', en: 'Appointment & qualification', zh: '委任与资格' },
  'statutory-registers': { ms: 'Daftar Berkanun & Rekod', en: 'Statutory registers & records', zh: '法定登记册与记录' },
  filings: { ms: 'Penyata Tahunan & Pemfailan', en: 'Annual return & filings', zh: '年报与申报' },
  directors: { ms: 'Tugas & Pendedahan Pengarah', en: "Directors' duties & disclosures", zh: '董事职责与披露' },
  'meetings-resolutions': { ms: 'Mesyuarat & Resolusi', en: 'Meetings & resolutions', zh: '会议与决议' },
  'share-capital': { ms: 'Modal Saham & Pemindahan', en: 'Share capital & transfers', zh: '股本与股份转让' },
  'beneficial-ownership': { ms: 'Pemilik Benefisial', en: 'Beneficial ownership', zh: '实益拥有权' },
  governance: { ms: 'Tadbir Urus', en: 'Governance', zh: '公司治理' },

  // ---- taxation ----
  'corporate-tax': { ms: 'Cukai Korporat', en: 'Corporate tax', zh: '企业税' },
  'personal-tax': { ms: 'Cukai Individu', en: 'Personal tax', zh: '个人税' },
  'deductions-and-allowances': { ms: 'Potongan & Elaun', en: 'Deductions & allowances', zh: '扣除与津贴' },
  sst: { ms: 'SST', en: 'Sales & Service Tax', zh: '销售与服务税' },
  'e-invoicing': { ms: 'e-Invois', en: 'E-invoicing', zh: '电子发票' },
  'withholding-tax': { ms: 'Cukai Pegangan', en: 'Withholding tax', zh: '预扣税' },
  'international-tax': { ms: 'Cukai Antarabangsa', en: 'International tax', zh: '国际税务' },
  'capital-taxes': { ms: 'Cukai Keuntungan Modal', en: 'Taxes on capital', zh: '资本利得税' },
  'stamp-duty': { ms: 'Duti Setem', en: 'Stamp duty', zh: '印花税' },
  incentives: { ms: 'Insentif Cukai', en: 'Tax incentives', zh: '税务优惠' },
  'tax-administration': { ms: 'Pentadbiran Cukai', en: 'Tax administration', zh: '税务行政' },

  // ---- accounting ----
  standards: { ms: 'Piawaian Perakaunan', en: 'Accounting standards', zh: '会计准则' },
  records: { ms: 'Rekod Perakaunan', en: 'Accounting records', zh: '会计记录' },
  'financial-statements': { ms: 'Penyata Kewangan & MBRS', en: 'Financial statements & MBRS', zh: '财务报表与 MBRS' },
  bookkeeping: { ms: 'Simpan Kira', en: 'Bookkeeping', zh: '簿记' },
  'financial-year': { ms: 'Tahun Kewangan', en: 'Financial year end', zh: '财政年结' },

  // ---- audit ----
  requirements: { ms: 'Keperluan & Pengecualian', en: 'Requirements & exemption', zh: '审计要求与豁免' },
  'audit-appointment': { ms: 'Melantik Juruaudit', en: 'Appointing an auditor', zh: '委任审计师' },
  fees: { ms: 'Yuran Audit', en: 'Audit fees', zh: '审计费用' },
  process: { ms: 'Proses Audit', en: 'The audit process', zh: '审计流程' },
  reporting: { ms: 'Jenis Laporan', en: 'Report types', zh: '报告类型' },

  // ---- employment ----
  'employment-law-basics': { ms: 'Asas Undang-Undang Pekerjaan', en: 'Employment law basics', zh: '劳动法基础' },
  'hiring-and-contracts': { ms: 'Pengambilan & Kontrak', en: 'Hiring & contracts', zh: '招聘与合约' },
  'payroll-statutory': { ms: 'Gaji & Caruman Berkanun', en: 'Payroll & statutory', zh: '薪资与法定缴纳' },
  'leave-and-welfare': { ms: 'Cuti & Kebajikan', en: 'Leave, benefits & welfare', zh: '假期与福利' },
  'termination-retrenchment': { ms: 'Penamatan & Pemberhentian', en: 'Termination & retrenchment', zh: '解雇与裁员' },
  'foreign-workers-expatriates': { ms: 'Pekerja Asing & Ekspatriat', en: 'Foreign workers & expatriates', zh: '外籍员工与外派人员' },
  hiring: { ms: 'Pengambilan Pekerja', en: 'Hiring', zh: '招聘' },
  'labour-law': { ms: 'Undang-Undang Buruh', en: 'Labour law', zh: '劳工法' },

  // ---- states ----
  peninsular: { ms: 'Semenanjung', en: 'Peninsular Malaysia', zh: '马来半岛' },
  borneo: { ms: 'Borneo', en: 'Borneo', zh: '婆罗洲' },
  territories: { ms: 'Wilayah Persekutuan', en: 'Federal Territories', zh: '联邦直辖区' },
  'state-government': { ms: 'Kerajaan Negeri', en: 'State government', zh: '州政府' },

  // ---- living: transport ----
  'public-transport': { ms: 'Pengangkutan Awam', en: 'Public transport', zh: '公共交通' },
  driving: { ms: 'Memandu', en: 'Driving', zh: '驾驶' },
  'vehicles-tolls': { ms: 'Kenderaan & Tol', en: 'Vehicles & tolls', zh: '车辆与过路费' },
  // ---- living: money & daily life ----
  'banking-payments': { ms: 'Perbankan & Pembayaran', en: 'Banking & payments', zh: '银行与支付' },
  'personal-tax-statutory': { ms: 'Cukai & Caruman', en: 'Tax & statutory', zh: '税务与法定缴纳' },
  'everyday-admin': { ms: 'Urusan Harian', en: 'Everyday admin', zh: '日常事务' },
  // ---- living: settling in ----
  'visas-passes': { ms: 'Visa & Pas', en: 'Visas & passes', zh: '签证与准证' },
  documents: { ms: 'Dokumen', en: 'Documents', zh: '证件' },
  // ---- living: cost of living / housing / healthcare ----
  overview: { ms: 'Gambaran', en: 'Overview', zh: '概览' },
  'by-city': { ms: 'Mengikut Bandar', en: 'By city', zh: '按城市' },
  renting: { ms: 'Menyewa', en: 'Renting', zh: '租房' },
  utilities: { ms: 'Utiliti', en: 'Utilities', zh: '水电网络' },
  'using-the-system': { ms: 'Menggunakan Sistem', en: 'Using the system', zh: '使用系统' },
  schooling: { ms: 'Persekolahan', en: 'Schooling', zh: '就学' },

  // ---- malaysia (history & identity) ----
  'early-kingdoms': { ms: 'Kerajaan Awal', en: 'Early kingdoms', zh: '早期王国' },
  sultanates: { ms: 'Kesultanan Melayu', en: 'Malay sultanates', zh: '马来苏丹王朝' },
  colonial: { ms: 'Zaman Penjajahan', en: 'Colonial era', zh: '殖民时代' },
  occupation: { ms: 'Pendudukan Jepun', en: 'Japanese occupation', zh: '日据时期' },
  independence: { ms: 'Ke Arah Kemerdekaan', en: 'Towards independence', zh: '迈向独立' },
  'nation-formation': { ms: 'Pembentukan Malaysia', en: 'Forming Malaysia', zh: '马来西亚的成立' },
  modern: { ms: 'Malaysia Moden', en: 'Modern Malaysia', zh: '现代马来西亚' },
  identity: { ms: 'Identiti Nasional', en: 'National identity', zh: '国家认同' },

  // ---- arts & culture ----
  'performing-arts': { ms: 'Seni Persembahan', en: 'Performing arts', zh: '表演艺术' },
  crafts: { ms: 'Kraf Tangan', en: 'Crafts', zh: '手工艺' },
  festivals: { ms: 'Perayaan', en: 'Festivals', zh: '节庆' },
  languages: { ms: 'Bahasa', en: 'Languages', zh: '语言' },
  heritage: { ms: 'Warisan', en: 'Heritage', zh: '文化遗产' },

  // ---- law ----
  corporate: { ms: 'Korporat', en: 'Corporate', zh: '公司法' },
  tax: { ms: 'Percukaian', en: 'Taxation', zh: '税务' },
  employment: { ms: 'Pekerjaan', en: 'Employment', zh: '就业' },
  'legal-system': { ms: 'Sistem Perundangan', en: 'Legal system', zh: '法律体系' },
  'key-acts': { ms: 'Akta Utama', en: 'Key Acts', zh: '主要法令' },
  // ---- glossary (civic terms) ----
  government: { ms: 'Kerajaan', en: 'Government', zh: '政府' },
  legal: { ms: 'Perundangan', en: 'Legal', zh: '法律' },
  culture: { ms: 'Budaya', en: 'Culture', zh: '文化' },
  constitutional: { ms: 'Perlembagaan', en: 'Constitutional', zh: '宪法' },

  // ---- government ----
  agencies: { ms: 'Agensi', en: 'Agencies', zh: '机构' },
  institutions: { ms: 'Institusi', en: 'Institutions', zh: '体制机构' },
  ministries: { ms: 'Kementerian', en: 'Ministries', zh: '部门' },

  // ---- economy ----
  indicators: { ms: 'Petunjuk', en: 'Indicators', zh: '指标' },
  sectors: { ms: 'Sektor', en: 'Sectors', zh: '行业领域' },
  trade: { ms: 'Perdagangan', en: 'Trade', zh: '贸易' },
  'monetary-policy': { ms: 'Dasar Monetari', en: 'Monetary policy', zh: '货币政策' },
  policy: { ms: 'Dasar', en: 'Policy', zh: '政策' },
  // `institutions` is already defined under government above — shared label.
};

/** Display order per category. Anything unlisted sorts to the end. */
export const SUBCATEGORY_ORDER: Record<string, string[]> = {
  // Ordered as a reader's journey, not alphabetically: decide → register →
  // get licensed → fund it → protect it → grow it → exit.
  business: [
    'formation',
    'choosing-a-structure',
    'structuring',
    'registration',
    'licensing',
    'foreign-ownership',
    'ownership',
    'banking-finance',
    'banking',
    'contracts-disputes',
    'intellectual-property',
    'digital-compliance',
    'economic-corridors',
    'locations',
    'closing',
  ],
  'company-secretary': [
    'appointment',
    'statutory-registers',
    'filings',
    'directors',
    'meetings-resolutions',
    'share-capital',
    'beneficial-ownership',
    'governance',
  ],
  taxation: [
    'corporate-tax',
    'personal-tax',
    'deductions-and-allowances',
    'sst',
    'e-invoicing',
    'withholding-tax',
    'international-tax',
    'capital-taxes',
    'stamp-duty',
    'incentives',
    'tax-administration',
  ],
  accounting: ['standards', 'records', 'financial-statements', 'bookkeeping', 'financial-year'],
  audit: ['requirements', 'audit-appointment', 'appointment', 'fees', 'process', 'reporting'],
  employment: [
    'employment-law-basics',
    'hiring-and-contracts',
    'hiring',
    'payroll-statutory',
    'leave-and-welfare',
    'termination-retrenchment',
    'foreign-workers-expatriates',
    'labour-law',
  ],
  states: ['peninsular', 'borneo', 'territories', 'state-government'],
  // ---- living ----
  transport: ['public-transport', 'driving', 'vehicles-tolls'],
  'money-daily-life': ['banking-payments', 'personal-tax-statutory', 'everyday-admin'],
  'settling-in': ['visas-passes', 'documents'],
  'cost-of-living': ['overview', 'by-city'],
  property: ['renting', 'utilities'],
  healthcare: ['using-the-system'],
  education: ['schooling'],
  malaysia: [
    'early-kingdoms',
    'sultanates',
    'colonial',
    'occupation',
    'independence',
    'nation-formation',
    'modern',
    'identity',
  ],
  'arts-culture': ['performing-arts', 'crafts', 'festivals', 'languages', 'heritage'],
  law: ['constitutional', 'legal-system', 'key-acts', 'corporate', 'tax', 'employment'],
  government: ['institutions', 'agencies', 'ministries'],
  economy: ['indicators', 'monetary-policy', 'sectors', 'policy', 'institutions', 'trade'],
  // Civic terms first — the glossary's job is explaining the state to a reader.
  glossary: ['government', 'legal', 'corporate', 'tax', 'employment', 'culture'],
};

function titleCase(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export function subcatLabel(slug: string, locale: Locale): string {
  return SUBCATEGORY_LABELS[slug]?.[locale] ?? titleCase(slug);
}

/** Ordered subcategory slugs present in a set of articles. */
export function orderedSubcats(categoryId: string, present: string[]): string[] {
  const order = SUBCATEGORY_ORDER[categoryId] ?? [];
  const seen = [...new Set(present)];
  return seen.sort((a, b) => {
    const ia = order.indexOf(a);
    const ib = order.indexOf(b);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
  });
}
