"use client";

import React, { useState, useRef } from "react";
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
  const stripRef = useRef<HTMLDivElement>(null);

  return (
    <div className="sm:hidden flex flex-col min-h-0 w-full px-5 pt-10 pb-8">

      {/* ── Eyebrow rule ───────────────────────────────────── */}
      <div className="flex items-center gap-3 mb-7">
        <span className="h-px flex-1 bg-border/60" />
        <span className="font-mono text-[10px] tracking-[0.18em] text-text-tertiary uppercase">
          Direct Studio Commission
        </span>
        <span className="h-px flex-1 bg-border/60" />
      </div>

      {/* ── Editorial headline ─────────────────────────────── */}
      <h2 className="font-display font-black text-text-primary text-[2.75rem] leading-[0.95] tracking-[-0.045em] mb-5">
        Commission<br />
        your{" "}
        <span
          className="font-display italic font-normal"
          style={{
            display: "inline-block",
            background: "var(--accent)",
            color: "#fff",
            paddingLeft: "0.18em",
            paddingRight: "0.22em",
            paddingBottom: "0.06em",
            borderRadius: "5px",
            transform: "rotate(-1.2deg)",
            marginLeft: "-0.04em",
          }}
        >
          flagship.
        </span>
      </h2>

      {/* ── Industry selector — horizontal swipe strip ────── */}
      <p className="font-sans text-[13px] text-text-secondary mb-3 leading-snug">
        Tap your industry to get a tailored quote:
      </p>

      <div
        ref={stripRef}
        className="flex gap-2 overflow-x-auto pb-3 -mx-5 px-5 touch-pan-x"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        aria-label="Industry selector"
      >
        {SERVICE_OPTIONS.map((item) => {
          const isSelected = selectedService.id === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedService(item)}
              aria-pressed={isSelected}
              className={`flex-none flex items-center gap-1.5 px-3.5 py-2 rounded-full font-mono text-[11px] font-semibold border transition-all duration-200 select-none active:scale-95 whitespace-nowrap ${
                isSelected
                  ? "bg-text-primary text-bg-primary border-text-primary dark:bg-white dark:text-zinc-950 dark:border-white shadow-sm"
                  : "bg-transparent text-text-secondary border-border/70 hover:border-text-primary/40 hover:text-text-primary"
              }`}
            >
              {isSelected && (
                <Check size={11} className="text-accent stroke-[3.5] shrink-0 dark:text-zinc-950" />
              )}
              {item.label}
            </button>
          );
        })}
        {/* Fade-out hint that there's more to scroll */}
        <div
          className="flex-none w-10 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* ── Selected subtitle ─────────────────────────────── */}
      <p className="font-mono text-[11px] text-text-tertiary mt-1 mb-7 tracking-wide min-h-[1.4em] transition-all duration-300">
        {selectedService.subtitle}
      </p>

      {/* ── WhatsApp CTA ────────────────────────────────────── */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full h-14 rounded-2xl font-sans font-bold text-sm text-white flex items-center justify-between px-5 active:scale-[0.98] transition-transform duration-150 shadow-lg select-none mb-3"
        style={{ background: "var(--accent)" }}
        aria-label={`Inquire for ${selectedService.label} on WhatsApp`}
      >
        <div className="flex items-center gap-2.5">
          <MessageCircle className="w-4 h-4 fill-current shrink-0" />
          <span>Start on WhatsApp</span>
        </div>
        <span
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
          style={{ background: "rgba(255,255,255,0.18)" }}
          aria-hidden="true"
        >
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </span>
      </a>

      {/* ── Ghost second action ────────────────────────────── */}
      <a
        href="#flagships"
        className="w-full h-11 flex items-center justify-center gap-2 font-sans text-sm font-semibold text-text-secondary border border-border/60 rounded-2xl active:bg-bg-secondary transition-colors duration-150 select-none mb-8"
      >
        See Our Work
        <ChevronRight size={15} strokeWidth={2.2} />
      </a>

      {/* ── Micro-facts 3-col strip ────────────────────────── */}
      <div className="grid grid-cols-3 border-t border-border/40 pt-5">
        <div className="text-left pr-3 border-r border-border/40">
          <p className="font-mono text-[10px] text-text-tertiary/70 tracking-[0.08em] uppercase mb-0.5">Location</p>
          <p className="font-mono text-[11px] font-semibold text-text-primary">Guwahati</p>
        </div>
        <div className="text-center px-2 border-r border-border/40">
          <p className="font-mono text-[10px] text-text-tertiary/70 tracking-[0.08em] uppercase mb-0.5">Sprints</p>
          <p className="font-mono text-[11px] font-semibold text-text-primary">Transparent</p>
        </div>
        <div className="text-right pl-3">
          <p className="font-mono text-[10px] text-text-tertiary/70 tracking-[0.08em] uppercase mb-0.5">Ownership</p>
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
