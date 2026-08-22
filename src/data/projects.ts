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
    id: "aurabeauty",
    slug: "aura-beauty",
    number: "01",
    name: "Aura Beauty Studio",
    projectType: "demo",
    type: "Demo Theme",
    category: "Beauty & Lifestyle",
    tagline: "Premium digital experience concept for boutique beauty studios and traditional artists.",
    challenge: "Traditional beauty and boutique services often lack a digital presence, relying entirely on word-of-mouth or social media. High-end clients expect a digital experience that reflects the same level of luxury and attention to detail as the service itself.",
    whyItMattered: "A premium interface acts as a 24/7 digital gallery and direct booking engine. By integrating beautiful interactive visuals and a seamless WhatsApp reservation flow, this theme concept elevates local artistry to a highly professional, commercial grade.",
    constraints: [
      "Must load instantly on mobile phones (3G/low bandwidth)",
      "Secure and private handling of client booking details",
      "Must handle high traffic during peak wedding seasons without crashing"
    ],
    approach: "We designed a dark-themed, luxurious canvas that highlights intricate artistry. By establishing clear visual galleries and an integrated WhatsApp reservation form, the template serves as a complete, automated booking tool.",
    architecture: "Built with modern web technologies for lightning-fast performance, featuring smooth interactive backgrounds, mobile-first layouts, and an automated reservation system.",
    engineeringDecisions: [
      "Implemented smooth, interactive design elements to create a premium feel",
      "Engineered an automated reservation system routing straight to client communication apps",
      "Optimized high-resolution catalogs to load instantly on any device"
    ],
    implementation: "Developed a functional theme including a live gallery filter system, custom dynamic inputs, interactive client reviews, and direct dialing assets designed to operate flawlessly on all devices.",
    outcome: "A fully operational design system that can be deployed for regional boutiques in 1-2 days, proving that local lifestyle businesses can quickly benefit from premium custom engineering.",
    lessons: "Complex interactive elements must always degrade gracefully. Older mobile phones still receive a beautiful, fast-loading experience without sacrificing core booking features.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    gradient: "from-amber-600/10 to-emerald-600/10",
    accentColor: "bg-amber-600",
    featured: true,
    demoUrl: "https://aura-beauty-theme.vercel.app",
    gallery: [
      "/images/projects/aura-beauty/bridal.png",
      "/images/projects/aura-beauty/arabic.png",
      "/images/projects/aura-beauty/traditional.png",
      "/images/projects/aura-beauty/minimal.png"
    ]
  },
  {
    id: "luxebridal",
    slug: "luxe-bridal",
    number: "02",
    name: "Luxe Bridal Artistry",
    projectType: "demo",
    type: "Demo Theme",
    category: "High-End Editorial",
    tagline: "High-end editorial and bridal makeup artistry portfolio theme.",
    challenge: "Luxury artists often struggle to translate their sophisticated visual aesthetic into a digital platform that feels equally premium and performs flawlessly on mobile.",
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
    demoUrl: "https://luxe-bridal-theme.vercel.app"
  },
  {
    id: "eliteacademy",
    slug: "elite-academy",
    number: "03",
    name: "Elite Beauty Academy",
    projectType: "demo",
    type: "Demo Theme",
    category: "Education & Studio",
    tagline: "Hybrid digital platform for premium makeup studios and professional training academies.",
    challenge: "Beauty academies struggle to balance dual objectives: attracting high-end bridal clients for their studio while simultaneously recruiting students for their professional courses.",
    whyItMattered: "A structured digital presence establishes authority. By segregating the studio services from the academy curriculum, the platform converts two entirely different target audiences effectively.",
    constraints: [
      "Must clearly separate Studio Services from Academy Courses",
      "Lead generation forms for course enrollments",
      "Trust-building through 5-star review integration"
    ],
    approach: "We designed a sophisticated dual-purpose layout using elegant typography and subtle tactile textures to evoke a premium physical studio feel.",
    architecture: "Built with Next.js and styled with Tailwind CSS, utilizing Framer Motion for smooth content reveals and interactive course modules.",
    engineeringDecisions: [
      "Implemented a custom noise overlay for tactile visual depth",
      "Engineered distinct conversion funnels for brides vs. students",
      "Optimized curriculum accordions for mobile readability"
    ],
    implementation: "Developed comprehensive course pages, a dynamic syllabus viewer, service tiers, and integrated direct-to-WhatsApp enrollment forms.",
    outcome: "A highly professional, dual-purpose academy theme that helps local beauty educators scale their student intake while maintaining luxury studio bookings.",
    lessons: "Clear information architecture is critical when serving dual audiences. Navigation must immediately split user intent without causing confusion.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    gradient: "from-rose-900/10 to-stone-900/10",
    accentColor: "bg-rose-900",
    featured: true,
    demoUrl: "https://elite-beauty-theme.vercel.app"
  },
  {
    id: "bespokebridal",
    slug: "bespoke-bridal",
    number: "04",
    name: "Bespoke Bridal 3D",
    projectType: "demo",
    type: "Demo Theme",
    category: "Immersive & Luxury",
    tagline: "An avant-garde, 3D-enhanced portfolio for luxury beauty artists.",
    challenge: "In an oversaturated beauty market, top-tier artists need a digital experience that instantly separates them from standard competitors and justifies premium pricing.",
    whyItMattered: "Integrating subtle 3D elements and cinematic scroll animations creates an unforgettable, high-end sensory experience that standard websites cannot match.",
    constraints: [
      "Maintain 60fps performance while rendering 3D WebGL elements",
      "Ensure fast load times despite heavy visual assets",
      "Smooth scroll-jacking that feels natural"
    ],
    approach: "We architected an immersive, web-based storytelling experience. By combining WebGL background effects with GSAP animations, the site feels like a living, breathing editorial magazine.",
    architecture: "Leveraged Next.js alongside Three.js (React Three Fiber) for 3D rendering and GSAP/Lenis for buttery smooth, physics-based scrolling.",
    engineeringDecisions: [
      "Integrated React Three Fiber for lightweight, interactive WebGL scenes",
      "Utilized GSAP and Lenis for cinematic, inertia-based scroll control",
      "Implemented intelligent asset preloading to prevent WebGL stutter"
    ],
    implementation: "Built a bespoke luxury interface featuring 3D ambient backgrounds, staggered typography reveals, and a seamless visual flow from hero to gallery.",
    outcome: "A state-of-the-art interactive portfolio that commands attention, setting a new digital benchmark for regional luxury service providers.",
    lessons: "WebGL on mobile requires strict polygon and texture optimization. Falling back to CSS animations on low-power devices ensures accessibility without sacrificing the premium feel.",
    stack: ["Next.js", "Three.js", "GSAP", "Lenis Scroll"],
    gradient: "from-amber-100/10 to-stone-200/5",
    accentColor: "bg-stone-800",
    featured: true,
    demoUrl: "https://bespoke-bridal-theme.vercel.app"
  }
];
