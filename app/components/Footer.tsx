"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Apple, X } from "lucide-react";
import WaitlistForm from "./WaitlistForm";
import styles from "./Footer.module.css";

export default function Footer() {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    function openWaitlist() {
      if (window.location.hash === "#waitlist" && !dialog.current?.open) dialog.current?.showModal();
    }
    window.addEventListener("hashchange", openWaitlist);
    openWaitlist();
    return () => window.removeEventListener("hashchange", openWaitlist);
  }, []);

  function closeWaitlist() {
    if (window.location.hash === "#waitlist") window.history.replaceState(null, "", window.location.pathname + window.location.search);
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo} aria-label="Zikorra home">
            <Image src="/icon.png" alt="" width={20} height={20} />
            <Image src="/icons/zikorra-wordmark.png" alt="Zikorra" width={100} height={20} />
          </Link>
          <p className={styles.stay}>Stay in touch</p>
          <div className={styles.socials}>
            <button type="button" aria-label="Instagram"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg></button>
            <button type="button" aria-label="X"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.5-8.6L.8 2h6.5l4.5 6.8L18.9 2ZM17.8 20h1.8L6.2 4H4.3l13.5 16Z" /></svg></button>
            <button type="button" aria-label="Facebook"><svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12a12 12 0 1 0-13.9 11.85v-8.38H7.05V12h3.05V9.36c0-3.01 1.79-4.67 4.53-4.67 1.31 0 2.68.23 2.68.23v2.95H15.8c-1.49 0-1.95.92-1.95 1.87V12h3.32l-.53 3.47h-2.79v8.38A12 12 0 0 0 24 12Z" /></svg></button>
            <button type="button" aria-label="LinkedIn"><svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.89a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.86H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.53 2.79-1.53 2.99 0 3.58 1.97 3.58 4.53v5.25Z" /></svg></button>
          </div>
          <p className={styles.copyright}>©2026 Zikorra services limited . All rights reserved</p>
        </div>
        <div className={styles.right}>
          <div className={styles.links}>
            <div><h3>Get Started</h3><a href="#waitlist">Customer App</a><a href="#waitlist">Artisan App</a></div>
            <div><h3>Support</h3><a href="#faq">Help Centre</a><a href="#contact">Contact Us</a></div>
            <div><h3>Legal</h3><button type="button">Privacy Policy</button><button type="button">Terms of Service</button></div>
          </div>
          <div className={styles.stores}>
            <a href="#waitlist" aria-label="Download on the App Store"><Apple size={30} fill="currentColor" aria-hidden="true" /><span>Download on<strong>App Store</strong></span></a>
            <a href="#waitlist" aria-label="Download on Google Play"><svg width="28" height="32" viewBox="0 0 28 32" aria-hidden="true"><path d="M1 1 17 16 1 31Z" fill="#23b6ef"/><path d="m1 1 20 11-4 4Z" fill="#26b55d"/><path d="m17 16 4-4 7 4-7 4Z" fill="#ffce32"/><path d="m1 31 16-15 4 4Z" fill="#f24454"/></svg><span>Download on<strong>PlayStore</strong></span></a>
          </div>
        </div>
      </div>
      <dialog ref={dialog} className={styles.dialog} onClose={closeWaitlist} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }} aria-labelledby="waitlist-heading">
        <button type="button" className={styles.close} onClick={() => dialog.current?.close()} aria-label="Close waitlist"><X size={22} /></button>
        <h2 id="waitlist-heading">Be among the first to use Zikorra.</h2>
        <p>Join the waitlist for launch updates, early access, and availability in your city.</p>
        <WaitlistForm className="mt-6" centered />
      </dialog>
    </footer>
  );
}
