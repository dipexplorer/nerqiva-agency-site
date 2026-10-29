"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ManifestoPoint {
  number: string;
  tag: string;
  title: string;
  description: string;
  badge: string;
}

const MANIFESTO_POINTS: ManifestoPoint[] = [
  {
    number: "01",
    tag: "48-HOUR SPRINT",
    title: "No 6-week wireframe purgatory.",
    description: "Traditional agencies drag projects through weeks of wireframe decks. We scope, design, and deliver a working mobile staging build to your smartphone in 48 hours flat.",
    badge: "48-Hour Live Delivery",
  },
  {
    number: "02",
    tag: "100% ASSET OWNERSHIP",
    title: "Zero recurring hostage fees.",
    description: "Most agencies charge ₹5,000 every month just to keep WordPress alive. With NERQIVA, you get 100% clean source code repository, domain DNS, and asset ownership on Day 2.",
    badge: "100% Source Code Handover",
  },
  {
    number: "03",
    tag: "DIRECT CONVERSIONS",
    title: "Engineered for Indian consumer behavior.",
    description: "Local clients never fill 8-field forms. They want 1-tap WhatsApp booking with pre-filled service context, date, and pricing directly inside your chat.",
    badge: "1-Tap Direct WhatsApp Funnel",
  },
  {
    number: "04",
    tag: "EDGE PERFORMANCE",
    title: "Built on clean modern edge code.",
    description: "Over 85% of your local clients browse on mobile. We verify sub-second loading speeds on real local 4G connections—zero bloated WordPress themes or sluggish plugins.",
    badge: "< 0.8s Mobile First Paint",
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
            <span className="font-serif italic font-normal text-accent">
              traditional retainers.
            </span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-normal">
            No corporate telephone game, no offshore middlemen, and no proprietary lock-in. Just bespoke engineering delivered on time.
          </p>
        </div>

        {/* 4 Clean Editorial Cards */}
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
                  <span className="font-mono text-[10px] tracking-widest font-bold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
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
