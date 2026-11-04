"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface SprintStep {
  number: string;
  days: string;
  phase: string;
  title: string;
  description: string;
}

const SPRINT_STEPS: SprintStep[] = [
  {
    number: "01",
    days: "Days 1–2",
    phase: "Architecture",
    title: "Audit & Conversion Blueprint",
    description:
      "We audit your client acquisition bottlenecks, map the conversion path, and write high-converting copy tailored to your customers.",
  },
  {
    number: "02",
    days: "Days 3–6",
    phase: "Engineering",
    title: "Full-Stack Build & Wiring",
    description:
      "Handcrafted Next.js frontend, 1-click WhatsApp lead routing, and Google Maps local search indexing built as a single system.",
  },
  {
    number: "03",
    days: "Days 7–10",
    phase: "Production",
    title: "Phone Test & Live Launch",
    description:
      "You test every button and booking flow privately on your smartphone. Once approved, domain connects and goes live to Google.",
  },
];

export default function SprintDelivery() {
  return (
    <section
      id="protocol"
      className="py-20 sm:py-28 bg-transparent border-t border-border/40 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        {/* Section Header: Pure Typographic Authority */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 pb-6 border-b border-border/40 gap-6">
          <div className="max-w-2xl">
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

        {/* Open Editorial Method Grid (TheSide-style: No Boxy Card Slop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {SPRINT_STEPS.map((step) => (
            <article
              key={step.number}
              className="flex flex-col justify-between pt-6 border-t-2 border-border/60 hover:border-accent transition-colors duration-300 group"
            >
              <div>
                {/* Step Index + Duration Pill */}
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-display font-black text-4xl sm:text-5xl text-text-tertiary/60 dark:text-text-tertiary/40 group-hover:text-accent transition-colors">
                    {step.number}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
                      {step.days}
                    </span>
                    <span className="text-text-tertiary text-xs">/</span>
                    <span className="font-sans text-xs text-text-tertiary font-medium">
                      {step.phase}
                    </span>
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary mb-3 tracking-tight group-hover:text-accent transition-colors">
                  {step.title}
                </h3>

                {/* Single Clean Sentence */}
                <p className="text-text-secondary text-sm sm:text-[15px] leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Minimal Understated Guarantee Strip */}
        <div className="mt-14 sm:mt-20 pt-6 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-sans text-xs text-text-secondary">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            <p>
              <strong className="text-text-primary font-semibold">100% Asset Ownership:</strong> You own the production code, domain records, and client data. Zero lock-in retainers.
            </p>
          </div>
          <span className="font-mono text-[11px] text-text-tertiary shrink-0">
            Guaranteed 7–10 Day Delivery
          </span>
        </div>
      </div>
    </section>
  );
}
