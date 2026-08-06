import Image from "next/image";

const FEATURES = [
  {
    icon: "/images/features/electrician.png",
    title: "Electrician",
    description:
      "Book trusted artisans for plumbing, electrical work, carpentry, painting, and more.",
  },
  {
    icon: "/images/features/cleaning.png",
    title: "Cleaning",
    description:
      "Get help with home cleaning, deep cleaning, and routine upkeep from trusted service professionals.",
  },
  {
    icon: "/images/features/property-care.png",
    title: "Property Care",
    description:
      "Request inspections, maintenance support, and trusted help for keeping your property in good condition.",
  },
];

export default function Features() {
  return (
    <section id="what-we-do" className="bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon, title, description }) => (
          <div
            key={title}
            className="relative min-h-[220px] overflow-hidden rounded-[28px] bg-[#FBFBFB] p-6 sm:min-h-[236px] sm:p-8"
          >
            <div className="max-w-[240px] pr-16 sm:pr-20">
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
              className="absolute top-1/2 right-5 h-20 w-20 -translate-y-1/2 object-contain sm:right-8 sm:h-24 sm:w-24"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
