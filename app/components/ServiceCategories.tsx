import Image from "next/image";

const CATEGORIES = [
  { icon: "cleaner", label: "Cleaner" },
  { icon: "electrician", label: "Electrician" },
  { icon: "plumber", label: "Plumber" },
  { icon: "carpenter", label: "Carpenter" },
  { icon: "painter", label: "Painter" },
  { icon: "ac-technician", label: "AC Technician" },
  { icon: "tiler", label: "Tiler" },
  { icon: "welder", label: "Welder" },
];

export default function ServiceCategories() {
  return (
    <section className="bg-[#F7F9FC] py-16 sm:py-20">
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="animate-marquee flex w-max gap-3 px-6">
          {[...CATEGORIES, ...CATEGORIES].map(({ icon, label }, index) => (
            <div
              key={`${label}-${index}`}
              className="flex h-[100px] w-[150px] shrink-0 flex-col items-start justify-between rounded-2xl border border-[#EEF1F4] bg-white p-4 sm:h-[134px] sm:w-[223px]"
            >
              <Image
                src={`/icons/categories/${icon}.svg`}
                alt=""
                width={30}
                height={30}
                className=""
              />
              <span className="text-[22px] leading-6 font-semibold tracking-[-0.04em] text-[#071827]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
