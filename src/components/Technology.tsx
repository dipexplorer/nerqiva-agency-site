"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "React", desc: "Component architecture" },
      { name: "Next.js", desc: "SSR, SSG, App Router" },
      { name: "TypeScript", desc: "Type-safe development" },
      { name: "Tailwind CSS", desc: "Utility-first styling" },
      { name: "shadcn/ui", desc: "Component library" },
      { name: "Framer Motion", desc: "Animation" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "Node.js", desc: "JavaScript runtime" },
      { name: "Express", desc: "HTTP framework" },
      { name: "FastAPI", desc: "Python async API" },
      { name: "WebSockets", desc: "Real-time comms" },
      { name: "REST APIs", desc: "API design" },
      { name: "Socket.io", desc: "Event-driven layer" },
    ],
  },
  {
    id: "data",
    label: "Data",
    items: [
      { name: "PostgreSQL", desc: "Relational database" },
      { name: "PostGIS", desc: "Geospatial data" },
      { name: "MongoDB", desc: "Document store" },
      { name: "Supabase", desc: "Postgres platform" },
      { name: "Redis", desc: "Caching & queues" },
      { name: "TimescaleDB", desc: "Time-series data" },
      { name: "pgvector", desc: "Vector embeddings" },
    ],
  },
  {
    id: "ai",
    label: "AI",
    items: [
      { name: "RAG", desc: "Retrieval-augmented generation" },
      { name: "LLM APIs", desc: "Mistral, OpenAI integration" },
      { name: "Whisper ASR", desc: "Speech recognition" },
      { name: "TensorFlow Lite", desc: "On-device inference" },
      { name: "Semantic Search", desc: "Vector similarity" },
      { name: "pgvector", desc: "Embedding storage" },
    ],
  },
  {
    id: "infra",
    label: "Infrastructure",
    items: [
      { name: "Docker", desc: "Containerization" },
      { name: "GitHub Actions", desc: "CI/CD pipelines" },
      { name: "Celery", desc: "Task queues" },
      { name: "Supabase", desc: "Backend as a service" },
      { name: "API Integrations", desc: "Third-party connections" },
    ],
  },
];

export default function Technology() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const active = CATEGORIES.find((c) => c.id === activeId);

  return (
    <section id="tech" className="py-32 bg-bg-primary">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-accent" />
            <span className="label-eyebrow text-accent">Technology</span>
          </div>
          <h2
            className="font-sans font-extrabold text-text-primary leading-[1.1] mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Technology is a tool.
            <br />
            The problem comes first.
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            We choose technology based on what the problem requires — not what&apos;s trending. Hover a category to explore the stack.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onMouseEnter={() => setActiveId(cat.id)}
              onMouseLeave={() => setActiveId(null)}
              onClick={() =>
                setActiveId(activeId === cat.id ? null : cat.id)
              }
              className={`group relative px-6 py-3 rounded-sm border font-mono text-xs font-semibold uppercase tracking-widest transition-all duration-250 ${
                activeId === cat.id
                  ? "border-accent bg-accent text-white"
                  : "border-border text-text-secondary hover:text-text-primary hover:border-accent/30 bg-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tech grid */}
        <div className="border border-border rounded-sm bg-white overflow-hidden min-h-[220px]">
          {!activeId && (
            <div className="flex items-center justify-center h-56 text-text-tertiary font-mono text-[11px] uppercase tracking-widest">
              Hover a category above
            </div>
          )}

          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="p-8"
            >
              <div className="mb-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold">
                  {active.label} Stack
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {active.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                    className="flex flex-col gap-1"
                  >
                    <span className="font-sans font-semibold text-text-primary text-sm">
                      {item.name}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-text-tertiary leading-tight">
                      {item.desc}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Philosophy note */}
        <div className="mt-8 flex items-start gap-4 p-6 border border-border/60 rounded-sm bg-bg-secondary">
          <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
          <p className="text-text-secondary text-sm leading-relaxed">
            <strong className="text-text-primary font-medium">We don&apos;t chase trends.</strong> Every technology decision is made based on what best solves the problem at the right cost and complexity level. Sometimes that&apos;s a modern AI stack. Sometimes it&apos;s a simple, well-structured PostgreSQL schema.
          </p>
        </div>
      </div>
    </section>
  );
}
