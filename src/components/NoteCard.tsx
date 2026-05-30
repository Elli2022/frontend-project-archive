import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Post } from "@/content/types";

export function NoteCard({ post, index = 0 }: { post: Post; index?: number }) {
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric", month: "short", day: "numeric",
  });
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/notes/${post.slug}`} className="group block py-6 border-b border-border">
        <div className="grid md:grid-cols-[140px_1fr_auto] gap-4 md:gap-8 items-baseline">
          <span className="font-mono text-xs text-muted-foreground">{date}</span>
          <div>
            <h3 className="font-serif text-xl font-medium tracking-tight group-hover:text-accent-foreground transition-colors">
              {post.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-2 max-w-2xl">{post.excerpt}</p>
          </div>
          <span className="font-mono text-xs text-muted-foreground">{post.readingTime}</span>
        </div>
      </Link>
    </motion.div>
  );
}
