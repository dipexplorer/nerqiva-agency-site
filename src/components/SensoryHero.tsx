"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowDown, Volume2, VolumeX, Sparkles, Zap, MessageCircle } from "lucide-react";
import { sound } from "../utils/audio";

interface FlagshipChannel {
  id: string;
  channel: string;
  client: string;
  industry: string;
  accentColor: string;
  accentGlow: string;
  desktopImage: string;
  mobileImage: string;
  liveUrl: string;
  outcome: string;
}

const CHANNELS: FlagshipChannel[] = [
  {
    id: "krishav",
    channel: "CH.01",
    client: "Krishav Mehendi",
    industry: "Luxury Bridal & Henna Atelier",
    accentColor: "#C9A227",
    accentGlow: "rgba(201, 162, 39, 0.25)",
    desktopImage: "/images/projects/krishavmehendi/bridal.png",
    mobileImage: "/images/projects/krishavmehendi/arabic.png",
    liveUrl: "https://hennaart-nine.vercel.app/",
    outcome: "100% WhatsApp Reservation Funnel",
  },
  {
    id: "lablink",
    channel: "CH.02",
    client: "LabLink Guwahati",
    industry: "Specialized Clinical Diagnostics",
    accentColor: "#0284C7",
    accentGlow: "rgba(2, 132, 199, 0.25)",
    desktopImage: "/images/projects/lablink/desktop.png",
    mobileImage: "/images/projects/lablink/hero.png",
    liveUrl: "https://www.lablinkguwahati.in/",
    outcome: "1,797+ Tests Cataloged with Home Booking",
  },
  {
    id: "titangym",
    channel: "CH.03",
    client: "Titan Athletic Club",
    industry: "High-Performance Fitness & Wellness",
    accentColor: "#E0FE10",
    accentGlow: "rgba(224, 254, 16, 0.25)",
    desktopImage: "/images/projects/titangym/contrast.png",
    mobileImage: "/images/projects/titangym/mobile.png",
    liveUrl: "https://titangymnq.vercel.app/",
    outcome: "VIP Trial Pass Intake in 3 Seconds",
  },
  {
    id: "valerie",
    channel: "CH.04",
    client: "Valerie Laurent",
    industry: "Haute Couture & Editorial Artistry",
    accentColor: "#E2D9D2",
    accentGlow: "rgba(226, 217, 210, 0.25)",
    desktopImage: "/images/projects/editorial/vogue.png",
    mobileImage: "/images/projects/editorial/traditional.png",
    liveUrl: "https://bridalnerqiva.vercel.app/",
    outcome: "Vogue-Style High-Ticket Lookbook",
  },
];

export default function SensoryHero() {
  const [activeChannel, setActiveChannel] = useState<FlagshipChannel>(CHANNELS[0]);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const stageRef = useRef<HTMLDivElement>(null);

  // 3D Tilt Physics (exp.fiddle.digital style)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 180, damping: 24 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 180, damping: 24 });
  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

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

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sound.enabled = next;
    if (next) sound.click();
  };

  const selectChannel = (ch: FlagshipChannel) => {
    setActiveChannel(ch);
    sound.tick();
  };

  return (
    <section className="relative w-full pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-bg-primary text-text-primary">
      
      {/* Dynamic Ambient Atmosphere (Color Physics) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[450px] rounded-full blur-[160px] pointer-events-none transition-all duration-700 opacity-25"
        style={{ backgroundColor: activeChannel.accentColor }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 flex flex-col items-center text-center">
        
        {/* Top Control Bar: Audio & Live Slots */}
        <div className="flex items-center justify-between w-full max-w-5xl mb-8 px-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs text-text-secondary uppercase tracking-widest font-bold">
              Guwahati Studio • 2 Slots Left
            </span>
          </div>

          <button
            onClick={toggleSound}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg-secondary border border-border text-xs font-mono text-text-secondary hover:text-text-primary hover:border-accent transition-all cursor-pointer select-none"
            title="Toggle Sensory Sound Feedback"
          >
            {soundEnabled ? <Volume2 size={13} className="text-accent" /> : <VolumeX size={13} />}
            <span>{soundEnabled ? "Audio: Active" : "Audio: Muted"}</span>
          </button>
        </div>

        {/* Master Headline: Pure Visual Authority */}
        <h1
          className="font-display font-black text-text-primary text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.03] tracking-tight max-w-5xl mb-6"
          style={{ letterSpacing: "-0.04em" }}
        >
          Websites that make <br />
          competitors{" "}
          <span className="font-serif italic font-normal underline decoration-accent/30 decoration-wavy">
            nervous.
          </span>
        </h1>

        {/* 18-word Punchy Human Subtext */}
        <p className="text-text-secondary text-base sm:text-xl leading-relaxed max-w-2xl mb-10 font-normal">
          Bespoke digital flagships for premier salons, clinics, and luxury studios. Delivered live on your smartphone in 48 hours flat.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#flagships"
            onClick={() => sound.click()}
            className="btn-primary py-3.5 px-8 text-sm font-bold flex items-center gap-2 shadow-2xl shadow-accent/25"
          >
            <Zap size={15} />
            <span>Explore Flagships</span>
            <ArrowDown size={14} />
          </a>

          <a
            href="https://wa.me/918724932985?text=Hi%20Dipjyoti,%20I'm%20ready%20to%20build%20a%20flagship%20website%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.click()}
            className="btn-secondary py-3.5 px-7 text-sm font-bold flex items-center gap-2"
          >
            <MessageCircle size={15} />
            <span>WhatsApp Founder Directly</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* 3D SENSORY STAGE CONSOLE */}
        <div
          ref={stageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-full max-w-5xl relative rounded-3xl p-4 sm:p-7 bg-bg-card border border-border shadow-2xl overflow-hidden transition-all duration-300"
          style={{ perspective: 1200 }}
        >
          
          {/* Physical Channel Selector Console */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-border/60">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {CHANNELS.map((ch) => {
                const isSelected = activeChannel.id === ch.id;
                return (
                  <button
                    key={ch.id}
                    onClick={() => selectChannel(ch)}
                    className={`shrink-0 px-4 py-2 rounded-2xl font-mono text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2 border select-none ${
                      isSelected
                        ? "bg-text-primary text-text-inverted border-text-primary shadow-lg scale-[1.03]"
                        : "bg-bg-secondary text-text-secondary border-border hover:border-accent/40 hover:text-text-primary"
                    }`}
                  >
                    <span className="opacity-50">{ch.channel}</span>
                    <span>{ch.client}</span>
                    {isSelected && (
                      <span
                        className="w-2 h-2 rounded-full animate-ping"
                        style={{ backgroundColor: ch.accentColor }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-text-tertiary hidden md:inline">
                {activeChannel.outcome}
              </span>
              <a
                href={activeChannel.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.click()}
                className="font-mono text-xs font-bold text-accent hover:underline flex items-center gap-1 shrink-0"
              >
                <span>Live Viewport</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* 3D Tilted Viewport Canvas with Framer Motion Physics */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative rounded-2xl overflow-hidden bg-bg-secondary border border-border/80 shadow-2xl p-4 sm:p-6"
          >
            {/* Dynamic Light Glare Overlay */}
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
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="grid lg:grid-cols-12 gap-6 items-center text-left"
              >
                
                {/* MacBook Pro Display Canvas */}
                <div className="lg:col-span-8 rounded-xl overflow-hidden border border-border shadow-2xl bg-bg-primary group relative">
                  {/* Browser Chrome Header */}
                  <div className="px-3.5 py-2 bg-bg-secondary border-b border-border flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="px-3 py-0.5 rounded-md bg-bg-primary border border-border text-[11px] font-mono text-text-secondary truncate max-w-[200px] sm:max-w-[280px]">
                      {activeChannel.liveUrl.replace("https://", "")}
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  {/* Real UI Screenshot */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-bg-secondary">
                    <img
                      src={activeChannel.desktopImage}
                      alt={`${activeChannel.client} Desktop Preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* iPhone 16 Pro Vertical Frame */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center gap-4">
                  <div className="relative w-44 sm:w-48 rounded-[32px] p-2 bg-text-primary shadow-2xl border-2 border-border/80">
                    <div className="relative rounded-[24px] overflow-hidden aspect-[9/19] bg-bg-secondary">
                      {/* Dynamic Island */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3 bg-black rounded-full z-20" />
                      
                      <img
                        src={activeChannel.mobileImage}
                        alt={`${activeChannel.client} Mobile UI`}
                        className="w-full h-full object-cover object-top"
                        loading="eager"
                      />

                      {/* 1-Tap WhatsApp Lead Badge */}
                      <div className="absolute bottom-2.5 left-2 right-2 bg-text-primary/95 backdrop-blur-md rounded-full py-1 px-2 text-center flex items-center justify-center gap-1 shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="font-mono text-[9px] text-text-inverted uppercase tracking-wider font-bold">
                          1-Tap WhatsApp Lead
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Channel Summary */}
                  <div className="text-center">
                    <span className="font-mono text-xs uppercase tracking-wider font-bold text-accent block mb-1">
                      {activeChannel.industry}
                    </span>
                    <span className="font-mono text-[11px] text-text-tertiary">
                      Delivered in 48 Hours flat
                    </span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

          </motion.div>

          {/* Bottom Interactive Prompt */}
          <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs font-mono text-text-tertiary">
            <span>Interactive 3D Stage • Move mouse to tilt perspective</span>
            <span className="text-accent font-semibold">Tap channels above to switch live build</span>
          </div>

        </div>

      </div>
    </section>
  );
}
