"use client";

import Image from "next/image";

export default function BrandLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Dark theme logo - pure crisp white mark on transparent */}
      <div className="hidden dark:block relative w-full h-full">
        <Image
          src="/brand/logo-clean-white.png"
          alt="NERQIVA Studio Official Logo"
          fill
          sizes="(max-width: 768px) 120px, 180px"
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
      
      {/* Light theme logo - pure crisp obsidian ink mark on transparent */}
      <div className="block dark:hidden relative w-full h-full">
        <Image
          src="/brand/logo-clean-dark.png"
          alt="NERQIVA Studio Official Logo"
          fill
          sizes="(max-width: 768px) 120px, 180px"
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
    </div>
  );
}
