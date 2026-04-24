# AGENTS.md

Use this guide when working in the MeiControl repository.

## Project Summary

MeiControl is a fiscal management MicroSaaS for Brazilian MEI/ME businesses. It combines a Next.js web app, a NestJS API, shared fiscal types, shared React components, and a Prisma/PostgreSQL database package.

## Workspace Layout

- `apps/web`: Next.js 16, React 19, Tailwind CSS 4, Clerk auth.
- `apps/api`: NestJS 11, Passport JWT, JWKS Clerk validation, Prisma, Jest.
- `packages/database`: Prisma schema and Prisma client exports.
- `packages/ui`: Shared React components.
- `packages/types`: Shared TypeScript fiscal domain types.

## Commands

Use `pnpm` from the repo root.

```bash
pnpm dev
pnpm build
pnpm lint
pnpm db:generate
pnpm db:push
```

Use Turbo filters for focused work:

```bash
pnpm turbo run dev --filter=@meicontrol/web
pnpm turbo run dev --filter=@meicontrol/api
pnpm turbo run build --filter=@meicontrol/web
pnpm turbo run lint --filter=@meicontrol/api
pnpm --filter @meicontrol/api test
pnpm --filter @meicontrol/database db:migrate
```

## Agent Rules

- Use `pnpm`, not `npm`; ignore `package-lock.json` unless the user asks about it.
- Keep fiscal and subscription enums in `@meicontrol/types`.
- Keep Prisma schema changes in `packages/database/prisma/schema.prisma`.
- Regenerate Prisma after schema changes with `pnpm db:generate`.
- Protect authenticated API routes with `ClerkAuthGuard` and read the user with `@CurrentUser()`.
- Keep authenticated web routes under `apps/web/src/app/(app)` so the existing Clerk middleware protects them.
- Keep public marketing routes under `apps/web/src/app/(marketing)`.
- Validate changes with the smallest relevant command before handoff.

## Next.js 16 Note

The web app is on Next.js 16.2.4. Check local Next docs under `node_modules/next/dist/docs/` before changing Next-specific APIs, routing, middleware, caching, or server action behavior.
