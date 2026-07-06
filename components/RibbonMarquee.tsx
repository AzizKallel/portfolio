import { ribbonWords } from "@/data/content";

const colors = ["bg-coral", "bg-violet", "bg-yellow"];
const textColors = ["text-ink", "text-cream", "text-ink"];

export default function RibbonMarquee() {
  const loop = [...ribbonWords, ...ribbonWords];

  return (
    <div className="relative z-20 -my-8 w-full overflow-hidden py-2 md:-my-10">
      <div className="-rotate-2 shadow-[0_0_60px_rgba(0,0,0,0.4)]">
        <div className="flex w-max animate-marquee items-stretch gap-0">
          {loop.map((word, i) => (
            <div
              key={`${word}-${i}`}
              className={`flex items-center gap-3 whitespace-nowrap px-6 py-1.5 md:px-8 md:py-2 ${
                colors[i % colors.length]
              } ${textColors[i % colors.length]}`}
            >
              <span className="font-display text-sm font-bold tracking-tight md:text-xl">
                {word}
              </span>
              <span className="text-lg md:text-2xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
