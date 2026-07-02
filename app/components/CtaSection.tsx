import { Manrope } from "next/font/google";
import WaitlistForm from "./WaitlistForm";

const manrope = Manrope({ subsets: ["latin"] });

export default function CtaSection() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="relative mx-auto max-w-[1339px] overflow-hidden rounded-3xl bg-[#F1F5FB] px-6 pt-16 pb-52 text-center sm:px-12 sm:pb-52">
        <h2 className="text-2xl leading-[44px] font-semibold tracking-[-0.04em] text-[#071827] sm:text-3xl md:text-[40px]">
          Be among the first to use Zikorra.
        </h2>
        <p className="mx-auto mt-3 max-w-[590px] text-base leading-[22px] font-medium text-[#52616F]">
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
              +234 237 3829
            </p>
          </div>
          <div>
            <p
              className={`text-base leading-[120%] font-bold text-[#1F2933] sm:text-lg ${manrope.className}`}
            >
              Send an email
            </p>
            <p className="text-base leading-[22px] font-medium text-[#5F6F6B]">
              zikorra@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
