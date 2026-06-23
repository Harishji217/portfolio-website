"use client";

import { Reveal } from "@/components/ui/Reveal";
import { websites } from "@/data/site";
import { WebsitePreviewCard } from "@/components/WebsitePreviewCard";

export function PortfolioLinks() {
  const latestFirstWebsites = [...websites].reverse();

  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Portfolio
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Links to Some of My Websites
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Each project is shown with a live preview. Click any card to visit
            the full website.
          </p>
        </Reveal>

        <div className="mt-14 flex gap-8 overflow-x-auto pb-8 snap-x scrollbar-glass">
          {latestFirstWebsites.map((project, i) => (
            <div key={project.id} className="snap-center">
              <Reveal delay={i * 0.1}>
                <WebsitePreviewCard project={project} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
