// Cloudflare Worker — reliable cron trigger for NegaraKu.md Facebook posting.
//
// GitHub Actions scheduled crons are unreliable for our Malaysia engagement windows:
// GitHub drops the 08:17 MYT tick and delays the 20:17 MYT tick 5-9h, so posts were
// landing at 1-5am MYT. CF cron triggers fire ON TIME, so this Worker fires a
// repository_dispatch to the backlog workflow (.github/workflows/facebook-backlog.yml)
// at the EXACT window times and passes which window it is. The workflow trusts that
// window (FB_WINDOW) instead of the drifted GitHub wall-clock.
//
// Crons (UTC): 00:17 → morning (08:17 MYT), 05:17 → lunch (13:17 MYT),
//              12:17 → evening (20:17 MYT). The window is derived from the fired
//              time's UTC hour, so it stays correct even if the cron list is edited.

function windowFor(scheduledTime) {
  const utcHour = new Date(scheduledTime).getUTCHours();
  if (utcHour < 3) return 'morning'; // ~00:17 UTC
  if (utcHour < 9) return 'lunch'; //   ~05:17 UTC
  return 'evening'; //                  ~12:17 UTC
}

async function dispatch(env, window, scheduledTime) {
  if (!env.GITHUB_DISPATCH_TOKEN) {
    console.log(JSON.stringify({ msg: 'fb-cron missing token', window }));
    throw new Error('GITHUB_DISPATCH_TOKEN secret is not set');
  }
  const url = `https://api.github.com/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/dispatches`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.GITHUB_DISPATCH_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'negaraku-fb-cron',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      event_type: env.DISPATCH_EVENT || 'fb-backlog',
      client_payload: { window, firedAt: new Date(scheduledTime).toISOString() },
    }),
  });
  // GitHub returns 204 No Content on success.
  const ok = res.status === 204;
  console.log(
    JSON.stringify({ msg: 'fb-backlog dispatch', window, status: res.status, ok, detail: ok ? undefined : await res.text() }),
  );
  if (!ok) throw new Error(`repository_dispatch failed: HTTP ${res.status}`);
}

export default {
  async scheduled(event, env, ctx) {
    const window = windowFor(event.scheduledTime);
    ctx.waitUntil(dispatch(env, window, event.scheduledTime));
  },
};
