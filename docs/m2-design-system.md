# M2 design system and homepage

Verified: 2026-10-17

## Direction

The portfolio uses an engineering-editorial visual language: strong typographic hierarchy, precise
rules and grids, restrained technical motifs, and a single blue accent. The result is deliberately
professional and product-focused rather than a generic developer-template aesthetic.

## Tokens

`src/styles/global.css` defines paired light and dark palettes, semantic surface/text/line/accent
tokens, a responsive spacing scale, a 1180 px content measure, and shared motion/focus behaviour.
The palette provides high-separation foreground and surface combinations; automated browser checks
cover interactions and viewport containment, while final visual contrast review remains part of the
M2 handoff.

The default follows the operating-system colour preference. The header control applies and retains
an explicit visitor choice in local storage.

## Homepage system

- Positioning leads with Johannes, his .NET and TypeScript focus, and two clear actions.
- Capability pillars connect backend, frontend, and cloud delivery without repeating the CV.
- Featured work fails safely: unpublished case studies produce an intentional review message and
  link to the verified GitHub profile, never the former placeholder.
- Experience is compact and uses CV-backed roles.
- Writing surfaces the three newest verified DEV Community entries.
- The closing contact panel supports an email journey without claiming unverified availability.

## Accessibility and responsive behaviour

- Skip link, visible focus states, semantic landmarks, and 44 px minimum header controls.
- Mobile navigation exposes state with `aria-expanded`, closes after navigation, and supports Escape.
- Motion is limited to a small status pulse and disabled with `prefers-reduced-motion`.
- Playwright checks 320, 375, 768, 1024, and 1440 px layouts for horizontal overflow.
