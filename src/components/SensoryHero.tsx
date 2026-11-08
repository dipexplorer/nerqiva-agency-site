"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ArrowDown, Play, Pause } from "lucide-react";
import AnfalovaHeroGallery from "./AnfalovaHeroGallery";

// ─── Mobile Project Mockup Cards ──────────────────────────────────────────────
interface MobileSiteCard {
  id: string;
  theme: "luxe" | "bridal" | "oak" | "lablink";
  title: string;
  subtitle: string;
}

const MOBILE_SITES: MobileSiteCard[] = [
  { id: "oak", theme: "oak", title: "OAK", subtitle: "ATHLETIC CLUB" },
  { id: "luxe", theme: "luxe", title: "LUXE", subtitle: "MAKEUP ARTIST" },
  { id: "bridal", theme: "bridal", title: "BRIDAL", subtitle: "makeup artist" },
  { id: "lablink", theme: "lablink", title: "LABLINK", subtitle: "DIAGNOSTICS" },
];

function MobileHero() {
  const railRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isInteracting = useRef(false);

  // Auto-scroll loop
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    let animId: number;
    const step = () => {
      if (!isPaused && !isInteracting.current && rail) {
        rail.scrollLeft += 0.65;
        // Infinite loop wrap: when halfway through doubled set, reset to 0
        if (rail.scrollLeft >= rail.scrollWidth / 2) {
          rail.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  // Doubled list for seamless infinite looping
  const displaySites = [...MOBILE_SITES, ...MOBILE_SITES];

  return (
    <div className="sm:hidden flex flex-col justify-between min-h-[100svh] w-full px-5 pt-20 pb-4 select-none bg-bg-primary dark:bg-[#09090b] transition-colors duration-300">
      
      {/* ── Top Header Text ── */}
      <div className="shrink-0">
        {/* Pulsing Live indicator */}
        <div className="flex items-center gap-2 mb-2">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-sans text-[13px] font-semibold tracking-tight text-text-primary dark:text-white leading-tight">
            Websites built to bring you real paying clients
          </span>
        </div>

        {/* Editorial Headline with Purple Slot Box */}
        <h1 className="font-display font-black text-text-primary dark:text-white text-[2.75rem] leading-[0.98] tracking-[-0.04em] mt-1 mb-2">
          Your business gets<br />
          a<br />
          <span
            className="inline-block text-white px-3 py-1 my-1 rounded-md font-display font-black"
            style={{
              background: "var(--accent, #5a0a9c)",
              transform: "rotate(-1.4deg)",
              boxShadow: "0 4px 14px rgba(90, 10, 156, 0.28)",
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
        <p className="font-sans text-[13.5px] text-text-secondary dark:text-white/60 mt-2 mb-3 leading-snug max-w-[30ch]">
          For business owners who refuse to look amateur online
        </p>
      </div>

      {/* ── Center Stage: Auto-scrolling Gallery Rail ── */}
      <div className="relative my-auto py-2 shrink-0">
        <div
          ref={railRef}
          onTouchStart={() => { isInteracting.current = true; }}
          onTouchEnd={() => { isInteracting.current = false; }}
          onMouseDown={() => { isInteracting.current = true; }}
          onMouseUp={() => { isInteracting.current = false; }}
          className="flex gap-3 overflow-x-auto py-2 -mx-5 px-5 touch-pan-x select-none"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {displaySites.map((site, idx) => (
            <article
              key={`${site.id}-${idx}`}
              className="flex-none w-[148px] h-[210px] rounded-[10px] overflow-hidden relative shadow-lg transition-transform active:scale-98"
              style={{
                boxShadow: "0 0 0 1px rgba(0,0,0,0.08), 0 14px 28px -12px rgba(22, 17, 31, 0.35)",
              }}
            >
              {/* Browser chrome header with 3 dots */}
              <div className="absolute inset-x-0 top-0 h-[14px] flex items-center gap-[3px] px-2 bg-black/20 z-10 backdrop-blur-[1px]">
                <span className="w-1 h-1 rounded-full bg-white/40" />
                <span className="w-1 h-1 rounded-full bg-white/40" />
                <span className="w-1 h-1 rounded-full bg-white/40" />
              </div>

              {/* Card visual themes */}
              {site.theme === "oak" && (
                <div className="absolute inset-0 pt-[14px] p-3.5 flex flex-col justify-between bg-[#0e0e10] text-[#ffd21f]">
                  <div className="font-display font-black text-4xl mt-7 tracking-tighter leading-none">
                    OAK
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 mt-auto">
                    <div className="h-8 rounded bg-[#ffd21f]/20" />
                    <div className="h-8 rounded bg-[#ffd21f]/20" />
                  </div>
                </div>
              )}

              {site.theme === "luxe" && (
                <div
                  className="absolute inset-0 pt-[14px] p-3.5 flex flex-col justify-between text-white"
                  style={{
                    background: "radial-gradient(circle at 50% 38%, #5a3a30, #0c0c0e 65%)",
                  }}
                >
                  <div className="mt-8">
                    <div className="font-display font-black text-2xl tracking-wider leading-none">
                      LUXE
                    </div>
                    <div className="font-mono text-[7px] tracking-[0.2em] opacity-75 mt-1.5">
                      MAKEUP ARTIST
                    </div>
                  </div>
                  <div className="mt-auto h-3.5 w-14 bg-[#e0212b] rounded-sm" />
                </div>
              )}

              {site.theme === "bridal" && (
                <div className="absolute inset-0 pt-[14px] p-3.5 flex flex-col justify-between bg-[#f7f2ec] text-[#2a2420]">
                  <div className="mt-5">
                    <div className="font-display font-medium text-[20px] tracking-widest leading-none">
                      BRIDAL
                    </div>
                    <div className="font-mono text-[7.5px] tracking-[0.2em] opacity-70 mt-1.5">
                      makeup artist
                    </div>
                    <div className="mt-2.5 h-3 w-12 bg-[#17120f] rounded-sm" />
                  </div>
                  <div className="mt-auto flex flex-col gap-1">
                    <div className="h-[2.5px] bg-[#2a2420]/15 rounded-full" />
                    <div className="h-[2.5px] bg-[#2a2420]/15 rounded-full w-2/3" />
                  </div>
                </div>
              )}

              {site.theme === "lablink" && (
                <div className="absolute inset-0 pt-[14px] p-3.5 flex flex-col justify-between bg-[#0a1226] text-white">
                  <div className="mt-6">
                    <div className="font-display font-black text-[19px] tracking-wide text-white leading-tight">
                      LABLINK
                    </div>
                    <div className="font-mono text-[7px] tracking-[0.16em] text-emerald-400 mt-1">
                      DIAGNOSTICS
                    </div>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-2 border-t border-white/10">
                    <span className="font-mono text-[8px] text-white/60">Guwahati</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Gallery Meta Row: Hint + Pause Button */}
        <div className="flex items-center justify-between mt-2.5 px-0.5">
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
