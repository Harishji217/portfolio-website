"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";
import type { WebsiteProject } from "@/data/site";

interface WebsitePreviewCardProps {
  project: WebsiteProject;
}

export function WebsitePreviewCard({ project }: WebsitePreviewCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 8000);
    return () => clearTimeout(timer);
  }, [project.url]);

  const handleIframeLoad = () => setIsLoading(false);

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-liquid glass-shine-container group relative flex w-[310px] sm:w-[440px] shrink-0 flex-col overflow-hidden rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Live preview viewport */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a0a0a]">
        <div
          className="absolute inset-0 origin-top-left"
          style={{
            width: "400%",
            height: "400%",
            transform: "scale(0.25)",
          }}
        >
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#050505]">
            <Globe className="h-16 w-16 text-accent/30" />
          </div>
          <iframe
            src={project.url}
            title={`Live preview of ${project.title}`}
            className="absolute inset-0 h-full w-full border-0 bg-white"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
            onLoad={handleIframeLoad}
          />
          {isLoading && (
            <div className="absolute inset-0 z-[5] animate-pulse bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          )}
        </div>

        {/* Interaction shield — clicks pass through to the card link */}
        <div className="absolute inset-0 z-10" aria-hidden="true" />

        {/* Browser chrome */}
        <div className="absolute left-0 right-0 top-0 z-20 flex items-center gap-2 border-b border-white/5 bg-black/70 px-4 py-2.5 backdrop-blur-md">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          <span className="ml-2 truncate text-xs text-muted">
            {new URL(project.url).hostname}
          </span>
        </div>

        {/* Hover glow overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-20"
          animate={{
            opacity: isHovered ? 1 : 0,
            boxShadow: isHovered
              ? "inset 0 0 60px rgba(59,130,246,0.15)"
              : "inset 0 0 0px rgba(59,130,246,0)",
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Visit site CTA overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute inset-0 z-30 flex items-center justify-center bg-black/40 backdrop-blur-[2px]"
            >
              <span className="flex items-center gap-2 rounded-full border border-accent/50 bg-accent/20 px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_30px_rgba(59,130,246,0.4)]">
                Visit Live Site
                <ExternalLink className="h-4 w-4" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-xl font-bold text-white group-hover:text-accent-glow transition-colors">
            {project.title}
          </h3>
          <ExternalLink className="h-4 w-4 shrink-0 text-muted opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-card-border bg-white/5 px-3 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Edge glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-b from-accent/20 via-transparent to-transparent" />
    </motion.a>
  );
}
