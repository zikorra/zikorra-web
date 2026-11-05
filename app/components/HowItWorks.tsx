"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import styles from "./HowItWorks.module.css";

const STEPS = [
  {
    title: "Request a Service",
    description:
      "Tell us what you need done, whether it's a repair, cleaning or maintenance. Describe the job, add photos or videos and send your request in a few simple steps.",
  },
  {
    title: "Verified Professionals",
    description:
      "Connect with verified professionals for your home. Review their profiles and discuss what needs to be done before agreeing on the job and price.",
  },
  {
    title: "Protected Payments",
    description:
      "Agree on the price before paying securely through Zikorra. Keep a clear record of your service costs and payments in one place.",
  },
  {
    title: "Job Tracking & Verification",
    description:
      "Stay updated on your job from start to finish. Confirm the professional who arrives, follow progress and verify the work when the job is done.",
  },
];

export default function HowItWorks() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className={styles.section} aria-labelledby="experience-heading">
      <div className={styles.container}>
        <span className={styles.badge}>THE ZIKORRA EXPERIENCE</span>
        <h2 id="experience-heading" className={styles.heading}>
          Everything you need to get the job done. All in one place.
        </h2>
        <div className={styles.layout}>
          <div className={styles.steps}>
            {STEPS.map((step, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={step.title}
                  className={styles.step}
                  data-open={isOpen}
                >
                  <h3>
                    <button
                      type="button"
                      className={styles.button}
                      id={`experience-step-${index}`}
                      aria-expanded={isOpen}
                      aria-controls={`experience-answer-${index}`}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      <span>
                        {String(index + 1).padStart(2, "0")}. {step.title}
                      </span>
                      <span className={styles.toggle} aria-hidden="true">
                        <Plus size={24} strokeWidth={2} />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`experience-answer-${index}`}
                    aria-labelledby={`experience-step-${index}`}
                    className={styles.panel}
                    aria-hidden={!isOpen}
                    inert={!isOpen}
                  >
                    <div className={styles.clip}>
                      <p className={styles.description}>{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.visual}>
            <div className={styles.illustration}>
              <Image
                src="/images/how-it-works/request-service.png"
                alt="Illustration of a customer uploading a plumbing repair request from their phone"
                fill
                sizes="(min-width: 1280px) 590px, (min-width: 768px) 46vw, 90vw"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
