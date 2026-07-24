// flag-needs-update.mjs — close the correction loop.
//
// When a reader reports a problem with an article (the FeedbackBar files a
// prefilled GitHub issue carrying Topic ID / Language / Path), move that
// article from `published` to `needs-update`. This is the EVENT-based trigger
// of the article lifecycle; the time-based one (reviewDue passed) is derived at
// render time and needs no script.
//
// SECURITY: the issue body is written by anyone on the internet. It arrives via
// the ISSUE_BODY env var, is never interpolated into a shell, and is matched
// against strict patterns. The only mutation permitted is a single `status:`
// line moving published -> needs-update, in one file under knowledge/. A
// malformed or hand-written issue is normal, not an error — we skip quietly.

import { readFile, writeFile, appendFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const KNOWLEDGE = path.join(ROOT, 'knowledge');
const LOCALES = new Set(['ms', 'en', 'zh']);

const body = process.env.ISSUE_BODY ?? '';

/** Pull one "Label: value" line out of the issue's metadata block. */
const grab = (label) => {
  const m = body.match(new RegExp(`^${label}:[ \\t]*(.+)$`, 'm'));
  return m ? m[1].trim() : null;
};

async function done(changed, message) {
  console.log(`[needs-update] ${message}`);
  if (process.env.GITHUB_OUTPUT) {
    await appendFile(process.env.GITHUB_OUTPUT, `changed=${changed}\n`);
  }
  process.exit(0);
}

const rawPath = grab('Path');
const lang = grab('Language');
const topicId = grab('Topic ID');

if (!rawPath) await done(false, 'skipped: no Path in issue body');
if (!lang || !LOCALES.has(lang)) await done(false, `skipped: unusable Language "${lang}"`);

// Strict shape: /<category>/<slug>. Anything else is not ours to act on.
const m = /^\/([a-z0-9][a-z0-9-]*)\/([a-z0-9][a-z0-9-]*)$/.exec(rawPath);
if (!m) await done(false, `skipped: unusable Path "${rawPath}"`);
const [, category, slug] = m;

// The file the reader was actually on: their language if it exists, otherwise
// the master (they were seeing the fallback).
const file = [
  path.join(KNOWLEDGE, category, `${slug}.${lang}.md`),
  path.join(KNOWLEDGE, category, `${slug}.md`),
].find((f) => existsSync(f));
if (!file) await done(false, `skipped: no article file for ${category}/${slug}`);

let raw = await readFile(file, 'utf8');

// Confirm the issue really is about this article before touching it.
if (topicId) {
  const found = raw.match(/^topicId:[ \t]*"?([\w-]+)"?/m)?.[1];
  if (found && found !== topicId) {
    await done(false, `skipped: topicId mismatch (file ${found} vs issue ${topicId})`);
  }
}

const status = raw.match(/^status:[ \t]*"?([\w-]+)"?/m)?.[1];
// Idempotent: only published articles move. Re-reporting an already-flagged
// article must not produce a second commit.
if (status !== 'published') {
  await done(false, `skipped: status is "${status}" (only published -> needs-update)`);
}

raw = raw.replace(/^status:.*$/m, 'status: "needs-update"');
await writeFile(file, raw);
await done(true, `flagged ${path.relative(ROOT, file).replace(/\\/g, '/')} as needs-update`);
