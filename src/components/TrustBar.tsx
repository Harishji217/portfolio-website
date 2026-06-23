"use client";

import { Reveal } from "@/components/ui/Reveal";
import { clientLogos } from "@/data/site";

export function TrustBar() {
  const doubled = [...clientLogos, ...clientLogos];

  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-[#030712] bg-grid-blue border-y border-white/5">
      {/* Radial overlay to fade out grid borders at the edges */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(3,7,18,0.2)_0%,rgba(3,7,18,1)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-lime sm:text-3xl text-glow-lime">
            Look who&apos;s hiring from us
          </h2>
        </Reveal>

        {/* Large semi-transparent container card with vector logos */}
        <Reveal delay={0.2}>
          <div className="mt-10 rounded-2xl border border-white/10 bg-[#090d16]/75 p-8 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 items-center justify-items-center opacity-70">
              {/* Google */}
              <div className="flex items-center gap-1.5 transition-opacity hover:opacity-100 duration-300">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C18.155 2.183 15.465 1 12.24 1 5.92 1 1 5.92 1 12s4.92 11 11.24 11c6.6 0 11-4.65 11-11.2 0-.756-.08-1.333-.18-1.8H12.24z"/>
                </svg>
                <span className="font-display text-lg font-bold tracking-tight text-white">Google</span>
              </div>

              {/* Unacademy */}
              <div className="flex items-center gap-1.5 transition-opacity hover:opacity-100 duration-300">
                <svg className="h-6 w-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span className="font-display text-base font-bold text-white">unacademy</span>
              </div>

              {/* Vedantu */}
              <div className="flex items-center gap-1 transition-opacity hover:opacity-100 duration-300">
                <span className="font-display text-xl font-black italic tracking-tighter text-[#EA580C]">V</span>
                <span className="font-display text-base font-bold text-white">Vedantu</span>
              </div>

              {/* PW */}
              <div className="flex items-center gap-1 transition-opacity hover:opacity-100 duration-300">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-black text-black">PW</div>
                <span className="font-display text-base font-extrabold text-white">PW</span>
              </div>

              {/* Growth School */}
              <div className="flex items-center gap-1.5 transition-opacity hover:opacity-100 duration-300">
                <svg className="h-5 w-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
                <span className="font-display text-xs font-bold leading-none text-white">Growth<br/>School</span>
              </div>

              {/* Munchable */}
              <div className="flex items-center transition-opacity hover:opacity-100 duration-300">
                <span className="font-display text-base font-black tracking-wide text-orange-500 uppercase">Munchable</span>
              </div>

              {/* 100xEngineers */}
              <div className="flex items-center transition-opacity hover:opacity-100 duration-300">
                <span className="rounded bg-white/10 px-2 py-1 font-display text-[10px] font-extrabold tracking-widest text-white border border-white/5">100xEngineers</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Infinite scrolling logo marquee */}
        <div className="relative mt-16 w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-24 bg-gradient-to-r from-[#030712] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-24 bg-gradient-to-l from-[#030712] to-transparent" />
          
          <div className="flex animate-marquee gap-16 whitespace-nowrap">
            {doubled.map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="font-display text-2xl font-bold text-white/20 transition-colors hover:text-white/50 sm:text-3xl"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
