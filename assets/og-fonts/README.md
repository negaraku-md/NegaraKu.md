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

## Non-Latin script faces (vendored)

As non-Latin languages launched, their OG-card faces were vendored here too and
registered the same way (`cp assets/og-fonts/*.ttf ~/.fonts` + `fc-cache`). They
are referenced by **family name** in the `card-brand.mjs` font stacks and resolved
via fontconfig — **never base64-embedded** in the SVG (an embedded data-URI
`@font-face`, especially a variable-weight one, segfaults librsvg inside `sharp`
on the CI runner; this took a production deploy down during the Arabic launch).

| File | Family (fontconfig) | Script | Added |
|------|--------------------|--------|-------|
| `NotoNaskhArabic-Regular.ttf`   | Noto Naskh Arabic    | Arabic (ar, RTL)     | 2026-10-13 |

**Provenance (Arabic):** Noto Naskh Arabic, SIL OFL 1.1 © The Noto Project Authors.

CJK glyphs (zh cards) and the **Indic scripts (Tamil `ta`, Thai `th`, Devanagari
`hi`)** are **not** vendored here — they resolve from the system `fonts-noto-cjk`
+ `fonts-noto-core` packages the workflow installs (and caches). Devanagari was
briefly vendored from a Google static TTF during the Hindi launch, but that
specific file crashed CI's freetype (`svgload_buffer: SVG rendering failed` /
`FreetypeError`) during OG rendering; the system `fonts-noto-core` Noto Sans
Devanagari (the same package that provides the working Tamil/Thai faces) renders
it correctly instead. So: only vendor a face here when it is NOT already in the
Noto apt packages (as with Naskh Arabic); otherwise rely on the system font.
