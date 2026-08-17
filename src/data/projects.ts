export interface Project {
  id: string;
  number: string;
  name: string;
  type: string;
  tagline: string;
  challenge: string;
  architecture: string;
  engineering: string[];
  stack: string[];
  gradient: string;
  accentColor: string;
}

export const PROJECTS: Project[] = [
  {
    id: "sahidawa",
    number: "01",
    name: "SAHIDAWA",
    type: "Open-Source / Public Health",
    tagline: "Citizen medicine verification platform.",
    challenge: "Counterfeit medicines pose a severe threat in rural areas lacking verification infrastructure. The goal was to build a system that works across language barriers, varying internet connectivity, and low technical literacy.",
    architecture: "Multi-modal ingestion layer (OCR + voice queries) feeding into a FastAPI backend with semantic search via pgvector. Offline-first architecture ensures functionality in low-connectivity environments.",
    engineering: [
      "TensorFlow Lite on-device inference for medicine label OCR",
      "Whisper ASR for multilingual voice queries",
      "pgvector for semantic medicine retrieval",
      "Offline-first progressive web app (PWA) architecture",
    ],
    stack: ["Next.js", "FastAPI", "PostgreSQL", "TensorFlow Lite", "Whisper", "Docker"],
    gradient: "from-violet-600 to-purple-900",
    accentColor: "#7C3AED",
  },
  {
    id: "gridmind",
    number: "02",
    name: "GRIDMIND",
    type: "Internship — APDCL",
    tagline: "Smart electrical-grid monitoring and AI prediction.",
    challenge: "Moving from reactive maintenance to predictive operations for Assam Power Distribution Company Limited (APDCL). The system needed to ingest real-time telemetry from multiple substations and project failures before they occurred.",
    architecture: "FastAPI backend with TimescaleDB for time-series telemetry, PostGIS for geospatial assets, Celery + Redis for async forecasting, and Deck.gl for geographic visualization.",
    engineering: [
      "TimescaleDB schema optimization for high-throughput sensor data",
      "Celery worker pipeline for running batch ML forecasting models",
      "PostGIS database integration for spatial coordinate tracking",
      "Deck.gl overlays for high-performance map rendering",
    ],
    stack: ["Next.js", "FastAPI", "TimescaleDB", "PostGIS", "Redis", "Celery", "Deck.gl"],
    gradient: "from-blue-600 to-cyan-900",
    accentColor: "#3B82F6",
  },
  {
    id: "acadence",
    number: "03",
    name: "ACADENCE",
    type: "EdTech / Analytics",
    tagline: "Focus-based learning analytics dashboard.",
    challenge: "Students often struggle with digital learning fatigue. Acadence was designed to track attention metrics, provide focused study patterns, and give students actionable advice on how to structure their learning sessions.",
    architecture: "Prisma ORM for relational tracking, Chart.js for data visualizations, and Next.js server actions for clean, state-driven user interactions.",
    engineering: [
      "Prisma schema design with optimized index lookups",
      "Dynamic data charts with Chart.js showing custom study rhythms",
      "Responsive client state management using React Context",
    ],
    stack: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Chart.js"],
    gradient: "from-emerald-600 to-teal-900",
    accentColor: "#10B981",
  },
  {
    id: "legalhub",
    number: "04",
    name: "LEGALHUB",
    type: "LegalTech / AI Integration",
    tagline: "Contract analysis and query engine.",
    challenge: "Navigating hundreds of pages of legal documents is time-consuming. LegalHub allows legal professionals to upload contracts and securely query terms, liabilities, and key milestones.",
    architecture: "Python semantic ingestion pipeline utilizing OpenAI embeddings, stored in a Pinecone vector database. The frontend is built on Next.js communicating with secure API routes.",
    engineering: [
      "Pinecone vector storage mapping for semantic contract queries",
      "Chunking and embedding optimization using LangChain",
      "Secure serverless API routes with payload validation",
    ],
    stack: ["Next.js", "Python", "Pinecone", "LangChain", "OpenAI API"],
    gradient: "from-amber-600 to-amber-900",
    accentColor: "#F59E0B",
  },
];
