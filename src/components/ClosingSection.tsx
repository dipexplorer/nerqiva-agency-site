"use client";

import { ArrowRight } from "lucide-react";

export default function ClosingSection() {
  return (
    <section className="relative py-16 sm:py-24 border-t border-border/30 bg-transparent flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/8 blur-[140px] pointer-events-none rounded-full" />

      <div className="section-container relative z-10 flex flex-col items-center max-w-2xl">
        {/* Eyebrow */}
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-tertiary mb-6 block">
          Ready to get more clients?
        </span>

        {/* Headline */}
        <h2
          className="font-sans font-extrabold text-text-primary leading-[1.1] mb-5 tracking-tight"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", letterSpacing: "-0.03em" }}
        >
          Tell us about your business and we'll show you <span className="text-[#4C1D95] dark:text-[#C4B5FD] font-black">what's possible.</span>
        </h2>

        {/* Subtext */}
        <p className="text-text-secondary text-base leading-relaxed mb-10 max-w-md font-normal">
          No commitment, no pressure. Send us a WhatsApp message with your business type and we'll send you the most relevant demo — plus a rough idea of what it would cost to build for you.
        </p>

        {/* Single CTA */}
        <a
          href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I%20want%20to%20see%20what%20you%20can%20do%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full sm:w-auto bg-[#4C1D95] hover:bg-[#3B0764] text-white px-10 py-4.5 font-sans text-base font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 rounded-xl shadow-xl shadow-[#4C1D95]/25 hover:scale-[1.01] mb-4"
        >
          <span>Let's talk — WhatsApp us</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <p className="font-sans text-xs text-text-tertiary">
          Usually reply within a few hours during business hours.
        </p>
      </div>
    </section>
  );
}
