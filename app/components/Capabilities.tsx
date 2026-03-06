"use client";
import { TerminalSquare, Flag, Activity, Globe, Eraser } from "lucide-react";
import { motion, useScroll, useTransform, easeOut } from "framer-motion";
import { useRef } from "react";

export default function Capabilities() {
  const items = [
    {
      number: "01",
      title: "Penetration Testing",
      body: "Runs alongside to reveal real attacker paths and confirm fixes.",
      action: "DEPLOY UNIT >",
      icon: TerminalSquare,
    },
    {
      number: "02",
      title: "Red Team Operations",
      body: "Targets high-value scenarios to pressure-test detection and response.",
      action: "AUTHORIZE OPS >",
      icon: Flag,
    },
    {
      number: "03",
      title: "Risk Baseline",
      body: "Aligns priorities with business impact so the right closures happen first.",
      action: "INITIALIZE SCAN >",
      icon: Activity,
    },
    {
      number: "04",
      title: "OSINT Investigations",
      body: "Surfaces external exposure and adversary signals.",
      action: "RUN RECON >",
      icon: Globe,
    },
    {
      number: "05",
      title: "Data Removal",
      body: "Shrinks public attack surface. Outcome AI verifies takedowns across 500+ global data brokers.",
      action: "EXECUTE PURGE >",
      icon: Eraser,
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.5", "end 0.2"] });
  const y = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
  };

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      id="platform"
      className="relative pb-24 md:pb-32 pt-16 px-4 md:px-6 bg-black overflow-hidden"
    >
      {/* Subtle HUD Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* =========================================
            HEADER SECTION (Exact colors from previous)
            ========================================= */}
        <motion.div
          className="mb-12 md:mb-16 border-t border-white/5 pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
            <div>
              <span className="block font-mono text-[11px] text-camo-500 tracking-[0.2em] uppercase mb-2">/ CAPABILITIES</span>
              <h2 className="font-mono text-5xl md:text-6xl font-bold text-white uppercase tracking-tight">Capabilities</h2>
            </div>
            <span className="font-sans text-[13px] text-gray-300 mb-1 max-w-xs md:text-right">
              Add-ons for Outcome AI. <br className="hidden md:block"/>Choose what you need.
            </span>
          </div>
        </motion.div>

        {/* =========================================
            GLASS CARDS GRID
            ========================================= */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.number}
                variants={itemVariants}
                // bg-[#06080a] matches your old color exactly, but we added /80 and blur for the premium glass feel
                className={`relative rounded-2xl bg-[#06080a]/80 backdrop-blur-xl p-8 md:p-10 border border-white/10 flex flex-col h-full group overflow-hidden transition-all duration-500 hover:shadow-[0_8px_32px_rgba(147,133,98,0.1)] hover:border-camo-500/30 hover:bg-[#06080a] ${
                  index > 2 ? 'lg:col-span-1 lg:translate-x-1/2' : '' // Centers the bottom 2 cards cleanly
                }`}
              >
                {/* Background Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-camo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Animated Top Border Line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-camo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-8 flex items-start justify-between">
                    {/* Exact text-white/5 from previous version */}
                    <span className="font-mono text-5xl text-white/5 font-bold group-hover:text-white/10 transition-colors duration-500">{item.number}</span>
                    
                    {/* Glass icon container */}
                    <div className="bg-white/[0.02] p-3 rounded-xl border border-white/5 group-hover:border-camo-500/20 group-hover:bg-camo-500/10 transition-colors duration-500">
                      {/* Exact text-white/40 from previous version */}
                      <Icon className="h-5 w-5 text-white/40 group-hover:text-white/80 transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Exact font-mono text-white from previous version */}
                  <h3 className="font-mono text-xl md:text-2xl text-white mb-4 font-bold">{item.title}</h3>
                  {/* Exact text-gray-300 from previous version */}
                  <p className="font-sans text-gray-300 text-sm md:text-base leading-relaxed mb-10 flex-grow">{item.body}</p>

                  <span className="font-mono text-[10px] md:text-[11px] text-gray-300 group-hover:text-camo-500 transition-colors uppercase tracking-[0.18em] flex items-center">
                    {item.action}
                    {/* Premium Hover Terminal Cursor */}
                    <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-camo-500 animate-pulse">_</span>
                  </span>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}