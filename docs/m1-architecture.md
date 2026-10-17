# M1 developer experience and architecture

Recorded on 2026-10-17. This document captures the implementation evidence and remaining remote
verification for the Portfolio V2 M1 milestone.

## TypeScript and quality gates

- `tsconfig.json` extends Astro's strict template and includes generated Astro types.
- Portfolio timeline data is typed in `src/data/portfolio.ts`.
- Content collection schemas type and validate article and project metadata.
- Shared Astro components define explicit prop interfaces.
- `pnpm typecheck` runs `astro check`; the latest run completed with zero errors, warnings, or hints.
- Prettier, ESLint, Vitest, and the production build are composed by `pnpm verify`.
- TypeScript is pinned to 6.0.3 because the current Astro checker and TypeScript ESLint releases do
  not yet support TypeScript 7. `pnpm peers check` reports no dependency conflicts.

## Content collections

`src/content.config.ts` defines two build-time collections:

- `articles` requires a title, description, publication date, canonical URL, and validated optional
  image, tags, and draft state.
- `projects` requires a title, description, publication status, technology stack, and validated
  draft/featured/link metadata.

The four existing DEV Community articles are local metadata entries and no longer require an API
request while serving the homepage. Aluna Studio, HouseKeeper, and Ascendia are stable draft entries;
they remain excluded from the homepage until their case studies are reviewed.

## Static-first and Cloudflare

- Astro now builds in `static` mode and prerenders the homepage.
- The request-time DEV Community fetch and Cloudflare SSR adapter were removed.
- Wrangler uploads `dist/` through its static-assets configuration; no Worker entry point or Node.js
  compatibility mode is required.
- The production build emits one static page plus the sitemap and public assets.
- `pnpm build` and a production server exercised through Playwright both pass.
- `pnpm cf:preview` was started during verification, but the execution sandbox blocked local socket
  access. The process was stopped cleanly, and the Wrangler preview gate remains open until it can
  be exercised outside the sandbox.

Dynamic endpoints should be introduced only when a feature cannot be implemented safely at build
time. Any future on-demand route must restore an appropriate Cloudflare adapter deliberately.

## React removal and bundle result

The repository had no hydrated React components. React existed only to render `react-icons` during
the Astro build, which added React, React DOM, the Astro React integration, and Vite workarounds.
Those packages and configuration are removed. `Icon.astro` now renders the required inline SVGs.

The current `dist/_astro` output contains CSS only and no JavaScript bundle. The remaining timeline
behaviour is a small inline native browser script. No React islands are retained.

## Tests and CI status

- Vitest covers typed career data and Astro header rendering.
- Playwright runs the production build in desktop Chromium and a Pixel 5 profile.
- Four browser smoke tests pass, covering the existing navigation, contact email, canonical résumé,
  current timeline, and horizontal-overflow regression.
- `.github/workflows/ci.yml` performs a frozen pnpm install, cached Node setup, `pnpm verify`, browser
  installation, and Playwright tests for pull requests and pushes to `master`.

The workflow has not run remotely because these changes have not been pushed. M1-03 remains open
until the first GitHub Actions run passes. M1-04 also remains open because `/work`, other key routes,
published project links, and a responsive menu do not exist yet; their smoke coverage belongs with
the corresponding M2-M4 implementations.
