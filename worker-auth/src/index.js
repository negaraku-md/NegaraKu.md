// NegaraKu.md — Contributor auth Worker.
//
// A Cloudflare Worker bound to `negaraku.md/api/auth/*` (a more specific route
// than the analytics `negaraku.md/*`, so Cloudflare sends these paths here). It
// implements a minimal "Sign in with GitHub" flow used ONLY to recognise
// contributors and unlock the Contributor View — it never gates content.
//
//   GET  /api/auth/login    → redirect to GitHub authorize (scope read:org)
//   GET  /api/auth/callback → exchange code, check negaraku-md membership,
//                             set a signed HttpOnly session cookie, redirect back
//   GET  /api/auth/me       → { login, isContributor } from the cookie
//   POST /api/auth/logout   → clear the cookie
//
// The GitHub token is used once (identity + membership) and discarded — the
// session is only the signed cookie. Everything the Contributor View exposes is
// public (GitHub deep-links), so this recognition is personalisation, not a
// security boundary: GitHub enforces real access when a contributor clicks through.
//
// Config (wrangler.toml [vars] + secrets):
//   GITHUB_CLIENT_ID      (var)    OAuth App client id
//   GITHUB_CLIENT_SECRET  (secret) OAuth App client secret
//   SESSION_SIGNING_KEY   (secret) random 32+ bytes, signs the cookie + state
//   ORG                   (var)    org to check membership in (default negaraku-md)
//   COOKIE_NAME           (var)    session cookie name (default nk_session)

const SCOPE = 'read:org';
const SESSION_TTL = 8 * 60 * 60; // 8 hours
const STATE_TTL = 10 * 60; // 10 minutes
const GH_API = 'https://api.github.com';
const UA = 'NegaraKu.md-auth';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    try {
      switch (url.pathname) {
        case '/api/auth/login':
          return await handleLogin(url, env);
        case '/api/auth/callback':
          return await handleCallback(url, env);
        case '/api/auth/me':
          return await handleMe(request, env);
        case '/api/auth/logout':
          return handleLogout(url, env);
        default:
          return json({ error: 'not_found' }, 404);
      }
    } catch (e) {
      return json({ error: 'server_error', detail: String((e && e.message) || e) }, 500);
    }
  },
};

// ---- handlers ---------------------------------------------------------------

async function handleLogin(url, env) {
  if (!configured(env)) return json({ error: 'auth_not_configured' }, 503);
  const returnTo = safePath(url.searchParams.get('return'));
  const state = await makeToken(env, { k: 'state', n: randomHex(16), r: returnTo }, STATE_TTL);
  const redirectUri = `${url.origin}/api/auth/callback`;
  const authorize = new URL('https://github.com/login/oauth/authorize');
  authorize.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
  authorize.searchParams.set('redirect_uri', redirectUri);
  authorize.searchParams.set('scope', SCOPE);
  authorize.searchParams.set('state', state);
  authorize.searchParams.set('allow_signup', 'false');
  return redirect(authorize.toString());
}

async function handleCallback(url, env) {
  if (!configured(env)) return json({ error: 'auth_not_configured' }, 503);
  const code = url.searchParams.get('code');
  const stateTok = url.searchParams.get('state');
  const state = await verifyToken(env, stateTok);
  if (!code || !state || state.k !== 'state') {
    return json({ error: 'invalid_state' }, 400);
  }
  const returnTo = safePath(state.r);

  // Exchange the code for a user access token.
  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { accept: 'application/json', 'content-type': 'application/json', 'user-agent': UA },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${url.origin}/api/auth/callback`,
    }),
  });
  const tokenData = await tokenRes.json().catch(() => ({}));
  const token = tokenData && tokenData.access_token;
  if (!token) return json({ error: 'token_exchange_failed' }, 401);

  // Identify the user and check org membership.
  const login = await ghLogin(token);
  const contributor = login ? await ghIsOrgMember(token, org(env)) : false;

  // Mint the session and hand it back as a signed HttpOnly cookie.
  const session = await makeToken(env, { login, contributor }, SESSION_TTL);
  return redirect(returnTo, {
    'set-cookie': cookie(cookieName(env), session, SESSION_TTL),
  });
}

async function handleMe(request, env) {
  const tok = readCookie(request, cookieName(env));
  const payload = tok ? await verifyToken(env, tok) : null;
  const body = payload
    ? { login: payload.login || null, isContributor: !!payload.contributor }
    : { isContributor: false };
  return json(body, 200, { 'cache-control': 'no-store' });
}

function handleLogout(url, env) {
  const returnTo = safePath(url.searchParams.get('return'));
  return redirect(returnTo, { 'set-cookie': cookie(cookieName(env), '', 0) });
}

// ---- GitHub -----------------------------------------------------------------

async function ghLogin(token) {
  const r = await fetch(`${GH_API}/user`, { headers: ghHeaders(token) });
  if (!r.ok) return null;
  const u = await r.json().catch(() => null);
  return (u && u.login) || null;
}

async function ghIsOrgMember(token, orgName) {
  // 200 { state: "active" } → member. "pending"/404/403 → not a member.
  const r = await fetch(`${GH_API}/user/memberships/orgs/${encodeURIComponent(orgName)}`, {
    headers: ghHeaders(token),
  });
  if (!r.ok) return false;
  const m = await r.json().catch(() => null);
  return !!(m && m.state === 'active');
}

function ghHeaders(token) {
  return {
    authorization: `Bearer ${token}`,
    accept: 'application/vnd.github+json',
    'user-agent': UA,
    'x-github-api-version': '2022-11-28',
  };
}

// ---- signed tokens (HMAC-SHA256) --------------------------------------------

async function makeToken(env, claims, ttlSeconds) {
  const payload = { ...claims, iat: nowSec(), exp: nowSec() + ttlSeconds };
  const body = b64url(strToBytes(JSON.stringify(payload)));
  const sig = await hmac(env, body);
  return `${body}.${sig}`;
}

async function verifyToken(env, token) {
  if (!token || typeof token !== 'string' || token.indexOf('.') < 0) return null;
  const [body, sig] = token.split('.', 2);
  const expected = await hmac(env, body);
  if (!timingSafeEqual(sig, expected)) return null;
  let payload;
  try {
    payload = JSON.parse(bytesToStr(b64urlToBytes(body)));
  } catch {
    return null;
  }
  if (!payload || typeof payload.exp !== 'number' || payload.exp < nowSec()) return null;
  return payload;
}

async function hmac(env, data) {
  const key = await crypto.subtle.importKey(
    'raw',
    strToBytes(env.SESSION_SIGNING_KEY),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, strToBytes(data));
  return b64url(new Uint8Array(sig));
}

// ---- small utils ------------------------------------------------------------

function configured(env) {
  return !!(env.GITHUB_CLIENT_ID && env.GITHUB_CLIENT_SECRET && env.SESSION_SIGNING_KEY);
}
function org(env) {
  return env.ORG || 'negaraku-md';
}
function cookieName(env) {
  return env.COOKIE_NAME || 'nk_session';
}
function nowSec() {
  return Math.floor(Date.now() / 1000);
}

// Only allow same-origin, non-protocol-relative paths (guards open redirects).
function safePath(p) {
  if (typeof p !== 'string' || !p.startsWith('/') || p.startsWith('//')) return '/';
  return p;
}

function cookie(name, value, maxAge) {
  return `${name}=${value}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${maxAge}`;
}
function readCookie(request, name) {
  const header = request.headers.get('cookie') || '';
  for (const part of header.split(';')) {
    const idx = part.indexOf('=');
    if (idx < 0) continue;
    if (part.slice(0, idx).trim() === name) return part.slice(idx + 1).trim();
  }
  return null;
}

function json(obj, status = 200, extra = {}) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', ...extra },
  });
}
function redirect(location, extra = {}) {
  return new Response(null, { status: 302, headers: { location, ...extra } });
}

function randomHex(nBytes) {
  const b = new Uint8Array(nBytes);
  crypto.getRandomValues(b);
  return [...b].map((x) => x.toString(16).padStart(2, '0')).join('');
}

function timingSafeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string' || a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function strToBytes(s) {
  return new TextEncoder().encode(s);
}
function bytesToStr(b) {
  return new TextDecoder().decode(b);
}
function b64url(bytes) {
  let s = '';
  for (const byte of bytes) s += String.fromCharCode(byte);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function b64urlToBytes(str) {
  const s = str.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((str.length + 3) % 4);
  const bin = atob(s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
