"use client";

import React from "react";
import {
  Smartphone,
  MessageSquare,
  MapPin,
  CreditCard,
  ArrowUpRight,
  Search,
  CheckCheck,
  Lock,
} from "lucide-react";

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
  artifact: React.ReactNode;
}

const CARDS: CapabilityCard[] = [
  {
    number: "01",
    title: "Fast Website",
    description: "Opens instantly on any phone or laptop so visitors never leave your site.",
    tiltClass: "-rotate-1 sm:-rotate-1.5 lg:-rotate-2 lg:translate-y-1",
    icon: <Smartphone className="w-5 h-5 text-accent" />,
    badge: {
      text: "Instant Load",
      style: "bg-accent text-white shadow-sm border border-white/20 -top-3 right-3 -rotate-2",
    },
    artifact: (
      <div className="rounded-xl p-3 bg-bg-secondary/70 dark:bg-neutral-900/90 border border-border/70 dark:border-white/10 shadow-xs">
        {/* Top mini browser chrome */}
        <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-border/50 dark:border-white/10">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400/80" />
            <div className="w-2 h-2 rounded-full bg-amber-400/80" />
            <div className="w-2 h-2 rounded-full bg-emerald-400/80" />
          </div>
          <div className="px-2 py-0.5 rounded-md bg-bg-primary dark:bg-neutral-800 text-[10px] font-mono text-text-tertiary border border-border/40 flex items-center gap-1">
            <Lock className="w-2.5 h-2.5 text-text-tertiary" />
            <span>yoursite.in</span>
          </div>
        </div>

        {/* Real Performance Metric */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono text-text-tertiary uppercase tracking-wider mb-0.5">
              Mobile Load
            </div>
            <div className="font-sans font-black text-2xl text-text-primary tracking-tight">
              0.38s
            </div>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
              <span>● 100</span>
              <span className="text-[10px] font-normal opacity-80">Score</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Direct WhatsApp",
    description: "Clients tap once to chat with you directly. No long or confusing forms.",
    tiltClass: "rotate-1 sm:rotate-2 lg:rotate-2 lg:translate-y-5",
    icon: <MessageSquare className="w-5 h-5 text-emerald-500" />,
    badge: {
      text: "1-Tap Chat",
      style: "bg-emerald-600 text-white shadow-sm border border-white/20 -top-3 right-3 rotate-2",
    },
    artifact: (
      <div className="rounded-xl p-3 bg-emerald-500/5 dark:bg-emerald-950/20 border border-emerald-500/20 dark:border-emerald-500/30 shadow-xs">
        {/* WhatsApp header */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-emerald-500/15">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-mono font-semibold text-emerald-700 dark:text-emerald-400">
              WhatsApp Lead
            </span>
          </div>
          <span className="text-[10px] font-mono text-text-tertiary">Just now</span>
        </div>

        {/* Client message bubble */}
        <div className="bg-bg-primary dark:bg-neutral-800/95 rounded-lg rounded-tl-xs p-2.5 border border-border/50 dark:border-white/10 shadow-xs">
          <p className="text-[11px] sm:text-xs font-sans text-text-primary leading-snug">
            &ldquo;Hi, saw your website. Can I book an appointment for tomorrow?&rdquo;
          </p>
          <div className="flex items-center justify-end gap-1 mt-1 text-[9px] font-mono text-text-tertiary">
            <span>10:42 AM</span>
            <CheckCheck className="w-3 h-3 text-blue-500 inline" />
          </div>
        </div>
      </div>
    ),
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
    artifact: (
      <div className="rounded-xl p-3 bg-blue-500/5 dark:bg-blue-950/20 border border-blue-500/20 dark:border-blue-500/30 shadow-xs">
        {/* Mini search query */}
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-bg-primary dark:bg-neutral-800 text-[10px] font-mono text-text-tertiary border border-border/40 mb-2">
          <Search className="w-3 h-3 text-blue-500 shrink-0" />
          <span className="truncate text-text-secondary">&ldquo;best service near me&rdquo;</span>
        </div>

        {/* Google 3-Pack Result */}
        <div className="bg-bg-primary dark:bg-neutral-800/95 rounded-lg p-2.5 border border-border/50 dark:border-white/10 shadow-xs">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-sans font-bold text-text-primary truncate">
              Your Business Name
            </span>
            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0 ml-1">
              #1 Local Pack
            </span>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-amber-500">
            <span>★★★★★</span>
            <span className="text-text-primary font-bold">5.0</span>
            <span className="text-text-tertiary">(140+ reviews)</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "04",
    title: "Direct Payments",
    description: "Accept UPI and card payments with money going straight into your bank account.",
    tiltClass: "rotate-1 sm:rotate-2 lg:rotate-2 lg:translate-y-4",
    icon: <CreditCard className="w-5 h-5 text-amber-500" />,
    badge: {
      text: "0% Commission",
      style: "bg-amber-600 dark:bg-[#C9A227] text-white dark:text-black shadow-sm border border-white/30 -top-3 left-3 rotate-3 font-bold",
    },
    artifact: (
      <div className="rounded-xl p-3 bg-amber-500/5 dark:bg-amber-950/20 border border-amber-500/20 dark:border-amber-500/30 shadow-xs">
        {/* Status Header */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-amber-500/15">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-[11px] font-mono font-semibold text-amber-700 dark:text-amber-400">
              Direct Bank Payout
            </span>
          </div>
          <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400">
            0% Cut
          </span>
        </div>

        {/* Transaction Chip */}
        <div className="bg-bg-primary dark:bg-neutral-800/95 rounded-lg p-2.5 border border-border/50 dark:border-white/10 shadow-xs">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-mono text-text-tertiary">UPI / Card Settlement</div>
              <div className="font-sans font-black text-lg sm:text-xl text-text-primary leading-tight">
                +₹4,500.00
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono font-medium text-emerald-600 dark:text-emerald-400 block">
                ✓ Credited
              </span>
              <span className="text-[9px] font-mono text-text-tertiary">Instant payout</span>
            </div>
          </div>
        </div>
      </div>
    ),
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
              viewBox="0 0 1200 480"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M -20,240 C 140,160 240,320 380,270 C 520,220 620,340 760,250 C 900,170 1020,320 1240,240"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="text-border-dark dark:text-white/20 opacity-70"
              />
            </svg>
          </div>

          {/* 4 Clean, Balanced Cards with Real Product Proof Artifacts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 relative z-10 py-4">
            {CARDS.map((card) => (
              <div
                key={card.number}
                className={`group relative cursor-pointer transform-gpu will-change-transform rounded-2xl p-5 sm:p-6 bg-bg-primary dark:bg-bg-dark-card border border-border/80 dark:border-white/10 shadow-md dark:shadow-xl shadow-black/5 ${card.tiltClass} hover:rotate-0! hover:-translate-y-3! hover:scale-[1.02] hover:z-30 hover:border-accent/60 dark:hover:border-accent/60 hover:shadow-xl hover:shadow-accent/10 dark:hover:shadow-accent/20 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between min-h-[350px] sm:min-h-[370px] select-none`}
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
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold tracking-widest text-text-tertiary group-hover:text-accent transition-colors duration-300">
                    {card.number}
                  </span>
                  <div className="p-2.5 rounded-xl bg-bg-secondary dark:bg-neutral-800/80 border border-border/70 group-hover:border-accent/40 shadow-xs transition-colors duration-300">
                    {card.icon}
                  </div>
                </div>

                {/* Middle: Tangible Product Proof Artifact */}
                <div className="my-auto py-2">{card.artifact}</div>

                {/* Bottom: Modern Bold Sans Title & 1 Everyday Sentence */}
                <div className="mt-4 pt-3 border-t border-border/40">
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-text-primary tracking-tight leading-snug mb-1.5 group-hover:text-accent transition-colors duration-300 flex items-center justify-between">
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
