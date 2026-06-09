import {
  CalendarRange,
  Users,
  Baby,
  BarChart3,
  ClipboardCheck,
  MessagesSquare,
  PieChart,
  FolderArchive,
} from "lucide-react";
import { Reveal } from "./Reveal";

const modules = [
  { icon: CalendarRange, label: "Appointments" },
  { icon: Users, label: "Therapists" },
  { icon: Baby, label: "Children" },
  { icon: BarChart3, label: "Reports" },
  { icon: ClipboardCheck, label: "Attendance" },
  { icon: MessagesSquare, label: "Parent Communication" },
  { icon: PieChart, label: "Analytics" },
  { icon: FolderArchive, label: "Document Storage" },
];

export function CdcOS() {
  return (
    <section id="cdc-os" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            The CDC Operating System
          </h2>
          <p className="mt-4 text-muted-foreground">
            Run every part of your centre from one calm workspace — appointments,
            therapists, reports, and parent communication.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="glass overflow-hidden rounded-[40px] p-5 sm:p-7">
            <div className="flex flex-col gap-5 lg:flex-row">
              {/* sidebar */}
              <div className="glass-soft w-full shrink-0 rounded-3xl p-4 lg:w-56">
                <p className="px-2 pb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Workspace
                </p>
                <div className="flex flex-col gap-1">
                  {modules.slice(0, 5).map((m, i) => (
                    <div
                      key={m.label}
                      className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium ${
                        i === 0 ? "bg-white/70 text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      <m.icon size={16} className={i === 0 ? "text-primary" : ""} />
                      {m.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* panel */}
              <div className="flex-1">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold">Today's Schedule</h3>
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                    8 appointments
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { t: "09:00", n: "Speech Therapy", s: "Confirmed" },
                    { t: "10:30", n: "Occupational Therapy", s: "Confirmed" },
                    { t: "12:00", n: "Behaviour Session", s: "Pending" },
                    { t: "14:15", n: "Special Education", s: "Confirmed" },
                  ].map((r) => (
                    <div key={r.t} className="glass rounded-2xl p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold">{r.t}</span>
                        <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground">
                          {r.s}
                        </span>
                      </div>
                      <p className="mt-2 text-sm font-medium">{r.n}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {modules.map((m, i) => (
            <Reveal key={m.label} delay={(i % 4) * 0.05}>
              <div className="glass flex items-center gap-2.5 rounded-2xl p-4">
                <m.icon size={18} className="text-primary" />
                <span className="text-sm font-semibold">{m.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
