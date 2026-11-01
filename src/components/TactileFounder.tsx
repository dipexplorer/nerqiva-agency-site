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
            1) Left (4 cols): Handwritten Greeting + High Bold Typography + Intro
            2) Middle (4 cols): EXACTLY 2 Interactive Tilted Images (Polaroid & Conversion Card)
            3) Right (4 cols): Revenue & Customer Reality for Business Owners (No Fluff)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ========================================================
              PART 1 (LEFT): Handwritten Typography + High Bold Display
              ======================================================== */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            
            {/* Handwritten Greeting */}
            <div className="mb-1.5">
              <span className="font-handwritten text-3xl sm:text-4xl text-accent font-medium -rotate-2 inline-block tracking-wide">
                Hey, I am Dipjyoti —
              </span>
            </div>

            {/* High Bold Display Heading */}
            <h2
              className="font-display font-black text-4xl sm:text-5xl lg:text-[3.25rem] text-text-primary dark:text-white leading-[0.96] tracking-[-0.04em] mb-4"
            >
              Founder &amp; <br />
              <span className="font-serif italic font-normal text-accent">Lead Engineer.</span>
            </h2>

            <p className="text-text-secondary dark:text-white/70 text-base sm:text-lg leading-relaxed mb-6 font-normal max-w-sm">
              I build web systems that turn digital visits into actual revenue for your business. No agency middlemen, zero bullshit.
            </p>

            <div className="flex items-center gap-2.5 text-xs font-mono text-text-tertiary dark:text-white/40 tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>North Guwahati, Assam · Available Pan-India</span>
            </div>
          </div>

          {/* ========================================================
              PART 2 (MIDDLE): EXACTLY 2 Interactive Images with Tilt Motion
              ======================================================== */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-4 flex justify-center items-center py-4"
          >
            <div
              className="relative w-full max-w-[390px] sm:max-w-[450px] h-[450px] sm:h-[480px] flex items-center justify-center select-none"
              style={{ perspective: 1200 }}
            >
              
              {/* Image 2 (Behind / Right): Editorial Conversion Card (Anfalova Style) (+7.5deg) */}
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
                className={`absolute right-0 sm:-right-2 top-1 w-[225px] sm:w-[250px] aspect-[4/5] rounded-2xl bg-[#09090B] text-white p-5 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-white/15 cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  activeCard === 2 ? "rotate-0 scale-105" : "rotate-[7.5deg]"
                }`}
              >
                {/* Background matrix grid pattern (Anfalova craft signature) */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.45) 1px, transparent 1px)",
                    backgroundSize: "16px 16px",
                  }}
                />

                {/* Subtle ambient specular glow */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-accent/30 blur-2xl pointer-events-none" />

                {/* Top Subtle Tag */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/50 font-medium">
                    Client Engine
                  </span>
                  <span className="text-violet-400 text-xs">✦</span>
                </div>

                {/* The Anfalova Typographic Triad: Search · Conversion* · Revenue */}
                <div className="my-auto py-1 relative z-10 text-center select-none">
                  {/* Top Word: Bold Display Sans */}
                  <div className="font-sans font-black text-3xl sm:text-[38px] text-white tracking-tight leading-[0.88]">
                    Search
                  </div>

                  {/* Middle Word: Cursive / Italic Script in Accent Color + Asterisk */}
                  <div className="relative -my-1 z-20 flex items-center justify-center">
                    <span className="font-display italic text-3xl sm:text-[38px] text-violet-400 -rotate-2 inline-block font-normal tracking-wide drop-shadow-sm">
                      Conversion
                    </span>
                    <span className="text-violet-400 text-2xl font-serif leading-none ml-1 -mt-2 animate-pulse select-none">
                      *
                    </span>
                  </div>

                  {/* Bottom Word: Bold Display Sans */}
                  <div className="font-sans font-black text-3xl sm:text-[38px] text-white tracking-tight leading-[0.88]">
                    Revenue
                  </div>
                </div>

                {/* Flanking Parentheses Descriptor */}
                <div className="relative z-10 flex items-center justify-center gap-1.5 text-center px-1">
                  <span className="text-xl sm:text-2xl text-white/40 font-light select-none leading-none">(</span>
                  <p className="text-[10.5px] sm:text-[11.5px] text-white/75 leading-tight font-normal">
                    Turning Google searches into paying customers. No showcase fluff.
                  </p>
                  <span className="text-xl sm:text-2xl text-white/40 font-light select-none leading-none">)</span>
                </div>

                {/* Bottom Status Pill */}
                <div className="relative z-10 flex justify-center pt-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/20 border border-violet-400/40 text-violet-300 text-[10px] font-mono tracking-wider uppercase font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                    Built for Revenue
                  </span>
                </div>
              </motion.div>

              {/* Image 1 (Front / Left): Dipjyoti's Studio Photo Polaroid (-6deg) */}
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
                    Founder &amp; Lead Engineer
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* ========================================================
              PART 3 (RIGHT): Revenue-First Reality for Business Owners
              ======================================================== */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            
            <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-[2.2rem] text-text-primary dark:text-white leading-[1.1] tracking-tight mb-4">
              Built to bring paying customers, <br className="hidden sm:inline" />
              <span className="font-serif italic font-normal text-accent">not just sit on the internet.</span>
            </h3>

            {/* Pain Point & Solution: Revenue, Google rank, direct WhatsApp, after-service, zero monthly retainers */}
            <p className="text-text-secondary dark:text-white/75 text-base sm:text-lg leading-relaxed mb-7 font-normal">
              Most agencies build pretty showcase pages that bring zero calls. At NERQIVA, I build to rank your business on Google, turn visits into direct WhatsApp leads, and provide genuine after-launch support — with 100% ownership and zero monthly fees.
            </p>

            {/* Direct Line Actions */}
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
