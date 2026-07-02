"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function WaitlistForm({
  className = "",
}: {
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={`mx-auto flex max-w-md items-center justify-center rounded-full border border-blue-200 bg-blue-50 px-6 py-3 text-sm font-medium text-blue-700 ${className}`}
      >
        You&apos;re on the list — we&apos;ll be in touch.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`mx-auto flex max-w-md items-stretch overflow-hidden rounded-full bg-[#EEF1F4] ${className}`}
    >
      <div className="flex min-w-0 flex-1 items-center gap-2 pl-5">
        <Image
          src="/icons/mail-icon.svg"
          alt=""
          width={20}
          height={20}
          className="h-4 w-4 shrink-0 object-contain"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="w-full min-w-0 flex-1 bg-transparent py-4 text-sm text-[#0b1220] placeholder:font-medium placeholder:text-[#A5A5A5] focus:outline-none sm:text-base"
        />
      </div>
      <button
        type="submit"
        className="flex shrink-0 items-center gap-1.5 bg-[#005EEB] px-6 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:text-base"
      >
        Join waitlist
        <ChevronRight className="h-4 w-4" aria-hidden />
      </button>
    </form>
  );
}
