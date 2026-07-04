import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="glass-card relative overflow-hidden p-10 text-center md:p-20">
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden
            >
              <div className="absolute -bottom-32 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]" />
            </div>

            <div className="relative">
              <p className="mb-3 text-sm font-medium tracking-widest text-accent-2 uppercase">
                Contact
              </p>
              <h2 className="font-display mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white md:text-5xl">
                Let's build something{" "}
                <span className="text-gradient">great together</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-zinc-400">
                Have a project in mind? I usually reply within a day. Tell me
                what you're building and I'll tell you how I can help.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:yahya1dalbah@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-7 py-3 font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:scale-[1.03]"
                >
                  <Mail className="h-5 w-5" />
                  yahya1dalbah@gmail.com
                </a>
                <a
                  href="https://github.com/YahyaDalbah"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/yahya-dalbah-68728324b/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
