/** Canonical production origin. Kept separate so both astro.config and
    page code can import it without pulling in integration modules. */
export const SITE = 'https://negaraku.md';
export const REPO = 'https://github.com/ashton-tan/NegaraKu.md';

/** Endpoint for the contribution form (e.g. a Formspree form URL like
    "https://formspree.io/f/abcdwxyz", or any handler that accepts a POST).
    Leave it EMPTY to keep the no-backend behaviour: the contribute form opens a
    pre-filled GitHub issue instead of POSTing. Set it to make the form POST. */
export const CONTACT_FORM_ENDPOINT = '';
