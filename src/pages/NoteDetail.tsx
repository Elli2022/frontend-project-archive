import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import { getPost } from "@/content/posts";
import { Tag } from "@/components/Tag";

export default function NoteDetail() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;

  if (!post) {
    return (
      <div className="container-prose py-32 text-center">
        <p className="label-mono mb-3">404</p>
        <h1 className="font-serif text-3xl">That note is not published here.</h1>
        <Link to="/notes" className="mt-6 inline-block link-underline font-mono text-sm">← Back to notes</Link>
      </div>
    );
  }

  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <article className="container-prose py-20">
      <Link to="/notes" className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground link-underline">
        <ArrowLeft className="h-3.5 w-3.5" /> All notes
      </Link>
      <p className="label-mono mt-8">{date} · {post.readingTime}</p>
      <h1 className="mt-3 font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight">
        {post.title}
      </h1>
      <p className="mt-5 text-lg text-muted-foreground">{post.excerpt}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags.map((t) => <Tag key={t} variant="outline">{t}</Tag>)}
      </div>

      <div className="mt-12 prose-content text-lg">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </div>
    </article>
  );
}
