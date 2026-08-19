// build-credits.mjs — the auto-generated contributor roll (spec §13).
//
// Aggregates every real person who has touched the corpus, from the SAME
// manifest the site is built from (public/api/articles.json): article `author`,
// each `revisions[].contributor` and `revisions[].reviewer`, and the current
// top-level `reviewer`. Cross-references the Reviewer roster
// (scripts/health/reviewers.txt) so an authorised reviewer appears even before
// their first sign-off. Writes public/api/credits.json for /contributors.
//
// AI honesty (§13): the house byline "NegaraKu.md Editorial" is the AI-drafted
// origin of most articles — it is NOT listed as a person, but its reach is
// disclosed as a stat so the credit to real humans is not overstated.

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const API = path.join(ROOT, 'public', 'api');
const IN = path.join(API, 'articles.json');
const ROSTER = path.join(ROOT, 'scripts', 'health', 'reviewers.txt');
const OUT = path.join(API, 'credits.json');

const HOUSE = 'NegaraKu.md Editorial';
const isPerson = (n) => typeof n === 'string' && n.trim() !== '' && n.trim() !== HOUSE;

async function readRoster() {
  if (!existsSync(ROSTER)) return [];
  const txt = await readFile(ROSTER, 'utf8');
  return txt
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'));
}

async function main() {
  if (!existsSync(IN)) {
    console.warn('[credits] no articles.json — run sync first. Skipping.');
    return;
  }
  const { articles } = JSON.parse(await readFile(IN, 'utf8'));
  const roster = await readRoster();

  const people = new Map(); // name -> aggregate
  const get = (name) => {
    const key = name.trim();
    if (!people.has(key)) {
      people.set(key, { name: key, topics: new Set(), authored: 0, contributions: 0, reviews: 0, roles: new Set() });
    }
    return people.get(key);
  };

  const topics = new Set();
  let aiAssistedTopics = new Set();

  for (const a of articles) {
    if (a.key) topics.add(a.key);
    if (a.aiAssisted !== false && a.key) aiAssistedTopics.add(a.key);

    // Original byline (skip the AI house byline).
    if (isPerson(a.author)) {
      const p = get(a.author);
      p.authored++;
      p.roles.add('author');
      if (a.key) p.topics.add(a.key);
    }

    // Public change history.
    let revReviewedThisFile = false;
    for (const r of a.revisions ?? []) {
      if (isPerson(r.contributor)) {
        const p = get(r.contributor);
        p.contributions++;
        p.roles.add('contributor');
        if (a.key) p.topics.add(a.key);
      }
      if (isPerson(r.reviewer)) {
        const p = get(r.reviewer);
        p.reviews++;
        p.roles.add('reviewer');
        if (a.key) p.topics.add(a.key);
        revReviewedThisFile = true;
      }
    }

    // Current sign-off. Only count a review here if the revision log didn't
    // already credit this file's reviewer (avoids double counting).
    if (isPerson(a.reviewer)) {
      const p = get(a.reviewer);
      p.roles.add('reviewer');
      if (a.key) p.topics.add(a.key);
      if (!revReviewedThisFile) p.reviews++;
    }
  }

  // Authorised reviewers appear even with no sign-off yet.
  for (const name of roster) if (isPerson(name)) get(name).roles.add('reviewer');

  const ordered = [...people.values()]
    .map((p) => ({
      name: p.name,
      roles: ['author', 'contributor', 'reviewer'].filter((r) => p.roles.has(r)),
      articles: p.topics.size,
      authored: p.authored,
      contributions: p.contributions,
      reviews: p.reviews,
    }))
    .sort(
      (a, b) =>
        b.authored + b.contributions + b.reviews - (a.authored + a.contributions + a.reviews) ||
        a.name.localeCompare(b.name),
    );

  const out = {
    // Generated file — stamped by the build. No Date.now() at module top-level
    // elsewhere; here it's a one-shot build artifact so a wall-clock stamp is fine.
    generatedAt: new Date().toISOString(),
    stats: {
      people: ordered.length,
      topics: topics.size,
      aiAssistedTopics: aiAssistedTopics.size,
      reviews: ordered.reduce((n, p) => n + p.reviews, 0),
      contributions: ordered.reduce((n, p) => n + p.contributions, 0),
    },
    people: ordered,
  };

  await mkdir(API, { recursive: true });
  await writeFile(OUT, JSON.stringify(out, null, 2));
  console.log(`[credits] ${ordered.length} people · ${topics.size} topics (${aiAssistedTopics.size} AI-assisted) → ${path.relative(ROOT, OUT).replace(/\\/g, '/')}`);
}

main().catch((e) => {
  console.error('[credits]', e);
  process.exit(1);
});
