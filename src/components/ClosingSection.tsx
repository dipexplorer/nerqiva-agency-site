"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const SERVICE_OPTIONS = [
  { id: "clinic", label: "Dental & Healthcare", query: "Healthcare & Clinic" },
  { id: "beauty", label: "Salon & Aesthetics", query: "Salon & Aesthetics Studio" },
  { id: "fitness", label: "Fitness & Training", query: "Gym & Fitness Studio" },
  { id: "bridal", label: "Bridal & Couture", query: "Bridal & Boutique" },
  { id: "service", label: "High-Ticket Service", query: "Professional Local Service" },
  { id: "custom", label: "Custom Architecture", query: "Custom Web Application" },
];

export default function ClosingSection() {
  const [selectedService, setSelectedService] = useState(SERVICE_OPTIONS[0]);

  const whatsappUrl = `https://wa.me/918724932985?text=${encodeURIComponent(
    `Hi NERQIVA! I need a high-converting digital flagship for my ${selectedService.query}. Please send me relevant live demos and a quick project quote.`
  )}`;

  return (
    <section className="relative py-20 sm:py-28 border-t border-border/45 bg-bg-primary text-text-primary flex flex-col items-center justify-center text-center overflow-hidden z-10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-accent/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="w-full max-w-3xl px-4 sm:px-6 relative z-10 flex flex-col items-center">
        {/* Headline: Pure Typographic Authority without AI Kicker */}
        <h2
          className="font-serif text-text-primary leading-[1.15] mb-4 tracking-tight px-2 sm:px-0"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", letterSpacing: "-0.03em" }}
        >
          Select your business category and commission your <span className="italic font-normal">flagship</span>.
        </h2>

        {/* Subtext */}
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal px-4 sm:px-0">
          Direct WhatsApp inquiry with zero sales friction. Tap your industry below to review relevant live demos and receive a transparent project quote.
        </p>

        {/* Interactive Category Pills Selector (Wrapped, Balanced Grid) */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-8 w-full max-w-2xl px-2">
          {SERVICE_OPTIONS.map((item) => {
            const isSelected = selectedService.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedService(item)}
                className={`px-4 py-2 font-mono text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer border flex items-center gap-2 ${
                  isSelected
                    ? "bg-accent text-white border-accent shadow-xs"
                    : "bg-bg-card text-text-secondary border-border/70 hover:border-accent/40 hover:text-text-primary"
                }`}
              >
                {isSelected && <CheckCircle2 size={13} className="text-accent-gold shrink-0" />}
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
          className="btn-primary group w-full sm:w-auto mb-3.5 px-8 py-3.5 text-sm flex justify-center items-center gap-2.5 shadow-sm"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.36 7.34 9.09 7.4 8.87 7.65C8.65 7.89 8.02 8.48 8.02 9.7C8.02 10.92 8.91 12.09 9.03 12.26C9.16 12.42 10.77 14.91 13.23 15.97C13.82 16.22 14.27 16.37 14.64 16.49C15.22 16.67 15.75 16.65 16.17 16.59C16.64 16.52 17.61 16 17.81 15.43C18.02 14.86 18.02 14.37 17.95 14.27C17.89 14.17 17.72 14.11 17.47 13.98C17.22 13.86 16 13.26 15.77 13.18C15.54 13.09 15.38 13.05 15.21 13.3C15.05 13.54 14.58 14.11 14.44 14.27C14.3 14.44 14.16 14.46 13.91 14.33C13.66 14.21 12.86 13.95 11.91 13.1C11.17 12.44 10.67 11.62 10.52 11.37C10.38 11.13 10.5 10.99 10.63 10.87C10.74 10.76 10.87 10.58 11 10.43C11.13 10.28 11.17 10.17 11.25 10.01C11.34 9.84 11.3 9.7 11.23 9.58C11.17 9.46 10.71 8.32 10.52 7.86C10.33 7.42 10.14 7.48 9.99 7.47C9.86 7.47 9.7 7.46 9.53 7.46V7.34Z" />
          </svg>
          <span>Inquire for {selectedService.label}</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <p className="font-sans text-xs text-text-tertiary font-normal px-4 text-center">
          Direct WhatsApp routing · Reply within 1–2 hours · Zero sales pressure
        </p>
      </div>
    </section>
  );
}
