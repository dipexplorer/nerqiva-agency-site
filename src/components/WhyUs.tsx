"use client";

import { motion } from "framer-motion";
import { Check, Shield, Zap, Smartphone, MessageSquare, Lock } from "lucide-react";

export default function WhyUs() {
 const principles = [
 {
 id: "mobile",
 icon: <Smartphone size={16} className="text-accent" />,
 title: "100% Mobile Phone Tested",
 body: "Over 80% of your clients browse on their phone. We rigorously build and test your website on real mobile viewports so buttons are tap-friendly, text is legible, and pages load instantly.",
 emphasis: "Zero mobile friction"
 },
 {
 id: "ownership",
 icon: <Lock size={16} className="text-accent" />,
 title: "Full Ownership, No Lock-Ins",
 body: "Unlike agencies that trap you in costly monthly maintenance contracts, you own 100% of your website code and assets upon launch. No hidden retainer fees or surprises.",
 emphasis: "100% asset ownership"
 },
 {
 id: "leads",
 icon: <MessageSquare size={16} className="text-accent" />,
 title: "Direct WhatsApp Lead Routing",
 body: "We eliminate long contact forms and email delays. When a client wants to book your service, their pre-formatted inquiry lands directly on your WhatsApp in 1 tap.",
 emphasis: "Instant customer contact"
 }
 ];

 return (
 <section id="about" className="py-16 sm:py-28 bg-transparent relative border-t border-border/30">
 <div className="section-container">
 
 {/* Header */}
 <div className="max-w-2xl mb-16">
 <div className="flex items-center gap-3 mb-4">
 <span className="label-eyebrow">OUR COMMITMENT</span>
 <div className="h-px w-8 bg-accent/30" />
 </div>
 <h2
 className="font-sans font-extrabold text-text-primary leading-[1.08] tracking-tight"
 style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", letterSpacing: "-0.02em" }}
 >
 How we deliver value.
 </h2>
 </div>

 {/* Asymmetric Composition */}
 <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch relative z-10">
 
 {/* Left Column: Featured Principle */}
 <motion.div
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
 className="lg:col-span-5 p-8 md:p-12 card-luxury border border-border/40 flex flex-col justify-between min-h-[380px] bg-bg-card/60 rounded-2xl"
 >
 <div className="flex flex-col">
 <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-widest mb-5 block">
 [Core Principle]
 </span>
 <h3 className="font-sans font-extrabold text-3xl text-text-primary mb-5 leading-tight">
 Client Results First.
 </h3>
 <p className="text-text-secondary text-base leading-relaxed mb-6">
 We don&apos;t confuse you with complex technical jargon. We focus 100% on your business goals — getting more local clients, speeding up booking responses, and building high digital credibility.
 </p>
 </div>
 
 <div className="pt-6 border-t border-border/30 flex items-center gap-2.5">
 <div className="h-4.5 w-4.5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
 <Check size={11} className="text-accent" />
 </div>
 <span className="font-sans font-semibold text-text-primary text-sm italic">
 Simple, transparent, battle-tested.
 </span>
 </div>
 </motion.div>

 {/* Mobile Swipe Hint */}
 <div className="flex lg:hidden items-center text-text-tertiary font-mono text-[10px] tracking-wider uppercase mt-2 -mb-2 px-1">
 <span className="flex items-center gap-1.5">
 <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
 Swipe to view more principles
 </span>
 </div>

 {/* Right Column: Supporting Principles List */}
 <div className="lg:col-span-7 flex lg:flex-col overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none gap-4 lg:gap-5 pb-6 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 no-scrollbar">
 {principles.map((p, index) => (
 <motion.div
 key={p.id}
 initial={{ opacity: 0, y: 12 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: index * 0.08 }}
 className="w-[85vw] lg:w-auto shrink-0 snap-center p-6 md:p-7 card-luxury border border-border/30 hover:border-accent/40 bg-bg-card/60 rounded-xl transition-all duration-200 flex flex-col sm:flex-row gap-4 items-start justify-between"
 >
 <div className="flex gap-4">
 {/* Icon Container */}
 <div className="h-9 w-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5 text-accent">
 {p.icon}
 </div>
 <div>
 <h4 className="font-sans font-bold text-lg text-text-primary mb-1.5">
 {p.title}
 </h4>
 <p className="text-text-secondary text-sm leading-relaxed max-w-xl font-normal">
 {p.body}
 </p>
 </div>
 </div>
 
 <span className="font-mono text-[9px] uppercase tracking-wider text-accent font-bold self-start sm:self-start bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full shrink-0 mt-2 sm:mt-0">
 {p.emphasis}
 </span>
 </motion.div>
 ))}
 </div>

 </div>

 </div>
 </section>
 );
}
