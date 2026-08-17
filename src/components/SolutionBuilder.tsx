"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OPTIONS = [
  {
    id: "website",
    label: "A Website",
    need: "A credible digital presence that establishes trust and drives enquiries.",
    approach: ["Strategy & Positioning", "UX & Design", "Development", "SEO & Performance"],
    note: "We design and build fast, professional websites that actually convert.",
  },
  {
    id: "redesign",
    label: "A Redesign",
    need: "A modern, high-converting upgrade to an existing digital presence.",
    approach: ["Audit & Analysis", "Design Direction", "Rebuild", "Migration"],
    note: "We identify what's broken, preserve what works, and rebuild with purpose.",
  },
  {
    id: "leads",
    label: "More Leads",
    need: "A conversion-focused digital system — from first click to qualified contact.",
    approach: ["Funnel Audit", "UX Optimization", "CTA Architecture", "Analytics"],
    note: "We map the visitor journey and remove every friction point between attention and action.",
  },
  {
    id: "automation",
    label: "Automation",
    need: "To remove manual, repetitive work from your team's day.",
    approach: ["Process Mapping", "Integration Design", "Build & Test", "Monitoring"],
    note: "We connect your tools, automate workflows, and give your team their time back.",
  },
  {
    id: "ai",
    label: "An AI Feature",
    need: "A real AI capability — search, Q&A, classification, or intelligent processing — integrated into your product.",
    approach: ["Use Case Definition", "Data Review", "RAG / LLM Build", "Integration"],
    note: "We build AI where it creates actual leverage, not where it just looks impressive.",
  },
  {
    id: "webapp",
    label: "A Custom Web App",
    need: "A purpose-built application — dashboard, portal, internal tool, or product.",
    approach: ["Requirements", "Architecture", "Full-Stack Build", "Deployment"],
    note: "We engineer complete web applications designed to scale beyond version one.",
  },
  {
    id: "other",
    label: "Something Else",
    need: "A specific problem that doesn't fit a standard category.",
    approach: ["Discovery Call", "Problem Framing", "Scoping", "Proposal"],
    note: "Tell us what you're trying to achieve. We'll figure out what to build.",
  },
];

export default function SolutionBuilder() {
  const [selected, setSelected] = useState<string | null>(null);

  const active = OPTIONS.find((o) => o.id === selected);

  return (
    <section id="solutions" className="py-32 bg-bg-secondary">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-accent" />
            <span className="label-eyebrow text-accent">Solution Builder</span>
          </div>
          <h2
            className="font-sans font-extrabold text-text-primary leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            What are you trying to solve?
          </h2>
        </div>

        {/* Option buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelected(selected === opt.id ? null : opt.id)}
              className={`px-5 py-2.5 rounded-sm font-mono text-[11px] font-semibold uppercase tracking-widest transition-all duration-250 border ${
                selected === opt.id
                  ? "bg-accent text-white border-accent shadow-lg"
                  : "bg-white text-text-secondary border-border hover:border-accent/30 hover:text-text-primary hover:bg-white"
              }`}
              style={
                selected === opt.id
                  ? { boxShadow: "0 4px 20px rgba(124,58,237,0.3)" }
                  : {}
              }
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Result panel */}
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid md:grid-cols-2 gap-0 border border-border bg-white rounded-sm overflow-hidden shadow-lg"
            >
              {/* Left: Need */}
              <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-border">
                <span className="label-eyebrow text-text-tertiary mb-3 block">
                  What you need
                </span>
                <p className="font-sans text-text-primary text-lg font-medium leading-relaxed mb-6">
                  {active.need}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {active.note}
                </p>
              </div>

              {/* Right: Approach + CTA */}
              <div className="p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <span className="label-eyebrow text-text-tertiary mb-5 block">
                    NERQIVA Approach
                  </span>
                  <div className="flex flex-col gap-3">
                    {active.approach.map((step, i) => (
                      <div key={step} className="flex items-center gap-3">
                        <div className="shrink-0 h-5 w-5 rounded-sm bg-accent/10 flex items-center justify-center">
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

                <div className="mt-8 pt-8 border-t border-border">
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 w-full justify-center py-3.5 bg-accent text-white font-mono text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-accent-mid transition-colors"
                    style={{ boxShadow: "0 4px 20px rgba(124,58,237,0.25)" }}
                  >
                    Build this with NERQIVA
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!active && (
          <div className="border border-dashed border-border rounded-sm p-12 text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-text-tertiary">
              Select what you&apos;re trying to solve above
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
