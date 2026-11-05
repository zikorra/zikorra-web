import { BrushCleaning, Hammer, PaintRoller, Wrench, Zap } from "lucide-react";
import styles from "./ServiceCategories.module.css";

const SERVICES = [
  { label: "Painting", icon: PaintRoller, color: "painting" },
  { label: "Electrical Services", icon: Zap, color: "electrical" },
  { label: "Plumbing", icon: Wrench, color: "plumbing" },
  { label: "Home Cleaning", icon: BrushCleaning, color: "cleaning" },
  { label: "Carpentry", icon: Hammer, color: "carpentry" },
];

export default function ServiceCategories() {
  return (
    <section id="what-we-do" className={styles.section} aria-labelledby="services-heading">
      <div className={styles.container}>
        <div className={styles.copy}>
          <h2 id="services-heading" className={styles.heading}>
            Different jobs. One place to find help.
          </h2>
          <p className={styles.description}>
            From plumbing and electrical repairs to cleaning and many more. Find
            verified professionals for the work your home needs all on Zikorra.
          </p>
        </div>
        <ul
          className={styles.services}
          aria-label="Services available on Zikorra"
        >
          {SERVICES.map(({ label, icon: Icon, color }) => (
            <li key={label} className={styles.service}>
              <span className={`${styles.icon} ${styles[color]}`}>
                <Icon aria-hidden="true" strokeWidth={2.25} />
              </span>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
