export const profile = {
  name: "Adam Nguyen",
  title: "Computer Science student and full-stack engineer",
  summary:
    "I build product-focused software across data pipelines, fintech interfaces, and internal tools. My edge is working between technical systems and rule-heavy domains where correctness, clarity, and trust matter.",
  email: "adamnguyxn.au@email.com",
  github: "https://github.com/adampharrels",
  linkedin: "https://www.linkedin.com/in/adam-nguyen-2517222a0/",
  location: "Sydney, Australia",
};

export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "FastAPI",
  "Angular",
  "PostgreSQL",
  "Java",
  "Spring Boot",
  "C++",
  "Docker",
];

export const focusAreas = [
  "Data-heavy products",
  "Fintech interfaces",
  "Internal platform tooling",
  "Law and regulation technology",
];

export const metrics = [
  { value: "50GB", label: "drone imagery batches processed" },
  { value: "40-60%", label: "frontend build-time reduction" },
  { value: "1,000+", label: "records handled in reusable data tables" },
];

export const roles = [
  {
    company: "NexStox",
    role: "Software Engineering Intern",
    period: "Jan 2026 - Present",
    summary:
      "Shipping fintech and trading product experiences across fast engineering, product, and business feedback loops.",
    bullets: [
      "Owned migration work from Next.js to Vite for a high-traffic game, reducing frontend build time by about 40-60%.",
      "Developed responsive trading surfaces across NXMarket and NexStox, including Staking, Order History, Funding, and Stake wallet pages.",
      "Built admin dashboard tooling that reduced publishing time by about 50% and lowered dependency on frontend engineers.",
    ],
    stack: ["React", "TypeScript", "Next.js", "Vite", "REST APIs"],
  },
  {
    company: "TMA Solutions Australia",
    role: "Software Engineering Intern",
    period: "Jul 2025 - Oct 2025",
    summary:
      "Built internal systems for skills tracking, resource allocation, and project data analysis.",
    bullets: [
      "Refactored Angular data tables handling 1,000+ records into reusable components, reducing duplicated frontend logic by about 30-40%.",
      "Developed a multilingual voice-input module that reduced manual query handling by about 40% in testing.",
      "Debugged performance issues and validated fixes through structured Agile sprint testing.",
    ],
    stack: ["TypeScript", "Angular", "Hono", "Next.js", "NestJS", "React"],
  },
  {
    company: "StevTech",
    role: "Data Engineering Intern",
    period: "Nov 2024 - Jan 2025",
    summary:
      "Built data preparation pipelines for drone imagery used in downstream computer vision weed-detection workflows.",
    bullets: [
      "Reduced drone imagery preparation time from hours to seconds with a Python pipeline for multi-sensor datasets up to about 50GB per batch.",
      "Designed a base class architecture for adding new drone and sensor types without rewriting existing processing logic.",
      "Standardised timestamps, coordinates, units, and field names into a unified metadata schema.",
    ],
    stack: ["Python", "pandas", "exiftool", "rasterio", "FastAPI", "SQLite"],
  },
];

export const projects = [
  {
    id: "dataflowcheck",
    title: "DataFlowCheck",
    eyebrow: "Data reliability",
    description:
      "End-to-end data validation pipeline that checks schema quality, exposes failures, and gives teams visibility before bad data reaches production workflows.",
    impact: "Designed around observability, automated checks, and operational alerts.",
    tech: ["TypeScript", "Node", "PostgreSQL", "React"],
    href: "https://github.com/adampharrels/DataFlowCheck",
    linkLabel: "View repository",
  },
  {
    id: "cryptowallet",
    title: "CryptoWallet",
    eyebrow: "Fintech UI",
    description:
      "Responsive cryptocurrency wallet frontend focused on account clarity, balances, and transaction flows.",
    impact: "Built as a polished product interface rather than a static coursework screen.",
    tech: ["React", "TypeScript", "Tailwind"],
    href: "https://adampharrels.github.io/CryptoWalletFrontend/",
    linkLabel: "View live app",
  },
  {
    id: "roombooking",
    title: "Room Booking System",
    eyebrow: "Operations",
    description:
      "Meeting-room booking application with flows for availability, reservations, and booking management.",
    impact: "Turns a common manual scheduling workflow into a structured web application.",
    tech: ["Java", "Spring Boot", "HTML", "CSS"],
    href: "https://github.com/adampharrels/ASD_Project",
    linkLabel: "View repository",
  },
  {
    id: "nutrisnap",
    title: "NutriSnap",
    eyebrow: "Health tracking",
    description:
      "Nutrition tracking application for recording intake and managing food-related data across web and mobile-oriented surfaces.",
    impact: "Combines Java backend work with Kotlin application development.",
    tech: ["Java", "Spring Boot", "Kotlin"],
    href: "https://github.com/adampharrels/NutriSnap",
    linkLabel: "View repository",
  },
];
