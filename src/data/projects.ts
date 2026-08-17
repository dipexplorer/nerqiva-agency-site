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
    challenge: "Traditional beauty and boutique design services often lack digital presence, relying entirely on word-of-mouth or social media channels that don't capture the luxury and artistry of their work. High-end bridal clients expect a digital experience that reflects the same level of attention to detail and heritage as the service itself.",
    whyItMattered: "A premium interface acts as a digital gallery and direct booking engine. By integrating fine interactive visual pathways, custom WebGL scenes, and WhatsApp reservation routing, Krishav Mehendi elevates local heritage artistry to a professional commercial grade.",
    constraints: [
      "Must render fast despite 3D WebGL centerpiece rendering",
      "Mobile-first responsive booking form that auto-fills text fields",
      "Client-friendly reservation loop utilizing WhatsApp click-to-chat protocols"
    ],
    approach: "We designed a dark-themed canvas featuring custom interactive particle layers and dynamic geometry drawing. By establishing clear visual grids for the art gallery and an integrated WhatsApp reservation form, the template serves as a complete booking tool.",
    architecture: "Next.js App Router using React Three Fiber for WebGL backdrop models, Tailwind CSS for modern layouts, and client-side validation triggers that compile custom WhatsApp reservation links on submission.",
    engineeringDecisions: [
      "Used Three.js geometries for interactive canvas elements",
      "Engineered an automated reservation compiler routing straight to client communication apps",
      "Optimized image loading structures for massive high-resolution bridal catalogs"
    ],
    implementation: "Developed a functional theme including a live gallery filter system, custom dynamic inputs, interactive client reviews, and direct dialing assets designed to operate flawlessly on all devices.",
    outcome: "Fully operational design system that can be deployed for regional boutiques in minutes, proving that local lifestyle businesses can benefit from premium custom web engineering.",
    lessons: "Interactive 3D libraries must degrade gracefully. Devices lacking WebGL capability are served a clean static gradient background without impacting core navigation or booking features.",
    stack: ["Next.js", "React Three Fiber", "Three.js", "Tailwind CSS", "Framer Motion"],
    gradient: "from-amber-600/10 to-emerald-600/10",
    accentColor: "bg-amber-600",
    featured: true,
    gallery: [
      "/images/projects/krishav-mehendi/bridal.png",
      "/images/projects/krishav-mehendi/arabic.png",
      "/images/projects/krishav-mehendi/traditional.png",
      "/images/projects/krishav-mehendi/minimal.png"
    ]
  }
];
