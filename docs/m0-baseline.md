# M0 baseline audit

Recorded on 2026-10-17 from Johannesburg, South Africa. This document is the
evidence record for the Portfolio V2 M0 milestone. It describes the current
site without treating unverified personal or employment claims as confirmed.

## M0-01: routes, components, assets, and deployment

### Current behaviour

- The repository has one route, `/`, implemented by `src/pages/index.astro`.
  It is server-rendered (`output: "server"` and `prerender = false`).
- The page renders `Header`, `Hero`, `BackgroundAnimation`, `Timeline`,
  `Articles`, `Technologies`, `Projects`, and `Footer` inside `Layout`.
- The header links to the `#about`, `#articles`, and `#tech` sections. There is
  no header link to the existing `#projects` section.
- Articles are fetched from the DEV Community API on every request with a
  five-second timeout. Invalid responses and failures become an empty-state
  message.
- Project data is empty, so the page displays the current placeholder.
- The career timeline is the only browser script. It manages active items,
  mobile scrolling, timeline dots, and resize behaviour.

### Assets

- `/favicon.ico` is referenced by the layout.
- `/Johannes-Mogashoa-Resume.pdf` is the linked résumé download.
- `/Johannes Mogashoa Resume.pdf` is an unlinked compatibility copy. Both URLs
  now serve the owner-provided 2026 CV and are byte-for-byte identical
  (SHA-256 `a3b281d86682e25a637ef8eafd68b1e3f7b60d77e33199513e4ace11c2b059e1`).
- `/images/anony-sender.png` is tracked but unreferenced.
- Article images are hosted by DEV Community; Space Grotesk is loaded from
  Google Fonts; social icons are rendered from `react-icons`.

### Dependencies and deployment

- Astro 7, React 18, the Astro Cloudflare adapter, Astro sitemap integration,
  `react-icons`, and Wrangler are installed from `pnpm-lock.yaml`.
- `astro.config.mjs` uses the Cloudflare adapter and defaults `site` to
  `https://johannesmogashoa.co.za`. `PUBLIC_SITE_URL` can override it.
- `wrangler.jsonc` deploys the Astro Cloudflare server entry point and binds
  `./dist` as `ASSETS`; the compatibility date is `2026-08-07` with
  `nodejs_compat` enabled.
- The documented deployment command is `pnpm cf:deploy`, which runs the Astro
  build and `wrangler deploy`. No GitHub Actions deployment workflow is
  tracked.
- The live apex homepage, `robots.txt`, and sitemap index returned HTTP 200.
  Cloudflare served the apex. The `www` hostname returned HTTP 307 to the apex
  through Vercel before Cloudflare served the destination.
- The exact Cloudflare project settings, production environment variables,
  deployment commit, and rollback process are not represented in this
  repository and remain operational unknowns.

## M0-02: measured baseline

Lighthouse 13.0.1 was run against
`https://johannesmogashoa.co.za/` on 2026-10-17 using cached Chromium 153 in
headless mode. Scores are lab measurements and may vary between runs.

| Profile | Viewport                                  | Performance | Accessibility | Best practices | SEO |
| ------- | ----------------------------------------- | ----------: | ------------: | -------------: | --: |
| Mobile  | 412 × 823, DPR 1.75, simulated throttling |          97 |            91 |            100 | 100 |
| Desktop | 1350 × 940, DPR 1, simulated throttling   |          98 |            95 |            100 | 100 |

Measured performance details:

- Mobile: FCP 2.1 s, LCP 2.1 s, Speed Index 3.0 s, and a measured 840 ms
  initial document response.
- Desktop: FCP 0.9 s, LCP 0.9 s, and Speed Index 0.9 s.
- Both profiles reported render-blocking requests, image-delivery savings,
  legacy JavaScript, and cache-lifetime opportunities.

Automated accessibility findings:

- The footer `Email` heading has insufficient contrast (3.8:1 measured;
  4.5:1 required for its size and weight).
- Timeline buttons have visible text that does not match their accessible
  names.
- Mobile timeline dots are 11–17.6 px with inadequate spacing instead of the
  24 px minimum expected by the audit.

Linkinator 7.5.1 recursively checked the public homepage on 2026-10-17. All 17
links it evaluated returned HTTP 200, including four DEV Community articles,
the linked résumé, favicon, stylesheet, sitemap, GitHub, Twitter, article
images, Google Fonts, and the Cloudflare beacon. LinkedIn blocks automated
requests with HTTP 999, so its profile URL requires a manual browser check.
Both résumé filename variants returned HTTP 200 when checked directly.

Reproduction commands:

```bash
CHROME_PATH=/path/to/chrome npx --yes lighthouse@13.0.1 \
  https://johannesmogashoa.co.za/ --quiet \
  --chrome-flags="--headless --no-sandbox --disable-dev-shm-usage" \
  --only-categories=performance,accessibility,best-practices,seo

CHROME_PATH=/path/to/chrome npx --yes lighthouse@13.0.1 \
  https://johannesmogashoa.co.za/ --quiet --preset=desktop \
  --chrome-flags="--headless --no-sandbox --disable-dev-shm-usage" \
  --only-categories=performance,accessibility,best-practices,seo

npx --yes linkinator@7.5.1 https://johannesmogashoa.co.za/ \
  --recurse --format json
```

## M0-03: canonical domain and redirects

The apex `https://johannesmogashoa.co.za` is canonical.

- The live `www` homepage redirects to the apex with HTTP 307.
- The layout emits an apex canonical URL using Astro's configured `site`.
- The generated sitemap uses apex URLs.
- `astro.config.mjs`, `README.md`, and `public/robots.txt` now agree on apex.
- There are no tracked environment files or workflows that override
  `PUBLIC_SITE_URL`. The live canonical output matches the source default.

The redirect is currently temporary (307) and crosses a Vercel-served `www`
host before reaching the Cloudflare-served apex. Converting that to a direct
permanent redirect is a future DNS/platform task, not a source-code change in
this audit.

## M0-04: verified content inventory

The public content currently includes:

- six CV-backed timeline entries covering education and roles from 2020 to the
  present;
- a CV-backed software engineering biography;
- frontend, backend, cloud, and delivery technology lists;
- four live DEV Community articles loaded at request time;
- email, GitHub, and LinkedIn contact links; and
- no published projects.

The owner-provided OfferZen CV created on 2026-09-22 verifies the current
timeline roles and dates, biography, technologies, email address, GitHub,
LinkedIn, and portfolio URL. The website content was aligned to that source on
2026-10-17, and the Twitter link was removed because it is absent from the
current CV. The four DEV Community article URLs remain live and associated with
the username linked from the CV.

On 2026-10-17, the owner explicitly approved the CV's Aluna Studio,
HouseKeeper, and Ascendia project details for publication on the portfolio.
This approval establishes publishability; the project details remain
unpublished in M0 and will be introduced only through the scoped featured-work
and case-study milestones.

## M0-05: résumé audit and canonical file

Both public URLs now serve the same seven-page OfferZen CV created on
2026-09-22 and supplied by the owner on 2026-10-17. It lists Nintex as the
current role and aligns with the updated website timeline. The hyphenated URL
remains the linked canonical filename; the space-containing legacy URL is
retained as a compatibility copy so existing links continue to work.

## M0-06: React Review issue #1

[Issue #1](https://github.com/JohannesMogashoa/profile/issues/1) audited commit
`df5a91b`, before the Astro migration. All named Next.js and React source paths
were deleted by commit `504d1b8`; its framework-specific diagnostics are
obsolete.

Two themes remain reproducible in the Astro implementation and should be
carried forward independently:

- `Timeline.astro` registers `scroll` and `resize` listeners without teardown.
- `BackgroundAnimation.astro` retains high-precision SVG path data.

The current Lighthouse findings above supersede the issue's accessibility and
frontend quality baseline. Issue #1 was closed as completed on 2026-10-17 with
an owner-authored comment explaining the Astro supersession and naming the two
reproducible follow-ups above.
