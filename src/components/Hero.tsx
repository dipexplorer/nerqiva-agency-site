"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-bg-primary pt-32 pb-16 flex items-center overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10 w-full h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-[100px_1fr_1.2fr_250px] gap-8 items-center h-full">
          
          {/* Column 1: Vertical Timeline / Nav (Hidden on mobile) */}
          <div className="hidden lg:flex flex-col gap-6 text-text-tertiary font-mono text-xs font-medium h-full justify-center">
            <div className="flex items-center gap-4 text-accent">
              <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
              01
            </div>
            <div className="flex items-center gap-4 pl-1">02</div>
            <div className="flex items-center gap-4 pl-1">03</div>
            <div className="flex items-center gap-4 pl-1">04</div>
            <div className="flex items-center gap-4 pl-1">05</div>
            <div className="flex items-center gap-4 pl-1">06</div>
          </div>
          
          {/* Column 2: Main Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-accent" />
              <span className="label-eyebrow text-accent">Digital Systems Studio</span>
            </div>
            
            <h1 className="font-sans font-extrabold text-text-primary leading-[1.05]" style={{ fontSize: "clamp(3rem, 5vw, 5.5rem)", letterSpacing: "-0.03em" }}>
              Ideas.<br />
              Engineered.<br />
              <span className="text-accent">Impact.</span><br />
              Delivered.
            </h1>
            
            <p className="text-text-secondary text-lg leading-relaxed mt-2 max-w-sm">
              We turn complex problems into digital solutions that are <strong className="text-text-primary font-medium">simple, powerful and scalable.</strong>
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-6">
              <button className="bg-text-primary text-bg-primary px-8 py-4 rounded-sm font-mono text-xs uppercase tracking-widest hover:bg-accent hover:text-white transition-colors duration-300">
                Let&apos;s Talk →
              </button>
              <button className="bg-transparent border border-border text-text-primary px-8 py-4 rounded-sm font-mono text-xs uppercase tracking-widest hover:border-text-primary transition-colors duration-300">
                See Our Work
              </button>
            </div>
          </motion.div>

          {/* Column 3: Center 3D Island Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-full aspect-square flex items-center justify-center order-first lg:order-0 mb-10 lg:mb-0"
          >
            <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full scale-75" />
            <Image
              src="/images/hero_island.png"
              alt="NERQIVA System Architecture Island"
              fill
              className="object-contain drop-shadow-2xl z-10 scale-110"
              priority
            />
            {/* Drag to Explore Pill */}
            <div className="absolute bottom-10 right-10 z-20 hidden md:flex flex-col items-center justify-center gap-2 bg-white/40 backdrop-blur-md border border-white/60 p-4 rounded-full shadow-[0_8px_32px_rgba(124,58,237,0.15)] text-accent font-mono text-[9px] font-bold uppercase tracking-widest cursor-pointer hover:bg-white/60 transition-colors duration-300">
              <svg width="14" height="20" viewBox="0 0 14 20" fill="none" className="mb-1">
                <rect x="0.5" y="0.5" width="13" height="19" rx="6.5" stroke="currentColor" />
                <path d="M7 4V8" stroke="currentColor" strokeLinecap="round" />
              </svg>
              Drag to<br/>Explore
            </div>
          </motion.div>

          {/* Column 4: Process Summary (Right Side) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden xl:flex flex-col gap-10 pl-8 border-l border-border/50"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <h4 className="font-mono text-[10px] uppercase font-bold tracking-widest text-text-primary">Strategy</h4>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pr-4">We understand the real problem.</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <h4 className="font-mono text-[10px] uppercase font-bold tracking-widest text-text-primary">Design</h4>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pr-4">User-focused & conversion-led.</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <h4 className="font-mono text-[10px] uppercase font-bold tracking-widest text-text-primary">Build</h4>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pr-4">Scalable. Secure. Future-ready.</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <h4 className="font-mono text-[10px] uppercase font-bold tracking-widest text-text-primary">Evolve</h4>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed pr-4">We optimize and grow with you.</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
