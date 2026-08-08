import { BadgeCheck, Star, User } from "lucide-react";

export default function TestimonialCard({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`w-[calc(100%-2rem)] max-w-[380px] rounded-2xl bg-white p-4 shadow-xl sm:p-5 ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF1F4] text-[#8A8A8A] sm:h-10 sm:w-10">
          <User className="h-4.5 w-4.5" aria-hidden />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold text-[#0B1220]">
              Chinedu Okafor
            </span>
            <BadgeCheck
              className="h-3.5 w-3.5 fill-[#005EEB] text-white"
              aria-hidden
            />
          </div>
          <p className="text-xs text-[#8A8A8A]">Cleaner &middot; Lagos</p>
        </div>
      </div>

      <div className="mt-2.5 flex gap-1" aria-hidden>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="h-4 w-4 fill-[#C6D8FA] text-[#C6D8FA]"
          />
        ))}
      </div>

      <div className="mt-3.5 flex gap-2">
        <div className="h-10 flex-1 rounded-xl bg-[#EEF1F4]" />
        <div className="h-10 flex-1 rounded-xl bg-[#EEF1F4]" />
        <div className="h-10 flex-1 rounded-xl bg-[#EEF1F4]" />
      </div>

      <div className="mt-3.5 h-3 w-2/5 rounded-full bg-[#EEF1F4]" />

      <div className="mt-3 space-y-2">
        <div className="h-8 rounded-lg bg-[#EEF1F4]" />
        <div className="h-8 rounded-lg bg-[#EEF1F4]" />
      </div>
    </div>
  );
}
