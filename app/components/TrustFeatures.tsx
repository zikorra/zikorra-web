import Image from "next/image";
import styles from "./TrustFeatures.module.css";

const FEATURES = [
  {
    icon: "verified-professionals",
    width: 150,
    title: "Verified Professionals",
    description:
      "Every professional is identity and document verified before joining Zikorra.",
  },
  {
    icon: "simple-booking",
    width: 150,
    title: "Simple Booking",
    description:
      "Request a service in minutes and get matched with the right professional.",
  },
  {
    icon: "payment-protection",
    width: 190,
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
          <br className={styles.desktopBreak} /> and stay informed every step of
          the way.
        </h2>

        <div className={styles.features}>
          {FEATURES.map(({ icon, width, title, description }) => (
            <div key={title} className={styles.feature}>
              <Image
                src={`/icons/trust/${icon}.png`}
                alt=""
                width={width}
                height={150}
                sizes="(max-width: 767px) 61px, 66px"
                className={styles.icon}
              />
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
