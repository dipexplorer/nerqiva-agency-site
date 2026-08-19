"use client";

import { useEffect, useRef, useState } from "react";
import { PROCESS_STEPS } from "../data/process";

export default function Process() {
  const [activeStep, setActiveStep] = useState("discover");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -50% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveStep(entry.target.id);
        }
      });
    }, observerOptions);

    const stepElements = document.querySelectorAll("[data-process-step]");
    stepElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToStep = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="process" className="py-32 bg-bg-primary text-text-primary border-t border-border/45 relative z-10">
      <div className="section-container relative" ref={containerRef}>
        
        {/* Main Grid: Stepper (Left) and Content (Right) */}
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Column: Sticky Sidebar Stepper */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="sticky top-32 flex flex-col gap-6 select-none max-w-xs">
              <div className="flex flex-col gap-2 mb-6">
                <span className="label-eyebrow text-accent">OUR METHODOLOGY</span>
                <h2 className="font-sans font-extrabold text-text-primary text-3xl leading-tight tracking-tight">
                  A process built for <span className="text-accent">clarity</span> and results.
                </h2>
              </div>

              {/* Vertical Stepper List */}
              <div className="flex flex-col gap-4 border-l border-border/40 pl-4 font-mono text-xs font-semibold text-text-tertiary">
                {PROCESS_STEPS.map((step) => {
                  const isActive = activeStep === step.id;
                  return (
                    <button
                      key={step.id}
                      onClick={() => scrollToStep(step.id)}
                      className={`flex items-center gap-3 text-left transition-all duration-300 hover:text-text-primary cursor-pointer ${
                        isActive ? "text-accent font-bold translate-x-1" : ""
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full bg-accent transition-transform duration-300 ${
                        isActive ? "scale-100" : "scale-0"
                      }`} />
                      {step.number} {step.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Vertical Process List */}
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-12">
            
            {/* Header (Mobile only) */}
            <div className="block lg:hidden max-w-md mb-8">
              <span className="label-eyebrow text-accent">OUR METHODOLOGY</span>
              <h2 className="font-sans font-extrabold text-text-primary leading-tight mt-2 mb-4" style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}>
                A process built for <span className="text-accent">clarity</span> and results.
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                We follow a structured roadmap designed to align objectives, speed up iteration, and verify production quality.
              </p>
            </div>

            {/* Stepper Content Stack */}
            <div className="flex flex-col gap-8 relative">
              {/* Vertical connector line overlay */}
              <div className="absolute top-10 bottom-10 left-[23px] w-[1px] bg-border/40 hidden sm:block z-0" />

              {PROCESS_STEPS.map((phase) => {
                const isActive = activeStep === phase.id;
                
                return (
                  <div
                    key={phase.id}
                    id={phase.id}
                    data-process-step
                    className={`relative z-10 flex flex-col sm:flex-row gap-6 p-6 sm:p-8 transition-all duration-300 border-b border-border/20 last:border-none ${
                      isActive ? "bg-bg-secondary/40" : "opacity-40"
                    }`}
                    style={{ borderRadius: "4px" }}
                  >
                    {/* Node Number Indicator */}
                    <div className="flex items-center justify-center shrink-0">
                      <div className={`w-12 h-12 rounded-full border border-border/40 bg-transparent flex items-center justify-center text-text-secondary transition-all duration-300 ${
                        isActive ? "border-accent text-accent font-bold shadow-[0_4px_16px_rgba(124,58,237,0.15)] scale-105" : ""
                      }`}>
                        <span className="font-mono text-sm">{phase.number}</span>
                      </div>
                    </div>

                    {/* Step Description Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline gap-3 mb-2">
                        <h3 className="font-sans font-bold text-xl text-text-primary">
                          {phase.title}
                        </h3>
                        <div className="flex gap-2 items-center">
                          <span className="font-mono text-[9px] text-accent uppercase tracking-widest font-bold">
                            [{phase.tagline}]
                          </span>
                          {phase.timeframe && (
                            <span className="font-mono text-[8px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-1.5 py-0.5 rounded-[2px] uppercase tracking-widest font-bold">
                              ⏱ {phase.timeframe}
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-xl">
                        {phase.description}
                      </p>

                      {/* Details pills grid */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-border/20 mt-3">
                        {phase.details.map((det, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-bg-secondary text-text-secondary border-none font-mono text-[8px] uppercase tracking-wider select-none"
                            style={{ borderRadius: "2px" }}
                          >
                            {det}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}