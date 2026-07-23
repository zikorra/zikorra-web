"use client";

import { useState } from "react";
import { ChevronRight, Contact } from "lucide-react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[0-9()\-\s]{7,}$/;

export default function WaitlistForm({
  className = "",
  formBg = "bg-[#EEF1F4]",
}: {
  className?: string;
  formBg?: string;
}) {
  const [contact, setContact] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;

    const value = contact.trim();
    if (!EMAIL_PATTERN.test(value) && !PHONE_PATTERN.test(value)) {
      setError("Enter a valid email address or phone number.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://ms-oauth2.onrender.com/auth/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value }),
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
        className=" flex max-w-md flex-col items-stretch gap-3 sm:flex-row sm:gap-0 sm:overflow-hidden sm:rounded-full"
      >
        <div
          className={`flex min-w-0 items-center gap-2 rounded-2xl px-4 py-3.5 sm:flex-1 sm:rounded-none sm:py-4 sm:pl-5 ${formBg}`}
        >
          <Contact className="h-4 w-4 shrink-0 text-[#8A8A8A]" aria-hidden />
          <input
            type="text"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter your email or phone number"
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
