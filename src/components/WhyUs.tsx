"use client";

import { motion } from "framer-motion";

const PRINCIPLES = [
  {
    number: "01",
    title: "Problem First",
    body: "We don't start with technology. We start with what needs to change. The right solution follows from a clear understanding of the actual problem — not from a preference for any particular stack or approach.",
    emphasis: "Understand before proposing.",
  },
  {
    number: "02",
    title: "Engineering Depth",
    body: "Interfaces are only one layer. We can engineer the systems behind them — databases, APIs, pipelines, integrations, and the architecture that makes a product actually work under real conditions.",
    emphasis: "Built to last, not just to demo.",
  },
  {
    number: "03",
    title: "AI Where It Matters",
    body: "AI is used when it creates actual leverage — not because it sounds impressive. We integrate LLMs, semantic search, and machine learning where they solve problems that simpler approaches cannot.",
    emphasis: "Utility over trend.",
  },
  {
    number: "04",
    title: "Built to Evolve",
    body: "Every system we build is designed for version two. Clean architecture, documented decisions, and extensible code mean the solution can grow alongside your business without needing to be rebuilt.",
    emphasis: "Systems, not just deliverables.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-32 bg-bg-secondary">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-accent" />
            <span className="label-eyebrow text-accent">Why NERQIVA</span>
          </div>
          <h2
            className="font-sans font-extrabold text-text-primary leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            How we think.
          </h2>
        </div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="border border-border bg-white rounded-sm p-8 md:p-10 group hover:border-accent/20 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-[11px] font-semibold text-accent tracking-widest">
                  {p.number}
                </span>
                <div className="h-px w-12 bg-border mt-3 group-hover:w-20 group-hover:bg-accent/30 transition-all duration-400" />
              </div>

              <h3 className="font-sans font-extrabold text-2xl text-text-primary mb-4">
                {p.title}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed mb-5">
                {p.body}
              </p>

              <div className="flex items-center gap-2 pt-4 border-t border-border">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="font-sans font-medium text-text-primary text-sm italic">
                  {p.emphasis}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
