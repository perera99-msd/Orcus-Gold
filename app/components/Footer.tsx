"use client";
import OrcusLogo from "./OrcusLogo";
import { Mail } from "lucide-react";

export default function Footer() {
  const operationsLinks = ["Penetration Testing", "Incident Response", "Threat Intel", "Training Sims"];
  const legalLinks = ["Terms of Service", "Privacy Policy", "Non-Disclosure"];

  return (
    <footer className="relative bg-[#030404] border-t border-white/15 pt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="mb-4">
              <OrcusLogo />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed font-sans max-w-[200px] mb-6">
              Securing global infrastructure through offensive defense.
            </p>
            <div className="flex items-center gap-3">
              <button className="w-8 h-8 flex items-center justify-center border border-white/15 text-gray-300 hover:text-white transition-colors bg-black">
                <Mail size={12} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center border border-white/15 text-gray-300 hover:text-white transition-colors bg-black font-mono text-[10px]">
                &lt;
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[12px] font-bold text-white uppercase tracking-[0.15em] mb-6">Operations</h4>
            <ul className="space-y-3">
              {operationsLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="font-mono text-[11px] text-gray-300 hover:text-white transition-colors tracking-wide">
                    &gt; {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[12px] font-bold text-white uppercase tracking-[0.15em] mb-6">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="font-mono text-[11px] text-gray-300 hover:text-white transition-colors tracking-wide">
                    &gt; {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[12px] font-bold text-white uppercase tracking-[0.15em] mb-6">Secure Comms</h4>

            <div className="flex bg-[#050505] border border-white/15 p-1 mb-3">
              <input
                type="email"
                placeholder="ENCRYPTED_EMAIL"
                className="bg-transparent text-[11px] font-mono w-full px-3 py-2 outline-none text-gray-200 placeholder-gray-400 tracking-wider"
              />
              <button className="text-camo-500 px-4 font-mono text-sm hover:text-white transition-colors">
                &gt;
              </button>
            </div>

            <p className="font-mono text-[10px] text-gray-400 tracking-[0.15em] uppercase">
              PGP KEY: 0X4A92B130
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-gray-400 uppercase tracking-[0.15em]">© 2023 ORCUS SYSTEMS. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-camo-500 rounded-full animate-pulse" />
            <p className="font-mono text-[10px] text-camo-500 uppercase tracking-[0.15em]">System Status: Operational</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
