"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import WaitlistForm from "./WaitlistForm";
import { SOCIAL_LINKS } from "../lib/social";
import styles from "./Footer.module.css";

export default function Footer() {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    function openWaitlist() {
      if (window.location.hash === "#waitlist" && !dialog.current?.open)
        dialog.current?.showModal();
    }
    window.addEventListener("hashchange", openWaitlist);
    openWaitlist();
    return () => window.removeEventListener("hashchange", openWaitlist);
  }, []);

  function closeWaitlist() {
    if (window.location.hash === "#waitlist")
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo} aria-label="Zikorra home">
            <Image src="/icon.png" alt="" width={20} height={20} />
            <Image
              src="/icons/zikorra-wordmark.png"
              alt="Zikorra"
              width={100}
              height={20}
            />
          </Link>
          <p className={styles.stay}>Stay in touch</p>
          <div className={styles.socials}>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Zikorra on Instagram (opens in a new tab)">
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
            <a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" aria-label="Zikorra on X (opens in a new tab)">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.5-8.6L.8 2h6.5l4.5 6.8L18.9 2ZM17.8 20h1.8L6.2 4H4.3l13.5 16Z" />
              </svg>
            </a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Zikorra on Facebook (opens in a new tab)">
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M24 12a12 12 0 1 0-13.9 11.85v-8.38H7.05V12h3.05V9.36c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.68.23 2.68.23v2.95H15.8c-1.49 0-1.95.92-1.95 1.87V12h3.32l-.53 3.47h-2.79v8.38A12 12 0 0 0 24 12Z" />
              </svg>
            </a>
            <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" aria-label="Zikorra on TikTok (opens in a new tab)">
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M16.6 2h-3.2v13.7a3.1 3.1 0 1 1-2.7-3.1V9.3a6.4 6.4 0 1 0 6 6.4V8.8a9 9 0 0 0 5.3 1.7V7.2A5.4 5.4 0 0 1 16.6 2Z" />
              </svg>
            </a>
          </div>
          <p className={styles.copyright}>
            ©2026 Zikorra services limited . All rights reserved
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.links}>
            <div>
              <h3>Get Started</h3>
              <a href="#waitlist">Customer App</a>
              <a href="#waitlist">Artisan App</a>
            </div>
            <div>
              <h3>Support</h3>
              <a href="#faq">Help Centre</a>
              <a href="#contact">Contact Us</a>
            </div>
            <div>
              <h3>Legal</h3>
              <button type="button">Privacy Policy</button>
              <button type="button">Terms of Service</button>
            </div>
          </div>
          <div className={styles.stores}>
            <a href="#waitlist" aria-label="Download on the App Store">
              <svg
                width="30"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.05 12.54c.03 3.1 2.72 4.13 2.75 4.14-.02.07-.43 1.47-1.42 2.92-.86 1.25-1.75 2.5-3.15 2.53-1.38.03-1.83-.82-3.41-.82-1.59 0-2.08.8-3.39.85-1.35.05-2.39-1.36-3.25-2.6-1.76-2.55-3.1-7.21-1.3-10.36a5.04 5.04 0 0 1 4.28-2.59c1.34-.03 2.61.91 3.42.91.82 0 2.35-1.12 3.96-.96.67.03 2.55.27 3.76 2.05-.1.06-2.25 1.31-2.23 3.93ZM14.45 4.83c.72-.87 1.21-2.08 1.08-3.28-1.04.04-2.3.69-3.04 1.56-.67.77-1.26 2-1.1 3.18 1.16.09 2.34-.59 3.06-1.46Z" />
              </svg>
              <span>
                Download on<strong>App Store</strong>
              </span>
            </a>
            <a href="#waitlist" aria-label="Download on Google Play">
              <svg
                width="28"
                height="32"
                viewBox="0 0 28 32"
                aria-hidden="true"
              >
                <path d="M1 1 17 16 1 31Z" fill="#23b6ef" />
                <path d="m1 1 20 11-4 4Z" fill="#26b55d" />
                <path d="m17 16 4-4 7 4-7 4Z" fill="#ffce32" />
                <path d="m1 31 16-15 4 4Z" fill="#f24454" />
              </svg>
              <span>
                Download on<strong>PlayStore</strong>
              </span>
            </a>
          </div>
        </div>
      </div>
      <dialog
        id="waitlist"
        ref={dialog}
        className={styles.dialog}
        onClose={closeWaitlist}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        aria-labelledby="waitlist-heading"
      >
        <button
          type="button"
          className={styles.close}
          onClick={() => dialog.current?.close()}
          aria-label="Close waitlist"
        >
          <X size={22} />
        </button>
        <h2 id="waitlist-heading">Be among the first to use Zikorra.</h2>
        <p>
          Join the waitlist for launch updates, early access, and availability
          in your city.
        </p>
        <WaitlistForm className="mt-6" centered />
      </dialog>
    </footer>
  );
}
