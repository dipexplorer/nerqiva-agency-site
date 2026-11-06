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
        {/* Section Header with Organic Emerald Brush Underline */}
        <div className="mb-8 sm:mb-14 pb-5 sm:pb-7 border-b border-border/40 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2
              className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.05]"
              style={{ letterSpacing: "-0.035em" }}
            >
              What You Get In{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span>Every Build.</span>
                {/* Organic hand-drawn brush underline */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-emerald-500 overflow-visible pointer-events-none select-none"
                  viewBox="0 0 260 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 10C50 3 130 2 257 8M15 12C75 7 175 6 245 11"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-90"
                  />
                </svg>
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-text-tertiary">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>4 Core Studio Deliverables</span>
          </div>
        </div>

        {/* 4 Tangible Deliverables: 2x2 Bento Matrix on Mobile, 4-Card Showcase on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 items-stretch">
          
          {/* ─────────────────────────────────────────────────────────── */}
          {/* CARD 01: 100% Mobile Ready (Light / Crisp Architectural)     */}
          {/* ─────────────────────────────────────────────────────────── */}
          <div className="group relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-white dark:bg-[#111614] border border-border/70 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top Index */}
            <div className="flex items-center gap-2 mb-2 sm:mb-4">
              <span className="font-mono text-xs font-bold text-text-tertiary">01</span>
              <span className="h-[1px] w-6 bg-border/80 dark:bg-white/10" />
            </div>

            {/* Metric + Title */}
            <div className="mb-3 sm:mb-4">
              <div className="font-display font-black text-lg sm:text-2xl lg:text-3xl tracking-tight leading-none text-text-primary mb-1 sm:mb-1.5">
                <span>100% </span>
                <span className="text-emerald-600 dark:text-emerald-400">Mobile Ready</span>
              </div>
              <p className="font-sans font-bold text-xs sm:text-sm text-text-secondary tracking-tight">
                High-Converting Website
              </p>
            </div>

            {/* Tangible Visual: Sleek Smartphone Mockup */}
            <div className="my-2 sm:my-3 relative flex items-center justify-center">
              {/* Background ambient radial glow */}
              <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />

              {/* Smartphone Frame */}
              <div className="relative w-28 sm:w-36 h-40 sm:h-48 rounded-[20px] sm:rounded-[24px] bg-[#09090b] p-1.5 shadow-xl border border-black/40 dark:border-white/20 transform transition-transform duration-300 group-hover:scale-105">
                {/* Speaker notch */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-8 sm:w-10 h-1 sm:h-1.5 bg-zinc-800 rounded-full z-20" />

                {/* Smartphone Display Screen */}
                <div className="w-full h-full rounded-[15px] sm:rounded-[18px] bg-zinc-50 dark:bg-zinc-900 overflow-hidden flex flex-col justify-between p-2 pt-4 relative select-none">
                  {/* Mini Site Header */}
                  <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-1.5">
                    <span className="font-mono text-[7px] sm:text-[8px] font-bold tracking-wider text-emerald-600 dark:text-emerald-400">NERQIVA</span>
                    <div className="w-2.5 sm:w-3 h-1.5 flex flex-col justify-between">
                      <span className="w-full h-[1px] bg-zinc-400" />
                      <span className="w-full h-[1px] bg-zinc-400" />
                    </div>
                  </div>

                  {/* Mini Site Hero */}
                  <div className="py-1">
                    <div className="font-display font-extrabold text-[9px] sm:text-[11px] leading-tight text-zinc-900 dark:text-white">
                      Your Business Online.
                    </div>
                    <div className="mt-1 h-1 w-12 bg-emerald-500/30 rounded-full" />
                  </div>

                  {/* Mini Building / Clinic Photo Card */}
                  <div className="relative h-14 sm:h-16 rounded-lg bg-gradient-to-br from-emerald-600/20 to-teal-800/30 border border-emerald-500/20 overflow-hidden flex items-end p-1.5">
                    <div className="w-full h-2 bg-white/40 dark:bg-white/20 rounded-xs blur-[0.5px]" />
                  </div>

                  {/* Floating Action Button */}
                  <div className="mt-1 flex justify-end">
                    <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md text-[9px] sm:text-[10px] font-bold">
                      →
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
          {/* CARD 02: 1-Tap Direct Leads (Deep Forest / Inverted)         */}
          {/* ─────────────────────────────────────────────────────────── */}
          <div className="group relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-[#071b15] dark:bg-[#051510] text-white border border-emerald-900/40 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top Index */}
            <div className="flex items-center gap-2 mb-2 sm:mb-4">
              <span className="font-mono text-xs font-bold text-emerald-400/60">02</span>
              <span className="h-[1px] w-6 bg-emerald-500/20" />
            </div>

            {/* Metric + Title */}
            <div className="mb-3 sm:mb-4">
              <div className="font-display font-black text-lg sm:text-2xl lg:text-3xl tracking-tight leading-none mb-1 sm:mb-1.5">
                <span>1-Tap </span>
                <span className="text-emerald-400">Direct Leads</span>
              </div>
              <p className="font-sans font-bold text-xs sm:text-sm text-emerald-100/70 tracking-tight">
                Instant WhatsApp Routing
              </p>
            </div>

            {/* Tangible Visual: Glossy WhatsApp Badge + 3-Step Flow */}
            <div className="my-2 sm:my-3 relative flex flex-col items-center justify-center">
              {/* Glossy 3D-styled WhatsApp Icon */}
              <div className="relative mb-3 transform transition-transform duration-300 group-hover:scale-110">
                <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-[18px] bg-gradient-to-b from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-[0_8px_20px_-4px_rgba(37,211,102,0.4)] border border-white/30 relative">
                  {/* WhatsApp Phone Glyph */}
                  <svg className="w-8 sm:w-9 h-8 sm:h-9 text-white drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.17C10.57 20.17 9.12 19.77 7.86 19.03L7.56 18.85L4.44 19.67L5.27 16.63L5.07 16.31C4.26 15.02 3.82 13.52 3.82 11.91C3.82 7.38 7.51 3.69 12.05 3.69C14.25 3.69 16.31 4.55 17.86 6.11C19.42 7.66 20.27 9.72 20.27 11.92C20.27 16.46 16.58 20.17 12.05 20.17Z" />
                    <path d="M16.68 14.39C16.42 14.26 15.17 13.65 14.94 13.56C14.7 13.48 14.54 13.43 14.37 13.69C14.21 13.94 13.73 14.51 13.59 14.67C13.44 14.84 13.29 14.86 13.04 14.73C12.78 14.6 11.96 14.33 10.98 13.46C10.22 12.78 9.7 11.94 9.55 11.69C9.4 11.43 9.53 11.29 9.66 11.16C9.78 11.05 9.92 10.86 10.06 10.71C10.19 10.55 10.23 10.43 10.32 10.26C10.4 10.09 10.36 9.94 10.29 9.82C10.23 9.69 9.73 8.47 9.53 7.97C9.32 7.48 9.12 7.55 8.96 7.54C8.82 7.53 8.65 7.53 8.48 7.53C8.32 7.53 8.05 7.59 7.82 7.84C7.6 8.09 6.96 8.69 6.96 9.9C6.96 11.12 7.85 12.29 7.97 12.46C8.09 12.63 9.72 15.13 12.21 16.2C12.8 16.46 13.26 16.61 13.62 16.73C14.21 16.92 14.75 16.89 15.18 16.83C15.66 16.76 16.65 16.23 16.86 15.64C17.06 15.06 17.06 14.56 17 14.46C16.94 14.36 16.79 14.3 16.53 14.18L16.68 14.39Z" />
                  </svg>
                  {/* Red Notification Pill */}
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-[#071b15] shadow-md animate-pulse">
                    1
                  </div>
                </div>
              </div>

              {/* 3-Step Routing Diagram */}
              <div className="w-full bg-black/40 rounded-xl p-2 border border-emerald-500/20 flex items-center justify-between text-[8px] sm:text-[9.5px] font-mono text-emerald-200/80">
                <div className="flex flex-col items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mb-0.5" />
                  <span>Inquiry</span>
                </div>
                <span className="text-emerald-500 font-bold">→</span>
                <div className="flex flex-col items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mb-0.5" />
                  <span>WhatsApp</span>
                </div>
                <span className="text-emerald-500 font-bold">→</span>
                <div className="flex flex-col items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mb-0.5" />
                  <span>Your Phone</span>
                </div>
              </div>
            </div>

            {/* Bottom Benefit & Corner Arrow */}
            <div className="pt-3 border-t border-emerald-500/20 flex items-center justify-between gap-2">
              <span className="text-[11px] sm:text-xs text-emerald-200/70 font-sans leading-snug">
                Zero lost forms or delay.
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400/60 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────── */}
          {/* CARD 03: #1 Local 3-Pack (Light / Map Architectural Grid)    */}
          {/* ─────────────────────────────────────────────────────────── */}
          <div className="group relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-white dark:bg-[#111614] border border-border/70 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top Index */}
            <div className="flex items-center gap-2 mb-2 sm:mb-4">
              <span className="font-mono text-xs font-bold text-text-tertiary">03</span>
              <span className="h-[1px] w-6 bg-border/80 dark:bg-white/10" />
            </div>

            {/* Metric + Title */}
            <div className="mb-3 sm:mb-4">
              <div className="font-display font-black text-lg sm:text-2xl lg:text-3xl tracking-tight leading-none text-text-primary mb-1 sm:mb-1.5">
                <span>#1 </span>
                <span className="text-emerald-600 dark:text-emerald-400">Local 3-Pack</span>
              </div>
              <p className="font-sans font-bold text-xs sm:text-sm text-text-secondary tracking-tight">
                Google Maps Ranking
              </p>
            </div>

            {/* Tangible Visual: Map Graphic + 3D Pin + Verified Snippet */}
            <div className="my-2 sm:my-3 relative flex flex-col items-center justify-center">
              {/* Subtle Map Roads Matrix */}
              <div className="relative w-full h-24 sm:h-28 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-white/5 overflow-hidden flex items-center justify-center p-2">
                {/* SVG Road Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30 text-zinc-300 dark:text-zinc-700" fill="none">
                  <path d="M-10 20 H300 M-10 60 H300 M-10 90 H300 M40 -10 V150 M120 -10 V150 M200 -10 V150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M-10 80 Q 80 70 120 40 T 260 30" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" className="opacity-70" />
                </svg>

                {/* 3D Map Pin Marker */}
                <div className="relative z-10 flex flex-col items-center transform -translate-y-2 transition-transform duration-300 group-hover:scale-110">
                  <div className="w-10 sm:w-11 h-10 sm:h-11 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 p-0.5 shadow-lg flex items-center justify-center text-white">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 drop-shadow-xs" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
                    </svg>
                  </div>
                  {/* Pin Drop Shadow */}
                  <div className="w-4 h-1 bg-black/30 dark:bg-black/60 rounded-full blur-[1px] mt-0.5" />
                </div>

                {/* Floating Google Result Pill */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[90%] bg-white dark:bg-zinc-800 rounded-lg p-1 px-2 border border-zinc-200 dark:border-zinc-700 shadow-md flex items-center justify-between text-[8px] sm:text-[9px] font-sans">
                  <div className="flex items-center gap-1 font-bold text-zinc-900 dark:text-white">
                    <span className="text-[#4285F4]">G</span>
                    <span>Your Business</span>
                  </div>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">#1 Top Rank</span>
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
          {/* CARD 04: 0% Commission Cut (Deep Emerald / Inverted)         */}
          {/* ─────────────────────────────────────────────────────────── */}
          <div className="group relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-[#09241b] dark:bg-[#061c15] text-white border border-emerald-800/40 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            {/* Top Index */}
            <div className="flex items-center gap-2 mb-2 sm:mb-4">
              <span className="font-mono text-xs font-bold text-emerald-400/60">04</span>
              <span className="h-[1px] w-6 bg-emerald-500/20" />
            </div>

            {/* Metric + Title */}
            <div className="mb-3 sm:mb-4">
              <div className="font-display font-black text-lg sm:text-2xl lg:text-3xl tracking-tight leading-none mb-1 sm:mb-1.5">
                <span>0% </span>
                <span className="text-emerald-400">Commission</span>
              </div>
              <p className="font-sans font-bold text-xs sm:text-sm text-emerald-100/70 tracking-tight">
                Direct UPI &amp; Payments
              </p>
            </div>

            {/* Tangible Visual: 3D Acrylic UPI QR Code Table Stand */}
            <div className="my-2 sm:my-3 relative flex items-center justify-center">
              {/* Stand Shadow */}
              <div className="relative w-28 sm:w-32 rounded-xl bg-white text-zinc-900 p-2 sm:p-2.5 shadow-2xl border border-white/40 transform transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-1">
                {/* QR Matrix Area with Scanner Corners */}
                <div className="relative bg-zinc-50 rounded-lg p-2 border border-zinc-200 flex flex-col items-center justify-center">
                  {/* SVG Crisp QR Code Matrix */}
                  <svg className="w-14 sm:w-16 h-14 sm:h-16 text-zinc-900" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 3h2v2h-2v-2zm-4-5h2v2h-2v-2zm4 0h2v2h-2v-2zm-2 2h2v2h-2v-2zm-2 3h2v2h-2v-2zm4 2h2v2h-2v-2zm-6-2h2v2h-2v-2zm2-5h2v2h-2v-2zm2-2h2v2h-2v-2z" />
                  </svg>
                  {/* Center Rupee Logo Badge */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-4 h-4 rounded-full bg-emerald-500 text-white font-bold text-[8px] flex items-center justify-center shadow-xs">
                      ₹
                    </div>
                  </div>
                </div>

                {/* Official UPI Brand Banner */}
                <div className="mt-2 pt-1 border-t border-zinc-200 flex items-center justify-between text-[8px] sm:text-[9px] font-bold">
                  <span className="tracking-tight text-zinc-800">Scan &amp; Pay</span>
                  <div className="flex items-center gap-0.5">
                    <span className="text-[#008542]">U</span>
                    <span className="text-[#F37021]">P</span>
                    <span className="text-[#008542]">I</span>
                    <span className="text-[#F37021]">▶</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Benefit & Corner Arrow */}
            <div className="pt-3 border-t border-emerald-500/20 flex items-center justify-between gap-2">
              <span className="text-[11px] sm:text-xs text-emerald-200/70 font-sans leading-snug">
                Direct to your bank account.
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400/60 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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
