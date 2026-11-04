"use client";

import React from "react";
import Image from "next/image";
import { 
  Laptop, 
  MessageSquare, 
  Search, 
  CreditCard, 
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Star,
  Sparkles
} from "lucide-react";

export default function UnifiedEngine() {
  return (
    <section
      id="systems"
      className="py-20 sm:py-28 bg-transparent border-t border-border/40 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        {/* Section Header: Pure Typographic Authority, No Eyebrow Kicker */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-border/40 gap-6">
          <div className="max-w-2xl">
            <h2
              className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.05]"
              style={{ letterSpacing: "-0.03em" }}
            >
              One Partner. Complete Engine.
            </h2>
          </div>
          <p className="text-text-secondary text-sm sm:text-base max-w-md leading-relaxed font-sans">
            Websites, WhatsApp client routing, and Google local search built as one connected system.
          </p>
        </div>

        {/* 4 Visual Product Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Sub-Second Web Architecture (With Real Browser Frame & Project Image) */}
          <div className="group relative rounded-2xl p-6 sm:p-7 bg-bg-secondary/70 dark:bg-bg-dark-card/60 backdrop-blur-md border border-border/60 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Visual Graphic: Mini Browser Window */}
            <div className="rounded-xl overflow-hidden border border-border/80 bg-bg-primary dark:bg-neutral-900 shadow-md mb-6 transition-transform duration-500 group-hover:scale-[1.01]">
              {/* Browser Chrome Header */}
              <div className="px-3 py-2 bg-neutral-100 dark:bg-neutral-800/80 border-b border-border/60 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400/80 inline-block" />
                  <span className="w-2 h-2 rounded-full bg-amber-400/80 inline-block" />
                  <span className="w-2 h-2 rounded-full bg-emerald-400/80 inline-block" />
                </div>
                <span className="font-mono text-[10px] text-text-tertiary px-2 py-0.5 rounded bg-bg-secondary border border-border/40">
                  lablinkguwahati.in
                </span>
                <span className="font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  0.4s
                </span>
              </div>
              {/* Real Project Visual Preview */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950">
                <Image
                  src="/images/projects/lablink/desktop.png"
                  alt="Web architecture preview"
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Concise Typography */}
            <div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary mb-1.5 tracking-tight">
                Flagship Web Architecture
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed font-sans">
                Handcrafted Next.js & React frontend. Zero template bloat, sub-second mobile speeds.
              </p>
            </div>
          </div>

          {/* Card 2: 1-Click WhatsApp Routing (With Realistic WhatsApp Chat UI) */}
          <div className="group relative rounded-2xl p-6 sm:p-7 bg-bg-secondary/70 dark:bg-bg-dark-card/60 backdrop-blur-md border border-border/60 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Visual Graphic: WhatsApp Chat Card Mockup */}
            <div className="rounded-xl p-4 sm:p-5 border border-emerald-500/20 bg-linear-to-b from-emerald-500/5 to-transparent dark:bg-neutral-900/90 shadow-md mb-6">
              {/* Chat Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/60">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    <MessageSquare className="w-4 h-4 fill-white" />
                  </div>
                  <div>
                    <span className="block font-sans text-xs font-semibold text-text-primary">
                      Direct WhatsApp Lead
                    </span>
                    <span className="block font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
                      Active Instant Routing
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-text-tertiary">Just now</span>
              </div>

              {/* Chat Message Bubble */}
              <div className="rounded-xl rounded-tl-xs p-3.5 bg-white dark:bg-[#1f2c34] border border-black/5 dark:border-white/5 shadow-xs mb-2">
                <p className="text-xs sm:text-sm text-neutral-800 dark:text-neutral-100 font-sans leading-snug">
                  &ldquo;Hi, need a home blood test booking for tomorrow at 8 AM.&rdquo;
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-mono text-[9px] text-text-tertiary">Pre-filled inquiry</span>
                  <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">✓✓ Delivered</span>
                </div>
              </div>
            </div>

            {/* Concise Typography */}
            <div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary mb-1.5 tracking-tight">
                1-Click WhatsApp Lead Routing
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed font-sans">
                Customer clicks open directly in your WhatsApp. Zero contact forms lost in email spam.
              </p>
            </div>
          </div>

          {/* Card 3: Google Maps & AI Discovery (With Authentic Local Maps & AI Search Mockup) */}
          <div className="group relative rounded-2xl p-6 sm:p-7 bg-bg-secondary/70 dark:bg-bg-dark-card/60 backdrop-blur-md border border-border/60 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Visual Graphic: Google Maps Search Card */}
            <div className="rounded-xl p-4 sm:p-5 border border-blue-500/20 bg-linear-to-b from-blue-500/5 to-transparent dark:bg-neutral-900/90 shadow-md mb-6">
              {/* Search Query Bar */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-neutral-800 border border-border/60 shadow-xs mb-3">
                <Search className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span className="font-sans text-xs text-text-secondary truncate">
                  home blood test collection guwahati
                </span>
              </div>

              {/* Ranked Business Snippet */}
              <div className="rounded-lg p-3 bg-white/80 dark:bg-neutral-800/80 border border-border/60 flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="font-sans text-xs font-bold text-text-primary">
                      LabLink Diagnostics
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      #1 Maps
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-amber-500">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="font-mono text-[10px] text-text-tertiary ml-1">5.0 · Guwahati</span>
                  </div>
                </div>
                <div className="p-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <MapPin className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Concise Typography */}
            <div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary mb-1.5 tracking-tight">
                Google Maps & AI Search Ranking
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed font-sans">
                Engineered to rank when nearby customers search on Google Maps, Google, and AI search engines.
              </p>
            </div>
          </div>

          {/* Card 4: Direct Portals & Payments (With Realistic Settlement Receipt Graphic) */}
          <div className="group relative rounded-2xl p-6 sm:p-7 bg-bg-secondary/70 dark:bg-bg-dark-card/60 backdrop-blur-md border border-border/60 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Visual Graphic: Payment Receipt & Portal UI */}
            <div className="rounded-xl p-4 sm:p-5 border border-purple-500/20 bg-linear-to-b from-purple-500/5 to-transparent dark:bg-neutral-900/90 shadow-md mb-6">
              {/* Receipt Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <span className="font-sans text-xs font-semibold text-text-primary">
                    Instant UPI & Card Checkout
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  Settled
                </span>
              </div>

              {/* Payment Amount Card */}
              <div className="rounded-lg p-3 bg-white dark:bg-neutral-800 border border-border/60 flex items-center justify-between">
                <div>
                  <span className="block font-mono text-[10px] text-text-tertiary uppercase">Direct to your bank</span>
                  <span className="font-sans text-base font-bold text-text-primary">₹ 2,400.00</span>
                </div>
                <span className="font-mono text-[11px] text-text-secondary font-medium">
                  0% Commission
                </span>
              </div>
            </div>

            {/* Concise Typography */}
            <div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary mb-1.5 tracking-tight">
                Client Portals & Unified Payments
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed font-sans">
                Collect client payments via UPI and cards with private booking records and zero monthly SaaS fees.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

