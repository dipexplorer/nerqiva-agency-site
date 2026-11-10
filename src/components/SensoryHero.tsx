"use client";

import React from "react";
import { ArrowDown, ArrowUpRight, MessageCircle } from "lucide-react";
import AnfalovaHeroGallery from "./AnfalovaHeroGallery";

export default function SensoryHero() {
  return (
    <section
      id="hero"
      className="intro-hero relative w-full max-w-full overflow-hidden select-none bg-bg-primary dark:bg-[#09090b] transition-colors duration-300"
    >
      <div className="flex flex-col justify-between w-full min-h-[100svh] sm:h-[100dvh] sm:min-h-[640px] sm:max-h-[960px]">
        
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

        {/* ── Project Gallery Strip (Unified Liquid Glass WebGL Carousel) ── */}
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
                  <MessageCircle size={15} className="shrink-0" />
                  <span>Start on WhatsApp</span>
                  <ArrowUpRight size={14} className="shrink-0" />
                </a>

                <a
                  href="#flagships"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-mono font-semibold text-text-primary dark:text-white/70 border border-border-dark dark:border-white/15 rounded-full hover:border-accent hover:text-accent dark:hover:border-white/35 dark:hover:text-white transition-all duration-200 cursor-pointer select-none bg-bg-card/70 dark:bg-white/5 text-center"
                >
                  <span>See Our Work</span>
                  <ArrowDown size={14} className="shrink-0" />
                </a>
              </div>

              <p className="font-mono text-[10.5px] sm:text-[11px] text-text-tertiary dark:text-white/40 tracking-wide transition-colors duration-300 text-center sm:text-left lg:text-right w-full pt-1">
                Guwahati · Transparent Sprints · You own 100% of the code
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
