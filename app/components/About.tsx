"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-[#F6F5F2] pl-6 pr-5 md:pl-11 md:pr-10 pt-20 md:pt-28 pb-14 md:pb-18 overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, x: -72, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
        className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-px bg-black/10 border border-black/10 shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
      >
        <div className="bg-charcoal p-11 md:p-15 min-h-[44vh] md:min-h-[54vh] flex flex-col justify-between group">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-camo-500">
            About 0RCUS
          </p>
          <h2 className="text-white text-5xl md:text-7xl lg:text-[88px] font-bold tracking-tighter leading-[0.85] uppercase group-hover:text-camo-500 transition-colors duration-1000 ease-[0.16,1,0.3,1]">
            Former<br />
            Threat<br />
            Actors.
          </h2>
        </div>

        <div className="bg-white p-11 md:p-15 min-h-[44vh] md:min-h-[54vh] flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-spyware-light opacity-10 pointer-events-none" />
          
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bodyGray relative z-10">
            Operational Doctrine
          </p>
          
          <div className="relative z-10">
            <p className="text-midnight text-xl md:text-2xl lg:text-[28px] font-medium leading-snug max-w-2xl mb-10">
              Founded by offensive operators who built and deployed the same classes of tools now used in modern cyber conflict.
            </p>
            <p className="text-bodyGray text-sm md:text-base leading-relaxed max-w-xl">
              We deliver disciplined, legal, mission-bound offensive capability for institutions that cannot afford guesswork.
            </p>
          </div>
        </div>
      </motion.div>

    </section>
  );
}