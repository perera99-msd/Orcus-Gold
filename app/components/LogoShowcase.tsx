"use client";
import { motion } from "framer-motion";
import LogoSystem from "./LogoSystem";

export default function LogoShowcase() {
  return (
    <section className="relative py-20 md:py-32 px-4 md:px-6 bg-midnight overflow-hidden">
      {/* Camo Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 400px 250px at 25% 40%, rgba(84,79,61,0.05) 0%, transparent 70%),
              radial-gradient(ellipse 350px 220px at 75% 60%, rgba(49,56,49,0.04) 0%, transparent 70%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">
            Logo System
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Three brand variants for complete operational flexibility
          </p>
        </motion.div>

        {/* All Logo Variants */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <LogoSystem variant="all" />
        </motion.div>

        {/* Usage Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 border border-camo-500/20 bg-camo-500/5 p-6 md:p-8 space-y-4"
        >
          <h3 className="text-lg font-bold text-white uppercase tracking-tight">
            Usage Guidelines
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Wordmark Usage */}
            <div className="space-y-2">
              <p className="text-xs font-mono text-camo-500 uppercase tracking-wider font-bold">
                PRIMARY WORDMARK
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Main Logo
              </p>
              <ul className="text-xs text-gray-500 space-y-1 list-disc list-inside">
                <li>Navigation headers</li>
                <li>Marketing materials</li>
                <li>Large format displays</li>
                <li>Primary branding</li>
              </ul>
            </div>

            {/* Icon Mark Usage */}
            <div className="space-y-2">
              <p className="text-xs font-mono text-camo-500 uppercase tracking-wider font-bold">
                ICON MARK
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Digital Applications
              </p>
              <ul className="text-xs text-gray-500 space-y-1 list-disc list-inside">
                <li>Favicon (16px)</li>
                <li>App icons (32-64px)</li>
                <li>Social profiles</li>
                <li>Compact spaces</li>
              </ul>
            </div>

            {/* Stencil Usage */}
            <div className="space-y-2">
              <p className="text-xs font-mono text-camo-500 uppercase tracking-wider font-bold">
                STENCIL VARIANT
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Secondary Contexts
              </p>
              <ul className="text-xs text-gray-500 space-y-1 list-disc list-inside">
                <li>Physical merchandise</li>
                <li>Tactical applications</li>
                <li>Secondary branding</li>
                <li>Specialized uses</li>
              </ul>
            </div>
          </div>

          {/* Color Note */}
          <div className="pt-4 border-t border-camo-500/10">
            <p className="text-xs text-gray-500 font-mono">
              <span className="text-camo-500 font-bold">All variants use:</span> Field Drab (#938562) | Saira Semi Condensed (italic) | Maintain minimum 16px at smallest size
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
