# Adam Nguyen | Software Engineer Portfolio

Personal portfolio for Adam Nguyen, a Sydney-based software engineer and final-year UTS Bachelor of Information Technology student working across fintech, full-stack development, data and AI.

Live site: https://adampharrels.github.io/AboutMe/

## Screenshot

Add an up-to-date screenshot after deployment at:

```text
public/portfolio-preview.png
```

Suggested capture: homepage at 1440px wide after running the production build locally.

## Main Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS
- Static export for GitHub Pages

## Site Structure

```text
components/          Reusable layout, cards, tags and calls to action
data/portfolio.ts    Typed profile, experience, project and case-study content
data/goals.json      Life List content
pages/index.tsx      Homepage
pages/work.tsx       Experience page
pages/projects.tsx   Project index
pages/projects/[slug].tsx
                     Static project case-study pages
pages/about.tsx      About page
pages/goals.tsx      Life List page
public/              Favicon and expected static assets
```

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Quality Check

```bash
npm run lint
```

The lint script runs `tsc --noEmit` as the current repository quality gate.

## Production Build

```bash
npm run build
```

The site uses `output: "export"` and writes static output to `out/`.

## GitHub Pages Deployment

The deployed site lives under the `/AboutMe/` subpath:

```bash
BASE_PATH=/AboutMe npm run build
```

The Next config preserves:

- `basePath`
- `assetPrefix`
- unoptimized images for static export
- trailing slashes for GitHub Pages compatibility

## Content Management

Most public portfolio content is edited in `data/portfolio.ts`:

- profile and contact details
- proof points
- capability groups
- work experience
- featured and secondary projects
- project case studies

The Life List is stored separately in `data/goals.json`. Placeholder entries are filtered out in the page component and completed items use the `done:` prefix.

## Résumé

The visible resume button expects:

```text
public/Resume_AdamNguyen.pdf
```

The code is wired for that path, but the PDF itself should be added separately.

## Accessibility and Responsive Design Notes

- Semantic headings and landmarks are used across pages.
- Active navigation includes `aria-current="page"`.
- The mobile navigation uses an accessible menu button with `aria-expanded`.
- Links use descriptive labels such as “View StoxLens repository”.
- Focus-visible styles are defined for keyboard navigation.
- Reduced-motion preferences are respected in global CSS.
- Layouts are designed to avoid horizontal overflow on small screens.
