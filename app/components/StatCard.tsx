"use client";
import { motion, useMotionValue, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useMemo, useId } from "react";

interface StatCardProps {
  label: string;
  value: string;
  numberValue: number;
  suffix?: string;
  staticDisplay?: boolean;
  sub: string;
  index: number;
}

export default function StatCard({ 
  label, 
  value, 
  numberValue, 
  suffix = "", 
  staticDisplay = false,
  sub,
  index 
}: StatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reactId = useId();
  
  const sysId = useMemo(() => {
    let hash = 0;
    for (let i = 0; i < reactId.length; i += 1) {
      hash = (hash * 31 + reactId.charCodeAt(i)) % 1000;
    }
    return hash;
  }, [reactId]);

  // Per PDF: Typewriter count-up, 1.5s, ease-out
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const decimals = numberValue % 1 !== 0 ? 1 : 0;
    return latest.toFixed(decimals) + suffix;
  });

  useEffect(() => {
    if (isInView && !staticDisplay) {
      const controls = {
        duration: 1.5,
        ease: "easeOut"
      };
      
      const animation = setTimeout(() => {
        count.set(numberValue);
      }, index * 100 + 300);
      
      // Animate from 0 to numberValue
      let startTime: number | null = null;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / (controls.duration * 1000), 1);
        
        // easeOut function
        const easeOut = 1 - Math.pow(1 - progress, 3);
        count.set(numberValue * easeOut);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      const animationFrame = setTimeout(() => {
        requestAnimationFrame(animate);
      }, index * 100 + 300);
      
      return () => {
        clearTimeout(animation);
        clearTimeout(animationFrame);
      };
    }
  }, [isInView, numberValue, count, index, staticDisplay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.5, 
        ease: "easeOut" 
      }}
      className="relative p-8 md:p-10 border border-white/4 bg-white/1.5 backdrop-blur-20 group transition-all duration-300 overflow-hidden"
      style={{
        "--top-highlight": "linear-gradient(90deg, transparent, rgba(80,97,48,0.12), transparent)"
      } as React.CSSProperties}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(80,97,48,0.1)"}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)"}
    >
      {/* Top Highlight - Per PDF: linear-gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-camo-500/30 to-transparent" />

      {/* HUD Corner Brackets - Per PDF */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-camo-500/30" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-camo-500/30" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-camo-500/30" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-camo-500/30" />

      {/* System ID */}
      <div className="mb-6 text-camo-500/60 font-mono text-[9px] md:text-[10px] tracking-widest">
        {`// SYS_ID: ${String(sysId).padStart(3, '0')}`}
      </div>

      {/* Animated Number - Per PDF: 1.5s typewriter count-up */}
      <div className="mb-4">
        {staticDisplay ? (
          <h3 className="text-5xl md:text-6xl font-mono font-bold text-white">{value}</h3>
        ) : (
          <motion.h3 
            className="text-5xl md:text-6xl font-mono font-bold text-white"
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 1.5, ease: "easeOut" }}
          >
            {rounded}
          </motion.h3>
        )}
      </div>

      {/* Label */}
      <p className="text-xs md:text-sm font-sans tracking-wide text-gray-400 uppercase mb-6">
        {label}
      </p>

      {/* Status Bar */}
      <div className="pt-4 border-t border-white/4 flex justify-between items-center">
        <span className="text-[9px] md:text-[10px] text-camo-500 font-mono uppercase tracking-wider">
          {sub}
        </span>
        <div className="w-2 h-2 rounded-full bg-camo-600 animate-pulse" />
      </div>
    </motion.div>
  );
}

