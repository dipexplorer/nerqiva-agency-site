"use client";

import React, { useState } from "react";
import { 
  Laptop, 
  MessageSquare, 
  Search, 
  CreditCard, 
  CheckCircle2, 
  ArrowUpRight, 
  Zap, 
  Sparkles,
  Bot,
  MapPin,
  TrendingUp,
  Layers
} from "lucide-react";

interface CapabilityCard {
  id: string;
  tag: string;
  title: string;
  description: string;
  badges: string[];
  metricLabel: string;
  metricValue: string;
  icon: React.ReactNode;
}

const CAPABILITIES: CapabilityCard[] = [
  {
    id: "web",
    tag: "01 / CORE ARCHITECTURE",
    title: "Flagship Web & Mobile Interface",
    description:
      "Handcrafted frontend engineered with Next.js & React for sub-second page loads. Zero template bloat, zero WordPress security risks, and 100% mobile perfection.",
    badges: ["Sub-second Speed", "Custom UI/UX", "Mobile-First UX"],
    metricLabel: "Lighthouse Performance",
    metricValue: "99+",
    icon: <Laptop className="w-5 h-5 text-accent" />,
  },
  {
    id: "automation",
    tag: "02 / CLIENT CAPTURE",
    title: "1-Click WhatsApp & AI Calling",
    description:
      "Every visitor inquiry is pre-filled and routed straight into your WhatsApp or voice scheduler. Instant response mechanism that converts traffic into paying clients on the spot.",
    badges: ["1-Tap WhatsApp Engine", "AI Voice Scheduling", "Instant Lead Routing"],
    metricLabel: "Response Speed",
    metricValue: "< 60s",
    icon: <MessageSquare className="w-5 h-5 text-emerald-500" />,
  },
  {
    id: "search",
    tag: "03 / MODERN DISCOVERY",
    title: "Google Maps & AI Search (SEO · AEO · GEO)",
    description:
      "Engineered to rank when nearby customers search on Google Maps, Google Search, Siri, Perplexity, and ChatGPT. Structured schemas and local citations built in.",
    badges: ["Google Maps 3-Pack", "AI Answer Engine Ready", "Local Citations"],
    metricLabel: "Local Search Visibility",
    metricValue: "#1 Rank Ready",
    icon: <Search className="w-5 h-5 text-blue-500" />,
  },
  {
    id: "operations",
    tag: "04 / BUSINESS ENGINE",
    title: "Client Portals & Unified Payments",
    description:
      "Seamless UPI and card checkout without friction. A private dashboard to track client bookings, inquiries, and customer history without paying expensive SaaS subscriptions.",
    badges: ["Direct UPI / Card Links", "Client Dashboard", "Zero Monthly Lock-ins"],
    metricLabel: "Payment Friction",
    metricValue: "0%",
    icon: <CreditCard className="w-5 h-5 text-purple-500" />,
  },
];

export default function UnifiedEngine() {
  const [activeCard, setActiveCard] = useState<string>("web");

  return (
    <section
      id="systems"
      className="py-20 sm:py-28 bg-transparent border-t border-border/40 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        {/* Section Header: Pure Typographic Authority */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-border/40 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-xs font-semibold tracking-widest text-text-tertiary uppercase">
                Complete Digital Engine
              </span>
            </div>
            <h2
              className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.05]"
              style={{ letterSpacing: "-0.03em" }}
            >
              One Partner. Your Entire Growth Stack.
            </h2>
          </div>
          <p className="text-text-secondary text-sm sm:text-base max-w-md leading-relaxed font-sans">
            Stop juggling 5 different agencies for web, automations, SEO, and payments. We engineer everything under one roof as a single, cohesive business system.
          </p>
        </div>

        {/* 4 Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {CAPABILITIES.map((cap) => {
            const isSelected = activeCard === cap.id;

            return (
              <div
                key={cap.id}
                onMouseEnter={() => setActiveCard(cap.id)}
                className={`group relative rounded-2xl p-6 sm:p-8 bg-bg-secondary/70 dark:bg-bg-dark-card/60 backdrop-blur-md border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? "border-accent/40 shadow-xl shadow-accent/5 dark:shadow-accent/10"
                    : "border-border/60 hover:border-border-dark"
                }`}
              >
                {/* Top Row: Tag + Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[11px] font-semibold tracking-wider text-text-tertiary uppercase">
                      {cap.tag}
                    </span>
                    <div className="p-2 rounded-lg bg-bg-primary dark:bg-neutral-800 border border-border/60 shadow-xs">
                      {cap.icon}
                    </div>
                  </div>

                  {/* Headline & Body */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary mb-3 tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-text-secondary text-sm sm:text-[15px] leading-relaxed mb-6 font-sans">
                    {cap.description}
                  </p>
                </div>

                {/* Bottom Row: Feature Badges + Micro Stat */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cap.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-bg-primary/90 dark:bg-neutral-800/80 border border-border/60 font-mono text-[11px] text-text-secondary font-medium tracking-wide"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                    <span className="font-mono text-xs text-text-tertiary font-medium">
                      {cap.metricLabel}
                    </span>
                    <span className="font-mono text-xs font-bold text-accent">
                      {cap.metricValue}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Anti-Fragmentation Contrast Strip (The Old Way vs NERQIVA) */}
        <div className="rounded-2xl p-6 sm:p-8 bg-neutral-900 text-white border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-accent/20 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            {/* The Old Fragmented Way */}
            <div className="space-y-3 sm:space-y-4 pr-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span className="font-mono text-xs font-bold text-red-400 uppercase tracking-widest">
                  The Fragmented Agency Way
                </span>
              </div>
              <p className="text-neutral-300 text-sm sm:text-[15px] leading-relaxed">
                5 disconnected freelancers · Fragile Zapier zaps · 3-month delivery delays · Monthly retainer lock-ins with zero accountability.
              </p>
            </div>

            {/* The NERQIVA Standard */}
            <div className="space-y-3 sm:space-y-4 pl-0 lg:pl-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest">
                  The NERQIVA Standard
                </span>
              </div>
              <p className="text-white text-sm sm:text-[15px] font-medium leading-relaxed">
                1 Single Engineering Partner · Custom Digital Operating System · 7–10 Day Delivery Sprint · 100% Code & Asset Ownership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

