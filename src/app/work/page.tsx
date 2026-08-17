"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Inbox } from "lucide-react";
import { PROJECTS } from "../../data/projects";
import ClosingSection from "../../components/ClosingSection";

export default function WorkPage() {
  const [activeType, setActiveType] = useState<"all" | "client" | "demo">("all");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const handleTypeChange = (type: "all" | "client" | "demo") => {
    setActiveType(type);
    setActiveCategory("All"); // Reset category filter on type change
  };

  // Filter logic
  const filteredByType = PROJECTS.filter((project) => {
    if (activeType === "all") return true;
    return project.projectType === activeType;
  });

  const availableCategories = ["All", ...Array.from(new Set(filteredByType.map((p) => p.category)))];

  const filteredProjects = filteredByType.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

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
            A selection of platforms, tools, and visual frameworks engineered to solve operational challenges and demonstrate digital excellence.
          </p>
        </div>

        {/* Filter Controls System */}
        <div className="section-container mb-12 max-w-5xl">
          <div className="flex flex-col gap-6 border-b border-border/40 pb-8">
            {/* Primary Type Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => handleTypeChange("all")}
                className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-widest rounded transition-all duration-200 ${
                  activeType === "all"
                    ? "bg-accent text-white shadow-md shadow-accent/20"
                    : "bg-bg-secondary/40 text-text-secondary hover:text-text-primary border border-border/40"
                }`}
              >
                All Projects ({PROJECTS.length})
              </button>
              <button
                onClick={() => handleTypeChange("client")}
                className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-widest rounded transition-all duration-200 ${
                  activeType === "client"
                    ? "bg-accent text-white shadow-md shadow-accent/20"
                    : "bg-bg-secondary/40 text-text-secondary hover:text-text-primary border border-border/40"
                }`}
              >
                Client Systems ({PROJECTS.filter((p) => p.projectType === "client").length})
              </button>
              <button
                onClick={() => handleTypeChange("demo")}
                className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-widest rounded transition-all duration-200 ${
                  activeType === "demo"
                    ? "bg-accent text-white shadow-md shadow-accent/20"
                    : "bg-bg-secondary/40 text-text-secondary hover:text-text-primary border border-border/40"
                }`}
              >
                Demo Themes ({PROJECTS.filter((p) => p.projectType === "demo").length})
              </button>
            </div>

            {/* Dynamic Secondary Category Filters */}
            {availableCategories.length > 2 && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[9px] text-text-tertiary uppercase tracking-widest font-bold mr-2">
                  Category:
                </span>
                {availableCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3 py-1.5 text-[10px] font-sans font-medium rounded transition-all duration-150 ${
                      activeCategory === category
                        ? "bg-text-primary text-bg-primary"
                        : "text-text-secondary hover:text-text-primary bg-transparent hover:bg-bg-secondary/20"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Project List / Grid */}
        <div className="section-container mb-32 max-w-5xl">
          {filteredProjects.length > 0 ? (
            <div className="flex flex-col gap-12">
              {filteredProjects.map((project) => (
                <Link 
                  key={project.id}
                  href={`/work/${project.slug}`}
                  className="group relative glass-panel p-8 md:p-12 block overflow-hidden transition-all duration-300 hover:border-accent/40"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-8">
                    <div>
                      {/* Meta information tags */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-[2px] font-bold border ${
                          project.projectType === "demo"
                            ? "bg-amber-500/10 text-amber-500 border-amber-500/20"
                            : "bg-accent/10 text-accent border-accent/20"
                        }`}>
                          {project.projectType === "demo" ? "DEMO THEME" : "CLIENT PROJECT"}
                        </span>
                        <span className="font-mono text-[9px] text-text-tertiary tracking-wider font-bold">
                          {project.number} — {project.category}
                        </span>
                      </div>

                      <h2 className="font-sans font-bold text-3xl text-text-primary mb-3 group-hover:text-accent transition-colors duration-200">
                        {project.name}
                      </h2>
                      <p className="text-text-secondary max-w-lg leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-3 md:mt-2 text-text-primary font-mono text-[10px] uppercase tracking-widest font-bold">
                      Explore {project.projectType === "demo" ? "Theme" : "Study"}
                      <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300 text-accent" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* Elegant Empty State */
            <div className="glass-panel p-16 flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
              <div className="h-12 w-12 rounded-full bg-bg-secondary/60 flex items-center justify-center text-text-tertiary mb-4">
                <Inbox size={20} />
              </div>
              <h3 className="font-sans font-bold text-lg text-text-primary mb-2">No projects found</h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-sm mb-6">
                We haven&apos;t added any matching {activeType === "demo" ? "demo themes" : "client projects"} under the &ldquo;{activeCategory}&rdquo; category yet.
              </p>
              <button
                onClick={() => {
                  setActiveType("all");
                  setActiveCategory("All");
                }}
                className="px-5 py-2.5 bg-accent text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded hover:bg-accent-mid transition-colors shadow-md"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
        
        <ClosingSection />
      </div>
    </>
  );
}
