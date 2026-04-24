# CLAUDE.md

This file provides guidance to Claude Code and other coding agents working in this repository.

## Product Context

MeiControl is a fiscal management MicroSaaS for Brazilian MEI/ME businesses. The product tracks company revenue, fiscal obligations, declaration status, and reminder channels such as WhatsApp before important deadlines.

Optimize for Brazilian fiscal language, `pt-BR` formatting, and workflows around MEI/ME obligations such as DAS, DASN, DEFIS, DCTF, eSocial, revenue limits, CNPJ data, and pending obligations.

## Repository Shape

This is a `pnpm` 10 workspace managed by Turborepo.

- `apps/web`: Next.js 16 app using React 19, Tailwind CSS 4, and Clerk.
- `apps/api`: NestJS 11 API using Passport JWT, JWKS validation, Prisma, Jest, and global validation pipes.
- `packages/database`: Prisma schema, Prisma client exports, and database helper entrypoint.
- `packages/ui`: Shared React UI components consumed by apps.
- `packages/types`: Shared fiscal/domain TypeScript enums and interfaces.

Use workspace dependencies with `workspace:*` for local packages. Keep cross-app domain types in `@meicontrol/types`; do not duplicate fiscal enums in apps.

## Package Manager

Use `pnpm`, not `npm` or `yarn`. The project has a stray `package-lock.json`; do not use it as the source of truth. The lockfile that matters is `pnpm-lock.yaml`.

## How To Use Turbo

Run these from the repository root:

```bash
pnpm dev
pnpm build
pnpm lint
pnpm db:generate
pnpm db:push
```

The root scripts call `turbo run ...`. `turbo.json` defines:

- `dev`: persistent and uncached, starts workspace dev servers.
- `build`: depends on upstream package builds and caches `.next/**` and `dist/**`.
- `lint`: runs package lint tasks after dependency package lint tasks.
- `db:generate` and `db:push`: uncached Prisma commands filtered to `@meicontrol/database` by the root scripts.

Useful targeted commands:

```bash
pnpm turbo run dev --filter=@meicontrol/web
pnpm turbo run dev --filter=@meicontrol/api
pnpm turbo run build --filter=@meicontrol/web
pnpm turbo run lint --filter=@meicontrol/api
pnpm --filter @meicontrol/api test
pnpm --filter @meicontrol/database db:migrate
pnpm --filter @meicontrol/database db:studio
```

Prefer filtered Turbo commands when changing one workspace package. Use unfiltered `pnpm build` or `pnpm lint` before larger handoffs.

## Web App

`apps/web` uses the App Router. Public marketing routes live under `apps/web/src/app/(marketing)`, and authenticated application routes live under `apps/web/src/app/(app)`.

Clerk wraps the app in `apps/web/src/app/layout.tsx`. `apps/web/src/middleware.ts` protects `/(app)(.*)` through `clerkMiddleware` and `auth.protect()`.

Next.js is pinned to 16.2.4. Treat this as newer than common model knowledge. Before changing Next-specific APIs, check `apps/web/AGENTS.md` and current local docs in `node_modules/next/dist/docs/`.

## API App

`apps/api` uses NestJS modules and constructor injection. Keep feature code grouped by module under `src/<feature>`.

`apps/api/src/main.ts` sets the global `/api` prefix, enables CORS for `WEB_URL` or `http://localhost:3000`, and installs `ValidationPipe` with `whitelist` and `transform`.

Authentication uses Clerk-issued JWTs:

- `ClerkStrategy` validates RS256 JWTs through `CLERK_JWKS_URL` and `CLERK_ISSUER`.
- Protected endpoints use `@UseGuards(ClerkAuthGuard)`.
- Request user data is accessed with `@CurrentUser()`.
- Persisted users use the Clerk user id as `User.id`.

Run API tests with:

```bash
pnpm --filter @meicontrol/api test
pnpm --filter @meicontrol/api test:e2e
pnpm --filter @meicontrol/api test:cov
```

## Database

PostgreSQL is accessed through Prisma. The schema lives at `packages/database/prisma/schema.prisma`.

Core models:

- `User`: keyed by Clerk user id.
- `Company`: one-to-one with `User`, stores CNPJ, company type, CNAE, opening date, and fiscal relations.
- `RevenueEntry`: company revenue entries with decimal amount and invoice flag.
- `FiscalObligation`: due dates and payment status for company obligations.

The schema uses `DATABASE_URL` for pooled runtime access and `DATABASE_DIRECT_URL` for direct migration access. After schema edits, run:

```bash
pnpm db:generate
pnpm --filter @meicontrol/database db:migrate
```

Use `db:push` only for local prototyping when a migration file is not needed.

## Coding Standards

- Keep TypeScript strict and avoid `any`.
- Prefer descriptive names over comments.
- Do not add JSDoc comments.
- Keep user-facing text in Portuguese where the surrounding UI is Portuguese.
- Preserve the existing formatting style in each package: the web app currently uses double quotes; some generated Nest defaults use single quotes.
- Do not introduce broad abstractions until the feature code shows repeated shape.

## Validation Before Handoff

Choose the narrowest command that covers the change:

- Web-only change: `pnpm turbo run lint --filter=@meicontrol/web`.
- API-only change: `pnpm turbo run lint --filter=@meicontrol/api` and relevant Jest tests.
- Prisma schema change: `pnpm db:generate` plus migration or `db:push` as appropriate.
- Cross-package change: `pnpm lint` and `pnpm build`.
