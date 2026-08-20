// Site maintenance mode — a build-time switch, like the all-hidden experiment.
//
// Deploy with MAINTENANCE=1 and every page renders the maintenance screen
// (BaseLayout takes over); deploy without it to restore the site. The
// standalone /maintenance page always shows the screen so it can be previewed.
//
// Optional MAINTENANCE_UNTIL (an ISO date/time, e.g. "2026-08-21T09:00") adds an
// "expected back by" line. Read via process.env because these are build-time
// only — never shipped to the client, never toggled at runtime.
export const MAINTENANCE = process.env.MAINTENANCE === '1';
export const MAINTENANCE_UNTIL = process.env.MAINTENANCE_UNTIL ?? '';
