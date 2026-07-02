import PlaceholderImage from "./PlaceholderImage";

const PHOTOS = [
  { file: "hero-strip-1.jpeg", alt: "Zikorra professional on site" },
  { file: "hero-strip-2.jpeg", alt: "Zikorra artisan at work" },
  { file: "hero-strip-3.jpeg", alt: "Zikorra service team" },
  { file: "hero-strip-4.jpeg", alt: "Zikorra site inspection" },
];

export default function ServiceStrip() {
  return (
    <section className="w-full bg-[#eef2fb]">
      <div className="mx-auto max-w-[1400px] overflow-hidden">
        <div className="-mx-6 flex h-[220px] md:-mx-10 md:h-[320px]">
          <PlaceholderImage
            src={`/images/hero/${PHOTOS[0].file}`}
            alt={PHOTOS[0].alt}
            rounded="rounded-none"
            className="min-w-[160px] flex-1 border-l border-white/70 first:border-l-0"
          />
          <PlaceholderImage
            src={`/images/hero/${PHOTOS[1].file}`}
            alt={PHOTOS[1].alt}
            rounded="rounded-none"
            className="min-w-[160px] flex-1 border-l border-white/70"
          />

          <div className="flex min-w-[220px] flex-1 flex-col justify-between border-l border-white/70 bg-white p-6 text-left">
            <span className="text-xs font-semibold tracking-wide text-gray-500">
              SERVICE FLOW
            </span>
            <div className="my-4 flex-1 rounded-xl bg-gray-100" />
            <p className="text-sm text-gray-600">
              Request a service, get matched with a verified professional,
              approve the quote, track progress, and confirm completion
              before payment is released.
            </p>
          </div>

          <PlaceholderImage
            src={`/images/hero/${PHOTOS[2].file}`}
            alt={PHOTOS[2].alt}
            rounded="rounded-none"
            className="min-w-[160px] flex-1 border-l border-white/70"
          />
          <PlaceholderImage
            src={`/images/hero/${PHOTOS[3].file}`}
            alt={PHOTOS[3].alt}
            rounded="rounded-none"
            className="min-w-[160px] flex-1 border-l border-white/70"
          />
        </div>
      </div>
    </section>
  );
}
