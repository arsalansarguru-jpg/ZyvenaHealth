# Zyvena Health

Premium metabolic health landing page built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

**Repository:** [github.com/arsalansarguru-jpg/ZyvenaHealth](https://github.com/arsalansarguru-jpg/ZyvenaHealth)

**Live site:** [zyvena-health.vercel.app](https://zyvena-health.vercel.app/)

## Features

- Mobile-first responsive layout
- Sticky navigation with smooth scrolling
- SEO metadata, sitemap, and robots.txt
- Typeform and Calendly embed placeholders
- Privacy Policy, Terms & Conditions, and Contact pages
- Trust-focused healthcare design (no flashy animations)

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production site URL for SEO |
| `NEXT_PUBLIC_TYPEFORM_ID` | Typeform form ID for assessment embed |
| `NEXT_PUBLIC_CALENDLY_URL` | Calendly scheduling URL for consultation embed |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL (`https://nsmmyvtchwlpolaantex.supabase.co`) |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key (Settings → API) |
| `SUPABASE_SERVICE_ROLE_KEY` | **Server-only** — never use `NEXT_PUBLIC_` prefix. Used by `/api/contact` |

## Supabase

- **REST API:** `https://nsmmyvtchwlpolaantex.supabase.co/rest/v1/`
- **Dashboard:** [Supabase project](https://supabase.com/dashboard/project/nsmmyvtchwlpolaantex)

1. Copy your **anon** key from Supabase → Settings → API into `.env.local`
2. Run `supabase/schema.sql` in the SQL Editor to create the `contact_inquiries` table
3. Contact form submissions on `/contact` are saved via `POST /api/contact`

## Deploy on Vercel

The site is deployed at **[zyvena-health.vercel.app](https://zyvena-health.vercel.app/)**.

In [Vercel → Project → Settings → Environment Variables](https://vercel.com/), add these for **Production** (then redeploy):

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_SITE_URL` | `https://zyvena-health.vercel.app` |
| `NEXT_PUBLIC_TYPEFORM_ID` | `J5X7XjDA` |
| `NEXT_PUBLIC_CALENDLY_URL` | `https://calendly.com/zyvenahealth/30min` |
| `NEXT_PUBLIC_SUPABASE_URL` | `https://nsmmyvtchwlpolaantex.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key (server-only, no `NEXT_PUBLIC_` prefix) |

Without the Typeform/Calendly vars, the live site shows embed placeholders instead of the real widgets.

When you connect a custom domain (e.g. `zyvenahealth.com`), update `NEXT_PUBLIC_SITE_URL` to match.

## Assessment results page

After Typeform completion, redirect respondents to:

```
/results?score=72&category=moderate&areas=Constant+fatigue,Poor+sleep,Weight+management
```

| Parameter | Aliases | Description |
|-----------|---------|-------------|
| `score` | `risk_score` | Risk score 0–100 |
| `category` | `risk_category` | `low`, `moderate`, or `high` |
| `areas` | `key_risk_areas` | Comma-separated key risk areas |

If `category` is omitted, it is inferred from score (low &lt; 34, moderate &lt; 67, high ≥ 67).

Configure the redirect URL in Typeform → Settings → Endings.

## Build

```bash
npm run build
npm start
```

## Assets

Place the logo at `public/logo.png`.
