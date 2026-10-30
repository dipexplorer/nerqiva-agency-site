"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";
import AnfalovaHeroGallery from "./AnfalovaHeroGallery";

export default function SensoryHero() {
  return (
    <section className="relative w-full pt-20 sm:pt-22 pb-8 sm:pb-12 overflow-hidden bg-bg-primary text-text-primary flex flex-col justify-between min-h-[90vh] lg:min-h-screen">
      
      {/* ============================================================
          TIER 1: CLEAN MINIMAL HEADER BAND
          ============================================================ */}
      <div className="section-container w-full relative z-10">
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-border/60">
          
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold tracking-wider text-text-primary">
              NERQIVA STUDIO
            </span>
            <span className="text-border-dark hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5 font-mono text-[11px] sm:text-xs font-semibold text-emerald-500">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="hidden sm:inline">2 LAUNCH SLOTS OPEN FOR NOVEMBER</span>
              <span className="sm:hidden">2 SLOTS OPEN</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 font-mono text-xs text-text-tertiary">
            <span>GUWAHATI [26.18°N 91.73°E]</span>
            <span className="text-border-dark">/</span>
            <span>48H DELIVERY</span>
            <span className="text-border-dark">/</span>
            <span className="text-text-secondary font-medium">ZERO RETAINERS</span>
          </div>

        </div>
      </div>

      {/* ============================================================
          TIER 2: CENTERED 3D KINETIC LIQUID GLASS CAROUSEL (ANFALOVA.ART)
          ============================================================ */}
      <div className="relative w-full my-3 sm:my-6 overflow-visible">
        <AnfalovaHeroGallery />
      </div>

      {/* ============================================================
          TIER 3: MASTER TYPOGRAPHIC STATEMENT (ANFALOVA INTRO-TITLE)
          ============================================================ */}
      <div className="section-container relative z-10 w-full pt-2 sm:pt-4">
        
        {/* Anfalova Style 3-Line Contrast Typography */}
        <h1
          className="font-display font-medium text-text-tertiary text-3xl sm:text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.25rem] leading-[1.02] sm:leading-[0.98] tracking-tight max-w-5xl"
          style={{ letterSpacing: "-0.04em" }}
        >
          <span className="text-text-primary font-bold">Digital</span>{" "}
          <em className="not-italic font-serif italic text-rose-500 font-normal border-b-2 border-dotted border-rose-500/70 pb-0.5 inline-block">
            flagships
          </em>{" "}
          <span className="text-text-primary font-bold">— or</span>
          <br />
          <strong className="text-text-primary font-bold border-b-2 border-dotted border-text-primary/40 pb-0.5 inline-block">
            a 48-hour sprint
          </strong>
          , <br className="sm:hidden" />
          <span className="text-text-secondary font-normal">if you want</span>
          <br className="hidden sm:inline" />{" "}
          <span className="text-text-secondary font-normal">real conversion.</span>
        </h1>

        {/* Action Row & Provenance Statement */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-5 sm:mt-6 pt-4 border-t border-border/60">
          <a
            href="https://wa.me/918724932985?text=Hi%20Dipjyoti,%20I'm%20ready%20to%20commission%20a%20flagship%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-3 px-6 text-sm font-bold flex items-center justify-center gap-2 shadow-xl shadow-accent/20 cursor-pointer select-none"
          >
            <span>Commission on WhatsApp</span>
            <ArrowUpRight size={14} />
          </a>

          <a
            href="#flagships"
            className="btn-secondary py-3 px-5 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer hover:border-accent/40 select-none"
          >
            <span>Browse Case Studies</span>
            <ArrowDown size={14} />
          </a>

          <p className="font-mono text-xs text-text-tertiary ml-auto hidden md:block">
            Sub-second mobile speed • 1-tap WhatsApp booking • Delivered live in 48 hours
          </p>
        </div>

      </div>

    </section>
  );
}
