import { SlidersHorizontal, MapPin, Layers, Navigation } from "lucide-react";
import { Reveal } from "./Reveal";
import { IndiaMap } from "./IndiaMap";

const filters = [
  { icon: MapPin, label: "City" },
  { icon: Layers, label: "Therapy Type" },
  { icon: SlidersHorizontal, label: "CDC Status" },
  { icon: Navigation, label: "Distance" },
];

export function MapSection() {
  return (
    <section id="map" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Explore the CDC Map</h2>
          <p className="mt-4 text-muted-foreground">
            Zoom across India and visually explore centre density near you.
            Floating filters keep discovery effortless.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="glass relative overflow-hidden rounded-[40px] p-3 sm:p-5">
            {/* filters bar */}
            <div className="absolute left-4 right-4 top-4 z-10 flex flex-wrap gap-2 sm:left-6 sm:top-6">
              {filters.map((f) => (
                <button
                  key={f.label}
                  className="glass-strong inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold sm:text-sm"
                >
                  <f.icon size={14} className="text-primary" />
                  {f.label}
                </button>
              ))}
            </div>

            <div className="relative mx-auto grid aspect-[4/3] w-full max-w-3xl place-items-center rounded-[28px] bg-gradient-to-br from-primary/5 via-transparent to-lavender/20">
              <div className="h-[88%] w-[88%]">
                <IndiaMap />
              </div>
            </div>

            {/* floating result card */}
            <div
              className="glass-strong absolute bottom-5 right-5 hidden max-w-[230px] rounded-3xl p-4 sm:block"
              style={{ animation: "float 8s ease-in-out infinite" }}
            >
              <p className="text-xs font-medium text-muted-foreground">Now viewing</p>
              <p className="text-lg font-bold">Centres near you</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Tap a marker to see services, status and contact options.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
