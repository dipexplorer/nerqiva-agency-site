"use client";

import React from "react";

interface CapabilityCard {
  number: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  subtextColor: string;
  numeralColor: string;
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
    bgColor: "bg-[#a6ff00]",
    textColor: "text-black",
    subtextColor: "text-black/80",
    numeralColor: "text-black/50",
    tiltClass: "-rotate-2 sm:-rotate-3 lg:-rotate-4 lg:translate-y-2",
    badge: {
      text: "0.4s Fast",
      style: "bg-linear-to-r from-[#ff3b30] to-[#ff9500] text-white border-2 border-white shadow-xl -top-3.5 right-2 -rotate-3",
    },
  },
  {
    number: "02",
    title: "WHATSAPP",
    description: "Visitors tap once and land directly in your WhatsApp with booking details pre-filled.",
    bgColor: "bg-[#ff2a85]",
    textColor: "text-white",
    subtextColor: "text-white/90",
    numeralColor: "text-white/60",
    tiltClass: "rotate-2 sm:rotate-3 lg:rotate-3 lg:translate-y-8",
  },
  {
    number: "03",
    title: "DISCOVERY",
    description: "Structured local schemas built so nearby customers find your business first on Google Maps.",
    bgColor: "bg-[#4361ee]",
    textColor: "text-white",
    subtextColor: "text-white/90",
    numeralColor: "text-white/60",
    tiltClass: "-rotate-1 sm:-rotate-2 lg:-rotate-2 lg:-translate-y-3",
  },
  {
    number: "04",
    title: "SETTLEMENT",
    description: "Direct client payments into your bank account with private booking records and 0% cut.",
    bgColor: "bg-[#ff4500]",
    textColor: "text-white",
    subtextColor: "text-white/90",
    numeralColor: "text-white/60",
    tiltClass: "rotate-2 sm:rotate-3 lg:rotate-4 lg:translate-y-6",
    badge: {
      text: "0% Commission",
      style: "bg-linear-to-r from-[#3b82f6] via-[#8b5cf6] to-[#ec4899] text-white border-2 border-white shadow-xl -top-3.5 left-2 rotate-6",
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
        {/* Section Header: Pure Editorial Typographic Authority */}
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
            Websites, WhatsApp client capture, local search ranking, and payment checkout engineered under one roof as a continuous client acquisition pipeline.
          </p>
        </div>

        {/* The Dark Curated Stage (Apple / Awwwards tactile canvas) */}
        <div className="relative rounded-3xl p-6 sm:p-10 lg:p-16 bg-[#070709] border border-white/10 shadow-2xl overflow-hidden">
          
          {/* Continuous Flowing White Ribbon/Wire SVG */}
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
                d="M -20,180 C 140,110 240,290 380,240 C 520,190 620,310 760,210 C 900,120 1020,300 1240,190"
                stroke="white"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-90 drop-shadow-[0_4px_12px_rgba(255,255,255,0.4)]"
              />
            </svg>
          </div>

          {/* Sparkling 4-Point Star Element (Tactile sticker floating between cards 02 and 03) */}
          <div
            className="hidden lg:flex absolute top-[44%] left-[48%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none select-none items-center justify-center"
            aria-hidden="true"
          >
            <div className="relative w-12 h-12 animate-pulse">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-[0_0_15px_rgba(166,255,0,0.8)]">
                <path
                  d="M 50 0 C 50 35 65 50 100 50 C 65 50 50 65 50 100 C 50 65 35 50 0 50 C 35 50 50 35 50 0 Z"
                  fill="#a6ff00"
                  stroke="#ffffff"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* 4 Tactile, Hand-Tilted Playing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8 relative z-10 py-6">
            {CARDS.map((card) => (
              <div
                key={card.number}
                className={`group relative cursor-pointer transform-gpu will-change-transform rounded-3xl p-6 sm:p-7 ${card.bgColor} ${card.textColor} shadow-2xl ${card.tiltClass} hover:rotate-0! hover:-translate-y-6! hover:scale-[1.06] hover:z-30 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between min-h-[360px] sm:min-h-[400px] select-none`}
              >
                {/* Floating Glossy 3D Sticker Badge */}
                {card.badge && (
                  <div
                    className={`absolute z-20 px-3.5 py-1.5 rounded-full font-mono text-[10.5px] font-black uppercase tracking-wider backdrop-blur-md select-none transition-transform duration-300 group-hover:scale-110 ${card.badge.style}`}
                  >
                    {card.badge.text}
                  </div>
                )}

                {/* Top: Small Number Index */}
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-sm font-bold tracking-widest ${card.numeralColor}`}>
                    {card.number}
                  </span>
                </div>

                {/* Generous Vibrant Empty Canvas (Letting the color and craft breathe) */}
                <div className="flex-1" />

                {/* Bottom: Massive Punchy Title & 2-Line High-Contrast Description */}
                <div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-none mb-3">
                    {card.title}
                  </h3>
                  <p className={`text-xs sm:text-[13px] font-sans font-medium leading-relaxed ${card.subtextColor}`}>
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Ambient Subtitle Reassurance */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-white/50 relative z-10">
            <span>Continuous Client Pipeline</span>
            <span>100% Code & Asset Ownership</span>
          </div>

        </div>
      </div>
    </section>
  );
}
