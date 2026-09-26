"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, CheckCircle, MousePointer2 } from "lucide-react";

const DEMO_SHOWCASES = [
  {
    id: "beauty",
    label: "Salons & MUAs",
    name: "Aura Beauty",
    description: "Bridal & makeup studio — gallery, pricing & WhatsApp booking",
    url: "https://aura-beauty-theme.vercel.app/",
    demoUrl: "https://aura-beauty-theme.vercel.app/",
    tag: "Beauty & Bridal",
  },
  {
    id: "gym",
    label: "Gyms & Studios",
    name: "Titan Gym",
    description: "Premium fitness centre — class schedule, trainers & VIP trial signup",
    url: "https://titangymnq.vercel.app/",
    demoUrl: "https://titangymnq.vercel.app/",
    tag: "Fitness & Wellness",
  },
  {
    id: "bridal",
    label: "Boutiques & Brands",
    name: "Valerie Laurent",
    description: "Luxury bridal studio — editorial gallery, packages & inquiry",
    url: "https://bridalnerqiva.vercel.app/",
    demoUrl: "https://bridalnerqiva.vercel.app/",
    tag: "Luxury Bridal",
  },
];

// FIX 3: trimmed from 6 pills → 3, highest-impact only
const TOP_SERVICES = [
  "Website + WhatsApp booking",
  "Google & Instagram presence",
  "SEO & local search visibility",
];

// FIX 1: removed "across India" claim — now capability/intent framing
const TRUST_SIGNALS = [
  { text: "3 live demos — click any tab to see real work" },
  { text: "No monthly fees on standard builds" },
  { text: "Built for local businesses in India" },
];

type DemoId = "beauty" | "gym" | "bridal";

export default function Hero() {
  const [activeDemo, setActiveDemo] = useState<DemoId>("beauty");
  const [interacting, setInteracting] = useState<string | null>(null);
  const [hoveringDemo, setHoveringDemo] = useState(false);
  const demo = DEMO_SHOWCASES.find((d) => d.id === activeDemo)!;

  return (
    <section className="relative w-full bg-transparent overflow-hidden border-b border-border/20">
      {/* ── Background Atmosphere & Noise Reduction ────────────────────── */}
      {/* Halo 1 (Top Left): Soft ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-[#C9A227]/10 blur-[130px] pointer-events-none z-0"
      />

      {/* Halo 2 (Right/Demo area): Soft luxury gold ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 -right-24 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-[#4C1D95]/08 blur-[120px] pointer-events-none z-0"
      />

      {/* Single lightweight SVG curved swooping vector line */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible opacity-70"
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M -60,140 C 260,40 480,230 720,150 C 960,70 1120,290 1260,210"
          stroke="#C9A227"
          strokeWidth="1.5"
          strokeOpacity="0.22"
          strokeDasharray="4 4"
          fill="none"
        />
      </svg>

      <div className="section-container relative z-10 w-full pt-16 pb-10 lg:pt-20 lg:pb-14">

        {/* ─── Main grid ───────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ── Left column ─────────────────────────────────────────── */}
          <div className="lg:col-span-6 flex flex-col">

            {/* Headline — responsive font size scaling for 320px–1440px viewports */}
            <h1
              className="animate-fade-in-up font-display font-black text-text-primary text-2xl sm:text-4xl lg:text-[3.1rem] leading-[1.15] sm:leading-[1.1] tracking-tight mb-4"
              style={{
                letterSpacing: "-0.03em",
                animationFillMode: "both",
              }}
            >
              Your competitors get more clients because they{" "}
              <em className="not-italic text-accent-gold">
                show up, respond fast, and look credible online.
              </em>
            </h1>

            {/* Subheadline — Slate 700 WCAG AAA contrast */}
            <p
              className="animate-fade-in-up text-text-secondary text-sm md:text-base leading-relaxed max-w-lg mb-5"
              style={{ animationDelay: "120ms", animationFillMode: "both" }}
            >
              We set up everything your business needs online — a professional website, organised WhatsApp and Instagram, Google visibility, and a simple booking system — so clients can find you, trust you, and reach you without any friction.
            </p>

            {/* Top services pills */}
            <div
              className="animate-fade-in-up flex flex-wrap gap-2 mb-5"
              style={{ animationDelay: "200ms", animationFillMode: "both" }}
            >
              {TOP_SERVICES.map((item) => (
                <span
                  key={item}
                  className="font-mono text-[10px] text-text-tertiary bg-bg-secondary/80 border border-border/40 px-3 py-1 rounded-full tracking-wide"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Primary & Secondary CTA */}
            <div
              className="animate-fade-in-up flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6"
              style={{ animationDelay: "270ms", animationFillMode: "both" }}
            >
              <a
                href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'd%20like%20a%20free%20audit%20of%20my%20business%20online%20presence."
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto bg-accent text-white px-7 py-4 font-sans text-sm font-bold hover:bg-accent-mid transition-all duration-300 cursor-pointer flex items-center justify-center gap-2.5 rounded shadow-lg shadow-accent/20"
              >
                <span>Get a free audit of my business</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200 shrink-0" />
              </a>

              <a
                href="#case-studies"
                className="w-full sm:w-auto text-text-secondary border border-border/50 px-6 py-4 font-sans text-sm font-semibold hover:border-accent/40 hover:text-text-primary transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 rounded"
              >
                Browse live demos
              </a>
            </div>

            {/* Trust signals */}
            <div
              className="animate-fade-in-up border-t border-border/20 pt-5 flex flex-col gap-2"
              style={{ animationDelay: "370ms", animationFillMode: "both" }}
            >
              {TRUST_SIGNALS.map(({ text }) => (
                <div key={text} className="flex items-center gap-2.5">
                  <CheckCircle size={14} className="shrink-0 text-accent-gold" />
                  <span className="text-text-secondary text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column: Demo showcase ──────────────────────────── */}
          <div className="lg:col-span-6 w-full flex flex-col gap-4 lg:pt-2 relative">

            {/* Tabs */}
            <div className="flex gap-2 flex-wrap">
              {DEMO_SHOWCASES.map((d) => (
                <button
                  key={d.id}
                  onClick={() => { setActiveDemo(d.id as DemoId); setInteracting(null); }}
                  className={`px-4 py-2 font-sans text-xs font-semibold border transition-all duration-200 cursor-pointer rounded-full ${
                    activeDemo === d.id
                      ? "bg-accent border-accent text-white shadow-sm shadow-accent/25"
                      : "bg-bg-secondary/70 text-text-secondary border-border/40 hover:border-accent/40 hover:text-text-primary"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>

            {/* Showcase Wrapper with Stacked Card Depth */}
            <div className="relative w-full">
              {/* Image 3 Stacked card depth backplate (subtle tilted second card behind main window) */}
              <div 
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl bg-white/80 border border-border/60 shadow-md transform translate-x-3.5 translate-y-3.5 rotate-1.5 scale-[0.985] pointer-events-none z-0 hidden sm:block"
              />

              {/* Preview Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDemo}
                  initial={{ opacity: 0, scale: 0.98, y: 6 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97, y: -6 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 glass-panel border border-border/40 overflow-hidden rounded-2xl backdrop-blur-xl"
                  style={{
                    boxShadow: "0 0 0 1px rgba(9,9,11,0.06), 0 12px 36px -10px rgba(76,29,149,0.12), 0 24px 48px -12px rgba(0,0,0,0.06)"
                  }}
                >
                {/* Browser chrome */}
                <div className="px-4 py-2.5 border-b border-border/40 bg-bg-secondary/95 flex items-center gap-3">
                  <div className="flex gap-1.5 shrink-0">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                  </div>
                  {/* URL bar */}
                  <div className="flex-1 min-w-0 bg-bg-primary/60 border border-border/50 rounded px-3 py-1">
                    <span className="font-mono text-[9px] text-text-tertiary tracking-wide truncate block">
                      {demo.url.replace("https://", "")}
                    </span>
                  </div>
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 flex items-center gap-1 font-mono text-[9px] font-bold text-text-primary uppercase tracking-widest hover:text-accent-gold transition-colors"
                  >
                    <ExternalLink size={10} />
                    Open
                  </a>
                </div>

                {/* FIX 2: iframe fully visible by default — no dark scrim on load.
                    Scroll affordance only appears on hover as a small corner badge. */}
                <div
                  className="relative w-full overflow-hidden bg-bg-secondary"
                  style={{ height: "360px" }}
                  onMouseEnter={() => setHoveringDemo(true)}
                  onMouseLeave={() => setHoveringDemo(false)}
                >
                  {/* Defer loading iframe until user interacts or on desktop hover */}
                  {interacting === activeDemo || hoveringDemo ? (
                    <iframe
                      key={activeDemo}
                      src={demo.demoUrl}
                      title={`${demo.name} — Live Demo`}
                      className={`absolute inset-0 w-full h-full border-none bg-white transition-all duration-200 ${
                        interacting === activeDemo ? "pointer-events-auto" : "pointer-events-none"
                      }`}
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    />
                  ) : (
                    <div 
                      onClick={() => setInteracting(activeDemo)}
                      className="absolute inset-0 bg-gradient-to-br from-bg-secondary via-bg-card to-bg-secondary flex flex-col items-center justify-center p-6 text-center cursor-pointer group"
                    >
                      <div className="h-12 w-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-3 group-hover:scale-110 transition-transform">
                        <MousePointer2 size={18} />
                      </div>
                      <span className="font-sans font-bold text-sm text-text-primary mb-1">
                        {demo.name}
                      </span>
                      <span className="font-mono text-[10px] text-accent uppercase tracking-widest font-bold">
                        Tap / Click to Explore Live Demo ↗
                      </span>
                    </div>
                  )}

                  {/* Hover-only scroll badge (top-right corner, small) */}
                  {interacting !== activeDemo && hoveringDemo && (
                    <AnimatePresence>
                      <motion.button
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.85 }}
                        transition={{ duration: 0.15 }}
                        onClick={() => setInteracting(activeDemo)}
                        className="absolute top-3 right-3 z-30 bg-white/90 backdrop-blur-sm text-bg-dark px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 font-sans font-semibold text-xs cursor-pointer hover:bg-white transition-colors"
                      >
                        <MousePointer2 size={12} className="text-accent" />
                        Scroll & explore
                      </motion.button>
                    </AnimatePresence>
                  )}

                  {/* Active: stop-scrolling escape */}
                  {interacting === activeDemo && (
                    <button
                      onClick={() => setInteracting(null)}
                      className="absolute top-3 right-3 z-30 bg-white/90 backdrop-blur-sm text-bg-dark px-3 py-1.5 rounded-full shadow-lg font-sans font-semibold text-xs cursor-pointer hover:bg-white transition-colors"
                    >
                      Done scrolling
                    </button>
                  )}

                  {/* Bottom caption — always visible, no dark scrim on top of iframe */}
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/85 via-black/40 to-transparent pt-12 pb-4 px-5 pointer-events-none z-10">
                    <span className="font-mono text-[9px] text-white/50 uppercase tracking-widest block mb-0.5">
                      {demo.tag}
                    </span>
                    <p className="font-sans font-bold text-white text-sm leading-tight">
                      {demo.name}
                    </p>
                    <p className="font-sans text-white/65 text-xs mt-0.5">
                      {demo.description}
                    </p>
                  </div>
                </div>

                {/* Card footer */}
                <div className="px-5 py-3 border-t border-border/40 bg-bg-secondary/95 flex items-center justify-between gap-4">
                  <span className="font-sans text-xs text-text-secondary truncate">
                    Like this style? We can build it for your business.
                  </span>
                  <a
                    href={`https://wa.me/918724932985?text=Hi%20NERQIVA,%20I%20like%20the%20${encodeURIComponent(demo.name)}%20style.%20Can%20you%20build%20something%20similar%20for%20me?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 font-mono text-[10px] font-bold text-accent-gold hover:text-accent-gold-light uppercase tracking-widest flex items-center gap-1.5 transition-colors"
                  >
                    Get this style <ArrowRight size={10} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
