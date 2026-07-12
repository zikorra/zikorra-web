import Image from "next/image";
import WaitlistForm from "./WaitlistForm";
import HeroSlideshow from "./HeroSlideshow";
import HeroNav from "./HeroNav";

const CATEGORIES = [
  { icon: "plumber", label: "Plumbing" },
  { icon: "electrician", label: "Electrical" },
  { icon: "painter", label: "Painting" },
  { icon: "carpenter", label: "Carpentry" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-between overflow-hidden px-6 pt-5 pb-6 sm:px-10 sm:pt-6 sm:pb-10 md:px-20 md:pt-8 md:pb-20">
      <HeroSlideshow />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

      <HeroNav />

      <div className="mx-auto flex w-full max-w-[1240px] flex-1 flex-col justify-around">
        <div className="relative max-w-xl">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-black blur-[894.2px] "
          />
          <div className="inline-flex items-center gap-2 rounded-2xl bg-[#FCFCFC] px-4 py-2 text-xs leading-4 font-medium text-black sm:rounded-full sm:py-1.5 sm:leading-6 sm:text-[15px]">
            <Image
              src="/icons/badge-icon.png"
              alt=""
              width={117}
              height={128}
              className="h-5 w-auto shrink-0 object-contain sm:h-4"
            />
            Nigeria&apos;s Managed Home &amp; Property Service Platform
          </div>

          <h1 className="mt-3 max-w-[583px] text-[26px] leading-[32px] font-semibold tracking-[-0.04em] text-[#DDDDDD] sm:mt-4 sm:text-4xl sm:leading-[46px] md:text-5xl md:leading-[62px]">
            Trusted home and property services, handled with accountability.
          </h1>

          <p className="mt-2 text-sm leading-5 font-medium text-white sm:mt-3 sm:text-base sm:leading-6">
            Zikorra connects you with verified professionals for repairs,
            maintenance, inspections, and property care across Nigeria.
          </p>

          <WaitlistForm className="mt-4 !mx-0 sm:mt-6" />

          <p className="my-4 max-w-[437px] text-sm font-medium text-white sm:my-10">
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
