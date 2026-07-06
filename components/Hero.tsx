"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { site } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink pb-24 pt-32 md:pt-40"
    >
      {/* ambient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-coral/30 blur-[100px] animate-blob md:h-96 md:w-96"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/3 h-64 w-64 rounded-full bg-violet/30 blur-[100px] animate-blob md:h-[28rem] md:w-[28rem]"
        style={{ animationDelay: "-4s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-yellow/20 blur-[100px] animate-blob"
        style={{ animationDelay: "-8s" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow" />
          </span>
          <span className="eyebrow text-cream/80">{site.availability}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-5xl font-display text-[13vw] font-extrabold leading-[0.95] tracking-tight text-cream sm:text-[9vw] md:text-[6.4vw]"
        >
          I turn expertise into a{" "}
          <span className="text-coral">brand</span> people{" "}
          <span className="text-outline">remember.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 max-w-xl text-lg text-cream/70 md:text-xl"
        >
          {site.subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            View my work
            <ArrowDown
              size={16}
              className="transition-transform group-hover:translate-y-0.5"
            />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 font-semibold text-cream transition-all hover:border-coral hover:bg-coral hover:text-ink"
          >
            Book a call
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
