"use client";

import Image from "next/image";
import { ExternalLink, CheckCircle2 } from "lucide-react";

export default function FounderSection() {
  return (
    <section id="founder" className="py-20 md:py-28 bg-bg-primary text-text-primary relative overflow-hidden border-t border-border/45 z-10">
      {/* Structural Ambient Grid Pattern */}
      <div
        className="absolute inset-0 opacity-15 dark:opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, var(--border-dark) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="section-container max-w-5xl relative z-10">
        {/* Header: Pure Typographic Authority without AI Kicker */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <h2
            className="font-serif text-text-primary tracking-tight leading-tight text-center mb-4"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            Direct founder oversight on every <span className="italic font-normal">flagship</span>.
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-normal text-center max-w-2xl mx-auto">
            No junior outsourcing or account manager middlemen. You collaborate directly with the senior engineer architecting and coding your system.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="relative rounded-2xl p-7 sm:p-10 md:p-12 bg-bg-card border border-border/70 shadow-xs overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Profile Picture & Location */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border border-border/70 shadow-sm relative group bg-bg-secondary">
                <Image
                  src="/dip-profile.png"
                  alt="Dipjyoti Das - Founder & Lead Engineer at NERQIVA"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 176px, 208px"
                  priority
                />
              </div>
              <p className="mt-3.5 font-mono text-[10px] tracking-widest text-text-tertiary uppercase font-medium">
                Guwahati, Assam · Available Globally
              </p>
            </div>

            {/* Right Column: Badges, Bio, Focus & Social Links */}
            <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
              {/* Badges Row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-semibold bg-accent/10 text-accent border border-accent/25">
                  Founder &amp; Principal Engineer
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-semibold text-accent-gold bg-accent-gold/10 border border-accent-gold/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse" />
                  Accepting Projects for Q2
                </span>
              </div>

              {/* Name Heading */}
              <h3 className="font-sans font-bold text-3xl sm:text-4xl text-text-primary tracking-tight">
                Dipjyoti Das
              </h3>

              {/* Bio Paragraphs */}
              <div className="space-y-3 text-text-secondary text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  I founded <strong className="text-text-primary font-semibold">NERQIVA</strong> to give ambitious business owners, luxury clinics, and high-ticket service brands elite digital flagships without the inflated retainer fees, slow bureaucracy, and hidden costs of traditional agencies.
                </p>
                <p>
                  When you commission a project with us, I personally architect your conversion flow, write the Next.js edge codebase, and configure your WhatsApp lead routing to guarantee your site launches fast and converts casual visitors into paying clients.
                </p>
              </div>

              {/* Technical Deliverables Pills */}
              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {[
                  "Next.js 15 & React",
                  "TypeScript Architecture",
                  "Direct WhatsApp Flow",
                  "Zero-Lag Touch Layouts",
                ].map((spec, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-bg-secondary text-text-primary border border-border/50 rounded-md font-mono text-[10px] font-medium flex items-center gap-1.5 shadow-2xs"
                  >
                    <CheckCircle2 size={12} className="text-accent-gold shrink-0" />
                    {spec}
                  </span>
                ))}
              </div>

              {/* Social Link Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
                <a
                  href="https://linkedin.com/in/dip-jyoti22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-semibold rounded-lg"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <a
                  href="https://github.com/dipexplorer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-semibold rounded-lg"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                  </svg>
                  <span>GitHub Codebase</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <a
                  href="https://dip-jyoti22.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-semibold rounded-lg"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                  <span>Personal Portfolio</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
