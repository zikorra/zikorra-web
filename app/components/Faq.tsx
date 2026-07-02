"use client";

import { useState } from "react";
import { Manrope } from "next/font/google";
import { ChevronDown, Mail } from "lucide-react";

const manrope = Manrope({ subsets: ["latin"] });

const FAQS = [
  {
    question: "What is Zikorra?",
    answer:
      "Zikorra is a managed home and property service platform that connects you with verified professionals for repairs, maintenance, inspections, and property care across Nigeria.",
  },
  {
    question: "Is Zikorra available now?",
    answer:
      "Zikorra is launching soon. Join the waitlist to get early updates, city availability, and priority access when we go live.",
  },
  {
    question: "Who is Zikorra for?",
    answer:
      "Zikorra is for homeowners, tenants, and property managers who need reliable work done, and for verified artisans and service providers looking for real, well-documented jobs.",
  },
  {
    question: "How will I request a service?",
    answer:
      "You'll describe the job you need done, and Zikorra will match you with a verified professional nearby who can quote and schedule the work.",
  },
  {
    question: "How will Zikorra choose the artisan for my job?",
    answer:
      "Artisans are screened and verified before joining the platform, and matched to your job based on their skill, location, and track record.",
  },
  {
    question: "Will I know the cost before work starts?",
    answer:
      "Yes. You'll review a clear quote covering labour, materials, and service costs before any work begins, and payment is only released once you confirm completion.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F1F5FB] px-6 py-24">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex h-full flex-col">
          <h2 className="text-3xl leading-[54px] font-semibold tracking-tight text-[#1F2933] sm:text-4xl md:text-5xl">
            Questions people may have before Zikorra launches.
          </h2>

          <div className="mt-10 md:mt-auto">
            <p
              className={`text-2xl leading-[120%] font-bold text-[#1F2933] ${manrope.className}`}
            >
              Still have questions?
            </p>
            <p className="mt-2 max-w-xs text-base leading-[22px] font-medium text-[#5F6F6B]">
              Reach out to the Zikorra team and we&apos;ll help you understand
              how the platform will work for customers, artisans, property
              owners, and partners.
            </p>
            <a
              href="mailto:zikorra@gmail.com"
              className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-[#015FEB] px-5 py-4 text-base leading-[22px] font-bold text-white transition-colors hover:bg-black"
            >
              Send email
            </a>
          </div>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-xl bg-[#DFE9F7] px-5 py-4"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-base leading-[120%] font-medium text-[#081929]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[#081929] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 text-base leading-[22px] font-medium text-[#081929]">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
