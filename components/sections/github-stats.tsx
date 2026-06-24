"use client";

import { Github } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal, StaggerGroup, staggerItem } from "@/components/shared/reveal";
import { Spotlight } from "@/components/shared/spotlight";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GITHUB_STATS, SITE } from "@/lib/data";

export function GithubStats() {
  const user = SITE.social.githubUser;

  return (
    <section id="github" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="GitHub"
          title="Building in the open"
          description="Contributions, repositories and the languages I ship with most."
        />

        <StaggerGroup className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {GITHUB_STATS.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem}>
              <Spotlight className="card-hover h-full rounded-2xl border border-white/10 bg-card/60 backdrop-blur-xl">
                <div className="flex flex-col items-center gap-1 p-6 text-center">
                  <span className="text-3xl font-bold text-gradient md:text-4xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              </Spotlight>
            </motion.div>
          ))}
        </StaggerGroup>

        {/* live GitHub cards (graceful: images render from github-readme services) */}
        <Reveal className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-4 backdrop-blur-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&hide_border=true&bg_color=00000000&title_color=38bdf8&icon_color=a78bfa&text_color=9ca3af`}
              alt="GitHub statistics"
              loading="lazy"
              className="mx-auto w-full max-w-md"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-4 backdrop-blur-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&hide_border=true&bg_color=00000000&title_color=38bdf8&text_color=9ca3af`}
              alt="Most used languages"
              loading="lazy"
              className="mx-auto w-full max-w-md"
            />
          </div>
        </Reveal>

        <Reveal className="mt-4">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-4 backdrop-blur-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${user}&theme=react-dark&hide_border=true&bg_color=00000000&color=38bdf8&line=a78bfa&point=ffffff&area=true`}
              alt="GitHub activity graph"
              loading="lazy"
              className="w-full"
            />
          </div>
        </Reveal>

        <Reveal className="mt-8 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <a href={SITE.social.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" /> Follow on GitHub
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
