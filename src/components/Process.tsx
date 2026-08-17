"use client";

import { motion } from "framer-motion";

const PHASES = [
  {
    num: "01",
    title: "DISCOVER",
    desc: "Understand your business, users and challenges.",
    iconPath: "M12 2v20m10-10H2", 
  },
  {
    num: "02",
    title: "DEFINE",
    desc: "Plan the right strategy and solution.",
    iconPath: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z", 
  },
  {
    num: "03",
    title: "DESIGN",
    desc: "Create intuitive experiences that deliver value.",
    iconPath: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z", 
  },
  {
    num: "04",
    title: "BUILD",
    desc: "Engineer scalable, secure and high performance systems.",
    iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", 
  },
  {
    num: "05",
    title: "LAUNCH",
    desc: "Deploy, monitor and optimize for impact.",
    iconPath: "M13 10V3L4 14h7v7l9-11h-7z", 
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-bg-primary overflow-hidden border-t border-border/50">
      <div className="section-container relative">
        
        {/* Header Block */}
        <div className="max-w-md mb-20 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="label-eyebrow text-accent">OUR PROCESS</span>
          </div>
          <h2 className="font-sans font-extrabold text-text-primary leading-[1.1] mb-4" style={{ fontSize: "clamp(2rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em" }}>
            A process built for <span className="text-accent">clarity</span> and results.
          </h2>
          <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
            We follow a proven process that turns ideas into measurable digital outcomes.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative w-full mt-12 pb-12">
          {/* Connector Line */}
          <div className="absolute top-[60px] left-0 w-full h-px bg-border/60 z-0 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative z-10">
            {PHASES.map((phase, i) => (
              <motion.div
                key={phase.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center md:items-start text-center md:text-left group"
              >
                {/* 3D Glass Pedestal & Icon */}
                <div className="relative w-32 h-32 mb-8 flex items-center justify-center mx-auto md:mx-0">
                  {/* Pedestal Base */}
                  <div className="absolute bottom-0 w-[100px] h-[30px] rounded-[100%] bg-linear-to-b from-white/10 to-transparent border border-white/10 shadow-[0_10px_20px_rgba(124,58,237,0.05)] backdrop-blur-sm z-10" />
                  
                  {/* Floating Icon */}
                  <div className="relative z-20 w-12 h-12 bg-linear-to-br from-accent to-purple-800 rounded-xl shadow-[0_8px_16px_rgba(124,58,237,0.3)] flex items-center justify-center text-white transform group-hover:-translate-y-3 group-hover:scale-110 group-hover:shadow-[0_15px_25px_rgba(124,58,237,0.4)] transition-all duration-500 ease-out">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <path d={phase.iconPath} />
                    </svg>
                  </div>
                </div>

                {/* Text Content */}
                <div className="px-2 md:px-0">
                  <span className="font-mono text-[10px] text-text-tertiary font-bold mb-2 block">{phase.num}</span>
                  <h3 className="font-sans font-bold text-sm text-text-primary mb-2 group-hover:text-accent transition-colors">{phase.title}</h3>
                  <p className="text-text-secondary text-[11px] leading-relaxed max-w-[200px]">
                    {phase.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}