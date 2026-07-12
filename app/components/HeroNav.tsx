"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/", sectionId: null },
  { label: "FAQs", href: "/#faq", sectionId: "faq" },
  { label: "What we do", href: "/#what-we-do", sectionId: "what-we-do" },
];

export default function HeroNav() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.sectionId).filter(
      (id): id is string => Boolean(id),
    );
    const intersecting = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersecting.add(entry.target.id);
          } else {
            intersecting.delete(entry.target.id);
          }
        });
        const current = sectionIds.find((id) => intersecting.has(id));
        setActiveSection(current ?? null);
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
    <div className="relative z-10 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/icons/zikorra-logo-white.svg"
          alt="Zikorra"
          width={140}
          height={32}
          className="h-6 w-auto sm:h-7"
        />
      </Link>

      <nav className="flex items-center gap-4 sm:gap-8">
        {NAV_LINKS.map((link) => {
          const isActive = link.sectionId
            ? activeSection === link.sectionId
            : activeSection === null;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`text-xs leading-4 font-medium transition-colors hover:text-white sm:text-[15px] sm:leading-[22px] ${
                isActive ? "text-white" : "text-white/70"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
