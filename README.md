# Personal Portfolio

Astro portfolio site powered by pnpm and deployed with the Cloudflare adapter.

## Development

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
pnpm preview
```

`PUBLIC_SITE_URL` defaults to `https://www.johannesmogashoa.co.za` and can be
overridden for previews or alternate deployment environments.

## Cloudflare deployment

```bash
pnpm cf:deploy
```
