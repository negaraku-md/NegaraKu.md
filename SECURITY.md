# Security Policy

## Reporting a vulnerability

NegaraKu.md is a static, open-source site with no user accounts or server-side
database, so the attack surface is small. If you nonetheless discover a security
issue (e.g. a supply-chain problem in a dependency, an XSS vector in rendered
content, or a leaked secret), please report it responsibly:

- **Do not** open a public issue for a sensitive vulnerability.
- Email the maintainers or open a private security advisory on GitHub
  (Security → Advisories → Report a vulnerability).

Please include steps to reproduce and the potential impact. We aim to
acknowledge reports within a few days.

## Scope

- The site source code (Astro, build scripts).
- The MCP server under `mcp/`.
- GitHub Actions workflows (including the Facebook auto-post workflow, which
  relies on the `FB_PAGE_ACCESS_TOKEN` secret — never commit tokens).

Content inaccuracies are **not** security issues — use the "Report an issue"
link on any article or open a normal content issue.
