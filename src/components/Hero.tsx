"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, Sparkles, Check } from "lucide-react";

const HERO_CASES = {
  website: {
    label: "Digital Presence",
    problem: "Website not converting traffic",
    efficiency: "Leaks up to 40% of potential leads",
    issues: [
      "Mobile checkout layout is broken at 375px",
      "Page load is 4.2s (violates Core Web Vitals)",
      "Main Call-to-Action is hidden below the fold"
    ],
    outcome: "Conversion-first custom rebuild"
  },
  workflow: {
    label: "Repetitive Tasks",
    problem: "6+ hours/week spent syncing CRM data",
    efficiency: "Prone to transcription errors",
    issues: [
      "Leads manually copied from forms to spreadsheet",
      "No automated welcome or follow-up sequence",
      "Team waste time checking tools instead of selling"
    ],
    outcome: "Automated API & spreadsheet pipeline"
  },
  data: {
    label: "Siloed Systems",
    problem: "No unified business metrics",
    efficiency: "Decisions based on outdated reports",
    issues: [
      "Payment records detached from user database",
      "Usage analytics not feeding marketing tools",
      "Manual exports needed for weekly meetings"
    ],
    outcome: "Unified PostgreSQL database pipeline"
  }
};

type CaseKey = keyof typeof HERO_CASES;

export default function Hero() {
  const [activeCase, setActiveCase] = useState<CaseKey>("website");
  const caseData = HERO_CASES[activeCase];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-[92vh] w-full bg-transparent flex flex-col justify-center overflow-hidden pt-28 pb-16 border-b border-border/20">
      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Positioning */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col"
          >
            {/* Eyebrow Label */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <span className="label-eyebrow">
                Digital Systems Studio
              </span>
              <div className="h-[1px] w-12 bg-accent/30" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-sans font-extrabold text-text-primary leading-[1.08] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", letterSpacing: "-0.03em" }}
            >
              We don&apos;t start with technology.<br />
              We start with the <span className="text-accent">problem.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl mb-10 font-normal"
            >
              We design and build custom web applications, integrations, and automated workflows engineered to resolve your specific business bottlenecks. No bloated packages. No generic templates. Just clean, performant systems.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12"
            >
              <a
                href="#contact"
                className="group relative w-full sm:w-auto bg-accent text-white px-7 py-3.5 font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-accent-mid transition-all duration-200 cursor-pointer overflow-hidden flex items-center justify-center gap-2"
                style={{ borderRadius: "4px", boxShadow: "0 2px 16px rgba(124,58,237,0.25)" }}
              >
                <span className="relative z-10">Tell us the problem</span>
                <ArrowRight size={13} className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <a
                href="#process"
                className="group w-full sm:w-auto bg-transparent border border-border-dark text-text-secondary px-7 py-3.5 font-mono text-[10px] font-bold uppercase tracking-widest hover:border-accent/40 hover:text-text-primary transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                style={{ borderRadius: "4px" }}
              >
                <span>See our methodology</span>
                <span className="transition-transform group-hover:translate-y-0.5">↓</span>
              </a>
            </motion.div>

            {/* Trust Signal */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2.5 font-mono text-[9px] uppercase tracking-widest text-text-tertiary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span>Available for studio engagement</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Dynamic Opportunity Diagnosis Visualizer */}
          <div className="lg:col-span-5 w-full flex flex-col">
            <div className="mb-4 flex gap-2 font-mono text-[9px] uppercase tracking-wider text-text-tertiary select-none">
              <span>{"// Diagnose a system state:"}</span>
            </div>

            {/* Interactive Selectors */}
            <div className="flex gap-2 mb-3 z-10">
              {(Object.keys(HERO_CASES) as CaseKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveCase(key)}
                  className={`px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider font-semibold border transition-all duration-200 cursor-pointer ${
                    activeCase === key
                      ? "bg-accent border-accent text-white"
                      : "bg-bg-secondary text-text-secondary border-transparent hover:border-accent/25 hover:text-text-primary"
                  }`}
                  style={{ borderRadius: "3px" }}
                >
                  {HERO_CASES[key].label}
                </button>
              ))}
            </div>

            {/* Dynamic Card Screen */}
            <div 
              className="glass-panel w-full border border-border/40 overflow-hidden shadow-xl"
              style={{ borderRadius: "4px" }}
            >
              {/* Header bar */}
              <div className="px-5 py-3 border-b border-border/40 bg-bg-secondary flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[8px] font-bold text-text-secondary tracking-widest">
                    SYSTEM_DIAGNOSTIC // ON_LINE
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-text-tertiary/20" />
                  <span className="h-1.5 w-1.5 rounded-full bg-text-tertiary/20" />
                  <span className="h-1.5 w-1.5 rounded-full bg-text-tertiary/20" />
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCase}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col"
                  >
                    {/* Diagnostic Banner */}
                    <div className="bg-accent/5 border border-accent/15 rounded-[3px] p-3.5 mb-5 flex items-start gap-3">
                      <Sparkles size={14} className="text-accent shrink-0 mt-0.5" />
                      <div>
                        <div className="font-mono text-[8px] uppercase tracking-widest text-accent font-semibold mb-0.5">
                          Problem Identified
                        </div>
                        <div className="font-sans font-bold text-sm text-text-primary leading-tight">
                          {caseData.problem}
                        </div>
                      </div>
                    </div>

                    {/* Impact metrics */}
                    <div className="mb-5 grid grid-cols-2 gap-4 border-b border-border/30 pb-4">
                      <div>
                        <span className="font-mono text-[8px] uppercase tracking-widest text-text-tertiary block mb-1">
                          Leak Impact
                        </span>
                        <span className="font-sans text-xs font-semibold text-text-primary">
                          {caseData.efficiency}
                        </span>
                      </div>
                      <div>
                        <span className="font-mono text-[8px] uppercase tracking-widest text-text-tertiary block mb-1">
                          Recommended System Fix
                        </span>
                        <span className="font-sans text-xs font-semibold text-accent">
                          {caseData.outcome}
                        </span>
                      </div>
                    </div>

                    {/* Specific Issues list */}
                    <div className="mb-5">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-text-tertiary block mb-2.5 font-bold">
                        Observed Bottlenecks
                      </span>
                      <div className="flex flex-col gap-2">
                        {caseData.issues.map((issue, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <div className="h-4 w-4 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                              <Check size={8} className="text-accent" />
                            </div>
                            <span className="text-[11px] text-text-secondary leading-snug">
                              {issue}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Active engagement footer */}
                    <div className="bg-bg-secondary p-3 flex items-center justify-between" style={{ borderRadius: "3px" }}>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary">
                        STATUS: READY_TO_BUILD
                      </span>
                      <a 
                        href="#contact" 
                        className="font-mono text-[9px] uppercase tracking-widest text-accent hover:text-accent-mid font-bold flex items-center gap-1 transition-colors"
                      >
                        Fix this <ArrowRight size={10} />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
