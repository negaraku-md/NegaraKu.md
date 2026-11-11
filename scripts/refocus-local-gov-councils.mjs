// One-off: refocus knowledge/government/local-government-councils (+12 langs)
// from a generic PBT overview onto its real differentiator — the local-government
// ELECTIONS history / "third vote" story — so it stops competing with
// government/local-government-in-malaysia (the civic "what your council does"
// explainer). Body is UNCHANGED (it already carries this history); only
// title + summary (hashed → re-translated here, so translations stay in-sync)
// and seoTitle + socialTitle (freshness-neutral) move. Facts/proper nouns/years
// are identical across languages. Dry-run unless --apply.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const APPLY = process.argv.includes('--apply');
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const FILE = (lang) => join(ROOT, 'knowledge/government', lang === 'ms' ? 'local-government-councils.md' : `local-government-councils.${lang}.md`);

const DATA = {
  ms: {
    title: "Kerajaan Tempatan: Kisah 'Undi Ketiga' dan Mengapa Ahli Majlis PBT Dilantik",
    seoTitle: "Pilihan Raya Kerajaan Tempatan Malaysia & 'Undi Ketiga'",
    socialTitle: "Malaysia pernah mengundi ahli majlis tempatan — sehingga 1965. Inilah sebab ia terhenti.",
    summary: "Mengapa ahli majlis PBT di Malaysia dilantik, bukan dipilih? Artikel ini menjejaki pilihan raya kerajaan tempatan — daripada pilihan raya perbandaran pertama 1952 dan penggantungannya pada 1965, Suruhanjaya Diraja Athi Nahappan, hingga percubaan memulihkan 'undi ketiga' antara 2008 dan 2024 — di samping struktur, kategori dan keanggotaan PBT di bawah Seksyen 10 Akta 171.",
  },
  en: {
    title: "Local Government Elections in Malaysia: The 'Third Vote' and Why PBT Councillors Are Appointed",
    seoTitle: "Local Government Elections Malaysia & the 'Third Vote'",
    socialTitle: "Malaysia once voted for its local councillors — until 1965. Here's why it stopped.",
    summary: "Why are PBT councillors in Malaysia appointed rather than elected? This article traces local government elections — from the first municipal election in 1952 and their suspension in 1965, through the Athi Nahappan Royal Commission, to attempts to restore the 'third vote' between 2008 and 2024 — alongside the structure, categories and membership of local authorities under Section 10 of Act 171.",
  },
  zh: {
    title: "马来西亚地方政府选举：'第三票'与为何PBT议员由委任而非选举产生",
    seoTitle: "马来西亚地方政府选举与'第三票'",
    socialTitle: "马来西亚曾经民选地方议员——直到1965年。这是它中止的原因。",
    summary: "为何马来西亚的地方政府（PBT）议员由委任而非选举产生？本文梳理地方政府选举的历程——从1952年首次市政选举、1965年的中止，到阿迪·纳哈潘皇家调查委员会，再到2008至2024年间恢复'第三票'的尝试——同时说明171号法令第10条下地方政府的结构、类别与成员组成。",
  },
  ta: {
    title: "மலேசியாவில் உள்ளூராட்சித் தேர்தல்கள்: 'மூன்றாவது வாக்கு' மற்றும் PBT மன்ற உறுப்பினர்கள் ஏன் நியமிக்கப்படுகிறார்கள்",
    seoTitle: "மலேசிய உள்ளூராட்சித் தேர்தல்களும் 'மூன்றாவது வாக்கும்'",
    socialTitle: "மலேசியா ஒரு காலத்தில் தன் உள்ளூர் மன்ற உறுப்பினர்களைத் தேர்ந்தெடுத்தது — 1965 வரை. அது நின்றது ஏன்.",
    summary: "மலேசியாவில் உள்ளூர் அதிகார சபை (PBT) மன்ற உறுப்பினர்கள் ஏன் தேர்ந்தெடுக்கப்படாமல் நியமிக்கப்படுகிறார்கள்? இந்தக் கட்டுரை உள்ளூராட்சித் தேர்தல்களின் வரலாற்றைப் பின்தொடர்கிறது — 1952-இன் முதல் நகராட்சித் தேர்தல், 1965-இல் அவை நிறுத்தப்பட்டமை, Athi Nahappan அரச ஆணையம், மேலும் 2008 முதல் 2024 வரை 'மூன்றாவது வாக்கை' மீட்டெடுக்கும் முயற்சிகள் வரை — அத்துடன் Akta 171 Seksyen 10-இன் கீழ் PBT-இன் அமைப்பு, வகைகள் மற்றும் உறுப்பினர் அமைப்பு பற்றியும் விவரிக்கிறது.",
  },
  ja: {
    title: "マレーシアの地方議会選挙:「第三の票」とPBT議員が任命制である理由",
    seoTitle: "マレーシアの地方議会選挙と「第三の票」",
    socialTitle: "マレーシアはかつて地方議員を選挙で選んでいた——1965年まで。その停止の理由とは。",
    summary: "なぜマレーシアの地方自治体（PBT）議員は選挙ではなく任命で選ばれるのか。本稿は地方議会選挙の歩みをたどる——1952年の最初の自治体選挙と1965年の停止、アティ・ナハッパン王立委員会、そして2008年から2024年にかけての「第三の票」復活の試みまで——あわせて171号法令第10条に基づくPBTの構造・区分・構成を解説する。",
  },
  ko: {
    title: "말레이시아 지방의회 선거: '제3의 투표'와 PBT 의원이 임명되는 이유",
    seoTitle: "말레이시아 지방의회 선거와 '제3의 투표'",
    socialTitle: "말레이시아는 한때 지방의원을 선거로 뽑았다 — 1965년까지. 그것이 중단된 이유.",
    summary: "말레이시아의 지방자치단체(PBT) 의원은 왜 선거가 아니라 임명으로 선출될까? 이 글은 지방의회 선거의 역사를 따라간다 — 1952년 첫 지방선거와 1965년의 중단, 아티 나하판 왕립위원회, 그리고 2008년부터 2024년까지 '제3의 투표'를 되살리려는 시도까지 — 아울러 171호 법령 제10조에 따른 PBT의 구조·분류·구성을 설명한다.",
  },
  th: {
    title: "การเลือกตั้งองค์กรปกครองส่วนท้องถิ่นในมาเลเซีย: 'เสียงที่สาม' และเหตุใดสมาชิกสภา PBT จึงมาจากการแต่งตั้ง",
    seoTitle: "การเลือกตั้งท้องถิ่นมาเลเซียกับ 'เสียงที่สาม'",
    socialTitle: "มาเลเซียเคยเลือกตั้งสมาชิกสภาท้องถิ่น — จนถึงปี 1965 นี่คือเหตุผลที่มันยุติลง",
    summary: "เหตุใดสมาชิกสภาองค์กรปกครองส่วนท้องถิ่น (PBT) ในมาเลเซียจึงมาจากการแต่งตั้งแทนการเลือกตั้ง? บทความนี้ติดตามการเลือกตั้งท้องถิ่น — ตั้งแต่การเลือกตั้งเทศบาลครั้งแรกปี 1952 และการระงับในปี 1965 ผ่านคณะกรรมาธิการหลวงอาทินาฮัปปัน จนถึงความพยายามฟื้นฟู 'เสียงที่สาม' ระหว่างปี 2008 ถึง 2024 — ควบคู่กับโครงสร้าง ประเภท และองค์ประกอบของ PBT ภายใต้มาตรา 10 แห่งพระราชบัญญัติ 171",
  },
  vi: {
    title: "Bầu cử chính quyền địa phương ở Malaysia: 'lá phiếu thứ ba' và vì sao ủy viên hội đồng PBT được bổ nhiệm",
    seoTitle: "Bầu cử chính quyền địa phương Malaysia & 'lá phiếu thứ ba'",
    socialTitle: "Malaysia từng bầu ủy viên hội đồng địa phương — cho đến năm 1965. Đây là lý do nó dừng lại.",
    summary: "Vì sao ủy viên hội đồng chính quyền địa phương (PBT) ở Malaysia được bổ nhiệm thay vì bầu? Bài viết lần theo lịch sử bầu cử chính quyền địa phương — từ cuộc bầu cử đô thị đầu tiên năm 1952 và việc đình chỉ năm 1965, qua Ủy ban Hoàng gia Athi Nahappan, đến những nỗ lực khôi phục 'lá phiếu thứ ba' giai đoạn 2008–2024 — cùng cơ cấu, phân loại và thành phần của PBT theo Mục 10 Đạo luật 171.",
  },
  id: {
    title: "Pemilihan Pemerintahan Daerah di Malaysia: 'Suara Ketiga' dan Mengapa Anggota Majlis PBT Ditunjuk",
    seoTitle: "Pemilihan Pemerintahan Daerah Malaysia & 'Suara Ketiga'",
    socialTitle: "Malaysia pernah memilih anggota dewan lokalnya — hingga 1965. Inilah alasannya berhenti.",
    summary: "Mengapa anggota majlis PBT di Malaysia ditunjuk, bukan dipilih? Artikel ini menelusuri pemilihan pemerintahan daerah — dari pemilihan munisipal pertama 1952 dan penangguhannya pada 1965, Komisi Kerajaan Athi Nahappan, hingga upaya memulihkan 'suara ketiga' antara 2008 dan 2024 — selain struktur, kategori, dan keanggotaan PBT di bawah Seksyen 10 Akta 171.",
  },
  ar: {
    title: "انتخابات الحكومة المحلية في ماليزيا: 'الصوت الثالث' ولماذا يُعيَّن أعضاء مجالس PBT",
    seoTitle: "انتخابات الحكومة المحلية في ماليزيا و'الصوت الثالث'",
    socialTitle: "كانت ماليزيا تنتخب أعضاء مجالسها المحلية — حتى عام 1965. وهذا سبب توقفها.",
    summary: "لماذا يُعيَّن أعضاء مجالس الهيئات المحلية (PBT) في ماليزيا بدلاً من انتخابهم؟ يتتبع هذا المقال انتخابات الحكومة المحلية — من أول انتخابات بلدية عام 1952 وتعليقها عام 1965، مروراً باللجنة الملكية برئاسة آتي ناهابان، وصولاً إلى محاولات استعادة 'الصوت الثالث' بين عامي 2008 و2024 — إلى جانب بنية الهيئات المحلية وفئاتها وعضويتها بموجب المادة 10 من القانون 171.",
  },
  hi: {
    title: "मलेशिया में स्थानीय सरकार चुनाव: 'तीसरा वोट' और PBT पार्षद क्यों नियुक्त होते हैं",
    seoTitle: "मलेशिया में स्थानीय सरकार चुनाव और 'तीसरा वोट'",
    socialTitle: "मलेशिया कभी अपने स्थानीय पार्षद चुनता था — 1965 तक। जानिए यह क्यों रुका।",
    summary: "मलेशिया में स्थानीय प्राधिकरण (PBT) के पार्षद चुने जाने के बजाय नियुक्त क्यों किए जाते हैं? यह लेख स्थानीय सरकार चुनावों का इतिहास बताता है — 1952 के पहले नगरपालिका चुनाव और 1965 में इनके निलंबन से लेकर आठी नाहप्पन राजकीय आयोग, और 2008 से 2024 के बीच 'तीसरा वोट' बहाल करने के प्रयासों तक — साथ ही अधिनियम 171 की धारा 10 के तहत PBT की संरचना, श्रेणियाँ और सदस्यता।",
  },
  es: {
    title: "Elecciones de gobierno local en Malasia: el 'tercer voto' y por qué los concejales de las PBT son designados",
    seoTitle: "Elecciones de gobierno local en Malasia y el 'tercer voto'",
    socialTitle: "Malasia eligió a sus concejales locales — hasta 1965. Esta es la razón por la que se detuvo.",
    summary: "¿Por qué los concejales de las autoridades locales (PBT) de Malasia son designados en lugar de elegidos? Este artículo recorre las elecciones de gobierno local — desde la primera elección municipal de 1952 y su suspensión en 1965, pasando por la Comisión Real Athi Nahappan, hasta los intentos de restaurar el 'tercer voto' entre 2008 y 2024 — además de la estructura, las categorías y la composición de las PBT según la Sección 10 de la Ley 171.",
  },
  fr: {
    title: "Élections locales en Malaisie : le « troisième vote » et pourquoi les conseillers des PBT sont nommés",
    seoTitle: "Élections locales en Malaisie et le « troisième vote »",
    socialTitle: "La Malaisie élisait ses conseillers locaux — jusqu'en 1965. Voici pourquoi cela a cessé.",
    summary: "Pourquoi les conseillers des autorités locales (PBT) de Malaisie sont-ils nommés plutôt qu'élus ? Cet article retrace les élections locales — de la première élection municipale de 1952 et leur suspension en 1965, en passant par la Commission royale Athi Nahappan, jusqu'aux tentatives de rétablir le « troisième vote » entre 2008 et 2024 — ainsi que la structure, les catégories et la composition des PBT en vertu de l'article 10 de la loi 171.",
  },
};

const LANGS = Object.keys(DATA);
let changed = 0, skipped = 0;

function setField(block, name, value) {
  const line = `${name}: ${JSON.stringify(value)}`;
  const re = new RegExp(`^${name}:\\s*.*$`, 'm');
  if (re.test(block)) return block.replace(re, line);
  // insert: prefer after seoTitle, else after title
  const anchor = block.match(/^seoTitle:.*$/m) || block.match(/^title:.*$/m);
  return block.replace(anchor[0], `${anchor[0]}\n${line}`);
}

for (const lang of LANGS) {
  const f = FILE(lang);
  if (!existsSync(f)) { console.error(`  ✗ missing: ${f}`); skipped++; continue; }
  const raw = readFileSync(f, 'utf8');
  const fm = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) { console.error(`  ✗ no frontmatter: ${f}`); skipped++; continue; }
  let block = fm[1];
  const d = DATA[lang];
  // order: title, seoTitle, socialTitle, summary (seoTitle/socialTitle inserted after title if absent)
  block = setField(block, 'title', d.title);
  block = setField(block, 'seoTitle', d.seoTitle);
  block = setField(block, 'socialTitle', d.socialTitle);
  block = setField(block, 'summary', d.summary);
  if (block === fm[1]) { console.log(`  = ${lang}: no change`); continue; }
  if (APPLY) writeFileSync(f, raw.replace(fm[1], block), 'utf8');
  console.log(`  ✓ ${lang}: title/seoTitle/socialTitle/summary set`);
  changed++;
}
console.log(`\n[refocus] ${APPLY ? 'APPLIED' : 'DRY-RUN'} — changed:${changed} skipped:${skipped}`);
if (!APPLY) console.log('Re-run with --apply to write.');
