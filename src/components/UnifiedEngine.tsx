"use client";

import React from "react";
import { Smartphone, MessageSquare, MapPin, CreditCard, ArrowUpRight } from "lucide-react";

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
    title: "Fast Website",
    description: "Opens instantly on any phone or laptop so visitors never leave your site.",
    tiltClass: "-rotate-1 sm:-rotate-2 lg:-rotate-2 lg:translate-y-1",
    icon: <Smartphone className="w-5 h-5 text-accent" />,
    badge: {
      text: "Instant Load",
      style: "bg-accent text-white shadow-sm border border-white/20 -top-3 right-3 -rotate-2",
    },
  },
  {
    number: "02",
    title: "Direct WhatsApp",
    description: "Clients tap once to chat with you directly. No long or confusing forms.",
    tiltClass: "rotate-1.5 sm:rotate-2 lg:rotate-2 lg:translate-y-5",
    icon: <MessageSquare className="w-5 h-5 text-emerald-500" />,
    badge: {
      text: "1-Tap Chat",
      style: "bg-emerald-600 text-white shadow-sm border border-white/20 -top-3 right-3 rotate-2",
    },
  },
  {
    number: "03",
    title: "Google Search & Maps",
    description: "Nearby customers find your business first when searching in your city.",
    tiltClass: "-rotate-1 sm:-rotate-1.5 lg:-rotate-1 lg:-translate-y-2",
    icon: <MapPin className="w-5 h-5 text-blue-500" />,
    badge: {
      text: "Top Ranking",
      style: "bg-blue-600 text-white shadow-sm border border-white/20 -top-3 right-3 -rotate-1",
    },
  },
  {
    number: "04",
    title: "Direct Payments",
    description: "Accept UPI and card payments with money going straight into your bank account.",
    tiltClass: "rotate-1.5 sm:rotate-2 lg:rotate-2 lg:translate-y-4",
    icon: <CreditCard className="w-5 h-5 text-amber-500" />,
    badge: {
      text: "0% Commission",
      style: "bg-amber-600 dark:bg-[#C9A227] text-white dark:text-black shadow-sm border border-white/30 -top-3 left-3 rotate-3 font-bold",
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
            Everything your business needs to get found, answer clients, and receive payments online—built under one roof.
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
              viewBox="0 0 1200 380"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M -20,180 C 140,120 240,260 380,220 C 520,180 620,280 760,200 C 900,130 1020,260 1240,180"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="text-border-dark dark:text-white/20 opacity-70"
              />
            </svg>
          </div>

          {/* 4 Clean, Balanced Cards (Proper Sans Font, Zero Jargon, No Dead Void) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 relative z-10 py-4">
            {CARDS.map((card) => (
              <div
                key={card.number}
                className={`group relative cursor-pointer transform-gpu will-change-transform rounded-2xl p-6 sm:p-7 bg-bg-primary dark:bg-bg-dark-card border border-border/80 dark:border-white/10 shadow-md dark:shadow-xl shadow-black/5 ${card.tiltClass} hover:rotate-0! hover:-translate-y-4! hover:scale-[1.03] hover:z-30 hover:border-accent/60 dark:hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10 dark:hover:shadow-accent/20 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between min-h-[260px] sm:min-h-[280px] select-none`}
              >
                {/* Floating Brand Badge */}
                {card.badge && (
                  <div
                    className={`absolute z-20 px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider select-none transition-transform duration-300 group-hover:scale-105 ${card.badge.style}`}
                  >
                    {card.badge.text}
                  </div>
                )}

                {/* Top: Numeral Index + Clean Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs font-bold tracking-widest text-text-tertiary group-hover:text-accent transition-colors duration-300">
                    {card.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-bg-secondary dark:bg-neutral-800/80 border border-border/70 group-hover:border-accent/40 shadow-xs transition-colors duration-300">
                    {card.icon}
                  </div>
                </div>

                {/* Bottom: Modern Bold Sans Title & 1 Everyday Sentence (Zero Jargon) */}
                <div>
                  <h3 className="font-sans font-bold text-xl text-text-primary tracking-tight leading-snug mb-2 group-hover:text-accent transition-colors duration-300 flex items-center justify-between">
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
          <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-text-tertiary">
            <span>Built into every flagship</span>
            <span>100% Code & Asset Ownership</span>
          </div>

        </div>
      </div>
    </section>
  );
}
