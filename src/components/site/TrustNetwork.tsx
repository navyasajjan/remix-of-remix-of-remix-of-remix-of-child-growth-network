import { ArrowDown, ShieldCheck, BadgeCheck, CalendarCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const stages = [
  {
    icon: ShieldCheck,
    title: "Listed CDC",
    desc: "Basic centre profile visible in ManoSetu search.",
    tint: "from-primary/20 to-primary/5",
    color: "text-primary",
  },
  {
    icon: BadgeCheck,
    title: "Claimed CDC",
    desc: "Ownership verified via phone and email.",
    tint: "from-accent/30 to-accent/5",
    color: "text-accent-foreground",
  },
  {
    icon: CalendarCheck,
    title: "Booking Enabled CDC",
    desc: "Accept appointments and manage operations through ManoSetu.",
    tint: "from-coral/20 to-coral/5",
    color: "text-coral",
  },
];

export function TrustNetwork() {
  return (
    <section id="journey" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">The CDC Journey</h2>
          <p className="mt-4 text-muted-foreground">
            Every centre on ManoSetu moves through a transparent lifecycle —
            from discoverable to fully operational.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col items-center gap-4 lg:flex-row lg:items-stretch lg:gap-5">
          {stages.map((s, i) => (
            <div key={s.title} className="flex w-full flex-col items-center lg:flex-row lg:items-stretch">
              <Reveal delay={i * 0.12} className="w-full">
                <div className="glass h-full rounded-[32px] p-7">
                  <div className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${s.tint}`}>
                    <s.icon className={s.color} size={26} />
                  </div>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>

              {i < stages.length - 1 && (
                <div className="my-2 flex items-center justify-center text-primary lg:mx-1 lg:my-0">
                  <ArrowDown size={22} className="lg:-rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
