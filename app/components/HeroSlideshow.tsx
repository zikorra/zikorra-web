"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SLIDES = [
  "/images/hero/hero-bg-1.jpg",
  "/images/hero/hero-bg-2.jpg",
  "/images/hero/hero-bg-3.jpg",
  "/images/hero/hero-bg-4.jpg",
];

export default function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 -z-20">
      {SLIDES.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
