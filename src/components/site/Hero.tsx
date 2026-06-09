import { motion } from "motion/react";
import { Search, MapPin, ArrowRight, Sparkles, Stethoscope, Sparkle } from "lucide-react";
import { IndiaMap } from "./IndiaMap";

const floatingCards = [
  { label: "Speech Therapy", sub: "Nearby centres", x: "left-2 top-10", c: "from-primary/30 to-primary/5", icon: Stethoscope },
  { label: "Verified Centres", sub: "Trusted by parents", x: "right-2 top-24", c: "from-accent/40 to-accent/10", icon: Sparkle },
  { label: "Track Progress", sub: "Reports & milestones", x: "left-0 bottom-16", c: "from-coral/30 to-coral/5", icon: Sparkles },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-10 sm:pt-36">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-soft mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-foreground lg:mx-0"
            >
              <Sparkles size={15} className="text-primary" />
              India's Trusted Child Development Network
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl"
            >
              Find Trusted Child Development Centres Near You
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
            >
              Search, compare, and connect with Child Development Centres across India.
              Discover centres, request appointments, and track your child's developmental journey.
            </motion.p>

            {/* Search bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="glass-strong mx-auto mt-7 flex max-w-xl items-center gap-2 rounded-full p-2 lg:mx-0"
            >
              <div className="flex flex-1 items-center gap-2 px-3">
                <Search size={18} className="text-muted-foreground" />
                <input
                  className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground"
                  placeholder="Search city, pincode, area or therapy type"
                />
              </div>
              <button className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_8px_24px_-6px_color-mix(in_oklab,var(--primary)_55%,transparent)] ring-1 ring-white/40 transition-all hover:scale-[1.04] hover:shadow-[0_12px_32px_-6px_color-mix(in_oklab,var(--primary)_70%,transparent)]">
                Find CDCs
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <a
                href="#map"
                className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
              >
                Find CDCs <ArrowRight size={16} />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white/40 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-white/70"
              >
                How It Works
              </a>
            </motion.div>
          </div>

          {/* Map visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass relative mx-auto aspect-[5/6] w-full max-w-md rounded-[40px] p-5"
            >
              <div className="flex items-center justify-between px-1 pb-2">
                <div className="flex items-center gap-1.5 text-sm font-semibold">
                  <MapPin size={16} className="text-primary" /> Centres across India
                </div>
                <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                  Live
                </span>
              </div>
              <IndiaMap />
            </motion.div>

            {floatingCards.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                className={`glass-strong absolute ${c.x} hidden rounded-2xl p-3 sm:block`}
                style={{ animation: `float ${7 + i * 1.5}s ease-in-out infinite` }}
              >
                <div className={`mb-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r ${c.c}`}>
                  <c.icon size={14} className="text-primary" />
                </div>
                <p className="text-sm font-semibold leading-tight">{c.label}</p>
                <p className="text-xs text-muted-foreground">{c.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
