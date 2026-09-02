export interface Solution {
  id: string;
  number: string;
  title: string;
  tagline: string;
  body: string;
  examples: string[];
}

export const SOLUTIONS: Solution[] = [
  {
    id: "website",
    number: "01",
    title: "High-Converting Business Websites",
    tagline: "Websites designed to turn visitors into paying clients.",
    body: "We build ultra-fast, mobile-friendly websites for local businesses. Perfect for salons, wedding photographers, clinics, and local brands who want a premium online presence that gets results.",
    examples: ["Salon & Beauty Websites", "Wedding & Candid Photography", "Medical & Dental Clinics", "E-commerce & Local Stores"],
  },
  {
    id: "whatsapp",
    number: "02",
    title: "Instant WhatsApp Lead Flow",
    tagline: "Never lose a customer inquiry again.",
    body: "When potential clients visit your site, they want quick answers. We build 1-click WhatsApp booking buttons that send lead details straight to your phone so you can respond instantly.",
    examples: ["Direct WhatsApp Booking", "Auto-filled Customer Messages", "Instant Lead Notifications", "Zero Missed Calls"],
  },
  {
    id: "local-seo",
    number: "03",
    title: "Google Maps & Local Search",
    tagline: "Get found by local clients in your city.",
    body: "We connect your website with Google Maps and local business listings so nearby customers searching for your services can easily find your store, read reviews, and call you directly.",
    examples: ["Google Maps Integration", "Local Customer Reviews", "Click-to-Call Phone Setup", "City-Based SEO"],
  },
  {
    id: "custom-portals",
    number: "04",
    title: "Custom Client Portals & Dashboards",
    tagline: "Simple online tools built for your specific business workflow.",
    body: "Need an online booking system, client gallery preview, or appointment scheduler? We build easy-to-use custom web portals that save you hours of admin work every day.",
    examples: ["Photo Gallery Portals", "Appointment Schedulers", "Customer Invoice Dashboards", "Automated Email Alerts"],
  },
];
