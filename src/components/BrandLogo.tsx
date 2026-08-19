"use client";

import Image from "next/image";

export default function BrandLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Dark theme logo - shown only when .dark class is on html */}
      <div className="hidden dark:block relative w-full h-full">
        <Image
          src="/brand/logo-1.png"
          alt="NERQIVA"
          fill
          sizes="64px"
          style={{
            objectFit: "contain",
            transform: "scale(1.4)",
          }}
          className="mix-blend-screen"
          priority
        />
      </div>
      
      {/* Light theme logo - hidden when .dark class is on html */}
      <div className="block dark:hidden relative w-full h-full">
        <Image
          src="/brand/logo-2.png"
          alt="NERQIVA"
          fill
          sizes="64px"
          style={{
            objectFit: "contain",
            transform: "scale(1.4)",
          }}
          className="mix-blend-multiply"
          priority
        />
      </div>
    </div>
  );
}
