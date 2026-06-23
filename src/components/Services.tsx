"use client";

import { Layout, Code, Palette } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/site";

const iconMap = {
  layout: Layout,
  code: Code,
  palette: Palette,
};

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            What I Can Help You With
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Reveal key={service.title} delay={i * 0.1}>
                <div className="glass-liquid glass-shine-container group h-full rounded-2xl p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
