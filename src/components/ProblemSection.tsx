"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, X, ChevronDown, MessageSquare } from "lucide-react";

interface ProblemItem {
  id: string;
  index: string;
  category: string;
  label: string;
  subtitle: string;
  detail: string;
  realCost: string;
  solutionSummary: string;
  wefix: string[];
  cta: string;
}

const PROBLEMS: ProblemItem[] = [
  {
    id: "dms",
    index: "01",
    category: "RESPONSE TIME",
    label: "You lose customers in Instagram DMs",
    subtitle: "By the time you reply, they've already confirmed with a competitor.",
    detail:
      "A high-paying customer reaches out on Instagram at 10 PM inquiring about bridal rates, dental slots, or private sessions. You reply the next morning — but they already booked someone who offered immediate 1-tap WhatsApp booking at 10:15 PM.",
    realCost: "Client DMs at 10 PM → Reply next morning → Client already booked elsewhere.",
    solutionSummary: "Client taps your site → Instant pre-filled WhatsApp chat → Reaches you in 5 seconds.",
    wefix: [
      "Prominent 1-tap WhatsApp booking button on every page",
      "Pre-filled service, date, and requirement so leads arrive ready to pay",
      "Clear pricing and service menu without awkward multi-day DM exchanges",
    ],
    cta: "Stop losing DM inquiries",
  },
  {
    id: "mobile",
    index: "02",
    category: "SPEED & LAYOUT",
    label: "Your website is slow or clumsy on phones",
    subtitle: "Over 85% of your customers visit on mobile. Is it turning them away?",
    detail:
      "If your website takes 4 seconds to load on local Jio or Airtel 4G, or forces users to pinch and zoom to read service prices, you lose credibility instantly. High-end clients judge the quality of your craft by how effortlessly your site opens on their phone.",
    realCost: "85% visit on phone → 4-second loading lag or squished buttons → Visitor bounces.",
    solutionSummary: "Sub-second mobile speed on 4G → Tested on real smartphones → Instant trust.",
    wefix: [
      "Sub-second load times verified on Indian 4G/5G networks",
      "Generous touch targets and intuitive booking flows designed for one thumb",
      "Modern editorial visual design that reflects the real luxury of your work",
    ],
    cta: "Modernize my mobile experience",
  },
  {
    id: "invisible",
    index: "03",
    category: "LOCAL DISCOVERY",
    label: "Nobody can find your business on Google",
    subtitle: "Nearby customers search Google Maps daily. Your competitors get the calls.",
    detail:
      "When someone in Guwahati searches 'best dental clinic near me' or 'bridal mehendi artist,' your business doesn't appear in the top 3. That high-value customer books someone else — not because their craft is better, but because your business was invisible.",
    realCost: "Nearby buyer searches Google Maps → Competitor appears #1 → You lose the walk-in.",
    solutionSummary: "Structured Google Business Profile & local SEO schema → Rank in the top local 3-pack.",
    wefix: [
      "Google Business Profile verified and calibrated for local search ranking",
      "High-intent local keyword indexing across North Guwahati and Assam",
      "Direct Google Maps location pin, working hours, and 1-tap call button",
    ],
    cta: "Fix my Google visibility",
  },
  {
    id: "bookings",
    index: "04",
    category: "BOOKING FRICTION",
    label: "No clear way to view packages & prices",
    subtitle: "When booking feels like work, busy clients move on to someone easier.",
    detail:
      "When finding your service prices requires 10 back-and-forth messages, sending photos, asking for payment details, and manual scheduling, prospective clients drop off. Modern clients expect clear package deliverables and an effortless booking path.",
    realCost: "Endless 'Price please' comments → Multi-day negotiation → 70% of inquiries vanish.",
    solutionSummary: "Transparent package cards & real client photos → Zero friction → Client confirms immediately.",
    wefix: [
      "Upfront package breakdowns that eliminate awkward negotiation",
      "Structured inquiry flow capturing date and service in one tap",
      "Direct routing into your personal WhatsApp with pre-filled consultation details",
    ],
    cta: "Streamline my client bookings",
  },
];

export default function ProblemSection() {
  const [activeId, setActiveId] = useState<string>("dms");
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>("dms");
  const activeProblem = PROBLEMS.find((p) => p.id === activeId) || PROBLEMS[0];

  return (
    <section
      id="bottlenecks"
      className="py-20 sm:py-28 bg-transparent relative border-t border-border/40 select-none"
      aria-label="Common Local Business Bottlenecks"
    >
      <div className="section-container">
        
        {/* Section Header: Pure Typographic Authority */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-border/40 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary">
                The Local Business Dilemma
              </span>
            </div>
            <h2
              className="font-display font-black text-text-primary text-3xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight"
              style={{ letterSpacing: "-0.035em" }}
            >
              Where local businesses{" "}
              <span className="font-display italic font-normal text-rose-600 dark:text-rose-400">
                silently lose clients.
              </span>
            </h2>
          </div>
          <p className="text-text-secondary text-sm sm:text-base max-w-md leading-relaxed font-sans">
            Four operational bottlenecks that prevent reputable local businesses from capturing the client volume their craft deserves.
          </p>
        </div>

        {/* ── Desktop View (Two-Column Interactive Diagnosis Ledger) ─────────── */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left: Problem Selector Ledger */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {PROBLEMS.map((problem) => {
              const isActive = activeId === problem.id;
              return (
                <button
                  key={problem.id}
                  type="button"
                  onClick={() => setActiveId(problem.id)}
                  className={`group w-full flex items-center justify-between text-left p-4.5 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? "bg-zinc-50 dark:bg-zinc-900 border-zinc-900 dark:border-white/20 shadow-md scale-[1.01]"
                      : "bg-transparent border-border/60 hover:border-zinc-400 dark:hover:border-zinc-700 text-text-secondary hover:text-text-primary"
                  }`}
                  aria-selected={isActive}
                  role="tab"
                >
                  <div className="flex items-start gap-3.5">
                    <span
                      className={`font-mono text-xs font-bold transition-colors ${
                        isActive ? "text-emerald-600 dark:text-emerald-400" : "text-text-tertiary"
                      }`}
                    >
                      {problem.index}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-[10px] tracking-wider uppercase text-text-tertiary">
                        {problem.category}
                      </span>
                      <span
                        className={`font-display font-bold text-base tracking-tight leading-snug transition-colors ${
                          isActive ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"
                        }`}
                      >
                        {problem.label}
                      </span>
                    </div>
                  </div>
                  <ArrowRight
                    size={15}
                    className={`shrink-0 ml-3 transition-all duration-200 ${
                      isActive
                        ? "text-text-primary translate-x-0 opacity-100"
                        : "text-text-tertiary -translate-x-1 opacity-0 group-hover:opacity-50"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Diagnosis & Solution Detail Sheet */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/40 border border-border/80 dark:border-zinc-800 shadow-sm min-h-[460px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProblem.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="flex flex-col justify-between h-full gap-6"
                >
                  {/* Detailed Explanation */}
                  <div>
                    <div className="flex items-center gap-2 mb-2 font-mono text-[11px] text-text-tertiary uppercase tracking-wider">
                      <span>Diagnosis {activeProblem.index}</span>
                      <span>·</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                        {activeProblem.category}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-2xl text-text-primary tracking-tight mb-3">
                      {activeProblem.label}
                    </h3>
                    <p className="text-text-secondary text-sm sm:text-[15px] leading-relaxed font-sans">
                      {activeProblem.detail}
                    </p>
                  </div>

                  {/* Contrast Sheet: The Leak vs The Nerqiva System */}
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {/* The Current Leak */}
                    <div className="p-4 rounded-xl bg-rose-500/[0.04] dark:bg-rose-500/[0.06] border border-rose-500/20 flex flex-col justify-between">
                      <div className="flex items-center gap-1.5 mb-2">
                        <X size={14} className="text-rose-500 stroke-[2.5] shrink-0" />
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                          The Current Leak
                        </span>
                      </div>
                      <p className="text-xs text-text-secondary leading-relaxed font-medium">
                        {activeProblem.realCost}
                      </p>
                    </div>

                    {/* The Nerqiva System */}
                    <div className="p-4 rounded-xl bg-emerald-500/[0.04] dark:bg-emerald-500/[0.06] border border-emerald-500/25 flex flex-col justify-between">
                      <div className="flex items-center gap-1.5 mb-2">
                        <Check size={14} className="text-emerald-600 dark:text-emerald-400 stroke-[2.5] shrink-0" />
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                          The Nerqiva System
                        </span>
                      </div>
                      <p className="text-xs text-text-primary leading-relaxed font-medium">
                        {activeProblem.solutionSummary}
                      </p>
                    </div>
                  </div>

                  {/* Concrete Fixes Checklist */}
                  <div>
                    <span className="font-mono text-[11px] font-bold text-text-tertiary block mb-3 uppercase tracking-wider">
                      Engineered Fixes:
                    </span>
                    <ul className="space-y-2.5">
                      {activeProblem.wefix.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-text-secondary">
                          <div className="mt-0.5 shrink-0 rounded-full p-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                          <span className="font-sans leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Bar */}
                  <div className="pt-5 border-t border-border/50 dark:border-zinc-800 flex items-center justify-between">
                    <a
                      href={`https://wa.me/918724932985?text=Hi%20Dipjyoti,%20I'd%20like%20to%20discuss%20fixing:%20${encodeURIComponent(
                        activeProblem.label
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full font-mono text-xs font-bold tracking-wider text-white bg-text-primary dark:bg-white dark:text-zinc-950 hover:opacity-90 inline-flex items-center gap-2 transition-all cursor-pointer shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-current" />
                      <span>{activeProblem.cta} on WhatsApp</span>
                      <ArrowRight size={13} />
                    </a>
                    <span className="font-mono text-[10px] text-text-tertiary tracking-wider uppercase">
                      Direct Senior Engineer
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* ── Mobile View (Interactive Accordion — Clean Touch Targets) ─────── */}
        <div className="block lg:hidden space-y-3">
          {PROBLEMS.map((problem) => {
            const isExpanded = mobileExpandedId === problem.id;
            return (
              <div
                key={problem.id}
                className="border border-border/80 dark:border-zinc-800 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/40 overflow-hidden transition-all duration-200 shadow-sm"
              >
                {/* Accordion Trigger */}
                <button
                  type="button"
                  onClick={() =>
                    setMobileExpandedId(isExpanded ? null : problem.id)
                  }
                  className="w-full flex items-center justify-between p-4.5 sm:p-5 text-left cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start gap-3 pr-2">
                    <span
                      className={`font-mono text-xs font-bold mt-0.5 ${
                        isExpanded ? "text-emerald-600 dark:text-emerald-400" : "text-text-tertiary"
                      }`}
                    >
                      {problem.index}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-mono text-[10px] tracking-wider uppercase text-text-tertiary">
                        {problem.category}
                      </span>
                      <span
                        className={`font-display font-bold text-sm sm:text-base leading-snug ${
                          isExpanded ? "text-text-primary" : "text-text-secondary"
                        }`}
                      >
                        {problem.label}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-text-tertiary transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-text-primary" : ""
                    }`}
                  />
                </button>

                {/* Inline Expanded Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-border/40 flex flex-col gap-4 font-sans">
                        <p className="text-text-secondary text-sm leading-relaxed mt-2">
                          {problem.detail}
                        </p>

                        {/* Contrast Boxes */}
                        <div className="flex flex-col gap-2.5">
                          <div className="p-3.5 rounded-xl bg-rose-500/[0.04] border border-rose-500/20">
                            <div className="flex items-center gap-1.5 mb-1">
                              <X size={13} className="text-rose-500 stroke-[2.5] shrink-0" />
                              <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                                The Current Leak
                              </span>
                            </div>
                            <p className="text-xs text-text-secondary font-medium">
                              {problem.realCost}
                            </p>
                          </div>

                          <div className="p-3.5 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/25">
                            <div className="flex items-center gap-1.5 mb-1">
                              <Check size={13} className="text-emerald-600 dark:text-emerald-400 stroke-[2.5] shrink-0" />
                              <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                                The Nerqiva System
                              </span>
                            </div>
                            <p className="text-xs text-text-primary font-medium">
                              {problem.solutionSummary}
                            </p>
                          </div>
                        </div>

                        {/* Checklist */}
                        <ul className="space-y-2 mt-1">
                          {problem.wefix.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                              <div className="mt-0.5 shrink-0 rounded-full p-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                                <Check className="w-3 h-3 stroke-[2.5]" />
                              </div>
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Mobile CTA */}
                        <a
                          href={`https://wa.me/918724932985?text=Hi%20Dipjyoti,%20I'd%20like%20to%20discuss%20fixing:%20${encodeURIComponent(
                            problem.label
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3 px-4 rounded-full font-mono text-xs font-bold tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 inline-flex items-center justify-center gap-2 mt-2 shadow-sm"
                        >
                          <MessageSquare className="w-3.5 h-3.5 fill-current" />
                          <span>{problem.cta}</span>
                          <ArrowRight size={13} />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
