"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function WaitlistForm({
  className = "",
  formBg = "bg-[#EEF1F4]",
}: {
  className?: string;
  formBg?: string;
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || loading) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://ms-oauth2.onrender.com/auth/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed to join waitlist");

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-md flex-col items-stretch gap-3 sm:flex-row sm:gap-0 sm:overflow-hidden sm:rounded-full"
      >
        <div
          className={`flex min-w-0 items-center gap-2 rounded-2xl px-4 py-3.5 sm:flex-1 sm:rounded-none sm:py-4 sm:pl-5 ${formBg}`}
        >
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
            className="w-full min-w-0 flex-1 bg-transparent text-sm text-[#0b1220] placeholder:font-medium placeholder:text-[#A5A5A5] focus:outline-none sm:text-base"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-[#005EEB] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 sm:rounded-none sm:py-4 sm:text-base"
        >
          {loading ? "Joining..." : "Join waitlist"}
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>
      </form>
      {error && (
        <p className="mx-auto mt-2 max-w-md text-center text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
