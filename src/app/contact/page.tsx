import { Metadata } from "next";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Start a Project Brief | Free 24-Hour Scoping Diagnostic",
  description:
    "Tell us about your business goals and bottlenecks. Submit a project intake brief to get direct WhatsApp demo links, pricing, and 24-hour launch scoping.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Start a Project Brief | NERQIVA Studio",
    description:
      "Submit a project intake brief to get direct WhatsApp demo links, pricing, and 24-hour launch scoping.",
    url: "https://nerqiva.vercel.app/contact",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
