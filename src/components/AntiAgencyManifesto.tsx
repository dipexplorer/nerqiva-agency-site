"use client";

import { motion } from "framer-motion";
import { Ban, ShieldCheck, Zap, MessageCircle, Check } from "lucide-react";

const MANIFESTO_POINTS = [
  {
    number: "01",
    tag: "🚫 NO 6-WEEK FIGMA RUNAROUNDS",
    title: "We don't do endless feedback loops.",
    description: "We scope, design, and push to production in 48 hours flat. You get a working mobile-first staging link on Day 2.",
    badge: "48-Hour Live Delivery",
  },
  {
    number: "02",
    tag: "🚫 NO MONTHLY HOSTAGE FEES",
    title: "Zero recurring agency maintenance fees.",
    description: "Most agencies charge ₹5,000/mo just to keep WordPress alive. We give you 100% clean code repository and domain ownership on launch.",
    badge: "100% Asset Ownership",
  },
  {
    number: "03",
    tag: "📲 WHATSAPP-NATIVE CONVERSIONS",
    title: "Engineered for Indian consumer behavior.",
    description: "Indian clients don't want complex 7-step checkouts. They want 1-tap WhatsApp booking with pre-filled service context and live pricing.",
    badge: "3-Second Lead Intake",
  },
  {
    number: "04",
    tag: "⚡ SUB-SECOND 4G SPEED",
    title: "Built on modern Next.js edge architecture.",
    description: "Over 85% of your local clients browse on mobile. We verify sub-second paint on real Jio and Airtel 4G networks—zero bloated themes.",
    badge: "< 0.8s Mobile Paint",
  },
];

export default function AntiAgencyManifesto() {
  return (
    <section id="manifesto" className="py-20 sm:py-28 bg-bg-card border-t border-border/40 relative overflow-hidden">
      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
              The Anti-Agency Manifesto
            </span>
          </div>
          <h2
            className="font-display font-black text-text-primary text-3xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Why ambitious brands choose us over{" "}
            <span className="font-serif italic font-normal text-accent underline decoration-accent/20">
              traditional retainers.
            </span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-normal">
            No corporate telephone game, no junior freelancers, and no proprietary lock-in. Just bespoke engineering delivered on time.
          </p>
        </div>

        {/* 4 Graphic Token Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {MANIFESTO_POINTS.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-7 sm:p-8 rounded-3xl bg-bg-primary border border-border/80 shadow-md hover:shadow-xl hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="font-mono text-xs font-bold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                  <span className="font-mono text-xs text-text-tertiary">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-text-primary tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-normal mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono">
                <span className="text-text-primary font-semibold flex items-center gap-1.5">
                  <Check size={14} className="text-accent" />
                  <span>The NERQIVA Standard</span>
                </span>
                <span className="px-2.5 py-1 rounded-md bg-bg-secondary text-text-secondary font-medium border border-border/60">
                  {item.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
