"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/", sectionId: null },
  { label: "What We Do", href: "/#what-we-do", sectionId: "what-we-do" },
  { label: "FAQs", href: "/#faq", sectionId: "faq" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

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

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center text-[#0b1220] sm:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>

        <div
          className="grid transition-[grid-template-rows] duration-300 ease-in-out sm:hidden"
          style={{ gridTemplateRows: menuOpen ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <nav className="mx-auto flex max-w-[1240px] flex-col gap-1 pt-4">
              {NAV_LINKS.map((link) => {
                const isActive = link.sectionId
                  ? activeSection === link.sectionId
                  : activeSection === null;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-lg px-2 py-2.5 text-[15px] leading-[22px] font-medium transition-colors ${
                      isActive
                        ? "bg-blue-50 text-black"
                        : "text-[#475569] hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>
      <div className="px-6">
        <div className="mx-auto max-w-[1240px] rounded-lg bg-gradient-to-r from-[#E1E9F5] to-white px-6 py-2.5 text-center text-xs font-medium text-[#0b1220] sm:text-sm">
          The easier way to get reliable artisans for your home and property.
        </div>
      </div>
    </>
  );
}
