import {
  Fan,
  Flame,
  Grid3x3,
  Hammer,
  PaintRoller,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";

const CATEGORIES = [
  { icon: Sparkles, label: "Cleaner" },
  { icon: Zap, label: "Electrician" },
  { icon: Wrench, label: "Plumber" },
  { icon: Hammer, label: "Carpenter" },
  { icon: PaintRoller, label: "Painter" },
  { icon: Fan, label: "AC Technician" },
  { icon: Grid3x3, label: "Tiler" },
  { icon: Flame, label: "Welder" },
];

export default function ServiceCategories() {
  return (
    <section className="bg-[#F7F9FC] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="text-2xl font-semibold text-[#071827] sm:text-3xl">
          Find trusted artisans for every home and property need
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {CATEGORIES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-start gap-3 rounded-2xl bg-white p-5 shadow-sm"
            >
              <Icon className="h-7 w-7 text-brand" aria-hidden />
              <span className="font-medium text-[#071827]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
