# cv-mayeul

> Interactive CV — built with Next.js 16 + React 19 + Tailwind 4.

A single-page interactive resume for **Mayeul de Charentenay** — Data PO IA at Orange · ESSEC BBA Global.

## What's inside

- **`/`** — single page, animated reveals via Framer Motion 12, dark theme with WCAG AA contrast
- **`data/cv-data.ts`** — single source of truth: personal info, projects, experiences, skill categories. All content lives here, components consume it.
- **Static export** — fully prerendered (no server runtime needed); deploys anywhere static.

## Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | Next.js 16 (App Router) | Latest stable, RSC default, edge-ready |
| UI | React 19 | Concurrent features, automatic batching |
| Styling | Tailwind CSS 4 | Zero-config, design tokens via `@theme` |
| Animation | Framer Motion 12 | Declarative reveals + scroll-triggered transitions |
| Icons | Lucide React | Tree-shakeable SVG icons |

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → .next/
npm run lint
```

## Customize

To make this your own CV, edit `data/cv-data.ts`:

- `personalInfo` — name, tagline, email, LinkedIn, photo
- `projects` — array of project cards (title, company, description, tags, metrics)
- `experiences` — work history with dates and bullet points
- `skillCategories` — skill groups for the skills section

Replace `public/photo-mayeul.jpg` with your own photo (1:1 ratio, ~400×400 minimum).

## Deployment

Optimized for Vercel:

```bash
npm install -g vercel
vercel
```

Or any static host that serves the `.next/` directory after `npm run build`.

## License

Code: MIT — see [LICENSE](./LICENSE). Content (CV text, photo, biographical data): all rights reserved — please don't reuse my biographical content as a template; fork the structure and replace the data.
