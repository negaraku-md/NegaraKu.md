// query.js — contributor-only LIVE analytics query endpoint (POST /_a/q).
//
// Stage 4 of the /analytics pivot: the baked cubes (public/api/*.json) are fixed
// at build time; this lets an approved contributor run an ARBITRARY group-by /
// filter against Analytics Engine in real time — any combination of the blob
// dimensions the edge logger records.
//
// Security model:
//   • Gate: the request must carry the contributor session cookie. We verify it
//     by sub-requesting the existing auth Worker at /api/auth/me (same origin) —
//     no need to duplicate its cookie secret here. Fail-CLOSED: any error → 403.
//   • Injection-proof: dimensions, the bucket and the measure come ONLY from
//     hard-coded whitelists (never interpolated from input); filter VALUES are
//     single-quote-escaped and length-capped. Nothing else from the body reaches
//     the SQL string.
//   • Cost/abuse: day-range, dimension count and row limit are all capped; every
//     result is edge-cached (keyed by the query spec) for a few minutes.
//
// Read auth uses the Analytics Engine SQL API (Account Analytics:Read), the same
// as the build scripts — env.AE_API_TOKEN (secret) + env.CF_ACCOUNT_ID (var).

const DATASET = 'negaraku_analytics';

// Whitelisted group-by / filter dimensions → the blob column the Worker writes
// (see index.js). Anything not in this map is rejected.
const DIM = {
  path: 'blob1', bot: 'blob3', locale: 'blob4', channel: 'blob5', source: 'blob6',
  country: 'blob7', region: 'blob8', city: 'blob9', device: 'blob10', browser: 'blob11', os: 'blob12',
};
const BUCKETS = new Set(['readers', 'search', 'ai']);
const MAX_DIMS = 3, MAX_DAYS = 90, MAX_LIMIT = 200;

const json = (obj, status = 200, extra = {}) =>
  new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json; charset=utf-8', ...extra } });

// Escape a filter value for a single-quoted SQL literal + cap its length.
const escVal = (v) => String(v).replace(/'/g, "''").slice(0, 128);

// Build a safe AE SQL statement from a whitelisted spec. Throws on bad input.
export function buildSQL(spec) {
  const dims = [...new Set((Array.isArray(spec.dims) ? spec.dims : []).filter((d) => DIM[d]))].slice(0, MAX_DIMS);
  if (!dims.length) throw new Error('pick at least one valid dimension');
  const days = Math.min(MAX_DAYS, Math.max(1, parseInt(spec.days, 10) || 30));
  const limit = Math.min(MAX_LIMIT, Math.max(1, parseInt(spec.limit, 10) || 50));

  const where = [`timestamp > NOW() - INTERVAL '${days}' DAY`];
  if (BUCKETS.has(spec.bucket)) where.push(`blob2 = '${spec.bucket}'`);
  else where.push(`blob2 != 'engage'`); // 'all' real hits, never engagement rows
  const filters = (spec.filters && typeof spec.filters === 'object') ? spec.filters : {};
  for (const k of Object.keys(filters)) if (DIM[k]) where.push(`${DIM[k]} = '${escVal(filters[k])}'`);

  const sel = dims.map((d) => `${DIM[d]} AS ${d}`).join(', ');
  const sql =
    `SELECT ${sel}, SUM(_sample_interval) AS n FROM ${DATASET} ` +
    `WHERE ${where.join(' AND ')} GROUP BY ${dims.join(', ')} ORDER BY n DESC LIMIT ${limit}`;
  return { sql, dims, days, limit, bucket: BUCKETS.has(spec.bucket) ? spec.bucket : 'all' };
}

// Is this visitor an approved contributor? Delegates to the auth Worker so we
// never duplicate its cookie secret. Fail-closed.
async function isContributor(request) {
  const cookie = request.headers.get('cookie');
  if (!cookie) return false;
  try {
    const res = await fetch(new URL('/api/auth/me', request.url).toString(), {
      headers: { cookie, accept: 'application/json' },
      cf: { cacheTtl: 0 },
    });
    if (!res.ok) return false;
    const d = await res.json();
    return !!d.isContributor;
  } catch {
    return false;
  }
}

export async function handleQuery(request, env) {
  if (request.method !== 'POST') return json({ error: 'POST only' }, 405);
  if (!(await isContributor(request))) return json({ error: 'contributors only' }, 403);

  let spec;
  try { spec = await request.json(); } catch { return json({ error: 'invalid JSON body' }, 400); }
  let q;
  try { q = buildSQL(spec); } catch (e) { return json({ error: e.message }, 400); }

  // Edge cache, keyed by the normalized spec (aggregate data is identical for
  // every contributor, so a shared cache is safe — and only reached after auth).
  const cache = caches.default;
  const keyStr = JSON.stringify({ d: q.dims, b: q.bucket, days: q.days, lim: q.limit, f: spec.filters || {} });
  const cacheKey = new Request(`https://q.negaraku.md/_a/q/${encodeURIComponent(keyStr)}`);
  const hit = await cache.match(cacheKey);
  if (hit) return hit;

  if (!env.AE_API_TOKEN || !env.CF_ACCOUNT_ID) return json({ error: 'live query not configured (AE_API_TOKEN / CF_ACCOUNT_ID)' }, 503);

  let rows;
  try {
    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${env.CF_ACCOUNT_ID}/analytics_engine/sql`,
      { method: 'POST', headers: { Authorization: `Bearer ${env.AE_API_TOKEN}` }, body: q.sql },
    );
    if (!res.ok) return json({ error: `analytics read failed (${res.status})` }, 502);
    rows = (await res.json()).data || [];
  } catch (e) {
    return json({ error: 'analytics read error' }, 502);
  }

  const body = { rows, dims: q.dims, bucket: q.bucket, days: q.days, generatedAt: new Date().toISOString() };
  const out = json(body, 200, { 'Cache-Control': 'private, max-age=300' });
  // Store a cacheable copy (5 min) under the spec key.
  const toStore = json(body, 200, { 'Cache-Control': 'max-age=300' });
  try { await cache.put(cacheKey, toStore); } catch { /* non-fatal */ }
  return out;
}
