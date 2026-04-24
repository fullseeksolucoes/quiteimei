# apps/web Claude Notes

Read `AGENTS.md` in this directory before changing the web app.

This package is `@meicontrol/web`, a Next.js 16.2.4 App Router frontend with React 19, Tailwind CSS 4, and Clerk auth. Treat Next.js behavior as version-sensitive and check the local docs in `node_modules/next/dist/docs/` before changing Next-specific APIs.

Run focused commands from the repo root:

```bash
pnpm turbo run dev --filter=@meicontrol/web
pnpm turbo run lint --filter=@meicontrol/web
pnpm turbo run build --filter=@meicontrol/web
```
