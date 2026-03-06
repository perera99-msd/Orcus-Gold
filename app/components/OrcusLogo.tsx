"use client";
import Link from "next/link";

export default function OrcusLogo() {
  return (
    <Link
      href="/"
      className="flex items-center text-2xl md:text-3xl font-semibold italic uppercase tracking-tight text-white leading-none transition-opacity duration-300 hover:opacity-90"
      aria-label="ORCUS home"
    >
      <span className="relative inline-block">
        0
        <span
          className="absolute left-1/2 top-1/2 h-[2px] w-[16px] bg-camo-500"
          style={{ transform: "translate(-50%, -50%) rotate(-22deg)" }}
        />
      </span>
      <span className="-ml-0.5">RCUS</span>
    </Link>
  );
}

