"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, easeOut } from "framer-motion";
import { useRef } from "react";

export default function FieldOperatives() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.5", "end 0.2"] });
  const y = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

  const operatives = [
    { name: "CMD. JAXON", role: "REDSEC LEAD", image: "/1.png", status: "ACTIVE" },
    { name: "SPC. CHEN", role: "CRYPTO ANALYSIS", image: "/2.png", status: "DEPLOYED" },
    { name: "LT. WEAVER", role: "INFILTRATION", image: "/3.png", status: "STANDBY" },
    { name: "SGT. KOVACS", role: "PHYSICAL SEC", image: "/4.png", status: "ACTIVE" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // SLOWED DOWN
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: easeOut } }, // SLOWED DOWN
  };

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      id="solutions"
      className="relative py-24 md:py-32 px-4 md:px-6 bg-black overflow-hidden"
    >
       {/* Background Grid */}
       <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="relative flex items-center justify-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: true }}
        >
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <h2 className="relative px-8 bg-black font-mono text-base md:text-lg font-bold text-white uppercase tracking-[0.2em] border border-white/10 py-2">
            DIFFERENTIATOR
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {operatives.map((operative) => (
            <motion.article
              key={operative.name}
              variants={itemVariants}
              className="relative group border border-white/10 bg-[#050505] hover:border-camo-500/30 transition-colors duration-500"
            >
              {/* Image Container with Scanner Effect */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={operative.image}
                  alt={operative.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Scanline Overlay */}
                <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                {/* Hover Scanner Line */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-camo-500/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              </div>

              {/* Info Panel */}
              <div className="absolute bottom-0 left-0 w-full p-6 border-t border-white/5 bg-black/80 backdrop-blur-md">
                <div className="flex justify-between items-end mb-2">
                   <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">{operative.name}</h3>
                   <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${operative.status === 'ACTIVE' ? 'bg-camo-500 animate-pulse' : 'bg-gray-600'}`} />
                   </div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-mono text-[10px] text-camo-500 uppercase tracking-[0.15em]">{operative.role}</p>
                  <span className="font-mono text-[9px] text-gray-500">{operative.status}</span>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/20 group-hover:border-camo-500 transition-colors" />
              <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/20 group-hover:border-camo-500 transition-colors" />
              
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}