# GNSOne

GNSOne is a production-grade foundation for an Indian investment research platform. This repository currently contains only the application foundation: no database schema, no financial API integrations, no sample stock data, and no AI functionality.

## Tech stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS
- ESLint
- Supabase JavaScript client setup
- `src/` directory with `@/*` import alias

## Project structure

```text
src/
  app/                  App Router routes, layout, and global styles
  components/           Shared UI and page composition components
  config/               Environment variable accessors
  features/             Domain feature modules for future research workflows
  lib/                  Client-safe library integrations
  server/               Server-only integrations and privileged helpers
  types/                Shared TypeScript types
  utils/                Small reusable utilities
```

## Environment variables

Copy the example file and fill in values from your Supabase project:

```bash
cp .env.example .env.local
```

Required public variables:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

The application does not require a service-role key for this foundation phase. Never expose server-only secrets with the `NEXT_PUBLIC_` prefix; server-side Supabase code lives under `src/server` and uses `server-only` imports.

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open <http://localhost:3000>. The landing page includes a server-side Supabase connectivity card that shows `Connected` when `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` can reach your Supabase project, or `Needs setup` with an error message when they cannot.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```
