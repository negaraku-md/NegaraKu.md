# Release notes — v0.1.0 (draft, for the user to run `gh release create`)

> **Why this file exists:** opening a public GitHub Release is an outward-facing
> action, so the `gh release create` command is user-run (the auto-mode classifier
> blocks "Create Public Surface"). These are the drafted notes; the command is at
> the bottom. This is the last open item of the OSS operating P1/P2 work — issues,
> Discussions, governance files and RELEASING.md are already live.

---

## NegaraKu.md v0.1.0 — first tagged release

NegaraKu.md is an open, AI-friendly knowledge base about Malaysia — ~1,125 topics
across **13 languages** (Bahasa Melayu, English, 中文, தமிழ், 日本語, 한국어, ไทย,
Tiếng Việt, Bahasa Indonesia, العربية, हिन्दी, Español, Français), readable by
both people and large language models, built with Astro and deployed to GitHub
Pages at <https://negaraku.md>.

This first tagged release marks the point where the project **operates in the open**
as a *stewarded open knowledge base*: open contribution with a mandatory editorial
review gate (sources, neutrality, a hard gate on sensitive content, four-eyes) and
a named steward. The review gate is the product — the public trust badges are only
honest because it exists.

### What's in place
- **Governance & contribution:** `GOVERNANCE.md` (reader → contributor → reviewer →
  steward), `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `ROADMAP.md`,
  `RELEASING.md`, and `CITATION.cff` for citing the project.
- **Open on-ramps:** good-first-issues (#4–#7), seeded Discussions, issue templates,
  and a non-dev contributor path.
- **Content pipeline:** every article carries sources, a review cadence, and a
  revision history; translations are freshness-tracked.
- **AI-friendly distribution:** per-locale `llms.txt` / `llms-full.txt`, per-article
  Markdown endpoints, an MCP surface, structured data, and an open
  [Hugging Face dataset](https://huggingface.co/datasets/negaraku-md/negaraku-md)
  (CC BY-SA 4.0).
- **Sector coverage:** a complete Industries of Malaysia atlas — 44 sector guides,
  each in all 13 languages.

### Licensing
- Content: **CC BY-SA 4.0**
- Code: see `LICENSE` in the repository.

### Links
- Site: <https://negaraku.md>
- Dataset: <https://huggingface.co/datasets/negaraku-md/negaraku-md>
- Wikidata: [Q141449495](https://www.wikidata.org/wiki/Q141449495)
- Governance: `GOVERNANCE.md` · Roadmap: `ROADMAP.md` · Cite: `CITATION.cff`

---

## Command for the user to run

From the repo root, once this is pushed:

```bash
git tag -a v0.1.0 -m "NegaraKu.md v0.1.0" && git push origin v0.1.0
gh release create v0.1.0 --title "NegaraKu.md v0.1.0" --notes-file docs/plans/release-v0.1.0-notes.md --latest
```

> Tip: pass `--verify-tag` if you want `gh` to confirm the tag exists first. To make
> it a non-latest/pre-release instead, swap `--latest` for `--prerelease`.
