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
    title: "CHOOSE YOUR DEMO",
    tagline: "Pick a live website design you love.",
    timeframe: "10 Mins",
    description: "Browse our live interactive demo websites for salons, wedding photography, clinics, or luxury brands. Pick the layout that fits your business style.",
    details: ["Live Interactive Previews", "Mobile-First Design", "Instant WhatsApp Integration", "Zero Setup Hassle"],
  },
  {
    id: "details",
    number: "02",
    title: "SHARE YOUR DETAILS",
    tagline: "Send us your text, photos & logo.",
    timeframe: "1 Hour",
    description: "Send us your photos, services list, phone number, and location via WhatsApp or email. No complicated forms or technical setup required.",
    details: ["Logo & Brand Colors", "Services & Price List", "WhatsApp & Phone Number", "Google Maps Location"],
  },
  {
    id: "customize",
    number: "03",
    title: "CUSTOMIZE & POLISH",
    tagline: "We build & tailor your website.",
    timeframe: "12 Hours",
    description: "We customize the demo website with your images, write persuasive text, configure direct WhatsApp booking buttons, and optimize for mobile phones.",
    details: ["Custom Layout Setup", "Fast Mobile Loading", "WhatsApp Lead Alert Buttons", "SEO & Local Search Setup"],
  },
  {
    id: "test",
    number: "04",
    title: "TEST & PREVIEW",
    tagline: "Check your live site on your phone.",
    timeframe: "2 Hours",
    description: "We send you a private live preview link to test on your phone. We make any minor changes or updates you request before launching.",
    details: ["Private Preview Link", "Mobile Screen Test", "WhatsApp Flow Check", "Instant Revision Updates"],
  },
  {
    id: "launch",
    number: "05",
    title: "GO LIVE & GET LEADS",
    tagline: "Your site is live in 24 Hours!",
    timeframe: "24 Hours Total",
    description: "We connect your domain name (or provide one for you). Your business website goes live immediately and starts generating customer leads directly to your WhatsApp!",
    details: ["1-Click Domain Setup", "Direct WhatsApp Lead Alerts", "Google Maps Setup", "Zero Monthly Hosting Fees"],
  },
];
