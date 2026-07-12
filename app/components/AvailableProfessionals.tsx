import Image from "next/image";
import { Sparkles, Zap, Scissors } from "lucide-react";

const PROFESSIONALS = [
  {
    image: "/images/professionals/cleaning.jpg",
    icon: Sparkles,
    title: "Cleaning",
    description: "Home cleaning, deep cleaning, move-in & move-out cleaning",
  },
  {
    image: "/images/professionals/electrician-1.jpg",
    icon: Zap,
    title: "Electrician",
    description: "Wiring, lighting, socket repairs, inspections & more",
  },
  {
    image: "/images/professionals/electrician-2.jpg",
    icon: Zap,
    title: "Electrician",
    description: "Wiring, lighting, socket repairs, inspections & more",
  },
  {
    image: "/images/professionals/hairdresser.jpg",
    icon: Scissors,
    title: "Hair dresser",
    description: "Braids, weaves, haircuts, styling & more",
  },
];

export default function AvailableProfessionals() {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-10">
      <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-4">
          {PROFESSIONALS.map(
            ({ image, icon: Icon, title, description }, index) => (
              <div
                key={`${title}-${index}`}
                className="relative aspect-[4/5] w-[80%] shrink-0 overflow-hidden rounded-2xl sm:w-[calc(25%+2rem)]"
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 640px) 30vw, 80vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <span className="absolute top-4 right-4 rounded-full bg-[#0B2C99] px-3 py-1.5 text-xs font-semibold text-white">
                  Available Online
                </span>

                <div className="absolute right-4 bottom-4 left-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                    <Icon className="h-4 w-4 text-[#0b1220]" aria-hidden />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-white/85">
                    {description}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
