import type { Profile } from "./types";

export const profile: Profile = {
  name: "Eleonora Nocentini Sköldebrink",
  handle: "Eleonora Field Notes",
  title: "Frontend developer, web designer, and project rebuilder",
  location: "Malmo, Sweden",
  email: "eleonora.nocentini@gmail.com",
  bio: "A companion site for process notes, rebuilds, and smaller frontend experiments.",
  longBio:
    "This site is the quieter companion to my main portfolio. I use it to document rebuilds, experiments, and the thinking behind how I improve older projects instead of hiding them. My work spans company websites, React and Next.js builds, WordPress-adjacent workflows, API-based frontends, and portfolio cleanup projects where structure matters as much as visuals.",
  socials: [
    { label: "GitHub", href: "https://github.com/Elli2022" },
    { label: "Main portfolio", href: "https://eleonora-portfolio.netlify.app/" },
    { label: "Email", href: "mailto:eleonora.nocentini@gmail.com" },
  ],
  stack: [
    "TypeScript",
    "React",
    "Next.js",
    "Vite",
    "Tailwind CSS",
    "WordPress",
    "REST APIs",
    "GraphQL",
    "GitHub Pages",
    "Netlify",
  ],
  experience: [
    {
      role: "Independent web projects",
      org: "Freelance & portfolio work",
      period: "2024 — Present",
      summary:
        "Building and reshaping websites, portfolio projects, and experiments with a stronger focus on structure, clearer messaging, and more intentional frontend polish.",
    },
    {
      role: "LIA intern",
      org: "Capace Media Group",
      period: "Nov 2023 — Feb 2024",
      summary:
        "Worked with headless WordPress, WPGraphQL, and React/Next.js in a real agency environment with live requirements and delivery expectations.",
    },
    {
      role: "Frontend studies",
      org: "Coursework and self-directed builds",
      period: "2022 — 2024",
      summary:
        "Built the foundation through classroom projects, API exercises, design-focused assignments, and progressively stronger rebuilds.",
    },
  ],
};
