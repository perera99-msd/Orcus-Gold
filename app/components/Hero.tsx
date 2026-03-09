"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.95]);

  return (
    <section ref={ref} className="relative min-h-screen bg-midnight flex flex-col justify-end overflow-hidden">
      
      {/* 1. DARK SCANNER BACKGROUND (Top 60%) */}
      <motion.div style={{ y: imageY, opacity: bgOpacity }} className="absolute top-0 inset-x-0 h-[65vh] z-0 pointer-events-none bg-midnight">
        <Image
          src="/hero-bg.jpg" // Dark subject background
          alt="0RCUS Operations"
          fill
          priority
          className="object-cover object-center grayscale contrast-125 opacity-40 mix-blend-luminosity"
        />
        
        {/* High-Density Matrix */}
        <div 
          className="absolute inset-0 z-10 mix-blend-screen"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.25) 1px, transparent 1px)', backgroundSize: '3px 3px' }}
        />

        {/* Tactical Scanner Sweep */}
        <motion.div
          className="absolute left-0 right-0 z-15 w-full"
          style={{ height: "30vh", background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08) 50%, transparent)" }}
          animate={{ top: ["-30%", "110%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        
        <div className="absolute inset-0 z-20 opacity-100" style={{ background: "radial-gradient(ellipse at center, transparent 0%, var(--color-midnight) 100%)" }} />
      </motion.div>

      {/* CLASSIFIED HUD WATERMARK */}
      <div className="absolute top-36 right-6 md:right-12 z-20 pointer-events-none opacity-40 hidden sm:block">
        <span className="font-mono text-[10px] text-white uppercase tracking-[0.4em] font-bold drop-shadow-md">
          0RCUS // CLASSIFIED
        </span>
      </div>

      {/* 2. STRUCTURAL WHITE BLOCK (Bottom 40%) */}
      <motion.div className="relative z-30 w-full flex flex-col" style={{ y: contentY, opacity: contentOpacity }}>
        
        {/* Eyebrow - Sits right above the white block */}
        <div className="w-full pl-6 pr-5 md:pl-11 md:pr-10 mx-auto pb-6 flex items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4"
          >
            <div className="h-0.5 w-6 bg-camo-500 hidden md:block" />
            <span className="font-mono text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase text-bodyGray">
              American-Made <span className="text-camo-500 mx-3">·</span> Vetted Access Only
            </span>
          </motion.div>
        </div>

        {/* The White Architectural Slab (No floating shadows, flat and structural) */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-white origin-bottom relative z-20 border-t border-borderDark/10"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-20 pointer-events-none mix-blend-multiply" />

          <div className="w-full pl-6 pr-5 md:pl-11 md:pr-10 mx-auto py-12 md:py-16 overflow-hidden relative z-10">
            <h1 className="text-[36px] sm:text-5xl md:text-6xl lg:text-[80px] xl:text-[96px] font-bold uppercase text-midnight leading-[0.9] tracking-tighter flex flex-col gap-1 mb-10">
              <motion.span initial={{ opacity: 0, y: 44 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}>
                BLACK HAT INTELLIGENCE.
              </motion.span>
              <motion.span initial={{ opacity: 0, y: 44 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0, delay: 0.75, ease: [0.16, 1, 0.3, 1] }} className="text-camo-500 flex items-center">
                WHITE HAT MISSION<span className="animate-[caretBlink_1s_steps(1,end)_infinite] ml-1 text-camo-500">_</span>
              </motion.span>
            </h1>

            <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-10 border-t border-black/10 pt-10">
              <motion.p
                initial={{ opacity: 0, filter: "blur(5px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                className="text-bodyGray font-sans text-sm md:text-base lg:text-lg max-w-2xl font-light leading-relaxed"
              >
                Spyware, zero-days, and offensive cyber tools for vetted governments, law firms, and private clients.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
              >
                <a href="#contact" className="group bg-camo-500 text-midnight px-14 py-5 font-mono text-[11px] md:text-[12px] font-bold uppercase tracking-[0.25em] transition-colors duration-300 text-center hover:bg-camo-600">
                  Request Briefing
                </a>
                <a href="#tools" className="group bg-transparent border border-borderDark text-midnight px-14 py-5 font-mono text-[11px] md:text-[12px] font-bold uppercase tracking-[0.25em] transition-colors duration-300 text-center hover:bg-black/5">
                  View Tools
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}