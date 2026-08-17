"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative z-20">
      <h1 className="font-sans font-extrabold text-text-primary leading-[1.1] mb-4 tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", letterSpacing: "-0.04em" }}>
        404
      </h1>
      <p className="text-text-secondary text-lg mb-8 font-mono tracking-wide uppercase text-[10px]">
        Looks like this path doesn&apos;t exist.
      </p>
      
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-accent text-white font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-accent-mid transition-colors duration-200 cursor-pointer rounded"
        >
          Back Home
        </Link>
        <Link
          href="/work"
          className="px-6 py-3 bg-transparent border border-border-dark text-text-secondary font-mono text-[10px] font-bold uppercase tracking-widest hover:border-accent/40 hover:text-text-primary transition-colors duration-200 cursor-pointer rounded"
        >
          Explore Work
        </Link>
      </div>
    </div>
  );
}
