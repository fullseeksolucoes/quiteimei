<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Web App Rules

This app is `@meicontrol/web`, a Next.js 16.2.4 App Router frontend using React 19, Tailwind CSS 4, and Clerk.

## Route Layout

- Public marketing pages live in `src/app/(marketing)`.
- Authenticated product pages live in `src/app/(app)`.
- `src/middleware.ts` protects `/(app)(.*)` with Clerk. Keep new authenticated pages inside that route group unless the middleware is updated intentionally.

## Auth

- `src/app/layout.tsx` wraps the app with `ClerkProvider`.
- Use Clerk Next.js APIs from `@clerk/nextjs` or `@clerk/nextjs/server`.
- Check current Clerk and Next docs before changing middleware or auth behavior.

## UI

- Preserve `pt-BR` user-facing copy.
- Reuse shared components from `@meicontrol/ui` when the component is not app-specific.
- Put shared fiscal types in `@meicontrol/types`; avoid redefining enums in the app.
- Tailwind CSS 4 is configured through `postcss.config.mjs`; avoid adding legacy Tailwind 3 config unless required.

## Validation

Run focused validation from the repo root:

```bash
pnpm turbo run lint --filter=@meicontrol/web
pnpm turbo run build --filter=@meicontrol/web
```
