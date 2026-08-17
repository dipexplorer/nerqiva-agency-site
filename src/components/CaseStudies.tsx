"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "../data/projects";

export default function CaseStudies() {
  return (
    <section id="work" className="py-32 bg-bg-primary border-t border-border/50">
      <div className="section-container">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="label-eyebrow text-accent">SELECTED WORK</span>
            </div>
            <h2 className="font-sans font-extrabold text-text-primary leading-[1.1] tracking-tight" style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)" }}>
              Engineering for <span className="text-accent">impact.</span>
            </h2>
          </div>
          <p className="text-text-secondary text-base leading-relaxed max-w-sm">
            We don&apos;t just build websites. We design and engineer reliable systems that solve complex business and logistics challenges.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border border-border bg-white rounded-sm overflow-hidden flex flex-col justify-between hover:border-accent/40 hover:shadow-[0_12px_32px_rgba(124,58,237,0.06)] transition-all duration-300"
            >
              <div>
                {/* Visual Header / Accent Gradient */}
                <div className={`w-full h-48 bg-linear-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                  {/* Decorative Blueprint Graph Grid overlay */}
                  <div className="absolute inset-0 opacity-15 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                  
                  {/* Digital system model representation (SVG) */}
                  <svg className="w-16 h-16 text-white/35 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" />
                    <line x1="6" y1="6" x2="6.01" y2="6" />
                    <line x1="6" y1="18" x2="6.01" y2="18" />
                  </svg>

                  {/* Top Badge overlay */}
                  <div className="absolute top-4 left-4 font-mono text-[9px] font-bold uppercase tracking-widest text-white/70 bg-black/35 px-2.5 py-1 rounded-sm backdrop-blur-xs">
                    PROJECT_{project.number}
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-8">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-mono text-[10px] text-accent uppercase tracking-widest font-semibold">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="font-sans font-extrabold text-2xl text-text-primary mb-3 group-hover:text-accent transition-colors duration-200">
                    {project.name}
                  </h3>

                  <p className="text-text-primary font-medium text-sm mb-4 leading-snug">
                    {project.tagline}
                  </p>

                  <div className="mb-6">
                    <span className="font-mono text-[9px] text-text-tertiary uppercase tracking-widest mb-1.5 block font-bold">The Challenge</span>
                    <p className="text-xs text-text-secondary leading-relaxed">{project.challenge}</p>
                  </div>

                  {/* Key System Highlights */}
                  <div className="mb-6 border-t border-border/60 pt-4">
                    <span className="font-mono text-[9px] text-text-tertiary uppercase tracking-widest mb-2 block font-bold">Architecture & Engineering</span>
                    <ul className="flex flex-col gap-1.5">
                      {project.engineering.map((highlight, index) => (
                        <li key={index} className="text-xs text-text-secondary flex items-start gap-2">
                          <span className="text-accent text-[10px] select-none">▹</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Stack Tags */}
              <div className="px-8 pb-8 pt-0 border-t border-border/30 mt-auto flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-sm bg-bg-secondary border border-border font-mono text-[9px] text-text-secondary uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}