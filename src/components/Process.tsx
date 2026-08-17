"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "../data/process";

export default function Process() {
  return (
    <section id="process" className="py-24 bg-bg-secondary border-t border-border/50">
      <div className="section-container relative">
        
        {/* Header Block */}
        <div className="max-w-md mb-20 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="label-eyebrow text-accent">OUR PROCESS</span>
          </div>
          <h2 className="font-sans font-extrabold text-text-primary leading-[1.1] mb-4 tracking-tight" style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)" }}>
            A process built for <span className="text-accent">clarity</span> and results.
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
            We follow a structured roadmap designed to align objectives, speed up iteration, and verify production quality.
          </p>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative w-full mt-12 pb-12 overflow-x-auto scrollbar-none">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-[60px] left-0 w-full h-[2px] bg-border/60 z-0 hidden lg:block" />
          
          <div className="flex lg:grid lg:grid-cols-6 gap-8 min-w-[1000px] lg:min-w-0 relative z-10">
            {PROCESS_STEPS.map((phase, i) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 flex flex-col items-start group"
              >
                {/* Visual Step Node */}
                <div className="relative w-full h-32 flex items-center justify-start">
                  
                  {/* Glowing Node Hub */}
                  <div className="relative z-20 w-12 h-12 bg-white border border-border rounded-full shadow-sm flex items-center justify-center text-text-secondary group-hover:border-accent group-hover:text-accent group-hover:shadow-[0_8px_24px_rgba(124,58,237,0.15)] group-hover:-translate-y-1 transition-all duration-300">
                    <span className="font-mono text-xs font-bold">
                      {phase.number}
                    </span>
                  </div>

                  {/* Horizontal visual line snippet inside node spacing */}
                  <div className="absolute left-12 right-0 h-px border-t border-dashed border-border/80 z-10 hidden lg:block group-last:hidden" />
                </div>

                {/* Text Content */}
                <div className="mt-4 pr-4">
                  <h3 className="font-sans font-bold text-base text-text-primary mb-2 group-hover:text-accent transition-colors">
                    {phase.title}
                  </h3>
                  <p className="font-mono text-[9px] text-accent uppercase tracking-widest mb-3 block">
                    {phase.tagline}
                  </p>
                  <p className="text-text-secondary text-xs leading-relaxed max-w-[240px]">
                    {phase.description}
                  </p>
                  
                  {/* Detailed features bullet indicators */}
                  <div className="mt-4 flex flex-col gap-1">
                    {phase.details.slice(0, 2).map((det, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[10px] text-text-tertiary">
                        <span className="h-1 w-1 bg-accent/60 rounded-full shrink-0" />
                        {det}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}