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
    tagline: "Understand the real problem.",
    description: "Before recommending any code or architecture, we run discovery. We analyze your current stack, user bottlenecks, and define what actually needs to be solved.",
    details: ["Stakeholder Interviews", "Systems Audit", "User Flow Mapping", "Feasibility Studies"],
  },
  {
    id: "define",
    number: "02",
    title: "DEFINE",
    tagline: "Find the right direction.",
    description: "Strategy is choosing what to build — and what not to build. We deliver a detailed product roadmap, project scope, technical stack recommendations, and success metrics.",
    details: ["Architecture Blueprint", "Technical Stack Selection", "Product Roadmap", "Scope & Estimate Definition"],
  },
  {
    id: "design",
    number: "03",
    title: "DESIGN",
    tagline: "Shape the experience.",
    description: "Design is how complex systems become simple interactions. We design high-fidelity interactive wireframes and prototype interfaces that prioritize clarity and flow.",
    details: ["Interactive Prototypes", "Visual Identity Design", "UX/UI Layouts", "Design System Setup"],
  },
  {
    id: "build",
    number: "04",
    title: "BUILD",
    tagline: "Engineer the system.",
    description: "We build to production standards — clean component structures, comprehensive type safety, automated tests, and architectures optimized for high loading speed.",
    details: ["Type-Safe Codebase", "API Implementation", "Database Schema Build", "Performance Tuning"],
  },
  {
    id: "launch",
    number: "05",
    title: "LAUNCH",
    tagline: "Deliver to production.",
    description: "A shipped product is worth infinitely more than a perfect mockup. We set up automated CI/CD pipelines, configure server environments, and deploy with confidence.",
    details: ["CI/CD Configuration", "Environment Hardening", "User Acceptance Testing (UAT)", "DNS & Domain Release"],
  },
  {
    id: "evolve",
    number: "06",
    title: "EVOLVE",
    tagline: "Improve and scale.",
    description: "A product launch is just the beginning. We integrate analytics, monitor logs for errors, and progressively optimize user flows to scale with your growing business.",
    details: ["Analytics Hookups", "Post-Launch Monitoring", "Feature Iteration", "Scaling Optimization"],
  },
];
