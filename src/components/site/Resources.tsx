import { Newspaper, Compass, ListChecks, GraduationCap } from "lucide-react";
import { Reveal } from "./Reveal";

const resources = [
  { icon: Newspaper, title: "Articles", desc: "Guidance written for parents navigating child development." },
  { icon: Compass, title: "Development Guides", desc: "Understand stages, support options and what to expect." },
  { icon: ListChecks, title: "Milestone Checklists", desc: "Simple checklists to follow your child's progress." },
  { icon: GraduationCap, title: "Educational Content", desc: "Learn from accessible, calm and trustworthy material." },
];

export function Resources() {
  return (
    <section id="resources" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Parent Resources</h2>
          <p className="mt-4 text-muted-foreground">
            Thoughtful content to support you on the journey. More guides are on the way.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((r, i) => (
            <Reveal key={r.title} delay={(i % 4) * 0.08}>
              <div className="glass h-full rounded-[28px] p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-lavender/40 to-primary/15 text-primary">
                  <r.icon size={22} />
                </span>
                <h3 className="mt-4 text-lg font-bold">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                <span className="mt-4 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">
                  Coming soon
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <div className="glass rounded-[40px] p-10 text-center sm:p-14">
            <span className="inline-block rounded-full bg-primary/15 px-4 py-1.5 text-sm font-semibold text-primary">
              Community Voices Coming Soon
            </span>
            <h2 className="mt-5 text-2xl font-bold sm:text-3xl">Real Parent Stories</h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              We're building a space for genuine parent experiences. As families connect
              with centres through ManoSetu, their real stories will live here.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
