"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, MessageSquare, MapPin, CheckCircle2 } from "lucide-react";

export default function UnifiedEngine() {
  return (
    <section
      id="systems"
      className="scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-20 lg:py-24 bg-transparent border-t border-border/40 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        {/* Section Header: Pure Typographic Authority */}
        <div className="flex items-baseline justify-between mb-8 sm:mb-14 pb-4 border-b border-border/40">
          <div className="flex items-baseline gap-3">
            <h2
              className="font-display font-black text-2xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.04]"
              style={{ letterSpacing: "-0.035em" }}
            >
              What You Get In Every Build.
            </h2>
            <span className="font-mono text-xs sm:text-sm text-text-tertiary">
              / 04
            </span>
          </div>

          <span className="hidden sm:inline-block font-mono text-xs text-text-tertiary">
            Core Studio Deliverables
          </span>
        </div>

        {/* 
          Asymmetrical Broken-Pattern Bento:
          Desktop: 
            Row 1 = 7 cols (Flagship Mobile) + 5 cols (WhatsApp)
            Row 2 = 5 cols (Google Maps)     + 7 cols (UPI Settlement)
          Mobile:
            1 Full-Width Flagship -> 2 Compact Side-by-Side -> 1 Full-Width Settlement
        */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-5 lg:gap-6 items-stretch">
          
          {/* ─────────────────────────────────────────────────────────── */}
          {/* CARD 01: 100% Mobile Ready (Full Width Mobile, Col 7 Desktop) */}
          {/* ─────────────────────────────────────────────────────────── */}
          <div className="col-span-2 lg:col-span-7 group relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 bg-bg-primary dark:bg-[#111614] border border-border/70 dark:border-white/10 shadow-xs hover:shadow-xl hover:-translate-y-1 hover:border-border-dark dark:hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-text-tertiary">01</span>
                <span className="h-[1px] w-6 bg-border dark:bg-white/10" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-text-tertiary">Architecture</span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                Flagship Proof
              </span>
            </div>

            {/* Split Content: Text on Left, Real Mobile Crop on Right */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 my-auto">
              <div className="max-w-sm">
                <div className="font-display font-black text-xl sm:text-3xl lg:text-4xl tracking-tight leading-none text-text-primary mb-1.5 sm:mb-2">
                  100% Mobile Ready
                </div>
                <h3 className="font-sans font-bold text-xs sm:text-base text-text-secondary tracking-tight mb-2">
                  High-Converting Website
                </h3>
                <p className="text-xs sm:text-[13px] font-sans text-text-secondary leading-relaxed">
                  Engineered with sub-second load times on phones, custom UX flows, and zero template bloat.
                </p>
              </div>

              {/* Real Project Imagery: Crisp LabLink Mobile UI Crop */}
              <div className="relative self-center sm:self-end shrink-0 w-40 sm:w-52 h-36 sm:h-52 rounded-t-2xl overflow-hidden shadow-xl border-t-2 border-x-2 border-zinc-900/10 dark:border-white/15 bg-zinc-900/5 dark:bg-zinc-900/40 transform transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1 mt-2 sm:mt-0">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-zinc-800 rounded-full z-20" />
                <div className="relative w-full h-full pt-4 overflow-hidden">
                  <Image
                    src="/images/projects/lablink/booking.png"
                    alt="LabLink Mobile Website Build"
                    width={860}
                    height={1864}
                    className="w-full h-auto object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-bg-primary dark:from-[#111614] to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Bottom Benefit & Arrow */}
            <div className="pt-3 border-t border-border/50 dark:border-white/5 flex items-center justify-between text-[11px] sm:text-xs text-text-secondary mt-3 sm:mt-0">
              <span>Handcrafted frontend · Tested across iOS &amp; Android</span>
              <ArrowUpRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-text-tertiary shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────── */}
          {/* CARD 02: 1-Tap Direct Leads (1 Col Mobile, Col 5 Desktop)    */}
          {/* ─────────────────────────────────────────────────────────── */}
          <div className="col-span-1 lg:col-span-5 group relative rounded-2xl sm:rounded-3xl p-4 sm:p-7 bg-bg-primary dark:bg-[#111614] border border-border/70 dark:border-white/10 shadow-xs hover:shadow-xl hover:-translate-y-1 hover:border-border-dark dark:hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top row */}
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-mono text-xs font-bold text-text-tertiary">02</span>
                <span className="h-[1px] w-4 sm:w-6 bg-border dark:bg-white/10" />
                <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-wider text-text-tertiary">Conversion</span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Direct Lead
              </span>
            </div>

            {/* Metric + Title */}
            <div>
              <div className="font-display font-black text-base sm:text-2xl lg:text-3xl tracking-tight leading-tight text-text-primary mb-1">
                1-Tap Direct Leads
              </div>
              <h3 className="font-sans font-bold text-xs sm:text-sm text-text-secondary tracking-tight mb-3">
                WhatsApp Routing
              </h3>
            </div>

            {/* Clean Real-World Chat Proof Card */}
            <div className="my-2 bg-zinc-50 dark:bg-zinc-900/60 rounded-xl p-2.5 sm:p-3.5 border border-border/60 dark:border-white/5 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center text-xs font-bold shadow-xs">
                    <MessageSquare size={11} fill="white" />
                  </div>
                  <span className="font-sans text-[11px] sm:text-xs font-semibold text-text-primary">New Client Inquiry</span>
                </div>
                <span className="hidden sm:inline font-mono text-[10px] text-text-tertiary">Just now</span>
              </div>
              <div className="bg-white dark:bg-zinc-800/80 rounded-lg p-2 sm:p-2.5 text-[11px] sm:text-xs text-text-secondary border border-border/40 shadow-xs font-sans leading-relaxed">
                &ldquo;Hi, saw your website. Can I book for tomorrow?&rdquo;
              </div>
            </div>

            {/* Bottom Benefit & Arrow */}
            <div className="pt-2.5 sm:pt-3 border-t border-border/50 dark:border-white/5 flex items-center justify-between text-[10.5px] sm:text-xs text-text-secondary">
              <span className="truncate">Lands on your phone</span>
              <ArrowUpRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-text-tertiary shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────── */}
          {/* CARD 03: #1 Local 3-Pack (1 Col Mobile, Col 5 Desktop)       */}
          {/* ─────────────────────────────────────────────────────────── */}
          <div className="col-span-1 lg:col-span-5 group relative rounded-2xl sm:rounded-3xl p-4 sm:p-7 bg-bg-primary dark:bg-[#111614] border border-border/70 dark:border-white/10 shadow-xs hover:shadow-xl hover:-translate-y-1 hover:border-border-dark dark:hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top row */}
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-mono text-xs font-bold text-text-tertiary">03</span>
                <span className="h-[1px] w-4 sm:w-6 bg-border dark:bg-white/10" />
                <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-wider text-text-tertiary">Discovery</span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono font-medium px-1.5 sm:px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                Local SEO
              </span>
            </div>

            {/* Metric + Title */}
            <div>
              <div className="font-display font-black text-base sm:text-2xl lg:text-3xl tracking-tight leading-tight text-text-primary mb-1">
                #1 Local 3-Pack
              </div>
              <h3 className="font-sans font-bold text-xs sm:text-sm text-text-secondary tracking-tight mb-3">
                Google Maps Ranking
              </h3>
            </div>

            {/* Clean Real-World Google Verified Snippet Card */}
            <div className="my-2 bg-zinc-50 dark:bg-zinc-900/60 rounded-xl p-2.5 sm:p-3.5 border border-border/60 dark:border-white/5 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[10px] text-text-tertiary truncate">Search: &ldquo;clinic near me&rdquo;</span>
                <span className="hidden sm:inline text-emerald-600 dark:text-emerald-400 font-mono text-[10px] font-bold">#1 Verified</span>
              </div>
              <div className="bg-white dark:bg-zinc-800/80 rounded-lg p-2 sm:p-2.5 border border-border/40 shadow-xs flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <MapPin size={12} />
                  </div>
                  <div>
                    <div className="font-sans text-[11px] sm:text-xs font-bold text-text-primary leading-tight truncate">Your Business</div>
                    <div className="font-sans text-[9px] sm:text-[10.5px] text-amber-500 font-semibold leading-tight">★★★★★ 5.0</div>
                  </div>
                </div>
                <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-500/10 px-1 py-0.5 rounded-xs shrink-0">
                  #1 Maps
                </span>
              </div>
            </div>

            {/* Bottom Benefit & Arrow */}
            <div className="pt-2.5 sm:pt-3 border-t border-border/50 dark:border-white/5 flex items-center justify-between text-[10.5px] sm:text-xs text-text-secondary">
              <span className="truncate">Top city ranking</span>
              <ArrowUpRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-text-tertiary shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────── */}
          {/* CARD 04: 0% Commission (Full Width Mobile, Col 7 Desktop)     */}
          {/* ─────────────────────────────────────────────────────────── */}
          <div className="col-span-2 lg:col-span-7 group relative rounded-2xl sm:rounded-3xl p-5 sm:p-7 bg-bg-primary dark:bg-[#111614] border border-border/70 dark:border-white/10 shadow-xs hover:shadow-xl hover:-translate-y-1 hover:border-border-dark dark:hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-text-tertiary">04</span>
                <span className="h-[1px] w-6 bg-border dark:bg-white/10" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-text-tertiary">Settlement</span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                0% Middleman Cut
              </span>
            </div>

            {/* Split Content: Text on Left, Clean Instant Payment Ledger on Right */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 my-auto">
              <div className="max-w-sm">
                <div className="font-display font-black text-xl sm:text-3xl lg:text-4xl tracking-tight leading-none text-text-primary mb-1.5 sm:mb-2">
                  0% Commission
                </div>
                <h3 className="font-sans font-bold text-xs sm:text-base text-text-secondary tracking-tight mb-2">
                  Direct UPI &amp; Card Settlements
                </h3>
                <p className="text-xs sm:text-[13px] font-sans text-text-secondary leading-relaxed">
                  Accept customer payments directly into your bank account. No SaaS monthly fees, no middleman percentage cuts.
                </p>
              </div>

              {/* Clean Payment Proof Ledger Pill */}
              <div className="w-full sm:w-56 bg-zinc-50 dark:bg-zinc-900/60 rounded-xl p-3.5 border border-border/60 dark:border-white/5 space-y-2.5 shrink-0 shadow-xs">
                <div className="flex items-center justify-between border-b border-border/40 pb-1.5">
                  <span className="font-mono text-[9px] text-text-tertiary uppercase">Settled to your account</span>
                  <span className="flex items-center gap-1 text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                    <CheckCircle2 size={10} /> Direct
                  </span>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-text-tertiary">Net Payout</div>
                  <div className="font-display font-black text-xl sm:text-2xl text-text-primary leading-tight">
                    ₹ 4,500.00
                  </div>
                </div>
                <div className="pt-1.5 border-t border-border/40 flex items-center justify-between text-[9px] font-mono text-text-tertiary">
                  <span>Platform Fee: ₹ 0</span>
                  <div className="flex items-center gap-0.5 font-bold">
                    <span className="text-[#008542]">U</span>
                    <span className="text-[#F37021]">P</span>
                    <span className="text-[#008542]">I</span>
                    <span className="text-[#F37021]">▶</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Benefit & Arrow */}
            <div className="pt-3 border-t border-border/50 dark:border-white/5 flex items-center justify-between text-[11px] sm:text-xs text-text-secondary mt-3 sm:mt-0">
              <span>Instant settlements · Private booking records · Zero lock-ins</span>
              <ArrowUpRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-text-tertiary shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </div>

        </div>

        {/* Understated Guarantee Line */}
        <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-text-tertiary">
          <span>Built for revenue, not applause.</span>
          <span>100% Code &amp; Asset Ownership · Zero Monthly Lock-Ins</span>
        </div>
      </div>
    </section>
  );
}
