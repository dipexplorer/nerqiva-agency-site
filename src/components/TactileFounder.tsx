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
import { ArrowUpRight, MessageCircle, MapPin } from "lucide-react";

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

export default function TactileFounder() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Normalized cursor coordinates: -0.5 to 0.5 relative to element center
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Responsive spring physics for natural tactile momentum
  const springConfig = { damping: 22, stiffness: 180, mass: 0.6 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // 3D perspective tilt: ±7.5 degrees
  const rotateX = useTransform(springY, [-0.5, 0.5], [7.5, -7.5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-7.5, 7.5]);

  // Stereoscopic counter-parallax for the floating status badge
  const badgeX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const badgeY = useTransform(springY, [-0.5, 0.5], [-10, 10]);

  // Dynamic specular sheen coordinates tracking the cursor
  const glareX = useTransform(springX, [-0.5, 0.5], [15, 85]);
  const glareY = useTransform(springY, [-0.5, 0.5], [15, 85]);
  const glareBg = useMotionTemplate`radial-gradient(circle 320px at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.05) 45%, transparent 75%)`;

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

  return (
    <section
      id="founder"
      className="py-20 sm:py-28 bg-transparent border-t border-border/50 dark:border-white/10 relative overflow-hidden"
    >
      <div className="section-container relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Interactive 3D Tactile Portrait with Physics & Specular Sheen */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="w-full max-w-[320px] sm:max-w-[360px]" style={{ perspective: 1200 }}>
              
              {/* Ambient organic breathing float */}
              <motion.div
                animate={prefersReducedMotion ? {} : { y: [0, -6, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                
                {/* Floating Parallax Studio Status Pill */}
                <motion.div
                  style={{
                    x: badgeX,
                    y: badgeY,
                    transform: "translateZ(35px)",
                  }}
                  className="absolute -top-3.5 -right-2.5 sm:-right-4 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#131317]/95 backdrop-blur-md border border-black/10 dark:border-white/15 shadow-[0_8px_20px_-4px_rgba(0,0,0,0.14)] dark:shadow-[0_8px_25px_-4px_rgba(0,0,0,0.7)] select-none pointer-events-none"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[11px] font-mono font-medium tracking-tight text-neutral-800 dark:text-neutral-200">
                    In Studio · Direct Line
                  </span>
                </motion.div>

                {/* 3D Tilting Card Surface */}
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
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 border border-border dark:border-white/15 shadow-2xl group cursor-pointer select-none transition-shadow duration-300"
                >
                  {/* Subtle Photographic Corner Viewfinder Brackets */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white/40 pointer-events-none z-20 group-hover:border-accent transition-colors duration-300" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/40 pointer-events-none z-20 group-hover:border-accent transition-colors duration-300" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white/40 pointer-events-none z-20 group-hover:border-accent transition-colors duration-300" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-white/40 pointer-events-none z-20 group-hover:border-accent transition-colors duration-300" />

                  {/* Dynamic Specular Sheen (Anfalova Light Glare) */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 z-20 mix-blend-overlay transition-opacity duration-300"
                    style={{
                      background: glareBg,
                      opacity: isHovered ? 1 : 0.25,
                    }}
                  />

                  {/* Founder Photo with Monochrome-to-Color Transition & Depth Scaling */}
                  <motion.img
                    src="/dip-profile.png"
                    alt="Dipjyoti Das — Founder & Lead Designer-Engineer"
                    className="w-full h-full object-cover object-top grayscale contrast-[1.08] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700 ease-out"
                    loading="lazy"
                    style={{
                      transform: "translateZ(10px)",
                    }}
                  />

                  {/* Bottom Vignette & Typography Scrim */}
                  <div className="absolute inset-x-0 bottom-0 pt-20 pb-4 px-4 bg-gradient-to-t from-black/90 via-black/45 to-transparent z-10 text-white">
                    <div style={{ transform: "translateZ(20px)" }}>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-display font-bold text-base sm:text-lg block leading-tight text-white">
                            Dipjyoti Das
                          </span>
                          <span className="font-sans text-xs text-white/75 block mt-0.5">
                            Founder & Lead Designer-Engineer
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-white/50 tracking-wider uppercase px-2 py-0.5 rounded border border-white/15 bg-white/5 backdrop-blur-sm">
                          01 / LEAD
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Sub-label: Geographic & Studio Metadata */}
                <div className="flex items-center justify-between mt-3 px-1 text-xs font-mono text-text-tertiary dark:text-white/40">
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

          {/* Right: Direct Words & Studio Ethos (Human-crafted, zero jargon) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h2
                className="font-display font-black text-text-primary dark:text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-tight mb-5"
                style={{ letterSpacing: "-0.035em" }}
              >
                You work with the builder —{" "}
                <em className="font-serif italic font-normal text-accent dark:text-accent not-italic">
                  not an account manager.
                </em>
              </h2>

              <p className="text-text-secondary dark:text-white/60 text-base sm:text-lg leading-relaxed font-normal mb-8 max-w-xl">
                Traditional agencies hand your project down to junior freelancers and hide behind layers of managers. At NERQIVA, every screen, animation, and line of code is crafted directly by me. Direct WhatsApp access from day one.
              </p>

              {/* Three Human Trust Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 py-6 border-y border-border/60 dark:border-white/10 mb-8">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block mb-1">
                    Direct Line
                  </span>
                  <span className="text-sm text-text-primary dark:text-white/85 font-medium leading-snug block">
                    Chat with the founder on WhatsApp
                  </span>
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block mb-1">
                    Full Ownership
                  </span>
                  <span className="text-sm text-text-primary dark:text-white/85 font-medium leading-snug block">
                    100% clean code handover
                  </span>
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block mb-1">
                    Transparent
                  </span>
                  <span className="text-sm text-text-primary dark:text-white/85 font-medium leading-snug block">
                    Zero monthly retainer lock-in
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Contact Actions */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="https://wa.me/918724932985?text=Hi%20Dipjyoti,%20I'd%20like%20to%20talk%20about%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 bg-text-primary dark:bg-white text-bg-primary dark:text-black hover:opacity-90 hover:scale-[1.02] shadow-sm cursor-pointer select-none"
              >
                <MessageCircle size={15} />
                <span>Chat with Dipjyoti</span>
                <ArrowUpRight size={13} />
              </a>

              <a
                href="https://github.com/dipexplorer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border dark:border-white/15 text-text-secondary dark:text-white/70 hover:text-text-primary dark:hover:text-white hover:border-accent transition-colors"
                aria-label="Dipjyoti's GitHub"
              >
                <GitHubIcon size={15} />
              </a>

              <a
                href="https://linkedin.com/in/dip-jyoti22"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border dark:border-white/15 text-text-secondary dark:text-white/70 hover:text-text-primary dark:hover:text-white hover:border-accent transition-colors"
                aria-label="Dipjyoti's LinkedIn"
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
