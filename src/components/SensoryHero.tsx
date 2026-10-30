"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown, MessageCircle, Play, Pause, ChevronLeft, ChevronRight, Activity, Terminal } from "lucide-react";

interface FlagshipProject {
  id: string;
  index: string;
  client: string;
  tag: string;
  industry: string;
  accentColor: string;
  image: string;
  liveUrl: string;
  displayUrl: string;
  speedMetric: string;
  impactMetric: string;
}

const PROJECTS: FlagshipProject[] = [
  {
    id: "lablink",
    index: "01",
    client: "LabLink Guwahati",
    tag: "CLINICAL DIAGNOSTICS",
    industry: "Specialized Healthcare Platform",
    accentColor: "#0284C7",
    image: "/images/projects/lablink/desktop.png",
    liveUrl: "https://www.lablinkguwahati.in/",
    displayUrl: "lablinkguwahati.in",
    speedMetric: "< 0.72s Mobile Paint",
    impactMetric: "1,797+ Tests Cataloged with Home Collection",
  },
  {
    id: "krishav",
    index: "02",
    client: "Krishav Mehendi",
    tag: "BRIDAL ATELIER",
    industry: "Haute Henna & Bridal Studio",
    accentColor: "#C9A227",
    image: "/images/projects/krishavmehendi/bridal.png",
    liveUrl: "https://hennaart-nine.vercel.app/",
    displayUrl: "krishavmehendi.com",
    speedMetric: "< 0.65s Mobile Paint",
    impactMetric: "100% WhatsApp Direct Booking Funnel",
  },
  {
    id: "titangym",
    index: "03",
    client: "Titan Athletic Club",
    tag: "ATHLETIC CLUB",
    industry: "High-Performance Fitness & Wellness",
    accentColor: "#10B981",
    image: "/images/projects/titangym/contrast.png",
    liveUrl: "https://titangymnq.vercel.app/",
    displayUrl: "titangymnq.vercel.app",
    speedMetric: "< 0.58s Mobile Paint",
    impactMetric: "VIP Trial Pass Intake in 3 Seconds",
  },
  {
    id: "valerie",
    index: "04",
    client: "Valerie Laurent",
    tag: "PARISIAN EDITORIAL",
    industry: "Haute Couture & Lookbook",
    accentColor: "#8B5CF6",
    image: "/images/projects/editorial/vogue.png",
    liveUrl: "https://bridalnerqiva.vercel.app/",
    displayUrl: "valerielaurent.com",
    speedMetric: "< 0.79s Mobile Paint",
    impactMetric: "Vogue-Style High-Ticket Portfolio Grid",
  },
  {
    id: "aurabeauty",
    index: "05",
    client: "Aura Wellness Clinic",
    tag: "AESTHETIC MEDICINE",
    industry: "Dermatology & Luxury Med-Spa",
    accentColor: "#EC4899",
    image: "/images/projects/aurabeauty/final_hero.png",
    liveUrl: "https://nerqiva.com",
    displayUrl: "aurawellness.in",
    speedMetric: "< 0.68s Mobile Paint",
    impactMetric: "Instant Consultation Booking Routing",
  },
  {
    id: "vowsnveils",
    index: "06",
    client: "Vows & Veils Atelier",
    tag: "WEDDING CINEMA",
    industry: "Luxury Visual Storytelling",
    accentColor: "#F59E0B",
    image: "/images/projects/wedding/bride_portrait.png",
    liveUrl: "https://bridalnerqiva.vercel.app/",
    displayUrl: "vowsnveils.in",
    speedMetric: "< 0.71s Mobile Paint",
    impactMetric: "Cinematic High-Ticket Inquiries Engine",
  },
];

export default function SensoryHero() {
  const [isPaused, setIsPaused] = useState(false);
  const [speedMultiplier, setSpeedMultiplier] = useState<1 | 2>(1);
  const [hoveredProject, setHoveredProject] = useState<FlagshipProject | null>(null);
  const [activeConsoleIndex, setActiveConsoleIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle 3D perspective mouse physics for the console
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const currentDisplayProject = hoveredProject || PROJECTS[activeConsoleIndex];

  return (
    <section className="relative w-full pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden bg-bg-primary text-text-primary">
      
      {/* Ambient Architectural Atmosphere */}
      <div 
        className="absolute top-16 right-1/4 w-[500px] h-[500px] rounded-full blur-[200px] pointer-events-none opacity-15 transition-colors duration-700"
        style={{ backgroundColor: currentDisplayProject.accentColor }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10 mb-6 sm:mb-8">
        
        {/* Studio Provenance & Radar Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-bg-secondary border border-border text-text-secondary font-mono text-[11px] font-semibold mb-5 w-fit shadow-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="tracking-wider">GUWAHATI [26.18°N 91.73°E]</span>
          <span className="text-border-dark">•</span>
          <span className="text-accent font-bold">2 SLOTS OPEN FOR NOVEMBER</span>
        </div>

        {/* Master Typographic Statement (Anfalova Style: Bold Contrast + Crimson Italic Serif Accent) */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          
          <div className="lg:col-span-8">
            <h1
              className="font-display font-black text-text-primary text-[2.05rem] sm:text-4xl md:text-5xl lg:text-[3.9rem] leading-[1.08] sm:leading-[1.04] tracking-tight"
              style={{ letterSpacing: "-0.035em" }}
            >
              Digital flagships — <br />
              or{" "}
              <span className="font-serif italic font-normal text-rose-600 dark:text-rose-400 border-b-2 border-dotted border-rose-500/50 pb-0.5 inline-block">
                48-hour launch sprints,
              </span>{" "}
              <br />
              engineered for ambitious brands.
            </h1>

            <p className="text-text-secondary text-sm sm:text-base lg:text-lg font-normal max-w-2xl mt-4 leading-relaxed">
              We don&apos;t build generic brochure templates or sell bloated 6-month retainers. We craft sub-second web flagships, clinical diagnostics portals, and luxury ateliers — tested on live physical devices and delivered in 48 hours flat.
            </p>
          </div>

          {/* Floating Retro-Tactile Telemetry Console (Anfalova Handheld Console Homage) */}
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="w-full max-w-sm rounded-2xl p-4 bg-bg-card border border-border shadow-xl relative overflow-hidden backdrop-blur-md"
            >
              {/* Console Header Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/80 text-[11px] font-mono">
                <div className="flex items-center gap-1.5 font-bold text-text-primary">
                  <Terminal size={13} className="text-accent" />
                  <span>NERQIVA SYS v2.4</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-500 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Simulated OLED Monochrome Micro-Display */}
              <div className="p-3 rounded-xl bg-bg-dark text-emerald-400 font-mono text-[11px] leading-relaxed mb-3 border border-emerald-950/40 shadow-inner">
                <div className="flex justify-between items-center text-[10px] text-emerald-500/80 mb-1">
                  <span>TELEMETRY FEED</span>
                  <span>99/100 CWV</span>
                </div>
                <div className="truncate font-bold text-white">
                  &gt; {currentDisplayProject.client}
                </div>
                <div className="text-[10px] text-emerald-400/90 truncate">
                  METRIC: {currentDisplayProject.speedMetric}
                </div>
                <div className="text-[9px] text-emerald-500/60 mt-1">
                  DEV: ASSAM, IN • SPRINT: 48H GUARANTEE
                </div>
              </div>

              {/* Tactile Hardware Selector Buttons */}
              <div className="grid grid-cols-6 gap-1">
                {PROJECTS.map((proj, idx) => (
                  <button
                    key={proj.id}
                    onClick={() => setActiveConsoleIndex(idx)}
                    className={`py-1.5 rounded-lg font-mono text-[11px] font-bold transition-all cursor-pointer border select-none ${
                      activeConsoleIndex === idx
                        ? "bg-text-primary text-text-inverted border-text-primary shadow-xs"
                        : "bg-bg-secondary text-text-secondary border-border hover:border-accent hover:text-text-primary"
                    }`}
                  >
                    {proj.index}
                  </button>
                ))}
              </div>

              <div className="mt-2 text-center text-[10px] font-mono text-text-tertiary">
                Tactile Switcher • Tap channel to inspect
              </div>
            </motion.div>
          </div>

        </div>

        {/* High-Agency Action Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6">
          <a
            href="https://wa.me/918724932985?text=Hi%20Dipjyoti,%20I'm%20ready%20to%20commission%20a%20flagship%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-3.5 px-7 text-sm font-bold flex items-center justify-center gap-2 shadow-xl shadow-accent/20 cursor-pointer select-none text-center"
          >
            <MessageCircle size={15} />
            <span>Commission a Flagship</span>
            <ArrowUpRight size={14} />
          </a>

          <a
            href="#flagships"
            className="btn-secondary py-3.5 px-6 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer hover:border-accent/40 select-none text-center"
          >
            <span>Inspect All 6 Flagships</span>
            <ArrowDown size={14} />
          </a>

          <div className="flex items-center gap-2 text-xs font-mono text-text-secondary sm:ml-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Direct WhatsApp founder access • No intermediary delay</span>
          </div>
        </div>

      </div>

      {/* ============================================================
          KINETIC PROJECTS TAPE (IN CONTINUOUS MOTION — ANFALOVA CAROUSEL)
          ============================================================ */}
      <div className="relative w-full">
        
        {/* Stream Command Deck (Anfalova Style Controls) */}
        <div className="section-container flex items-center justify-between mb-4">
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
              </span>
              <span className="uppercase tracking-wider">FLAGSHIP TAPE // IN MOTION</span>
            </div>
            <span className="text-border-dark hidden sm:inline">•</span>
            <span className="font-mono text-xs text-text-tertiary hidden sm:inline">
              Hover to pause • Click to launch live
            </span>
          </div>

          {/* Interactive Playback Controls */}
          <div className="flex items-center gap-2">
            
            {/* Pause / Resume Button (Anfalova's .carousel-pause homage) */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? "Play gallery" : "Pause gallery"}
              className="px-3 py-1.5 rounded-lg bg-bg-secondary hover:bg-bg-card border border-border text-text-primary font-mono text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer select-none shadow-2xs"
            >
              {isPaused ? <Play size={12} className="fill-current" /> : <Pause size={12} className="fill-current" />}
              <span>{isPaused ? "RESUME" : "PAUSE"}</span>
            </button>

            {/* Speed Multiplier Button */}
            <button
              onClick={() => setSpeedMultiplier(speedMultiplier === 1 ? 2 : 1)}
              aria-label="Toggle speed"
              className="px-2.5 py-1.5 rounded-lg bg-bg-secondary hover:bg-bg-card border border-border text-text-secondary font-mono text-xs font-semibold transition-colors cursor-pointer select-none"
            >
              {speedMultiplier}X
            </button>

          </div>

        </div>

        {/* Continuous Marquee Rail */}
        <div 
          ref={containerRef}
          className="relative w-full overflow-hidden py-4 border-y border-border/80 bg-bg-secondary/40 select-none"
        >
          {/* Horizontal Vignette Mask for high-end cinematic fading */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-bg-primary to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-bg-primary to-transparent z-20 pointer-events-none" />

          {/* Scrolling Stream Wrapper */}
          <div 
            className="flex gap-6 w-max animate-marquee"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
              animationDuration: speedMultiplier === 2 ? "20s" : "40s",
            }}
          >
            {/* Duplicated set for seamless infinite loop */}
            {[...PROJECTS, ...PROJECTS].map((project, index) => {
              const isHovered = hoveredProject?.id === project.id;

              return (
                <div
                  key={`${project.id}-${index}`}
                  onMouseEnter={() => setHoveredProject(project)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="w-[300px] sm:w-[370px] md:w-[410px] shrink-0 rounded-2xl p-3 sm:p-3.5 bg-bg-card border border-border shadow-md hover:shadow-2xl hover:border-accent/50 transition-all duration-300 group flex flex-col justify-between"
                >
                  
                  {/* Card Chrome Window Header */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-border/70 text-[11px] font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    </div>

                    <div className="px-2.5 py-0.5 rounded-md bg-bg-secondary border border-border/80 text-[10px] text-text-secondary truncate max-w-[190px]">
                      https://{project.displayUrl}
                    </div>

                    <span className="font-bold text-text-tertiary">
                      {project.index}
                    </span>
                  </div>

                  {/* Real UI Preview Image */}
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-bg-secondary mb-2.5 border border-border/60">
                    <img
                      src={project.image}
                      alt={`${project.client} Preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-104"
                      loading="lazy"
                    />

                    {/* Interactive Hover Overlay Portal */}
                    <div className="absolute inset-0 bg-text-primary/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 p-4 text-center">
                      <span className="font-mono text-xs uppercase tracking-wider font-bold text-accent-light">
                        {project.tag}
                      </span>
                      <span className="text-white font-bold text-sm">
                        {project.impactMetric}
                      </span>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 px-4 py-2 rounded-full bg-white text-black font-mono text-xs font-bold flex items-center gap-1.5 hover:bg-white/90 shadow-lg cursor-pointer"
                      >
                        <span>Launch Live Flagship</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>

                  {/* Bottom Meta & Speed Telemetry */}
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <h3 className="font-bold text-text-primary text-sm tracking-tight">
                        {project.client}
                      </h3>
                      <p className="font-mono text-[10px] text-text-tertiary uppercase tracking-wider">
                        {project.industry}
                      </p>
                    </div>

                    <div className="text-right">
                      <span className="px-2 py-0.5 rounded bg-bg-secondary text-text-primary font-mono text-[10px] font-bold border border-border inline-block">
                        {project.speedMetric}
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Carousel Description Ticker (Anfalova Style) */}
        <div className="section-container flex items-center justify-between mt-3 text-[11px] font-mono text-text-tertiary">
          <div className="flex items-center gap-2 truncate">
            <Activity size={12} className="text-accent shrink-0" />
            <span className="truncate">
              NOW DISPLAYING: {currentDisplayProject.client.toUpperCase()} // SPEED: {currentDisplayProject.speedMetric}
            </span>
          </div>

          <a
            href="#flagships"
            className="text-accent hover:underline font-bold shrink-0 ml-4 flex items-center gap-1"
          >
            <span>View Detailed Case Studies</span>
            <ArrowDown size={11} />
          </a>
        </div>

      </div>

    </section>
  );
}
