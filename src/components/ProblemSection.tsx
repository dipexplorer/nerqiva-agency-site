"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const PROBLEMS = [
  {
    id: "invisible",
    label: "Nobody can find you online",
    subtitle: "Your competitors show up on Google. You don't.",
    detail: "When someone searches \u201cbest bridal makeup artist near me\u201d or \u201csalon in [your city],\u201d your business doesn't come up. That customer books someone else — not because your work is worse, but because they can't find you.",
    realCost: "You're missing walk-in and discovery customers every single day without knowing it.",
    wefix: [
      "Your website and Google Business profile set up properly",
      "Shows up when locals search for your service type",
      "Connected to Google Maps with your real address and hours"
    ],
    cta: "Fix my Google visibility"
  },
  {
    id: "dms",
    label: "You lose customers in your DMs",
    subtitle: "By the time you reply, they've already booked someone else.",
    detail: "A potential client messages you on Instagram at 10pm asking for pricing. You see it the next morning. They booked another studio at 11pm. This happens more than you think — and there's an easy fix.",
    realCost: "Delayed replies are the #1 reason warm leads go cold in service businesses.",
    wefix: [
      "1-tap WhatsApp button on your website so clients reach you instantly",
      "Automated first reply sent immediately — even when you're asleep",
      "Pricing page and service catalog visible without having to DM first"
    ],
    cta: "Stop losing DM leads"
  },
  {
    id: "mobile",
    label: "Your website looks bad on phones",
    subtitle: "Most of your visitors are on mobile. Is it embarrassing?",
    detail: "Open your current website on a phone. Does it load slowly? Do buttons look tiny and hard to tap? Does the text look squished? Your clients notice — even if they don't say anything. A website that looks unprofessional makes your work look cheaper.",
    realCost: "A bad mobile experience makes you look less credible, even if your actual work is excellent.",
    wefix: [
      "Loads fast on any phone, even on slower internet connections",
      "Buttons are easy to tap — no pinching or zooming required",
      "Looks professional, clean, and matches the quality of your work"
    ],
    cta: "Make my site mobile-ready"
  },
  {
    id: "bookings",
    label: "No easy way for clients to book",
    subtitle: "If booking you takes effort, some clients simply won't bother.",
    detail: "Your current setup requires clients to DM you, wait for a reply, share details back-and-forth, and manually coordinate a date. Every extra step is a chance for them to lose interest or get distracted. High-value clients especially expect the process to be simple.",
    realCost: "Complex booking processes filter out busy, high-paying clients who have less patience for friction.",
    wefix: [
      "Clear pricing and packages visible upfront — no 'DM for rates'",
      "One-step inquiry form that lands straight in your WhatsApp or inbox",
      "Optional calendar link for clients to self-book a consultation slot"
    ],
    cta: "Simplify my bookings"
  }
];

export default function ProblemSection() {
  const [activeId, setActiveId] = useState<string>("invisible");
  const activeProblem = PROBLEMS.find((p) => p.id === activeId) || PROBLEMS[0];

  return (
    <section id="problems" className="py-16 sm:py-24 bg-transparent relative border-t border-border/30">
      <div className="section-container">
        
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-tertiary">
                Common problems we fix
              </span>
            </div>
            <h2
              className="font-sans font-extrabold text-text-primary leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              Sound familiar?
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-text-secondary text-base leading-relaxed">
              These are the most common reasons local businesses don't get as many clients as they should. Click any problem to see how we fix it.
            </p>
          </div>
        </div>

        {/* Two-Column Problem Explorer */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left: Problem Selector */}
          <div className="lg:col-span-5 flex flex-col border-l border-border/30">
            {PROBLEMS.map((problem, i) => {
              const isActive = activeId === problem.id;
              return (
                <button
                  key={problem.id}
                  onMouseEnter={() => setActiveId(problem.id)}
                  onClick={() => setActiveId(problem.id)}
                  className={`group flex items-center justify-between text-left py-4 pl-6 border-l-2 ml-[-2px] transition-all duration-200 cursor-pointer min-h-[56px] ${
                    isActive
                      ? "border-accent text-text-primary bg-accent/5"
                      : "border-transparent text-text-secondary hover:text-text-primary hover:border-accent/30"
                  }`}
                >
                  <div className="flex flex-col gap-0.5">
                    <span className={`font-sans text-sm font-semibold ${isActive ? "text-text-primary" : ""}`}>
                      {problem.label}
                    </span>
                    <span className="font-sans text-xs text-text-tertiary font-normal line-clamp-1">
                      {problem.subtitle}
                    </span>
                  </div>
                  <ArrowRight
                    size={14}
                    className={`text-text-tertiary shrink-0 ml-4 transition-all duration-200 ${
                      isActive ? "text-accent opacity-100 translate-x-0" : "opacity-0 -translate-x-1"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Problem Detail */}
          <div className="lg:col-span-7">
            <div className="glass-panel border border-border/50 overflow-hidden shadow-xl rounded backdrop-blur-xl min-h-[380px]">
              
              <div className="p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProblem.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-5"
                  >
                    {/* Problem Description */}
                    <div>
                      <h3 className="font-sans font-bold text-xl text-text-primary mb-2">
                        {activeProblem.label}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {activeProblem.detail}
                      </p>
                    </div>

                    {/* Real cost — stated plainly */}
                    <div className="bg-red-500/10 border border-red-500/20 rounded p-4">
                      <p className="text-xs text-red-700 dark:text-red-400 font-semibold leading-snug">
                        {activeProblem.realCost}
                      </p>
                    </div>

                    {/* What we fix */}
                    <div>
                      <span className="font-sans text-xs font-bold text-text-tertiary block mb-2.5 uppercase tracking-wider">
                        What we fix:
                      </span>
                      <div className="space-y-2">
                        {activeProblem.wefix.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <CheckCircle size={13} className="shrink-0 text-accent-gold mt-0.5" />
                            <span className="text-sm text-text-secondary leading-normal">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4 border-t border-border/30 flex items-center justify-between">
                      <a
                        href={`https://wa.me/918724932985?text=Hi%20NERQIVA,%20I%20need%20help%20with:%20${encodeURIComponent(activeProblem.label)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group font-sans text-sm font-bold text-accent hover:text-accent-mid flex items-center gap-2 transition-colors"
                      >
                        {activeProblem.cta}
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                      <span className="font-mono text-[9px] text-text-tertiary tracking-wider uppercase">
                        Free to ask
                      </span>
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
