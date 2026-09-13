# Bilai

Bilai is an app that aims to connect the adopters and pet parents in the burgeoning cat adoption landscape in Bangladesh. We want Bilai to make the cat adoption landscape in Bangladesh more streamlined and easier to navigate.

## Features

- **Explore pets to adopt:** A clean grid of cards with pets available for adoption.
- **Put cats up for adoption:** A simple form on which owners can submit a picture of their pet, age, breed, and location.
- **WhatsApp Connection:** Each card features a single button that opens a WhatsApp conversation with the owner instantly. We chose WhatsApp because of the platform's widespread adoption in the country.

## Tech stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS
- Prisma ORM with PostgreSQL
- NextAuth credentials authentication
- bcryptjs for password hashing

## Project structure

- `app/` — pages, components, and route logic for the UI
- `app/actions/` — server actions for sign-up, cat creation, and deletion
- `app/components/` — reusable UI components such as the cat cards
- `lib/` — shared database client setup
- `prisma/` — Prisma schema and migrations
- `public/` and `app/resources/` — static assets and app media

# Getting started

1. Clone the repository.
2. Install dependencies:

```bash
   pnpm install
```

3. Create your environment file from the example:

```bash
   cp .env.example .env
```

4. Add your PostgreSQL connection string and auth secrets in `.env`:

```env
   DATABASE_URL="postgresql://user:password@localhost:5432/animal_hack"
   AUTH_SECRET="replace-with-a-long-random-secret"
   AUTH_URL="http://localhost:3000"
```

5. Generate the Prisma client and prepare the database:

```bash
   npx prisma generate
   npx prisma db push
```

If you are working from a fresh local database, you can also use `npx prisma migrate dev` for project migrations.

6. Start the app:

```bash
   pnpm dev
```

7. Open the app in your browser at `http://localhost:3000`.

## Database schema

The app stores user and cat records in PostgreSQL via Prisma. Key models include:

- `User` — account info, email, password, WhatsApp, and ownership metadata
- `Cat` — cat name, breed, age, gender, location, photo, and owner reference
- `Account`, `Session`, and `VerificationToken` — authentication tables used by NextAuth

## Notes

- The project is set up for deployment on Vercel and expects `DATABASE_URL` and auth environment variables to be configured in the hosting environment.
- The `app/actions/cats.ts` server action ensures a user can only delete cards that they created.
- The app uses a custom local font and a warm, earthy visual style to match the cat-adoption theme.
