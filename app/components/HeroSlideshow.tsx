"use client";

import { useEffect, useState } from "react";

const SLIDES = ["/videos/hero/hero-bg-1.mp4", "/videos/hero/hero-bg-2.mp4"];

const SLIDE_DURATION = 8000;

export default function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 -z-20 bg-black">
      {SLIDES.map((src, index) => (
        <video
          key={src}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
