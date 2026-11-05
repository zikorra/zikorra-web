import { BadgeCheck, CalendarPlus, ShieldCheck } from "lucide-react";
import styles from "./TrustFeatures.module.css";

const FEATURES = [
  {
    icon: BadgeCheck,
    title: "Verified Professionals",
    description:
      "Every professional is identity and document verified before joining Zikorra.",
  },
  {
    icon: CalendarPlus,
    title: "Simple Booking",
    description:
      "Request a service in minutes and get matched with the right professional.",
  },
  {
    icon: ShieldCheck,
    title: "Payment Protection",
    description: "Every payment is encrypted, documented, and easy to track.",
  },
];

export default function TrustFeatures() {
  return (
    <section className={styles.section} aria-labelledby="trust-heading">
      <div className={styles.container}>
        <h2 id="trust-heading" className={styles.heading}>
          Find trusted professionals, book with confidence,
          <br className={styles.desktopBreak} />{" "}
          and stay informed every step of the way.
        </h2>

        <div className={styles.features}>
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div key={title} className={styles.feature}>
              <Icon
                className={styles.icon}
                aria-hidden
              />
              <h3 className={styles.title}>
                {title}
              </h3>
              <p className={styles.description}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
