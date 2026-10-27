import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, Lock, EyeOff, Database, ArrowRight, HelpCircle, FileCheck } from "lucide-react";
import ClosingSection from "../../components/ClosingSection";

export const metadata: Metadata = {
  title: "Privacy & Data Protection Policy | NERQIVA Studio",
  description:
    "Review our transparent data protection policy. Zero invasive tracking pixels, 100% client data ownership, and strict compliance with the Indian DPDP Act 2023.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy & Data Protection Policy | NERQIVA Studio",
    description:
      "Zero invasive tracking pixels, 100% client data ownership, and strict compliance with India's DPDP Act 2023.",
    url: "https://www.nerqivastudio.in/privacy",
  },
};

const SUMMARY_POINTS = [
  {
    title: "Zero Tracking Pixels",
    desc: "We do not deploy invasive marketing trackers, cross-site cookies, or behavioral profiling scripts.",
    icon: EyeOff,
  },
  {
    title: "Explicit Ingestion Only",
    desc: "We only collect data you actively submit through our project intake brief or WhatsApp conversation.",
    icon: Database,
  },
  {
    title: "DPDP Act 2023 Grounded",
    desc: "Fully aligned with India's Digital Personal Data Protection Act governing consent and principal rights.",
    icon: ShieldCheck,
  },
  {
    title: "Guaranteed Purge Rights",
    desc: "Request permanent deletion of your project intake briefs, documents, and business records at any time.",
    icon: Lock,
  },
];

const PRIVACY_CLAUSES = [
  {
    number: "01",
    tag: "TRACKING POLICY",
    title: "Zero Behavioral Tracking & Cookie-Less Architecture",
    content:
      "NERQIVA operates a privacy-first, cookie-less web architecture. We do not deploy Meta Pixel, Google tracking beacons, cross-site surveillance scripts, or fingerprinting technologies on this website. We respect user attention and privacy by eliminating invasive behavioral analytics entirely. Any interaction logs captured at the server level are strictly non-personally identifiable and used solely for operational uptime and DDoS defense.",
  },
  {
    number: "02",
    tag: "DATA COLLECTION",
    title: "Explicit Information Ingestion & Project Records",
    content:
      "We only collect personal and commercial information that you knowingly and explicitly submit to us via our Project Brief contact form or direct WhatsApp communication. This may include your full name, business trade name, contact email, WhatsApp phone number, existing website URL, and project requirements. This information is used exclusively to evaluate, price, architect, and deliver your website engagement.",
  },
  {
    number: "03",
    tag: "REGULATORY STANDARDS",
    title: "DPDP Act 2023 & Statutory Indian Compliance",
    content:
      "As a digital engineering studio operating in India, NERQIVA complies with the provisions of the Digital Personal Data Protection (DPDP) Act, 2023. We collect personal data solely with verifiable consent, process it exclusively for the specified commercial purpose agreed upon, and implement technical safeguards to prevent unauthorized disclosure, leakage, or data modification.",
  },
  {
    number: "04",
    tag: "CONFIDENTIALITY",
    title: "Client Confidentiality & Commercial Non-Disclosure",
    content:
      "We treat all client project materials—including unreleased logos, proprietary menu pricing, medical clinic schedules, and strategic marketing plans—as strictly confidential. Your assets are accessible only to the active technical personnel working directly on your build. We never sell, rent, monetize, or license client data to third-party data brokers or marketing intermediaries under any circumstance.",
  },
  {
    number: "05",
    tag: "SUB-PROCESSORS",
    title: "Verified Infrastructure & Edge Sub-Processors",
    content:
      "To deploy high-availability, sub-300ms websites, we utilize enterprise-grade cloud infrastructure partners. These sub-processors include Vercel (edge hosting and static assets), Cloudflare (DNS propagation and DDoS protection), and WhatsApp / Meta Business (inbound messaging conduit). All sub-processors adhere to SOC 2 Type II, ISO 27001, and TLS 1.3 in-transit encryption standards.",
  },
  {
    number: "06",
    tag: "PURGE RIGHTS",
    title: "Data Principal Rights, Export & Complete Erasure",
    content:
      "You retain complete authority over your personal and commercial data. Under our data ownership commitment, you have the right to request a full export of your stored project communications, request corrections to your business coordinates, or demand the permanent erasure (purge) of all intake briefs and files from our records. To exercise your rights, email nerqiva.studio@gmail.com with your request.",
  },
  {
    number: "07",
    tag: "SECURITY CONTROLS",
    title: "Security Architecture & Encryption Protocols",
    content:
      "All digital flagships engineered by NERQIVA are provisioned with enterprise SSL/TLS encryption certificates, HTTPS-only redirect policies, modern Content Security Policies (CSP), and automated DNSSEC verification. Client administrative credentials and WhatsApp webhook keys are maintained under strict multi-factor authentication protocols.",
  },
  {
    number: "08",
    tag: "GOVERNANCE",
    title: "Grievance Redressal & Data Protection Contact",
    content:
      "In accordance with statutory data protection rules, NERQIVA maintains a designated Data Protection Officer. If you have questions regarding our data practices, wish to report a concern, or request formal data rectification, contact our technical leadership directly at nerqiva.studio@gmail.com or via WhatsApp at +91 87249 32985 with the subject 'Data Privacy Inquiries'.",
  },
];

export default function PrivacyPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.nerqivastudio.in",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Privacy Policy",
        "item": "https://www.nerqivastudio.in/privacy",
      },
    ],
  };

  return (
    <div className="pt-32 relative z-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Header */}
      <div className="section-container mb-14 sm:mb-16 max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-text-secondary hover:text-accent transition-colors mb-8 group"
        >
          <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-0.5" /> Back to Home
        </Link>

        <h1
          className="font-serif text-text-primary leading-[1.12] mb-6 tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)", letterSpacing: "-0.03em" }}
        >
          Privacy & <span className="italic font-normal text-accent">Data Protection</span>.
        </h1>

        <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl font-normal mb-8">
          We treat your data with the same rigorous engineering standards we apply to our web codebases. Clear, tracker-free, and fully compliant with India&apos;s DPDP Act 2023.
        </p>

        {/* Document Metadata Pill */}
        <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-text-tertiary">
          <span className="px-3 py-1 rounded-full bg-bg-card border border-border/80 font-bold text-text-secondary shadow-2xs">
            Document: NERQIVA-PRV-2026
          </span>
          <span className="px-3 py-1 rounded-full bg-bg-card border border-border/80 text-text-secondary shadow-2xs flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Effective: September 2026
          </span>
          <span className="px-3 py-1 rounded-full bg-bg-card border border-border/80 text-text-secondary shadow-2xs flex items-center gap-1.5">
            <FileCheck size={11} className="text-accent-gold" />
            Statutory: DPDP Act 2023 Compliant
          </span>
        </div>
      </div>

      {/* Plain-English Executive Summary */}
      <div className="section-container mb-20 max-w-5xl">
        <div className="card-luxury p-6 sm:p-9 rounded-2xl bg-bg-card border border-border/70 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-border/40">
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-text-primary">
              Plain-English privacy commitments
            </h2>
            <span className="self-start sm:self-center font-mono text-[10px] tracking-wider text-accent-gold font-bold bg-accent-gold/10 border border-accent-gold/25 px-2.5 py-1 rounded-full">
              Zero-Tracker Guarantee
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {SUMMARY_POINTS.map((pt, idx) => {
              const IconComp = pt.icon;
              return (
                <div key={idx} className="p-4 sm:p-5 rounded-xl bg-bg-secondary/60 border border-border/50 flex flex-col justify-between">
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-3">
                      <IconComp size={16} />
                    </div>
                    <h3 className="font-sans font-bold text-sm text-text-primary mb-1">
                      {pt.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary text-xs leading-relaxed font-normal mt-2">
                    {pt.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Complete Legal Clauses 2-Column Grid */}
      <div className="section-container mb-24 max-w-5xl">
        <div className="mb-10 max-w-2xl">
          <h2
            className="font-serif text-text-primary leading-[1.15] tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)", letterSpacing: "-0.03em" }}
          >
            Statutory privacy & data <span className="italic font-normal text-accent">provisions</span>.
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-normal mt-2">
            Detailed policies governing data minimization, client confidentiality, infrastructure security, and legal compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          {PRIVACY_CLAUSES.map((clause) => (
            <div
              key={clause.number}
              className="card-luxury p-6 sm:p-7 rounded-2xl bg-bg-card border border-border/70 hover:border-accent/40 transition-colors shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3.5 pb-3 border-b border-border/40">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-md bg-accent/10 border border-accent/25 text-accent font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      {clause.number}
                    </span>
                    <h3 className="font-sans font-bold text-base sm:text-lg text-text-primary tracking-tight">
                      {clause.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-tertiary font-bold bg-bg-secondary px-2 py-0.5 rounded border border-border/50 shrink-0">
                    {clause.tag}
                  </span>
                </div>

                <p className="text-text-secondary text-xs sm:text-[13px] leading-relaxed font-normal">
                  {clause.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Data Protection Inquiries Card */}
      <div className="section-container mb-28 max-w-5xl">
        <div className="card-luxury p-7 sm:p-10 rounded-2xl bg-bg-card border border-border/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-text-primary">
              Data protection inquiries & purge requests
            </h3>
            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed font-normal">
              Have questions about how your business information is handled, or wish to execute a formal data export or permanent deletion request? Contact our Data Protection Officer directly.
            </p>
          </div>

          <a
            href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'd%20like%20to%20inquire%20about%20data%20privacy%20and%20purging."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 font-mono text-xs font-semibold rounded-lg shrink-0 shadow-sm whitespace-nowrap"
          >
            <span>Contact Privacy Officer</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <ClosingSection />
    </div>
  );
}
