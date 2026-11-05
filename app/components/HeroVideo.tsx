"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function HeroVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    let visible = false;
    function play() {
      if (!visible || document.hidden) return;
      video!.muted = true;
      video!.defaultMuted = true;
      video!.playsInline = true;
      void video!.play().catch(() => { /* Retry on visibility or a user gesture. */ });
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) play(); else video.pause();
    }, { threshold: 0.1 });
    observer.observe(video);
    video.addEventListener("canplay", play);
    document.addEventListener("visibilitychange", play);
    document.addEventListener("touchend", play, { passive: true });
    document.addEventListener("click", play);
    return () => {
      observer.disconnect();
      video.removeEventListener("canplay", play);
      document.removeEventListener("visibilitychange", play);
      document.removeEventListener("touchend", play);
      document.removeEventListener("click", play);
    };
  }, [src]);
  return <video ref={ref} src={src} autoPlay muted loop playsInline preload="auto" className={styles.video} aria-label="Zikorra professionals helping a customer at home">Your browser does not support video playback.</video>;
}
