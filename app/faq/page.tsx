import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FAQ_CATEGORIES } from "./data";

export const metadata: Metadata = {
  title: "FAQ — Zikorra",
  description:
    "Answers to common questions about Zikorra, for customers, the diaspora, businesses, and artisans.",
};

export default function FaqPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <section className="bg-white px-6 pt-16 pb-8 text-center">
        <div className="mx-auto max-w-[720px]">
          <h1 className="text-3xl leading-[44px] font-semibold tracking-[-0.04em] text-[#071827] sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base leading-[22px] font-medium text-[#52616F]">
            Everything you need to know about booking, safety, and how
            Zikorra works — for customers, the diaspora, businesses, and
            artisans.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 pb-24">
        <div className="mx-auto max-w-[820px] space-y-14">
          {FAQ_CATEGORIES.map((category) => (
            <div key={category.title}>
              <h2 className="text-xl font-semibold text-[#071827] sm:text-2xl">
                {category.title}
              </h2>

              <div className="mt-6 space-y-3">
                {category.items.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-xl bg-[#F1F5FB] px-5 py-4 [&::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                      <span className="text-base leading-[120%] font-medium text-[#081929]">
                        {item.question}
                      </span>
                      <ChevronDown
                        className="h-4 w-4 shrink-0 text-[#081929] transition-transform group-open:rotate-180"
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
      </section>

      <Footer />
    </div>
  );
}
