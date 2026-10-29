"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Monitor, Smartphone, CheckCircle2, Sparkles, ArrowDown } from "lucide-react";
import HeroFlowLine from "./HeroFlowLine";

interface ShowcaseProject {
  id: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  desktopImage: string;
  mobileImage: string;
  liveUrl: string;
  metrics: string[];
  caseSlug: string;
}

const SHOWCASES: ShowcaseProject[] = [
  {
    id: "lablink",
    number: "01",
    name: "LabLink Guwahati",
    category: "Healthcare & Diagnostics",
    tagline: "Doorstep diagnostic platform with 1,797+ tests, cold-chain phlebotomy & direct WhatsApp routing.",
    desktopImage: "/images/projects/lablink/desktop.png",
    mobileImage: "/images/projects/lablink/hero.png",
    liveUrl: "https://www.lablinkguwahati.in/",
    metrics: ["1,797+ Tests Cataloged", "< 0.8s Mobile Paint", "Live Client Flagship"],
    caseSlug: "lablink-guwahati",
  },
  {
    id: "krishav",
    number: "02",
    name: "Krishav Mehendi",
    category: "Luxury Bridal Artistry",
    tagline: "Digital exhibition & instant reservation engine for luxury bridal and traditional henna artists.",
    desktopImage: "/images/projects/krishavmehendi/bridal.png",
    mobileImage: "/images/projects/krishavmehendi/arabic.png",
    liveUrl: "https://hennaart-nine.vercel.app/",
    metrics: ["Instant WhatsApp Intake", "Retina Art Gallery", "Zero Template Bloat"],
    caseSlug: "krishav-mehendi",
  },
  {
    id: "titangym",
    number: "03",
    name: "Titan Athletic Club",
    category: "Fitness & Athletic Performance",
    tagline: "High-octane digital platform with class schedules, trainer rosters & VIP trial intake.",
    desktopImage: "/images/projects/titangym/contrast.png",
    mobileImage: "/images/projects/titangym/mobile.png",
    liveUrl: "https://titangymnq.vercel.app/",
    metrics: ["VIP Trial Funnel", "High-Contrast Brutalism", "Sub-Second Edge"],
    caseSlug: "titan-gym",
  },
  {
    id: "valerie",
    number: "04",
    name: "Valerie Laurent",
    category: "Haute Couture & Editorial",
    tagline: "Vogue-inspired editorial portfolio & VIP consultation booking for high-fashion makeup artists.",
    desktopImage: "/images/projects/editorial/vogue.png",
    mobileImage: "/images/projects/editorial/traditional.png",
    liveUrl: "https://bridalnerqiva.vercel.app/",
    metrics: ["Editorial Print Layout", "VIP Client Concierge", "Fluid Micro-Motion"],
    caseSlug: "valerie-laurent",
  },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<string>("lablink");
  const current = SHOWCASES.find((s) => s.id === activeTab) || SHOWCASES[0];

  return (
    <section className="relative w-full bg-transparent overflow-hidden border-b border-border/40">
      <HeroFlowLine />

      <div className="section-container relative z-10 pt-16 sm:pt-24 pb-16 sm:pb-24">
        
        {/* Top Studio Meta & Location Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-border/30">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
              NERQIVA STUDIO
            </span>
            <span className="text-border-dark">•</span>
            <span className="font-mono text-xs text-text-secondary tracking-wider">
              North Guwahati &amp; Remote Worldwide
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 font-mono text-[11px] font-semibold text-text-primary bg-bg-secondary border border-border rounded-full shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>Available for New Projects</span>
            </span>
          </div>
        </div>

        {/* Editorial Headline: Confident, Art-Directed Fraunces Scale */}
        <div className="max-w-5xl mb-8">
          <h1
            className="font-display font-black text-text-primary text-4xl sm:text-6xl lg:text-7xl xl:text-[4.75rem] leading-[1.06] tracking-tight mb-6"
            style={{ letterSpacing: "-0.035em" }}
          >
            We engineer bespoke web flagships that turn attention into{" "}
            <span className="font-serif italic font-normal text-accent underline decoration-accent/20 decoration-wavy">
              paying clients.
            </span>
          </h1>

          <p className="text-text-secondary text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl font-normal">
            Fast loading, custom-tailored on mobile, and connected directly to your WhatsApp.
            No slow agency retainers or bloated WordPress templates. Handcrafted from scratch.
          </p>
        </div>

        {/* Primary Tactile Actions */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-16">
          <a
            href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I%20want%20to%20build%20a%20high-converting%20website%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shadow-lg shadow-accent/20 py-3.5 px-6 sm:px-8 text-sm sm:text-base font-bold tracking-wide"
          >
            <span>Start on WhatsApp</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#case-studies"
            className="btn-secondary py-3.5 px-6 text-sm sm:text-base font-bold flex items-center gap-2"
          >
            <span>Explore Selected Work</span>
            <ArrowDown size={15} className="group-hover:translate-y-1 transition-transform" />
          </a>

          <div className="w-full sm:w-auto flex items-center gap-3 pt-2 sm:pt-0 sm:border-l sm:border-border/60 sm:pl-6">
            <span className="font-mono text-xs text-text-secondary font-medium">
              Verified &lt;0.8s mobile speed on 4G • 100% Code Handover
            </span>
          </div>
        </div>

        {/* Grand Cinematic Showcase Stage (Visual Proof, Zero Faux Iframes) */}
        <div className="w-full bg-bg-card border border-border rounded-3xl p-4 sm:p-7 shadow-2xl relative overflow-hidden">
          
          {/* Showcase Tabs Switcher */}
          <div className="flex items-center justify-between flex-wrap gap-3 pb-5 border-b border-border/50">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              {SHOWCASES.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`shrink-0 px-4 py-2 rounded-full font-mono text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? "bg-accent text-text-inverted shadow-md shadow-accent/25"
                        : "bg-bg-secondary text-text-secondary hover:text-text-primary hover:bg-border/40"
                    }`}
                  >
                    <span className="opacity-60">{item.number}</span>
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-text-tertiary">
              <span className="hidden sm:inline">Active Flagship Showcase</span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
            </div>
          </div>

          {/* Active Showcase Stage */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 flex flex-col gap-6"
            >
              {/* Dual Visual Showcase: Desktop Widescreen + Floating Mobile Frame */}
              <div className="grid lg:grid-cols-12 gap-6 items-center">
                
                {/* Desktop Viewport Canvas */}
                <div className="lg:col-span-8 relative rounded-2xl overflow-hidden border border-border shadow-xl bg-bg-secondary group">
                  {/* Browser Top Bar */}
                  <div className="px-4 py-2.5 bg-bg-primary/95 border-b border-border/60 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    </div>
                    <div className="flex-1 max-w-sm mx-auto px-3 py-0.5 bg-bg-secondary border border-border/60 rounded-md text-center">
                      <span className="font-mono text-[10px] text-text-secondary truncate block">
                        {current.liveUrl.replace("https://", "")}
                      </span>
                    </div>
                    <a
                      href={current.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] font-bold text-accent hover:underline flex items-center gap-1"
                    >
                      <span>Visit Live</span>
                      <ExternalLink size={10} />
                    </a>
                  </div>

                  {/* High-Resolution Screenshot */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-bg-secondary">
                    <img
                      src={current.desktopImage}
                      alt={`${current.name} Desktop Interface`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* Mobile Viewport & Context Card */}
                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-5 justify-between">
                  
                  {/* Phone Mockup Preview */}
                  <div className="relative mx-auto sm:mx-0 w-44 sm:w-48 lg:w-44 shrink-0 rounded-[28px] p-2 bg-text-primary shadow-2xl border-2 border-border/60">
                    <div className="relative rounded-[22px] overflow-hidden aspect-[9/19] bg-bg-secondary">
                      <img
                        src={current.mobileImage}
                        alt={`${current.name} Mobile Experience`}
                        className="w-full h-full object-cover object-top"
                        loading="eager"
                      />
                      <div className="absolute bottom-2 left-2 right-2 bg-text-primary/80 backdrop-blur-md rounded-full py-1 text-center">
                        <span className="font-mono text-[9px] text-text-inverted uppercase tracking-wider font-bold">
                          Mobile 60fps
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Info & Metrics */}
                  <div className="flex-1 flex flex-col justify-between gap-4">
                    <div>
                      <div className="font-mono text-xs uppercase tracking-wider text-accent font-bold mb-1">
                        {current.category}
                      </div>
                      <h3 className="font-display font-black text-2xl text-text-primary tracking-tight mb-2">
                        {current.name}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed mb-4">
                        {current.tagline}
                      </p>

                      {/* Verified Metric Chips */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {current.metrics.map((m, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-bg-secondary border border-border text-[11px] font-mono text-text-primary"
                          >
                            <CheckCircle2 size={11} className="text-emerald-500 shrink-0" />
                            <span>{m}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-3 border-t border-border/40">
                      <a
                        href={current.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary py-2 px-4 text-xs font-bold flex items-center gap-1.5"
                      >
                        <span>Launch Flagship</span>
                        <ExternalLink size={12} />
                      </a>

                      <Link
                        href={`/work/${current.caseSlug}`}
                        className="btn-secondary py-2 px-4 text-xs font-bold"
                      >
                        Case Details
                      </Link>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
