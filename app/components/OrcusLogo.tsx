"use client";
import Link from "next/link";

interface OrcusLogoProps {
  className?: string;
}

export default function OrcusLogo({ className = "text-white" }: OrcusLogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center text-xl md:text-2xl font-semibold uppercase tracking-[0.18em] leading-none transition-opacity duration-300 hover:opacity-90 ${className}`}
      aria-label="0RCUS home"
    >
      <span className="relative inline-block mr-px">
        0
        <span
          className="absolute left-1/2 top-1/2 h-0.5 w-4 bg-camo-500"
          style={{ transform: "translate(-50%, -50%) rotate(-22deg)" }}
        />
      </span>
      <span>RCUS</span>
    </Link>
  );
}

