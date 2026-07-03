import { Briefcase, GraduationCap } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const entries = [
  {
    icon: Briefcase,
    period: "Jul 2025 — Present",
    title: "Frontend Engineer · Harri",
    points: [
      "Migrated 100K+ lines of legacy AngularJS to React",
      "Built a shared UI component library adopted by 6 teams and 20+ developers",
      "Optimized streaming data handling for real-time AI agent responses",
    ],
  },
  {
    icon: Briefcase,
    period: "Mar 2023 — Jul 2023",
    title: "Frontend Developer Intern · Foothill Technology Solutions",
    points: [
      "Built modular React components with TypeScript and Redux Toolkit",
      "Developed features for a POS system managing product inventory",
    ],
  },
  {
    icon: GraduationCap,
    period: "2022 — 2026",
    title: "BSc Computer Science · An-Najah National University",
    points: ["Graduated top of class with a 3.83 GPA"],
  },
];

export default function Experience() {
  return (
    <section id="about" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About me"
          title="Experience that scales"
          description="I work on high-scale production systems by day and ship my own products by night."
        />

        <div className="relative flex flex-col gap-10 before:absolute before:top-2 before:bottom-2 before:left-[15px] before:w-px before:bg-white/10">
          {entries.map((entry, i) => (
            <Reveal key={entry.title} delay={i * 0.08}>
              <div className="relative flex gap-6 pl-0">
                <div className="glass-card z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                  <entry.icon className="h-4 w-4 text-accent-2" />
                </div>
                <div>
                  <p className="mb-1 text-sm text-zinc-500">{entry.period}</p>
                  <h3 className="font-display mb-3 text-lg font-bold text-white">
                    {entry.title}
                  </h3>
                  <ul className="flex flex-col gap-1.5 text-zinc-400">
                    {entry.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
