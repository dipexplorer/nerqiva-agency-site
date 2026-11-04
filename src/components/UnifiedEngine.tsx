"use client";

import React from "react";
import {
  Smartphone,
  MessageSquare,
  MapPin,
  CreditCard,
  ArrowUpRight,
  Zap,
} from "lucide-react";

interface CapabilityCard {
  number: string;
  metric: string;
  metricLabel: string;
  title: string;
  description: string;
  tiltClass: string;
  icon: React.ReactNode;
  tag: string;
}

const CARDS: CapabilityCard[] = [
  {
    number: "01",
    tag: "Architecture",
    metric: "0.4s",
    metricLabel: "Sub-Second Load",
    title: "Ultra-Fast Website",
    description:
      "Handcrafted frontend built to load instantly on any phone or laptop. Zero lag, zero template bloat, and 100% reliable.",
    tiltClass: "-rotate-1 sm:-rotate-1.5 lg:-rotate-2 lg:translate-y-1",
    icon: <Smartphone className="w-5 h-5 text-text-primary" />,
  },
  {
    number: "02",
    tag: "Conversion",
    metric: "1-Tap",
    metricLabel: "Direct Capture",
    title: "Instant WhatsApp Routing",
    description:
      "Customers tap once to message you directly with booking details pre-filled. No confusing forms or lost inquiries.",
    tiltClass: "rotate-1 sm:rotate-2 lg:rotate-2 lg:translate-y-5",
    icon: <MessageSquare className="w-5 h-5 text-text-primary" />,
  },
  {
    number: "03",
    tag: "Discovery",
    metric: "#1 Rank",
    metricLabel: "Local 3-Pack",
    title: "Google Maps & Search",
    description:
      "Structured local rankings so nearby customers searching for your services find your business first in your city.",
    tiltClass: "-rotate-1 sm:-rotate-1.5 lg:-rotate-1 lg:-translate-y-2",
    icon: <MapPin className="w-5 h-5 text-text-primary" />,
  },
  {
    number: "04",
    tag: "Settlement",
    metric: "0% Cut",
    metricLabel: "Direct Payout",
    title: "Direct UPI & Payments",
    description:
      "Accept client payments straight into your bank account with zero middleman commissions and private client booking records.",
    tiltClass: "rotate-1 sm:rotate-2 lg:rotate-2 lg:translate-y-4",
    icon: <CreditCard className="w-5 h-5 text-text-primary" />,
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 pb-6 border-b border-border/40 gap-6">
          <div className="max-w-2xl">
            <h2
              className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.05]"
              style={{ letterSpacing: "-0.035em" }}
            >
              Built into every flagship.
            </h2>
          </div>
          <p className="text-text-secondary text-sm sm:text-base max-w-md leading-relaxed font-sans">
            Websites, WhatsApp client capture, local search ranking, and direct checkout engineered under one roof.
          </p>
        </div>

        {/* The Seamless Interactive Flow Stage */}
        <div className="relative pt-4 pb-8">
          {/* Continuous Flowing Architectural Guide Line */}
          <div
            className="hidden lg:block absolute inset-0 pointer-events-none select-none z-0"
            aria-hidden="true"
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 420"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M -20,210 C 140,140 240,290 380,240 C 520,190 620,310 760,220 C 900,150 1020,280 1240,210"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="6 6"
                className="text-border-dark dark:text-white/15 opacity-60"
              />
            </svg>
          </div>

          {/* 4 Clean, Unified Cards (Strict Single Palette, High-Agency Craft) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 relative z-10 py-4">
            {CARDS.map((card) => (
              <div
                key={card.number}
                className={`group relative cursor-pointer transform-gpu will-change-transform rounded-2xl p-6 sm:p-7 bg-bg-primary dark:bg-bg-dark-card border border-border/80 dark:border-white/10 shadow-md dark:shadow-xl shadow-black/5 ${card.tiltClass} hover:rotate-0! hover:-translate-y-3! hover:scale-[1.02] hover:z-30 hover:border-accent/60 dark:hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10 dark:hover:shadow-accent/20 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between min-h-[300px] sm:min-h-[320px] select-none`}
              >
                {/* Top Row: Numeral + Category Tag + Clean Monochromatic Icon */}
                <div className="flex items-center justify-between pb-4 border-b border-border/50 dark:border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold tracking-widest text-text-tertiary group-hover:text-accent transition-colors duration-300">
                      {card.number}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary/80">
                      / {card.tag}
                    </span>
                  </div>
                  <div className="p-2 rounded-xl bg-bg-secondary dark:bg-neutral-800/80 border border-border/70 group-hover:border-accent/40 shadow-xs transition-colors duration-300">
                    {card.icon}
                  </div>
                </div>

                {/* Middle: Prominent Architectural Metric Anchor */}
                <div className="my-5 py-1">
                  <div className="font-display font-black text-3xl sm:text-4xl text-text-primary tracking-tight leading-none group-hover:text-accent transition-colors duration-300">
                    {card.metric}
                  </div>
                  <div className="mt-1.5 font-mono text-xs text-text-tertiary flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/80 dark:bg-accent-light" />
                    <span>{card.metricLabel}</span>
                  </div>
                </div>

                {/* Bottom: Modern Bold Sans Title & Factual Human Copy */}
                <div className="pt-4 border-t border-border/40">
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-text-primary tracking-tight leading-snug mb-2 group-hover:text-accent transition-colors duration-300 flex items-center justify-between">
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

          {/* Understated Guarantee Line */}
          <div className="mt-10 pt-6 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-text-tertiary">
            <span>Built into every flagship</span>
            <span>100% Code & Asset Ownership</span>
          </div>
        </div>
      </div>
    </section>
  );
}
