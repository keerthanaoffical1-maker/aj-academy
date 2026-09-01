import { HeartHandshake, Route, Sparkles, TrendingUp } from "lucide-react";

import { Reveal } from "./Reveal";

const points = [
  {
    icon: Sparkles,
    title: "Experienced Guidance",
    text: "8+ years of experience in training children.",
    tone: "bg-gold/30 text-gold-foreground",
  },
  {
    icon: HeartHandshake,
    title: "Fun Learning",
    text: "A positive and engaging environment for children.",
    tone: "bg-coral/18 text-coral",
  },
  {
    icon: TrendingUp,
    title: "Skills That Grow With Them",
    text: "Develop concentration, confidence, creativity and discipline.",
    tone: "bg-royal/12 text-royal",
  },
  {
    icon: Route,
    title: "Two Unique Learning Paths",
    text: "Explore Abacus, Bharatanatyam, or both.",
    tone: "bg-secondary text-primary",
  },
];

export function WhyGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {points.map((point, i) => (
        <Reveal key={point.title} delay={i * 70}>
          <div className="flex h-full gap-4 rounded-2xl bg-card p-5 ring-1 ring-border transition-shadow hover:shadow-soft">
            <span className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${point.tone}`}>
              <point.icon className="size-5" aria-hidden />
            </span>
            <div>
              <h3 className="text-lg">{point.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{point.text}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
