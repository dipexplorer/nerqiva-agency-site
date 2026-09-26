"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, CheckCircle2, MousePointer2, Sparkles } from "lucide-react";

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

const TOP_SERVICES = [
  "Website + WhatsApp booking",
  "Google & Instagram presence",
  "SEO & local search visibility",
];

const TRUST_SIGNALS = [
  { text: "3 live interactive demos — click tabs to preview" },
  { text: "No monthly fees on standard builds" },
  { text: "Built for growth-focused local businesses" },
];

type DemoId = "beauty" | "gym" | "bridal";

export default function Hero() {
  const [activeDemo, setActiveDemo] = useState<DemoId>("beauty");
  const [interacting, setInteracting] = useState<string | null>(null);
  const demo = DEMO_SHOWCASES.find((d) => d.id === activeDemo)!;

  return (
    <section className="relative w-full bg-transparent overflow-hidden border-b border-border/20">
      <div className="section-container relative z-10 w-full pt-16 pb-12 lg:pt-22 lg:pb-16">

        {/* ─── Main grid ───────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* ── Left column ─────────────────────────────────────────── */}
          <div className="lg:col-span-6 flex flex-col">

            {/* Top Eyebrow Badge */}
            <div className="animate-fade-in-up mb-4 flex items-center gap-2">
              <span className="px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] bg-[#4C1D95]/10 border border-[#4C1D95]/20 text-[#4C1D95] dark:text-[#C4B5FD] dark:bg-[#4C1D95]/30 rounded-full flex items-center gap-1.5 shadow-2xs">
                <Sparkles size={11} className="text-[#4C1D95] dark:text-[#C4B5FD]" />
                DIGITAL SYSTEMS & WEBSITES
              </span>
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-in-up font-display font-black text-text-primary text-3xl sm:text-4xl lg:text-[3.25rem] leading-[1.12] tracking-tight mb-5"
              style={{
                letterSpacing: "-0.035em",
                animationFillMode: "both",
              }}
            >
              Your competitors get more clients because they{" "}
              <em className="not-italic text-[#4C1D95] dark:text-[#C4B5FD] font-black">
                show up, respond fast, and look credible online.
              </em>
            </h1>

            {/* Subheadline */}
            <p
              className="animate-fade-in-up text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl mb-6 font-normal"
              style={{ animationDelay: "120ms", animationFillMode: "both" }}
            >
              We set up everything your business needs online — a professional website, organised WhatsApp and Instagram, Google visibility, and a simple booking system — so clients can find you, trust you, and reach you without friction.
            </p>

            {/* Feature Pills — Fully styled high-contrast text */}
            <div
              className="animate-fade-in-up flex flex-wrap gap-2.5 mb-7"
              style={{ animationDelay: "200ms", animationFillMode: "both" }}
            >
              {TOP_SERVICES.map((item) => (
                <span
                  key={item}
                  className="font-mono text-xs font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300/80 dark:border-zinc-700 px-3.5 py-1.5 rounded-full tracking-wide shadow-2xs"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Primary & Secondary CTAs — Strict Hierarchy */}
            <div
              className="animate-fade-in-up flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8"
              style={{ animationDelay: "270ms", animationFillMode: "both" }}
            >
              {/* PRIMARY CTA: Solid Filled Indigo #4C1D95 */}
              <a
                href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'd%20like%20a%20free%20audit%20of%20my%20business%20online%20presence."
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto bg-[#4C1D95] hover:bg-[#3B0764] text-white px-8 py-4 font-sans text-sm font-extrabold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2.5 rounded-xl shadow-xl shadow-[#4C1D95]/25 hover:scale-[1.02]"
              >
                <span>Get a free audit of my business</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200 shrink-0" />
              </a>

              {/* SECONDARY CTA: Outline / Ghost Style Only */}
              <a
                href="#case-studies"
                className="w-full sm:w-auto bg-transparent text-[#4C1D95] hover:bg-[#4C1D95]/10 dark:text-[#C4B5FD] dark:hover:bg-[#4C1D95]/30 border-2 border-[#4C1D95] dark:border-[#A78BFA] px-6 py-4 font-sans text-sm font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 rounded-xl"
              >
                Browse live demos
              </a>
            </div>

            {/* Trust signals */}
            <div
              className="animate-fade-in-up border-t border-border/30 pt-6 flex flex-col gap-2.5"
              style={{ animationDelay: "370ms", animationFillMode: "both" }}
            >
              {TRUST_SIGNALS.map(({ text }) => (
                <div key={text} className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="shrink-0 text-[#C9A227] dark:text-[#EAB308]" />
                  <span className="text-text-secondary text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column: Demo showcase (Light-themed Consistency) ── */}
          <div className="lg:col-span-6 w-full flex flex-col gap-4 relative">

            {/* Category Selector Tabs */}
            <div className="flex gap-2 flex-wrap">
              {DEMO_SHOWCASES.map((d) => (
                <button
                  key={d.id}
                  onClick={() => { setActiveDemo(d.id as DemoId); setInteracting(null); }}
                  className={`px-4.5 py-2.5 font-sans text-xs font-bold border transition-all duration-200 cursor-pointer rounded-full ${
                    activeDemo === d.id
                      ? "bg-[#4C1D95] text-white border-[#4C1D95] shadow-md dark:bg-zinc-100 dark:text-zinc-950 dark:border-zinc-100"
                      : "bg-zinc-100 text-zinc-700 border-zinc-200/90 hover:bg-zinc-200/80 hover:text-zinc-900 dark:bg-zinc-800/80 dark:text-zinc-300 dark:border-zinc-700 dark:hover:bg-zinc-800"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>

            {/* Ambient glow */}
            <div
              aria-hidden
              className="absolute -inset-4 rounded-3xl pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(76, 29, 149, 0.08), transparent 75%)",
                filter: "blur(28px)",
                zIndex: 0,
              }}
            />

            {/* Preview Window Frame — Option (a) Light Chrome Consistency */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDemo}
                initial={{ opacity: 0, scale: 0.98, y: 6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -6 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 card-luxury overflow-hidden border border-zinc-200/90 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-2xl"
              >
                {/* Light Browser Bar */}
                <div className="px-4 py-3 border-b border-zinc-200/80 dark:border-zinc-800 bg-zinc-100/90 dark:bg-zinc-900/90 flex items-center justify-between gap-3">
                  <div className="flex gap-1.5 shrink-0">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  </div>
                  {/* Address URL */}
                  <div className="flex-1 max-w-xs bg-white dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700/60 rounded-lg px-3 py-1 text-center shadow-2xs">
                    <span className="font-mono text-[10px] font-semibold text-zinc-700 dark:text-zinc-300 tracking-wide truncate block">
                      {demo.url.replace("https://", "")}
                    </span>
                  </div>
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 flex items-center gap-1 font-mono text-[10px] font-bold text-[#4C1D95] dark:text-[#C4B5FD] hover:underline uppercase tracking-wider"
                  >
                    <ExternalLink size={11} />
                    Open
                  </a>
                </div>

                {/* Live Preview Container — Crisp & Fully Visible on Load (NO centered scrim blocking site) */}
                <div
                  className="relative w-full overflow-hidden bg-white dark:bg-zinc-950"
                  style={{ height: "380px" }}
                >
                  {/* Live Iframe — 100% visible on load */}
                  <iframe
                    key={activeDemo}
                    src={demo.demoUrl}
                    title={`${demo.name} — Live Demo`}
                    className={`absolute inset-0 w-full h-full border-none bg-white transition-all duration-300 ${
                      interacting === activeDemo ? "pointer-events-auto opacity-100 z-10" : "pointer-events-none opacity-100 z-0"
                    }`}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                  />

                  {/* Corner Badge ONLY — Unobtrusive bottom-right position (NEVER centered blocking preview) */}
                  {interacting !== activeDemo && (
                    <button 
                      onClick={() => setInteracting(activeDemo)}
                      className="absolute bottom-4 right-4 z-20 bg-white/95 dark:bg-zinc-900/95 text-zinc-900 dark:text-zinc-100 px-4 py-2 font-mono text-[10px] font-extrabold uppercase tracking-wider border border-zinc-300/90 dark:border-zinc-700 shadow-xl backdrop-blur-md rounded-full hover:scale-105 transition-all duration-200 flex items-center gap-2 cursor-pointer select-none"
                    >
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      <span>Tap to Scroll</span>
                      <MousePointer2 size={12} className="text-[#4C1D95] dark:text-[#C4B5FD] shrink-0" />
                    </button>
                  )}

                  {/* Exit Interactive Mode Button */}
                  {interacting === activeDemo && (
                    <button
                      onClick={(e) => { e.stopPropagation(); setInteracting(null); }}
                      className="absolute top-3 right-3 z-30 bg-[#4C1D95] hover:bg-[#3B0764] text-white px-4 py-2 rounded-full shadow-2xl font-mono text-[10px] font-extrabold uppercase tracking-widest cursor-pointer transition-all flex items-center gap-1.5"
                    >
                      Done scrolling ✕
                    </button>
                  )}
                </div>

                {/* Light Footer Bar */}
                <div className="px-5 py-3.5 border-t border-zinc-200/80 dark:border-zinc-800 bg-zinc-100/90 dark:bg-zinc-900/90 flex items-center justify-between gap-4">
                  <span className="font-sans text-xs font-medium text-zinc-700 dark:text-zinc-400 truncate">
                    Like this design? We can build it tailored for your brand.
                  </span>
                  <a
                    href={`https://wa.me/918724932985?text=Hi%20NERQIVA,%20I%20like%20the%20${encodeURIComponent(demo.name)}%20style.%20Can%20you%20build%20something%20similar%20for%20me?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 font-mono text-[10px] font-extrabold text-[#4C1D95] dark:text-[#C4B5FD] hover:underline uppercase tracking-widest flex items-center gap-1.5 transition-colors"
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
