import { Metadata } from "next";
import ContactForm from "../../components/ContactForm";
import ClosingSection from "../../components/ClosingSection";

export const metadata: Metadata = {
  title: "Start a Project Diagnostic | NERQIVA Studio",
  description:
    "Submit a structured project intake brief to receive a fixed-price roadmap, architecture scoping, and direct WhatsApp demo links within 24 hours.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Start a Project Diagnostic | NERQIVA Studio",
    description:
      "Submit a structured project intake brief to receive a fixed-price roadmap, architecture scoping, and direct WhatsApp demo links within 24 hours.",
    url: "https://www.nerqivastudio.in/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-32 relative z-20">
      <ContactForm />
      <ClosingSection />
    </div>
  );
}
