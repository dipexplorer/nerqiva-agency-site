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
import {
  ArrowUpRight,
  MessageCircle,
  MapPin,
  Code2,
  ShieldCheck,
  Zap,
} from "lucide-react";

const GitHubIcon = ({ size = 16 }: { size?: number }) => (
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

const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
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

export default function TactileFounder() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Normalized cursor coordinates: -0.5 to 0.5 relative to portrait card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // High-agency spring physics for interactive responsiveness
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // 3D perspective tilt: ±8 degrees
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  // Counter-parallax for the floating status badge
  const badgeX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const badgeY = useTransform(springY, [-0.5, 0.5], [-10, 10]);

  // Dynamic specular glare tracking cursor
  const glareX = useTransform(springX, [-0.5, 0.5], [15, 85]);
  const glareY = useTransform(springY, [-0.5, 0.5], [15, 85]);
  const glareBg = useMotionTemplate`radial-gradient(circle 320px at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.04) 45%, transparent 75%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || prefersReducedMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const pillars = [
    {
      icon: Zap,
      label: "Zero Middlemen",
      desc: "Talk directly to the person writing your code. Zero lost context or agency bureaucracy.",
    },
    {
      icon: Code2,
      label: "100% Code Ownership",
      desc: "Clean Next.js & TypeScript repository handed over to you. No proprietary lock-in.",
    },
    {
      icon: ShieldCheck,
      label: "Fixed-Scope Delivery",
      desc: "Agreed milestones upfront. Sprints launch on time with daily async updates.",
    },
  ];

  return (
    <section
      id="founder"
      className="py-24 sm:py-32 bg-transparent border-t border-border/40 dark:border-white/10 relative overflow-hidden"
    >
      <div className="section-container relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs tracking-wider uppercase mb-5 select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            The NERQIVA Principle
          </div>
          <h2
            className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-text-primary dark:text-white leading-[1.04] tracking-tight mb-5"
            style={{ letterSpacing: "-0.035em" }}
          >
            You work with the builder —{" "}
            <em className="font-serif italic font-normal text-accent not-italic">
              not an account manager.
            </em>
          </h2>
          <p className="text-text-secondary dark:text-white/65 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            Traditional agencies charge you for layers of management and pass your build down to junior freelancers. At NERQIVA, every system architecture, motion curve, and line of production code is crafted directly by me.
          </p>
        </div>

        {/* Bespoke Studio Layout: Interactive Specimen + Direct Line Console */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Interactive 3D Studio Specimen */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="w-full max-w-[340px] sm:max-w-[380px]" style={{ perspective: 1200 }}>
              
              {/* Ambient Breathing Float */}
              <motion.div
                animate={prefersReducedMotion ? {} : { y: [0, -6, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                
                {/* Floating Telemetry Pill (Counter-Parallax) */}
                <motion.div
                  style={{
                    x: prefersReducedMotion ? 0 : badgeX,
                    y: prefersReducedMotion ? 0 : badgeY,
                    transform: "translateZ(35px)",
                  }}
                  className="absolute -top-3.5 -right-2 sm:-right-4 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bg-card/95 dark:bg-[#121216]/95 backdrop-blur-md border border-border dark:border-white/15 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.18)] dark:shadow-[0_8px_25px_-4px_rgba(0,0,0,0.7)] select-none pointer-events-none"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[11px] font-mono font-medium tracking-tight text-text-primary dark:text-neutral-200">
                    In Studio · Direct Line
                  </span>
                </motion.div>

                {/* 3D Tilting Frame */}
                <motion.div
                  ref={cardRef}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    rotateX: prefersReducedMotion ? 0 : rotateX,
                    rotateY: prefersReducedMotion ? 0 : rotateY,
                    transformStyle: "preserve-3d",
                  }}
                  className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-900 border border-border dark:border-white/15 shadow-2xl group cursor-pointer select-none transition-shadow duration-300"
                >
                  {/* Subtle Optical Viewfinder Corner Crosshairs */}
                  <div className="absolute top-3.5 left-3.5 w-3 h-3 border-t-2 border-l-2 border-white/40 pointer-events-none z-20 group-hover:border-accent transition-colors duration-300" />
                  <div className="absolute top-3.5 right-3.5 w-3 h-3 border-t-2 border-r-2 border-white/40 pointer-events-none z-20 group-hover:border-accent transition-colors duration-300" />
                  <div className="absolute bottom-3.5 left-3.5 w-3 h-3 border-b-2 border-l-2 border-white/40 pointer-events-none z-20 group-hover:border-accent transition-colors duration-300" />
                  <div className="absolute bottom-3.5 right-3.5 w-3 h-3 border-b-2 border-r-2 border-white/40 pointer-events-none z-20 group-hover:border-accent transition-colors duration-300" />

                  {/* Dynamic Specular Sheen (Optical Reflection) */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 z-20 mix-blend-overlay transition-opacity duration-300"
                    style={{
                      background: glareBg,
                      opacity: isHovered ? 1 : 0.25,
                    }}
                  />

                  {/* Authentic Founder Studio Portrait */}
                  <img
                    src="/dip-profile.png"
                    alt="Dipjyoti Das — Founder & Lead Designer-Engineer at NERQIVA"
                    className="w-full h-full object-cover object-top filter grayscale contrast-[1.1] brightness-[0.98] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700 ease-out"
                    loading="lazy"
                    style={{
                      transform: "translateZ(10px)",
                    }}
                  />

                  {/* Bottom Vignette & Typographic Scrim */}
                  <div className="absolute inset-x-0 bottom-0 pt-24 pb-5 px-5 bg-gradient-to-t from-black/90 via-black/45 to-transparent z-10 text-white">
                    <div style={{ transform: "translateZ(20px)" }}>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-display font-bold text-lg sm:text-xl block leading-tight text-white">
                            Dipjyoti Das
                          </span>
                          <span className="font-sans text-xs text-white/75 block mt-0.5">
                            Founder & Lead Designer-Engineer
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-white/60 tracking-wider uppercase px-2.5 py-1 rounded-md border border-white/20 bg-white/10 backdrop-blur-md">
                          01 / BUILDER
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Studio Location & Telemetry Bar */}
                <div className="flex items-center justify-between mt-3.5 px-1.5 text-xs font-mono text-text-tertiary dark:text-white/40 select-none">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-accent shrink-0" />
                    <span>North Guwahati, Assam</span>
                  </div>
                  <span className="text-[11px] text-text-tertiary/60 dark:text-white/30">
                    26.18° N, 91.69° E
                  </span>
                </div>

              </motion.div>
            </div>
          </div>

          {/* Right Column: Direct Line Console & Guarantees */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* 3 Value Pillars */}
            <div className="space-y-4 mb-8">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.label}
                    className="p-5 rounded-2xl bg-bg-card/60 dark:bg-zinc-900/40 border border-border/70 dark:border-white/10 hover:border-accent/40 transition-colors flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-base text-text-primary dark:text-white mb-1">
                        {pillar.label}
                      </h3>
                      <p className="text-sm text-text-secondary dark:text-white/65 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct Line Action Bar */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-accent/10 via-transparent to-accent/5 border border-accent/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block mb-1">
                  Direct WhatsApp Access
                </span>
                <span className="text-sm text-text-primary dark:text-white/90 font-medium leading-snug block">
                  Have a vision to build? Message the founder directly.
                </span>
              </div>

              <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
                <a
                  href="https://wa.me/918724932985?text=Hi%20Dipjyoti,%20I'd%20like%20to%20talk%20about%20a%20website%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 bg-text-primary dark:bg-white text-bg-primary dark:text-black hover:opacity-90 hover:scale-[1.02] shadow-sm cursor-pointer select-none"
                >
                  <MessageCircle size={15} />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href="https://github.com/dipexplorer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border dark:border-white/15 text-text-secondary dark:text-white/70 hover:text-text-primary dark:hover:text-white hover:border-accent transition-colors"
                  aria-label="Dipjyoti's GitHub"
                  title="Inspect GitHub Code"
                >
                  <GitHubIcon size={16} />
                </a>

                <a
                  href="https://linkedin.com/in/dip-jyoti22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border dark:border-white/15 text-text-secondary dark:text-white/70 hover:text-text-primary dark:hover:text-white hover:border-accent transition-colors"
                  aria-label="Dipjyoti's LinkedIn"
                  title="Dipjyoti's LinkedIn Profile"
                >
                  <LinkedInIcon size={16} />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
