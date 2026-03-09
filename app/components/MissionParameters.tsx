"use client";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

// Premium slow counting animation physics
const PremiumCounter = ({ text }: { text: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Extract the numeric part to animate, and keep the symbols (+, /) intact
  const numMatch = text.match(/(\d+)/);
  const targetNumber = numMatch ? parseInt(numMatch[1], 10) : 0;
  const prefix = numMatch ? text.substring(0, numMatch.index) : "";
  const suffix = numMatch ? text.substring(numMatch.index! + numMatch[1].length) : text;

  const motionValue = useMotionValue(0);
  
  // High damping & low stiffness creates that slow, premium deceleration
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 40,
    restDelta: 0.001
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(targetNumber);
    }
  }, [isInView, motionValue, targetNumber]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        // Format with prefix/suffix (e.g., "200" becomes "200+")
        ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
      }
    });
    return () => unsubscribe();
  }, [springValue, prefix, suffix]);

  return <span ref={ref} className="tabular-nums">0{suffix}</span>;
};

export default function MissionParameters() {
  const stats = [
    { value: "14", unit: "Countries", subLabel: "Active Operations" },
    { value: "200+", unit: "APT Groups", subLabel: "Tracked Real-Time" },
    { value: "24/7", unit: "Active", subLabel: "Operations Tempo" },
    { value: "77+", unit: "Publications", subLabel: "Press Features" },
  ];

  return (
    <section id="ops" className="relative py-20 md:py-28 bg-midnight overflow-hidden border-t border-white/5">
      <div className="w-full pl-6 pr-5 md:pl-11 md:pr-10 mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-12"
        >
          <span className="flex items-center gap-3 font-mono text-[10px] text-camo-500 tracking-[0.25em] uppercase mb-4">
            <div className="h-px w-6 bg-camo-500/50" />
            Mission Parameters
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tighter uppercase leading-none">
            Operational Tempo
          </h2>
        </motion.div>

        {/* Unified HUD strip with internal tactical grid */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative border border-camo-500/20 bg-deepBlack/85 shadow-[0_24px_50px_rgba(0,0,0,0.35)] overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />

          {/* Tactical corner brackets */}
          <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-camo-500/55 z-20" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-camo-500/55 z-20" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-camo-500/55 z-20" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-camo-500/55 z-20" />

          <div className="relative z-10 px-8 pt-10 md:px-10 md:pt-11">
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-bodyGray/60 mb-5">Operational Status</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="relative py-8 pr-6 md:pr-8 border-r border-white/8 last:border-r-0"
                >
                  <div className="flex items-end gap-2.5 leading-none mb-2">
                    <span className="text-5xl md:text-6xl font-semibold text-white tracking-tight">
                      <PremiumCounter text={stat.value} />
                    </span>
                    <span className="text-[11px] md:text-xs font-mono text-camo-500 lowercase tracking-[0.12em] pb-1">
                      {stat.unit.toLowerCase()}
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-bodyGray/65 uppercase tracking-[0.24em]">
                    {stat.subLabel}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 mb-7 flex gap-1.5">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 ${i < 4 ? "bg-camo-500/75" : "bg-white/10"}`}
                />
              ))}
            </div>
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,133,98,0.04)_0%,transparent_72%)] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}