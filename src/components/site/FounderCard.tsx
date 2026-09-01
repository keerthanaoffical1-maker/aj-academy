import { GraduationCap, Sparkles } from "lucide-react";

import { ImagePlaceholder } from "./ImagePlaceholder";
import { BeadRow } from "./Decor";

export function FounderCard() {
  return (
    <div className="grid gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:items-center">
      <div className="relative">
        <div
          aria-hidden
          className="soft-blob absolute -left-6 -top-6 size-32 bg-gold/40"
        />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-border">
          <ImagePlaceholder label="Founder Photo" tone="coral" />
        </div>
      </div>

      <div>
        <h3 className="text-2xl sm:text-3xl">A. Naadhiya</h3>
        <p className="mt-1 font-display text-lg text-primary">
          Founder &amp; Abacus Trainer
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-royal/12 px-3 py-1 text-sm font-bold text-royal">
            <GraduationCap className="size-4" aria-hidden />
            B.Sc. Computer Science | MCA
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/30 px-3 py-1 text-sm font-bold text-gold-foreground">
            <Sparkles className="size-4" aria-hidden />
            8+ Years Experience
          </span>
        </div>

        <BeadRow className="mt-5" />

        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          “I am A. Naadhiya, Founder of AJ Academy and an Abacus Trainer with more
          than 8 years of experience in training children. With a background in
          B.Sc. Computer Science and MCA, I am passionate about creating a positive
          and engaging learning environment for children.”
        </p>
      </div>
    </div>
  );
}
