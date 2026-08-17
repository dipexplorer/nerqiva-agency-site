"use client";

import { motion } from "framer-motion";
import { Check, Shield, Zap, Code } from "lucide-react";

export default function WhyUs() {
  const principles = [
    {
      id: "depth",
      icon: <Code size={16} className="text-accent" />,
      title: "Engineering Depth",
      body: "We focus on the systems behind the interface — custom schemas, optimized queries, secure webhooks, and background workers built to run reliably under load.",
      emphasis: "Systems over mere mockups."
    },
    {
      id: "ai",
      icon: <Zap size={16} className="text-accent" />,
      title: "AI Where It Matters",
      body: "AI is integrated where it creates clear business leverage, not as a decorative chatbot or marketing feature. Utility always comes before hype.",
      emphasis: "Utility over hype."
    },
    {
      id: "evolve",
      icon: <Shield size={16} className="text-accent" />,
      title: "Built to Evolve",
      body: "Every system is documented and structured for extensibility. Your codebase remains simple, clean, and ready to evolve as your business scales.",
      emphasis: "Clean, maintainable source code."
    }
  ];

  return (
    <section id="about" className="py-32 bg-transparent relative border-t border-border/30">
      <div className="section-container">
        
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-5">
            <span className="label-eyebrow">OUR PHILOSOPHY</span>
            <div className="h-[1px] w-8 bg-accent/30" />
          </div>
          <h2
            className="font-sans font-extrabold text-text-primary leading-[1.08] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", letterSpacing: "-0.02em" }}
          >
            How we think.
          </h2>
        </div>

        {/* Asymmetric Composition to Break Card Fatigue */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch relative z-10">
          
          {/* Left Column: Featured Principle (Large Focus) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 p-8 md:p-12 glass-panel border border-border/40 flex flex-col justify-between min-h-[400px] bg-accent/[0.02]"
            style={{ borderRadius: "4px" }}
          >
            <div className="flex flex-col">
              <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-widest mb-6 block">
                [Core Principle]
              </span>
              <h3 className="font-sans font-extrabold text-3xl text-text-primary mb-6 leading-tight">
                Problem First.
              </h3>
              <p className="text-text-secondary text-base leading-relaxed mb-6">
                We do not start with a tech stack. We start with the operational bottleneck. The correct solution is designed around the actual problem, keeping complexity to an absolute minimum.
              </p>
            </div>
            
            <div className="pt-6 border-t border-border/30 flex items-center gap-2.5">
              <div className="h-4 w-4 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                <Check size={9} className="text-accent" />
              </div>
              <span className="font-sans font-semibold text-text-primary text-sm italic">
                Understand before engineering.
              </span>
            </div>
          </motion.div>

          {/* Right Column: Supporting Principles List */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {principles.map((p, index) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 md:p-8 border border-border/30 hover:border-accent/40 bg-bg-card/25 transition-all duration-200 flex flex-col sm:flex-row gap-5 items-start justify-between"
                style={{ borderRadius: "4px" }}
              >
                <div className="flex gap-4">
                  {/* Icon Container */}
                  <div className="h-8 w-8 rounded-[3px] bg-accent/5 border border-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-lg text-text-primary mb-2">
                      {p.title}
                    </h4>
                    <p className="text-text-secondary text-sm leading-relaxed max-w-xl">
                      {p.body}
                    </p>
                  </div>
                </div>
                
                <span className="font-mono text-[9px] uppercase tracking-wider text-text-tertiary self-end sm:self-start bg-bg-secondary px-2.5 py-1 rounded-[2px]">
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
