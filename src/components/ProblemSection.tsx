"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROBLEMS = [
  {
    id: "presence",
    label: "Outdated Digital Presence",
    detail:
      "Your website was built years ago and no longer reflects who you actually are or what you can do.",
  },
  {
    id: "journey",
    label: "Confusing User Journey",
    detail:
      "Visitors land on your product but can't figure out what it does or why it matters to them.",
  },
  {
    id: "mobile",
    label: "Poor Mobile Experience",
    detail:
      "More than 60% of your visitors are on mobile. If that experience is broken, so is your funnel.",
  },
  {
    id: "manual",
    label: "Manual Workflows",
    detail:
      "Your team spends hours on repetitive tasks that should be automated or handled by a system.",
  },
  {
    id: "disconnected",
    label: "Disconnected Tools",
    detail:
      "Your CRM doesn't talk to your forms. Your forms don't talk to your email. Nothing connects.",
  },
  {
    id: "slow",
    label: "Slow Processes",
    detail:
      "Bottlenecks that slow decisions, approvals, or delivery are costing you time and credibility.",
  },
  {
    id: "conversion",
    label: "Weak Conversion Paths",
    detail:
      "Traffic exists but doesn't convert. The path from interest to action is unclear or broken.",
  },
];

export default function ProblemSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="problems" className="py-32 bg-bg-primary">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-accent" />
            <span className="label-eyebrow text-accent">Common Problems</span>
          </div>
          <h2
            className="font-sans font-extrabold text-text-primary leading-[1.1] mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Most digital problems aren&apos;t technology problems.
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            They are <em className="text-text-primary not-italic font-semibold">clarity problems.</em>{" "}
            Hover over what sounds familiar.
          </p>
        </div>

        {/* Problem nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {PROBLEMS.map((problem, i) => (
            <motion.div
              key={problem.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              onMouseEnter={() => setActiveId(problem.id)}
              onMouseLeave={() => setActiveId(null)}
              onClick={() =>
                setActiveId(activeId === problem.id ? null : problem.id)
              }
              className={`relative rounded-sm border cursor-default overflow-hidden transition-all duration-300 ${
                activeId === problem.id
                  ? "border-accent/40 bg-white shadow-lg"
                  : "border-border bg-white/60 hover:border-accent/20 hover:bg-white"
              }`}
            >
              <div className="p-6">
                {/* Node indicator */}
                <div className="flex items-center gap-2.5 mb-4">
                  <div
                    className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                      activeId === problem.id ? "bg-accent" : "bg-border"
                    }`}
                    style={
                      activeId === problem.id
                        ? { boxShadow: "0 0 8px rgba(124,58,237,0.5)" }
                        : {}
                    }
                  />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="font-sans font-semibold text-text-primary text-sm leading-snug mb-3">
                  {problem.label}
                </p>

                <AnimatePresence>
                  {activeId === problem.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-text-secondary text-xs leading-relaxed overflow-hidden"
                    >
                      {problem.detail}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Accent bar */}
              <div
                className="absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300"
                style={{ width: activeId === problem.id ? "100%" : "0%" }}
              />
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: PROBLEMS.length * 0.07 }}
            className="relative rounded-sm border border-accent/30 bg-accent/5 p-6 flex flex-col justify-between group hover:bg-accent/10 transition-colors cursor-pointer"
          >
            <div>
              <div className="h-2 w-2 rounded-full bg-accent mb-4" style={{ boxShadow: "0 0 8px rgba(124,58,237,0.5)" }} />
              <p className="font-sans font-semibold text-text-primary text-sm mb-2">
                Something else?
              </p>
              <p className="text-text-secondary text-xs leading-relaxed">
                Every problem is unique. Tell us what you&apos;re dealing with.
              </p>
            </div>
            <span className="mt-4 font-mono text-[10px] uppercase tracking-widest text-accent group-hover:gap-3 flex items-center gap-2 transition-all">
              Talk to us <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
