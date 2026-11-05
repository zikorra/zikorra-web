import Image from "next/image";
import HeroNav from "./HeroNav";
import HeroVideo from "./HeroVideo";
import HeroGallery from "./HeroGallery";
import { Fragment } from "react";
import { CATEGORIES } from "./categoriesData";
import styles from "./Hero.module.css";

const QUICK_CATEGORIES = ["Plumber", "Electrician", "Cleaner", "Carpenter"].map(
  (label) => CATEGORIES.find((category) => category.label === label)!,
);

const PHOTOS = [
  {
    name: "electrical-repair",
    alt: "Zikorra professional repairing a wall socket",
  },
  { name: "painter", alt: "Zikorra painter painting an interior wall" },
  {
    name: "electrician",
    alt: "Zikorra electrician checking an electrical panel",
  },
  { name: "plumber", alt: "Zikorra plumber repairing pipes beneath a sink" },
  { name: "cleaner", alt: "Zikorra cleaner cleaning a kitchen" },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <HeroNav />
      <div className={styles.intro}>
        <div className={styles.tools} aria-hidden="true">
          {["drill", "broom", "pipe", "hammer"].map((tool) => (
            <Image
              key={tool}
              src={`/images/hero/hero-${tool}.png`}
              alt=""
              width={168}
              height={174}
              className={`${styles.tool} ${styles[tool]}`}
              sizes="(max-width: 639px) 40px, (max-width: 1023px) 52px, 64px"
            />
          ))}
        </div>
        <div className={styles.content}>
          <div className={styles.badge}>
            <Image src="/icons/badge-icon.png" alt="" width={20} height={22} />
            <span>Nigeria’s Managed Home &amp; Property Service Platform</span>
          </div>
          <h1 className={styles.heading}>
            Find plumbers, electricians,
            <br className={styles.desktopBreak} /> cleaners{" "}
            <span className={styles.highlight}>and more.</span>
          </h1>
          <p className={styles.description}>
            Find verified professionals for your home, agree on the price before
            paying, and stay updated on every job from start to finish.
          </p>
          <div className={styles.actions}>
            <a href="#waitlist" className={styles.primary}>
              Download Customer app
            </a>
            <a href="#waitlist" className={styles.secondary}>
              Download Artisan App
            </a>
          </div>
          <ul className={styles.categories} aria-label="Home services">
            {QUICK_CATEGORIES.map(({ icon, label }) => (
              <li key={label}>
                <Image
                  src={`/icons/categories/${icon}.svg`}
                  alt=""
                  width={20}
                  height={20}
                />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <HeroGallery>
          {PHOTOS.map(({ name, alt }, index) => (
            <Fragment key={name}>
              <div className={styles.photo}>
                <Image
                  src={`/images/hero/hero-${name}.jpg`}
                  alt={alt}
                  fill
                  sizes="(max-width: 639px) 72vw, (max-width: 1023px) 42vw, 27.3vw"
                  className={styles.photoImage}
                />
              </div>
              {(index === 0 || index === 2) && (
                <div className={styles.photo}>
                  <HeroVideo src={`/videos/hero/hero-service-${index === 0 ? "01" : "02"}.mp4`} />
                </div>
              )}
            </Fragment>
          ))}
      </HeroGallery>
    </section>
  );
}
