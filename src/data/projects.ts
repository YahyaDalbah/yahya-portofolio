export interface ProjectFeature {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  tech: string[];
  liveUrl?: string;
  heroImage: string;
  heroImageAlt: string;
  overview: string[];
  features: ProjectFeature[];
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: "ai-cv-maker",
    title: "AI CV Maker",
    tagline:
      "A full-stack web app that writes, formats, and exports professional CVs — powered by Claude.",
    year: "2025",
    role: "Design, frontend, backend — solo build",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "MongoDB",
      "Anthropic API",
      "Puppeteer",
    ],
    liveUrl: "https://makeaicv.com",
    heroImage: "/images/cvmaker-hero.png",
    heroImageAlt: "AI CV Maker editor with live A4 preview",
    overview: [
      "Writing a CV is slow and stressful: people don't know what to write, formatting breaks the moment content changes, and exporting a clean PDF is harder than it should be. AI CV Maker solves all three in one place.",
      "Users write in a structured editor and watch a pixel-perfect A4 preview update live. AI suggestions help them phrase their experience professionally, an upload feature parses their existing PDF to pre-fill everything, and one click produces a print-ready PDF.",
    ],
    features: [
      {
        title: "Live A4 preview with dynamic pagination",
        description:
          "The preview mirrors the final document exactly — content flows across A4 pages in real time as the user types, with automatic page breaks and responsive scaling so it works on any screen size, including phones.",
        image: "/images/cvmaker-hero.png",
        imageAlt: "Live A4 preview updating while editing",
      },
      {
        title: "AI-powered content suggestions",
        description:
          "Integrated the Anthropic API to rewrite and improve CV content on demand. Users get professional, tailored phrasing for their bullet points instead of staring at a blank field.",
        image: "/images/cvmaker-ai.png",
        imageAlt: "AI content suggestions in the editor",
      },
      {
        title: "PDF upload & auto-populate",
        description:
          "Users can upload their existing CV and the app parses it, extracting their details to pre-fill every field — turning a 30-minute data-entry chore into seconds.",
        image: "/images/cvmaker-upload.png",
        imageAlt: "Uploading an existing CV to auto-fill fields",
      },
      {
        title: "One-click PDF export",
        description:
          "A server-side Puppeteer pipeline renders the exact preview into a crisp, print-ready PDF. What users see is precisely what they download — no layout surprises.",
        image: "/images/cvmaker-export.png",
        imageAlt: "Exported PDF result",
      },
    ],
    highlights: [
      "Built the pagination engine that measures rendered content and splits it across A4 pages in real time — the hardest part of any document editor.",
      "Designed a preview that scales responsively from desktop to mobile while staying faithful to the printed output.",
      "Server-side PDF generation with Puppeteer guarantees the export matches the preview pixel for pixel.",
      "Full-stack ownership: React + Tailwind frontend, Express + MongoDB backend, AI integration, and deployment.",
    ],
  },
  {
    slug: "messaging-app",
    title: "Realtime Messaging App",
    tagline:
      "A real-time chat application with multi-user messaging, built with React and Firebase — leading a team of four.",
    year: "2024",
    role: "Team lead & frontend developer",
    tech: ["React", "Firebase", "JavaScript", "CSS"],
    heroImage: "/images/chat-hero.png",
    heroImageAlt: "Realtime chat application main view",
    overview: [
      "A real-time messaging platform where users chat instantly across conversations, with messages syncing live through Firebase — no refresh, no polling.",
      "Beyond the code, this project was about leadership: I led a team of four developers, assigning tasks, reviewing every pull request, resolving merge conflicts, and unblocking teammates when they got stuck.",
    ],
    features: [
      {
        title: "Real-time multi-user messaging",
        description:
          "Messages appear instantly for everyone in the conversation using Firebase's real-time listeners — typing on one device shows up on another in milliseconds.",
        image: "/images/chat-hero.png",
        imageAlt: "Live conversation between users",
      },
      {
        title: "Team leadership in practice",
        description:
          "Ran the project like a real product team: task assignment, code review on every merge, conflict resolution, and debugging sessions to keep four developers shipping in parallel.",
        image: "/images/chat-feature.png",
        imageAlt: "Conversations and user list view",
      },
    ],
    highlights: [
      "Architected the Firebase data model for conversations and messages to keep reads fast and listeners cheap.",
      "Led a 4-person team end to end — planning, code review, and delivery.",
      "Shipped instant message sync with zero manual refresh using real-time subscriptions.",
    ],
  },
];

export function getProject(slug: string | undefined): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
