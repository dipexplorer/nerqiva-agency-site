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
              <span className="px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] bg-accent-gold/10 border border-accent-gold/25 text-amber-700 dark:text-amber-300 rounded-full flex items-center gap-1.5 shadow-2xs">
                <Sparkles size={11} className="text-accent-gold" />
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
              <em className="not-italic text-gold-gradient font-black">
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

            {/* Feature Pills */}
            <div
              className="animate-fade-in-up flex flex-wrap gap-2.5 mb-7"
              style={{ animationDelay: "200ms", animationFillMode: "both" }}
            >
              {TOP_SERVICES.map((item) => (
                <span
                  key={item}
                  className="font-mono text-[11px] font-medium text-text-secondary bg-zinc-100/90 dark:bg-zinc-800/80 border border-zinc-200/90 dark:border-zinc-700/60 px-3.5 py-1.5 rounded-full tracking-wide shadow-2xs"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Primary & Secondary CTAs */}
            <div
              className="animate-fade-in-up flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8"
              style={{ animationDelay: "270ms", animationFillMode: "both" }}
            >
              <a
                href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'd%20like%20a%20free%20audit%20of%20my%20business%20online%20presence."
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-950 px-8 py-4 font-sans text-sm font-bold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2.5 rounded-xl shadow-xl shadow-zinc-950/15 dark:shadow-white/10 hover:scale-[1.01]"
              >
                <span>Get a free audit of my business</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200 shrink-0" />
              </a>

              <a
                href="#case-studies"
                className="w-full sm:w-auto text-text-secondary hover:text-text-primary bg-zinc-100/80 dark:bg-zinc-800/50 hover:bg-zinc-200/80 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60 px-6 py-4 font-sans text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 rounded-xl"
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
                  <CheckCircle2 size={15} className="shrink-0 text-amber-600 dark:text-amber-400" />
                  <span className="text-text-secondary text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column: Demo showcase ──────────────────────────── */}
          <div className="lg:col-span-6 w-full flex flex-col gap-4 relative">

            {/* Tabs */}
            <div className="flex gap-2 flex-wrap">
              {DEMO_SHOWCASES.map((d) => (
                <button
                  key={d.id}
                  onClick={() => { setActiveDemo(d.id as DemoId); setInteracting(null); }}
                  className={`px-4 py-2.5 font-sans text-xs font-bold border transition-all duration-200 cursor-pointer rounded-full ${
                    activeDemo === d.id
                      ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 border-zinc-900 dark:border-zinc-100 shadow-md"
                      : "bg-zinc-100/90 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700/60 hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-zinc-900 dark:hover:text-white"
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
                background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(202, 138, 4, 0.09), transparent 75%)",
                filter: "blur(28px)",
                zIndex: 0,
              }}
            />

            {/* Preview Window Frame */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDemo}
                initial={{ opacity: 0, scale: 0.98, y: 6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -6 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 card-luxury overflow-hidden border border-zinc-200/90 dark:border-zinc-800 rounded-2xl bg-white dark:bg-zinc-900 shadow-2xl"
              >
                {/* Browser bar */}
                <div className="px-4 py-3 border-b border-zinc-200/80 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90 flex items-center justify-between gap-3">
                  <div className="flex gap-1.5 shrink-0">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  </div>
                  {/* Address URL */}
                  <div className="flex-1 max-w-xs bg-white dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700/60 rounded-lg px-3 py-1 text-center shadow-2xs">
                    <span className="font-mono text-[10px] font-semibold text-zinc-600 dark:text-zinc-300 tracking-wide truncate block">
                      {demo.url.replace("https://", "")}
                    </span>
                  </div>
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 flex items-center gap-1 font-mono text-[10px] font-bold text-amber-600 dark:text-amber-400 hover:underline uppercase tracking-wider"
                  >
                    <ExternalLink size={11} />
                    Open
                  </a>
                </div>

                {/* Live Preview Screen Container */}
                <div
                  className="relative w-full overflow-hidden bg-zinc-100 dark:bg-zinc-950"
                  style={{ height: "380px" }}
                >
                  {/* Live Iframe — ALWAYS rendered crisp and clean */}
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

                  {/* High-Elegance Floating Capsule Overlay */}
                  {interacting !== activeDemo && (
                    <div 
                      onClick={() => setInteracting(activeDemo)}
                      className="absolute inset-0 bg-black/10 dark:bg-black/30 hover:bg-black/5 dark:hover:bg-black/20 backdrop-blur-[1.5px] transition-all duration-300 flex flex-col items-center justify-end pb-6 px-6 text-center cursor-pointer z-20 group/overlay select-none"
                    >
                      <div className="bg-white/95 dark:bg-zinc-900/95 text-zinc-900 dark:text-zinc-100 px-6 py-3 font-mono text-[11px] font-extrabold uppercase tracking-widest border border-zinc-200/90 dark:border-zinc-700/90 shadow-2xl backdrop-blur-2xl rounded-full group-hover/overlay:scale-105 transition-all duration-200 flex items-center gap-2.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                        <span>Tap to Scroll Live Site</span>
                        <MousePointer2 size={13} className="text-amber-500 dark:text-amber-400 shrink-0" />
                      </div>
                    </div>
                  )}

                  {/* Exit Interactive Mode Button */}
                  {interacting === activeDemo && (
                    <button
                      onClick={(e) => { e.stopPropagation(); setInteracting(null); }}
                      className="absolute top-3 right-3 z-30 bg-zinc-900/90 hover:bg-zinc-900 text-white px-4 py-2 rounded-full shadow-2xl font-mono text-[10px] font-extrabold uppercase tracking-widest cursor-pointer border border-zinc-700 backdrop-blur-md transition-all flex items-center gap-1.5"
                    >
                      Done scrolling ✕
                    </button>
                  )}
                </div>

                {/* Footer bar */}
                <div className="px-5 py-3.5 border-t border-zinc-200/80 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90 flex items-center justify-between gap-4">
                  <span className="font-sans text-xs font-medium text-zinc-600 dark:text-zinc-400 truncate">
                    Like this design? We can build it tailored for your brand.
                  </span>
                  <a
                    href={`https://wa.me/918724932985?text=Hi%20NERQIVA,%20I%20like%20the%20${encodeURIComponent(demo.name)}%20style.%20Can%20you%20build%20something%20similar%20for%20me?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 font-mono text-[10px] font-extrabold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 uppercase tracking-widest flex items-center gap-1.5 transition-colors"
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
