import type { Metadata } from "next";
import { Saira_Semi_Condensed, JetBrains_Mono } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import "./globals.css";

const saira = Saira_Semi_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-saira",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "ORCUS | Outcome AI",
  description: "Black hat intelligence. White hat mission.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${saira.variable} ${jetbrains.variable} antialiased relative bg-midnight text-white`}>
        {/* GLOBAL VISUAL LAYERS */}
        <div className="noise-overlay" />
        <div className="fixed inset-0 bg-scanlines opacity-10 pointer-events-none z-40" />
        
        {/* NAVBAR */}
        <Navbar />
        
        {/* MAIN CONTENT */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}