"use client";

import { motion } from "framer-motion";
import { services } from "@/data/content";

const accents = ["group-hover:bg-coral", "group-hover:bg-violet", "group-hover:bg-yellow"];

export default function Services() {
  return (
    <section id="services" className="bg-ink px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-3 text-coral">What I do</p>
            <h2 className="max-w-xl font-display text-4xl font-bold leading-tight text-cream md:text-5xl">
              A full brand engine, not a single deliverable.
            </h2>
          </div>
          <p className="max-w-sm text-cream/60">
            Every service plugs into the same positioning so your brand feels
            consistent everywhere people find you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative flex min-h-[220px] flex-col justify-between bg-ink p-8 transition-colors duration-300 hover:bg-white/[0.03]"
            >
              <div className="flex items-start justify-between">
                <span className="eyebrow text-cream/30">{service.tag}</span>
                <span
                  className={`h-3 w-3 rounded-full bg-white/10 transition-colors duration-300 ${accents[i % accents.length]}`}
                />
              </div>
              <div>
                <h3 className="mb-2 font-display text-xl font-bold text-cream">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-cream/60">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
