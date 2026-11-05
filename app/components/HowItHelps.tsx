import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./HowItHelps.module.css";

const APPS = [
  {
    audience: "For Customers",
    title: "Get the right help for your home.",
    description:
      "Find verified professionals for repairs, cleaning and maintenance. Agree on the price, pay securely through Zikorra and stay updated until the job is done.",
    action: "Download Customer App",
    image: "/images/how-it-helps/customer-app-phones.png",
    width: 1183,
    alt: "Zikorra Customer App showing the home screen, artisan profile and bookings",
    variant: "customer",
  },
  {
    audience: "For Artisans",
    title: "Turn your skills into more opportunities.",
    description:
      "Receive job offers, connect with customers, agree on prices and manage your jobs and earnings, all through the Zikorra Professional App.",
    action: "Download Artisan App",
    image: "/images/how-it-helps/artisan-app-phones.png",
    width: 1181,
    alt: "Zikorra Artisan App showing job offers, customer chat and wallet",
    variant: "artisan",
  },
];

export default function HowItHelps() {
  return (
    <section className={styles.section} aria-labelledby="apps-heading">
      <div className={styles.container}>
        <h2 id="apps-heading" className={styles.heading}>
          Whether you need help or offer<br className={styles.desktopBreak} />{" "}
          it, Zikorra is for you.
        </h2>
        <p className={styles.intro}>
          Two apps, one platform. Find trusted professionals for your home or
          connect with customers and manage your jobs—all in one place.
        </p>
        <div className={styles.cards}>
          {APPS.map((app) => (
            <article key={app.variant} className={styles.card}>
              <div className={styles.copy}>
                <p className={styles.audience}>{app.audience}</p>
                <h3 className={styles.title}>{app.title}</h3>
                <p className={styles.description}>{app.description}</p>
                <a href="#waitlist" className={`${styles.download} ${styles[app.variant]}`}>
                  {app.action}
                  <span className={styles.arrow}><ArrowRight size={15} strokeWidth={3} aria-hidden="true" /></span>
                </a>
              </div>
              <div className={styles.preview}>
                <Image src={app.image} alt={app.alt} width={app.width} height={479}
                  sizes="(min-width: 1280px) 600px, (min-width: 768px) 46vw, 90vw"
                  className={styles.previewImage} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
