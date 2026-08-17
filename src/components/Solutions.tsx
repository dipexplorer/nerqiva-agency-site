"use client";

import { motion } from "framer-motion";
import { SOLUTIONS } from "../data/solutions";

export default function Solutions() {
  return (
    <section className="py-24 bg-bg-primary border-t border-border/50">
      <div className="section-container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="label-eyebrow text-accent">OUR SOLUTIONS</span>
            </div>
            <h2 className="font-sans font-extrabold text-text-primary leading-[1.1] tracking-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Digital solutions<br />that move your<br />business <span className="text-accent">forward.</span>
            </h2>
          </div>
          <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
            We build performant interfaces and backends, leveraging modern tools to deliver tangible business efficiency.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTIONS.map((s, index) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 border border-border/60 rounded-sm bg-bg-card hover:border-accent hover:shadow-[0_8px_32px_rgba(124,58,237,0.04)] transition-all duration-300 flex flex-col justify-between min-h-[300px]"
            >
              <div>
                {/* Number Accent */}
                <div className="font-mono text-xs font-bold text-accent mb-6 select-none opacity-80">
                  {s.number}
                </div>
                
                {/* Title */}
                <h3 className="font-sans font-bold text-lg text-text-primary mb-3 group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                
                {/* Description */}
                <p className="text-text-secondary text-xs leading-relaxed mb-6">
                  {s.body}
                </p>
              </div>

              {/* Service tags list */}
              <div>
                <div className="h-px bg-border/40 w-full mb-4" />
                <div className="flex flex-wrap gap-1.5">
                  {s.examples.slice(0, 2).map((ex) => (
                    <span key={ex} className="px-2 py-0.5 rounded-full bg-bg-secondary font-mono text-[9px] text-text-secondary">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}