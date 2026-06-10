import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Sparkles,
  Heart,
  ShieldCheck,
  Cpu,
  TrendingUp,
  Compass,
  Users,
  LayoutDashboard,
  ArrowRight,
  Quote,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import nataraju from "@/assets/nataraju.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ManoSetu — A Bridge Between Families and Support" },
      {
        name: "description",
        content:
          "ManoSetu connects families with Child Development Centres across India — making developmental support easier to discover, access, and trust.",
      },
      { property: "og:title", content: "About ManoSetu — Bridge of the Mind" },
      {
        property: "og:description",
        content:
          "Why ManoSetu exists: connecting parents, therapists, and Child Development Centres on one trusted platform.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="ambient-bg min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <OurStory />
        <WhatIsManosetu />
        <Mission />
        <Values />
        <Founder />
        <WhatWeAreBuilding />
        <LookingAhead />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 sm:pt-36 sm:pb-20">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-soft mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-[0.18em] uppercase text-foreground sm:text-[13px]"
        >
          <Sparkles size={14} className="text-primary" />
          ManoSetu — Bridge of the Mind
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.05 }}
          className="text-balance text-4xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl"
        >
          A Bridge Between{" "}
          <span className="bg-gradient-to-r from-primary via-coral to-lavender bg-clip-text text-transparent">
            Families and Support
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:mt-7 sm:text-lg"
        >
          ManoSetu exists to help families find the right developmental support
          for their children — while helping Child Development Centres connect
          with the families who need them most.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="relative mx-auto mt-14 max-w-3xl sm:mt-20"
        >
          <NetworkIllustration />
        </motion.div>
      </div>
    </section>
  );
}

function NetworkIllustration() {
  const nodes = [
    { label: "Parents", x: 12, y: 24, tint: "from-primary/30 to-primary/10", color: "text-primary" },
    { label: "Children", x: 50, y: 8, tint: "from-coral/30 to-coral/10", color: "text-coral" },
    { label: "Therapists", x: 88, y: 24, tint: "from-accent/40 to-accent/10", color: "text-accent-foreground" },
    { label: "CDCs", x: 50, y: 84, tint: "from-primary/25 to-lavender/10", color: "text-primary" },
  ];
  return (
    <div className="glass relative h-[360px] rounded-[44px] p-6 sm:h-[440px] sm:p-10">
      <div className="absolute inset-0 overflow-hidden rounded-[44px]">
        <div className="animate-float-slow absolute -left-16 top-10 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
        <div className="animate-float absolute right-0 top-1/3 h-56 w-56 rounded-full bg-coral/15 blur-3xl" />
        <div className="animate-float-slow absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-lavender/30 blur-3xl" />
      </div>

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="rgb(var(--teal-rgb))" stopOpacity="0.55" />
            <stop offset="100%" stopColor="rgb(var(--coral-rgb))" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        {nodes.map((a, i) =>
          nodes.slice(i + 1).map((b, j) => (
            <line
              key={`${i}-${j}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#lineGrad)"
              strokeWidth="0.35"
              strokeDasharray="0.8 1.4"
            />
          ))
        )}
        <circle cx="50" cy="50" r="6" fill="rgb(var(--teal-rgb))" opacity="0.18">
          <animate attributeName="r" values="6;9;6" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.18;0.35;0.18" dur="3.5s" repeatCount="indefinite" />
        </circle>
      </svg>

      {nodes.map((n, i) => (
        <motion.div
          key={n.label}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <div className={`glass-strong flex items-center gap-2 rounded-full px-3.5 py-2 shadow-sm sm:px-4 sm:py-2.5`}>
            <span className={`grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br ${n.tint}`}>
              <span className={`h-2 w-2 rounded-full bg-current ${n.color}`} />
            </span>
            <span className="text-xs font-semibold sm:text-sm">{n.label}</span>
          </div>
        </motion.div>
      ))}

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="glass-strong rounded-2xl px-4 py-2.5 text-center">
          <p className="text-[10px] font-bold tracking-[0.22em] text-muted-foreground">MANOSETU</p>
          <p className="mt-0.5 text-xs font-semibold sm:text-sm">Bridge of the Mind</p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- OUR STORY ---------------- */

function OurStory() {
  const cards = [
    {
      title: "The Search",
      body: "Across India, thousands of families search for answers, recommendations, and trusted professionals for their child.",
    },
    {
      title: "The Gap",
      body: "Many qualified Child Development Centres struggle to reach the families who need them most.",
    },
    {
      title: "The Bridge",
      body: "The problem is not the lack of care. The problem is the lack of connection. ManoSetu was created to bridge that gap.",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Our Story</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">Why ManoSetu Exists</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Finding developmental support for a child should not take months. By bringing
            Child Development Centres, therapists, and families onto one trusted platform,
            we make it easier to discover support, connect with professionals, and stay
            engaged throughout a child's developmental journey.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:gap-6 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="glass h-full rounded-[32px] p-7 sm:p-8">
                <div className="text-[11px] font-bold tracking-[0.22em] text-muted-foreground">
                  0{i + 1}
                </div>
                <h3 className="mt-3 text-xl font-bold sm:text-2xl">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHAT IS MANOSETU ---------------- */

function WhatIsManosetu() {
  const families = [
    "Discover CDCs",
    "Compare options",
    "Connect with centres",
    "Request appointments",
    "Access reports",
    "Track developmental progress",
  ];
  const cdcs = [
    "Increase visibility",
    "Receive appointment requests",
    "Manage operations",
    "Communicate with families",
    "Grow their reach",
  ];

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What is ManoSetu</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">India's Child Development Network</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            A platform connecting parents of children aged 0–12 with Child Development
            Centres across India.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-[36px] p-8 sm:p-10">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-primary/5">
                <Users size={22} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold">For Families</h3>
              <ul className="mt-6 space-y-3">
                {families.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span className="text-[15px] text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass h-full rounded-[36px] p-8 sm:p-10">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-coral/30 to-coral/5">
                <LayoutDashboard size={22} className="text-coral" />
              </div>
              <h3 className="text-2xl font-bold">For CDCs</h3>
              <ul className="mt-6 space-y-3">
                {cdcs.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                    <span className="text-[15px] text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MISSION ---------------- */

function Mission() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-[44px] p-10 text-center sm:p-16">
            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-coral/15 blur-3xl animate-pulse-glow" />

            <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Our Mission
            </p>
            <h2 className="relative mt-4 text-balance text-3xl font-bold leading-tight sm:text-5xl">
              To make quality developmental support more accessible, discoverable, and
              connected for every family in India.
            </h2>
            <p className="relative mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We believe no child should miss timely intervention because finding support
              was difficult.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- VALUES ---------------- */

function Values() {
  const values = [
    {
      icon: Heart,
      title: "Early Is Everything",
      body: "The earlier a child receives the right support, the greater the long-term impact.",
      tint: "from-coral/25 to-coral/5",
      color: "text-coral",
    },
    {
      icon: ShieldCheck,
      title: "Trust Through Transparency",
      body: "Families deserve clarity when choosing developmental support.",
      tint: "from-primary/25 to-primary/5",
      color: "text-primary",
    },
    {
      icon: Cpu,
      title: "Technology Should Feel Human",
      body: "We build technology that simplifies care, not complicates it.",
      tint: "from-accent/35 to-accent/5",
      color: "text-accent-foreground",
    },
    {
      icon: TrendingUp,
      title: "Success Is Measured In Lives Improved",
      body: "Our impact is measured by families supported and journeys made easier.",
      tint: "from-lavender/45 to-lavender/10",
      color: "text-foreground",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Our Values</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">What We Believe</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:gap-6 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="glass h-full rounded-[32px] p-7 sm:p-9">
                <div className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${v.tint}`}>
                  <v.icon className={v.color} size={26} />
                </div>
                <h3 className="text-xl font-bold sm:text-2xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOUNDER ---------------- */

function Founder() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Founder</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
            Built From Experience. Driven By Purpose.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-8">
          <Reveal>
            <div className="glass relative h-full overflow-hidden rounded-[36px] p-8 text-center sm:p-10">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-coral/15 blur-3xl" />

              <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full ring-4 ring-white/70 shadow-xl sm:h-48 sm:w-48">
                <img src={nataraju.url} alt="Cdr. (Retd.) A. Nataraju" className="h-full w-full object-cover" />
              </div>
              <h3 className="relative mt-6 text-xl font-bold sm:text-2xl">
                Cdr. (Retd.) A. Nataraju
              </h3>
              <p className="relative mt-1 text-sm font-medium text-primary">
                Co-Founder & CEO
              </p>
              <p className="relative mt-4 text-sm leading-relaxed text-muted-foreground">
                Aeronautical Engineer · 29+ years in the Indian Navy · Enterprise software leader
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass h-full rounded-[36px] p-8 sm:p-10">
              <p className="text-[15px] leading-relaxed text-foreground/85 sm:text-base">
                Commander (Retd.) A. Nataraju is an Aeronautical Engineer and technology
                leader with more than 29 years of experience in the Indian Navy. Throughout
                his career, he worked on mission-critical engineering systems, flight
                simulators, and large-scale software programs where precision, reliability,
                and trust were non-negotiable.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-foreground/85 sm:text-base">
                After retirement, he continued building enterprise software solutions in the
                corporate sector before turning his attention to a problem affecting
                thousands of Indian families — access to developmental care.
              </p>

              <div className="glass-soft mt-7 rounded-[28px] p-6 sm:p-7">
                <Quote className="text-primary" size={22} />
                <p className="mt-3 text-balance text-lg font-medium leading-snug sm:text-xl">
                  "Technology should not replace human care. It should help people reach it
                  faster."
                </p>
                <p className="mt-3 text-sm text-muted-foreground">— Cdr. (Retd.) A. Nataraju</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHAT WE ARE BUILDING ---------------- */

function WhatWeAreBuilding() {
  const layers = [
    {
      icon: Compass,
      title: "CDC Discovery Network",
      body: "Helping families discover Child Development Centres across India.",
      tint: "from-primary/25 to-primary/5",
      color: "text-primary",
    },
    {
      icon: Heart,
      title: "Parent Engagement Platform",
      body: "Helping parents stay connected to their child's developmental journey.",
      tint: "from-coral/30 to-coral/5",
      color: "text-coral",
    },
    {
      icon: LayoutDashboard,
      title: "CDC Operating System",
      body: "Helping centres manage appointments, reports, communication, and operations.",
      tint: "from-accent/40 to-accent/5",
      color: "text-accent-foreground",
    },
  ];

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            What We Are Building
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-5xl">More Than A Directory</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            ManoSetu is building three connected layers.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:gap-6 lg:grid-cols-3">
          {layers.map((l, i) => (
            <Reveal key={l.title} delay={i * 0.1}>
              <div className="glass group h-full rounded-[32px] p-7 transition-transform hover:-translate-y-1 sm:p-8">
                <div className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${l.tint}`}>
                  <l.icon className={l.color} size={26} />
                </div>
                <p className="text-[11px] font-bold tracking-[0.22em] text-muted-foreground">
                  LAYER 0{i + 1}
                </p>
                <h3 className="mt-2 text-xl font-bold sm:text-2xl">{l.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {l.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOOKING AHEAD ---------------- */

function LookingAhead() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Looking Ahead
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold leading-tight sm:text-5xl">
            The Future We See
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We envision a future where every family can easily access developmental
            support, every centre can reach the right families, and every child receives
            the help they need at the right time.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground sm:text-lg">
            That future begins by building stronger connections — and that is exactly what
            ManoSetu was created to do.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */

function FinalCta() {
  return (
    <section className="relative pb-24 pt-10 sm:pb-32 sm:pt-16">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-[44px] p-10 text-center sm:p-16">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl animate-pulse-glow" />
            <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-coral/20 blur-3xl animate-pulse-glow" />
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lavender/30 blur-3xl" />

            <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Join The Network
            </p>
            <h2 className="relative mt-4 text-balance text-3xl font-bold leading-tight sm:text-5xl">
              Whether you're a parent or a Child Development Centre — ManoSetu is the
              bridge.
            </h2>
            <p className="relative mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Whether you're a parent searching for support or a Child Development Centre
              looking to grow, ManoSetu is building the bridge.
            </p>

            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                to="/"
                hash="map"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03] sm:text-base"
              >
                Find CDCs <ArrowRight size={18} />
              </Link>
              <Link
                to="/for-cdcs"
                className="glass-soft inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-foreground transition-transform hover:scale-[1.03] sm:text-base"
              >
                For CDCs
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
