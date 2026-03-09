"use client";
import { motion } from "framer-motion";

export default function BriefingCTA() {
  return (
    <section id="contact" className="bg-[#F6F5F2] pl-6 pr-5 md:pl-11 md:pr-10 pt-14 md:pt-20 pb-20 md:pb-28 overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, x: 72, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
        className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-px bg-black/10 border border-black/10 shadow-[0_14px_34px_rgba(0,0,0,0.1)]"
      >
        
        {/* =========================================
            LEFT SIDE (White Block + Form)
            ========================================= */}
        <div className="bg-white p-11 md:p-15 lg:p-18 min-h-[44vh] md:min-h-[54vh] flex flex-col justify-center relative overflow-hidden">
          {/* Subtle light dot matrix in background */}
          <div className="absolute inset-0 bg-spyware-light opacity-10 pointer-events-none" />
          
          <div className="relative z-10 w-full max-w-md mx-auto lg:mx-0">
            <span className="inline-block font-mono text-[10px] uppercase tracking-[0.3em] text-camo-500 mb-12">
              Secure Channel
            </span>
            
            <form className="space-y-12">
              {/* Email Input */}
              <div className="relative group">
                <label className="block font-mono text-[9px] text-bodyGray uppercase tracking-[0.2em] mb-4 transition-colors group-focus-within:text-midnight">
                  Official Email Address
                </label>
                <input 
                  type="email" 
                  placeholder="operator@agency.gov"
                  className="w-full bg-transparent border-b border-black/10 pb-3 text-midnight font-sans text-lg focus:outline-none focus:border-camo-500 transition-colors placeholder:text-black/20 rounded-none"
                />
              </div>
              
              {/* Organization Input */}
              <div className="relative group">
                <label className="block font-mono text-[9px] text-bodyGray uppercase tracking-[0.2em] mb-4 transition-colors group-focus-within:text-midnight">
                  Organization / Entity
                </label>
                <input 
                  type="text" 
                  placeholder="Department of Defense"
                  className="w-full bg-transparent border-b border-black/10 pb-3 text-midnight font-sans text-lg focus:outline-none focus:border-camo-500 transition-colors placeholder:text-black/20 rounded-none"
                />
              </div>
              
              {/* Tactical Encryption Note */}
              <div className="pt-6 flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-camo-500/50" />
                <span className="font-mono text-[8px] text-bodyGray uppercase tracking-[0.2em]">
                  256-bit AES Encrypted Transmission
                </span>
              </div>
            </form>
          </div>
        </div>

        {/* =========================================
            RIGHT SIDE (Black Block + Content)
            ========================================= */}
        <div className="bg-charcoal p-11 md:p-15 lg:p-18 min-h-[44vh] md:min-h-[54vh] flex flex-col justify-between group relative overflow-hidden">
          {/* Dark dot matrix over the black block */}
          <div className="absolute inset-0 bg-spyware-dark opacity-30 mix-blend-overlay pointer-events-none" />
          
          <div className="relative z-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bodyGray/60 mb-8 transition-colors duration-700 ease-[0.16,1,0.3,1] group-hover:text-camo-500">
              Clearance Required
            </p>
            
            <h2 className="text-white text-5xl md:text-7xl lg:text-[80px] xl:text-[96px] font-bold tracking-tighter leading-[0.85] uppercase mb-10 transition-colors duration-1000 ease-[0.16,1,0.3,1] group-hover:text-camo-500">
              Request a<br />
              Briefing.
            </h2>
            
            <p className="text-bodyGray text-sm md:text-[15px] max-w-sm leading-relaxed border-l-[3px] border-white/10 pl-5 mb-12 transition-colors duration-700 ease-[0.16,1,0.3,1] group-hover:text-white">
              <strong className="text-white font-medium transition-colors duration-700 ease-[0.16,1,0.3,1] group-hover:text-camo-500">Vetted inquiries only.</strong> Confidential consultation. Secure transmission. No public record.
            </p>
          </div>

          <div className="relative z-10 mt-auto">
            <a 
              href="mailto:contact@0rcus.com" 
              className="group/btn inline-flex items-center justify-between w-full sm:w-auto bg-camo-500 text-midnight px-12 py-5 font-mono text-xs md:text-[13px] font-bold uppercase tracking-[0.25em] transition-all duration-700 ease-[0.16,1,0.3,1] hover:bg-white overflow-hidden shadow-[0_0_30px_rgba(147,133,98,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.25)]"
            >
              <div className="absolute inset-0 bg-black/5 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
              <span className="relative z-10 flex items-center gap-6">
                Initiate Contact <span className="text-lg transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover/btn:translate-x-3">→</span>
              </span>
            </a>
          </div>
          
        </div>
        
      </motion.div>
    </section>
  );
}