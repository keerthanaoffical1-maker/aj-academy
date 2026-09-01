import { Camera } from "lucide-react";

import { cn } from "@/lib/utils";

type Tone = "purple" | "royal" | "gold" | "coral" | "mint";

const toneClasses: Record<Tone, string> = {
  purple: "bg-secondary text-primary",
  royal: "bg-royal/12 text-royal",
  gold: "bg-gold/25 text-gold-foreground",
  coral: "bg-coral/18 text-coral",
  mint: "bg-mint/25 text-mint-foreground",
};

/**
 * Designed placeholder for a real photograph.
 * To use a real photo later: <ImagePlaceholder label="..." src={myPhoto} />
 */
export function ImagePlaceholder({
  label,
  tone = "purple",
  className,
  src,
  alt,
}: {
  label: string;
  tone?: Tone;
  className?: string;
  src?: string;
  alt?: string;
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt ?? label}
        loading="lazy"
        className={cn("h-full w-full rounded-2xl object-cover", className)}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl",
        toneClasses[tone],
        className,
      )}
      role="img"
      aria-label={`${label} — photo coming soon`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1.4px, transparent 1.4px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div
        aria-hidden
        className="soft-blob absolute -right-10 -top-10 size-32 bg-current opacity-15"
      />
      <div className="relative flex flex-col items-center gap-2 px-4 py-8 text-center">
        <span className="flex size-11 items-center justify-center rounded-full bg-card/80 shadow-soft">
          <Camera className="size-5" aria-hidden />
        </span>
        <span className="font-display text-sm font-bold sm:text-base">{label}</span>
        <span className="text-[11px] font-medium uppercase tracking-[0.14em] opacity-70">
          Photo coming soon
        </span>
      </div>
    </div>
  );
}
