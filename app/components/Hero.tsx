import Image from "next/image";
import { Hammer, PaintRoller, Wrench, Zap } from "lucide-react";
import WaitlistForm from "./WaitlistForm";
import HeroSlideshow from "./HeroSlideshow";

const CATEGORIES = [
  { icon: Wrench, label: "Plumbing" },
  { icon: Zap, label: "Electrical" },
  { icon: PaintRoller, label: "Painting" },
  { icon: Hammer, label: "Carpentry" },
];

export default function Hero() {
  return (
    <section className="b px-6 pt-6 pb-16">
      <div className="relative mx-auto flex min-h-[560px] max-w-[1240px] flex-col justify-between overflow-hidden rounded-[32px] b p-6 sm:min-h-[620px] sm:p-10 md:p-14">
        <HeroSlideshow />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

        <div className="max-w-xl">
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

          <h1 className="mt-4 text-3xl leading-[38px] font-semibold tracking-[-0.04em] text-white sm:text-4xl sm:leading-[46px] md:text-5xl md:leading-[62px]">
            Trusted home and property services, handled with accountability.
          </h1>

          <p className="mt-3 text-sm leading-6 font-medium text-white/80 sm:text-base">
            Zikorra connects you with verified professionals for repairs,
            maintenance, inspections, and property care across Nigeria.
          </p>

          <WaitlistForm className="mt-6 !mx-0" />

          <p className="mt-4 max-w-[437px] text-xs font-medium text-white/70 sm:text-sm">
            Launching soon. Join early for updates, city availability, and
            priority access.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
          {CATEGORIES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-2 text-xs font-medium text-[#0b1220] backdrop-blur-sm sm:text-sm"
            >
              <Icon className="h-3.5 w-3.5 text-brand" aria-hidden />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
