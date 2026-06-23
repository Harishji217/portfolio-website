"use client";

import { Reveal } from "@/components/ui/Reveal";
import { useCountUp } from "@/hooks/useCountUp";
import { stats } from "@/data/site";

function StatCard({
  label,
  value,
  suffix,
  delay,
}: {
  label: string;
  value: number;
  suffix: string;
  delay: number;
}) {
  const { count, ref } = useCountUp(value);

  return (
    <Reveal delay={delay}>
      <div
        ref={ref}
        className="glass-liquid glass-shine-container group rounded-2xl p-8 text-center"
      >
        <p className="font-display text-4xl font-bold text-white sm:text-5xl">
          {count}
          {suffix}
        </p>
        <p className="mt-2 text-sm text-muted">{label}</p>
      </div>
    </Reveal>
  );
}

export function Results() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Results That Matter
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
