# Deployment Guide — Vercel

This guide walks through deploying the GT Hub LMS to Vercel.

## Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. Vercel CLI installed (optional): `npm i -g vercel`
3. Your Supabase project URL and anon key

## Option 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Import the Project

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your Git repository (GitHub, GitLab, or Bitbucket)
3. Select the repository containing this project

### Step 2: Configure Build Settings

Vercel should auto-detect the framework as Vite. Verify these settings:

- **Framework Preset**: Vite
- **Root Directory**: `lms-react`
- **Build Command**: `npm run build` (already configured in `vercel.json`)
- **Output Directory**: `dist` (already configured in `vercel.json`)
- **Install Command**: `npm install` (already configured in `vercel.json`)

### Step 3: Add Environment Variables

In the Vercel project settings, add these environment variables:

| Variable | Value | Notes |
|---|---|---|
| `VITE_SUPABASE_URL` | `https://your-project.supabase.co` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | `eyJhbGc...` | Your Supabase anon/public key |

**Important**: These must be added in the Vercel dashboard under **Settings → Environment Variables**. Do not commit your `.env` file to Git.

### Step 4: Deploy

Click **Deploy**. Vercel will:
1. Run `npm install`
2. Run `npm run build` (which runs `prepare-content` first to copy content files)
3. Deploy the `dist` folder

The first deployment takes 2-3 minutes. Subsequent deployments are faster.

## Option 2: Deploy via Vercel CLI

```bash
# From the lms-react directory
cd lms-react

# Login to Vercel (first time only)
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

The CLI will prompt you to add environment variables on first deploy.

## Post-Deployment

### Verify the Deployment

1. Visit your Vercel deployment URL (e.g. `https://your-app.vercel.app`)
2. Test authentication (register/login)
3. Navigate through a module to verify content loads correctly
4. Check that progress tracking works (requires Supabase tables to be set up)

### Set Up Supabase Tables

If you haven't already, run the schema from `database/schema.sql` in your Supabase SQL editor:

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy the contents of `database/schema.sql`
4. Run the SQL
5. Verify tables are created: `lesson_progress`, `test_results`, `flashcard_progress`

### Configure Custom Domain (Optional)

1. In Vercel project settings, go to **Domains**
2. Add your custom domain
3. Follow Vercel's DNS configuration instructions

## Troubleshooting

### Content files not loading (404 errors)

- Verify `npm run prepare-content` ran successfully during build
- Check Vercel build logs for errors
- Ensure `publicDir` in `vite.config.ts` is set to `'public'` for production

### Environment variables not working

- Verify variables are prefixed with `VITE_` (required for Vite)
- Check they're added in Vercel dashboard under **Settings → Environment Variables**
- Redeploy after adding/changing environment variables

### Progress tracking not working

- Verify Supabase tables are created (run `database/schema.sql`)
- Check Supabase RLS policies allow authenticated users to read/write
- Verify `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are correct

### Build fails with "publicDir not found"

- Ensure the `prepare-content` script ran successfully
- Check that `scripts/prepare-content.js` exists and is executable

## Continuous Deployment

Once connected to Git, Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every push to other branches and pull requests

Each deployment gets a unique URL for testing before promoting to production.

## Performance Monitoring

Vercel provides built-in analytics:
- Go to your project dashboard
- Click **Analytics** to see:
  - Page load times
  - Core Web Vitals
  - Traffic patterns

## Cost

The free Vercel tier includes:
- Unlimited deployments
- 100 GB bandwidth/month
- Automatic HTTPS
- Preview deployments

This is sufficient for most educational projects. Upgrade to Pro if you need more bandwidth or team features.
