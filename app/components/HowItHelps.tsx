import { BadgeCheck, CheckCircle2, Star } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";

function ArtisanCard() {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-4 sm:p-6">
      <div className="rounded-2xl bg-white p-5">
        <div className="flex items-center gap-3">
          <PlaceholderImage
            src="/images/how-it-helps/avatar-artisan.jpeg"
            alt="Chinedu Okafor, verified AC repair artisan"
            rounded="rounded-full"
            className="h-12 w-12 shrink-0"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-[#0b1220]">
                Chinedu Okafor
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-brand">
                <BadgeCheck className="h-3 w-3" aria-hidden />
                Verified
              </span>
            </div>
            <p className="text-xs text-gray-500">AC Repair · Lagos</p>
          </div>
        </div>

        <div className="mt-2 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
              aria-hidden
            />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          <div className="h-16 rounded-xl bg-gray-100" />
          <div className="h-16 rounded-xl bg-gray-100" />
          <div className="h-16 rounded-xl bg-gray-100" />
        </div>

        <div className="mt-4 space-y-2">
          <div className="h-2.5 w-full rounded-full bg-gray-100" />
          <div className="h-2.5 w-2/3 rounded-full bg-gray-100" />
        </div>
      </div>
    </div>
  );
}

function CustomerCard() {
  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-4 sm:p-6">
      <PlaceholderImage
        src="/images/how-it-helps/property-thumbnail.jpeg"
        alt="Property job site"
        rounded="rounded-xl"
        className="absolute top-4 right-4 h-14 w-14 sm:top-6 sm:right-6"
      />

      <div className="flex flex-col gap-3 pt-16 sm:pt-14">
        <div className="ml-auto flex max-w-[80%] items-start gap-2">
          <div className="rounded-2xl rounded-tr-sm bg-white px-4 py-2.5 text-sm text-[#0b1220]">
            Hi Tunde, please I need help with my AC. It stopped cooling this
            morning.
          </div>
          <PlaceholderImage
            src="/images/how-it-helps/avatar-customer.jpeg"
            alt="Customer"
            rounded="rounded-full"
            className="h-7 w-7 shrink-0"
          />
        </div>

        <div className="mr-auto flex max-w-[80%] items-start gap-2">
          <PlaceholderImage
            src="/images/how-it-helps/avatar-tunde.jpeg"
            alt="Tunde, verified professional"
            rounded="rounded-full"
            className="h-7 w-7 shrink-0"
          />
          <div className="rounded-2xl rounded-tl-sm bg-white px-4 py-2.5 text-sm text-[#0b1220]">
            I&apos;ve received the request. I&apos;ll inspect it and send a
            clear quote before starting.
          </div>
        </div>

        <div className="mt-2 flex justify-end">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#0b1220]">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden />
            AC repaired successfully
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItHelps() {
  return (
    <section className="bg-[#eef1f8] px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <span className="text-xs font-semibold tracking-widest text-brand">
          HOW ZIKORRA HELPS
        </span>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold tracking-tight text-[#0b1220] sm:text-4xl">
          One platform for the people who need work done and the
          professionals who do it.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-gray-500">
          Review labour, materials, and service costs before work begins, so
          everyone understands what is being paid for.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-8 text-left md:grid-cols-2">
          <div>
            <ArtisanCard />
            <h3 className="mt-6 text-lg font-semibold text-[#0b1220]">
              For Verified Artisans
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Receive real service requests, share clear quotations, update
              job progress, and build a trusted work history through every
              completed job.
            </p>
          </div>

          <div>
            <CustomerCard />
            <h3 className="mt-6 text-lg font-semibold text-[#0b1220]">
              For Customers &amp; Property Owners
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Request repairs, maintenance, inspections, and property care
              from verified professionals, with clearer pricing, documented
              progress, and better accountability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
