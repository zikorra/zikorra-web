import { Manrope } from "next/font/google";
import WaitlistForm from "./WaitlistForm";

const manrope = Manrope({ subsets: ["latin"] });

export default function CtaSection() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="relative z-0 mx-auto max-w-[1339px] overflow-hidden rounded-3xl bg-[#005EEB] px-6 pt-16 pb-52 text-center sm:px-12 sm:pb-40">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[721px] w-[631px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black blur-[894.2px]"
        />

        <h2 className="text-2xl leading-8 font-semibold tracking-[-0.04em] text-white max-w-[408px] mx-auto sm:text-3xl sm:leading-9 md:text-[40px] md:leading-[44px]">
          Be among the first to use Zikorra.
        </h2>
        <p className="mx-auto mt-3 max-w-[372px] text-base leading-[22px] font-medium text-white">
          Join the waitlist for launch updates, early access, and
          availability in your city.
        </p>

        <WaitlistForm className="mt-8" formBg="bg-[#F8FAFC]" />

        <div className="absolute right-0 bottom-0 flex flex-col items-start gap-8 rounded-tl-3xl bg-white px-8 py-8 text-left sm:flex-row sm:gap-16">
          <div>
            <p
              className={`text-base leading-[120%] font-bold text-[#1F2933] sm:text-lg ${manrope.className}`}
            >
              Contact us
            </p>
            <p className="text-base leading-[22px] font-medium text-[#5F6F6B]">
              +1 (404) 771-4182
            </p>
          </div>
          <div>
            <p
              className={`text-base leading-[120%] font-bold text-[#1F2933] sm:text-lg ${manrope.className}`}
            >
              Send an email
            </p>
            <p className="text-base leading-[22px] font-medium text-[#5F6F6B]">
              support@zikorra.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
