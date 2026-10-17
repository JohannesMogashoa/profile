# Personal Portfolio

Johannes Mogashoa's static Astro portfolio, deployed to Cloudflare Workers as static assets.

## Stack and architecture

- Astro 7 with strict TypeScript and native Astro components.
- Build-time content collections for articles and project drafts.
- Static HTML output with no application server or React hydration bundle.
- Native HTML, CSS, inline SVG icons, and one small timeline script.
- Cloudflare Workers static assets configured through `wrangler.jsonc`.

The public site currently has one route, `/`. Articles and project metadata are validated during
the build. Public pages must remain prerendered unless a measured requirement justifies an
on-demand route.

## Requirements

- Node.js 24
- pnpm 11.20.0
- Python 3 for the local static server used by Playwright

## Development

```bash
pnpm install
pnpm dev
```

`PUBLIC_SITE_URL` defaults to `https://johannesmogashoa.co.za`. Copy `.env.example` to a local
environment file only when a preview needs a different canonical origin.

## Quality commands

```bash
pnpm format         # apply Prettier
pnpm format:check   # verify formatting
pnpm lint           # ESLint for Astro and TypeScript
pnpm typecheck      # Astro diagnostics and TypeScript
pnpm test           # Vitest unit/component tests
pnpm build          # typecheck and create the static production build
pnpm test:e2e       # build and run Playwright in desktop/mobile Chromium
pnpm verify         # formatting, linting, types, unit tests, and build
```

Pull requests run `pnpm verify` and the Playwright suite in GitHub Actions.

## Content authoring

Content schemas live in `src/content.config.ts`.

- Add external writing metadata under `src/content/articles/`.
- Add portfolio work under `src/content/projects/`.
- Keep unreviewed work as `draft: true` and `featured: false`.
- Use only verified project status, links, technologies, and outcomes.
- Do not publish employer/client information until its publication approval is recorded.

Collection validation runs through `pnpm typecheck` and `pnpm build`.

## Cloudflare preview and deployment

```bash
pnpm cf:preview
pnpm cf:deploy
```

Wrangler uploads `dist/` as static assets. The apex domain
`https://johannesmogashoa.co.za` is canonical; `www` should redirect to it.

Deployment credentials and environment-specific configuration must remain outside the repository.
