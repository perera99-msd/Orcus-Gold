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
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: easeOut } },
  };

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      id="solutions"
      className="relative py-24 md:py-32 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24 bg-midnight overflow-hidden"
    >
      <div className="w-full mx-auto relative z-10">
        
        <motion.div
          className="relative flex items-center justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: true }}
        >
          <div className="absolute w-full h-px bg-white/10" />
          <h2 className="relative px-8 bg-midnight font-mono text-[11px] md:text-xs font-bold text-bodyGray uppercase tracking-[0.3em] border border-white/10 py-2">
            DIFFERENTIATOR
          </h2>
        </motion.div>

        {/* 4-Column Hairline Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {operatives.map((operative) => (
            <motion.article
              key={operative.name}
              variants={itemVariants}
              className="relative group bg-[#070707] overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={operative.image}
                  alt={operative.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale contrast-125 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.02)_2px,rgba(255,255,255,0.02)_3px)] pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent opacity-90" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-camo-500/20 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              </div>

              {/* Info Panel Anchored Bottom */}
              <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8">
                <div className="flex justify-between items-end mb-2">
                   <h3 className="font-mono text-sm font-bold text-white uppercase tracking-widest">{operative.name}</h3>
                   <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${operative.status === 'ACTIVE' ? 'bg-camo-500 animate-pulse' : 'bg-bodyGray/40'}`} />
                   </div>
                </div>
                <div className="flex justify-between items-center border-t border-white/10 pt-3 mt-3">
                  <p className="font-mono text-[9px] text-camo-500 uppercase tracking-[0.2em]">{operative.role}</p>
                  <span className="font-mono text-[8px] text-bodyGray uppercase tracking-widest">{operative.status}</span>
                </div>
              </div>
              
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}