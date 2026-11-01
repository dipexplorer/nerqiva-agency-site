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
import { ArrowUpRight, MessageCircle } from "lucide-react";

const GitHubIcon = ({ size = 14 }: { size?: number }) => (
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

const LinkedInIcon = ({ size = 14 }: { size?: number }) => (
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
    <circle cx="4" r="2" />
  </svg>
);

// Kinetic letter-rolling text component (Anfalova craft signature)
function RollText({ text }: { text: string }) {
  return (
    <span className="inline-flex overflow-hidden group/roll cursor-pointer align-baseline select-none">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="relative inline-flex flex-col overflow-hidden h-[1.25em] leading-tight"
        >
          <span
            className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/roll:-translate-y-full"
            style={{ transitionDelay: `${i * 12}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
          <span
            className="absolute top-full left-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/roll:-translate-y-full text-accent font-semibold"
            style={{ transitionDelay: `${i * 12}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </span>
  );
}

// Designer prompt options for Part 3
type PromptKey = "direct" | "craft" | "diff";

interface PromptData {
  file: string;
  func: string;
  tag: string;
  body: string;
}

const PROMPT_OPTIONS: Record<PromptKey, PromptData> = {
  direct: {
    file: "direct.ts",
    func: "nerqiva.direct()",
    tag: "1:1 BUILDER ACCESS",
    body: "To kill agency bureaucracy. Ambitious founders work directly with the principal engineer writing every line of code — zero account managers, zero translation loss.",
  },
  craft: {
    file: "craft.ts",
    func: "nerqiva.craft()",
    tag: "HIGH-AGENCY PRODUCTION",
    body: "Production Next.js, React 19, Tailwind & bespoke canvas motion. Sub-second load speeds, clean architecture, and 100% IP code ownership transferred on launch.",
  },
  diff: {
    file: "diff.ts",
    func: "nerqiva.diff()",
    tag: "VS. TRADITIONAL AGENCIES",
    body: "Traditional agencies bill for 10-person account teams while junior copy-pasters fumble the code. At NERQIVA, every screen, motion curve, and millisecond is authored directly.",
  },
};

export default function TactileFounder() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<1 | 2>(1);
  const [activePrompt, setActivePrompt] = useState<PromptKey>("direct");
  const prefersReducedMotion = useReducedMotion();

  // Mouse tilt physics for the 2 pictures
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 22, stiffness: 190, mass: 0.55 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Picture 1: Studio Polaroid Photo (base -6deg)
  const pic1RotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const pic1RotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const pic1X = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const pic1Y = useTransform(springY, [-0.5, 0.5], [-8, 8]);

  // Picture 2: Editorial Craft Card (base +7.5deg)
  const pic2RotateX = useTransform(springY, [-0.5, 0.5], [-8, 8]);
  const pic2RotateY = useTransform(springX, [-0.5, 0.5], [8, -8]);
  const pic2X = useTransform(springX, [-0.5, 0.5], [14, -14]);
  const pic2Y = useTransform(springY, [-0.5, 0.5], [10, -10]);

  // Specular light sheen
  const glareX = useTransform(springX, [-0.5, 0.5], [20, 80]);
  const glareY = useTransform(springY, [-0.5, 0.5], [20, 80]);
  const glareBg = useMotionTemplate`radial-gradient(circle 280px at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.04) 50%, transparent 80%)`;

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

  return (
    <section
      id="founder"
      className="py-24 sm:py-32 bg-transparent border-t border-border/40 dark:border-white/10 relative overflow-hidden"
    >
      <div className="section-container relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* 3-Part Layout: 
            1) Left (4 cols): Studio Intro (Clean, Bold, Zero AI Essay)
            2) Middle (5 cols): 2 Prominent Tilted Pictures with Interactive 3D Motion (Artful Balance)
            3) Right (3 cols): Designer Prompt Console & Direct Line
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ========================================================
              PART 1 (LEFT): Studio Intro (Clean, Bold, Zero Slop)
              ======================================================== */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h2
              className="font-display font-black text-4xl sm:text-5xl lg:text-[3.25rem] text-text-primary dark:text-white leading-[0.98] tracking-[-0.04em] mb-5"
            >
              Work direct with <br />
              <span className="font-serif italic font-normal text-accent">the builder.</span>
            </h2>

            <p className="text-text-secondary dark:text-white/70 text-base sm:text-lg leading-snug mb-8 font-normal max-w-md">
              No account managers. No junior handoffs. Every screen, motion curve, and line of code authored 1:1.
            </p>

            <div className="flex items-center gap-2.5 text-xs font-mono text-text-tertiary dark:text-white/40 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Assam, India · Available Pan-India</span>
            </div>
          </div>

          {/* ========================================================
              PART 2 (MIDDLE): 2 Pictures with Distinct Tilt & Motion (Wide, Artful)
              ======================================================== */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-5 flex justify-center items-center py-4"
          >
            <div
              className="relative w-full max-w-[430px] sm:max-w-[470px] h-[450px] sm:h-[490px] flex items-center justify-center select-none"
              style={{ perspective: 1200 }}
            >
              
              {/* Picture 2 (Behind / Right): Bold Editorial Print Card (+7.5deg) */}
              <motion.div
                onClick={() => setActiveCard(2)}
                onMouseEnter={() => setActiveCard(2)}
                style={{
                  x: prefersReducedMotion ? 0 : pic2X,
                  y: prefersReducedMotion ? 0 : pic2Y,
                  rotateX: prefersReducedMotion ? 0 : pic2RotateX,
                  rotateY: prefersReducedMotion ? 0 : pic2RotateY,
                  transformStyle: "preserve-3d",
                  zIndex: activeCard === 2 ? 30 : 10,
                }}
                className={`absolute right-0 sm:right-2 top-3 w-[235px] sm:w-[260px] aspect-[4/5] rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-white p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] border border-white/20 cursor-pointer transition-all duration-300 ${
                  activeCard === 2 ? "rotate-0 scale-105" : "rotate-[7.5deg]"
                }`}
              >
                <div className="h-full flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Card Header Stamp */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold">
                      NERQIVA CRAFT
                    </span>
                    <span className="font-mono text-[9px] text-white/40">
                      // 01
                    </span>
                  </div>

                  {/* High-Impact Statement */}
                  <div className="my-auto py-2">
                    <span className="font-sans font-black text-2xl sm:text-[27px] leading-[0.88] tracking-tighter uppercase block text-white">
                      WHAT<br />
                      HAPPENS<br />
                      <span className="text-accent">WHEN YOU</span><br />
                      GO DIRECT?
                    </span>
                  </div>

                  {/* Card Bottom Tag */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/60">
                    <span>1:1 BUILDER</span>
                    <span className="text-accent font-bold">100% CODE</span>
                  </div>

                </div>
              </motion.div>

              {/* Picture 1 (Front / Left): Dipjyoti's Studio Photo Polaroid (-6deg) */}
              <motion.div
                onClick={() => setActiveCard(1)}
                onMouseEnter={() => setActiveCard(1)}
                style={{
                  x: prefersReducedMotion ? 0 : pic1X,
                  y: prefersReducedMotion ? 0 : pic1Y,
                  rotateX: prefersReducedMotion ? 0 : pic1RotateX,
                  rotateY: prefersReducedMotion ? 0 : pic1RotateY,
                  transformStyle: "preserve-3d",
                  zIndex: activeCard === 1 ? 25 : 15,
                }}
                className={`absolute left-0 sm:left-2 bottom-3 w-[235px] sm:w-[260px] aspect-[4/5] bg-[#FAFAFA] text-neutral-900 rounded-[4px] p-3.5 pb-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-black/10 cursor-pointer transition-all duration-300 group ${
                  activeCard === 1 ? "rotate-0 scale-105" : "-rotate-[6deg]"
                }`}
              >
                {/* Photo Frame */}
                <div className="relative aspect-square w-full rounded-[2px] overflow-hidden bg-neutral-950">
                  {/* Dynamic Specular Sheen */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 z-20 mix-blend-overlay transition-opacity duration-300"
                    style={{
                      background: glareBg,
                      opacity: activeCard === 1 ? 1 : 0.2,
                    }}
                  />

                  {/* Photograph */}
                  <img
                    src="/dip-profile.png"
                    alt="Dipjyoti Das — Founder & Lead Designer-Engineer"
                    className="w-full h-full object-cover object-top grayscale contrast-[1.15] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Corner Viewfinder Marks */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/60 pointer-events-none" />
                  <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/60 pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/60 pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/60 pointer-events-none" />
                </div>

                {/* Bottom Inscription */}
                <div className="pt-2.5 text-center">
                  <span className="font-sans font-bold text-sm text-neutral-900 tracking-tight block leading-tight">
                    Dipjyoti Das
                  </span>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider block mt-0.5">
                    Lead Designer-Engineer
                  </span>
                </div>
              </motion.div>

              {/* Floating Tilt Cue Pill */}
              <motion.div
                animate={prefersReducedMotion ? {} : { y: [0, -4, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 right-6 z-40 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/90 dark:bg-white/95 text-white dark:text-black shadow-lg text-[10px] font-mono select-none pointer-events-none"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Hover or tap to tilt</span>
              </motion.div>

            </div>
          </div>

          {/* ========================================================
              PART 3 (RIGHT): Designer Prompt Console & Direct Line
              ======================================================== */}
          <div className="lg:col-span-3 flex flex-col justify-center gap-4">
            
            {/* Interactive Designer Prompt (Anfalova Style Terminal) */}
            <div className="rounded-2xl bg-zinc-950 text-white p-5 border border-white/10 shadow-xl overflow-hidden">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3.5">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-[10px] text-white/50 ml-1">
                    prompt.ts
                  </span>
                </div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-accent font-semibold">
                  {PROMPT_OPTIONS[activePrompt].tag}
                </span>
              </div>

              {/* Interactive Prompt Command Selectors */}
              <div className="flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/5 mb-3.5">
                {(["direct", "craft", "diff"] as PromptKey[]).map((key) => {
                  const isSelected = activePrompt === key;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setActivePrompt(key)}
                      onMouseEnter={() => setActivePrompt(key)}
                      className={`flex-1 py-1 px-1.5 rounded-lg text-[10px] font-mono tracking-tight transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-white text-black font-bold shadow-sm"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      {PROMPT_OPTIONS[key].file}
                    </button>
                  );
                })}
              </div>

              {/* Animated Prompt Output */}
              <div className="min-h-[110px] flex flex-col justify-between font-mono">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePrompt}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="text-[11px] text-accent mb-1.5 flex items-center gap-1">
                      <span>&gt;</span>
                      <span>{PROMPT_OPTIONS[activePrompt].func}</span>
                    </div>
                    <p className="font-sans text-xs sm:text-[13px] text-white/80 leading-relaxed font-normal">
                      {PROMPT_OPTIONS[activePrompt].body}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-white/40 mt-3">
                  <span>Dipjyoti · Principal</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                </div>
              </div>

            </div>

            {/* Direct Line Actions */}
            <div className="flex flex-col gap-2.5">
              <a
                href="https://wa.me/918724932985?text=Hi%20Dipjyoti,%20I'd%20like%20to%20talk%20about%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-5 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 bg-text-primary dark:bg-white text-bg-primary dark:text-black hover:opacity-90 hover:scale-[1.02] shadow-sm cursor-pointer select-none"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle size={15} />
                  <RollText text="Chat on WhatsApp" />
                </div>
                <ArrowUpRight size={14} />
              </a>

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/dipexplorer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full border border-border dark:border-white/15 text-xs font-mono text-text-secondary dark:text-white/70 hover:text-text-primary dark:hover:text-white hover:border-accent transition-colors"
                >
                  <GitHubIcon size={14} />
                  <span>@dipexplorer</span>
                </a>

                <a
                  href="https://linkedin.com/in/dip-jyoti22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full border border-border dark:border-white/15 text-xs font-mono text-text-secondary dark:text-white/70 hover:text-text-primary dark:hover:text-white hover:border-accent transition-colors"
                >
                  <LinkedInIcon size={14} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
