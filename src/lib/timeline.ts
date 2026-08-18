import type { Locale } from './categories';

// Curated timeline of Malaysia — a hand-picked spine of widely-documented
// milestones, grouped into eras, for the dedicated /timeline view. Kept
// deliberately concise (one line each) and neutral. Entries flagged `sensitive`
// touch 3R themes (race / religion / royalty) and must clear the sensitivity
// review before this page ships to production.

export interface TimelineEvent {
  /** Display label for the marker, e.g. "1957", "1941–45", "c. 1400". */
  year: string;
  title: Record<Locale, string>;
  blurb: Record<Locale, string>;
  /** 3R-sensitive milestone — surfaced with a marker; needs careful review. */
  sensitive?: boolean;
}

export interface TimelineEra {
  id: string;
  name: Record<Locale, string>;
  /** Rough span shown next to the era name. */
  range: string;
  events: TimelineEvent[];
}

export const TIMELINE: TimelineEra[] = [
  {
    id: 'early',
    name: { ms: 'Kerajaan awal & Kesultanan Melaka', en: 'Early kingdoms & the Melaka Sultanate', zh: '早期王国与马六甲苏丹国' },
    range: 'c. 1400 – 1511',
    events: [
      {
        year: 'c. 1400',
        title: { ms: 'Kesultanan Melaka diasaskan', en: 'The Melaka Sultanate is founded', zh: '马六甲苏丹国建立' },
        blurb: {
          ms: 'Parameswara mengasaskan Kesultanan Melaka, yang berkembang menjadi empayar perdagangan Melayu utama dan pusat penyebaran Islam.',
          en: 'Parameswara founds the Melaka Sultanate, which grows into a major Malay trading empire and a centre for the spread of Islam.',
          zh: '拜里米苏拉建立马六甲苏丹国，发展为重要的马来贸易帝国与伊斯兰传播中心。',
        },
      },
      {
        year: '1511',
        title: { ms: 'Portugis menawan Melaka', en: 'Portugal captures Melaka', zh: '葡萄牙攻占马六甲' },
        blurb: {
          ms: 'Angkatan Portugis pimpinan Afonso de Albuquerque menawan Melaka, memulakan berabad-abad kehadiran kuasa Eropah.',
          en: 'Portuguese forces led by Afonso de Albuquerque take Melaka, beginning centuries of European presence.',
          zh: '阿方索·德·阿尔布克尔克率领的葡萄牙军队攻占马六甲，开启数百年的欧洲势力。',
        },
      },
    ],
  },
  {
    id: 'colonial',
    name: { ms: 'Zaman penjajahan', en: 'The colonial era', zh: '殖民时期' },
    range: '1641 – 1941',
    events: [
      {
        year: '1641',
        title: { ms: 'Belanda menguasai Melaka', en: 'The Dutch take Melaka', zh: '荷兰夺取马六甲' },
        blurb: {
          ms: 'Belanda, bersekutu dengan Johor, mengambil alih Melaka daripada Portugis.',
          en: 'The Dutch, allied with Johor, take Melaka from the Portuguese.',
          zh: '荷兰与柔佛结盟，从葡萄牙手中夺取马六甲。',
        },
      },
      {
        year: '1786',
        title: { ms: 'British menubuhkan Pulau Pinang', en: 'The British establish Penang', zh: '英国建立槟榔屿据点' },
        blurb: {
          ms: 'Francis Light menubuhkan penempatan dagang British di Pulau Pinang untuk Syarikat Hindia Timur.',
          en: 'Francis Light establishes a British trading settlement on Penang island for the East India Company.',
          zh: '弗朗西斯·莱特为东印度公司在槟榔屿建立英国贸易据点。',
        },
      },
      {
        year: '1824',
        title: { ms: 'Perjanjian Inggeris-Belanda', en: 'The Anglo-Dutch Treaty', zh: '《英荷条约》' },
        blurb: {
          ms: 'Perjanjian Inggeris-Belanda membahagikan rantau ini, meletakkan Semenanjung Tanah Melayu dalam lingkungan pengaruh British.',
          en: 'The Anglo-Dutch Treaty divides the region, placing the Malay peninsula within the British sphere of influence.',
          zh: '《英荷条约》划分区域，将马来半岛纳入英国势力范围。',
        },
      },
      {
        year: '1826',
        title: { ms: 'Negeri-Negeri Selat dibentuk', en: 'The Straits Settlements form', zh: '海峡殖民地成立' },
        blurb: {
          ms: 'Pulau Pinang, Melaka dan Singapura digabungkan menjadi Negeri-Negeri Selat di bawah pentadbiran British.',
          en: 'Penang, Melaka and Singapore are combined into the Straits Settlements under British rule.',
          zh: '槟城、马六甲与新加坡合并为英属海峡殖民地。',
        },
      },
      {
        year: '1874',
        title: { ms: 'Perjanjian Pangkor', en: 'The Pangkor Treaty', zh: '《邦咯条约》' },
        blurb: {
          ms: 'Perjanjian Pangkor memperkenalkan sistem Residen British, meluaskan kawalan penjajah ke atas negeri-negeri Melayu.',
          en: 'The Pangkor Treaty introduces the British Residential system, extending colonial control over the Malay states.',
          zh: '《邦咯条约》引入英国参政司制度，扩大对马来各州的殖民控制。',
        },
      },
      {
        year: '1896',
        title: { ms: 'Negeri-Negeri Melayu Bersekutu', en: 'The Federated Malay States', zh: '马来联邦成立' },
        blurb: {
          ms: 'Perak, Selangor, Negeri Sembilan dan Pahang membentuk Negeri-Negeri Melayu Bersekutu di bawah pentadbiran British.',
          en: 'Perak, Selangor, Negeri Sembilan and Pahang form the Federated Malay States under British administration.',
          zh: '霹雳、雪兰莪、森美兰与彭亨组成英属马来联邦。',
        },
      },
    ],
  },
  {
    id: 'merdeka',
    name: { ms: 'Pendudukan & jalan ke Merdeka', en: 'Occupation & the road to Merdeka', zh: '占领与迈向独立' },
    range: '1941 – 1957',
    events: [
      {
        year: '1941–45',
        title: { ms: 'Pendudukan Jepun', en: 'The Japanese Occupation', zh: '日本占领时期' },
        blurb: {
          ms: 'Tentera Jepun menduduki Tanah Melayu dan Borneo semasa Perang Dunia Kedua sehingga menyerah kalah pada 1945.',
          en: 'Japanese forces occupy Malaya and Borneo during the Second World War until their surrender in 1945.',
          zh: '二战期间日军占领马来亚与婆罗洲，直至1945年投降。',
        },
      },
      {
        year: '1946',
        title: { ms: 'Malayan Union & penubuhan UMNO', en: 'The Malayan Union and the founding of UMNO', zh: '马来亚联邦与巫统成立' },
        blurb: {
          ms: 'Cadangan Malayan Union British mencetuskan tentangan meluas; UMNO ditubuhkan sebagai reaksi.',
          en: "Britain's Malayan Union proposal sparks wide opposition; UMNO is founded in response.",
          zh: '英国的马来亚联邦方案引发广泛反对，巫统应运而生。',
        },
      },
      {
        year: '1948',
        title: { ms: 'Persekutuan Tanah Melayu & Darurat', en: 'The Federation of Malaya and the Emergency', zh: '马来亚联合邦与紧急状态' },
        blurb: {
          ms: 'Persekutuan Tanah Melayu menggantikan Malayan Union; Darurat menentang pemberontakan komunis bermula.',
          en: 'The Federation of Malaya replaces the Malayan Union; the Emergency against a communist insurgency begins.',
          zh: '马来亚联合邦取代马来亚联邦；对抗共产党叛乱的紧急状态开始。',
        },
      },
      {
        year: '1957',
        title: { ms: 'Merdeka — kemerdekaan', en: 'Merdeka — independence', zh: '独立日（默迪卡）' },
        blurb: {
          ms: 'Persekutuan Tanah Melayu mencapai kemerdekaan pada 31 Ogos 1957, dengan Tunku Abdul Rahman sebagai Perdana Menteri pertama.',
          en: 'The Federation of Malaya gains independence on 31 August 1957, with Tunku Abdul Rahman as its first Prime Minister.',
          zh: '1957年8月31日马来亚联合邦独立，东姑阿都拉曼出任首任首相。',
        },
      },
    ],
  },
  {
    id: 'formation',
    name: { ms: 'Pembentukan Malaysia', en: 'Forming Malaysia', zh: '马来西亚的形成' },
    range: '1963 – 1969',
    events: [
      {
        year: '1963',
        title: { ms: 'Malaysia dibentuk', en: 'Malaysia is formed', zh: '马来西亚成立' },
        blurb: {
          ms: 'Malaysia dibentuk pada 16 September 1963, menyatukan Tanah Melayu, Sabah, Sarawak dan (buat seketika) Singapura.',
          en: 'Malaysia is formed on 16 September 1963, uniting Malaya, Sabah, Sarawak and (briefly) Singapore.',
          zh: '1963年9月16日马来西亚成立，联合马来亚、沙巴、砂拉越与（短暂的）新加坡。',
        },
      },
      {
        year: '1965',
        title: { ms: 'Singapura berpisah', en: 'Singapore separates', zh: '新加坡分离' },
        blurb: {
          ms: 'Singapura keluar daripada Malaysia dan menjadi sebuah republik merdeka.',
          en: 'Singapore leaves Malaysia and becomes an independent republic.',
          zh: '新加坡脱离马来西亚，成为独立共和国。',
        },
      },
      {
        year: '1969',
        title: { ms: 'Peristiwa 13 Mei', en: 'The 13 May incident', zh: '五一三事件' },
        blurb: {
          ms: 'Rusuhan antara kaum meletus di Kuala Lumpur selepas pilihan raya umum, membawa kepada pengisytiharan darurat.',
          en: 'Intercommunal violence erupts in Kuala Lumpur after the general election, leading to a declaration of emergency.',
          zh: '大选后吉隆坡爆发族群冲突，导致国家宣布进入紧急状态。',
        },
        sensitive: true,
      },
    ],
  },
  {
    id: 'modern',
    name: { ms: 'Malaysia moden', en: 'Modern Malaysia', zh: '现代马来西亚' },
    range: '1971 – kini',
    events: [
      {
        year: '1971',
        title: { ms: 'Dasar Ekonomi Baru', en: 'The New Economic Policy', zh: '新经济政策' },
        blurb: {
          ms: 'Dasar Ekonomi Baru dilancarkan untuk membasmi kemiskinan dan menyusun semula masyarakat selepas 1969.',
          en: 'The New Economic Policy launches to reduce poverty and restructure society in the years after 1969.',
          zh: '新经济政策启动，旨在1969年后消除贫困并重组社会。',
        },
      },
      {
        year: '1981',
        title: { ms: 'Era Mahathir bermula', en: 'The Mahathir era begins', zh: '马哈迪时代开始' },
        blurb: {
          ms: 'Mahathir Mohamad menjadi Perdana Menteri keempat, memulakan penggal 22 tahun pemodenan pesat.',
          en: 'Mahathir Mohamad becomes the fourth Prime Minister, beginning a 22-year term of rapid modernisation.',
          zh: '马哈迪·莫哈末出任第四任首相，开启22年快速现代化任期。',
        },
      },
      {
        year: '1997–98',
        title: { ms: 'Krisis kewangan Asia', en: 'The Asian financial crisis', zh: '亚洲金融危机' },
        blurb: {
          ms: 'Krisis kewangan Asia melanda Malaysia; kerajaan mengenakan kawalan modal sebagai tindak balas.',
          en: 'The Asian financial crisis hits Malaysia; the government responds by imposing capital controls.',
          zh: '亚洲金融危机冲击马来西亚，政府实施资本管制应对。',
        },
      },
      {
        year: '2018',
        title: { ms: 'PRU-14: peralihan kuasa', en: 'GE14: a change of government', zh: '第14届大选：政权更替' },
        blurb: {
          ms: 'Pilihan Raya Umum ke-14 menghasilkan peralihan kerajaan persekutuan yang pertama sejak merdeka.',
          en: 'The 14th general election produces the first change of federal government since independence.',
          zh: '第14届大选促成马来西亚独立以来首次联邦政府更替。',
        },
      },
      {
        year: '2022',
        title: { ms: 'Kerajaan perpaduan', en: 'A unity government', zh: '团结政府' },
        blurb: {
          ms: 'Anwar Ibrahim menjadi Perdana Menteri kesepuluh, mengetuai kerajaan perpaduan selepas parlimen tergantung.',
          en: 'Anwar Ibrahim becomes the tenth Prime Minister, leading a unity government after a hung parliament.',
          zh: '安华·依布拉欣出任第十任首相，在悬峙国会后领导团结政府。',
        },
      },
    ],
  },
];
