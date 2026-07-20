"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { projects, type Project } from "@/data/content";

const colorMap: Record<string, string> = {
  coral: "from-coral/40 to-coral/5",
  violet: "from-violet/40 to-violet/5",
  yellow: "from-yellow/40 to-yellow/5",
};

export default function Work() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Close on Escape, and lock background scroll while the modal is open
  useEffect(() => {
    if (!activeProject) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    document.addEventListener("keydown", onKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeProject]);

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
            <motion.button
              type="button"
              key={project.slug}
              onClick={() => project.video && setActiveProject(project)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`group relative flex aspect-[4/5] w-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 text-left transition-transform duration-300 ${
                project.video
                  ? "cursor-pointer hover:scale-[1.02] focus-visible:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
                  : "cursor-default"
              }`}
            >
              {/* Video layer — plays automatically once you drop a real clip in /public */}
              {project.video ? (
                <>
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={project.video}
                    poster={project.poster || undefined}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  {/* Play affordance shown on hover to signal it's clickable */}
                  <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/30 group-hover:opacity-100">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream/90 shadow-lg">
                      <Play size={20} className="ml-0.5 text-ink" />
                    </span>
                  </div>
                </>
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
            </motion.button>
          ))}
        </div>
      </div>

      {/* Video popup — opens with sound and full controls when a project card is clicked */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm md:p-10"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close video"
                className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-cream transition-colors hover:bg-white/20 md:-right-12 md:-top-2"
              >
                <X size={20} />
              </button>

              <video
                key={activeProject.slug}
                className="aspect-video w-full rounded-3xl border border-white/10 bg-black"
                src={activeProject.video}
                poster={activeProject.poster || undefined}
                autoPlay
                controls
                playsInline
              />

              <div className="mt-4 px-1">
                <p className="eyebrow mb-1 text-cream/60">
                  {activeProject.client} · {activeProject.year}
                </p>
                <h3 className="font-display text-lg font-bold text-cream md:text-xl">
                  {activeProject.result}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}