"use client";

import React from "react";
import {
  Smartphone,
  MessageSquare,
  MapPin,
  CreditCard,
} from "lucide-react";

interface DeliverableCard {
  number: string;
  metric: string;
  title: string;
  description: string;
  theme: {
    iconBox: string;
    icon: React.ReactNode;
    metricColor: string;
    hoverBorder: string;
  };
}

const DELIVERABLES: DeliverableCard[] = [
  {
    number: "01",
    metric: "100% Mobile Ready",
    title: "High-Converting Website",
    description: "Loads instantly on smartphones to turn local visitors into paying clients.",
    theme: {
      iconBox:
        "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />,
      metricColor: "text-blue-600 dark:text-blue-400",
      hoverBorder: "hover:border-blue-500/50 dark:hover:border-blue-400/50",
    },
  },
  {
    number: "02",
    metric: "1-Tap Direct Leads",
    title: "Instant WhatsApp Routing",
    description: "Inquiries land straight on your phone with zero lost forms or delay.",
    theme: {
      iconBox:
        "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      icon: <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400" />,
      metricColor: "text-emerald-600 dark:text-emerald-400",
      hoverBorder: "hover:border-emerald-500/50 dark:hover:border-emerald-400/50",
    },
  },
  {
    number: "03",
    metric: "#1 Local 3-Pack",
    title: "Google Maps Ranking",
    description: "Rank at the top when nearby customers search for your services in your city.",
    theme: {
      iconBox:
        "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 dark:text-amber-400" />,
      metricColor: "text-amber-600 dark:text-amber-400",
      hoverBorder: "hover:border-amber-500/50 dark:hover:border-amber-400/50",
    },
  },
  {
    number: "04",
    metric: "0% Commission Cut",
    title: "Direct UPI & Payments",
    description: "Customer payments go straight to your bank account with zero middleman fees.",
    theme: {
      iconBox:
        "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
      icon: <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-rose-600 dark:text-rose-400" />,
      metricColor: "text-rose-600 dark:text-rose-400",
      hoverBorder: "hover:border-rose-500/50 dark:hover:border-rose-400/50",
    },
  },
];

export default function UnifiedEngine() {
  return (
    <section
      id="systems"
      className="scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-20 lg:py-24 bg-transparent border-t border-border/40 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        {/* Section Header: Pure Typographic Authority */}
        <div className="mb-6 sm:mb-12 lg:mb-16 pb-4 sm:pb-6 border-b border-border/40 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <h2
            className="font-display font-black text-2xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.05]"
            style={{ letterSpacing: "-0.035em" }}
          >
            What You Get In Every Build.
          </h2>
          <span className="text-[11px] sm:text-xs font-mono text-text-tertiary">
            4 Core Studio Deliverables
          </span>
        </div>

        {/* 2x2 Bento Matrix on Mobile, 4-Column Architectural Grid on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 items-stretch">
          {DELIVERABLES.map((item) => (
            <div
              key={item.number}
              className={`group relative rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-7 bg-bg-primary border border-border/60 dark:border-white/10 dark:bg-bg-primary/90 shadow-xs hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full ${item.theme.hoverBorder}`}
            >
              <div>
                {/* Top Row: Clean Themed Icon Box + Subtle Index */}
                <div className="flex items-center justify-between mb-3 sm:mb-6">
                  <div
                    className={`p-2 sm:p-2.5 rounded-lg sm:rounded-xl border shadow-xs transition-transform duration-300 group-hover:scale-105 ${item.theme.iconBox}`}
                  >
                    {item.theme.icon}
                  </div>
                  <span className="font-mono text-[10px] sm:text-xs font-semibold text-text-tertiary">
                    {item.number}
                  </span>
                </div>

                {/* Hero Metric */}
                <div
                  className={`font-display font-black text-base sm:text-2xl lg:text-3xl tracking-tight leading-tight mb-1 sm:mb-2 ${item.theme.metricColor}`}
                >
                  {item.metric}
                </div>

                {/* Deliverable Title */}
                <h3 className="font-sans font-bold text-xs sm:text-base lg:text-lg text-text-primary tracking-tight leading-snug mb-1.5 sm:mb-2">
                  {item.title}
                </h3>
              </div>

              {/* Single-Sentence Benefit */}
              <p className="text-[11px] sm:text-xs lg:text-[13px] font-sans text-text-secondary leading-normal sm:leading-relaxed pt-2.5 sm:pt-4 border-t border-border/40 dark:border-white/5">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Understated Guarantee Line */}
        <div className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-border/40 flex justify-center sm:justify-end">
          <span className="text-[10.5px] sm:text-xs font-mono text-text-tertiary text-center">
            100% Code &amp; Asset Ownership · Zero Monthly Lock-Ins
          </span>
        </div>
      </div>
    </section>
  );
}
