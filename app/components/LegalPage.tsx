import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import styles from "./LegalPage.module.css";

type Props = {
  title: string;
  sections: { id: string; title: string }[];
  children: ReactNode;
};

export default function LegalPage({ title, sections, children }: Props) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/" aria-label="Zikorra home" className={styles.brand}>
          <Image
            src="/icon.png"
            alt=""
            width={36}
            height={36}
            className="h-7 w-7 shrink-0 object-contain sm:h-8 sm:w-8"
          />
          <Image
            src="/icons/zikorra-wordmark.png"
            alt="Zikorra"
            width={1440}
            height={287}
            className="h-4 w-auto object-contain sm:h-[18px]"
          />
        </Link>
        <Link href="/" className={styles.backLink}>
          <ChevronLeft size={18} strokeWidth={2} aria-hidden="true" />
          <span>Back to home</span>
        </Link>
      </header>
      <main id="main-content" className={styles.main}>
        <p className={styles.eyebrow}>Zikorra Legal</p>
        <h1>{title}</h1>
        <p className={styles.date}>Effective date: <time dateTime="2026-11-13">13 November 2026</time></p>
        <div className={styles.layout}>
          <nav aria-label={`${title} contents`} className={styles.contents}>
            <h2>On this page</h2>
            <ol>{sections.map((section) => (
              <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>
            ))}</ol>
          </nav>
          <article className={styles.article} aria-label={title}>{children}</article>
        </div>
      </main>
      <footer className={styles.footer}>
        <span>©2026 Zikorra Services Limited</span>
        <nav aria-label="Legal"><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-of-service">Terms of Service</Link></nav>
      </footer>
    </div>
  );
}
