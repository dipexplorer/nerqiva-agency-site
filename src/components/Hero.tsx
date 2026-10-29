"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowDown, MessageCircle, Zap, Shield, CheckCircle2 } from "lucide-react";
import HeroFlowLine from "./HeroFlowLine";

interface HeroShowcase {
  id: string;
  number: string;
  name: string;
  industry: string;
  tagline: string;
  desktopImage: string;
  mobileImage: string;
  liveUrl: string;
  deliveryTime: string;
}

const SHOWCASES: HeroShowcase[] = [
  {
    id: "lablink",
    number: "01",
    name: "LabLink Guwahati",
    industry: "Specialized Healthcare & Diagnostics",
    tagline: "Clinical diagnostic portal with 1,797+ tests, cold-chain phlebotomy, and instant WhatsApp booking.",
    desktopImage: "/images/projects/lablink/desktop.png",
    mobileImage: "/images/projects/lablink/hero.png",
    liveUrl: "https://www.lablinkguwahati.in/",
    deliveryTime: "48h Express Launch",
  },
  {
    id: "krishav",
    number: "02",
    name: "Krishav Mehendi",
    industry: "Luxury Bridal & Henna Atelier",
    tagline: "High-contrast digital gallery & instant reservation engine for premier bridal artists.",
    desktopImage: "/images/projects/krishavmehendi/bridal.png",
    mobileImage: "/images/projects/krishavmehendi/arabic.png",
    liveUrl: "https://hennaart-nine.vercel.app/",
    deliveryTime: "48h Express Launch",
  },
  {
    id: "titangym",
    number: "03",
    name: "Titan Athletic Club",
    industry: "High-Performance Fitness & Wellness",
    tagline: "Brutalist athletic training platform with coach rosters and friction-free VIP trial lead intake.",
    desktopImage: "/images/projects/titangym/contrast.png",
    mobileImage: "/images/projects/titangym/mobile.png",
    liveUrl: "https://titangymnq.vercel.app/",
    deliveryTime: "48h Express Launch",
  },
  {
    id: "valerie",
    number: "04",
    name: "Valerie Laurent",
    industry: "Haute Couture & Editorial Artistry",
    tagline: "Vogue-style editorial lookbook and VIP consultation scheduler for celebrity makeup artists.",
    desktopImage: "/images/projects/editorial/vogue.png",
    mobileImage: "/images/projects/editorial/traditional.png",
    liveUrl: "https://bridalnerqiva.vercel.app/",
    deliveryTime: "48h Express Launch",
  },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<string>("lablink");
  const current = SHOWCASES.find((s) => s.id === activeTab) || SHOWCASES[0];

  return (
    <section className="relative w-full bg-transparent overflow-hidden border-b border-border/40 pt-28 sm:pt-36 pb-16 sm:pb-24">
      <HeroFlowLine />

      <div className="section-container relative z-10 flex flex-col items-center text-center">
        
        {/* Anti-Agency Meta Kicker */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-text-tertiary">
            [EST. 2026 // GUWAHATI, IN]
          </span>
          <span className="text-border-dark">•</span>
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
            [ANTI-AGENCY DIGITAL STUDIO]
          </span>
        </div>

        {/* Massive Editorial Headline (Show, Don't Lecture) */}
        <h1
          className="font-display font-black text-text-primary text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight max-w-5xl mb-6"
          style={{ letterSpacing: "-0.04em" }}
        >
          WE TURN CASUAL VISITORS <br />
          INTO{" "}
          <span className="font-serif italic font-normal text-accent underline decoration-accent/20 decoration-wavy">
            high-ticket clients.
          </span>
        </h1>

        {/* 2-Line Crisp Subtext (Max 30 words) */}
        <p className="text-text-secondary text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-normal">
          Ultra-fast booking websites tailored for luxury salons, specialized clinics, and modern brands. Delivered live in 48 hours flat.
        </p>

        {/* Confident Tactile Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#case-studies"
            className="btn-primary py-3.5 px-7 text-sm font-bold flex items-center gap-2 shadow-xl shadow-accent/20"
          >
            <Zap size={15} />
            <span>Explore Selected Works</span>
            <ArrowDown size={14} />
          </a>

          <a
            href="https://wa.me/918724932985?text=Hi%20Dipjyoti,%20I'm%20interested%20in%20a%20high-converting%20flagship%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary py-3.5 px-7 text-sm font-bold flex items-center gap-2"
          >
            <MessageCircle size={15} />
            <span>WhatsApp Founder Directly</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* The Hero Visual Canvas (Dual Device Showcase Stage) */}
        <div className="w-full max-w-6xl bg-bg-card border border-border/80 rounded-3xl p-4 sm:p-8 shadow-2xl relative overflow-hidden text-left">
          
          {/* Top Switcher Tabs & Live Telemetry */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border/50">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {SHOWCASES.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`shrink-0 px-4 py-2 rounded-full font-mono text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? "bg-accent text-text-inverted shadow-lg shadow-accent/25"
                        : "bg-bg-secondary text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    <span className="opacity-60">{item.number}</span>
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-text-secondary hidden sm:inline">
                {current.deliveryTime}
              </span>
              <a
                href={current.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-bold text-accent hover:underline flex items-center gap-1"
              >
                <span>Visit Live Build</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Active Canvas: MacBook Pro + Angled iPhone 16 Pro Showcase */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 grid lg:grid-cols-12 gap-8 items-center"
            >
              {/* MacBook Pro Widescreen Frame */}
              <div className="lg:col-span-8 relative rounded-2xl overflow-hidden border border-border/80 shadow-2xl bg-bg-secondary group">
                {/* Browser Frame Header */}
                <div className="px-4 py-2.5 bg-bg-primary/95 border-b border-border flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="max-w-xs mx-auto px-4 py-0.5 bg-bg-secondary border border-border rounded-md text-center">
                    <span className="font-mono text-[10px] text-text-secondary truncate block">
                      {current.liveUrl.replace("https://", "")}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-emerald-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live 60fps
                  </span>
                </div>

                {/* High-Resolution Screenshot Canvas */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-bg-secondary">
                  <img
                    src={current.desktopImage}
                    alt={`${current.name} Desktop UI`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="eager"
                  />
                </div>
              </div>

              {/* iPhone 16 Pro Glass Frame & Contextual Badge */}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-6 justify-between items-center sm:items-start lg:items-center">
                
                {/* Angled iPhone 16 Pro Frame */}
                <div className="relative w-48 sm:w-52 lg:w-48 shrink-0 rounded-[32px] p-2.5 bg-text-primary shadow-2xl border-2 border-border/80">
                  <div className="relative rounded-[24px] overflow-hidden aspect-[9/19] bg-bg-secondary">
                    {/* Dynamic Island Pill */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-3 bg-black rounded-full z-20" />
                    
                    <img
                      src={current.mobileImage}
                      alt={`${current.name} Mobile Experience`}
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                    />

                    {/* WhatsApp Routing Bottom Trigger Badge */}
                    <div className="absolute bottom-2.5 left-2 right-2 bg-text-primary/90 backdrop-blur-md rounded-full py-1.5 px-2 text-center flex items-center justify-center gap-1.5 shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-mono text-[9px] text-text-inverted uppercase tracking-wider font-bold">
                        1-Tap WhatsApp Lead
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Impact Specs */}
                <div className="flex flex-col gap-2.5 text-center sm:text-left lg:text-center w-full">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent font-bold">
                    {current.industry}
                  </span>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                    {current.tagline}
                  </p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start lg:justify-center gap-2 pt-1">
                    <span className="font-mono text-[10px] text-text-primary px-2 py-0.5 rounded-md bg-bg-secondary border border-border">
                      Sub-second 4G
                    </span>
                    <span className="font-mono text-[10px] text-text-primary px-2 py-0.5 rounded-md bg-bg-secondary border border-border">
                      100% Code Handover
                    </span>
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
