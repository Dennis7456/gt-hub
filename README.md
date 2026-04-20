# GT Hub — KRA Graduate Trainee Learning Platform

A full-stack learning management system for KRA Graduate Trainees, built with React, TypeScript, Vite, and Supabase.

## Project Structure

```
gt-hub/
├── lms-react/          # React application (main app — deploy this)
├── assets/             # JSON content: learning paths, tests, flashcards
├── clearance-one/      # Customs Clearance I lesson & test files
├── customs-in-international-context/
├── customs-valuation-i/
├── wto-customs-valuation/
├── history-of-taxation/
├── theory-of-taxation/
├── tax-and-customs-theory/
├── eaccma/
├── article-vii-valuation/
├── flashcards/         # Legacy flashcard JS files
├── scripts/            # Python content generation scripts
└── docs/               # Project documentation and summaries
```

## Modules

| Module | Description |
|---|---|
| Customs Clearance I | Import procedures, prohibited/restricted goods |
| Customs in International Context | Customs within international trade frameworks |
| Customs Valuation I | Fundamentals of customs valuation |
| WTO Customs Valuation | WTO Agreement on Customs Valuation |
| History of Taxation | Evolution of taxation systems |
| Theory of Taxation | Theoretical foundations of taxation |
| Tax and Customs Theory | Integrated tax and customs theory |
| EACCMA | East African Community Customs Management Act |

## Getting Started

### Prerequisites
- Node.js 18+
- A Supabase project

### Development

```bash
cd lms-react
npm install
cp .env.example .env   # fill in your Supabase credentials
npm run dev
```

### Production Build

```bash
cd lms-react
npm run build          # copies content files then builds
```

### Deploy to Vercel

See [lms-react/DEPLOYMENT.md](lms-react/DEPLOYMENT.md) for full instructions.

**Quick deploy:**
1. Import this repo in [vercel.com/new](https://vercel.com/new)
2. Set Root Directory to `lms-react`
3. Add environment variables: `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
4. Deploy

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS
- **Backend**: Supabase (Auth + PostgreSQL)
- **Testing**: Vitest, Testing Library, fast-check (property-based)
- **Deployment**: Vercel

## Database Setup

Run `lms-react/database/schema.sql` in your Supabase SQL editor to create the required tables.
