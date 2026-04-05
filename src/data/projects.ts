export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  disciplines: string[];
  coverImage: string;
  githubUrl: string;
  metrics: { value: string; label: string }[];
  sections: {
    heading: string;
    body: string;
    image?: string;
  }[];
  learnings: string[];
};

export const projects: Project[] = [
  {
    slug: "retailpulse",
    title: "RetailPulse",
    subtitle:
      "Demand forecasting for retail stores using weather, events, and sales data",
    description:
      "I built a full-stack app that predicts retail demand by combining sales data with outside signals like weather, holidays, and local events. It covers 10 Canadian stores and 56 products, with an ML pipeline, anomaly detection, a REST API, and a dashboard to explore it all.",
    year: "2026",
    disciplines: [
      "Machine Learning",
      "Full Stack",
      "Data Engineering",
      "API Design",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    githubUrl: "https://github.com/AmenTauhid/RetailPulse",
    metrics: [
      { value: "0.75", label: "XGBoost R² score" },
      { value: "139K+", label: "Synthetic transactions" },
      { value: "9", label: "API endpoints" },
      { value: "61", label: "Tests across 3 modules" },
    ],
    sections: [
      {
        heading: "Why I built this",
        body: "Most demand forecasting just looks at past sales. But anyone who's worked retail knows that a rainy weekend or a local festival changes everything. I wanted to build something that actually accounts for those real-world factors instead of pretending they don't exist.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      },
      {
        heading: "The data pipeline",
        body: "I wrote a synthetic data generator that creates realistic transactions for 10 stores and 56 SKUs. It models seasonal patterns, day-of-week effects, how weather impacts different product categories, and holiday spikes. Then I pull in real weather data and event calendars to build a 30-feature dataset.",
        image:
          "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=800&fit=crop",
      },
      {
        heading: "ML and anomaly detection",
        body: "The model is XGBoost with 30 features, hitting an R² of 0.75. On top of the forecasting, I added anomaly detection using both Z-scores and Isolation Forest so retailers can tell the difference between a real trend and a weird blip. The whole thing has 61 tests to keep it reliable.",
        image:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=800&fit=crop",
      },
      {
        heading: "Dashboard and API",
        body: "The backend is FastAPI with 9 endpoints for forecasts, anomalies, and analytics. The frontend is a Next.js dashboard with KPI cards, forecast charts, an anomaly feed, and weather impact views. Everything runs in Docker Compose so you can spin it up with one command.",
      },
    ],
    learnings: [
      "Building the synthetic data generator taught me more about retail than any dataset could. You have to really understand seasonal patterns and category dynamics before you can fake them convincingly.",
      "Feature engineering did way more for the model than tuning hyperparameters. Most of the jump to 0.75 R² came from better features, not a better model.",
      "Building the whole thing end-to-end showed me integration problems I never would have found working on just one layer at a time.",
    ],
  },
  {
    slug: "documind",
    title: "DocuMind",
    subtitle:
      "Multi-agent platform that reads your documents and answers questions about them",
    description:
      "A platform where multiple AI agents work together to read documents, answer questions with citations, pull out structured data, and write reports. Built with LangChain, LangGraph, and Claude. A supervisor figures out what you're asking for and sends it to the right agent.",
    year: "2026",
    disciplines: [
      "AI Engineering",
      "LLM Orchestration",
      "Backend",
      "RAG Systems",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
    githubUrl: "https://github.com/AmenTauhid/DocuMind",
    metrics: [
      { value: "5", label: "Specialized agents" },
      { value: "RAG", label: "Retrieval-augmented generation" },
      { value: "F1", label: "Built-in eval framework" },
      { value: "100%", label: "Dockerized" },
    ],
    sections: [
      {
        heading: "The idea",
        body: "Most document Q&A tools just throw your question at a vector store and hope for the best. I wanted something smarter, where different agents handle different kinds of tasks. Ask a question? One agent handles that. Need structured data pulled out? Different agent. Want a full report? Another one entirely.",
        image:
          "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=800&fit=crop",
      },
      {
        heading: "How the agents work",
        body: "There are five agents coordinated by LangGraph. A Supervisor classifies what you're asking and routes it. The Researcher does RAG-powered Q&A with source citations. The Extractor pulls structured JSON from documents. The Analyst finds patterns across multiple documents. And the Report Writer generates markdown reports. Each one has its own prompts, tools, and output format.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop",
      },
      {
        heading: "RAG and vector search",
        body: "Documents get chunked, embedded with sentence-transformers, and stored in ChromaDB. The Researcher does hybrid retrieval, mixing semantic similarity with keyword matching, to find the best passages. Then it puts together an answer with inline citations that point back to the exact document and page.",
        image:
          "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=1200&h=800&fit=crop",
      },
      {
        heading: "Testing it properly",
        body: "I didn't want to just eyeball quality, so I built an eval framework that measures retrieval precision, recall, and F1, plus uses LLM-as-judge scoring for answer quality. Now every change to the pipeline can be tested against a real benchmark instead of vibes.",
      },
    ],
    learnings: [
      "The supervisor's routing accuracy is everything. If it sends your question to the wrong agent, nothing else matters. That's where I spent most of my time.",
      "How you chunk documents matters way more than which embedding model you pick. Bad chunking kills retrieval quality no matter how good the vectors are.",
      "You can't improve LLM systems without measuring them. The eval framework was the thing that actually let me iterate with confidence.",
    ],
  },
  {
    slug: "forkable",
    title: "Forkable",
    subtitle: "Version control for recipes, like Git but for cooking",
    description:
      "An iOS app that treats recipes like code repos. You can fork someone's recipe, tweak the ingredients (with auto-recalculated baker's percentages), see a side-by-side diff of what changed, and merge variations back together. Pure SwiftUI, no external dependencies.",
    year: "2026",
    disciplines: [
      "iOS Development",
      "SwiftUI",
      "UX Design",
      "Native Mobile",
    ],
    coverImage:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
    githubUrl: "https://github.com/AmenTauhid/Forkable",
    metrics: [
      { value: "100%", label: "Pure Swift, zero dependencies" },
      { value: "iOS 17+", label: "SwiftUI native" },
      { value: "Git", label: "Inspired version control" },
      { value: "Real-time", label: "Baker's % recalculation" },
    ],
    sections: [
      {
        heading: "Where this came from",
        body: "Everyone tweaks recipes. You borrow your friend's banana bread recipe, use less sugar, swap in oat milk, whatever. But there's no good way to keep track of what you changed or compare variations. I thought: what if recipes worked like Git repos? Fork it, make changes, see the diff, merge the best version.",
        image:
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
      },
      {
        heading: "What it does",
        body: "You get a dashboard of recipe repos with an activity feed, detail views with commit history, forking with real-time baker's percentage recalculation (change one ingredient and the rest scale automatically), side-by-side diffs for reviewing changes, and a fork browser with search. It all feels like a normal iOS app, not a developer tool.",
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop",
      },
      {
        heading: "How it's built",
        body: "Clean separation: Models, Views, Theme, and Data layers, all in pure Swift with zero dependencies. The UI is SwiftUI targeting iOS 17+. The version control part uses a lightweight diffing algorithm that compares ingredient lists and instructions, then shows changes with red/green highlighting just like a code diff.",
        image:
          "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&h=800&fit=crop",
      },
      {
        heading: "Making it feel right",
        body: "The hardest part was making Git concepts make sense to people who've never used Git. So 'fork' became 'make it yours,' 'commit' became 'save changes,' and 'merge' became 'combine versions.' The diff view uses side-by-side cards instead of inline markup so you can scan ingredient changes at a glance.",
      },
    ],
    learnings: [
      "Git's mental model maps to cooking way better than I expected. The vocabulary just needed translating for a non-dev audience.",
      "Building with zero dependencies forces you to actually learn the platform. No abstractions hiding what's going on under the hood.",
      "Renaming things was the single biggest UX win. 'Fork' to 'make it yours' changed how people understood the whole app.",
    ],
  },
  {
    slug: "chronoscope",
    title: "Chronoscope",
    subtitle: "A DVR for your code, built as a VS Code extension",
    description:
      "A VS Code extension that auto-captures workspace snapshots on every file save and lets you scrub through a visual timeline to see exactly how your code evolved. Supports manual snapshots at critical moments and is fully configurable.",
    year: "2026",
    disciplines: [
      "Developer Tools",
      "TypeScript",
      "VS Code Extension",
      "DX",
    ],
    coverImage: "",
    githubUrl: "https://github.com/AmenTauhid/Chronoscope",
    metrics: [
      { value: "Auto", label: "Snapshots on every save" },
      { value: "Visual", label: "Timeline scrubber" },
      { value: "TS", label: "Built in TypeScript" },
      { value: "0", label: "Config needed to start" },
    ],
    sections: [
      {
        heading: "Why this exists",
        body: "Git is great for intentional checkpoints, but sometimes you want to see how your code looked 20 saves ago, not 3 commits ago. I wanted something that just quietly records everything and lets me scrub back through it like a video timeline.",
        image: "placeholder",
      },
      {
        heading: "How it works",
        body: "Every time you save a file, Chronoscope captures a snapshot of the workspace state. You get a visual timeline in the sidebar where you can click any point to see the code at that moment. You can also drop manual snapshots when you're about to try something risky.",
        image: "placeholder",
      },
      {
        heading: "Building a VS Code extension",
        body: "The extension API has its quirks. Managing snapshot storage efficiently without bloating the workspace was the main challenge. I implemented configurable limits on max snapshots and ignore patterns so it doesn't snapshot node_modules or build artifacts.",
      },
    ],
    learnings: [
      "Developer tools need to be invisible until you need them. If it interrupts your flow, nobody will use it.",
      "The VS Code Extension API is powerful but poorly documented in places. Reading other extensions' source code was more useful than the official docs.",
      "Storage management is the unsexy but critical part. Without snapshot limits and ignore patterns, the extension would eat disk space fast.",
    ],
  },
  {
    slug: "trackthatstreet",
    title: "TrackThatStreet",
    subtitle: "Real-time TTC streetcar tracker for Toronto",
    description:
      "An iOS app that shows live positions of all 9 Toronto streetcar routes on a color-coded map, with arrival predictions, countdown timers, and service bunching alerts. Built with Swift 6, SwiftUI, MapKit, and async/await.",
    year: "2026",
    disciplines: [
      "iOS Development",
      "SwiftUI",
      "MapKit",
      "Real-time Data",
    ],
    coverImage: "",
    githubUrl: "https://github.com/AmenTauhid/TrackThatStreet",
    metrics: [
      { value: "9", label: "Streetcar routes tracked" },
      { value: "25s", label: "Auto-refresh interval" },
      { value: "Live", label: "Real-time positions" },
      { value: "Swift 6", label: "Modern concurrency" },
    ],
    sections: [
      {
        heading: "The idea",
        body: "Toronto's streetcar system doesn't have the best real-time tracking. The official app is clunky and slow. I wanted something that just shows me where every streetcar is right now, on a clean map, with arrival predictions that actually update.",
        image: "placeholder",
      },
      {
        heading: "Real-time data pipeline",
        body: "The app pulls from the NextBus XML API every 25 seconds, parses vehicle positions, and renders them on a MapKit view with color-coded route markers. Arrival predictions use the same API to show countdown timers for upcoming streetcars at any stop.",
        image: "placeholder",
      },
      {
        heading: "Service alerts",
        body: "I added bunching and gap detection so you can see when streetcars are clustered together (meaning long waits ahead) or spread too thin. The app uses offline caching so route info loads instantly even without a connection.",
      },
    ],
    learnings: [
      "Working with transit APIs teaches you a lot about handling unreliable data. Vehicles drop off the feed, positions jump, and you have to smooth all of that out.",
      "MapKit in SwiftUI is much better than it used to be. The new MapKit APIs in iOS 17 made this project way more feasible.",
      "Real-time apps need aggressive caching. Without offline route data, every cold start would feel broken.",
    ],
  },
  {
    slug: "pharmatrack",
    title: "PharmaTrack",
    subtitle: "Web portal for pharmacists to manage prescriptions and message patients",
    description:
      "A React web app where pharmacists can view patient prescriptions, search through patient lists, and communicate with patients in real time via a messaging system. Built with Firebase for auth, database, and storage.",
    year: "2025",
    disciplines: [
      "React",
      "Firebase",
      "Full Stack",
      "Healthcare",
    ],
    coverImage: "",
    githubUrl: "https://github.com/AmenTauhid/PharmaTrack-WebApp",
    metrics: [
      { value: "Real-time", label: "Patient messaging" },
      { value: "Firebase", label: "Auth + Firestore + Storage" },
      { value: "React", label: "Component-based UI" },
      { value: "HIPAA", label: "Security-conscious design" },
    ],
    sections: [
      {
        heading: "What it does",
        body: "Pharmacists log in, see their patient list, search for specific patients, view prescription histories, and send messages directly to patients through the app. There's a companion iOS app on the patient side so the whole system works end-to-end.",
        image: "placeholder",
      },
      {
        heading: "Firebase backend",
        body: "Auth handles pharmacist login, Firestore stores patient records and prescriptions, and the real-time messaging runs through Firestore listeners so messages appear instantly on both ends. Storage handles any uploaded documents or images.",
        image: "placeholder",
      },
      {
        heading: "Healthcare considerations",
        body: "Working in healthcare means thinking about data security from day one. Every route is protected, patient data is scoped to authorized pharmacists, and the messaging system doesn't expose any medical data in notifications.",
      },
    ],
    learnings: [
      "Firebase is great for prototyping real-time features fast, but Firestore's query limitations force you to think about data modeling upfront.",
      "Healthcare apps have stricter UX requirements than you'd expect. Error states and empty states matter way more when someone is looking for medication info.",
      "Building both sides of a system (web portal + mobile app) gives you a much better understanding of API design than building just one.",
    ],
  },
];
