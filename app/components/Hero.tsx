"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Play } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden bg-midnight">
      {/* LAYER 1: BASE (bg-midnight) */}

      {/* LAYER 2: B&W OPERATOR PHOTO (Previous Opacity: 65%) */}
      <motion.div 
        style={{ opacity, y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero-bg.jpg"
          alt="Tactical Operator"
          fill
          quality={100}
          className="object-cover object-[center_24%] md:object-[center_20%]"
          style={{ 
            filter: "grayscale(100%) contrast(1.1) brightness(0.6)",
            opacity: 0.65 // Kept at 0.65 as requested ("same as previous one")
          }}
          priority
        />
        {/* Advanced Vignette for central focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(4,5,6,0.6)_60%,rgba(4,5,6,1)_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-transparent to-midnight pointer-events-none" />
      </motion.div>

      {/* LAYER 3: CAMO BLOBS */}
      <div className="absolute inset-0 z-5 pointer-events-none camo-drift">
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 500px 300px at 20% 30%, rgba(255,255,255,0.015) 0%, transparent 70%),
              radial-gradient(ellipse 400px 300px at 80% 70%, rgba(80,97,48,0.03) 0%, transparent 70%)
            `
          }}
        />
      </div>

      {/* LAYER 4: SCANLINES */}
      <div className="absolute inset-0 bg-scanlines opacity-20 z-10 pointer-events-none" />

      {/* LAYER 5: HUD GRID (Added) */}
      <div className="absolute inset-0 grid-pattern opacity-[0.03] z-10 pointer-events-none mix-blend-overlay" />

      {/* LAYER 6: MAIN CONTENT WRAPPER */}
      <div className="relative z-30 min-h-screen flex flex-col justify-center px-4 pt-20 pb-20">
        
        {/* TOP/CENTERED: HERO TEXT & FEATURES */}
        <div className="flex-1 flex flex-col items-center justify-center w-full">
          {/* INTRO PILL */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-flex items-center rounded-full border border-white/[0.08] bg-black/40 backdrop-blur-xl p-1 pr-5 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <span className="mr-3 rounded-full bg-camo-500/20 text-camo-500 border border-camo-500/30 px-3 py-1.5 text-[9px] font-mono font-bold uppercase tracking-[0.15em]">
                CLASSIFIED
              </span>
              <span className="text-[11px] text-gray-300 font-mono tracking-wide">
                ORCUS // SYSTEM_ACTIVE
              </span>
            </div>
          </motion.div>

          {/* HEADINGS */}
          <div className="text-center mb-10 w-full max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-[0.02em] leading-[1.1] mb-6 font-sans text-center text-white drop-shadow-2xl"
            >
              BLACK HAT INTELLIGENCE.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-camo-400 to-camo-600">
                WHITE HAT MISSION
              </span>
              {/* BLINKING TERMINAL CURSOR */}
              <span className="blinking-caret text-camo-500 ml-1 font-mono font-light">_</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-400 font-sans font-light tracking-wide"
            >
              Press Play. <span className="text-white font-medium">Protected.</span>
            </motion.p>
          </div>

          {/* CTAs (Replaces Feature List) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row gap-5 items-center justify-center w-full"
          >
            {/* Primary CTA */}
            <button className="group relative px-8 py-4 bg-camo-500 hover:bg-camo-600 transition-all duration-300 min-w-[200px]">
              <div className="absolute inset-0 border border-white/10" />
              <div className="flex items-center justify-center gap-3">
                <span className="font-mono text-[11px] font-bold text-black uppercase tracking-[0.2em]">
                  Deploy Unit
                </span>
                <span className="text-black group-hover:translate-x-1 transition-transform">
                  &gt;
                </span>
              </div>
              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-black/30" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-black/30" />
            </button>

            {/* Secondary CTA */}
            <button className="group relative px-8 py-4 bg-transparent hover:bg-white/[0.03] transition-all duration-300 min-w-[200px] border border-white/15">
              <div className="flex items-center justify-center gap-3">
                <Play className="w-3 h-3 text-camo-500 fill-camo-500" />
                <span className="font-mono text-[11px] font-bold text-white uppercase tracking-[0.2em]">
                  Watch Intel
                </span>
              </div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* TACTICAL BOTTOM HUD BAR */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 w-full border-t border-white/[0.08] bg-black/60 backdrop-blur-md py-4 z-40"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-between items-center gap-4 font-mono text-[9px] md:text-[10px] text-gray-500 uppercase tracking-[0.25em]">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-camo-500 rounded-full shadow-[0_0_8px_rgba(80,97,48,0.8)] animate-pulse" />
              <span className="text-gray-300">APT-29 Detected</span>
            </div>
            <div className="hidden md:block hover:text-gray-300 transition-colors cursor-default">Sector Y: Secure</div>
            <div className="hidden lg:block hover:text-gray-300 transition-colors cursor-default">Zero-Day Mitigation: Active</div>
            <div className="hover:text-gray-300 transition-colors cursor-default">Mode Status: 99.9% Uptime</div>
            <div className="hidden sm:block hover:text-gray-300 transition-colors cursor-default">Encryption: AES-256</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}