"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

 const renderStepContent = (step: typeof PROCESS_STEPS[0], isMobile: boolean = false) => (
 <div className={`card-luxury relative overflow-hidden bg-bg-card/90 border border-border/70 shadow-2xl flex flex-col justify-between ${isMobile ? 'p-5 sm:p-6 min-h-0' : 'p-6 sm:p-10 min-h-[460px] rounded-2xl'}`}>
 
 {/* Background ambient glow */}
 <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 blur-[100px] pointer-events-none rounded-full" />

 <div>
 {/* Step Top Bar Badge */}
 <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-border/30">
 <div className="flex items-center gap-3">
 <span className="w-9 h-9 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono font-extrabold text-sm flex items-center justify-center shadow-xs shrink-0">
 {step.number}
 </span>
 <div>
 <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold block">
 STEP {step.number} OF {PROCESS_STEPS.length}
 </span>
 <span className="font-mono text-[10px] sm:text-xs text-text-tertiary font-medium">
 [{step.tagline}]
 </span>
 </div>
 </div>

 <span className="font-mono text-[9px] sm:text-xs text-emerald-600 bg-emerald-500/10 border border-emerald-500/30 px-2 sm:px-3 py-1 rounded-full font-bold flex items-center gap-1.5 shrink-0">
 ⏱ <span className="hidden sm:inline">Timeframe: </span>{step.timeframe}
 </span>
 </div>

 {/* Step Title & Description */}
 <h3 className="font-sans font-extrabold text-xl sm:text-3xl text-text-primary mb-3 tracking-tight">
 {step.title}
 </h3>
 
 <p className="text-text-secondary text-xs sm:text-base leading-relaxed mb-6 font-light max-w-2xl">
 {step.description}
 </p>

 {/* Key Deliverable Pills */}
 <div className="mb-6">
 <span className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary font-bold block mb-2">
 Key Deliverables & Specifications
 </span>
 <div className="flex flex-wrap gap-2">
 {step.details.map((det, idx) => (
 <span
 key={idx}
 className="px-2.5 sm:px-3 py-1 bg-bg-secondary text-text-secondary border border-border/40 rounded-md font-mono text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold select-none flex items-center gap-1.5"
 >
 <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
 {det}
 </span>
 ))}
 </div>
 </div>

 </div>

 {/* Step Navigation Controls Footer */}
 {!isMobile && (
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
 className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-accent hover:bg-accent-mid text-text-inverted font-mono text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all shadow-md shadow-accent/20 cursor-pointer"
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
 )}
 </div>
 );

 return (
 <section id="process" className="py-20 sm:py-28 bg-bg-primary text-text-primary border-t border-border/45 relative z-10">
 <div className="section-container relative">
 
 {/* Header Section */}
 <div className="max-w-3xl mb-10 sm:mb-12">
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

 {/* Main Interactive Layout: Desktop Side-by-Side Grid vs Mobile Vertical Accordion */}
 <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
 
 {/* 
 Desktop Left Column: Interactive Step Selector Tabs 
 Visible only on large screens
 */}
 <div className="hidden lg:flex col-span-4 flex-col gap-3">
 <div className="flex items-center justify-between px-1 mb-1">
 <span className="font-mono text-[10px] uppercase tracking-widest text-text-tertiary font-bold">
 Methodology Steps ({activeIdx + 1}/{PROCESS_STEPS.length})
 </span>
 <span className="font-mono text-[10px] text-accent font-semibold">
 Click step to view
 </span>
 </div>

 <div className="flex flex-col gap-2">
 {PROCESS_STEPS.map((step, idx) => {
 const isCurrent = idx === activeIdx;
 return (
 <button
 key={step.id}
 onClick={() => setActiveIdx(idx)}
 className={`p-4 rounded-xl text-left font-mono transition-all duration-200 cursor-pointer border flex items-center justify-between gap-3 w-full ${
 isCurrent
 ? "bg-accent/10 border-accent text-accent shadow-md shadow-accent/10 translate-x-1"
 : "bg-bg-card/70 border-border/50 text-text-secondary hover:border-accent/40 hover:text-text-primary hover:bg-bg-card"
 }`}
 >
 <div className="flex items-center gap-3 min-w-0">
 <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center border shrink-0 transition-colors ${
 isCurrent
 ? "bg-accent text-text-inverted border-accent"
 : "bg-bg-secondary text-text-tertiary border-border/60"
 }`}>
 {step.number}
 </span>
 <span className="font-sans text-xs font-bold tracking-tight truncate">
 {step.title}
 </span>
 </div>

 <span className="text-[9px] font-mono text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded font-bold shrink-0">
 {step.timeframe}
 </span>
 </button>
 );
 })}
 </div>
 </div>

 {/* 
 Desktop Right Column: Single Active Step Display Card 
 Visible only on large screens
 */}
 <div className="hidden lg:block col-span-8 w-full">
 <AnimatePresence mode="wait">
 <motion.div
 key={activeIdx}
 initial={{ opacity: 0, y: 10 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -10 }}
 transition={{ duration: 0.3 }}
 >
 {renderStepContent(activeStep)}
 </motion.div>
 </AnimatePresence>
 </div>

 {/* 
 Mobile Vertical Accordion Layout
 Visible only on small/medium screens
 */}
 <div className="lg:hidden flex flex-col gap-3 w-full -mx-4 px-4 sm:mx-0 sm:px-0">
 <div className="flex items-center justify-between px-1 mb-1">
 <span className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary font-bold">
 Methodology Steps
 </span>
 <span className="font-mono text-[9px] text-accent font-semibold">
 Tap to expand
 </span>
 </div>

 {PROCESS_STEPS.map((step, idx) => {
 const isCurrent = idx === activeIdx;
 return (
 <div key={step.id} className="flex flex-col gap-2">
 <button
 onClick={() => setActiveIdx(isCurrent ? -1 : idx)}
 className={`p-3.5 sm:p-4 rounded-xl text-left font-mono transition-all duration-200 cursor-pointer border flex items-center justify-between gap-3 w-full ${
 isCurrent
 ? "bg-accent/10 border-accent text-accent shadow-md shadow-accent/10"
 : "bg-bg-card border-border/50 text-text-secondary hover:border-accent/40"
 }`}
 >
 <div className="flex items-center gap-3 min-w-0">
 <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full text-[10px] sm:text-xs font-bold flex items-center justify-center border shrink-0 transition-colors ${
 isCurrent
 ? "bg-accent text-text-inverted border-accent"
 : "bg-bg-secondary text-text-tertiary border-border/60"
 }`}>
 {step.number}
 </span>
 <span className="font-sans text-xs font-bold tracking-tight truncate">
 {step.title}
 </span>
 </div>

 <div className="flex items-center gap-2">
 <span className="text-[8px] sm:text-[9px] font-mono text-emerald-600 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded font-bold shrink-0">
 {step.timeframe}
 </span>
 </div>
 </button>

 <AnimatePresence>
 {isCurrent && (
 <motion.div
 initial={{ opacity: 0, height: 0 }}
 animate={{ opacity: 1, height: "auto" }}
 exit={{ opacity: 0, height: 0 }}
 transition={{ duration: 0.3, ease: "easeInOut" }}
 className="overflow-hidden"
 >
 <div className="pt-1 pb-2">
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