import { Search, GitCompare, MessageSquare, LineChart } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  { n: "01", icon: Search, title: "Find CDCs", desc: "Search by city, therapy type, and developmental needs." },
  { n: "02", icon: GitCompare, title: "Compare Options", desc: "Review centre details, therapists, and services." },
  { n: "03", icon: MessageSquare, title: "Connect", desc: "Contact centres and request appointments." },
  { n: "04", icon: LineChart, title: "Track Progress", desc: "Access reports, milestones, notes, and updates." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">How ManoSetu Works For Parents</h2>
          <p className="mt-4 text-muted-foreground">
            From first search to ongoing progress — a calm, guided path for every parent.
          </p>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/40 via-accent/40 to-coral/40 lg:block" />
          <div className="flex flex-col gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={(i % 2) * 0.1}>
                <div
                  className={`flex items-center gap-5 lg:w-1/2 ${
                    i % 2 === 1 ? "lg:ml-auto lg:flex-row-reverse lg:text-right" : ""
                  }`}
                >
                  <div className="glass flex flex-1 items-start gap-4 rounded-[30px] p-6">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary/20 to-lavender/30 text-primary">
                      <s.icon size={22} />
                    </span>
                    <div className={i % 2 === 1 ? "lg:text-left" : ""}>
                      <p className="text-xs font-bold tracking-widest text-primary">{s.n}</p>
                      <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
