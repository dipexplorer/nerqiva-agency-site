"use client";

import Image from "next/image";
import { ExternalLink, Sparkles } from "lucide-react";

export default function FounderSection() {
  return (
    <section className="py-20 md:py-28 bg-transparent text-text-primary relative overflow-hidden border-t border-border/30">
      {/* Structural Ambient Grid Pattern matching WhyUs & CaseStudies */}
      <div 
        className="absolute inset-0 opacity-15 dark:opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, var(--border-dark) 1px, transparent 0)', 
          backgroundSize: '28px 28px' 
        }} 
      />

      <div className="section-container max-w-5xl relative z-10">
        
        {/* Eyebrow Header matching WhyUs & SolutionBuilder section flow */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-widest bg-accent/10 dark:bg-accent/20 text-accent dark:text-accent-light border border-accent/20 dark:border-accent/30 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-accent dark:text-accent-light" />
            ENGINEERING LEADERSHIP
          </div>
          <h2 
            className="font-sans font-extrabold text-text-primary tracking-tight leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            Direct Founder Oversight On Every Build
          </h2>
        </div>

        {/* Main Card Container using theme variables for 100% page consistency */}
        <div className="relative rounded-2xl p-8 sm:p-10 md:p-12 bg-bg-card border border-border/80 shadow-sm dark:shadow-2xl overflow-hidden transition-all duration-300">
          
          {/* Subtle Accent Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent/10 dark:bg-accent/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Profile Picture & Location */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-xl overflow-hidden border border-border/60 shadow-md relative group bg-bg-secondary">
                <Image 
                  src="/dip-profile.png" 
                  alt="Dipjyoti Das - Founder of NERQIVA" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  sizes="(max-width: 768px) 176px, 208px"
                  priority
                />
              </div>
              <p className="mt-3.5 font-mono text-[10px] tracking-widest text-text-tertiary uppercase font-medium">
                GUWAHATI / INDIA
              </p>
            </div>

            {/* Right Column: Badges, Bio & Social Buttons */}
            <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
              
              {/* Badges Row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider bg-bg-secondary text-text-secondary border border-border">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  FOUNDER & LEAD ENGINEER
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  AVAILABLE FOR PROJECTS
                </span>
              </div>

              {/* Name Heading */}
              <h3 className="font-sans font-extrabold text-3xl sm:text-4xl text-text-primary tracking-tight">
                Dipjyoti Das
              </h3>

              {/* Bio Paragraphs */}
              <div className="space-y-3 text-text-secondary text-base leading-relaxed font-sans">
                <p>
                  I founded <strong className="text-text-primary font-semibold">NERQIVA</strong> to give business owners, founders, and local brands high-converting, luxury web engineering without the high costs, hidden fees, and slow delivery of traditional agencies.
                </p>
                <p>
                  When you work with us, I personally oversee your web design, system architecture, and WhatsApp lead flow integration to guarantee your site goes live fast and brings in real clients.
                </p>
              </div>

              {/* Social Link Buttons following site button standards */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <a 
                  href="https://linkedin.com/in/dip-jyoti22" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <a 
                  href="https://github.com/dipexplorer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                  </svg>
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <a 
                  href="https://dip-jyoti22.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary"
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



