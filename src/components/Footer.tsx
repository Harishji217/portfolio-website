"use client";

import { Linkedin, Twitter, Github } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#hero" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-card-border py-16">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-[100px] animate-pulse-glow" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <p className="font-display text-2xl font-bold text-white">
              Harish Pal
            </p>
            <p className="mt-2 text-sm text-muted">
              Premium web developer for creators, brands & startups.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Harishji217"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/harish-pal-611982414/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
            <a
              href="https://x.com/Harish_Ji_217"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              aria-label="Twitter / X"
            >
              <Twitter className="h-5 w-5" />
              Twitter
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-card-border pt-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} Harish Pal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
