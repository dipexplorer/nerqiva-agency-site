import { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ClosingSection from "../../components/ClosingSection";

export const metadata: Metadata = {
  title: "Services & Solutions | High-Converting Business Websites",
  description:
    "Explore NERQIVA's services: high-converting business websites, 1-click WhatsApp lead routing, Google Maps local search optimization, and custom client portals.",
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "Services & Solutions | High-Converting Business Websites | NERQIVA",
    description:
      "Explore NERQIVA's services: high-converting business websites, 1-click WhatsApp lead routing, and Google Maps local SEO.",
    url: "https://nerqiva.vercel.app/solutions",
  },
};

const SOLUTIONS_DETAIL = [
  {
    id: "website",
    index: "01",
    tag: "Core Digital Flagship",
    title: "High-Converting Business Websites",
    subtitle: "Architected for local studios, clinics, and service providers who need immediate digital credibility and client acquisition.",
    problem: "Many local businesses lose high-ticket clients because their websites load slowly, break on modern mobile viewports, or look outdated. If first-time visitors don't feel immediate confidence, they leave and book a competitor.",
    whatWeBuild: "Bespoke Next.js edge web flagships engineered with sub-300ms loading speeds, mobile-first typography, curated service portfolios, and zero-friction 1-click booking actions.",
    whenItMakesSense: "When your current site fails to generate high-value inquiries, or you are launching a premium brand that requires undeniable digital authority.",
    deliverySLA: "24-Hour Public Cutover",
    expectations: "A blazingly fast digital storefront that validates your pricing, builds immediate client trust, and turns visits into direct phone & WhatsApp conversations.",
  },
  {
    id: "whatsapp",
    index: "02",
    tag: "Lead Capture & Funnel",
    title: "Instant WhatsApp Booking Flow",
    subtitle: "Engineered for local service businesses that need direct, frictionless customer intake.",
    problem: "Modern clients browse on smartphones and refuse to fill out 8-field contact forms only to wait 48 hours for an email response. They want answers and booking confirmation immediately.",
    whatWeBuild: "One-tap direct WhatsApp integration buttons pre-configured with industry-specific inquiry templates, automated service query triggers, and direct mobile routing.",
    whenItMakesSense: "When you want every high-intent website visitor connected to your business WhatsApp in under 3 seconds with zero friction.",
    deliverySLA: "Integrated & Tested in 2 Hours",
    expectations: "Immediate inbound inquiries arriving directly on your phone with service context already filled in, ready to close.",
  },
  {
    id: "local-seo",
    index: "03",
    tag: "Local Search Authority",
    title: "Google Maps & Local Search Visibility",
    subtitle: "Built for storefronts and regional service providers seeking dominant local search placement.",
    problem: "When local clients search 'best salon near me' or 'physiotherapy clinic in Guwahati', businesses without structured local SEO metadata and linked Google profiles lose the booking immediately.",
    whatWeBuild: "Structured LocalBusiness schema.org data integration, linked Google Maps verification widgets, direct click-to-call mobile buttons, and local geotag optimization.",
    whenItMakesSense: "When you need nearby customers searching on Google to find your exact location, operating hours, and booking channel before your competitors.",
    deliverySLA: "Included with Every Deployment",
    expectations: "Higher regional search ranking, clear turn-by-turn directions for new clients, and steady inbound phone call volume.",
  },
  {
    id: "custom-portals",
    index: "04",
    tag: "Operational Systems",
    title: "Custom Client Portals & Schedulers",
    subtitle: "Designed for studios, fitness clubs, and consultants needing automated client self-service.",
    problem: "Manually coordinating appointment calendars, emailing photo review links, or tracking unpaid service invoices through fragmented chat threads wastes dozens of operational hours each week.",
    whatWeBuild: "Lightweight client access portals, automated booking calendars with slot locking, client gallery proofing pages, and invoice status dashboards.",
    whenItMakesSense: "When client booking volume outgrows manual messaging and you need an automated, professional system to run appointments.",
    deliverySLA: "Delivered in 24 to 48 Hours",
    expectations: "Automated calendar scheduling, organized client intake, and hours of administrative overhead eliminated every single day.",
  },
];

export default function SolutionsPage() {
  const solutionsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://nerqiva.vercel.app",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services & Solutions",
            "item": "https://nerqiva.vercel.app/solutions",
          },
        ],
      },
      ...SOLUTIONS_DETAIL.map((sol) => ({
        "@type": "Service",
        "serviceType": sol.title,
        "name": sol.title,
        "description": sol.problem,
        "provider": {
          "@type": "LocalBusiness",
          "name": "NERQIVA Studio",
          "url": "https://nerqiva.vercel.app",
        },
        "areaServed": ["North Guwahati", "Rudreswar", "Guwahati", "Assam", "India"],
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "price": "Contact for quote",
          "priceCurrency": "INR",
        },
      })),
    ],
  };

  return (
    <div className="pt-28 sm:pt-36 relative z-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsSchema) }}
      />

      {/* Page Header: Pure Typographic Authority without AI Kicker */}
      <div className="section-container mb-16 sm:mb-24 max-w-4xl">
        <h1
          className="font-serif text-text-primary leading-[1.12] mb-6 tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}
        >
          High-converting websites built to{" "}
          <span className="italic font-normal text-accent">grow your business</span>.
        </h1>
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
          We build bespoke, fast, and conversion-focused digital systems for local business owners. Delivered live in{" "}
          <strong className="font-semibold text-text-primary">24 Hours</strong> with zero ongoing hostage fees.
        </p>
      </div>

      {/* Services List: Architectural Cards */}
      <div className="section-container mb-24 sm:mb-32 max-w-5xl">
        <div className="flex flex-col gap-10 sm:gap-14">
          {SOLUTIONS_DETAIL.map((sol) => (
            <div
              key={sol.id}
              id={sol.id}
              className="card-luxury p-7 sm:p-10 md:p-12 relative overflow-hidden bg-bg-card border border-border/70 rounded-2xl shadow-xs transition-all duration-300"
            >
              <div className="relative z-10 grid md:grid-cols-12 gap-8 lg:gap-12">
                {/* Left Column: Title, Subtitle, Problem & Deliverables */}
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-widest px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20">
                        {sol.tag}
                      </span>
                      <span className="font-mono text-xs text-text-tertiary">
                        {sol.index}
                      </span>
                    </div>

                    <h2 className="font-sans font-bold text-2xl sm:text-3xl text-text-primary mb-2.5 tracking-tight">
                      {sol.title}
                    </h2>
                    <p className="text-sm text-text-secondary leading-relaxed font-normal">
                      {sol.subtitle}
                    </p>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed font-normal">
                    {sol.problem}
                  </p>

                  <div className="pt-4 border-t border-border/40">
                    <h3 className="font-mono text-[10px] uppercase tracking-widest text-text-tertiary font-bold mb-2">
                      What We Build
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed font-normal">
                      {sol.whatWeBuild}
                    </p>
                  </div>
                </div>

                {/* Right Column: Spec Sheet & Dynamic WhatsApp Action */}
                <div className="md:col-span-5 flex flex-col justify-between gap-8 pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-border/40 md:pl-8 lg:pl-10">
                  <div className="space-y-5">
                    <div>
                      <h4 className="font-mono text-[10px] uppercase tracking-widest text-text-tertiary font-bold mb-1.5">
                        Ideal Use Case
                      </h4>
                      <p className="text-xs text-text-secondary leading-relaxed font-normal">
                        {sol.whenItMakesSense}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-mono text-[10px] uppercase tracking-widest text-text-tertiary font-bold mb-1.5">
                        Delivery Timeline
                      </h4>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-accent-gold shrink-0" />
                        <span className="text-xs font-mono font-semibold text-text-primary">
                          {sol.deliverySLA}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-mono text-[10px] uppercase tracking-widest text-text-tertiary font-bold mb-1.5">
                        Commercial Outcome
                      </h4>
                      <p className="text-xs text-text-secondary leading-relaxed font-normal">
                        {sol.expectations}
                      </p>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/918724932985?text=${encodeURIComponent(
                      `Hi NERQIVA! I'd like to get started with ${sol.title}. Please send me relevant live demos and details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full flex items-center justify-center gap-2 text-xs"
                  >
                    <span>Get Started in 24h</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ClosingSection />
    </div>
  );
}
