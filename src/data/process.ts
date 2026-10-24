export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  tagline: string;
  timeframe: string;
  description: string;
  details: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "select",
    number: "01",
    title: "Framework Selection",
    tagline: "Select a production-tested benchmark tailored to your industry",
    timeframe: "10 Mins",
    description: "Review our verified live flagships engineered for premium service businesses. Select the conversion architecture and interactive booking flow tailored to your brand.",
    details: ["Live Interactive Demos", "Sub-300ms Mobile Core", "Direct WhatsApp Routing", "Zero Setup Overhead"],
  },
  {
    id: "details",
    number: "02",
    title: "Asset & Identity Intake",
    tagline: "Frictionless intake of your assets and business details",
    timeframe: "1 Hour",
    description: "Transmit your logos, photography, service tier pricing, and contact credentials directly via WhatsApp or email. No cumbersome onboarding forms or technical portals.",
    details: ["Brand Identity & Color Tokens", "Tiered Service Menu & Rates", "Direct WhatsApp Routing Target", "Google Business Profile Sync"],
  },
  {
    id: "customize",
    number: "03",
    title: "Precision Engineering & Tailoring",
    tagline: "Bespoke interface styling and conversion optimization",
    timeframe: "12 Hours",
    description: "We tailor the architecture with your verified branding, write commercial-grade copy, optimize every asset for instantaneous mobile loading, and configure lead tracking.",
    details: ["Custom Component Styling", "Lighthouse 95+ Performance", "Pre-Filled WhatsApp CTAs", "Local Structured SEO Schema"],
  },
  {
    id: "test",
    number: "04",
    title: "Live Staging & Phone Verification",
    tagline: "Direct mobile verification on your actual device",
    timeframe: "2 Hours",
    description: "Receive a private staging link directly on your smartphone. Verify booking interactions, touch targets, and visual polish on real hardware before public deployment.",
    details: ["Private Staging URL", "Cross-Device Touch Verification", "WhatsApp Message Flow Audit", "Same-Day Fine Adjustments"],
  },
  {
    id: "launch",
    number: "05",
    title: "Domain Cutover & Lead Launch",
    tagline: "Public launch with guaranteed 24-hour turnaround",
    timeframe: "24 Hours Total",
    description: "We bind your custom domain with enterprise SSL, configure global edge caching, and execute final DNS cutover. Your flagship starts capturing customer inquiries immediately.",
    details: ["Instant SSL & Custom Domain", "Direct Inbound Lead Flow", "Google Maps & Search Indexing", "Managed Serverless Hosting"],
  },
];

