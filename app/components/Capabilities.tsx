"use client";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

export default function Capabilities() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const gridY = useTransform(scrollYProgress, [0, 1], [25, -25]);

  const tools = [
    {
      id: "01", category: "SPYWARE PLATFORM", title: "Targeted Device Access",
      desc: "Zero-click and one-click deployment. Full device or application-level access. Persistent across reboots.",
      sections: [
        { label: "COLLECTION", text: "SMS, calls, contacts, GPS, notifications, keystroke capture, clipboard, screen recording, camera, microphone." },
        { label: "MESSAGING ACCESS", text: "Full extraction from encrypted messaging apps. Real-time and historical content, media, and metadata." },
        { label: "LIVE SURVEILLANCE", text: "Remote camera activation. Live screen view. Ambient audio. Activity timeline with app-level behavioral profiling." }
      ],
      tags: ["WHATSAPP", "SIGNAL", "TELEGRAM", "IMESSAGE", "IOS", "ANDROID", "ZERO-CLICK"], link: "REQUEST ACCESS",
      span: "lg:col-span-1 lg:row-span-2", theme: "light"
    },
    {
      id: "02", category: "ZERO-DAY SUITES", title: "Exploit Development",
      desc: "Original zero-days. Mobile, desktop, embedded. Full chains from initial access to persistent implant.",
      tags: ["IOS", "ANDROID", "WINDOWS", "LINUX"], link: "INITIALIZE",
      span: "lg:col-span-2 lg:row-span-1", theme: "light"
    },
    {
      id: "03", category: "OUTCOME AI", title: "Continuous Pen Testing",
      desc: "AI-enhanced autonomous offensive simulation. Modular add-ons. Always-on attack surface monitoring.",
      tags: ["LIVE DEMO AVAILABLE"], link: "DEPLOY UNIT",
      span: "lg:col-span-1 lg:row-span-1", theme: "dark"
    },
    {
      id: "04", category: "OFFENSIVE SECURITY", title: "Red Team Operations",
      desc: "Vulnerability assessments. Manual penetration testing. Source code review. Social engineering simulation. Full-scope offensive engagements.",
      tags: ["EXTERNAL", "INTERNAL", "WEB APP"], link: "AUTHORIZE OPS",
      span: "lg:col-span-1 lg:row-span-1", theme: "dark"
    },
    {
      id: "05", category: "DIGITAL FORENSICS", title: "Investigation & Analysis",
      desc: "Device forensics. Network intrusion analysis. Data recovery. Incident response. Mobile and desktop examination across all major platforms.",
      tags: ["INCIDENT RESPONSE", "LITIGATION SUPPORT"], link: "RUN ANALYSIS",
      span: "lg:col-span-2 lg:row-span-1", theme: "light"
    },
    {
      id: "06", category: "COUNTER-SURVEILLANCE", title: "Detection & Hardening",
      desc: "Spyware detection. Communications hardening. Ongoing monitoring for high-value targets under active surveillance.",
      tags: ["UHNWI", "GOVERNMENT", "LEGAL"], link: "INITIALIZE SCAN",
      span: "lg:col-span-1 lg:row-span-1", theme: "light"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.18 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28, scale: 0.985, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section ref={ref} id="tools" className="relative py-20 md:py-32 bg-[#F6F5F2] overflow-hidden">
      
      {/* Slight asymmetric inset for a more premium layout frame */}
      <div className="w-full pl-3 pr-2 md:pl-5 md:pr-4 mx-auto relative z-10">
        
        {/* Header - Added slight padding here so the text doesn't touch the exact edge of the monitor */}
        <motion.div
          className="mb-10 md:mb-16 px-4 md:px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="flex items-center gap-4 font-mono text-[9px] md:text-[10px] text-bodyGray tracking-[0.25em] uppercase mb-4">
                <div className="h-px w-6 bg-bodyGray/50" />
                Tools & Services
              </span>
              <h2 className="font-sans text-4xl md:text-5xl lg:text-[64px] font-bold text-midnight tracking-tighter leading-none">
                What We Deploy
              </h2>
            </div>
            <p className="font-mono text-[10px] md:text-[11px] text-bodyGray uppercase tracking-widest max-w-60 md:text-right">
              Full-stack. In-house. No resold exploits.
            </p>
          </div>
        </motion.div>

        {/* Tight bento spacing for cleaner card separation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 border-y border-black/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px", amount: 0.18 }}
          style={{ y: gridY }}
        >
          {tools.map((tool) => {
            const isDark = tool.theme === "dark";
            
            return (
              <motion.article
                key={tool.id}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.4, ease: "easeOut" } }}
                className={`group relative flex flex-col justify-between p-8 md:p-12 transition-all duration-500 overflow-hidden ${tool.span} ${
                  isDark 
                    ? "bg-charcoal text-white hover:bg-[#111111] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:z-20" 
                    : "bg-white text-midnight hover:bg-[#FDFDFC] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:z-20"
                }`}
              >
                {/* Top Row */}
                <div className="flex justify-between items-start mb-24 md:mb-32">
                  <span className="font-mono text-[10px] md:text-[11px] font-medium text-bodyGray">
                    {tool.id}
                  </span>
                  <span className={`font-mono text-[8px] md:text-[9px] uppercase tracking-[0.25em] px-2.5 py-1 border ${isDark ? 'border-white/10 text-bodyGray' : 'border-black/10 text-bodyGray'}`}>
                    {tool.category}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="mt-auto relative z-10">
                  <h3 className={`text-2xl md:text-3xl lg:text-[34px] font-bold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-midnight'}`}>
                    {tool.title}
                  </h3>
                  <p className={`font-sans text-[13px] md:text-[15px] leading-relaxed mb-8 ${isDark ? 'text-bodyGray' : 'text-gray-600'}`}>
                    {tool.desc}
                  </p>

                  {tool.sections && (
                    <div className="space-y-5 mb-8">
                      {tool.sections.map(sec => (
                        <div key={sec.label}>
                          <h4 className="font-mono text-[9px] text-camo-500 uppercase tracking-widest mb-1.5">{sec.label}</h4>
                          <p className={`font-sans text-[12px] md:text-[13px] leading-relaxed ${isDark ? 'text-bodyGray' : 'text-gray-600'}`}>{sec.text}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-8">
                    {tool.tags.map(tag => (
                      <span key={tag} className={`font-mono text-[8px] md:text-[9px] uppercase tracking-widest px-3 py-1.5 border ${isDark ? 'border-borderDark text-bodyGray bg-midnight' : 'border-black/5 text-gray-500 bg-[#F9F8F6]'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a href="#contact" className={`group/link inline-flex items-center gap-2 font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] border-b pb-1 transition-all duration-300 ${isDark ? 'text-white border-white/20 hover:border-white hover:gap-4' : 'text-midnight border-black/20 hover:border-midnight hover:gap-4'}`}>
                    {tool.link} <span className="text-sm transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  </a>
                </div>

                {/* Premium Edge Glow on Hover */}
                <div className={`absolute top-0 left-0 w-full h-0.5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${isDark ? 'bg-camo-500' : 'bg-camo-500'}`} />
              </motion.article>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}