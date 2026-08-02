export type ProjectLink = {
  label: string;
  href: string;
  kind: "repository" | "demo" | "case-study";
};

export type Project = {
  slug: string;
  title: string;
  category: string[];
  summary: string;
  capabilities: string[];
  technologies: string[];
  featured: boolean;
  secondary?: boolean;
  image?: {
    src: string;
    alt: string;
  };
  links: ProjectLink[];
  caseStudy?: {
    overview: string;
    problem: string;
    users: string;
    mainCapabilities: string[];
    myContribution: string[];
    technicalApproach: string[];
    decisions: string[];
    challenges: string[];
    outcome: string;
  };
};

export type Experience = {
  company: string;
  context: string;
  roles: Array<{
    title: string;
    period: string;
  }>;
  responsibility: string;
  bullets: string[];
  highlight: string;
  technologies: string[];
};

export type CapabilityGroup = {
  title: string;
  items: string[];
};

export const site = {
  title: "Adam Nguyen | Software Engineer",
  description:
    "Portfolio of Adam Nguyen, a Sydney-based software engineer and final-year UTS IT student working across fintech, full-stack development, data and AI.",
  url: "https://adampharrels.github.io/AboutMe/",
};

export const assetBasePath = process.env.BASE_PATH || "";

export const profile = {
  name: "Adam Nguyen",
  title: "Software Engineer · Final-year IT student",
  summary:
    "I’m a final-year Bachelor of Information Technology student at UTS and a Junior Software Engineer at NexStox. I’ve worked across customer-facing fintech platforms, internal workforce systems and large-scale data pipelines using TypeScript, React, Python and SQL.",
  email: "adamnguyxn.au@email.com",
  github: "https://github.com/adampharrels",
  linkedin: "https://www.linkedin.com/in/adam-nguyen-2517222a0/",
  resume: `${assetBasePath}/Resume_AdamNguyen.pdf`,
  location: "Sydney, Australia",
  graduation: "Graduating December 2026",
  availability: "Open to graduate and junior opportunities from late 2026",
  mobility: "Open to Sydney and Melbourne opportunities",
  education: "Bachelor of Information Technology at UTS",
  major: "Software Development major",
  subMajor: "Data Analytics and AI sub-major",
};

export const proofPoints = [
  "Three industry experiences across fintech, software consulting and data engineering.",
  "Professional fintech product development across customer-facing and administrative workflows.",
  "Full-stack, data and AI projects spanning legal intelligence, equity research and mobile ML.",
  "Open to graduate, junior software, data and technology roles from late 2026.",
];

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Languages",
    items: ["TypeScript", "Python", "Java", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Angular", "Tailwind CSS"],
  },
  {
    title: "Backend and data",
    items: [
      "FastAPI",
      "Node.js",
      "Express.js",
      "Hono.js",
      "PostgreSQL",
      "pandas",
      "NumPy",
    ],
  },
  {
    title: "Tooling",
    items: ["Docker", "Git", "GitHub Actions", "Azure DevOps"],
  },
];

export const experiences: Experience[] = [
  {
    company: "NexStox",
    context:
      "Fintech product work across a cryptocurrency exchange, asset-management platform and cryptocurrency-based game.",
    roles: [
      { title: "Junior Software Engineer", period: "June 2026 - Present" },
      { title: "Software Engineer Intern", period: "January 2026 - June 2026" },
    ],
    responsibility:
      "Build and refine TypeScript and React product features across trading, wallet, funding and administrative workflows.",
    bullets: [
      "Built features for candlestick charts, order history, funding, wallet and administrative workflows.",
      "Migrated a high-traffic game frontend from Next.js to Vite, reducing build time by approximately 40-60%.",
      "Built reusable components and resolved inconsistent behaviours across transaction, wallet and admin surfaces.",
      "Improved administrative publishing workflows, reducing publishing time by approximately 50%.",
    ],
    highlight:
      "Worked across development, staging, manual validation and release verification while also reviewing competing exchange experiences and proposing usability improvements outside the formal implementation scope.",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Vite",
      "REST APIs",
      "Azure DevOps",
    ],
  },
  {
    company: "TMA Solutions Australia",
    context:
      "Software consulting internship focused on workforce planning systems, administration workflows and AI-assisted internal tooling.",
    roles: [
      {
        title: "Software Engineering Intern",
        period: "July 2025 - October 2025",
      },
    ],
    responsibility:
      "Build full-stack internal tools and improve existing administration workflows used for skills and employee management.",
    bullets: [
      "Built a workforce-planning system using Next.js, Hono.js, SQL and REST APIs.",
      "Developed skill-matrix and employee-management workflows for resource planning.",
      "Integrated an LLM API to summarise employee strengths and development areas.",
      "Refactored Angular administration workflows and reduced duplicated logic.",
    ],
    highlight:
      "Contributed to a multilingual voice chatbot using speech recognition and embedding-based retrieval for faster internal query handling.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Hono.js",
      "SQL",
      "Angular",
      "REST APIs",
      "LLM APIs",
    ],
  },
  {
    company: "StevTech",
    context:
      "Data engineering internship supporting drone-imagery preparation for downstream computer-vision weed-detection workflows.",
    roles: [
      {
        title: "Data Engineering Intern",
        period: "November 2024 - January 2025",
      },
    ],
    responsibility:
      "Normalise heterogeneous drone-payload data into consistent structures for analysis and model workflows.",
    bullets: [
      "Built a Python normalisation pipeline for heterogeneous drone-payload data.",
      "Processed batches reaching approximately 50 GB and reduced preparation work from hours to seconds.",
      "Established consistent metadata for timestamps, coordinates and units.",
      "Designed extensible base classes for additional payload types.",
    ],
    highlight:
      "Confirmed output structures and error-handling expectations early with the team and client so pipeline behaviour matched the downstream workflow.",
    technologies: [
      "Python",
      "pandas",
      "rasterio",
      "exiftool",
      "FastAPI",
      "SQLite",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "ai-litigation-navigator",
    title: "AI Litigation Navigator",
    category: ["Full-stack", "Data/AI", "Legal technology"],
    summary:
      "A full-stack legal intelligence platform for tracking and analysing court cases and regulatory decisions in which artificial intelligence is material.",
    capabilities: [
      "Searchable AI litigation database with jurisdiction, issue, legal area and procedural-status filters.",
      "Automated ingestion from official sources with Gemini-assisted relevance screening and summarisation.",
      "Human triage workflow and administrative case-management interface before publication.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Express.js",
      "Prisma",
      "SQLite",
      "Gemini API",
      "Tailwind CSS",
    ],
    featured: true,
    links: [
      {
        label: "View AI Litigation Navigator repository",
        href: "https://github.com/adampharrels/LegalTech",
        kind: "repository",
      },
      {
        label: "View AI Litigation Navigator case study",
        href: "/projects/ai-litigation-navigator/",
        kind: "case-study",
      },
    ],
    caseStudy: {
      overview:
        "AI Litigation Navigator organises AI-related litigation and regulatory decisions into a structured research workflow.",
      problem:
        "AI-related legal developments are spread across courts, regulators and procedural documents, making them difficult to track consistently.",
      users:
        "Researchers, legal-technology builders and people monitoring how AI appears in legal and regulatory decision-making.",
      mainCapabilities: [
        "Search and filtering by jurisdiction, issue, legal area and procedural status.",
        "Structured case summaries and administrative review before publication.",
        "Gemini-assisted screening and summarisation for ingestion candidates.",
      ],
      myContribution: [
        "Designed the product workflow around ingestion, relevance screening, human triage and publication.",
        "Built the full-stack application structure across Next.js, Express.js, Prisma and SQLite.",
        "Implemented the case-management interface and structured data model for research use.",
      ],
      technicalApproach: [
        "Next.js and React provide the research and administration interface.",
        "Express.js handles backend routes for ingestion and case-management workflows.",
        "Prisma and SQLite store structured case data, legal metadata and publication status.",
        "Gemini API support is used for relevance screening and summarisation assistance.",
      ],
      decisions: [
        "Kept human triage before publication so AI assistance does not silently become the source of truth.",
        "Modelled legal metadata explicitly so filters stay useful as the case list grows.",
      ],
      challenges: [
        "Balancing automated ingestion with careful review in a domain where accuracy matters.",
        "Keeping summaries structured without overstating what the source material supports.",
      ],
      outcome:
        "A substantive legal-technology project that demonstrates full-stack engineering, AI-assisted workflows and care for institutional information quality.",
    },
  },
  {
    slug: "stoxlens",
    title: "StoxLens",
    category: ["Full-stack", "Data/AI", "Fintech"],
    summary:
      "A full-stack equity research workspace for analysing stocks, calculating price-based signals, comparing companies and generating structured research briefs.",
    capabilities: [
      "Historical market-data retrieval with Alpha Vantage integration and Yahoo Finance fallback.",
      "Momentum, trend, volatility, drawdown, RSI and volume signals for equity analysis.",
      "Multi-stock comparison, AI-generated research briefs, report history and watchlist workflows.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "pandas",
      "NumPy",
      "SQLAlchemy",
      "PostgreSQL",
      "Docker",
      "Anthropic API",
      "Alpha Vantage",
      "Yahoo Finance",
    ],
    featured: true,
    links: [
      {
        label: "View StoxLens repository",
        href: "https://github.com/adampharrels/StoxLens",
        kind: "repository",
      },
      {
        label: "View StoxLens case study",
        href: "/projects/stoxlens/",
        kind: "case-study",
      },
    ],
    caseStudy: {
      overview:
        "StoxLens is a research workspace for pulling market data, computing signals and turning analysis into structured briefs.",
      problem:
        "Equity research often requires switching between data sources, spreadsheets, calculations and notes before a coherent view emerges.",
      users:
        "Students, analysts and technically minded investors who want a structured local workflow for comparing companies and reviewing signals.",
      mainCapabilities: [
        "Historical price-data retrieval with provider fallback.",
        "Signal calculations for momentum, trend, volatility, drawdown, RSI and volume.",
        "Watchlists, report history, multi-stock comparison and AI-generated research briefs.",
      ],
      myContribution: [
        "Built the full-stack architecture across a Next.js frontend and FastAPI backend.",
        "Implemented data retrieval, signal calculation and persistence workflows.",
        "Added backend testing, Docker Compose support, rate limiting and local fallback behaviour.",
      ],
      technicalApproach: [
        "FastAPI and Python handle data retrieval, calculations and research-brief generation.",
        "pandas and NumPy support signal computation over historical price data.",
        "SQLAlchemy and PostgreSQL persist watchlists, history and generated reports.",
        "The frontend presents comparison and research workflows in Next.js and TypeScript.",
      ],
      decisions: [
        "Used provider fallback so the app remains usable when one data source is unavailable or rate-limited.",
        "Kept local in-memory fallback behaviour for development and resilience.",
      ],
      challenges: [
        "Handling external API limits without making the product feel broken.",
        "Presenting quantitative signals clearly without implying investment advice.",
      ],
      outcome:
        "A full-stack fintech and data project showing API integration, analysis logic, persistence, testing and AI-assisted report generation.",
    },
  },
  {
    slug: "nutrisnap",
    title: "NutriSnap",
    category: ["Mobile", "Data/AI"],
    summary:
      "An Android food-recognition and nutrition diary application that classifies food from a photo using an on-device TensorFlow model and lets users track nutritional intake locally.",
    capabilities: [
      "Camera and gallery image selection with on-device food-image classification.",
      "Food and nutritional-value matching with serving-size entry.",
      "Nutrition diary, date-based history, calorie progress chart and local SQLite persistence.",
    ],
    technologies: [
      "Java",
      "Android SDK",
      "TensorFlow Android",
      "SQLite",
      "MPAndroidChart",
      "Gradle",
    ],
    featured: true,
    links: [
      {
        label: "View NutriSnap repository",
        href: "https://github.com/adampharrels/NutriSnap",
        kind: "repository",
      },
      {
        label: "View NutriSnap case study",
        href: "/projects/nutrisnap/",
        kind: "case-study",
      },
    ],
    caseStudy: {
      overview:
        "NutriSnap is an Android application for classifying food from images and tracking nutrition locally.",
      problem:
        "Manual nutrition logging can be tedious, especially when users need to enter food and serving information repeatedly.",
      users:
        "People who want a lightweight mobile diary for food recognition, serving-size entry and nutrition history.",
      mainCapabilities: [
        "Camera and gallery image selection.",
        "On-device TensorFlow food classification.",
        "Local diary history, serving-size entry and calorie charting.",
      ],
      myContribution: [
        "Built Android application functionality around food recognition and diary workflows.",
        "Connected classification results to nutritional-value matching and local storage.",
        "Implemented local-history and progress-visualisation behaviours.",
      ],
      technicalApproach: [
        "Java and Android SDK provide the mobile application foundation.",
        "TensorFlow Android supports on-device food-image classification.",
        "SQLite stores diary entries locally.",
        "MPAndroidChart displays calorie progress in the app.",
      ],
      decisions: [
        "Used on-device classification to keep the core recognition flow local.",
        "Used SQLite for simple local persistence without requiring a remote service.",
      ],
      challenges: [
        "Mapping image classification output to useful nutrition entries.",
        "Keeping the diary workflow simple enough for repeated use.",
      ],
      outcome:
        "A mobile AI project demonstrating Android development, local persistence, image classification and nutrition-tracking UX.",
    },
  },
  {
    slug: "unispace",
    title: "UniSpace",
    category: ["Full-stack", "Team project"],
    summary:
      "A university study-space booking system that allows students and staff to find, reserve and manage rooms while giving administrators tools to manage availability.",
    capabilities: [
      "User registration, login, session handling and account synchronisation.",
      "Shared work on password-change functionality, room booking and availability.",
      "Authentication interfaces and client-side signup validation.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Gradle",
      "MySQL",
      "JavaScript",
      "Express.js",
    ],
    featured: true,
    links: [
      {
        label: "View UniSpace repository",
        href: "https://github.com/adampharrels/ASD_Project",
        kind: "repository",
      },
      {
        label: "View UniSpace case study",
        href: "/projects/unispace/",
        kind: "case-study",
      },
    ],
    caseStudy: {
      overview:
        "UniSpace is a team-built university study-space booking system for students, staff and administrators.",
      problem:
        "Study-space booking needs clear availability, account handling and administrative control so room reservations can be managed reliably.",
      users:
        "Students and staff reserving rooms, plus administrators managing room availability and booking operations.",
      mainCapabilities: [
        "Authentication and session-management workflows.",
        "Room booking and availability support.",
        "Administrative room-availability management in the wider team system.",
      ],
      myContribution: [
        "Owned user registration, login and session-handling work.",
        "Implemented user account synchronisation and authentication interfaces.",
        "Shared password-change, room-booking and availability work with teammates.",
        "Built client-side signup validation.",
      ],
      technicalApproach: [
        "Java and Spring Boot support the application backend.",
        "Gradle manages the build.",
        "MySQL supports persistent application data.",
        "JavaScript and Express.js are present in the repository for supporting application scripts and server-side workflows.",
      ],
      decisions: [
        "Separated contribution language from whole-team system language so the portfolio does not imply sole ownership.",
        "Prioritised authentication correctness because account state affects the rest of the booking workflow.",
      ],
      challenges: [
        "Coordinating team-owned modules across authentication, booking and administration.",
        "Keeping user account state consistent across signup, login and session flows.",
      ],
      outcome:
        "A team full-stack university project where my documented work centred on authentication, session handling and shared booking workflows.",
    },
  },
  {
    slug: "crypto-wallet",
    title: "Crypto Wallet",
    category: ["Frontend", "Fintech"],
    summary:
      "A frontend cryptocurrency wallet demonstration with multi-asset balances, withdrawal workflows, network-fee calculations and balance validation.",
    capabilities: [
      "BTC, ETH, USDT, SOL and ADA balances.",
      "Withdrawal form with balance validation and network-fee handling.",
      "React Context state management and responsive interface.",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vite"],
    featured: true,
    links: [
      {
        label: "Open Crypto Wallet demo",
        href: "https://adampharrels.github.io/CryptoWalletFrontend/",
        kind: "demo",
      },
      {
        label: "View Crypto Wallet repository",
        href: "https://github.com/adampharrels/CryptoWalletFrontend",
        kind: "repository",
      },
    ],
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    category: ["Frontend"],
    summary:
      "A responsive personal portfolio built to present professional experience, technical projects and interests through a reusable, data-driven interface.",
    capabilities: [
      "Typed project, experience and profile data.",
      "Reusable cards, layout and case-study pages.",
      "Static export configuration for GitHub Pages under the /AboutMe/ subpath.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: false,
    secondary: true,
    links: [
      {
        label: "Open Portfolio Website",
        href: "https://adampharrels.github.io/AboutMe/",
        kind: "demo",
      },
      {
        label: "View Portfolio Website repository",
        href: "https://github.com/adampharrels/AboutMe",
        kind: "repository",
      },
    ],
  },
  {
    slug: "kocountdown",
    title: "KOCountdown",
    category: ["Earlier work"],
    summary: "Countdown website for Knockout Outdoor Sydney.",
    capabilities: ["Event countdown interface.", "Simple public web project."],
    technologies: ["Frontend"],
    featured: false,
    secondary: true,
    links: [
      {
        label: "View KOCountdown repository",
        href: "https://github.com/adampharrels/KOCountdown",
        kind: "repository",
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const secondaryProjects = projects.filter(
  (project) => project.secondary,
);
export const caseStudyProjects = projects.filter(
  (project) => project.caseStudy,
);
