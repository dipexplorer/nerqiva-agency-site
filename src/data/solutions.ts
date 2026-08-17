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
    id: "web",
    number: "01",
    title: "Web Solutions",
    tagline: "Websites engineered for trust, clarity, and conversion.",
    body: "A great website isn't just visual — it's a high-performance system designed to communicate clearly, load instantly, and guide visitors toward a conversion decision.",
    examples: ["Marketing Websites", "Custom Web Applications", "Performance Optimization", "E-commerce Architectures"],
  },
  {
    id: "ai",
    number: "02",
    title: "AI Integration",
    tagline: "Intelligence added where it creates genuine leverage.",
    body: "We integrate large language models, semantic search, and custom vector databases into your workflows to automate intelligence without compromising security.",
    examples: ["Semantic Search (RAG)", "Autonomous Workflows", "Custom Classification Engines", "Analytics & Insights"],
  },
  {
    id: "automation",
    number: "03",
    title: "Workflow Automation",
    tagline: "Eliminate repetitive tasks and manual errors.",
    body: "We build integrations between your software systems to sync data, automate triggers, and free your team to focus on work that requires human judgment.",
    examples: ["API Integrations", "Database Synchronization", "Automated Notifications", "CRM/ERP Workflows"],
  },
  {
    id: "data",
    number: "04",
    title: "Data Systems",
    tagline: "Secure, reliable infrastructure for your records.",
    body: "We design and build robust databases, telemetry systems, and custom reporting dashboards that turn raw numbers into clear business metrics.",
    examples: ["Relational Database Design", "Time-series Telemetry", "Custom Dashboards", "Data Pipelines"],
  },
];
