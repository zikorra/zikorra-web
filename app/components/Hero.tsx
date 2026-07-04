import Image from "next/image";
import WaitlistForm from "./WaitlistForm";
import HeroSlideshow from "./HeroSlideshow";

const CATEGORIES = [
  { icon: "plumber", label: "Plumbing" },
  { icon: "electrician", label: "Electrical" },
  { icon: "painter", label: "Painting" },
  { icon: "carpenter", label: "Carpentry" },
];

export default function Hero() {
  return (
    <section className="px-6 pt-6 pb-16">
      <div className="relative mx-auto flex min-h-[560px] max-w-[1240px] flex-col justify-around overflow-hidden rounded-[32px] p-6 sm:min-h-[728px] sm:p-10 md:p-20">
        <HeroSlideshow />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

        <div className="relative max-w-xl">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-black blur-[894.2px] "
          />
          <div className="inline-flex items-center gap-2 rounded-2xl bg-[#FCFCFC] px-4 py-2.5 text-xs leading-4 font-medium text-black sm:rounded-full sm:py-1.5 sm:leading-6 sm:text-[15px]">
            <Image
              src="/icons/badge-icon.png"
              alt=""
              width={117}
              height={128}
              className="h-5 w-auto shrink-0 object-contain sm:h-4"
            />
            Nigeria&apos;s Managed Home &amp; Property Service Platform
          </div>

          <h1 className="mt-4 max-w-[583px] text-3xl leading-[38px] font-semibold tracking-[-0.04em] text-[#DDDDDD] sm:text-4xl sm:leading-[46px] md:text-5xl md:leading-[62px]">
            Trusted home and property services, handled with accountability.
          </h1>

          <p className="mt-3 text-base leading-6 font-medium text-white">
            Zikorra connects you with verified professionals for repairs,
            maintenance, inspections, and property care across Nigeria.
          </p>

          <WaitlistForm className="mt-6 !mx-0" />

          <p className="my-10 max-w-[437px] text-sm font-medium text-white">
            Launching soon. Join early for updates, city availability, and
            priority access.
          </p>
        </div>

        <div className=" flex flex-wrap gap-2 sm:gap-3">
          {CATEGORIES.map(({ icon, label }) => (
            <div
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-sm font-medium text-black"
            >
              <Image
                src={`/icons/categories/${icon}.svg`}
                alt=""
                width={14}
                height={14}
                className="h-3.5 w-3.5 brightness-0"
              />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
