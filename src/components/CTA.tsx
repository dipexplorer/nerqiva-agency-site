"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTA() {
  return (
    <section id="contact" className="relative py-40 overflow-hidden bg-black flex items-center justify-center min-h-[80vh]">
      {/* 3D Cosmic Swirl Background */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen">
        <Image 
          src="/images/cta_swirl.png" 
          alt="Cosmic Swirl" 
          fill 
          className="object-cover object-center"
        />
      </div>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/40 via-transparent to-black/80" />

      {/* Content */}
      <div className="section-container relative z-20 flex flex-col items-center text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(124,58,237,0.8)]" />
          <span className="font-mono text-[11px] uppercase font-bold tracking-widest text-white/80">
            Ready to Build
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sans font-extrabold text-white leading-[1.1] mb-6"
          style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", letterSpacing: "-0.02em" }}
        >
          Have a problem<br />worth <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-white/40">solving?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text-secondary text-lg leading-relaxed mb-10 max-w-xl"
        >
          We engineer systems that move the needle. Let's discuss your next project.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
          <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-sm font-sans font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-white transition-colors">
            Start A Project
          </button>
          
          <button className="w-full sm:w-auto group relative px-8 py-4 rounded-sm font-sans font-bold text-xs uppercase tracking-widest text-white overflow-hidden border border-white/20 hover:border-white/40 transition-colors">
            <span className="relative z-10 flex items-center gap-2">
              Email Us
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14m-7-7 7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div className="absolute inset-px bg-linear-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}