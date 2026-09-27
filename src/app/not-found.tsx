import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: true,
  },
};

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
          className="btn-primary"
        >
          Back Home
        </Link>
        <Link
          href="/work"
          className="btn-secondary"
        >
          Explore Work
        </Link>
      </div>
    </div>
  );
}
