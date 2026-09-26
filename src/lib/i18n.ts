import type { Locale } from './categories';

// The languages advertised in the UI (language switcher + hreflang alternates).
// A locale is added here only once its full corpus + chrome are launch-ready; before
// that it is soft-launched (routes/chrome built, but held OUT of this list so its /
// pages stay noindex and out of the sitemap, and the switcher never points at a page
// that isn't ready). Japanese (`ja`) open-launched 2026-09-20: full 1,094-article corpus
// translated + chrome localized.
export const LOCALES: Locale[] = ['ms', 'en', 'zh', 'ta', 'ja', 'ko'];
export const DEFAULT_LOCALE: Locale = 'ms';

export const LOCALE_NAMES: Record<Locale, string> = {
  ms: 'Bahasa Malaysia',
  en: 'English',
  zh: '中文',
  ta: 'தமிழ்',
  ja: '日本語',
  ko: '한국어',
  th: 'ไทย',
};

/** UI string table. Keep keys stable; fall back to `ms` if a value is missing. */
const STRINGS = {
  'site.title': {
    ms: 'NegaraKu.md',
    en: 'NegaraKu.md',
    zh: 'NegaraKu.md',
    ta: 'NegaraKu.md',
    ja: 'NegaraKu.md',
    ko: 'NegaraKu.md',
    th: 'NegaraKu.md',
  },
  'site.tagline': {
    ms: 'Pangkalan pengetahuan sumber terbuka tentang Malaysia',
    en: 'An open-source knowledge base about Malaysia',
    zh: '关于马来西亚的开源知识库',
    ta: 'மலேசியா பற்றிய ஒரு திறந்த மூல அறிவுத் தளம்',
    ja: 'マレーシアに関するオープンソースの知識ベース',
    ko: '말레이시아에 관한 오픈소스 지식 베이스',
    th: 'ฐานความรู้โอเพนซอร์สเกี่ยวกับมาเลเซีย',
  },
  // Homepage meta description — a full ~150-char sentence (the short tagline
  // above is too brief for search snippets; Bing flagged it). Not shown on-page.
  'site.homeDescription': {
    ms: 'Pangkalan pengetahuan sumber terbuka dan mesra-AI tentang Malaysia — kerajaan, undang-undang, perniagaan, cukai, budaya dan kehidupan harian, berpetikan sumber, dalam enam bahasa.',
    en: 'A free, open-source, AI-friendly knowledge base about Malaysia — its government, laws, business, tax, culture and daily life, cited and available in six languages.',
    zh: 'NegaraKu.md 是一个关于马来西亚的开源、对 AI 友好的知识库，涵盖政府、法律、商业、税务、文化与日常生活，内容附引用来源，并提供六种语言版本。',
    ta: 'மலேசியா பற்றிய இலவச, திறந்த மூல, AI-நட்பு அறிவுத் தளம் — அரசாங்கம், சட்டம், வணிகம், வரி, பண்பாடு மற்றும் அன்றாட வாழ்க்கை, மேற்கோள்களுடன், ஆறு மொழிகளில்.',
    ja: 'マレーシアに関する無料・オープンソース・AIフレンドリーな知識ベース。政府・法律・ビジネス・税務・文化・日常生活を、出典付きで、6言語で提供します。',
    ko: '말레이시아에 관한 무료 오픈소스 AI 친화적 지식 베이스 — 정부, 법률, 비즈니스, 세무, 문화, 일상생활을 출처와 함께 6개 언어로 제공합니다.',
    th: 'ฐานความรู้เกี่ยวกับมาเลเซียที่เปิดให้ใช้ฟรี เป็นโอเพนซอร์ส และเป็นมิตรกับ AI — ครอบคลุมรัฐบาล กฎหมาย ธุรกิจ ภาษี วัฒนธรรม และชีวิตประจำวัน พร้อมการอ้างอิงแหล่งที่มา และให้บริการใน 6 ภาษา',
  },
  // Short brand tagline shown under the wordmark in the header lockup — the "what".
  'brand.tagline': {
    ms: 'Malaysia mesra-AI',
    en: 'AI-friendly Malaysia',
    zh: 'AI 友好的马来西亚',
    ta: 'AI-நட்பு மலேசியா',
    ja: 'AIフレンドリーなマレーシア',
    ko: 'AI 친화적인 말레이시아',
    th: 'มาเลเซียที่เป็นมิตรกับ AI',
  },
  // Mission — the "why we exist". Distinct from brand.tagline (the "what"); a
  // rallying line, not a descriptor. Reused across About, hero, and metadata.
  'site.mission': {
    ms: 'Biar dunia mengenali Malaysia',
    en: 'Let the world know about Malaysia',
    zh: '让世界认识马来西亚',
    ta: 'மலேசியாவை உலகம் அறியட்டும்',
    ja: '世界にマレーシアを知ってもらおう',
    ko: '세계에 말레이시아를 알리자',
    th: 'ให้โลกได้รู้จักมาเลเซีย',
  },
  'nav.categories': { ms: 'Kategori', en: 'Categories', zh: '分类', ta: 'பிரிவுகள்', ja: 'カテゴリー', ko: '카테고리', th: 'หมวดหมู่' },
  'nav.search': { ms: 'Cari', en: 'Search', zh: '搜索', ta: 'தேடு', ja: '検索', ko: '검색', th: 'ค้นหา' },
  // One placeholder for every site-wide search box (home hero, Explore, /search).
  'search.placeholder': {
    ms: 'Cari Malaysia — orang, tempat, peristiwa…',
    en: 'Search Malaysia — people, places, events…',
    zh: '搜索马来西亚 — 人物、地点、事件…',
    ta: 'மலேசியாவைத் தேடுங்கள் — நபர்கள், இடங்கள், நிகழ்வுகள்…',
    ja: 'マレーシアを検索 — 人物、場所、出来事…',
    ko: '말레이시아 검색 — 인물, 장소, 사건…',
    th: 'ค้นหามาเลเซีย — บุคคล สถานที่ เหตุการณ์…',
  },
  'nav.about': { ms: 'Tentang', en: 'About', zh: '关于', ta: 'பற்றி', ja: '概要', ko: '소개', th: 'เกี่ยวกับ' },
  'nav.contribute': { ms: 'Sumbang', en: 'Contribute', zh: '贡献', ta: 'பங்களி', ja: '貢献', ko: '기여', th: 'มีส่วนร่วม' },
  'nav.explore': { ms: 'Terokai', en: 'Explore', zh: '探索', ta: 'ஆராய்க', ja: '探索', ko: '탐색', th: 'สำรวจ' },
  'nav.articles': { ms: 'Semua Artikel', en: 'All Articles', zh: '所有文章', ta: 'அனைத்து கட்டுரைகள்', ja: 'すべての記事', ko: '모든 기사', th: 'บทความทั้งหมด' },
  'nav.graph': { ms: 'Graf Pengetahuan', en: 'Knowledge Graph', zh: '知识图谱', ta: 'அறிவு வரைபடம்', ja: 'ナレッジグラフ', ko: '지식 그래프', th: 'กราฟความรู้' },
  'nav.understand': { ms: 'Kenali', en: 'Understand', zh: '认识', ta: 'புரிதல்', ja: '知る', ko: '알아보기', th: 'ทำความเข้าใจ' },
  'nav.visit': { ms: 'Lawati', en: 'Visit', zh: '游览', ta: 'பயணம்', ja: '訪れる', ko: '방문', th: 'เยือน' },
  'nav.living': { ms: 'Hidup', en: 'Living', zh: '生活', ta: 'வாழ்க்கை', ja: '暮らす', ko: '생활', th: 'ใช้ชีวิต' },
  'nav.business': { ms: 'Bisnes', en: 'Business', zh: '经商', ta: 'வணிகம்', ja: 'ビジネス', ko: '비즈니스', th: 'ธุรกิจ' },
  'nav.more': { ms: 'Lagi', en: 'More', zh: '更多', ta: 'மேலும்', ja: 'その他', ko: '더보기', th: 'เพิ่มเติม' },
  'nav.settings': { ms: 'Tetapan', en: 'Settings', zh: '设置', ta: 'அமைப்புகள்', ja: '設定', ko: '설정', th: 'การตั้งค่า' },
  'nav.data': { ms: 'Data', en: 'Data', zh: '数据', ta: 'தரவு', ja: 'データ', ko: '데이터', th: 'ข้อมูล' },
  'nav.dashboard': { ms: 'Papan Pemuka', en: 'Dashboard', zh: '仪表板', ta: 'டாஷ்போர்டு', ja: 'ダッシュボード', ko: '대시보드', th: 'แดชบอร์ด' },
  'nav.analytics': { ms: 'Analitik', en: 'Analytics', zh: '分析', ta: 'பகுப்பாய்வு', ja: 'アナリティクス', ko: '분석', th: 'การวิเคราะห์' },
  'nav.elections': { ms: 'Pilihan Raya', en: 'Elections', zh: '选举', ta: 'தேர்தல்கள்', ja: '選挙', ko: '선거', th: 'การเลือกตั้ง' },
  'nav.aboutPage': { ms: 'Tentang Kami', en: 'About Us', zh: '关于我们', ta: 'எங்களைப் பற்றி', ja: '私たちについて', ko: '우리에 대하여', th: 'เกี่ยวกับเรา' },
  'nav.changelog': { ms: 'Log Perubahan', en: 'Changelog', zh: '更新日志', ta: 'மாற்ற பதிவு', ja: '変更履歴', ko: '변경 기록', th: 'บันทึกการเปลี่ยนแปลง' },
  'nav.milestones': { ms: 'Pencapaian Penting', en: 'Milestones', zh: '里程碑', ta: 'மைல்கற்கள்', ja: 'マイルストーン', ko: '주요 이정표', th: 'หมุดหมายสำคัญ' },
  'nav.site': { ms: 'Laman', en: 'Site', zh: '网站', ta: 'தளம்', ja: 'サイト', ko: '사이트', th: 'เว็บไซต์' },
  'nav.exploreMalaysia': { ms: 'Terokai Malaysia', en: 'Explore Malaysia', zh: '探索马来西亚', ta: 'மலேசியாவை ஆராய்க', ja: 'マレーシアを探索', ko: '말레이시아 탐색', th: 'สำรวจมาเลเซีย' },
  'nav.latest': { ms: 'Terkini', en: 'Latest', zh: '最新', ta: 'சமீபத்தியவை', ja: '最新', ko: '최신', th: 'ล่าสุด' },
  'nav.timeline': { ms: 'Garis Masa', en: 'Timeline', zh: '时间线', ta: 'காலவரிசை', ja: 'タイムライン', ko: '타임라인', th: 'เส้นเวลา' },
  'nav.trending': { ms: 'Paling Banyak Dibaca', en: 'Most Read', zh: '最多阅读', ta: 'அதிகம் படித்தவை', ja: 'よく読まれている', ko: '많이 읽은 글', th: 'อ่านมากที่สุด' },
  'nav.understandMalaysia': { ms: 'Kenali Malaysia', en: 'Understand Malaysia', zh: '认识马来西亚', ta: 'மலேசியாவைப் புரிந்துகொள்க', ja: 'マレーシアを知る', ko: '말레이시아 알아보기', th: 'ทำความเข้าใจมาเลเซีย' },
  'nav.livingMalaysia': { ms: 'Hidup di Malaysia', en: 'Living in Malaysia', zh: '在马来西亚生活', ta: 'மலேசியாவில் வாழ்க்கை', ja: 'マレーシアで暮らす', ko: '말레이시아에서 살기', th: 'ใช้ชีวิตในมาเลเซีย' },
  'nav.businessMalaysia': { ms: 'Berniaga di Malaysia', en: 'Doing Business in Malaysia', zh: '在马来西亚经商', ta: 'மலேசியாவில் வணிகம்', ja: 'マレーシアでビジネス', ko: '말레이시아에서 사업하기', th: 'ทำธุรกิจในมาเลเซีย' },
  'nav.team': { ms: 'Pasukan Kami', en: 'Our Team', zh: '我们的团队', ta: 'எங்கள் குழு', ja: '私たちのチーム', ko: '우리 팀', th: 'ทีมของเรา' },
  'nav.faq': { ms: 'Soalan Lazim', en: 'FAQ', zh: '常见问题', ta: 'அடிக்கடி கேட்கப்படும் கேள்விகள்', ja: 'よくある質問', ko: '자주 묻는 질문', th: 'คำถามที่พบบ่อย' },
  'nav.submitArticle': { ms: 'Hantar Artikel', en: 'Submit Article', zh: '提交文章', ta: 'கட்டுரை சமர்ப்பி', ja: '記事を投稿', ko: '기사 제출', th: 'ส่งบทความ' },
  'nav.donate': { ms: 'Derma Token AI Anda', en: 'Donate Your AI Token', zh: '捐赠你的 AI Token', ta: 'உங்கள் AI டோக்கனை நன்கொடை அளியுங்கள்', ja: 'AIトークンを寄付', ko: 'AI 토큰 기부', th: 'บริจาคโทเคน AI ของคุณ' },
  'nav.support': { ms: 'Sokong NegaraKu.md', en: 'Support NegaraKu.md', zh: '支持 NegaraKu.md', ta: 'NegaraKu.md-ஐ ஆதரியுங்கள்', ja: 'NegaraKu.md を支援', ko: 'NegaraKu.md 후원', th: 'สนับสนุน NegaraKu.md' },
  'nav.whyContribute': { ms: 'Kenapa Menyumbang', en: 'Why Contribute', zh: '为何贡献', ta: 'ஏன் பங்களிக்க வேண்டும்', ja: '貢献する理由', ko: '기여하는 이유', th: 'เหตุใดจึงควรมีส่วนร่วม' },
  'nav.roles': { ms: 'Peranan & Cara Ia Berfungsi', en: 'Roles & How It Works', zh: '角色与运作方式', ta: 'பங்குகள் & இது எவ்வாறு செயல்படுகிறது', ja: '役割と仕組み', ko: '역할 및 작동 방식', th: 'บทบาทและวิธีการทำงาน' },
  'nav.contributors': { ms: 'Penyumbang', en: 'Contributors', zh: '贡献者', ta: 'பங்களிப்பாளர்கள்', ja: '貢献者', ko: '기여자', th: 'ผู้มีส่วนร่วม' },
  'nav.cli': { ms: 'Alat CLI', en: 'CLI Tool', zh: 'CLI 工具', ta: 'CLI கருவி', ja: 'CLI ツール', ko: 'CLI 도구', th: 'เครื่องมือ CLI' },
  'nav.github': { ms: 'GitHub', en: 'GitHub', zh: 'GitHub', ta: 'GitHub', ja: 'GitHub', ko: 'GitHub', th: 'GitHub' },
  'nav.reportIssue': { ms: 'Laporkan Isu', en: 'Report an Issue', zh: '报告问题', ta: 'சிக்கலைப் புகாரளி', ja: '問題を報告', ko: '문제 신고', th: 'รายงานปัญหา' },
  'nav.suggest': { ms: 'Cadangkan Penambahbaikan', en: 'Suggest an Improvement', zh: '建议改进', ta: 'மேம்பாட்டைப் பரிந்துரையுங்கள்', ja: '改善を提案', ko: '개선 제안', th: 'เสนอการปรับปรุง' },
  // Section headings inside the Explore dropdown (rendered uppercase via CSS).
  'nav.grpDiscover': { ms: 'Temui', en: 'Discover', zh: '发现', ta: 'கண்டறி', ja: '発見', ko: '발견', th: 'ค้นพบ' },
  'nav.grpSections': { ms: 'Tonggak', en: 'Pillars', zh: '支柱', ta: 'தூண்கள்', ja: '柱', ko: '핵심 축', th: 'เสาหลัก' },
  'nav.grpTools': { ms: 'Alat', en: 'Tools', zh: '工具', ta: 'கருவிகள்', ja: 'ツール', ko: '도구', th: 'เครื่องมือ' },
  // Section headings inside the Contribute dropdown.
  'nav.grpGetStarted': { ms: 'Bermula', en: 'Get started', zh: '开始', ta: 'தொடங்குங்கள்', ja: 'はじめる', ko: '시작하기', th: 'เริ่มต้น' },
  'nav.grpContent': { ms: 'Kandungan', en: 'Content', zh: '内容', ta: 'உள்ளடக்கம்', ja: 'コンテンツ', ko: '콘텐츠', th: 'เนื้อหา' },
  'nav.grpSupportUs': { ms: 'Sokong Kami', en: 'Support us', zh: '支持我们', ta: 'எங்களை ஆதரியுங்கள்', ja: '支援する', ko: '후원하기', th: 'สนับสนุนเรา' },
  'nav.grpDevelop': { ms: 'Bangunkan', en: 'Develop', zh: '开发', ta: 'உருவாக்கு', ja: '開発', ko: '개발', th: 'พัฒนา' },
  // New nav destinations.
  'nav.worklist': { ms: 'Senarai Kerja', en: 'Worklist', zh: '工作清单', ta: 'வேலைப் பட்டியல்', ja: '作業リスト', ko: '작업 목록', th: 'รายการงาน' },
  'nav.siteBug': { ms: 'Laporkan Pepijat Laman', en: 'Report a Site Bug', zh: '报告网站故障', ta: 'தள பிழையைப் புகாரளி', ja: 'サイトの不具合を報告', ko: '사이트 버그 신고', th: 'รายงานข้อบกพร่องของเว็บไซต์' },
  'nav.forAI': { ms: 'Untuk AI · llms.txt', en: 'For AI · llms.txt', zh: '面向 AI · llms.txt', ta: 'AI-க்கு · llms.txt', ja: 'AI向け · llms.txt', ko: 'AI용 · llms.txt', th: 'สำหรับ AI · llms.txt' },
  'nav.menu': { ms: 'Menu', en: 'Menu', zh: '菜单', ta: 'மெனு', ja: 'メニュー', ko: '메뉴', th: 'เมนู' },
  'nav.startHere': { ms: 'Mula di sini', en: 'Start here', zh: '从这里开始', ta: 'இங்கே தொடங்குங்கள்', ja: 'ここから始める', ko: '여기서 시작', th: 'เริ่มที่นี่' },
  'nav.grpAbout': { ms: 'Tentang NegaraKu.md', en: 'About NegaraKu.md', zh: '关于 NegaraKu.md', ta: 'NegaraKu.md பற்றி', ja: 'NegaraKu.md について', ko: 'NegaraKu.md 소개', th: 'เกี่ยวกับ NegaraKu.md' },
  'nav.grpThisSite': { ms: 'Laman ini', en: 'This site', zh: '本网站', ta: 'இந்த தளம்', ja: 'このサイト', ko: '이 사이트', th: 'เว็บไซต์นี้' },

  // Contributor View (launchpad) — lifecycle nav + the view-mode toggle.
  'cnav.lifecycle': { ms: 'Kitaran Hayat', en: 'Lifecycle', zh: '生命周期', ta: 'வாழ்க்கைச் சுழற்சி', ja: 'ライフサイクル', ko: '수명 주기', th: 'วงจรชีวิต' },
  'cnav.guide': { ms: 'Panduan penyumbang', en: 'Contributor guide', zh: '贡献者指南', ta: 'பங்களிப்பாளர் வழிகாட்டி', ja: '貢献者ガイド', ko: '기여자 가이드', th: 'คู่มือผู้มีส่วนร่วม' },
  'cnav.grpOnSite': { ms: 'Di laman ini', en: 'On this site', zh: '本站', ta: 'இந்த தளத்தில்', ja: 'このサイト内', ko: '이 사이트에서', th: 'บนเว็บไซต์นี้' },
  'cnav.grpOnGitHub': { ms: 'Di GitHub', en: 'On GitHub', zh: '在 GitHub', ta: 'GitHub-இல்', ja: 'GitHub 上', ko: 'GitHub에서', th: 'บน GitHub' },
  'cnav.grpBuild': { ms: 'Bina', en: 'Build', zh: '构建', ta: 'கட்டமை', ja: 'ビルド', ko: '빌드', th: 'สร้าง' },
  'cnav.reviewQueue': { ms: 'Barisan semakan (PR)', en: 'Review queue (PRs)', zh: '审核队列（PR）', ta: 'மதிப்பாய்வு வரிசை (PRs)', ja: 'レビュー待ち（PR）', ko: '검토 대기열 (PR)', th: 'คิวการตรวจทาน (PR)' },
  'cnav.drafts': { ms: 'Artikel draf', en: 'Draft articles', zh: '草稿文章', ta: 'வரைவு கட்டுரைகள்', ja: '下書き記事', ko: '초안 기사', th: 'บทความฉบับร่าง' },
  'cnav.articleIssues': { ms: 'Isu artikel', en: 'Article issues', zh: '文章问题', ta: 'கட்டுரை சிக்கல்கள்', ja: '記事の問題', ko: '기사 이슈', th: 'ปัญหาของบทความ' },
  'cnav.articleRequests': { ms: 'Permintaan artikel', en: 'Article requests', zh: '文章请求', ta: 'கட்டுரை கோரிக்கைகள்', ja: '記事のリクエスト', ko: '기사 요청', th: 'คำขอบทความ' },
  'cnav.translationIssues': { ms: 'Isu terjemahan', en: 'Translation issues', zh: '翻译问题', ta: 'மொழிபெயர்ப்பு சிக்கல்கள்', ja: '翻訳の問題', ko: '번역 이슈', th: 'ปัญหาการแปล' },
  'cnav.newArticle': { ms: 'Artikel baharu (templat)', en: 'New article (template)', zh: '新文章（模板）', ta: 'புதிய கட்டுரை (வார்ப்புரு)', ja: '新規記事（テンプレート）', ko: '새 기사 (템플릿)', th: 'บทความใหม่ (เทมเพลต)' },
  'cnav.actions': { ms: 'Tindakan / lakaran', en: 'Actions / deploys', zh: '操作 / 部署', ta: 'செயல்கள் / வெளியீடுகள்', ja: 'アクション / デプロイ', ko: '작업 / 배포', th: 'การดำเนินการ / การปรับใช้' },
  'cnav.deploy': { ms: 'Deploy + mod penyelenggaraan', en: 'Deploy + maintenance', zh: '部署 + 维护', ta: 'வெளியீடு + பராமரிப்பு', ja: 'デプロイ + メンテナンス', ko: '배포 + 유지보수', th: 'การปรับใช้ + การบำรุงรักษา' },
  'cnav.toContributor': { ms: 'Paparan Penyumbang', en: 'Contributor view', zh: '贡献者视图', ta: 'பங்களிப்பாளர் காட்சி', ja: '貢献者ビュー', ko: '기여자 보기', th: 'มุมมองผู้มีส่วนร่วม' },
  'cnav.toReader': { ms: 'Paparan Pembaca', en: 'Reader view', zh: '读者视图', ta: 'வாசகர் காட்சி', ja: '読者ビュー', ko: '독자 보기', th: 'มุมมองผู้อ่าน' },
  'cnav.signout': { ms: 'Log keluar', en: 'Sign out', zh: '退出登录', ta: 'வெளியேறு', ja: 'ログアウト', ko: '로그아웃', th: 'ออกจากระบบ' },
  'cnav.viewSwitch': { ms: 'Tukar paparan (Pembaca / Penyumbang)', en: 'Switch view (Reader / Contributor)', zh: '切换视图（读者 / 贡献者）', ta: 'காட்சியை மாற்று (வாசகர் / பங்களிப்பாளர்)', ja: 'ビューを切り替え（読者 / 貢献者）', ko: '보기 전환 (독자 / 기여자)', th: 'สลับมุมมอง (ผู้อ่าน / ผู้มีส่วนร่วม)' },
  'nav.signin': { ms: 'Log masuk penyumbang', en: 'Contributor sign-in', zh: '贡献者登录', ta: 'பங்களிப்பாளர் உள்நுழைவு', ja: '貢献者ログイン', ko: '기여자 로그인', th: 'เข้าสู่ระบบผู้มีส่วนร่วม' },
  'reader.title': { ms: 'Tetapan bacaan', en: 'Reading settings', zh: '阅读设置', ta: 'வாசிப்பு அமைப்புகள்', ja: '読書設定', ko: '읽기 설정', th: 'การตั้งค่าการอ่าน' },
  'reader.theme': { ms: 'Tema', en: 'Theme', zh: '主题', ta: 'தீம்', ja: 'テーマ', ko: '테마', th: 'ธีม' },
  'reader.dark': { ms: 'Gelap', en: 'Dark', zh: '深色', ta: 'இருள்', ja: 'ダーク', ko: '다크', th: 'มืด' },
  'reader.light': { ms: 'Cerah', en: 'Light', zh: '浅色', ta: 'ஒளி', ja: 'ライト', ko: '라이트', th: 'สว่าง' },
  'reader.themeGold': { ms: 'Emas', en: 'Gold', zh: '金色', ta: 'தங்கம்', ja: 'ゴールド', ko: '골드', th: 'ทอง' },
  'reader.themeRed': { ms: 'Merah', en: 'Red', zh: '红色', ta: 'சிவப்பு', ja: 'レッド', ko: '레드', th: 'แดง' },
  'reader.textSize': { ms: 'Saiz teks', en: 'Text size', zh: '字号', ta: 'எழுத்து அளவு', ja: '文字サイズ', ko: '글자 크기', th: 'ขนาดตัวอักษร' },
  'reader.sizeStandard': { ms: 'Biasa', en: 'Standard', zh: '标准', ta: 'இயல்பு', ja: '標準', ko: '표준', th: 'มาตรฐาน' },
  'reader.sizeLarge': { ms: 'Besar', en: 'Large', zh: '大', ta: 'பெரிது', ja: '大', ko: '크게', th: 'ใหญ่' },
  'reader.sizeXlarge': { ms: 'Ekstra', en: 'X-Large', zh: '特大', ta: 'மிகப் பெரிது', ja: '特大', ko: '아주 크게', th: 'ใหญ่พิเศษ' },
  'home.hero.title': {
    ms: 'Fahami Malaysia secara mendalam',
    en: 'Understand Malaysia, deeply',
    zh: '深入认识马来西亚',
    ta: 'மலேசியாவை ஆழமாகப் புரிந்துகொள்ளுங்கள்',
    ja: 'マレーシアを深く理解する',
    ko: '말레이시아를 깊이 이해하기',
    th: 'เข้าใจมาเลเซียอย่างลึกซึ้ง',
  },
  'home.hero.subtitle': {
    ms: 'Naratif yang dikurasi, boleh dibaca manusia dan AI — satu sumber kebenaran tentang negara kita.',
    en: 'Curated, human- and AI-readable narratives — a single source of truth about our nation.',
    zh: '经过策展、供人类与 AI 阅读的叙事——关于我们国家的单一事实来源。',
    ta: 'தொகுக்கப்பட்ட, மனிதர்களும் AI-யும் படிக்கக்கூடிய விவரிப்புகள் — நமது நாட்டைப் பற்றிய ஒரே உண்மை மூலம்.',
    ja: '厳選された、人間にもAIにも読める物語 — 私たちの国に関する唯一の信頼できる情報源。',
    ko: '엄선된, 사람과 AI 모두 읽을 수 있는 이야기 — 우리나라에 관한 유일한 신뢰할 수 있는 정보원.',
    th: 'เรื่องเล่าที่คัดสรรมาอย่างดี อ่านได้ทั้งมนุษย์และ AI — แหล่งข้อมูลอันเป็นหนึ่งเดียวที่เชื่อถือได้เกี่ยวกับประเทศของเรา',
  },
  'home.essentials': {
    ms: 'Lima bacaan penting',
    en: 'Five essential reads',
    zh: '五篇必读',
    ta: 'ஐந்து அத்தியாவசிய வாசிப்புகள்',
    ja: '必読の5記事',
    ko: '필독 기사 5선',
    th: 'ห้าบทความที่ต้องอ่าน',
  },
  'home.browse': { ms: 'Terokai mengikut kategori', en: 'Browse by category', zh: '按分类浏览', ta: 'பிரிவு வாரியாக உலாவுங்கள்', ja: 'カテゴリー別に見る', ko: '카테고리별 보기', th: 'เรียกดูตามหมวดหมู่' },
  'home.why.title': { ms: 'Mengapa negaraku.md?', en: 'Why negaraku.md?', zh: '为何选择 negaraku.md?', ta: 'ஏன் negaraku.md?', ja: 'なぜ negaraku.md なのか？', ko: '왜 negaraku.md인가?', th: 'ทำไมต้อง negaraku.md?' },
  'home.why.body': {
    ms: 'Bukan sekadar timbunan data — setiap artikel dikurasi, dipetik sumbernya, dan boleh disunting oleh komuniti melalui GitHub. Ditulis dalam Markdown supaya manusia dan model bahasa besar sama-sama boleh membacanya.',
    en: 'Not just a pile of data — every article is curated, cited, and community-editable via GitHub. Written in Markdown so both people and large language models can read it.',
    zh: '不仅是数据堆砌——每篇文章都经过策展、注明出处，并可通过 GitHub 由社区编辑。以 Markdown 撰写，方便人类与大型语言模型阅读。',
    ta: 'வெறும் தரவுக் குவியல் அல்ல — ஒவ்வொரு கட்டுரையும் தொகுக்கப்பட்டு, மேற்கோள் காட்டப்பட்டு, GitHub வழியாக சமூகத்தால் திருத்தக்கூடியது. மனிதர்களும் பெரிய மொழி மாதிரிகளும் படிக்கும் வகையில் Markdown-இல் எழுதப்பட்டுள்ளது.',
    ja: 'ただのデータの山ではありません — すべての記事は厳選され、出典が示され、GitHub を通じてコミュニティが編集できます。人間も大規模言語モデルも読めるように Markdown で書かれています。',
    ko: '단순한 데이터 더미가 아닙니다 — 모든 기사는 엄선되고, 출처가 명시되며, GitHub을 통해 커뮤니티가 편집할 수 있습니다. 사람과 대규모 언어 모델이 모두 읽을 수 있도록 Markdown으로 작성되었습니다.',
    th: 'ไม่ใช่เพียงกองข้อมูล — ทุกบทความได้รับการคัดสรร อ้างอิงแหล่งที่มา และชุมชนสามารถแก้ไขได้ผ่าน GitHub เขียนด้วย Markdown เพื่อให้ทั้งมนุษย์และโมเดลภาษาขนาดใหญ่สามารถอ่านได้',
  },
  'article.sources': { ms: 'Sumber', en: 'Sources', zh: '来源', ta: 'மூலங்கள்', ja: '出典', ko: '출처', th: 'แหล่งที่มา' },
  'article.related': { ms: 'Berkaitan', en: 'Related', zh: '相关', ta: 'தொடர்புடையவை', ja: '関連', ko: '관련', th: 'ที่เกี่ยวข้อง' },
  'article.updated': { ms: 'Dikemas kini', en: 'Updated', zh: '更新于', ta: 'புதுப்பிக்கப்பட்டது', ja: '更新', ko: '업데이트', th: 'อัปเดตเมื่อ' },
  'article.published': { ms: 'Diterbitkan', en: 'Published', zh: '发布于', ta: 'வெளியிடப்பட்டது', ja: '公開', ko: '게시', th: 'เผยแพร่เมื่อ' },
  'article.reviewedOn': { ms: 'Disemak pada', en: 'Reviewed on', zh: '审阅于', ta: 'மதிப்பாய்வு செய்யப்பட்டது', ja: 'レビュー日', ko: '검토일', th: 'ตรวจทานเมื่อ' },
  'article.verifiedOn': { ms: 'Disahkan pada', en: 'Verified on', zh: '核实于', ta: 'சரிபார்க்கப்பட்டது', ja: '検証日', ko: '검증일', th: 'ตรวจสอบเมื่อ' },
  'article.by': { ms: 'oleh', en: 'by', zh: '·', ta: 'மூலம்', ja: '著者', ko: '작성자', th: 'โดย' },
  'article.edit': { ms: 'Sunting di GitHub', en: 'Edit on GitHub', zh: '在 GitHub 上编辑', ta: 'GitHub-இல் திருத்து', ja: 'GitHub で編集', ko: 'GitHub에서 편집', th: 'แก้ไขบน GitHub' },
  'article.raw': { ms: 'Lihat Markdown mentah', en: 'View raw Markdown', zh: '查看原始 Markdown', ta: 'மூல Markdown-ஐக் காண்க', ja: '生の Markdown を表示', ko: '원본 Markdown 보기', th: 'ดู Markdown ต้นฉบับ' },
  'status.draft': { ms: 'Draf', en: 'Draft', zh: '草稿', ta: 'வரைவு', ja: '下書き', ko: '초안', th: 'ฉบับร่าง' },
  'status.in-review': { ms: 'Dalam Semakan', en: 'In review', zh: '审阅中', ta: 'மதிப்பாய்வில்', ja: 'レビュー中', ko: '검토 중', th: 'อยู่ระหว่างการตรวจทาน' },
  'status.reviewed': { ms: 'Disemak', en: 'Reviewed', zh: '已审阅', ta: 'மதிப்பாய்வு செய்யப்பட்டது', ja: 'レビュー済み', ko: '검토됨', th: 'ตรวจทานแล้ว' },
  'status.published': { ms: 'Diterbitkan', en: 'Published', zh: '已发布', ta: 'வெளியிடப்பட்டது', ja: '公開済み', ko: '게시됨', th: 'เผยแพร่แล้ว' },
  'status.verified': { ms: 'Disahkan', en: 'Verified', zh: '已核实', ta: 'சரிபார்க்கப்பட்டது', ja: '検証済み', ko: '검증됨', th: 'ตรวจสอบแล้ว' },
  'status.needs-update': { ms: 'Perlu Kemas Kini', en: 'Needs update', zh: '需更新', ta: 'புதுப்பிப்பு தேவை', ja: '要更新', ko: '업데이트 필요', th: 'ต้องอัปเดต' },
  'status.in-update': { ms: 'Sedang Dikemas Kini', en: 'Being updated', zh: '更新中', ta: 'புதுப்பிக்கப்படுகிறது', ja: '更新中', ko: '업데이트 중', th: 'กำลังอัปเดต' },
  'status.archived': { ms: 'Diarkibkan', en: 'Archived', zh: '已归档', ta: 'காப்பகப்படுத்தப்பட்டது', ja: 'アーカイブ済み', ko: '보관됨', th: 'เก็บถาวรแล้ว' },
  'footer.license': {
    ms: 'Kandungan di bawah CC BY-SA 4.0. Kod di bawah lesen MIT.',
    en: 'Content under CC BY-SA 4.0. Code under the MIT license.',
    zh: '内容采用 CC BY-SA 4.0，代码采用 MIT 许可证。',
    ta: 'உள்ளடக்கம் CC BY-SA 4.0 உரிமத்தின் கீழ். குறியீடு MIT உரிமத்தின் கீழ்.',
    ja: 'コンテンツは CC BY-SA 4.0 の下で提供。コードは MIT ライセンスの下で提供。',
    ko: '콘텐츠는 CC BY-SA 4.0 라이선스로 제공됩니다. 코드는 MIT 라이선스로 제공됩니다.',
    th: 'เนื้อหาอยู่ภายใต้ CC BY-SA 4.0 โค้ดอยู่ภายใต้สัญญาอนุญาต MIT',
  },
  'footer.sponsoredBy': {
    ms: 'Ditaja oleh',
    en: 'Sponsored by',
    zh: '赞助单位',
    ta: 'அனுசரணை வழங்குநர்',
    ja: 'スポンサー',
    ko: '후원',
    th: 'สนับสนุนโดย',
  },
  'a11y.skip': { ms: 'Langkau ke kandungan', en: 'Skip to content', zh: '跳到内容', ta: 'உள்ளடக்கத்திற்குச் செல்க', ja: 'コンテンツへスキップ', ko: '콘텐츠로 건너뛰기', th: 'ข้ามไปยังเนื้อหา' },
  'a11y.top': { ms: 'Kembali ke atas', en: 'Back to top', zh: '返回顶部', ta: 'மேலே செல்க', ja: 'トップへ戻る', ko: '맨 위로', th: 'กลับไปด้านบน' },
} as const;

export type StringKey = keyof typeof STRINGS;

export function t(key: StringKey, locale: Locale): string {
  const entry = STRINGS[key];
  // A UI locale with no authored string (e.g. `ta` before translation) falls
  // back to Malay — the cast lets us index with a Locale the table may not carry.
  return (entry as Record<string, string>)[locale] ?? entry[DEFAULT_LOCALE];
}

/** Build a locale-aware href. ms → "/path", en → "/en/path", zh → "/zh/path". */
export function localePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return clean === '/' ? '/' : clean;
  return clean === '/' ? `/${locale}` : `/${locale}${clean}`;
}

/**
 * Normalize a page pathname to the trailing-slash form GitHub Pages actually
 * serves (`/x` 301-redirects to `/x/`). Used for canonical, og:url, hreflang and
 * JSON-LD URLs so every emitted URL matches the resolved one — and the sitemap,
 * which already emits trailing slashes. File routes (a dot in the last segment,
 * e.g. `/llms.txt`, `/x.md`) are left untouched — only directory pages get a slash.
 */
export function withTrailingSlash(pathname: string): string {
  if (!pathname) return '/';
  if (pathname.endsWith('/')) return pathname;
  const last = pathname.split('/').pop() ?? '';
  if (last.includes('.')) return pathname; // file route — no slash
  return `${pathname}/`;
}

/** Extract the active locale from an Astro URL pathname. */
export function localeFromPath(pathname: string): Locale {
  const seg = pathname.split('/').filter(Boolean)[0];
  if (seg === 'en' || seg === 'zh' || seg === 'ta' || seg === 'ja' || seg === 'ko' || seg === 'th') return seg;
  return DEFAULT_LOCALE;
}
