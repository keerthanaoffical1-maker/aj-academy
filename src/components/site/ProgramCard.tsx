import { ImagePlaceholder } from "./ImagePlaceholder";
import { cn } from "@/lib/utils";

export function ProgramCard({
  name,
  description,
  tags,
  placeholderLabel,
  variant,
  icon,
}: {
  name: string;
  description: string;
  tags: string[];
  placeholderLabel: string;
  variant: "abacus" | "dance";
  icon: React.ReactNode;
}) {
  const isAbacus = variant === "abacus";

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-3xl p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lift sm:p-8",
        isAbacus
          ? "bg-card ring-1 ring-border"
          : "bg-primary text-primary-foreground",
      )}
    >
      <div
        aria-hidden
        className={cn(
          "soft-blob absolute -right-14 -top-14 size-44 opacity-25",
          isAbacus ? "bg-gold" : "bg-coral",
        )}
      />

      <div className="relative">
        <span
          className={cn(
            "flex size-12 items-center justify-center rounded-2xl",
            isAbacus ? "bg-royal/12 text-royal" : "bg-primary-foreground/15",
          )}
        >
          {icon}
        </span>
        <h3 className="mt-4 text-2xl">{name}</h3>
        <p
          className={cn(
            "mt-2 text-base",
            isAbacus ? "text-muted-foreground" : "text-primary-foreground/85",
          )}
        >
          {description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-bold",
                isAbacus
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-primary-foreground/15 text-primary-foreground",
              )}
            >
              {tag}
            </li>
          ))}
        </ul>

        <div
          className={cn(
            "mt-6 overflow-hidden rounded-2xl",
            isAbacus ? "aspect-[4/3]" : "aspect-[3/2]",
          )}
        >
          <ImagePlaceholder
            label={placeholderLabel}
            tone={isAbacus ? "royal" : "gold"}
          />
        </div>
      </div>
    </article>
  );
}
