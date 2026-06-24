"use client";

import { Github, Linkedin, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Spotlight } from "@/components/shared/spotlight";
import { SITE } from "@/lib/data";

const channels = [
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: SITE.social.linkedin,
    icon: Linkedin,
    color: "from-sky-500 to-blue-600",
  },
  {
    label: "GitHub",
    value: SITE.social.githubUser,
    href: SITE.social.github,
    icon: Github,
    color: "from-violet-500 to-purple-600",
  },
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: Mail,
    color: "from-cyan-500 to-teal-600",
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Have a data platform, analytics or GenAI project in mind? I'd love to hear about it."
        />

        <Reveal>
          <Spotlight
            className="overflow-hidden rounded-3xl border border-white/10 bg-card/60 backdrop-blur-xl"
            color="rgba(56,189,248,0.18)"
          >
            <div className="p-8 md:p-12">
              <div className="grid gap-4 sm:grid-cols-3">
                {channels.map((c, idx) => {
                  const Icon = c.icon;
                  return (
                    <motion.a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ y: -4 }}
                      className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/25"
                    >
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${c.color} text-white`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="flex items-center gap-1 font-semibold">
                          {c.label}
                          <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                        <div className="truncate text-sm text-muted-foreground">
                          {c.value}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center">
                <p className="text-muted-foreground">
                  Prefer a quick chat? Message me directly on WhatsApp.
                </p>
                <a
                  href={SITE.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-3 font-medium text-white shadow-lg shadow-emerald-500/20 transition-all hover:brightness-110"
                >
                  <MessageCircle className="h-5 w-5" /> WhatsApp · {SITE.whatsapp}
                </a>
              </div>
            </div>
          </Spotlight>
        </Reveal>
      </div>
    </section>
  );
}
