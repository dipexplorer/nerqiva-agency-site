import type { Metadata } from "next";
import { Fraunces, DM_Sans, DM_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: {
    default: "NERQIVA Studio | High-Converting Websites & Digital Systems",
    template: "%s | NERQIVA Studio",
  },
  description:
    "NERQIVA is a specialized digital systems studio. We engineer high-converting web applications, automate operational workflows, and build premium digital experiences that turn traffic into qualified leads.",
  keywords: [
    "North Guwahati Website Design",
    "Rudreswar Web Developer",
    "Guwahati Website Design Agency",
    "Assam Web Design Studio",
    "24 Hour Express Website Launch",
    "1-Click WhatsApp Lead Routing",
    "Google Maps Local Search Optimization",
    "Next.js Development Agency Assam",
    "Custom Web Application Development",
    "High Converting Website Design",
    "UI/UX Design Studio India",
  ],
  authors: [{ name: "NERQIVA Studio" }],
  metadataBase: new URL("https://nerqiva.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NERQIVA Studio | High-Converting Websites & Digital Systems",
    description:
      "We build high-converting business websites delivered in 24 Hours with 1-click WhatsApp lead routing and Google Maps local SEO for North Guwahati, Rudreswar, Guwahati, Assam & Pan-India.",
    type: "website",
    locale: "en_US",
    url: "https://nerqiva.vercel.app",
    siteName: "NERQIVA Studio",
    images: [
      {
        url: "/icon.png",
        width: 800,
        height: 800,
        alt: "NERQIVA Studio Official Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NERQIVA Studio | High-Converting Websites in 24 Hours",
    description:
      "Stunning websites with 1-click WhatsApp lead routing & local SEO for North Guwahati, Rudreswar, Guwahati, and Assam.",
    images: ["/icon.png"],
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
        "@id": "https://nerqiva.vercel.app/#localbusiness",
        "name": "NERQIVA Studio",
        "url": "https://nerqiva.vercel.app",
        "logo": "https://nerqiva.vercel.app/icon.png",
        "image": "https://nerqiva.vercel.app/icon.png",
        "description": "High-converting business website design, 1-click WhatsApp lead routing, Google Maps local search optimization, and custom web systems delivered in 24 Hours.",
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
        "@id": "https://nerqiva.vercel.app/#organization",
        "name": "NERQIVA Studio",
        "url": "https://nerqiva.vercel.app",
        "logo": "https://nerqiva.vercel.app/icon.png",
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
        "@id": "https://nerqiva.vercel.app/#website",
        "url": "https://nerqiva.vercel.app",
        "name": "NERQIVA Studio",
        "inLanguage": "en-US",
        "publisher": {
          "@id": "https://nerqiva.vercel.app/#organization"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} ${dmMono.variable} h-full antialiased`}
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
        </ThemeProvider>
      </body>
    </html>
  );
}
