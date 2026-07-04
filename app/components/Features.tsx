import { UserCheck, FileText, ShieldCheck } from "lucide-react";

const FEATURES = [
  {
    icon: UserCheck,
    title: "Verified Professionals",
    description:
      "Connect with screened artisans and service providers for repairs, maintenance, inspections, and property care.",
  },
  {
    icon: FileText,
    title: "Clear Service Quotes",
    description:
      "Review labour, materials, and service costs before work begins, so everyone understands what is being paid for.",
  },
  {
    icon: ShieldCheck,
    title: "Secure In-App Payments",
    description:
      "Make and receive payments safely through Zikorra, with every transaction recorded clearly inside the system.",
  },
];

export default function Features() {
  return (
    <section
      id="what-we-do"
      className="border-b border-[#E5E5E5] bg-white px-6 py-16 sm:py-24 md:py-40"
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 md:grid-cols-3">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <div key={title}>
            <div className="flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-brand text-white">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="mt-4 text-xl leading-7 font-semibold tracking-[-0.04em] text-[#071827] sm:text-2xl sm:leading-8 md:text-3xl md:leading-9 lg:leading-[62px]">
              {title}
            </h3>
            <p className="mt-2 text-base leading-[22px] font-medium text-[#52616F]">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
