import { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  children,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && <p className="label-mono mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight">{title}</h2>
      {children && (
        <div className="mt-3 text-muted-foreground max-w-2xl text-base leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}
