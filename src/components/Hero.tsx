"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, CheckCircle, MousePointer2, Sparkles } from "lucide-react";

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
              <em className="not-italic bg-linear-to-r from-amber-600 via-amber-500 to-yellow-600 dark:from-amber-400 dark:via-yellow-300 dark:to-amber-500 bg-clip-text text-transparent font-black">
                show up, respond fast, and look credible online.
              </em>
            </h1>

            {/* FIX 5: darkened subheadline to #4B4B55 equivalent — passes WCAG AA */}
            <p
              className="animate-fade-in-up text-text-secondary text-sm md:text-base leading-relaxed max-w-lg mb-5"
              style={{ animationDelay: "120ms", animationFillMode: "both" }}
            >
              We set up everything your business needs online — a professional website, organised WhatsApp and Instagram, Google visibility, and a simple booking system — so clients can find you, trust you, and reach you without any friction.
            </p>

            {/* FIX 3: 3 pills only, visually lighter */}
            <div
              className="animate-fade-in-up flex flex-wrap gap-2 mb-5"
              style={{ animationDelay: "200ms", animationFillMode: "both" }}
            >
              {TOP_SERVICES.map((item) => (
                <span
                  key={item}
                  className="font-mono text-[10px] text-text-tertiary bg-bg-secondary/60 border border-border/40 px-3 py-1 rounded-full tracking-wide"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* FIX 4: primary CTA strengthened — specific action named */}
            <div
              className="animate-fade-in-up flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6"
              style={{ animationDelay: "270ms", animationFillMode: "both" }}
            >
              <a
                href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'd%20like%20a%20free%20audit%20of%20my%20business%20online%20presence."
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto bg-accent text-white dark:text-bg-primary px-7 py-4 font-sans text-sm font-bold hover:bg-accent-mid transition-all duration-300 cursor-pointer flex items-center justify-center gap-2.5 rounded shadow-lg shadow-accent/20"
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
                  <CheckCircle size={13} className="shrink-0 text-accent-gold" />
                  <span className="text-text-secondary text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column: Demo showcase ──────────────────────────── */}
          {/* On mobile this column appears AFTER the left column (natural DOM order),
              so the CTA is always above it on small screens */}
          <div className="lg:col-span-6 w-full flex flex-col gap-4 lg:pt-2 relative">

            {/* Tabs */}
            <div className="flex gap-2 flex-wrap">
              {DEMO_SHOWCASES.map((d) => (
                <button
                  key={d.id}
                  onClick={() => { setActiveDemo(d.id as DemoId); setInteracting(null); }}
                  className={`px-4 py-2 font-sans text-xs font-semibold border transition-all duration-200 cursor-pointer rounded-full ${
                    activeDemo === d.id
                      ? "bg-accent border-accent text-white dark:text-bg-primary shadow-sm shadow-accent/25"
                      : "bg-bg-secondary/70 text-text-secondary border-border/40 hover:border-accent/40 hover:text-text-primary"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>

            {/* Ambient glow — warm gold */}
            <div
              aria-hidden
              className="absolute -inset-4 rounded-2xl pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 80% 60% at 55% 50%, rgba(202, 138, 4, 0.08), transparent 70%)",
                filter: "blur(24px)",
                zIndex: 0,
              }}
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
                  boxShadow: "0 0 0 1px rgba(9,9,11,0.08), 0 8px 32px -8px rgba(202,138,4,0.10), 0 24px 48px -12px rgba(0,0,0,0.08)"
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
                >
                  {/* Live Iframe — ALWAYS loaded in background so real website shines through frosted glass */}
                  <iframe
                    key={activeDemo}
                    src={demo.demoUrl}
                    title={`${demo.name} — Live Demo`}
                    className={`absolute inset-0 w-full h-full border-none bg-white transition-opacity duration-300 ${
                      interacting === activeDemo ? "pointer-events-auto opacity-100 z-10" : "pointer-events-none opacity-95 z-0"
                    }`}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                  />

                  {/* Pristine Frosted Glass Overlay with Apple-grade Capsule Badge */}
                  {interacting !== activeDemo && (
                    <div 
                      onClick={() => setInteracting(activeDemo)}
                      className="absolute inset-0 bg-white/50 dark:bg-zinc-950/60 backdrop-blur-[3px] hover:bg-white/30 dark:hover:bg-zinc-950/40 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center cursor-pointer z-20 group/overlay select-none"
                    >
                      <div className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 px-6 py-3 font-mono text-[11px] font-extrabold uppercase tracking-widest border border-zinc-200 dark:border-zinc-700/80 shadow-2xl backdrop-blur-xl rounded-full group-hover/overlay:scale-105 transition-transform duration-200 flex items-center gap-2.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                        <span>Click / Tap to Scroll Live Site</span>
                        <MousePointer2 size={13} className="text-amber-500 dark:text-amber-400 shrink-0" />
                      </div>
                      <span className="font-sans text-xs font-semibold text-zinc-600 dark:text-zinc-400 mt-2.5 drop-shadow-xs">
                        Interactive live preview loads on tap
                      </span>
                    </div>
                  )}

                  {/* Active Mode Exit Button */}
                  {interacting === activeDemo && (
                    <button
                      onClick={(e) => { e.stopPropagation(); setInteracting(null); }}
                      className="absolute top-3 right-3 z-30 bg-black/85 hover:bg-black text-white px-3.5 py-1.5 rounded-full shadow-2xl font-mono text-[10px] font-bold uppercase tracking-widest cursor-pointer border border-white/20 backdrop-blur-md transition-all flex items-center gap-1.5"
                    >
                      Done scrolling ✕
                    </button>
                  )}
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
    </section>
  );
}
