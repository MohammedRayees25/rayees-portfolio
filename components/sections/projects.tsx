"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Spotlight } from "@/components/shared/spotlight";
import { Badge } from "@/components/ui/badge";
import { PROJECTS, type Project } from "@/lib/data";

export function Projects() {
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Work that ships to production"
          description="Selected projects across data engineering, analytics and applied AI."
        />

        {featured && <FeaturedCard project={featured} />}

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {rest.map((project, idx) => (
            <Reveal key={project.title} delay={idx}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <Reveal>
      <Spotlight
        className="card-hover rounded-3xl border border-white/10 bg-card/60 backdrop-blur-xl"
        color="rgba(139,92,246,0.18)"
      >
        <div className="grid gap-8 p-7 md:grid-cols-2 md:p-10">
          <div className="flex flex-col">
            <div className="mb-4 flex items-center gap-2">
              <Badge variant="accent">
                <Star className="mr-1 h-3 w-3" /> Featured
              </Badge>
              <Badge variant="outline">{project.category}</Badge>
            </div>

            <h3 className="text-2xl font-bold md:text-3xl">{project.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            {project.features && (
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 to-violet-400" />
                    {f}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge key={t} variant="primary">
                  {t}
                </Badge>
              ))}
            </div>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-5 py-2.5 text-sm font-medium text-white transition-all hover:brightness-110"
              >
                <Github className="h-4 w-4" /> View on GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* stats panel */}
          <div className="flex flex-col justify-center gap-4">
            {project.stats?.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Spotlight>
    </Reveal>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const Wrapper = project.github ? "a" : "div";
  const wrapperProps = project.github
    ? { href: project.github, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Spotlight className="card-hover h-full rounded-2xl border border-white/10 bg-card/60 backdrop-blur-xl">
      <Wrapper
        {...wrapperProps}
        className="flex h-full flex-col p-6"
      >
        <div className="mb-3 flex items-center justify-between">
          <Badge variant="outline">{project.category}</Badge>
          {project.github && (
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover/spot:translate-x-0.5 group-hover/spot:-translate-y-0.5" />
          )}
        </div>
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <Badge key={t} className="text-[11px]">
              {t}
            </Badge>
          ))}
        </div>
      </Wrapper>
    </Spotlight>
  );
}
