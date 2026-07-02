import PlaceholderImage from "./PlaceholderImage";

const PHOTOS = [
  { file: "hero-strip-1.jpg", alt: "Zikorra professional on site" },
  { file: "hero-strip-2.jpg", alt: "Zikorra artisan at work" },
  { file: "hero-strip-3.jpg", alt: "Zikorra service team" },
  { file: "hero-strip-4.jpg", alt: "Zikorra site inspection" },
];

export default function ServiceStrip() {
  return (
    <section className="w-full overflow-hidden ">
      <div className="-ml-[100px] flex h-[220px] w-[calc(100%+200px)] gap-4 md:-ml-[160px] md:h-[320px] md:w-[calc(100%+320px)] md:gap-6">
        <PlaceholderImage
          src={`/images/hero/${PHOTOS[0].file}`}
          alt={PHOTOS[0].alt}
          rounded="rounded-[20px]"
          className="min-w-[160px] flex-1"
        />
        <PlaceholderImage
          src={`/images/hero/${PHOTOS[1].file}`}
          alt={PHOTOS[1].alt}
          rounded="rounded-[20px]"
          className="min-w-[160px] flex-1"
        />

        <div className="flex min-w-[220px] flex-1 flex-col justify-between bg-white p-6 text-left">
          <span className="text-xs font-semibold tracking-wide text-gray-500">
            SERVICE FLOW
          </span>
          <div className="my-4 flex-1 rounded-xl bg-gray-100" />
          <p className="text-sm text-gray-600">
            Request a service, get matched with a verified professional,
            approve the quote, track progress, and confirm completion before
            payment is released.
          </p>
        </div>

        <PlaceholderImage
          src={`/images/hero/${PHOTOS[2].file}`}
          alt={PHOTOS[2].alt}
          rounded="rounded-[20px]"
          className="min-w-[160px] flex-1"
        />
        <PlaceholderImage
          src={`/images/hero/${PHOTOS[3].file}`}
          alt={PHOTOS[3].alt}
          rounded="rounded-[20px]"
          className="min-w-[160px] flex-1"
        />
      </div>
    </section>
  );
}
