"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/", sectionId: null },
  { label: "FAQs", href: "/#faq", sectionId: "faq" },
  { label: "What We Do", href: "/#what-we-do", sectionId: "what-we-do" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.sectionId).filter(
      (id): id is string => Boolean(id),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white px-6 py-5">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between">
          <div className="h-9 w-9 rounded-full bg-blue-100" aria-hidden />
          <nav className="hidden items-center gap-8 sm:flex">
            {NAV_LINKS.map((link) => {
              const isActive = link.sectionId
                ? activeSection === link.sectionId
                : activeSection === null;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[15px] leading-[22px] font-medium transition-colors hover:text-black ${
                    isActive ? "text-black" : "text-[#475569]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <div className="mx-auto w-full max-w-[1240px] rounded-lg bg-gradient-to-r from-[#E1E9F5] to-white px-6 py-2.5 text-center text-xs font-medium text-[#0b1220] sm:text-sm">
        The easier way to get reliable artisans for your home and property.
      </div>
    </>
  );
}
