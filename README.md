# Eleonora Field Notes

An editorial companion site to my main portfolio.

This project started from the strongest design direction inside the older private repo `code-sanctuary`, but it has been repurposed into something more honest and useful: a public site for project rebuilds, smaller frontend experiments, and short writing about cleanup, versioning, and presentation.

## Why This Repo Exists

My main portfolio is where I present finished work.

This repo exists for the layer around that:

- rebuilds of older projects
- notes on versioning and cleanup
- smaller public demos that still say something about how I work
- the thinking behind turning scattered repos into clearer case studies

Instead of creating another competing portfolio, this site gives the editorial design a better home.

## Live Site

- GitHub Pages: [elli2022.github.io/eleonora-field-notes](https://elli2022.github.io/eleonora-field-notes/)

## What Is Included

The site currently includes:

- a home page that frames the project as a process and rebuild archive
- a projects section with selected real repos and live demos
- a notes section with short writing about refactoring, hosting choices, and portfolio cleanup
- an about page that explains the purpose of the site
- a lightweight contact page that opens a prefilled email draft

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- GitHub Pages

## Routing Choice

The site uses `HashRouter` on purpose.

Because the project is deployed on GitHub Pages, hash-based routing keeps deep links stable without needing server-side route handling or custom rewrite infrastructure.

## Content Strategy

All content lives in typed local files:

- [src/content/profile.ts](./src/content/profile.ts)
- [src/content/projects.ts](./src/content/projects.ts)
- [src/content/posts.ts](./src/content/posts.ts)
- [src/content/types.ts](./src/content/types.ts)

That means:

- no CMS
- no database
- no second backend
- easy version control for writing and project metadata

## Project Structure

```text
eleonora-field-notes/
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── pages/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.ts
└── vite.config.ts
```

## Local Development

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Production Build

```bash
npm run build
```

## GitHub Pages Deployment

The repo is set up for GitHub Pages with a dedicated Actions workflow.

Deployment flow:

1. Push to `main`
2. GitHub Actions builds the Vite app
3. The `dist/` output is published to GitHub Pages

The Vite base path is configured for:

```text
/eleonora-field-notes/
```

## Relationship To Other Repos

This project is intentionally separate from:

- `eleonora-portfolio`
  - the main public portfolio
- `code-sanctuary`
  - the private source of the design direction used here

The goal was not to duplicate the portfolio, but to reuse the strongest design language for a more suitable public concept.

## Future Improvements

Likely next steps:

- add screenshots or cover images for selected projects
- add a small “before / after” format for rebuilt cases
- write more notes around Git cleanup and project selection
- add a filtered view for `rebuild`, `company-site`, `api`, and `archive`

## Author

Eleonora Nocentini Skoldebrink

- GitHub: [Elli2022](https://github.com/Elli2022)
- Main portfolio: [eleonora-portfolio.netlify.app](https://eleonora-portfolio.netlify.app/)
