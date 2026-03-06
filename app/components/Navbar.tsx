"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import OrcusLogo from "./OrcusLogo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "PLATFORM", href: "#platform" },
    { label: "SOLUTIONS", href: "#solutions" },
    { label: "CUSTOMERS", href: "#customers" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      {/* Subtle top gradient for depth when not scrolled */}
      <div className={`absolute inset-0 bg-gradient-to-b from-midnight/90 to-transparent transition-opacity duration-500 pointer-events-none ${scrolled ? 'opacity-0' : 'opacity-100'}`} />
      
      {/* Scrolled glass backdrop */}
      <div className={`absolute inset-0 bg-midnight/60 backdrop-blur-md border-b border-white/[0.04] transition-opacity duration-500 pointer-events-none ${scrolled ? 'opacity-100' : 'opacity-0'}`} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex-1">
          <OrcusLogo />
        </div>

        {/* CENTER NAV (PILL) */}
        <div className="hidden md:flex flex-none items-center justify-center">
          <div className="flex items-center gap-8 px-8 py-3 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.4)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.25em] text-gray-400 hover:text-white transition-colors duration-300 font-mono font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CONTACT BUTTON */}
        <div className="hidden md:flex flex-1 justify-end">
          <button className="relative group overflow-hidden px-8 py-3 bg-white/[0.03] border border-white/[0.12] text-white text-[10px] font-mono uppercase tracking-[0.2em] hover:border-camo-500/50 transition-all duration-300">
            <span className="relative z-10 group-hover:text-camo-400 transition-colors duration-300">CONTACT</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-camo-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 hover:text-camo-500 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full md:hidden bg-midnight/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl">
          <div className="px-6 py-8 flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[12px] uppercase tracking-[0.25em] text-gray-300 hover:text-white transition-colors duration-300 font-mono"
              >
                {link.label}
              </a>
            ))}
            <button className="w-full max-w-xs mt-4 px-6 py-3 bg-white/[0.05] border border-white/20 text-white text-[11px] font-mono uppercase tracking-[0.2em] hover:border-camo-500/50 transition-all duration-300">
              CONTACT
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}