import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "eleonora-portfolio",
    title: "Eleonora Portfolio",
    excerpt:
      "My current main portfolio, rebuilt to present client-style work more clearly in both Swedish and English.",
    year: 2026,
    role: "Design, content structure, frontend",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    tags: ["portfolio", "frontend", "content"],
    featured: true,
    links: {
      demo: "https://eleonora-portfolio.netlify.app/",
      repo: "https://github.com/Elli2022/eleonora-portfolio",
    },
    body: `
## Why this project matters

This is the main portfolio that represents me publicly right now. The goal was not only to make it prettier, but to make it easier for a recruiter or client to understand what I actually build.

## What changed

- clearer project categories and filtering
- stronger case framing around real company-style work
- Swedish and English presentation
- cleaner information hierarchy across the homepage
- better separation between flagship work and smaller learning projects

## Why it is included here

I keep it in this archive because it shows the difference between *having projects* and *presenting them well*. That translation layer is a large part of frontend work.
    `.trim(),
  },
  {
    slug: "catchem-all-pokemon-refresh",
    title: "Catch'Em All Pokemon",
    excerpt:
      "A simple API exercise upgraded into a more complete mini product with favorites, search history, stats, and evolution data.",
    year: 2026,
    role: "Refactor, UX, Git versioning",
    tech: ["HTML", "CSS", "JavaScript", "PokeAPI"],
    tags: ["rebuild", "api", "frontend"],
    featured: true,
    links: {
      demo: "https://elli2022.github.io/catchem-all-pokemon/",
      repo: "https://github.com/Elli2022/catchem-all-pokemon",
    },
    body: `
## Starting point

The original version was a very small Pokemon lookup app. It could fetch a Pokemon and show a sprite, name, type, and one ability.

## What I improved

- preserved the original version in a legacy branch before rebuilding
- added richer data from multiple PokeAPI endpoints
- introduced recent searches and local favorites
- added type matchups, evolution chains, and stat bars
- rebuilt the UI so it feels like a small product instead of a classroom demo

## Why it is included here

This project is a good example of how I like to work: keep the history, improve the thinking, and turn an older piece into something more portfolio-ready.
    `.trim(),
  },
  {
    slug: "ferry-arrivals-sweden",
    title: "Ferry Arrivals Sweden",
    excerpt:
      "An Expo and React Native interface for Swedish passenger ferry arrivals, shaped around live public transport data.",
    year: 2026,
    role: "Design, frontend, data shaping",
    tech: ["Expo", "React Native", "TypeScript", "Netlify"],
    tags: ["data", "transport", "mobile-web"],
    featured: true,
    links: {
      demo: "https://ferry-arrivals-sweden-elli.netlify.app/",
      repo: "https://github.com/Elli2022/ferry-arrivals-sweden",
    },
    body: `
## Problem

I wanted a clearer overview of ferry arrivals in Swedish ports without depending on expensive APIs or cluttered source sites.

## What the project shows

- working with messy real-world source data
- building a calmer interface around live status information
- turning transport data into something easier to scan and compare
- designing for both web and app-like contexts

## Why it is included here

This is one of the better examples in my work of combining real usefulness with frontend presentation.
    `.trim(),
  },
  {
    slug: "w-advokatbyra-site",
    title: "W Advokatbyra",
    excerpt:
      "A legal website focused on trust, clarity, and stronger structure for a more professional first impression.",
    year: 2026,
    role: "Frontend, structure, polish",
    tech: ["React", "TypeScript", "CSS", "Netlify"],
    tags: ["company-site", "client-style", "frontend"],
    featured: true,
    links: {
      demo: "https://w-advokatbyra-malmo.netlify.app/",
      repo: "https://github.com/Elli2022/w-advokatbyra-site",
    },
    body: `
## Focus

The key challenge was not complexity for its own sake. It was trust. Legal websites need structure, calm, and very little confusion.

## What I worked toward

- clearer service presentation
- calmer visual rhythm
- better hierarchy in the page content
- a more polished overall feel without making the site feel generic

## Why it is included here

It reflects the kind of company-facing work I want more of: practical, clear, and serious without feeling dull.
    `.trim(),
  },
  {
    slug: "firebase-rest-lesson-exercises",
    title: "Firebase REST Lesson Exercises",
    excerpt:
      "Several older classroom repos consolidated into a documented lesson archive with a real landing page and cleaner project structure.",
    year: 2026,
    role: "Refactor, docs, GitHub Pages",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    tags: ["archive", "teaching", "rebuild"],
    links: {
      demo: "https://elli2022.github.io/firebase-rest-lesson-exercises/",
      repo: "https://github.com/Elli2022/firebase-rest-lesson-exercises",
    },
    body: `
## Starting point

This work began as several separate lesson repos from the same classroom topic. On their own, they created clutter and were hard to understand at a glance.

## What I changed

- gathered related exercises into one clearer repo
- renamed it to something more descriptive
- added a landing page and stronger README documentation
- made the archive easier to explain publicly

## Why it is included here

It shows a different kind of frontend skill: not only building new things, but also creating order and context around older work.
    `.trim(),
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
export const allTags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort();
