"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, MousePointer2, MessageCircle, Search, ChevronDown, Sparkles } from "lucide-react";
import HeroFlowLine from "./HeroFlowLine";

const DEMO_SHOWCASES = [
  {
    id: "beauty",
    label: "Salons & MUAs",
    name: "Aura Beauty",
    description: "Bridal & makeup studio — portfolio gallery, services & direct WhatsApp booking",
    url: "https://aura-beauty-theme.vercel.app/",
    demoUrl: "https://aura-beauty-theme.vercel.app/",
    tag: "Beauty & Bridal",
  },
  {
    id: "gym",
    label: "Gyms & Fitness",
    name: "Titan Gym",
    description: "Premium fitness centre — class schedules, trainer rosters & VIP trial intake",
    url: "https://titangymnq.vercel.app/",
    demoUrl: "https://titangymnq.vercel.app/",
    tag: "Fitness & Wellness",
  },
  {
    id: "bridal",
    label: "Luxury Boutiques",
    name: "Valerie Laurent",
    description: "Haute bridal couture — curated collection lookbook & consultation booking",
    url: "https://bridalnerqiva.vercel.app/",
    demoUrl: "https://bridalnerqiva.vercel.app/",
    tag: "Luxury Couture",
  },
];

const TOP_SERVICES = [
  "Custom Website & Direct WhatsApp Booking",
  "Google Maps & Local Search Visibility",
  "High-Converting Mobile Funnel",
];

type DemoId = "beauty" | "gym" | "bridal";

interface HeroSubProps {
  activeDemo: DemoId;
  setActiveDemo: (id: DemoId) => void;
  interacting: string | null;
  setInteracting: (id: string | null) => void;
}

function DesktopHero({ activeDemo, setActiveDemo, interacting, setInteracting }: HeroSubProps) {
  const demo = DEMO_SHOWCASES.find((d) => d.id === activeDemo)!;

  return (
    <section className="relative w-full bg-transparent overflow-hidden border-b border-border/30">
      <HeroFlowLine />
      <div className="section-container relative z-10 w-full pt-16 pb-14 lg:pt-22 lg:pb-18">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Value proposition & CTAs */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Single quiet status pill */}
            <div className="animate-fade-in-up mb-5 flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 font-mono text-[11px] font-semibold text-text-secondary bg-bg-secondary border border-border rounded-full shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                Accepting 2 New Client Projects for Q2
              </span>
            </div>

            {/* Authoritative H1: Editorial emphasis with serif italic, no cheesy gradients */}
            <h1
              className="animate-fade-in-up font-display font-black text-text-primary text-3xl sm:text-4xl lg:text-[3.25rem] leading-[1.12] tracking-tight mb-5"
              style={{ letterSpacing: "-0.03em", animationFillMode: "both" }}
            >
              Your competitors win clients because they{" "}
              <span className="font-serif italic font-normal text-accent">
                show up, respond fast,
              </span>{" "}
              and look credible online.
            </h1>

            {/* Distilled Subheadline */}
            <p
              className="animate-fade-in-up text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl mb-6 font-normal"
              style={{ animationDelay: "120ms", animationFillMode: "both" }}
            >
              We build bespoke high-converting websites, automated WhatsApp booking funnels, and verified Google search presence for ambitious local businesses — so clients find you, trust you, and book without friction.
            </p>

            {/* Core Capability Tags */}
            <div
              className="animate-fade-in-up flex flex-wrap gap-2 mb-7"
              style={{ animationDelay: "200ms", animationFillMode: "both" }}
            >
              {TOP_SERVICES.map((item) => (
                <span
                  key={item}
                  className="font-mono text-xs font-semibold text-text-primary bg-bg-secondary border border-border px-3.5 py-1.5 rounded-full tracking-wide shadow-2xs"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Action CTAs */}
            <div
              className="animate-fade-in-up flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 mb-8"
              style={{ animationDelay: "270ms", animationFillMode: "both" }}
            >
              <a
                href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'd%20like%20a%20free%20audit%20of%20my%20business%20online%20presence."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                <span>Get a Free Business Audit</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200 shrink-0" />
              </a>
              <a href="#case-studies" className="btn-secondary w-full sm:w-auto">
                Browse Live Demos
              </a>
            </div>
          </div>

          {/* Right Column: Live Interactive Demo Browser Frame */}
          <div className="lg:col-span-6 w-full flex flex-col gap-3.5 relative">
            {/* Demo Switcher Tabs */}
            <div className="flex gap-2 overflow-x-auto snap-x scrollbar-none pb-1 sm:pb-0 sm:flex-wrap">
              {DEMO_SHOWCASES.map((d) => (
                <button
                  key={d.id}
                  onClick={() => { setActiveDemo(d.id as DemoId); setInteracting(null); }}
                  className={`snap-start shrink-0 px-4 py-2 font-mono text-xs font-semibold border transition-all duration-200 cursor-pointer rounded-full ${
                    activeDemo === d.id
                      ? "bg-accent text-text-inverted border-accent shadow-sm"
                      : "bg-bg-secondary text-text-secondary border-border hover:border-accent/40 hover:text-text-primary"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeDemo}
                initial={{ opacity: 0, scale: 0.99, y: 4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.99, y: -4 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 card-luxury overflow-hidden border border-border rounded-2xl bg-bg-primary shadow-xl"
              >
                {/* Browser Chrome Header */}
                <div className="px-4 py-2.5 border-b border-border bg-bg-secondary/90 flex items-center justify-between gap-3">
                  <div className="flex gap-1.5 shrink-0">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="flex-1 max-w-xs bg-bg-card border border-border rounded-md px-3 py-0.5 text-center shadow-2xs">
                    <span className="font-mono text-[10px] font-semibold text-text-secondary tracking-wide truncate block">
                      {demo.url.replace("https://", "")}
                    </span>
                  </div>
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 flex items-center gap-1 font-mono text-[10px] font-bold text-accent hover:text-accent-mid hover:underline uppercase tracking-wider transition-colors"
                  >
                    <ExternalLink size={11} />
                    Open
                  </a>
                </div>

                {/* Live Iframe Viewport */}
                <div className="relative w-full overflow-hidden bg-bg-primary" style={{ height: "380px" }}>
                  <iframe
                    src={demo.demoUrl}
                    title={`${demo.name} — Live Demo`}
                    className={`absolute inset-0 w-full h-full border-none bg-white transition-all duration-300 ${
                      interacting === activeDemo ? "pointer-events-auto opacity-100 z-10" : "pointer-events-none opacity-100 z-0"
                    }`}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                  />

                  {interacting !== activeDemo && (
                    <button 
                      onClick={() => setInteracting(activeDemo)}
                      className="hidden sm:flex absolute bottom-4 right-4 z-20 bg-bg-primary/95 text-text-primary px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider border border-border shadow-md backdrop-blur-md rounded-full hover:scale-105 transition-all duration-200 items-center gap-2 cursor-pointer select-none"
                    >
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      <span>Tap to Scroll</span>
                      <MousePointer2 size={12} className="text-accent shrink-0" />
                    </button>
                  )}

                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:hidden absolute inset-0 z-20 flex flex-col items-center justify-end pb-8 cursor-pointer"
                  >
                    <div className="bg-bg-primary/95 text-text-primary px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-wider border border-border shadow-xl backdrop-blur-md rounded-full flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      <span>Open Live Demo</span>
                      <ExternalLink size={12} className="text-accent shrink-0" />
                    </div>
                  </a>

                  {interacting === activeDemo && (
                    <button
                      onClick={(e) => { e.stopPropagation(); setInteracting(null); }}
                      className="hidden sm:flex absolute top-3 right-3 z-30 btn-primary shadow-xl font-mono text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-all items-center gap-1.5 py-1.5 px-3"
                    >
                      Done scrolling ✕
                    </button>
                  )}
                </div>

                {/* Footer Bar */}
                <div className="px-4 py-3 border-t border-border bg-bg-secondary/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                  <span className="font-sans text-xs font-medium text-text-secondary truncate w-full sm:w-auto">
                    Like this design? We build custom variations tailored for your brand.
                  </span>
                  <a
                    href={`https://wa.me/918724932985?text=Hi%20NERQIVA,%20I%20like%20the%20${encodeURIComponent(demo.name)}%20style.%20Can%20you%20build%20something%20similar%20for%20me?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 font-mono text-[10px] font-bold text-accent hover:text-accent-mid hover:underline uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                  >
                    Get this style <ArrowRight size={11} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileHero({ activeDemo, setActiveDemo }: HeroSubProps) {
  const demo = DEMO_SHOWCASES.find((d) => d.id === activeDemo)!;

  return (
    <section className="relative w-full bg-bg-primary overflow-hidden border-b border-border/30">
      <div className="section-container relative z-10 w-full pt-26 pb-12 px-4 sm:px-6">
        <div className="flex flex-col">
          {/* Status availability badge */}
          <div className="animate-fade-in-up mb-4 flex items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 font-mono text-[10px] font-semibold text-text-secondary bg-bg-secondary border border-border rounded-full shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              Accepting 2 Clients for Q2
            </span>
          </div>

          {/* Headline with editorial italic emphasis, no AI gradient */}
          <h1
            className="animate-fade-in-up font-display font-black text-text-primary text-[2.15rem] leading-[1.12] tracking-tight mb-4"
            style={{ letterSpacing: "-0.025em", animationFillMode: "both" }}
          >
            Your competitors win clients because they{" "}
            <span className="font-serif italic font-normal text-accent">
              show up, respond fast,
            </span>{" "}
            and look credible online.
          </h1>

          {/* Clean Demo Preview Card (No fake rotated card, no fake SVG doodle lines) */}
          <div className="relative z-10 w-full my-4">
            {/* Demo selector tabs */}
            <div className="flex gap-1.5 overflow-x-auto snap-x scrollbar-none pb-2 mb-2">
              {DEMO_SHOWCASES.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActiveDemo(d.id as DemoId)}
                  className={`snap-start shrink-0 px-3.5 py-1.5 font-mono text-[11px] font-semibold border transition-all duration-200 cursor-pointer rounded-full ${
                    activeDemo === d.id
                      ? "bg-accent text-text-inverted border-accent shadow-xs"
                      : "bg-bg-secondary text-text-secondary border-border"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeDemo}
                initial={{ opacity: 0, scale: 0.99, y: 6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.99, y: -6 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-bg-primary border border-border rounded-xl shadow-lg overflow-hidden"
              >
                {/* Browser Chrome Bar */}
                <div className="px-3 py-2 border-b border-border bg-bg-secondary/90 flex items-center justify-between gap-2">
                  <div className="flex gap-1 shrink-0">
                    <span className="h-2 w-2 rounded-full bg-red-400/80" />
                    <span className="h-2 w-2 rounded-full bg-amber-400/80" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="flex-1 max-w-[170px] bg-bg-card border border-border rounded px-2 py-0.5 text-center truncate shadow-2xs">
                    <span className="font-mono text-[9px] font-semibold text-text-secondary">
                      {demo.url.replace("https://", "")}
                    </span>
                  </div>
                  <a 
                    href={demo.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1 font-mono text-[9px] font-bold text-accent uppercase tracking-wider py-1 px-1.5"
                    aria-label={`Open ${demo.name} in new tab`}
                  >
                    <ExternalLink size={10} /> OPEN
                  </a>
                </div>

                {/* Iframe Viewport with full overlay */}
                <div className="relative w-full bg-white h-[300px]">
                  <iframe
                    src={demo.demoUrl}
                    title={`${demo.name} Demo`}
                    className="absolute inset-0 w-full h-full border-none opacity-100 z-0 pointer-events-none"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                  />

                  {/* Mobile Direct Tap Overlay */}
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-6 cursor-pointer"
                    aria-label="Open live demo in new tab"
                  >
                    <div className="bg-bg-primary/95 text-text-primary px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider border border-border shadow-lg backdrop-blur-md rounded-full flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      <span>Open Live Demo</span>
                      <ExternalLink size={11} className="text-accent shrink-0" />
                    </div>
                  </a>
                </div>

                {/* Card footer */}
                <div className="px-3 py-2.5 border-t border-border bg-bg-secondary/90 flex justify-between items-center gap-2">
                  <span className="text-[10px] text-text-secondary font-medium truncate max-w-[170px]">
                    Like this design? We tailor it for you.
                  </span>
                  <a 
                    href={`https://wa.me/918724932985?text=Hi%20NERQIVA,%20I%20like%20the%20${encodeURIComponent(demo.name)}%20style.%20Can%20you%20build%20something%20similar%20for%20me?`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="shrink-0 font-mono text-[9px] font-bold text-accent uppercase tracking-wider flex items-center gap-1"
                  >
                    INQUIRE <ArrowRight size={9} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Subheading paragraph */}
          <p
            className="animate-fade-in-up text-text-secondary text-[15px] leading-relaxed mb-6 font-normal mt-2"
            style={{ animationDelay: "100ms", animationFillMode: "both" }}
          >
            We build bespoke high-converting websites, automated WhatsApp booking funnels, and verified Google search presence for ambitious local businesses — so clients find you, trust you, and book without friction.
          </p>

          {/* Clean Capability Tags */}
          <div
            className="animate-fade-in-up flex flex-wrap gap-2 mb-7 w-full"
            style={{ animationDelay: "150ms", animationFillMode: "both" }}
          >
            {TOP_SERVICES.map((item) => (
              <span
                key={item}
                className="font-mono text-[11px] font-semibold text-text-primary bg-bg-secondary border border-border px-3 py-1.5 rounded-full tracking-wide shadow-2xs"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Consistent CTA Buttons using design system */}
          <div
            className="animate-fade-in-up flex flex-col gap-3 mb-8"
            style={{ animationDelay: "200ms", animationFillMode: "both" }}
          >
            <a
              href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'd%20like%20a%20free%20audit%20of%20my%20business%20online%20presence."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-3.5 text-xs font-mono font-bold tracking-wider"
            >
              <span>Get a Free Business Audit</span>
              <ArrowRight size={14} />
            </a>

            <a
              href="#case-studies"
              className="btn-secondary w-full py-3.5 text-xs font-mono font-bold tracking-wider"
            >
              Browse Live Demos
            </a>
          </div>



          {/* Subtle scroll cue */}
          <div
            className="animate-fade-in-up flex flex-col items-center justify-center gap-1 opacity-50"
            style={{ animationDelay: "300ms", animationFillMode: "both" }}
          >
            <ChevronDown size={14} className="text-text-tertiary animate-bounce" />
            <span className="font-mono text-[9px] font-semibold uppercase tracking-widest text-text-tertiary">
              Scroll to explore
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  const [activeDemo, setActiveDemo] = useState<DemoId>("beauty");
  const [interacting, setInteracting] = useState<string | null>(null);

  return (
    <>
      <div className="block lg:hidden">
        <MobileHero 
          activeDemo={activeDemo} 
          setActiveDemo={setActiveDemo} 
          interacting={interacting} 
          setInteracting={setInteracting} 
        />
      </div>
      <div className="hidden lg:block">
        <DesktopHero 
          activeDemo={activeDemo} 
          setActiveDemo={setActiveDemo} 
          interacting={interacting} 
          setInteracting={setInteracting} 
        />
      </div>
    </>
  );
}
