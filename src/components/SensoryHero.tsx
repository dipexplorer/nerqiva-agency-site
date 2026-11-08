"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ArrowDown, Play, Pause } from "lucide-react";
import AnfalovaHeroGallery from "./AnfalovaHeroGallery";

// ─── Real Flagship Client Projects for Mobile Gallery ─────────────────────────
interface RealMobileProject {
  id: string;
  client: string;
  category: string;
  urlLabel: string;
  image: string;
}

const REAL_MOBILE_PROJECTS: RealMobileProject[] = [
  {
    id: "lablink",
    client: "LabLink Diagnostics",
    category: "Healthcare & Diagnostics",
    urlLabel: "lablinkguwahati.in",
    image: "/images/projects/lablink/desktop.png",
  },
  {
    id: "krishav",
    client: "Krishav Mehendi Atelier",
    category: "Bridal & Aesthetics",
    urlLabel: "krishavmehendi.com",
    image: "/images/projects/krishavmehendi/bridal.png",
  },
  {
    id: "valerie",
    client: "Valerie Laurent Couture",
    category: "Editorial Haute Couture",
    urlLabel: "valerielaurent.com",
    image: "/images/projects/editorial/vogue.png",
  },
  {
    id: "titangym",
    client: "Titan Athletic Club",
    category: "Athletics & Training",
    urlLabel: "titangym.club",
    image: "/images/projects/titangym/contrast.png",
  },
  {
    id: "aurabeauty",
    client: "Elena Styles · Aura Clinic",
    category: "Clinical Aesthetics",
    urlLabel: "auraclinic.in",
    image: "/images/projects/aurabeauty/final_hero.png",
  },
];

function MobileHero() {
  const railRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isInteracting = useRef(false);

  // Auto-scroll loop with smooth continuous subpixel movement
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let animId: number;
    const step = () => {
      if (!isPaused && !isInteracting.current && rail) {
        rail.scrollLeft += 0.65;
        // Infinite wrap: when scrolled past half of the doubled list, smoothly loop
        if (rail.scrollLeft >= rail.scrollWidth / 2) {
          rail.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  // Doubled set for seamless continuous carousel loop
  const displayProjects = [...REAL_MOBILE_PROJECTS, ...REAL_MOBILE_PROJECTS];

  return (
    <div className="sm:hidden flex flex-col justify-between min-h-[100svh] w-full px-5 pt-20 pb-4 select-none bg-bg-primary dark:bg-[#09090b] transition-colors duration-300">
      
      {/* ── Top Header Text: Pure Authority (Kicker Removed for Clean & Professional Polish) ── */}
      <div className="shrink-0 pt-1">
        {/* Editorial Headline with Purple Slot Box */}
        <h1 className="font-display font-black text-text-primary dark:text-white text-[2.75rem] leading-[0.98] tracking-[-0.04em] mb-2">
          Your business gets<br />
          a<br />
          <span
            className="inline-block text-white px-3 py-1 my-1 rounded-md font-display font-black"
            style={{
              background: "var(--accent, #5a0a9c)",
              transform: "rotate(-1.4deg)",
              boxShadow: "0 6px 20px rgba(90, 10, 156, 0.35)",
            }}
          >
            website that<br />books clients
          </span>
          <br />
          <span className="text-text-secondary dark:text-white/45 font-normal">
            — built to convert.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-[13.5px] text-text-secondary dark:text-white/60 mb-2 leading-snug max-w-[30ch]">
          For business owners who refuse to look amateur online
        </p>
      </div>

      {/* ── Center Stage: Diagonal Glass Bending Gallery Rail ── */}
      <div className="relative my-auto py-2 shrink-0 overflow-hidden -mx-5 px-5">
        
        {/* Subtle Ambient Refraction Gradients */}
        <div
          className="absolute -top-12 left-1/4 w-44 h-44 rounded-full pointer-events-none blur-3xl opacity-20 dark:opacity-25"
          style={{ background: "var(--accent, #5a0a9c)" }}
          aria-hidden="true"
        />

        {/* Diagonal Rotated Track */}
        <div
          ref={railRef}
          onTouchStart={() => { isInteracting.current = true; }}
          onTouchEnd={() => { isInteracting.current = false; }}
          onMouseDown={() => { isInteracting.current = true; }}
          onMouseUp={() => { isInteracting.current = false; }}
          className="flex gap-4 overflow-x-auto py-4 px-5 touch-pan-x select-none -rotate-[2.5deg] scale-[1.02]"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {displayProjects.map((project, idx) => (
            <article
              key={`${project.id}-${idx}`}
              className="flex-none w-[172px] h-[245px] rounded-[18px] overflow-hidden relative shadow-2xl transition-transform active:scale-[0.98] bg-zinc-900 border border-white/25 dark:border-white/15"
              style={{
                boxShadow:
                  "0 20px 40px -12px rgba(15, 10, 30, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.2) inset",
              }}
            >
              {/* Actual Real UI Screenshot */}
              <img
                src={project.image}
                alt={project.client}
                className="w-full h-full object-cover object-top filter brightness-[0.96]"
                loading="lazy"
              />

              {/* Glass Bending Specular Refraction Overlay */}
              <div
                className="absolute inset-0 pointer-events-none z-20"
                style={{
                  background:
                    "linear-gradient(130deg, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.12) 30%, transparent 52%, rgba(255,255,255,0.15) 100%)",
                }}
                aria-hidden="true"
              />

              {/* Glass Curved Lens Glare Arc */}
              <div
                className="absolute -top-1/3 -left-1/3 w-[160%] h-[160%] pointer-events-none z-20 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at 45% 35%, rgba(255,255,255,0.6) 0%, transparent 48%)",
                }}
                aria-hidden="true"
              />

              {/* Frosted Glass Browser Chrome Header */}
              <div className="absolute inset-x-0 top-0 h-7 flex items-center justify-between px-2.5 bg-black/40 backdrop-blur-md border-b border-white/15 z-30">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                </div>
                <div className="font-mono text-[8.5px] font-medium tracking-tight text-white/80 truncate max-w-[100px]">
                  {project.urlLabel}
                </div>
              </div>

              {/* Frosted Glass Bottom Scrim with Real Client Data */}
              <div className="absolute inset-x-0 bottom-0 pt-6 pb-2.5 px-3 bg-gradient-to-t from-black/90 via-black/55 to-transparent backdrop-blur-[2px] z-30 flex flex-col justify-end">
                <span className="font-mono text-[8px] font-bold text-accent-light dark:text-accent uppercase tracking-wider mb-0.5">
                  {project.category}
                </span>
                <span className="font-display font-bold text-xs text-white leading-tight truncate">
                  {project.client}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Gallery Meta Row: Hint + Pause Button */}
        <div className="flex items-center justify-between mt-1 px-1">
          <div className="flex items-center gap-2 text-xs font-sans text-text-secondary dark:text-white/60">
            <svg
              width="24"
              height="10"
              viewBox="0 0 26 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-pulse"
              aria-hidden="true"
            >
              <path d="M1 5h23M20 1l4 4-4 4" />
            </svg>
            <span>Drag gallery to inspect</span>
          </div>

          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            aria-pressed={isPaused}
            className="h-[32px] px-3.5 flex items-center gap-1.5 rounded-full bg-bg-card dark:bg-[#1a1625] border border-border/80 dark:border-white/15 text-text-primary dark:text-white text-xs font-bold shadow-sm active:scale-95 transition-transform cursor-pointer"
          >
            {isPaused ? (
              <>
                <Play size={10} className="fill-current" />
                <span>PLAY</span>
              </>
            ) : (
              <>
                <Pause size={10} className="fill-current" />
                <span>PAUSE</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* ── Bottom Actions & Trust Facts ── */}
      <div className="shrink-0 flex flex-col gap-2 mt-auto pt-2">
        {/* Main WhatsApp CTA with White Arrow Badge */}
        <a
          href="https://wa.me/918724932985?text=Hi%20Dipjyoti,%20I%20want%20a%20website%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-14 rounded-2xl text-white flex items-center justify-between px-5 font-sans font-bold text-[15px] shadow-lg active:scale-[0.98] transition-transform select-none"
          style={{ background: "var(--accent, #5a0a9c)" }}
          aria-label="Start on WhatsApp"
        >
          <span>Start on WhatsApp</span>
          <span
            className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm"
            aria-hidden="true"
          >
            <ArrowUpRight
              size={18}
              strokeWidth={2.8}
              style={{ color: "var(--accent, #5a0a9c)" }}
            />
          </span>
        </a>

        {/* See Our Work link */}
        <a
          href="#flagships"
          className="w-full flex items-center justify-center gap-1.5 py-2 font-sans text-sm font-semibold text-text-primary dark:text-white active:opacity-75 transition-opacity select-none"
        >
          <span>See Our Work</span>
          <ArrowDown size={14} strokeWidth={2.2} />
        </a>

        {/* Facts Row with | Dividers */}
        <div className="w-full border-t border-border/60 dark:border-white/10 pt-2.5 pb-1 flex items-center justify-between text-[11px] font-sans font-bold text-text-primary dark:text-white">
          <span>Guwahati</span>
          <span className="text-border dark:text-white/20 font-normal">|</span>
          <span>Transparent Sprints</span>
          <span className="text-border dark:text-white/20 font-normal">|</span>
          <span>You own 100% of the code</span>
        </div>
      </div>

    </div>
  );
}

// ─── Desktop Sensory Hero (Preserved 100%) ────────────────────────────────────
function DesktopHero() {
  return (
    <div className="hidden sm:flex flex-col justify-between w-full min-h-[640px] max-h-[960px] h-[100dvh]">
      {/* ── Top Clearance & Editorial Studio Dispatch ── */}
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 pt-20 sm:pt-24 pb-2 z-20 shrink-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 border-b border-border/40 dark:border-white/10 pb-3">
          
          {/* Left: Emotion trigger & direct value for first-time visitors */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-sans text-xs sm:text-[13px] font-bold tracking-tight text-text-primary dark:text-white">
                Websites built to bring you real paying clients
              </span>
            </div>
            <span className="hidden sm:inline-block text-border dark:text-white/20">·</span>
            <span className="font-sans text-xs text-text-secondary dark:text-white/60 font-normal">
              For business owners who refuse to look amateur online
            </span>
          </div>

          {/* Right: Tactile interaction & delivery speed */}
          <div className="flex items-center gap-3 sm:gap-4 font-mono text-[10.5px] sm:text-xs text-text-tertiary dark:text-white/45">
            <span className="hidden md:inline-flex items-center gap-1">
              <span>7–10 Day Delivery</span>
            </span>
            <span className="hidden md:inline-block text-border dark:text-white/20">·</span>
            <div className="flex items-center gap-1.5 text-text-secondary dark:text-white/60">
              <span className="inline-block w-3 h-[1px] bg-accent" />
              <span>Drag gallery to inspect</span>
            </div>
          </div>

        </div>
      </div>

      {/* ── Project Gallery Strip ── */}
      <div className="relative w-full my-auto shrink-0 z-10">
        <AnfalovaHeroGallery />
      </div>

      {/* ── Bottom Row: Headline + CTAs ── */}
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 pb-8 sm:pb-12 z-20 shrink-0">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10">

          {/* Headline */}
          <div className="max-w-3xl">
            <h1
              className="font-display font-black text-text-primary dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] leading-[1.12] sm:leading-[1.06] tracking-tight transition-colors duration-300"
              style={{ letterSpacing: "-0.04em" }}
            >
              Your business gets a{" "}
              <em className="not-italic font-display italic text-accent dark:text-accent font-normal inline-block transition-colors duration-300">
                website that books clients
              </em>
              {" "}—{" "}
              <span className="text-text-secondary dark:text-white/40 font-normal transition-colors duration-300">
                built to convert.
              </span>
            </h1>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3.5 sm:gap-4 shrink-0 w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <a
                href="https://wa.me/918724932985?text=Hi%20Dipjyoti,%20I%20want%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-mono font-bold tracking-wider text-white rounded-full transition-all duration-200 hover:scale-[1.02] hover:opacity-95 shadow-lg shadow-purple-900/25 cursor-pointer select-none text-center"
                style={{ background: "var(--accent)" }}
              >
                <span>Start on WhatsApp</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href="#flagships"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-mono font-semibold text-text-primary dark:text-white/70 border border-border-dark dark:border-white/15 rounded-full hover:border-accent hover:text-accent dark:hover:border-white/35 dark:hover:text-white transition-all duration-200 cursor-pointer select-none bg-bg-card/70 dark:bg-white/5 text-center"
              >
                <span>See Our Work</span>
                <ArrowDown size={14} />
              </a>
            </div>

            <p className="font-mono text-[10.5px] sm:text-[11px] text-text-tertiary dark:text-white/40 tracking-wide transition-colors duration-300 text-center sm:text-left lg:text-right w-full pt-1">
              Guwahati · Transparent Sprints · You own 100% of the code
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function SensoryHero() {
  return (
    <section
      id="hero"
      className="intro-hero relative w-full overflow-hidden select-none bg-bg-primary dark:bg-[#09090b] transition-colors duration-300"
    >
      <MobileHero />
      <DesktopHero />
    </section>
  );
}
