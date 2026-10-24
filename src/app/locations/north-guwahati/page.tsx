import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin, Phone, Mail, ExternalLink, CheckCircle2, Zap, ArrowRight, ShieldCheck, Clock } from "lucide-react";
import ClosingSection from "../../../components/ClosingSection";
import WhyUs from "../../../components/WhyUs";
import SolutionBuilder from "../../../components/SolutionBuilder";

export const metadata: Metadata = {
  title: "Website Design & Development in North Guwahati & Rudreswar",
  description:
    "NERQIVA Studio is based at Baruah Souk, Rudreswar, North Guwahati. We build stunning, high-converting business websites with 1-click WhatsApp lead routing delivered in 24 Hours across North Guwahati, Rudreswar, Guwahati, Assam & Pan-India.",
  keywords: [
    "Website Designer North Guwahati",
    "Web Developer Rudreswar",
    "Guwahati Website Design Agency",
    "Baruah Souk Web Design Studio",
    "Assam Web Development",
    "24 Hour Website Launch Guwahati",
  ],
  alternates: {
    canonical: "/locations/north-guwahati",
  },
  openGraph: {
    title: "Website Design & Development in North Guwahati & Rudreswar | NERQIVA",
    description:
      "Stunning local business websites delivered in 24 Hours with 1-click WhatsApp lead routing. Office at Baruah Souk, Rudreswar, North Guwahati.",
    url: "https://nerqiva.vercel.app/locations/north-guwahati",
  },
};

export default function NorthGuwahatiLocationPage() {
  const locationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": "https://nerqiva.vercel.app/locations/north-guwahati/#localbusiness",
        "name": "NERQIVA Studio — North Guwahati & Rudreswar",
        "url": "https://nerqiva.vercel.app/locations/north-guwahati",
        "logo": "https://nerqiva.vercel.app/icon.png",
        "image": "https://nerqiva.vercel.app/icon.png",
        "description": "Premier website design studio based at Baruah Souk, Rudreswar, North Guwahati. Specialized in 24-Hour express website launches, WhatsApp lead routing, and Google Maps local SEO.",
        "telephone": "+91-8724932985",
        "email": "nerqiva.studio@gmail.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Baruah Souk, Rudreswar",
          "addressLocality": "North Guwahati",
          "addressRegion": "Assam",
          "postalCode": "781030",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "26.1965",
          "longitude": "91.7335"
        },
        "areaServed": [
          "North Guwahati",
          "Rudreswar",
          "Guwahati",
          "Assam",
          "India"
        ],
        "hasMap": "https://share.google/6KKUdxiR4zdUDuAnT"
      },
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
            "name": "Locations",
            "item": "https://nerqiva.vercel.app/locations/north-guwahati"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "North Guwahati & Rudreswar",
            "item": "https://nerqiva.vercel.app/locations/north-guwahati"
          }
        ]
      }
    ]
  };

  return (
    <div className="pt-32 relative z-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />

      {/* Hero Header */}
      <div className="section-container mb-16 max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-text-secondary hover:text-accent transition-colors mb-8 group"
        >
          <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-0.5" /> Back to Home
        </Link>

        <h1
          className="font-serif text-text-primary leading-[1.12] mb-6 tracking-tight"
          style={{ fontSize: "clamp(2.35rem, 4.8vw, 4rem)", letterSpacing: "-0.03em" }}
        >
          Website design & engineering in{" "}
          <span className="italic font-normal text-accent">North Guwahati & Rudreswar</span>.
        </h1>

        <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl font-normal mb-8">
          Based right at <strong className="text-text-primary font-semibold">Baruah Souk, Rudreswar</strong>, NERQIVA Studio engineers high-converting digital flagships for local salons, specialized clinics, luxury boutiques, and high-ticket service businesses across Guwahati, Assam, and Pan-India. Launched live in <strong className="text-text-primary font-bold">24 hours</strong>.
        </p>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'm%20based%20in%20Guwahati/Assam%20and%20need%20a%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 font-mono text-xs font-semibold rounded-lg shadow-sm"
          >
            <span>Book 24-Hour Launch via WhatsApp</span>
            <ArrowRight size={14} />
          </a>
          <a
            href="https://share.google/6KKUdxiR4zdUDuAnT"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 px-5 py-3 font-mono text-xs font-semibold rounded-lg border border-border/70 hover:border-accent/40 bg-bg-card text-text-secondary hover:text-text-primary transition-all"
          >
            <MapPin size={14} className="text-accent" />
            <span>Google Maps Directions</span>
          </a>
        </div>
      </div>

      {/* Verified NAP Details Card */}
      <div className="section-container mb-20 max-w-5xl">
        <div className="card-luxury p-7 sm:p-10 rounded-2xl bg-bg-card border border-border/70 shadow-sm">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold bg-accent/10 border border-accent/25 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <MapPin size={11} className="text-accent shrink-0" />
                  Registered Studio & Headquarters
                </span>
              </div>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-text-primary leading-tight">
                NERQIVA Studio Headquarters
              </h2>
              <div className="space-y-2.5 text-xs sm:text-sm text-text-secondary font-sans pt-1">
                <div className="flex items-start gap-2.5">
                  <MapPin size={15} className="text-accent shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-text-primary font-medium">Street Address:</strong> Baruah Souk, Rudreswar, North Guwahati, Guwahati, Assam 781030
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={15} className="text-accent-gold shrink-0" />
                  <span>
                    <strong className="text-text-primary font-medium">Direct WhatsApp:</strong>{" "}
                    <a href="tel:+918724932985" className="font-mono font-bold text-accent hover:underline">
                      +91 87249 32985
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={15} className="text-accent shrink-0" />
                  <span>
                    <strong className="text-text-primary font-medium">Direct Inquiry:</strong>{" "}
                    <a href="mailto:nerqiva.studio@gmail.com" className="font-mono font-medium text-text-primary hover:underline">
                      nerqiva.studio@gmail.com
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 p-6 rounded-xl bg-bg-secondary/70 border border-border/60 space-y-4">
              <div className="flex items-center justify-between border-b border-border/30 pb-2.5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-text-tertiary font-bold">
                  Primary Service Radius
                </span>
                <span className="font-mono text-[9px] text-accent font-bold bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full uppercase">
                  Active
                </span>
              </div>
              <ul className="space-y-2.5 font-sans text-xs font-medium text-text-primary">
                {[
                  "North Guwahati & Rudreswar Hub",
                  "Greater Guwahati Metropolitan Region",
                  "Assam Statewide Business Deployments",
                  "Pan-India Remote Edge Systems",
                ].map((area, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-accent-gold shrink-0" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://share.google/6KKUdxiR4zdUDuAnT"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-accent/10 hover:bg-accent/20 text-accent font-mono text-[10px] font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 transition-colors border border-accent/30"
              >
                <span>View on Google Business Profile</span>
                <ExternalLink size={12} />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Local Offerings Grid */}
      <div className="section-container mb-24 max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <h2
            className="font-serif text-text-primary leading-[1.15] mb-3 tracking-tight"
            style={{ fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)", letterSpacing: "-0.03em" }}
          >
            Commercial web systems engineered for <span className="italic font-normal text-accent">instant acquisition</span>.
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-normal">
            Built on top of sub-300ms Next.js architecture, verified for Guwahati mobile connectivity, and wired directly to your WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "High-Converting Flagships",
              desc: "Fast, mobile-optimized sites tailored for local salons, clinics, couture studios, and professional practices in Guwahati.",
              badgeLabel: "SLA",
              badgeValue: "24-Hour Launch",
              icon: Zap,
            },
            {
              title: "1-Click WhatsApp Flow",
              desc: "Instant customer booking inquiries sent directly to your phone. Zero tedious multi-page forms, zero lost clients.",
              badgeLabel: "Funnel",
              badgeValue: "Direct WhatsApp",
              icon: Clock,
            },
            {
              title: "Google Maps & Local SEO",
              desc: "Complete Google Business Profile and local schema integration so local customers find and trust your business first.",
              badgeLabel: "Discovery",
              badgeValue: "Local Schema Ready",
              icon: ShieldCheck,
            }
          ].map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div key={idx} className="card-luxury p-6 rounded-2xl bg-bg-card border border-border/70 shadow-2xs flex flex-col justify-between hover:border-accent/40 transition-colors">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent border border-accent/25 flex items-center justify-center mb-4 shrink-0">
                    <IconComp size={18} />
                  </div>
                  <h3 className="font-sans font-bold text-lg text-text-primary mb-2 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-text-secondary text-xs sm:text-[13px] leading-relaxed font-normal mb-6">
                    {card.desc}
                  </p>
                </div>
                <div className="pt-3.5 border-t border-border/40 flex items-center justify-between">
                  <span className="font-mono text-[9px] text-text-tertiary uppercase tracking-widest font-bold">
                    {card.badgeLabel}
                  </span>
                  <span className="font-mono text-[10px] text-accent font-semibold bg-accent/10 border border-accent/25 px-2 py-0.5 rounded">
                    {card.badgeValue}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Solution Selector Component */}
      <SolutionBuilder />

      {/* Why Us Component */}
      <WhyUs />
      <ClosingSection />
    </div>
  );
}
