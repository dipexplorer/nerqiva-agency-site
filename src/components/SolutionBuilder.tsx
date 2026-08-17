"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OPTIONS = [
  {
    id: "website",
    label: "My digital presence is weak",
    need: "A credible digital presence that establishes trust, communicates capability, and drives enquiries.",
    approach: ["Positioning Audit", "Copywriting & Layout", "Clean Next.js Rebuild", "SEO & Performance"],
    note: "We design and build clean, fast marketing sites built to turn visitors into enquiries.",
  },
  {
    id: "redesign",
    label: "I need to upgrade my site",
    need: "A modern, high-converting upgrade to an existing, outdated digital presence.",
    approach: ["Friction Audit", "Design System Setup", "Headless Migration", "SEO Redirect Mapping"],
    note: "We identify what is leaking potential leads, preserve what works, and rebuild with purpose.",
  },
  {
    id: "leads",
    label: "My funnel doesn't convert",
    need: "A conversion-focused digital system — from initial click to qualified inbox enquiry.",
    approach: ["Drop-off Analysis", "CTA Layout Restructure", "16px Input Validation", "Telemetry Hooks"],
    note: "We analyze user flows and remove form friction to maximize qualified conversions.",
  },
  {
    id: "automation",
    label: "My team does repetitive tasks",
    need: "To automate manual copy-paste work and synchronization chores from your day-to-day operations.",
    approach: ["Workflow Mapping", "API Endpoint Specs", "Integration Build", "Fail-safe Testing"],
    note: "We connect your internal tools and automate actions so you do not waste hours copying data.",
  },
  {
    id: "ai",
    label: "I want to add AI leverage",
    need: "A practical AI utility — vector search, RAG, classification, or speech-to-text — built directly into your workflow.",
    approach: ["Utility Definition", "API Evaluation", "Prompt Engineering", "Security Audit"],
    note: "We build AI systems that solve real internal challenges, not gimmicks.",
  },
  {
    id: "webapp",
    label: "I need a custom portal/app",
    need: "A purpose-built web application — customer dashboard, client portal, or custom internal management tool.",
    approach: ["Requirement Spec", "Schema Design", "API & Interface Build", "CI/CD Deployment"],
    note: "We engineer performant database-backed systems designed for security and scalability.",
  },
  {
    id: "other",
    label: "A custom problem",
    need: "A specific operational challenge or technical bottleneck that doesn't fit standard categories.",
    approach: ["Discovery Diagnostic", "Bottleneck Scoping", "System Architecture Blueprint", "Offer Draft"],
    note: "Tell us what you are trying to solve. We will tell you exactly what should be built.",
  },
];

export default function SolutionBuilder() {
  const [selected, setSelected] = useState<string | null>(null);

  const active = OPTIONS.find((o) => o.id === selected);

  return (
    <section id="solutions" className="py-32 bg-transparent relative border-t border-border/30">
      <div className="section-container">
        
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="label-eyebrow">CAPABILITIES</span>
            <div className="h-[1px] w-8 bg-accent/30" />
          </div>
          <h2
            className="font-sans font-extrabold text-text-primary leading-[1.08] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            What we can solve.
          </h2>
        </div>

        {/* Option selectors */}
        <div className="flex flex-wrap gap-2.5 mb-12 relative z-10">
          {OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelected(selected === opt.id ? null : opt.id)}
              className={`group flex items-center gap-2 px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-widest transition-all duration-200 border cursor-pointer ${
                selected === opt.id
                  ? "bg-accent text-white border-accent shadow-sm"
                  : "bg-bg-secondary text-text-secondary border-transparent hover:border-accent/30 hover:text-text-primary"
              }`}
              style={{ borderRadius: "4px" }}
            >
              <span>{opt.label}</span>
              <span className={`transition-transform duration-200 text-[8px] ${selected === opt.id ? 'rotate-180 text-white' : 'text-text-tertiary group-hover:text-accent'}`}>
                ▼
              </span>
            </button>
          ))}
        </div>

        {/* Result panel */}
        <div className="relative z-10 min-h-[280px]">
          <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-2 gap-0 border border-border/40 glass-panel overflow-hidden shadow-xl"
                style={{ borderRadius: "4px" }}
              >
                {/* Left Side */}
                <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-border/40">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary mb-4 block font-semibold">
                    The Objective
                  </span>
                  <p className="font-sans text-text-primary text-lg md:text-xl font-bold leading-snug mb-6">
                    {active.need}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {active.note}
                  </p>
                </div>

                {/* Right Side */}
                <div className="p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary mb-5 block font-semibold">
                      Proposed Approach
                    </span>
                    <div className="flex flex-col gap-3.5">
                      {active.approach.map((step, i) => (
                        <div key={step} className="flex items-center gap-3">
                          <div className="shrink-0 h-5 w-5 rounded-[2px] bg-accent/5 border border-accent/15 flex items-center justify-center">
                            <span className="font-mono text-[9px] text-accent font-bold">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <div className="flex-1 flex items-center gap-2">
                            <span className="font-sans text-sm text-text-primary font-medium">
                              {step}
                            </span>
                            {i < active.approach.length - 1 && (
                              <span className="text-text-tertiary text-xs">→</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/40">
                    <a
                      href="#contact"
                      className="group inline-flex items-center gap-2 w-full justify-center py-3.5 bg-accent text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent-mid transition-colors"
                      style={{ borderRadius: "4px" }}
                    >
                      Discuss this bottleneck
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="border border-dashed border-border/40 rounded-sm p-16 text-center flex flex-col items-center justify-center bg-bg-secondary/40"
                style={{ borderRadius: "4px" }}
              >
                <p className="text-sm text-text-secondary font-medium">
                  Select a bottleneck above to inspect how we scope its resolution.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Secondary CTA block */}
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          <p className="text-text-secondary text-xs font-mono uppercase tracking-wider font-bold">
            Need a complex multi-platform system?
          </p>
          <a
            href="#contact"
            className="group flex items-center gap-2 text-sm font-bold text-accent hover:text-accent-light transition-colors"
          >
            Configure custom stack options
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
