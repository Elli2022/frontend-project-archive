import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/content/projects";
import { Tag } from "@/components/Tag";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;

  if (!project) {
    return (
      <div className="container-prose py-32 text-center">
        <p className="label-mono mb-3">404</p>
        <h1 className="font-serif text-3xl">That project is not in this archive.</h1>
        <Link to="/projects" className="mt-6 inline-block link-underline font-mono text-sm">
          ← Back to projects
        </Link>
      </div>
    );
  }

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article>
      {/* Header */}
      <header className="border-b border-border bg-surface-sunken">
        <div className="container-prose pt-16 pb-12">
          <Link to="/projects" className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground link-underline">
            <ArrowLeft className="h-3.5 w-3.5" /> All projects
          </Link>
          <p className="label-mono mt-8">{project.year} · {project.role}</p>
          <h1 className="mt-3 font-serif text-4xl md:text-6xl font-medium tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">{project.excerpt}</p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tech.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>

          {project.links && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noreferrer"
                   className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm hover:bg-primary/90 transition-colors">
                  Live demo <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {project.links.repo && (
                <a href={project.links.repo} target="_blank" rel="noreferrer"
                   className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm hover:bg-secondary transition-colors">
                  Source <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Cover */}
      <div className="container-wide -mt-px">
        <div className="aspect-[16/9] w-full overflow-hidden border-x border-b border-border bg-surface-sunken">
          {project.cover ? (
            <img src={project.cover} alt={project.title} className="h-full w-full object-cover" />
          ) : (
            <div
              className="h-full w-full bg-grid flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, hsl(${[...project.title].reduce((a, c) => a + c.charCodeAt(0), 0) % 360} 40% 88%), hsl(${([...project.title].reduce((a, c) => a + c.charCodeAt(0), 0) + 60) % 360} 30% 78%))`,
              }}
            >
              <span className="font-serif text-5xl md:text-7xl text-foreground/40 italic">{project.title}</span>
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="container-prose py-20">
        <div className="prose-content text-lg">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.body}</ReactMarkdown>
        </div>
      </div>

      {/* Next */}
      <div className="border-t border-border">
        <Link to={`/projects/${next.slug}`} className="group block container-wide py-16 hover:bg-surface-sunken transition-colors">
          <p className="label-mono">Next project</p>
          <p className="mt-2 font-serif text-3xl md:text-4xl font-medium group-hover:text-accent-foreground inline-flex items-center gap-3">
            {next.title}
            <ArrowUpRight className="h-7 w-7 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </p>
        </Link>
      </div>
    </article>
  );
}
