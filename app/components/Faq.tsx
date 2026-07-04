import { ChevronDown } from "lucide-react";
import { FAQ_CATEGORIES } from "./faqData";

export default function Faq() {
  return (
    <section id="faq" className="bg-[#F1F5FB] px-6 py-24">
      <div className="mx-auto max-w-[820px] text-center">
        <h2 className="text-3xl leading-[44px] font-semibold tracking-[-0.04em] text-[#071827] sm:text-4xl">
          Have questions? Find answers
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base leading-[22px] font-medium text-[#52616F]">
          Everything you need to know about booking, safety, and how Zikorra
          works — for customers, the diaspora, businesses, and artisans.
        </p>

        <div className="mt-12 space-y-14 text-left">
          {FAQ_CATEGORIES.map((category, categoryIndex) => (
            <div key={category.title}>
              <h3 className="text-xl font-semibold text-[#071827] sm:text-2xl">
                {category.title}
              </h3>

              <div className="mt-6 space-y-3">
                {category.items.map((item, itemIndex) => (
                  <details
                    key={item.question}
                    open={categoryIndex === 0 && itemIndex === 0}
                    className="group rounded-xl bg-white px-5 py-4 shadow-sm [&::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                      <span className="text-base leading-[120%] font-medium text-[#081929]">
                        {item.question}
                      </span>
                      <ChevronDown
                        className="h-4 w-4 shrink-0 text-brand transition-transform group-open:rotate-180"
                        aria-hidden
                      />
                    </summary>

                    <div className="mt-3 space-y-2 text-base leading-[22px] font-medium text-[#5F6F6B]">
                      {item.blocks.map((block, index) =>
                        block.type === "p" ? (
                          <p key={index}>{block.text}</p>
                        ) : (
                          <ul key={index} className="list-disc space-y-1 pl-5">
                            {block.items.map((li) => (
                              <li key={li}>{li}</li>
                            ))}
                          </ul>
                        ),
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
