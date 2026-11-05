import { Send } from "lucide-react";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className={styles.contactSection}
      aria-labelledby="contact-heading"
    >
      <div className={styles.banner}>
        <Image
          src="/images/contact/contact-pattern.png"
          alt=""
          fill
          sizes="(min-width: 1280px) 1240px, 100vw"
          className={styles.pattern}
        />
        <h2 id="contact-heading">Got a question? Let&apos;s talk.</h2>
        <p>
          Have a question about Zikorra or need a little help? Send us a
          message,
          <br className={styles.desktopBreak} /> and our team will be happy to
          assist you.
        </p>
        <a href="mailto:support@zikorra.com" className={styles.email}>
          Send us an email <Send size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
