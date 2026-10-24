"use client";

import { motion } from "framer-motion";
import { Zap, Smartphone, MessageSquare, ShieldCheck, Lock, Gauge, CheckCircle2 } from "lucide-react";

export default function Technology() {
  return (
    <section id="tech" className="py-20 sm:py-28 bg-bg-primary text-text-primary border-t border-border/45 relative z-10 overflow-hidden">
      {/* Ambient background subtle grid & glow */}
      <div className="absolute inset-0 bg-grid-dots opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[300px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header: Pure Typographic Authority without AI Kicker or Gradient Text */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2
            className="font-serif text-text-primary leading-[1.15] mb-4 tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            Built for speed, reliability, and <span className="italic font-normal">conversion</span>.
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-normal">
            We don&apos;t rely on slow WordPress themes or generic site builders. Every flagship is engineered on modern Next.js edge infrastructure with guaranteed performance benchmarks.
          </p>
        </div>

        {/* 4 Feature Cards in a Balanced 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* CARD 1: Sub-Second Load Speed */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35 }}
            className="card-luxury p-6 sm:p-8 border border-border/70 bg-bg-card rounded-2xl shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent shrink-0">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-text-primary tracking-tight">
                      Sub-Second Edge Delivery
                    </h3>
                    <span className="text-xs text-text-tertiary font-mono">Next.js & Turbopack</span>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent font-mono text-xs font-semibold shrink-0">
                  Lighthouse 98+
                </div>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-6 font-normal">
                Slow websites bleed prospective clients. We engineer pre-rendered, lightweight code structures that achieve instantaneous paint times even on weak 4G networks.
              </p>

              {/* MINI VISUAL: Verified Performance Telemetry */}
              <div className="p-4 rounded-xl bg-bg-secondary border border-border/50 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between text-xs text-text-secondary">
                  <span className="flex items-center gap-2 font-medium">
                    <Gauge size={14} className="text-accent-gold" /> First Contentful Paint
                  </span>
                  <span className="font-bold text-text-primary">0.35s · Verified Fast</span>
                </div>
                <div className="w-full h-1.5 bg-border/40 rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-[92%] rounded-full" />
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] sm:text-[11px] text-center text-text-tertiary border-t border-border/40">
                  <div>LCP: <span className="font-bold text-text-primary">0.70s</span></div>
                  <div>CLS: <span className="font-bold text-text-primary">0.00</span></div>
                  <div>INP: <span className="font-bold text-text-primary">&lt; 50ms</span></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 2: Responsive Touch Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: 0.08 }}
            className="card-luxury p-6 sm:p-8 border border-border/70 bg-bg-card rounded-2xl shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent shrink-0">
                    <Smartphone size={20} />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-text-primary tracking-tight">
                      Responsive Touch Architecture
                    </h3>
                    <span className="text-xs text-text-tertiary font-mono">Mobile-First Touch Standards</span>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent font-mono text-xs font-semibold shrink-0">
                  Adaptive Grid
                </div>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-6 font-normal">
                Over 85% of local service inquiries originate on smartphones. Every button, menu drawer, and booking interaction is thumb-optimized with zero auto-zooming glitches.
              </p>

              {/* MINI VISUAL: Touch Target Specifications */}
              <div className="p-4 rounded-xl bg-bg-secondary border border-border/50 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between text-xs text-text-secondary">
                  <span className="flex items-center gap-2 font-medium">
                    <CheckCircle2 size={14} className="text-accent-gold" /> Ergonomic Touch Bounds
                  </span>
                  <span className="font-bold text-text-primary">48px Target Rule</span>
                </div>
                <div className="w-full h-1.5 bg-border/40 rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-[96%] rounded-full" />
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] sm:text-[11px] text-center text-text-tertiary border-t border-border/40">
                  <div>Zero Zoom Lag</div>
                  <div>Fluid Typography</div>
                  <div>iOS &amp; Android Ready</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 3: Direct WhatsApp Lead Flow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: 0.16 }}
            className="card-luxury p-6 sm:p-8 border border-border/70 bg-bg-card rounded-2xl shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent shrink-0">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-text-primary tracking-tight">
                      Direct WhatsApp Routing
                    </h3>
                    <span className="text-xs text-text-tertiary font-mono">1-Tap Direct Inquiries</span>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent font-mono text-xs font-semibold flex items-center gap-1.5 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Direct Lead
                </div>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-6 font-normal">
                Complicated multi-field contact forms drive prospective customers away. Direct WhatsApp routing launches pre-filled booking intent straight to your phone.
              </p>

              {/* MINI VISUAL: Pre-Filled Inbound Schema */}
              <div className="p-4 rounded-xl bg-bg-secondary border border-border/50 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between text-xs text-text-secondary">
                  <span className="flex items-center gap-2 font-medium">
                    <CheckCircle2 size={14} className="text-accent-gold" /> Pre-Formatted Inbound Intent
                  </span>
                  <span className="font-bold text-text-primary">Instant Delivery</span>
                </div>
                <div className="w-full h-1.5 bg-border/40 rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-[98%] rounded-full" />
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] sm:text-[11px] text-center text-text-tertiary border-t border-border/40">
                  <div>Zero Form Friction</div>
                  <div>Referral Tagging</div>
                  <div>Direct Notification</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD 4: Enterprise Edge Uptime & SSL */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: 0.24 }}
            className="card-luxury p-6 sm:p-8 border border-border/70 bg-bg-card rounded-2xl shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3.5">
                  <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-text-primary tracking-tight">
                      Enterprise Reliability &amp; SSL
                    </h3>
                    <span className="text-xs text-text-tertiary font-mono">Global Edge CDN Architecture</span>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent font-mono text-xs font-semibold shrink-0">
                  256-Bit SSL
                </div>
              </div>

              <p className="text-text-secondary text-sm leading-relaxed mb-6 font-normal">
                Eliminate server crashes and vulnerable plugin updates. Your flagship is deployed across a distributed global edge network with automated TLS certificate encryption.
              </p>

              {/* MINI VISUAL: Edge Uptime & Security */}
              <div className="p-4 rounded-xl bg-bg-secondary border border-border/50 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between text-xs text-text-secondary">
                  <span className="flex items-center gap-2 font-medium">
                    <Lock size={14} className="text-accent-gold" /> Encrypted Cloud Infrastructure
                  </span>
                  <span className="font-bold text-text-primary">99.99% Edge SLA</span>
                </div>
                <div className="w-full h-1.5 bg-border/40 rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-[99.9%] rounded-full" />
                </div>
                <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] sm:text-[11px] text-center text-text-tertiary border-t border-border/40">
                  <div>Zero Maintenance</div>
                  <div>Automated SSL</div>
                  <div>Global DDoS Shield</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
