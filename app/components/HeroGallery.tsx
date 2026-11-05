import type { ReactNode } from "react";
import AutoScroll from "./AutoScroll";
import styles from "./Hero.module.css";

export default function HeroGallery({ children }: { children: ReactNode }) {
  return (
    <AutoScroll className={styles.gallery} label="Photos and videos of Zikorra professionals">
      <div className={styles.photoStrip}>{children}</div>
    </AutoScroll>
  );
}
