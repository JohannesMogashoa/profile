# Portfolio V2 — Implementation Tracker

> Temporary GitHub-tracked checklist for the redesign of [johannesmogashoa.co.za](https://johannesmogashoa.co.za/).
> Source repository: [JohannesMogashoa/profile](https://github.com/JohannesMogashoa/profile) (default branch: `master`).
> Updated: 2026-10-17. **Planning only: tasks below are NOT completed.**

## Goals and constraints

- **Career:** Show credible engineering judgment, professional progression and real delivered work to recruiters and hiring managers.
- **Consulting:** Explain selected, clearly scoped software services and provide a low-friction asynchronous inquiry path.
- **Technical:** Retain **Astro + Cloudflare** unless a measured requirement justifies change. Adopt TypeScript incrementally. Prefer prerendering, native HTML/CSS and small interactive islands.
- **Integrity:** Do not invent employment outcomes, project completion, client endorsements or performance measurements. Verify sensitive work is safe to publish.
- **Change safety:** Deliver in focused branches/PRs; preserve the live site and existing URLs where practical.

## How to use this tracker

- Mark tasks `[x]` only after the listed acceptance evidence exists; leave blockers `[ ]`.
- Priority: **P0** release-blocking or high-impact; **P1** important; **P2** polish/iteration.
- Work roughly in milestone order. Within milestones, finish dependencies before UI polish.
- Each checked task should reference its PR/commit and test evidence in the PR description; if it becomes a GitHub issue, add the issue number beside the checkbox.
- Estimate effort once tasks are picked up; avoid treating these groups as fixed delivery promises.

## Current verified baseline

- Astro, React 18 integration, pnpm and Cloudflare adapter configured in `package.json`, `astro.config.mjs` and `wrangler.jsonc`.
- Single homepage route `src/pages/index.astro`; `output: "server"` and homepage `prerender = false`.
- `src/data/portfolio.js` exports `projects = []`; Projects component displays an empty-state placeholder.
- Articles loaded at request time from Dev.to in `src/lib/devto.js` using `cache: "no-store"` and a five-second timeout.
- Two résumé PDFs present under `public/`; `Layout.astro` uses generic title metadata.
- No current lint, typecheck or test scripts in `package.json`.
- Historical [React Review issue #1](https://github.com/JohannesMogashoa/profile/issues/1) refers to pre-Astro paths and requires revalidation.

## Milestones and acceptance checklists

### M0 — Baseline, scope and safety

**Outcome:** Know what is deployed, preserve functionality and establish an objective baseline.

- [ ] **M0-01 · P0** Audit routes, shared components, asset usage and Cloudflare deployment settings  
  _Done when:_ Document current behavior, dependencies, deployment steps and any unknowns.
- [ ] **M0-02 · P0** Record baseline desktop/mobile Lighthouse, accessibility and link checks  
  _Done when:_ Save reproducible findings and device/browser conditions; avoid claiming unmeasured scores.
- [ ] **M0-03 · P0** Confirm canonical domain and redirect policy  
  _Done when:_ Choose apex or www; verify redirects, environment variables, canonical URLs and README agree.
- [ ] **M0-04 · P0** Inventory content and remove unverifiable portfolio claims  
  _Done when:_ Confirm roles, dates, contact links, article URLs and consent to publish project details.
- [ ] **M0-05 · P0** Audit both public résumé PDFs and select one canonical current file  
  _Done when:_ Update résumé, remove or redirect outdated version, test download, avoid broken existing URLs.
- [ ] **M0-06 · P1** Review stale React Review issue #1 against current Astro code  
  _Done when:_ Close/supersede obsolete Next.js findings; carry only reproducible defects forward.

### M1 — Developer experience and architecture

**Outcome:** Create a safe, maintainable implementation foundation without unnecessary migration.

- [ ] **M1-01 · P0** Add Astro-compatible TypeScript configuration and migrate data models  
  _Done when:_ Enable astro check and incrementally type content and props; CI checks pass.
- [ ] **M1-02 · P0** Set up formatting, linting and typecheck scripts  
  _Done when:_ Document pnpm scripts; malformed code and type errors fail checks.
- [ ] **M1-03 · P0** Add GitHub Actions validation for PRs  
  _Done when:_ Run install, lint, typecheck, build and tests; use dependency caching and locked installs.
- [ ] **M1-04 · P1** Set up unit/component tests and Playwright smoke tests  
  _Done when:_ Cover navigation, key pages, project links, responsive menu and contact journey.
- [ ] **M1-05 · P1** Reorganize content into Astro content collections  
  _Done when:_ Project/article schemas validated, slugs stable, draft/status/featured metadata supported.
- [ ] **M1-06 · P1** Choose static-first rendering strategy with Cloudflare compatibility  
  _Done when:_ Prerender public content pages; keep only truly dynamic endpoints on server; verify preview/build.
- [ ] **M1-07 · P1** Remove unnecessary React hydration and dependencies where possible  
  _Done when:_ Prefer Astro/HTML for static UI; document retained React islands and measure bundle impact.
- [ ] **M1-08 · P2** Refresh README and AGENTS.md for actual contributor workflow  
  _Done when:_ Include stack, architecture, scripts, content authoring, review and deploy guidance.

### M2 — Design system and homepage

**Outcome:** Build a polished, accessible identity with strong professional positioning.

- [ ] **M2-01 · P0** Approve visual direction, design tokens, typography and spacing scale  
  _Done when:_ Define light/dark colors with validated contrast and reusable responsive tokens.
- [ ] **M2-02 · P0** Implement accessible global header, mobile navigation and footer  
  _Done when:_ All links work on all routes; keyboard, focus, current-page and touch behavior tested.
- [ ] **M2-03 · P0** Replace generic hero with Johannes-led positioning and two CTAs  
  _Done when:_ Name, role, technical focus, work CTA and contact CTA visible on mobile.
- [ ] **M2-04 · P0** Build featured-work section with meaningful empty/draft handling  
  _Done when:_ Display only verified featured projects; never show the existing 'fighting bugs' placeholder.
- [ ] **M2-05 · P1** Build capability pillars, compact experience, writing and consulting teasers  
  _Done when:_ Home tells a coherent career/consulting story without duplicating whole subpages.
- [ ] **M2-06 · P1** Refactor background animation and motion treatment  
  _Done when:_ Remove or simplify expensive distractions; reduced-motion preference honored.
- [ ] **M2-07 · P1** Create reusable card, tag, section, button and article components  
  _Done when:_ Components accept typed content and have responsive + focus states.
- [ ] **M2-08 · P1** Improve small-screen typography, layout and tap targets  
  _Done when:_ Verify 320, 375, 768, 1024 and 1440 px without clipped content or horizontal overflow.

### M3 — Work and professional proof

**Outcome:** Make engineering work and career progression verifiable.

- [ ] **M3-01 · P0** Build /work listing with clear project statuses  
  _Done when:_ Filters optional; show status, problem, stack and valid case-study links.
- [ ] **M3-02 · P0** Build /work/[slug] case study template  
  _Done when:_ Include overview, role, problem, constraints, architecture, trade-offs, results and reflections.
- [ ] **M3-03 · P0** Publish first verified engineering case study  
  _Done when:_ Include real screenshots/diagrams/code links where allowed and distinguish implemented from planned.
- [ ] **M3-04 · P0** Publish second verified engineering case study  
  _Done when:_ No fabricated impact metrics, customer testimonials or production status.
- [ ] **M3-05 · P0** Build /about with current career timeline and resume CTA  
  _Done when:_ Nintex and prior experience represented accurately; responsibilities and outcomes corroborated.
- [ ] **M3-06 · P1** Replace technology-logo inventory with focused skills and evidence  
  _Done when:_ Group core engineering, architecture and delivery skills; link skills to real work.
- [ ] **M3-07 · P1** Add project images, alt text and responsive image handling  
  _Done when:_ Images sourced from real work or explicitly labeled illustrative, optimized and accessible.

### M4 — Writing and consulting journeys

**Outcome:** Support thought leadership and selected, qualified project inquiries.

- [ ] **M4-01 · P1** Build /writing index and article detail or external-link strategy  
  _Done when:_ Categories, published dates, descriptions and canonical policy documented.
- [ ] **M4-02 · P1** Make Dev.to integration resilient  
  _Done when:_ Use build-time fetch or cached fallback, validated payloads and useful failure behavior; no request-time blank section.
- [ ] **M4-03 · P0** Build /services with focused offers and engagement boundaries  
  _Done when:_ State custom applications, integrations, automation and reviews only if genuinely offered.
- [ ] **M4-04 · P0** Build /contact with two clear paths: hiring and project inquiries  
  _Done when:_ Recruiter and client flows obvious; email, LinkedIn and résumé discoverable.
- [ ] **M4-05 · P1** Implement accessible, spam-resistant inquiry form if required  
  _Done when:_ Server validates input, limits abuse, avoids secrets in repo and gives success/error feedback.
- [ ] **M4-06 · P1** Create privacy notice and data retention approach for inquiries/analytics  
  _Done when:_ State what is collected, why, how long it is retained and who receives it.

### M5 — SEO, performance, security and launch

**Outcome:** Release without regressions and measure useful outcomes.

- [ ] **M5-01 · P0** Configure title, descriptions, canonicals and social preview imagery per page  
  _Done when:_ Correct URL/title/description on each route and working Open Graph previews.
- [ ] **M5-02 · P0** Validate sitemap, robots, redirects and structured data  
  _Done when:_ All indexable routes discoverable; no drafts indexed; redirects tested.
- [ ] **M5-03 · P0** Audit accessibility against WCAG 2.2 AA  
  _Done when:_ Keyboard and screen-reader manual passes plus automated checks; document exceptions.
- [ ] **M5-04 · P0** Run Core Web Vitals and cross-browser/mobile performance checks  
  _Done when:_ Record LCP/INP/CLS where field data exists; address measurable bottlenecks.
- [ ] **M5-05 · P0** Test build, Cloudflare preview, contact flow and deployment/rollback  
  _Done when:_ Production-ready deployment with no broken assets or unexpected server errors.
- [ ] **M5-06 · P1** Add privacy-respecting measurement for meaningful conversions  
  _Done when:_ Track project engagement, résumé clicks and qualified inquiries without overstating outcomes.
- [ ] **M5-07 · P1** Review dependencies, headers, external links and asset privacy  
  _Done when:_ Check supply chain, safe link rel attributes, secrets, and accidentally exposed files.

### M6 — Post-launch iteration

**Outcome:** Evolve based on evidence rather than adding features for their own sake.

- [ ] **M6-01 · P1** Collect first 30 days of baseline usage and inquiries  
  _Done when:_ Capture aggregated trends and qualified outcomes, respecting privacy.
- [ ] **M6-02 · P2** Publish one substantive architecture/engineering article  
  _Done when:_ Explain a real design choice and lessons, linking to a case study when possible.
- [ ] **M6-03 · P2** Prioritize follow-up improvements using measured friction  
  _Done when:_ Document hypothesis, expected impact and before/after evidence for each change.

## Release gates

- [ ] All **P0** tasks in M0–M5 completed or explicitly waived with documented reasoning.
- [ ] At least **two substantive, verifiable** project case studies are published.
- [ ] About, Work, Services and Contact routes load correctly and support the two visitor journeys.
- [ ] Current résumé is linked; old URLs redirect or remain intentionally compatible.
- [ ] CI passes: lint, typecheck, build, tests; Cloudflare deployment and rollback validated.
- [ ] SEO/social previews, keyboard navigation, responsive layouts, and privacy/security reviewed.
- [ ] Baseline/after measurements recorded; no unverified claims presented as achievements.

## Recommended first work batch

1. **M0-01 → M0-05:** verify deployment, data and résumé before redesigning.
2. **M1-01 → M1-03:** introduce safe code-quality gates.
3. **M2-01 → M2-04:** ship the visual identity, navigation, hero and honest featured-work section.
4. **M3-01 → M3-05:** produce actual career evidence and case studies.
5. **M4 and M5:** enable consulting conversion and launch with quality evidence.

## Future move to GitHub Issues

When individual work begins, convert each checkbox into one issue with its stable ID, title, scope, dependency, acceptance criterion and test evidence. Keep this file as a milestone index or archive it after issue migration. Avoid duplicate open issues.
