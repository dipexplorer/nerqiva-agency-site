"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Check, MessageSquare, PhoneCall, FileText, ChevronLeft, ChevronRight } from "lucide-react";

const DELIVERABLES_META = [
  { id: "mobile", shortLabel: "Mobile Ready", num: "01" },
  { id: "leads", shortLabel: "Direct Leads", num: "02" },
  { id: "maps", shortLabel: "Google Maps", num: "03" },
  { id: "upi", shortLabel: "0% Commission", num: "04" },
];

export default function UnifiedEngine() {
  const [mobileActiveIdx, setMobileActiveIdx] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState("08:30 AM");
  const [whatsappPing, setWhatsappPing] = useState(false);
  const mobileRailRef = useRef<HTMLDivElement>(null);

  // Sync active segment with user scroll on mobile
  const handleMobileScroll = () => {
    const rail = mobileRailRef.current;
    if (!rail) return;
    const cards = rail.children;
    const railCenter = rail.scrollLeft + rail.offsetWidth / 2;
    let closestIdx = 0;
    let minDiff = Infinity;
    for (let i = 0; i < 4; i++) {
      const card = cards[i] as HTMLElement | undefined;
      if (!card) continue;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const diff = Math.abs(railCenter - cardCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = i;
      }
    }
    setMobileActiveIdx(closestIdx);
  };

  const scrollToCard = (index: number) => {
    const rail = mobileRailRef.current;
    if (!rail || !rail.children[index]) return;
    (rail.children[index] as HTMLElement).scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
    setMobileActiveIdx(index);
  };

  return (
    <section
      id="systems"
      className="scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-24 bg-transparent border-t border-border/40 relative overflow-x-clip"
    >
      <div className="section-container relative z-10">
        
        {/* ── Section Header ── */}
        <div className="flex items-baseline justify-between mb-5 sm:mb-14 pb-3.5 border-b border-border/40">
          <div className="flex items-baseline gap-2.5 sm:gap-3">
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

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* MOBILE VIEW: Compact 3D Deck along S-Shape Tilde Wave               */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <div className="sm:hidden flex flex-col w-full relative">
          
          {/* Scoped Keyframes for Fluid 3D Breathing Motion */}
          <style>{`
            @keyframes cardBreatheUp {
              0%, 100% {
                transform: translateY(-8px) scale(1.02);
                box-shadow: 0 12px 28px -6px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(90, 10, 156, 0.16);
              }
              50% {
                transform: translateY(-11px) scale(1.05);
                box-shadow: 0 18px 36px -8px rgba(90, 10, 156, 0.22), 0 0 0 1.5px rgba(90, 10, 156, 0.32);
              }
            }
            @keyframes cardBreatheDown {
              0%, 100% {
                transform: translateY(8px) scale(1.02);
                box-shadow: 0 12px 28px -6px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(90, 10, 156, 0.16);
              }
              50% {
                transform: translateY(11px) scale(1.05);
                box-shadow: 0 18px 36px -8px rgba(90, 10, 156, 0.22), 0 0 0 1.5px rgba(90, 10, 156, 0.32);
              }
            }
            .card-active-up {
              animation: cardBreatheUp 3.2s ease-in-out infinite;
            }
            .card-active-down {
              animation: cardBreatheDown 3.2s ease-in-out infinite;
            }
          `}</style>

          {/* Interactive 3D Stage */}
          <div className="relative w-full overflow-hidden -mx-4 px-4 py-2">
            
            {/* ── Horizontal S-Shape Tilde (~) Flowing Rope Wave ── */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none z-0 h-24 flex items-center overflow-hidden -rotate-[1.2deg]">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 1000 120"
                preserveAspectRatio="none"
                fill="none"
              >
                <defs>
                  {/* Subtle purple accent aura glow */}
                  <linearGradient id="sTildeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="15%" stopColor="var(--accent, #5a0a9c)" stopOpacity="0.25" />
                    <stop offset="50%" stopColor="var(--accent, #5a0a9c)" stopOpacity="0.6" />
                    <stop offset="85%" stopColor="var(--accent, #5a0a9c)" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>

                  {/* Tactile twisted braided pattern along the wave */}
                  <pattern id="sTildeBraid" width="16" height="8" patternUnits="userSpaceOnUse">
                    <path d="M0 4 Q4 1, 8 4 T16 4" stroke="#8d6e63" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.85" />
                    <path d="M0 4 Q4 7, 8 4 T16 4" stroke="#5d4037" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.75" />
                    <circle cx="8" cy="4" r="0.8" fill="#d7ccc8" />
                  </pattern>

                  {/* Depth Drop Shadow Filter */}
                  <filter id="sTildeShadow" x="-20%" y="-40%" width="140%" height="180%">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.14" />
                  </filter>
                </defs>

                {/* Ambient Soft Under-Shadow Path */}
                <path
                  d="M -30 64 C 130 22, 250 22, 380 64 C 510 106, 630 106, 760 64 C 890 22, 970 22, 1030 64"
                  stroke="rgba(0,0,0,0.12)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  className="dark:stroke-black/50"
                />

                {/* Accent Atmospheric Glow Line */}
                <path
                  d="M -30 60 C 130 18, 250 18, 380 60 C 510 102, 630 102, 760 60 C 890 18, 970 18, 1030 60"
                  stroke="url(#sTildeGrad)"
                  strokeWidth="7"
                  strokeLinecap="round"
                  filter="url(#sTildeShadow)"
                />

                {/* Primary Tactile Braided S-Curve Cord */}
                <path
                  d="M -30 60 C 130 18, 250 18, 380 60 C 510 102, 630 102, 760 60 C 890 18, 970 18, 1030 60"
                  stroke="url(#sTildeBraid)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Delicate Whispering Light Filament */}
                <path
                  d="M -30 60 C 130 18, 250 18, 380 60 C 510 102, 630 102, 760 60 C 890 18, 970 18, 1030 60"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeDasharray="6 10"
                />
              </svg>
            </div>

            {/* Scrollable 3D Perspective Track */}
            <div
              ref={mobileRailRef}
              onScroll={handleMobileScroll}
              className="flex items-center gap-3.5 overflow-x-auto snap-x snap-mandatory px-[calc(50%-110px)] py-6 scrollbar-none touch-pan-x relative z-10"
              style={{
                WebkitOverflowScrolling: "touch",
                perspective: "900px",
                transformStyle: "preserve-3d",
              }}
            >
              
              {/* ── CARD 01: 100% Mobile Ready (UP SIDE) ── */}
              <div
                onClick={() => scrollToCard(0)}
                className={`snap-center shrink-0 w-[220px] h-[190px] rounded-2xl p-3 bg-white/95 dark:bg-[#131715]/95 backdrop-blur-md border border-border/80 dark:border-white/10 flex flex-col justify-between overflow-hidden relative cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  mobileActiveIdx === 0
                    ? "card-active-up opacity-100 z-30"
                    : "opacity-50 blur-[0.2px] z-10"
                }`}
                style={
                  mobileActiveIdx === 0
                    ? undefined
                    : {
                        transform: `translateY(-8px) scale(0.84) rotateY(${
                          mobileActiveIdx > 0 ? "8deg" : "0deg"
                        })`,
                      }
                }
              >
                {/* Embedded Metallic Grommet Ring */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-zinc-400 dark:border-zinc-500 bg-white dark:bg-zinc-800 shadow-xs flex items-center justify-center pointer-events-none z-20">
                  <div className="w-1 h-1 rounded-full bg-emerald-500" />
                </div>

                <div className="w-20 h-20 rounded-full bg-emerald-500/15 blur-lg absolute -right-2 top-0 pointer-events-none" />

                {/* Compact Punchy Header */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[11px] font-bold text-emerald-600 dark:text-emerald-400">01</span>
                    <span className="h-[1px] w-3 bg-border dark:bg-white/10" />
                    <span className="font-display font-black text-[13.5px] text-text-primary tracking-tight leading-tight">
                      100% Mobile Ready
                    </span>
                  </div>
                </div>

                {/* Visual: Compact Phone UI Filling the Card */}
                <div className="relative h-[135px] flex items-end justify-center overflow-hidden z-10 pt-1">
                  <div className="relative w-36 h-[135px] rounded-t-[14px] border-t-2 border-x-2 border-zinc-900/25 dark:border-white/20 bg-white dark:bg-zinc-950 shadow-md overflow-hidden flex flex-col">
                    {/* Notch */}
                    <div className="w-full pt-1 pb-0.5 bg-white dark:bg-zinc-950 flex justify-center shrink-0">
                      <div className="w-6 h-1 bg-zinc-800 dark:bg-zinc-700 rounded-full" />
                    </div>
                    {/* Header */}
                    <div className="px-2 py-0.5 border-b border-border/60 dark:border-white/10 flex items-center justify-between bg-white dark:bg-zinc-950 shrink-0">
                      <div className="flex items-center gap-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[6px] font-black">
                          L
                        </div>
                        <span className="font-sans text-[8.5px] font-bold text-text-primary tracking-tight">
                          LabLink
                        </span>
                      </div>
                      <div className="flex items-center gap-0.5 text-[7px] font-mono text-emerald-600 dark:text-emerald-400">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                        Live
                      </div>
                    </div>

                    {/* Body with Interactive Time Slots */}
                    <div className="p-1.5 bg-zinc-50/80 dark:bg-zinc-900/60 flex-1 flex flex-col justify-between text-left">
                      <div>
                        <div className="font-sans font-bold text-[9px] text-text-primary leading-tight">
                          Home Blood Test
                        </div>
                        <div className="text-[7.5px] text-text-secondary leading-tight">
                          Doorstep in 60 mins.
                        </div>
                      </div>

                      {/* Interactive Slot Toggle */}
                      <div className="flex items-center gap-1 my-0.5">
                        {["07:30 AM", "08:30 AM"].map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedSlot(slot);
                            }}
                            className={`flex-1 py-0.5 rounded text-[7px] font-mono transition-all text-center ${
                              selectedSlot === slot
                                ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/40"
                                : "bg-white dark:bg-zinc-800 text-text-secondary border border-border/60"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>

                      <div className="w-full py-0.5 px-1 rounded bg-emerald-600 text-white text-[7.5px] font-sans font-bold flex items-center justify-between">
                        <span>Book Slot</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── CARD 02: 1-Tap Direct Leads (DOWN SIDE) ── */}
              <div
                onClick={() => scrollToCard(1)}
                className={`snap-center shrink-0 w-[220px] h-[190px] rounded-2xl p-3 bg-white/95 dark:bg-[#131715]/95 backdrop-blur-md border border-border/80 dark:border-white/10 flex flex-col justify-between overflow-hidden relative cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  mobileActiveIdx === 1
                    ? "card-active-down opacity-100 z-30"
                    : "opacity-50 blur-[0.2px] z-10"
                }`}
                style={
                  mobileActiveIdx === 1
                    ? undefined
                    : {
                        transform: `translateY(8px) scale(0.84) rotateY(${
                          mobileActiveIdx > 1
                            ? "8deg"
                            : mobileActiveIdx < 1
                            ? "-8deg"
                            : "0deg"
                        })`,
                      }
                }
              >
                {/* Embedded Metallic Grommet Ring */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-zinc-400 dark:border-zinc-500 bg-white dark:bg-zinc-800 shadow-xs flex items-center justify-center pointer-events-none z-20">
                  <div className="w-1 h-1 rounded-full bg-[#25D366]" />
                </div>

                <div className="w-20 h-20 rounded-tl-[40px] bg-gradient-to-tl from-emerald-500/15 to-transparent absolute -bottom-2 -right-2 pointer-events-none" />

                {/* Compact Punchy Header */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[11px] font-bold text-[#25D366]">02</span>
                    <span className="h-[1px] w-3 bg-border dark:bg-white/10" />
                    <span className="font-display font-black text-[13.5px] text-text-primary tracking-tight leading-tight">
                      1-Tap Direct Leads
                    </span>
                  </div>
                </div>

                {/* Visual: WhatsApp Squircle & Flow Strip Filling Card */}
                <div className="relative h-[135px] flex flex-col items-center justify-center gap-2 z-10">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-16 h-16 rounded-full bg-emerald-500/15 animate-ping pointer-events-none" style={{ animationDuration: "3s" }} />
                    <div className="absolute w-20 h-20 rounded-full border border-emerald-500/20 pointer-events-none" />

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setWhatsappPing(true);
                        setTimeout(() => setWhatsappPing(false), 600);
                      }}
                      className={`relative transition-transform cursor-pointer ${whatsappPing ? "scale-110" : "active:scale-95"}`}
                      aria-label="Test WhatsApp routing interaction"
                    >
                      <div className="w-12 h-12 rounded-[16px] bg-gradient-to-b from-[#2de078] via-[#22c55e] to-[#15803d] flex items-center justify-center shadow-lg shadow-emerald-500/25">
                        <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                      </div>
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#ef4444] border-2 border-white dark:border-zinc-900 text-[8px] font-bold text-white flex items-center justify-center shadow-xs">
                        1
                      </span>
                    </button>
                  </div>

                  {/* Flow Chip */}
                  <div className="w-full bg-zinc-100/90 dark:bg-zinc-900/90 rounded-lg py-1 px-2 border border-border/60 dark:border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <FileText size={9} className="text-text-primary" />
                      <span className="font-mono text-[7.5px] text-text-tertiary">Inquiry</span>
                    </div>
                    <span className="text-emerald-500 font-bold text-[9px]">→</span>
                    <div className="flex items-center gap-1">
                      <MessageSquare size={9} className="text-[#25D366]" fill="#25D366" />
                      <span className="font-mono text-[7.5px] font-bold text-[#25D366]">WhatsApp</span>
                    </div>
                    <span className="text-emerald-500 font-bold text-[9px]">→</span>
                    <div className="flex items-center gap-1">
                      <PhoneCall size={9} className="text-text-primary" />
                      <span className="font-mono text-[7.5px] text-text-tertiary">Call</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── CARD 03: #1 on Google Maps (UP SIDE) ── */}
              <div
                onClick={() => scrollToCard(2)}
                className={`snap-center shrink-0 w-[220px] h-[190px] rounded-2xl p-3 bg-white/95 dark:bg-[#131715]/95 backdrop-blur-md border border-border/80 dark:border-white/10 flex flex-col justify-between overflow-hidden relative cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  mobileActiveIdx === 2
                    ? "card-active-up opacity-100 z-30"
                    : "opacity-50 blur-[0.2px] z-10"
                }`}
                style={
                  mobileActiveIdx === 2
                    ? undefined
                    : {
                        transform: `translateY(-8px) scale(0.84) rotateY(${
                          mobileActiveIdx > 2
                            ? "8deg"
                            : mobileActiveIdx < 2
                            ? "-8deg"
                            : "0deg"
                        })`,
                      }
                }
              >
                {/* Embedded Metallic Grommet Ring */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-zinc-400 dark:border-zinc-500 bg-white dark:bg-zinc-800 shadow-xs flex items-center justify-center pointer-events-none z-20">
                  <div className="w-1 h-1 rounded-full bg-[#4285F4]" />
                </div>

                {/* Compact Punchy Header */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[11px] font-bold text-[#4285F4]">03</span>
                    <span className="h-[1px] w-3 bg-border dark:bg-white/10" />
                    <span className="font-display font-black text-[13.5px] text-text-primary tracking-tight leading-tight">
                      #1 on Google Maps
                    </span>
                  </div>
                </div>

                {/* Visual: High-Density Isometric 3D Map Filling the Card */}
                <div className="relative h-[135px] flex flex-col items-center justify-between py-0.5 z-10">
                  <div className="w-full h-[95px] relative flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 240 140" fill="none">
                      <path d="M120 10 L228 62 L120 126 L12 62 Z" fill="currentColor" className="text-zinc-100 dark:text-zinc-900/80" />
                      <path d="M45 45 L175 110 M75 25 L205 90" stroke="currentColor" strokeWidth="9" strokeLinecap="round" className="text-white dark:text-zinc-800" />
                      <path d="M60 90 L190 25 M95 110 L215 45" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="text-white dark:text-zinc-800" />
                      <path d="M35 55 L120 100 L180 65" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 2" />
                      <ellipse cx="120" cy="100" rx="26" ry="13" fill="#10b981" fillOpacity="0.2" />
                      <ellipse cx="120" cy="100" rx="8" ry="4" fill="#10b981" />
                      <g opacity="0.45" transform="translate(62, 38) scale(0.6)">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#71717a" />
                        <circle cx="12" cy="9" r="2.5" fill="white" />
                      </g>
                      <g opacity="0.45" transform="translate(176, 50) scale(0.6)">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#71717a" />
                        <circle cx="12" cy="9" r="2.5" fill="white" />
                      </g>
                      <g transform="translate(108, 58)">
                        <ellipse cx="12" cy="40" rx="6" ry="3" fill="#000" fillOpacity="0.3" />
                        <path d="M12 2C6.32 2 1.7 6.62 1.7 12.3c0 7.9 10.3 21.7 10.3 21.7s10.3-13.8 10.3-21.7c0-5.68-4.62-10.3-10.3-10.3z" fill="url(#emeraldPinGradMapsMobRope)" filter="drop-shadow(0 4px 8px rgba(16,185,129,0.5))" />
                        <circle cx="12" cy="12.3" r="4" fill="white" />
                      </g>
                      <defs>
                        <linearGradient id="emeraldPinGradMapsMobRope" x1="1.7" y1="2" x2="22.3" y2="34" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#34d399" />
                          <stop offset="1" stopColor="#059669" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Verification Pill */}
                  <div className="w-full bg-zinc-100/90 dark:bg-zinc-900/90 rounded-lg py-1 px-2 border border-border/60 dark:border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                      </svg>
                      <span className="font-sans text-[9px] font-bold text-text-primary truncate">Your Business</span>
                    </div>
                    <span className="font-mono text-[7.5px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded">
                      #1 Maps
                    </span>
                  </div>
                </div>
              </div>

              {/* ── CARD 04: 0% Commission (DOWN SIDE) ── */}
              <div
                onClick={() => scrollToCard(3)}
                className={`snap-center shrink-0 w-[220px] h-[190px] rounded-2xl p-3 bg-white/95 dark:bg-[#131715]/95 backdrop-blur-md border border-border/80 dark:border-white/10 flex flex-col justify-between overflow-hidden relative cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  mobileActiveIdx === 3
                    ? "card-active-down opacity-100 z-30"
                    : "opacity-50 blur-[0.2px] z-10"
                }`}
                style={
                  mobileActiveIdx === 3
                    ? undefined
                    : {
                        transform: `translateY(8px) scale(0.84) rotateY(${
                          mobileActiveIdx < 3 ? "-8deg" : "0deg"
                        })`,
                      }
                }
              >
                {/* Embedded Metallic Grommet Ring */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-zinc-400 dark:border-zinc-500 bg-white dark:bg-zinc-800 shadow-xs flex items-center justify-center pointer-events-none z-20">
                  <div className="w-1 h-1 rounded-full bg-purple-500" />
                </div>

                <div className="w-20 h-20 rounded-bl-[40px] bg-gradient-to-bl from-purple-500/15 to-transparent absolute -top-2 -right-2 pointer-events-none" />

                {/* Compact Punchy Header */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[11px] font-bold text-text-tertiary">04</span>
                    <span className="h-[1px] w-3 bg-border dark:bg-white/10" />
                    <span className="font-display font-black text-[13.5px] text-text-primary tracking-tight leading-tight">
                      0% Commission
                    </span>
                  </div>
                </div>

                {/* Visual: 3D Acrylic UPI Stand Filling the Card */}
                <div className="relative h-[135px] flex flex-col items-center justify-center z-10">
                  <div className="relative">
                    <div className="absolute top-1.5 -right-1 w-3.5 h-16 bg-zinc-800 dark:bg-zinc-950 rounded-r -skew-y-12 shadow-sm -z-10" />
                    <div className="w-24 bg-white rounded-xl p-1.5 border border-zinc-200/90 shadow-md flex flex-col items-center text-zinc-900 relative">
                      <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                        <Check size={8} strokeWidth={3} />
                      </div>
                      <div className="relative p-0.5 bg-white rounded my-0.5">
                        <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-emerald-500" />
                        <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-emerald-500" />
                        <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-emerald-500" />
                        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-emerald-500" />
                        <svg className="w-11 h-11" viewBox="0 0 29 29" fill="black">
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
                      <div className="mt-0.5 pt-0.5 border-t border-zinc-100 w-full flex items-center justify-center gap-0.5">
                        <span className="font-sans font-black italic tracking-tighter text-[9px] text-[#008542]">U</span>
                        <span className="font-sans font-black italic tracking-tighter text-[9px] text-[#F37021]">P</span>
                        <span className="font-sans font-black italic tracking-tighter text-[9px] text-[#008542]">I</span>
                      </div>
                    </div>
                    <div className="w-24 h-1.5 bg-black/15 dark:bg-black/40 blur-xs rounded-full mx-auto mt-0.5" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Minimal Bottom Nav with Interactive Touch Controls */}
          <div className="flex items-center justify-between px-2 pt-1 pb-1 text-text-tertiary font-mono text-[11px]">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-text-primary dark:text-white">
                {DELIVERABLES_META[mobileActiveIdx].num}
              </span>
              <span className="opacity-40">/</span>
              <span>04</span>
              <span className="mx-1 text-border dark:text-white/20">·</span>
              <span className="font-sans font-semibold text-text-secondary dark:text-white/80">
                {DELIVERABLES_META[mobileActiveIdx].shortLabel}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollToCard(Math.max(0, mobileActiveIdx - 1))}
                disabled={mobileActiveIdx === 0}
                aria-label="Previous deliverable"
                className="w-7 h-7 rounded-full flex items-center justify-center border border-border/80 dark:border-white/10 text-text-primary dark:text-white disabled:opacity-20 disabled:pointer-events-none active:scale-90 transition-transform cursor-pointer"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                type="button"
                onClick={() => scrollToCard(Math.min(3, mobileActiveIdx + 1))}
                disabled={mobileActiveIdx === 3}
                aria-label="Next deliverable"
                className="w-7 h-7 rounded-full flex items-center justify-center border border-border/80 dark:border-white/10 text-text-primary dark:text-white disabled:opacity-20 disabled:pointer-events-none active:scale-90 transition-transform cursor-pointer"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

        </div>

        {/* ═══════════════════════════════════════════════════════════════════ */}
        {/* DESKTOP VIEW: Handcrafted Editorial Deck (Preserved 100% Intact)    */}
        {/* ═══════════════════════════════════════════════════════════════════ */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 pt-2 pb-6 items-stretch">
          
          {/* CARD 01: 100% Mobile Ready */}
          <div className="group relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-bg-primary dark:bg-[#111614] border border-border/80 dark:border-white/10 shadow-sm hover:shadow-2xl hover:border-emerald-500/40 dark:hover:border-emerald-400/40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu will-change-transform rotate-0 sm:-rotate-1.5 lg:-rotate-2 lg:translate-y-2 hover:!rotate-0 hover:!-translate-y-3 hover:scale-[1.025] hover:z-20 flex flex-col justify-between overflow-hidden min-h-[380px] sm:min-h-[410px]">
            <div className="w-32 h-32 rounded-full bg-emerald-500/15 dark:bg-emerald-500/20 blur-xl absolute -right-2 top-0 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-text-tertiary">01</span>
                  <span className="h-[1px] w-5 bg-border dark:bg-white/10" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-tertiary opacity-60 group-hover:opacity-100 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <div className="font-display font-black text-2xl sm:text-3xl text-text-primary tracking-tight leading-tight mb-1">
                100% Mobile Ready
              </div>
              <div className="font-sans font-bold text-xs sm:text-sm text-text-secondary tracking-tight">
                Modern Business Website
              </div>
            </div>

            <div className="relative h-48 sm:h-52 flex items-end justify-center overflow-hidden my-auto pt-2 z-10">
              <div className="relative w-36 sm:w-40 h-44 sm:h-48 rounded-t-[22px] border-t-2 border-x-2 border-zinc-900/20 dark:border-white/20 bg-white dark:bg-zinc-950 shadow-xl overflow-hidden flex flex-col transform transition-transform duration-300 group-hover:scale-105">
                <div className="w-full pt-1.5 pb-1 bg-white dark:bg-zinc-950 flex justify-center shrink-0">
                  <div className="w-10 h-1 bg-zinc-800 dark:bg-zinc-700 rounded-full" />
                </div>

                <div className="px-2.5 py-1 border-b border-border/60 dark:border-white/10 flex items-center justify-between bg-white dark:bg-zinc-950 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[8px] font-black">
                      L
                    </div>
                    <span className="font-sans text-[10px] font-bold text-text-primary tracking-tight">
                      LabLink
                    </span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="w-3 h-[1px] bg-zinc-600 dark:bg-zinc-400 rounded-full" />
                    <span className="w-3 h-[1px] bg-zinc-600 dark:bg-zinc-400 rounded-full" />
                  </div>
                </div>

                <div className="p-2.5 bg-zinc-50/70 dark:bg-zinc-900/50 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[8px] font-mono font-medium mb-1">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                      Guwahati Live
                    </div>
                    <div className="font-sans font-bold text-[11.5px] sm:text-[12px] text-text-primary leading-tight tracking-tight mb-0.5">
                      Home Blood Test
                    </div>
                    <div className="text-[9px] text-text-secondary leading-tight">
                      Doorstep test in 60 mins.
                    </div>
                  </div>

                  <div className="flex items-center gap-1 my-1">
                    <span className="px-1.5 py-0.5 rounded-md bg-white dark:bg-zinc-800 border border-border/60 dark:border-white/10 text-[8px] font-mono text-text-secondary">
                      07:30 AM
                    </span>
                    <span className="px-1.5 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-[8px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      08:30 AM ✓
                    </span>
                  </div>

                  <div className="w-full py-1 px-2 rounded-md bg-emerald-600 text-white text-[9px] font-sans font-bold flex items-center justify-between shadow-xs">
                    <span>Book Collection Slot</span>
                    <span className="text-[10px]">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 02: 1-Tap Direct Leads */}
          <div className="group relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-bg-primary dark:bg-[#111614] border border-border/80 dark:border-white/10 shadow-sm hover:shadow-2xl hover:border-emerald-500/40 dark:hover:border-emerald-400/40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu will-change-transform rotate-0 sm:rotate-1.5 lg:rotate-1.5 lg:-translate-y-2 hover:!rotate-0 hover:!-translate-y-3 hover:scale-[1.025] hover:z-20 flex flex-col justify-between overflow-hidden min-h-[380px] sm:min-h-[410px]">
            <div className="w-28 h-28 rounded-tl-[70px] bg-gradient-to-tl from-emerald-500/15 to-transparent absolute -bottom-2 -right-2 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-text-tertiary">02</span>
                  <span className="h-[1px] w-5 bg-border dark:bg-white/10" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-tertiary opacity-60 group-hover:opacity-100 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <div className="font-display font-black text-2xl sm:text-3xl text-text-primary tracking-tight leading-tight mb-1">
                1-Tap Direct Leads
              </div>
              <div className="font-sans font-bold text-xs sm:text-sm text-text-secondary tracking-tight">
                Instant WhatsApp Routing
              </div>
            </div>

            <div className="relative h-48 sm:h-52 flex flex-col items-center justify-between py-1 my-auto z-10">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full border border-emerald-500/20 pointer-events-none" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full border border-emerald-500/10 pointer-events-none" />

              <div className="relative mt-2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[20px] bg-gradient-to-b from-[#2de078] via-[#22c55e] to-[#15803d] flex items-center justify-center shadow-[0_10px_20px_-4px_rgba(34,197,94,0.45),0_4px_0_#14532d,inset_0_2px_4px_rgba(255,255,255,0.6)] transform group-hover:scale-105 transition-transform">
                  <svg className="w-8 h-8 text-white fill-current drop-shadow-xs" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <div className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 rounded-full bg-[#ef4444] border-2 border-white dark:border-zinc-900 shadow-md flex items-center justify-center text-[9px] font-black text-white">
                  1
                </div>
              </div>

              <div className="w-full bg-zinc-100/90 dark:bg-zinc-900/90 rounded-xl p-2 border border-border/60 dark:border-white/10 flex items-center justify-between shadow-xs">
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-6 h-6 rounded-md bg-white dark:bg-zinc-800 border border-border/50 dark:border-white/10 flex items-center justify-center text-text-primary shadow-xs">
                    <FileText size={11} />
                  </div>
                  <span className="font-mono text-[8.5px] text-text-tertiary">Inquiry</span>
                </div>
                <span className="text-emerald-500 font-bold text-xs select-none">→</span>
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-6 h-6 rounded-md bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shadow-xs">
                    <MessageSquare size={11} fill="#25D366" />
                  </div>
                  <span className="font-mono text-[8.5px] font-bold text-[#25D366]">WhatsApp</span>
                </div>
                <span className="text-emerald-500 font-bold text-xs select-none">→</span>
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-6 h-6 rounded-md bg-white dark:bg-zinc-800 border border-border/50 dark:border-white/10 flex items-center justify-center text-text-primary shadow-xs">
                    <PhoneCall size={11} />
                  </div>
                  <span className="font-mono text-[8.5px] text-text-tertiary">Your Phone</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 03: #1 on Google Maps */}
          <div className="group relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-bg-primary dark:bg-[#111614] border border-border/80 dark:border-white/10 shadow-sm hover:shadow-2xl hover:border-emerald-500/40 dark:hover:border-emerald-400/40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu will-change-transform rotate-0 sm:-rotate-1 lg:-rotate-1 lg:translate-y-2 hover:!rotate-0 hover:!-translate-y-3 hover:scale-[1.025] hover:z-20 flex flex-col justify-between overflow-hidden min-h-[380px] sm:min-h-[410px]">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-text-tertiary">03</span>
                  <span className="h-[1px] w-5 bg-border dark:bg-white/10" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-tertiary opacity-60 group-hover:opacity-100 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <div className="font-display font-black text-2xl sm:text-3xl text-text-primary tracking-tight leading-tight mb-1">
                #1 on Google Maps
              </div>
              <div className="font-sans font-bold text-xs sm:text-sm text-text-secondary tracking-tight">
                Local Search Ranking
              </div>
            </div>

            <div className="relative h-48 sm:h-52 flex flex-col items-center justify-between py-1 my-auto z-10">
              <div className="w-full h-32 relative flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 240 140" fill="none">
                  <path d="M120 10 L228 62 L120 126 L12 62 Z" fill="currentColor" className="text-zinc-100/90 dark:text-zinc-900/60" />
                  <path d="M45 45 L175 110 M75 25 L205 90" stroke="currentColor" strokeWidth="9" strokeLinecap="round" className="text-white dark:text-zinc-800" />
                  <path d="M60 90 L190 25 M95 110 L215 45" stroke="currentColor" strokeWidth="8" strokeLinecap="round" className="text-white dark:text-zinc-800" />
                  <path d="M35 55 L120 100 L180 65" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeDasharray="3 2" />
                  <ellipse cx="120" cy="100" rx="30" ry="15" fill="#10b981" fillOpacity="0.15" />
                  <ellipse cx="120" cy="100" rx="18" ry="9" fill="#10b981" fillOpacity="0.25" />
                  <ellipse cx="120" cy="100" rx="8" ry="4" fill="#10b981" />
                  <g opacity="0.4" transform="translate(65, 38) scale(0.55)">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#71717a" />
                    <circle cx="12" cy="9" r="2.5" fill="white" />
                  </g>
                  <g opacity="0.4" transform="translate(175, 52) scale(0.55)">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#71717a" />
                    <circle cx="12" cy="9" r="2.5" fill="white" />
                  </g>
                  <g transform="translate(108, 62)">
                    <ellipse cx="12" cy="38" rx="5" ry="2.5" fill="#000" fillOpacity="0.25" />
                    <path d="M12 2C6.32 2 1.7 6.62 1.7 12.3c0 7.9 10.3 21.7 10.3 21.7s10.3-13.8 10.3-21.7c0-5.68-4.62-10.3-10.3-10.3z" fill="url(#emeraldPinGradMaps)" filter="drop-shadow(0 4px 6px rgba(16,185,129,0.5))" />
                    <circle cx="12" cy="12.3" r="3.8" fill="white" />
                  </g>
                  <path d="M120 85 Q 160 48 205 18" stroke="#10b981" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  <path d="M195 16 L207 17 L204 28" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="emeraldPinGradMaps" x1="1.7" y1="2" x2="22.3" y2="34" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#34d399" />
                      <stop offset="1" stopColor="#059669" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="w-full bg-zinc-100/90 dark:bg-zinc-900/90 rounded-xl p-2 border border-border/60 dark:border-white/10 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-1.5 min-w-0">
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
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
          </div>

          {/* CARD 04: 0% Commission */}
          <div className="group relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-bg-primary dark:bg-[#111614] border border-border/80 dark:border-white/10 shadow-sm hover:shadow-2xl hover:border-emerald-500/40 dark:hover:border-emerald-400/40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu will-change-transform rotate-0 sm:rotate-2 lg:rotate-2 lg:-translate-y-1 hover:!rotate-0 hover:!-translate-y-3 hover:scale-[1.025] hover:z-20 flex flex-col justify-between overflow-hidden min-h-[380px] sm:min-h-[410px]">
            <div className="w-28 h-28 rounded-bl-[70px] bg-gradient-to-bl from-emerald-500/15 to-transparent absolute -top-2 -right-2 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-text-tertiary">04</span>
                  <span className="h-[1px] w-5 bg-border dark:bg-white/10" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-tertiary opacity-60 group-hover:opacity-100 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <div className="font-display font-black text-2xl sm:text-3xl text-text-primary tracking-tight leading-tight mb-1">
                0% Commission
              </div>
              <div className="font-sans font-bold text-xs sm:text-sm text-text-secondary tracking-tight">
                Direct UPI &amp; Bank Payouts
              </div>
            </div>

            <div className="relative h-48 sm:h-52 flex flex-col items-center justify-center my-auto z-10">
              <div className="absolute top-1 right-2 text-zinc-300 dark:text-zinc-700 font-mono text-[9px] select-none tracking-widest">
                \ | /
              </div>

              <div className="relative">
                <div className="absolute top-3 -right-2 w-5 h-28 bg-zinc-800 dark:bg-zinc-950 rounded-r-md -skew-y-12 shadow-md -z-10" />

                <div className="w-28 sm:w-32 bg-white rounded-2xl p-2.5 border border-zinc-200/90 shadow-xl flex flex-col items-center text-zinc-900 relative">
                  <div className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                    <Check size={10} strokeWidth={3} />
                  </div>

                  <div className="relative p-1.5 bg-white rounded-lg my-0.5">
                    <div className="absolute top-0.5 left-0.5 w-2 h-2 border-t-2 border-l-2 border-emerald-500" />
                    <div className="absolute top-0.5 right-0.5 w-2 h-2 border-t-2 border-r-2 border-emerald-500" />
                    <div className="absolute bottom-0.5 left-0.5 w-2 h-2 border-b-2 border-l-2 border-emerald-500" />
                    <div className="absolute bottom-0.5 right-0.5 w-2 h-2 border-b-2 border-r-2 border-emerald-500" />
                    
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

                  <div className="mt-1 pt-1 border-t border-zinc-100 w-full flex items-center justify-center gap-0.5">
                    <span className="font-sans font-black italic tracking-tighter text-[11px] text-[#008542]">U</span>
                    <span className="font-sans font-black italic tracking-tighter text-[11px] text-[#F37021]">P</span>
                    <span className="font-sans font-black italic tracking-tighter text-[11px] text-[#008542]">I</span>
                    <svg className="w-1.5 h-1.5 ml-0.5 fill-[#F37021]" viewBox="0 0 10 10">
                      <polygon points="0,0 10,5 0,10" />
                    </svg>
                  </div>
                </div>

                <div className="w-28 sm:w-32 h-2 bg-black/15 dark:bg-black/40 blur-xs rounded-full mx-auto mt-1" />
              </div>
            </div>
          </div>

        </div>

        {/* ── Understated Section Guarantee Line (Desktop only, removed useless text on mobile) ── */}
        <div className="hidden sm:flex mt-14 pt-3.5 border-t border-border/40 flex-row items-center justify-between gap-2 text-left text-xs font-mono text-text-tertiary">
          <span>Built for revenue, not applause.</span>
          <span>100% Code &amp; Asset Ownership · Zero Monthly Lock-Ins</span>
        </div>

      </div>
    </section>
  );
}
