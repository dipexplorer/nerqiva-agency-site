import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin, Phone, Mail, ExternalLink, Sparkles, CheckCircle2, Zap, ArrowRight, ShieldCheck, Clock } from "lucide-react";
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
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest font-bold text-text-secondary hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={12} /> Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="label-eyebrow text-accent">BARUAH SOUK, NORTH GUWAHATI & RUDRESWAR HEADQUARTERS</span>
        </div>

        <h1
          className="font-sans font-extrabold text-text-primary leading-[1.08] mb-6 tracking-tight"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}
        >
          Website Design & Development in <span className="bg-linear-to-r from-accent via-accent-light to-accent-gold bg-clip-text text-transparent font-black">North Guwahati & Rudreswar.</span>
        </h1>

        <p className="text-text-secondary text-lg leading-relaxed max-w-2xl font-normal mb-8">
          Based right at <strong className="text-text-primary font-semibold">Baruah Souk, Rudreswar, North Guwahati</strong>, NERQIVA Studio builds high-converting business websites for local salons, clinics, boutiques, studios, and services across Guwahati, Assam, and Pan-India. Delivered live in <strong className="text-text-primary font-bold">24 Hours</strong>.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'm%20based%20in%20Guwahati/Assam%20and%20need%20a%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <span>Book 24-Hour Launch via WhatsApp</span>
            <ArrowRight size={16} />
          </a>
          <a
            href="https://share.google/6KKUdxiR4zdUDuAnT"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <MapPin size={14} className="text-accent" />
            <span>Open Google Maps Directions</span>
          </a>
        </div>
      </div>

      {/* Verified NAP Details Card */}
      <div className="section-container mb-20 max-w-5xl">
        <div className="p-8 sm:p-10 rounded-2xl bg-bg-card border border-border/80 shadow-md">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-accent" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                  Verified Local Business Office
                </span>
              </div>
              <h2 className="font-sans font-extrabold text-2xl md:text-3xl text-text-primary">
                NERQIVA Studio Headquarters
              </h2>
              <div className="space-y-2 text-sm text-text-secondary font-sans">
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-accent shrink-0 mt-1" />
                  <span>
                    <strong className="text-text-primary font-semibold">Street Address:</strong> Baruah Souk, Rudreswar, North Guwahati, Guwahati, Assam 781030
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={15} className="text-emerald-500 shrink-0" />
                  <span>
                    <strong className="text-text-primary font-semibold">Phone / WhatsApp:</strong>{" "}
                    <a href="tel:+918724932985" className="font-mono font-bold text-accent hover:underline">
                      +91 87249 32985
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={15} className="text-accent shrink-0" />
                  <span>
                    <strong className="text-text-primary font-semibold">Email:</strong>{" "}
                    <a href="mailto:nerqiva.studio@gmail.com" className="font-mono font-semibold text-text-primary hover:underline">
                      nerqiva.studio@gmail.com
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 p-6 rounded-xl bg-bg-secondary/60 border border-border/40 space-y-4">
              <div className="flex items-center justify-between border-b border-border/20 pb-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-text-tertiary font-bold">
                  Primary Coverage Areas
                </span>
                <span className="font-mono text-[8px] text-emerald-600 dark:text-emerald-400 font-extrabold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded uppercase">
                  Active
                </span>
              </div>
              <ul className="space-y-2.5 font-sans text-xs font-semibold text-text-primary">
                {[
                  "North Guwahati & Rudreswar",
                  "Greater Guwahati Metropolitan Area",
                  "Statewide Assam Business Coverage",
                  "Pan-India Remote Software Systems",
                ].map((area, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://share.google/6KKUdxiR4zdUDuAnT"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-accent/10 hover:bg-accent/20 text-accent font-mono text-[10px] font-bold uppercase tracking-widest rounded flex items-center justify-center gap-2 transition-colors border border-accent/30"
              >
                View on Google Business Profile
                <ExternalLink size={12} />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Local Offerings Grid */}
      <div className="section-container mb-24 max-w-5xl">
        <div className="mb-10 text-center max-w-xl mx-auto">
          <span className="label-eyebrow text-accent mb-2 block">WHAT WE BUILD FOR LOCAL BUSINESSES</span>
          <h2 className="font-sans font-extrabold text-text-primary text-3xl leading-tight">
            High-Converting Web Systems Built in <span className="bg-linear-to-r from-accent to-accent-gold bg-clip-text text-transparent">24 Hours</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "High-Converting Websites",
              desc: "Fast, mobile-optimized websites for local salons, clinics, photography studios, and shops in North Guwahati & Guwahati.",
              time: "24 Hours",
              icon: Zap,
            },
            {
              title: "1-Click WhatsApp Lead Flow",
              desc: "Instant customer inquiries sent directly to your phone. Zero complex forms, zero missed bookings.",
              time: "Instant Alerts",
              icon: Clock,
            },
            {
              title: "Google Maps & Local SEO",
              desc: "Optimized Google Business Profile and local schema setup so customers nearby find your business first.",
              time: "Included Standard",
              icon: ShieldCheck,
            }
          ].map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-bg-card border border-border/80 shadow-xs flex flex-col justify-between hover:border-accent/40 transition-colors">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-accent/10 text-accent border border-accent/20 flex items-center justify-center mb-4">
                    <IconComp size={20} />
                  </div>
                  <h3 className="font-sans font-bold text-xl text-text-primary mb-2">
                    {card.title}
                  </h3>
                  <p className="text-text-secondary text-xs leading-relaxed font-sans mb-4">
                    {card.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-border/30 flex items-center justify-between">
                  <span className="font-mono text-[9px] text-text-tertiary uppercase tracking-widest font-bold">Turnaround</span>
                  <span className="font-mono text-[9px] text-emerald-600 dark:text-emerald-400 font-extrabold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded uppercase">
                    {card.time}
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
