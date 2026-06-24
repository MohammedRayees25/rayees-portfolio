import { Github, Linkedin, Mail } from "lucide-react";
import { SITE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2 font-mono text-sm">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-sky-500 to-violet-500 text-white">
            MR
          </span>
          <span className="text-muted-foreground">
            © {new Date().getFullYear()} {SITE.name}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={SITE.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-white/30 hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={SITE.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-white/30 hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${SITE.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:border-white/30 hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          Built with Next.js, Tailwind &amp; Framer Motion
        </p>
      </div>
    </footer>
  );
}
