// verify-analytics.mjs — quick check that the Visitors pipeline is recording
// Readers / Search / AI. Queries Analytics Engine (the same dataset the Worker
// writes to and build-analytics.mjs reads) and prints a per-bucket summary.
//
// Usage:
//   CF_API_TOKEN=... CF_ACCOUNT_ID=... npm run verify:analytics
//   npm run verify:analytics -- --window 24h
//   npm run verify:analytics -- --path accounting/accounting-software-malaysia
//
// Env (same as build-analytics.mjs):
//   CF_ACCOUNT_ID   Cloudflare account id            (required)
//   CF_API_TOKEN    token with "Account Analytics: Read" (required)
//   CF_AE_DATASET   dataset (default negaraku_analytics)
//
// Reads only; never writes. Token is read from the environment — it is never
// printed or stored.

const ACCOUNT = process.env.CF_ACCOUNT_ID;
const TOKEN = process.env.CF_API_TOKEN;
const DATASET = process.env.CF_AE_DATASET || 'negaraku_analytics';

// ---- args --------------------------------------------------------------
const args = process.argv.slice(2);
const getArg = (name) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : null;
};
const window = getArg('--window') || '1h'; // e.g. 1h, 24h, 7d, 90d
const pathFilter = getArg('--path');

const wm = /^(\d+)\s*([hd])$/i.exec(window.trim());
if (!wm) {
  console.error(`Bad --window "${window}". Use e.g. 1h, 24h, 7d.`);
  process.exit(2);
}
const [, wn, wu] = wm;
const UNIT = wu.toLowerCase() === 'd' ? 'DAY' : 'HOUR';

if (!ACCOUNT || !TOKEN) {
  console.error(
    'Missing CF_ACCOUNT_ID and/or CF_API_TOKEN.\n' +
      'Set them first, e.g.:\n' +
      '  CF_ACCOUNT_ID=<your-account-id> CF_API_TOKEN=<read-token> npm run verify:analytics\n' +
      'The token needs the "Account Analytics: Read" permission.',
  );
  process.exit(1);
}

const esc = (s) => String(s).replace(/'/g, "''"); // basic SQL-literal escaping
const where =
  `WHERE timestamp > NOW() - INTERVAL '${wn}' ${UNIT}` +
  (pathFilter ? ` AND blob1 = '${esc(pathFilter)}'` : '');
const sql =
  `SELECT blob2 AS bucket, blob3 AS bot, SUM(_sample_interval) AS n ` +
  `FROM ${DATASET} ${where} GROUP BY bucket, bot ORDER BY n DESC`;

const res = await fetch(
  `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT}/analytics_engine/sql`,
  { method: 'POST', headers: { Authorization: `Bearer ${TOKEN}` }, body: sql },
);
if (!res.ok) {
  console.error(`Analytics Engine SQL API ${res.status}: ${(await res.text()).slice(0, 300)}`);
  process.exit(1);
}
const rows = (await res.json()).data || [];

// ---- summarise ---------------------------------------------------------
const buckets = { readers: { total: 0, bots: {} }, search: { total: 0, bots: {} }, ai: { total: 0, bots: {} } };
for (const r of rows) {
  const b = buckets[r.bucket];
  if (!b) continue; // 'skip' is never logged; ignore anything unexpected
  const n = Math.round(Number(r.n) || 0);
  b.total += n;
  b.bots[r.bot] = (b.bots[r.bot] || 0) + n;
}

const topBots = (bots) =>
  Object.entries(bots)
    .sort((a, b) => b[1] - a[1])
    .map(([name, n]) => `${name}(${n})`)
    .join(', ') || '—';

console.log(`Visitors — last ${wn} ${UNIT.toLowerCase()}${pathFilter ? `  ·  path=${pathFilter}` : ''}  ·  dataset=${DATASET}\n`);
console.log('  bucket    count   bots');
console.log('  ' + '-'.repeat(50));
for (const name of ['readers', 'search', 'ai']) {
  const b = buckets[name];
  console.log(`  ${name.padEnd(8)}  ${String(b.total).padStart(5)}   ${topBots(b.bots)}`);
}
const grand = buckets.readers.total + buckets.search.total + buckets.ai.total;
console.log('  ' + '-'.repeat(50));
console.log(`  total     ${String(grand).padStart(5)}`);
if (grand === 0) {
  console.log(
    `\n  No hits in this window. Generate one per bucket, then re-run:\n` +
      `    curl -A "Googlebot/2.1" https://negaraku.md/   (search)\n` +
      `    curl -A "ClaudeBot/1.0" https://negaraku.md/   (ai)\n` +
      `    curl -A "Mozilla/5.0 Chrome" https://negaraku.md/  (readers)\n` +
      `  Allow ~1 minute for Analytics Engine ingestion.`,
  );
}
