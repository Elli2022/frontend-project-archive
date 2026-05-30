import type { Post } from "./types";

export const posts: Post[] = [
  {
    slug: "rebuilding-without-erasing-history",
    title: "Rebuilding a project without erasing its history",
    excerpt:
      "Why I prefer a legacy branch over duplicate repos when I modernize an older project.",
    date: "2026-05-30",
    readingTime: "5 min",
    tags: ["git", "portfolio", "workflow"],
    body: `
## The problem

Older projects are often messy, but deleting the original version entirely removes the evidence of growth.

## What I prefer instead

Before a rebuild, I preserve the old version in a dedicated branch. That makes it possible to:

- compare the new work against the original
- keep the repo understandable
- show a cleaner versioning story in public
- avoid creating yet another nearly identical repository

## Why it matters

For portfolio work, the point is not only to show the final polish. It is also to show that the improvement was intentional.
    `.trim(),
  },
  {
    slug: "when-github-pages-is-enough",
    title: "When GitHub Pages is enough",
    excerpt:
      "A reminder that not every frontend project needs a heavier hosting setup to be useful and public.",
    date: "2026-05-30",
    readingTime: "4 min",
    tags: ["deployment", "static-sites", "workflow"],
    body: `
## Not every site needs the same platform

When a project is static and self-contained, GitHub Pages is often the more practical choice.

## Why I still use it

- no backend to maintain
- easy connection between repo history and the live site
- good fit for rebuilds, notes, experiments, and smaller public demos

## The tradeoff

You give up some convenience compared with platforms that are more focused on previews and form handling, but for many projects the simplicity is worth it.
    `.trim(),
  },
  {
    slug: "from-classroom-exercise-to-portfolio-case",
    title: "From classroom exercise to portfolio case",
    excerpt:
      "What I look for when deciding whether an old exercise deserves a second life.",
    date: "2026-05-30",
    readingTime: "6 min",
    tags: ["portfolio", "frontend", "refactor"],
    body: `
## The raw material matters

Not every school project should be rescued. Some are better deleted. Others are strong enough to become better case studies with more structure and polish.

## I usually ask three questions

1. Is there a real interaction or data flow worth improving?
2. Can the project teach something about how I think?
3. Would a stronger version still feel honest?

## What makes the difference

The best candidates are usually small, understandable apps where the core idea already works. Then the rebuild can focus on clarity, product thinking, and better storytelling.
    `.trim(),
  },
];

export const getPost = (slug: string) => posts.find((post) => post.slug === slug);
