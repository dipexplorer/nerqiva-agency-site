"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Activity, AlertCircle, RefreshCw } from "lucide-react";

const PROBLEMS = [
  {
    id: "presence",
    label: "Outdated Digital Presence",
    detail: "Your current site looks old or broken on phones, failing to reflect the premium quality of your real business.",
    cost: "Lost credibility and potential customers leaving for competitors.",
    investigate: [
      "Mobile layout & touch button sizing",
      "Clear value messaging for new clients",
      "Fast 1-second page load optimization"
    ],
    resolution: "Modern high-converting web design built for results."
  },
  {
    id: "journey",
    label: "Confusing User Experience",
    detail: "Visitors land on your page but leave immediately because they cannot find prices, services, or contact details.",
    cost: "High bounce rates, wasted ad spend, and zero incoming calls.",
    investigate: [
      "Headlines that explain your offer in 3 seconds",
      "Clean visual structure and readable fonts",
      "Prominent 1-click WhatsApp & Call buttons"
    ],
    resolution: "Guided customer flow with instant action buttons."
  },
  {
    id: "mobile",
    label: "Poor Mobile Experience",
    detail: "Over 80% of your customers visit from mobile phones. A slow or laggy mobile layout kills conversions.",
    cost: "Lost customer calls, unclickable buttons, and zoom glitches.",
    investigate: [
      "Large, tap-friendly buttons for easy tapping",
      "No auto-zooming glitches when typing in forms",
      "Ultra-fast loading on mobile network connections"
    ],
    resolution: "Mobile-first responsive layout tailored for all phones."
  },
  {
    id: "manual",
    label: "Manual Customer Follow-ups",
    detail: "Your team wastes hours copy-pasting customer details, sending manual replies, or losing track of leads.",
    cost: "Delayed responses to hot leads and wasted admin time.",
    investigate: [
      "Instant lead notification sent to your WhatsApp",
      "Automatic welcome replies for new customer enquiries",
      "Zero manual data entry required"
    ],
    resolution: "Automated lead delivery directly to WhatsApp & Email."
  }
];

export default function ProblemSection() {
  const [activeId, setActiveId] = useState<string>("presence");
  const activeProblem = PROBLEMS.find((p) => p.id === activeId) || PROBLEMS[0];

  return (
    <section id="problems" className="py-32 bg-transparent relative border-t border-border/30">
      <div className="section-container">
        
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-5">
              <span className="label-eyebrow">DIAGNOSTIC PROCESS</span>
              <div className="h-[1px] w-8 bg-accent/30" />
            </div>
            <h2
              className="font-sans font-extrabold text-text-primary leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Most digital bottlenecks are not technology problems.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-text-secondary text-base leading-relaxed">
              They are <span className="text-text-primary font-semibold">clarity & flow problems.</span> Explore a bottleneck to view its diagnostics.
            </p>
          </div>
        </div>

        {/* Two-Column Problem Explorer */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start relative z-10">
          
          {/* Left Column: Selectors */}
          <div className="lg:col-span-5 flex flex-col border-l border-border/30">
            {PROBLEMS.map((problem, i) => {
              const isActive = activeId === problem.id;
              return (
                <button
                  key={problem.id}
                  onMouseEnter={() => setActiveId(problem.id)}
                  onClick={() => setActiveId(problem.id)}
                  className={`group flex items-center justify-between text-left py-4 pl-6 border-l-2 -ml-[2px] transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "border-accent text-accent bg-accent/5 font-bold"
                      : "border-transparent text-text-secondary hover:text-text-primary hover:border-accent/30"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className="font-mono text-[10px] text-text-tertiary select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-sans text-sm md:text-base tracking-tight">
                      {problem.label}
                    </span>
                  </div>
                  <ArrowRight
                    size={14}
                    className={`text-text-tertiary group-hover:text-accent transition-all duration-200 ${
                      isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Diagnostic Output Card */}
          <div className="lg:col-span-7">
            <div 
              className="glass-panel w-full border border-border/40 overflow-hidden shadow-lg min-h-[360px]"
              style={{ borderRadius: "4px" }}
            >
              {/* Card Header */}
              <div className="px-6 py-4 bg-bg-secondary border-b border-border/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity size={12} className="text-accent animate-pulse" />
                  <span className="font-mono text-[8px] font-bold text-emerald-500 tracking-widest">
                    CLIENT CASE BREAKDOWN • ANALYSIS 0{PROBLEMS.indexOf(activeProblem) + 1}
                  </span>
                </div>
                <div className="font-mono text-[8px] text-text-tertiary">
                  CATEGORY: {activeProblem.label.toUpperCase()}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProblem.id}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-6"
                  >
                    {/* Diagnostic Summary */}
                    <div>
                      <h3 className="font-sans font-extrabold text-xl text-text-primary mb-2">
                        {activeProblem.label}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {activeProblem.detail}
                      </p>
                    </div>

                    {/* Cost of Problem */}
                    <div className="bg-red-500/5 border border-red-500/10 rounded-[3px] p-4 flex gap-3">
                      <AlertCircle size={15} className="text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-mono text-[8px] uppercase tracking-widest text-red-500 font-bold block mb-1">
                          Business Impact
                        </span>
                        <p className="text-xs text-text-secondary leading-snug">
                          {activeProblem.cost}
                        </p>
                      </div>
                    </div>

                    {/* Check list */}
                    <div>
                      <span className="font-mono text-[8px] uppercase tracking-widest text-text-tertiary block mb-3 font-bold">
                        What we investigate:
                      </span>
                      <div className="grid sm:grid-cols-1 gap-2.5">
                        {activeProblem.investigate.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <span className="text-accent text-[10px] select-none mt-0.5">▹</span>
                            <span className="text-xs text-text-secondary leading-normal">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Solution Path */}
                    <div className="pt-5 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
                      <div className="flex items-start gap-2">
                        <RefreshCw size={12} className="text-accent mt-0.5 shrink-0" />
                        <div>
                          <span className="font-mono text-[8px] uppercase tracking-widest text-text-tertiary block mb-0.5">
                            NERQIVA Resolution
                          </span>
                          <span className="text-xs font-semibold text-text-primary">
                            {activeProblem.resolution}
                          </span>
                        </div>
                      </div>
                      <a
                        href="#contact"
                        className="group font-mono text-[10px] uppercase tracking-widest text-accent font-bold hover:text-accent-mid flex items-center gap-1.5 shrink-0 self-end sm:self-center transition-colors"
                      >
                        Request diagnostic audit <span className="transition-transform group-hover:translate-x-0.5">→</span>
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
