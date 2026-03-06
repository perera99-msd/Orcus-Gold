"use client";

interface OrcusIconMarkProps {
  size?: "favicon" | "small" | "medium" | "large";
  className?: string;
}

export default function OrcusIconMark({ size = "medium", className = "" }: OrcusIconMarkProps) {
  const sizeMap = {
    favicon: 16,
    small: 32,
    medium: 48,
    large: 64,
  };

  const px = sizeMap[size];

  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-white hover:text-camo-500 transition-colors duration-300 ${className}`}
      aria-label="ORCUS Icon Mark"
    >
      {/* Outer Circle/Border */}
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" />

      {/* Inner Circle */}
      <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />

      {/* Zero Shape */}
      <ellipse cx="32" cy="32" rx="12" ry="16" fill="none" stroke="currentColor" strokeWidth="2.5" />

      {/* Diagonal Slash - Rotated 22 degrees */}
      <line
        x1="20"
        y1="20"
        x2="44"
        y2="44"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Corner Accents - Top Left */}
      <line x1="8" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5" />
      <line x1="8" y1="8" x2="8" y2="14" stroke="currentColor" strokeWidth="1.5" />

      {/* Corner Accents - Top Right */}
      <line x1="56" y1="8" x2="50" y2="8" stroke="currentColor" strokeWidth="1.5" />
      <line x1="56" y1="8" x2="56" y2="14" stroke="currentColor" strokeWidth="1.5" />

      {/* Corner Accents - Bottom Left */}
      <line x1="8" y1="56" x2="14" y2="56" stroke="currentColor" strokeWidth="1.5" />
      <line x1="8" y1="56" x2="8" y2="50" stroke="currentColor" strokeWidth="1.5" />

      {/* Corner Accents - Bottom Right */}
      <line x1="56" y1="56" x2="50" y2="56" stroke="currentColor" strokeWidth="1.5" />
      <line x1="56" y1="56" x2="56" y2="50" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
