"use client";
import OrcusLogo from "./OrcusLogo";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="relative bg-deepBlack border-t border-white/15 pt-18"
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-full mx-auto pl-6 pr-5 md:pl-11 md:pr-10 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 mb-12">
          <div>
            <div className="mb-4">
              <OrcusLogo />
            </div>
            <p className="text-sm text-bodyGray leading-relaxed font-sans max-w-50 mb-6">
              Securing global infrastructure through offensive defense.
            </p>
            <div className="flex items-center gap-3">
              <a href="mailto:contact@0rcus.com" className="w-8 h-8 flex items-center justify-center border border-white/15 text-bodyGray hover:text-white transition-colors bg-black">
                <Mail size={12} />
              </a>
              <a href="#contact" className="w-8 h-8 flex items-center justify-center border border-white/15 text-bodyGray hover:text-white transition-colors bg-black font-mono text-[10px]">
                &lt;
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[12px] font-bold text-white uppercase tracking-[0.15em] mb-6">Secure Comms</h4>

            <form action="mailto:contact@0rcus.com" method="post" encType="text/plain" className="flex bg-midnight border border-white/15 p-1 mb-3">
              <input
                type="email"
                name="email"
                placeholder="ENCRYPTED_EMAIL"
                className="bg-transparent text-[11px] font-mono w-full px-3 py-2 outline-none text-white/90 placeholder-bodyGray/70 tracking-wider"
              />
              <button type="submit" className="text-camo-500 px-4 font-mono text-sm hover:text-white transition-colors">
                &gt;
              </button>
            </form>

            <p className="font-mono text-[10px] text-bodyGray/80 tracking-[0.15em] uppercase">
              PGP KEY: 0X4A92B130
            </p>
            <a
              href="mailto:contact@0rcus.com?subject=0RCUS%20Request%20Brief"
              className="inline-block mt-5 px-5 py-2.5 bg-camo-500 text-midnight font-mono text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-camo-600 transition-colors"
            >
              Request Briefing
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-bodyGray/80 uppercase tracking-[0.15em]">© 2026 0RCUS SYSTEMS. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-camo-500 rounded-full animate-pulse" />
            <p className="font-mono text-[10px] text-camo-500 uppercase tracking-[0.15em]">System Status: Operational</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
