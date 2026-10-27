import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, FileText, ArrowRight, HelpCircle, Code, Lock } from "lucide-react";
import ClosingSection from "../../components/ClosingSection";

export const metadata: Metadata = {
  title: "Terms of Service & Client Agreement | NERQIVA Studio",
  description:
    "Review our transparent, business-friendly terms governing 24-hour website launches, 100% code and asset ownership, payment milestones, and quality standards.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service & Client Agreement | NERQIVA Studio",
    description:
      "Clear, transparent commercial terms: 100% asset ownership, 24-hour launch SLA, zero monthly lock-in retainers.",
    url: "https://www.nerqivastudio.in/terms",
  },
};

const SUMMARY_POINTS = [
  {
    title: "100% Asset Ownership",
    desc: "You own all custom code, design assets, and domain DNS upon final settlement with zero lock-in.",
    icon: Code,
  },
  {
    title: "Zero Monthly Retainers",
    desc: "Fixed one-time project investment. No mandatory maintenance contracts or hidden monthly fees.",
    icon: Lock,
  },
  {
    title: "24-Hour Express SLA",
    desc: "Private mobile preview link delivered within 24 hours of complete asset intake receipt.",
    icon: Clock,
  },
  {
    title: "Direct Founder Channel",
    desc: "Direct communication with the principal engineer building your system via WhatsApp.",
    icon: ShieldCheck,
  },
];

const TERMS_CLAUSES = [
  {
    number: "01",
    tag: "ENGAGEMENT PROTOCOL",
    title: "Scope of Engagement & Project Intake",
    content:
      "Work commences upon mutual written agreement via project brief submission, WhatsApp scoping confirmation, or initial deposit. Every engagement defines a specific scope of deliverables, agreed feature tiers, and pricing before engineering begins. Turnaround guarantees are conditioned on the prompt provision of essential client assets, including branding logos, high-resolution photography, service menus/pricing, and WhatsApp target coordinates.",
  },
  {
    number: "02",
    tag: "INTELLECTUAL PROPERTY",
    title: "Complete Code, Domain & Asset Handover",
    content:
      "Upon completion of the project and full settlement of the agreed invoice, the client receives 100% unrestricted ownership of all bespoke code, design styling, customized layouts, and digital assets created for the project. NERQIVA retains zero proprietary vendor locks, zero software license fees, and zero ongoing access restrictions. Underlying open-source frameworks (Next.js, React, Tailwind CSS) remain governed by their respective standard open-source licenses (MIT/Apache 2.0).",
  },
  {
    number: "03",
    tag: "DELIVERY & SLA",
    title: "24-Hour Turnaround Protocol & Staging Verification",
    content:
      "Our guaranteed 24-hour turnaround begins immediately once all agreed business assets, brand colors, and copy requirements are received in full. Within this window, NERQIVA provides a fully functional private staging preview URL for direct client verification on mobile and desktop hardware. Public domain cutover and live DNS propagation are executed immediately following client staging approval.",
  },
  {
    number: "04",
    tag: "COMMERCIALS & PAYMENT",
    title: "Transparent Commercials & Payment Milestones",
    content:
      "All standard website builds are fixed, one-time commercial investments. Unless specifically agreed otherwise in writing, payments follow a standard milestone structure: a 50% mobilization deposit upon project initiation, with the remaining 50% balance payable upon client staging verification prior to final live domain cutover. Invoices are issued electronically and payable via standard digital methods (UPI, Net Banking, or Direct Bank Transfer).",
  },
  {
    number: "05",
    tag: "CONTENT & INDEMNITY",
    title: "Client Content, Trademarks & Warranties",
    content:
      "The client warrants that all logos, imagery, trade names, copywriting, and media provided to NERQIVA for inclusion in the website are owned by the client or legally licensed for commercial publication. The client agrees to indemnify and hold harmless NERQIVA Studio against any third-party copyright, trademark, or intellectual property claims resulting from materials furnished by the client.",
  },
  {
    number: "06",
    tag: "REVISIONS & SCOPE",
    title: "Staging Verification & Launch Revision Scope",
    content:
      "Prior to public domain cutover, the client is granted a private staging review period to audit layout fidelity, contact links, and mobile responsiveness. The build package includes complimentary fine-tuning of typography, spacing, imagery placement, and business coordinates. Substantial architectural additions, new third-party integrations, or major scope expansions requested after initial scoping will be itemized as transparent supplementary milestones.",
  },
  {
    number: "07",
    tag: "INFRASTRUCTURE & APIS",
    title: "Edge Hosting, Domain DNS & Third-Party Dependencies",
    content:
      "NERQIVA provisions websites on modern serverless edge architecture (Vercel Edge Network / Cloudflare CDN) featuring automated SSL certificate management and global caching. Domain name registration and ongoing annual renewals remain the direct legal property and responsibility of the client. Third-party platform policies (including WhatsApp Business, Meta, and Google Business Profiles) remain subject to their respective terms and service availability.",
  },
  {
    number: "08",
    tag: "LEGAL JURISDICTION",
    title: "Limitation of Liability & Governing Law",
    content:
      "To the maximum extent permitted by applicable law, NERQIVA Studio's cumulative financial liability for any direct, indirect, or incidental claim arising out of or related to our services shall be strictly limited to the total fees actually paid by the client for the specific project engagement. These terms shall be governed by and construed in accordance with the laws of India, with exclusive jurisdiction resting in the competent courts of Guwahati, Assam.",
  },
];

export default function TermsPage() {
  return (
    <div className="pt-32 relative z-20">
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
          Terms of <span className="italic font-normal text-accent">Service</span>.
        </h1>

        <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl font-normal mb-8">
          Clear, business-friendly terms governing our engineering deliverables, 100% intellectual property transfer, 24-hour launch commitments, and commercial standards.
        </p>

        {/* Document Metadata Pill */}
        <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-text-tertiary">
          <span className="px-3 py-1 rounded-full bg-bg-card border border-border/80 font-bold text-text-secondary shadow-2xs">
            Document: NERQIVA-TOS-2026
          </span>
          <span className="px-3 py-1 rounded-full bg-bg-card border border-border/80 text-text-secondary shadow-2xs flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Effective: September 2026
          </span>
          <span className="px-3 py-1 rounded-full bg-bg-card border border-border/80 text-text-secondary shadow-2xs">
            Jurisdiction: Guwahati, Assam
          </span>
        </div>
      </div>

      {/* Plain-English Executive Summary */}
      <div className="section-container mb-20 max-w-5xl">
        <div className="card-luxury p-6 sm:p-9 rounded-2xl bg-bg-card border border-border/70 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-border/40">
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-text-primary">
              Plain-English summary of commitments
            </h2>
            <span className="self-start sm:self-center font-mono text-[10px] tracking-wider text-accent-gold font-bold bg-accent-gold/10 border border-accent-gold/25 px-2.5 py-1 rounded-full">
              Client Protection Standard
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
            Operational terms & commercial <span className="italic font-normal text-accent">clauses</span>.
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed font-normal mt-2">
            Every website build is delivered under transparent, legally binding provisions with zero ongoing lock-in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          {TERMS_CLAUSES.map((clause) => (
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

      {/* Clarification & Inquiries Card */}
      <div className="section-container mb-28 max-w-5xl">
        <div className="card-luxury p-7 sm:p-10 rounded-2xl bg-bg-card border border-border/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-text-primary">
              Custom scopes & enterprise agreements
            </h3>
            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed font-normal">
              Need tailored service level agreements, specific NDA documentation, or corporate procurement billing? We accommodate custom client agreements for specialized clinics, private studios, and enterprise practices.
            </p>
          </div>

          <a
            href="https://wa.me/918724932985?text=Hi%20NERQIVA,%20I'd%20like%20to%20inquire%20about%20custom%20project%20terms."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 font-mono text-xs font-semibold rounded-lg shrink-0 shadow-sm whitespace-nowrap"
          >
            <span>Inquire via WhatsApp</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>

      <ClosingSection />
    </div>
  );
}
