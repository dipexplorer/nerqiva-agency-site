import type { Metadata } from "next";
import { Fraunces, DM_Sans, DM_Mono, Caveat } from "next/font/google";
import "./globals.css";

// Editorial display serif — optical size variable, used for headings
const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

// Warm humanist sans — body text, UI labels
const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

// Mono — small labels, URL bars, pill tags
const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

// Authentic handwritten typography
const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "NERQIVA Studio — Websites Built to Bring You Real Paying Clients",
    template: "%s | NERQIVA Studio",
  },
  description:
    "We don't build generic brochure websites. We engineer high-converting digital platforms, 1-click WhatsApp lead routing, and Google local SEO for business owners who refuse to look amateur online.",
  keywords: [
    "High Converting Website Design",
    "Custom Web Development Agency",
    "1-Click WhatsApp Lead Routing",
    "Next.js Development Agency",
    "Guwahati Website Design Studio",
    "Google Maps Local SEO",
    "Digital Systems and Automation",
    "UI/UX Design Studio India",
    "NERQIVA Studio",
  ],
  authors: [{ name: "NERQIVA Studio" }],
  creator: "NERQIVA Studio",
  publisher: "NERQIVA Studio",
  metadataBase: new URL("https://www.nerqivastudio.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NERQIVA Studio — Websites Built to Bring You Real Paying Clients",
    description:
      "For business owners who refuse to look amateur online. Handcrafted high-converting web architecture, 1-click WhatsApp lead routing, and 7–10 day delivery.",
    type: "website",
    locale: "en_US",
    url: "https://www.nerqivastudio.in",
    siteName: "NERQIVA Studio",
    images: [
      {
        url: "https://www.nerqivastudio.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "NERQIVA Studio — Websites Built to Bring You Real Paying Clients",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NERQIVA Studio — Websites Built to Bring You Real Paying Clients",
    description:
      "For business owners who refuse to look amateur online. High-converting web systems, 1-click WhatsApp lead capture & 7–10 day delivery.",
    images: ["https://www.nerqivastudio.in/og-image.png"],
    creator: "@nerqivastudio",
    site: "@nerqivastudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "phmVP2MVbts7XXuRlp0fUVjDy3BAiGJY8nY5ShtauOM",
  },
};

import { ThemeProvider } from "../components/ThemeProvider";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import InteractiveGridBackground from "../components/InteractiveGridBackground";
import Loader from "../components/Loader";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": "https://www.nerqivastudio.in/#localbusiness",
        "name": "NERQIVA Studio",
        "url": "https://www.nerqivastudio.in",
        "logo": "https://www.nerqivastudio.in/icon.png",
        "image": "https://www.nerqivastudio.in/og-image.png",
        "description": "High-converting business website design, 1-click WhatsApp lead routing, Google Maps local search optimization, and bespoke digital platforms.",
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
        "hasMap": "https://share.google/6KKUdxiR4zdUDuAnT",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "20:00"
        },
        "sameAs": [
          "https://linkedin.com/in/dip-jyoti22",
          "https://github.com/dipexplorer",
          "https://dip-jyoti22.vercel.app/"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://www.nerqivastudio.in/#organization",
        "name": "NERQIVA Studio",
        "url": "https://www.nerqivastudio.in",
        "logo": "https://www.nerqivastudio.in/icon.png",
        "founder": {
          "@type": "Person",
          "name": "Dipjyoti Das",
          "jobTitle": "Founder & Lead Engineer",
          "sameAs": [
            "https://linkedin.com/in/dip-jyoti22",
            "https://github.com/dipexplorer"
          ]
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-8724932985",
          "contactType": "customer service",
          "email": "nerqiva.studio@gmail.com",
          "areaServed": ["IN"],
          "availableLanguage": ["English", "Assamese", "Hindi"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.nerqivastudio.in/#website",
        "url": "https://www.nerqivastudio.in",
        "name": "NERQIVA Studio",
        "inLanguage": "en-US",
        "publisher": {
          "@id": "https://www.nerqivastudio.in/#organization"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${dmMono.variable} ${caveat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <Loader />
          <InteractiveGridBackground />
          <Navigation />
          
          <main className="flex-1 flex flex-col bg-transparent text-text-primary selection:bg-accent/30 overflow-x-hidden relative z-10 w-full">
            {children}
          </main>
          
          <div className="relative z-20 w-full mt-auto">
            <Footer />
          </div>

          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
