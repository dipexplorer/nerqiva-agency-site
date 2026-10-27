import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, HelpCircle } from "lucide-react";
import FAQ from "../../components/FAQ";
import ClosingSection from "../../components/ClosingSection";

export const metadata: Metadata = {
  title: "Frequently Asked Questions & Answers | NERQIVA Studio",
  description:
    "Direct, transparent answers regarding website turnaround speed, code ownership, fixed pricing in Guwahati & Assam, WhatsApp lead capture, and our 24-hour launch workflow.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | NERQIVA Studio",
    description:
      "Direct answers on turnaround, code ownership, fixed pricing, and 24-hour deployment for businesses in Guwahati and Assam.",
    url: "https://www.nerqivastudio.in/faq",
  },
};

export default function FAQPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.nerqivastudio.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Frequently Asked Questions",
        "item": "https://www.nerqivastudio.in/faq"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="min-h-screen bg-bg-primary text-text-primary pt-28 sm:pt-36">
        {/* Page Header */}
        <section className="section-container pb-6 sm:pb-10">
          <div className="max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs text-text-tertiary hover:text-accent transition-colors mb-6 group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Studio</span>
            </Link>

            <h1
              className="font-serif text-text-primary leading-[1.12] mb-5 tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}
            >
              Frequently asked <span className="italic font-normal text-accent">questions</span>.
            </h1>
            <p className="text-text-secondary text-base sm:text-xl leading-relaxed font-normal">
              Direct, verified answers on turnaround times, full code ownership, transparent pricing, and our 24-hour website launch workflow.
            </p>
          </div>
        </section>

        {/* Embedded Accordion */}
        <FAQ />

        {/* Closing Call to Action */}
        <ClosingSection />
      </main>
    </>
  );
}
