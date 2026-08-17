"use client";

import Head from "next/head";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROJECTS } from "../../data/projects";
import ClosingSection from "../../components/ClosingSection";

export default function WorkPage() {
  return (
    <>
      <Head>
        <title>Selected Work | NERQIVA</title>
      </Head>
      <div className="pt-32 relative z-20">
        <div className="section-container mb-16 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-accent/40" />
            <span className="label-eyebrow">Selected Work</span>
          </div>
          <h1 className="font-sans font-extrabold text-text-primary leading-[1.1] mb-6 tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em" }}>
            Systems in production.
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">
            A selection of platforms, tools, and pipelines engineered to solve specific operational challenges.
          </p>
        </div>
        
        <div className="section-container mb-32 max-w-5xl">
          <div className="flex flex-col gap-12">
            {PROJECTS.map((project) => (
              <Link 
                key={project.id}
                href={`/work/${project.slug}`}
                className="group relative glass-panel p-8 md:p-12 block overflow-hidden transition-all duration-300 hover:border-accent/40"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8">
                  <div>
                    <span className="font-mono text-xs font-bold text-accent mb-4 block">
                      {project.number} — {project.type}
                    </span>
                    <h2 className="font-sans font-bold text-3xl text-text-primary mb-3">
                      {project.name}
                    </h2>
                    <p className="text-text-secondary max-w-lg leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 md:mt-2 text-text-primary font-mono text-[10px] uppercase tracking-widest font-bold">
                    View Case Study
                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300 text-accent" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        <ClosingSection />
      </div>
    </>
  );
}
