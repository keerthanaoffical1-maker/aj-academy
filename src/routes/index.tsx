import { createFileRoute, Link } from "@tanstack/react-router";
import { Calculator, Music4, ArrowRight } from "lucide-react";

import { AgeBand } from "@/components/site/AgeBand";
import { BeadRow, Star } from "@/components/site/Decor";
import { FounderCard } from "@/components/site/FounderCard";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { ProgramCard } from "@/components/site/ProgramCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhyGrid } from "@/components/site/WhyGrid";
import { galleryItems, programs } from "@/lib/academy";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AJ Academy | Abacus & Bharatanatyam for Kids 5–15" },
      {
        name: "description",
        content:
          "AJ Academy teaches Abacus and Bharatanatyam to children aged 5–15. Founded by A. Naadhiya, with 8+ years of experience training children.",
      },
      { property: "og:title", content: "AJ Academy | Abacus & Bharatanatyam for Kids 5–15" },
      {
        property: "og:description",
        content:
          "A fun and engaging space where children build skills, confidence and creativity.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-14 pt-10 sm:px-6 sm:pt-16">
        <div aria-hidden className="soft-blob absolute -left-24 top-6 size-72 bg-gold/35" />
        <div aria-hidden className="soft-blob absolute -right-20 top-40 size-64 bg-coral/20" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-primary ring-1 ring-border">
              <Star className="size-3.5 text-gold" /> Ages 5–15
            </span>
            <h1 className="mt-5 text-5xl leading-[1.05] sm:text-6xl">
              Learn. Grow.{" "}
              <span className="brush-underline text-primary">Shine.</span>
            </h1>
            <p className="mt-4 font-display text-xl text-royal sm:text-2xl">
              Abacus &amp; Bharatanatyam for Children aged 5–15
            </p>
            <p className="mt-3 max-w-md text-base text-muted-foreground">
              A fun and engaging space where children build skills, confidence and
              creativity.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                hash="enquire"
                className="rounded-full bg-coral px-6 py-3.5 font-display text-base font-bold text-coral-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Enquire Now
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 rounded-full bg-card px-6 py-3.5 font-display text-base font-bold text-foreground ring-1 ring-border transition-colors hover:bg-secondary"
              >
                Explore Programs <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>

            <BeadRow className="mt-8" />
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -right-3 -top-4 hidden rotate-6 rounded-2xl bg-gold px-3 py-1.5 font-display text-sm font-bold text-gold-foreground shadow-soft sm:block"
            >
              8 + 5 = ?
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] ring-1 ring-border sm:aspect-[5/5]">
              <ImagePlaceholder label="Students Learning" tone="purple" />
            </div>
            <div
              aria-hidden
              className="absolute -bottom-4 -left-4 hidden -rotate-3 rounded-2xl bg-royal px-3 py-1.5 font-display text-sm font-bold text-royal-foreground shadow-soft sm:block"
            >
              Tha • Thai • Thai
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <Reveal>
            <div className="aspect-[4/3] overflow-hidden rounded-[2rem] ring-1 ring-border">
              <ImagePlaceholder label="Academy Moments" tone="mint" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <SectionHeading
              eyebrow="About us"
              title={<>Welcome to <span className="text-primary">AJ Academy</span></>}
              subtitle="AJ Academy provides Abacus and Bharatanatyam training for children aged 5–15, creating an encouraging environment where children can learn, practice and grow with confidence."
            />
            <ul className="mt-6 flex flex-wrap gap-2">
              {[
                ["5–15 Years", "bg-gold/30 text-gold-foreground"],
                ["Abacus", "bg-royal/12 text-royal"],
                ["Bharatanatyam", "bg-coral/18 text-coral"],
                ["8+ Years Experience", "bg-secondary text-secondary-foreground"],
              ].map(([label, tone]) => (
                <li key={label} className={`rounded-full px-3.5 py-1.5 text-sm font-bold ${tone}`}>
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Programs */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Programs" title="What We Teach" align="center" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {programs.map((program, i) => (
              <Reveal key={program.name} delay={i * 90}>
                <ProgramCard
                  {...program}
                  icon={
                    program.variant === "abacus" ? (
                      <Calculator className="size-6" aria-hidden />
                    ) : (
                      <Music4 className="size-6" aria-hidden />
                    )
                  }
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <SectionHeading eyebrow="Why us" title="Why AJ Academy?" />
          <WhyGrid />
        </div>
      </section>

      {/* Founder */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-card p-6 ring-1 ring-border sm:p-10">
          <SectionHeading eyebrow="Founder" title="Meet the Founder" className="mb-8" />
          <FounderCard />
        </div>
      </section>

      {/* Ages */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <AgeBand />
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Gallery" title="Life at AJ Academy" />
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 font-display text-base font-bold text-primary hover:gap-3"
            >
              See all <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {galleryItems.slice(0, 4).map((item, i) => (
              <Reveal key={item.label} delay={i * 60}>
                <div className="aspect-square overflow-hidden rounded-2xl ring-1 ring-border">
                  <ImagePlaceholder label={item.label} tone={item.tone} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-14 sm:px-6">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
          <div aria-hidden className="soft-blob absolute -left-12 -bottom-12 size-48 bg-gold/40" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl">Ready to Begin?</h2>
            <p className="mx-auto mt-3 max-w-md text-primary-foreground/85">
              Give your child a fun space to learn, practice and grow.
            </p>
            <Link
              to="/contact"
              hash="enquire"
              className="mt-7 inline-block rounded-full bg-gold px-7 py-3.5 font-display text-base font-bold text-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
