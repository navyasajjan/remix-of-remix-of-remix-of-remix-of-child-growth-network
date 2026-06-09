import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { z } from "zod";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/list-your-cdc")({
  head: () => ({
    meta: [
      { title: "List Your CDC — ManoSetu" },
      {
        name: "description",
        content:
          "List your Child Development Centre on ManoSetu and reach parents searching for trusted therapy and developmental support across India.",
      },
    ],
  }),
  component: ListYourCdcPage,
});

const THERAPY_OPTIONS = [
  "Speech Therapy",
  "Occupational Therapy",
  "Physiotherapy",
  "Behavioural Therapy",
  "ABA Therapy",
  "Special Education",
  "Psychological Counselling",
  "Early Intervention",
  "Developmental Pediatrics",
];

const formSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(150),
  contact_person: z.string().trim().max(100).optional().or(z.literal("")),
  description: z.string().trim().max(1000).optional().or(z.literal("")),
  city: z.string().trim().min(2, "City is required").max(80),
  state: z.string().trim().min(2, "State is required").max(80),
  pincode: z
    .string()
    .trim()
    .regex(/^[0-9]{6}$/, "Enter a valid 6-digit pincode")
    .optional()
    .or(z.literal("")),
  address: z.string().trim().max(300).optional().or(z.literal("")),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{7,20}$/, "Enter a valid phone number")
    .optional()
    .or(z.literal("")),
  email: z.string().trim().email("Enter a valid email").max(255).optional().or(z.literal("")),
  website: z.string().trim().url("Enter a valid URL").max(255).optional().or(z.literal("")),
  therapies: z.array(z.string()).default([]),
});

type FormValues = z.infer<typeof formSchema>;

const EMPTY: FormValues = {
  name: "",
  contact_person: "",
  description: "",
  city: "",
  state: "",
  pincode: "",
  address: "",
  phone: "",
  email: "",
  website: "",
  therapies: [],
};

function ListYourCdcPage() {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const setField = <K extends keyof FormValues>(k: K, v: FormValues[K]) => {
    setValues((prev) => ({ ...prev, [k]: v }));
  };

  const toggleTherapy = (t: string) => {
    setValues((prev) => ({
      ...prev,
      therapies: prev.therapies.includes(t)
        ? prev.therapies.filter((x) => x !== t)
        : [...prev.therapies, t],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const parsed = formSchema.safeParse(values);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as string;
        if (key && !errs[key]) errs[key] = issue.message;
      }
      setErrors(errs);
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setSubmitting(true);
    const payload = {
      name: parsed.data.name,
      contact_person: parsed.data.contact_person || null,
      description: parsed.data.description || null,
      city: parsed.data.city,
      state: parsed.data.state,
      pincode: parsed.data.pincode || null,
      address: parsed.data.address || null,
      phone: parsed.data.phone || null,
      email: parsed.data.email || null,
      website: parsed.data.website || null,
      therapies: parsed.data.therapies,
      is_published: false,
      is_verified: false,
    };

    const { error } = await supabase.from("cdcs").insert(payload);
    setSubmitting(false);

    if (error) {
      console.error(error);
      toast.error("Could not submit your listing. Please try again.");
      return;
    }

    setSubmitted(true);
    toast.success("Submitted! Our team will review your centre shortly.");
  };

  if (submitted) {
    return (
      <div className="ambient-bg min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="mx-auto max-w-3xl px-5 pt-36 pb-20">
          <div className="glass rounded-[32px] p-10 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
              <CheckCircle2 size={36} />
            </div>
            <h1 className="text-3xl font-extrabold">Thank you!</h1>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Your CDC has been submitted for review. Our team will verify the
              details and publish it on ManoSetu shortly. You can submit
              another centre or head back home.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => {
                  setValues(EMPTY);
                  setSubmitted(false);
                }}
                className="rounded-full border border-border bg-white/60 px-6 py-3 text-sm font-semibold backdrop-blur"
              >
                Submit another CDC
              </button>
              <Link
                to="/"
                className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="ambient-bg min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 pt-32 pb-20">
        <Link
          to="/for-cdcs"
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft size={15} /> Back to For CDCs
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-balance text-4xl font-extrabold leading-tight sm:text-5xl">
            List your Child Development Centre
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Share your centre's details below. Submissions are reviewed by our
            team before being published on ManoSetu. It usually takes 1–2
            working days.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="glass mt-8 rounded-[28px] p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Centre name *"
              error={errors.name}
              input={
                <input
                  value={values.name}
                  onChange={(e) => setField("name", e.target.value)}
                  className={inputCls}
                  placeholder="e.g. Little Steps CDC"
                />
              }
              className="sm:col-span-2"
            />

            <Field
              label="Contact person"
              error={errors.contact_person}
              input={
                <input
                  value={values.contact_person}
                  onChange={(e) => setField("contact_person", e.target.value)}
                  className={inputCls}
                  placeholder="Founder / clinic head"
                />
              }
            />

            <Field
              label="Phone"
              error={errors.phone}
              input={
                <input
                  value={values.phone}
                  onChange={(e) => setField("phone", e.target.value)}
                  className={inputCls}
                  placeholder="+91 98765 43210"
                />
              }
            />

            <Field
              label="Email"
              error={errors.email}
              input={
                <input
                  type="email"
                  value={values.email}
                  onChange={(e) => setField("email", e.target.value)}
                  className={inputCls}
                  placeholder="hello@yourcentre.in"
                />
              }
            />

            <Field
              label="Website"
              error={errors.website}
              input={
                <input
                  value={values.website}
                  onChange={(e) => setField("website", e.target.value)}
                  className={inputCls}
                  placeholder="https://yourcentre.in"
                />
              }
            />

            <Field
              label="City *"
              error={errors.city}
              input={
                <input
                  value={values.city}
                  onChange={(e) => setField("city", e.target.value)}
                  className={inputCls}
                  placeholder="Mumbai"
                />
              }
            />

            <Field
              label="State *"
              error={errors.state}
              input={
                <input
                  value={values.state}
                  onChange={(e) => setField("state", e.target.value)}
                  className={inputCls}
                  placeholder="Maharashtra"
                />
              }
            />

            <Field
              label="Pincode"
              error={errors.pincode}
              input={
                <input
                  value={values.pincode}
                  onChange={(e) => setField("pincode", e.target.value)}
                  className={inputCls}
                  placeholder="400001"
                  inputMode="numeric"
                  maxLength={6}
                />
              }
            />

            <Field
              label="Full address"
              error={errors.address}
              input={
                <input
                  value={values.address}
                  onChange={(e) => setField("address", e.target.value)}
                  className={inputCls}
                  placeholder="Street, area, landmark"
                />
              }
              className="sm:col-span-2"
            />

            <Field
              label="About your centre"
              error={errors.description}
              input={
                <textarea
                  value={values.description}
                  onChange={(e) => setField("description", e.target.value)}
                  className={`${inputCls} min-h-[110px] resize-y`}
                  placeholder="A short description — your approach, age groups, what makes you different."
                  maxLength={1000}
                />
              }
              className="sm:col-span-2"
            />

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold">
                Therapies & services offered
              </label>
              <div className="flex flex-wrap gap-2">
                {THERAPY_OPTIONS.map((t) => {
                  const active = values.therapies.includes(t);
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => toggleTherapy(t)}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                        active
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-white/50 text-foreground hover:bg-white/80"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              By submitting, you confirm the information is accurate and you
              are authorised to list this centre.
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_8px_24px_-6px_color-mix(in_oklab,var(--primary)_55%,transparent)] ring-1 ring-white/40 transition-all hover:scale-[1.03] disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Submitting…
                </>
              ) : (
                "Submit listing"
              )}
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}

const inputCls =
  "w-full rounded-2xl border border-border bg-white/70 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:bg-white";

function Field({
  label,
  input,
  error,
  className = "",
}: {
  label: string;
  input: React.ReactNode;
  error?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-sm font-semibold">{label}</label>
      {input}
      {error && <p className="mt-1 text-xs text-coral">{error}</p>}
    </div>
  );
}
