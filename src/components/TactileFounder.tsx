"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import { ArrowUpRight, MessageCircle, MapPin, Sparkles } from "lucide-react";

const GitHubIcon = ({ size = 15 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedInIcon = ({ size = 15 }: { size?: number }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Kinetic letter-rolling text component (Anfalova craft signature)
function RollText({ text }: { text: string }) {
  return (
    <span className="inline-flex overflow-hidden group/roll cursor-pointer align-baseline">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="relative inline-flex flex-col overflow-hidden h-[1.25em] leading-tight"
        >
          <span
            className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/roll:-translate-y-full"
            style={{ transitionDelay: `${i * 14}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
          <span
            className="absolute top-full left-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/roll:-translate-y-full text-accent font-semibold"
            style={{ transitionDelay: `${i * 14}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function TactileFounder() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"vision" | "agencies" | "craft">("vision");
  const [activeCard, setActiveCard] = useState<1 | 2>(1);
  const prefersReducedMotion = useReducedMotion();

  // Normalized cursor coordinates: -0.5 to 0.5 relative to center of middle column
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Fluid spring physics
  const springConfig = { damping: 22, stiffness: 180, mass: 0.55 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Picture 1: Tilt & Parallax (-5deg base tilt)
  const pic1RotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const pic1RotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const pic1X = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const pic1Y = useTransform(springY, [-0.5, 0.5], [-8, 8]);

  // Picture 2: Counter Tilt & Parallax (+7deg base tilt)
  const pic2RotateX = useTransform(springY, [-0.5, 0.5], [-8, 8]);
  const pic2RotateY = useTransform(springX, [-0.5, 0.5], [8, -8]);
  const pic2X = useTransform(springX, [-0.5, 0.5], [14, -14]);
  const pic2Y = useTransform(springY, [-0.5, 0.5], [10, -10]);

  // Dynamic light glare on the active photo
  const glareX = useTransform(springX, [-0.5, 0.5], [20, 80]);
  const glareY = useTransform(springY, [-0.5, 0.5], [20, 80]);
  const glareBg = useMotionTemplate`radial-gradient(circle 260px at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.04) 50%, transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || prefersReducedMotion) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const visionPrompts = {
    vision: {
      tag: "WHY WE CREATED NERQIVA",
      heading: "To kill agency bureaucracy.",
      content:
        "Traditional agencies charge for 10-person account teams while juniors copy-paste outdated code. I founded NERQIVA so ambitious founders can work 1:1 with a principal builder who cares about every single pixel, micro-interaction, and millisecond.",
    },
    agencies: {
      tag: "HOW WE BEAT AGENCIES",
      heading: "No middlemen. No translation loss.",
      content:
        "When you speak, you're talking directly to the designer-engineer writing your React components. No account managers playing telephone. Faster turnaround, zero overhead markup, and daily loom updates on your WhatsApp.",
    },
    craft: {
      tag: "WHAT WE CRAFT",
      heading: "High-converting bespoke digital flagships.",
      content:
        "We build bespoke Next.js and TypeScript web applications with 60fps kinetic motion, organic responsiveness, and clean codebases you own 100%. Handover is complete with zero monthly retainer lock-ins.",
    },
  };

  return (
    <section
      id="founder"
      className="py-20 sm:py-28 bg-transparent border-t border-border/40 dark:border-white/10 relative overflow-hidden"
    >
      <div className="section-container relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* 3-Part Architecture: Left Intro | Middle 2 Tilted Pictures | Right Founder & Vision Prompt */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ========================================================
              PART 1 (LEFT): Studio Intro (Punchy, Clean, No Essay)
              ======================================================== */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs tracking-wider uppercase mb-5 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>The NERQIVA Principle</span>
              </div>

              <h2
                className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-text-primary dark:text-white leading-[1.06] tracking-tight mb-5"
                style={{ letterSpacing: "-0.035em" }}
              >
                You work with the builder —{" "}
                <em className="font-serif italic font-normal text-accent not-italic">
                  not an account manager.
                </em>
              </h2>

              <p className="text-text-secondary dark:text-white/65 text-base sm:text-lg leading-relaxed mb-6 font-normal">
                Agencies charge you for layers of management and pass your build down to junior freelancers. At NERQIVA, every screen, motion curve, and line of code is engineered directly by me.
              </p>

              {/* 3 Clean Trust Badges */}
              <div className="space-y-2.5 pt-2 border-t border-border/50 dark:border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-text-primary dark:text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Direct WhatsApp Line from Day 1</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-text-primary dark:text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>100% Clean Next.js Code Handover</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-text-primary dark:text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Zero Monthly Retainer Lock-in</span>
                </div>
              </div>
            </div>

            {/* Studio Coordinates */}
            <div className="flex items-center gap-2 mt-8 text-xs font-mono text-text-tertiary dark:text-white/40">
              <MapPin size={13} className="text-accent shrink-0" />
              <span>North Guwahati, Assam · Available Pan-India</span>
            </div>
          </div>

          {/* ========================================================
              PART 2 (MIDDLE): 2 Pictures with Different Tilt in Motion
              ======================================================== */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-4 flex justify-center items-center py-6 sm:py-8"
          >
            <div
              className="relative w-full max-w-[340px] sm:max-w-[370px] h-[400px] sm:h-[440px] flex items-center justify-center select-none"
              style={{ perspective: 1200 }}
            >
              
              {/* Picture 2 (Behind/Right): Bold Graphic Editorial Card (Counter-Tilted +7.5deg) */}
              <motion.div
                onMouseEnter={() => setActiveCard(2)}
                style={{
                  x: prefersReducedMotion ? 0 : pic2X,
                  y: prefersReducedMotion ? 0 : pic2Y,
                  rotateX: prefersReducedMotion ? 0 : pic2RotateX,
                  rotateY: prefersReducedMotion ? 0 : pic2RotateY,
                  transformStyle: "preserve-3d",
                  zIndex: activeCard === 2 ? 30 : 10,
                }}
                className={`absolute right-1 sm:right-2 top-4 w-[210px] sm:w-[230px] aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#121216] via-[#1a1a24] to-[#0E0E14] text-white p-4 sm:p-5 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.55)] border border-white/15 cursor-pointer transition-all duration-300 ${
                  activeCard === 2 ? "rotate-0 scale-105" : "rotate-[7.5deg]"
                }`}
              >
                {/* Visual Graphic Layout inspired by creator editorial print */}
                <div className="h-full flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Card Header Stamp */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold">
                      NERQIVA CRAFT
                    </span>
                    <span className="font-mono text-[9px] text-white/40">
                      // 01
                    </span>
                  </div>

                  {/* Bold Poster Typography (Ref: What happens when you choose us?) */}
                  <div className="my-auto py-2">
                    <span className="font-sans font-black text-2xl sm:text-3xl leading-[0.9] tracking-tighter uppercase block text-white">
                      WHAT<br />
                      HAPPENS<br />
                      <span className="text-accent">WHEN YOU</span><br />
                      GO DIRECT?
                    </span>
                  </div>

                  {/* Card Bottom Tag */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/60">
                    <span>1:1 BUILDER</span>
                    <span className="text-accent font-bold">ZERO FLUFF</span>
                  </div>

                </div>
              </motion.div>

              {/* Picture 1 (Front/Left): Dipjyoti's Studio Photo Polaroid (Tilted -5deg) */}
              <motion.div
                onMouseEnter={() => setActiveCard(1)}
                style={{
                  x: prefersReducedMotion ? 0 : pic1X,
                  y: prefersReducedMotion ? 0 : pic1Y,
                  rotateX: prefersReducedMotion ? 0 : pic1RotateX,
                  rotateY: prefersReducedMotion ? 0 : pic1RotateY,
                  transformStyle: "preserve-3d",
                  zIndex: activeCard === 1 ? 25 : 15,
                }}
                className={`absolute left-1 sm:left-2 bottom-4 w-[210px] sm:w-[230px] aspect-[4/5] bg-white text-neutral-900 rounded-sm p-3 pb-8 shadow-[0_25px_50px_-10px_rgba(0,0,0,0.45)] dark:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.85)] border border-black/10 cursor-pointer transition-all duration-300 group ${
                  activeCard === 1 ? "rotate-0 scale-105" : "-rotate-[5.5deg]"
                }`}
              >
                {/* Photo Viewport */}
                <div className="relative aspect-square w-full rounded-[2px] overflow-hidden bg-neutral-900">
                  {/* Dynamic Specular Sheen */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 z-20 mix-blend-overlay transition-opacity duration-300"
                    style={{
                      background: glareBg,
                      opacity: activeCard === 1 ? 1 : 0.25,
                    }}
                  />

                  {/* Photo of Dipjyoti */}
                  <img
                    src="/dip-profile.png"
                    alt="Dipjyoti Das — Founder & Lead Designer-Engineer"
                    className="w-full h-full object-cover object-top grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Subtle Corner Viewfinder Marks */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/60 pointer-events-none" />
                  <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/60 pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/60 pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/60 pointer-events-none" />
                </div>

                {/* Polaroid Bottom Inscription */}
                <div className="pt-2.5 text-center">
                  <span className="font-sans font-bold text-xs text-neutral-900 tracking-tight block leading-tight">
                    Dipjyoti Das
                  </span>
                  <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider block mt-0.5">
                    Lead Designer-Engineer
                  </span>
                </div>
              </motion.div>

              {/* Floating Live Telemetry Badge */}
              <motion.div
                animate={prefersReducedMotion ? {} : { y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 right-4 z-40 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/90 dark:bg-white/95 text-white dark:text-black shadow-lg text-[10px] font-mono select-none pointer-events-none backdrop-blur-md"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Hover to Inspect Tilt</span>
              </motion.div>

            </div>
          </div>

          {/* ========================================================
              PART 3 (RIGHT): Founder, Vision Console & Interactive Prompts
              ======================================================== */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              
              {/* Founder Header Identity */}
              <div className="flex items-center justify-between pb-4 border-b border-border/50 dark:border-white/10 mb-5">
                <div>
                  <span className="font-display font-bold text-xl text-text-primary dark:text-white block leading-tight">
                    Dipjyoti Das
                  </span>
                  <span className="text-xs font-mono text-accent block mt-0.5">
                    Founder · Principal Designer-Engineer
                  </span>
                </div>
                <span className="font-mono text-[10px] text-text-tertiary dark:text-white/40 uppercase tracking-widest px-2 py-0.5 rounded border border-border/60 dark:border-white/10">
                  STUDIO 01
                </span>
              </div>

              {/* Interactive Designer Prompt Console (Inspired by Anfalova interaction) */}
              <div className="p-5 rounded-2xl bg-bg-card/70 dark:bg-zinc-900/40 border border-border/70 dark:border-white/10 shadow-sm mb-6">
                
                {/* 3 Interactive Prompt Tabs */}
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 mb-4">
                  {(["vision", "agencies", "craft"] as const).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-mono tracking-tight transition-all duration-200 cursor-pointer ${
                        activeTab === tab
                          ? "bg-text-primary dark:bg-white text-bg-primary dark:text-black font-semibold shadow-sm"
                          : "text-text-secondary dark:text-white/60 hover:text-text-primary dark:hover:text-white"
                      }`}
                    >
                      {tab === "vision" && "Why NERQIVA"}
                      {tab === "agencies" && "vs. Agencies"}
                      {tab === "craft" && "What We Craft"}
                    </button>
                  ))}
                </div>

                {/* Animated Vision Content */}
                <div className="min-h-[140px] flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                    >
                      <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-semibold block mb-1.5">
                        {visionPrompts[activeTab].tag}
                      </span>
                      <h4 className="font-sans font-bold text-base text-text-primary dark:text-white mb-2 leading-snug">
                        {visionPrompts[activeTab].heading}
                      </h4>
                      <p className="text-xs sm:text-sm text-text-secondary dark:text-white/70 leading-relaxed font-normal">
                        {visionPrompts[activeTab].content}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>

            </div>

            {/* Direct Line Action Bar with Kinetic Rolling Link */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/918724932985?text=Hi%20Dipjyoti,%20I'd%20like%20to%20talk%20about%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-between px-5 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 bg-text-primary dark:bg-white text-bg-primary dark:text-black hover:opacity-90 hover:scale-[1.02] shadow-sm cursor-pointer select-none"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle size={15} />
                  <RollText text="Chat on WhatsApp" />
                </div>
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://github.com/dipexplorer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border dark:border-white/15 text-text-secondary dark:text-white/70 hover:text-text-primary dark:hover:text-white hover:border-accent transition-colors"
                aria-label="Dipjyoti's GitHub"
                title="Inspect GitHub Code"
              >
                <GitHubIcon size={15} />
              </a>

              <a
                href="https://linkedin.com/in/dip-jyoti22"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border dark:border-white/15 text-text-secondary dark:text-white/70 hover:text-text-primary dark:hover:text-white hover:border-accent transition-colors"
                aria-label="Dipjyoti's LinkedIn"
                title="Dipjyoti's LinkedIn Profile"
              >
                <LinkedInIcon size={15} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
