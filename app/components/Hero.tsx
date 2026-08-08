import Image from "next/image";
import WaitlistForm from "./WaitlistForm";
import HeroSlideshow from "./HeroSlideshow";
import HeroNav from "./HeroNav";
import TestimonialCard from "./TestimonialCard";
import { CATEGORIES } from "./categoriesData";

const QUICK_CATEGORY_LABELS = ["Plumber", "Electrician", "Cleaner", "Carpenter"];
const QUICK_CATEGORIES = QUICK_CATEGORY_LABELS.map((label) =>
  CATEGORIES.find((category) => category.label === label)!,
);

const GRID_CATEGORY_LABELS = ["Cleaner", "Electrician", "Plumber", "Carpenter"];
const GRID_CATEGORIES = GRID_CATEGORY_LABELS.map((label) =>
  CATEGORIES.find((category) => category.label === label)!,
);

export default function Hero() {
  return (
    <section className="bg-white">
      <HeroNav />

      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 md:px-20">
        <div className="flex flex-col items-center pt-10 pb-8 text-center sm:pt-16 sm:pb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E7EAEE] bg-white px-4 py-1.5 text-xs leading-4 font-medium text-[#0B1220] sm:text-[15px] sm:leading-6">
            <Image
              src="/icons/badge-icon.png"
              alt=""
              width={117}
              height={128}
              className="h-4 w-auto shrink-0 object-contain"
            />
            Nigeria&apos;s Managed Home &amp; Property Service Platform
          </div>

          <h1 className="mt-4 max-w-[640px] text-[32px] leading-[38px] font-semibold tracking-[-0.04em] text-[#0B1220] sm:mt-5 sm:text-5xl sm:leading-[56px] md:text-[60px] md:leading-[62px]">
            Trusted professionals for every home service.
          </h1>

          <p className="mt-3 max-w-md text-sm leading-5 font-medium text-[#5B6472] sm:mt-4 sm:max-w-lg sm:text-base sm:leading-6">
            Zikorra connects you with verified professionals for repairs,
            maintenance, inspections, and property care across Nigeria.
          </p>

          <WaitlistForm
            className="mt-5 sm:mt-6"
            formBg="bg-white"
            centered
            bordered
            icon="mail"
          />

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:mt-8 sm:gap-x-9">
            {QUICK_CATEGORIES.map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 text-sm font-medium text-[#0B1220]"
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

        <div className="relative isolate mt-2 aspect-[16/8] overflow-hidden rounded-[20px] sm:mt-4 sm:rounded-[28px]">
          <HeroSlideshow />
          <TestimonialCard className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8" />
        </div>

        <div className="grid grid-cols-2 gap-2.5 py-6 sm:grid-cols-4 sm:gap-3 sm:py-8">
          {GRID_CATEGORIES.map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-2xl border border-[#EEF1F4] bg-[#FAFBFC] px-3.5 py-3.5 sm:px-4 sm:py-4"
            >
              <Image
                src={`/icons/categories/${icon}.svg`}
                alt=""
                width={30}
                height={30}
                className="h-5 w-5 shrink-0"
              />
              <span className="text-sm font-semibold text-[#0B1220] sm:text-base">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
