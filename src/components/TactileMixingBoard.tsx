"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MessageCircle, ArrowUpRight, Check, Sliders, Printer, ShieldCheck } from "lucide-react";
import { sound } from "../utils/audio";

interface IndustryTrack {
  id: string;
  icon: string;
  title: string;
  scope: string;
}

interface PriorityToggle {
  id: string;
  icon: string;
  title: string;
  benefit: string;
}

const INDUSTRIES: IndustryTrack[] = [
  { id: "salon", icon: "💄", title: "Luxury Salon / MUA", scope: "Bridal henna, aesthetic clinics, hair ateliers" },
  { id: "clinic", icon: "🩺", title: "Clinic / Doctor", scope: "Diagnostics, dental practices, specialized care" },
  { id: "fitness", icon: "🏋️", title: "Fitness / Wellness", scope: "Boutique gyms, yoga retreats, athletic centers" },
  { id: "boutique", icon: "💼", title: "Boutique & Services", scope: "Photographers, luxury fashion, consultants" },
];

const PRIORITIES: PriorityToggle[] = [
  { id: "express", icon: "⚡", title: "48h Express Launch", benefit: "Live public cutover in 48 hours flat" },
  { id: "whatsapp", icon: "📲", title: "1-Tap WhatsApp Funnel", benefit: "Inquiries arrive pre-filled in your WhatsApp" },
  { id: "seo", icon: "🔍", title: "Rank #1 on Google Maps", benefit: "Dominant local search pin & LocalBusiness schema" },
];

export default function TactileMixingBoard() {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryTrack>(INDUSTRIES[0]);
  const [selectedPriority, setSelectedPriority] = useState<PriorityToggle>(PRIORITIES[0]);

  const handleSelectIndustry = (ind: IndustryTrack) => {
    sound.click();
    setSelectedIndustry(ind);
  };

  const handleSelectPriority = (pri: PriorityToggle) => {
    sound.click();
    setSelectedPriority(pri);
  };

  const whatsappMessage = `Hi Dipjyoti, I want to commission a custom flagship for my ${selectedIndustry.title}. Primary priority is: ${selectedPriority.title}. Let's discuss scope and timeline.`;
  const whatsappUrl = `https://wa.me/918724932985?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="configurator" className="py-20 sm:py-28 bg-bg-primary text-text-primary border-t border-border/40 relative overflow-hidden">
      
      {/* Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent/5 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="section-container max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold mb-3 block">
            Tactile Studio Console
          </span>
          <h2
            className="font-display font-black text-text-primary text-3xl sm:text-5xl lg:text-6xl leading-[1.06] tracking-tight mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Configure your bespoke{" "}
            <span className="font-serif italic font-normal text-accent underline decoration-accent/20">
              flagship system.
            </span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-normal">
            Select your industry and commercial goal below to print an instant project blueprint.
          </p>
        </div>

        {/* TACTILE MIXING DESK CONSOLE */}
        <div className="bg-bg-card border border-border/80 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col gap-10">
          
          {/* Channel 01: Industry Illuminated Pads */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                <h3 className="font-sans font-bold text-base sm:text-lg text-text-primary">
                  Channel 01 // Select Business Industry
                </h3>
              </div>
              <span className="font-mono text-xs text-text-tertiary">Tactile Pad</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {INDUSTRIES.map((ind) => {
                const isSelected = selectedIndustry.id === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => handleSelectIndustry(ind)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3 select-none active:scale-[0.98] ${
                      isSelected
                        ? "bg-accent text-text-inverted border-accent shadow-xl shadow-accent/20 ring-2 ring-accent/30"
                        : "bg-bg-secondary text-text-secondary border-border hover:border-accent/40 hover:text-text-primary"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{ind.icon}</span>
                      {isSelected && <Check size={16} className="text-text-inverted" />}
                    </div>
                    <div>
                      <span className="font-sans font-bold text-sm block mb-1">
                        {ind.title}
                      </span>
                      <span className={`text-[11px] leading-tight block ${isSelected ? "text-text-inverted/85" : "text-text-tertiary"}`}>
                        {ind.scope}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Channel 02: Commercial Priority Toggles */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="font-sans font-bold text-base sm:text-lg text-text-primary">
                  Channel 02 // Select Commercial Priority
                </h3>
              </div>
              <span className="font-mono text-xs text-text-tertiary">Active Switch</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {PRIORITIES.map((pri) => {
                const isSelected = selectedPriority.id === pri.id;
                return (
                  <button
                    key={pri.id}
                    onClick={() => handleSelectPriority(pri)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3 select-none active:scale-[0.98] ${
                      isSelected
                        ? "bg-accent text-text-inverted border-accent shadow-xl shadow-accent/20 ring-2 ring-accent/30"
                        : "bg-bg-secondary text-text-secondary border-border hover:border-accent/40 hover:text-text-primary"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xl">{pri.icon}</span>
                      {isSelected && <Check size={16} className="text-text-inverted" />}
                    </div>
                    <div>
                      <span className="font-sans font-bold text-sm block mb-1">
                        {pri.title}
                      </span>
                      <span className={`text-[11px] leading-tight block ${isSelected ? "text-text-inverted/85" : "text-text-tertiary"}`}>
                        {pri.benefit}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* The Live Thermal Printed Receipt Ticket */}
          <motion.div
            layout
            className="p-6 sm:p-8 rounded-2xl bg-bg-primary border-2 border-border shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative overflow-hidden"
          >
            {/* Ticket Perforated Top Edge Effect */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Printer size={15} className="text-accent" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
                  Live Printed Blueprint // NQ-2026
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <h4 className="font-display font-black text-xl sm:text-2xl text-text-primary tracking-tight">
                {selectedIndustry.title} • {selectedPriority.title}
              </h4>

              <div className="flex flex-wrap gap-2 text-xs font-mono text-text-secondary pt-1">
                <span>⚡ Delivery: 48 Hours Flat</span>
                <span>•</span>
                <span>📲 Direct 1-Tap WhatsApp Funnel</span>
                <span>•</span>
                <span>📦 100% Code Handover</span>
                <span>•</span>
                <span className="text-emerald-500 font-bold">₹0 Monthly Retainer</span>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.success()}
              className="btn-primary py-3.5 px-7 sm:px-8 text-sm font-bold flex items-center justify-center gap-2 w-full lg:w-auto shadow-2xl shadow-accent/25 shrink-0"
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
