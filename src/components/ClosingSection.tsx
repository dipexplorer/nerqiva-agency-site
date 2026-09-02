"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ClosingSection() {
  return (
    <section className="relative py-32 border-t border-border/40 bg-transparent flex flex-col items-center justify-center text-center">
      <div className="section-container relative z-20 w-full flex flex-col items-center max-w-3xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 bg-accent/40" />
          <span className="label-eyebrow">Ready to build something useful?</span>
          <div className="h-px w-8 bg-accent/40" />
        </div>

        <h2
          className="font-sans font-extrabold text-text-primary leading-[1.1] mb-6 tracking-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em" }}
        >
          Tell us the problem.
        </h2>

        <p className="text-text-secondary text-lg leading-relaxed mb-12 max-w-lg">
          We&apos;ll figure out exactly what should be built — and what shouldn&apos;t.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Link
            href="/contact"
            className="group relative w-full sm:w-auto bg-accent text-white px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent-mid transition-all duration-200 cursor-pointer overflow-hidden flex items-center justify-center gap-3"
            style={{ borderRadius: "4px", boxShadow: "0 4px 24px rgba(124,58,237,0.3)" }}
          >
            <span className="relative z-10">Start a Project</span>
            <ArrowRight size={15} className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-200" />
          </Link>

          <a
            href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'd%20like%20to%20discuss%20a%20website%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto bg-emerald-600 text-white px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-emerald-700 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
            style={{ borderRadius: "4px" }}
          >
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
