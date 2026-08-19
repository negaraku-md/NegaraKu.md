// sync.mjs — validate the knowledge base (SSOT) and emit a machine manifest.
//
// The Astro site reads Markdown straight from knowledge/ via the content glob
// loader, so this step does not copy files. Instead it:
//   1. parses every knowledge/**/*.md frontmatter,
//   2. warns about schema problems (missing required fields), and
//   3. writes public/api/articles.json — the data contract used by
//      build-dashboard.mjs, the health scanner, and AI endpoints.
//
// Runs automatically on postinstall / predev / prebuild.

import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const KNOWLEDGE = path.join(ROOT, 'knowledge');
const OUT_DIR = path.join(ROOT, 'public', 'api');
const OUT_FILE = path.join(OUT_DIR, 'articles.json');

const REQUIRED = ['title', 'category', 'slug', 'summary'];

async function walk(dir) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (entry.isFile() && entry.name.endsWith('.md')) out.push(full);
  }
  return out;
}

async function main() {
  const files = await walk(KNOWLEDGE);
  const articles = [];
  const warnings = [];

  for (const file of files) {
    const rel = path.relative(KNOWLEDGE, file).split(path.sep).join('/');
    const raw = await readFile(file, 'utf8');
    let data, content;
    try {
      ({ data, content } = matter(raw));
    } catch (err) {
      warnings.push(`✗ ${rel}: cannot parse frontmatter — ${err.message}`);
      continue;
    }

    for (const key of REQUIRED) {
      if (!data[key]) warnings.push(`✗ ${rel}: missing "${key}"`);
    }
    // Category should match the top-level folder.
    const folder = rel.split('/')[0];
    if (data.category && data.category !== folder) {
      warnings.push(`⚠ ${rel}: category "${data.category}" != folder "${folder}"`);
    }

    // Count Latin words plus CJK characters so Chinese (no spaces) is measured at
    // all. Charging 1 per character then overstates Chinese by ~1.65x against its
    // English master, which pushed faithful translations out of their declared
    // tier band. Chinese says the same thing in fewer units: a CJK character is
    // worth roughly 0.6 of an English word, so scale it.
    const CJK_PER_WORD = 0.6;
    const countWords = (text) => {
      const cjk = (text.match(/[㐀-鿿]/g) ?? []).length;
      const latin = text
        .trim()
        .split(/\s+/)
        .filter((w) => /[A-Za-z0-9]/.test(w)).length;
      return Math.round(cjk * CJK_PER_WORD + latin);
    };
    const words = countWords(content);
    articles.push({
      path: rel,
      key: `${data.category}/${data.slug}`,
      title: data.title ?? null,
      seoTitle: data.seoTitle ?? null,
      tier: data.tier ?? null,
      answer: data.answer ?? null,
      // Must use the CJK-aware counter too — splitting on whitespace scores every
      // Chinese answer at 12-29 "words" and trips the 40-100 answer-length check
      // on every translated article.
      answerWords: data.answer ? countWords(String(data.answer)) : 0,
      faqCount: Array.isArray(data.faq) ? data.faq.length : 0,
      sensitivity: data.sensitivity ?? 'none',
      reviewer: data.reviewer ?? null,
      // Keep the typed edge {rel, to} — build-graph.mjs needs the relation kind,
      // and the only other consumer (ArticleList) just counts them.
      relations: Array.isArray(data.relations) ? data.relations.map((r) => ({ rel: r.rel, to: r.to })) : [],
      category: data.category ?? folder,
      subcategory: data.subcategory ?? [],
      lang: data.lang ?? 'ms',
      // Master/source language is declared per article (a translation points
      // back to its source), so downstream never assumes a single site master.
      masterLanguage: data.masterLanguage ?? data.lang ?? 'ms',
      slug: data.slug ?? null,
      summary: data.summary ?? '',
      status: data.status ?? 'draft',
      // Byline + AI-assist disclosure — the credits page (build-credits.mjs)
      // aggregates real people from here + the revision log, and counts how many
      // articles were AI-drafted so the credit is honest.
      author: data.author ?? 'NegaraKu.md Editorial',
      aiAssisted: data.aiAssisted ?? true,
      // Who is doing the current work — the health scan's four-eyes rule checks
      // that a sign-off's reviewer isn't the same person (separation of duties).
      assignee: data.assignee ?? null,
      // Editorial mode + chain-of-custody dates — surfaced for the OG social
      // cards (and any other consumer) so they need not re-parse frontmatter.
      mode: data.mode ?? 'practical',
      published: data.published ? new Date(data.published).toISOString().slice(0, 10) : null,
      reviewed: data.reviewed ? new Date(data.reviewed).toISOString().slice(0, 10) : null,
      reviewDue: data.reviewDue ? new Date(data.reviewDue).toISOString().slice(0, 10) : null,
      updated: data.updated ? new Date(data.updated).toISOString().slice(0, 10) : null,
      sources: (data.sources ?? []).length,
      related: data.related ?? [],
      // Public change history — who did what, when. contributor/reviewer are
      // null until a human is named (articles start as AI drafts).
      revisions: (data.revisions ?? []).map((r) => ({
        version: r.version ?? null,
        date: r.date ? new Date(r.date).toISOString().slice(0, 10) : null,
        change: r.change ?? '',
        contributor: r.contributor ?? null,
        reviewer: r.reviewer ?? null,
      })),
      words,
    });
  }

  await mkdir(OUT_DIR, { recursive: true });
  await writeFile(
    OUT_FILE,
    JSON.stringify(
      { generatedFrom: 'knowledge/', count: articles.length, articles },
      null,
      2,
    ),
  );

  const rel = path.relative(ROOT, OUT_FILE).split(path.sep).join('/');
  console.log(`[sync] ${articles.length} article(s) → ${rel}`);
  if (warnings.length) {
    console.warn(`[sync] ${warnings.length} warning(s):`);
    for (const w of warnings) console.warn('  ' + w);
  }
}

main().catch((err) => {
  console.error('[sync] failed:', err);
  process.exit(1);
});
