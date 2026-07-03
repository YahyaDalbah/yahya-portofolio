import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const groups = [
  {
    label: "Frameworks",
    skills: ["React", "Angular", "AngularJS", "Express"],
  },
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "HTML", "CSS / SCSS"],
  },
  {
    label: "Styling & UI",
    skills: ["Tailwind CSS", "Bootstrap", "Design systems", "Responsive design"],
  },
  {
    label: "Specialties",
    skills: [
      "AI streaming APIs",
      "Real-time data",
      "Legacy migration",
      "Performance optimization",
      "MongoDB",
      "Firebase",
      "Git",
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Toolbox" title="Skills & technologies" />

        <div className="grid gap-6 sm:grid-cols-2">
          {groups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.08}>
              <div className="glass-card h-full p-8">
                <h3 className="mb-4 text-sm font-medium tracking-widest text-accent-2 uppercase">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
