"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, MessageCircle, ChevronRight } from "lucide-react";

interface ServiceCategory {
  id: string;
  label: string;
  query: string;
  subtitle: string;
}

const SERVICE_OPTIONS: ServiceCategory[] = [
  {
    id: "clinic",
    label: "Dental & Healthcare",
    query: "Healthcare & Dental Clinic",
    subtitle: "Diagnostics, dental practices, specialist doctors",
  },
  {
    id: "beauty",
    label: "Salon & Aesthetics",
    query: "Salon & Aesthetics Studio",
    subtitle: "Bridal henna, beauty salons, skin aesthetic clinics",
  },
  {
    id: "fitness",
    label: "Fitness & Training",
    query: "Gym & Fitness Studio",
    subtitle: "Strength gyms, athletic clubs, wellness studios",
  },
  {
    id: "bridal",
    label: "Bridal & Couture",
    query: "Bridal Atelier & Couture",
    subtitle: "Bridal studios, bespoke couture, artisan tailors",
  },
  {
    id: "service",
    label: "High-Ticket Service",
    query: "Professional Local Service",
    subtitle: "Commercial photographers, law firms, consultants",
  },
  {
    id: "custom",
    label: "Custom Architecture",
    query: "Custom Web Application",
    subtitle: "Bespoke digital booking platforms & multi-location systems",
  },
];

// ─── Mobile-exclusive closing section ─────────────────────────────────────────
function MobileClosing({
  selectedService,
  setSelectedService,
  whatsappUrl,
}: {
  selectedService: ServiceCategory;
  setSelectedService: (s: ServiceCategory) => void;
  whatsappUrl: string;
}) {
  return (
    <div className="sm:hidden flex flex-col min-h-0 w-full px-5 pt-10 pb-8">

      {/* ── Editorial Section Header (No AI Slop) ──────────── */}
      <div className="mb-6">
        <div className="mb-1">
          <span className="font-handwritten text-2xl text-accent font-medium -rotate-1 inline-block tracking-wide">
            Direct with Dipjyoti —
          </span>
        </div>
        <h2 className="font-display font-black text-text-primary text-[2.65rem] leading-[0.98] tracking-[-0.04em] mb-2.5">
          Commission<br />
          your{" "}
          <span className="font-display italic font-normal text-accent">
            flagship.
          </span>
        </h2>
        <p className="font-sans text-[13.5px] text-text-secondary leading-relaxed font-normal">
          Pick your industry below for a clear project quote &amp; timeline directly with me.
        </p>
      </div>

      {/* ── Handcrafted Commission Brief Ticket (Subtle Human Tilt) ── */}
      <div className="p-5 rounded-3xl bg-bg-card/85 dark:bg-zinc-900/70 border border-border/80 dark:border-white/10 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)] -rotate-[0.8deg] active:!rotate-0 active:scale-[0.99] transition-all duration-300 select-none">
        
        {/* Ticket Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-border/50 dark:border-white/10 mb-3.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10px] font-bold text-text-primary dark:text-white uppercase tracking-wider">
              Studio Ticket · 01
            </span>
          </div>
          <span className="font-mono text-[10px] text-accent uppercase tracking-wide font-semibold">
            Sprint Available
          </span>
        </div>

        {/* 2-Column Compact Industry Grid (No Hidden Overflow Scrolling) */}
        <p className="font-mono text-[10.5px] text-text-tertiary uppercase tracking-wider mb-2 font-medium">
          Select Your Industry:
        </p>
        <div className="grid grid-cols-2 gap-2 mb-3.5">
          {SERVICE_OPTIONS.map((item) => {
            const isSelected = selectedService.id === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedService(item)}
                aria-pressed={isSelected}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl font-mono text-[11px] font-semibold border transition-all select-none active:scale-95 text-left ${
                  isSelected
                    ? "bg-text-primary text-bg-primary dark:bg-white dark:text-zinc-950 border-text-primary dark:border-white shadow-xs"
                    : "bg-bg-primary/70 dark:bg-white/[0.03] text-text-secondary border-border/60 hover:border-text-primary/40 hover:text-text-primary"
                }`}
              >
                <span className="truncate">{item.label}</span>
                {isSelected && (
                  <Check size={12} className="shrink-0 ml-1 text-accent dark:text-zinc-950 stroke-[3.5]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Scope Callout */}
        <div className="p-3 rounded-xl bg-bg-primary/80 dark:bg-white/[0.04] border border-border/40 dark:border-white/5 mb-4">
          <p className="font-mono text-[10px] text-text-tertiary dark:text-white/50 uppercase tracking-wider mb-0.5">
            Scope Preview
          </p>
          <p className="font-sans text-[12.5px] text-text-primary dark:text-white/90 font-medium leading-snug">
            {selectedService.subtitle}
          </p>
        </div>

        {/* WhatsApp Primary CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-13 rounded-2xl font-sans font-bold text-xs tracking-wide text-white flex items-center justify-between px-5 active:scale-[0.98] transition-transform duration-150 shadow-md select-none bg-accent hover:opacity-95 mb-2"
          aria-label={`Inquire for ${selectedService.label} on WhatsApp`}
        >
          <div className="flex items-center gap-2.5">
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span>Start on WhatsApp</span>
          </div>
          <span className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 bg-white/20">
            <ArrowUpRight size={15} strokeWidth={2.5} />
          </span>
        </a>

        {/* Secondary Works Link */}
        <a
          href="#flagships"
          className="w-full py-2 flex items-center justify-center gap-1.5 font-mono text-[11px] text-text-secondary hover:text-text-primary transition-colors select-none"
        >
          <span>See live client builds</span>
          <ChevronRight size={13} strokeWidth={2.2} />
        </a>
      </div>

      {/* ── Micro-facts 3-col strip (Ample Spacing, Zero Clipping) ── */}
      <div className="grid grid-cols-3 border-t border-border/40 pt-5 mt-6 text-center">
        <div className="pr-1 border-r border-border/40">
          <p className="font-mono text-[9.5px] text-text-tertiary/70 tracking-[0.08em] uppercase mb-0.5">Location</p>
          <p className="font-mono text-[11px] font-semibold text-text-primary">Guwahati</p>
        </div>
        <div className="px-1 border-r border-border/40">
          <p className="font-mono text-[9.5px] text-text-tertiary/70 tracking-[0.08em] uppercase mb-0.5">Sprints</p>
          <p className="font-mono text-[11px] font-semibold text-text-primary">7–10 Days</p>
        </div>
        <div className="pl-1">
          <p className="font-mono text-[9.5px] text-text-tertiary/70 tracking-[0.08em] uppercase mb-0.5">Ownership</p>
          <p className="font-mono text-[11px] font-semibold text-text-primary">100% Yours</p>
        </div>
      </div>
    </div>
  );
}

// ─── Desktop closing section (unchanged) ──────────────────────────────────────
function DesktopClosing({
  selectedService,
  setSelectedService,
  whatsappUrl,
}: {
  selectedService: ServiceCategory;
  setSelectedService: (s: ServiceCategory) => void;
  whatsappUrl: string;
}) {
  return (
    <div className="hidden sm:flex flex-col items-center w-full">
      {/* Headline */}
      <h2 className="font-display font-black text-text-primary text-6xl lg:text-7xl leading-[1.02] tracking-[-0.04em] mb-4 max-w-2xl text-center">
        Commission your{" "}
        <span className="font-display italic font-normal text-accent">flagship.</span>
      </h2>

      {/* Subtext */}
      <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-xl font-sans font-normal text-center">
        Pick your industry below to review relevant live demos and get a transparent timeline &amp; project quote directly with Dipjyoti.
      </p>

      {/* Industry Chips */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-8 w-full max-w-2xl">
        {SERVICE_OPTIONS.map((item) => {
          const isSelected = selectedService.id === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedService(item)}
              className={`px-4 py-2.5 font-mono text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer border flex items-center gap-2 select-none ${
                isSelected
                  ? "bg-text-primary text-bg-primary dark:bg-white dark:text-zinc-950 border-text-primary dark:border-white shadow-sm scale-[1.02]"
                  : "bg-zinc-50/80 dark:bg-zinc-900/60 text-text-secondary border-border/70 hover:border-text-primary/40 hover:text-text-primary"
              }`}
              aria-pressed={isSelected}
            >
              {isSelected && (
                <Check size={13} className="text-accent stroke-[3] shrink-0" />
              )}
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* WhatsApp CTA */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group w-auto mb-6 px-8 py-4 rounded-full font-mono text-sm font-bold tracking-wider text-white active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 shadow-lg shadow-purple-900/25 cursor-pointer select-none hover:opacity-95"
        style={{ background: "var(--accent)" }}
      >
        <MessageCircle className="w-4 h-4 fill-current shrink-0" />
        <span>Inquire for {selectedService.label} on WhatsApp</span>
        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
      </a>

      {/* Studio Commitments */}
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-xs text-text-tertiary">
        <span className="flex items-center gap-1.5">
          <span className="text-accent font-bold">✓</span> Test on your phone before launch
        </span>
        <span className="opacity-30">·</span>
        <span className="flex items-center gap-1.5">
          <span className="text-accent font-bold">✓</span> 100% Code &amp; Domain Ownership
        </span>
        <span className="opacity-30">·</span>
        <span className="flex items-center gap-1.5">
          <span className="text-accent font-bold">✓</span> Zero monthly maintenance retainers
        </span>
      </div>

      {/* Location */}
      <p className="font-mono text-[10.5px] text-text-tertiary/75 mt-3 tracking-wide text-center">
        North Guwahati, Assam · Direct reply within 1–2 hours
      </p>
    </div>
  );
}

// ─── Root export ───────────────────────────────────────────────────────────────
export default function ClosingSection() {
  const [selectedService, setSelectedService] = useState<ServiceCategory>(
    SERVICE_OPTIONS[0]
  );

  const whatsappUrl = `https://wa.me/918724932985?text=${encodeURIComponent(
    `Hi Dipjyoti, I need a high-converting website for my ${selectedService.query}. Please share relevant live demos and a quick timeline & project quote.`
  )}`;

  return (
    <section
      id="commission"
      className="relative border-t border-border/40 bg-transparent text-text-primary overflow-hidden z-10"
      aria-label="Commission Your Website"
    >
      {/* Mobile layout */}
      <MobileClosing
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        whatsappUrl={whatsappUrl}
      />

      {/* Desktop layout */}
      <div className="hidden sm:flex flex-col items-center py-28 section-container max-w-4xl px-6">
        <DesktopClosing
          selectedService={selectedService}
          setSelectedService={setSelectedService}
          whatsappUrl={whatsappUrl}
        />
      </div>
    </section>
  );
}
