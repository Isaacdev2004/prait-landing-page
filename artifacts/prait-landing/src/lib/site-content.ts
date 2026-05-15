export type PathwayId = "canada" | "training" | "business";

export const PATHWAYS: Record<
  PathwayId,
  {
    slug: string;
    interestValue: string;
    navLabel: string;
    heroLabel: string;
    title: string;
    subtitle: string;
    audiences: string[];
    highlights: string[];
    programs: { title: string; desc: string }[];
    testimonial: { quote: string; name: string; role: string };
  }
> = {
  canada: {
    slug: "/canada-pathway",
    interestValue: "study",
    navLabel: "Canada Pathway",
    heroLabel: "Study or Work in Canada",
    title: "Your Canada pathway starts here",
    subtitle:
      "Domestic career college placements and international student support — including Conestoga College admissions, visa guidance, and funding strategy.",
    audiences: [
      "Career switchers in Canada",
      "Immigrants seeking stable careers",
      "International students (Africa focus)",
    ],
    highlights: [
      "Career college matching for Canadian residents",
      "International admissions & document support",
      "Conestoga College partner pathways",
      "Visa, funding, and settlement guidance",
    ],
    programs: [
      {
        title: "Career College in Canada",
        desc: "Practical programs for residents seeking funded pathways and career advancement.",
      },
      {
        title: "International Admissions",
        desc: "End-to-end support from application to arrival for African students.",
      },
    ],
    testimonial: {
      quote:
        "Navigating the international student process for Conestoga felt impossible until I met the PRAIT team. They held my hand through every single step.",
      name: "Grace K.",
      role: "International Student, Ontario",
    },
  },
  training: {
    slug: "/career-training",
    interestValue: "train",
    navLabel: "Career Training",
    heroLabel: "Get Job-Ready Skills & Training",
    title: "Build skills employers want today",
    subtitle:
      "Intensive bootcamps and career services in AI, cybersecurity, digital skills, and professional branding — designed for career switchers and upskilling professionals.",
    audiences: [
      "Professionals seeking upskilling",
      "Career switchers entering tech",
      "Immigrants building Canadian-ready profiles",
    ],
    highlights: [
      "AI & cybersecurity bootcamps",
      "Digital skills for the modern workforce",
      "Resume & LinkedIn optimization",
      "Job-ready coaching and next-step planning",
    ],
    programs: [
      {
        title: "AI & Cybersecurity",
        desc: "Transition into high-demand technology roles with guided, intensive training.",
      },
      {
        title: "Digital Skills Training",
        desc: "Master tools and platforms essential for corporate and remote success.",
      },
      {
        title: "Resume & LinkedIn",
        desc: "Stand out to Canadian and global recruiters with optimized profiles.",
      },
    ],
    testimonial: {
      quote:
        "The AI bootcamp gave me the exact technical skills I was missing. Within 3 months of completing the program, I landed a junior data role.",
      name: "David O.",
      role: "Data Analyst, Calgary",
    },
  },
  business: {
    slug: "/business-growth",
    interestValue: "business",
    navLabel: "Business Growth",
    heroLabel: "Business Growth & AI Training",
    title: "Scale with strategy, AI, and marketing",
    subtitle:
      "Consulting for entrepreneurs and small businesses — AI tools, marketing, SEO, grants, and growth systems to enter new markets with confidence.",
    audiences: [
      "Tradespeople & small business owners",
      "Entrepreneurs entering Canada",
      "Teams adopting AI and digital marketing",
    ],
    highlights: [
      "AI tools & workflow automation",
      "Marketing, SEO, and brand positioning",
      "Business consulting & growth planning",
      "Grants and funding opportunity guidance",
    ],
    programs: [
      {
        title: "Business & Marketing",
        desc: "Packages to scale operations and reach new customers effectively.",
      },
      {
        title: "AI for Business",
        desc: "Practical AI adoption to save time and improve decision-making.",
      },
    ],
    testimonial: {
      quote:
        "PRAIT didn't just advise us — they built a clear growth plan with marketing and AI tools we could actually use from day one.",
      name: "Sarah M.",
      role: "Healthcare IT Consultant, Toronto",
    },
  },
};

export const AUDIENCE_TAGS = [
  "Career switchers",
  "Immigrants",
  "International students",
  "Upskilling professionals",
  "Small business owners",
] as const;
