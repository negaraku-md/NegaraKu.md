// translate.mjs — draft a missing translation with the contributor's OWN Claude
// key ("Donate your AI Token", spec §14). The project spends no API budget; the
// contributor spends theirs, reviews the machine draft, and opens a PR. Nothing
// here ever publishes — every draft lands as status:draft / translationStatus:
// pending / reviewer:null for a human to check against docs/TRANSLATION-SPEC.md.
//
// Direction is per-article: it translates FROM each topic's declared master
// (the bare `<slug>.md`, whose `lang` frontmatter is authoritative) INTO the two
// other locales. Governance + identity frontmatter (slug, topicId, category,
// sources, revisions, lang, masterLanguage, status, reviewer, translationStatus)
// is set in CODE from the master, never trusted from the model — so a translation
// can drift in prose but never in its citations or its place in the corpus.
//
// Provider: Anthropic Messages API via the contributor's ANTHROPIC_API_KEY.
// Without a key it falls back to a verbatim scaffold (copies the source) so the
// site still renders and the human has a file to translate by hand.
//
// Usage:
//   node scripts/translate.mjs                         # every missing translation
//   node scripts/translate.mjs --lang zh               # only Chinese
//   node scripts/translate.mjs --file knowledge/x/y.md # one master, both targets
//   node scripts/translate.mjs --force                 # overwrite existing targets
//   ANTHROPIC_MODEL=claude-opus-5 node scripts/translate.mjs   # override model

import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const KNOWLEDGE = path.join(ROOT, 'knowledge');
const DOCS = path.join(ROOT, 'docs');
const LOCALES = ['ms', 'en', 'zh'];

const arg = (name) =>
  process.argv.includes(name) ? process.argv[process.argv.indexOf(name) + 1] : null;
const argLang = arg('--lang');
const argFile = arg('--file');
const FORCE = process.argv.includes('--force');

const API_KEY = process.env.ANTHROPIC_API_KEY || '';
const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-5';

// Frontmatter fields that carry reader-facing prose — the ONLY ones a translation
// replaces. Everything else is copied verbatim from the master (spec §Frontmatter).
const PROSE_KEYS = [
  'title', 'summary', 'answer', 'keyTakeaways', 'faq',
  'seoTitle', 'socialTitle', 'appliesTo', 'verificationNeeded', 'obligations',
];

const LANG_NAME = { ms: 'Bahasa Malaysia', en: 'English', zh: 'Simplified Chinese (Malaysian usage)' };

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(full)));
    // Master files are the bare `<slug>.md` (no `.en`/`.zh`/`.ms` locale suffix).
    else if (e.name.endsWith('.md') && !/\.(ms|en|zh)\.md$/.test(e.name)) out.push(full);
  }
  return out;
}

async function readIfExists(p) {
  return existsSync(p) ? readFile(p, 'utf8') : '';
}

// ---- The provider call -----------------------------------------------------

let SPEC = '';
const GLOSSARY = {};
async function loadContext() {
  SPEC = await readIfExists(path.join(DOCS, 'TRANSLATION-SPEC.md'));
  GLOSSARY.zh = await readIfExists(path.join(DOCS, 'plan', 'GLOSSARY-ZH.md'));
  GLOSSARY.ms = await readIfExists(path.join(DOCS, 'plan', 'GLOSSARY-MS.md'));
}

function systemPrompt(target) {
  const glossary = GLOSSARY[target]
    ? `\n\n# Glossary — use these exact renderings\n\n${GLOSSARY[target]}`
    : '';
  return (
    `You are a professional translator for NegaraKu.md, a Malaysia knowledge base. ` +
    `Translate the given Markdown article into ${LANG_NAME[target]}, following the ` +
    `specification below EXACTLY. You are translating, not authoring: never correct, ` +
    `update, shorten or expand; if a figure or sentence looks wrong, translate it ` +
    `faithfully. Preserve markdown structure exactly (same headings, tables, list ` +
    `items, FAQ count, links — rewriting /en/ links to /${target}/). Output ONLY the ` +
    `complete translated Markdown file (YAML frontmatter + body), with no commentary ` +
    `and no surrounding code fences.\n\n# Specification\n\n${SPEC}${glossary}`
  );
}

async function callClaude(rawMaster, target) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 16000,
      system: systemPrompt(target),
      messages: [{ role: 'user', content: rawMaster }],
    }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`Anthropic API ${res.status}: ${detail.slice(0, 300)}`);
  }
  const json = await res.json();
  const text = (json.content ?? []).filter((b) => b.type === 'text').map((b) => b.text).join('');
  // Strip an accidental ```...``` wrapper if the model added one.
  return text.replace(/^\s*```[a-z]*\n?/i, '').replace(/\n?```\s*$/i, '').trim();
}

// ---- Assembling one translation --------------------------------------------

function assemble(master, modelData, modelBody, target, masterLang) {
  // Start from the master so every identity + audit field (slug, topicId,
  // category, subcategory, sources, revisions, keywords, entity, …) is IDENTICAL.
  const data = { ...master.data };
  // Overlay only the translated prose fields the model produced.
  for (const k of PROSE_KEYS) if (modelData[k] !== undefined) data[k] = modelData[k];
  // Governance — deterministic, never from the model.
  data.lang = target;
  data.masterLanguage = masterLang;
  data.translationStatus = 'pending'; // translation-sync.mjs --stamp finalises this
  data.sourceContentHash = null; //       and fills this
  data.status = 'draft';
  data.reviewer = null;
  data.aiAssisted = true;
  return { data, body: modelBody };
}

async function main() {
  if (!existsSync(KNOWLEDGE)) return;
  await loadContext();

  if (!API_KEY) {
    console.warn('[translate] no ANTHROPIC_API_KEY — writing verbatim scaffolds (copy of source).');
    console.warn('[translate] set your own key to machine-draft: export ANTHROPIC_API_KEY=sk-ant-…');
  } else {
    console.log(`[translate] provider: Anthropic · model: ${MODEL}`);
  }

  let masters = await walk(KNOWLEDGE);
  if (argFile) {
    const want = path.resolve(ROOT, argFile);
    masters = masters.filter((m) => path.resolve(m) === want);
    if (masters.length === 0) {
      console.error(`[translate] --file not found as a master: ${argFile}`);
      process.exit(1);
    }
  }

  let created = 0;
  let failed = 0;

  for (const src of masters) {
    const raw = await readFile(src, 'utf8');
    const master = matter(raw);
    const masterLang = master.data.lang ?? master.data.masterLanguage ?? 'ms';
    const targets = (argLang ? [argLang] : LOCALES).filter((l) => l !== masterLang);

    for (const target of targets) {
      const dest = src.replace(/\.md$/, `.${target}.md`);
      if (existsSync(dest) && !FORCE) {
        const [s, d] = await Promise.all([stat(src), stat(dest)]);
        if (s.mtimeMs > d.mtimeMs) {
          console.warn(`[translate] stale: ${path.relative(ROOT, dest).replace(/\\/g, '/')} (source is newer; --force to redraft)`);
        }
        continue;
      }

      let modelData = master.data;
      let modelBody = master.content.trim();
      let mode = 'verbatim';

      if (API_KEY) {
        try {
          const out = await callClaude(raw, target);
          const parsed = matter(out);
          modelData = parsed.data;
          modelBody = parsed.content.trim();
          mode = 'claude';
        } catch (e) {
          console.error(`[translate] ${target} ${path.relative(ROOT, src).replace(/\\/g, '/')} — ${e.message}`);
          failed++;
          continue;
        }
      }

      const { data, body } = assemble(master, modelData, modelBody, target, masterLang);
      // LF only (spec). gray-matter emits \n; ensure no stray \r survives.
      const file = matter.stringify('\n' + body + '\n', data).replace(/\r\n/g, '\n');
      const banner = `<!-- MACHINE DRAFT (${target}, ${mode}): review against docs/TRANSLATION-SPEC.md before publishing. -->\n`;
      await writeFile(dest, banner + file);
      console.log(`[translate] ${mode === 'claude' ? 'drafted' : 'scaffolded'} ${path.relative(ROOT, dest).replace(/\\/g, '/')}`);
      created++;
    }
  }

  console.log(`[translate] ${created} file(s) written${failed ? `, ${failed} failed` : ''}.`);
  if (created && API_KEY) {
    console.log('[translate] next: review the drafts, then `node scripts/sync.mjs && npm run translate:stamp` and open a PR.');
  }
  if (failed) process.exit(1);
}

main().catch((err) => {
  console.error('[translate] failed:', err);
  process.exit(1);
});
