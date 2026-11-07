"use client";

import React from "react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

/* ─── Visual Artifact: Phase 01 — Blueprint Wireframe ──────────────────── */
function BlueprintArtifact() {
  return (
    <div className="relative w-full h-48 sm:h-52 flex items-center justify-center select-none">
      {/* Dot-grid paper texture */}
      <div
        className="absolute inset-0 rounded-xl opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, #A1A1AA 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* Blueprint card */}
      <div className="relative w-52 sm:w-60 bg-white dark:bg-zinc-900 rounded-xl border border-border/80 dark:border-zinc-700 shadow-lg p-4 group-hover:scale-[1.03] transition-transform duration-300">
        {/* Top bar: title + status */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
          </div>
          <span className="font-mono text-[9px] text-text-tertiary uppercase tracking-wider">scope.fig</span>
        </div>

        {/* Mobile wireframe skeleton */}
        <div className="flex gap-2.5 items-start">
          {/* Phone outline */}
          <div className="w-14 h-20 rounded-lg border-2 border-zinc-300 dark:border-zinc-600 flex flex-col overflow-hidden shrink-0">
            <div className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-700 shrink-0 flex items-center justify-center">
              <div className="w-4 h-0.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
            </div>
            <div className="flex-1 p-1 space-y-1">
              <div className="w-full h-2.5 bg-emerald-100 dark:bg-emerald-900/40 rounded-sm" />
              <div className="w-3/4 h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-sm" />
              <div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-sm" />
              <div className="w-2/3 h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-sm" />
              <div className="w-full h-4 bg-emerald-500/80 rounded-sm mt-1" />
            </div>
          </div>

          {/* Annotations */}
          <div className="flex-1 space-y-2 pt-1">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-px bg-zinc-400 dark:bg-zinc-500" />
              <span className="font-mono text-[9px] text-text-tertiary">Hero CTA</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-px bg-zinc-400 dark:bg-zinc-500" />
              <span className="font-mono text-[9px] text-text-tertiary">WhatsApp tap</span>
            </div>
            <div className="flex items-center gap-1.5 mt-2">
              <div className="w-2 h-px bg-emerald-500" />
              <span className="font-mono text-[9px] text-emerald-600 dark:text-emerald-400">Conversion path</span>
            </div>
            <div className="mt-2 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/30">
              <span className="font-mono text-[9px] text-emerald-700 dark:text-emerald-300">48h → Wireframe ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Visual Artifact: Phase 02 — Build Terminal ───────────────────────── */
function BuildTerminalArtifact() {
  return (
    <div className="relative w-full h-48 sm:h-52 flex items-center justify-center select-none">
      {/* Terminal window */}
      <div className="w-full max-w-[260px] sm:max-w-[280px] bg-zinc-950 rounded-xl border border-zinc-800 shadow-2xl overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
        {/* Title bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-900 border-b border-zinc-800">
          <div className="w-2 h-2 rounded-full bg-red-500/70" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
          <div className="w-2 h-2 rounded-full bg-emerald-500/70" />
          <span className="font-mono text-[10px] text-zinc-500 ml-auto">nerqiva — build</span>
        </div>

        {/* Terminal output */}
        <div className="p-3 space-y-1.5 font-mono text-[11px]">
          <div>
            <span className="text-emerald-400">✓</span>
            <span className="text-zinc-400 ml-1.5">Compiled Next.js 16</span>
          </div>
          <div>
            <span className="text-emerald-400">✓</span>
            <span className="text-zinc-400 ml-1.5">WhatsApp routing wired</span>
          </div>
          <div>
            <span className="text-emerald-400">✓</span>
            <span className="text-zinc-400 ml-1.5">Google Maps indexed</span>
          </div>
          <div className="pt-1 border-t border-zinc-800">
            <span className="text-zinc-500">$</span>
            <span className="text-emerald-400 ml-1.5">Staging deployed</span>
            <span className="inline-block w-1.5 h-3.5 bg-emerald-400 ml-1 animate-pulse rounded-sm" />
          </div>
        </div>

        {/* Staging URL strip */}
        <div className="px-3 pb-3">
          <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-lg px-2.5 py-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            <span className="font-mono text-[10px] text-zinc-300 truncate">preview.nerqiva.com/client</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Visual Artifact: Phase 03 — Live Google Result ───────────────────── */
function LiveLaunchArtifact() {
  return (
    <div className="relative w-full h-48 sm:h-52 flex items-center justify-center select-none">
      {/* Outer glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-40 rounded-full bg-emerald-500/10 blur-2xl" />
      </div>

      {/* Google search card */}
      <div className="relative w-full max-w-[260px] sm:max-w-[280px] bg-white dark:bg-zinc-900 rounded-xl border border-border dark:border-zinc-700 shadow-lg overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
        {/* Search bar */}
        <div className="flex items-center gap-2 px-3 py-2.5 border-b border-border/60 dark:border-zinc-800">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0" aria-hidden>
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          <span className="font-sans text-[11px] text-zinc-500 dark:text-zinc-400 truncate flex-1">your business guwahati</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-zinc-400 shrink-0">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
        </div>

        {/* Search result */}
        <div className="p-3">
          {/* Favicon + domain */}
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
              <span className="text-white text-[8px] font-black">N</span>
            </div>
            <div>
              <div className="font-sans text-[10px] text-zinc-800 dark:text-zinc-200 font-medium">yourbusiness.com</div>
              <div className="font-sans text-[9px] text-zinc-500 dark:text-zinc-500">yourbusiness.com › home</div>
            </div>
          </div>
          <div className="font-sans text-sm text-blue-600 dark:text-blue-400 font-semibold leading-tight mb-1">
            Your Business — Book Now
          </div>
          <div className="font-sans text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed mb-2.5">
            Instant booking available. Serving Guwahati...
          </div>

          {/* Live badge */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[9px] text-emerald-700 dark:text-emerald-400 font-semibold uppercase tracking-wider">Live on Google</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ────────────────────────────────────────────────────── */
interface SprintPhase {
  number: string;
  days: string;
  phase: string;
  title: string;
  statusTag: string;
  deliverableBadge: string;
  isFinal?: boolean;
  visual: React.ReactNode;
}

export default function SprintDelivery() {
  const phases: SprintPhase[] = [
    {
      number: "01",
      days: "Days 1–2",
      phase: "Architecture",
      title: "Blueprint & Scope",
      statusTag: "48H TURNAROUND",
      deliverableBadge: "Wireframe & Copy",
      visual: <BlueprintArtifact />,
    },
    {
      number: "02",
      days: "Days 3–6",
      phase: "Engineering",
      title: "Build & Wiring",
      statusTag: "ACTIVE SPRINT",
      deliverableBadge: "Staging URL on Your Phone",
      visual: <BuildTerminalArtifact />,
    },
    {
      number: "03",
      days: "Days 7–10",
      phase: "Production",
      title: "Test & Go Live",
      statusTag: "GO LIVE",
      deliverableBadge: "100% Asset Handoff",
      isFinal: true,
      visual: <LiveLaunchArtifact />,
    },
  ];

  return (
    <section
      id="protocol"
      className="py-20 sm:py-28 bg-transparent border-t border-border/40 relative overflow-hidden"
      aria-label="Sprint Delivery Protocol"
    >
      <div className="section-container relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-border/40 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-xs text-text-tertiary uppercase tracking-wider">
                10-Day Sprint Protocol
              </span>
            </div>
            <h2
              className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.05]"
              style={{ letterSpacing: "-0.035em" }}
            >
              How We Ship.
            </h2>
          </div>
          <p className="text-text-secondary text-sm sm:text-base max-w-xs leading-relaxed font-sans">
            First conversation to live bookings in 7–10 days.
          </p>
        </div>

        {/* Phase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className={`group relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg ${
                phase.isFinal
                  ? "bg-emerald-500/[0.02] dark:bg-emerald-500/[0.03] border-emerald-500/30 hover:border-emerald-500/50"
                  : "bg-zinc-50/80 dark:bg-zinc-900/40 border-border/70 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600"
              }`}
            >
              {/* Card Top: compact metadata */}
              <div className="flex items-center justify-between px-5 pt-5 pb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-text-tertiary">{phase.number}</span>
                  <span className="w-4 h-px bg-border dark:bg-zinc-700" />
                  <span className="font-mono text-xs font-semibold text-text-primary uppercase tracking-wide">{phase.days}</span>
                  <span className="text-text-tertiary text-xs">·</span>
                  <span className="font-sans text-xs text-text-tertiary">{phase.phase}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-text-tertiary opacity-0 group-hover:opacity-100 group-hover:text-text-primary transition-all" />
              </div>

              {/* Card Title */}
              <div className="px-5 pb-2">
                <h3 className="font-display font-black text-2xl sm:text-3xl text-text-primary tracking-tight leading-tight">
                  {phase.title}
                </h3>
              </div>

              {/* Visual Artifact (Dominant) */}
              <div className="px-4 py-2 flex-1">
                {phase.visual}
              </div>

              {/* Card Footer: deliverable stamp */}
              <div className={`px-5 py-3.5 border-t flex items-center justify-between ${
                phase.isFinal
                  ? "border-emerald-500/20 bg-emerald-500/[0.03]"
                  : "border-border/50 dark:border-zinc-800"
              }`}>
                <span className="font-mono text-[11px] text-text-secondary font-medium">
                  {phase.deliverableBadge}
                </span>
                <span
                  className={`inline-flex items-center gap-1 font-mono text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-md ${
                    phase.isFinal
                      ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20"
                      : "bg-zinc-200/60 dark:bg-zinc-800 text-text-tertiary border border-border/40"
                  }`}
                >
                  <span
                    className={`w-1 h-1 rounded-full ${
                      phase.isFinal ? "bg-emerald-500 animate-pulse" : "bg-zinc-400"
                    }`}
                  />
                  {phase.statusTag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-10 sm:mt-12 p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 border border-border/70 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-sans">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
              <ShieldCheck className="w-4 h-4 stroke-2" />
            </div>
            <p className="text-sm text-text-secondary">
              <span className="font-semibold text-text-primary">You own everything.</span>{" "}
              Code, domain, and client data. Zero lock-in.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0 px-3 py-1.5 rounded-lg bg-bg-primary dark:bg-zinc-800 border border-border/60 self-start sm:self-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="font-mono text-xs font-medium text-text-primary">Guaranteed 7–10 Day Delivery</span>
          </div>
        </div>

      </div>
    </section>
  );
}
