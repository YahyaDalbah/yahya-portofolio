import { useState } from "react";
import { Link } from "react-router-dom";
import { Github, Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-base/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          className="font-display text-lg font-bold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          <span className="text-gradient">Y</span>ahya{" "}
          <span className="text-gradient">D</span>albah
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/YahyaDalbah"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-zinc-400 transition-colors hover:text-white"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="mailto:yahya1dalbah@gmail.com"
            className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-4 py-1.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Hire me
          </a>
        </div>

        <button
          type="button"
          className="text-zinc-300 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-base/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-zinc-300 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:yahya1dalbah@gmail.com"
              className="w-fit rounded-full bg-gradient-to-r from-accent to-accent-2 px-4 py-1.5 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Hire me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
