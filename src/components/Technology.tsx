"use client";

import { motion } from "framer-motion";
import { Zap, Smartphone, MessageSquare, ShieldCheck, CheckCircle2, Lock, ArrowUpRight, Gauge } from "lucide-react";

export default function Technology() {
  return (
    <section id="tech" className="py-14 sm:py-20 bg-transparent relative border-t border-border/30 overflow-hidden">
      {/* Ambient background subtle texture & glow */}
      <div className="absolute inset-0 bg-grid-dots opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[280px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10">
        
        {/* Compact Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent dark:text-accent-light text-[11px] font-mono font-bold tracking-wider uppercase mb-3">
            <CheckCircle2 size={12} className="text-accent dark:text-accent-light" />
            <span>ENGINEERING STANDARDS</span>
          </div>
          <h2
            className="font-sans font-extrabold text-text-primary leading-[1.15] mb-3 tracking-tight"
            style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em" }}
          >
            Built for speed, reliability,<br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-accent-gold">
              and maximum conversion.
            </span>
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-normal">
            We don&apos;t just write code — we guarantee tangible visual and performance standards for your business.
          </p>
        </div>

        {/* 4 Feature Cards with Integrated Mini Visual Interfaces */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          
          {/* CARD 1: 1-Second Load Speed */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="group card-luxury p-6 sm:p-7 border border-border/80 bg-bg-card hover:border-accent/40 rounded-2xl shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg text-text-primary group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                      1-Second Load Speed
                    </h3>
                    <span className="text-xs text-text-tertiary font-mono">Next.js & Turbopack</span>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">
                  99/100 Score
                </div>
              </div>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-5">
                Slow sites lose clients. We build pre-rendered, lightweight code structure loading under 1.0s even on weak networks.
              </p>

              {/* MINI VISUAL: Lighthouse Metrics Gauge Bar */}
              <div className="p-3.5 rounded-xl bg-bg-secondary/60 border border-border/60 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-[11px] text-text-secondary">
                  <span className="flex items-center gap-1.5 font-medium"><Gauge size={13} className="text-emerald-500" /> First Contentful Paint</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">0.35s (Fast)</span>
                </div>
                <div className="w-full h-1.5 bg-border/40 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-accent w-[92%] rounded-full" />
                </div>
                <div className="grid grid-cols-3 gap-2 pt-1 text-[10px] text-center text-text-tertiary border-t border-border/40">
                  <div>LCP: <span className="font-bold text-text-primary">0.7s</span></div>
                  <div>CLS: <span className="font-bold text-text-primary">0.00</span></div>
                  <div>FID: <span className="font-bold text-text-primary">2ms</span></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: 100% Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="group card-luxury p-6 sm:p-7 border border-border/80 bg-bg-card hover:border-accent/40 rounded-2xl shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent dark:text-accent-light">
                    <Smartphone size={20} />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg text-text-primary group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                      100% Mobile Optimized
                    </h3>
                    <span className="text-xs text-text-tertiary font-mono">Tailwind & Touch Layouts</span>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent dark:text-accent-light font-mono text-xs font-bold">
                  Adaptive
                </div>
              </div>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-5">
                Designed mobile-first. Large tap targets, legible typography, and zero auto-zooming glitches when filling forms.
              </p>

              {/* MINI VISUAL: Mobile Viewport Touch Target Interface */}
              <div className="p-3.5 rounded-xl bg-bg-secondary/60 border border-border/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-accent text-white flex items-center justify-center text-xs font-bold shadow-xs">
                    48px
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-text-primary">Touch-Friendly Buttons</div>
                    <div className="text-[10px] text-text-tertiary">Zero misclicks or zoom lag</div>
                  </div>
                </div>
                <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  ✓ iOS & Android
                </span>
              </div>
            </div>
          </motion.div>

          {/* CARD 3: Instant WhatsApp Lead Routing */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="group card-luxury p-6 sm:p-7 border border-border/80 bg-bg-card hover:border-accent/40 rounded-2xl shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg text-text-primary group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                      Instant WhatsApp Lead Routing
                    </h3>
                    <span className="text-xs text-text-tertiary font-mono">1-Click Direct Messaging</span>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live
                </div>
              </div>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-5">
                Zero friction contact. Clicking your booking button immediately launches a pre-filled WhatsApp message directly to your phone.
              </p>

              {/* MINI VISUAL: Live WhatsApp Chat Bubble Preview */}
              <div className="p-3.5 rounded-xl bg-emerald-950/10 dark:bg-emerald-950/20 border border-emerald-500/20 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="h-7 w-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[11px] shadow-xs">
                    WA
                  </div>
                  <div className="text-xs">
                    <div className="text-[11px] font-medium text-text-primary">“Hi NERQIVA! I need a quote...”</div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">Pre-formatted client message</div>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
          </motion.div>

          {/* CARD 4: 99.9% Reliable & Secure */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.24 }}
            className="group card-luxury p-6 sm:p-7 border border-border/80 bg-bg-card hover:border-accent/40 rounded-2xl shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg text-text-primary group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                      99.9% Reliable & Secure
                    </h3>
                    <span className="text-xs text-text-tertiary font-mono">Global Vercel Edge</span>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 font-mono text-xs font-bold">
                  256-Bit SSL
                </div>
              </div>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-5">
                No server crashes or maintenance headaches. Your site stays online 24/7 on global SSL-encrypted cloud infrastructure.
              </p>

              {/* MINI VISUAL: Server Uptime Status Bar */}
              <div className="p-3.5 rounded-xl bg-bg-secondary/60 border border-border/60 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
                  <Lock size={13} className="text-blue-500" />
                  <span>SSL Encrypted</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className="w-1.5 h-3.5 rounded-xs bg-emerald-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 ml-1">99.99% Uptime</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
