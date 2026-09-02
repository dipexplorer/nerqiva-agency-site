"use client";

import Head from "next/head";
import Process from "../../components/Process";
import ClosingSection from "../../components/ClosingSection";

export default function ProcessPage() {
  return (
    <>
      <Head>
        <title>How It Works | 24-Hour Express Launch | NERQIVA</title>
      </Head>
      <div className="pt-32 relative z-20">
        <div className="section-container mb-16 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-accent/40" />
            <span className="label-eyebrow">HOW IT WORKS</span>
          </div>
          <h1 className="font-sans font-extrabold text-text-primary leading-[1.1] mb-6 tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}>
            From demo to live website <br />in <span className="text-accent">24 Hours.</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl font-light">
            No complicated technical jargon, no long waiting periods, and no hidden fees. We take your business details, customize your chosen website theme, and launch your site live in 1 day.
          </p>
        </div>

        {/* The interactive scrolling stepper component */}
        <Process />

        <div className="section-container my-32 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 border-t border-border/40 pt-16">
            <div>
              <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block mb-3">
                Why Clients Love This
              </span>
              <h2 className="font-sans font-bold text-2xl text-text-primary mb-4 leading-tight">
                No waiting weeks. <br />No technical headaches.
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                Traditional agencies take 4-6 weeks and charge thousands for basic websites. By building on top of our high-converting pre-tested themes, we deliver a stunning luxury site in 24 hours at a fraction of the cost.
              </p>
            </div>

            <div>
              <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider block mb-3">
                Client Guarantees
              </span>
              <h2 className="font-sans font-bold text-2xl text-text-primary mb-4 leading-tight">
                100% Satisfaction, <br />Mobile-optimized.
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                You get to review your private website link on your phone before it goes public. We adjust photos, text, and colors until you are 100% happy with your site.
              </p>
            </div>
          </div>
        </div>
        
        <ClosingSection />
      </div>
    </>
  );
}
