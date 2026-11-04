"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface Capability {
  number: string;
  category: string;
  title: string;
  description: string;
  metric: string;
}

const CAPABILITIES: Capability[] = [
  {
    number: "01",
    category: "Architecture",
    title: "Flagship Web Architecture",
    description:
      "Handcrafted Next.js & React frontend engineered for sub-second mobile loads. Zero template bloat, zero WordPress vulnerabilities, and 100% responsive precision.",
    metric: "0.4s Fast",
  },
  {
    number: "02",
    category: "Conversion",
    title: "1-Click WhatsApp Routing",
    description:
      "Inquiries open directly in your WhatsApp with pre-filled booking details. Instant response mechanism that converts visitors into paying clients on the spot.",
    metric: "< 60s Lead Alert",
  },
  {
    number: "03",
    category: "Discovery",
    title: "Google Maps & AI Search",
    description:
      "Structured local schemas built to rank when nearby customers search for your services on Google Maps, Google Search, Siri, Perplexity, and ChatGPT.",
    metric: "#1 Rank Ready",
  },
  {
    number: "04",
    category: "Settlement",
    title: "Portals & Unified Payments",
    description:
      "Direct UPI and card checkout without friction. A private dashboard to track client bookings and inquiries without paying ongoing monthly SaaS fees.",
    metric: "0% Commission",
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 pb-6 border-b border-border/40 gap-6">
          <div className="max-w-2xl">
            <h2
              className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.05]"
              style={{ letterSpacing: "-0.035em" }}
            >
              Four Systems. One Partner.
            </h2>
          </div>
          <p className="text-text-secondary text-sm sm:text-base max-w-md leading-relaxed font-sans">
            Websites, WhatsApp client capture, local search ranking, and payment checkout engineered as a single, synchronized business engine.
          </p>
        </div>

        {/* Open Editorial 4-Pillar Grid (TheSide Standard: No Boxy Card Slop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {CAPABILITIES.map((cap) => (
            <article
              key={cap.number}
              className="flex flex-col justify-between pt-6 border-t-2 border-border/60 hover:border-accent transition-colors duration-300 group"
            >
              <div>
                {/* Top Row: Numeral + Category Tag */}
                <div className="flex items-baseline justify-between mb-8">
                  <span className="font-display font-black text-4xl sm:text-5xl text-text-tertiary/60 dark:text-text-tertiary/40 group-hover:text-accent transition-colors">
                    {cap.number}
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-text-tertiary uppercase tracking-wider">
                    {cap.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary mb-3 tracking-tight group-hover:text-accent transition-colors">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm sm:text-[15px] leading-relaxed font-sans mb-6">
                  {cap.description}
                </p>
              </div>

              {/* Minimal Outcome Tag */}
              <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                <span className="font-mono text-[11px] font-semibold text-accent">
                  {cap.metric}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
