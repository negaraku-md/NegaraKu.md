/** Canonical production origin. Kept separate so both astro.config and
    page code can import it without pulling in integration modules. */
export const SITE = 'https://negaraku.md';
export const REPO = 'https://github.com/negaraku-md/NegaraKu.md';

/** Endpoint for the contribution form (e.g. a Formspree form URL like
    "https://formspree.io/f/abcdwxyz", or any handler that accepts a POST).
    Leave it EMPTY to keep the no-backend behaviour: the contribute form opens a
    pre-filled GitHub issue instead of POSTing. Set it to make the form POST. */
export const CONTACT_FORM_ENDPOINT = '';

/** Google Analytics 4 Measurement ID (property "NegaraKu.md", web stream
    "NegaraKu.md Web"). The ID is public by design — it ships in the page.
    Leave it EMPTY to disable GA entirely (no tag, no banner). When set, GA4 loads
    ONLY (a) on the production host `negaraku.md` — never dev/preview/localhost —
    and (b) after the visitor accepts the cookie-consent banner (Consent Mode v2
    defaults analytics_storage to 'denied' until then). See GoogleAnalytics.astro
    + ConsentBanner.astro. Keep the Privacy/Cookie policies (LegalView.astro) in
    sync with whatever this does. */
export const GA_MEASUREMENT_ID = 'G-KKQ57H11FV';

/** The production host GA4 is allowed to run on (bare hostname, no scheme). */
export const GA_HOST = 'negaraku.md';
