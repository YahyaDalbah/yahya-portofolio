import cvmakerHero from "../assets/cvmaker/cvmaker-hero.png";
import cvAiFollowup from "../assets/cvmaker/cv-ai-followup.png";
import cvMultiField from "../assets/cvmaker/cv-multi-field.png";
import cvTailor from "../assets/cvmaker/cv-tailor.png";
import cvTemplates from "../assets/cvmaker/cv-templates.png";

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
      "A full-stack web app that writes, tailors, and exports professional CVs — powered by Claude.",
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
    heroImage: cvmakerHero,
    heroImageAlt:
      "MakeAICV editor with structured form on the left and live A4 CV preview on the right",
    overview: [
      "Writing a CV is slow and stressful: people don't know what to write, formatting breaks the moment content changes, and tailoring it to each job application takes hours. AI CV Maker solves all of that in one place.",
      "Users write in a structured editor and watch a pixel-perfect A4 preview update live. AI suggestions polish their phrasing section by section, a job-tailoring engine scores their CV against any job description, and one click produces a print-ready PDF.",
    ],
    features: [
      {
        title: "Live A4 preview with dynamic pagination",
        description:
          "The preview mirrors the final document exactly — content flows across A4 pages in real time as the user types, with automatic page breaks and responsive scaling so it works on any screen size.",
        image: cvmakerHero,
        imageAlt: "Editing a CV with the live A4 preview updating alongside",
      },
      {
        title: "AI suggestions you can talk back to",
        description:
          "Every section has an Improve button that generates an AI rewrite inline. Users can accept, discard, regenerate — or refine it conversationally with follow-ups like \"make it shorter\" until it's exactly right.",
        image: cvAiFollowup,
        imageAlt:
          "Inline AI suggestion with accept, regenerate, and a follow-up prompt to make it shorter",
      },
      {
        title: "Improve everything at once — with full control",
        description:
          "One click reviews an entire section: the AI proposes rewrites for every entry, shown side by side against the original. Users tick exactly which suggestions to apply — nothing changes without their say-so.",
        image: cvMultiField,
        imageAlt:
          "Improve Experience modal comparing current and suggested bullet points side by side",
      },
      {
        title: "Tailor your CV to any job posting",
        description:
          "Paste a job description and the app scores your fit, surfaces the keywords you're missing, and proposes a tailored summary and targeted experience rewrites — turning one CV into a per-application weapon.",
        image: cvTailor,
        imageAlt:
          "Tailor to a job view showing a 78% match score, missing keywords, and a tailored summary",
      },
      {
        title: "Eight templates, endless combinations",
        description:
          "A template gallery with accent-color and font-size controls — from classic single-column to ATS-optimized layouts. Switching templates re-renders the same content instantly, no reformatting needed.",
        image: cvTemplates,
        imageAlt:
          "Template gallery with eight CV designs, color picker, and font size slider",
      },
    ],
    highlights: [
      "Built the pagination engine that measures rendered content and splits it across A4 pages in real time — the hardest part of any document editor.",
      "Server-side PDF export with Puppeteer guarantees the download matches the preview pixel for pixel.",
      "PDF upload and parsing auto-populates every field from a user's existing CV — a 30-minute chore turned into seconds.",
      "Job-tailoring pipeline computes a match score and keyword gaps against any pasted job description using the Anthropic API.",
      "Full-stack ownership: React + Tailwind frontend, Express + MongoDB backend, AI integration, auth, and deployment.",
    ],
  },
];

export function getProject(slug: string | undefined): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
