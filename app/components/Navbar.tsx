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
    { label: "TOOLS", href: "#tools" },
    { label: "MISSION", href: "#ops" },
    { label: "CLIENTS", href: "#clients" },
    { label: "ABOUT", href: "#about" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled 
          ? "top-1.5 md:top-2 left-2 md:left-3 right-2 md:right-3 py-2.5 rounded-2xl border border-white/75 bg-white/78 backdrop-blur-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
          : "top-2 md:top-2.5 left-2 md:left-3 right-2 md:right-3 py-3 rounded-2xl border border-white/80 bg-white/72 backdrop-blur-3xl shadow-[0_10px_34px_rgba(0,0,0,0.1)]"
      }`}
    >
      <div className="absolute top-0.5 left-[6%] right-[6%] h-px bg-linear-to-r from-transparent via-white to-transparent pointer-events-none" />

      <div className="max-w-400 mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex-1">
          <OrcusLogo className="text-midnight" />
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex flex-none items-center justify-center">
          <nav className="flex items-center gap-9 px-8 py-2 rounded-full border border-borderDark/10 bg-white/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[10px] uppercase tracking-[0.25em] text-camo-700 hover:text-midnight transition-colors duration-300 font-mono font-semibold"
              >
                {link.label}
                {/* Center-expanding underline on hover */}
                <span className="absolute -bottom-2 left-1/2 w-0 h-[1.5px] bg-camo-500 group-hover:w-full group-hover:left-0 transition-all duration-500 ease-out" />
              </a>
            ))}
          </nav>
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex flex-1 justify-end">
          <a
            href="#contact"
            className="group relative px-6 py-2.5 overflow-hidden border border-camo-500/8 bg-camo-500 text-midnight hover:bg-camo-600 transition-all duration-500 shadow-[0_6px_20px_rgba(147,133,98,0.25)]"
          >
            {/* Tactical Corner Accents */}
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-camo-500" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-camo-500" />
            
            <span className="relative z-10 text-[10px] font-mono uppercase tracking-[0.2em] font-bold transition-colors duration-300">
              Request Briefing
            </span>
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-midnight p-2 hover:text-camo-500 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[calc(100%+8px)] left-0 w-full rounded-2xl border border-white/75 bg-white/90 backdrop-blur-3xl shadow-2xl">
          <div className="px-6 py-8 flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-[13px] uppercase tracking-[0.3em] text-camo-700 hover:text-midnight transition-colors duration-300 font-mono font-semibold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full mt-4 px-6 py-4 bg-camo-500 text-black text-center text-[11px] font-mono uppercase tracking-[0.25em] font-bold shadow-[0_0_20px_rgba(147,133,98,0.3)]"
            >
              Request Briefing
            </a>
          </div>
        </div>
      )}
    </header>
  );
}