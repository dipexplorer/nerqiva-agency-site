"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowDown, MessageCircle, ExternalLink, ShieldCheck, Zap } from "lucide-react";

interface FlagshipChannel {
  id: string;
  index: string;
  client: string;
  tag: string;
  industry: string;
  accentColor: string;
  desktopImage: string;
  mobileImage: string;
  liveUrl: string;
  displayUrl: string;
  speedMetric: string;
  impactMetric: string;
}

const CHANNELS: FlagshipChannel[] = [
  {
    id: "lablink",
    index: "01",
    client: "LabLink Guwahati",
    tag: "HEALTHCARE",
    industry: "Specialized Clinical Diagnostics",
    accentColor: "#0284C7",
    desktopImage: "/images/projects/lablink/desktop.png",
    mobileImage: "/images/projects/lablink/hero.png",
    liveUrl: "https://www.lablinkguwahati.in/",
    displayUrl: "lablinkguwahati.in",
    speedMetric: "< 0.72s Mobile Paint",
    impactMetric: "1,797+ Tests Cataloged with Home Booking",
  },
  {
    id: "krishav",
    index: "02",
    client: "Krishav Mehendi",
    tag: "ATELIER",
    industry: "Luxury Bridal & Henna Atelier",
    accentColor: "#C9A227",
    desktopImage: "/images/projects/krishavmehendi/bridal.png",
    mobileImage: "/images/projects/krishavmehendi/arabic.png",
    liveUrl: "https://hennaart-nine.vercel.app/",
    displayUrl: "krishavmehendi.com",
    speedMetric: "< 0.65s Mobile Paint",
    impactMetric: "100% Direct WhatsApp Reservation Funnel",
  },
  {
    id: "titangym",
    index: "03",
    client: "Titan Athletic Club",
    tag: "WELLNESS",
    industry: "High-Performance Fitness & Wellness",
    accentColor: "#10B981",
    desktopImage: "/images/projects/titangym/contrast.png",
    mobileImage: "/images/projects/titangym/mobile.png",
    liveUrl: "https://titangymnq.vercel.app/",
    displayUrl: "titangymnq.vercel.app",
    speedMetric: "< 0.58s Mobile Paint",
    impactMetric: "VIP Trial Pass Intake in 3 Seconds",
  },
  {
    id: "valerie",
    index: "04",
    client: "Valerie Laurent",
    tag: "EDITORIAL",
    industry: "Haute Couture & Lookbook",
    accentColor: "#8B5CF6",
    desktopImage: "/images/projects/editorial/vogue.png",
    mobileImage: "/images/projects/editorial/traditional.png",
    liveUrl: "https://bridalnerqiva.vercel.app/",
    displayUrl: "valerielaurent.com",
    speedMetric: "< 0.79s Mobile Paint",
    impactMetric: "Vogue-Style High-Ticket Portfolio",
  },
];

export default function SensoryHero() {
  const [activeChannel, setActiveChannel] = useState<FlagshipChannel>(CHANNELS[0]);
  const stageRef = useRef<HTMLDivElement>(null);

  // 3D Perspective Physics (Inspired by exp.fiddle.digital)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 25 });
  const glareX = useTransform(mouseX, [-0.5, 0.5], ["10%", "90%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["10%", "90%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative w-full pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden bg-bg-primary text-text-primary">
      
      {/* Subtle Ambient Studio Atmosphere */}
      <div
        className="absolute top-1/3 right-10 w-[550px] h-[550px] rounded-full blur-[180px] pointer-events-none transition-colors duration-700 opacity-20"
        style={{ backgroundColor: activeChannel.accentColor }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        
        {/* Asymmetric 12-Column Editorial Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Studio Authority & Editorial Statement */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left min-w-0 w-full">
            
            {/* Studio Coordinate Radar Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-bg-secondary border border-border text-text-secondary font-mono text-[11px] font-semibold mb-6 w-fit shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="tracking-wider">GUWAHATI [26.18°N 91.73°E]</span>
              <span className="text-border-dark">•</span>
              <span className="text-accent font-bold">2 SLOTS OPEN</span>
            </div>

            {/* Master Headline: Pure Typographic Weight */}
            <h1
              className="font-display font-black text-text-primary text-[2rem] sm:text-5xl lg:text-6xl xl:text-[4.15rem] leading-[1.12] sm:leading-[1.08] tracking-tight mb-5"
              style={{ letterSpacing: "-0.035em" }}
            >
              Digital flagships <br />
              engineered for{" "}
              <span className="font-serif italic font-normal text-accent block sm:inline">
                ambitious brands.
              </span>
            </h1>

            {/* Crisp Human Subtext: Concrete & Grounded */}
            <p className="text-text-secondary text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mb-6 sm:mb-8 font-normal">
              We craft sub-second web flagships for premier clinics, luxury ateliers, and modern businesses. Delivered live to your phone in 48 hours flat.
            </p>

            {/* Concrete Production Commitments Bar */}
            <div className="grid grid-cols-3 gap-2 py-3.5 mb-6 sm:mb-8 border-y border-border/80 font-mono text-xs">
              <div className="flex flex-col">
                <span className="text-[9px] sm:text-[10px] uppercase text-text-tertiary tracking-wider font-semibold">Speed</span>
                <span className="font-bold text-text-primary text-xs sm:text-sm mt-0.5">48h Live</span>
              </div>
              <div className="flex flex-col border-x border-border/80 px-2 sm:px-3">
                <span className="text-[9px] sm:text-[10px] uppercase text-text-tertiary tracking-wider font-semibold">Ownership</span>
                <span className="font-bold text-text-primary text-xs sm:text-sm mt-0.5">100% Code</span>
              </div>
              <div className="flex flex-col pl-1.5 sm:pl-2">
                <span className="text-[9px] sm:text-[10px] uppercase text-text-tertiary tracking-wider font-semibold">Funnel</span>
                <span className="font-bold text-text-primary text-xs sm:text-sm mt-0.5">1-Tap WA</span>
              </div>
            </div>

            {/* High-Agency Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href="#flagships"
                className="btn-primary py-3.5 px-6 text-sm font-bold flex items-center justify-center gap-2 shadow-xl shadow-accent/20 cursor-pointer select-none text-center"
              >
                <span>Explore Selected Work</span>
                <ArrowDown size={14} />
              </a>

              <a
                href="https://wa.me/918724932985?text=Hi%20Dipjyoti,%20I'm%20ready%20to%20commission%20a%20website%20flagship."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary py-3.5 px-6 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer hover:border-accent/40 select-none text-center"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Founder Directly</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Living Showcase Canvas */}
          <div className="lg:col-span-6 relative flex flex-col items-center min-w-0 w-full">
            
            {/* Tactile Channel Switcher Header (anfalova.art inspired) */}
            <div className="w-full flex items-center justify-between gap-2 mb-4 px-1 overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-2">
                {CHANNELS.map((ch) => {
                  const isSelected = activeChannel.id === ch.id;
                  return (
                    <button
                      key={ch.id}
                      onClick={() => setActiveChannel(ch)}
                      className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5 border select-none ${
                        isSelected
                          ? "bg-text-primary text-text-inverted border-text-primary shadow-md scale-[1.02]"
                          : "bg-bg-secondary text-text-secondary border-border hover:border-accent/40 hover:text-text-primary"
                      }`}
                    >
                      <span className="text-[10px] opacity-60">{ch.index}</span>
                      <span>{ch.client.split(" ")[0]}</span>
                    </button>
                  );
                })}
              </div>

              <a
                href={activeChannel.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-bold text-accent hover:text-accent-mid flex items-center gap-1 shrink-0"
              >
                <span>Live Viewport</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            {/* 3D Perspective Tilt Stage Canvas */}
            <div
              ref={stageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="w-full relative rounded-3xl p-4 sm:p-6 bg-bg-card border border-border shadow-2xl overflow-hidden transition-all duration-300"
              style={{ perspective: 1200 }}
            >
              
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                className="relative rounded-2xl overflow-hidden bg-bg-secondary border border-border/80 shadow-2xl p-3 sm:p-5"
              >
                {/* Dynamic Specular Light Glare */}
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
                  style={{
                    background: useTransform(
                      [glareX, glareY],
                      ([x, y]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.8), transparent 70%)`
                    ),
                  }}
                />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeChannel.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-4 text-left"
                  >
                    
                    {/* Desktop Browser Chrome Viewport */}
                    <div className="rounded-xl overflow-hidden border border-border shadow-xl bg-bg-primary group relative">
                      
                      {/* Window Frame Bar */}
                      <div className="px-3 py-2 bg-bg-secondary border-b border-border flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <div className="px-3 py-0.5 rounded-md bg-bg-primary border border-border text-[11px] font-mono text-text-secondary truncate max-w-[200px] sm:max-w-[260px]">
                          https://{activeChannel.displayUrl}
                        </div>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      </div>

                      {/* Main Project Desktop Visual */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-bg-secondary">
                        <img
                          src={activeChannel.desktopImage}
                          alt={`${activeChannel.client} Desktop Preview`}
                          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-103"
                          loading="eager"
                        />
                      </div>
                    </div>

                    {/* Integrated Mobile & Impact Metadata Ribbon */}
                    <div className="flex items-center justify-between gap-3 pt-2 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-md bg-bg-secondary text-text-primary font-bold border border-border">
                          {activeChannel.speedMetric}
                        </span>
                        <span className="font-bold text-accent hidden sm:inline">
                          {activeChannel.tag}
                        </span>
                      </div>

                      <span className="text-[11px] text-text-secondary truncate max-w-[260px] text-right">
                        {activeChannel.impactMetric}
                      </span>
                    </div>

                  </motion.div>
                </AnimatePresence>

              </motion.div>

              {/* Bottom Interactive Touch Note */}
              <div className="mt-3 pt-2.5 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-text-tertiary">
                <span>Interactive 3D Stage • Move mouse to tilt</span>
                <span className="text-accent font-semibold">Tap tabs above to switch flagship</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
