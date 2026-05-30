import { profile } from "@/content/profile";
import { SectionHeader } from "@/components/SectionHeader";
import { Tag } from "@/components/Tag";

export default function About() {
  return (
    <div className="container-prose py-20 md:py-28">
      <p className="label-mono mb-4">About</p>
      <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight">
        I use this site to show the work that usually sits between the versions people actually see.
      </h1>

      <div className="prose-content mt-10 text-lg">
        <p>{profile.longBio}</p>
        <p>
          My main portfolio is where I present finished case studies. This site is more about process:
          what gets improved, what gets reorganized, what deserves a second pass, and what should
          honestly be deleted.
        </p>
        <p>
          I am especially interested in the kind of frontend work where clarity matters more than
          noise: company websites, structured content, lighter apps with real data, and older projects
          that can become much stronger with better framing and interaction design.
        </p>
      </div>

      <div className="mt-16">
        <SectionHeader eyebrow="Toolkit" title="What I reach for" />
        <div className="mt-6 flex flex-wrap gap-2">
          {profile.stack.map((s) => <Tag key={s}>{s}</Tag>)}
        </div>
      </div>

      <div className="mt-20">
        <SectionHeader eyebrow="Timeline" title="The context behind the work" />
        <ol className="mt-8 space-y-8 border-l border-border pl-6">
          {profile.experience.map((e) => (
            <li key={e.role + e.org} className="relative">
              <span className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background" />
              <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
              <p className="mt-1 font-serif text-xl">{e.role} <span className="text-muted-foreground">— {e.org}</span></p>
              <p className="mt-1.5 text-muted-foreground">{e.summary}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
