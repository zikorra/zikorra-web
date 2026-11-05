"use client";

import { useEffect, useRef, type ReactNode } from "react";


export default function AutoScroll({ children, className, label, reverse = false, centered = false }: { children: ReactNode; className: string; label: string; reverse?: boolean; centered?: boolean }) {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let previous = 0;
    if (centered) gallery.scrollLeft = (gallery.scrollWidth - gallery.clientWidth) / 2;
    let position = gallery.scrollLeft;
    let direction = reverse ? -1 : 1;
    let pausedUntil = 0;
    let visible = true;
    let touching = false;

    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(gallery);
    function pause() { pausedUntil = performance.now() + 4000; }
    function touchStart() { touching = true; pause(); }
    function touchEnd() { touching = false; pause(); }
    function tick(now: number) {
      const elapsed = previous ? Math.min(now - previous, 50) : 0;
      previous = now;
      const paused = motion.matches || !visible || document.hidden || touching || now < pausedUntil || (window.matchMedia("(hover: hover)").matches && gallery!.matches(":hover")) || gallery!.matches(":focus-visible");
      if (paused) {
        position = gallery!.scrollLeft;
      } else {
        const end = gallery!.scrollWidth - gallery!.clientWidth;
        position = Math.max(0, Math.min(end, position + direction * elapsed * 0.03));
        gallery!.scrollLeft = position;
        if (position >= end) direction = -1;
        if (position <= 0) direction = 1;
      }
      frame = requestAnimationFrame(tick);
    }
    gallery.addEventListener("wheel", pause, { passive: true });
    gallery.addEventListener("pointerdown", touchStart, { passive: true });
    window.addEventListener("pointerup", touchEnd, { passive: true });
    window.addEventListener("pointercancel", touchEnd, { passive: true });
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      gallery.removeEventListener("wheel", pause);
      gallery.removeEventListener("pointerdown", touchStart);
      window.removeEventListener("pointerup", touchEnd);
      window.removeEventListener("pointercancel", touchEnd);
    };
  }, [reverse, centered]);
  return (
    <div ref={galleryRef} className={className} tabIndex={0} role="region" aria-label={label}>
      {children}
    </div>
  );
}
