"use client";

import { useState, useRef } from "react";
import { ArrowUpRight, ArrowDown, Play, Pause } from "lucide-react";

interface FlagshipProject {
  id: string;
  index: string;
  client: string;
  tag: string;
  industry: string;
  image: string;
  liveUrl: string;
  displayUrl: string;
  speedMetric: string;
}

const PROJECTS: FlagshipProject[] = [
  {
    id: "lablink",
    index: "01",
    client: "LabLink Guwahati",
    tag: "HEALTHCARE",
    industry: "Clinical Diagnostics Platform",
    image: "/images/projects/lablink/desktop.png",
    liveUrl: "https://www.lablinkguwahati.in/",
    displayUrl: "lablinkguwahati.in",
    speedMetric: "< 0.72s Mobile Paint",
  },
  {
    id: "krishav",
    index: "02",
    client: "Krishav Mehendi",
    tag: "ATELIER",
    industry: "Luxury Bridal Henna Studio",
    image: "/images/projects/krishavmehendi/bridal.png",
    liveUrl: "https://hennaart-nine.vercel.app/",
    displayUrl: "krishavmehendi.com",
    speedMetric: "100% WhatsApp Booking",
  },
  {
    id: "titangym",
    index: "03",
    client: "Titan Athletic Club",
    tag: "FITNESS",
    industry: "High-Performance Athletic Club",
    image: "/images/projects/titangym/contrast.png",
    liveUrl: "https://titangymnq.vercel.app/",
    displayUrl: "titangymnq.vercel.app",
    speedMetric: "3s VIP Intake",
  },
  {
    id: "valerie",
    index: "04",
    client: "Valerie Laurent",
    tag: "EDITORIAL",
    industry: "Parisian Haute Couture",
    image: "/images/projects/editorial/vogue.png",
    liveUrl: "https://bridalnerqiva.vercel.app/",
    displayUrl: "valerielaurent.com",
    speedMetric: "Vogue-Grade Grid",
  },
  {
    id: "aurabeauty",
    index: "05",
    client: "Aura Wellness Clinic",
    tag: "MED-SPA",
    industry: "Aesthetic Medicine & Spa",
    image: "/images/projects/aurabeauty/final_hero.png",
    liveUrl: "https://nerqiva.com",
    displayUrl: "aurawellness.in",
    speedMetric: "< 0.68s Mobile Paint",
  },
  {
    id: "vowsnveils",
    index: "06",
    client: "Vows & Veils Atelier",
    tag: "WEDDINGS",
    industry: "Cinematic Visual Storytelling",
    image: "/images/projects/wedding/bride_portrait.png",
    liveUrl: "https://bridalnerqiva.vercel.app/",
    displayUrl: "vowsnveils.in",
    speedMetric: "< 0.71s Mobile Paint",
  },
];

export default function SensoryHero() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden bg-bg-primary text-text-primary flex flex-col justify-between min-h-[92vh] lg:min-h-screen">
      
      {/* ============================================================
          TIER 1: CLEAN MINIMAL HEADER BAND
          ============================================================ */}
      <div className="section-container w-full relative z-10">
        <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-border/60">
          
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold tracking-wider text-text-primary">
              NERQIVA STUDIO
            </span>
            <span className="text-border-dark hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-emerald-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>2 LAUNCH SLOTS OPEN FOR NOVEMBER</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 font-mono text-xs text-text-tertiary">
            <span>GUWAHATI [26.18°N 91.73°E]</span>
            <span className="text-border-dark">/</span>
            <span>48H DELIVERY</span>
            <span className="text-border-dark">/</span>
            <span className="text-text-secondary font-medium">ZERO RETAINERS</span>
          </div>

        </div>
      </div>

      {/* ============================================================
          TIER 2: CENTERED 3D KINETIC PROJECT RIBBON (ANFALOVA CAROUSEL)
          ============================================================ */}
      <div className="relative w-full my-4 sm:my-6 overflow-hidden py-2">
        
        {/* Stream Command Pill & Pause Control */}
        <div className="section-container flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2 font-mono text-[11px] text-text-tertiary">
            <span className="text-rose-500 font-bold">●</span>
            <span className="uppercase tracking-wider">PROJECTS IN CONTINUOUS MOTION</span>
            <span className="text-border-dark hidden sm:inline">•</span>
            <span className="hidden sm:inline">SWIPE OR HOVER TO PAUSE</span>
          </div>

          <button
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? "Play gallery" : "Pause gallery"}
            className="px-2.5 py-1 rounded-md bg-bg-secondary hover:bg-bg-card border border-border text-text-primary font-mono text-[11px] font-bold flex items-center gap-1.5 transition-colors cursor-pointer select-none shadow-2xs"
          >
            {isPaused ? <Play size={10} className="fill-current" /> : <Pause size={10} className="fill-current" />}
            <span>{isPaused ? "RESUME" : "PAUSE"}</span>
          </button>
        </div>

        {/* 3D Curved Viewport Shell */}
        <div 
          ref={containerRef}
          className="relative w-full overflow-hidden select-none py-2"
          style={{ perspective: "1200px" }}
        >
          {/* Subtle Chromatic Vignette Masks on Left & Right Edges */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-bg-primary via-bg-primary/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-bg-primary via-bg-primary/80 to-transparent z-20 pointer-events-none" />

          {/* Infinite Motion Marquee Stream */}
          <div 
            className="flex gap-4 sm:gap-6 w-max animate-marquee"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
              animationDuration: "45s",
            }}
          >
            {/* Duplicated for seamless loop */}
            {[...PROJECTS, ...PROJECTS].map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="w-[280px] sm:w-[360px] md:w-[400px] shrink-0 rounded-xl p-2.5 sm:p-3 bg-bg-card border border-border shadow-md hover:shadow-2xl hover:border-accent/40 transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Browser Header Bar */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-border/60 text-[10px] font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400/80" />
                    <span className="w-2 h-2 rounded-full bg-amber-400/80" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                  </div>
                  
                  <span className="px-2 py-0.5 rounded bg-bg-secondary text-text-secondary truncate max-w-[180px]">
                    https://{project.displayUrl}
                  </span>

                  <span className="text-text-tertiary font-bold">
                    {project.index}
                  </span>
                </div>

                {/* UI Screenshot Preview */}
                <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-bg-secondary mb-2 border border-border/40">
                  <img
                    src={project.image}
                    alt={`${project.client} Preview`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-103"
                    loading="lazy"
                  />

                  {/* Clean Hover Overlay */}
                  <div className="absolute inset-0 bg-text-primary/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-full bg-white text-black font-mono text-xs font-bold flex items-center gap-1.5 shadow-lg hover:bg-white/90"
                    >
                      <span>Launch Flagship</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>

                {/* Project Bottom Metadata */}
                <div className="flex items-center justify-between pt-0.5 font-mono text-[11px]">
                  <div className="truncate">
                    <span className="font-bold text-text-primary mr-1.5">
                      {project.client}
                    </span>
                    <span className="text-text-tertiary text-[10px] uppercase">
                      {project.tag}
                    </span>
                  </div>

                  <span className="text-rose-500 font-bold shrink-0 ml-2 text-[10px]">
                    {project.speedMetric}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* ============================================================
          TIER 3: MASTER TYPOGRAPHIC STATEMENT (ANFALOVA INTRO-TITLE)
          ============================================================ */}
      <div className="section-container relative z-10 w-full pt-2 sm:pt-4">
        
        {/* Anfalova Style 3-Line Contrast Typography */}
        <h1
          className="font-display font-medium text-text-tertiary text-3xl sm:text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.25rem] leading-[1.02] sm:leading-[0.98] tracking-tight max-w-5xl"
          style={{ letterSpacing: "-0.04em" }}
        >
          <span className="text-text-primary font-bold">Digital</span>{" "}
          <em className="not-italic font-serif italic text-rose-500 font-normal border-b-2 border-dotted border-rose-500/70 pb-0.5 inline-block">
            flagships
          </em>{" "}
          <span className="text-text-primary font-bold">— or</span>
          <br />
          <strong className="text-text-primary font-bold border-b-2 border-dotted border-text-primary/40 pb-0.5 inline-block">
            a 48-hour sprint
          </strong>
          , <br className="sm:hidden" />
          <span className="text-text-secondary font-normal">if you want</span>
          <br className="hidden sm:inline" />{" "}
          <span className="text-text-secondary font-normal">real conversion.</span>
        </h1>

        {/* Action Row & Provenance Statement */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 sm:mt-8 pt-5 border-t border-border/60">
          <a
            href="https://wa.me/918724932985?text=Hi%20Dipjyoti,%20I'm%20ready%20to%20commission%20a%20flagship%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-3 px-6 text-sm font-bold flex items-center justify-center gap-2 shadow-xl shadow-accent/20 cursor-pointer select-none"
          >
            <span>Commission on WhatsApp</span>
            <ArrowUpRight size={14} />
          </a>

          <a
            href="#flagships"
            className="btn-secondary py-3 px-5 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer hover:border-accent/40 select-none"
          >
            <span>Browse Case Studies</span>
            <ArrowDown size={14} />
          </a>

          <p className="font-mono text-xs text-text-tertiary ml-auto hidden md:block">
            Sub-second mobile speed • 1-tap WhatsApp booking • Delivered live in 48 hours
          </p>
        </div>

      </div>

    </section>
  );
}
