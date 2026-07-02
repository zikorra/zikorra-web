import Image from "next/image";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section className="bg-white px-6 pt-20 pb-16 text-center sm:pt-28 sm:pb-20">
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#FCFCFC] px-4 py-1.5 text-[15px] leading-6 font-medium text-black">
          <Image
            src="/icons/badge-icon.png"
            alt=""
            width={117}
            height={128}
            className="h-4 w-auto object-contain"
          />
          Nigeria&apos;s Managed Home &amp; Property Service Platform
        </div>

        <h1 className="mt-3 text-3xl font-semibold text-[#071827] leading-[62px] tracking-[-0.04em] sm:text-4xl md:text-5xl">
          Trusted home and property services, handled with accountability.
        </h1>

        <p className="mx-auto mt-3 max-w-[583px] text-sm leading-6 font-medium text-[#52616F] sm:text-base">
          Zikorra connects you with verified professionals for repairs,
          maintenance, inspections, and property care across Nigeria.
        </p>

        <WaitlistForm className="mt-8" />

        <p className="mt-4 text-xs font-medium text-[#6E6E6E] sm:text-sm max-w-[437px] mx-auto">
          Launching soon. Join early for updates, city availability, and
          priority access.
        </p>
      </div>
    </section>
  );
}
