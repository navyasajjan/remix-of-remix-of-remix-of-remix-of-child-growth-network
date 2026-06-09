import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { DiscoverNeeds } from "@/components/site/DiscoverNeeds";
import { MapSection } from "@/components/site/MapSection";
import { HowItWorks } from "@/components/site/HowItWorks";
import { ParentPlatform } from "@/components/site/ParentPlatform";
import { Resources, Testimonials } from "@/components/site/Resources";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ManoSetu — Find Trusted Child Development Centres in India" },
      {
        name: "description",
        content:
          "Search, compare, and connect with Child Development Centres across India. Discover centres, request appointments, and track your child's developmental journey.",
      },
      { property: "og:title", content: "ManoSetu — Find Trusted Child Development Centres" },
      {
        property: "og:description",
        content:
          "Discover Child Development Centres across India and track your child's developmental journey in one place.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="ambient-bg min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <DiscoverNeeds />
        <MapSection />
        <HowItWorks />
        <ParentPlatform />
        <Resources />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
