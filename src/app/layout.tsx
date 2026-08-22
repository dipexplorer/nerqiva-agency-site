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
  title: "NERQIVA Studio | Premium Web Engineering & Digital Growth Systems",
  description:
    "NERQIVA is a specialized digital systems studio. We engineer high-converting web applications, automate operational workflows, and build premium digital experiences that turn traffic into qualified leads.",
  keywords: [
    "Digital Systems Studio",
    "Web Application Development",
    "High Converting Website Design",
    "Workflow Automation Agency",
    "Next.js Development Agency",
    "Custom Web Systems",
    "Business Process Automation",
    "Lead Generation Websites",
    "Software Development Firm",
    "UI/UX Design Studio"
  ],
  authors: [{ name: "NERQIVA Studio" }],
  metadataBase: new URL("https://nerqiva.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NERQIVA Studio | Premium Web Engineering & Digital Growth Systems",
    description:
      "We engineer high-converting web applications and automate operational workflows. Accelerate your business growth with our premium digital experiences.",
    type: "website",
    locale: "en_US",
    url: "https://nerqiva.vercel.app",
    siteName: "NERQIVA Studio",
    images: [
      {
        url: "/icon.png",
        width: 800,
        height: 800,
        alt: "NERQIVA Studio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NERQIVA Studio | Premium Web Engineering",
    description:
      "We engineer high-converting web applications and automate operational workflows. Turn traffic into qualified leads.",
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
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
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
