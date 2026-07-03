# Yahya Dalbah — Portfolio

Personal portfolio showcasing freelance work, built with React, TypeScript, Vite, and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Adding project screenshots

Drop PNG screenshots into `public/images/` with these exact filenames — the site
shows styled placeholders until each file exists:

| File | What to capture |
| --- | --- |
| `cvmaker-hero.png` | AI CV Maker: main editor with the live A4 preview visible |
| `cvmaker-ai.png` | AI CV Maker: AI content suggestions in action |
| `cvmaker-upload.png` | AI CV Maker: PDF upload / auto-populate flow |
| `cvmaker-export.png` | AI CV Maker: export result or template view |
| `chat-hero.png` | Messaging app: main chat view |
| `chat-feature.png` | Messaging app: multi-user / conversations view |

Tips: desktop browser at full width (~1600px+), use demo data (no personal info),
PNG format.

## Editing content

All project copy (titles, taglines, case-study text, tech stacks) lives in one
file: `src/data/projects.ts`. Experience/skills/services live in their section
components under `src/sections/`.

## Deploy

Any static host works. Easiest options:

- **Vercel**: `npx vercel` from the project root, or import the repo at vercel.com — auto-detects Vite.
- **Netlify**: drag the `dist/` folder into app.netlify.com/drop, or connect the repo (build command `npm run build`, publish dir `dist`).

Because the site uses client-side routing, configure the SPA fallback
(Vercel does this automatically; on Netlify add a `_redirects` file with
`/* /index.html 200` — already included in `public/`).
