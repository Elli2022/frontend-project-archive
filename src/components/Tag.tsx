interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
}

export function Tag({ children, variant = "default" }: TagProps) {
  const styles = {
    default: "bg-secondary text-secondary-foreground",
    accent: "bg-accent text-accent-foreground",
    outline: "border border-border text-muted-foreground",
  }[variant];
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-mono uppercase tracking-wider ${styles}`}>
      {children}
    </span>
  );
}
