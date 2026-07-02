import { UserCheck, FileText, ClipboardCheck } from "lucide-react";

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
    icon: ClipboardCheck,
    title: "Documented Progress",
    description:
      "Follow each job with progress updates, photos, videos, and records that keep the work clear from start to finish.",
  },
];

export default function Features() {
  return (
    <section className="border-b border-gray-100 bg-white px-6 py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-3">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <div key={title}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#0b1220]">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
