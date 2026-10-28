"use client";

import { motion } from "framer-motion";
import { Lock, Zap, UserCheck, CheckCircle2 } from "lucide-react";

export default function WhyUs() {
  const principles = [
    {
      id: "ownership",
      icon: <Lock size={18} className="text-accent" />,
      title: "Complete Ownership, Zero Lock-In",
      body: "Unlike agencies that hold your site hostage with recurring maintenance retainers, you own 100% of your code, domain DNS, and design assets upon launch. Zero hidden monthly fees.",
      emphasis: "100% Asset Handover",
    },
    {
      id: "speed",
      icon: <Zap size={18} className="text-accent" />,
      title: "Guaranteed 4-Day Sprint",
      body: "No 8-week agency runarounds or endless scope creep. We operate with strict, transparent milestones to take your business from intake to verified live cutover in 4 days.",
      emphasis: "4-Day SLA",
    },
    {
      id: "founder",
      icon: <UserCheck size={18} className="text-accent" />,
      title: "Direct Founder-Led Engineering",
      body: "Collaborate directly with the senior engineer crafting your digital flagship. Zero junior outsourcing, no games of telephone with account managers, and rapid execution.",
      emphasis: "Zero Middlemen",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-bg-primary text-text-primary relative border-t border-border/45 z-10">
      <div className="section-container relative">
        {/* Header: Pure Typographic Authority without Kicker or Rule Ornament */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2
            className="font-serif text-text-primary leading-[1.15] mb-4 tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", letterSpacing: "-0.03em" }}
          >
            Built on principles of ownership and <span className="italic font-normal">accountability</span>.
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-normal">
            Most digital agencies trap clients in recurring maintenance retainers or drag projects out for months. We operate on a fundamentally different standard.
          </p>
        </div>

        {/* Asymmetric Composition: Anchor Card + 3 Supporting Pillars */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch relative z-10">
          {/* Left Column: Featured Anchor Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 p-7 sm:p-10 card-luxury border border-border/70 flex flex-col justify-between min-h-[380px] bg-bg-card rounded-2xl shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-widest px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20">
                  Core Commitment
                </span>
                <span className="font-mono text-xs text-text-tertiary">01</span>
              </div>

              <h3 className="font-sans font-bold text-2xl sm:text-3xl text-text-primary mb-4 leading-tight tracking-tight">
                Client Commercial ROI
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Every layout choice, sub-300ms speed optimization, and direct WhatsApp trigger exists for a single purpose: converting casual local visitors into high-ticket paying clients. We don&apos;t build vanity websites—we build commercial acquisition engines.
              </p>
            </div>

            <div className="pt-6 border-t border-border/40 flex items-center gap-2.5">
              <CheckCircle2 size={15} className="text-accent-gold shrink-0" />
              <span className="font-sans font-medium text-text-primary text-xs sm:text-sm">
                Battle-Tested Commercial Architecture
              </span>
            </div>
          </motion.div>

          {/* Right Column: Supporting Principles Vertical Stack */}
          <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
            {principles.map((p, index) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="p-6 sm:p-7 card-luxury border border-border/70 hover:border-accent/40 bg-bg-card rounded-2xl shadow-xs transition-all duration-200 flex flex-col sm:flex-row gap-4 sm:gap-5 items-start justify-between"
              >
                <div className="flex gap-4">
                  {/* Icon Container */}
                  <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center shrink-0 mt-0.5 text-accent">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-base sm:text-lg text-text-primary mb-1.5 tracking-tight">
                      {p.title}
                    </h4>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed max-w-xl font-normal">
                      {p.body}
                    </p>
                  </div>
                </div>

                <span className="font-mono text-[10px] uppercase tracking-wider text-accent font-semibold self-start sm:self-start bg-accent/10 border border-accent/20 px-3 py-1 rounded-full shrink-0">
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
