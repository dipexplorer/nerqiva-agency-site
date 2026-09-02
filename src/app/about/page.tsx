"use client";

import Head from "next/head";
import WhyUs from "../../components/WhyUs";
import ClosingSection from "../../components/ClosingSection";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | 24-Hour Website Studio | NERQIVA</title>
      </Head>
      <div className="pt-32 relative z-20">
        <div className="section-container mb-24 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-accent/40" />
            <span className="label-eyebrow">ABOUT NERQIVA</span>
          </div>
          <h1 className="font-sans font-extrabold text-text-primary leading-[1.1] mb-6 tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}>
            Stunning websites built for local businesses in <span className="text-accent">24 Hours.</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl font-light">
            NERQIVA is a modern website design studio. We help local businesses, salons, studios, clinics, and brands establish luxury digital presences without the hassle of slow, expensive agencies.
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
                  Speed, quality, and simplicity come first.
                </h3>
                <p className="text-text-secondary text-base leading-relaxed">
                  Traditional web design agencies take weeks, charge hidden fees, and deliver slow, generic templates. We build pre-tested, high-converting demo websites that we customize with your branding and launch in just **24 Hours**.
                </p>
              </section>

              <section>
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-text-primary mb-4 border-b border-border/40 pb-3">
                  How We Operate
                </h2>
                <h3 className="font-sans font-bold text-2xl text-text-primary mb-4 leading-snug">
                  Direct WhatsApp communication & 1-day delivery.
                </h3>
                <p className="text-text-secondary text-base leading-relaxed">
                  You don&apos;t deal with middleman sales managers. You work directly with our lead designer over WhatsApp. Send us your photos and text, review your live site preview on your phone, and go live the next day!
                </p>
              </section>
            </div>

            <div className="md:col-span-4 space-y-8">
              <div className="glass-panel p-6" style={{ borderRadius: "4px" }}>
                <h4 className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary font-bold mb-4">
                  What You Get
                </h4>
                <ul className="space-y-3 font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                  <li>— ⚡ 24-Hour Express Launch</li>
                  <li>— 📱 100% Mobile Optimized</li>
                  <li>— 💬 Direct WhatsApp Lead Alerts</li>
                  <li>— 📍 Google Maps & Reviews</li>
                </ul>
              </div>

              <div className="glass-panel p-6" style={{ borderRadius: "4px" }}>
                <h4 className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary font-bold mb-4">
                  Client Guarantees
                </h4>
                <ul className="space-y-3 font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                  <li>— Direct Whatsapp Support</li>
                  <li>— Zero Monthly Maintenance</li>
                  <li>— Full Website Ownership</li>
                  <li>— 100% Mobile Phone Test</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Meet the Founder Section */}
        <div className="section-container mb-32 max-w-4xl border-t border-border/40 pt-16">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 flex justify-center md:justify-start">
              {/* Founder Avatar */}
              <div className="w-40 h-40 bg-linear-to-br from-accent/20 to-accent-light/10 border border-accent/20 flex flex-col items-center justify-center p-4 relative" style={{ borderRadius: "4px" }}>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '12px 12px' }} />
                <span className="font-mono text-[48px] font-extrabold text-accent select-none">DJ</span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-text-secondary mt-1">Dip Jyoti</span>
              </div>
            </div>
            <div className="md:col-span-8 space-y-4 text-center md:text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold">
                [Founder & Lead Designer]
              </span>
              <h2 className="font-sans font-bold text-2xl text-text-primary">
                Dip Jyoti
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                I founded NERQIVA to give local business owners high-converting, luxury websites without the high costs and slow delivery of traditional agencies.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                When you work with us, I personally oversee your website design, content setup, and WhatsApp lead flow integration to guarantee your site goes live in **24 Hours** and brings in real clients.
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
