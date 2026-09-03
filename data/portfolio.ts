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
  images?: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
  links: ProjectLink[];
  caseStudy?: {
    overview: string;
    problem: string;
    users: string;
    mainCapabilities: string[];
    myContribution?: string[];
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
  bullets: string[];
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
  url: "https://adamnguyen.me/",
};

export const assetBasePath = process.env.BASE_PATH || "";

export const profile = {
  name: "Adam Nguyen",
  title: "Software Engineer · Final-year IT student",
  summary:
    "Final-year IT student with one year of professional experience across full-stack development and data engineering.",
  email: "adamnguyxn.au@gmail.com",
  github: "https://github.com/adampharrels",
  linkedin: "https://www.linkedin.com/in/adam-nguyen-2517222a0/",
  resume:
    "https://drive.google.com/file/d/1S0b_NbmyVDz_ffdBlYXz9FzsKS68Wdjq/view?usp=sharing",
  location: "Sydney, Australia",
  graduation: "Graduating December 2026",
  availability: "Open to graduate and junior opportunities from late 2026",
  mobility: "Open to Sydney and Melbourne opportunities",
  education: "Bachelor of Information Technology at UTS",
  major: "Software Development major",
  subMajor: "Data Analytics and AI sub-major",
};

export const capabilityGroups: CapabilityGroup[] = [
  {
    title: "Programming languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Angular", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    items: [
      "FastAPI",
      "Spring Boot",
      "Node.js",
      "Express.js",
      "Hono.js",
      "PostgreSQL",
      "SQLite",
      "Prisma",
      "SQLAlchemy",
      "pandas",
      "NumPy",
    ],
  },
  {
    title: "Tools and platforms",
    items: ["Docker", "Git", "GitHub Actions", "Azure DevOps", "Gradle"],
  },
];

export const experiences: Experience[] = [
  {
    company: "NexStox",
    context: "Full-time fintech software engineering internship.",
    roles: [
      {
        title: "Software Engineer Intern",
        period: "January 2026 - Present",
      },
    ],
    bullets: [
      "Built production React and TypeScript interfaces across trading, transaction, wallet and administrative workflows, integrating REST APIs and reusable UI components for a live financial platform.",
      "Owned the migration of a high-traffic game from Next.js to Vite, improving build time by approximately 50%.",
      "Contributed to a new liquidity provider integration supporting 100+ tokenised securities by implementing provider-specific health checks in the order-routing Node.js backend, preventing an outage in one provider from blocking orders routed through another.",
      "Built an admin panel that cut publishing time by approximately 50% and reduced reliance on frontend developers, enabling staff to manage users, transactions, and cryptocurrency and token listings.",
      "Fixed real-time Order Book flicker by moving WebSocket subscription ownership from UI components to the page-level data layer, removing duplicate subscriptions and stabilising live updates.",
      "Resolved approximately 90% of critical mobile layout bugs by implementing responsive UI controls and breakpoint-specific positioning across homepage, trading and wallet flows.",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Vite",
      "Node.js",
      "REST APIs",
      "Azure DevOps",
    ],
  },
  {
    company: "StevTech",
    context:
      "Part-time UTS Industry Collaboration supporting drone-imagery preparation for downstream computer-vision workflows.",
    roles: [
      {
        title: "Data Engineer Intern",
        period: "April 2026 - June 2026",
      },
    ],
    bullets: [
      "Cut drone imagery preparation time from approximately 2 hours to less than 1 minute by building a Python ETL pipeline processing multi-sensor datasets up to approximately 50GB per batch for downstream computer vision models.",
      "Enabled support for new drone sources without modifying existing processing logic by designing the pipeline with a class-based architecture that standardised inconsistent metadata across sources.",
      "Presented product demos and technical outcomes to stakeholders, prospective investors, and government officials, translating complex technical concepts into clear insights for non-technical audiences.",
    ],
    technologies: [
      "Python",
      "pandas",
      "rasterio",
      "exiftool",
      "FastAPI",
      "SQLite",
    ],
  },
  {
    company: "TMA Solutions Australia",
    context: "Full-time full-stack software engineering internship.",
    roles: [
      {
        title: "Software Engineer Intern - Full-stack",
        period: "October 2025 - January 2026",
      },
    ],
    bullets: [
      "Built an internal workforce planning system using Next.js, Hono.js, and PostgreSQL, designing database schemas and API endpoints for skills matrix, resource allocation, and project analytics.",
      "Refactored an Angular candidate-management dashboard into reusable components, reducing duplicated logic by approximately 40%, with Jasmine tests to validate component behaviour.",
      "Reduced manual interactions by developing a multilingual voice-enabled chatbot for machine support and improved accuracy to 90% by implementing semantic similarity search with vector embeddings.",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "Hono.js",
      "PostgreSQL",
      "Angular",
      "Jasmine",
      "Vector embeddings",
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
      "A daily watchlist triage tool that helps investors and student analysts decide which stocks need attention, why they changed, and whether the original watch thesis still holds.",
    capabilities: [
      "Daily Today page ranking tickers by attention urgency.",
      "Snapshot comparison showing what changed since the previous check.",
      "Price and news trigger explanations using deterministic rules.",
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
    images: [
      {
        src: "https://raw.githubusercontent.com/adampharrels/StoxLens/main/frontend/public/screenshots/today-triage.png",
        alt: "StoxLens Today triage screen showing watchlist attention levels.",
        caption: "Today triage view",
      },
      {
        src: "https://raw.githubusercontent.com/adampharrels/StoxLens/main/frontend/public/screenshots/watchlist-notes.png",
        alt: "StoxLens watchlist notes screen showing saved thesis and risk fields.",
        caption: "Watchlist notes",
      },
    ],
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
        "StoxLens helps users review a stock watchlist faster by combining saved watch notes, price/news triggers, and snapshot comparisons. Instead of manually checking every ticker each day, users can see which stocks moved from low to medium/high attention and what changed since the last check.",
      problem:
        "Watchlists often become passive lists of tickers. Users add a stock for a reason, but later have to manually check price action, news, risks and original thesis notes to decide whether anything meaningful changed.",
      users:
        "Students, analysts and technically minded investors who want a structured local workflow for comparing companies and reviewing signals.",
      mainCapabilities: [
        "Watchlist CRUD with saved watch reason, main risk, and change-my-mind notes.",
        "Daily Today page ranking tickers by attention urgency.",
        "Snapshot comparison showing what changed since the previous check.",
        "Price/news trigger explanations using deterministic rules.",
        "Historical price-data retrieval with Alpha Vantage and Yahoo Finance fallback.",
        "Optional structured research briefs and report history.",
      ],
      technicalApproach: [
        "FastAPI and Python handle data retrieval, calculations and research-brief generation.",
        "pandas and NumPy support signal computation over historical price data.",
        "SQLAlchemy and PostgreSQL persist watchlists, history and generated reports.",
        "The frontend presents comparison and research workflows in Next.js and TypeScript.",
        "Persisted triage snapshots support latest-vs-previous comparisons.",
        "Watchlist notes connect directly to Today alerts.",
        "Deterministic scoring and keyword-based news classification avoid opaque “AI says so” behaviour.",
      ],
      decisions: [
        "Used provider fallback so the app remains usable when one data source is unavailable or rate-limited.",
        "Kept local in-memory fallback behaviour for development and resilience.",
        "Treated AI briefs as optional, not the core product.",
        "Used deterministic alert logic so users can inspect why a stock was flagged.",
        "Stored watch notes and triage snapshots so alerts have context and history.",
      ],
      challenges: [
        "Handling external API limits without making the product feel broken.",
        "Presenting quantitative signals clearly without implying investment advice.",
      ],
      outcome:
        "A practical full-stack fintech product that turns a static watchlist into a daily review workflow, combining user-owned notes, market signals, news-aware triggers, persistence and clear change summaries.",
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
    image: {
      src: `${assetBasePath}/screenshots/unispace-home.png`,
      alt: "UniSpace login page with study-space booking branding and account form.",
    },
    images: [
      {
        src: `${assetBasePath}/screenshots/unispace-home.png`,
        alt: "UniSpace login page with study-space booking branding and account form.",
        caption: "UniSpace main login page",
      },
      {
        src: `${assetBasePath}/screenshots/unispace-rooms.png`,
        alt: "UniSpace room filtering page showing available study rooms and booking actions.",
        caption: "Room filtering and available rooms",
      },
      {
        src: `${assetBasePath}/screenshots/unispace-calendar.png`,
        alt: "UniSpace room booking calendar with room filter controls and weekly schedule columns.",
        caption: "Room booking calendar",
      },
    ],
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
      "Static export configuration for GitHub Pages with a custom domain.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: false,
    secondary: true,
    links: [
      {
        label: "Open Portfolio Website",
        href: "https://adamnguyen.me/",
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
