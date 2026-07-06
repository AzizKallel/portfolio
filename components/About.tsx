"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { about, site } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="bg-ink px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 md:grid-cols-2 md:gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-coral via-violet to-yellow p-1"
        >
          {about.photo ? (
            <Image
              src={about.photo}
              alt={site.name}
              fill
              className="rounded-[2.3rem] object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-[2.3rem] bg-ink/90">
              <span className="eyebrow px-6 text-center text-cream/50">
                [YOUR PHOTO]
              </span>
            </div>
          )}
        </motion.div>

        <div>
          <p className="eyebrow mb-3 text-coral">About</p>
          <h2 className="mb-6 font-display text-4xl font-bold leading-tight text-cream md:text-5xl">
            Hi, I&apos;m {site.name.split(" ")[0]}.
          </h2>
          <p className="mb-10 max-w-lg text-lg leading-relaxed text-cream/70">
            {about.bio}
          </p>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-extrabold text-cream md:text-4xl">
                  {stat.value}
                </p>
                <p className="eyebrow mt-1 text-cream/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}