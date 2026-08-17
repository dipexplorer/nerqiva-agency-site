"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import HeroScene with SSR disabled to prevent hydration issues
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 z-0 flex items-center justify-center bg-bg-primary">
      <div className="text-text-secondary animate-pulse-soft font-mono text-sm border border-border/50 px-4 py-2 rounded-full">
        Loading System Grid...
      </div>
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-bg-primary pt-32 pb-16 flex items-center overflow-hidden">
      {/* Background subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Thin blueprint coordinate lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #7C3AED 1px, transparent 1px), linear-gradient(to bottom, #7C3AED 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="section-container relative z-10 w-full h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 items-center h-full">
          
          {/* Left Column: Main Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-accent" />
              <span className="label-eyebrow text-accent">Digital Systems Studio</span>
            </div>
            
            <h1 className="font-sans font-extrabold text-text-primary leading-[1.05]" style={{ fontSize: "clamp(2.75rem, 5vw, 5rem)", letterSpacing: "-0.03em" }}>
              Ideas.<br />
              Engineered.<br />
              <span className="text-accent">Impact.</span><br />
              Delivered.
            </h1>
            
            <p className="text-text-secondary text-base md:text-lg leading-relaxed mt-2 max-w-md">
              We build digital systems, web applications, and AI integrations that make complicated things easy. <strong className="text-text-primary font-medium">No templates. No lag. Just reliable engineering.</strong>
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <a 
                href="#contact"
                className="bg-accent text-white px-8 py-4 rounded-sm font-mono text-xs uppercase tracking-widest hover:bg-accent-mid transition-all duration-300 shadow-[0_2px_16px_rgba(124,58,237,0.25)] hover:-translate-y-0.5"
              >
                Start a Project
              </a>
              <a 
                href="#work"
                className="bg-transparent border border-border text-text-primary px-8 py-4 rounded-sm font-mono text-xs uppercase tracking-widest hover:border-text-primary transition-all duration-300 hover:-translate-y-0.5"
              >
                See Our Work
              </a>
            </div>
          </motion.div>

          {/* Right Column: 3D Scene */}
          <div className="lg:col-span-6 h-[400px] lg:h-[600px] relative w-full flex items-center justify-center order-first lg:order-last">
            <HeroScene state={0} />
            
            {/* Subtle System Blueprint Metadata overlay */}
            <div className="absolute bottom-4 right-4 z-10 flex flex-col text-right font-mono text-[9px] text-text-tertiary select-none">
              <span>SYS_MONITOR: ACTIVE</span>
              <span>GRID_COORD: 45.98 // 12.04</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
