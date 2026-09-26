// milestones.ts — the NegaraKu.md project's own journey, as DATA.
//
// Distinct from /changelog (auto-generated per-commit history) and the Timeline
// of Malaysia (an article about the country): these are the handful of milestones
// that mark how far the knowledge base itself has come. Curated, not generated.
// Newest first is applied in the view; keep this list in chronological order.

import type { Locale } from './categories';

export interface Milestone {
  /** YYYY-MM-DD. */
  date: string;
  icon: string;
  title: Record<Locale, string>;
  body: Record<Locale, string>;
}

export const MILESTONES: Milestone[] = [
  {
    date: '2026-07-22',
    icon: '🌱',
    title: {
      ms: 'NegaraKu.md dilancarkan',
      en: 'NegaraKu.md goes live',
      zh: 'NegaraKu.md 正式上线',
      ta: 'NegaraKu.md தொடங்கப்படுகிறது',
      ja: 'NegaraKu.md 公開',
      th: 'NegaraKu.md เปิดตัว',
    },
    body: {
      ms: 'Pangkalan pengetahuan sumber terbuka, mesra-AI tentang Malaysia bermula — dengan model amanah rantaian jagaan (tiada kandungan sensitif diterbitkan tanpa penyemak bernama).',
      en: 'The open-source, AI-friendly knowledge base about Malaysia begins — built on a chain-of-custody trust model (no sensitive content publishes without a named reviewer).',
      zh: '关于马来西亚的开源、AI 友好知识库启动——建立在链式托管的信任模型之上（敏感内容没有具名审阅者不会发布）。',
      ta: 'மலேசியா பற்றிய திறந்த-மூல, AI-நட்பு அறிவுத் தளம் தொடங்குகிறது — ஒரு நம்பகச் சங்கிலி மாதிரியின் மீது கட்டமைக்கப்பட்டது (பெயரிடப்பட்ட மதிப்பாய்வாளர் இல்லாமல் உணர்திறன் உள்ளடக்கம் வெளியிடப்படாது).',
      ja: 'マレーシアに関するオープンソースで AI フレンドリーな知識ベースが始動——チェーン・オブ・カストディの信頼モデルの上に構築（記名レビュアーなしにセンシティブなコンテンツは公開されません）。',
      th: 'ฐานความรู้เกี่ยวกับมาเลเซียแบบโอเพนซอร์สและเป็นมิตรกับ AI เริ่มต้นขึ้น — สร้างบนแบบจำลองความน่าเชื่อถือแบบห่วงโซ่การกำกับดูแล (เนื้อหาอ่อนไหวจะไม่เผยแพร่หากไม่มีผู้ตรวจทานที่ระบุชื่อ)',
    },
  },
  {
    date: '2026-07-26',
    icon: '🌐',
    title: {
      ms: 'Setara tiga bahasa',
      en: 'Full trilingual parity',
      zh: '三语完全对等',
      ta: 'முழு மும்மொழி இணைநிலை',
      ja: '完全な三言語対応',
      th: 'ความเท่าเทียมสามภาษาอย่างสมบูรณ์',
    },
    body: {
      ms: 'Setiap topik tersedia dalam Bahasa Melayu, Inggeris dan Cina.',
      en: 'Every topic available in Malay, English and Chinese.',
      zh: '每个主题均以马来文、英文和中文呈现。',
      ta: 'ஒவ்வொரு தலைப்பும் மலாய், ஆங்கிலம் மற்றும் சீன மொழிகளில் கிடைக்கிறது.',
      ja: 'すべてのトピックがマレー語、英語、中国語で利用可能。',
      th: 'ทุกหัวข้อมีให้บริการในภาษามลายู อังกฤษ และจีน',
    },
  },
  {
    date: '2026-08-16',
    icon: '📊',
    title: {
      ms: 'Analitik & Graf Pengetahuan',
      en: 'Analytics & Knowledge Graph',
      zh: '访客分析与知识图谱',
      ta: 'பகுப்பாய்வு & அறிவு வரைபடம்',
      ja: 'アナリティクスとナレッジグラフ',
      th: 'การวิเคราะห์และกราฟความรู้',
    },
    body: {
      ms: 'Analitik pelawat langsung dan graf pengetahuan interaktif menghubungkan setiap topik.',
      en: 'Live visitor analytics and an interactive graph that links every topic.',
      zh: '实时访客分析，以及连接每个主题的交互式知识图谱。',
      ta: 'நேரடி பார்வையாளர் பகுப்பாய்வு மற்றும் ஒவ்வொரு தலைப்பையும் இணைக்கும் ஊடாடும் வரைபடம்.',
      ja: 'リアルタイムの訪問者アナリティクスと、すべてのトピックをつなぐインタラクティブなグラフ。',
      th: 'การวิเคราะห์ผู้เข้าชมแบบเรียลไทม์และกราฟเชิงโต้ตอบที่เชื่อมโยงทุกหัวข้อ',
    },
  },
  {
    date: '2026-08-21',
    icon: '✍️',
    title: {
      ms: 'Kitaran hayat & sumbangan',
      en: 'Lifecycle & contribution system',
      zh: '生命周期与贡献系统',
      ta: 'வாழ்க்கைச் சுழற்சி & பங்களிப்பு அமைப்பு',
      ja: 'ライフサイクルと貢献システム',
      th: 'ระบบวงจรชีวิตและการมีส่วนร่วม',
    },
    body: {
      ms: 'Aliran kerja editorial penuh dan model sumbangan terbuka — paparan Pembaca/Penyumbang dengan log masuk GitHub.',
      en: 'A full editorial workflow and open contribution model — Reader/Contributor views with GitHub sign-in.',
      zh: '完整的编辑工作流与开放贡献模式——读者/贡献者双视图，支持 GitHub 登录。',
      ta: 'முழு தலையங்க பணிப்பாய்வு மற்றும் திறந்த பங்களிப்பு மாதிரி — GitHub உள்நுழைவுடன் வாசகர்/பங்களிப்பாளர் காட்சிகள்.',
      ja: '完全な編集ワークフローとオープンな貢献モデル——GitHub サインインによる読者/貢献者ビュー。',
      th: 'ขั้นตอนการทำงานด้านบรรณาธิการที่ครบถ้วนและแบบจำลองการมีส่วนร่วมแบบเปิด — มุมมองผู้อ่าน/ผู้มีส่วนร่วมพร้อมการเข้าสู่ระบบด้วย GitHub',
    },
  },
  {
    date: '2026-09-09',
    icon: '📣',
    title: {
      ms: 'Penyiaran automatik Facebook',
      en: 'Facebook auto-posting',
      zh: 'Facebook 自动发布',
      ta: 'Facebook தானியங்கி இடுகை',
      ja: 'Facebook 自動投稿',
      th: 'การโพสต์อัตโนมัติบน Facebook',
    },
    body: {
      ms: 'Setiap artikel baharu sampai kepada pembaca secara automatik, dalam setiap bahasa.',
      en: 'Every new article reaches readers automatically, in each language.',
      zh: '每篇新文章都会以各语言自动触达读者。',
      ta: 'ஒவ்வொரு புதிய கட்டுரையும் ஒவ்வொரு மொழியிலும் தானாகவே வாசகர்களை அடைகிறது.',
      ja: 'すべての新しい記事が、各言語で自動的に読者に届きます。',
      th: 'ทุกบทความใหม่เข้าถึงผู้อ่านโดยอัตโนมัติในแต่ละภาษา',
    },
  },
  {
    date: '2026-09-13',
    icon: '🌸',
    title: {
      ms: 'Tamil dilancarkan — bahasa ke-4',
      en: 'Tamil launched — the 4th language',
      zh: '泰米尔语上线——第四种语言',
      ta: 'தமிழ் தொடங்கப்பட்டது — 4வது மொழி',
      ja: 'タミル語を公開——4番目の言語',
      th: 'เปิดตัวภาษาทมิฬ — ภาษาที่ 4',
    },
    body: {
      ms: '1,073 artikel diterjemahkan ke bahasa Tamil; /ta menjadi bahasa penuh yang diindeks dan boleh ditemui.',
      en: '1,073 articles translated to Tamil; /ta becomes a full, indexed, discoverable language.',
      zh: '1,073 篇文章翻译为泰米尔语；/ta 成为完整、可被索引和检索的语言。',
      ta: '1,073 கட்டுரைகள் தமிழில் மொழிபெயர்க்கப்பட்டன; /ta ஒரு முழுமையான, குறியிடப்பட்ட, கண்டறியக்கூடிய மொழியாகிறது.',
      ja: '1,073 本の記事をタミル語に翻訳；/ta が完全でインデックス化され、発見可能な言語になりました。',
      th: 'แปลบทความ 1,073 บทความเป็นภาษาทมิฬ; /ta กลายเป็นภาษาที่สมบูรณ์ ถูกจัดทำดัชนี และค้นพบได้',
    },
  },
  {
    date: '2026-09-14',
    icon: '🎯',
    title: {
      ms: 'Enjin sosial pintar',
      en: 'Smart social engine',
      zh: '智能社交引擎',
      ta: 'திறன்மிகு சமூக இயந்திரம்',
      ja: 'スマートソーシャルエンジン',
      th: 'เอนจินโซเชียลอัจฉริยะ',
    },
    body: {
      ms: 'Penyiaran mengikut permintaan setiap bahasa, pada waktu puncak audiens, memanas mengikut usia Halaman.',
      en: 'Per-language, demand-ranked posting at each audience’s peak times, warming up with each Page’s age.',
      zh: '按各语言需求排序、在各受众高峰时段发布，并随每个主页的成长逐步升温。',
      ta: 'ஒவ்வொரு மொழியின் தேவை வரிசைப்படி, அந்தந்த பார்வையாளரின் உச்ச நேரங்களில் இடுகை; ஒவ்வொரு பக்கத்தின் வயதுக்கு ஏற்ப படிப்படியாக அதிகரிக்கிறது.',
      ja: '言語ごとに需要順で、それぞれの読者のピーク時間帯に投稿し、各ページの成長に応じて徐々に配信量を増やします。',
      th: 'การโพสต์ที่จัดอันดับตามความต้องการของแต่ละภาษา ในช่วงเวลาพีคของผู้ชมแต่ละกลุ่ม และค่อย ๆ เพิ่มปริมาณตามอายุของแต่ละเพจ',
    },
  },
  {
    date: '2026-09-20',
    icon: '🗾',
    title: {
      ms: 'Jepun dilancarkan — bahasa ke-5',
      en: 'Japanese launched — the 5th language',
      zh: '日语上线——第五种语言',
      ta: 'ஜப்பானியம் தொடங்கப்பட்டது — 5வது மொழி',
      ja: '日本語を公開——5番目の言語',
      ko: '일본어 출시 — 5번째 언어',
      th: 'เปิดตัวภาษาญี่ปุ่น — ภาษาที่ 5',
    },
    body: {
      ms: '1,073 artikel diterjemahkan ke bahasa Jepun; /ja menjadi bahasa penuh yang diindeks dan boleh ditemui.',
      en: '1,073 articles translated to Japanese; /ja becomes a full, indexed, discoverable language.',
      zh: '1,073 篇文章翻译为日语；/ja 成为完整、可被索引和检索的语言。',
      ta: '1,073 கட்டுரைகள் ஜப்பானியத்தில் மொழிபெயர்க்கப்பட்டன; /ja ஒரு முழுமையான, குறியிடப்பட்ட, கண்டறியக்கூடிய மொழியாகிறது.',
      ja: '1,073 本の記事を日本語に翻訳；/ja が完全でインデックス化され、発見可能な言語になりました。',
      ko: '1,073개 기사가 일본어로 번역되었습니다; /ja가 완전하고 색인화되어 검색 가능한 언어가 됩니다.',
      th: 'แปลบทความ 1,073 บทความเป็นภาษาญี่ปุ่น; /ja กลายเป็นภาษาที่สมบูรณ์ ถูกจัดทำดัชนี และค้นพบได้',
    },
  },
  {
    date: '2026-09-26',
    icon: '🇰🇷',
    title: {
      ms: 'Korea dilancarkan — bahasa ke-6',
      en: 'Korean launched — the 6th language',
      zh: '韩语上线——第六种语言',
      ta: 'கொரியன் தொடங்கப்பட்டது — 6வது மொழி',
      ja: '韓国語を公開——6番目の言語',
      ko: '한국어 출시 — 6번째 언어',
      th: 'เปิดตัวภาษาเกาหลี — ภาษาที่ 6',
    },
    body: {
      ms: '1,073 artikel diterjemahkan ke bahasa Korea; /ko menjadi bahasa penuh yang diindeks dan boleh ditemui.',
      en: '1,073 articles translated to Korean; /ko becomes a full, indexed, discoverable language.',
      zh: '1,073 篇文章翻译为韩语；/ko 成为完整、可被索引和检索的语言。',
      ta: '1,073 கட்டுரைகள் கொரியனில் மொழிபெயர்க்கப்பட்டன; /ko ஒரு முழுமையான, குறியிடப்பட்ட, கண்டறியக்கூடிய மொழியாகிறது.',
      ja: '1,073 本の記事を韓国語に翻訳；/ko が完全でインデックス化され、発見可能な言語になりました。',
      ko: '1,073개 기사가 한국어로 번역되었습니다; /ko가 완전하고 색인화되어 검색 가능한 언어가 됩니다.',
      th: 'แปลบทความ 1,073 บทความเป็นภาษาเกาหลี; /ko กลายเป็นภาษาที่สมบูรณ์ ถูกจัดทำดัชนี และค้นพบได้',
    },
  },
];
