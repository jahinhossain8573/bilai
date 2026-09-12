This is a Next.js app for the Animal Hack 2026 project.

## Local development

```bash
npm install
cp .env.example .env
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
```

## Deploy to Vercel

This app is ready for a standard Next.js Vercel deployment. The project already includes the required `build` and `start` scripts, and the app compiles successfully in production mode.

Before deploying, add these environment variables in your Vercel project settings:

- `DATABASE_URL`
- `AUTH_SECRET`
- `AUTH_URL`
- `NEXTAUTH_SECRET` (optional compatibility alias)
- `NEXTAUTH_URL` (optional compatibility alias)

For a PostgreSQL database, use a Vercel Postgres or external Neon/Supabase/Render connection string.

Example:

```bash
vercel
```

Then, in the Vercel dashboard, set the environment variables from `.env.example` and redeploy.
