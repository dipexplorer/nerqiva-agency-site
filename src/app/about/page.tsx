import { Metadata } from "next";
import { Zap, Smartphone, MessageSquare, ShieldCheck, CheckCircle2, Sparkles, Clock, Award } from "lucide-react";
import WhyUs from "../../components/WhyUs";
import FounderSection from "../../components/FounderSection";
import ClosingSection from "../../components/ClosingSection";

export const metadata: Metadata = {
  title: "About Us | 24-Hour Express Digital Studio",
  description:
    "NERQIVA is a modern website design studio. We build stunning, high-converting websites for local businesses, salons, studios, and clinics delivered in 24 Hours.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | 24-Hour Express Digital Studio | NERQIVA",
    description:
      "Stunning, high-converting websites for local businesses delivered in 24 Hours. Learn about our core principles and team.",
    url: "https://nerqiva.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-32 relative z-20">
      
      {/* Hero Header */}
      <div className="section-container mb-16 max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="label-eyebrow text-accent">ABOUT NERQIVA DIGITAL STUDIO</span>
        </div>
        <h1
          className="font-sans font-extrabold text-text-primary leading-[1.08] mb-6 tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)", letterSpacing: "-0.03em" }}
        >
          Stunning websites built for local businesses in <span className="bg-linear-to-r from-accent via-accent-light to-accent-gold bg-clip-text text-transparent font-black">24 Hours.</span>
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed max-w-2xl font-normal">
          NERQIVA is a modern website design studio. We help local businesses, salons, studios, clinics, and brands establish luxury digital presences without the hassle, delays, and high costs of traditional agencies.
        </p>
      </div>

      {/* Hero Quick Stat Highlight Grid */}
      <div className="section-container mb-24 max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "24-Hour Launch", desc: "Guaranteed turnaround", icon: Zap, color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
            { title: "100% Mobile Ready", desc: "Tested on iOS & Android", icon: Smartphone, color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
            { title: "WhatsApp Leads", desc: "Direct 1-tap inquiries", icon: MessageSquare, color: "text-accent bg-accent/10 border-accent/20" },
            { title: "Full Ownership", desc: "Zero lock-in & no fees", icon: ShieldCheck, color: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
          ].map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div key={idx} className="p-5 rounded-2xl bg-bg-card border border-border/80 shadow-xs flex flex-col justify-between hover:border-accent/40 transition-colors">
                <div className={`w-9 h-9 rounded-xl border ${stat.color} flex items-center justify-center mb-4`}>
                  <IconComp size={18} />
                </div>
                <div>
                  <h3 className="font-sans font-extrabold text-base text-text-primary mb-1">
                    {stat.title}
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-text-tertiary">
                    {stat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Core Principles Section */}
      <div className="section-container mb-32 max-w-5xl">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="md:col-span-7 space-y-12">
            <section className="p-8 rounded-2xl bg-bg-card border border-border/80 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-accent" />
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                  Our Core Principle
                </h2>
              </div>
              <h3 className="font-sans font-bold text-2xl text-text-primary mb-4 leading-snug">
                Speed, quality, and simplicity come first.
              </h3>
              <p className="text-text-secondary text-base leading-relaxed font-sans">
                Traditional web design agencies take weeks, charge hidden fees, and deliver slow, generic templates. We build pre-tested, high-converting demo websites that we customize with your branding and launch in just <strong className="font-bold text-text-primary">24 Hours</strong>.
              </p>
            </section>

            <section className="p-8 rounded-2xl bg-bg-card border border-border/80 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <Award size={16} className="text-accent" />
                <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                  How We Operate
                </h2>
              </div>
              <h3 className="font-sans font-bold text-2xl text-text-primary mb-4 leading-snug">
                Direct WhatsApp communication & 1-day delivery.
              </h3>
              <p className="text-text-secondary text-base leading-relaxed font-sans">
                You don&apos;t deal with middleman sales managers. You work directly with our lead designer over WhatsApp. Send us your photos and text, review your live site preview on your phone, and go live the next day!
              </p>
            </section>
          </div>

          {/* Right Column Guarantee Cards */}
          <div className="md:col-span-5 space-y-6">
            <div className="card-luxury p-7 rounded-2xl border border-border/80 shadow-xs">
              <div className="flex items-center justify-between mb-5 border-b border-border/30 pb-3">
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-text-primary font-bold">
                  What You Get
                </h4>
                <Sparkles size={13} className="text-accent" />
              </div>
              <ul className="space-y-3.5 font-sans text-xs font-medium text-text-secondary">
                {[
                  "24-Hour Express Launch",
                  "100% Mobile Phone Optimized",
                  "Direct WhatsApp Lead Alerts",
                  "Google Maps & Review Setup",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-luxury p-7 rounded-2xl border border-border/80 shadow-xs">
              <div className="flex items-center justify-between mb-5 border-b border-border/30 pb-3">
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-text-primary font-bold">
                  Client Guarantees
                </h4>
                <ShieldCheck size={13} className="text-emerald-500" />
              </div>
              <ul className="space-y-3.5 font-sans text-xs font-medium text-text-secondary">
                {[
                  "Direct WhatsApp Support",
                  "Zero Monthly Maintenance",
                  "Full Code & Site Ownership",
                  "100% Mobile Screen Tested",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Founder Section */}
      <FounderSection />

      {/* Trust & Why Us Component */}
      <WhyUs />
      <ClosingSection />
    </div>
  );
}
