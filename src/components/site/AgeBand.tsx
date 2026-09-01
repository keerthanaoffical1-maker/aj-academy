import { Star } from "./Decor";

const ages = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const tones = [
  "bg-gold text-gold-foreground",
  "bg-coral text-coral-foreground",
  "bg-royal text-royal-foreground",
  "bg-mint text-mint-foreground",
  "bg-primary text-primary-foreground",
];

export function AgeBand() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-royal px-6 py-12 text-royal-foreground sm:px-12">
      <Star
        className="absolute right-8 top-8 size-10 text-gold opacity-70"
      />
      <div
        aria-hidden
        className="soft-blob absolute -bottom-16 -left-10 size-52 bg-primary/40"
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-gold-foreground">
          For Ages 5–15
        </span>
        <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
          Learning Starts Young. Confidence Grows Along the Way.
        </h2>
        <p className="mt-3 text-royal-foreground/80">
          Age-appropriate learning in a friendly environment.
        </p>

        <ul className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
          {ages.map((age, i) => (
            <li
              key={age}
              className={`flex size-11 items-center justify-center rounded-2xl font-display text-lg font-bold transition-transform duration-200 hover:-translate-y-1 sm:size-14 sm:text-xl ${tones[i % tones.length]}`}
            >
              {age}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
