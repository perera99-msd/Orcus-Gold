"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function BriefingCTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.5", "end 0.2"] });
  const y = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className="relative py-16 md:py-20 px-4 md:px-6 bg-[#050506] border-y border-white/15"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="panel-dark p-7 md:p-10 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="font-mono text-5xl md:text-7xl text-white uppercase tracking-[0.05em] mb-4"
          >
            Request a Briefing
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed"
          >
            Schedule a confidential consultation with our threat assessment team.
            Every operation begins with intelligence.
          </motion.p>

          <motion.div
            className="w-full max-w-md mx-auto space-y-3 mb-6"
            variants={itemVariants}
          >
            <input
              type="text"
              placeholder="Organization"
              className="w-full bg-black/45 border border-white/15 px-4 py-3 text-white placeholder-gray-400 font-mono text-sm focus:outline-none focus:border-camo-500/60 transition-colors"
            />
            <input
              type="email"
              placeholder="Contact Email"
              className="w-full bg-black/45 border border-white/15 px-4 py-3 text-white placeholder-gray-400 font-mono text-sm focus:outline-none focus:border-camo-500/60 transition-colors"
            />
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-3 bg-camo-500 text-black font-mono text-[10px] uppercase tracking-[0.22em] font-semibold rounded-none hover:bg-camo-600 transition-colors"
          >
            Request Briefing
          </motion.button>

          <motion.p
            variants={itemVariants}
            className="mt-6 font-mono text-[11px] text-gray-400 uppercase tracking-[0.14em]"
          >
            Confidential • Threat Assessment • Secure Transmission
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
