"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle, ArrowUpRight, Check, Clock, ShieldCheck, Zap } from "lucide-react";

interface BrandOption {
  id: string;
  icon: string;
  title: string;
  example: string;
}

interface PriorityOption {
  id: string;
  icon: string;
  title: string;
  benefit: string;
}

const BRAND_TYPES: BrandOption[] = [
  { id: "salon", icon: "💄", title: "Luxury Salon / MUA", example: "Bridal henna, aesthetic clinics, hair ateliers" },
  { id: "clinic", icon: "🩺", title: "Clinic / Doctor", example: "Diagnostics, dental practices, specialized care" },
  { id: "fitness", icon: "🏋️", title: "Fitness / Wellness", example: "Boutique gyms, yoga retreats, athletic centers" },
  { id: "boutique", icon: "💼", title: "Boutique & Services", example: "Photographers, legal consultancies, studios" },
];

const PRIORITIES: PriorityOption[] = [
  { id: "speed", icon: "⚡", title: "48h Express Launch", benefit: "Live public cutover in 48 hours flat" },
  { id: "whatsapp", icon: "📲", title: "1-Tap WhatsApp Lead Engine", benefit: "Inquiries land pre-filled directly in your WhatsApp" },
  { id: "seo", icon: "🔍", title: "Rank #1 on Google Local", benefit: "Dominant Google Maps pin & LocalBusiness schema" },
];

export default function ProjectConfigurator() {
  const [selectedBrand, setSelectedBrand] = useState<BrandOption>(BRAND_TYPES[0]);
  const [selectedPriority, setSelectedPriority] = useState<PriorityOption>(PRIORITIES[0]);

  const whatsappMessage = `Hi Dipjyoti, I want to commission a custom flagship for my ${selectedBrand.title}. My main priority is: ${selectedPriority.title}. Let's discuss scope and timeline.`;
  const whatsappUrl = `https://wa.me/918724932985?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="configurator" className="py-20 sm:py-28 bg-bg-primary text-text-primary border-t border-border/40 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent/5 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-container max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold mb-3 block">
            Tactile Project Builder
          </span>
          <h2
            className="font-display font-black text-text-primary text-3xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Configure your bespoke{" "}
            <span className="font-serif italic font-normal text-accent">
              flagship system.
            </span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-normal">
            Select your industry and primary conversion focus to generate an instant project blueprint.
          </p>
        </div>

        {/* Configurator Box (Anfalova Tactile Style) */}
        <div className="bg-bg-card border border-border/80 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col gap-10">
          
          {/* Step 1: Brand Type */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-md">
                Step 01
              </span>
              <h3 className="font-sans font-bold text-base sm:text-lg text-text-primary">
                Select Your Business Industry
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {BRAND_TYPES.map((b) => {
                const isSelected = selectedBrand.id === b.id;
                return (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBrand(b)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3 ${
                      isSelected
                        ? "bg-accent text-text-inverted border-accent shadow-lg shadow-accent/25 scale-[1.02]"
                        : "bg-bg-secondary text-text-secondary border-border hover:border-accent/40 hover:text-text-primary"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{b.icon}</span>
                      {isSelected && <Check size={16} className="text-text-inverted" />}
                    </div>
                    <div>
                      <span className="font-sans font-bold text-sm block mb-1">
                        {b.title}
                      </span>
                      <span className={`text-[11px] leading-tight block ${isSelected ? "text-text-inverted/80" : "text-text-tertiary"}`}>
                        {b.example}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Priority */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-md">
                Step 02
              </span>
              <h3 className="font-sans font-bold text-base sm:text-lg text-text-primary">
                Select Your Commercial Priority
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {PRIORITIES.map((p) => {
                const isSelected = selectedPriority.id === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPriority(p)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3 ${
                      isSelected
                        ? "bg-accent text-text-inverted border-accent shadow-lg shadow-accent/25 scale-[1.02]"
                        : "bg-bg-secondary text-text-secondary border-border hover:border-accent/40 hover:text-text-primary"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xl">{p.icon}</span>
                      {isSelected && <Check size={16} className="text-text-inverted" />}
                    </div>
                    <div>
                      <span className="font-sans font-bold text-sm block mb-1">
                        {p.title}
                      </span>
                      <span className={`text-[11px] leading-tight block ${isSelected ? "text-text-inverted/80" : "text-text-tertiary"}`}>
                        {p.benefit}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Live Dynamic Blueprint Box */}
          <motion.div
            layout
            className="p-6 sm:p-7 rounded-2xl bg-bg-primary border border-border/80 shadow-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
                  Live Project Blueprint
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <h4 className="font-display font-black text-xl sm:text-2xl text-text-primary tracking-tight">
                {selectedBrand.title} • {selectedPriority.title}
              </h4>

              <div className="flex flex-wrap gap-2 text-xs font-mono text-text-secondary pt-1">
                <span className="flex items-center gap-1">
                  <Clock size={12} className="text-accent" />
                  Estimated Delivery: 48 Hours
                </span>
                <span>•</span>
                <span>1-Tap WhatsApp Lead Engine</span>
                <span>•</span>
                <span>100% Code Handover</span>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-3.5 px-6 sm:px-8 text-sm font-bold flex items-center justify-center gap-2 w-full lg:w-auto shadow-xl shadow-accent/20 shrink-0"
            >
              <MessageCircle size={16} />
              <span>Launch with Founder on WhatsApp</span>
              <ArrowUpRight size={14} />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
