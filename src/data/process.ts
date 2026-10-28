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
    id: "blueprint",
    number: "01",
    title: "Day 1: Blueprint & Editorial Copy",
    tagline: "20-minute intake call or WhatsApp brief — zero technical jargon",
    timeframe: "Day 1",
    description: "We review your brand, existing client inquiries, service tiers, and pricing. Our team writes commercial-grade, authentic copy that answers buyer objections upfront without corporate buzzwords.",
    details: ["20-min strategy alignment", "Service menu & pricing matrix", "High-converting editorial copy", "Brand palette & typography curation"],
  },
  {
    id: "architecture",
    number: "02",
    title: "Day 2: Architecture & Speed Engineering",
    tagline: "Custom Next.js frontend built for sub-second mobile performance",
    timeframe: "Day 2",
    description: "We code your custom digital storefront from scratch using Next.js and Tailwind. Every hero section, photo gallery, and service card is optimized for instantaneous loading on real 4G/5G mobile connections.",
    details: ["Custom responsive design", "Sub-second load on Jio/Airtel 4G", "Retina photo optimization", "Zero slow WordPress plugins"],
  },
  {
    id: "automation",
    number: "03",
    title: "Day 3: WhatsApp Automation & Local Search",
    tagline: "Connecting your inquiry funnels directly into your daily workflow",
    timeframe: "Day 3",
    description: "We wire the 1-tap WhatsApp booking button with pre-filled service and budget parameters. We configure your Google Business Profile, verified local Maps pin, and structured SEO schema so local buyers discover you first.",
    details: ["1-tap WhatsApp lead flow", "Pre-filled client inquiry text", "Google Maps location calibration", "Local structured schema SEO"],
  },
  {
    id: "launch",
    number: "04",
    title: "Day 4: Staging Audit & Live Launch",
    tagline: "Verified on your personal phone before public domain cutover",
    timeframe: "Day 4",
    description: "You receive a private staging URL to test on your own smartphone. Once you approve, we configure DNS, attach your custom domain with enterprise SSL, and launch your live revenue engine.",
    details: ["Private mobile staging link", "End-to-end booking test", "Custom domain & SSL cutover", "Live client acquisition begins"],
  },
];
