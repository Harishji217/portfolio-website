"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, ExternalLink, Globe } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useCountUp } from "@/hooks/useCountUp";
import { getLatestWebsite } from "@/data/site";

export function Hero() {
  const statProjects = useCountUp(150);
  const statExperience = useCountUp(4);
  const latestWebsite = getLatestWebsite();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-24 lg:pt-32"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <Particles />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Info & Action */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent text-glow-blue"
            >
              Harish Pal — High-End Web Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl text-balance"
            >
              I create highly professional websites,{" "}
              <span className="bg-gradient-to-r from-white via-accent-glow to-accent bg-clip-text text-transparent">
                People Can&apos;t Stop Watching.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              Vibe Coded Websites, Marketing, commercials, Search Engine
              Optimization.
            </motion.p>

            {/* Stats display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex gap-10 border-y border-white/5 py-6"
            >
              <div ref={statProjects.ref} className="flex flex-col">
                <span className="font-display text-3xl font-bold text-white sm:text-4xl text-glow-blue">
                  {statProjects.count}+
                </span>
                <span className="mt-1 text-xs uppercase tracking-wider text-muted">
                  Projects Delivered
                </span>
              </div>
              <div ref={statExperience.ref} className="flex flex-col">
                <span className="font-display text-3xl font-bold text-white sm:text-4xl text-glow-blue">
                  {statExperience.count}+
                </span>
                <span className="mt-1 text-xs uppercase tracking-wider text-muted">
                  Years Experience
                </span>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <MagneticButton href="#portfolio">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all hover:bg-accent-glow hover:shadow-[0_0_45px_rgba(59,130,246,0.5)]">
                  View Portfolio
                  <ArrowRight className="h-4 w-4" />
                </span>
              </MagneticButton>
              <MagneticButton href="#contact">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-accent/40 hover:bg-white/10">
                  Book a Call
                  <Calendar className="h-4 w-4" />
                </span>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: Floating Live Website Preview */}
          <div className="flex justify-center lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative w-full max-w-[440px]"
            >
              {/* Decorative backgrounds */}
              <div className="absolute -inset-4 rounded-[30px] bg-gradient-to-tr from-accent/20 to-transparent blur-2xl opacity-40" />

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <LatestWebsitePreview
                  title={latestWebsite.title}
                  url={latestWebsite.url}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LatestWebsitePreview({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 8000);
    return () => clearTimeout(timer);
  }, [url]);

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-liquid glass-shine-container group relative block overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-[0_0_60px_rgba(59,130,246,0.3)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
    >
      {/* Browser Bar Chrome */}
      <div className="flex items-center gap-2 border-b border-white/5 bg-black/40 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        <div className="ml-3 flex items-center gap-1.5 rounded bg-white/5 px-3 py-0.5 text-[10px] text-muted">
          <Globe className="h-2.5 w-2.5" />
          {new URL(url).hostname}
        </div>
        <span className="ml-auto flex items-center gap-1 text-[10px] text-accent opacity-0 transition-opacity group-hover:opacity-100">
          Visit Site <ExternalLink className="h-2.5 w-2.5" />
        </span>
      </div>

      {/* Embedded Live Iframe (400% size, scaled 0.25 for desktop simulation) */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#07090e]">
        <div
          className="absolute inset-0 origin-top-left"
          style={{
            width: "400%",
            height: "400%",
            transform: "scale(0.25)",
          }}
        >
          <iframe
            src={url}
            title={`Live preview of ${title}`}
            className="h-full w-full border-0 bg-white"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
            onLoad={() => setIsLoading(false)}
          />
          {isLoading && (
            <div className="absolute inset-0 z-[5] animate-pulse bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          )}
        </div>

        {/* Hover overlay/shield */}
        <div className="absolute inset-0 z-10 bg-transparent" />

        {/* Liquid glass light effects */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 backdrop-blur-[1px]"
            >
              <span className="flex items-center gap-2 rounded-full border border-accent/40 bg-accent/25 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                Launch Live Website
                <ExternalLink className="h-4 w-4" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Info footer */}
      <div className="border-t border-white/5 px-5 py-4">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-accent text-glow-blue">
          Latest Project Preview
        </p>
        <p className="mt-1 font-display text-lg font-bold text-white group-hover:text-accent-glow transition-colors">
          {title}
        </p>
      </div>
    </motion.a>
  );
}

function Particles() {
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: `${(i * 13 + 7) % 100}%`,
    top: `${(i * 19 + 13) % 100}%`,
    delay: i * 0.25,
    size: 2 + (i % 3),
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent/20"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{ y: [0, -40, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{
            duration: 5 + (p.id % 4),
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
