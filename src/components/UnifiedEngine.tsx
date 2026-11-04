"use client";

import React from "react";
import { 
  ArrowUpRight, 
  Sparkles, 
  TrendingUp, 
  Bell, 
  MessageSquare, 
  PhoneCall, 
  Mail, 
  Search, 
  MapPin, 
  Bot, 
  CreditCard, 
  CheckCircle2, 
  ShieldCheck, 
  Palette, 
  Layers, 
  Compass 
} from "lucide-react";

interface Capability {
  number: string;
  category: string;
  title: string;
  description: string;
  badge: string;
  badgeStyle: string;
  tiltClass: string;
  renderVisual: () => React.ReactNode;
}

const CAPABILITIES: Capability[] = [
  {
    number: "01",
    category: "Architecture & Performance",
    title: "High-Converting Web Systems",
    description:
      "Custom, ultra-fast websites built to generate client revenue—not just sit on the internet. Includes live visitor analytics, lead management dashboard, and instant inquiry alerts.",
    badge: "Revenue-Ready",
    badgeStyle: "bg-accent/10 text-accent border-accent/20",
    tiltClass: "-rotate-1 sm:-rotate-2 hover:rotate-0",
    renderVisual: () => (
      <div className="w-full h-36 rounded-2xl bg-bg-secondary/70 dark:bg-neutral-900/80 border border-border/80 p-3.5 flex flex-col justify-between overflow-hidden shadow-xs">
        {/* Browser Header */}
        <div className="flex items-center justify-between pb-2 border-b border-border/60">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-400/80" />
            <span className="w-2 h-2 rounded-full bg-amber-400/80" />
            <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
          </div>
          <span className="font-mono text-[9px] text-text-tertiary">analytics.nerqiva.com</span>
          <span className="font-mono text-[9px] font-bold text-emerald-600 dark:text-emerald-400">0.4s Fast</span>
        </div>
        {/* Dashboard Graphic: Revenue Graph + Notification Pill */}
        <div className="flex items-center justify-between gap-3 py-1">
          <div className="flex-1 space-y-1.5">
            <div className="flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+142% Inquiries</span>
            </div>
            {/* Mini Sparkline Chart */}
            <div className="h-7 w-full flex items-end gap-1 pt-1">
              {[35, 45, 30, 60, 50, 75, 90, 85, 100].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="flex-1 rounded-xs bg-accent/30 dark:bg-accent/40 group-hover:bg-accent transition-colors duration-300"
                />
              ))}
            </div>
          </div>
          {/* Floating Live Notification Pill */}
          <div className="px-2.5 py-1.5 rounded-lg bg-bg-primary dark:bg-neutral-800 border border-border/80 shadow-xs flex items-center gap-1.5 shrink-0">
            <Bell className="w-3 h-3 text-accent animate-pulse" />
            <span className="font-sans text-[10px] font-semibold text-text-primary">New Client Booking</span>
          </div>
        </div>
        {/* Meta Bar */}
        <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[10px] font-mono text-text-tertiary">
          <span>99+ Lighthouse Mobile</span>
          <span>Lead Dashboard Included</span>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    category: "Client Capture & Automations",
    title: "WhatsApp & AI Voice Receptionist",
    description:
      "1-click WhatsApp customer routing, automated email alerts, and 24/7 AI calling agents that answer client inquiries and schedule appointments automatically without manual effort.",
    badge: "24/7 Automations",
    badgeStyle: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    tiltClass: "rotate-1 sm:rotate-2 hover:rotate-0",
    renderVisual: () => (
      <div className="w-full h-36 rounded-2xl bg-bg-secondary/70 dark:bg-neutral-900/80 border border-border/80 p-3.5 flex flex-col justify-between overflow-hidden shadow-xs">
        {/* Top Automation Badges */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 font-mono text-[9.5px] font-bold">
            <MessageSquare className="w-3 h-3" />
            <span>1-Click WhatsApp Lead</span>
          </div>
          <div className="flex items-center gap-1 font-mono text-[9px] text-text-tertiary">
            <Mail className="w-3 h-3 text-text-tertiary" />
            <span>Instant Email Alert</span>
          </div>
        </div>

        {/* AI Voice Receptionist Active Call Simulation */}
        <div className="p-2.5 rounded-xl bg-bg-primary dark:bg-neutral-800 border border-border/80 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-accent/10 text-accent flex items-center justify-center">
              <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
            </div>
            <div>
              <span className="block font-sans text-[11px] font-bold text-text-primary leading-tight">
                AI Voice Receptionist
              </span>
              <span className="block font-mono text-[9px] text-emerald-600 dark:text-emerald-400">
                Answering & Scheduling 24/7
              </span>
            </div>
          </div>
          {/* Animated Audio Waveform Bars */}
          <div className="flex items-center gap-0.5 h-4">
            {[40, 80, 50, 100, 60, 90, 40].map((h, i) => (
              <span
                key={i}
                style={{ height: `${h}%` }}
                className="w-1 rounded-full bg-accent animate-pulse"
              />
            ))}
          </div>
        </div>

        {/* Bottom Flow Reassurance */}
        <div className="flex items-center justify-between text-[10px] font-mono text-text-tertiary">
          <span>Zero Missed Calls</span>
          <span>Pre-filled Inquiries</span>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    category: "Organic Discovery & Search",
    title: "SEO, GEO & AI Search Ranking",
    description:
      "Engineered with structured local schemas so nearby customers find you first on Google Maps, Google Search, Apple Siri, and modern AI answer engines like ChatGPT and Perplexity.",
    badge: "#1 Local Maps",
    badgeStyle: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    tiltClass: "-rotate-1 sm:-rotate-1.5 hover:rotate-0",
    renderVisual: () => (
      <div className="w-full h-36 rounded-2xl bg-bg-secondary/70 dark:bg-neutral-900/80 border border-border/80 p-3.5 flex flex-col justify-between overflow-hidden shadow-xs">
        {/* Search Query Preview */}
        <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-bg-primary dark:bg-neutral-800 border border-border/80 shadow-xs">
          <Search className="w-3 h-3 text-blue-500 shrink-0" />
          <span className="font-sans text-[10.5px] text-text-secondary truncate">
            best service near me
          </span>
          <span className="ml-auto px-1.5 py-0.2 rounded font-mono text-[8.5px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400">
            Google 3-Pack
          </span>
        </div>

        {/* Maps Pin + AI Engine Citations */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-sans text-[11px] font-bold text-text-primary">
                Google Maps #1 Rank
              </span>
              <span className="block font-mono text-[9px] text-amber-500">
                ★★★★★ 5.0 Local Verified
              </span>
            </div>
          </div>
          {/* AI Answer Engine Badges (ChatGPT, Perplexity) */}
          <div className="flex flex-col items-end gap-1">
            <span className="px-1.5 py-0.5 rounded font-mono text-[8.5px] font-semibold bg-bg-primary dark:bg-neutral-800 border border-border/60 text-text-tertiary">
              ChatGPT Recommended
            </span>
            <span className="px-1.5 py-0.5 rounded font-mono text-[8.5px] font-semibold bg-bg-primary dark:bg-neutral-800 border border-border/60 text-text-tertiary">
              Perplexity Source
            </span>
          </div>
        </div>

        {/* Bottom Schema Tag */}
        <div className="flex items-center justify-between text-[10px] font-mono text-text-tertiary border-t border-border/60 pt-1.5">
          <span>GEO & AEO Optimized</span>
          <span>Local Schema Markup</span>
        </div>
      </div>
    ),
  },
  {
    number: "04",
    category: "Commerce & Settlements",
    title: "Instant Payments & Portals",
    description:
      "Seamless UPI, QR, and credit card checkout with zero third-party platform cuts. Direct settlements into your bank account with automated digital invoicing and booking records.",
    badge: "0% Commission",
    badgeStyle: "bg-amber-500/10 text-amber-600 dark:text-[#C9A227] border-amber-500/20",
    tiltClass: "rotate-1 sm:rotate-2 hover:rotate-0",
    renderVisual: () => (
      <div className="w-full h-36 rounded-2xl bg-bg-secondary/70 dark:bg-neutral-900/80 border border-border/80 p-3.5 flex flex-col justify-between overflow-hidden shadow-xs">
        {/* Checkout Header */}
        <div className="flex items-center justify-between pb-2 border-b border-border/60">
          <div className="flex items-center gap-1.5">
            <CreditCard className="w-3.5 h-3.5 text-amber-500" />
            <span className="font-sans text-[11px] font-bold text-text-primary">Direct UPI & Card Checkout</span>
          </div>
          <span className="px-1.5 py-0.2 rounded font-mono text-[8.5px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            Instant Bank Payout
          </span>
        </div>

        {/* Settlement Transaction Card */}
        <div className="p-2.5 rounded-xl bg-bg-primary dark:bg-neutral-800 border border-border/80 flex items-center justify-between shadow-xs">
          <div>
            <span className="block font-mono text-[9px] text-text-tertiary uppercase">Settled to your account</span>
            <span className="font-sans text-sm sm:text-base font-black text-text-primary">₹ 2,400.00</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              0% Platform Cut
            </span>
            <span className="font-mono text-[8.5px] text-text-tertiary">Zero Monthly Lock-ins</span>
          </div>
        </div>

        {/* Meta Bar */}
        <div className="flex items-center justify-between text-[10px] font-mono text-text-tertiary">
          <span>Automated GST Invoices</span>
          <span>Private Booking Portal</span>
        </div>
      </div>
    ),
  },
  {
    number: "05",
    category: "Identity & Creative Direction",
    title: "Brand Identity & Systems",
    description:
      "Distinct logos, typography hierarchies, custom palettes, and social media design guidelines that make your business look like an undisputed, established market leader.",
    badge: "Full Authority",
    badgeStyle: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    tiltClass: "-rotate-1 sm:-rotate-2 hover:rotate-0",
    renderVisual: () => (
      <div className="w-full h-36 rounded-2xl bg-bg-secondary/70 dark:bg-neutral-900/80 border border-border/80 p-3.5 flex flex-col justify-between overflow-hidden shadow-xs">
        {/* Brand System Header */}
        <div className="flex items-center justify-between pb-2 border-b border-border/60">
          <div className="flex items-center gap-1.5">
            <Palette className="w-3.5 h-3.5 text-purple-500" />
            <span className="font-sans text-[11px] font-bold text-text-primary">Brand Identity Kit</span>
          </div>
          <span className="font-mono text-[9px] text-text-tertiary">Founders Can Repeat</span>
        </div>

        {/* Color Palette Swatches + Typography Preview */}
        <div className="flex items-center justify-between gap-3">
          {/* Swatches */}
          <div className="flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-[#09090b] border border-white/20 shadow-xs" title="Obsidian" />
            <span className="w-5 h-5 rounded-full bg-accent border border-white/20 shadow-xs" title="Deep Indigo" />
            <span className="w-5 h-5 rounded-full bg-[#C9A227] border border-white/20 shadow-xs" title="Gold" />
            <span className="w-5 h-5 rounded-full bg-[#F4F4F5] border border-border/80 shadow-xs" title="Zinc Stone" />
          </div>
          {/* Typography Preview */}
          <div className="px-2.5 py-1 rounded-lg bg-bg-primary dark:bg-neutral-800 border border-border/80 text-right">
            <span className="block font-display font-black text-[12px] text-text-primary leading-tight">
              Fraunces Serif
            </span>
            <span className="block font-sans text-[9px] text-text-tertiary">
              DM Sans + DM Mono
            </span>
          </div>
        </div>

        {/* Meta Bar */}
        <div className="flex items-center justify-between text-[10px] font-mono text-text-tertiary border-t border-border/60 pt-1.5">
          <span>Vector Logos & Favicons</span>
          <span>Social Media Templates</span>
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
        {/* Section Header: Pure Typographic Authority */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-6 border-b border-border/40 gap-6">
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

        {/* 5 High-Agency Capability Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 mb-8">
          {CAPABILITIES.slice(0, 3).map((cap) => (
            <div
              key={cap.number}
              className={`group relative cursor-pointer transform-gpu will-change-transform rounded-3xl p-6 sm:p-7 bg-bg-primary dark:bg-bg-dark-card border border-border/80 dark:border-white/10 shadow-lg dark:shadow-2xl shadow-black/5 ${cap.tiltClass} hover:rotate-0! hover:-translate-y-4! hover:scale-[1.025] hover:z-30 hover:border-accent/60 dark:hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/10 dark:hover:shadow-accent/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between`}
            >
              {/* Dedicated Visual Micro-Graphic Component */}
              <div className="mb-6">{cap.renderVisual()}</div>

              {/* Text & Content Block */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold tracking-widest text-text-tertiary">
                    {cap.number} / {cap.category}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full font-mono text-[10px] font-bold border ${cap.badgeStyle}`}
                  >
                    {cap.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary mb-2.5 tracking-tight group-hover:text-accent transition-colors duration-300">
                  {cap.title}
                </h3>

                <p className="text-text-secondary text-xs sm:text-[13.5px] leading-relaxed font-sans">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 2 Cards Grid (Centered for balance and breathing room) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8 max-w-4xl mx-auto">
          {CAPABILITIES.slice(3, 5).map((cap) => (
            <div
              key={cap.number}
              className={`group relative cursor-pointer transform-gpu will-change-transform rounded-3xl p-6 sm:p-7 bg-bg-primary dark:bg-bg-dark-card border border-border/80 dark:border-white/10 shadow-lg dark:shadow-2xl shadow-black/5 ${cap.tiltClass} hover:rotate-0! hover:-translate-y-4! hover:scale-[1.025] hover:z-30 hover:border-accent/60 dark:hover:border-accent/60 hover:shadow-2xl hover:shadow-accent/10 dark:hover:shadow-accent/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between`}
            >
              {/* Dedicated Visual Micro-Graphic Component */}
              <div className="mb-6">{cap.renderVisual()}</div>

              {/* Text & Content Block */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold tracking-widest text-text-tertiary">
                    {cap.number} / {cap.category}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full font-mono text-[10px] font-bold border ${cap.badgeStyle}`}
                  >
                    {cap.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary mb-2.5 tracking-tight group-hover:text-accent transition-colors duration-300">
                  {cap.title}
                </h3>

                <p className="text-text-secondary text-xs sm:text-[13.5px] leading-relaxed font-sans">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-14 pt-6 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-text-tertiary">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            <span className="text-text-secondary">Five Core Builds. One Unified Studio. One High Standard.</span>
          </div>
          <span>100% Code & Asset Ownership</span>
        </div>
      </div>
    </section>
  );
}
