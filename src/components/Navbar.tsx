"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-6 left-1/2 z-50 w-[92%] max-w-5xl -translate-x-1/2">
      <div
        className={`glass-liquid glass-shine-container flex items-center justify-between gap-3 rounded-full px-4 py-2.5 sm:px-6 sm:py-3.5 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] ${
          scrolled ? "border-white/15 bg-black/75" : "border-white/10 bg-black/50"
        }`}
      >
        {/* Left Branding */}
        <a
          href="#hero"
          className="font-display text-xs font-bold tracking-wider text-white transition-opacity hover:opacity-80 sm:text-sm md:text-base"
        >
          Harish Pal
        </a>

        {/* Center menu links */}
        <nav className="hidden sm:flex items-center gap-6 sm:gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-white/60 transition-colors hover:text-white sm:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA button */}
        <a
          href="#contact"
          className="rounded-full bg-lime px-3 py-1 text-[10px] font-semibold text-black transition-all duration-300 hover:shadow-glow-lime hover:bg-[#d4f982] sm:px-4 sm:py-1.5 sm:text-xs"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}
