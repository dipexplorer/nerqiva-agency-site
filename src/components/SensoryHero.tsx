"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";
import AnfalovaHeroGallery from "./AnfalovaHeroGallery";

export default function SensoryHero() {
  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] min-h-[660px] max-h-[960px] overflow-hidden flex flex-col justify-between select-none bg-bg-primary dark:bg-[#09090b] transition-colors duration-300"
    >
      {/* ── Atmospheric Radial Glow (Light: Luminous Ivory; Dark: Obsidian Ember) ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-500"
        style={{
          background: "radial-gradient(ellipse 90% 70% at 50% 15%, #F4F4F6 0%, #FFFFFF 85%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(ellipse 90% 70% at 50% 15%, #14141a 0%, #09090b 85%)",
        }}
        aria-hidden="true"
      />

      {/* ── Top Clearance Spacer for Floating Luxury Navigation Bar ── */}
      <div className="w-full pt-24 sm:pt-28 shrink-0 pointer-events-none" aria-hidden="true" />

      {/* ── Center Stage: Dynamic Diagonal Project Gallery with Three.js Liquid Glass Lens ── */}
      <div className="relative w-full my-auto shrink-0 z-10 overflow-visible transition-transform duration-500 ease-out sm:rotate-[-1.8deg] sm:scale-[1.03] origin-center">
        <AnfalovaHeroGallery />
      </div>

      {/* ── Bottom Grounded Row: Master Editorial Statement + Direct CTAs ── */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pb-8 sm:pb-12 z-20 shrink-0">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10">
          
          {/* Master Headline */}
          <div className="max-w-3xl">
            <h1
              className="font-display font-medium text-text-tertiary dark:text-white/30 text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] leading-[1.06] tracking-tight transition-colors duration-300"
              style={{ letterSpacing: "-0.04em" }}
            >
              <span className="text-text-primary dark:text-white font-bold transition-colors duration-300">
                Digital
              </span>{" "}
              <em className="not-italic font-serif italic text-rose-600 dark:text-rose-400 font-normal inline-block underline decoration-rose-500/40 dark:decoration-rose-400/40 decoration-1 underline-offset-8 transition-colors duration-300">
                flagships
              </em>{" "}
              <span className="text-text-primary dark:text-white font-bold transition-colors duration-300">
                — or
              </span>
              <br />
              <strong className="text-text-primary dark:text-white font-bold transition-colors duration-300">
                a 48-hour sprint
              </strong>
              <span className="text-text-secondary dark:text-white/40 font-normal transition-colors duration-300">
                , if you want real conversion.
              </span>
            </h1>
          </div>

          {/* Direct Actions & Ticker */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3.5 sm:gap-4 shrink-0">
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/918724932985?text=Hi%20Dipjyoti,%20I'm%20ready%20to%20commission%20a%20flagship%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-mono font-bold tracking-wider text-white rounded-full transition-all duration-200 hover:scale-[1.02] hover:opacity-95 shadow-lg shadow-purple-900/25 cursor-pointer select-none"
                style={{ background: "var(--accent)" }}
              >
                <span>Commission on WhatsApp</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href="#flagships"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-mono font-semibold text-text-primary dark:text-white/70 border border-border-dark dark:border-white/15 rounded-full hover:border-accent hover:text-accent dark:hover:border-white/35 dark:hover:text-white transition-all duration-200 cursor-pointer select-none bg-bg-card/70 dark:bg-white/5"
              >
                <span>Browse Case Studies</span>
                <ArrowDown size={14} />
              </a>
            </div>

            <p className="font-mono text-[11px] text-text-tertiary dark:text-white/30 tracking-wide transition-colors duration-300">
              Guwahati 26.18°N · 48H Live Deployment · Zero Retainers
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
