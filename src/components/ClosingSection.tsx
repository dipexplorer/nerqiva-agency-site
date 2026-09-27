"use client";

import { useState } from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const SERVICE_OPTIONS = [
  { id: "beauty", label: "Salon & MUA", query: "Salon & Beauty Studio" },
  { id: "gym", label: "Gym & Fitness", query: "Gym & Fitness Studio" },
  { id: "bridal", label: "Bridal & Fashion", query: "Bridal & Boutique" },
  { id: "local", label: "Local Service", query: "Local Business Service" },
  { id: "custom", label: "Custom App", query: "Custom Web Application" },
];

export default function ClosingSection() {
  const [selectedService, setSelectedService] = useState(SERVICE_OPTIONS[0]);

  const whatsappUrl = `https://wa.me/918724932985?text=${encodeURIComponent(
    `Hi NERQIVA! I need a high-converting website for my ${selectedService.query}. Please send me relevant demos and a quick quote.`
  )}`;

  return (
    <section className="relative py-16 sm:py-24 border-t border-border/30 bg-transparent flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-accent/8 blur-[130px] pointer-events-none rounded-full" />

      <div className="section-container relative z-10 flex flex-col items-center max-w-3xl">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent dark:text-accent-light text-xs font-mono font-bold uppercase tracking-wider mb-6">
          <Sparkles size={12} />
          <span>10-SECOND INSTANT INQUIRY</span>
        </div>

        {/* Headline */}
        <h2
          className="font-sans font-extrabold text-text-primary leading-[1.15] mb-4 tracking-tight"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", letterSpacing: "-0.03em" }}
        >
          Select your business type and see <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-accent-gold">
            what&apos;s possible today.
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-normal">
          No commitment, no sales calls. Tap your business category below to get direct WhatsApp demo links & instant project estimation.
        </p>

        {/* Interactive Category Pills Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-2xl">
          {SERVICE_OPTIONS.map((item) => {
            const isSelected = selectedService.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedService(item)}
                className={`px-4 py-2 font-mono text-xs font-bold rounded-full transition-all duration-200 cursor-pointer border flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-accent text-white border-accent shadow-md dark:text-zinc-950 scale-105"
                    : "bg-bg-card text-text-secondary border-border hover:border-accent/40 hover:text-text-primary"
                }`}
              >
                {isSelected && <CheckCircle2 size={13} className="shrink-0" />}
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
          className="btn-primary group w-full sm:w-auto mb-4 px-8 py-3.5 text-sm"
        >
          <span>Get Quote for {selectedService.label}</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <p className="font-sans text-xs text-text-tertiary pt-1">
          Instant 1-tap WhatsApp message · Usually reply within 1-2 hours
        </p>
      </div>
    </section>
  );
}
