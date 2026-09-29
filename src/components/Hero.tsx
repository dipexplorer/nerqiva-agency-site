"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, MousePointer2, Sparkles, MessageCircle, Search, ChevronDown } from "lucide-react";

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

const FEATURE_PILLS = [
  { text: "Website +\nWhatsApp booking", icon: MessageCircle },
  { text: "Google & Instagram\npresence", icon: InstagramIcon },
  { text: "SEO & local\nsearch visibility", icon: Search },
];

type DemoId = "beauty" | "gym" | "bridal";

export default function Hero() {
  const [activeDemo, setActiveDemo] = useState<DemoId>("beauty");
  const [interacting, setInteracting] = useState<string | null>(null);
  const demo = DEMO_SHOWCASES.find((d) => d.id === activeDemo)!;

  const renderDemoCard = (isMobile: boolean) => (
    <div className={`relative ${isMobile ? 'block lg:hidden mb-8 mt-6' : 'hidden lg:block w-full'} z-20`}>
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

      <div className="relative z-10 w-full max-w-[340px] sm:max-w-md mx-auto mt-4">
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
            <div className="px-3 py-2 sm:px-4 sm:py-3 border-b border-border bg-bg-secondary flex items-center justify-between gap-3">
              <div className="flex gap-1.5 shrink-0">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <div className="flex-1 max-w-[160px] sm:max-w-[200px] bg-bg-card border border-border rounded-md px-2 py-1 text-center truncate shadow-sm">
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
            <div className="relative w-full h-[320px] sm:h-[400px] bg-white">
              <iframe
                src={demo.demoUrl}
                title={`${demo.name} Demo`}
                className={`absolute inset-0 w-full h-full border-none transition-opacity duration-300 ${
                  interacting === activeDemo ? "pointer-events-auto opacity-100 z-10" : "pointer-events-none opacity-100 z-0"
                }`}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              />

              {/* Floating WhatsApp Button */}
              <div className="absolute right-3 top-[60%] z-20 h-10 w-10 sm:h-12 sm:w-12 bg-emerald-500 rounded-full shadow-lg flex items-center justify-center">
                <MessageCircle size={20} className="text-white fill-white" />
              </div>

              {/* Tap to Scroll Badge */}
              {interacting !== activeDemo && (
                <button 
                  onClick={() => setInteracting(activeDemo)}
                  className="absolute right-3 bottom-3 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-black/5 shadow-md flex items-center gap-1.5 sm:gap-2 min-h-[36px] sm:min-h-[44px] hover:scale-105 transition-transform"
                >
                  <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="font-mono text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-[#111]">TAP TO SCROLL</span>
                  <MousePointer2 size={10} className="text-[#4C1D95] shrink-0" />
                </button>
              )}
              
              {/* Exit Interaction Badge */}
              {interacting === activeDemo && (
                <button
                  onClick={(e) => { e.stopPropagation(); setInteracting(null); }}
                  className="hidden sm:flex absolute top-3 right-3 z-30 bg-[#4C1D95] text-white shadow-xl px-4 py-2 rounded-full font-mono text-[10px] font-extrabold uppercase tracking-widest transition-transform hover:scale-105 items-center gap-1.5"
                >
                  Done ✕
                </button>
              )}
            </div>

            {/* Bottom Footer Frame */}
            <div className="px-3 sm:px-4 py-3 sm:py-4 border-t border-border bg-bg-secondary flex justify-between items-center gap-2">
              <span className="text-[9px] sm:text-[10px] text-text-secondary font-medium truncate max-w-[180px] sm:max-w-full">
                Like this design? We can build it tailored for your brand.
              </span>
              <a 
                href={`https://wa.me/918724932985?text=Hi%20NERQIVA,%20I%20like%20the%20${encodeURIComponent(demo.name)}%20style.%20Can%20you%20build%20something%20similar%20for%20me?`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="shrink-0 font-mono text-[9px] font-extrabold text-[#4C1D95] uppercase tracking-widest flex items-center gap-1 min-h-[32px] sm:min-h-[44px]"
              >
                GET THIS STYLE <ArrowRight size={10} />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );

  return (
    <section className="relative w-full bg-bg-primary overflow-hidden border-b border-border/20">
      <div className="section-container relative z-10 w-full pt-28 pb-12 lg:pt-36 lg:pb-16 px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* ── Left column ─────────────────────────────────────────── */}
          <div className="lg:col-span-6 flex flex-col">

            {/* 1. Nav (Assuming it's global, we skip re-rendering it here, handled in layout) */}
            
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
              className="animate-fade-in-up font-serif font-black text-text-primary text-[2.25rem] sm:text-4xl lg:text-[3.25rem] leading-[1.1] sm:leading-[1.05] tracking-tight mb-2 lg:mb-6"
              style={{ letterSpacing: "-0.02em", animationFillMode: "both" }}
            >
              Your competitors get more clients because they{" "}
              <em className="not-italic text-transparent bg-clip-text bg-linear-to-r from-[#4C1D95] to-[#C9A227] font-black pb-1">
                show up, respond fast, and look credible online.
              </em>
            </h1>

            {/* 4. Layered Demo Card (MOBILE DOM POSITION) */}
            {renderDemoCard(true)}

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

          {/* ── Right column (DESKTOP DOM POSITION) ── */}
          <div className="hidden lg:flex lg:col-span-6 w-full flex-col gap-4 relative justify-center items-center h-full pt-10">
            {renderDemoCard(false)}
            
            {/* Desktop Quick Category Switcher */}
            <div className="flex gap-2 justify-center mt-4 w-full">
              {DEMO_SHOWCASES.map((d) => (
                <button
                  key={d.id}
                  onClick={() => { setActiveDemo(d.id as DemoId); setInteracting(null); }}
                  className={`px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest border transition-all duration-200 cursor-pointer rounded-full min-h-[44px] ${
                    activeDemo === d.id
                      ? "bg-[#4C1D95] text-white border-[#4C1D95] shadow-md shadow-[#4C1D95]/20"
                      : "bg-bg-secondary text-text-secondary border-border hover:border-[#4C1D95]/30 hover:text-text-primary"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
