"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, MessageSquare, MapPin, RefreshCw, CheckCircle2, ChevronDown } from "lucide-react";

interface SolutionItem {
  id: string;
  label: string;
  badge: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  outcome: string;
  forWho: string;
  includes: string[];
  price: string;
  cta: string;
}

const WHAT_WE_BUILD: SolutionItem[] = [
  {
    id: "website",
    label: "High-Converting Website",
    badge: "24-Hour Delivery",
    icon: Globe,
    outcome: "A bespoke digital flagship that loads under 1 second, looks immaculate on phones, and turns visitors into high-paying clients.",
    forWho: "Salons, private studios, medical clinics, bridal couturiers, and photographers",
    includes: [
      "Custom visual design tailored precisely to your brand and price tier",
      "Sub-second mobile performance — zero layout lag, clear typography, effortless tapping",
      "Direct 1-tap WhatsApp booking button so warm leads reach you instantly",
      "Full local SEO technical setup ready for immediate Google indexing",
    ],
    price: "One-Time Investment · Zero Monthly Software Fees",
    cta: "Inquire about a custom website"
  },
  {
    id: "whatsapp",
    label: "WhatsApp Lead Automation",
    badge: "Instant Alerts",
    icon: MessageSquare,
    outcome: "Never lose a high-ticket client to a delayed reply. Inquiries from your website trigger formatted WhatsApp notifications immediately — even at midnight.",
    forWho: "Busy business owners and studio directors who cannot monitor DMs 24/7",
    includes: [
      "Instant WhatsApp alert to your personal phone the second a client inquires",
      "Automated instant confirmation message sent to the client to set expectations",
      "Client details (service requested, target date, budget) pre-formatted in chat",
      "Zero platform lock-in — functions seamlessly on new or existing websites",
    ],
    price: "Modular Add-On · Compatible With Any Site",
    cta: "Automate my lead capture"
  },
  {
    id: "google",
    label: "Google & Maps Visibility",
    badge: "Local Search",
    icon: MapPin,
    outcome: "Capture clients the exact moment they search for your service locally — dominating Google Maps and high-intent local search results.",
    forWho: "Local service businesses that rely on walk-in or high-ticket discovery clients",
    includes: [
      "Google Business Profile calibrated and optimized for top local pack ranking",
      "Verified Google Maps listing with accurate location, photography, and business hours",
      "High-intent local keyword indexing across all primary service pages",
      "Review collection system to steadily compound verified social proof",
    ],
    price: "Permanent One-Time Setup · You Own 100%",
    cta: "Boost my Google ranking"
  },
  {
    id: "refresh",
    label: "Legacy Website Redesign",
    badge: "Speed & Polish",
    icon: RefreshCw,
    outcome: "If your current website feels slow, dated, or embarrassing to send clients to — we rebuild the frontend for modern speeds without starting from scratch.",
    forWho: "Established businesses with outdated websites that perform poorly on mobile",
    includes: [
      "Complete mobile UX overhaul — modern typography, layout rhythm, and responsive hierarchy",
      "Performance optimization targeting sub-2-second load times on mobile 4G/5G",
      "Refined editorial copy and visual curation matching your current caliber of work",
      "Conversion-focused WhatsApp call-to-actions embedded throughout the experience",
    ],
    price: "Fixed-Scope Investment · Rapid Turnaround",
    cta: "Upgrade my existing website"
  }
];

export default function SolutionBuilder() {
  const [selected, setSelected] = useState<string>("website");
  const [mobileSelected, setMobileSelected] = useState<string | null>("website");
  const active = WHAT_WE_BUILD.find((o) => o.id === selected) || WHAT_WE_BUILD[0];
  const ActiveIcon = active.icon;

  return (
    <section id="solutions" className="py-20 sm:py-28 bg-transparent relative border-t border-border/30">
      <div className="section-container">
        
        {/* Section Header: Authoritative Fraunces Display, No Kicker Gimmicks */}
        <div className="max-w-3xl mb-12">
          <h2
            className="font-display font-black text-text-primary text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] tracking-tight"
            style={{ letterSpacing: "-0.03em" }}
          >
            Pick what you need.{" "}
            <span className="font-serif italic font-normal text-accent">
              Nothing you don't.
            </span>
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mt-3 max-w-xl">
            Transparent, modular deliverables designed for growth-focused local businesses. Every package is a permanent one-time build with zero recurring software fees.
          </p>
        </div>

        {/* ── Desktop Tab Selector (Architectural elevation, no scale breaks) ── */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10 relative z-10">
          {WHAT_WE_BUILD.map((opt) => {
            const isActive = selected === opt.id;
            const IconComponent = opt.icon;
            return (
              <button
                key={opt.id}
                onClick={() => setSelected(opt.id)}
                className={`p-4.5 text-left transition-all duration-200 border cursor-pointer rounded-xl flex flex-col justify-between group relative ${
                  isActive
                    ? "bg-bg-card border-accent shadow-md text-text-primary ring-1 ring-accent/30"
                    : "bg-bg-card/60 border-border text-text-secondary hover:border-accent/40 hover:text-text-primary hover:bg-bg-card"
                }`}
                role="tab"
                aria-selected={isActive}
              >
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className={`p-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-accent/10 text-accent"
                      : "bg-bg-secondary text-text-secondary group-hover:text-accent group-hover:bg-accent/5"
                  }`}>
                    <IconComponent size={18} />
                  </div>
                  <span className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded font-bold border transition-colors ${
                    isActive
                      ? "bg-accent/10 text-accent border-accent/20"
                      : "bg-bg-secondary text-text-tertiary border-border"
                  }`}>
                    {opt.badge}
                  </span>
                </div>
                <div>
                  <span className={`font-sans text-sm font-bold leading-tight block tracking-tight ${
                    isActive ? "text-accent" : "text-text-primary"
                  }`}>
                    {opt.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Desktop Detail Card ─────────────────────────────────────── */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="grid md:grid-cols-12 border border-border card-luxury bg-bg-card overflow-hidden shadow-xl rounded-2xl"
            >
              {/* Left Column: Scope, Value, and Action */}
              <div className="md:col-span-7 p-8 lg:p-10 border-b md:border-b-0 md:border-r border-border/50 flex flex-col justify-between">
                <div>
                  {/* Target Audience Capsule */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-text-secondary bg-bg-secondary border border-border px-3 py-1 rounded-full">
                      Best For: {active.forWho}
                    </span>
                  </div>

                  {/* Outcome Heading */}
                  <h3 className="font-display font-bold text-text-primary text-xl lg:text-2xl leading-snug mb-4 tracking-tight">
                    {active.outcome}
                  </h3>

                  {/* Pricing Assurance Pill */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-accent/5 border border-accent/20 text-accent font-mono text-xs font-bold tracking-wide">
                    {active.price}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/40">
                  <div className="flex items-center gap-4">
                    <a
                      href={`https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'd%20like%20to%20discuss%20the%20package:%20${encodeURIComponent(active.label)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary py-3 px-6 text-xs font-mono font-bold tracking-wider inline-flex items-center gap-2"
                    >
                      <span>{active.cta}</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <span className="font-mono text-[10px] text-text-secondary tracking-wider uppercase font-semibold">
                      Direct WhatsApp Inquiry
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Inclusions with Brand Gold Checkmarks */}
              <div className="md:col-span-5 p-8 lg:p-10 bg-bg-secondary/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-border/40">
                    <span className="font-mono text-[11px] font-bold text-text-primary uppercase tracking-wider">
                      Guaranteed Deliverables
                    </span>
                    <span className="font-mono text-[9px] text-accent-gold font-bold uppercase tracking-widest">
                      Verified Scope
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    {active.includes.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="shrink-0 text-accent-gold mt-0.5" />
                        <span className="font-sans text-sm text-text-secondary leading-relaxed font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-border/40">
                  <span className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider block">
                    Turnaround: Fast delivery with 100% IP handover
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Mobile Accordion View ───────────────────────────────────── */}
        <div className="md:hidden flex flex-col gap-3">
          {WHAT_WE_BUILD.map((opt) => {
            const isExpanded = mobileSelected === opt.id;
            const IconComponent = opt.icon;
            return (
              <div 
                key={opt.id} 
                className="border border-border rounded-xl bg-bg-card overflow-hidden transition-all duration-200 shadow-sm"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => setMobileSelected(isExpanded ? null : opt.id)}
                  className="p-4 w-full flex items-center justify-between text-left cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg transition-colors ${
                      isExpanded ? "bg-accent/10 text-accent" : "bg-bg-secondary text-text-secondary"
                    }`}>
                      <IconComponent size={17} />
                    </div>
                    <div className="flex flex-col">
                      <span className={`font-sans text-sm font-bold leading-tight ${
                        isExpanded ? "text-accent" : "text-text-primary"
                      }`}>
                        {opt.label}
                      </span>
                      <span className="font-mono text-[9px] text-text-tertiary uppercase tracking-wider mt-0.5">
                        {opt.badge}
                      </span>
                    </div>
                  </div>
                  <ChevronDown 
                    size={18} 
                    className={`shrink-0 text-text-secondary transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-accent" : ""
                    }`} 
                  />
                </button>

                {/* Inline Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4.5 pb-5 pt-2 border-t border-border/40 flex flex-col gap-4">
                        <span className="font-mono text-[9px] font-semibold uppercase tracking-wider text-text-secondary bg-bg-secondary border border-border px-2.5 py-1 rounded w-fit">
                          {opt.forWho}
                        </span>

                        <p className="font-sans text-sm text-text-secondary leading-relaxed font-normal">
                          {opt.outcome}
                        </p>

                        <div className="p-2.5 rounded-lg bg-accent/5 border border-accent/20 text-accent font-mono text-[11px] font-bold">
                          {opt.price}
                        </div>

                        {/* Deliverables Checklist */}
                        <div className="space-y-2.5 my-1">
                          {opt.includes.map((item, i) => (
                            <div key={i} className="flex items-start gap-2.5">
                              <CheckCircle2 size={15} className="shrink-0 text-accent-gold mt-0.5" />
                              <span className="font-sans text-xs text-text-secondary leading-normal font-medium">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <a
                          href={`https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'd%20like%20to%20discuss%20the%20package:%20${encodeURIComponent(opt.label)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary w-full py-3 text-xs font-mono font-bold tracking-wider inline-flex items-center justify-center gap-2 mt-2"
                        >
                          <span>{opt.cta}</span>
                          <ArrowRight size={13} />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
