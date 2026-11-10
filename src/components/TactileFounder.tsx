"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
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
            style={{ transitionDelay: `${i * 10}ms` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
          <span
            className="absolute top-full left-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/roll:-translate-y-full text-accent font-semibold"
            style={{ transitionDelay: `${i * 10}ms` }}
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
  const [activeCard, setActiveCard] = useState<1 | 2>(2);
  const prefersReducedMotion = useReducedMotion();

  // Mouse tilt physics for the 2 pictures (Desktop)
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
      className="py-14 sm:py-24 lg:py-32 bg-transparent border-t border-border/40 dark:border-white/10 relative overflow-hidden"
    >
      <div className="section-container relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* ========================================================
            MOBILE VIEW (< 1024px)
            Editorial human touch, organic tilted cards, zero AI-slop copy
            ======================================================== */}
        <div className="block lg:hidden">
          {/* Mobile Identity */}
          <div className="text-left mb-5">
            <div className="mb-1">
              <span className="font-handwritten text-2xl sm:text-3xl text-accent font-medium -rotate-1 inline-block tracking-wide">
                Hey, I am Dipjyoti —
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-text-primary dark:text-white leading-[1.05] tracking-tight mb-2">
              Founder &amp;{" "}
              <span className="font-display italic font-normal text-accent">Lead Engineer.</span>
            </h2>
            <div className="flex items-center gap-2 text-[11px] font-mono text-text-tertiary dark:text-white/50 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>North Guwahati, Assam · Available Pan-India</span>
            </div>
          </div>

          {/* Interactive Stacked Cards with Human Handcrafted Tilt */}
          <div className="relative w-full max-w-[310px] sm:max-w-[340px] mx-auto h-[320px] sm:h-[350px] flex items-center justify-center my-3 select-none">
            
            {/* Card 2: Editorial Conversion Card */}
            <motion.div
              onClick={() => setActiveCard(2)}
              animate={{
                rotate: activeCard === 2 ? 2.2 : 6,
                scale: activeCard === 2 ? 1.04 : 0.94,
                zIndex: activeCard === 2 ? 25 : 10,
                opacity: activeCard === 2 ? 1 : 0.88,
              }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="absolute right-0 sm:-right-1 top-2 w-[210px] sm:w-[230px] aspect-[4/5] rounded-2xl bg-[#09090B] text-white p-5 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.5)] dark:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.9)] border border-white/15 cursor-pointer flex flex-col justify-between items-center text-center overflow-hidden active:scale-[0.98]"
            >
              {/* Dot matrix grid */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.45) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-accent/25 blur-2xl pointer-events-none" />

              {/* Typographic Triad */}
              <div className="pt-2 pb-0.5 relative z-10 w-full select-none">
                <div className="font-sans font-black text-2xl sm:text-[26px] text-white tracking-tight leading-[0.9]">
                  Search
                </div>
                <div className="relative -my-0.5 z-20 flex items-center justify-center">
                  <span className="font-display italic text-2xl sm:text-[26px] text-violet-400 -rotate-2 inline-block font-normal tracking-wide drop-shadow-sm">
                    Conversion
                  </span>
                  <span className="text-violet-400 text-xl font-serif leading-none ml-0.5 -mt-1 select-none">
                    *
                  </span>
                </div>
                <div className="font-sans font-black text-2xl sm:text-[26px] text-white tracking-tight leading-[0.9]">
                  Revenue
                </div>
              </div>

              {/* Descriptor */}
              <div className="relative z-10 flex items-center justify-center gap-1 text-center px-1 my-auto">
                <span className="text-lg text-white/35 font-light select-none leading-none">(</span>
                <p className="text-[10px] text-white/80 leading-snug font-normal">
                  Turning searches into paying customers.
                </p>
                <span className="text-lg text-white/35 font-light select-none leading-none">)</span>
              </div>

              {/* Status Pill */}
              <div className="relative z-10 flex justify-center pb-0.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.08] border border-white/15 text-white/85 text-[10px] font-sans tracking-wide font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Built for Revenue
                </span>
              </div>
            </motion.div>

            {/* Card 1: Studio Polaroid Photo */}
            <motion.div
              onClick={() => setActiveCard(1)}
              animate={{
                rotate: activeCard === 1 ? -2.2 : -6,
                scale: activeCard === 1 ? 1.04 : 0.94,
                zIndex: activeCard === 1 ? 25 : 10,
                opacity: activeCard === 1 ? 1 : 0.88,
              }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="absolute left-0 sm:-left-1 bottom-2 w-[205px] sm:w-[225px] aspect-[4/5] bg-[#FAFAFA] text-neutral-900 rounded-[4px] p-3 pb-6 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.35)] dark:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.85)] border border-black/10 cursor-pointer flex flex-col justify-between overflow-hidden active:scale-[0.98] group"
            >
              <div className="relative aspect-square w-full rounded-[2px] overflow-hidden bg-neutral-950">
                <img
                  src="/dip-profile.png"
                  alt="Dipjyoti Das — Founder & Lead Engineer"
                  className="w-full h-full object-cover object-top grayscale contrast-[1.15] group-hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
                <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-white/60 pointer-events-none" />
                <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-white/60 pointer-events-none" />
                <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-white/60 pointer-events-none" />
                <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-white/60 pointer-events-none" />
              </div>

              <div className="pt-2 text-center">
                <span className="font-sans font-bold text-[13px] text-neutral-900 tracking-tight block leading-tight">
                  Dipjyoti Das
                </span>
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider block mt-0.5">
                  Founder &amp; Lead Engineer
                </span>
              </div>
            </motion.div>

          </div>

          {/* Understated Minimalist Switcher (No AI capsule border) */}
          <div className="flex items-center justify-center gap-2 mt-2 font-mono text-[11px]">
            <button
              type="button"
              onClick={() => setActiveCard(1)}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer ${
                activeCard === 1
                  ? "bg-text-primary text-bg-primary dark:bg-white dark:text-zinc-950 font-semibold shadow-xs"
                  : "text-text-tertiary hover:text-text-secondary bg-transparent"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${activeCard === 1 ? "bg-accent" : "bg-text-tertiary/40"}`} />
              Dipjyoti
            </button>
            <span className="text-text-tertiary/30">/</span>
            <button
              type="button"
              onClick={() => setActiveCard(2)}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer ${
                activeCard === 2
                  ? "bg-text-primary text-bg-primary dark:bg-white dark:text-zinc-950 font-semibold shadow-xs"
                  : "text-text-tertiary hover:text-text-secondary bg-transparent"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${activeCard === 2 ? "bg-emerald-400" : "bg-text-tertiary/40"}`} />
              Conversion
            </button>
          </div>

          {/* Mobile Manifesto & Direct Line */}
          <div className="mt-7">
            <h3 className="font-display font-black text-2xl text-text-primary dark:text-white leading-[1.1] tracking-tight mb-2.5">
              Built to bring paying customers, <br />
              <span className="font-display italic font-normal text-accent">not just sit on the internet.</span>
            </h3>

            <p className="text-text-secondary dark:text-white/75 text-[14px] leading-relaxed mb-5 font-normal">
              Direct engineering with zero middlemen. I build high-converting websites that rank on Google, capture calls, and give you 100% code ownership with zero monthly retainers.
            </p>

            <a
              href="https://wa.me/918724932985?text=Hi%20Dipjyoti,%20I'd%20like%20to%20talk%20about%20a%20website%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-full text-xs font-semibold tracking-wide transition-all bg-text-primary dark:bg-white text-bg-primary dark:text-black hover:opacity-90 active:scale-[0.98] shadow-sm cursor-pointer select-none mb-2.5"
            >
              <div className="flex items-center gap-2.5">
                <MessageCircle size={16} />
                <span>Chat with Dipjyoti on WhatsApp</span>
              </div>
              <ArrowUpRight size={15} />
            </a>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/dipexplorer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full border border-border dark:border-white/15 text-xs font-mono text-text-secondary dark:text-white/70 hover:text-text-primary dark:hover:text-white transition-colors"
              >
                <GitHubIcon size={13} />
                <span>@dipexplorer</span>
              </a>

              <a
                href="https://linkedin.com/in/dip-jyoti22"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-full border border-border dark:border-white/15 text-xs font-mono text-text-secondary dark:text-white/70 hover:text-text-primary dark:hover:text-white transition-colors"
              >
                <LinkedInIcon size={13} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================
            DESKTOP VIEW (>= 1024px)
            3-Column layout with interactive mouse physics and specular glare
            ======================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center">
          
          {/* PART 1 (LEFT): Handwritten Typography + High Bold Display */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="mb-1.5">
              <span className="font-handwritten text-3xl sm:text-4xl text-accent font-medium -rotate-2 inline-block tracking-wide">
                Hey, I am Dipjyoti —
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-[3.25rem] text-text-primary dark:text-white leading-[0.96] tracking-[-0.04em] mb-4">
              Founder &amp; <br />
              <span className="font-display italic font-normal text-accent">Lead Engineer.</span>
            </h2>

            <p className="text-text-secondary dark:text-white/70 text-base sm:text-lg leading-relaxed mb-6 font-normal max-w-sm">
              I build what your business needs to win paying customers online — direct with me.
            </p>

            <div className="flex items-center gap-2.5 text-xs font-mono text-text-tertiary dark:text-white/40 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>North Guwahati, Assam · Available Pan-India</span>
            </div>
          </div>

          {/* PART 2 (MIDDLE): 2 Interactive Images with Mouse Physics */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-4 flex flex-col justify-center items-center py-4"
          >
            <div
              className="relative w-full max-w-[340px] sm:max-w-[450px] h-[370px] sm:h-[480px] flex items-center justify-center select-none"
              style={{ perspective: 1200 }}
            >
              
              {/* Image 2 (Behind / Right): Editorial Conversion Card */}
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
                className={`absolute right-0 sm:-right-2 top-1 w-[225px] sm:w-[250px] aspect-[4/5] rounded-2xl bg-[#09090B] text-white p-5 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-white/15 cursor-pointer transition-all duration-300 flex flex-col justify-between items-center text-center overflow-hidden ${
                  activeCard === 2 ? "rotate-0 scale-105" : "rotate-[7.5deg]"
                }`}
              >
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.45) 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />

                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-accent/25 blur-2xl pointer-events-none" />

                <div className="pt-3 sm:pt-4 pb-1 relative z-10 w-full select-none">
                  <div className="font-sans font-black text-3xl sm:text-[38px] text-white tracking-tight leading-[0.88]">
                    Search
                  </div>

                  <div className="relative -my-1 z-20 flex items-center justify-center">
                    <span className="font-display italic text-3xl sm:text-[38px] text-violet-400 -rotate-2 inline-block font-normal tracking-wide drop-shadow-sm">
                      Conversion
                    </span>
                    <span className="text-violet-400 text-2xl font-serif leading-none ml-1 -mt-2 animate-pulse select-none">
                      *
                    </span>
                  </div>

                  <div className="font-sans font-black text-3xl sm:text-[38px] text-white tracking-tight leading-[0.88]">
                    Revenue
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-center gap-1.5 text-center px-1 my-auto">
                  <span className="text-xl sm:text-2xl text-white/35 font-light select-none leading-none">(</span>
                  <p className="text-[10.5px] sm:text-[11.5px] text-white/80 leading-snug font-normal">
                    Turning searches into paying customers.
                  </p>
                  <span className="text-xl sm:text-2xl text-white/35 font-light select-none leading-none">)</span>
                </div>

                <div className="relative z-10 flex justify-center pb-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/15 text-white/85 text-[10.5px] font-sans tracking-wide font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Built for Revenue
                  </span>
                </div>
              </motion.div>

              {/* Image 1 (Front / Left): Dipjyoti's Studio Photo Polaroid */}
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
                className={`absolute left-0 sm:-left-2 bottom-2 w-[220px] sm:w-[242px] aspect-[4/5] bg-[#FAFAFA] text-neutral-900 rounded-[4px] p-3.5 pb-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-black/10 cursor-pointer transition-all duration-300 group ${
                  activeCard === 1 ? "rotate-0 scale-105" : "-rotate-[6deg]"
                }`}
              >
                <div className="relative aspect-square w-full rounded-[2px] overflow-hidden bg-neutral-950">
                  <motion.div
                    className="pointer-events-none absolute inset-0 z-20 mix-blend-overlay transition-opacity duration-300"
                    style={{
                      background: glareBg,
                      opacity: activeCard === 1 ? 1 : 0.2,
                    }}
                  />

                  <img
                    src="/dip-profile.png"
                    alt="Dipjyoti Das — Founder & Lead Designer-Engineer"
                    className="w-full h-full object-cover object-top grayscale contrast-[1.15] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                    loading="lazy"
                  />

                  <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/60 pointer-events-none" />
                  <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/60 pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/60 pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/60 pointer-events-none" />
                </div>

                <div className="pt-2.5 text-center">
                  <span className="font-sans font-bold text-sm text-neutral-900 tracking-tight block leading-tight">
                    Dipjyoti Das
                  </span>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider block mt-0.5">
                    Founder &amp; Lead Engineer
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* PART 3 (RIGHT): Revenue-First Reality for Business Owners */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-[2.2rem] text-text-primary dark:text-white leading-[1.1] tracking-tight mb-4">
              Built to bring paying customers, <br className="hidden sm:inline" />
              <span className="font-display italic font-normal text-accent">not just sit on the internet.</span>
            </h3>

            <p className="text-text-secondary dark:text-white/75 text-base sm:text-lg leading-relaxed mb-7 font-normal">
              Most agencies build pretty pages that bring zero calls. I build to get you found on Google and talking directly to customers — with genuine support and zero monthly fees.
            </p>

            <div className="flex flex-col gap-2.5">
              <a
                href="https://wa.me/918724932985?text=Hi%20Dipjyoti,%20I'd%20like%20to%20talk%20about%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 bg-text-primary dark:bg-white text-bg-primary dark:text-black hover:opacity-90 hover:scale-[1.02] shadow-sm cursor-pointer select-none"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle size={16} />
                  <RollText text="Chat with Dipjyoti on WhatsApp" />
                </div>
                <ArrowUpRight size={15} />
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
