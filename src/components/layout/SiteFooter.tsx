import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container-wide py-12 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">{profile.name}</p>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">{profile.bio}</p>
        </div>
        <div>
          <p className="label-mono mb-3">Elsewhere</p>
          <ul className="space-y-1.5">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a className="link-underline text-sm" href={s.href} target="_blank" rel="noreferrer">
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label-mono mb-3">Colophon</p>
          <p className="text-sm text-muted-foreground max-w-xs">
            Built with React, Vite, and Tailwind. Content lives in typed local files so the site
            stays simple to host, easy to version, and honest about what it is.
          </p>
        </div>
      </div>
      <div className="container-wide py-6 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
        <span className="font-mono">© {new Date().getFullYear()} {profile.handle}</span>
        <span className="font-mono">v1.0 — field notes edition</span>
      </div>
    </footer>
  );
}
