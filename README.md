# Noezz Coffee — demo website

A one-page, bilingual (Vietnamese / English) website for a **fictional** Vietnamese coffee shop in Da Nang. Built as a portfolio demo of a small-business landing page. Sister demo: [Noezz Homestay](https://github.com/namduong-dev1809/noezz-homestay).

> Noezz Coffee is not a real business. Address, phone number and prices are sample content. Photos are from [Unsplash](https://unsplash.com).

## Features

- **Hero slider**: 3 slides, auto-advance every 6 s, manual dots, no auto-play for reduced-motion users
- **Menu with tabs** (All / Coffee / Tea / Blended / Bakery), "Best seller" and "New" tags, VND prices with an approximate € hint in English
- **All menu items in one file** (`lib/menu.ts`): the owner edits names and prices there
- Story, gallery and visit sections with opening hours, call and directions buttons, map
- Fade-in on scroll, mobile-first layout, `/vi` and `/en` routes (Vietnamese is the default)

## Tech

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · deployed on Vercel

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm test        # menu data and price formatting
```

## Where things are

| Path | What it holds |
|---|---|
| `lib/menu.ts` | Menu items, categories, price format |
| `app/[lang]/dictionaries/*.json` | All other text, one file per language |
| `app/[lang]/page.tsx` | The page sections |
| `components/` | Header, hero slider, menu tabs |
| `lib/photos.ts` | Photo URLs |

Made by [Duong Thanh Nam](https://duongthanhnam.vercel.app).
