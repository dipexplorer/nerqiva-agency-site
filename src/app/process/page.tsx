"use client";

import Head from "next/head";
import Process from "../../components/Process";
import ClosingSection from "../../components/ClosingSection";

export default function ProcessPage() {
  return (
    <>
      <Head>
        <title>Our Process | NERQIVA</title>
      </Head>
      <div className="pt-32 relative z-20">
        <div className="section-container mb-16 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-accent/40" />
            <span className="label-eyebrow">Our Methodology</span>
          </div>
          <h1 className="font-sans font-extrabold text-text-primary leading-[1.1] mb-6 tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}>
            Problem first. <br />Technology second.
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl font-light">
            We do not begin with a technology stack. We begin by understanding the operational bottleneck. Only once the problem is defined do we design and build the appropriate engineering solution.
          </p>
        </div>

        {/* The interactive scrolling stepper component */}
        <Process />

        <div className="section-container my-32 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 border-t border-border/40 pt-16">
            <div>
              <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block mb-3">
                Why this works
              </span>
              <h2 className="font-sans font-bold text-2xl text-text-primary mb-4 leading-tight">
                No wasted sprints. <br />No redundant code.
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                By investing heavily in the discovery and definition phases, we ensure that every hour of engineering is spent building something that directly resolves a business bottleneck. We build what is necessary, and nothing more.
              </p>
            </div>

            <div>
              <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block mb-3">
                Client Collaboration
              </span>
              <h2 className="font-sans font-bold text-2xl text-text-primary mb-4 leading-tight">
                Full transparency, <br />constant alignment.
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                You are involved at every critical decision gate. From the initial architecture blueprint approval to user acceptance testing (UAT) and feature roadmapping, you have direct visibility into what is being built.
              </p>
            </div>
          </div>
        </div>
        
        <ClosingSection />
      </div>
    </>
  );
}
