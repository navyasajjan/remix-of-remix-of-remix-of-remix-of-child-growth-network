import { Eye, Inbox, Settings2, MessageCircleHeart, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

const benefits = [
  { icon: Eye, label: "Increase Visibility" },
  { icon: Inbox, label: "Receive Appointment Requests" },
  { icon: Settings2, label: "Manage Operations" },
  { icon: MessageCircleHeart, label: "Improve Parent Communication" },
  { icon: TrendingUp, label: "Build Trust & Grow Your Centre" },
];

export function ForCdcOwners() {
  return (
    <section id="cdc-owners" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="ambient-bg relative overflow-hidden rounded-[44px] border border-white/60 p-8 sm:p-14">
            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Benefits For CDCs
                </h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  Turn discovery into appointments and run your centre with the
                  clarity of a modern product.
                </p>
                <Link
                  to="/list-your-cdc"
                  className="mt-7 inline-flex items-center gap-1.5 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
                >
                  List Your CDC <ArrowRight size={16} />
                </Link>
              </div>

              <div className="grid gap-3">
                {benefits.map((b, i) => (
                  <Reveal key={b.label} delay={i * 0.08}>
                    <div className="glass flex items-center gap-3 rounded-2xl p-4">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-coral/20 text-primary">
                        <b.icon size={18} />
                      </span>
                      <span className="font-semibold">{b.label}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
