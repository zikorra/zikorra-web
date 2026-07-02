"use client";

import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

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
      className={`mx-auto flex max-w-md items-center gap-2 rounded-full border border-gray-200 bg-white p-1.5 pl-4 shadow-sm ${className}`}
    >
      <Mail className="h-4 w-4 shrink-0 text-gray-400" aria-hidden />
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="w-full min-w-0 flex-1 bg-transparent text-sm text-[#0b1220] placeholder:text-gray-400 focus:outline-none"
      />
      <button
        type="submit"
        className="flex shrink-0 items-center gap-1 rounded-full bg-brand px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
      >
        Join waitlist
        <ArrowRight className="h-4 w-4" aria-hidden />
      </button>
    </form>
  );
}
