"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, Minus, Plus } from "lucide-react";
import { FAQ_CATEGORIES } from "./faqData";

const ALL_FAQS = FAQ_CATEGORIES.flatMap((category) => category.items);
const DEFAULT_COUNT = 8;

export default function Faq() {
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const visibleFaqs = showAll ? ALL_FAQS : ALL_FAQS.slice(0, DEFAULT_COUNT);

  return (
    <section id="faq" className="bg-[#F1F5FB] px-6 py-24">
      <div className="mx-auto max-w-[820px] text-center">
        <h2 className="text-3xl leading-[44px] font-semibold tracking-[-0.04em] text-[#071827] sm:text-4xl">
          Have questions? Find answers
        </h2>

        <div className="mt-10 divide-y divide-[#E2E8F0] text-left">
          {visibleFaqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`py-5 first:pt-0 last:pb-0 ${
                  index >= DEFAULT_COUNT ? "animate-[faq-reveal_0.4s_ease-out]" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-start justify-between gap-4 text-left"
                >
                  <span className="text-base leading-[120%] font-medium text-[#081929]">
                    {item.question}
                  </span>
                  <span className="relative mt-0.5 h-4 w-4 shrink-0 text-brand">
                    <Plus
                      className={`absolute inset-0 h-4 w-4 transition-opacity duration-200 ${
                        isOpen ? "opacity-0" : "opacity-100"
                      }`}
                      aria-hidden
                    />
                    <Minus
                      className={`absolute inset-0 h-4 w-4 transition-opacity duration-200 ${
                        isOpen ? "opacity-100" : "opacity-0"
                      }`}
                      aria-hidden
                    />
                  </span>
                </button>

                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="mt-3 space-y-2 text-base leading-[22px] font-medium text-[#5F6F6B]">
                      {item.blocks.map((block, blockIndex) =>
                        block.type === "p" ? (
                          <p key={blockIndex}>{block.text}</p>
                        ) : (
                          <ul
                            key={blockIndex}
                            className="list-disc space-y-1 pl-5"
                          >
                            {block.items.map((li) => (
                              <li key={li}>{li}</li>
                            ))}
                          </ul>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#071827] shadow-sm transition-colors hover:bg-blue-50"
        >
          {showAll ? "View less" : "More questions"}
          {showAll ? (
            <ChevronDown className="h-4 w-4" aria-hidden />
          ) : (
            <ChevronRight className="h-4 w-4" aria-hidden />
          )}
        </button>
      </div>
    </section>
  );
}
