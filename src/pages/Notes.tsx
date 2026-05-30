import { posts } from "@/content/posts";
import { NoteCard } from "@/components/NoteCard";

export default function Notes() {
  return (
    <div className="container-wide py-20 md:py-28">
      <p className="label-mono mb-4">Notes · {posts.length}</p>
      <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight leading-tight max-w-3xl">
        Short notes on cleanup, frontend decisions, and why some projects are worth rescuing.
      </h1>

      <div className="mt-16 max-w-4xl">
        {posts.map((p, i) => <NoteCard key={p.slug} post={p} index={i} />)}
      </div>
    </div>
  );
}
