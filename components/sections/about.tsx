"use client";

import { motion } from "framer-motion";
import { Briefcase, Cloud, Database, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, StaggerGroup, staggerItem } from "@/components/shared/reveal";
import { Spotlight } from "@/components/shared/spotlight";
import { ABOUT } from "@/lib/data";

const focusIcons: Record<string, typeof Database> = {
  SQL: Database,
  "Data Engineering": Briefcase,
  Cloud: Cloud,
  GenAI: Sparkles,
};

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="About"
          title="Engineer at the intersection of data & AI"
          description="Turning raw data into reliable platforms, sharp analytics and intelligent products."
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="space-y-5">
              {ABOUT.paragraphs.map((p) => (
                <p key={p} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  {p}
                </p>
              ))}

              <div className="flex flex-wrap gap-2 pt-2">
                {ABOUT.focus.map((f) => {
                  const Icon = focusIcons[f] ?? Sparkles;
                  return (
                    <span
                      key={f}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium"
                    >
                      <Icon className="h-4 w-4 text-sky-400" />
                      {f}
                    </span>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <StaggerGroup className="grid grid-cols-2 gap-4">
            {ABOUT.highlights.map((h) => (
              <motion.div key={h.label} variants={staggerItem}>
                <Spotlight className="card-hover h-full rounded-2xl border border-white/10 bg-card/60 backdrop-blur-xl">
                  <div className="flex h-full flex-col justify-center gap-1 p-6">
                    <span className="text-3xl font-bold text-gradient md:text-4xl">
                      {h.value}
                      {h.suffix}
                    </span>
                    <span className="text-sm text-muted-foreground">{h.label}</span>
                  </div>
                </Spotlight>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
