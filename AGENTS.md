# Repository Guidelines

## Project structure

This repository is a static Astro portfolio deployed to Cloudflare Workers.

- `src/pages/` contains Astro routes.
- `src/components/` contains native Astro page sections and shared UI.
- `src/content/articles/` and `src/content/projects/` contain validated content entries.
- `src/content.config.ts` owns article and project schemas.
- `src/layouts/`, `src/styles/`, and `src/data/` contain shared layouts, CSS, and typed data.
- `tests/e2e/` contains Playwright production smoke tests.
- `public/` contains static assets, including compatibility résumé URLs.

Prefer prerendered Astro components, native HTML/CSS, and small browser scripts. Do not add a UI
framework or on-demand route without a measured requirement.

## Commands

Use pnpm 11.20.0 with Node.js 24:

- `pnpm install` - install the locked dependency graph.
- `pnpm dev` - start the Astro development server.
- `pnpm format` / `pnpm format:check` - apply or check Prettier.
- `pnpm lint` - run ESLint.
- `pnpm typecheck` - run Astro and TypeScript diagnostics.
- `pnpm test` - run Vitest unit/component tests.
- `pnpm build` - typecheck and generate the static site.
- `pnpm test:e2e` - build and run Playwright desktop/mobile smoke tests.
- `pnpm verify` - run formatting, linting, types, unit tests, and build.
- `pnpm cf:preview` / `pnpm cf:deploy` - preview or deploy static assets with Wrangler.

Run `pnpm verify`, `pnpm test:e2e`, and `git diff --check` before handoff.

## Code and content conventions

Use tabs, semicolons, double quotes, trailing commas, PascalCase Astro components, camelCase
variables, and kebab-case CSS classes. Add explicit Astro prop interfaces and typed shared data.

Author articles and projects through their content collections. Keep unreviewed projects as drafts,
preserve stable entry IDs, and never invent outcomes, client approval, production status, or metrics.
Reference public assets with root-relative paths.

## Pull requests and deployment

Keep commits focused and imperative, optionally using prefixes such as `feat:` or `chore:`. Pull
requests must explain visible/content changes, list verification commands, link related issues, and
include screenshots for visual changes. Call out résumé or other public-asset updates.

GitHub Actions validates the locked install, project verification, and Playwright Chromium suite.
Never commit credentials or environment-specific secrets. Review generated output and public assets
for sensitive information before deployment.
