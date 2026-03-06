"use client";
import OrcusLogo from "./OrcusLogo";
import OrcusIconMark from "./OrcusIconMark";
import OrcusStencilVariant from "./OrcusStencilVariant";

/**
 * ORCUS LOGO SYSTEM
 * ==================
 * 
 * Three variants per brand brief:
 * 1. Primary Wordmark - Italic "ORCUS" with slashed-zero
 * 2. Icon Mark - Standalone slashed-zero (favicon, small, medium, large)
 * 3. Stencil Variant - Stencil break version for secondary contexts
 */

interface LogoSystemProps {
  variant?: "wordmark" | "icon" | "stencil" | "all";
  iconSize?: "favicon" | "small" | "medium" | "large";
  className?: string;
}

export default function LogoSystem({
  variant = "wordmark",
  iconSize = "medium",
  className = "",
}: LogoSystemProps) {
  switch (variant) {
    case "wordmark":
      return (
        <div className={className}>
          <OrcusLogo />
        </div>
      );

    case "icon":
      return (
        <div className={className}>
          <OrcusIconMark size={iconSize} />
        </div>
      );

    case "stencil":
      return (
        <div className={className}>
          <OrcusStencilVariant />
        </div>
      );

    case "all":
      return (
        <div className={`space-y-12 ${className}`}>
          {/* Wordmark */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-camo-500 uppercase tracking-[0.3em] font-bold">
              01 — Primary Wordmark
            </h3>
            <OrcusLogo />
            <p className="text-xs text-gray-500 font-mono">Italic • Slashed-Zero • Primary brand mark</p>
          </div>

          {/* Icon Marks */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono text-camo-500 uppercase tracking-[0.3em] font-bold">
              02 — Icon Mark (Slashed-Zero)
            </h3>
            <div className="flex items-center gap-12">
              <div className="space-y-2">
                <OrcusIconMark size="favicon" className="w-8 h-8" />
                <p className="text-[10px] text-gray-600">Favicon (16px)</p>
              </div>
              <div className="space-y-2">
                <OrcusIconMark size="small" className="w-12 h-12" />
                <p className="text-[10px] text-gray-600">Small (32px)</p>
              </div>
              <div className="space-y-2">
                <OrcusIconMark size="medium" className="w-16 h-16" />
                <p className="text-[10px] text-gray-600">Medium (48px)</p>
              </div>
              <div className="space-y-2">
                <OrcusIconMark size="large" className="w-20 h-20" />
                <p className="text-[10px] text-gray-600">Large (64px)</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 font-mono">Contained icon • Corner accents • Scalable</p>
          </div>

          {/* Stencil Variant */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-camo-500 uppercase tracking-[0.3em] font-bold">
              03 — Stencil Variant
            </h3>
            <OrcusStencilVariant />
            <p className="text-xs text-gray-500 font-mono">Field Drab • Stencil breaks • Secondary contexts</p>
          </div>

          {/* Brand Guidelines Note */}
          <div className="border border-camo-500/20 bg-camo-500/5 p-4 rounded-none">
            <p className="text-xs text-gray-400 font-mono leading-relaxed">
              <span className="text-camo-500 font-bold">All variants:</span> Maintain Field Drab (#938562) color. Primary wordmark for header/nav. Icon mark for favicons and app contexts. Stencil variant for tactical/secondary applications.
            </p>
          </div>
        </div>
      );

    default:
      return <OrcusLogo />;
  }
}
