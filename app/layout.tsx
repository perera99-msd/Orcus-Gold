import type { Metadata } from "next";
import { Saira_Semi_Condensed } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import "./globals.css";

const saira = Saira_Semi_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-saira",
});

export const metadata: Metadata = {
  title: "0RCUS | Offensive Cyber Operations",
  description: "Black hat intelligence. White hat mission.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${saira.variable} antialiased relative bg-midnight text-white`}>
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