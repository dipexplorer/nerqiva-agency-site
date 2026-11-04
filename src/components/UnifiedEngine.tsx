"use client";

import React from "react";
import { ArrowUpRight, Zap, MessageSquare, MapPin, CreditCard } from "lucide-react";

interface Capability {
  number: string;
  category: string;
  title: string;
  description: string;
  metric: string;
  tiltClass: string;
  accentColor: string;
  icon: React.ReactNode;
}

const CAPABILITIES: Capability[] = [
  {
    number: "01",
    category: "Architecture",
    title: "Sub-Second Mobile Speed",
    description:
      "Handcrafted frontend engineered for instant 0.4s mobile loads. Zero WordPress lag, zero plugin bloat.",
    metric: "0.4s Fast · 99+ Lighthouse",
    tiltClass: "-rotate-1 sm:-rotate-2 lg:translate-y-2",
    accentColor: "group-hover:border-blue-500/50 group-hover:shadow-blue-500/10",
    icon: <Zap className="w-4 h-4 text-blue-500" />,
  },
  {
    number: "02",
    category: "Conversion",
    title: "Instant WhatsApp Routing",
    description:
      "Visitors tap once and land directly in your WhatsApp with booking details pre-filled. No forms lost in spam.",
    metric: "< 60s Lead Alert · Zero Drop-off",
    tiltClass: "rotate-1.5 sm:rotate-2 lg:-translate-y-4",
    accentColor: "group-hover:border-emerald-500/50 group-hover:shadow-emerald-500/10",
    icon: <MessageSquare className="w-4 h-4 text-emerald-500" />,
  },
  {
    number: "03",
    category: "Discovery",
    title: "Google Maps #1 Ranking",
    description:
      "Structured local schemas built so nearby customers find your business first on Google Maps and search.",
    metric: "Top 3-Pack · SEO & AEO Ready",
    tiltClass: "-rotate-1 sm:-rotate-1.5 lg:translate-y-3",
    accentColor: "group-hover:border-amber-500/50 group-hover:shadow-amber-500/10",
    icon: <MapPin className="w-4 h-4 text-amber-500" />,
  },
  {
    number: "04",
    category: "Settlement",
    title: "Direct UPI & Card Portals",
    description:
      "Client payments land straight into your bank account with private booking records and zero platform cuts.",
    metric: "0% Commission · Instant Settlement",
    tiltClass: "rotate-1 sm:rotate-1.5 lg:-translate-y-2",
    accentColor: "group-hover:border-purple-500/50 group-hover:shadow-purple-500/10",
    icon: <CreditCard className="w-4 h-4 text-purple-500" />,
  },
];

export default function UnifiedEngine() {
  return (
    <section
      id="systems"
      className="py-24 sm:py-32 bg-transparent border-t border-border/40 relative overflow-hidden"
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

        {/* Interactive Staggered Flow Stage */}
        <div className="relative">
          {/* Subtle Directional Background Connector Arrow (Flows across the 4 systems) */}
          <div
            className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 h-24 pointer-events-none select-none z-0 overflow-visible"
            aria-hidden="true"
          >
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1100 100"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <marker
                  id="flowArrow"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--accent)" opacity="0.6" />
                </marker>
                <linearGradient id="connectorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.1" />
                  <stop offset="30%" stopColor="var(--accent)" stopOpacity="0.45" />
                  <stop offset="70%" stopColor="var(--accent)" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M 50,55 C 280,25 380,85 580,45 C 750,15 880,75 1060,50"
                stroke="url(#connectorGradient)"
                strokeWidth="2"
                strokeDasharray="6 6"
                markerEnd="url(#flowArrow)"
              />
            </svg>
          </div>

          {/* 4 Asymmetric, Tilted Interactive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 relative z-10 pt-4 pb-8">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.number}
                className={`group relative cursor-pointer transform-gpu will-change-transform rounded-2xl p-6 sm:p-7 bg-bg-primary/95 dark:bg-[#0c0c10]/95 backdrop-blur-xl border border-border/80 shadow-md ${cap.tiltClass} hover:!rotate-0 hover:!-translate-y-4 hover:scale-[1.04] hover:z-30 hover:shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${cap.accentColor} flex flex-col justify-between`}
              >
                {/* Glowing Ambient Halo on Hover */}
                <span
                  className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent/15 via-transparent to-accent/15 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 -z-10 pointer-events-none"
                  aria-hidden="true"
                />

                <div>
                  {/* Top Header: Index + Micro Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-3xl sm:text-4xl text-text-tertiary/50 dark:text-text-tertiary/30 group-hover:text-accent transition-colors duration-300">
                      {cap.number}
                    </span>
                    <div className="p-2 rounded-xl bg-bg-secondary dark:bg-neutral-800/80 border border-border/70 group-hover:border-accent/40 shadow-xs transition-colors duration-300">
                      {cap.icon}
                    </div>
                  </div>

                  {/* Category Pill */}
                  <div className="mb-2">
                    <span className="font-mono text-[10.5px] font-bold tracking-widest text-text-tertiary uppercase">
                      {cap.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg sm:text-xl text-text-primary mb-2.5 tracking-tight group-hover:text-accent transition-colors duration-300 flex items-center justify-between">
                    <span>{cap.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-text-tertiary opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 ml-1" />
                  </h3>

                  {/* Human, Punchy Description (No Dev Jargon) */}
                  <p className="text-text-secondary text-xs sm:text-[13.5px] leading-relaxed font-sans mb-6">
                    {cap.description}
                  </p>
                </div>

                {/* Bottom Metric Pill */}
                <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                  <span className="font-mono text-[11px] font-semibold text-text-primary dark:text-white/90">
                    {cap.metric}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-accent/40 group-hover:bg-accent animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
