import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profile } from "@/content/profile";
import { featuredProjects } from "@/content/projects";
import { posts } from "@/content/posts";
import { ProjectCard } from "@/components/ProjectCard";
import { NoteCard } from "@/components/NoteCard";
import { SectionHeader } from "@/components/SectionHeader";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-radial-accent pointer-events-none" />
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-60" />
        <div className="container-wide relative pt-24 pb-28 md:pt-32 md:pb-36">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="label-mono mb-6 inline-flex items-center gap-2"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Companion site · process, rebuilds, and smaller experiments
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.95] max-w-5xl"
          >
            Notes, rebuilds, and a quieter layer <span className="text-accent">of my work</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground"
          >
            This site complements my main portfolio. It is where I collect project refreshes,
            frontend experiments, and short writing about how I turn scattered older work into
            something clearer and more intentional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center"
          >
            <Link
              to="/projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Read selected rebuilds
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="https://eleonora-portfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors"
            >
              Visit main portfolio
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground font-mono"
          >
            <span>📍 {profile.location}</span>
            <span>·</span>
            <span>{profile.title}</span>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border py-6 overflow-hidden bg-surface-sunken">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...profile.stack, ...profile.stack].map((s, i) => (
            <span key={i} className="font-mono text-sm text-muted-foreground mx-6 inline-flex items-center gap-6">
              {s} <span className="text-accent">◆</span>
            </span>
          ))}
        </div>
      </section>

      <section className="container-wide py-24 md:py-32">
        <div className="flex items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Selected rebuilds / 2024 — 2026"
            title={
              <>
                Older projects,<br />
                <span className="italic text-muted-foreground">made stronger on purpose</span>.
              </>
            }
          />
          <Link to="/projects" className="hidden md:inline-flex items-center gap-1 font-mono text-sm link-underline">
            All projects <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface-sunken">
        <div className="container-prose py-24 md:py-32">
          <p className="label-mono mb-6">Why this site exists</p>
          <p className="font-serif text-2xl md:text-3xl leading-snug tracking-tight">
            {profile.longBio}
          </p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-1 font-mono text-sm link-underline">
            Read the fuller context <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      <section className="container-wide py-24 md:py-32">
        <div className="flex items-end justify-between gap-6 mb-6">
          <SectionHeader eyebrow="Notes & writing" title="Recent thinking around cleanup and frontend craft" />
          <Link to="/notes" className="hidden md:inline-flex items-center gap-1 font-mono text-sm link-underline">
            All notes <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div>
          {posts.slice(0, 3).map((p, i) => (
            <NoteCard key={p.slug} post={p} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
