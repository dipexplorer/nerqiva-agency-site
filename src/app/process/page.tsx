import { Metadata } from "next";
import { Zap, ShieldCheck, CheckCircle2 } from "lucide-react";
import Process from "../../components/Process";
import ClosingSection from "../../components/ClosingSection";

export const metadata: Metadata = {
  title: "How It Works | 24-Hour Express Website Launch",
  description:
    "Learn how NERQIVA delivers high-converting business websites in 24 Hours. Simple 4-step process: Select theme, share photos & text, review live preview, and launch.",
  alternates: {
    canonical: "/process",
  },
  openGraph: {
    title: "How It Works | 24-Hour Express Launch | NERQIVA",
    description:
      "Simple 4-step process: Select theme, share photos & text, review live preview on your phone, and go live in 1 day.",
    url: "https://nerqiva.vercel.app/process",
  },
};

export default function ProcessPage() {
  const processSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://nerqiva.vercel.app"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "How It Works",
            "item": "https://nerqiva.vercel.app/process"
          }
        ]
      },
      {
        "@type": "HowTo",
        "name": "24-Hour Express Business Website Launch",
        "description": "How NERQIVA Studio customizes and launches high-converting websites in 24 Hours.",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Framework Selection",
            "text": "Select a production-tested benchmark tailored to your industry."
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Asset & Identity Intake",
            "text": "Transmit photos, menu pricing, WhatsApp target, and Google Maps location."
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Precision Engineering & Tailoring",
            "text": "We build layout, configure WhatsApp lead buttons, and optimize for mobile."
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Live Staging & Phone Verification",
            "text": "Review private staging link on your mobile phone before going live."
          },
          {
            "@type": "HowToStep",
            "position": 5,
            "name": "Domain Cutover & Launch",
            "text": "Connect custom domain and start receiving WhatsApp lead alerts."
          }
        ]
      }
    ]
  };

  return (
    <div className="pt-32 relative z-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(processSchema) }}
      />
      <div className="section-container mb-12 sm:mb-16 max-w-4xl">
        <h1
          className="font-serif text-text-primary leading-[1.12] mb-5 tracking-tight"
          style={{ fontSize: "clamp(2.4rem, 4.8vw, 4rem)", letterSpacing: "-0.03em" }}
        >
          From demo architecture to live production <br className="hidden sm:inline" />
          in <span className="italic font-normal text-accent">24 hours</span>.
        </h1>
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
          No complicated technical jargon, no multi-week agency delays, and zero hidden scope creep. We take your business assets, tailor your chosen flagship architecture, and cut over to your live domain in one day.
        </p>
      </div>

      {/* The interactive scrolling stepper component with embedded header suppressed */}
      <Process hideHeader />

      <div className="section-container my-20 sm:my-28 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <div className="card-luxury p-8 sm:p-10 rounded-2xl bg-bg-card border border-border/70 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold bg-accent/10 border border-accent/25 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <Zap size={11} className="text-accent shrink-0" />
                  Speed & Economics
                </span>
              </div>
              <h2 className="font-serif font-bold text-2xl text-text-primary mb-3 leading-snug">
                No waiting weeks. <br />No technical headaches.
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 font-normal">
                Traditional digital agencies take 4 to 8 weeks, bury clients in discovery meetings, and charge high monthly retainers for basic websites. We build on top of verified, high-converting architectures to deliver an authoritative digital flagship within 24 hours.
              </p>
            </div>

            <div className="pt-6 border-t border-border/40 space-y-2.5">
              {[
                "Production-ready within 24 hours of asset submission",
                "Direct WhatsApp communication with your lead engineer",
                "Sub-300ms mobile performance optimized for local search",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-text-primary font-mono">
                  <CheckCircle2 size={13} className="text-accent-gold shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-luxury p-8 sm:p-10 rounded-2xl bg-bg-card border border-border/70 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent-gold font-bold bg-accent-gold/10 border border-accent-gold/25 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <ShieldCheck size={11} className="text-accent-gold shrink-0" />
                  Client Guarantees
                </span>
              </div>
              <h2 className="font-serif font-bold text-2xl text-text-primary mb-3 leading-snug">
                100% Pre-launch approval, <br />Complete asset ownership.
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 font-normal">
                You test and review your private staging link directly on your smartphone before public cutover. We refine typography, copy, and imagery until you are completely satisfied — with zero ongoing platform lock-in.
              </p>
            </div>

            <div className="pt-6 border-t border-border/40 space-y-2.5">
              {[
                "Private mobile staging environment on your own device",
                "Revisions on photography, copy, and styling before launch",
                "100% full ownership of domain, code, and lead routing",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-text-primary font-mono">
                  <CheckCircle2 size={13} className="text-accent-gold shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <ClosingSection />
    </div>
  );
}
