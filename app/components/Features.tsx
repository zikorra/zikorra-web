import Image from "next/image";

const FEATURES = [
  {
    icon: "/images/features/electrician.png",
    title: "Electrician",
    description:
      "Book trusted electricians for wiring, lighting installations, socket repairs, and inspections.",
  },
  {
    icon: "/images/features/plumber.png",
    title: "Plumber",
    description:
      "Request a plumber for leaks, blocked drains, pipe repairs, installations, and more.",
  },
  {
    icon: "/images/features/cleaning.png",
    title: "Cleaning",
    description:
      "Get help with home cleaning, deep cleaning, and routine upkeep from trusted service professionals.",
  },
];

export default function Features() {
  return (
    <section id="what-we-do" className="bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-5 sm:flex-row">
        {FEATURES.map(({ icon, title, description }) => (
          <div
            key={title}
            className="flex flex-1 items-center justify-between gap-4 overflow-hidden rounded-[20px] bg-[#FBFBFB] p-4 sm:p-8"
          >
            <div className="max-w-[240px]">
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#071827] sm:text-xl">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-[22px] font-medium text-[#52616F]">
                {description}
              </p>
            </div>
            <Image
              src={icon}
              alt=""
              width={96}
              height={96}
              className="h-20 w-20 shrink-0 object-contain sm:h-24 sm:w-24"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
