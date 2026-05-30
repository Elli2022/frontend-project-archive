import { useState, FormEvent } from "react";
import { profile } from "@/content/profile";
import { ArrowUpRight, Check } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend — open the user's mail client with a prefilled draft.
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Project inquiry — ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="container-wide py-20 md:py-28">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
        <div>
          <p className="label-mono mb-4">Contact</p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight leading-tight">
            Want to talk about a site,<br />
            <span className="italic text-muted-foreground">a rebuild, or a cleaner direction?</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md">
            This site is mostly for notes and process, but you are welcome to contact me if you want
            help with a website, frontend rebuild, or a clearer presentation of older work.
          </p>
          <div className="mt-10 space-y-3">
            <a href={`mailto:${profile.email}`} className="block">
              <p className="label-mono">Email</p>
              <p className="font-serif text-2xl link-underline">{profile.email}</p>
            </a>
            <div className="pt-6 border-t border-border space-y-2">
              {profile.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                   className="flex items-center justify-between py-2 group">
                  <span>{s.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card-surface rounded-xl border border-border p-8 space-y-5">
          <Field label="Your name" name="name" placeholder="Ada Lovelace" required />
          <Field label="Email" name="email" type="email" placeholder="ada@example.com" required />
          <div>
            <label className="label-mono mb-2 block">Tell me what you are working on</label>
            <textarea
              name="message"
              required
              rows={6}
              className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition"
              placeholder="A short brief: what needs to change, what is unclear today, and what kind of help you need."
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            {sent ? <><Check className="h-4 w-4" /> Opening your mail client…</> : "Send message"}
          </button>
          <p className="text-xs text-muted-foreground text-center font-mono">
            No backend, no tracking. This opens a draft in your mail client.
          </p>
        </form>
      </div>
    </div>
  );
}

function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="label-mono mb-2 block">{label}</label>
      <input
        {...props}
        className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition"
      />
    </div>
  );
}
