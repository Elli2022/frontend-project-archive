import { useMemo, useState } from "react";
import { projects, allTags } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  const [active, setActive] = useState<string | null>(null);

  const filtered = useMemo(
    () => (active ? projects.filter((p) => p.tags.includes(active)) : projects),
    [active]
  );

  return (
    <div className="container-wide py-20 md:py-28">
      <p className="label-mono mb-4">Projects · {projects.length}</p>
      <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight leading-tight max-w-3xl">
        Rebuilds, companion cases, and smaller public projects worth keeping around.
      </h1>

      {/* Filters */}
      <div className="mt-10 flex flex-wrap gap-2">
        <FilterPill active={active === null} onClick={() => setActive(null)}>All</FilterPill>
        {allTags.map((t) => (
          <FilterPill key={t} active={active === t} onClick={() => setActive(t)}>
            {t}
          </FilterPill>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-12 grid md:grid-cols-2 gap-6 lg:gap-8">
        {filtered.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-20 text-center text-muted-foreground font-mono text-sm">
          No projects with that tag right now.
        </p>
      )}
    </div>
  );
}

function FilterPill({
  children, active, onClick,
}: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 text-xs font-mono uppercase tracking-wider border transition-colors ${
        active
          ? "bg-foreground text-background border-foreground"
          : "border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
      }`}
    >
      {children}
    </button>
  );
}
