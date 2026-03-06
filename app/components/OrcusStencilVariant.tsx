"use client";

export default function OrcusStencilVariant() {
  return (
    <div className="inline-block">
      {/* Stencil variant - per brief requirement */}
      <div className="relative inline-block">
        {/* Stencil text with visual breaks */}
        <div
          className="relative text-4xl md:text-5xl font-bold italic uppercase tracking-wide leading-none"
          style={{
            color: "#506130",
            fontFamily: '"Saira Semi Condensed", system-ui',
            textShadow: "2px 2px 0 rgba(80, 97, 48, 0.3)",
          }}
        >
          {/* SVG Overlay for stencil effect */}
          <svg
            width="200"
            height="70"
            viewBox="0 0 200 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-1 -left-1 pointer-events-none"
          >
            {/* Draw stencil-style outlines for each letter with breaks */}
            
            {/* O (Zero) - Oval with horizontal breaks */}
            <path
              d="M 16 22 Q 10 28 10 36 Q 10 50 20 54 Q 28 58 32 54 Q 38 50 38 36 Q 38 28 32 22 Q 24 18 22 18 Q 18 18 16 22 Z"
              stroke="#506130"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Break horizontal top */}
            <line x1="20" y1="18" x2="30" y2="18" stroke="#0A0A0A" strokeWidth="4" />
            {/* Break horizontal bottom */}
            <line x1="20" y1="60" x2="30" y2="60" stroke="#0A0A0A" strokeWidth="4" />

            {/* R - with break */}
            <path
              d="M 50 22 L 50 56 M 50 22 L 62 22 Q 68 22 68 30 Q 68 38 62 38 L 50 38 L 68 56"
              stroke="#506130"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Break right */}
            <line x1="66" y1="28" x2="72" y2="28" stroke="#0A0A0A" strokeWidth="4" />

            {/* C - with breaks */}
            <path
              d="M 88 22 Q 76 22 76 36 L 76 50 Q 76 58 88 58 Q 100 58 100 56"
              stroke="#506130"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Break top */}
            <line x1="82" y1="18" x2="94" y2="18" stroke="#0A0A0A" strokeWidth="4" />
            {/* Break bottom */}
            <line x1="82" y1="62" x2="94" y2="62" stroke="#0A0A0A" strokeWidth="4" />

            {/* U - with breaks */}
            <path
              d="M 122 22 L 122 48 Q 122 58 132 58 Q 142 58 142 48 L 142 22"
              stroke="#506130"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Break top left */}
            <line x1="120" y1="18" x2="128" y2="18" stroke="#0A0A0A" strokeWidth="4" />
            {/* Break top right */}
            <line x1="136" y1="18" x2="144" y2="18" stroke="#0A0A0A" strokeWidth="4" />

            {/* S - with breaks */}
            <path
              d="M 168 22 Q 156 22 156 30 Q 156 38 168 40 Q 178 42 178 50 Q 178 58 168 58"
              stroke="#506130"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Break left */}
            <line x1="152" y1="30" x2="160" y2="30" stroke="#0A0A0A" strokeWidth="4" />
            {/* Break right */}
            <line x1="176" y1="50" x2="184" y2="50" stroke="#0A0A0A" strokeWidth="4" />
          </svg>

          {/* Text with slight opacity */}
          <span className="opacity-70 mix-blend-multiply">ORCUS</span>
        </div>

        {/* Information Footer */}
        <div className="mt-4 space-y-1">
          <div className="text-xs font-mono text-camo-500 uppercase tracking-[0.3em] font-bold">
            Stencil Variant
          </div>
          <div className="text-[10px] font-mono text-camo-600 uppercase tracking-wider">
            Field Drab #506130 • Stencil Breaks
          </div>
        </div>
      </div>
    </div>
  );
}
