"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Sparkles, Smartphone, Zap } from "lucide-react";
import { PROJECTS } from "../data/projects";

const CATEGORIES = ["ALL", "Beauty & Bridal", "Photography Studio", "Fitness & Wellness"];

export default function CaseStudies() {
 const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
 const [activeIframeId, setActiveIframeId] = useState<string | null>(null);

 const filteredProjects = PROJECTS.filter((p) => {
 if (selectedCategory === "ALL") return p.featured;
 return p.category === selectedCategory || p.type.includes(selectedCategory);
 });

 return (
 <section id="case-studies" className="py-16 sm:py-28 bg-transparent border-t border-border/30 relative">
 {/* Background Ambient Glow */}
 <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 blur-[160px] pointer-events-none rounded-full" />

 <div className="section-container relative z-10">
 
 {/* Section Header */}
 <div className="grid md:grid-cols-12 gap-8 mb-16 items-end">
 <div className="md:col-span-7">
 <div className="flex items-center gap-3 mb-4">
 <span className="px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.2em] bg-accent/10 border border-accent/20 text-accent rounded">
 CLIENT FLAGSHIPS & PROOF OF WORK
 </span>
 <div className="h-px w-8 bg-accent/30 hidden sm:block" />
 </div>
 <h2 className="font-sans font-extrabold text-text-primary leading-[1.08] tracking-tight" style={{ fontSize: "clamp(2.2rem, 4.2vw, 3.4rem)" }}>
 High-Ticket Implementations & <span className="text-accent font-black">Digital Flagships.</span>
 </h2>
 </div>
 <div className="md:col-span-5">
 <p className="text-text-secondary text-base leading-relaxed">
 Explore our live bespoke builds engineered for luxury MUAs, photographers, and studios. Each system includes sub-300ms speed, 1-click WhatsApp lead routing, and custom visual identity.
 </p>
 </div>
 </div>

 {/* Category Filters - Horizontal Scroll on Mobile */}
 <div className="flex overflow-x-auto no-scrollbar gap-2.5 mb-8 sm:mb-12 border-b border-border/20 pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
 {CATEGORIES.map((cat) => (
 <button
 key={cat}
 onClick={() => setSelectedCategory(cat)}
 className={`whitespace-nowrap shrink-0 px-4 py-2 font-mono text-[11px] uppercase tracking-widest font-bold border transition-all duration-200 cursor-pointer rounded-full ${
 selectedCategory === cat
 ? "bg-accent text-text-inverted border-accent shadow-md"
 : "bg-bg-secondary text-text-secondary border-border hover:border-accent/40 hover:text-text-primary"
 }`}
 >
 {cat === "ALL" ? "All Flagships" : cat}
 </button>
 ))}
 </div>

 {/* Mobile Swipe Hint */}
 <div className="flex sm:hidden items-center justify-between text-text-tertiary font-mono text-[10px] tracking-wider uppercase mb-3 px-1">
 <span className="flex items-center gap-1.5">
 <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
 Swipe Projects Left/Right
 </span>
 <span>{filteredProjects.length} Flagships</span>
 </div>

 {/* Project Cards Grid (Desktop) / Horizontal Swipeable Snap-Carousel (Mobile) */}
 <div className="flex sm:grid overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none no-scrollbar grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 sm:pb-0">
 <AnimatePresence mode="popLayout">
 {filteredProjects.map((project, i) => (
 <motion.div
 key={project.id}
 layout
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, scale: 0.96 }}
 transition={{ duration: 0.4, delay: i * 0.08 }}
 className="w-[85vw] sm:w-full shrink-0 snap-center group relative card-luxury overflow-hidden flex flex-col justify-between border border-border hover:border-accent/50 hover:shadow-2xl transition-all duration-300 rounded-2xl bg-bg-card"
 onMouseLeave={() => setActiveIframeId(null)}
 >
 <div>
 {/* Interactive Live Viewport Frame */}
 {project.demoUrl ? (
 <div className="w-full h-56 sm:h-72 bg-bg-secondary relative overflow-hidden border-b border-border/60">
 {/* Live Iframe */}
 <iframe
 src={project.demoUrl}
 title={`${project.name} Live Flagship Preview`}
 className={`absolute inset-0 w-full h-full border-none bg-white transition-all duration-300 ${
 activeIframeId === project.id ? "pointer-events-auto opacity-100 z-10" : "pointer-events-none opacity-100 z-0"
 }`}
 sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
 loading="lazy"
 />

 {/* Glass Overlay for Desktop Live Scroll */}
 {activeIframeId !== project.id && (
 <div className="absolute inset-0 bg-black/10 hover:bg-black/5 dark:hover:bg-black/20 backdrop-blur-[1.5px] transition-all duration-300 flex flex-col items-center justify-end pb-4 sm:pb-6 px-4 sm:px-6 text-center z-20 group/overlay select-none">
 {/* Mobile Direct Tap Button */}
 <a
 href={project.demoUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="sm:hidden bg-bg-primary/95 text-text-primary px-4 py-2 font-mono text-[10px] font-extrabold uppercase tracking-widest border border-border/90 shadow-xl rounded-full flex items-center gap-2"
 >
 <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
 <span>Open Live Demo ↗</span>
 </a>

 {/* Desktop Hover / Scroll Button */}
 <div
 onClick={() => setActiveIframeId(project.id)}
 className="hidden sm:flex bg-bg-primary/95 text-text-primary px-6 py-3 font-mono text-[11px] font-extrabold uppercase tracking-widest border border-border/90 shadow-2xl backdrop-blur-2xl rounded-full group-hover/overlay:scale-105 transition-all duration-200 items-center gap-2.5 cursor-pointer"
 >
 <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
 <span>Tap to Scroll Live Site</span>
 <Sparkles size={13} className="text-amber-500 shrink-0" />
 </div>
 </div>
 )}

 {/* Active Mode Exit Button */}
 {activeIframeId === project.id && (
 <button
 onClick={(e) => { e.stopPropagation(); setActiveIframeId(null); }}
 className="absolute top-3 right-3 z-30 bg-zinc-900/90 hover:bg-zinc-900 text-white px-4 py-2 rounded-full shadow-2xl font-mono text-[10px] font-extrabold uppercase tracking-widest cursor-pointer border border-zinc-700 backdrop-blur-md transition-all flex items-center gap-1.5"
 >
 Done scrolling ✕
 </button>
 )}

 {/* Top Badges */}
 <div className="absolute top-3 sm:top-4 left-3 sm:left-4 font-mono text-[9px] font-bold uppercase tracking-widest text-white/90 bg-black/70 border border-white/10 px-2 sm:px-2.5 py-1 rounded backdrop-blur-md pointer-events-none z-30 flex items-center gap-1.5">
 <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
 FLAGSHIP_{project.number}
 </div>

 <div className="absolute top-3 sm:top-4 right-3 sm:right-4 font-mono text-[9px] font-bold uppercase tracking-widest text-white/90 bg-black/70 border border-white/10 px-2 sm:px-2.5 py-1 rounded backdrop-blur-md pointer-events-none z-30">
 {project.category}
 </div>
 </div>
 ) : (
 <div className={`w-full h-48 sm:h-56 bg-linear-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center border-b border-border/40`}>
 <div className="absolute top-4 left-4 font-mono text-[9px] font-bold uppercase tracking-widest text-white/80 bg-black/50 border border-white/10 px-2.5 py-1 rounded backdrop-blur-md">
 FLAGSHIP_{project.number}
 </div>
 </div>
 )}

 {/* Content Block */}
 <div className="p-5 sm:p-7">
 <div className="flex flex-wrap items-center justify-between gap-2 mb-2 sm:mb-3">
 <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest px-2 py-0.5 sm:px-2.5 sm:py-1 rounded font-bold border bg-accent/10 text-accent border-accent/20">
 BESPOKE DIGITAL SYSTEM
 </span>
 <div className="flex items-center gap-1.5 text-emerald-600 font-mono text-[8px] sm:text-[9px] font-bold tracking-widest">
 <Zap size={10} />
 <span>SUB-300MS LATENCY</span>
 </div>
 </div>

 <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-text-primary mb-2 group-hover:text-accent transition-colors duration-200">
 {project.demoUrl ? (
 <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
 {project.name}
 <ExternalLink size={16} className="text-text-tertiary group-hover:text-accent transition-colors" />
 </a>
 ) : (
 <Link href={`/work/${project.slug}`}>
 {project.name}
 </Link>
 )}
 </h3>

 <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 font-normal line-clamp-2">
 {project.tagline}
 </p>

 </div>
 </div>

 {/* Card Action Footer */}
 <div className="px-5 sm:px-7 pb-5 sm:pb-7 pt-0 border-t border-border/20 mt-auto">
 <div className="flex items-center justify-between pt-3 sm:pt-4">
 <div className="flex items-center gap-1.5 text-text-tertiary font-mono text-[8px] sm:text-[9px] tracking-wider uppercase font-semibold">
 <Smartphone size={12} className="text-accent" />
 <span>100% Mobile Conversion</span>
 </div>

 {project.demoUrl ? (
 <a 
 href={project.demoUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-accent hover:text-text-primary font-mono uppercase tracking-widest font-bold transition-colors group/link"
 >
 <span>Launch Live Flagship</span>
 <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
 </a>
 ) : (
 <Link 
 href={`/work/${project.slug}`}
 className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-accent hover:text-text-primary font-mono uppercase tracking-widest font-bold transition-colors group/link"
 >
 <span>View Details</span>
 <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
 </Link>
 )}
 </div>
 </div>
 </motion.div>
 ))}
 </AnimatePresence>
 </div>

 </div>
 </section>
 );
}