"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle, ChevronDown } from "lucide-react";

interface ProblemItem {
  id: string;
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
    label: "You lose customers in your Instagram DMs",
    subtitle: "By the time you reply, they've already booked someone else.",
    detail: "A potential client reaches out on Instagram at 10 PM inquiring about bridal rates or private sessions. You see it the next morning. They already confirmed with a competitor at 10:30 PM. In high-ticket services, speed and immediacy determine who wins the deal.",
    realCost: "Client DMs at 11 PM → You reply next morning → They already booked your competitor.",
    solutionSummary: "Client lands on site → Taps service → WhatsApp pre-fills service & budget → In your chat in 5 seconds.",
    wefix: [
      "Prominent 1-tap WhatsApp booking button accessible from every page",
      "Pre-filled service context so leads arrive qualified and ready to confirm",
      "Transparent package guide and pricing visible without needing a protracted DM exchange"
    ],
    cta: "Stop losing DM inquiries"
  },
  {
    id: "mobile",
    label: "Your website looks bad or loads slow on phones",
    subtitle: "Over 85% of your visitors are on mobile. Is it turning them away?",
    detail: "Over 85% of your clients find you on their phone. If your site takes 5 seconds to load, has tiny unreadable text, or squished buttons, it creates an immediate perception of low quality. A clunky mobile experience damages your brand before you ever get to speak with them.",
    realCost: "Over 85% visit on mobile → Slow load or broken menu → Visitor bounces in 3 seconds.",
    solutionSummary: "Sub-second mobile speed → Tested on Jio & Airtel 4G → Instant professional trust.",
    wefix: [
      "Sub-second load times optimized for local 4G/5G mobile connections",
      "Generous touch targets and intuitive navigation — no pinching or horizontal zooming",
      "Editorial visual design that communicates the real luxury quality of your work"
    ],
    cta: "Modernize my mobile experience"
  },
  {
    id: "invisible",
    label: "Nobody can find your business on Google",
    subtitle: "Your competitors show up on Google Maps. You don't.",
    detail: "When someone searches \u201cbest bridal makeup artist near me\u201d or \u201cdental clinic in Guwahati,\u201d your business doesn't appear. That high-value customer books someone else — not because your craft is worse, but because you were invisible at the exact moment they were ready to spend.",
    realCost: "Nearby clients search 'best clinic / salon near me' → Competitor appears #1 → You lose the booking.",
    solutionSummary: "Structured Google Business Profile & Local Schema → High search ranking & 1-tap call/directions.",
    wefix: [
      "Google Business Profile verified and calibrated for local search ranking",
      "Fast-loading digital storefront optimized for high-intent local keywords",
      "Accurate Google Maps location pin, operating hours, and direct call/book links"
    ],
    cta: "Fix my Google visibility"
  },
  {
    id: "bookings",
    label: "No easy way for clients to view packages & book",
    subtitle: "If booking takes effort, busy clients simply won't bother.",
    detail: "When booking requires multi-day back-and-forth messaging, sending photos, asking for payment details, and manual coordination, clients lose momentum. High-paying clients especially expect a smooth, organized booking flow that respects their time.",
    realCost: "Endless 'Price please' comments & back-and-forth messaging → 70% of prospective clients disappear.",
    solutionSummary: "Transparent package menus & real client photos → Zero friction → Client arrives ready to confirm.",
    wefix: [
      "Upfront package breakdowns and deliverables that eliminate awkward negotiation",
      "Structured inquiry form that captures date, service, and requirements in one single submission",
      "Direct routing into your personal WhatsApp with pre-filled consultation details"
    ],
    cta: "Streamline my client bookings"
  }
];

export default function ProblemSection() {
  const [activeId, setActiveId] = useState<string>("dms");
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>("dms");
  const activeProblem = PROBLEMS.find((p) => p.id === activeId) || PROBLEMS[0];

  return (
    <section id="problems" className="py-20 sm:py-28 bg-transparent relative border-t border-border/30">
      <div className="section-container">
        
        {/* Editorial Section Header: No cheesy kicker label */}
        <div className="grid lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-8">
            <h2
              className="font-display font-black text-text-primary text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] tracking-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Where local businesses{" "}
              <span className="font-serif italic font-normal text-accent">
                silently lose clients.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-text-secondary text-base leading-relaxed">
              These are the four operational bottlenecks that prevent reputable local businesses from capturing the client volume they deserve.
            </p>
          </div>
        </div>

        {/* ── Desktop View (Two-Column Explorer) ────────────────────────── */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left: Problem Selector Cards (No 2px border-left hack, high-contrast typography) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {PROBLEMS.map((problem) => {
              const isActive = activeId === problem.id;
              return (
                <button
                  key={problem.id}
                  onClick={() => setActiveId(problem.id)}
                  className={`group w-full flex items-center justify-between text-left p-4.5 rounded-xl transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? "bg-bg-card border-border shadow-sm text-text-primary"
                      : "bg-transparent border-transparent text-text-secondary hover:bg-bg-secondary/70 hover:text-text-primary"
                  }`}
                  aria-selected={isActive}
                  role="tab"
                >
                  <div className="flex items-start gap-3">
                    <span 
                      className={`mt-1.5 w-2 h-2 rounded-full shrink-0 transition-all duration-200 ${
                        isActive ? "bg-accent scale-110" : "bg-border-dark group-hover:bg-text-tertiary"
                      }`} 
                    />
                    <div className="flex flex-col gap-0.5">
                      <span className={`font-sans text-sm font-bold tracking-tight ${isActive ? "text-accent" : "text-text-primary"}`}>
                        {problem.label}
                      </span>
                      <span className="font-sans text-xs text-text-secondary font-normal line-clamp-1">
                        {problem.subtitle}
                      </span>
                    </div>
                  </div>
                  <ArrowRight
                    size={14}
                    className={`shrink-0 ml-3 transition-all duration-200 ${
                      isActive ? "text-accent opacity-100 translate-x-0" : "text-text-tertiary opacity-0 -translate-x-1 group-hover:opacity-60"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Problem Detail Container */}
          <div className="lg:col-span-7">
            <div className="card-luxury border border-border bg-bg-card overflow-hidden shadow-xl rounded-2xl min-h-[460px] flex flex-col justify-between">
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProblem.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="flex flex-col gap-6 h-full justify-between"
                  >
                    {/* Problem Description */}
                    <div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary mb-2.5 tracking-tight">
                        {activeProblem.label}
                      </h3>
                      <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                        {activeProblem.detail}
                      </p>
                    </div>

                    {/* Before vs After Contrast: The Current Leak vs The Nerqiva System */}
                    <div className="grid sm:grid-cols-2 gap-3.5 my-1">
                      {/* Current Obstacle */}
                      <div className="bg-rose-500/4 border border-rose-500/20 rounded-xl p-4 flex flex-col justify-between shadow-2xs">
                        <div className="flex items-center gap-1.5 mb-2">
                          <XCircle size={14} className="text-rose-500 shrink-0" />
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-rose-500">
                            The Current Leak
                          </span>
                        </div>
                        <p className="text-xs text-text-secondary font-medium leading-relaxed">
                          {activeProblem.realCost}
                        </p>
                      </div>
                      
                      {/* Tailored Solution */}
                      <div className="bg-emerald-500/4 border border-emerald-500/25 rounded-xl p-4 flex flex-col justify-between shadow-2xs">
                        <div className="flex items-center gap-1.5 mb-2">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                            The Nerqiva System
                          </span>
                        </div>
                        <p className="text-xs text-text-primary font-medium leading-relaxed">
                          {activeProblem.solutionSummary}
                        </p>
                      </div>
                    </div>

                    {/* What we fix Checklist */}
                    <div>
                      <span className="font-mono text-[11px] font-bold text-text-tertiary block mb-3 uppercase tracking-wider">
                        Engineered Fixes:
                      </span>
                      <div className="space-y-2.5">
                        {activeProblem.wefix.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 size={15} className="shrink-0 text-accent-gold mt-0.5" />
                            <span className="text-sm text-text-secondary leading-normal font-medium">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-5 border-t border-border/40 flex items-center justify-between">
                      <a
                        href={`https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'd%20like%20to%20discuss%20fixing:%20${encodeURIComponent(activeProblem.label)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary py-2.5 px-5 text-xs font-mono font-bold tracking-wider inline-flex items-center gap-2"
                      >
                        <span>{activeProblem.cta}</span>
                        <ArrowRight size={13} />
                      </a>
                      <span className="font-mono text-[10px] text-text-secondary tracking-wider uppercase font-semibold">
                        Free Consultation
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>

        {/* ── Mobile View (Interactive Accordion — Solves Off-Screen Disconnect) ── */}
        <div className="block lg:hidden space-y-3">
          {PROBLEMS.map((problem) => {
            const isExpanded = mobileExpandedId === problem.id;
            return (
              <div 
                key={problem.id}
                className="border border-border rounded-xl bg-bg-card overflow-hidden transition-all duration-200 shadow-sm"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => setMobileExpandedId(isExpanded ? null : problem.id)}
                  className="w-full flex items-center justify-between p-4.5 text-left cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start gap-3 pr-2">
                    <span 
                      className={`mt-1 w-2 h-2 rounded-full shrink-0 transition-all ${
                        isExpanded ? "bg-accent" : "bg-border-dark"
                      }`} 
                    />
                    <div className="flex flex-col gap-0.5">
                      <span className={`font-sans text-sm font-bold leading-tight ${isExpanded ? "text-accent" : "text-text-primary"}`}>
                        {problem.label}
                      </span>
                      <span className="font-sans text-xs text-text-secondary font-normal line-clamp-1">
                        {problem.subtitle}
                      </span>
                    </div>
                  </div>
                  <ChevronDown 
                    size={18} 
                    className={`shrink-0 text-text-secondary transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-accent" : ""
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
                      <div className="px-4.5 pb-5 pt-1 border-t border-border/40 flex flex-col gap-4">
                        <p className="text-text-secondary text-sm leading-relaxed mt-2">
                          {problem.detail}
                        </p>

                        {/* Contrast Boxes: The Current Leak vs The Nerqiva System */}
                        <div className="flex flex-col gap-2.5">
                          <div className="bg-rose-500/4 border border-rose-500/20 rounded-lg p-3">
                            <div className="flex items-center gap-1.5 mb-1">
                              <XCircle size={13} className="text-rose-500 shrink-0" />
                              <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-rose-500">
                                The Current Leak
                              </span>
                            </div>
                            <p className="text-xs text-text-secondary font-medium">
                              {problem.realCost}
                            </p>
                          </div>

                          <div className="bg-emerald-500/4 border border-emerald-500/25 rounded-lg p-3">
                            <div className="flex items-center gap-1.5 mb-1">
                              <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                              <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-emerald-600">
                                The Nerqiva System
                              </span>
                            </div>
                            <p className="text-xs text-text-primary font-medium">
                              {problem.solutionSummary}
                            </p>
                          </div>
                        </div>

                        {/* Checklist */}
                        <div className="space-y-2 mt-1">
                          {problem.wefix.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 size={14} className="shrink-0 text-accent-gold mt-0.5" />
                              <span className="text-xs text-text-secondary font-medium">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Mobile CTA */}
                        <a
                          href={`https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'd%20like%20to%20discuss%20fixing:%20${encodeURIComponent(problem.label)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary w-full py-3 text-xs font-mono font-bold tracking-wider inline-flex items-center justify-center gap-2 mt-2"
                        >
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
