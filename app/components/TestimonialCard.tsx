import { BadgeCheck, Star, User } from "lucide-react";

export default function TestimonialCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`w-[calc(100%-2rem)] max-w-[380px] rounded-xl bg-white p-3 shadow-xl sm:rounded-2xl sm:p-5 ${className}`}
    >
      <div className="flex items-center gap-2 sm:gap-2.5">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF1F4] text-[#8A8A8A] sm:h-10 sm:w-10">
          <User className="h-4 w-4 sm:h-4.5 sm:w-4.5" aria-hidden />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="text-xs font-semibold text-[#0B1220] sm:text-sm">
              Chinedu Okafor
            </span>
            <BadgeCheck
              className="h-3 w-3 fill-[#005EEB] text-white sm:h-3.5 sm:w-3.5"
              aria-hidden
            />
          </div>
          <p className="text-[11px] text-[#8A8A8A] sm:text-xs">
            Cleaner &middot; Lagos
          </p>
        </div>
      </div>

      <div className="mt-2 flex gap-1 sm:mt-2.5" aria-hidden>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-3 w-3 fill-[#C6D8FA] text-[#C6D8FA] sm:h-4 sm:w-4"
          />
        ))}
      </div>

      <div className="mt-2.5 flex gap-1.5 sm:mt-3.5 sm:gap-2">
        <div className="h-7 flex-1 rounded-lg bg-[#EEF1F4] sm:h-10 sm:rounded-xl" />
        <div className="h-7 flex-1 rounded-lg bg-[#EEF1F4] sm:h-10 sm:rounded-xl" />
        <div className="h-7 flex-1 rounded-lg bg-[#EEF1F4] sm:h-10 sm:rounded-xl" />
      </div>

      <div className="mt-2.5 h-2.5 w-2/5 rounded-full bg-[#EEF1F4] sm:mt-3.5 sm:h-3" />

      <div className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2">
        <div className="h-6 rounded-md bg-[#EEF1F4] sm:h-8 sm:rounded-lg" />
        <div className="h-6 rounded-md bg-[#EEF1F4] sm:h-8 sm:rounded-lg" />
      </div>
    </div>
  );
}
