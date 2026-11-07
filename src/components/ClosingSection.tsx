"use client";

import React, { useState } from "react";
import { ArrowRight, Check, ShieldCheck, MessageCircle } from "lucide-react";

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
      className="relative py-20 sm:py-28 border-t border-border/40 bg-transparent text-text-primary flex flex-col items-center justify-center text-center overflow-hidden z-10"
      aria-label="Commission Your Website"
    >
      <div className="section-container max-w-4xl px-4 sm:px-6 relative z-10 flex flex-col items-center">
        
        {/* Headline: Pure Editorial Authority (Zero Generic AI Kicker) */}
        <h2
          className="font-display font-black text-text-primary text-4xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.04em] mb-4 max-w-2xl"
        >
          Commission your{" "}
          <span className="font-display italic font-normal text-accent">
            flagship.
          </span>
        </h2>

        {/* Minimal Subtext: Direct & Zero Fluff */}
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-sans font-normal">
          Pick your industry below to review relevant live demos and get a transparent timeline &amp; project quote directly with Dipjyoti.
        </p>

        {/* Interactive Industry Chips */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-8 w-full max-w-2xl">
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

        {/* Dynamic WhatsApp CTA Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full sm:w-auto mb-6 px-8 py-4 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wider text-white active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 shadow-lg shadow-purple-900/25 cursor-pointer select-none hover:opacity-95"
          style={{ background: "var(--accent)" }}
        >
          <MessageCircle className="w-4 h-4 fill-current shrink-0" />
          <span>Inquire for {selectedService.label} on WhatsApp</span>
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Clean Studio Commitments (Zero Cartoonish Guarantee Box) */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[11px] sm:text-xs text-text-tertiary">
          <span className="flex items-center gap-1.5">
            <span className="text-accent font-bold">✓</span> Test on your phone before launch
          </span>
          <span className="hidden sm:inline opacity-30">·</span>
          <span className="flex items-center gap-1.5">
            <span className="text-accent font-bold">✓</span> 100% Code &amp; Domain Ownership
          </span>
          <span className="hidden sm:inline opacity-30">·</span>
          <span className="flex items-center gap-1.5">
            <span className="text-accent font-bold">✓</span> Zero monthly maintenance retainers
          </span>
        </div>

        {/* Location & Response Dispatch */}
        <p className="font-mono text-[10.5px] text-text-tertiary/75 mt-3 tracking-wide text-center">
          North Guwahati, Assam · Direct reply within 1–2 hours
        </p>
      </div>
    </section>
  );
}
