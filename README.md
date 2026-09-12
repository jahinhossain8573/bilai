# Animal Hack 2026

A collaborative project created for **Animal Hack 2026**.

## Overview

**"bilai."** ("cat" in Bengali) is Bangladesh's first structured cat adoption platform.

The platform serves two audiences: adopters in Bangladesh searching for a cat, and owners or shelters looking to place a cat in a new home.

Users can put cats up for adoption by creating cards with relevant information.

Adopters can contact cat parents on WhatsApp.

## Features

- **Browsable cat cards** - a grid of adoptable cats with photo, breed, age, and location
- **WhatsApp-first contact** - every card includes a direct "Contact on WhatsApp" action, removing the need for an in-app messaging system
- **Responsive layout** - for desktop and mobile
- Responsive interface for desktop and mobile devices

## Tech Stack

- **Frontend:** Next.js, ReactJS
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Styling:** Tailwind CSS
- **Authentication:** NextAuth
- **Deployment:** Vercel

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm or pnpm

### Try out using Vercel

Live demo: [bilai on Vercel](https://bilai-git-final-gator2.vercel.app)

## Project Structure

```text
.
├── app/                  # Application routes and pages
├── components/           # Reusable UI components
├── lib/                  # Shared utilities and service clients
├── prisma/               # Database schema and migrations
├── public/                # Static assets
├── .env.example          # Environment variable template
└── package.json          # Project configuration and scripts
```

### Installation

1. Clone the repository and install dependencies:

```bash
   git clone https://github.com/jahinhossain8573/animal-hack-2026.git
   cd animal-hack-2026
   pnpm install
```

2. Copy `.env.example` to `.env` and fill in the required values:

```bash
   cp .env.example .env
```

You'll need a PostgreSQL connection string (`DATABASE_URL`), an `AUTH_SECRET` (generate one with `npx auth secret`), and your Supabase keys if image upload is enabled.

3. Push the schema to your database and generate the Prisma client:

```bash
   npx prisma db push
   npx prisma generate
```

4. Run the development server:

```bash
   pnpm dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Team

Built for **Animal Hack 2026** by:

1. Md. Jahin Hossain
2. Abdullah Irshad Tazwar
3. Nadid Bin Sadat
