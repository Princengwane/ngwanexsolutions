"use client";

import { useState } from "react";
import Button from "./Button";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSeBiAbnW1Gcc3dTi8EsitEika5fnUTSFlBTExAUKRFO1j0TmQ/formResponse";

// Your entry IDs
const ENTRY_FULLNAME = "entry.262451566";
const ENTRY_PHONE = "entry.269791394";
const ENTRY_EMAIL = "entry.1766238685";
const ENTRY_COMPANY = "entry.687139564";
const ENTRY_SERVICES = "entry.1498372955";
const ENTRY_STAGE = "entry.574179463";
const ENTRY_START = "entry.1457811148";
const ENTRY_DESCRIPTION = "entry.169755516";

export default function GoogleLeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = e.currentTarget;
      const data = new FormData(form);

      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });

      setStatus("sent");
      form.reset();
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-[2rem] border border-white/10 bg-space-950/40 p-8">
      <div className="text-xs text-white/60">Book your free IT consultation</div>
      <h3 className="mt-2 font-display text-xl font-semibold">Tell us what you need</h3>
      <p className="mt-2 text-sm text-white/70">
        Submit your details and we’ll reply within 24–48 hours.
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <div>
          <label className="text-xs text-white/60">Full name *</label>
          <input
            name={ENTRY_FULLNAME}
            required
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-neon-cyan/50"
            placeholder="Your full name"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="text-xs text-white/60">Phone number *</label>
            <input
              name={ENTRY_PHONE}
              required
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-neon-cyan/50"
              placeholder="+27..."
            />
          </div>

          <div>
            <label className="text-xs text-white/60">Email *</label>
            <input
              type="email"
              name={ENTRY_EMAIL}
              required
              className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-neon-cyan/50"
              placeholder="you@email.com"
            />
          </div>
        </div>

        <div>
          <label className="text-xs text-white/60">Company name *</label>
          <input
            name={ENTRY_COMPANY}
            required
            className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-neon-cyan/50"
            placeholder="Your company"
          />
        </div>

        {/* Services (checkboxes) */}
        <div>
          <label className="text-xs text-white/60">What services are you interested in? *</label>
          <div className="mt-2 grid gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
            {[
              "Website Design or Redesign",
              "Mobile App Development",
              "E-commerce Development",
              "Web Application Development",
              "Not Sure – Need Expert Guidance",
              "Custom Software Development",
              "MVP Development (Minimum Viable Product)",
              "Performance Optimization",
              "Scaling Existing Systems",
              "UX/UI Improvements",
              "Analytics & KPI Dashboards",
              "Reporting & Business Intelligence",
              "Data Integration",
              "Workflow Automation",
              "System Integrations (CRM, APIs, Payment Systems, etc.)",
              "Process Optimization",
              "Technical Strategy for Startups",
              "Digital Transformation",
            ].map((opt) => (
              <label key={opt} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name={ENTRY_SERVICES}
                  value={opt}
                  className="h-4 w-4 accent-[rgb(0,255,229)]"
                />
                <span>{opt}</span>
              </label>
            ))}
            {/* Optional "Other" text — Google Forms usually needs its own entry id for 'Other'.
               If your form uses "Other:" you may need to add it separately with the right entry id. */}
          </div>
          <p className="mt-2 text-xs text-white/50">
            Select all that apply.
          </p>
        </div>

        {/* Stage (radio) */}
        <div>
          <label className="text-xs text-white/60">What stage is your business/project in? *</label>
          <div className="mt-2 grid gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
            {[
              "Idea stage",
              "Early startup (building MVP)",
              "Growing business",
              "Established company",
              "Enterprise",
            ].map((opt) => (
              <label key={opt} className="flex items-center gap-3">
                <input
                  type="radio"
                  name={ENTRY_STAGE}
                  value={opt}
                  required
                  className="h-4 w-4 accent-[rgb(0,255,229)]"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Start (radio) */}
        <div>
          <label className="text-xs text-white/60">When are you looking to start? *</label>
          <div className="mt-2 grid gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
            {["Immediately", "Within 30 days", "1–3 months", "Just exploring options"].map((opt) => (
              <label key={opt} className="flex items-center gap-3">
                <input
                  type="radio"
                  name={ENTRY_START}
                  value={opt}
                  required
                  className="h-4 w-4 accent-[rgb(0,255,229)]"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs text-white/60">Briefly describe your project or challenge</label>
          <textarea
            name={ENTRY_DESCRIPTION}
            rows={4}
            className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-neon-cyan/50"
            placeholder="Tell us what you want to build or improve..."
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Submitting..." : "Submit"}
          </Button>

          {status === "sent" && (
            <span className="text-sm text-neon-cyan">Submitted successfully ✅</span>
          )}
          {status === "error" && (
            <span className="text-sm text-red-300">Something went wrong. Try again.</span>
          )}
        </div>
      </form>
    </div>
  );
}
