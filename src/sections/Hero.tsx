import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";
import GlowBackground from "../components/GlowBackground";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  });

  return (
    <section className="relative flex min-h-svh items-center overflow-hidden pt-16">
      <GlowBackground />
      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <motion.div
          {...fadeUp(0)}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-300"
        >
          <Sparkles className="h-4 w-4 text-accent-2" />
          Available for freelance projects
        </motion.div>

        <motion.h1
          {...fadeUp(0.1)}
          className="font-display max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          I build fast, <span className="text-gradient">AI-powered</span> web
          experiences.
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-6 max-w-xl text-lg text-zinc-400"
        >
          I'm Yahya Dalbah, a frontend engineer specializing in React,
          TypeScript, and real-time AI integrations. I turn complex ideas into
          polished products people love to use.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/#work"
            className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3 font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-[1.03]"
          >
            View my work
          </Link>
          <a
            href="mailto:yahya1dalbah@gmail.com"
            className="rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            Hire me
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(0.5)}
          className="mt-24 flex items-center gap-2 text-sm text-zinc-500"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
