"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const FAQS = [
  {
    question: "Is Zikorra available now?",
    answer:
      "Zikorra is a technology-powered platform that connects customers with trained, verified, and trusted artisans and skilled professionals across Nigeria. Whether you need an electrician, plumber, AC technician, cleaner, beautician, painter, or other service provider, Zikorra makes hiring safer, easier, and more reliable.",
  },
  {
    question: "What is Zikorra?",
    answer:
      "Zikorra is Nigeria's managed home and property service platform, connecting you with verified artisans for repairs, maintenance, inspections, and property care — with clear pricing and documented progress from start to finish.",
  },
  {
    question: "How is Zikorra different from hiring artisans directly?",
    answer:
      "Every artisan on Zikorra is verified before they can take a job, and every request goes through clear quotes, tracked progress, and secure in-app payment — so you're not relying on word of mouth or hoping for the best.",
  },
  {
    question: "Are your artisans verified?",
    answer:
      "Yes. Every artisan is screened and verified before joining the platform, and their track record builds with every completed job.",
  },
  {
    question: "What services can I book?",
    answer:
      "Cleaning, electrical work, plumbing, carpentry, painting, AC servicing, tiling, welding, and more — Zikorra covers the everyday home and property needs across Nigeria.",
  },
  {
    question: "How do I book a service?",
    answer:
      "Describe the job you need done, and Zikorra matches you with a verified professional nearby who can quote and schedule the work.",
  },
  {
    question: "How do I know the right technician is arriving?",
    answer:
      "You'll see your artisan's verified profile, rating, and job history before they arrive, so you always know who's coming and what they specialize in.",
  },
  {
    question: "Is my payment safe?",
    answer:
      "Yes. Payments are made securely through Zikorra and only released to the artisan once you confirm the job is complete.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#F1F5FB] px-6 py-24">
      <div className="mx-auto max-w-[720px] text-center">
        <h2 className="text-3xl leading-[44px] font-semibold tracking-[-0.04em] text-[#071827] sm:text-4xl">
          Have questions? Find answers
        </h2>

        <div className="mt-10 space-y-3 text-left">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-xl bg-white px-5 py-4 shadow-sm"
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
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-brand transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" aria-hidden />
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-3 text-base leading-[22px] font-medium text-[#5F6F6B]">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#071827] shadow-sm transition-colors hover:bg-blue-50"
        >
          More questions
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </section>
  );
}
