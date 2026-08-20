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
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Optional server-only variable:

- `SUPABASE_SERVICE_ROLE_KEY`

Never expose server-only secrets with the `NEXT_PUBLIC_` prefix. The service role key is only referenced from files under `src/server`, which are protected with `server-only` imports.

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open <http://localhost:3000>.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```
