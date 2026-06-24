"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Boxes,
  ChevronDown,
  Cpu,
  Database,
  Sparkles,
  Warehouse,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { ARCHITECTURE_STEPS } from "@/lib/data";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  Database,
  Workflow,
  Boxes,
  Cpu,
  Warehouse,
  BarChart3,
  Sparkles,
};

export function Architecture() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="architecture" className="section-padding">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Architecture"
          title="An end-to-end data & AI roadmap"
          description="Hover or tap each stage to explore a modern lakehouse pipeline — from raw sources to GenAI products."
        />

        <div className="flex flex-col items-center">
          {ARCHITECTURE_STEPS.map((step, idx) => {
            const Icon = icons[step.icon] ?? Database;
            const isActive = active === idx;
            return (
              <div key={step.label} className="flex w-full flex-col items-center">
                <Reveal delay={idx} className="w-full">
                  <motion.button
                    onMouseEnter={() => setActive(idx)}
                    onMouseLeave={() => setActive(null)}
                    onClick={() => setActive(isActive ? null : idx)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                      "group flex w-full items-center gap-4 rounded-2xl border bg-card/60 p-5 text-left backdrop-blur-xl transition-all",
                      isActive
                        ? "border-sky-400/40 shadow-lg shadow-sky-500/10"
                        : "border-white/10 hover:border-white/20"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all",
                        isActive
                          ? "bg-gradient-to-br from-sky-500 to-violet-500 text-white"
                          : "bg-white/[0.05] text-sky-300"
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-muted-foreground">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <h3 className="font-semibold">{step.label}</h3>
                      </div>
                      <motion.p
                        initial={false}
                        animate={{
                          opacity: isActive ? 1 : 0.6,
                        }}
                        className="text-sm text-muted-foreground"
                      >
                        {step.desc}
                      </motion.p>
                    </div>
                  </motion.button>
                </Reveal>

                {idx < ARCHITECTURE_STEPS.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="my-1.5"
                  >
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-colors",
                        active === idx || active === idx + 1
                          ? "text-sky-400"
                          : "text-muted-foreground/40"
                      )}
                    />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
