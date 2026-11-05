import {
  ArrowRight,
  BrushCleaning,
  Cctv,
  Droplet,
  Flame,
  Hammer,
  PaintRoller,
  SearchCheck,
  Shirt,
  Zap,
} from "lucide-react";
import styles from "./FindHelp.module.css";

const SERVICES = [
  { label: "Electrician", icon: Zap },
  { label: "Plumber", icon: Droplet },
  { label: "Carpenter", icon: Hammer },
  { label: "Cleaner", icon: BrushCleaning },
  { label: "Painter", icon: PaintRoller },
  { label: "Welder", icon: Flame },
  { label: "Laundry & Ironing", icon: Shirt },
  { label: "CCTV Installer", icon: Cctv },
];

export default function FindHelp() {
  return (
    <section className={styles.section} aria-labelledby="find-help-heading">
      <div className={styles.container}>
        <div className={styles.badge}>
          <span>
            <SearchCheck size={17} aria-hidden="true" />
          </span>
          FIND THE HELP YOU NEED
        </div>
        <h2 id="find-help-heading" className={styles.heading}>
          The right help for your home
          <br className={styles.desktopBreak} /> is one app away.
        </h2>
        <p className={styles.description}>
          From repairs and cleaning to everyday maintenance, connect with
          verified professionals, agree on a price and manage every step with
          Zikorra.
        </p>
        <ul className={styles.services} aria-label="Available home services">
          {SERVICES.map(({ label, icon: Icon }) => (
            <li key={label} className={styles.service}>
              <Icon size={20} strokeWidth={2.5} aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
        <a href="#waitlist" className={styles.download}>
          <span>Download Customer App</span>
          <span className={styles.arrow}>
            <ArrowRight size={18} strokeWidth={3} aria-hidden="true" />
          </span>
        </a>
      </div>
    </section>
  );
}
