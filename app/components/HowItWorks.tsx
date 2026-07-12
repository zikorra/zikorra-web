import Image from "next/image";

const STEPS = [
  {
    image: "/images/how-it-works/step-1.jpg",
    alt: "Customer requesting a service from their phone",
    title: "Tell us what you need",
  },
  {
    image: "/images/how-it-works/step-2.jpg",
    alt: "Verified professional carrying out the service",
    title: "Get trusted artisans",
  },
  {
    image: "/images/how-it-works/step-3.jpg",
    alt: "Secure payment on completion",
    title: "Track and pay safely",
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
          {STEPS.map(({ image, alt, title }) => (
            <div
              key={image}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#F1F1F1]"
            >
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100">
                <span className="px-6 text-center text-lg font-semibold text-white sm:text-xl">
                  {title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
