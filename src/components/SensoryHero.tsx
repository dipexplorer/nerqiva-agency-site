"use client";

import React, { useRef, useEffect } from "react";
import { ArrowDown, ArrowUpRight, MessageCircle } from "lucide-react";
import AnfalovaHeroGallery from "./AnfalovaHeroGallery";

// ─── Real Flagship Client Projects for Mobile Gallery ─────────────────────────
const REAL_MOBILE_PROJECTS = [
  {
    id: "aurabeauty",
    client: "Elena Styles · Aura Clinic",
    category: "Clinical Aesthetics",
    urlLabel: "auraclinic.in",
    image: "/images/projects/aurabeauty/final_hero.png",
  },
  {
    id: "lablink",
    client: "LabLink Diagnostics",
    category: "Healthcare & Diagnostics",
    urlLabel: "lablinkguwahati.in",
    image: "/images/projects/lablink/full_mobile.webp",
  },
  {
    id: "krishav",
    client: "Krishav Mehendi Atelier",
    category: "Bridal & Aesthetics",
    urlLabel: "krishavmehendi.com",
    image: "/images/projects/krishavmehendi/traditional.png",
  },
  {
    id: "valerie",
    client: "Valerie Laurent Couture",
    category: "Editorial Haute Couture",
    urlLabel: "valerielaurent.com",
    image: "/images/projects/editorial/prada.png",
  },
  {
    id: "houseoftales",
    client: "House of Tales",
    category: "Commercial Photography",
    urlLabel: "houseoftales.in",
    image: "/images/projects/wedding/holi.png",
  },
];

function MobileHero() {
  const railRef = useRef<HTMLDivElement>(null);
  const isInteracting = useRef(false);

  // Auto-scroll loop with smooth continuous movement (pauses naturally on user touch)
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let animId: number;
    const step = () => {
      if (!isInteracting.current && rail) {
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
  }, []);

  // Doubled set for seamless continuous carousel loop
  const displayProjects = [...REAL_MOBILE_PROJECTS, ...REAL_MOBILE_PROJECTS];

  return (
    <div className="sm:hidden flex flex-col justify-between min-h-[100svh] w-full max-w-full overflow-hidden px-5 pt-[98px] pb-5 select-none bg-bg-primary dark:bg-[#09090b] transition-colors duration-300">
      
      {/* ── Top Header Text: Pure Authority & Generous Breathing Space ── */}
      <div className="shrink-0">
        {/* Editorial Headline (Zero Eyebrows, Zero Sticker Boxes, Pure High-Craft Typography) */}
        <h1 className="font-display font-black text-text-primary dark:text-white text-[2.35rem] leading-[1.04] tracking-[-0.04em] mb-2.5">
          Your business gets a{" "}
          <span className="font-display italic font-normal text-accent">
            website that books clients
          </span>{" "}
          <span className="text-text-secondary dark:text-white/45 font-normal">
            — built to convert.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-[13.5px] text-text-secondary dark:text-white/60 leading-relaxed max-w-[32ch]">
          For business owners who refuse to look amateur online.
        </p>
      </div>

      {/* ── Center Stage: Clean Edge-to-Edge Project Rail ── */}
      <div className="relative my-auto py-3 shrink-0 w-full overflow-hidden">
        {/* Level Track with Smooth Native Scrolling */}
        <div
          ref={railRef}
          onTouchStart={() => { isInteracting.current = true; }}
          onTouchEnd={() => { isInteracting.current = false; }}
          onMouseDown={() => { isInteracting.current = true; }}
          onMouseUp={() => { isInteracting.current = false; }}
          className="flex gap-4 overflow-x-auto py-2 px-1 touch-pan-x select-none"
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
            contain: "paint",
          }}
        >
          {displayProjects.map((project, idx) => (
            <article
              key={`${project.id}-${idx}`}
              className="flex-none w-[172px] h-[256px] rounded-[18px] overflow-hidden relative shadow-[0_12px_28px_-6px_rgba(0,0,0,0.18)] dark:shadow-[0_14px_32px_-6px_rgba(0,0,0,0.6)] bg-white dark:bg-zinc-900 border border-black/[0.08] dark:border-white/[0.12] transition-transform active:scale-[0.98]"
            >
              {/* Actual Real Website UI Screenshot */}
              <img
                src={project.image}
                alt={project.client}
                className="w-full h-full object-cover object-top"
                loading="eager"
              />

              {/* Bespoke Floating Client Pill (Zero Text Collision, Pure Craft) */}
              <div className="absolute inset-x-2 bottom-2 py-1.5 px-2.5 rounded-[12px] bg-black/85 dark:bg-zinc-950/90 backdrop-blur-md border border-white/15 z-10 flex items-center justify-between gap-1 shadow-md">
                <div className="min-w-0 flex-1">
                  <div className="text-[10.5px] font-semibold text-white tracking-tight truncate leading-tight">
                    {project.client}
                  </div>
                  <div className="font-mono text-[7.5px] text-white/50 tracking-wide uppercase truncate">
                    {project.category}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ── Bottom Actions (Clean, Confident, Zero Clutter) ── */}
      <div className="shrink-0 flex flex-col gap-2 mt-auto pt-2 w-full">
        {/* Unified Primary WhatsApp CTA */}
        <a
          href="https://wa.me/918724932985?text=Hi%20Dipjyoti,%20I%20want%20a%20website%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-13 rounded-full text-white flex items-center justify-center gap-2.5 px-6 font-sans text-sm font-bold tracking-wide active:scale-[0.98] transition-all duration-200 shadow-lg shadow-purple-900/25 select-none hover:opacity-95"
          style={{ background: "var(--accent)" }}
          aria-label="Start on WhatsApp"
        >
          <MessageCircle size={17} className="shrink-0" />
          <span>Start on WhatsApp</span>
          <ArrowUpRight size={16} strokeWidth={2.5} className="shrink-0" />
        </a>

        {/* See Our Work Secondary Action */}
        <a
          href="#flagships"
          className="w-full flex items-center justify-center gap-1.5 py-1.5 font-sans text-xs font-semibold text-text-secondary dark:text-white/60 hover:text-text-primary dark:hover:text-white active:opacity-75 transition-colors select-none"
        >
          <span>See Selected Works</span>
          <ArrowDown size={13} strokeWidth={2.2} />
        </a>
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
      className="intro-hero relative w-full max-w-full overflow-hidden select-none bg-bg-primary dark:bg-[#09090b] transition-colors duration-300"
    >
      <MobileHero />
      <DesktopHero />
    </section>
  );
}
