"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, Contact } from "lucide-react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[0-9()\-\s]{7,}$/;

export default function WaitlistForm({
  className = "",
  formBg = "bg-[#EEF1F4]",
  centered = false,
  bordered = false,
  icon = "contact",
  variant = "default",
}: {
  className?: string;
  formBg?: string;
  centered?: boolean;
  bordered?: boolean;
  icon?: "contact" | "mail";
  variant?: "default" | "inset";
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

  const iconEl =
    icon === "mail" ? (
      <Image
        src="/icons/mail-icon.svg"
        alt=""
        width={18}
        height={18}
        className="h-4 w-4 shrink-0"
      />
    ) : (
      <Contact className="h-4 w-4 shrink-0 text-[#8A8A8A]" aria-hidden />
    );

  const input = (
    <input
      type="text"
      required
      value={contact}
      onChange={(e) => setContact(e.target.value)}
      placeholder="Enter your email or phone number"
      className="w-full min-w-0 flex-1 bg-transparent text-sm text-[#0b1220] placeholder:font-medium placeholder:text-[#A5A5A5] focus:outline-none sm:text-base"
    />
  );

  const submitButton = (className: string) => (
    <button
      type="submit"
      disabled={loading}
      className={`flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-[#005EEB] font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
    >
      {loading ? "Joining..." : "Join waitlist"}
      <ChevronRight className="h-4 w-4" aria-hidden />
    </button>
  );

  return (
    <div className={className}>
      {variant === "inset" ? (
        <form
          onSubmit={handleSubmit}
          className={`flex max-w-md flex-col gap-3 sm:flex-row sm:items-center sm:gap-2 sm:rounded-full sm:border sm:border-[#E7EAEE] sm:bg-white sm:py-1.5 sm:pr-1.5 sm:pl-5 ${centered ? "mx-auto" : ""}`}
        >
          <div className="flex min-w-0 items-center gap-2 rounded-2xl border border-[#E7EAEE] bg-white px-4 py-3.5 sm:flex-1 sm:border-0 sm:bg-transparent sm:p-0">
            {iconEl}
            {input}
          </div>
          {submitButton("px-5 py-3.5 text-sm sm:px-6 sm:py-3 sm:text-base")}
        </form>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={`flex max-w-md flex-col items-stretch gap-3 sm:flex-row sm:gap-0 sm:overflow-hidden sm:rounded-full ${bordered ? "sm:border sm:border-[#E7EAEE]" : ""} ${centered ? "mx-auto" : ""}`}
        >
          <div
            className={`flex min-w-0 items-center gap-2 rounded-2xl px-4 py-3.5 sm:flex-1 sm:rounded-none sm:py-4 sm:pl-5 ${bordered ? "border border-[#E7EAEE] sm:border-0" : ""} ${formBg}`}
          >
            {iconEl}
            {input}
          </div>
          {submitButton("px-6 py-3.5 text-sm sm:rounded-none sm:py-4 sm:text-base")}
        </form>
      )}
      {error && (
        <p className="mx-auto mt-2 max-w-md text-center text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
