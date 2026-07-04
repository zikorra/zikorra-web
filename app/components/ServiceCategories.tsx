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
    <section className="bg-[#F7F9FC] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="text-2xl leading-8 font-semibold tracking-[-0.04em] text-black sm:text-[32px] sm:leading-9 xl:leading-[62px]">
          Find trusted artisans for every home and property need
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {CATEGORIES.map(({ icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-start gap-3 rounded-2xl bg-white p-5 shadow-sm"
            >
              <Image
                src={`/icons/categories/${icon}.svg`}
                alt=""
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <span className="text-[22px] leading-6 font-semibold tracking-[-0.04em] text-[#071827] sm:leading-7 xl:leading-[62px]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
