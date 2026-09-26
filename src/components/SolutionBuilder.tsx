"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WHAT_WE_BUILD = [
  {
    id: "website",
    label: "A website that converts",
    outcome: "A professional website that loads fast, looks great on mobile, and turns visitors into paying customers.",
    forWho: "Best for: Salons, studios, clinics, boutiques, photographers",
    includes: [
      "Designed to match your brand and quality of work",
      "Fast on mobile — no lag, no zooming, no tiny buttons",
      "WhatsApp booking button so clients can reach you in one tap",
      "Google-ready so you show up in local searches",
    ],
    price: "One-time investment. No monthly fees.",
    cta: "Tell me about my website"
  },
  {
    id: "whatsapp",
    label: "WhatsApp lead automation",
    outcome: "Never miss an inquiry again. When someone fills your form, you get a WhatsApp message instantly — even at midnight.",
    forWho: "Best for: Busy business owners who can't always reply immediately",
    includes: [
      "Instant WhatsApp alert the moment someone inquires",
      "Auto-reply sent to the customer so they know you received it",
      "Their details (name, service, date) formatted and ready in your chat",
      "Works on top of any website — existing or new",
    ],
    price: "Add-on to any website package.",
    cta: "Stop missing inquiries"
  },
  {
    id: "google",
    label: "Google & Maps visibility",
    outcome: "Get found when people in your city search for the service you offer — on Google Search and Google Maps.",
    forWho: "Best for: Businesses that rely on local walk-in or discovery clients",
    includes: [
      "Google Business Profile set up or optimised",
      "Maps listing with correct address, hours, and photos",
      "Website pages written to rank for local search terms",
      "Basic review strategy to build social proof over time",
    ],
    price: "One-time setup. You own it permanently.",
    cta: "Get found on Google"
  },
  {
    id: "refresh",
    label: "Old website refresh",
    outcome: "If your website exists but embarrasses you when you send clients to it — we fix that without rebuilding from scratch.",
    forWho: "Best for: Businesses with an existing site that looks outdated or performs poorly on mobile",
    includes: [
      "Mobile experience fixed — layout, buttons, text size",
      "Speed improvements so it loads in under 2 seconds",
      "Updated copy and visuals to match your current work",
      "WhatsApp CTA added so visitors can contact you easily",
    ],
    price: "Flat fee. Faster turnaround than a full build.",
    cta: "Refresh my existing site"
  }
];

export default function SolutionBuilder() {
  const [selected, setSelected] = useState<string>("website");
  const active = WHAT_WE_BUILD.find((o) => o.id === selected) || WHAT_WE_BUILD[0];

  return (
    <section id="solutions" className="py-24 bg-transparent relative border-t border-border/30">
      <div className="section-container">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-tertiary">
              What we build
            </span>
          </div>
          <h2
            className="font-sans font-extrabold text-text-primary leading-[1.08] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            Pick what you need.
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mt-3 max-w-lg">
            Not every business needs the same thing. Choose the closest match to see exactly what's included.
          </p>
        </div>

        {/* Selector Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10 relative z-10">
          {WHAT_WE_BUILD.map((opt) => {
            const isActive = selected === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setSelected(opt.id)}
                className={`px-5 py-3 font-sans text-sm font-semibold transition-all duration-200 border cursor-pointer rounded ${
                  isActive
                    ? "bg-accent text-white border-accent shadow-md shadow-accent/20"
                    : "bg-bg-secondary/80 text-text-secondary border-border/40 hover:border-accent/30 hover:text-text-primary"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="grid md:grid-cols-2 gap-0 border border-border/50 glass-panel overflow-hidden shadow-2xl rounded backdrop-blur-xl"
          >
            {/* Left: Outcome description */}
            <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-border/40 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary mb-3 block">
                  {active.forWho}
                </span>
                <h3 className="font-sans text-text-primary text-xl font-bold leading-snug mb-4">
                  {active.outcome}
                </h3>
                <p className="font-sans text-sm font-semibold text-accent mt-2">
                  {active.price}
                </p>
              </div>

              <div className="mt-8">
                <a
                  href={`https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'm%20interested%20in:%20${encodeURIComponent(active.label)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 w-full justify-center py-4 bg-accent text-white font-sans text-sm font-bold hover:bg-accent-mid transition-all duration-300 rounded shadow-lg shadow-accent/20"
                >
                  <span>{active.cta}</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-center font-mono text-[9px] text-text-tertiary mt-2 tracking-wider">
                  Opens WhatsApp — no forms, no waiting
                </p>
              </div>
            </div>

            {/* Right: What's included */}
            <div className="p-8 md:p-10 bg-bg-secondary/30">
              <span className="font-sans text-xs font-bold text-text-primary block mb-5 uppercase tracking-wide">
                What's included:
              </span>
              <div className="flex flex-col gap-4">
                {active.includes.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="shrink-0 h-5 w-5 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mt-0.5">
                      <span className="font-mono text-[9px] text-accent font-extrabold">{i + 1}</span>
                    </div>
                    <span className="font-sans text-sm text-text-secondary leading-normal">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
