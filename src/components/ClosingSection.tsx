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
        
        {/* Editorial Sub-badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-text-tertiary">
            Direct Studio Commission
          </span>
        </div>

        {/* Headline: Fraunces Display Typography */}
        <h2
          className="font-display font-black text-text-primary text-3xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight mb-4 max-w-3xl"
          style={{ letterSpacing: "-0.035em" }}
        >
          Select your business category and commission your{" "}
          <span className="font-display italic font-normal text-accent">
            flagship.
          </span>
        </h2>

        {/* Plain Language Subtext */}
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-sans font-normal">
          Direct WhatsApp conversation with founder Dipjyoti. Tap your industry below to review live demos in your exact space and receive a transparent project quote.
        </p>

        {/* Interactive Industry Chips (Touch-friendly 44px+ height) */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-8 w-full max-w-2xl">
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
          className="group w-full sm:w-auto mb-4 px-8 py-4 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wider text-white active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 shadow-lg shadow-purple-900/25 cursor-pointer select-none hover:opacity-95"
          style={{ background: "var(--accent)" }}
        >
          <MessageCircle className="w-4 h-4 fill-current shrink-0" />
          <span>Inquire for {selectedService.label} on WhatsApp</span>
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Zero-Risk Staging Guarantee Card */}
        <div className="mt-8 max-w-xl w-full p-5 sm:p-6 rounded-2xl bg-zinc-50/90 dark:bg-zinc-900/40 border border-border/80 dark:border-zinc-800 shadow-sm flex items-start gap-4 text-left">
          <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/25 text-accent flex items-center justify-center shrink-0 mt-0.5">
            <ShieldCheck size={20} strokeWidth={2} />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="font-mono text-[11px] uppercase tracking-wider text-text-primary font-bold">
                Zero-Risk Staging Guarantee
              </span>
              <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-accent/10 text-accent dark:text-accent-light font-bold border border-accent/20">
                100% Code Ownership
              </span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed font-sans">
              You receive a private mobile staging link to click, book, and test on your own smartphone before DNS connects. If the performance and booking flow don&apos;t meet your exact standard, we don&apos;t launch. Zero monthly maintenance retainers.
            </p>
          </div>
        </div>

        {/* Micro Credibility Dispatch */}
        <p className="font-mono text-[11px] text-text-tertiary mt-4 tracking-wide text-center">
          Guwahati, Assam · Reply within 1–2 hours · 100% Client Data & Domain Ownership
        </p>
      </div>
    </section>
  );
}
