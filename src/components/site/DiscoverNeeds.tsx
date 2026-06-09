import {
  MessageCircle,
  Hand,
  Brain,
  Puzzle,
  Zap,
  GraduationCap,
  BookOpen,
  Baby,
} from "lucide-react";
import { Reveal } from "./Reveal";

const needs = [
  { icon: MessageCircle, label: "Speech Therapy" },
  { icon: Hand, label: "Occupational Therapy" },
  { icon: Brain, label: "Behaviour Therapy" },
  { icon: Puzzle, label: "Autism Support" },
  { icon: Zap, label: "ADHD Support" },
  { icon: GraduationCap, label: "Special Education" },
  { icon: BookOpen, label: "Learning Difficulties" },
  { icon: Baby, label: "Development Delays" },
];

export function DiscoverNeeds() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Discover CDCs by Need</h2>
          <p className="mt-4 text-muted-foreground">
            Start with what your child needs. Explore centres offering the right
            support and specialisations.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {needs.map((n, i) => (
            <Reveal key={n.label} delay={(i % 4) * 0.08}>
              <button className="glass group flex h-full w-full flex-col items-start gap-4 rounded-[28px] p-6 text-left transition-all duration-300 hover:-translate-y-1.5 hover:glow-teal">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary/15 to-lavender/30 text-primary transition-transform group-hover:scale-110">
                  <n.icon size={22} />
                </span>
                <span className="font-semibold leading-snug">{n.label}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
