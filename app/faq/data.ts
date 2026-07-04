export type FaqBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type FaqItem = {
  question: string;
  blocks: FaqBlock[];
};

export type FaqCategory = {
  title: string;
  items: FaqItem[];
};

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    title: "For Customers",
    items: [
      {
        question: "What is Zikorra?",
        blocks: [
          {
            type: "p",
            text: "Zikorra is a technology-powered platform that connects customers with trained, verified, and trusted artisans and skilled professionals across Nigeria. Whether you need an electrician, plumber, AC technician, cleaner, beautician, painter, or other service provider, Zikorra makes hiring safer, easier, and more reliable.",
          },
        ],
      },
      {
        question: "How is Zikorra different from hiring artisans directly?",
        blocks: [
          {
            type: "p",
            text: "Traditional hiring often comes with uncertainty—you may not know who is coming to your home, whether they're qualified, or if they'll complete the job professionally.",
          },
          { type: "p", text: "With Zikorra:" },
          {
            type: "ul",
            items: [
              "Every artisan goes through identity verification and screening.",
              "Jobs are monitored from start to finish.",
              "Payments are protected.",
              "You can track job progress.",
              "Customer support is available if anything goes wrong.",
            ],
          },
          {
            type: "p",
            text: "Our goal is simple: bring trust and accountability to every service experience.",
          },
        ],
      },
      {
        question: "Are your artisans verified?",
        blocks: [
          { type: "p", text: "Yes." },
          {
            type: "p",
            text: "Every artisan completes a strict onboarding process that includes:",
          },
          {
            type: "ul",
            items: [
              "Identity verification (KYC)",
              "Address verification",
              "Skills assessment",
              "Background screening",
              "Professional training",
              "Performance probation before full activation",
            ],
          },
          {
            type: "p",
            text: "Only qualified professionals are allowed onto the platform.",
          },
        ],
      },
      {
        question: "What services can I book?",
        blocks: [
          {
            type: "p",
            text: "Depending on your location, you can book services such as:",
          },
          {
            type: "ul",
            items: [
              "Electrical Repairs",
              "Plumbing",
              "Air Conditioning (AC)",
              "Generator Repairs",
              "Appliance Repairs",
              "Beautician (Barber, hair dresser, braider)",
              "Cleaning",
              "Painting",
              "And many more skilled services as we continue to expand.",
            ],
          },
        ],
      },
      {
        question: "How do I book a service?",
        blocks: [
          { type: "p", text: "Booking is simple." },
          {
            type: "ul",
            items: [
              "Choose the service you need.",
              "Tell us about the problem.",
              "Select your preferred date and time.",
              "Receive quotes.",
              "Confirm your booking.",
              "A verified artisan will be assigned to your job.",
            ],
          },
          { type: "p", text: "You'll receive updates throughout the process." },
        ],
      },
      {
        question: "How do I know the right technician is arriving?",
        blocks: [
          {
            type: "p",
            text: "Every assigned artisan has to complete multiple verification steps before work begins.",
          },
          { type: "p", text: "These include:" },
          {
            type: "ul",
            items: [
              "GPS location verification",
              "QR Code check-in",
              "Job PIN confirmation",
            ],
          },
          {
            type: "p",
            text: "This ensures the correct professional arrives at the correct location for your booking.",
          },
        ],
      },
      {
        question: "Is my payment safe?",
        blocks: [
          { type: "p", text: "Yes." },
          {
            type: "p",
            text: "Your payment is securely held through our escrow process and is only released after the agreed work has been completed and approved.",
          },
          {
            type: "p",
            text: "This protects both customers and artisans while reducing disputes and abandoned jobs.",
          },
        ],
      },
      {
        question: "What happens if I'm not satisfied with the work?",
        blocks: [
          {
            type: "p",
            text: "If you're unhappy with the completed service, you can report the issue during the review period.",
          },
          {
            type: "p",
            text: "Our Trust & Safety team will investigate using available evidence such as:",
          },
          {
            type: "ul",
            items: [
              "Photos",
              "Videos",
              "GPS records",
              "Job documentation",
              "Communication history",
            ],
          },
          {
            type: "p",
            text: "Payments remain protected while the issue is being resolved.",
          },
        ],
      },
      {
        question: "Do you guarantee the quality of work?",
        blocks: [
          { type: "p", text: "We work hard to maintain high service standards." },
          {
            type: "p",
            text: "Every completed job is reviewed by customers, and artisans are continuously rated on:",
          },
          {
            type: "ul",
            items: [
              "Quality of work",
              "Professionalism",
              "Timeliness",
              "Customer satisfaction",
            ],
          },
          {
            type: "p",
            text: "Poor-performing artisans may be retrained, suspended, or removed from the platform.",
          },
        ],
      },
      {
        question: "How are artisans selected for my job?",
        blocks: [
          {
            type: "p",
            text: "Our intelligent dispatch system considers several factors, including:",
          },
          {
            type: "ul",
            items: [
              "Skill category",
              "Certifications",
              "Distance from your location",
              "Availability",
              "Customer ratings",
              "Previous performance",
            ],
          },
          {
            type: "p",
            text: "This helps ensure you're matched with the most suitable professional.",
          },
        ],
      },
      {
        question: "Can I choose a specific artisan?",
        blocks: [
          {
            type: "p",
            text: "Yes. Where available, you may request a preferred artisan for repeat services, subject to availability.",
          },
        ],
      },
      {
        question: "Are there emergency services?",
        blocks: [
          { type: "p", text: "Yes." },
          {
            type: "p",
            text: "For urgent repairs and emergency situations, Zikorra prioritizes dispatching the nearest qualified professional as quickly as possible.",
          },
        ],
      },
      {
        question: "How do you protect my personal information?",
        blocks: [
          {
            type: "p",
            text: "We follow strict data protection and security standards. Customer information is handled securely, and access is restricted to authorized personnel only.",
          },
        ],
      },
      {
        question: "Can artisans work outside the Zikorra platform after meeting me?",
        blocks: [
          {
            type: "p",
            text: "To protect both customers and service professionals, we encourage all jobs to remain on the platform.",
          },
          {
            type: "p",
            text: "Bookings completed through Zikorra continue to benefit from:",
          },
          {
            type: "ul",
            items: [
              "Payment protection",
              "Dispute resolution",
              "Service history",
              "Warranty eligibility",
              "Customer support",
            ],
          },
          {
            type: "p",
            text: "These protections may not apply to off-platform transactions.",
          },
        ],
      },
      {
        question: "Why should I trust Zikorra?",
        blocks: [
          { type: "p", text: "Because trust is at the heart of everything we do." },
          { type: "p", text: "Our platform combines:" },
          {
            type: "ul",
            items: [
              "Verified professionals",
              "Secure payments",
              "GPS verification",
              "Job documentation",
              "Transparent service tracking",
              "Quality assurance",
              "Dedicated customer support",
            ],
          },
          {
            type: "p",
            text: "So you can book skilled professionals with greater confidence and peace of mind.",
          },
        ],
      },
    ],
  },
  {
    title: "For Nigerians in the Diaspora",
    items: [
      {
        question:
          "I'm a Nigerian living abroad. Can Zikorra help me manage my property?",
        blocks: [
          { type: "p", text: "Absolutely." },
          {
            type: "p",
            text: "Our DiasporaCare services help Nigerians abroad manage homes and properties remotely with:",
          },
          {
            type: "ul",
            items: [
              "Property inspections",
              "Maintenance coordination",
              "Live updates",
              "Photos and videos",
              "Verified repairs",
              "Emergency response",
            ],
          },
          { type: "p", text: "You stay informed wherever you are in the world." },
        ],
      },
      {
        question: "Can Zikorra help me monitor a building project?",
        blocks: [
          { type: "p", text: "Yes." },
          {
            type: "p",
            text: "Our Builder Watch service helps property owners monitor ongoing construction with:",
          },
          {
            type: "ul",
            items: [
              "Scheduled site visits",
              "Progress reports",
              "Photos and videos",
              "Material verification",
              "Contractor supervision",
              "Budget monitoring",
            ],
          },
          { type: "p", text: "Ideal for Nigerians living outside the country." },
        ],
      },
    ],
  },
  {
    title: "For Businesses & Property Managers",
    items: [
      {
        question: "Can businesses use Zikorra?",
        blocks: [
          { type: "p", text: "Yes." },
          { type: "p", text: "We provide maintenance solutions for:" },
          {
            type: "ul",
            items: [
              "Estates",
              "Offices",
              "Hotels",
              "Schools",
              "Hospitals",
              "Banks",
              "Property managers",
              "Construction companies",
            ],
          },
          { type: "p", text: "Enterprise maintenance plans are also available." },
        ],
      },
    ],
  },
  {
    title: "For Artisans",
    items: [
      {
        question: "I am an artisan. How can I join Zikorra?",
        blocks: [
          { type: "p", text: "You can apply through our website or mobile app." },
          { type: "p", text: "Applicants complete:" },
          {
            type: "ul",
            items: [
              "Registration",
              "Identity verification",
              "Skills assessment",
              "Background checks",
              "Professional training",
              "Probation period",
            ],
          },
          {
            type: "p",
            text: "Successful applicants gain access to jobs and opportunities through the Zikorra platform.",
          },
        ],
      },
      {
        question: "Where is Zikorra available?",
        blocks: [
          {
            type: "p",
            text: "We are launching in Lagos, with plans to expand to Abuja, Port Harcourt, Ibadan, Kano, and other major cities as we grow.",
          },
        ],
      },
    ],
  },
];
