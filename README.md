# AboutMe — Portfolio

This is a minimal Next.js + TypeScript portfolio scaffold with Tailwind CSS and Framer Motion.

Quick start

1. Install dependencies:

```bash
npm install
# or
# yarn
# pnpm install
```

2. Run dev server:

```bash
npm run dev
```

Notes

- The homepage (`/pages/index.tsx`) contains your portfolio component.
- Tailwind is configured via `tailwind.config.js` and `postcss.config.js`.
- Add real GitHub URLs to the `projects` array in `pages/index.tsx`.
- To enable TypeScript strictness tweaks, edit `tsconfig.json`.
 
PostCSS/Tailwind note

- If you see an error like "use `@tailwindcss/postcss`", install the package and restart the dev server:

```bash
npm install -D @tailwindcss/postcss
# then
npm run dev
```


Goals data

- The 100 goals list is stored in `data/goals.json`. This keeps the content out of the page component and makes it easy to edit the list without touching code.
- To change the public list, edit `data/goals.json` and restart the dev server (or the site will update on refresh in dev mode).

Local admin editor (git-ignored)

- There's a small local admin editor in `admin-local/` which is git-ignored by default. It provides a simple UI to edit `data/goals.json` without committing changes to the repo.
- Start it with:

```bash
# (optional) set a secret so only authorized saves work
ADMIN_SECRET=mysupersecret npm run admin
```

- The editor runs a tiny server on port 5000 by default. Open http://localhost:5000 to edit the goals in a safe, local-only place.
