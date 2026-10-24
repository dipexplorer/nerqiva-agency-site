"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, CheckCircle2, ArrowRight, ArrowLeft, ChevronDown } from "lucide-react";
import { PROCESS_STEPS, ProcessStep } from "../data/process";
import Link from "next/link";

interface ProcessProps {
  hideHeader?: boolean;
}

export default function Process({ hideHeader = false }: ProcessProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeStep = PROCESS_STEPS[activeIdx] || PROCESS_STEPS[0];

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

  const renderStepContent = (step: ProcessStep, isMobile: boolean = false) => (
    <div
      className={`card-luxury relative overflow-hidden bg-bg-card border border-border/70 shadow-sm flex flex-col justify-between ${
        isMobile ? "p-4 sm:p-6 min-h-0 border-0 bg-transparent shadow-none" : "p-8 sm:p-10 min-h-[440px] rounded-2xl"
      }`}
    >
      <div>
        {/* Step Top Bar: Monospace Step Counter & Timeframe */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-border/40">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 text-accent font-mono font-bold text-xs flex items-center justify-center shrink-0">
              {step.number}
            </span>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold block">
                Milestone {step.number} of {PROCESS_STEPS.length}
              </span>
              <p className="text-xs sm:text-sm text-text-secondary font-sans mt-0.5">
                {step.tagline}
              </p>
            </div>
          </div>

          <span className="font-mono text-[10px] sm:text-xs text-text-secondary bg-bg-secondary border border-border/60 px-3 py-1 rounded-full font-medium flex items-center gap-1.5 shrink-0">
            <Clock size={12} className="text-accent-gold shrink-0" />
            <span>Turnaround: {step.timeframe}</span>
          </span>
        </div>

        {/* Step Title & Description */}
        <h3 className="font-sans font-bold text-xl sm:text-2xl text-text-primary mb-3 tracking-tight">
          {step.title}
        </h3>

        <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-8 font-normal max-w-2xl">
          {step.description}
        </p>

        {/* Key Deliverables */}
        <div className="mb-6">
          <span className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary font-bold block mb-3">
            Verified Deliverables & Specifications
          </span>
          <div className="flex flex-wrap gap-2">
            {step.details.map((det, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-bg-secondary text-text-primary border border-border/50 rounded-lg font-mono text-[10px] sm:text-[11px] font-medium select-none flex items-center gap-2 shadow-2xs"
              >
                <CheckCircle2 size={13} className="text-accent-gold shrink-0" />
                {det}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Navigation Controls Footer */}
      {!isMobile ? (
        <div className="pt-6 border-t border-border/40 flex items-center justify-between gap-4 flex-wrap mt-auto">
          <button
            onClick={handlePrev}
            disabled={activeIdx === 0}
            className={`inline-flex items-center gap-1.5 px-4 py-2 font-mono text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
              activeIdx === 0
                ? "opacity-30 border-border/30 text-text-tertiary cursor-not-allowed"
                : "border-border/60 text-text-secondary hover:text-text-primary hover:border-accent/40 bg-bg-card"
            }`}
          >
            <ArrowLeft size={13} /> Previous Step
          </button>

          {/* Stepper Progress Bar */}
          <div className="flex items-center gap-1.5">
            {PROCESS_STEPS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeIdx ? "w-8 bg-accent" : "w-2.5 bg-border/70 hover:bg-text-tertiary"
                }`}
                aria-label={`Go to step ${i + 1}`}
              />
            ))}
          </div>

          {activeIdx < PROCESS_STEPS.length - 1 ? (
            <button
              onClick={handleNext}
              className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 font-mono text-xs font-semibold rounded-lg transition-all cursor-pointer"
            >
              Next Step: {PROCESS_STEPS[activeIdx + 1].title} <ArrowRight size={13} />
            </button>
          ) : (
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 font-mono text-xs font-semibold rounded-lg transition-all"
            >
              Commission Your Flagship <ArrowRight size={13} />
            </Link>
          )}
        </div>
      ) : (
        <div className="pt-4 border-t border-border/40 mt-4 flex items-center justify-between gap-3">
          {activeIdx > 0 && (
            <button
              onClick={handlePrev}
              className="inline-flex items-center gap-1.5 px-3 py-2 font-mono text-xs font-semibold rounded-lg border border-border/60 text-text-secondary hover:text-text-primary bg-bg-card cursor-pointer"
            >
              <ArrowLeft size={13} /> Prev
            </button>
          )}
          {activeIdx < PROCESS_STEPS.length - 1 ? (
            <button
              onClick={handleNext}
              className="btn-primary ml-auto inline-flex items-center gap-1.5 px-4 py-2 font-mono text-xs font-semibold rounded-lg transition-all cursor-pointer"
            >
              Next Step <ArrowRight size={13} />
            </button>
          ) : (
            <Link
              href="/contact"
              className="btn-primary w-full justify-center inline-flex items-center gap-2 px-4 py-2.5 font-mono text-xs font-semibold rounded-lg transition-all"
            >
              Commission Your Flagship <ArrowRight size={13} />
            </Link>
          )}
        </div>
      )}
    </div>
  );

  return (
    <section
      id="process"
      className={
        hideHeader
          ? "pb-12 sm:pb-20 bg-bg-primary text-text-primary relative z-10"
          : "py-20 sm:py-28 bg-bg-primary text-text-primary border-t border-border/45 relative z-10"
      }
    >
      <div className="section-container relative">
        {/* Header Section: Conditionally displayed when embedded on pages without their own H1 */}
        {!hideHeader && (
          <div className="max-w-3xl mb-12 sm:mb-16">
            <h2
              className="font-serif text-text-primary leading-[1.15] mb-4 tracking-tight"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", letterSpacing: "-0.03em" }}
            >
              A deployment process engineered for <span className="italic font-normal">clarity</span>.
            </h2>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-normal">
              From architecture selection to live domain cutover in 24 hours. Clear milestones, transparent deliverables, and zero technical friction.
            </p>
          </div>
        )}

        {/* Main Interactive Layout: Desktop 2-Column Grid vs Mobile Vertical Accordion */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Desktop Left Column: Interactive Milestone Tabs */}
          <div className="hidden lg:flex col-span-4 flex-col gap-2.5 w-full">
            <div className="flex items-center justify-between px-1 mb-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-text-tertiary font-bold">
                Deployment Milestones ({activeIdx + 1}/{PROCESS_STEPS.length})
              </span>
              <span className="font-mono text-[10px] text-accent font-medium">
                Interactive Walkthrough
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {PROCESS_STEPS.map((step, idx) => {
                const isCurrent = idx === activeIdx;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`p-3.5 sm:p-4 rounded-xl text-left font-mono transition-all duration-200 cursor-pointer border flex items-center justify-between gap-3 w-full ${
                      isCurrent
                        ? "bg-accent/10 border-accent text-text-primary shadow-xs ring-1 ring-accent/30"
                        : "bg-bg-card border-border/60 text-text-secondary hover:border-border-hover hover:text-text-primary hover:bg-bg-card/90"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={`w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center border shrink-0 transition-colors ${
                          isCurrent
                            ? "bg-accent text-white border-accent shadow-xs"
                            : "bg-bg-secondary text-text-tertiary border-border/60"
                        }`}
                      >
                        {step.number}
                      </span>
                      <span
                        className={`font-sans text-xs sm:text-sm tracking-tight truncate ${
                          isCurrent ? "font-bold text-text-primary" : "font-medium text-text-secondary"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border font-medium shrink-0 ${
                        isCurrent
                          ? "text-accent bg-accent/10 border-accent/30"
                          : "text-text-tertiary bg-bg-secondary border-border/40"
                      }`}
                    >
                      {step.timeframe}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Desktop Right Column: Single Active Milestone Showcase Card */}
          <div className="hidden lg:block col-span-8 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {renderStepContent(activeStep)}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Vertical Accordion Layout */}
          <div className="lg:hidden flex flex-col gap-3 w-full">
            <div className="flex items-center justify-between px-1 mb-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-text-tertiary font-bold">
                Deployment Milestones
              </span>
              <span className="font-mono text-[10px] text-accent font-medium">
                Tap to expand
              </span>
            </div>

            {PROCESS_STEPS.map((step, idx) => {
              const isCurrent = idx === activeIdx;
              return (
                <div key={step.id} className="flex flex-col">
                  <button
                    onClick={() => setActiveIdx(isCurrent ? -1 : idx)}
                    className={`p-3.5 sm:p-4 rounded-xl text-left font-mono transition-all duration-200 cursor-pointer border flex items-center justify-between gap-3 w-full ${
                      isCurrent
                        ? "bg-accent/10 border-accent text-text-primary ring-1 ring-accent/30 rounded-b-none"
                        : "bg-bg-card border-border/60 text-text-secondary hover:border-border-hover hover:text-text-primary"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={`w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center border shrink-0 transition-colors ${
                          isCurrent
                            ? "bg-accent text-white border-accent shadow-xs"
                            : "bg-bg-secondary text-text-tertiary border-border/60"
                        }`}
                      >
                        {step.number}
                      </span>
                      <span
                        className={`font-sans text-xs sm:text-sm tracking-tight truncate ${
                          isCurrent ? "font-bold text-text-primary" : "font-medium text-text-secondary"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className={`text-[9px] font-mono px-2 py-0.5 rounded border font-medium ${
                          isCurrent
                            ? "text-accent bg-accent/10 border-accent/30"
                            : "text-text-tertiary bg-bg-secondary border-border/40"
                        }`}
                      >
                        {step.timeframe}
                      </span>
                      <ChevronDown
                        size={15}
                        className={`text-text-tertiary transition-transform duration-200 ${
                          isCurrent ? "rotate-180 text-accent" : ""
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isCurrent && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden border-x border-b border-accent rounded-b-xl bg-bg-card shadow-sm"
                      >
                        <div className="p-4 sm:p-5">
                          {renderStepContent(step, true)}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}