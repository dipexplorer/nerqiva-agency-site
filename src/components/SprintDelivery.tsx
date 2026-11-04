"use client";

import React from "react";
import { Compass, Cpu, Rocket, Clock, Check } from "lucide-react";

interface Step {
  number: string;
  duration: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: React.ReactNode;
}

const STEPS: Step[] = [
  {
    number: "01",
    duration: "DAYS 1–2",
    title: "Bottleneck Audit & Architecture",
    description:
      "We identify where your current setup is leaking leads, map your customer conversion journey, and finalize high-converting copy tailored to your market.",
    deliverables: [
      "Drop-off & speed diagnostic",
      "Conversion wireframe",
      "Value proposition copy",
    ],
    icon: <Compass className="w-5 h-5 text-accent" />,
  },
  {
    number: "02",
    duration: "DAYS 3–6",
    title: "Full-Stack Build & Automation Wiring",
    description:
      "Handcrafted Next.js frontend, instant 1-click WhatsApp routing, structured Google Maps (SEO/AEO) schemas, and client payment integrations.",
    deliverables: [
      "Custom responsive frontend",
      "WhatsApp & call automations",
      "Local SEO & structured data",
    ],
    icon: <Cpu className="w-5 h-5 text-blue-500" />,
  },
  {
    number: "03",
    duration: "DAYS 7–10",
    title: "Private Mobile Test & Live Launch",
    description:
      "You test every button and booking flow privately on your smartphone. Once you approve, we map your custom domain and push your site live to Google.",
    deliverables: [
      "Private staging review",
      "SSL & DNS custom domain link",
      "Google Search Console indexing",
    ],
    icon: <Rocket className="w-5 h-5 text-emerald-500" />,
  },
];

export default function SprintDelivery() {
  return (
    <section
      id="protocol"
      className="py-20 sm:py-28 bg-transparent border-t border-border/40 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-border/40 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs font-semibold tracking-widest text-text-tertiary uppercase">
                Delivery Protocol
              </span>
            </div>
            <h2
              className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.05]"
              style={{ letterSpacing: "-0.03em" }}
            >
              From First Chat to Live Launch in 7–10 Days.
            </h2>
          </div>
          <p className="text-text-secondary text-sm sm:text-base max-w-md leading-relaxed font-sans">
            No endless meetings or 4-month agency lag. A rapid, battle-tested engineering sprint with zero interruption to your day-to-day operations.
          </p>
        </div>

        {/* 3 Step Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative">
          {STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="relative rounded-2xl p-6 sm:p-8 bg-bg-secondary/70 dark:bg-bg-dark-card/60 backdrop-blur-md border border-border/60 hover:border-border-dark transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-accent/10 text-accent border border-accent/20">
                      STEP {step.number}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[11px] font-semibold text-text-tertiary">
                      <Clock className="w-3 h-3" />
                      {step.duration}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-bg-primary dark:bg-neutral-800 border border-border/60 shadow-xs">
                    {step.icon}
                  </div>
                </div>

                {/* Step Title & Description */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-sm sm:text-[15px] leading-relaxed mb-6 font-sans">
                  {step.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="pt-5 border-t border-border/40">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-text-tertiary font-semibold mb-3">
                  Key Milestones
                </span>
                <ul className="space-y-2">
                  {step.deliverables.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-center gap-2 text-xs text-text-secondary font-sans"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Guarantee Banner */}
        <div className="mt-8 rounded-xl p-4 sm:p-5 bg-bg-secondary/40 border border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
            <p className="text-xs sm:text-sm text-text-secondary font-sans">
              <strong className="text-text-primary font-semibold">100% Asset Ownership:</strong> You own the production code, domain records, and customer data. No ongoing vendor lock-ins.
            </p>
          </div>
          <span className="font-mono text-xs text-text-tertiary shrink-0">
            Guaranteed Sprint Delivery
          </span>
        </div>
      </div>
    </section>
  );
}

