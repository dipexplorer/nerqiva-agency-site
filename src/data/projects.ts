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
  }
];
