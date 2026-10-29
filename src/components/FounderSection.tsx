"use client";

import Image from "next/image";
import { MessageCircle, ArrowUpRight, CheckCircle2 } from "lucide-react";

// Custom SVG Icons
const GitHubIcon = ({ size = 16 }: { size?: number }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function FounderSection() {
  return (
    <section id="founder" className="py-20 md:py-28 bg-bg-card text-text-primary relative overflow-hidden border-t border-border/40 z-10">
      <div className="section-container max-w-5xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold mb-3 block">
            The Human Craft Behind NERQIVA
          </span>
          <h2
            className="font-display font-black text-text-primary text-3xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Direct engineer oversight on every{" "}
            <span className="font-serif italic font-normal text-accent underline decoration-accent/20">
              flagship.
            </span>
          </h2>
        </div>

        {/* Founder Card */}
        <div className="rounded-3xl p-7 sm:p-10 md:p-12 bg-bg-primary border border-border shadow-xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Portrait & Coordinates */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-2 border-border shadow-lg relative group bg-bg-secondary">
                <Image
                  src="/dip-profile.png"
                  alt="Dipjyoti Das — Founder & Lead Engineer at NERQIVA Studio"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 192px, 224px"
                  priority
                />
              </div>

              <h3 className="font-display font-black text-2xl text-text-primary tracking-tight mt-4 mb-1">
                Dipjyoti Das
              </h3>
              <p className="font-mono text-xs text-accent font-bold tracking-wider uppercase mb-1">
                Founder &amp; Principal Engineer
              </p>
              <p className="font-mono text-[11px] text-text-tertiary">
                North Guwahati, Assam • Direct Access
              </p>
            </div>

            {/* Right Column: Authentic Direct Manifesto */}
            <div className="lg:col-span-7 flex flex-col gap-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-secondary border border-border w-fit text-[11px] font-mono text-text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Working directly with clients worldwide</span>
              </div>

              <blockquote className="text-text-primary text-base sm:text-lg lg:text-xl font-serif italic leading-relaxed">
                &ldquo;Most agency owners outsource their code to cheap overseas freelancers. At NERQIVA, every pixel and every line of code goes through my hands right here in Guwahati. When you work with us, you get my direct phone number. No account managers. No corporate telephone game. Just pure craft delivered on time.&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/dipexplorer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-full border border-border bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <GitHubIcon size={15} />
                  </a>
                  <a
                    href="https://linkedin.com/in/dip-jyoti22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-full border border-border bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedInIcon size={15} />
                  </a>
                </div>

                <a
                  href="https://wa.me/918724932985?text=Hi%20Dipjyoti,%20I'd%20like%20to%20discuss%20a%20flagship%20website%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-2.5 px-5 text-xs font-bold font-mono tracking-wider flex items-center gap-2 shadow-md shadow-accent/20"
                >
                  <MessageCircle size={14} />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
