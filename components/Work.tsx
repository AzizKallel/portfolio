"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { projects } from "@/data/content";

const colorMap: Record<string, string> = {
  coral: "from-coral/40 to-coral/5",
  violet: "from-violet/40 to-violet/5",
  yellow: "from-yellow/40 to-yellow/5",
};

export default function Work() {
  return (
    <section id="work" className="bg-ink px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-3 text-violet">Selected work</p>
            <h2 className="max-w-xl font-display text-4xl font-bold leading-tight text-cream md:text-5xl">
              Projects I&apos;ve worked on with clients.
            </h2>
          </div>
          <p className="max-w-sm text-cream/60">
            A closer look at the brands, founders, and professionals I've helped bring to life through content.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-3xl border border-white/10"
            >
              {/* Video layer — plays automatically once you drop a real clip in /public */}
              {project.video ? (
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src={project.video}
                  poster={project.poster || undefined}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <div
                  className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${colorMap[project.color]}`}
                >
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink/40">
                      <Play size={18} className="ml-0.5 text-cream/70" />
                    </span>
                    <span className="eyebrow max-w-[10rem] text-cream/50">
                      Drop your video in /public/work
                    </span>
                  </div>
                </div>
              )}

              {/* Readability scrim */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-ink/40" />

              <div className="relative z-10 mt-auto p-6">
                <p className="eyebrow mb-2 text-cream/70">
                  {project.client} · {project.year}
                </p>
                <h3 className="font-display text-xl font-bold text-cream md:text-2xl">
                  {project.result}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}