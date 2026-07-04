import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import TechChip from "../components/TechChip";
import ImageWithFallback from "../components/ImageWithFallback";

export default function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects that ship"
          description="Real products, built end to end — from the first wireframe to the live URL."
        />

        <div className="flex flex-col gap-10">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <div className="glass-card group grid overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_50px_-12px] hover:shadow-accent/40 md:grid-cols-2">
                <Link
                  to={`/work/${project.slug}`}
                  className="flex items-center justify-center overflow-hidden p-6 md:p-8"
                  aria-label={`${project.title} case study`}
                >
                  <ImageWithFallback
                    src={project.heroImage}
                    alt={project.heroImageAlt}
                    label={`${project.title} screenshot`}
                    className="rounded-lg border border-white/10 shadow-2xl shadow-black/40 transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </Link>

                <div className="flex flex-col justify-center gap-5 p-8 md:p-10">
                  <div className="flex items-center gap-3 text-sm text-zinc-500">
                    <span>{project.year}</span>
                    <span className="h-1 w-1 rounded-full bg-zinc-600" />
                    <span>{project.role}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400">{project.tagline}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <TechChip key={t} label={t} />
                    ))}
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-6">
                    <Link
                      to={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 font-semibold text-accent-2 transition-colors hover:text-white"
                    >
                      Read case study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-white"
                      >
                        Live site
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
