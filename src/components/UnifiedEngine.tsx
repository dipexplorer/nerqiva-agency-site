"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function UnifiedEngine() {
  return (
    <section
      id="systems"
      className="scroll-mt-20 sm:scroll-mt-24 py-14 sm:py-20 lg:py-24 bg-transparent border-t border-border/40 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        {/* Section Header: Pure Typographic Authority (Consistent with Selected Works & How We Ship) */}
        <div className="flex items-baseline justify-between mb-8 sm:mb-14 pb-4 border-b border-border/40">
          <div className="flex items-baseline gap-3">
            <h2
              className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.04]"
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

        {/* 4 Consistent Cards: 2x2 Bento on Mobile, 4-Column Architectural Grid on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 items-stretch">
          
          {/* ─────────────────────────────────────────────────────────── */}
          {/* CARD 01: 100% Mobile Ready                                  */}
          {/* ─────────────────────────────────────────────────────────── */}
          <div className="group relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-bg-primary dark:bg-[#111614] border border-border/70 dark:border-white/10 shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-border-dark dark:hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Top Index */}
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="font-mono text-xs font-bold text-text-tertiary">01</span>
                <span className="h-[1px] w-6 bg-border dark:bg-white/10" />
              </div>

              {/* Metric + Title */}
              <div className="mb-3 sm:mb-4">
                <div className="font-display font-black text-lg sm:text-2xl lg:text-3xl tracking-tight leading-none text-text-primary mb-1 sm:mb-1.5">
                  100% Mobile Ready
                </div>
                <p className="font-sans font-bold text-xs sm:text-sm text-text-secondary tracking-tight">
                  High-Converting Website
                </p>
              </div>

              {/* Tangible Visual: Smartphone Mockup */}
              <div className="my-2 sm:my-3 relative flex items-center justify-center">
                <div className="relative w-28 sm:w-36 h-36 sm:h-44 rounded-[20px] sm:rounded-[24px] bg-[#09090b] p-1.5 shadow-md border border-black/30 dark:border-white/15 transform transition-transform duration-300 group-hover:scale-105">
                  {/* Speaker Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 sm:w-10 h-1 bg-zinc-800 rounded-full z-20" />

                  {/* Screen Content */}
                  <div className="w-full h-full rounded-[15px] sm:rounded-[18px] bg-zinc-50 dark:bg-zinc-900 overflow-hidden flex flex-col justify-between p-2 pt-3.5 select-none">
                    <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-1">
                      <span className="font-mono text-[7px] sm:text-[8px] font-bold tracking-wider text-text-primary dark:text-white">NERQIVA</span>
                      <div className="w-2.5 h-1.5 flex flex-col justify-between">
                        <span className="w-full h-[1px] bg-zinc-400" />
                        <span className="w-full h-[1px] bg-zinc-400" />
                      </div>
                    </div>
                    <div className="py-0.5">
                      <div className="font-display font-extrabold text-[9px] sm:text-[11px] leading-tight text-zinc-900 dark:text-white">
                        Your Business Online.
                      </div>
                    </div>
                    <div className="relative h-12 sm:h-14 rounded-md bg-zinc-200/60 dark:bg-zinc-800/80 border border-border/40 overflow-hidden flex items-end p-1">
                      <div className="w-full h-1.5 bg-white/60 dark:bg-white/20 rounded-xs" />
                    </div>
                    <div className="flex justify-end">
                      <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-text-primary text-text-inverted flex items-center justify-center shadow-xs text-[8px] sm:text-[9px] font-bold">
                        →
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Benefit & Corner Arrow */}
            <div className="pt-3 border-t border-border/50 dark:border-white/5 flex items-center justify-between gap-2">
              <span className="text-[11px] sm:text-xs text-text-secondary font-sans leading-snug">
                Sub-second load on any phone.
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-text-tertiary shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────── */}
          {/* CARD 02: 1-Tap Direct Leads                                  */}
          {/* ─────────────────────────────────────────────────────────── */}
          <div className="group relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-bg-primary dark:bg-[#111614] border border-border/70 dark:border-white/10 shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-border-dark dark:hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Top Index */}
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="font-mono text-xs font-bold text-text-tertiary">02</span>
                <span className="h-[1px] w-6 bg-border dark:bg-white/10" />
              </div>

              {/* Metric + Title */}
              <div className="mb-3 sm:mb-4">
                <div className="font-display font-black text-lg sm:text-2xl lg:text-3xl tracking-tight leading-none text-text-primary mb-1 sm:mb-1.5">
                  1-Tap Direct Leads
                </div>
                <p className="font-sans font-bold text-xs sm:text-sm text-text-secondary tracking-tight">
                  Instant WhatsApp Routing
                </p>
              </div>

              {/* Tangible Visual: WhatsApp Badge + 3-Step Flow */}
              <div className="my-2 sm:my-3 relative flex flex-col items-center justify-center">
                <div className="relative mb-3 transform transition-transform duration-300 group-hover:scale-110">
                  <div className="w-13 sm:w-15 h-13 sm:h-15 rounded-[18px] bg-gradient-to-b from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-[0_8px_20px_-4px_rgba(37,211,102,0.35)] border border-white/30 relative">
                    <svg className="w-7 sm:w-8 h-7 sm:h-8 text-white drop-shadow-xs" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.17C10.57 20.17 9.12 19.77 7.86 19.03L7.56 18.85L4.44 19.67L5.27 16.63L5.07 16.31C4.26 15.02 3.82 13.52 3.82 11.91C3.82 7.38 7.51 3.69 12.05 3.69C14.25 3.69 16.31 4.55 17.86 6.11C19.42 7.66 20.27 9.72 20.27 11.92C20.27 16.46 16.58 20.17 12.05 20.17Z" />
                      <path d="M16.68 14.39C16.42 14.26 15.17 13.65 14.94 13.56C14.7 13.48 14.54 13.43 14.37 13.69C14.21 13.94 13.73 14.51 13.59 14.67C13.44 14.84 13.29 14.86 13.04 14.73C12.78 14.6 11.96 14.33 10.98 13.46C10.22 12.78 9.7 11.94 9.55 11.69C9.4 11.43 9.53 11.29 9.66 11.16C9.78 11.05 9.92 10.86 10.06 10.71C10.19 10.55 10.23 10.43 10.32 10.26C10.4 10.09 10.36 9.94 10.29 9.82C10.23 9.69 9.73 8.47 9.53 7.97C9.32 7.48 9.12 7.55 8.96 7.54C8.82 7.53 8.65 7.53 8.48 7.53C8.32 7.53 8.05 7.59 7.82 7.84C7.6 8.09 6.96 8.69 6.96 9.9C6.96 11.12 7.85 12.29 7.97 12.46C8.09 12.63 9.72 15.13 12.21 16.2C12.8 16.46 13.26 16.61 13.62 16.73C14.21 16.92 14.75 16.89 15.18 16.83C15.66 16.76 16.65 16.23 16.86 15.64C17.06 15.06 17.06 14.56 17 14.46C16.94 14.36 16.79 14.3 16.53 14.18L16.68 14.39Z" />
                    </svg>
                    <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white dark:border-[#111614] shadow-xs">
                      1
                    </div>
                  </div>
                </div>

                <div className="w-full bg-zinc-100 dark:bg-zinc-800/80 rounded-xl p-2 border border-border/50 dark:border-white/5 flex items-center justify-between text-[8px] sm:text-[9.5px] font-mono text-text-secondary">
                  <div className="flex flex-col items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-text-tertiary mb-0.5" />
                    <span>Inquiry</span>
                  </div>
                  <span className="text-text-tertiary font-bold">→</span>
                  <div className="flex flex-col items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] mb-0.5" />
                    <span className="text-[#25D366] font-bold">WhatsApp</span>
                  </div>
                  <span className="text-text-tertiary font-bold">→</span>
                  <div className="flex flex-col items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-text-tertiary mb-0.5" />
                    <span>Your Phone</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Benefit & Corner Arrow */}
            <div className="pt-3 border-t border-border/50 dark:border-white/5 flex items-center justify-between gap-2">
              <span className="text-[11px] sm:text-xs text-text-secondary font-sans leading-snug">
                Zero lost forms or delay.
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-text-tertiary shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────── */}
          {/* CARD 03: #1 Local 3-Pack                                     */}
          {/* ─────────────────────────────────────────────────────────── */}
          <div className="group relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-bg-primary dark:bg-[#111614] border border-border/70 dark:border-white/10 shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-border-dark dark:hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Top Index */}
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="font-mono text-xs font-bold text-text-tertiary">03</span>
                <span className="h-[1px] w-6 bg-border dark:bg-white/10" />
              </div>

              {/* Metric + Title */}
              <div className="mb-3 sm:mb-4">
                <div className="font-display font-black text-lg sm:text-2xl lg:text-3xl tracking-tight leading-none text-text-primary mb-1 sm:mb-1.5">
                  #1 Local 3-Pack
                </div>
                <p className="font-sans font-bold text-xs sm:text-sm text-text-secondary tracking-tight">
                  Google Maps Ranking
                </p>
              </div>

              {/* Tangible Visual: Map Graphic + Pin + Search Result */}
              <div className="my-2 sm:my-3 relative flex flex-col items-center justify-center">
                <div className="relative w-full h-24 sm:h-28 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/5 overflow-hidden flex items-center justify-center p-2">
                  <svg className="absolute inset-0 w-full h-full opacity-30 text-zinc-300 dark:text-zinc-700" fill="none">
                    <path d="M-10 20 H300 M-10 60 H300 M-10 90 H300 M40 -10 V150 M120 -10 V150 M200 -10 V150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M-10 80 Q 80 70 120 40 T 260 30" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" className="opacity-70" />
                  </svg>

                  <div className="relative z-10 flex flex-col items-center transform -translate-y-2 transition-transform duration-300 group-hover:scale-110">
                    <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 p-0.5 shadow-md flex items-center justify-center text-white">
                      <svg className="w-5 sm:w-6 h-5 sm:h-6 drop-shadow-xs" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
                      </svg>
                    </div>
                    <div className="w-4 h-1 bg-black/25 dark:bg-black/60 rounded-full blur-[1px] mt-0.5" />
                  </div>

                  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[90%] bg-white dark:bg-zinc-800 rounded-lg p-1 px-2 border border-zinc-200 dark:border-zinc-700 shadow-sm flex items-center justify-between text-[8px] sm:text-[9px] font-sans">
                    <div className="flex items-center gap-1 font-bold text-zinc-900 dark:text-white">
                      <span className="text-[#4285F4]">G</span>
                      <span>Your Business</span>
                    </div>
                    <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">#1 Top Rank</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Benefit & Corner Arrow */}
            <div className="pt-3 border-t border-border/50 dark:border-white/5 flex items-center justify-between gap-2">
              <span className="text-[11px] sm:text-xs text-text-secondary font-sans leading-snug">
                Nearby buyers find you first.
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-text-tertiary shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────── */}
          {/* CARD 04: 0% Commission Cut                                  */}
          {/* ─────────────────────────────────────────────────────────── */}
          <div className="group relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-bg-primary dark:bg-[#111614] border border-border/70 dark:border-white/10 shadow-xs hover:shadow-xl hover:-translate-y-1.5 hover:border-border-dark dark:hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              {/* Top Index */}
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="font-mono text-xs font-bold text-text-tertiary">04</span>
                <span className="h-[1px] w-6 bg-border dark:bg-white/10" />
              </div>

              {/* Metric + Title */}
              <div className="mb-3 sm:mb-4">
                <div className="font-display font-black text-lg sm:text-2xl lg:text-3xl tracking-tight leading-none text-text-primary mb-1 sm:mb-1.5">
                  0% Commission
                </div>
                <p className="font-sans font-bold text-xs sm:text-sm text-text-secondary tracking-tight">
                  Direct UPI &amp; Payments
                </p>
              </div>

              {/* Tangible Visual: Desktop Acrylic UPI QR Stand */}
              <div className="my-2 sm:my-3 relative flex items-center justify-center">
                <div className="relative w-28 sm:w-32 rounded-xl bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white p-2 sm:p-2.5 shadow-md border border-border/60 dark:border-white/10 transform transition-transform duration-300 group-hover:scale-105">
                  <div className="relative bg-zinc-50 dark:bg-zinc-800/80 rounded-lg p-2 border border-zinc-200/80 dark:border-zinc-700/60 flex flex-col items-center justify-center">
                    <svg className="w-13 sm:w-15 h-13 sm:h-15 text-zinc-900 dark:text-zinc-100" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 3h2v2h-2v-2zm-4-5h2v2h-2v-2zm4 0h2v2h-2v-2zm-2 2h2v2h-2v-2zm-2 3h2v2h-2v-2zm4 2h2v2h-2v-2zm-6-2h2v2h-2v-2zm2-5h2v2h-2v-2zm2-2h2v2h-2v-2z" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-3.5 h-3.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-[7px] flex items-center justify-center shadow-xs">
                        ₹
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 pt-1 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-[8px] sm:text-[9px] font-bold">
                    <span className="tracking-tight text-zinc-700 dark:text-zinc-300">Scan &amp; Pay</span>
                    <div className="flex items-center gap-0.5">
                      <span className="text-[#008542]">U</span>
                      <span className="text-[#F37021]">P</span>
                      <span className="text-[#008542]">I</span>
                      <span className="text-[#F37021]">▶</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Benefit & Corner Arrow */}
            <div className="pt-3 border-t border-border/50 dark:border-white/5 flex items-center justify-between gap-2">
              <span className="text-[11px] sm:text-xs text-text-secondary font-sans leading-snug">
                Direct to your bank account.
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-text-tertiary shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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
