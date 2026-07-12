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
              className="flex h-[100px] w-[150px] shrink-0 flex-col items-start justify-between overflow-hidden rounded-2xl border border-[#EEF1F4] bg-white p-3 sm:h-[134px] sm:w-[223px] sm:p-4"
            >
              <Image
                src={`/icons/categories/${icon}.svg`}
                alt=""
                width={30}
                height={30}
                className="h-6 w-6 sm:h-[30px] sm:w-[30px]"
              />
              <span className="text-base leading-5 font-semibold tracking-[-0.04em] text-[#071827] sm:text-[22px] sm:leading-6">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
