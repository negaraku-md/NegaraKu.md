/** Canonical production origin. Kept separate so both astro.config and
    page code can import it without pulling in integration modules. */
export const SITE = 'https://negaraku.md';
export const REPO = 'https://github.com/ashton-tan/NegaraKu.md';

/** Endpoint for the newsletter + contribution forms (e.g. a Formspree form URL
    like "https://formspree.io/f/abcdwxyz", or any handler that accepts a POST).
    Leave it EMPTY until you have a real one — while empty, the forms don't POST
    to a dead URL; they show a friendly "not live yet" message instead. */
export const CONTACT_FORM_ENDPOINT = '';
