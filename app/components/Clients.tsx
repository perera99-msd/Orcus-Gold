"use client";
import { motion, type Variants } from "framer-motion";

const clientGroups = [
  {
    code: "GOV",
    title: "Governments",
    body: "Sovereign cyber operations, strategic threat intelligence, and mission support in denied environments.",
  },
  {
    code: "PRIVATE",
    title: "Private Clients",
    body: "Principal-level protection and offensive defense programs for high-risk executives and family offices.",
  },
  {
    code: "LEGAL",
    title: "Law Firms",
    body: "Litigation-grade forensics, spyware investigation, and adversarial intelligence for sensitive cases.",
  },
];

export default function Clients() {
  const premiumEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.15 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.95, ease: premiumEase },
    },
  };

  return (
    <section id="clients" className="relative bg-white pl-6 pr-5 md:pl-11 md:pr-10 py-22 md:py-36 overflow-hidden border-y border-black/10">
      
      <div className="w-full mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.0, ease: premiumEase }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
             <div className="h-px w-6 bg-bodyGray/50" />
             <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-bodyGray">Clients</p>
          </div>
          <h2 className="text-midnight font-sans text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tighter mb-4 leading-none">
            Vetted Access Only
          </h2>
        </motion.div>

        {/* 3-Column Hairline Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px", amount: 0.2 }}
        >
          {clientGroups.map((group) => (
            <motion.article
              key={group.title}
              variants={cardVariants}
              className="bg-white p-11 lg:p-15 min-h-[45vh] flex flex-col justify-between hover:bg-[#F9F8F6] transition-colors duration-500"
            >
              <span className="inline-block font-mono text-[10px] uppercase tracking-[0.25em] text-camo-500 mb-16">
                {group.code}
              </span>
              
              <div className="mt-auto">
                <h3 className="text-midnight text-3xl md:text-4xl font-bold tracking-tight mb-4">{group.title}</h3>
                <p className="text-bodyGray leading-relaxed text-sm md:text-[15px]">{group.body}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}