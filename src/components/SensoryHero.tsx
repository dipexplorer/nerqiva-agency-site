"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";
import AnfalovaHeroGallery from "./AnfalovaHeroGallery";

export default function SensoryHero() {
  return (
    <section
      id="hero"
      className="intro-hero relative w-full min-h-[100svh] sm:min-h-[640px] sm:max-h-[960px] h-auto sm:h-[100dvh] overflow-hidden flex flex-col justify-between select-none bg-bg-primary dark:bg-[#09090b] transition-colors duration-300"
    >

      {/* ── Top clearance for floating nav ── */}
      <div className="w-full pt-20 sm:pt-28 shrink-0 pointer-events-none" aria-hidden="true" />

      {/* ── Project Gallery Strip ── */}
      <div className="relative w-full my-3 sm:my-auto shrink-0 z-10">
        <AnfalovaHeroGallery />
      </div>

      {/* ── Bottom Row: Headline + CTAs ── */}
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 pb-8 sm:pb-12 z-20 shrink-0">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10">

          {/* Headline — plain language, direct meaning for first-time visitors */}
          <div className="max-w-3xl">
            <h1
              className="font-display font-black text-text-primary dark:text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] leading-[1.12] sm:leading-[1.06] tracking-tight transition-colors duration-300"
              style={{ letterSpacing: "-0.04em" }}
            >
              Your business gets a{" "}
              <em className="not-italic font-serif italic text-accent dark:text-accent font-normal inline-block transition-colors duration-300">
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
    </section>
  );
}
