"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Particles } from "@/components/shared/particles";
import { SITE, TECH_BADGES } from "@/lib/data";

/** Typewriter rotator across the role list. */
function useTypingRotator(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = deleting ? 45 : 95;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1300);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

export function Hero() {
  const typed = useTypingRotator(SITE.roles);

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-16"
    >
      {/* particle field */}
      <div className="absolute inset-0 -z-10">
        <Particles />
      </div>

      {/* floating tech badges (desktop) */}
      <FloatingBadges />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-sky-300 backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Available for Data &amp; AI Engineering roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl"
        >
          {SITE.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 flex h-10 items-center justify-center text-xl font-semibold sm:text-3xl md:text-4xl"
        >
          <span className="text-gradient-animated">{typed}</span>
          <span className="ml-1 inline-block h-7 w-[3px] animate-pulse-glow rounded-full bg-sky-400 sm:h-9" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {SITE.tagline} Strong focus on SQL, Data Engineering, Cloud and GenAI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg">
            <a href="#projects">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={SITE.resume} download>
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> Contact Me
            </a>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-5 font-mono text-xs text-muted-foreground"
        >
          WhatsApp: {SITE.whatsapp}
        </motion.p>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-sky-400"
          />
        </div>
      </motion.div>
    </section>
  );
}

function FloatingBadges() {
  const positions = [
    "left-[6%] top-[24%]",
    "left-[12%] top-[58%]",
    "left-[8%] top-[78%]",
    "right-[7%] top-[22%]",
    "right-[12%] top-[52%]",
    "right-[9%] top-[76%]",
  ];
  const picks = TECH_BADGES.slice(0, 6);

  return (
    <div aria-hidden="true" className="absolute inset-0 hidden lg:block">
      {picks.map((badge, i) => (
        <motion.div
          key={badge}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 + i * 0.12 }}
          className={`absolute ${positions[i]}`}
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
            className="glass flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium shadow-lg shadow-black/20"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 to-violet-400" />
            {badge}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
