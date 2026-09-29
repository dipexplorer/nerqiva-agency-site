"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, CheckCircle2, MousePointer2, Sparkles, MessageCircle, Search, ChevronDown } from "lucide-react";
import HeroFlowLine from "./HeroFlowLine";

const InstagramIcon = ({ size = 16, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

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

const FEATURE_PILLS = [
  { text: "Website +\nWhatsApp booking", icon: MessageCircle },
  { text: "Google & Instagram\npresence", icon: InstagramIcon },
  { text: "SEO & local\nsearch visibility", icon: Search },
];

type DemoId = "beauty" | "gym" | "bridal";

function DesktopHero({ activeDemo, setActiveDemo, interacting, setInteracting }: { activeDemo: DemoId, setActiveDemo: any, interacting: string | null, setInteracting: any }) {
  const demo = DEMO_SHOWCASES.find((d) => d.id === activeDemo)!;

  return (
    <section className="relative w-full bg-transparent overflow-hidden border-b border-border/20">
      <HeroFlowLine />
      <div className="section-container relative z-10 w-full pt-16 pb-12 lg:pt-22 lg:pb-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 flex flex-col">
            <div className="animate-fade-in-up mb-4 flex items-center gap-2 flex-wrap">
              <span className="px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] bg-accent/10 border border-accent/20 text-accent rounded-full flex items-center gap-1.5 shadow-2xs">
                <Sparkles size={11} className="text-accent " />
                DIGITAL SYSTEMS & WEBSITES
              </span>
              <span className="px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Accepting 2 New Clients
              </span>
            </div>

            <h1
              className="animate-fade-in-up font-display font-black text-text-primary text-3xl sm:text-4xl lg:text-[3.25rem] leading-[1.12] tracking-tight mb-5"
              style={{ letterSpacing: "-0.035em", animationFillMode: "both" }}
            >
              Your competitors get more clients because they{" "}
              <em className="not-italic text-transparent bg-clip-text bg-linear-to-r from-accent to-accent-light font-black">
                show up, respond fast, and look credible online.
              </em>
            </h1>

            <p
              className="animate-fade-in-up text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl mb-6 font-normal"
              style={{ animationDelay: "120ms", animationFillMode: "both" }}
            >
              We set up everything your business needs online — a professional website, organised WhatsApp and Instagram, Google visibility, and a simple booking system — so clients can find you, trust you, and reach you without friction.
            </p>

            <div
              className="animate-fade-in-up flex flex-wrap gap-2.5 mb-7"
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
                <span>Get a free audit of my business</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200 shrink-0" />
              </a>
              <a href="#case-studies" className="btn-secondary w-full sm:w-auto">
                Browse live demos
              </a>
            </div>

            <div
              className="animate-fade-in-up border-t border-border/30 pt-6 flex flex-col gap-2.5"
              style={{ animationDelay: "370ms", animationFillMode: "both" }}
            >
              {TRUST_SIGNALS.map(({ text }) => (
                <div key={text} className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="shrink-0 text-[#C9A227] " />
                  <span className="text-text-secondary text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 w-full flex flex-col gap-4 relative">
            <div className="flex gap-2 overflow-x-auto snap-x scrollbar-none pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 sm:flex-wrap">
              {DEMO_SHOWCASES.map((d) => (
                <button
                  key={d.id}
                  onClick={() => { setActiveDemo(d.id as DemoId); setInteracting(null); }}
                  className={`snap-start shrink-0 px-4.5 py-2.5 font-sans text-xs font-bold border transition-all duration-200 cursor-pointer rounded-full ${
                    activeDemo === d.id
                      ? "bg-accent text-text-inverted border-accent shadow-md"
                      : "bg-bg-secondary text-text-secondary border-border hover:border-accent/40 hover:text-text-primary"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>

            <div
              aria-hidden
              className="absolute -inset-4 rounded-3xl pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(76, 29, 149, 0.08), transparent 75%)",
                filter: "blur(28px)",
                zIndex: 0,
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeDemo}
                initial={{ opacity: 0, scale: 0.98, y: 6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -6 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 card-luxury overflow-hidden border border-border rounded-2xl bg-bg-primary shadow-2xl"
              >
                <div className="px-4 py-3 border-b border-border bg-bg-secondary/90 flex items-center justify-between gap-3">
                  <div className="flex gap-1.5 shrink-0">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="flex-1 max-w-xs bg-bg-card border border-border rounded-lg px-3 py-1 text-center shadow-2xs">
                    <span className="font-mono text-[10px] font-semibold text-text-secondary tracking-wide truncate block">
                      {demo.url.replace("https://", "")}
                    </span>
                  </div>
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 flex items-center gap-1 font-mono text-[10px] font-bold text-[#4C1D95] hover:underline uppercase tracking-wider"
                  >
                    <ExternalLink size={11} />
                    Open
                  </a>
                </div>

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
                      className="hidden sm:flex absolute bottom-4 right-4 z-20 bg-bg-primary/95 text-text-primary px-4 py-2 font-mono text-[10px] font-extrabold uppercase tracking-wider border border-border shadow-xl backdrop-blur-md rounded-full hover:scale-105 transition-all duration-200 items-center gap-2 cursor-pointer select-none"
                    >
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      <span>Tap to Scroll</span>
                      <MousePointer2 size={12} className="text-[#4C1D95] shrink-0" />
                    </button>
                  )}

                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:hidden absolute inset-0 z-20 flex flex-col items-center justify-end pb-8 cursor-pointer"
                  >
                    <div className="bg-bg-primary/95 text-text-primary px-5 py-2.5 font-mono text-[11px] font-extrabold uppercase tracking-widest border border-border shadow-xl backdrop-blur-md rounded-full flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      <span>Open Live Demo</span>
                      <ExternalLink size={12} className="text-[#4C1D95] shrink-0" />
                    </div>
                  </a>

                  {interacting === activeDemo && (
                    <button
                      onClick={(e) => { e.stopPropagation(); setInteracting(null); }}
                      className="hidden sm:flex absolute top-3 right-3 z-30 btn-primary shadow-2xl font-mono text-[10px] font-extrabold uppercase tracking-widest cursor-pointer transition-all items-center gap-1.5"
                    >
                      Done scrolling ✕
                    </button>
                  )}
                </div>

                <div className="px-5 py-3.5 border-t border-border bg-bg-secondary/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span className="font-sans text-xs font-medium text-text-secondary truncate w-full sm:w-auto">
                    Like this design? We can build it tailored for your brand.
                  </span>
                  <a
                    href={`https://wa.me/918724932985?text=Hi%20NERQIVA,%20I%20like%20the%20${encodeURIComponent(demo.name)}%20style.%20Can%20you%20build%20something%20similar%20for%20me?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 font-mono text-[10px] font-extrabold text-[#4C1D95] hover:underline uppercase tracking-widest flex items-center gap-1.5 transition-colors"
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

function MobileHero({ activeDemo, setActiveDemo, interacting, setInteracting }: { activeDemo: DemoId, setActiveDemo: any, interacting: string | null, setInteracting: any }) {
  const demo = DEMO_SHOWCASES.find((d) => d.id === activeDemo)!;

  const renderDemoCard = () => (
    <div className="relative z-20 w-full max-w-[340px] mx-auto mt-4">
      {/* Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#4C1D95]/10 blur-[60px] rounded-[100%] pointer-events-none"
        aria-hidden="true"
      />

      {/* Decorative Lines Motif */}
      <svg className="absolute -left-10 -top-10 w-[150%] h-[150%] pointer-events-none opacity-40 z-0" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-50,200 C100,50 300,350 450,150" stroke="#C9A227" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M-20,250 C120,80 280,300 420,100" stroke="#4C1D95" strokeWidth="0.5" />
      </svg>

      {/* Layered Back Card (Dark Theme) */}
      <div 
        className="absolute inset-0 bg-[#121212] border border-[#2A2A2A] rounded-2xl shadow-2xl opacity-90" 
        style={{ transform: "rotate(-4deg) translateY(12px)" }}
        aria-hidden="true"
      >
        <div className="px-4 py-3 border-b border-[#2A2A2A] flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <div className="p-6 flex flex-col gap-3">
          <div className="w-2/3 h-5 bg-white/10 rounded-md" />
          <div className="w-1/2 h-3 bg-white/5 rounded-md" />
          <div className="w-3/4 h-3 bg-white/5 rounded-md" />
        </div>
      </div>

      {/* Front Card (Live Demo) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDemo}
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: -10 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-bg-primary border border-border rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Browser Chrome */}
          <div className="px-3 py-2 border-b border-border bg-bg-secondary flex items-center justify-between gap-3">
            <div className="flex gap-1.5 shrink-0">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <div className="flex-1 max-w-[160px] bg-bg-card border border-border rounded-md px-2 py-1 text-center truncate shadow-sm">
              <span className="font-mono text-[9px] font-semibold text-text-secondary">
                {demo.url.replace("https://", "")}
              </span>
            </div>
            <a 
              href={demo.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 font-mono text-[9px] font-bold text-[#4C1D95] uppercase tracking-wider min-h-[44px] min-w-[44px] justify-end"
              aria-label={`Open ${demo.name} in new tab`}
            >
              <ExternalLink size={12} /> OPEN
            </a>
          </div>

          {/* Iframe Viewport */}
          <div className="relative w-full bg-white h-[320px]">
            <iframe
              src={demo.demoUrl}
              title={`${demo.name} Demo`}
              className="absolute inset-0 w-full h-full border-none opacity-100 z-0 pointer-events-none"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
            />

            {/* Mobile Full Overlay (Prevents Scroll Trapping) */}
            <a
              href={demo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-8 cursor-pointer"
              aria-label="Open live demo in new tab"
            >
              <div className="bg-bg-primary/95 text-text-primary px-5 py-2.5 font-mono text-[11px] font-extrabold uppercase tracking-widest border border-border shadow-xl backdrop-blur-md rounded-full flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Open Live Demo</span>
                <ExternalLink size={12} className="text-[#4C1D95] shrink-0" />
              </div>
            </a>
          </div>

          {/* Bottom Footer Frame */}
          <div className="px-3 py-3 border-t border-border bg-bg-secondary flex justify-between items-center gap-2">
            <span className="text-[9px] text-text-secondary font-medium truncate max-w-[180px]">
              Like this design? We can build it tailored for your brand.
            </span>
            <a 
              href={`https://wa.me/918724932985?text=Hi%20NERQIVA,%20I%20like%20the%20${encodeURIComponent(demo.name)}%20style.%20Can%20you%20build%20something%20similar%20for%20me?`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="shrink-0 font-mono text-[9px] font-extrabold text-[#4C1D95] uppercase tracking-widest flex items-center gap-1 min-h-[32px]"
            >
              GET THIS STYLE <ArrowRight size={10} />
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );

  return (
    <section className="relative w-full bg-bg-primary overflow-hidden border-b border-border/20">
      <div className="section-container relative z-10 w-full pt-28 pb-12 px-4 sm:px-6">

        <div className="flex flex-col">
          {/* 1. Nav (Handled globally in layout) */}
          
          {/* 2. Top Eyebrow Badges (Side by side / wrapping) */}
          <div className="animate-fade-in-up mb-6 flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-widest bg-[#4C1D95]/10 border border-[#4C1D95]/20 text-[#4C1D95] rounded-full flex items-center gap-1.5">
              <Sparkles size={11} className="text-[#4C1D95]" />
              DIGITAL SYSTEMS & WEBSITES
            </span>
            <span className="px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-full flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              ACCEPTING 2 NEW CLIENTS
            </span>
          </div>

          {/* 3. Headline (Gradient: Indigo to Muted Gold) */}
          <h1
            className="animate-fade-in-up font-serif font-black text-text-primary text-[2.25rem] sm:text-4xl leading-[1.1] sm:leading-[1.05] tracking-tight mb-2"
            style={{ letterSpacing: "-0.02em", animationFillMode: "both" }}
          >
            Your competitors get more clients because they{" "}
            <em className="not-italic text-transparent bg-clip-text bg-linear-to-r from-[#4C1D95] to-[#C9A227] font-black pb-1">
              show up, respond fast, and look credible online.
            </em>
          </h1>

          {/* 4. Layered Demo Card (MOBILE DOM POSITION) */}
          {renderDemoCard()}

          {/* 5. Subheading paragraph */}
          <p
            className="animate-fade-in-up text-text-secondary text-[15px] sm:text-lg leading-relaxed max-w-xl mb-7 font-normal"
            style={{ animationDelay: "100ms", animationFillMode: "both" }}
          >
            We set up everything your business needs online — a professional website, organised WhatsApp and Instagram, Google visibility, and a simple booking system — so clients can find you, trust you, and reach you without friction.
          </p>

          {/* 6. Feature Pills (2+1 Wrapped Row Layout) */}
          <div
            className="animate-fade-in-up flex flex-wrap gap-2.5 mb-10 w-full"
            style={{ animationDelay: "150ms", animationFillMode: "both" }}
          >
            {FEATURE_PILLS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 border border-border/80 bg-bg-card rounded-full p-1.5 pr-4 shadow-sm shrink-0"
                >
                  <div className="h-8 w-8 rounded-full bg-[#4C1D95]/10 flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-[#4C1D95]" />
                  </div>
                  <span className="font-sans text-[10px] sm:text-xs font-semibold text-text-primary leading-tight whitespace-pre-line">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* 7 & 8. Primary & Secondary CTAs */}
          <div
            className="animate-fade-in-up flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 mb-10"
            style={{ animationDelay: "200ms", animationFillMode: "both" }}
          >
            {/* Primary CTA (Solid Indigo Gradient + Glow) */}
            <a
              href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'd%20like%20a%20free%20audit%20of%20my%20business%20online%20presence."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-linear-to-r from-[#4C1D95] to-[#5B21B6] text-white px-7 py-4 rounded-full font-mono text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#4C1D95]/30 hover:shadow-[#4C1D95]/50 hover:scale-[1.02] transition-all min-h-[44px]"
            >
              Get a free audit of my business
              <ArrowRight size={14} />
            </a>

            {/* Secondary CTA (Outline Indigo) */}
            <a
              href="#case-studies"
              className="w-full sm:w-auto border border-[#4C1D95] text-[#4C1D95] bg-transparent hover:bg-[#4C1D95]/5 px-7 py-4 rounded-full font-mono text-[11px] font-bold uppercase tracking-widest flex items-center justify-center text-center transition-all min-h-[44px]"
            >
              Browse live demos
            </a>
          </div>

          {/* 9. Scroll Indicator */}
          <div
            className="animate-fade-in-up flex flex-col items-center justify-center gap-1 opacity-60"
            style={{ animationDelay: "300ms", animationFillMode: "both" }}
          >
            <ChevronDown size={16} className="text-text-tertiary animate-bounce" />
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
      {/* Exclusively load the Mobile DOM on mobile */}
      <div className="block lg:hidden">
        <MobileHero 
          activeDemo={activeDemo} 
          setActiveDemo={setActiveDemo} 
          interacting={interacting} 
          setInteracting={setInteracting} 
        />
      </div>
      {/* Exclusively load the Old Desktop DOM on desktop */}
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
