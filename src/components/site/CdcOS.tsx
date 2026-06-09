import {
  LayoutDashboard,
  BarChart3,
  Search,
  Users,
  ClipboardList,
  Star,
  Wallet,
  Globe2,
  Settings as SettingsIcon,
  Sparkles,
  Building2,
  Check,
  Eye,
  ExternalLink,
  Bell,
  ChevronLeft,
} from "lucide-react";
import { Reveal } from "./Reveal";

const sidebar = [
  { icon: Sparkles, label: "Overview", active: true },
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Search, label: "SEO & Visibility" },
  { icon: Users, label: "Staff Management" },
  { icon: ClipboardList, label: "Registrations" },
  { icon: Star, label: "Reviews" },
  { icon: Wallet, label: "Payments" },
  { icon: Globe2, label: "Website Optimization" },
  { icon: SettingsIcon, label: "Settings" },
];

const steps = [
  { label: "Settings", state: "current" as const },
  { label: "Staff Management", state: "done" as const },
  { label: "Services", state: "done" as const },
  { label: "Facilities", state: "done" as const },
  { label: "Therapists", state: "done" as const },
  { label: "Preview & Publish", state: "preview" as const },
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
            Your admin dashboard — guided setup, staff, services, registrations,
            analytics, and publishing in one calm workspace.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="glass overflow-hidden rounded-[28px] p-0 shadow-xl">
            <div className="flex min-h-[520px] flex-col lg:flex-row">
              {/* Sidebar */}
              <aside className="w-full shrink-0 border-b border-white/40 bg-white/60 p-3 sm:p-4 lg:w-64 lg:border-b-0 lg:border-r">
                <div className="mb-3 flex items-center justify-between gap-2 rounded-xl bg-white/70 p-2.5 lg:mb-4">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary/70 text-[10px] font-bold text-primary-foreground">
                      CDC
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-semibold leading-tight">
                        Sunshine Child D...
                      </p>
                      <p className="truncate text-[10px] text-muted-foreground">
                        CDC Admin Dashboard
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-emerald-100 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-emerald-700">
                    Approved
                  </span>
                </div>
                <nav className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1 lg:mx-0 lg:flex-col lg:gap-0.5 lg:overflow-visible lg:px-0 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {sidebar.map((item) => (
                    <div
                      key={item.label}
                      className={`flex shrink-0 items-center gap-2 rounded-lg px-2.5 py-1.5 text-[12px] font-medium transition lg:gap-2.5 lg:px-3 lg:py-2 lg:text-[13px] ${
                        item.active
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-white/60"
                      }`}
                    >
                      <item.icon size={14} className="shrink-0" />
                      <span className="whitespace-nowrap lg:truncate">{item.label}</span>
                    </div>
                  ))}
                </nav>
              </aside>

              {/* Main */}
              <div className="flex-1 bg-gradient-to-br from-white/40 via-primary/5 to-accent/10 p-5 sm:p-7">
                {/* Top bar */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-lg font-bold">Overview</h3>
                    <span className="hidden items-center gap-1.5 rounded-full bg-white/70 px-3 py-1 text-xs font-medium sm:inline-flex">
                      <Building2 size={12} />
                      Sunshine Child Development Centre
                    </span>
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                      Approved
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-primary">
                    <span className="hidden items-center gap-1 truncate sm:inline-flex max-w-[220px]">
                      <span className="truncate">manosetu.org/cdc/sunshine...</span>
                      <ExternalLink size={11} />
                    </span>
                    <div className="relative">
                      <Bell size={15} className="text-muted-foreground" />
                      <span className="absolute -right-1.5 -top-1.5 grid h-3.5 w-3.5 place-items-center rounded-full bg-primary text-[8px] font-bold text-primary-foreground">
                        3
                      </span>
                    </div>
                  </div>
                </div>

                {/* Roadmap stepper */}
                <div className="glass-soft rounded-2xl p-5">
                  <div className="relative flex items-start justify-between gap-2 overflow-x-auto pb-2">
                    {steps.map((step, i) => {
                      const isDone = step.state === "done";
                      const isCurrent = step.state === "current";
                      const isPreview = step.state === "preview";
                      return (
                        <div key={step.label} className="relative flex flex-1 min-w-[90px] flex-col items-center">
                          {i < steps.length - 1 && (
                            <div
                              className={`absolute left-1/2 top-5 h-0.5 w-full ${
                                isDone || isCurrent ? "bg-emerald-400" : "bg-emerald-300"
                              }`}
                              style={{ zIndex: 0 }}
                            />
                          )}
                          <div
                            className={`relative z-10 grid h-10 w-10 place-items-center rounded-full border-2 ${
                              isCurrent
                                ? "border-amber-400 bg-amber-50 text-amber-600"
                                : isPreview
                                ? "border-amber-400 bg-amber-50 text-amber-600"
                                : "border-emerald-400 bg-emerald-50 text-emerald-600"
                            }`}
                          >
                            {isCurrent ? (
                              <SettingsIcon size={16} />
                            ) : isPreview ? (
                              <Eye size={16} />
                            ) : (
                              <Check size={16} strokeWidth={3} />
                            )}
                          </div>
                          <span className="mt-2 text-center text-[11px] font-medium">
                            {step.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Roadmap card */}
                <div className="mt-5 glass rounded-2xl p-5">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="max-w-xl">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700">
                        <Sparkles size={11} />
                        Setup Roadmap
                      </span>
                      <h4 className="mt-3 text-lg font-bold leading-tight">
                        Finish your CDC setup with a guided roadmap
                      </h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        Configure profile, staff, services, facilities, therapists,
                        and finally preview the microsite before publishing.
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/60 bg-white/60 p-3 text-right">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                        Overall Completion
                      </p>
                      <p className="mt-1 text-2xl font-extrabold text-primary">91%</p>
                      <p className="text-[10px] text-muted-foreground">4 of 6 steps finished</p>
                      <div className="mt-1.5 h-1 w-28 overflow-hidden rounded-full bg-muted">
                        <div className="h-full w-[91%] rounded-full bg-gradient-to-r from-primary to-accent" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl border border-white/60 bg-white/60 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                          Current Focus
                        </p>
                        <p className="mt-1 text-sm font-semibold">
                          Current focus: Settings
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Complete CDC profile, timings, social links, branding, and admin basics.
                        </p>
                      </div>
                      <button className="rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm hover:opacity-90">
                        Continue Setup
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
