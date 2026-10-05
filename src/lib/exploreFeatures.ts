import type { Locale } from './categories';
import type { StringKey } from './i18n';

/**
 * The full set of discovery surfaces on NegaraKu.md — the "More ways to explore"
 * grid. Shared between the Start launchpad (/start) and the Explore hub (/explore)
 * so the two never drift. Titles reuse the already-localized `nav.*` strings
 * (render with `t(key, locale)`); only the one-line blurb lives here.
 *
 * `/explore` renders this list filtered to drop its own self-link (the hub card).
 */
export interface ExploreFeature {
  key: StringKey;
  href: string;
  icon: string;
  color: string;
  blurb: string;
}

const pick = (
  locale: Locale,
  ms: string, en: string, zh: string,
  ta?: string, ja?: string, ko?: string, th?: string, vi?: string, id?: string,
): string =>
  locale === 'id' ? (id ?? ms)
  : locale === 'vi' ? (vi ?? ms)
  : locale === 'th' ? (th ?? ms)
  : locale === 'ko' ? (ko ?? ms)
  : locale === 'ja' ? (ja ?? ms)
  : locale === 'ta' ? (ta ?? ms)
  : locale === 'zh' ? zh
  : locale === 'en' ? en
  : ms;

export function exploreFeatures(locale: Locale): ExploreFeature[] {
  const L = (ms: string, en: string, zh: string, ta?: string, ja?: string, ko?: string, th?: string, vi?: string, id?: string) =>
    pick(locale, ms, en, zh, ta, ja, ko, th, vi, id);
  return [
    { key: 'nav.exploreMalaysia', href: '/explore', icon: '🧭', color: '#FFC000', blurb: L('Terbaharu, popular, dan setiap tonggak di satu tempat.', 'Latest, popular, and every pillar in one place.', '最新、热门与各支柱，尽在一处。', 'சமீபத்தியவை, பிரபலமானவை, ஒவ்வொரு தூணும் ஒரே இடத்தில்.', '最新・人気・すべての柱を一か所に。', '최신, 인기, 모든 기둥을 한곳에.', 'ล่าสุด ยอดนิยม และทุกเสาหลักในที่เดียว', 'Mới nhất, phổ biến, và mọi trụ cột ở một nơi.', 'Terbaru, populer, dan setiap pilar di satu tempat.') },
    { key: 'nav.categories', href: '/categories', icon: '🗂️', color: '#38BDF8', blurb: L('Indeks kategori penuh, A hingga Z.', 'The full category index, A to Z.', '完整分类索引，A 到 Z。', 'முழு வகை அட்டவணை, A முதல் Z வரை.', 'カテゴリー一覧を A〜Z で。', '전체 카테고리 색인, A부터 Z까지.', 'ดัชนีหมวดหมู่ทั้งหมด A ถึง Z', 'Toàn bộ mục lục danh mục, A đến Z.', 'Indeks kategori lengkap, A sampai Z.') },
    { key: 'nav.latest', href: '/latest', icon: '🆕', color: '#4ADE80', blurb: L('Artikel yang baharu ditambah dan dikemas kini.', 'Recently added and updated articles.', '最近新增与更新的文章。', 'சமீபத்தில் சேர்க்கப்பட்டு புதுப்பிக்கப்பட்ட கட்டுரைகள்.', '最近追加・更新された記事。', '최근 추가·업데이트된 기사.', 'บทความที่เพิ่มและอัปเดตล่าสุด', 'Các bài viết mới thêm và cập nhật.', 'Artikel yang baru ditambah dan diperbarui.') },
    { key: 'nav.trending', href: '/most-read', icon: '🔥', color: '#F97316', blurb: L('Apa yang paling kerap dibaca.', 'What readers open most.', '读者最常打开的内容。', 'வாசகர்கள் அதிகம் திறப்பவை.', '読者が最もよく開く記事。', '독자가 가장 많이 여는 글.', 'สิ่งที่ผู้อ่านเปิดมากที่สุด', 'Nội dung được đọc nhiều nhất.', 'Yang paling sering dibaca.') },
    { key: 'nav.timeline', href: '/malaysia/timeline-of-malaysia', icon: '📜', color: '#FBBF24', blurb: L('Sejarah Malaysia dalam satu garis masa.', "Malaysia's history on one timeline.", '一条时间线看马来西亚历史。', 'மலேசியாவின் வரலாறு ஒரே காலவரிசையில்.', 'マレーシアの歴史を一つの年表で。', '하나의 연표로 보는 말레이시아 역사.', 'ประวัติศาสตร์มาเลเซียบนเส้นเวลาเดียว', 'Lịch sử Malaysia trên một dòng thời gian.', 'Sejarah Malaysia dalam satu garis waktu.') },
    { key: 'nav.graph', href: '/graph', icon: '🕸️', color: '#A78BFA', blurb: L('Setiap topik dan cara ia berhubung.', 'Every topic and how it connects.', '每个主题及其关联。', 'ஒவ்வொரு தலைப்பும் அது எவ்வாறு தொடர்பு கொள்கிறது என்பதும்.', 'すべてのトピックとそのつながり。', '모든 주제와 그 연결 관계.', 'ทุกหัวข้อและวิธีที่เชื่อมโยงกัน', 'Mọi chủ đề và cách chúng kết nối.', 'Setiap topik dan bagaimana kaitannya.') },
    { key: 'nav.dashboard', href: '/dashboard', icon: '📊', color: '#22D3EE', blurb: L('Pangkalan pengetahuan dalam angka.', 'The knowledge base by the numbers.', '用数据看这个知识库。', 'அறிவுத் தளம் எண்களில்.', '数字で見る知識ベース。', '숫자로 보는 지식 베이스.', 'ฐานความรู้ในรูปตัวเลข', 'Cơ sở tri thức qua các con số.', 'Basis pengetahuan dalam angka.') },
    { key: 'nav.analytics', href: '/analytics', icon: '📈', color: '#34D399', blurb: L('Trafik dan bacaan secara langsung.', 'Live traffic and readership.', '实时流量与阅读量。', 'நேரடி போக்குவரத்து மற்றும் வாசிப்பு.', 'リアルタイムのトラフィックと読者数。', '실시간 트래픽과 독자 수.', 'ปริมาณการเข้าชมและผู้อ่านแบบสด', 'Lưu lượng và lượng đọc trực tiếp.', 'Lalu lintas dan pembaca secara langsung.') },
    { key: 'nav.forAI', href: '/llms', icon: '🤖', color: '#E879F9', blurb: L('Guna seluruh laman dengan AI anda.', 'Use the whole site with your AI.', '用你的 AI 使用整个网站。', 'முழு தளத்தையும் உங்கள் AI உடன் பயன்படுத்துங்கள்.', 'サイト全体を AI で使う。', '전체 사이트를 당신의 AI와 함께.', 'ใช้ทั้งเว็บไซต์กับ AI ของคุณ', 'Dùng toàn bộ trang với AI của bạn.', 'Gunakan seluruh situs dengan AI Anda.') },
  ];
}
