# Zyvena Health

Premium metabolic health landing page built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

**Repository:** [github.com/arsalansarguru-jpg/ZyvenaHealth](https://github.com/arsalansarguru-jpg/ZyvenaHealth)

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

## Build

```bash
npm run build
npm start
```

## Assets

Place the logo at `public/logo.png`.
