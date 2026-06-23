"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/site";

export function TestimonialsMarquee() {
  // Split testimonials into 3 columns of varying lengths to simulate masonry
  const columns = 3;
  const cols = Array.from({ length: columns }, (_, ci) =>
    testimonials.filter((_, idx) => idx % columns === ci)
  );

  const testimonialsTrack = (
    <div className="flex gap-6 px-4">
      {cols.map((col, ci) => (
        <div
          key={ci}
          className="flex w-[340px] shrink-0 flex-col gap-6"
          style={{
            // Stagger the columns slightly by offset padding
            paddingTop: ci === 1 ? "24px" : ci === 2 ? "48px" : "0px",
          }}
        >
          {col.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-white/5 bg-[#0e0e0e] p-6 shadow-xl transition-all duration-300 hover:border-accent/40 hover:bg-[#121212] hover:-translate-y-1"
            >
              <p className="text-sm leading-relaxed text-white/80 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent border border-accent/20">
                  {t.avatar}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">
                    {t.name}
                  </span>
                  <span className="text-[10px] text-muted">Verified Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="relative overflow-hidden bg-black py-32 px-6 lg:px-8 border-y border-white/5">
      {/* Decorative gradient overlay to fade the grid at the top/bottom */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-black via-transparent to-black" />

      {/* Heading */}
      <div className="relative z-10 mx-auto max-w-7xl text-center mb-16 mt-12">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          What My Clients Say
        </h2>
        <p className="mt-4 text-base text-muted max-w-xl mx-auto">
          Delivering premium design systems and vibe-coded websites that drive customer conversions.
        </p>
      </div>

      {/* Horizontal scrolling marquee that glides smoothly under the floating navbar */}
      <div className="relative z-10 mt-16 w-max flex overflow-hidden">
        {/* We use animate-marquee-reverse to scroll Left to Right! */}
        <div className="flex animate-[marquee-reverse_30s_linear_infinite]">
          {testimonialsTrack}
          {testimonialsTrack}
          {testimonialsTrack}
          {testimonialsTrack}
        </div>
      </div>
    </section>
  );
}
