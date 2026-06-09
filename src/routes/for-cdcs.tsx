import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Building2, Sparkles } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { TrustNetwork } from "@/components/site/TrustNetwork";
import { CdcOS } from "@/components/site/CdcOS";
import { ForCdcOwners } from "@/components/site/ForCdcOwners";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/for-cdcs")({
  head: () => ({
    meta: [
      { title: "For CDCs — Join India's Child Development Network | ManoSetu" },
      {
        name: "description",
        content:
          "Get discovered by more parents. Claim your Child Development Centre on ManoSetu and manage appointments, therapists, and operations in one place.",
      },
      { property: "og:title", content: "Get Discovered By More Parents — ManoSetu For CDCs" },
      {
        property: "og:description",
        content:
          "Join India's Child Development Network. List, claim, and manage your CDC with ManoSetu.",
      },
    ],
  }),
  component: ForCdcsPage,
});

function ForCdcsPage() {
  return (
    <div className="ambient-bg min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <CdcHero />
        <TrustNetwork />
        <CdcOS />
        <ForCdcOwners />
      </main>
      <Footer />
    </div>
  );
}

function CdcHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-10 sm:pt-36 sm:pb-16">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-soft mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-foreground"
        >
          <Building2 size={15} className="text-primary" />
          For Child Development Centres
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-balance text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl"
        >
          Get Discovered By More Parents
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-5 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Join India's Child Development Network and manage your centre with ManoSetu.
        </motion.p>

      </div>
    </section>
  );
}
