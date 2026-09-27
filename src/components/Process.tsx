"use client";

import { useState } from "react";
import { Sparkles, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { PROCESS_STEPS } from "../data/process";
import Link from "next/link";

export default function Process() {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeStep = PROCESS_STEPS[activeIdx];

  const handleNext = () => {
    if (activeIdx < PROCESS_STEPS.length - 1) {
      setActiveIdx((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeIdx > 0) {
      setActiveIdx((prev) => prev - 1);
    }
  };

  return (
    <section id="process" className="py-20 sm:py-28 bg-bg-primary text-text-primary border-t border-border/45 relative z-10">
      <div className="section-container relative">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={14} className="text-accent" />
            <span className="label-eyebrow text-accent">OUR METHODOLOGY</span>
          </div>
          <h2 
            className="font-sans font-extrabold text-text-primary leading-[1.15] mb-4 tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            A process built for <span className="bg-linear-to-r from-accent via-accent-light to-accent-gold bg-clip-text text-transparent font-black">clarity</span> and results.
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-light">
            No endless waiting. Select a step below to see exactly how we turn your business details into a live website in 24 Hours.
          </p>
        </div>

        {/* Main Interactive Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Step Selector Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <div className="flex items-center justify-between px-1 mb-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-text-tertiary font-bold">
                Methodology Steps ({activeIdx + 1}/{PROCESS_STEPS.length})
              </span>
              <span className="font-mono text-[10px] text-accent font-semibold">
                Click step to view
              </span>
            </div>

            {/* Step Selection Buttons */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {PROCESS_STEPS.map((step, idx) => {
                const isCurrent = idx === activeIdx;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`p-4 rounded-xl text-left font-mono transition-all duration-200 cursor-pointer border shrink-0 lg:w-full flex items-center justify-between gap-3 ${
                      isCurrent
                        ? "bg-accent/10 border-accent text-accent shadow-md shadow-accent/10 translate-x-1"
                        : "bg-bg-card/70 border-border/50 text-text-secondary hover:border-accent/40 hover:text-text-primary hover:bg-bg-card"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center border shrink-0 transition-colors ${
                        isCurrent
                          ? "bg-accent text-white dark:text-bg-primary border-accent"
                          : "bg-bg-secondary text-text-tertiary border-border/60"
                      }`}>
                        {step.number}
                      </span>
                      <span className="font-sans text-xs font-bold tracking-tight truncate">
                        {step.title}
                      </span>
                    </div>

                    <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded font-bold shrink-0 hidden sm:inline-block">
                      {step.timeframe}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Single Active Step Display Card */}
          <div className="lg:col-span-8">
            <div className="card-luxury p-6 sm:p-10 relative overflow-hidden bg-bg-card/90 border border-border/70 shadow-2xl flex flex-col justify-between min-h-[460px]">
              
              {/* Background ambient glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 blur-[100px] pointer-events-none rounded-full" />

              <div>
                {/* Step Top Bar Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-border/30">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono font-extrabold text-sm flex items-center justify-center shadow-xs">
                      {activeStep.number}
                    </span>
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold block">
                        STEP {activeStep.number} OF {PROCESS_STEPS.length}
                      </span>
                      <span className="font-mono text-xs text-text-tertiary font-medium">
                        [{activeStep.tagline}]
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full font-bold flex items-center gap-1.5">
                    ⏱ Timeframe: {activeStep.timeframe}
                  </span>
                </div>

                {/* Step Title & Description */}
                <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-text-primary mb-3 tracking-tight">
                  {activeStep.title}
                </h3>
                
                <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6 font-light max-w-2xl">
                  {activeStep.description}
                </p>

                {/* Key Deliverable Pills */}
                <div className="mb-6">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary font-bold block mb-2">
                    Key Deliverables & Specifications
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeStep.details.map((det, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-bg-secondary text-text-secondary border border-border/40 rounded-md font-mono text-[10px] uppercase tracking-wider font-semibold select-none flex items-center gap-1.5"
                      >
                        <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                        {det}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Interactive Visual Graphic Component */}
                <div className="p-4 sm:p-5 rounded-xl bg-bg-secondary/60 border border-border/40 mb-6">
                  <div className="flex items-center justify-between mb-3 border-b border-border/20 pb-2">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary font-bold flex items-center gap-1.5">
                      <Sparkles size={11} className="text-accent" />
                      Step Deliverable Preview
                    </span>
                    <span className="font-mono text-[8px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded uppercase font-bold">
                      Guaranteed Output
                    </span>
                  </div>

                  {/* Step 1 Graphic */}
                  {activeStep.id === "select" && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {[
                        { name: "Luxury Salon", color: "from-purple-500/20 to-indigo-500/20", border: "border-purple-500/30" },
                        { name: "Dental Clinic", color: "from-cyan-500/20 to-blue-500/20", border: "border-cyan-500/30" },
                        { name: "Ramen & Dining", color: "from-amber-500/20 to-red-500/20", border: "border-amber-500/30" },
                        { name: "Fitness Gym", color: "from-emerald-500/20 to-teal-500/20", border: "border-emerald-500/30" },
                      ].map((demo, idx) => (
                        <div key={idx} className={`p-3 rounded-lg bg-linear-to-br ${demo.color} border ${demo.border} flex flex-col justify-between h-18`}>
                          <span className="font-mono text-[9px] text-text-primary font-bold truncate">{demo.name}</span>
                          <div className="flex items-center justify-between">
                            <span className="h-1.5 w-8 rounded-full bg-accent/40" />
                            <span className="text-[7px] font-mono text-emerald-600 dark:text-emerald-400 font-extrabold uppercase">LIVE DEMO</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Step 2 Graphic */}
                  {activeStep.id === "details" && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {[
                        { label: "Business Logo", icon: "🖼️" },
                        { label: "Services & Prices", icon: "📋" },
                        { label: "WhatsApp Number", icon: "💬" },
                        { label: "Google Maps PIN", icon: "📍" },
                      ].map((item, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-bg-card border border-border/40 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <span className="text-sm">{item.icon}</span>
                            <span className="font-mono text-[10px] text-text-primary font-semibold truncate">{item.label}</span>
                          </div>
                          <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Step 3 Graphic */}
                  {activeStep.id === "customize" && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      <div className="p-3 rounded-lg bg-bg-card border border-border/40 flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-mono font-black text-xs shrink-0">
                          99
                        </div>
                        <div>
                          <div className="font-mono text-[9px] text-text-tertiary uppercase font-bold">Mobile Speed</div>
                          <div className="font-sans text-xs text-text-primary font-bold">Lighthouse Score</div>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-bg-card border border-border/40 flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent font-mono font-black text-xs shrink-0">
                          100%
                        </div>
                        <div>
                          <div className="font-mono text-[9px] text-text-tertiary uppercase font-bold">WhatsApp Flow</div>
                          <div className="font-sans text-xs text-text-primary font-bold">1-Click Routing</div>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-bg-card border border-border/40 flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 font-mono font-black text-xs shrink-0">
                          SEO
                        </div>
                        <div>
                          <div className="font-mono text-[9px] text-text-tertiary uppercase font-bold">Google Maps</div>
                          <div className="font-sans text-xs text-text-primary font-bold">Local Meta Tagged</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4 Graphic */}
                  {activeStep.id === "test" && (
                    <div className="p-3.5 rounded-lg bg-bg-card border border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="h-8 w-8 rounded-md bg-accent/10 border border-accent/30 flex items-center justify-center text-accent text-sm shrink-0">
                          📱
                        </div>
                        <div className="min-w-0">
                          <div className="font-mono text-[11px] text-text-primary font-bold">Private Staging Preview Link</div>
                          <div className="font-mono text-[9px] text-accent truncate">https://preview.nerqiva.com/your-business</div>
                        </div>
                      </div>
                      <span className="font-mono text-[9px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-md font-bold shrink-0">
                        ✓ Phone Screen Tested
                      </span>
                    </div>
                  )}

                  {/* Step 5 Graphic */}
                  {activeStep.id === "launch" && (
                    <div className="p-3.5 rounded-lg bg-linear-to-r from-emerald-500/15 via-teal-500/10 to-accent/15 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="relative flex h-3 w-3 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                        </span>
                        <div>
                          <div className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-extrabold uppercase tracking-wider">
                            SYSTEM STATUS: LIVE & RECEIVING LEADS
                          </div>
                          <div className="font-sans text-xs text-text-primary font-semibold">
                            Custom Domain Active • Direct WhatsApp Lead Alerts Connected
                          </div>
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-emerald-500 text-white dark:text-bg-primary font-mono text-[9px] font-black uppercase tracking-widest rounded shrink-0 shadow-xs">
                        24-Hour Guarantee
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Step Navigation Controls Footer */}
              <div className="pt-4 border-t border-border/30 flex items-center justify-between gap-4 flex-wrap">
                <button
                  onClick={handlePrev}
                  disabled={activeIdx === 0}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 font-mono text-[10px] uppercase font-bold rounded-lg border transition-all cursor-pointer ${
                    activeIdx === 0
                      ? "opacity-30 border-border/30 text-text-tertiary cursor-not-allowed"
                      : "border-border/60 text-text-secondary hover:text-text-primary hover:border-accent/50 bg-bg-card"
                  }`}
                >
                  <ArrowLeft size={12} /> Previous Step
                </button>

                {/* Progress Indicators Dots */}
                <div className="flex items-center gap-1.5">
                  {PROCESS_STEPS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIdx(i)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        i === activeIdx ? "w-6 bg-accent" : "w-2 bg-border/60 hover:bg-text-tertiary"
                      }`}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>

                {activeIdx < PROCESS_STEPS.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-accent hover:bg-accent-mid text-white dark:text-bg-primary font-mono text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all shadow-md shadow-accent/20 cursor-pointer"
                  >
                    Next Step: {PROCESS_STEPS[activeIdx + 1].title} <ArrowRight size={12} />
                  </button>
                ) : (
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all shadow-md shadow-emerald-500/20"
                  >
                    Start Your 24-Hour Launch <ArrowRight size={12} />
                  </Link>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}