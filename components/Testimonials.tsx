import Image from "next/image";
import { testimonials } from "@/data/content";

const cardColors = ["bg-coral", "bg-violet", "bg-yellow"];
const textColors = ["text-ink", "text-cream", "text-ink"];
const mutedColors = ["text-ink/60", "text-cream/60", "text-ink/60"];

function initials(name: string) {
  return name
    .replace(/[\[\]]/g, "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="overflow-hidden bg-ink py-28 md:py-36">
      <div className="mx-auto mb-16 max-w-7xl px-6 md:px-10">
        <p className="eyebrow mb-3 text-violet">What clients say</p>
        <h2 className="max-w-xl font-display text-4xl font-bold leading-tight text-cream md:text-5xl">
          Results people talk about.
        </h2>
      </div>

      <div className="group">
        <div className="flex w-max animate-marquee-slow gap-6 px-6 group-hover:[animation-play-state:paused] md:px-10">
          {loop.map((t, i) => {
            const c = i % cardColors.length;
            return (
              <div
                key={`${t.name}-${i}`}
                className={`flex w-[340px] shrink-0 flex-col justify-between rounded-3xl p-8 md:w-[400px] ${cardColors[c]}`}
              >
                <p className={`mb-8 text-lg leading-relaxed ${textColors[c]}`}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  {t.avatar ? (
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={44}
                      height={44}
                      className="h-11 w-11 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink/15 font-display text-sm font-bold ${textColors[c]}`}
                    >
                      {initials(t.name)}
                    </span>
                  )}
                  <div>
                    <p className={`font-display font-bold ${textColors[c]}`}>
                      {t.name}
                    </p>
                    <p className={`text-sm ${mutedColors[c]}`}>{t.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
