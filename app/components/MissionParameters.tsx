"use client";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const TypewriterValue = ({ value, className = "" }: { value: string; className?: string }) => {
  const nodeRef = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-10%" });
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (!isInView) return;

    let index = 0;
    // SLOWED DOWN: 50ms -> 120ms for premium feel
    const intervalId = window.setInterval(() => {
      index += 1;
      setDisplay(value.slice(0, index));

      if (index >= value.length) {
        window.clearInterval(intervalId);
      }
    }, 120);

    return () => window.clearInterval(intervalId);
  }, [isInView, value]);

  return (
    <span ref={nodeRef} className={`tabular-nums ${className}`}>
      {display}
    </span>
  );
};

export default function MissionParameters() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.1"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const stats = [
    { value: "14", unit: "countries", subLabel: "ACTIVE REGIONS" },
    { value: "200+", unit: "groups", subLabel: "APT TRACKED" },
    { value: "24/7", unit: "active", subLabel: "OPS TEMPO" },
    { value: "77+", unit: "features", subLabel: "PRESS" },
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-32 px-4 md:px-6 bg-midnight overflow-hidden">
      {/* Global subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(80,97,48,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(80,97,48,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <motion.div style={{ y }} className="mb-16">
          <span className="block text-[9px] font-mono text-camo-500 tracking-[0.25em] uppercase mb-3">
            04 — PALANTIR-STYLE HUD ELEMENTS
          </span>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white tracking-tight mb-4">
            Stats (HUD)
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-3xl font-light leading-relaxed">
            Corner brackets, grid overlays, typewriter stats. Borrowed from Palantir&apos;s HUD approach.
          </p>
        </motion.div>

        {/* HUD CONTAINER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          // SLOWED DOWN: Duration 0.8s -> 1.2s
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative bg-black/40 backdrop-blur-sm border-t border-b border-white/10"
        >
          {/* CORNER BRACKETS */}
          <div className="absolute -top-[2px] -left-[2px] w-6 h-6 border-l-2 border-t-2 border-camo-500 z-20 shadow-[0_0_15px_rgba(80,97,48,0.3)]" />
          <div className="absolute -top-[2px] -right-[2px] w-6 h-6 border-r-2 border-t-2 border-camo-500 z-20 shadow-[0_0_15px_rgba(80,97,48,0.3)]" />
          <div className="absolute -bottom-[2px] -left-[2px] w-6 h-6 border-l-2 border-b-2 border-camo-500 z-20 shadow-[0_0_15px_rgba(80,97,48,0.3)]" />
          <div className="absolute -bottom-[2px] -right-[2px] w-6 h-6 border-r-2 border-b-2 border-camo-500 z-20 shadow-[0_0_15px_rgba(80,97,48,0.3)]" />

          {/* INTERNAL GRID OVERLAY */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay" 
               style={{ backgroundImage: 'linear-gradient(90deg, transparent 0%, transparent 98%, rgba(255,255,255,0.08) 100%)', backgroundSize: '25% 100%' }} 
          />

          {/* STATS ROW */}
          <div className="grid grid-cols-2 md:grid-cols-4 relative z-10 text-left">
            {stats.map((stat, index) => (
              <div key={index} className="px-8 py-12 flex flex-col justify-end group relative border-r border-white/5 last:border-r-0 min-h-[180px]">
                <div className="absolute inset-0 bg-camo-500/0 group-hover:bg-camo-500/[0.015] transition-all duration-700 pointer-events-none" />
                
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-[30px] md:text-[34px] font-mono font-semibold text-white tracking-tight leading-none">
                    <TypewriterValue value={stat.value} />
                  </span>
                  <span className="text-[11px] md:text-[12px] font-mono text-camo-500 font-medium lowercase tracking-tight translate-y-[-2px]">
                    {stat.unit}
                  </span>
                </div>
                
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.25em] group-hover:text-gray-400 transition-colors">
                  {stat.subLabel}
                </span>
              </div>
            ))}
          </div>

          {/* BOTTOM STATUS BAR */}
          <div className="absolute -bottom-[1.5px] left-8 right-8 h-[2px] flex gap-[2px] z-20">
            <div className="w-[30%] flex gap-[2px]">
              {[...Array(3)].map((_, i) => (
                <div
                  key={`active-${i}`}
                  className="h-full flex-1 bg-linear-to-r from-camo-600 to-camo-400 shadow-[0_0_8px_rgba(80,97,48,0.6)]"
                />
              ))}
            </div>
             <div className="flex-1 flex gap-[2px] opacity-30">
                 {[...Array(7)].map((_, i) => (
                 <div key={`inactive-${i}`} className="h-full flex-1 bg-white/20" />
                 ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}