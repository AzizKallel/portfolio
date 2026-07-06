"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Check } from "lucide-react";
import { site } from "@/data/content";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink px-6 py-28 md:px-10 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-coral/20 blur-[120px]"
      />
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <p className="eyebrow mb-3 text-yellow">Let&apos;s work together</p>
          <h2 className="font-display text-5xl font-extrabold leading-[0.95] text-cream md:text-7xl">
            Let&apos;s build a brand
            <br />
            people <span className="text-coral">remember.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="mb-6 text-cream/60">
              Prefer to skip the form? Reach out directly or book a call.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mb-4 flex items-center gap-3 font-display text-lg font-semibold text-cream transition-colors hover:text-coral"
            >
              <Mail size={20} /> {site.email}
            </a>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-cream transition-colors hover:border-coral hover:text-coral"
            >
              Book a call <ArrowUpRight size={16} />
            </a>

            <div className="mt-10 flex gap-4">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eyebrow text-cream/50 transition-colors hover:text-cream"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 md:col-span-3"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                name="name"
                required
                placeholder="Your name"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-cream placeholder:text-cream/40 focus:border-coral"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Your email"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-cream placeholder:text-cream/40 focus:border-coral"
              />
            </div>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your brand and what you're looking for..."
              className="resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-cream placeholder:text-cream/40 focus:border-coral"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-coral px-6 py-4 font-semibold text-ink transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {status === "sent" ? (
                <>
                  Message sent <Check size={18} />
                </>
              ) : status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  Send message <ArrowUpRight size={18} />
                </>
              )}
            </button>
            {status === "error" && (
              <p className="text-sm text-coral">
                Something went wrong — email me directly at {site.email}.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
