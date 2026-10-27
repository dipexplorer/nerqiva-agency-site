import { Metadata } from "next";
import { Clock, Smartphone, MessageSquare, ShieldCheck, CheckCircle2, XCircle } from "lucide-react";
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
    url: "https://www.nerqivastudio.in/about",
  },
};

export default function AboutPage() {
  const specs = [
    {
      title: "24-Hour SLA",
      badge: "Turnaround",
      desc: "From asset intake to live production cutover within one business day.",
      icon: Clock,
      accentClass: "text-accent bg-accent/10 border-accent/25",
    },
    {
      title: "Sub-300ms Core",
      badge: "Performance",
      desc: "Handcrafted Next.js edge architecture optimized for immediate mobile conversions.",
      icon: Smartphone,
      accentClass: "text-accent-gold bg-accent-gold/10 border-accent-gold/25",
    },
    {
      title: "WhatsApp Funnel",
      badge: "Acquisition",
      desc: "Pre-configured 1-tap WhatsApp lead buttons routing directly to your phone.",
      icon: MessageSquare,
      accentClass: "text-accent bg-accent/10 border-accent/25",
    },
    {
      title: "100% Ownership",
      badge: "Asset Security",
      desc: "You own your custom domain, codebase, and customer data with zero vendor lock-in.",
      icon: ShieldCheck,
      accentClass: "text-accent-gold bg-accent-gold/10 border-accent-gold/25",
    },
  ];

  const comparisons = {
    traditional: [
      "4 to 8 week delivery delays with endless discovery meetings",
      "Junior contractors and offshore teams with zero accountability",
      "Bloated WordPress/Wix templates with recurring maintenance bills",
      "Code and domain held hostage under mandatory retainer contracts",
    ],
    nerqiva: [
      "Guaranteed 24-hour turnaround from benchmark to live domain cutover",
      "Direct collaboration with senior principal engineer via WhatsApp",
      "Custom Next.js edge codebase with 95+ Google Lighthouse mobile scores",
      "100% complete asset handover with zero monthly software lock-in",
    ],
  };

  return (
    <div className="pt-32 relative z-20">
      {/* Hero Header: Pure Typographic Authority */}
      <div className="section-container mb-14 sm:mb-16 max-w-4xl">
        <h1
          className="font-serif text-text-primary leading-[1.12] mb-6 tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)", letterSpacing: "-0.03em" }}
        >
          Stunning digital flagships built for local businesses in{" "}
          <span className="italic font-normal text-accent">24 hours</span>.
        </h1>
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
          NERQIVA is a modern website engineering studio. We help ambitious local businesses, luxury salons, specialized clinics, and high-ticket service brands establish dominant digital flagships—delivered without agency delays, bloated retainers, or technical overhead.
        </p>
      </div>

      {/* Studio Benchmark & Specification Grid */}
      <div className="section-container mb-24 max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {specs.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="card-luxury p-5 sm:p-6 rounded-2xl bg-bg-card border border-border/70 flex flex-col justify-between hover:border-accent/40 transition-colors shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-9 h-9 rounded-xl border ${item.accentClass} flex items-center justify-center shrink-0`}>
                      <IconComp size={18} />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary font-bold bg-bg-secondary px-2 py-0.5 rounded border border-border/50">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-sans font-bold text-base sm:text-lg text-text-primary mb-1.5 tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-text-secondary text-xs sm:text-[13px] leading-relaxed font-normal mt-2">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Operating Philosophy: The Contrast Matrix */}
      <div className="section-container mb-28 sm:mb-36 max-w-5xl">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <h2
            className="font-serif text-text-primary leading-[1.15] mb-4 tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em" }}
          >
            A fundamentally different <span className="italic font-normal text-accent">agency standard</span>.
          </h2>
          <p className="text-text-secondary text-base leading-relaxed font-normal">
            Most digital agencies treat local businesses as low-priority filler work, assigning junior staff and dragging out simple websites for months. We built NERQIVA around an uncompromised commercial model.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Traditional Agency Card */}
          <div className="card-luxury p-7 sm:p-9 rounded-2xl bg-bg-card/60 border border-border/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-text-tertiary font-bold bg-bg-secondary border border-border/60 px-3 py-1 rounded-full">
                  The Traditional Agency
                </span>
                <span className="font-mono text-[10px] text-text-tertiary">Legacy Model</span>
              </div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-text-primary mb-3 leading-snug">
                Slow, fragmented, and restrictive.
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 font-normal">
                Lengthy scoping phases, middle managers who don&apos;t code, and recurring retainers that trap your business into closed platforms.
              </p>
            </div>

            <div className="pt-6 border-t border-border/40 space-y-3">
              {comparisons.traditional.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary font-sans leading-relaxed">
                  <XCircle size={15} className="text-text-tertiary shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* NERQIVA Standard Card */}
          <div className="card-luxury p-7 sm:p-9 rounded-2xl bg-bg-card border border-accent/40 ring-1 ring-accent/20 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold bg-accent/10 border border-accent/30 px-3 py-1 rounded-full">
                  The NERQIVA Standard
                </span>
                <span className="font-mono text-[10px] text-accent font-semibold">Flagship Model</span>
              </div>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-text-primary mb-3 leading-snug">
                Engineered for speed, ownership, & ROI.
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 font-normal">
                Direct WhatsApp contact with your lead engineer, high-converting commercial design, and complete asset handover within 24 hours.
              </p>
            </div>

            <div className="pt-6 border-t border-border/40 space-y-3">
              {comparisons.nerqiva.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-text-primary font-sans leading-relaxed">
                  <CheckCircle2 size={15} className="text-accent-gold shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Founder Section */}
      <FounderSection />

      {/* Trust & Why Us Component */}
      <WhyUs />

      {/* Closing CTA Section */}
      <ClosingSection />
    </div>
  );
}
