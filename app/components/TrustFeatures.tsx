import { CircleCheck, Zap, Shield } from "lucide-react";

const FEATURES = [
  {
    icon: CircleCheck,
    title: "Verified Professionals",
    description:
      "Every professional is identity and document verified before joining Zikorra.",
  },
  {
    icon: Zap,
    title: "Simple Booking",
    description:
      "Request a service in minutes and get matched with the right professional.",
  },
  {
    icon: Shield,
    title: "Payment Protection",
    description: "Every payment is encrypted, documented, and easy to track.",
  },
];

export default function TrustFeatures() {
  return (
    <section className="bg-white px-6 py-16 sm:py-26">
      <div className="mx-auto max-w-[1240px] text-center">
        <h2 className="mx-auto max-w-2xl text-2xl leading-8 font-semibold tracking-[-0.03em] text-[#0B1220] sm:text-[32px] sm:leading-[40px]">
          Find trusted professionals, book with confidence, and stay informed
          every step of the way.
        </h2>

        <div className="mt-10 grid grid-cols-1 divide-y divide-[#EDEFF2] sm:mt-14 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="py-6 text-left first:pt-0 last:pb-0 sm:px-8 sm:py-0 sm:first:pl-0 sm:last:pr-0"
            >
              <Icon
                className="h-6 w-6 text-[#0B1220]"
                strokeWidth={1.75}
                aria-hidden
              />
              <h3 className="mt-3 text-base font-semibold text-[#0B1220]">
                {title}
              </h3>
              <p className="mt-1.5 text-sm leading-[22px] text-[#8A8A8A]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
