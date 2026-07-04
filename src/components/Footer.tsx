import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 md:flex-row">
        <p>© {new Date().getFullYear()} Yahya Dalbah. Built with React & Tailwind.</p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/YahyaDalbah"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="transition-colors hover:text-white"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/yahya-dalbah-68728324b/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="transition-colors hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:yahya1dalbah@gmail.com"
            aria-label="Email Yahya"
            className="transition-colors hover:text-white"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
