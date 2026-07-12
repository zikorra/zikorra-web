import Image from "next/image";

const STEPS = [
  {
    image: "/images/how-it-works/step-1.jpg",
    alt: "Customer requesting a service from their phone",
  },
  {
    image: "/images/how-it-works/step-2.jpg",
    alt: "Verified professional carrying out the service",
  },
  {
    image: "/images/how-it-works/step-3.jpg",
    alt: "Secure payment on completion",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="text-2xl leading-8 font-semibold tracking-[-0.04em] text-black sm:text-[32px] sm:leading-9">
          How it works
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {STEPS.map(({ image, alt }) => (
            <div
              key={image}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#F1F1F1]"
            >
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
