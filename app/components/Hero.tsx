import { ShieldCheck } from "lucide-react";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  return (
    <section className="bg-white px-6 pt-20 pb-16 text-center sm:pt-28 sm:pb-20">
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-medium text-brand">
          <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
          Nigeria&apos;s Managed Home &amp; Property Service Platform
        </div>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#0b1220] sm:text-5xl md:text-6xl">
          Trusted home and property services, handled with accountability.
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base text-gray-500 sm:text-lg">
          Zikorra connects you with verified professionals for repairs,
          maintenance, inspections, and property care across Nigeria.
        </p>

        <WaitlistForm className="mt-8" />

        <p className="mt-4 text-xs text-gray-400">
          Launching soon. Join early for updates, city availability, and
          priority access.
        </p>
      </div>
    </section>
  );
}
