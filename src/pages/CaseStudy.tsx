import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Mail } from "lucide-react";
import { getProject } from "../data/projects";
import Reveal from "../components/Reveal";
import TechChip from "../components/TechChip";
import ImageWithFallback from "../components/ImageWithFallback";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="pt-16">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
        >
          <div className="absolute -top-32 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24">
          <Reveal>
            <Link
              to="/#work"
              className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all work
            </Link>

            <div className="flex items-center gap-3 text-sm text-zinc-500">
              <span>{project.year}</span>
              <span className="h-1 w-1 rounded-full bg-zinc-600" />
              <span>{project.role}</span>
            </div>

            <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-zinc-400">
              {project.tagline}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <TechChip key={t} label={t} />
              ))}
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-2.5 font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-[1.03]"
              >
                Visit live site
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </Reveal>

          <Reveal delay={0.15} className="mt-12">
            <div className="glass-card overflow-hidden">
              <ImageWithFallback
                src={project.heroImage}
                alt={project.heroImageAlt}
                label={`${project.title} — hero screenshot`}
              />
            </div>
          </Reveal>
        </div>
      </header>

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <Reveal>
          <h2 className="font-display mb-6 text-2xl font-bold text-white md:text-3xl">
            Overview
          </h2>
          <div className="flex max-w-3xl flex-col gap-4 text-lg text-zinc-400">
            {project.overview.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
        <Reveal>
          <h2 className="font-display mb-10 text-2xl font-bold text-white md:text-3xl">
            Key features
          </h2>
        </Reveal>
        <div className="flex flex-col gap-10">
          {project.features.map((feature, i) => (
            <Reveal key={feature.title} delay={0.05}>
              <div
                className={`glass-card grid items-center gap-8 overflow-hidden p-8 md:grid-cols-2 md:p-10 ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <h3 className="font-display mb-3 text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </div>
                {feature.image && (
                  <div className="overflow-hidden rounded-xl border border-white/10">
                    <ImageWithFallback
                      src={feature.image}
                      alt={feature.imageAlt ?? feature.title}
                      label={feature.title}
                    />
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Technical highlights */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
        <Reveal>
          <h2 className="font-display mb-8 text-2xl font-bold text-white md:text-3xl">
            Technical highlights
          </h2>
          <ul className="flex max-w-3xl flex-col gap-4">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-zinc-400">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent-2" />
                {highlight}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <Reveal>
          <div className="glass-card flex flex-col items-center gap-6 p-10 text-center md:p-14">
            <h2 className="font-display max-w-xl text-2xl font-bold text-white md:text-3xl">
              Want something like this for your business?
            </h2>
            <p className="max-w-xl text-zinc-400">
              I can build your idea end to end — design, frontend, backend, and
              AI integration.
            </p>
            <a
              href="mailto:yahya1dalbah@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3 font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-[1.03]"
            >
              <Mail className="h-5 w-5" />
              Get in touch
            </a>
          </div>
        </Reveal>
      </section>
    </article>
  );
}
