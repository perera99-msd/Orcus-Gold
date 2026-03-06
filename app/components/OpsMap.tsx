"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function OpsMap() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.5", "end 0.2"] });
  const y = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

  // Coordinates calibrated to match the provided map image
  const operationPoints = [
    { id: 1, x: "18%", y: "35%", label: "US West" },       
    { id: 2, x: "28%", y: "38%", label: "US East" },       
    { id: 3, x: "32%", y: "65%", label: "Brazil" },        
    { id: 4, x: "25%", y: "58%", label: "Peru" },          
    { id: 5, x: "46%", y: "28%", label: "UK" },            
    { id: 6, x: "54%", y: "25%", label: "Russia West" },   
    { id: 7, x: "48%", y: "52%", label: "Nigeria" },       
    { id: 8, x: "55%", y: "75%", label: "South Africa" },  
    { id: 9, x: "62%", y: "42%", label: "Middle East" },   
    { id: 10, x: "72%", y: "35%", label: "China" },        
    { id: 11, x: "66%", y: "48%", label: "India" },        
    { id: 12, x: "82%", y: "32%", label: "Japan" },        
    { id: 13, x: "85%", y: "72%", label: "Australia" },    
    { id: 14, x: "76%", y: "22%", label: "Russia East" },  
  ];

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className="relative py-24 md:py-32 px-4 md:px-6 bg-midnight overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,97,48,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <motion.div
          className="mb-12 md:mb-16 border-l-2 border-camo-500/30 pl-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }} // SLOWED DOWN
        >
          <span className="block text-[9px] font-mono text-camo-500 tracking-[0.25em] uppercase mb-2">
            05 — Live Telemetry
          </span>
          <h2 className="font-sans text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-2">
            Ops Map
          </h2>
          <p className="font-mono text-xs md:text-sm text-gray-400 tracking-wide uppercase">
             Global Threat Theaters // Active Monitoring
          </p>
        </motion.div>

        {/* PREMIUM MAP PANEL */}
        <motion.div
          className="relative rounded-sm border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden group"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }} // SLOWED DOWN
        >
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-camo-500/50 z-20" />
          <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-camo-500/50 z-20" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-camo-500/50 z-20" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-camo-500/50 z-20" />

          <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none z-10" />
          <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none z-10 mix-blend-overlay" />
          
          <div className="relative aspect-[16/9] md:aspect-[2/1] w-full">
            <Image
              src="/map.svg"
              alt="World map"
              fill
              className="object-cover opacity-50 grayscale contrast-125"
            />
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

            {/* Operation Points */}
            {operationPoints.map((point, idx) => (
              <div
                key={point.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                style={{ left: point.x, top: point.y }}
              >
                {/* Slow Breathing Pulse Animation */}
                <motion.div
                   className="absolute -inset-3 bg-camo-500/20 rounded-full"
                   animate={{ 
                     opacity: [0, 0.5, 0], 
                     scale: [0.8, 1.5, 0.8] 
                   }}
                   transition={{ 
                     duration: 4, // 4 Seconds = Very Slow
                     repeat: Infinity, 
                     ease: "easeInOut",
                     delay: idx * 0.2 
                   }}
                />
                
                {/* Core Dot with separate slow blink */}
                <motion.div 
                  className="relative h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-camo-500 shadow-[0_0_10px_rgba(80,97,48,0.8)]"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: idx * 0.1 
                  }}
                />
              </div>
            ))}
          </div>

          {/* Bottom HUD Bar */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/80 backdrop-blur-xl px-6 py-3 flex items-center justify-between z-30">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-camo-500 shadow-[0_0_5px_rgba(80,97,48,1)]" />
                <span className="font-mono text-[9px] md:text-[10px] text-camo-500 uppercase tracking-widest font-semibold">
                  Live Feed
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
               <span className="font-mono text-[10px] text-gray-300 uppercase tracking-widest">
                  Real-Time Intelligence
               </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}