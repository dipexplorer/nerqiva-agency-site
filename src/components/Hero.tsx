"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowRight, Sparkles, Check } from "lucide-react";

const HERO_CASES = {
  website: {
    label: "Digital Presence",
    problem: "Website not bringing in clients",
    efficiency: "Losing potential customers every day",
    issues: [
      "Visitors get confused and leave quickly",
      "Pages take too long to load on mobile phones",
      "No direct WhatsApp booking or call button"
    ],
    outcome: "A high-converting 24-Hour website"
  },
  workflow: {
    label: "Customer Inquiries",
    problem: "Missed phone calls & delayed replies",
    efficiency: "Losing leads to faster competitors",
    issues: [
      "No instant way for clients to ask prices",
      "No automated WhatsApp message greeting",
      "Wasting hours manually replying to basic questions"
    ],
    outcome: "1-Click WhatsApp Instant Lead Flow"
  },
  data: {
    label: "Google & Map Search",
    problem: "Not showing up in local searches",
    efficiency: "Local customers can't find your store",
    issues: [
      "Google Maps and reviews aren't connected",
      "Competitors rank higher in city searches",
      "No clear phone number or store location"
    ],
    outcome: "Google Maps & Local Search Setup"
  }
};

type CaseKey = keyof typeof HERO_CASES;

export default function Hero() {
  const [activeCase, setActiveCase] = useState<CaseKey>("website");
  const caseData = HERO_CASES[activeCase];

  return (
    <section className="relative min-h-[92vh] w-full bg-transparent flex flex-col justify-center overflow-hidden pt-28 pb-16 border-b border-border/20">
      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Positioning */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Eyebrow Label */}
            <div className="animate-fade-in-up flex items-center gap-3 mb-6" style={{ animationFillMode: "both" }}>
              <span className="label-eyebrow">
                High-Converting Business Websites
              </span>
              <div className="h-px w-12 bg-accent/30" />
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-in-up font-sans font-extrabold text-text-primary leading-[1.08] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", letterSpacing: "-0.03em" }}
            >
              Get a stunning website<br />
              live in <span className="text-accent">24 Hours.</span>
            </h1>

            {/* Description */}
            <p
              className="animate-fade-in-up text-text-secondary text-base md:text-lg leading-relaxed max-w-xl mb-10 font-normal"
              style={{ animationDelay: "150ms", animationFillMode: "both" }}
            >
              We build mobile-friendly, high-converting websites for local business owners, salons, photography studios, and clinics. Choose a demo theme, send your details, and start accepting WhatsApp leads in 1 day.
            </p>

            {/* CTAs */}
            <div
              className="animate-fade-in-up flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12"
              style={{ animationDelay: "300ms", animationFillMode: "both" }}
            >
              <a
                href="#contact"
                className="group relative w-full sm:w-auto bg-accent text-white px-7 py-3.5 font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-accent-mid transition-all duration-200 cursor-pointer overflow-hidden flex items-center justify-center gap-2"
                style={{ borderRadius: "4px", boxShadow: "0 2px 16px rgba(124,58,237,0.25)" }}
              >
                <span className="relative z-10">Start Your Site (24H)</span>
                <ArrowRight size={13} className="relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              <a
                href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'd%20like%20to%20discuss%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto bg-emerald-600 text-white border border-emerald-500 px-7 py-3.5 font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-emerald-700 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
                style={{ borderRadius: "4px" }}
              >
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Trust Signal */}
            <div
              className="animate-fade-in-up flex items-center gap-2.5 font-mono text-[9px] uppercase tracking-widest text-text-tertiary"
              style={{ animationDelay: "450ms", animationFillMode: "both" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>⚡ 24-Hour Express Launch • Direct WhatsApp Lead Alerts • Zero Monthly Fees</span>
            </div>
          </div>

          {/* Right Column: Dynamic Opportunity Diagnosis Visualizer */}
          <div className="lg:col-span-5 w-full flex flex-col">
            <div className="mb-4 flex gap-2 font-mono text-[9px] uppercase tracking-wider text-text-tertiary select-none">
              <span>Select your business goal:</span>
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
                  <span className="font-mono text-[8px] font-bold text-emerald-500 tracking-widest">
                    EXPRESS LAUNCH PREVIEW • 24 HOURS
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-text-tertiary/20" />
                  <span className="h-1.5 w-1.5 rounded-full bg-text-tertiary/20" />
                  <span className="h-1.5 w-1.5 rounded-full bg-text-tertiary/20" />
                </div>
              </div>

              {/* Body */}
              <div className="p-6 min-h-[340px]">
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
                          Current Leak
                        </span>
                        <span className="font-sans text-xs font-semibold text-text-primary">
                          {caseData.efficiency}
                        </span>
                      </div>
                      <div>
                        <span className="font-mono text-[8px] uppercase tracking-widest text-text-tertiary block mb-1">
                          Our 24-Hour Solution
                        </span>
                        <span className="font-sans text-xs font-semibold text-accent">
                          {caseData.outcome}
                        </span>
                      </div>
                    </div>

                    {/* Specific Issues list */}
                    <div className="mb-5">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-text-tertiary block mb-2.5 font-bold">
                        Bottlenecks We Solve
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
                      <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400 font-bold">
                        STATUS: READY TO LAUNCH IN 24H
                      </span>
                      <a 
                        href="#contact" 
                        className="font-mono text-[9px] uppercase tracking-widest text-accent hover:text-accent-mid font-bold flex items-center gap-1 transition-colors"
                      >
                        Launch now <ArrowRight size={10} />
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
