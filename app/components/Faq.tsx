"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { FAQ_CATEGORIES } from "./faqData";
import styles from "./Faq.module.css";

const ALL_FAQS = FAQ_CATEGORIES.flatMap((category) => category.items);
const DEFAULT_COUNT = 7;

export default function Faq() {
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const visibleFaqs = showAll ? ALL_FAQS : ALL_FAQS.slice(0, DEFAULT_COUNT);

  function toggleMore() {
    if (showAll && openIndex !== null && openIndex >= DEFAULT_COUNT) {
      setOpenIndex(null);
    }
    setShowAll(!showAll);
  }

  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-heading">
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <h2 id="faq-heading" className={styles.heading}>
            Have questions?<br />Find answers
          </h2>
          <div className={styles.support}>
            <p>Still have questions? Our support team is here to help.</p>
            <a href="mailto:support@zikorra.com" className={styles.contact}>
              Contact Support
            </a>
          </div>
        </div>
        <div className={styles.questions}>
          {visibleFaqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className={styles.item} data-open={isOpen}>
                <h3>
                  <button
                    id={`faq-question-${index}`}
                    type="button"
                    className={styles.question}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{item.question}</span>
                    <span className={styles.toggleIcon} aria-hidden="true">
                      <Plus className={styles.plus} size={22} strokeWidth={1.5} />
                      <Minus className={styles.minus} size={22} strokeWidth={1.5} />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-answer-${index}`}
                  aria-labelledby={`faq-question-${index}`}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                  className={styles.answerPanel}
                >
                  <div className={styles.answerClip}>
                    <div className={styles.answer}>
                  {item.blocks.map((block, blockIndex) =>
                    block.type === "p" ? (
                      <p key={blockIndex}>{block.text}</p>
                    ) : (
                      <ul key={blockIndex}>
                        {block.items.map((text) => <li key={text}>{text}</li>)}
                      </ul>
                    ),
                  )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <button type="button" className={styles.more} onClick={toggleMore} aria-expanded={showAll}>
            {showAll ? "View less" : "More questions"}
          </button>
        </div>
      </div>
    </section>
  );
}
