import {
  User,
  CalendarDays,
  CheckCircle2,
  FileText,
  Flag,
  StickyNote,
  Activity,
  Bell,
} from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  { icon: User, label: "Child Profile" },
  { icon: CalendarDays, label: "Appointment History" },
  { icon: CheckCircle2, label: "Attendance" },
  { icon: FileText, label: "Progress Reports" },
  { icon: Flag, label: "Milestones" },
  { icon: StickyNote, label: "Therapist Notes" },
  { icon: Activity, label: "Development Timeline" },
  { icon: Bell, label: "Reminders" },
];

export function ParentPlatform() {
  return (
    <section id="parents" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* phone mockup */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto w-full max-w-[300px]">
              <div className="glass-strong rounded-[44px] p-3 shadow-2xl">
                <div className="ambient-bg overflow-hidden rounded-[36px] p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Good morning</p>
                      <p className="font-display text-lg font-bold">Aarav's Journey</p>
                    </div>
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground">
                      A
                    </span>
                  </div>

                  <div className="glass mb-3 rounded-3xl p-4">
                    <p className="text-xs font-medium text-muted-foreground">This week</p>
                    <p className="mt-1 text-2xl font-bold">3 sessions</p>
                    <div className="mt-3 flex gap-1.5">
                      {[60, 90, 45, 100, 70, 30, 80].map((h, i) => (
                        <div key={i} className="flex-1 rounded-full bg-primary/15">
                          <div
                            className="rounded-full bg-gradient-to-t from-primary to-accent"
                            style={{ height: `${h * 0.5 + 10}px` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="glass rounded-3xl p-3">
                      <Flag size={16} className="text-coral" />
                      <p className="mt-2 text-sm font-semibold">Milestone</p>
                      <p className="text-xs text-muted-foreground">First full sentence</p>
                    </div>
                    <div className="glass rounded-3xl p-3">
                      <CalendarDays size={16} className="text-primary" />
                      <p className="mt-2 text-sm font-semibold">Next visit</p>
                      <p className="text-xs text-muted-foreground">Thu, 10:30 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* copy + feature grid */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Everything Parents Need In One Place
              </h2>
              <p className="mt-4 text-muted-foreground">
                A calm, beautiful space to follow your child's development — closer to
                Apple Health than an ERP.
              </p>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {features.map((f, i) => (
                <Reveal key={f.label} delay={(i % 2) * 0.06}>
                  <div className="glass flex items-center gap-3 rounded-2xl p-4">
                    <f.icon size={18} className="shrink-0 text-primary" />
                    <span className="text-sm font-semibold">{f.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
