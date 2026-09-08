# OG-card fonts (vendored, latin subset)

These four TrueType files are the brand fonts used **only** by `scripts/build-og.mjs`
to rasterise Open Graph social-card SVGs → PNG via `sharp`/librsvg on the CI runner.
They are registered into fontconfig (copied to `~/.fonts` + `fc-cache`) by the
"Install fonts for Open Graph images" step in `.github/workflows/deploy.yml`, so OG
cards render in the real brand typography instead of a system fallback — with no
`apt`/network dependency for the latin text.

| File | Family (fontconfig) | Weight |
|------|--------------------|--------|
| `Montserrat-Bold.ttf`      | Montserrat | 700 |
| `Montserrat-ExtraBold.ttf` | Montserrat | 800 |
| `Lato-Regular.ttf`         | Lato       | 400 |
| `Lato-Bold.ttf`            | Lato       | 700 |

**Provenance:** losslessly decompressed (woff2 → ttf, `fontTools.ttLib.woff2`) from the
**latin-subset** faces already in this repo's dependency tree — `@fontsource/montserrat`
and `@fontsource/lato` (the same faces the site self-hosts, see
`src/layouts/BaseLayout.astro`). Latin-only, hence tiny (~217 KB total). The Montserrat
`name` tables were normalised to family `Montserrat` (the Fontsource subset files ship a
`Montserrat Thin` artifact name that fontconfig would not match).

**License:** both families are SIL Open Font License 1.1 — Montserrat © The Montserrat
Project Authors (github.com/JulietaUla/Montserrat); Lato © Łukasz Dziedzic (github.com/
latofonts). Neither declares a Reserved Font Name. Full text in `OFL.txt`.

CJK glyphs (zh cards) are **not** covered here — those come from the system
`fonts-noto-cjk` package the workflow installs (and caches) separately.
