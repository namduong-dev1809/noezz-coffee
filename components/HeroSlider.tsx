"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = { kicker: string; title: string; text: string };

const INTERVAL_MS = 6000;

export default function HeroSlider({
  slides,
  images,
  label,
  ctaMenu,
  ctaDirections,
  directionsHref,
}: {
  slides: Slide[];
  images: string[];
  label: string;
  ctaMenu: string;
  ctaDirections: string;
  directionsHref: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // restarting the timer whenever `index` changes means a manual click gets a full 6 s too
    const id = setTimeout(() => setIndex((i) => (i + 1) % slides.length), INTERVAL_MS);
    return () => clearTimeout(id);
  }, [index, slides.length]);

  return (
    <section id="top" aria-roledescription="carousel" className="relative isolate flex min-h-[85vh] items-center overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          className={`-z-20 object-cover transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night/90 via-night/60 to-night/20" />

      <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        {/* key forces the text to re-mount so it animates in with each slide */}
        <div key={index} className="max-w-xl motion-safe:animate-[fadeUp_0.8s_ease-out_both]" aria-live="polite">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-caramel">{slides[index].kicker}</p>
          <h1 className="mt-4 font-display text-5xl leading-tight text-white sm:text-7xl">{slides[index].title}</h1>
          <p className="mt-5 text-lg text-text/90">{slides[index].text}</p>
        </div>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#menu" className="bg-caramel px-6 py-3 text-sm font-medium uppercase tracking-widest text-ink hover:bg-cream">
            {ctaMenu}
          </a>
          <a href={directionsHref} target="_blank" rel="noopener" className="border border-white/40 px-6 py-3 text-sm font-medium uppercase tracking-widest text-white hover:border-caramel hover:text-caramel">
            {ctaDirections}
          </a>
        </div>
        <div className="mt-12 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${label} ${i + 1}`}
              aria-current={i === index}
              className={`h-1 transition-all ${i === index ? "w-12 bg-caramel" : "w-6 bg-white/40 hover:bg-white/70"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
