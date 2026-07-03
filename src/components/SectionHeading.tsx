import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 max-w-2xl md:mb-16">
      <p className="mb-3 text-sm font-medium tracking-widest text-accent-2 uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-zinc-400">{description}</p>}
    </Reveal>
  );
}
