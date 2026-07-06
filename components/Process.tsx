"use client";

import { motion } from "framer-motion";
import { process } from "@/data/content";

export default function Process() {
  return (
    <section id="process" className="bg-ink px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow mb-3 text-yellow">How it works</p>
        <h2 className="mb-16 max-w-xl font-display text-4xl font-bold leading-tight text-cream md:text-5xl">
          A repeatable path from unclear to unmistakable.
        </h2>

        <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
          {process.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col gap-4 py-8 md:flex-row md:items-center md:gap-10 md:py-10"
            >
              <span className="font-display text-3xl font-bold text-cream/20 transition-colors group-hover:text-coral md:w-24 md:text-4xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl font-bold text-cream md:w-72">
                {item.step}
              </h3>
              <p className="max-w-xl text-cream/60">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
