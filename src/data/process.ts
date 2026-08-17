export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "discover",
    number: "01",
    title: "DISCOVER",
    tagline: "Understand the actual problem.",
    description: "Before writing any code or architecture documents, we run discovery. We audit your existing tech stack, identify operational bottlenecks, and map out exactly where the system is breaking.",
    details: ["Stakeholder Interviews", "Systems Audit", "User Flow Mapping", "Feasibility Studies"],
  },
  {
    id: "define",
    number: "02",
    title: "DEFINE",
    tagline: "Determine what should actually be built.",
    description: "Strategy is choosing what to build — and what not to build. We define the technical architecture, project scope, success metrics, and recommend a phased release plan.",
    details: ["Architecture Blueprint", "Technical Stack Selection", "Product Roadmap", "Scope & Estimate Definition"],
  },
  {
    id: "design",
    number: "03",
    title: "DESIGN",
    tagline: "Turn the problem into a usable system.",
    description: "We translate complex data relationships and workflows into simple, high-fidelity interfaces. We establish the design system and interactive wireframes before building.",
    details: ["Interactive Prototypes", "Visual Identity Design", "UX/UI Layouts", "Design System Setup"],
  },
  {
    id: "engineer",
    number: "04",
    title: "ENGINEER",
    tagline: "Build the appropriate technical solution.",
    description: "We write clean, performant, type-safe code using modern components. We implement secure database schemas, scale query performance, and set up clear code documentation.",
    details: ["Type-Safe Codebase", "API Integration", "Database Schema Build", "Performance Tuning"],
  },
  {
    id: "test",
    number: "05",
    title: "TEST",
    tagline: "Validate behavior, performance and usability.",
    description: "We verify the system against edge cases. We run automated unit tests, test API endpoint responses, verify performance scores, and run comprehensive manual QA checks.",
    details: ["Unit & Integration Tests", "API Performance Audit", "Cross-Browser Checks", "UAT Scenarios"],
  },
  {
    id: "launch",
    number: "06",
    title: "LAUNCH",
    tagline: "Ship the system properly.",
    description: "Deploying to production is executed with zero downtime. We configure secure server environments, optimize domain routing, and release with automated CI/CD pipelines.",
    details: ["CI/CD Configuration", "Environment Hardening", "DNS & Domain Release", "Backup Systems Setup"],
  },
  {
    id: "improve",
    number: "07",
    title: "IMPROVE",
    tagline: "Use feedback and evidence to iterate.",
    description: "Technology is not static. We track error logs, analyze user engagement, collect real performance telemetry, and continuously polish the system to support your growth.",
    details: ["Analytics Hookups", "Post-Launch Monitoring", "Feature Iteration", "Scaling Optimization"],
  },
];
