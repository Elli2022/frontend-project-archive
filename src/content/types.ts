/**
 * Typed content layer.
 *
 * This file defines the shape of every piece of "CMS-like" content in the site.
 * Everything is stored as plain TypeScript objects in `src/content/*` — no
 * WordPress, no REST API, no database. Adding new entries is as simple as
 * appending to the relevant array. See `projects.ts` and `posts.ts` for usage.
 */

export type Tag = string;

export interface Project {
  /** Unique slug used in URLs: /projects/:slug */
  slug: string;
  title: string;
  /** Short tagline shown on cards and hero. Keep under ~120 chars. */
  excerpt: string;
  /** Year displayed on cards. */
  year: number;
  /** Role / what you did. */
  role: string;
  /** Tech stack chips. */
  tech: Tag[];
  /** Free-form tags for filtering. */
  tags: Tag[];
  /** Featured image URL (or imported asset). Leave undefined to render a styled placeholder. */
  cover?: string;
  /** External links shown on the detail page. */
  links?: {
    demo?: string;
    repo?: string;
    caseStudy?: string;
  };
  /** True to feature on the home page. */
  featured?: boolean;
  /** Markdown body for the detail page. */
  body: string;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readingTime: string;
  tags: Tag[];
  body: string;
}

export interface Profile {
  name: string;
  handle: string;
  title: string;
  location: string;
  email: string;
  bio: string;
  longBio: string;
  socials: { label: string; href: string }[];
  stack: string[];
  experience: { role: string; org: string; period: string; summary: string }[];
}
