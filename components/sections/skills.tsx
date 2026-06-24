"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Spotlight } from "@/components/shared/spotlight";
import { SKILL_CATEGORIES } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="A full-stack data & AI toolkit"
          description="From ingestion and transformation to dashboards and LLM-powered apps."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {SKILL_CATEGORIES.map((category, idx) => (
            <Reveal key={category.title} delay={idx}>
              <Spotlight className="card-hover h-full rounded-2xl border border-white/10 bg-card/60 backdrop-blur-xl">
                <div className="p-6 md:p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <span
                      className={cn(
                        "h-9 w-1.5 rounded-full bg-gradient-to-b",
                        category.accent
                      )}
                    />
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                    <span className="ml-auto text-xs text-muted-foreground">
                      {category.skills.length} skills
                    </span>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <div key={skill.name}>
                        <div className="mb-1.5 flex items-center justify-between text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <span className="font-mono text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                          <motion.div
                            className={cn(
                              "h-full rounded-full bg-gradient-to-r",
                              category.accent
                            )}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{
                              duration: 1,
                              delay: 0.15 + i * 0.05,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
