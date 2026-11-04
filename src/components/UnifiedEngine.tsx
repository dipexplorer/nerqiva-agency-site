"use client";

import React from "react";
import { Laptop, MessageSquare, Search, CreditCard, ArrowUpRight } from "lucide-react";

interface CapabilityCard {
  number: string;
  title: string;
  description: string;
  tiltClass: string;
  icon: React.ReactNode;
  badge: {
    text: string;
    style: string;
  };
}

const CARDS: CapabilityCard[] = [
  {
    number: "01",
    title: "Flagship Web Systems",
    description: "High-converting, revenue-ready websites with live analytics and instant lead notifications.",
    tiltClass: "-rotate-2 sm:-rotate-3 lg:-rotate-3 lg:translate-y-2",
    icon: <Laptop className="w-5 h-5 text-accent" />,
    badge: {
      text: "0.4s Fast",
      style: "bg-accent text-white shadow-md border border-white/20 -top-3 right-3 -rotate-3",
    },
  },
  {
    number: "02",
    title: "WhatsApp & AI Receptionist",
    description: "1-click WhatsApp customer routing, automated email alerts, and 24/7 AI calling receptionist.",
    tiltClass: "rotate-2 sm:rotate-3 lg:rotate-3 lg:translate-y-7",
    icon: <MessageSquare className="w-5 h-5 text-emerald-500" />,
    badge: {
      text: "1-Tap Lead",
      style: "bg-emerald-600 text-white shadow-md border border-white/20 -top-3 right-3 rotate-3",
    },
  },
  {
    number: "03",
    title: "SEO & Google Maps #1",
    description: "Google Maps top ranking, local SEO, and AI engine discovery so nearby clients find you first.",
    tiltClass: "-rotate-1 sm:-rotate-2 lg:-rotate-2 lg:-translate-y-2",
    icon: <Search className="w-5 h-5 text-blue-500" />,
    badge: {
      text: "#1 Maps",
      style: "bg-blue-600 text-white shadow-md border border-white/20 -top-3 right-3 -rotate-2",
    },
  },
  {
    number: "04",
    title: "Instant Payments & Portals",
    description: "Direct UPI and card settlements straight into your bank account with zero platform commissions.",
    tiltClass: "rotate-2 sm:rotate-3 lg:rotate-3 lg:translate-y-5",
    icon: <CreditCard className="w-5 h-5 text-amber-500" />,
    badge: {
      text: "0% Commission",
      style: "bg-amber-600 dark:bg-[#C9A227] text-white dark:text-black shadow-md border border-white/30 -top-3 left-3 rotate-4 font-bold",
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
            Websites, WhatsApp client routing, AI receptionists, local search, and payments engineered as one synchronized growth engine.
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

          {/* 4 Tactile, Hand-Tilted Playing Cards Grid (Clean, Open, Zero AI Slop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-8 relative z-10 py-6">
            {CARDS.map((card) => (
              <div
                key={card.number}
                className={`group relative cursor-pointer transform-gpu will-change-transform rounded-3xl p-6 sm:p-7 bg-bg-primary dark:bg-bg-dark-card border border-border/80 dark:border-white/10 shadow-lg dark:shadow-2xl shadow-black/5 ${card.tiltClass} hover:rotate-0! hover:-translate-y-6! hover:scale-[1.04] hover:z-30 hover:border-accent/60 dark:hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/10 dark:hover:shadow-accent/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between min-h-[320px] sm:min-h-[360px] select-none`}
              >
                {/* Floating Glossy Brand Sticker */}
                {card.badge && (
                  <div
                    className={`absolute z-20 px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider select-none transition-transform duration-300 group-hover:scale-110 ${card.badge.style}`}
                  >
                    {card.badge.text}
                  </div>
                )}

                {/* Top: Numeral Index + Clean Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tracking-widest text-text-tertiary group-hover:text-accent transition-colors duration-300">
                    {card.number}
                  </span>
                  <div className="p-2.5 rounded-2xl bg-bg-secondary dark:bg-neutral-800/80 border border-border/70 group-hover:border-accent/40 shadow-xs transition-colors duration-300">
                    {card.icon}
                  </div>
                </div>

                {/* Generous Breathing Space (Tactile Playing Card Feel — No Nested Boxes) */}
                <div className="flex-1" />

                {/* Bottom: Bold Display Title & Crisp 1-Line Outcome */}
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary tracking-tight leading-tight mb-2.5 group-hover:text-accent transition-colors duration-300 flex items-center justify-between">
                    <span>{card.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-text-tertiary opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 ml-1" />
                  </h3>
                  <p className="text-xs sm:text-[13px] font-sans font-normal text-text-secondary leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Understated Bottom Guarantee Line */}
          <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-text-tertiary">
            <span>Continuous Client Acquisition Pipeline</span>
            <span>100% Code & Asset Ownership</span>
          </div>

        </div>
      </div>
    </section>
  );
}
