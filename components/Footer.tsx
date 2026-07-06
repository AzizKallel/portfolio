import { site, nav } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="font-display text-lg font-bold text-cream">
          {site.name}
          <span className="text-coral">.</span>
        </p>

        <ul className="flex flex-wrap justify-center gap-6">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="eyebrow text-cream/50 transition-colors hover:text-cream"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="eyebrow text-cream/40">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
