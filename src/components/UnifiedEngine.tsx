"use client";

import React from "react";
import {
  Smartphone,
  MessageSquare,
  MapPin,
  CreditCard,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

interface CapabilityCard {
  number: string;
  tag: string;
  metric: string;
  metricSub: string;
  title: string;
  description: string;
  bullet: string;
  tiltClass: string;
  theme: {
    badge: string;
    iconBox: string;
    icon: React.ReactNode;
    metric: string;
    hoverBorder: string;
    hoverShadow: string;
    dot: string;
  };
}

const CARDS: CapabilityCard[] = [
  {
    number: "01",
    tag: "Performance",
    metric: "100% Mobile",
    metricSub: "Instant Load · Zero Lag",
    title: "Modern Business Website",
    description:
      "A custom, mobile-first website designed to showcase your services, build instant credibility, and make your brand the obvious choice in your city.",
    bullet: "Handcrafted code · Zero template lag",
    tiltClass: "-rotate-1 sm:-rotate-1.5 lg:-rotate-2 lg:translate-y-1",
    theme: {
      badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      iconBox:
        "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-200/60 dark:border-blue-500/30",
      icon: <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      metric: "text-blue-600 dark:text-blue-400",
      hoverBorder: "hover:border-blue-500/60 dark:hover:border-blue-400/60",
      hoverShadow: "hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20",
      dot: "bg-blue-500",
    },
  },
  {
    number: "02",
    tag: "Conversion",
    metric: "1-Tap Chat",
    metricSub: "Direct To Your Phone",
    title: "Instant WhatsApp Routing",
    description:
      "Customers tap once to message you directly with booking details pre-filled. No long forms, zero lost emails, and immediate client response.",
    bullet: "Direct lead alerts on your smartphone",
    tiltClass: "rotate-1 sm:rotate-2 lg:rotate-2 lg:translate-y-5",
    theme: {
      badge:
        "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      iconBox:
        "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-500/30",
      icon: (
        <MessageSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
      ),
      metric: "text-emerald-600 dark:text-emerald-400",
      hoverBorder: "hover:border-emerald-500/60 dark:hover:border-emerald-400/60",
      hoverShadow: "hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/20",
      dot: "bg-emerald-500",
    },
  },
  {
    number: "03",
    tag: "Discovery",
    metric: "Google Maps #1",
    metricSub: "Local 3-Pack Ranking",
    title: "Local Search Dominance",
    description:
      "Structured local schemas engineered so nearby customers searching for your services in your city find your business first on Google Maps and Search.",
    bullet: "Visible to high-intent local clients",
    tiltClass: "-rotate-1 sm:-rotate-1.5 lg:-rotate-1 lg:-translate-y-2",
    theme: {
      badge: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
      iconBox:
        "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-200/60 dark:border-amber-500/30",
      icon: <MapPin className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      metric: "text-amber-600 dark:text-amber-400",
      hoverBorder: "hover:border-amber-500/60 dark:hover:border-amber-400/60",
      hoverShadow: "hover:shadow-amber-500/10 dark:hover:shadow-amber-500/20",
      dot: "bg-amber-500",
    },
  },
  {
    number: "04",
    tag: "Settlement",
    metric: "0% Commission",
    metricSub: "Instant Bank Payout",
    title: "Direct UPI & Payments",
    description:
      "Accept customer payments directly into your bank account with zero platform cuts, no monthly SaaS subscriptions, and private client booking records.",
    bullet: "Money goes straight to your account",
    tiltClass: "rotate-1 sm:rotate-2 lg:rotate-2 lg:translate-y-4",
    theme: {
      badge: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
      iconBox:
        "bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border-rose-200/60 dark:border-rose-500/30",
      icon: <CreditCard className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
      metric: "text-rose-600 dark:text-rose-400",
      hoverBorder: "hover:border-rose-500/60 dark:hover:border-rose-400/60",
      hoverShadow: "hover:shadow-rose-500/10 dark:hover:shadow-rose-500/20",
      dot: "bg-rose-500",
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
        {/* Section Header: Clear, Benefit-Driven Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 pb-6 border-b border-border/40 gap-6">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-widest text-text-tertiary mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>Full-Stack Studio Deliverables</span>
            </div>
            <h2
              className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.05]"
              style={{ letterSpacing: "-0.035em" }}
            >
              What You Get In Every Build.
            </h2>
          </div>
          <p className="text-text-secondary text-sm sm:text-base max-w-md leading-relaxed font-sans">
            We don&apos;t build sites that just sit online. Every project comes with a complete, 4-part client acquisition engine ready on day one.
          </p>
        </div>

        {/* The Interactive Connected Cards Stage */}
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

          {/* 4 Clean, Vibrant, Benefit-Driven Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 relative z-10 py-4">
            {CARDS.map((card) => (
              <div
                key={card.number}
                className={`group relative cursor-pointer transform-gpu will-change-transform rounded-2xl p-6 sm:p-7 bg-bg-primary dark:bg-bg-dark-card border border-border/80 dark:border-white/10 shadow-md dark:shadow-xl shadow-black/5 ${card.tiltClass} hover:rotate-0! hover:-translate-y-3! hover:scale-[1.02] hover:z-30 ${card.theme.hoverBorder} ${card.theme.hoverShadow} hover:shadow-xl transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between min-h-[340px] sm:min-h-[360px] select-none`}
              >
                {/* Top Row: Index + Semantic Category Pill + Themed Icon */}
                <div className="flex items-center justify-between pb-4 border-b border-border/50 dark:border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold tracking-widest text-text-tertiary">
                      {card.number}
                    </span>
                    <span
                      className={`font-mono text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md border ${card.theme.badge}`}
                    >
                      {card.tag}
                    </span>
                  </div>
                  <div
                    className={`p-2.5 rounded-xl border shadow-xs transition-transform duration-300 group-hover:scale-110 ${card.theme.iconBox}`}
                  >
                    {card.theme.icon}
                  </div>
                </div>

                {/* Middle: Prominent Benefit Metric */}
                <div className="my-5">
                  <div
                    className={`font-display font-black text-2xl sm:text-[26px] tracking-tight leading-tight ${card.theme.metric}`}
                  >
                    {card.metric}
                  </div>
                  <div className="mt-1.5 font-mono text-xs text-text-tertiary flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${card.theme.dot}`} />
                    <span>{card.metricSub}</span>
                  </div>
                </div>

                {/* Bottom: Modern Bold Title & Plain-Language Client Value */}
                <div className="pt-4 border-t border-border/40">
                  <h3 className="font-sans font-bold text-lg sm:text-xl text-text-primary tracking-tight leading-snug mb-2 group-hover:text-text-primary flex items-center justify-between">
                    <span>{card.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-text-tertiary opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 ml-1" />
                  </h3>
                  <p className="text-xs sm:text-[13px] font-sans font-normal text-text-secondary leading-relaxed mb-3">
                    {card.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-text-tertiary">
                    <CheckCircle2 className="w-3.5 h-3.5 text-text-tertiary shrink-0" />
                    <span className="truncate">{card.bullet}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Understated Guarantee Line */}
          <div className="mt-10 pt-6 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-text-tertiary">
            <span>Included in every client package</span>
            <span>100% Code &amp; Asset Ownership · Zero Monthly Lock-Ins</span>
          </div>
        </div>
      </div>
    </section>
  );
}
