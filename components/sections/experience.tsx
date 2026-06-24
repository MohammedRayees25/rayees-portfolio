"use client";

import { motion } from "framer-motion";
import { Building2, CheckCircle2, Trophy } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Spotlight } from "@/components/shared/spotlight";
import { Badge } from "@/components/ui/badge";
import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've made an impact"
          description="A track record of reliable delivery and measurable business outcomes."
        />

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-sky-500/60 via-violet-500/40 to-transparent md:left-1/2" />

          {EXPERIENCE.map((item, idx) => (
            <Reveal key={item.company} delay={idx}>
              <div className="relative mb-10 pl-12 md:pl-0">
                {/* node */}
                <span className="absolute left-[9px] top-2 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center md:left-1/2">
                  <span className="absolute h-3.5 w-3.5 animate-pulse-glow rounded-full bg-sky-400/40" />
                  <span className="relative h-2 w-2 rounded-full bg-sky-400" />
                </span>

                <Spotlight className="rounded-2xl border border-white/10 bg-card/60 backdrop-blur-xl md:w-[calc(50%-2rem)] md:ml-auto">
                  <div className="p-6 md:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <Building2 className="h-5 w-5 text-sky-400" />
                          <h3 className="text-xl font-semibold">{item.company}</h3>
                        </div>
                        <p className="mt-1 text-sm font-medium text-sky-300">{item.role}</p>
                      </div>
                      <Badge variant="outline">{item.period}</Badge>
                    </div>

                    <div className="mt-5">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Responsibilities
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.responsibilities.map((r) => (
                          <Badge key={r}>{r}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5">
                      <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        <Trophy className="h-3.5 w-3.5 text-amber-400" /> Achievements
                      </p>
                      <ul className="space-y-2">
                        {item.achievements.map((a, i) => (
                          <motion.li
                            key={a}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                            {a}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Spotlight>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
