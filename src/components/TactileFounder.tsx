"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, MapPin } from "lucide-react";

const GitHubIcon = ({ size = 15 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedInIcon = ({ size = 15 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function TactileFounder() {
  return (
    <section id="founder" className="py-20 sm:py-28 bg-transparent border-t border-border/50 dark:border-white/10 relative overflow-hidden">
      <div className="section-container relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Authentic Studio Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="w-full max-w-[320px] sm:max-w-[360px]">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 border border-border dark:border-white/10 shadow-xl group">
                <img
                  src="/dip-profile.png"
                  alt="Dipjyoti Das — Founder & Principal Engineer"
                  className="w-full h-full object-cover object-top grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="font-display font-bold text-base sm:text-lg block leading-tight">
                    Dipjyoti Das
                  </span>
                  <span className="font-sans text-xs text-white/70 block mt-0.5">
                    Founder & Lead Designer-Engineer
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 text-xs font-mono text-text-tertiary dark:text-white/40">
                <MapPin size={13} className="text-accent shrink-0" />
                <span>North Guwahati, Assam · Available Pan-India</span>
              </div>
            </div>
          </div>

          {/* Right: Direct Words & Studio Ethos (Human-crafted, zero jargon) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h2
                className="font-display font-black text-text-primary dark:text-white text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-tight mb-5"
                style={{ letterSpacing: "-0.035em" }}
              >
                You work with the builder —{" "}
                <em className="font-serif italic font-normal text-accent dark:text-accent not-italic">
                  not an account manager.
                </em>
              </h2>

              <p className="text-text-secondary dark:text-white/60 text-base sm:text-lg leading-relaxed font-normal mb-8 max-w-xl">
                Traditional agencies hand your project down to junior freelancers and hide behind layers of managers. At NERQIVA, every screen, animation, and line of code is crafted directly by me. Direct WhatsApp access from day one.
              </p>

              {/* Three Human Trust Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 py-6 border-y border-border/60 dark:border-white/10 mb-8">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block mb-1">
                    Direct Line
                  </span>
                  <span className="text-sm text-text-primary dark:text-white/85 font-medium leading-snug block">
                    Chat with the founder on WhatsApp
                  </span>
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block mb-1">
                    Full Ownership
                  </span>
                  <span className="text-sm text-text-primary dark:text-white/85 font-medium leading-snug block">
                    100% clean code handover
                  </span>
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block mb-1">
                    Transparent
                  </span>
                  <span className="text-sm text-text-primary dark:text-white/85 font-medium leading-snug block">
                    Zero monthly retainer lock-in
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Contact Actions */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="https://wa.me/918724932985?text=Hi%20Dipjyoti,%20I'd%20like%20to%20talk%20about%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 bg-text-primary dark:bg-white text-bg-primary dark:text-black hover:opacity-90 hover:scale-[1.02] shadow-sm cursor-pointer select-none"
              >
                <MessageCircle size={15} />
                <span>Chat with Dipjyoti</span>
                <ArrowUpRight size={13} />
              </a>

              <a
                href="https://github.com/dipexplorer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border dark:border-white/15 text-text-secondary dark:text-white/70 hover:text-text-primary dark:hover:text-white hover:border-accent transition-colors"
                aria-label="Dipjyoti's GitHub"
              >
                <GitHubIcon size={15} />
              </a>

              <a
                href="https://linkedin.com/in/dip-jyoti22"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border dark:border-white/15 text-text-secondary dark:text-white/70 hover:text-text-primary dark:hover:text-white hover:border-accent transition-colors"
                aria-label="Dipjyoti's LinkedIn"
              >
                <LinkedInIcon size={15} />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
