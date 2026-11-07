"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Check, MessageSquare, PhoneCall, FileText } from "lucide-react";

export default function UnifiedEngine() {
  return (
    <section
      id="systems"
      className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 bg-transparent border-t border-border/40 relative overflow-x-clip"
    >
      <div className="section-container relative z-10">
        {/* Section Header: Pure Typographic Authority */}
        <div className="flex items-baseline justify-between mb-10 sm:mb-14 pb-4 border-b border-border/40">
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
          Handcrafted Editorial Deliverables Deck:
          4 equal studio deliverables with side-by-side (typography on left, physical visual on right)
          composition inspired directly by reference artwork.
          No extra filler pills, no redundant footer sentences.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 pt-2 pb-6 items-stretch">
          
          {/* ─────────────────────────────────────────────────────────── */}
          {/* CARD 01: 100% Mobile Ready (Website)                       */}
          {/* ─────────────────────────────────────────────────────────── */}
          <div className="group relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-bg-primary dark:bg-[#111614] border border-border/80 dark:border-white/10 shadow-sm hover:shadow-2xl hover:border-emerald-500/40 dark:hover:border-emerald-400/40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu will-change-transform -rotate-1 sm:-rotate-1.5 lg:-rotate-2 lg:translate-y-2 hover:!rotate-0 hover:!-translate-y-3 hover:scale-[1.025] hover:z-20 flex flex-col justify-between overflow-hidden min-h-[330px] sm:min-h-[350px]">
            {/* Emerald circular background glow */}
            <div className="w-32 h-32 rounded-full bg-emerald-500/15 dark:bg-emerald-500/20 blur-xl absolute -right-2 top-2 pointer-events-none" />

            {/* Split Composition: Left Typography & Right Smartphone Mockup */}
            <div className="relative z-10 flex items-center justify-between gap-2 h-full my-auto">
              {/* Left Column: Index + Headline + Subtitle + Launch Arrow */}
              <div className="flex flex-col justify-between h-full py-1 pr-2 max-w-[56%] shrink-0">
                <div>
                  {/* Index */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs font-bold text-text-tertiary">01</span>
                    <span className="h-[1px] w-5 bg-border dark:bg-white/10" />
                  </div>

                  {/* Display Metric */}
                  <div className="font-display font-black text-3xl sm:text-4xl text-text-primary tracking-tight leading-[0.95] mb-2">
                    100%<br />
                    <span>Mobile</span><br />
                    <span className="text-emerald-500">Ready</span>
                  </div>

                  {/* Subtitle */}
                  <div className="font-sans font-bold text-xs sm:text-[13px] text-text-secondary tracking-tight leading-snug">
                    High-Converting<br />Website
                  </div>
                </div>

                {/* Corner Launch Arrow */}
                <div className="pt-4">
                  <ArrowUpRight className="w-4 h-4 text-text-tertiary opacity-60 group-hover:opacity-100 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>

              {/* Right Column: Smartphone Mockup with Real LabLink UI */}
              <div className="relative flex-1 flex items-end justify-center self-end h-[240px] overflow-hidden">
                <div className="relative w-32 sm:w-36 h-56 rounded-t-[24px] border-t-2 border-x-2 border-zinc-900/15 dark:border-white/20 bg-zinc-950 shadow-xl overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
                  {/* Speaker Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-zinc-800 rounded-full z-20" />
                  
                  {/* Real LabLink Mobile Website Screenshot */}
                  <div className="relative w-full h-full pt-3.5 overflow-hidden bg-zinc-900">
                    <Image
                      src="/images/projects/lablink/booking.png"
                      alt="LabLink Mobile Website"
                      width={860}
                      height={1864}
                      className="w-full h-auto object-cover object-top"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-bg-primary dark:from-[#111614] to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────── */}
          {/* CARD 02: 1-Tap Direct Leads (WhatsApp)                     */}
          {/* ─────────────────────────────────────────────────────────── */}
          <div className="group relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-bg-primary dark:bg-[#111614] border border-border/80 dark:border-white/10 shadow-sm hover:shadow-2xl hover:border-emerald-500/40 dark:hover:border-emerald-400/40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu will-change-transform rotate-1 sm:rotate-1.5 lg:rotate-1.5 lg:-translate-y-2 hover:!rotate-0 hover:!-translate-y-3 hover:scale-[1.025] hover:z-20 flex flex-col justify-between overflow-hidden min-h-[330px] sm:min-h-[350px]">
            {/* Organic Emerald Corner Curve */}
            <div className="w-28 h-28 rounded-tl-[70px] bg-gradient-to-tl from-emerald-500/15 to-transparent absolute -bottom-2 -right-2 pointer-events-none" />

            {/* Top Section: Left (Typography) & Right (3D WhatsApp Badge) */}
            <div className="relative z-10 flex items-start justify-between gap-2">
              {/* Left Column: Index + Headline + Subtitle */}
              <div className="flex flex-col pr-2">
                {/* Index */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs font-bold text-text-tertiary">02</span>
                  <span className="h-[1px] w-5 bg-border dark:bg-white/10" />
                </div>

                {/* Display Metric */}
                <div className="font-display font-black text-3xl sm:text-4xl text-text-primary tracking-tight leading-[0.95] mb-2">
                  1-Tap<br />
                  <span className="text-emerald-500">Direct</span><br />
                  <span className="text-emerald-500">Leads</span>
                </div>

                {/* Subtitle */}
                <div className="font-sans font-bold text-xs sm:text-[13px] text-text-secondary tracking-tight leading-snug">
                  Instant WhatsApp<br />Routing
                </div>
              </div>

              {/* Right Column: 3D Glossy WhatsApp Squircle Badge with concentric rings */}
              <div className="relative shrink-0 pt-2">
                {/* Concentric rings */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-emerald-500/20 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border border-emerald-500/10 pointer-events-none" />

                <div className="relative">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[20px] bg-gradient-to-b from-[#2de078] via-[#22c55e] to-[#15803d] flex items-center justify-center shadow-[0_10px_20px_-4px_rgba(34,197,94,0.45),0_4px_0_#14532d,inset_0_2px_4px_rgba(255,255,255,0.6)] transform group-hover:scale-105 transition-transform">
                    <svg className="w-8 h-8 text-white fill-current drop-shadow-xs" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </div>

                  {/* Red Notification Badge */}
                  <div className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 rounded-full bg-[#ef4444] border-2 border-white dark:border-zinc-900 shadow-md flex items-center justify-center text-[9px] font-black text-white">
                    1
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: 3-Step Routing Sequence Bar */}
            <div className="relative z-10 w-full bg-zinc-100/90 dark:bg-zinc-900/90 rounded-xl p-2 border border-border/60 dark:border-white/10 flex items-center justify-between shadow-xs mt-4">
              {/* Step 1: Inquiry */}
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-6 h-6 rounded-md bg-white dark:bg-zinc-800 border border-border/50 dark:border-white/10 flex items-center justify-center text-text-primary shadow-xs">
                  <FileText size={11} />
                </div>
                <span className="font-mono text-[8.5px] text-text-tertiary">Inquiry</span>
              </div>

              <span className="text-emerald-500 font-bold text-xs select-none">→</span>

              {/* Step 2: WhatsApp */}
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-6 h-6 rounded-md bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shadow-xs">
                  <MessageSquare size={11} fill="#25D366" />
                </div>
                <span className="font-mono text-[8.5px] font-bold text-[#25D366]">WhatsApp</span>
              </div>

              <span className="text-emerald-500 font-bold text-xs select-none">→</span>

              {/* Step 3: Your Phone */}
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-6 h-6 rounded-md bg-white dark:bg-zinc-800 border border-border/50 dark:border-white/10 flex items-center justify-center text-text-primary shadow-xs">
                  <PhoneCall size={11} />
                </div>
                <span className="font-mono text-[8.5px] text-text-tertiary">Your Phone</span>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────── */}
          {/* CARD 03: #1 Local 3-Pack (Google Maps)                     */}
          {/* ─────────────────────────────────────────────────────────── */}
          <div className="group relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-bg-primary dark:bg-[#111614] border border-border/80 dark:border-white/10 shadow-sm hover:shadow-2xl hover:border-emerald-500/40 dark:hover:border-emerald-400/40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu will-change-transform -rotate-0.5 sm:-rotate-1 lg:-rotate-1 lg:translate-y-2 hover:!rotate-0 hover:!-translate-y-3 hover:scale-[1.025] hover:z-20 flex flex-col justify-between overflow-hidden min-h-[330px] sm:min-h-[350px]">
            {/* Top Section: Left (Typography) & Right (3D Isometric Map with glowing Pin) */}
            <div className="relative z-10 flex items-start justify-between gap-1">
              {/* Left Column: Index + Headline + Subtitle */}
              <div className="flex flex-col pr-1 shrink-0">
                {/* Index */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-xs font-bold text-text-tertiary">03</span>
                  <span className="h-[1px] w-5 bg-border dark:bg-white/10" />
                </div>

                {/* Display Metric */}
                <div className="font-display font-black text-3xl sm:text-4xl text-text-primary tracking-tight leading-[0.95] mb-2">
                  <span className="text-emerald-500">#1 Local</span><br />
                  3-Pack
                </div>

                {/* Subtitle */}
                <div className="font-sans font-bold text-xs sm:text-[13px] text-text-secondary tracking-tight leading-snug">
                  Google Maps<br />Ranking
                </div>
              </div>

              {/* Right Column: 3D Map Vector Plane with Pin and Growth Curve */}
              <div className="relative flex-1 h-32 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 160 120" fill="none">
                  {/* Perspective Ground */}
                  <path d="M80 8 L152 50 L80 105 L8 50 Z" fill="currentColor" className="text-zinc-100/90 dark:text-zinc-900/60" />
                  
                  {/* Streets */}
                  <path d="M30 38 L110 90 M50 22 L135 75" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="text-white dark:text-zinc-800" />
                  <path d="M40 75 L125 22 M65 90 L140 40" stroke="currentColor" strokeWidth="7" strokeLinecap="round" className="text-white dark:text-zinc-800" />
                  
                  {/* Green Route */}
                  <path d="M25 48 L80 85 L125 55" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 2" />
                  
                  {/* Concentric Radar Circles around Pin */}
                  <ellipse cx="80" cy="85" rx="24" ry="12" fill="#10b981" fillOpacity="0.15" />
                  <ellipse cx="80" cy="85" rx="14" ry="7" fill="#10b981" fillOpacity="0.25" />
                  <ellipse cx="80" cy="85" rx="6" ry="3" fill="#10b981" />
                  
                  {/* Competitor Pin */}
                  <g opacity="0.4" transform="translate(42, 32) scale(0.5)">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#71717a" />
                    <circle cx="12" cy="9" r="2.5" fill="white" />
                  </g>
                  
                  {/* 3D Glowing Emerald Pin (Center #1) */}
                  <g transform="translate(71, 48)">
                    <ellipse cx="9" cy="32" rx="4" ry="2" fill="#000" fillOpacity="0.25" />
                    <path d="M9 2C4.58 2 1 5.58 1 10c0 6.5 8 18 8 18s8-11.5 8-18c0-4.42-3.58-8-8-8z" fill="url(#emeraldPinGradSmall)" filter="drop-shadow(0 3px 5px rgba(16,185,129,0.5))" />
                    <circle cx="9" cy="10" r="3" fill="white" />
                  </g>
                  
                  {/* Upward Growth Curve */}
                  <path d="M80 70 Q 110 38 145 15" stroke="#10b981" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M136 14 L146 14 L144 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  
                  <defs>
                    <linearGradient id="emeraldPinGradSmall" x1="1" y1="2" x2="17" y2="28" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#34d399" />
                      <stop offset="1" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Bottom: Google Verified Rank Pill */}
            <div className="relative z-10 w-full bg-zinc-100/90 dark:bg-zinc-900/90 rounded-xl p-2.5 border border-border/60 dark:border-white/10 flex items-center justify-between shadow-xs mt-4">
              <div className="flex items-center gap-2 min-w-0">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span className="font-sans text-[11px] font-bold text-text-primary truncate">Your Business</span>
              </div>
              <span className="font-mono text-[9px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-sm shrink-0">
                #1 Maps ↗
              </span>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────── */}
          {/* CARD 04: 0% Commission Cut (UPI & Payments)                */}
          {/* ─────────────────────────────────────────────────────────── */}
          <div className="group relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-bg-primary dark:bg-[#111614] border border-border/80 dark:border-white/10 shadow-sm hover:shadow-2xl hover:border-emerald-500/40 dark:hover:border-emerald-400/40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu will-change-transform rotate-1 sm:rotate-2 lg:rotate-2 lg:-translate-y-1 hover:!rotate-0 hover:!-translate-y-3 hover:scale-[1.025] hover:z-20 flex flex-col justify-between overflow-hidden min-h-[330px] sm:min-h-[350px]">
            {/* Organic Emerald Corner Curve in Top Right */}
            <div className="w-28 h-28 rounded-bl-[70px] bg-gradient-to-bl from-emerald-500/15 to-transparent absolute -top-2 -right-2 pointer-events-none" />

            {/* Split Composition: Left Typography & Right 3D Stand */}
            <div className="relative z-10 flex items-center justify-between gap-2 h-full my-auto">
              {/* Left Column: Index + Headline + Subtitle + Launch Arrow */}
              <div className="flex flex-col justify-between h-full py-1 pr-2 max-w-[56%] shrink-0">
                <div>
                  {/* Index */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs font-bold text-text-tertiary">04</span>
                    <span className="h-[1px] w-5 bg-border dark:bg-white/10" />
                  </div>

                  {/* Display Metric */}
                  <div className="font-display font-black text-3xl sm:text-4xl text-text-primary tracking-tight leading-[0.95] mb-2">
                    0%<br />
                    <span>Commission</span><br />
                    <span className="text-emerald-500">Cut</span>
                  </div>

                  {/* Subtitle */}
                  <div className="font-sans font-bold text-xs sm:text-[13px] text-text-secondary tracking-tight leading-snug">
                    Direct UPI &amp;<br />Payments
                  </div>
                </div>

                {/* Corner Launch Arrow */}
                <div className="pt-4">
                  <ArrowUpRight className="w-4 h-4 text-text-tertiary opacity-60 group-hover:opacity-100 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>

              {/* Right Column: 3D Acrylic UPI QR Stand */}
              <div className="relative flex-1 flex flex-col items-center justify-center">
                {/* Radiating Accent Sound/Energy Lines */}
                <div className="absolute -top-3 right-1 text-zinc-300 dark:text-zinc-700 font-mono text-[9px] select-none tracking-widest">
                  \ | /
                </div>

                {/* 3D Acrylic Stand */}
                <div className="relative">
                  {/* Dark Kickstand behind acrylic plate */}
                  <div className="absolute top-3 -right-2 w-5 h-28 bg-zinc-800 dark:bg-zinc-950 rounded-r-md -skew-y-12 shadow-md -z-10" />

                  {/* Front White Acrylic Plate */}
                  <div className="w-28 sm:w-32 bg-white rounded-2xl p-2.5 border border-zinc-200/90 shadow-xl flex flex-col items-center text-zinc-900 relative">
                    {/* Verified Check Badge */}
                    <div className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                      <Check size={10} strokeWidth={3} />
                    </div>

                    {/* QR Code with Emerald Scan Framing Brackets */}
                    <div className="relative p-1.5 bg-white rounded-lg my-0.5">
                      <div className="absolute top-0.5 left-0.5 w-2 h-2 border-t-2 border-l-2 border-emerald-500" />
                      <div className="absolute top-0.5 right-0.5 w-2 h-2 border-t-2 border-r-2 border-emerald-500" />
                      <div className="absolute bottom-0.5 left-0.5 w-2 h-2 border-b-2 border-l-2 border-emerald-500" />
                      <div className="absolute bottom-0.5 right-0.5 w-2 h-2 border-b-2 border-r-2 border-emerald-500" />
                      
                      {/* Clean Vector QR Code */}
                      <svg className="w-14 h-14 sm:w-16 sm:h-16" viewBox="0 0 29 29" fill="black">
                        <rect x="0" y="0" width="7" height="7" fill="black" />
                        <rect x="1" y="1" width="5" height="5" fill="white" />
                        <rect x="2" y="2" width="3" height="3" fill="black" />
                        <rect x="22" y="0" width="7" height="7" fill="black" />
                        <rect x="23" y="1" width="5" height="5" fill="white" />
                        <rect x="24" y="2" width="3" height="3" fill="black" />
                        <rect x="0" y="22" width="7" height="7" fill="black" />
                        <rect x="1" y="23" width="5" height="5" fill="white" />
                        <rect x="2" y="24" width="3" height="3" fill="black" />
                        <rect x="8" y="6" width="1" height="1" /><rect x="10" y="6" width="1" height="1" /><rect x="12" y="6" width="1" height="1" /><rect x="14" y="6" width="1" height="1" /><rect x="16" y="6" width="1" height="1" /><rect x="18" y="6" width="1" height="1" /><rect x="20" y="6" width="1" height="1" />
                        <rect x="6" y="8" width="1" height="1" /><rect x="6" y="10" width="1" height="1" /><rect x="6" y="12" width="1" height="1" /><rect x="6" y="14" width="1" height="1" /><rect x="6" y="16" width="1" height="1" /><rect x="6" y="18" width="1" height="1" /><rect x="6" y="20" width="1" height="1" />
                        <rect x="9" y="9" width="3" height="3" /><rect x="13" y="10" width="2" height="1" /><rect x="17" y="9" width="2" height="2" />
                        <rect x="10" y="13" width="2" height="2" /><rect x="14" y="13" width="3" height="2" /><rect x="19" y="12" width="1" height="3" />
                        <rect x="8" y="17" width="2" height="2" /><rect x="12" y="16" width="2" height="3" /><rect x="16" y="17" width="3" height="2" />
                        <rect x="9" y="22" width="2" height="2" /><rect x="13" y="23" width="2" height="2" /><rect x="18" y="22" width="3" height="1" /><rect x="23" y="23" width="3" height="2" />
                      </svg>
                    </div>

                    {/* Official UPI Logo at Base */}
                    <div className="mt-1 pt-1 border-t border-zinc-100 w-full flex items-center justify-center gap-0.5">
                      <span className="font-sans font-black italic tracking-tighter text-[11px] text-[#008542]">U</span>
                      <span className="font-sans font-black italic tracking-tighter text-[11px] text-[#F37021]">P</span>
                      <span className="font-sans font-black italic tracking-tighter text-[11px] text-[#008542]">I</span>
                      <svg className="w-1.5 h-1.5 ml-0.5 fill-[#F37021]" viewBox="0 0 10 10">
                        <polygon points="0,0 10,5 0,10" />
                      </svg>
                    </div>
                  </div>

                  {/* Floor Shadow */}
                  <div className="w-28 sm:w-32 h-2 bg-black/15 dark:bg-black/40 blur-xs rounded-full mx-auto mt-1" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Understated Section Guarantee Line */}
        <div className="mt-10 sm:mt-14 pt-4 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-text-tertiary">
          <span>Built for revenue, not applause.</span>
          <span>100% Code &amp; Asset Ownership · Zero Monthly Lock-Ins</span>
        </div>
      </div>
    </section>
  );
}
