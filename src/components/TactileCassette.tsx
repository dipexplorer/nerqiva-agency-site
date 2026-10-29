"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, SkipForward, Check, Disc3 } from "lucide-react";
import { sound } from "../utils/audio";

interface CassetteTrack {
  id: string;
  number: string;
  badge: string;
  title: string;
  punchline: string;
  proof: string;
}

const TRACKS: CassetteTrack[] = [
  {
    id: "speed",
    number: "TRACK 01 // SIDE A",
    badge: "🚫 NO 6-WEEK FIGMA RUNAROUNDS",
    title: "We don't do endless feedback loops.",
    punchline: "Traditional agencies drag projects through weeks of wireframe decks. We scope, design, and deliver a live mobile staging build to your phone in 48 hours flat.",
    proof: "48-Hour Live Delivery Guarantee",
  },
  {
    id: "ownership",
    number: "TRACK 02 // SIDE A",
    badge: "🚫 NO MONTHLY HOSTAGE FEES",
    title: "Zero recurring maintenance retainers.",
    punchline: "Most agencies charge ₹5,000/mo just to keep WordPress alive. With NERQIVA, you get 100% clean code repository and domain ownership on Day 2.",
    proof: "100% Source Code Handover",
  },
  {
    id: "whatsapp",
    number: "TRACK 03 // SIDE B",
    badge: "📲 1-TAP WHATSAPP BOOKING",
    title: "Engineered for Indian consumer behavior.",
    punchline: "Local clients never fill 8-field forms. They want 1-tap WhatsApp booking with pre-filled service context, date, and live pricing directly on your phone.",
    proof: "3-Second Client Lead Intake",
  },
  {
    id: "performance",
    number: "TRACK 04 // SIDE B",
    badge: "⚡ REAL 4G SPEED VERIFICATION",
    title: "Built on clean modern edge code.",
    punchline: "Over 85% of your local clients browse on mobile. We verify sub-second loading speeds on real local 4G connections—zero bloated WordPress themes.",
    proof: "< 0.8s Mobile First Paint",
  },
];

export default function TactileCassette() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const currentTrack = TRACKS[currentTrackIndex];

  const handleNext = () => {
    sound.tapeClick();
    setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length);
  };

  const togglePlay = () => {
    sound.tapeClick();
    setIsPlaying(!isPlaying);
  };

  const selectTrack = (index: number) => {
    sound.tapeClick();
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  return (
    <section id="manifesto" className="py-20 sm:py-28 bg-bg-card border-t border-border/40 relative overflow-hidden">
      <div className="section-container relative z-10 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold mb-3 block">
            The Anti-Agency Manifesto
          </span>
          <h2
            className="font-display font-black text-text-primary text-3xl sm:text-5xl lg:text-6xl leading-[1.06] tracking-tight mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Why ambitious brands choose us over{" "}
            <span className="font-serif italic font-normal text-accent underline decoration-accent/20">
              traditional retainers.
            </span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-normal">
            No corporate telephone game, no offshore middlemen, and no proprietary lock-in. Just pure local craft delivered on time.
          </p>
        </div>

        {/* TACTILE PHYSICAL CASSETTE DECK (anfalova.art inspired) */}
        <div className="bg-bg-primary rounded-3xl p-6 sm:p-10 border border-border/80 shadow-2xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Physical Cassette Tape Body */}
          <div className="w-full max-w-md bg-gradient-to-br from-neutral-900 to-black p-6 rounded-2xl border-2 border-neutral-700 shadow-2xl text-white relative overflow-hidden shrink-0">
            
            {/* Top Tape Sticker */}
            <div className="bg-neutral-800/90 border border-neutral-700 rounded-lg p-3 mb-5 flex items-center justify-between">
              <div>
                <span className="font-mono text-[9px] text-accent tracking-widest uppercase font-bold block">
                  NERQIVA AUDIO MASTER // 48H SPRINT
                </span>
                <span className="font-mono text-xs font-bold text-neutral-200">
                  {currentTrack.badge}
                </span>
              </div>
              <div className="flex items-center gap-1 font-mono text-[10px] text-neutral-400">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>REC</span>
              </div>
            </div>

            {/* Cassette Spools Window */}
            <div className="bg-neutral-950 rounded-xl p-4 border border-neutral-800 flex items-center justify-around relative mb-5">
              {/* Left Spool */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-14 h-14 rounded-full border-4 border-dashed border-neutral-500 flex items-center justify-center transition-transform ${
                    isPlaying ? "animate-spin" : ""
                  }`}
                  style={{ animationDuration: "3s" }}
                >
                  <div className="w-6 h-6 rounded-full bg-neutral-800 border-2 border-neutral-600 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-neutral-400" />
                  </div>
                </div>
                <span className="font-mono text-[8px] text-neutral-500 mt-1 uppercase">Feed</span>
              </div>

              {/* Tape Bridge Ruler */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-20 h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent"
                    animate={{ width: isPlaying ? ["20%", "80%", "40%"] : "50%" }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <span className="font-mono text-[9px] text-accent tracking-wider font-bold">
                  {currentTrack.number}
                </span>
              </div>

              {/* Right Spool */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-14 h-14 rounded-full border-4 border-dashed border-neutral-500 flex items-center justify-center transition-transform ${
                    isPlaying ? "animate-spin" : ""
                  }`}
                  style={{ animationDuration: "3s" }}
                >
                  <div className="w-6 h-6 rounded-full bg-neutral-800 border-2 border-neutral-600 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-neutral-400" />
                  </div>
                </div>
                <span className="font-mono text-[8px] text-neutral-500 mt-1 uppercase">Take-Up</span>
              </div>
            </div>

            {/* Physical Deck Buttons (Mechanical Depth) */}
            <div className="flex items-center justify-between gap-3 pt-2 border-t border-neutral-800">
              <button
                onClick={togglePlay}
                className="flex-1 py-2 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 active:translate-y-0.5 border border-neutral-600 font-mono text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-all select-none"
              >
                {isPlaying ? <Pause size={13} className="text-accent" /> : <Play size={13} className="text-emerald-400" />}
                <span>{isPlaying ? "Pause Tape" : "Play Tape"}</span>
              </button>

              <button
                onClick={handleNext}
                className="py-2 px-4 rounded-lg bg-neutral-800 hover:bg-neutral-700 active:translate-y-0.5 border border-neutral-600 font-mono text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-all select-none"
                title="Next Manifesto Point"
              >
                <span>Next</span>
                <SkipForward size={13} />
              </button>
            </div>

          </div>

          {/* Active Track Story & Commercial Guarantee */}
          <div className="flex-1 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTrack.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                    {currentTrack.badge}
                  </span>
                  <span className="font-mono text-xs text-text-tertiary">
                    {currentTrackIndex + 1} / {TRACKS.length}
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-text-primary tracking-tight">
                  {currentTrack.title}
                </h3>

                <p className="text-text-secondary text-base leading-relaxed font-normal">
                  {currentTrack.punchline}
                </p>

                <div className="pt-4 border-t border-border flex items-center justify-between text-xs font-mono">
                  <span className="text-text-primary font-bold flex items-center gap-1.5">
                    <Check size={14} className="text-accent" />
                    <span>Written in Every Contract</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-bg-secondary text-text-primary font-bold border border-border">
                    {currentTrack.proof}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Track Selectors */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-6 mt-6 border-t border-border/50">
              {TRACKS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => selectTrack(idx)}
                  className={`p-2 rounded-xl text-left font-mono text-[11px] border transition-all cursor-pointer select-none ${
                    currentTrackIndex === idx
                      ? "bg-accent text-text-inverted border-accent font-bold shadow-md"
                      : "bg-bg-secondary text-text-secondary border-border hover:border-accent/40"
                  }`}
                >
                  <span className="block opacity-60 text-[9px]">0{idx + 1}</span>
                  <span className="truncate block">{t.badge.replace(/[^a-zA-Z0-9 ]/g, "").slice(0, 16)}</span>
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
