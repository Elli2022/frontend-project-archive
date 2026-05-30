import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/content/types";
import { Tag } from "./Tag";

interface Props {
  project: Project;
  index?: number;
}

/**
 * Card used on the home page and the projects index.
 * If `cover` is set we render the image, otherwise a styled placeholder.
 */
export function ProjectCard({ project, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group block card-surface rounded-xl overflow-hidden border border-border"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-surface-sunken">
          {project.cover ? (
            <img
              src={project.cover}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <ProjectPlaceholder title={project.title} />
          )}
          <div className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono text-xs text-muted-foreground">{project.year} · {project.role}</span>
            <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <h3 className="mt-2 text-xl font-serif font-medium tracking-tight group-hover:text-accent-foreground transition-colors">
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{project.excerpt}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <Tag key={t} variant="outline">{t}</Tag>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function ProjectPlaceholder({ title }: { title: string }) {
  // Deterministic hue so each project has its own placeholder vibe.
  const hue = [...title].reduce((a, c) => a + c.charCodeAt(0), 0) % 360;
  return (
    <div
      className="h-full w-full flex items-center justify-center bg-grid"
      style={{ background: `linear-gradient(135deg, hsl(${hue} 40% 88%), hsl(${(hue + 40) % 360} 30% 78%))` }}
    >
      <span className="font-serif text-3xl text-foreground/50 italic">{title}</span>
    </div>
  );
}
