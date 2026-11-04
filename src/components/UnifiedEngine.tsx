"use client";

import React from "react";

interface CapabilityCard {
  number: string;
  title: string;
  description: string;
  tiltClass: string;
  badge?: {
    text: string;
    style: string;
  };
}

const CARDS: CapabilityCard[] = [
  {
    number: "01",
    title: "SPEED",
    description: "Handcrafted Next.js frontend with 0.4s load. Zero WordPress lag, zero plugin bloat.",
    tiltClass: "-rotate-2 sm:-rotate-3 lg:-rotate-3 lg:translate-y-2",
    badge: {
      text: "0.4s Fast",
      style: "bg-accent text-white shadow-lg border border-white/20 -top-3.5 right-3 -rotate-3",
    },
  },
  {
    number: "02",
    title: "WHATSAPP",
    description: "Visitors tap once and land directly in your WhatsApp with booking details pre-filled.",
    tiltClass: "rotate-2 sm:rotate-3 lg:rotate-3 lg:translate-y-8",
    badge: {
      text: "1-Tap Lead",
      style: "bg-emerald-600 text-white shadow-lg border border-white/20 -top-3.5 right-3 rotate-3",
    },
  },
  {
    number: "03",
    title: "DISCOVERY",
    description: "Structured local schemas built so nearby customers find your business first on Google Maps.",
    tiltClass: "-rotate-1 sm:-rotate-2 lg:-rotate-2 lg:-translate-y-3",
    badge: {
      text: "#1 Maps",
      style: "bg-blue-600 text-white shadow-lg border border-white/20 -top-3.5 right-3 -rotate-2",
    },
  },
  {
    number: "04",
    title: "SETTLEMENT",
    description: "Direct client payments into your bank account with private booking records and 0% cut.",
    tiltClass: "rotate-2 sm:rotate-3 lg:rotate-3 lg:translate-y-6",
    badge: {
      text: "0% Commission",
      style: "bg-amber-600 dark:bg-[#C9A227] text-white dark:text-black shadow-lg border border-white/30 -top-3.5 left-3 rotate-4 font-black",
    },
  },
];

export default function UnifiedEngine() {
  return (
    <section
      id="systems"
      className="py-20 sm:py-28 bg-transparent border-t border-border/40 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        {/* Section Header: Pure Typographic Authority */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 pb-6 border-b border-border/40 gap-6">
          <div className="max-w-2xl">
            <h2
              className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.05]"
              style={{ letterSpacing: "-0.035em" }}
            >
              Built into every flagship.
            </h2>
          </div>
          <p className="text-text-secondary text-sm sm:text-base max-w-md leading-relaxed font-sans">
            Websites, WhatsApp client capture, local search ranking, and payment checkout engineered under one roof as a connected pipeline.
          </p>
        </div>

        {/* The Seamless Interactive Flow Stage */}
        <div className="relative pt-6 pb-12">
          
          {/* Continuous Flowing Architectural Line SVG */}
          <div
            className="hidden lg:block absolute inset-0 pointer-events-none select-none z-0"
            aria-hidden="true"
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 480"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M -20,200 C 140,130 240,310 380,260 C 520,210 620,330 760,230 C 900,140 1020,320 1240,210"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="8 8"
                className="text-border-dark dark:text-white/20 opacity-70"
              />
            </svg>
          </div>

          {/* Sparkling 4-Point Star (In Brand Accent Color) */}
          <div
            className="hidden lg:flex absolute top-[44%] left-[49%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none select-none items-center justify-center"
            aria-hidden="true"
          >
            <div className="relative w-8 h-8 animate-pulse text-accent">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-md">
                <path
                  d="M 50 0 C 50 35 65 50 100 50 C 65 50 50 65 50 100 C 50 65 35 50 0 50 C 35 50 50 35 50 0 Z"
                  fill="currentColor"
                  stroke="var(--bg-primary)"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* 4 Tactile, Hand-Tilted Playing Cards Grid (Harmonious with Light & Dark Theme) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8 relative z-10 py-6">
            {CARDS.map((card) => (
              <div
                key={card.number}
                className={`group relative cursor-pointer transform-gpu will-change-transform rounded-3xl p-6 sm:p-7 bg-bg-primary dark:bg-bg-dark-card border border-border/80 dark:border-white/10 shadow-lg dark:shadow-2xl shadow-black/5 ${card.tiltClass} hover:rotate-0! hover:-translate-y-6! hover:scale-[1.05] hover:z-30 hover:border-accent/60 dark:hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/10 dark:hover:shadow-accent/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between min-h-[340px] sm:min-h-[380px] select-none`}
              >
                {/* Floating Glossy Brand Sticker */}
                {card.badge && (
                  <div
                    className={`absolute z-20 px-3.5 py-1.5 rounded-full font-mono text-[10.5px] font-bold uppercase tracking-wider select-none transition-transform duration-300 group-hover:scale-110 ${card.badge.style}`}
                  >
                    {card.badge.text}
                  </div>
                )}

                {/* Top: Numeral Index */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tracking-widest text-text-tertiary group-hover:text-accent transition-colors duration-300">
                    {card.number}
                  </span>
                </div>

                {/* Generous Breathing Space (Tactile Playing Card Feel) */}
                <div className="flex-1" />

                {/* Bottom: Bold Display Title & Crisp Description */}
                <div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-text-primary tracking-tight leading-none mb-3 group-hover:text-accent transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] font-sans font-normal text-text-secondary leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Understated Bottom Guarantee Line */}
          <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-text-tertiary">
            <span>Continuous Client Pipeline</span>
            <span>100% Code & Asset Ownership</span>
          </div>

        </div>
      </div>
    </section>
  );
}
