"use client";

import React from "react";
import { 
  Compass, 
  Cpu, 
  Smartphone,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function SprintDelivery() {
  return (
    <section
      id="protocol"
      className="py-20 sm:py-28 bg-transparent border-t border-border/40 relative overflow-hidden"
    >
      <div className="section-container relative z-10">
        {/* Section Header: Pure Typographic Authority, No Eyebrow */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b border-border/40 gap-6">
          <div className="max-w-2xl">
            <h2
              className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.05]"
              style={{ letterSpacing: "-0.03em" }}
            >
              7–10 Day Delivery.
            </h2>
          </div>
          <p className="text-text-secondary text-sm sm:text-base max-w-md leading-relaxed font-sans">
            A rapid, structured engineering sprint with zero downtime or disruption to your business.
          </p>
        </div>

        {/* 3 Visual Stage Progression */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Stage 1: Blueprint */}
          <div className="group rounded-2xl p-6 sm:p-7 bg-bg-secondary/70 dark:bg-bg-dark-card/60 backdrop-blur-md border border-border/60 hover:border-accent/40 transition-all duration-300 flex flex-col justify-between">
            {/* Visual Wireframe Blueprint Graphic */}
            <div className="rounded-xl p-4 border border-border/80 bg-bg-primary dark:bg-neutral-900 shadow-xs mb-6 h-36 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-2 border-b border-border/50">
                <span className="font-mono text-[10px] text-text-tertiary">WIRE_V1.LAYOUT</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
              <div className="space-y-2 py-1">
                <div className="h-3 w-3/4 rounded bg-text-primary/10 dark:bg-white/10" />
                <div className="h-2 w-full rounded bg-text-secondary/10 dark:bg-white/5" />
                <div className="h-2 w-2/3 rounded bg-text-secondary/10 dark:bg-white/5" />
              </div>
              <div className="pt-2 flex items-center justify-between border-t border-border/50">
                <span className="h-4 w-16 rounded bg-accent/20 border border-accent/30 inline-block" />
                <span className="font-mono text-[10px] text-accent font-semibold">Conversion Architecture</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-accent">DAYS 1–2</span>
                <span className="text-text-tertiary font-mono text-xs">·</span>
                <span className="font-sans text-xs text-text-tertiary font-medium">Architecture</span>
              </div>
              <h3 className="font-display font-bold text-xl text-text-primary mb-1.5 tracking-tight">
                Conversion Blueprint
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed font-sans">
                We analyze your lead drop-offs, design the page structure, and finalize customer-converting copy.
              </p>
            </div>
          </div>

          {/* Stage 2: Build & Wire */}
          <div className="group rounded-2xl p-6 sm:p-7 bg-bg-secondary/70 dark:bg-bg-dark-card/60 backdrop-blur-md border border-border/60 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between">
            {/* Visual Code & Automations Graphic */}
            <div className="rounded-xl p-4 border border-border/80 bg-bg-primary dark:bg-neutral-900 shadow-xs mb-6 h-36 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-2 border-b border-border/50">
                <span className="font-mono text-[10px] text-text-tertiary">SYSTEM_BUILD.TSX</span>
                <span className="font-mono text-[10px] text-emerald-500 font-bold">NEXT.JS 16</span>
              </div>
              <div className="font-mono text-[10px] text-text-secondary space-y-1">
                <p className="text-blue-500">export default function Flagship() &#123;</p>
                <p className="pl-2 text-emerald-600 dark:text-emerald-400">const wa = useWhatsAppRoute();</p>
                <p className="pl-2 text-text-tertiary">return &lt;Engine subSecond={'{true}'} /&gt;;</p>
                <p className="text-blue-500">&#125;</p>
              </div>
              <div className="pt-2 flex items-center justify-between border-t border-border/50">
                <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Routing Connected
                </span>
                <span className="font-mono text-[10px] text-text-tertiary">Google SEO</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">DAYS 3–6</span>
                <span className="text-text-tertiary font-mono text-xs">·</span>
                <span className="font-sans text-xs text-text-tertiary font-medium">Engineering</span>
              </div>
              <h3 className="font-display font-bold text-xl text-text-primary mb-1.5 tracking-tight">
                Full-Stack Build & Wiring
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed font-sans">
                Next.js development, 1-click WhatsApp lead routing, and Google Maps local search schemas.
              </p>
            </div>
          </div>

          {/* Stage 3: Phone Test & Launch */}
          <div className="group rounded-2xl p-6 sm:p-7 bg-bg-secondary/70 dark:bg-bg-dark-card/60 backdrop-blur-md border border-border/60 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between">
            {/* Visual Phone Staging Graphic */}
            <div className="rounded-xl p-4 border border-border/80 bg-bg-primary dark:bg-neutral-900 shadow-xs mb-6 h-36 flex flex-col justify-between">
              <div className="flex items-center justify-between pb-2 border-b border-border/50">
                <span className="font-mono text-[10px] text-text-tertiary">SMARTPHONE_PREVIEW</span>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  Approved
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-12 rounded-md border border-border/80 bg-bg-secondary flex flex-col items-center justify-center">
                  <Smartphone className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <span className="block font-sans text-xs font-semibold text-text-primary">
                    Private Client Test
                  </span>
                  <span className="block font-mono text-[10px] text-text-tertiary">
                    Tested on your smartphone
                  </span>
                </div>
              </div>
              <div className="pt-2 flex items-center justify-between border-t border-border/50">
                <span className="font-mono text-[10px] text-text-primary font-bold">yourbusiness.in</span>
                <span className="font-mono text-[10px] text-emerald-500 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live to Google
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-purple-600 dark:text-purple-400">DAYS 7–10</span>
                <span className="text-text-tertiary font-mono text-xs">·</span>
                <span className="font-sans text-xs text-text-tertiary font-medium">Production</span>
              </div>
              <h3 className="font-display font-bold text-xl text-text-primary mb-1.5 tracking-tight">
                Phone Review & Live Launch
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed font-sans">
                You test every button and booking flow on your phone. Once approved, domain connects and goes live.
              </p>
            </div>
          </div>

        </div>

        {/* Clean, Understated Guarantee Strip */}
        <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-sans text-text-secondary">
          <p>
            <strong className="text-text-primary font-semibold">100% Asset Ownership:</strong> You own the production code, domain records, and customer data with zero vendor lock-in.
          </p>
          <span className="font-mono text-[11px] text-text-tertiary shrink-0">
            7–10 Day Delivery Guaranteed
          </span>
        </div>
      </div>
    </section>
  );
}
