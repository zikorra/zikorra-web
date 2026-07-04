"use client";

import { useState } from "react";
import { ChevronDown, Minus, Plus } from "lucide-react";
import { FAQ_CATEGORIES, type FaqItem } from "./faqData";

const ALL_FAQS = FAQ_CATEGORIES.flatMap((category) => category.items);
const DEFAULT_COUNT = 8;

function FaqRow({
  item,
  isOpen,
  onToggle,
  isFirst,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  isFirst: boolean;
}) {
  return (
    <div className={`py-5 ${isFirst ? "" : "border-t border-[#E2E8F0]"}`}>
      <button
        type="button"
        onClick={onToggle}
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
                <ul key={blockIndex} className="list-disc space-y-1 pl-5">
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
}

export default function Faq() {
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const defaultFaqs = ALL_FAQS.slice(0, DEFAULT_COUNT);
  const extraFaqs = ALL_FAQS.slice(DEFAULT_COUNT);

  return (
    <section id="faq" className="bg-[#F1F5FB] px-6 py-24">
      <div className="mx-auto max-w-[820px] text-center">
        <h2 className="text-3xl leading-[44px] font-semibold tracking-[-0.04em] text-[#071827] sm:text-4xl">
          Have questions? Find answers
        </h2>

        <div className="mt-10 text-left">
          {defaultFaqs.map((item, index) => (
            <FaqRow
              key={item.question}
              item={item}
              isFirst={index === 0}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}

          <div
            className="grid"
            style={{
              gridTemplateRows: showAll ? "1fr" : "0fr",
              transition: "grid-template-rows 500ms ease-in-out",
            }}
          >
            <div className="overflow-hidden">
              {extraFaqs.map((item, i) => {
                const index = DEFAULT_COUNT + i;
                return (
                  <FaqRow
                    key={item.question}
                    item={item}
                    isFirst={false}
                    isOpen={openIndex === index}
                    onToggle={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#071827] shadow-sm transition-colors hover:bg-blue-50"
        >
          {showAll ? "View less" : "More questions"}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              showAll ? "rotate-180" : "-rotate-90"
            }`}
            aria-hidden
          />
        </button>
      </div>
    </section>
  );
}
