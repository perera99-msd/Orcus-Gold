"use client";
import { motion, useScroll, useTransform, easeOut } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

export default function Press() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.5", "end 0.2"] });
  const y = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

  const pressItems = [
    { publication: "WIRED", quote: "Setting new standards in offensive cyber operations.", date: "2025" },
    { publication: "DARK READING", quote: "Elite-tier threat intelligence and red team capabilities.", date: "2025" },
    { publication: "CYBER DEFENSE", quote: "Former adversaries turned premier security consultants.", date: "2026" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // SLOWED DOWN
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: easeOut } }, // SLOWED DOWN
  };

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className="relative py-24 md:py-32 px-4 md:px-6 bg-[#050506] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16 md:mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-6">
              <h3 className="text-camo-500 text-[10px] font-mono uppercase tracking-[0.2em]">Verified Intelligence</h3>
          </div>
          <h2 className="font-mono text-4xl md:text-5xl text-white uppercase tracking-[0.05em] mb-4">Press</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {pressItems.map((item, idx) => (
            <motion.article
              key={item.publication}
              variants={itemVariants}
              className="relative group bg-white/[0.02] border border-white/10 p-8 backdrop-blur-sm hover:bg-white/[0.04] transition-all duration-500"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-camo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <Quote className="w-8 h-8 text-white/10 mb-6 group-hover:text-camo-500/40 transition-colors duration-500" />
              
              <p className="text-gray-200 text-lg md:text-xl font-light italic leading-relaxed mb-8 min-h-[80px]">
                &ldquo;{item.quote}&rdquo;
              </p>
              
              <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                <span className="font-mono text-xs text-camo-500 font-bold uppercase tracking-widest">
                  {item.publication}
                </span>
                <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
                  REF: {item.date}
                </span>
              </div>

              {/* Hover Corner Brackets */}
              <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-white/10 group-hover:border-camo-500 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-white/10 group-hover:border-camo-500 transition-colors duration-500" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}