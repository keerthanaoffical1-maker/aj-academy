import { cn } from "@/lib/utils";

/** A short row of abacus beads used as a small decorative divider. */
export function BeadRow({ className }: { className?: string }) {
  const tones = [
    "bg-primary",
    "bg-gold",
    "bg-coral",
    "bg-royal",
    "bg-mint",
    "bg-primary",
  ];
  return (
    <div className={cn("flex items-center gap-1.5", className)} aria-hidden>
      <span className="h-0.5 w-4 rounded-full bg-border" />
      {tones.map((tone, i) => (
        <span key={i} className={cn("size-2.5 rounded-full", tone)} />
      ))}
      <span className="h-0.5 w-4 rounded-full bg-border" />
    </div>
  );
}

export function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12 2.5c.7 3.8 2.2 5.3 6 6-3.8.7-5.3 2.2-6 6-.7-3.8-2.2-5.3-6-6 3.8-.7 5.3-2.2 6-6Z" />
    </svg>
  );
}
