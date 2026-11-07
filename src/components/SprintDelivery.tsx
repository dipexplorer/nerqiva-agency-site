"use client";

import React from "react";
import { Check, Clock, ShieldCheck, ArrowRight } from "lucide-react";

interface SprintPhase {
  number: string;
  days: string;
  phase: string;
  title: string;
  statusTag: string;
  deliverableBadge: string;
  items: string[];
  isFinal?: boolean;
}

const SPRINT_PHASES: SprintPhase[] = [
  {
    number: "01",
    days: "Days 1–2",
    phase: "Architecture",
    title: "Blueprint & Conversion Scope",
    statusTag: "48H TURNAROUND",
    deliverableBadge: "Clickable Wireframe & Copy",
    items: [
      "Client acquisition & drop-off audit",
      "Mobile conversion journey map",
      "High-intent sales & WhatsApp copy",
    ],
  },
  {
    number: "02",
    days: "Days 3–6",
    phase: "Engineering",
    title: "Full-Stack Build & Wiring",
    statusTag: "ACTIVE SPRINT",
    deliverableBadge: "Private Staging URL",
    items: [
      "Handcrafted Next.js frontend build",
      "1-tap WhatsApp lead connection",
      "Google Maps local search indexing",
    ],
  },
  {
    number: "03",
    days: "Days 7–10",
    phase: "Production",
    title: "Phone Test & Live Launch",
    statusTag: "GO LIVE",
    deliverableBadge: "100% Code & Asset Handoff",
    items: [
      "End-to-end smartphone booking test",
      "Custom domain & SSL connection",
      "Live client bookings active on Google",
    ],
    isFinal: true,
  },
];

export default function SprintDelivery() {
  return (
    <section
      id="protocol"
      className="py-20 sm:py-28 bg-transparent border-t border-border/40 relative overflow-hidden"
      aria-label="Sprint Delivery Protocol"
    >
      <div className="section-container relative z-10">
        {/* Section Header: Pure Typographic Authority */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-border/40 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs text-text-tertiary uppercase tracking-wider">
                10-Day Production Protocol
              </span>
            </div>
            <h2
              className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.05]"
              style={{ letterSpacing: "-0.035em" }}
            >
              How We Ship.
            </h2>
          </div>
          <p className="text-text-secondary text-sm sm:text-base max-w-md leading-relaxed font-sans">
            From first conversation to live client bookings in 7 to 10 days with zero downtime for your business.
          </p>
        </div>

        {/* Desktop Progress Rail (Visual Momentum connecting Day 1 to Day 10) */}
        <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8 mb-6 relative">
          {/* Continuous rail track */}
          <div className="absolute top-3 left-6 right-6 h-px bg-border/70 dark:bg-zinc-800 -z-0" />

          {SPRINT_PHASES.map((phase) => (
            <div key={phase.number} className="relative z-10 flex items-center gap-3">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-[11px] font-bold border transition-colors ${
                  phase.isFinal
                    ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400"
                    : "bg-bg-primary dark:bg-zinc-900 border-border dark:border-zinc-700 text-text-primary"
                }`}
              >
                {phase.number}
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-text-primary uppercase tracking-wider">
                  {phase.days}
                </span>
                <span className="text-text-tertiary text-xs">·</span>
                <span className="font-sans text-xs text-text-tertiary font-medium">
                  {phase.phase}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Sprint Milestone Cards (Semantic Ordered List, No AI-Slop) */}
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {SPRINT_PHASES.map((phase) => (
            <li
              key={phase.number}
              className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                phase.isFinal
                  ? "bg-emerald-500/[0.02] dark:bg-emerald-500/[0.03] border-emerald-500/30 hover:border-emerald-500/60 shadow-sm hover:shadow-md"
                  : "bg-zinc-50/60 dark:bg-zinc-900/30 border-border/80 dark:border-zinc-800/80 hover:border-zinc-400 dark:hover:border-zinc-600 shadow-sm hover:shadow-md"
              }`}
            >
              <div>
                {/* Mobile Stage Pill (Visible on small screens) */}
                <div className="flex md:hidden items-center justify-between mb-4 pb-3 border-b border-border/40">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-[10px] font-bold border ${
                        phase.isFinal
                          ? "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400"
                          : "bg-bg-primary dark:bg-zinc-900 border-border dark:border-zinc-700 text-text-primary"
                      }`}
                    >
                      {phase.number}
                    </span>
                    <span className="font-mono text-xs font-bold text-text-primary uppercase tracking-wider">
                      {phase.days}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full bg-zinc-200/60 dark:bg-zinc-800 text-text-secondary">
                    {phase.phase}
                  </span>
                </div>

                {/* Status Tag Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md ${
                      phase.isFinal
                        ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20"
                        : "bg-zinc-200/50 dark:bg-zinc-800/80 text-text-secondary border border-border/40"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        phase.isFinal ? "bg-emerald-500 animate-pulse" : "bg-zinc-400 dark:bg-zinc-500"
                      }`}
                    />
                    {phase.statusTag}
                  </span>
                </div>

                {/* Stage Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary mb-5 tracking-tight group-hover:text-text-primary transition-colors">
                  {phase.title}
                </h3>

                {/* Concrete Deliverables Checklist (Replaces wordy AI paragraphs) */}
                <ul className="space-y-3 mb-6 font-sans">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary leading-snug">
                      <div className="mt-0.5 shrink-0 rounded-full p-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Concrete Output Stamp */}
              <div className="pt-4 border-t border-border/50 dark:border-zinc-800/80 flex items-center justify-between text-xs font-mono text-text-tertiary">
                <span className="text-[11px] text-text-secondary font-medium">
                  {phase.deliverableBadge}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-text-tertiary group-hover:text-text-primary group-hover:translate-x-0.5 transition-all" />
              </div>
            </li>
          ))}
        </ol>

        {/* Elevated Studio Guarantee Banner */}
        <div className="mt-12 sm:mt-16 p-5 sm:p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-border/70 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-5 font-sans">
          <div className="flex items-start sm:items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5 stroke-[2]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-text-primary">
                100% Asset Ownership Guarantee
              </p>
              <p className="text-xs text-text-secondary mt-0.5">
                You own the production code, domain records, and customer inquiries. Zero lock-in contracts or hostage fees.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-center shrink-0 px-3 py-1.5 rounded-lg bg-bg-primary dark:bg-zinc-800 border border-border/60">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-mono text-xs font-medium text-text-primary">
              Guaranteed 7–10 Day Delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
