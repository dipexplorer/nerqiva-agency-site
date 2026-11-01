"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Mail, ArrowUp } from "lucide-react";
import BrandLogo from "./BrandLogo";

// Custom SVG Social Icons
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
    aria-hidden="true"
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
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// High-value, essential navigation links (no redundant bloat)
const PRIMARY_NAV = [
  { label: "Selected Work", href: "/work" },
  { label: "Our Process", href: "/process" },
  { label: "Solutions", href: "/solutions" },
  { label: "About Studio", href: "/about" },
  { label: "Direct Contact", href: "/contact" },
  { label: "FAQ", href: "/#faq" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

// Interactive Kinetic Letter physics & typography configuration
const WORDMARK_LETTERS = [
  { char: "N", restRotate: -1.5, hoverRotate: -8, hoverY: -18, scale: 1.1 },
  { char: "E", restRotate: 1.2, hoverRotate: 7, hoverY: -16, scale: 1.12 },
  { char: "R", restRotate: -1.8, hoverRotate: -10, hoverY: -22, scale: 1.15 },
  { char: "Q", restRotate: 2.2, hoverRotate: 12, hoverY: -26, scale: 1.18 },
  { char: "I", restRotate: -1.0, hoverRotate: -6, hoverY: -16, scale: 1.08 },
  { char: "V", restRotate: 1.4, hoverRotate: 8, hoverY: -20, scale: 1.12 },
  { char: "A", restRotate: -2.0, hoverRotate: -9, hoverY: -18, scale: 1.1 },
];

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    setMousePos({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos(null);
    setHoveredIndex(null);
    setClickedIndex(null);
  }, []);

  const handleLetterClick = (index: number) => {
    setClickedIndex(index);
    setTimeout(() => {
      setClickedIndex(null);
    }, 280);
  };

  return (
    <footer id="footer" className="border-t border-border/40 bg-bg-primary text-text-primary relative z-20 pt-16 sm:pt-24 pb-12 overflow-hidden">
      
      <div className="section-container relative z-10 px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            EDITORIAL STUDIO GRID (Minimal, High-Agency, Zero Slop)
            ======================================================== */}
        <div className="pb-16 sm:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 border-b border-border/30">
          
          {/* Left Column: Brand Identity, Manifesto & Direct Connect */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center gap-3 group mb-6">
                <BrandLogo className="h-8 w-8 opacity-100 group-hover:scale-105 transition-transform duration-300" />
                <span className="font-mono text-base font-black tracking-widest text-text-primary">
                  NERQIVA <span className="text-text-tertiary font-normal text-xs uppercase tracking-widest">STUDIO</span>
                </span>
              </Link>
              
              <h3 className="font-display font-medium text-2xl sm:text-3xl lg:text-[2rem] text-text-primary dark:text-white leading-[1.25] tracking-tight max-w-xl mb-5">
                We design and engineer bespoke web systems that turn local attention into direct phone calls and booked revenue.
              </h3>

              <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-lg mb-8">
                Independent digital studio based in North Guwahati, Assam. Every build is handcrafted with performance-first architecture, local Google search optimization, and 100% full client ownership. No monthly retainers, no surprise invoices.
              </p>
            </div>

            {/* Direct Connect Pill Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'd%20like%20to%20discuss%20a%20website%20project%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-text-primary text-bg-primary dark:bg-white dark:text-black text-xs font-semibold tracking-wide hover:opacity-90 transition-opacity shadow-sm"
              >
                <MessageCircle size={15} />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="mailto:nerqiva.studio@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border hover:border-text-primary/40 text-text-primary text-xs font-semibold tracking-wide transition-colors"
              >
                <Mail size={15} />
                <span>nerqiva.studio@gmail.com</span>
              </a>

              {/* Social Channels */}
              <div className="flex items-center gap-2 pl-1">
                <a
                  href="https://github.com/dipexplorer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-text-primary/40 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon size={15} />
                </a>
                <a
                  href="https://linkedin.com/in/dip-jyoti22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-text-primary/40 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Minimal Navigation & Studio Details */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 lg:pl-10">
            {/* Primary Navigation */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-text-tertiary mb-5">
                Navigation
              </h4>
              <ul className="flex flex-col gap-3">
                {PRIMARY_NAV.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight size={12} className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Studio Location & Legal */}
            <div className="flex flex-col justify-between">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-text-tertiary mb-5">
                  Studio
                </h4>
                <div className="text-xs text-text-secondary leading-relaxed mb-8 space-y-1.5">
                  <p className="font-semibold text-text-primary">North Guwahati</p>
                  <p>Assam, India · 781030</p>
                  <p className="text-text-tertiary pt-1">
                    Serving Guwahati &amp; businesses across India
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-text-tertiary mb-3">
                  Legal
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {LEGAL_LINKS.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link.href}
                        className="text-xs text-text-secondary hover:text-text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================
            INTERACTIVE KINETIC WORDMARK: 'N E R Q I V A'
            With live user interaction, organic letter tilt angles,
            wave proximity physics, hover lift, and tactile spring motion.
            ======================================================== */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="pt-12 sm:pt-16 pb-8 overflow-hidden select-none relative group/wordmark cursor-default"
          aria-label="NERQIVA Studio Grand Display"
        >
          {/* Subtle studio caption indicator */}
          <div className="flex items-center justify-between mb-4 px-1 text-text-tertiary/70 font-mono text-[10px] uppercase tracking-widest">
            <span>Bespoke Studio Display</span>
            <span className="hidden sm:inline-block">Hover to interact with kinetic type</span>
          </div>

          {/* Kinetic Letters Container */}
          <div 
            className="flex items-center justify-between sm:justify-center sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 font-display font-black leading-none"
            aria-hidden="true"
          >
            {WORDMARK_LETTERS.map((item, index) => {
              const isHovered = hoveredIndex === index;
              const isClicked = clickedIndex === index;

              // Proximity wave physics calculation
              let waveLift = 0;
              let waveRotate = 0;
              if (mousePos && hoveredIndex === null) {
                const letterCenter = (index + 0.5) / WORDMARK_LETTERS.length;
                const dist = Math.abs(mousePos.x - letterCenter);
                if (dist < 0.28) {
                  const intensity = Math.cos((dist / 0.28) * (Math.PI / 2));
                  waveLift = intensity * -15;
                  waveRotate = intensity * item.hoverRotate * 0.7;
                }
              }

              const currentRotate = isHovered 
                ? item.hoverRotate 
                : (waveRotate || item.restRotate);
                
              const currentTranslateY = isClicked 
                ? item.hoverY * 0.4 
                : (isHovered ? item.hoverY : waveLift);
                
              const currentScale = isClicked 
                ? 0.94 
                : (isHovered ? item.scale : (waveLift ? 1.05 : 1));

              return (
                <span
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleLetterClick(index)}
                  style={{
                    transform: `translate3d(0, ${currentTranslateY}px, 0) rotate(${currentRotate}deg) scale(${currentScale})`,
                    transition: isClicked
                      ? "transform 0.1s cubic-bezier(0.2, 0.8, 0.2, 1)"
                      : "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.3s ease, filter 0.3s ease",
                  }}
                  className={`inline-block text-[14vw] sm:text-[13vw] lg:text-[12vw] tracking-normal cursor-pointer transition-colors will-change-transform ${
                    isHovered
                      ? "text-text-primary dark:text-white drop-shadow-[0_16px_30px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_16px_30px_rgba(255,255,255,0.22)]"
                      : waveLift
                      ? "text-text-primary/40 dark:text-white/40"
                      : "text-text-primary/10 dark:text-white/10"
                  }`}
                >
                  {item.char}
                </span>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            BOTTOM UTILITY BAR
            ======================================================== */}
        <div className="pt-6 border-t border-border/30 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-text-tertiary">
          <p>
            © {new Date().getFullYear()} NERQIVA Studio. All rights reserved. North Guwahati, Assam 781030.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-text-primary flex items-center gap-1.5 cursor-pointer transition-colors group"
          >
            <span>Back to top</span>
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>

      </div>
    </footer>
  );
}
