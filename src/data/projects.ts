export interface Project {
  id: string;
  slug: string;
  number: string;
  name: string;
  projectType: "demo" | "client";
  type: string;
  category: string;
  tagline: string;
  challenge: string;
  whyItMattered: string;
  constraints: string[];
  approach: string;
  architecture: string;
  engineeringDecisions: string[];
  implementation: string;
  outcome: string;
  lessons: string;
  stack: string[];
  gradient: string;
  accentColor: string;
  demoUrl?: string;
  featured?: boolean;
  gallery?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "krishavmehendi",
    slug: "krishav-mehendi",
    number: "01",
    name: "Krishav Mehendi",
    projectType: "demo",
    type: "Demo Theme",
    category: "Beauty & Bridal",
    tagline: "Premium digital experience concept for bridal and traditional mehendi designers.",
    challenge: "Traditional beauty and boutique services often lack a digital presence, relying entirely on word-of-mouth or social media. High-end clients expect a digital experience that reflects the same level of luxury and attention to detail as the service itself.",
    whyItMattered: "A premium interface acts as a 24/7 digital gallery and direct booking engine. By integrating beautiful interactive visuals and a seamless WhatsApp reservation flow, Krishav Mehendi elevates local artistry to a highly professional, commercial grade.",
    constraints: [
      "Must load instantly on mobile phones (3G/low bandwidth)",
      "Secure and private handling of client booking details",
      "Must handle high traffic during peak wedding seasons without crashing"
    ],
    approach: "We designed a dark-themed, luxurious canvas that highlights the intricate artistry of mehendi. By establishing clear visual galleries and an integrated WhatsApp reservation form, the template serves as a complete, automated booking tool.",
    architecture: "Built with modern web technologies for lightning-fast performance, featuring smooth interactive backgrounds, mobile-first layouts, and an automated reservation system that sends leads straight to the owner's WhatsApp.",
    engineeringDecisions: [
      "Implemented smooth, interactive design elements to create a premium feel",
      "Engineered an automated reservation system routing straight to client communication apps",
      "Optimized high-resolution bridal catalogs to load instantly on any device"
    ],
    implementation: "Developed a functional theme including a live gallery filter system, custom dynamic inputs, interactive client reviews, and direct dialing assets designed to operate flawlessly on all devices.",
    outcome: "A fully operational design system that can be deployed for regional boutiques in 1-2 days, proving that local lifestyle businesses can quickly benefit from premium custom engineering.",
    lessons: "Complex interactive elements must always degrade gracefully. Older mobile phones still receive a beautiful, fast-loading experience without sacrificing core booking features.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    gradient: "from-amber-600/10 to-emerald-600/10",
    accentColor: "bg-amber-600",
    featured: true,
    demoUrl: "https://hennaart-nine.vercel.app/",
    gallery: [
      "/images/projects/krishav-mehendi/bridal.png",
      "/images/projects/krishav-mehendi/arabic.png",
      "/images/projects/krishav-mehendi/traditional.png",
      "/images/projects/krishav-mehendi/minimal.png"
    ]
  },
  {
    id: "valerielaurent",
    slug: "valerie-laurent",
    number: "02",
    name: "Valerie Laurent",
    projectType: "demo",
    type: "Demo Theme",
    category: "Beauty & Bridal",
    tagline: "High-end editorial and bridal makeup artistry portfolio.",
    challenge: "Luxury makeup artists often struggle to translate their sophisticated visual aesthetic into a digital platform that feels equally premium and performs flawlessly on mobile.",
    whyItMattered: "A striking portfolio acts as a direct conversion tool for high-end clientele. By combining immersive imagery with smooth transitions, it elevates the artist's brand above local competitors.",
    constraints: [
      "Seamless, buttery smooth scroll transitions",
      "Flawless mobile responsiveness",
      "High-contrast editorial aesthetics"
    ],
    approach: "We engineered a dark-mode editorial layout, leveraging dynamic viewport animations and a striking black-and-white to full-color reveal to create a cinematic browsing experience.",
    architecture: "Developed with Next.js and Tailwind CSS, integrating Framer Motion for complex scroll-jacking and opacity crossfades without sacrificing performance.",
    engineeringDecisions: [
      "Implemented custom mouse-tracking cursor glow for interactive depth",
      "Built masonry layouts for editorial galleries",
      "Utilized conditional rendering for crossfading full-viewport images"
    ],
    implementation: "Designed an interactive hero section, masonry gallery, pricing tier cards, and storytelling components wrapped in a unified charcoal and crimson aesthetic.",
    outcome: "A highly responsive, incredibly smooth luxury portfolio theme that can be instantly adapted for any high-fashion or bridal service provider.",
    lessons: "Complex scroll-triggered animations require careful z-index management and should prioritize opacity transitions over scale for smoother framerates.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    gradient: "from-red-600/10 to-[#0a0a0a]/10",
    accentColor: "bg-red-600",
    featured: true,
    demoUrl: "https://bridalnerqiva.vercel.app/"
  },
  {
    id: "elenastyles",
    slug: "elena-styles",
    number: "03",
    name: "Elena Styles",
    projectType: "demo",
    type: "Demo Theme",
    category: "Luxury Bridal",
    tagline: "Personal luxury artistry portfolio with editorial print aesthetics.",
    challenge: "High-fashion bridal artists need a digital presence that feels like a luxury magazine catalog rather than a standard booking page.",
    whyItMattered: "By rejecting dark charcoal aesthetics in favor of a warm cream and espresso-based palette, we created an interface that conveys femininity, professional trust, and premium bridal artistry.",
    constraints: [
      "Must feature an interactive before-after comparison slider",
      "Editorial typography must scale flawlessly on mobile",
      "Warm cream aesthetic must maintain high accessibility contrast"
    ],
    approach: "Designed a 50/50 editorial split with Vogue-style typography, integrating a custom WhatsApp lead generation system and masonry image layouts.",
    architecture: "Built on Next.js with Tailwind CSS, utilizing high-performance image optimization for full-bleed editorial photography.",
    engineeringDecisions: [
      "Engineered an interactive before/after component for makeup transformation reveals",
      "Implemented a custom cream/espresso design system from scratch",
      "Built a seamless single-page application structure for instant navigation"
    ],
    implementation: "Developed a functional theme with a live gallery, custom dynamic inputs, interactive client reviews, and direct dialing assets.",
    outcome: "A stunning, magazine-quality digital portfolio that instantly positions the artist as a premium, high-ticket service provider.",
    lessons: "Light-themed luxury sites require meticulous attention to font-weights and letter-spacing to maintain the high-end editorial feel.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-[#F5F2EB]/10 to-[#EAE5D9]/10",
    accentColor: "bg-[#2A2320]",
    featured: true,
    demoUrl: "https://aura-beauty-theme.vercel.app/"
  },
  {
    id: "mayabennett",
    slug: "maya-bennett",
    number: "04",
    name: "Maya Bennett",
    projectType: "demo",
    type: "Demo Theme",
    category: "Studio & Academy",
    tagline: "Modern beauty studio and academy booking platform.",
    challenge: "Beauty academies struggle to balance dual objectives: booking individual bridal clients while simultaneously registering students for makeup courses.",
    whyItMattered: "We engineered a dual-funnel digital platform that seamlessly routes bridal inquiries and academy student registrations into organized WhatsApp flows.",
    constraints: [
      "Must clearly separate studio services from academy courses",
      "High performance on 3G mobile networks",
      "Trust-building through integrated testimonials"
    ],
    approach: "Developed a highly structured interface that uses clear visual hierarchy to guide users to either the 'Studio' or 'Academy' funnels.",
    architecture: "Next.js architecture with optimized static generation to ensure instant load times and zero layout shift.",
    engineeringDecisions: [
      "Built independent contextual forms for different service types",
      "Integrated a floating WhatsApp contact system for instant support",
      "Designed a dedicated course curriculum visualization component"
    ],
    implementation: "Created a full-stack static site with dedicated sections for portfolio galleries, academy curriculum, and automated booking.",
    outcome: "A professional, trustworthy digital storefront that actively generates dual revenue streams (services + courses).",
    lessons: "When serving two distinct user personas on one site, aggressive visual separation in the hero section dramatically improves conversion rates.",
    stack: ["Next.js", "React", "Tailwind CSS"],
    gradient: "from-rose-500/10 to-pink-500/10",
    accentColor: "bg-rose-500",
    featured: true,
    demoUrl: "https://bridalnerqiva2.vercel.app/"
  }
];
