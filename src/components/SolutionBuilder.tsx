"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, MessageSquare, MapPin, RefreshCw, Sparkles, CheckCircle2 } from "lucide-react";

const WHAT_WE_BUILD = [
 {
 id: "website",
 label: "A website that converts",
 badge: "24-Hour Launch",
 icon: Globe,
 outcome: "A professional website that loads fast, looks great on mobile, and turns visitors into paying customers.",
 forWho: "Best for: Salons, studios, clinics, boutiques, photographers",
 includes: [
 "Designed to match your brand and quality of work",
 "Fast on mobile — no lag, no zooming, no tiny buttons",
 "WhatsApp booking button so clients can reach you in one tap",
 "Google-ready so you show up in local searches",
 ],
 price: "One-time investment. No monthly fees.",
 cta: "Tell me about my website"
 },
 {
 id: "whatsapp",
 label: "WhatsApp lead automation",
 badge: "Instant Alerts",
 icon: MessageSquare,
 outcome: "Never miss an inquiry again. When someone fills your form, you get a WhatsApp message instantly — even at midnight.",
 forWho: "Best for: Busy business owners who can't always reply immediately",
 includes: [
 "Instant WhatsApp alert the moment someone inquires",
 "Auto-reply sent to the customer so they know you received it",
 "Their details (name, service, date) formatted and ready in your chat",
 "Works on top of any website — existing or new",
 ],
 price: "Add-on to any website package.",
 cta: "Stop missing inquiries"
 },
 {
 id: "google",
 label: "Google & Maps visibility",
 badge: "Local SEO",
 icon: MapPin,
 outcome: "Get found when people in your city search for the service you offer — on Google Search and Google Maps.",
 forWho: "Best for: Businesses that rely on local walk-in or discovery clients",
 includes: [
 "Google Business Profile set up or optimised",
 "Maps listing with correct address, hours, and photos",
 "Website pages written to rank for local search terms",
 "Basic review strategy to build social proof over time",
 ],
 price: "One-time setup. You own it permanently.",
 cta: "Get found on Google"
 },
 {
 id: "refresh",
 label: "Old website refresh",
 badge: "Speed & Mobile Fix",
 icon: RefreshCw,
 outcome: "If your website exists but embarrasses you when you send clients to it — we fix that without rebuilding from scratch.",
 forWho: "Best for: Businesses with an existing site that looks outdated or performs poorly on mobile",
 includes: [
 "Mobile experience fixed — layout, buttons, text size",
 "Speed improvements so it loads in under 2 seconds",
 "Updated copy and visuals to match your current work",
 "WhatsApp CTA added so visitors can contact you easily",
 ],
 price: "Flat fee. Faster turnaround than a full build.",
 cta: "Refresh my existing site"
 }
];

export default function SolutionBuilder() {
 const [selected, setSelected] = useState<string>("website");
 const active = WHAT_WE_BUILD.find((o) => o.id === selected) || WHAT_WE_BUILD[0];
 const ActiveIcon = active.icon;

 return (
 <section id="solutions" className="py-16 sm:py-24 bg-transparent relative border-t border-border/30">
 <div className="section-container">
 
 {/* Header */}
 <div className="max-w-2xl mb-12">
 <div className="flex items-center gap-3 mb-4">
 <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent flex items-center gap-1.5">
 <Sparkles size={12} />
 Interactive Solution Selector
 </span>
 </div>
 <h2
 className="font-sans font-extrabold text-text-primary leading-[1.08] tracking-tight"
 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
 >
 Pick what you need.
 </h2>
 <p className="text-text-secondary text-base leading-relaxed mt-3 max-w-lg">
 Not every business needs the same thing. Select a solution tab below to inspect exact inclusions and guaranteed outcomes.
 </p>
 </div>

 {/* Mobile Swipe/Tap Hint */}
 <div className="flex md:hidden items-center text-text-tertiary font-mono text-[10px] tracking-wider uppercase mt-4 mb-4 px-1">
 <span className="flex items-center gap-1.5">
 <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
 Tap a solution to view details
 </span>
 </div>

 {/* Desktop Tabs / Mobile Accordion Container */}
 <div className="flex flex-col md:block">
 
 {/* Desktop Selector Tabs */}
 <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10 relative z-10">
 {WHAT_WE_BUILD.map((opt) => {
 const isActive = selected === opt.id;
 const IconComponent = opt.icon;
 return (
 <button
 key={opt.id}
 onClick={() => setSelected(opt.id)}
 className={`p-4 text-left transition-all duration-200 border cursor-pointer rounded-xl flex flex-col justify-between group relative overflow-hidden ${
 isActive
 ? "bg-accent text-text-inverted border-accent shadow-lg shadow-accent/20 scale-[1.02]"
 : "bg-bg-card text-text-secondary border-border hover:border-accent/50 hover:text-text-primary hover:bg-bg-secondary/60"
 }`}
 >
 <div className="flex items-center justify-between gap-2 mb-3">
 <div className={`p-2 rounded-lg transition-colors ${
 isActive
 ? "bg-white/15 text-text-inverted"
 : "bg-bg-secondary text-accent group-hover:bg-accent/10"
 }`}>
 <IconComponent size={18} />
 </div>
 <span className={`font-mono text-[8px] uppercase tracking-widest px-2 py-0.5 rounded font-bold border ${
 isActive
 ? "bg-white/20 text-text-inverted border-white/30"
 : "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
 }`}>
 {opt.badge}
 </span>
 </div>
 <div>
 <span className="font-sans text-sm font-extrabold leading-tight block">
 {opt.label}
 </span>
 </div>
 </button>
 );
 })}
 </div>

 {/* Desktop Detail Panel */}
 <div className="hidden md:block">
 <AnimatePresence mode="wait">
 <motion.div
 key={active.id}
 initial={{ opacity: 0, y: 8 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -8 }}
 transition={{ duration: 0.22 }}
 className="grid md:grid-cols-2 gap-0 border border-border card-luxury bg-bg-card overflow-hidden shadow-2xl rounded-2xl"
 >
 {/* Left: Outcome description */}
 <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-border/60 flex flex-col justify-between">
 <div>
 <div className="flex items-center gap-2 mb-3">
 <div className="p-1.5 rounded-md bg-accent/10 text-accent">
 <ActiveIcon size={14} />
 </div>
 <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-tertiary">
 {active.forWho}
 </span>
 </div>
 <h3 className="font-sans text-text-primary text-xl font-bold leading-snug mb-4">
 {active.outcome}
 </h3>
 <p className="font-sans text-sm font-bold text-accent mt-2">
 {active.price}
 </p>
 </div>

 <div className="mt-8">
 <a
 href={`https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'm%20interested%20in:%20${encodeURIComponent(active.label)}`}
 target="_blank"
 rel="noopener noreferrer"
 className="btn-primary w-full"
 >
 <span>{active.cta}</span>
 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
 </a>
 <p className="text-center font-mono text-[9px] text-text-tertiary mt-2.5 tracking-wider font-semibold">
 Opens WhatsApp — no forms, no waiting
 </p>
 </div>
 </div>

 {/* Right: What's included */}
 <div className="p-8 md:p-10 bg-bg-secondary/40">
 <div className="flex items-center justify-between mb-5 border-b border-border/20 pb-3">
 <span className="font-sans text-xs font-bold text-text-primary uppercase tracking-wide">
 What's included in this package:
 </span>
 <span className="font-mono text-[8px] text-emerald-600 font-extrabold uppercase bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
 Guaranteed Deliverables
 </span>
 </div>
 <div className="flex flex-col gap-4">
 {active.includes.map((item, i) => (
 <div key={i} className="flex items-start gap-3">
 <div className="shrink-0 h-5 w-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mt-0.5 text-emerald-500">
 <CheckCircle2 size={13} />
 </div>
 <span className="font-sans text-sm text-text-secondary leading-normal font-medium">
 {item}
 </span>
 </div>
 ))}
 </div>
 </div>
 </motion.div>
 </AnimatePresence>
 </div>

 {/* Mobile Accordion */}
 <div className="md:hidden flex flex-col gap-3">
 {WHAT_WE_BUILD.map((opt) => {
 const isActive = selected === opt.id;
 const IconComponent = opt.icon;
 return (
 <div key={opt.id} className="flex flex-col">
 {/* Accordion Header */}
 <button
 onClick={() => setSelected(isActive ? "" : opt.id)}
 className={`p-4 text-left transition-all duration-200 border cursor-pointer flex items-center justify-between group relative overflow-hidden ${
 isActive
 ? "bg-accent text-text-inverted border-accent shadow-lg shadow-accent/20 rounded-t-xl"
 : "bg-bg-card text-text-secondary border-border hover:border-accent/50 hover:text-text-primary hover:bg-bg-secondary/60 rounded-xl"
 }`}
 >
 <div className="flex items-center gap-3">
 <div className={`p-2 rounded-lg transition-colors ${
 isActive
 ? "bg-white/15 text-text-inverted"
 : "bg-bg-secondary text-accent group-hover:bg-accent/10"
 }`}>
 <IconComponent size={18} />
 </div>
 <span className="font-sans text-sm font-extrabold leading-tight block">
 {opt.label}
 </span>
 </div>
 <span className={`font-mono text-[8px] uppercase tracking-widest px-2 py-0.5 rounded font-bold border shrink-0 ${
 isActive
 ? "bg-white/20 text-text-inverted border-white/30"
 : "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
 }`}>
 {opt.badge}
 </span>
 </button>

 {/* Accordion Content */}
 <AnimatePresence>
 {isActive && (
 <motion.div
 initial={{ opacity: 0, height: 0 }}
 animate={{ opacity: 1, height: "auto" }}
 exit={{ opacity: 0, height: 0 }}
 transition={{ duration: 0.3, ease: "easeInOut" }}
 className="overflow-hidden border border-t-0 border-accent/20 rounded-b-xl shadow-lg shadow-accent/5"
 >
 <div className="card-luxury bg-bg-card flex flex-col">
 
 {/* Outcome description */}
 <div className="p-5 sm:p-6 border-b border-border/60">
 <div className="flex items-center gap-2 mb-3">
 <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-text-tertiary">
 {opt.forWho}
 </span>
 </div>
 <h3 className="font-sans text-text-primary text-lg font-bold leading-snug mb-3">
 {opt.outcome}
 </h3>
 <p className="font-sans text-xs font-bold text-accent mb-5">
 {opt.price}
 </p>
 <a
 href={`https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'm%20interested%20in:%20${encodeURIComponent(opt.label)}`}
 target="_blank"
 rel="noopener noreferrer"
 className="btn-primary w-full text-xs py-3"
 >
 <span>{opt.cta}</span>
 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
 </a>
 </div>

 {/* What's included */}
 <div className="p-5 sm:p-6 bg-bg-secondary/40">
 <div className="flex flex-col gap-3">
 {opt.includes.map((item, i) => (
 <div key={i} className="flex items-start gap-2.5">
 <div className="shrink-0 h-4 w-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mt-0.5 text-emerald-500">
 <CheckCircle2 size={10} />
 </div>
 <span className="font-sans text-xs text-text-secondary leading-normal font-medium">
 {item}
 </span>
 </div>
 ))}
 </div>
 </div>

 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 );
 })}
 </div>
 </div>

 </div>
 </section>
 );
}
