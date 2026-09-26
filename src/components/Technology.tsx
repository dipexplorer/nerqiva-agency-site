"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Zap, Smartphone, MessageSquare, ShieldCheck } from "lucide-react";

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
    <section id="tech" className="py-32 bg-transparent relative border-t border-white/5 bg-grid-dots">
      <div className="section-container">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-accent" />
            <span className="label-eyebrow text-accent">OUR GUARANTEES</span>
          </div>
          <h2
            className="font-sans font-extrabold text-text-primary leading-[1.1] mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.02em" }}
          >
            Built for speed, reliability,<br />and maximum conversion.
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            We don&apos;t just write code — we guarantee tangible performance standards for your business website.
          </p>
        </div>

        {/* Performance Guarantee Grid */}
        <div className="grid md:grid-cols-2 gap-6 relative z-10">
          <div className="glass-panel p-8 border border-border/40 rounded-[4px] shadow-lg flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5 font-extrabold text-lg">
                <Zap size={18} />
              </div>
              <h3 className="font-sans font-bold text-xl text-text-primary mb-2">
                1-Second Load Speed
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Slow sites lose customers. We build lightweight, pre-rendered pages that load instantly even on weak 3G/4G mobile networks.
              </p>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-wider text-accent font-bold mt-6">
              Built with Next.js & Turbopack
            </span>
          </div>

          <div className="glass-panel p-8 border border-border/40 rounded-[4px] shadow-lg flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5 font-extrabold text-lg">
                <Smartphone size={18} />
              </div>
              <h3 className="font-sans font-bold text-xl text-text-primary mb-2">
                100% Mobile Optimized
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Designed mobile-first. Large, tap-friendly buttons, legible typography, and zero auto-zooming glitches when filling forms.
              </p>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-wider text-accent font-bold mt-6">
              Tailwind CSS & Responsive Layouts
            </span>
          </div>

          <div className="glass-panel p-8 border border-border/40 rounded-[4px] shadow-lg flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5 font-extrabold text-lg">
                <MessageSquare size={18} />
              </div>
              <h3 className="font-sans font-bold text-xl text-text-primary mb-2">
                Instant WhatsApp Lead Routing
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Zero friction contact. When a potential client clicks your booking or contact button, it immediately opens a pre-filled WhatsApp message.
              </p>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-wider text-accent font-bold mt-6">
              1-Click Direct Messaging
            </span>
          </div>

          <div className="glass-panel p-8 border border-border/40 rounded-[4px] shadow-lg flex flex-col justify-between">
            <div>
              <div className="h-10 w-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-5 font-extrabold text-lg">
                <ShieldCheck size={18} />
              </div>
              <h3 className="font-sans font-bold text-xl text-text-primary mb-2">
                99.9% Reliable & Secure
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                No hosting crashes or server maintenance headaches. Your site stays online 24/7 on global SSL-encrypted cloud infrastructure.
              </p>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-wider text-accent font-bold mt-6">
              Global Vercel Cloud Network
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
