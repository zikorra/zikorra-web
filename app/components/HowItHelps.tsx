import PlaceholderImage from "./PlaceholderImage";

export default function HowItHelps() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-[1240px] text-center">
        <span className="text-base leading-[22px] font-medium tracking-widest text-[#52616F]">
          HOW ZIKORRA HELPS
        </span>
        <h2 className="mx-auto mt-3 text-2xl leading-[44px] font-semibold tracking-[-0.04em] text-[#071827] sm:text-3xl md:text-[40px]">
          One platform for the people who need work done and the
          professionals who do it.
        </h2>
        <p className="mx-auto mt-4 max-w-[590px] text-base leading-[22px] font-medium text-[#52616F]">
          Review labour, materials, and service costs before work begins, so
          everyone understands what is being paid for.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-8 text-left md:grid-cols-2">
          <div>
            <PlaceholderImage
              src="/images/how-it-helps/artisan-card.png"
              alt="Zikorra profile for a verified artisan, showing rating and job history"
              rounded="rounded-3xl"
              className="aspect-[6/5] w-full"
              sizes="(min-width: 768px) 600px, 100vw"
              fit="contain"
            />
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
            <PlaceholderImage
              src="/images/how-it-helps/customer-card.png"
              alt="Zikorra chat between a customer and a verified professional coordinating a repair"
              rounded="rounded-3xl"
              className="aspect-[6/5] w-full"
              sizes="(min-width: 768px) 600px, 100vw"
              fit="contain"
            />
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
