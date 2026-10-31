"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";
import AnfalovaHeroGallery from "./AnfalovaHeroGallery";

export default function SensoryHero() {
  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] min-h-[640px] max-h-[960px] overflow-hidden flex flex-col justify-between select-none bg-bg-primary dark:bg-[#09090b] transition-colors duration-300"
    >
      {/* ── Atmospheric Background Glow ── */}
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

      {/* ── Top clearance for floating nav ── */}
      <div className="w-full pt-24 sm:pt-28 shrink-0 pointer-events-none" aria-hidden="true" />

      {/* ── Project Gallery Strip ── */}
      {/*
        No rotation/scale wrapper here — the gallery manages its own
        responsive geometry. The hero section's overflow-hidden provides
        the natural edge clip; left/right fade masks inside the gallery
        give the seamless anfalova bleed-out effect at any width.
      */}
      <div className="relative w-full my-auto shrink-0 z-10">
        <AnfalovaHeroGallery />
      </div>

      {/* ── Bottom Row: Headline + CTAs ── */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pb-8 sm:pb-12 z-20 shrink-0">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10">

          {/* Headline — plain language, direct meaning for first-time visitors */}
          <div className="max-w-3xl">
            <h1
              className="font-display font-black text-text-primary dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] leading-[1.06] tracking-tight transition-colors duration-300"
              style={{ letterSpacing: "-0.04em" }}
            >
              Your business gets a{" "}
              <em className="not-italic font-serif italic text-accent dark:text-accent font-normal inline-block transition-colors duration-300">
                website that books clients
              </em>
              {" "}—{" "}
              <span className="text-text-secondary dark:text-white/40 font-normal transition-colors duration-300">
                live in 48 hours.
              </span>
            </h1>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3.5 sm:gap-4 shrink-0">
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/918724932985?text=Hi%20Dipjyoti,%20I%20want%20a%20website%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-mono font-bold tracking-wider text-white rounded-full transition-all duration-200 hover:scale-[1.02] hover:opacity-95 shadow-lg shadow-purple-900/25 cursor-pointer select-none"
                style={{ background: "var(--accent)" }}
              >
                <span>Start on WhatsApp</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href="#flagships"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-mono font-semibold text-text-primary dark:text-white/70 border border-border-dark dark:border-white/15 rounded-full hover:border-accent hover:text-accent dark:hover:border-white/35 dark:hover:text-white transition-all duration-200 cursor-pointer select-none bg-bg-card/70 dark:bg-white/5"
              >
                <span>See Our Work</span>
                <ArrowDown size={14} />
              </a>
            </div>

            <p className="font-mono text-[11px] text-text-tertiary dark:text-white/30 tracking-wide transition-colors duration-300">
              Guwahati · Delivered in 48 Hours · You own the code
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
