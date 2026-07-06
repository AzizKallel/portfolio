"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { site, nav } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-cream"
        >
          {site.name.split(" ")[0]}
          <span className="text-coral">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="eyebrow text-cream/70 transition-colors hover:text-cream"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center gap-1.5 rounded-full bg-coral px-5 py-2.5 eyebrow font-semibold text-ink transition-transform hover:-translate-y-0.5 hover:scale-[1.03] md:inline-flex"
        >
          Let&apos;s talk
          <ArrowUpRight size={14} strokeWidth={2.5} />
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-cream md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink/95 px-6 pb-8 pt-4 backdrop-blur-lg md:hidden">
          <ul className="flex flex-col gap-5">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="eyebrow text-cream/80"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-coral px-5 py-2.5 eyebrow font-semibold text-ink"
          >
            Let&apos;s talk
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </a>
        </div>
      )}
    </header>
  );
}
