# Repository Guidelines

## Project Structure & Module Organization

This repository is an Astro personal portfolio using pnpm, Astro components, and the Cloudflare adapter.

- `src/pages/` contains Astro routes (`index.astro`).
- `src/components/` contains Astro page sections such as `Hero`, `Projects`, `Articles`, and `Timeline`.
- `src/layouts/` contains shared page layouts, while `src/styles/`, `src/data/`, and `src/lib/` hold global styles, portfolio data, and server helpers.
- `public/` contains static images, the favicon, and resume PDFs. Reference these assets by root-relative paths.

## Build, Test, and Development Commands

Use pnpm, consistent with the checked-in `pnpm-lock.yaml`:

- `pnpm install` — install dependencies.
- `pnpm dev` — start the local Astro development server with hot reload.
- `pnpm build` — create the Cloudflare-compatible production build.
- `pnpm preview` — serve the production build locally after `pnpm build`.

There is currently no test or lint script in `package.json`; manually verify changed sections in a browser and keep the build passing.

## Coding Style & Naming Conventions

Follow the existing Astro/JavaScript style: tabs for indentation, semicolons, trailing commas where natural, and double-quoted imports/strings. Use PascalCase for Astro component names, camelCase for variables and functions, and kebab-case CSS classes. Keep browser-only behavior isolated to small client scripts or explicitly hydrated islands.

## Testing Guidelines

No automated testing framework or coverage threshold is configured. For UI changes, run `pnpm dev`, check responsive layouts and navigation, and run `pnpm build` before submitting. If tests are added, place them near the relevant component and use clear names describing the behavior under test.

## Commit & Pull Request Guidelines

Recent commits are short, imperative, and sometimes use prefixes such as `feat:` and `chore:` (for example, `chore: update resume & site content`). Follow that pattern and keep each commit focused. Pull requests should explain the visible or content change, list verification commands, link related issues when applicable, and include screenshots or recordings for visual changes. Call out updates to resume PDFs or other public assets explicitly.

## Security & Configuration Tips

Do not commit secrets or environment-specific credentials. Keep public assets free of sensitive personal information beyond what the portfolio intentionally publishes, and review generated/static output before committing it.
