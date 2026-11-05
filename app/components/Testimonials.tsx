import { Star } from "lucide-react";
import styles from "./Testimonials.module.css";

const REVIEWS = [
  {
    name: "Adaeze Nwosu",
    service: "Plumbing Service",
    quote:
      "I came home to water leaking under my kitchen sink. I was already stressed, but being able to explain the problem and arrange for someone to fix it made things a lot easier.",
  },
  {
    name: "David Ose",
    service: "Electrical Repairs",
    quote:
      "I liked that I could speak with the electrician about what needed fixing before agreeing on the cost. There was no confusion about what I was paying for.",
  },
  {
    name: "Efe Oghenekaro",
    service: "Home Cleaning",
    quote:
      "I needed my apartment cleaned before my family came visiting. The whole process was straightforward, and I didn't have to spend the day calling different cleaners.",
  },
  {
    name: "Aisha Bello",
    service: "Painting Service",
    quote:
      "Getting my living room repainted felt like a big task at first. I loved being able to explain what I wanted, agree on the price and know when the painter was coming.",
  },
  {
    name: "Temilade Akinola",
    service: "Appliance Repairs",
    quote:
      "My washing machine stopped working at the worst possible time. I could explain the issue, get connected with a technician and keep track of what was happening.",
  },
  {
    name: "Fatima Abdullahi",
    service: "Home Cleaning",
    quote:
      "What stood out for me was how easy it was to keep up with everything. From arranging the cleaning to confirming the job was done, I could manage it all from my phone.",
  },
];

function Review({ review }: { review: (typeof REVIEWS)[number] }) {
  return (
    <figure className={styles.card}>
      <span className={styles.quoteMark} aria-hidden="true">
        “
      </span>
      <blockquote className={styles.quote}>{review.quote}</blockquote>
      <figcaption className={styles.author}>
        <span className={styles.avatar} aria-hidden="true">
          {review.name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </span>
        <span>
          <span className={styles.name}>{review.name}</span>
          <span className={styles.service}>{review.service}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const rows = [
    REVIEWS.slice(0, 4),
    [REVIEWS[4], REVIEWS[5], REVIEWS[0], REVIEWS[1]],
  ];
  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className={styles.header}>
        <div className={styles.badge}>
          <span>
            <Star size={16} fill="currentColor" aria-hidden="true" />
          </span>
          WHAT OUR CUSTOMERS SAY
        </div>
        <h2 id="testimonials-heading" className={styles.heading}>
          Good work. Happy homes.
        </h2>
        <p className={styles.intro}>
          See what customers have to say about finding trusted professionals and
          getting things done with Zikorra.
        </p>
      </div>
      <div className={styles.reviews}>
        <svg
          className={styles.curve}
          viewBox="0 0 1440 640"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M-150 390C80 350 160 710 430 600S570 125 840 150S1150 40 1590 110"
            stroke="#0c75ff"
            strokeWidth="48"
          />
        </svg>
        {rows.map((reviews, index) => (
          <div
            key={index}
            className={styles.viewport}
            role="region"
            aria-label={`Customer reviews, row ${index + 1}`}
            tabIndex={0}
          >
            <div
              className={`${styles.row} ${index === 1 ? styles.secondRow : ""}`}
            >
              {reviews.map((review) => (
                <Review key={review.name} review={review} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
