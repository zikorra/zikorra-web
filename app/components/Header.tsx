import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "FAQs", href: "/faq" },
  { label: "Testimonials", href: "/#how-it-helps" },
  { label: "Contact", href: "/#cta" },
];

export default function Header() {
  return (
    <>
      <header className="w-full bg-white px-6 py-5">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between">
          <div className="h-9 w-9 rounded-full bg-blue-100" aria-hidden />
          <nav className="hidden items-center gap-8 text-sm font-medium text-[#0b1220] sm:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-brand"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <div className="mx-auto w-full max-w-[1240px] rounded-lg bg-gradient-to-r from-[#E1E9F5] to-white px-6 py-2.5 text-center text-xs font-medium text-[#0b1220] sm:text-sm">
        The easier way to get reliable artisans for your home and property.
      </div>
    </>
  );
}
