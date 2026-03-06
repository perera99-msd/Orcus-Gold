"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { name: "Forbes", path: "/companies/Forbes_logo-1.svg fill.png" },
  { name: "MSN", path: "/companies/2024_new_msn_logo-1.svg.png" },
  { name: "Yahoo Finance", path: "/companies/Yahoo_Finance_logo-1.svg.png" },
  { name: "CNN Business", path: "/companies/CNN_Business_logo-1.svg fill.png" },
  { name: "US News", path: "/companies/U.S._News__World_Report_logo-1.svg fill.png" },
  { name: "Associated Press", path: "/companies/Associated_Press_logo_2012-1.svg.png" },
  { name: "NBC", path: "/companies/WPTV-TV_NBC_5_West_Palm_Beach_Florida_Logo-1-1.svg fill.png" },
  { name: "Kiplinger", path: "/companies/Kiplinger_logo-1.svg fill.png" },
  { name: "USA Today", path: "/companies/USA_Today_2020-01-29-1.svg fill.png" },
  { name: "Seattle Times", path: "/companies/The_Seattle_Times_logo-1.svg.png" },
  { name: "Nasdaq", path: "/companies/NASDAQ_Logo-1.svg fill.png" },
  { name: "American Banker", path: "/companies/American_Banker_logo_2011-1.svg.png" },
  { name: "Business Insider", path: "/companies/Business-Insider_id3I9O2mSv_1-1.svg.png" },
  { name: "NY Post", path: "/companies/20181201033511New_York_Post-1.svg.png" },
  { name: "Wired", path: "/logos/Clip e group.png" },
  { name: "ZDNet", path: "/logos/Clip path group.png" },
  { name: "SecurityWeek", path: "/logos/Group.png" },
  { name: "Ars Technica", path: "/logos/aa.png" },
  { name: "BSI", path: "/logos/bsi.png" },
  { name: "Computerworld", path: "/logos/computerworld.png" },
  { name: "Financial Times", path: "/logos/ft.png" },
];

export default function Credibility() {
  return (
    <section id="customers" className="relative py-12 bg-midnight border-b border-white/5 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-7xl mx-auto flex flex-col items-center relative z-20"
        >
          {/* Subtle Label */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-3 shadow-[0_0_15px_rgba(0,0,0,0.4)]">
              <h3 className="text-white text-[10px] md:text-[11px] font-mono uppercase tracking-[0.2em]">Credibility</h3>
            </div>
          </div>

          {/* Endless Marquee Track with Fade Masks */}
          <div
            className="w-full overflow-hidden flex relative"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
            }}
          >
            <motion.div
              className="flex w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 50,
                ease: "linear",
                repeat: Infinity,
              }}
              // Force hardware acceleration to prevent JS frame drops
              style={{ willChange: "transform" }}
            >
              {[1, 2].map((set) => (
                <div key={set} className="flex items-center gap-10 md:gap-16 pr-10 md:pr-16 py-2">
                  {logos.map((logo, idx) => (
                    <div 
                      key={`${logo.name}-${idx}`} 
                      className="flex-shrink-0 flex items-center justify-center opacity-40 hover:opacity-100 transition-all duration-500 cursor-default"
                    >
                      <Image
                        src={logo.path}
                        alt={logo.name}
                        width={140}
                        height={40}
                        className="h-6 md:h-8 w-auto max-w-[120px] md:max-w-[150px] object-contain grayscale hover:grayscale-0 transition-all duration-500 drop-shadow-lg"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
    </section>
  );
}