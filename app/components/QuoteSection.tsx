"use client";
import { Fingerprint } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function QuoteSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.5", "end 0.2"] });
  const y = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className="relative py-24 md:py-32 px-4 md:px-6 bg-black overflow-hidden"
    >
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Fingerprint className="w-12 h-12 text-camo-500" strokeWidth={1} />
        </motion.div>
        <motion.blockquote
          className="font-mono text-4xl md:text-5xl text-white leading-[1.3] font-bold tracking-tight mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          &ldquo;In the digital age, silence<br />
          is not empty. It&apos;s full of<br />
          answers.&rdquo;
        </motion.blockquote>
        <motion.p
          className="font-mono text-[12px] text-gray-400 tracking-[0.2em] uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          - ORCUS DOCTRINE
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
