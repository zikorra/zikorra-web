import Image from "next/image";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section className="bg-white px-6 pt-20 pb-16 text-center sm:pt-28 sm:pb-20">
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto inline-flex max-w-[280px] items-center gap-2 rounded-2xl bg-[#FCFCFC] px-4 py-2.5 text-xs leading-4 font-medium text-black sm:max-w-none sm:rounded-full sm:py-1.5 sm:leading-6 sm:text-[15px]">
          <Image
            src="/icons/badge-icon.png"
            alt=""
            width={117}
            height={128}
            className="h-5 w-auto shrink-0 object-contain sm:h-4"
          />
          Nigeria&apos;s Managed Home &amp; Property Service Platform
        </div>

        <h1 className="mt-3 text-3xl leading-[38px] font-semibold tracking-[-0.04em] text-[#071827] sm:text-4xl sm:leading-[46px] md:text-5xl md:leading-[62px]">
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
