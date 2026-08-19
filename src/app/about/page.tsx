"use client";

import Head from "next/head";
import WhyUs from "../../components/WhyUs";
import ClosingSection from "../../components/ClosingSection";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Nerqiva | NERQIVA</title>
      </Head>
      <div className="pt-32 relative z-20">
        <div className="section-container mb-24 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-accent/40" />
            <span className="label-eyebrow">About Nerqiva</span>
          </div>
          <h1 className="font-sans font-extrabold text-text-primary leading-[1.1] mb-6 tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}>
            We believe technology should earn its complexity.
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl font-light">
            Nerqiva is an independent technology studio. We work with businesses to solve their most tedious, bottlenecked operational challenges through custom software engineering.
          </p>
        </div>

        <div className="section-container mb-32 max-w-4xl">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="md:col-span-8 space-y-12">
              <section>
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-text-primary mb-4 border-b border-border/40 pb-3">
                  Our Core Principle
                </h2>
                <h3 className="font-sans font-bold text-2xl text-text-primary mb-4 leading-snug">
                  Technology is a tool. The problem comes first.
                </h3>
                <p className="text-text-secondary text-base leading-relaxed">
                  Bloated codebases and unnecessary technical stacks are expensive to build and painful to maintain. We believe in simplicity. We do not write code until we fully understand the business constraints, operational workflows, and the objective of the system.
                </p>
              </section>

              <section>
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-text-primary mb-4 border-b border-border/40 pb-3">
                  How We Operate
                </h2>
                <h3 className="font-sans font-bold text-2xl text-text-primary mb-4 leading-snug">
                  Small, founder-led, and hyper-focused.
                </h3>
                <p className="text-text-secondary text-base leading-relaxed">
                  We don&apos;t maintain large sales teams or layers of corporate project managers. When you build with Nerqiva, you work directly with engineers who are responsible for the code, design, and deployment of your system. This allows us to move fast, avoid miscommunications, and build exactly what your business requires.
                </p>
              </section>
            </div>

            <div className="md:col-span-4 space-y-8">
              <div className="glass-panel p-6" style={{ borderRadius: "4px" }}>
                <h4 className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary font-bold mb-4">
                  Capabilities
                </h4>
                <ul className="space-y-3 font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                  <li>— Digital Presence</li>
                  <li>— Workflow Automation</li>
                  <li>— Custom Web Apps</li>
                  <li>— Data Pipelines</li>
                </ul>
              </div>

              <div className="glass-panel p-6" style={{ borderRadius: "4px" }}>
                <h4 className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary font-bold mb-4">
                  Commitment
                </h4>
                <ul className="space-y-3 font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                  <li>— Direct Engineer Access</li>
                  <li>— No Retainer Traps</li>
                  <li>— Fully Owned Source Code</li>
                  <li>— Free Initial Scoping</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Meet the Founder Section */}
        <div className="section-container mb-32 max-w-4xl border-t border-border/40 pt-16">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center md:justify-start">
              {/* Founder Avatar Mockup / Graphic */}
              <div className="w-40 h-40 bg-gradient-to-br from-accent/20 to-accent-light/10 border border-accent/20 flex flex-col items-center justify-center p-4 relative" style={{ borderRadius: "4px" }}>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '12px 12px' }} />
                <span className="font-mono text-[48px] font-extrabold text-accent select-none">DJ</span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-text-secondary mt-1">Dip Jyoti</span>
              </div>
            </div>
            <div className="md:col-span-8 space-y-4 text-center md:text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold">
                [Founder & Architect]
              </span>
              <h2 className="font-sans font-bold text-2xl text-text-primary">
                Dip Jyoti
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                As the Lead Systems Architect and Founder of Nerqiva, I build digital systems focused on operational efficiency. I specialize in designing scalable full-stack web applications, secure APIs, and custom workflow automations. 
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                We stay deliberately small so you work directly with the engineer writing your system—no layers of account managers, no miscommunication, just clean code built to resolve your operational bottlenecks.
              </p>
            </div>
          </div>
        </div>
        
        {/* Reuse the existing Trust/WhyUs component here */}
        <WhyUs />
        <ClosingSection />
      </div>
    </>
  );
}
