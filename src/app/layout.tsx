import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NERQIVA — Digital Systems, Web & AI Solutions",
  description:
    "We build digital systems, web applications, and AI integrations that make complicated things easier to use. Engineering credibility, clarity, and conversion.",
  keywords: [
    "Digital Systems Studio",
    "Web Application Development",
    "AI Integration",
    "Next.js Developer",
    "Full-Stack Engineer",
    "Automation",
    "Custom Web Apps",
    "React",
    "FastAPI",
  ],
  authors: [{ name: "NERQIVA" }],
  metadataBase: new URL("https://nerqiva.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NERQIVA — Digital Systems, Web & AI Solutions",
    description:
      "We build digital systems, web applications, and AI integrations that make complicated things easier to use.",
    type: "website",
    locale: "en_US",
    url: "https://nerqiva.com",
    siteName: "NERQIVA",
  },
  twitter: {
    card: "summary_large_image",
    title: "NERQIVA — Digital Systems, Web & AI Solutions",
    description:
      "We build digital systems, web applications, and AI integrations that make complicated things easier to use.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary font-sans">
        {children}
      </body>
    </html>
  );
}
